# BLOCK_PROCESSED completeness: telling arcade which STUMPs to expect

> Supersedes the recommendation in `callback-topic-partition-design.md`. That
> document explored widening the `callback` topic and proposed a merkle-side
> "terminal-count" delivery barrier on the assumption that a dropped STUMP shows
> up as a **visible** error in arcade. **That assumption is wrong** (confirmed by
> the arcade team), which changes the plan. This doc is the corrected design.

## The problem, in one paragraph

When arcade receives a `BLOCK_PROCESSED` callback for a block, it immediately
builds the compound BUMP from the STUMPs it has, marks the block done
(`processed_at`), and prunes. STUMPs are **sparse** — only subtrees that contain
a tracked transaction produce one — so a subtree with no STUMP looks identical
to arcade whether it legitimately had no tracked txs or its STUMP was lost. As a
result, any STUMP that hasn't arrived by the time `BLOCK_PROCESSED` lands is
**silently** dropped: the BUMP still validates, the affected transactions just
never reach MINED, and the watchdog can't recover them because `processed_at` is
already stamped. Arcade only warns when a block's **entire** STUMP set is missing
(`arcade_bump_builder_empty_stump_blocks_total`), never the realistic
one-of-many case.

## This is a pre-existing bug, not just a widening blocker

It happens **today, at one partition**, whenever a STUMP is dead-lettered, or
gets a transient 5xx and is retried onto the tail of the topic after
`BLOCK_PROCESSED`. Widening the `callback` topic would make it far more frequent
(every cross-partition reordering becomes a loss), which is why we have kept
`callback` at one partition — but the hole is already open and worth closing on
its own merits.

## Why a merkle-only fix can't work

The earlier design tried to gate `BLOCK_PROCESSED` on the merkle side until every
STUMP for a block reached a terminal state (delivered or dead-lettered). The
fatal knot: when a STUMP genuinely cannot be delivered, merkle must either
release `BLOCK_PROCESSED` (silent loss) or hold it forever (wedge the block).
There is no good answer **because arcade cannot tell a missing STUMP from a
legitimately-absent one**. The only way to untie it is to give arcade that
knowledge.

## The fix (agreed approach)

**Merkle tells arcade exactly which subtrees should have a STUMP for each
callback URL.** Then arcade can check completeness before finalizing, wait
briefly for stragglers, and recover the rest — instead of stamping `processed_at`
blind.

### Merkle side (this work)

Add a new field to the `BLOCK_PROCESSED` payload: the **set of subtree indices
that produced a STUMP for that callback URL**, in this block.

- An **index set** (not just a count) so arcade can pinpoint *which* STUMP is
  missing, not merely that something is.
- Additive and `omitempty`; older arcade builds ignore it.
- The existing `subtreeHashes` / `subtreeCount` fields are the *total* subtree
  set — not the expected-STUMP set — because STUMPs are sparse. This new field is
  the per-URL subset that actually produces STUMPs.

How merkle computes it: as each subtree worker processes a subtree, it already
computes `result.CallbackGroups` — the URLs that matched a tracked tx in that
subtree. For each matched URL, it records this subtree's index into a per-
`(block, URL)` set in Aerospike. When the per-block subtree counter drains to
zero and `BLOCK_PROCESSED` is emitted, merkle reads each URL's set and includes
it in that URL's payload. A URL with no matches in the block gets an empty set
(arcade then expects zero STUMPs — correct).

This reuses the patterns we already trust:
- Idempotent under retries: the index is added to a **set** (add-if-absent), so a
  re-driven work item never double-counts.
- TTL re-stamped on every write and sized to outlive the longest block drain,
  exactly like the subtree counter.

**Cost and gating.** Recording an index per (subtree, matched-URL) adds Aerospike
write load on the MINED hot path. The writes are batched per subtree (one
operation across that subtree's matched URLs), not one at a time.

The gating shipped differently from the plan above: the feature went live
**unconditionally** in v0.4.5 (#162), before any flag existed, and its write
load has been absorbed in production since. The flag was added retroactively as
`block.emitExpectedStumpSet` (env `BLOCK_EMIT_EXPECTED_STUMP_SET`), **default
on** — deliberately diverging from the original "default off" rollout gate: it
is an emergency off-switch for the hot-path write load, not an enablement lever.
Disabling it turns off **both** the recording and the attach together. That
coupling is a correctness requirement, not a convenience: attaching a set that
was never written would ship an *empty* expected set, telling the receiver to
expect zero STUMPs — which reintroduces the exact silent-loss bug this feature
exists to fix.

### Arcade side (separate, owned by the arcade team)

1. On `BLOCK_PROCESSED`, compare the received STUMPs against the expected index
   set. If complete, finalize as today.
2. If incomplete, **do not stamp `processed_at` yet.** Wait a short grace window
   (covers the common case — a straggler STUMP still in flight).
3. If still incomplete after the bound, recover via merkle's existing
   **block-level `POST /reprocess {blockHash, callbackUrl}`**, which re-drives the
   whole block and re-emits all its STUMPs (and `BLOCK_PROCESSED`) to that URL.
   There is no per-STUMP re-request; reprocess is the recovery lever. (Requires a
   DataHub that still has the block — true for recent blocks.)

## Why this is the right shape

- It closes the silent-loss hole for **both** the pre-existing case (dead-lettered
  / late STUMPs today) and the reordering case that widening would introduce.
- It moves the completeness check to where the knowledge lives (arcade), so
  merkle's job is to **report a fact**, not to perfectly orchestrate delivery
  order — simpler and more robust than a cross-partition delivery barrier.
- Once it ships and is enabled, ordering on the `callback` topic stops mattering,
  so merkle can finally widen `callback` for delivery throughput — the original
  goal — with no correctness risk.

## Recovery mechanism reference (merkle API today)

- `POST /watch` — register `(txid, callbackUrl)`. Transaction-level.
- `POST /reprocess {blockHash, callbackUrl}` — block-level re-drive; re-emits all
  of a block's STUMPs + `BLOCK_PROCESSED` to the given URL, clearing reprocess
  dedup. The recovery lever for a detected-incomplete block.
- No per-STUMP / per-subtree re-request exists. A narrow "re-emit STUMP for
  `(blockHash, subtreeIndex)`" endpoint is a possible future optimization if
  block-level reprocess proves too heavy, but is not needed for the rare miss.

## Rollout

1. Ship the merkle field + aggregation. — **Shipped** in v0.4.5 (#162),
   always-on (the planned flag was not implemented at the time). The
   `block.emitExpectedStumpSet` flag was added retroactively as a
   **default-true off-switch**; see "Cost and gating" above for the
   divergence rationale.
2. Arcade ships detection + grace-wait + reprocess recovery, consuming the
   field. — **Shipped** in arcade v0.9.10 (reads the field, defers
   finalization when the STUMP set is incomplete).
   Skip-the-grace-window-when-complete is **in progress**.
3. Enable the flag in an environment where both sides are deployed; verify
   arcade detects and recovers an injected missing STUMP. — **Overtaken by
   events**: the merkle side has been effectively enabled everywhere since
   v0.4.5, and the retroactive flag defaults on.
4. Only then, widen `callback` (separate change) for delivery throughput. —
   **Still deferred** until step 2's skip-grace change is verified in
   production.
