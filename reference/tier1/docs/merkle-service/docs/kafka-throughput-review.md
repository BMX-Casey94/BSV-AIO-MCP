# Kafka Throughput Review: merkle-service at 1.5M+ TPS

**Scope:** Can the sarama→franz-go (kgo) pipeline keep up with a 1.5M+ TPS teranode *with ease*, and exactly what to change.
**Method:** 6 expert lenses, adversarially cross-verified, hypotheses H1–H6 plus scout-missed findings.

---

## 1. Verdict

**No — not today, and not because of Kafka.** Kafka message transport is nowhere near the limit: at 1.5M TPS the total cross-topic message rate is only **~300–800 msgs/s** (Section 2). The binding constraints are per-message **side-effects executed inside consumer handlers** and a set of correctness/concurrency regressions introduced by the franz migration.

There are two distinct classes of problem:

1. **A correctness regression that is a release blocker regardless of throughput (F-2 below):** on any transient handler error, the failed record and the rest of its fetched batch are **permanently lost** as soon as a later record on the same partition commits. This silently downgrades the entire service from at-least-once to at-most-once and breaks the F-021/F-030 durability contract the callback pipeline is built on. This must be fixed before anything else, at any TPS.

2. **A concurrency regression that caps real-world throughput (F-1):** the franz consumer runs every handler for every owned partition **sequentially in one goroutine**, where sarama ran one goroutine per claimed partition. This is a no-op when `replicas == partitions`, but at the documented production shape (`replicas < partitions`: subtree-fetcher 4 over 16, subtree-worker 16 over a 256-partition example) it divides per-pod handler concurrency by partitions-per-pod (4×–16×), and it makes every in-handler sleep (callback retry up to 2s, DLQ backoff up to 3.5s) freeze **all** partitions a pod owns instead of one.

**Binding constraint stage at 1.5M TPS (ranked):**
1. **SEEN path** — per-registered-txid sequential Aerospike `Increment` (2 RTTs each) inside the subtree handler; `~500–1000 txids/s per instance`. Plus the whole-subtree `BatchGet` that **fails outright** on teranode-default 1M-txid subtrees (Aerospike `batch-max-requests`=5000).
2. **Callback delivery** — inline HTTP POST + 2 Aerospike dedup RTTs, now serial *per pod*; one slow/dead endpoint head-of-line-blocks the whole pod.
3. **Fan-out produce** — `ProduceSync` one record at a time at `linger=0`; serial RTT-per-message loops.
4. **Kafka transport / fetch tuning** — not a constraint (H6 refuted).

**Post-fix ceiling:** With (a) the F-030 loss fixed, (b) goroutine-per-partition handlers restored, (c) per-txid Aerospike loops batched (`BatchOperate`), (d) `BatchGet` chunked to ≤5k keys, and (e) fan-out collapsed to variadic `ProduceSync`, the pipeline becomes bound by **Aerospike cluster capacity (~k×r×1.5M ops/s) and downstream HTTP receiver capacity**, not by merkle's code or by Kafka. At that point "with ease" is a function of Aerospike node count and callback-endpoint speed, both external to this service. Kafka never becomes the limiter.

**Important caveat on the "92k txids/sec validated" baseline:** that scale test ran on **1-partition auto-created topics** with localhost HTTP and a memory blob store, exercised only the MINED path (no SEEN/fetcher), and used 4,000-txid fixture subtrees (~262× smaller than teranode-default 1M). Under 1 partition, sarama also had concurrency 1, so the H1 regression does **not** make 92k irreproducible — but 92k validates almost nothing about production-shape behavior: it never touched the SEEN per-txid loop, never hit a 1M-key `BatchGet`, and the `deliveryWorkers: 256` it set is dead config. Do not treat 92k as evidence of 1.5M-TPS readiness.

---

## 2. Capacity model

