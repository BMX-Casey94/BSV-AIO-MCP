  ---
  Arcade + Merkle Service Integration Design

  Overview

  Arcade is a BSV transaction broadcast and status tracking service. Merkle Service is an
   external service that monitors the blockchain for mined transactions and delivers
  cryptographic proofs (STUMPs) back to Arcade via HTTP callbacks. Together they provide
  end-to-end transaction lifecycle tracking: from submission through broadcast, mining
  confirmation, and final merkle proof construction.

  Architecture

                                      BSV Network
                                          |
                            +-------------+-------------+
                            |                           |
                       P2P Client                  Teranode
                      (block msgs,                (tx broadcast,
                       rejected txs)               block data)
                            |                           |
                            v                           v
  +-------------------------------------------------------------------------+
  |                            Arcade Service                                |
  |                                                                          |
  |  +------------------+    +---------------+    +----------------------+  |
  |  |   TxTracker      |    |    Store      |    |   EventPublisher     |  |
  |  |  (in-memory      |    |  (SQLite)     |    |  (fan-out to         |  |
  |  |   hash map)      |    |              |    |   webhooks + SSE)    |  |
  |  +------------------+    +---------------+    +----------------------+  |
  |                                                                          |
  |  +------------------+    +-------------------+                          |
  |  | Embedded Service |    | Callback Handler  |<--- HTTP POST            |
  |  | (submit, status) |    | /api/v1/merkle-   |     from Merkle Service  |
  |  +------------------+    | service/callback  |                          |
  |          |               +-------------------+                          |
  |          v                                                              |
  |  +------------------+                                                   |
  |  | Merkle Service   |--- POST /watch {txid, callbackUrl} ------------->|
  |  | Client           |                                                   |
  |  +------------------+                                                   |
  +-------------------------------------------------------------------------+
                                          |
                                          v
                                +-------------------+
                                |  Merkle Service    |
                                |  (external)        |
                                |                    |
                                |  Watches txids,    |
                                |  monitors blocks,  |
                                |  sends callbacks   |
                                +-------------------+

  Transaction Lifecycle

  Phase 1: Submission

  When a client submits a transaction via SubmitTransaction():

  1. Parse the raw transaction (BEEF format or raw bytes)
  2. Deduplicate via store.GetOrInsertStatus() — returns existing status if already known
  3. Validate against policy (fee rates, script rules, size limits)
  4. Track in TxTracker (in-memory O(1) hash map)
  5. Register with Merkle Service — POST /watch {txid, callbackUrl} (best-effort,
  non-blocking)
  6. Broadcast to Teranode endpoints concurrently, return first success

  Status: RECEIVED -> SENT_TO_NETWORK or ACCEPTED_BY_NETWORK

  Phase 2: Network Propagation (Merkle Service Callbacks)

  Merkle Service monitors the network and sends callbacks to Arcade's
  /api/v1/merkle-service/callback endpoint:

  SEEN_ON_NETWORK — Transaction detected in a miner's subtree
  - Payload: {type, txid}
  - Action: Update status to SEEN_ON_NETWORK, update TxTracker, publish event

  SEEN_MULTIPLE_NODES — Transaction seen by multiple miners
  - Payload: {type, txid}
  - Action: Publish event with extra info (informational only, no status change)

  Phase 3: Mining Confirmation (Per-Subtree STUMP Callbacks)

  When a block is mined containing tracked transactions, Merkle Service sends one STUMP
  callback per subtree (not per transaction). This is a key optimization — if a block has
   100 tracked transactions across 3 subtrees, only 3 callbacks are sent instead of 100.

  STUMP — Subtree Unified Merkle Path for a subtree
  - Payload: {type, blockHash, subtreeIndex, stump} (no txid)
  - The stump field contains BRC-74 binary-encoded subtree merkle path data

  Processing in handleStump():

  1. Parse STUMP binary via transaction.NewMerklePathFromBinary() to extract all level-0
  leaf hashes
  2. Filter tracked transactions via TxTracker.FilterTrackedHashes() — O(1) map lookup
  per hash, single RWMutex lock for the batch
  3. Update each tracked transaction to MINED status in the store, update TxTracker to
  STUMP_PROCESSING, publish event
  4. Store the STUMP once, keyed by (blockHash, subtreeIndex) with ON CONFLICT DO UPDATE
  for idempotency

  This design means:
  - Duplicate STUMPs for the same subtree (from retries or old merkle-service sending
  per-tx) are collapsed via the upsert
  - The number of SQLite writes scales with subtrees, not transactions — eliminating
  SQLITE_BUSY under load
  - Backward compatible: works whether or not the STUMP callback includes a txid field

  Phase 4: BUMP Construction

  BLOCK_PROCESSED — All STUMPs for a block have been delivered
  - Payload: {type, blockHash}
  - Triggers ConstructBUMPsForBlock()

  BUMP construction in ConstructBUMPsForBlock():

  1. Fetch all STUMPs for the block from the database
  2. Fetch block data from Teranode DataHub endpoints:
    - Primary: JSON endpoint /block/{hash}/json (returns subtree root hashes + coinbase
  BUMP)
    - Fallback: Binary endpoint (returns subtree root hashes only, no coinbase BUMP)
  3. Build compound BUMP via BuildCompoundBUMP():
    - For each STUMP, call AssembleBUMP() to construct a full block-level merkle path:
        - Parse STUMP binary
      - For subtree 0: replace coinbase placeholder hashes using the coinbase BUMP
      - Shift local subtree offsets to global block offsets
      - Add subtree root hashes at the tree's upper layers
      - Compute missing intermediate hashes
      - Extract minimal path per transaction
    - Discover tracked txids from level-0 hashes via TxTracker.FilterTrackedHashes()
    - Merge all individual paths into a single compound MerklePath, deduplicating by
  (level, offset)
  4. Store compound BUMP — one row per block in the bumps table
  5. Mark transactions as MINED via SetMinedByTxIDs() with the block hash
  6. Publish MINED events for each affected transaction
  7. Clean up STUMPs — delete all stump rows for this block

  Phase 5: Confirmation and Pruning

  As new blocks arrive via P2P:

  1. Chaintracks tip updates mark blocks as on_chain (canonical chain)
  2. Reorg detection identifies orphaned blocks:
    - Delete STUMPs for orphaned blocks
    - Reset affected transactions to SEEN_ON_NETWORK
    - Clear block hash associations
  3. Pruning after 100+ confirmations:
    - TxTracker.PruneConfirmed() removes deeply confirmed transactions from memory
    - Transactions marked IMMUTABLE in the store

  Status State Machine

  RECEIVED
      |
  SENT_TO_NETWORK ---> REJECTED
      |
  ACCEPTED_BY_NETWORK     DOUBLE_SPEND_ATTEMPTED
      |                   (can occur from any pre-mined state)
  SEEN_ON_NETWORK  <--- (reorg resets MINED back here)
      |
  STUMP_PROCESSING  (in TxTracker only, not persisted)
      |
  MINED
      |
  IMMUTABLE  (100+ confirmations, removed from TxTracker)

  Status transitions are guarded by DisallowedPreviousStatuses() in the SQL UPDATE query
  — preventing backward transitions (e.g., MINED cannot revert to SEEN_ON_NETWORK unless
  explicitly via reorg handling).

  Data Storage

  SQLite Tables

  ┌──────────────────┬──────────────────────┬─────────────────────────────────────────┐
  │      Table       │     Primary Key      │                 Purpose                 │
  ├──────────────────┼──────────────────────┼─────────────────────────────────────────┤
  │ transactions     │ txid                 │ Transaction status, block hash,         │
  │                  │                      │ competing txs                           │
  ├──────────────────┼──────────────────────┼─────────────────────────────────────────┤
  │ submissions      │ submission_id        │ Client callback registrations per       │
  │                  │                      │ submission                              │
  ├──────────────────┼──────────────────────┼─────────────────────────────────────────┤
  │ stumps           │ (block_hash,         │ Temporary STUMP storage between STUMP   │
  │                  │ subtree_index)       │ and BLOCK_PROCESSED callbacks           │
  ├──────────────────┼──────────────────────┼─────────────────────────────────────────┤
  │ bumps            │ block_hash           │ Compound BUMP (full block merkle proof  │
  │                  │                      │ containing all tracked txs)             │
  ├──────────────────┼──────────────────────┼─────────────────────────────────────────┤
  │ processed_blocks │ block_hash           │ Block tracking for reorg detection      │
  └──────────────────┴──────────────────────┴─────────────────────────────────────────┘

  Status Query Path

  When a client queries GET /tx/{txid}, the store joins transactions with bumps on
  block_hash. If a compound BUMP exists, extractMinimalPathForTx() extracts the
  per-transaction minimal merkle path from the compound BUMP and returns it in the
  response.

  Key Design Decisions

  Per-subtree STUMPs, not per-transaction. The Stump model has no TxID field. Transaction
   discovery happens at parse time via TxTracker.FilterTrackedHashes(). This means:
  - One SQLite write per subtree instead of N per transaction
  - Eliminates SQLITE_BUSY errors under concurrent STUMP callbacks
  - Idempotent upserts on (block_hash, subtree_index)

  Compound BUMPs. A single bumps row per block stores a compound MerklePath containing
  all tracked transactions. Per-transaction minimal paths are extracted at query time.
  This avoids storing N separate merkle paths per block.

  TxTracker as the source of truth for "what are we tracking." Both handleStump() and
  BuildCompoundBUMP() use TxTracker.FilterTrackedHashes() to discover which level-0
  hashes in a STUMP correspond to tracked transactions. The tracker is an in-memory
  concurrent hash map loaded from the store at startup.

  Best-effort Merkle Service registration. Registration failures are logged but don't
  block transaction broadcast. If registration fails, the transaction is still broadcast
  and can be re-registered later.

  Backward compatibility. The STUMP callback handler works with both old (per-tx with
  txid) and new (per-subtree without txid) Merkle Service implementations. The txid field
   is ignored; discovery always happens from STUMP parsing.