**Labeled assumptions:**
- **A1:** teranode emits ~1 subtree/s; teranode-default subtree size is **1,048,576 txids** (`settings.go:265`), so ~1.5 subtrees/s of ~1M–1.5M txids each; ~600–900 subtrees/block at the 1.5M-TPS / 10-min-block shape.
- **A2:** `U` = number of registered callback URLs (mega fixture uses ~100); `r` = registration ratio (fraction of txids on `/watch`-registered addresses; mega fixture = 100%, prod unknown); `k` = observations per registered txid across distinct subtree announcements (≥1).
- 1.5M TPS itself appears **nowhere in the repo** — it is the external target for this review. All absolute replica counts below scale with it.

| Topic | Rate at 1.5M TPS | Notes |
|---|---|---|
| `subtree` (announcements) | ~1.5/s × peers | tiny claim-check refs |
| `block` | ~0.002/s | one per block |
| `subtree-work` | ~1.5/s average, **burst of 600–900 per block** | one per subtree |
| `callback` (SEEN + STUMP) | **~300–800/s total** | SEEN batched 5000 txids/chunk → ~300r/s; STUMP ~U×1.5/s → ~150/s; plus dedup'd retries |

**Conclusion:** total Kafka volume is **trivial** for franz/Kafka. The pipeline is bound by per-message side-effects, not transport:
- **SEEN path:** `k×r×1.5M` Aerospike increments/s (2 RTTs each), plus `~1M-key BatchGet` per uncached subtree.
- **Delivery:** ~300–800 HTTP POSTs/s, each gated by 2 Aerospike dedup RTTs.
- **Aerospike cluster** must independently sustain `~k×r×1.5M` writes/s + `~1.5M` reads/s/subtree — the true infrastructure spend.

---

## 3. Confirmed findings, ranked by throughput / correctness impact

> R = migration regression · P = pre-existing ceiling

### F-1 (CRITICAL, R) — Single-goroutine handler loop loses per-partition parallelism
**`internal/kafka/consumer.go:146-186, 228-262`**
`pollLoop` spawns one goroutine (`consumer.go:116-137`); `processRecords` iterates `fetches.EachPartition` and calls `handler(ctx,...)` inline, record by record, partition after partition. Sarama's `ConsumeClaim` (git `bc47ba9`) ran one goroutine **per claimed partition**.
**Impact:** per-pod handler concurrency drops from P (partitions owned) → 1. **Zero regression when replicas == partitions**; at documented shapes (subtree-worker 16 replicas / 256-partition example = 16× loss; subtree-fetcher 4/16 = 4× loss) and during every rebalance/scale-down/pod-failure transient, throughput divides by partitions-per-pod. Also: any in-handler sleep now freezes *all* owned partitions.
**Fix:** franz-go canonical goroutine-per-partition pattern — `kgo.OnPartitionsAssigned`/`OnPartitionsRevoked` spawn one worker goroutine per (topic,partition) fed by a bounded channel; `pollLoop` does `EachPartition` → non-blocking dispatch; `PauseFetchPartitions`/`ResumeFetchPartitions` for per-partition backpressure; `kgo.BlockRebalanceOnPoll()` + `AllowRebalance()` so partitions aren't revoked mid-handler. Each worker keeps the existing in-order, stop-on-first-error logic (F-030 preserved per-partition). See franz-go `examples/goroutine_per_partition_consuming`.

### F-2 (CRITICAL, R) — F-030/F-021 broken: handler failure does not stall the partition; failed + skipped records permanently lost
**`internal/kafka/consumer.go:177-184, 245-260`**
The code stops handling a partition's batch on first error, excludes those records from `committable`, and a comment claims they "will be redelivered on the next poll/rebalance." **That is sarama semantics, not franz.** kgo advances its in-memory fetch position when `PollFetches` returns records, independent of commits (`DisableAutoCommit` only disables *committing*). So after a failure at offset `o`: the rest of the batch was fetched but never handled; the next poll returns records *after* the batch end; `CommitRecords` later advances the committed offset **past `o`**. The failed record and the skipped tail are gone forever unless a rebalance/restart happens to intervene first. The migration plan flagged exactly this (`docs/sarama-to-franz-migration-plan.md:407`); the implementation only withheld commits.
**Impact:** silent permanent message loss on any transient Aerospike blip or retry/DLQ-producer hiccup, across **every** consumer. Effectively at-most-once. **Release blocker independent of TPS.**
**Fix:** on handler error for partition P at offset `o`: `client.PauseFetchPartitions(...)`, `client.SetOffsets` to rewind P to `kgo.EpochOffset` at `o` (this also purges already-fetched buffered records for P), backoff, `ResumeFetchPartitions`. Folds naturally into the F-1 per-partition worker. **Add the integration test the plan specified (`plan:521`): inject a mid-partition handler error, assert the failed offset and everything after is redelivered.** Zero steady-state cost (error path only).

### F-3 (CRITICAL, R) — Callback delivery: inline HTTP + in-handler sleeps now stall ALL partitions
**`internal/callback/delivery.go:274-421, 574-653`; sleeps at `:294-315` (≤2s `futureRetryWaitCap`) and `:515-519` (≤3.5s DLQ backoff)**
`handleMessage`→`processDelivery`→`deliverCallback` does dedup `Exists` (1 RTT) + STUMP blob read + HTTP POST (10s timeout) + dedup `Record` (1 RTT), all inline. Under F-1's single goroutine this is per-**pod**, not per-partition. With `backoffBaseSec=30`, every not-yet-due retry sleeps the full 2s cap; a backlog of K future-dated retries for one dead endpoint serializes K×2s, collapsing the whole pod to ~0.5 msg/s (or ~0.1 msg/s against a hanging endpoint that burns the 10s timeout). The F-059 scatter key spreads one bad URL across all partitions, so **every** replica degrades simultaneously.
**Impact:** at a healthy 50–200ms endpoint, ~5–20 deliveries/s/pod, ~20–80/s fleet at 4 replicas — vs the ~64-way concurrency operators *think* they configured. One bad arcade endpoint collapses an entire replica's throughput for all URLs.
**Fix:** F-1 per-partition workers restore partition-level concurrency (URL is the partition key → per-URL ordering preserved). **Never sleep in the consume path:** use `kgo.PauseFetchPartitions` for retry backoff instead of `time.Sleep`; republish-immediately for future retries rate-limited by a per-partition token bucket; make DLQ backoff ctx-aware. Then either wire `DeliveryWorkers` to the concurrent-partition-worker cap or delete it (see F-7).

### F-4 (CRITICAL, P) — Per-registered-txid sequential Aerospike `Increment` is the SEEN-path ceiling
**`internal/subtree/processor.go:644-654` → `internal/store/seen_counter.go:69,131`**
`emitBatchedSeenCallbacks` batches the SEEN *messages* (good) but then loops `for txid := range registeredTxids { seenCounterStore.Increment(...) }` one txid at a time. `Increment` = `Get` + generation-CAS `Operate` = **2 serial Aerospike RTTs** per txid → **~500–1000 txids/s per instance**. A 10k-registered-txid subtree pins the handler (post-F-1, the whole pod) ~10s.
**Impact:** dominant SEEN-path ceiling. At 1.5M TPS this needs `k×r×1500–3000` increment threads = that many partitions/replicas; even r=1% needs ~15–30 dedicated fetcher replicas just for increments. **The scale test never exercises this path.**
**Fix:** (1) collapse the common case to 1 RTT — single `Operate` combining `ListAppendWithPolicy(AddUnique|NoFail)` + `ListSize` + `Get(tfired)`, falling into read-CAS only when `size>=threshold && !fired`. (2) Batch across txids via aerospike-client-go v7 `BatchOperate` (`NewBatchWrite`) — one fan-out RTT per node for all of a subtree's registered txids; or at minimum a bounded errgroup (~32–64 workers). Preserve `firstErr`/F-058.

### F-5 (HIGH, P) — Whole-subtree `BatchGet` of up to ~1M keys in one call fails on real subtrees
**`internal/subtree/processor.go:504` (and `:542-549`; block path `lookupRegistrations`)**
`findRegisteredTxids` issues one `BatchGet` over the entire subtree txid list. At teranode-default 1M-txid subtrees, Aerospike `batch-max-requests` (default 5000/node) means any cluster smaller than ~210 nodes gets >5000 keys on some node and the call **fails deterministically** with `BATCH_MAX_REQUESTS_EXCEEDED` (code 151) on every retry → after `maxAttempts=10` the subtree is DLQ'd and all its SEEN/MINED callbacks are permanently lost.
**Impact:** **the service cannot process any teranode-default-sized subtree at all.** Even within the repo's stated "thousands of txids" scope, any subtree >5,000 txids on a single-node cluster already fails. The 250×4,000 mega fixture sits *just under* the limit, masking the bug.
**Fix:** chunk `BatchGet` into ≤5k-key slices through the existing `batchGetConcurrency`-bounded `batchSem`; surface per-chunk partial errors. Apply the same to the block path's combined uncached+cached `BatchGet`. **Add a production-shaped fixture (≥1M-txid subtrees)** to the generate-fixtures profile.

> **Empirical correction (verified against a live server):** the 5,000 default applies to the older Aerospike server lines; **server 8.x ships `batch-max-requests=0` (unlimited)**, so the deterministic failure only occurs on clusters running older versions or explicitly configuring the limit. Reproduced both ways on Aerospike 8.1.2: with `batch-max-requests=5000` set, a single 6,000-key batch fails (the server kills the violating connection — the client surfaces connection-pool exhaustion rather than the old code-151), while the chunked `BatchGet` over 12,345 keys succeeds; with the 8.x default, the unchunked call also succeeds. Chunking remains correct as a guard for limit-enforcing clusters and bounds per-call response memory.

### F-6 (HIGH, P) — Fan-out hot paths publish one record per `ProduceSync` call (RTT-serialized)
**`internal/kafka/producer.go:60-83,129`; loops at `block/processor.go:325-339`, `block/subtree_worker.go:514-540,623-652`, `subtree/processor.go:605-631`**
`kgoPublisher.Produce` wraps exactly one `*kgo.Record` in `client.ProduceSync` with `ProducerLinger(0)` and `acks=all`. `ProduceSync` batches across *concurrent* callers, but every fan-out loop is single-goroutine, so no batching ever happens. Per-caller ceiling = 1 record per broker-acked RTT.
**Impact:** a 1,000-subtree block costs ~1,000 sequential acked produces (~2s @2ms RTT, ~10s @10ms) in `processor.go:325-339`, during which (post-F-1) the entire block-topic consumer is frozen. At teranode-default 1M-txid subtrees (~860 subtrees/block) this is ~1.3s/block (~0.2% of a 600s interval) — benign at default sizing, but a real ceiling if subtrees are smaller. **Not a migration regression** (sarama `SendMessage` was identical); the cross-partition stall *is* the F-1 regression.
**Fix:** add `Producer.PublishBatch(records)` → one variadic `client.ProduceSync(ctx, recs...)` call; use `ProduceResults.FirstErr()` to preserve the abort-before-ack/redelivery contract. Collapses N RTTs to ~1 produce request per leader broker. **Do not** add `MaxProduceRequestsInflightPerBroker(5)` — kgo v1.21.2 rejects it at construction when idempotency is enabled (`kgo/config.go:250-255`); the variadic batch wins without it. Keep `ProducerLinger(0)`.

### F-7 (HIGH, P) — `callback.deliveryWorkers` is dead config
**`internal/config/config.go:273`** (set in `config.yaml:314`, `deploy/k8s/configmap.yaml:73`; recommended in `README.md:303`, `deploy/k8s/README.md:148`; read by nothing but `scale_test.go:278`)
Defined and advertised, read by **no runtime code**. The in-process worker pool was deliberately removed pre-migration (commit `17fb3d9`) for crash-durability — so this was already dead before franz.
**Impact:** operators capacity-plan against a knob that does nothing. README/k8s docs actively tell them to "increase deliveryWorkers." Capacity planning silently wrong.
**Fix:** either wire it as the cap on concurrent per-partition workers per pod (in the F-1 redesign), or **delete the key + its yaml/README entries** and document partition-count as the only delivery scaling lever.

### F-8 (HIGH, P) — `RegistrationStore.BatchUpdateTTL` is a serial per-txid `Touch` loop, not a batch
**`internal/store/registration.go:303-314`** (called from `subtree_processor.go:219-228`, runs by default — `postMineTTLSec=1800`)
Despite the name, it loops `UpdateTTL` (one `Operate(TouchOp)` per key). N serial RTTs where N = registered txids; 10k txids = ~5–10s blocking, inline in the subtree-worker hot path. Failures are warn-only, so the latency buys nothing on failure.
**Fix:** single `BatchOperate` with `NewBatchWrite(policy, key, TouchOp())` and `BatchWritePolicy.Expiration` (1 RTT/node fan-out). Or, since failures are tolerated, move off the hot path to a bounded fire-and-forget worker.

---

## 4. Prioritized action plan

Ranked by impact-per-effort. **P0 items are blockers for any production traffic, not just 1.5M TPS.**

### P0 — Correctness / cannot ship without
| # | Action | Effort | Buys |
|---|---|---|---|
| 1 | **F-2:** pause + `SetOffsets`-rewind on handler error; add the mid-partition-error redelivery integration test | M (~1–2 days) | Stops silent permanent message loss; restores at-least-once / F-021. **Blocker.** |
| 2 | **F-5:** chunk `BatchGet` to ≤5k keys (both subtree and block paths); add a 1M-txid fixture | M (~1–2 days) | Lets the service process teranode-default subtrees *at all*. **Blocker.** |

### P1 — Throughput unlock at scale
| # | Action | Effort | Buys |
|---|---|---|---|
| 3 | **F-1 + F-3:** goroutine-per-partition consumer (assign/revoke hooks, per-partition channels, pause/resume backpressure, BlockRebalanceOnPoll); move retry/DLQ backoff to `PauseFetchPartitions` instead of `time.Sleep` | L (~3–5 days) | Restores P-way per-pod concurrency; removes pod-wide head-of-line blocking; folds in F-2's per-partition rewind. Single biggest throughput lever. |
| 4 | **F-4:** batch seen-counter increments (`BatchOperate`, or 1-RTT combined `Operate`) | M (~2–3 days) | 50–100× on the SEEN path; collapses required fetcher replicas ~100×. |
| 5 | **F-6:** variadic `PublishBatch` for the three fan-out loops | S (~1 day) | N RTTs → ~1 produce/leader; unfreezes block-topic consumer during fan-out. |

### P2 — Hygiene / operational correctness
| # | Action | Effort | Buys |
|---|---|---|---|
| 6 | **F-7:** wire or delete `deliveryWorkers`; fix README/k8s docs | S (<1 day) | Honest capacity planning. |
| 7 | **F-8:** real `BatchOperate` for `BatchUpdateTTL` (or move off hot path) | S (~1 day) | Removes 5–10s/subtree blocking on the worker. |
| 8 | **H2:** `AutoCommitMarks()` + `AutoCommitInterval(1s)` + `MarkCommitRecords` (replace sync `CommitRecords`) | S (~1 day) | Removes commit RTT from the hot loop; restores sarama's async-1s semantics. Do alongside #3. |
| 9 | **H5:** two-bounce cooperative-sticky migration (`CooperativeStickyBalancer()`+`RoundRobinBalancer()` then sticky-only) | M | Ends stop-the-world rebalances at high partition counts. |
| 10 | **Partitioner:** pin `StickyKeyPartitioner(SaramaCompatHasher(fnv32a))` **or** drain topics at cutover; fix the wrong `producer.go:137` comment | S | Avoids one-time STUMP/BLOCK_PROCESSED reordering at cutover (FNV-1a → murmur2 remap). |

**Bottom line on impact-per-effort:** P0 #1 and #2 are mandatory and cheap. P1 #5 (one API change) and #4 (batch increments) are the highest throughput-per-day. #3 is the largest job but is the keystone — it restores concurrency *and* hosts the F-2 fix and the H4 retry-sleep fix.

---

## 5. Tuning backlog (medium/low, unverified — do not action ahead of evidence)

- **H2 sync commit per poll** (`consumer.go:177`) — ~1 RTT/poll on the single thread; fixed by item #8 above (listed in P2 because it's free to fold into #3).
- **H5 eager RoundRobinBalancer** (`consumer.go:41`) — stop-the-world rebalances; item #9.
- **Partitioner hash change FNV-1a→murmur2** (`producer.go:137`) — item #10.
- **`Produce` uses `context.Background()`** (`producer.go:74`) — publishes uncancellable; thread caller ctx through `Publisher.Produce`. Low.
- **Subtree-fetcher does two `BatchGet`s per subtree** (`subtree/processor.go:489-556`) where the block path merges into one (`block/subtree_processor.go:261-281`) — port the union-lookup. Medium.
- **`CallbackAccumulatorStore` is dead code** (`store/callback_accumulator.go:43,82`) — no production `Append`/`ReadAndDelete` callers; provisions an unused Aerospike set + SQL tables. Delete or document. Low. (Note: this means the deploy/k8s README's "~24,400 → ~100 messages/block" batching model and the 92k validation rest on un-wired code — real callback volume is subtrees×URLs.)
- **Per-block subtree counter is a single hot Aerospike record** (`subtree_counter.go:87`) — acceptable at per-subtree granularity (~10k ops/block); flagged so it is never moved to per-txid. Low.
- **FileBlobStore whole-buffer, non-fsynced IO** (`file_blob.go:180,206`) — `os.WriteFile`/`ReadAll` buffer ~32MB/subtree and never fsync; a crash can lose blobs whose claim-check refs are already durable in Kafka → later STUMP-not-found DLQ. Stream + atomically rename + optionally fsync. Low.
- **Fetch-side tuning** (`consumer.go:34-56`) — **H6 refuted:** defaults (50MiB / 1MiB-per-partition / unbounded concurrent fetches) over-deliver for tiny claim-check messages. After #3, the *only* fetch concern is bounding prefetch memory: set `MaxConcurrentFetches(4-8)` and consider `FetchMaxBytes(16MiB)` on high-partition consumers. Not a throughput lever.
- **STUMP-before-BLOCK_PROCESSED ordering** (`delivery.go:94`) — the F-059 scatter key keys STUMPs by `subtreeHash|URL` and BLOCK_PROCESSED by `blockHash|URL` (different partitions), so the "delivered last" guarantee the comment claims does not hold cross-partition; only "published last" is guaranteed. Decide the contract explicitly (arcade tolerates it, or gate on dedup evidence). Medium.

---

## 6. Non-issues appendix (verified — do not re-raise)

- **H6 fetch tuning is a throttle** — **refuted.** kgo v1.21.2 defaults (50MiB fetch / 1MiB-per-partition / unbounded concurrent fetches) far outrun the handler loop for claim-check-sized messages. The real (future, post-#3) concern is *bounding* prefetch memory, the opposite of a throttle.
- **F-6 / H3 produce-per-record is a migration regression** — **refuted as a regression.** Sarama `SyncProducer.SendMessage` had identical 1-RTT-per-call semantics; it is a pre-existing ceiling. (The *cross-partition stall* during fan-out is the F-1 regression, correctly attributed there.)
- **`MaxProduceRequestsInflightPerBroker(5)` as a produce fix** — **rejected.** kgo v1.21.2 errors at client construction when idempotency is enabled (`kgo/config.go:250-255`). Use variadic `ProduceSync` instead.
- **The 92k-txids/sec scale result proves 1.5M-TPS readiness** — **false.** 1-partition topics (sarama also single-goroutine there), MINED-only path, no SEEN loop, no 1M-key BatchGet, localhost HTTP, memory blob store, 4,000-txid fixtures (~262× too small), and it set the dead `deliveryWorkers` knob.
- **Accumulator append contention is a hot-path concern** — **moot.** `CallbackAccumulatorStore` has no production callers (dead code).
- **`deliveryWorkers` is a franz-migration regression** — **no.** The worker pool was removed pre-migration (`17fb3d9`); the knob has been dead since then. (The *collapse to per-pod* concurrency is the F-1 regression.)
- **Teranode's franz producer/consumer config is the template to copy** — **no.** Teranode's fire-and-forget async producer, `DisableIdempotentWrite`, and `ManualPartitioner` trade away exactly the F-012/F-021 durability merkle requires; teranode's consumer is also sequential but its handlers are fast in-memory dispatch. Follow franz-go's goroutine-per-partition example, not teranode.

---

## 7. How to validate

**Methodology gap:** the current `test/scale/scale_test.go` validates almost nothing relevant — see §1 caveat. Before declaring 1.5M-TPS readiness:

1. **Production-shaped fixture.** Add a generate-fixtures profile with **≥1M-txid subtrees** (teranode default `1,048,576`) and realistic `r`. This alone would have caught F-5 (`BatchGet` >5000 keys) and exposes the F-4 increment loop and real blob/STUMP-build costs.

2. **Run topics with `partitions > replicas`** (the documented production shape, e.g. 16 replicas / 256 partitions) — *not* 1-partition auto-created topics — so the F-1 regression and per-pod head-of-line blocking are actually exercised.

3. **Include the SEEN path** (start the subtree-fetcher, exercise `emitBatchedSeenCallbacks`), which the current MINED-only test omits — this is the binding constraint.

4. **Inject a mid-partition handler error** and assert the failed offset *and everything after it* is redelivered (the F-2 test the migration plan specified at line 521). This is the single most important missing test.

5. **Fault-inject a slow/dead callback endpoint** and assert that other URLs/partitions on the same pod keep flowing (validates the F-3 fix).

**What to measure:**
- Per-pod **handler concurrency** (in-flight handlers) vs partitions owned — should equal partitions-owned after #3, was 1 before.
- **Consumer-group lag per topic** under sustained load — the true keep-up signal.
- **Aerospike ops/s** (`Increment`, `BatchGet`, `Touch`) and p99 latency — the real ceiling after code fixes.
- **HTTP delivery rate and p99** per pod; behavior under one dead endpoint.
- **Produce RTTs per block** (should drop ~1000× after #5).
- **Rebalance pause duration** on rolling deploy (validates #9).

---

## Executive summary

merkle-service cannot keep up with a 1.5M-TPS teranode today, and it has two problems that are independent of throughput. First and most urgent, the franz migration silently broke the at-least-once contract: on any transient handler error the failed record and the rest of its fetched batch are permanently lost as soon as a later record on the same partition commits (`consumer.go:177-184`), because kgo advances its fetch position regardless of commits — this is a release blocker at any TPS and needs a pause+`SetOffsets`-rewind fix plus the redelivery test the migration plan already specified. Second, the service cannot process a teranode-default 1M-txid subtree at all, because registration `BatchGet` issues one batch over the whole subtree and deterministically exceeds Aerospike's 5,000-key `batch-max-requests` limit (`subtree/processor.go:504`); it must be chunked to ≤5k keys, and the test suite must add a production-shaped fixture (the 4,000-txid mega fixture is ~262× too small and masks this). On throughput, Kafka transport is a non-issue — total volume at 1.5M TPS is only ~300–800 msgs/s — but the migration collapsed consumer concurrency from one goroutine per partition to one goroutine per pod (`consumer.go:146`), which divides per-pod throughput by partitions-per-pod whenever replicas < partitions and makes callback retry/DLQ sleeps freeze every partition a pod owns; the fix is franz-go's goroutine-per-partition pattern, which also cleanly hosts the loss fix and removes the head-of-line blocking. The dominant per-message cost is the SEEN path's sequential 2-RTT-per-txid Aerospike `Increment` loop (`subtree/processor.go:644`), capping ~500–1000 txids/s per instance and needing batching via `BatchOperate`. Cheapest high-value wins are the one-line-class variadic `ProduceSync` batch for fan-out (collapses ~1000 produce RTTs per block) and deleting/wiring the dead `deliveryWorkers` knob that operators are currently tuning to no effect. Prioritize P0 correctness (loss fix, BatchGet chunking), then P1 throughput (per-partition consumer, batched increments, batch produce); with those done the pipeline is bound by Aerospike and downstream HTTP capacity — both external — and Kafka never becomes the limiter. The "92k txids/sec validated" figure should not be trusted as readiness evidence: it ran on 1-partition topics, MINED-only, with localhost HTTP and tiny fixtures, exercising none of the binding constraints.
