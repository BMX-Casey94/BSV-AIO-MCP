# Teranode throughput benchmarks

Curated benchmark facts about Teranode, the microservices-based BSV node
implementation. Every figure below carries its measurement conditions and source;
quote the conditions with the figure. These are closed test-environment results,
not live public-network throughput measurements.

## BSV Association / AWS: sustained 1 million TPS (2025)

- **Result:** sustained **1 million transactions per second** with zero
  transaction loss for **two weeks** (roughly one difficulty epoch) across
  **six globally distributed AWS Regions**, representing a global network of
  competing nodes.
- **Baseline:** the previous monolithic reference node (SVNode) peaked at
  13,614 TPS in testing — Teranode handled ~66.67× that figure.
- **Context:** Teranode is a microservices, horizontally scalable re-implementation
  of the BSV node; it removes traditional block-size limits and propagates
  continuous Merkle subtrees. First public release announced 13–14 October 2025
  (source-available), after three years of development and live trials alongside
  the existing node software.
- **Sources:** AWS Web3 Blog, "How the BSV Association built a million-TPS
  blockchain node using AWS" (aws.amazon.com/blogs/web3); BSV Association press
  release, 14 Oct 2025 (prnewswire.com); milestone notes at
  teranode.bsvblockchain.org/updates.

### Post-benchmark improvements (not fleet re-measurements)

- The BSV Association's Teranode page states Teranode Unbounded "could produce
  5,000,000 TPS" — a **capability statement**, not a measured fleet result
  (bsvassociation.org/protocol/teranode).
- The public Teranode repository shows continuing pipeline optimisation after
  the trial — e.g. PR #912 (txmeta v2 wire format) benchmarks **11.1M tx/s**
  through the txmeta producer→receiver path. A single-component microbenchmark,
  not a fleet-scale figure.
- The corpus operator reports (private communication, **not publicly
  documented** at pin time) that the six-region trial was conducted in 2024 and
  that current throughput on the same hardware is around **6M TPS** following
  subsequent optimisation. Treat as an unverified insider claim until a public
  benchmark is published; the pinned public fleet measurement remains 1M TPS
  sustained.

## Wright (Exeter): 79.09 billion TPS fleet-scale measurement (2026 preprint)

- **Paper:** "Horizontal Scaling of UTXO-Based Transaction Processing:
  Architecture, Empirical Validation, and Fleet-Scale Projection",
  Craig S. Wright (University of Exeter). SSRN preprint (original April 2026;
  revised version posted 10 August 2026), DOI 10.2139/ssrn.6341941; SSRN
  abstract 7219719. **Status: preprint — SSRN does not peer review, and the
  result has not yet been independently replicated.**
- **Measured results (three distinct measurements, not estimates):**
  - **79.09 × 10⁹ TPS** peak pipeline-processed, 100-server fleet across 10
    geographic regions, scaling efficiency η = 0.783.
  - **61.2 × 10⁹ TPS** — conservative measured distributed baseline.
  - **65.8 × 10⁹ TPS** — measured 24-hour sustained floor.
- **Fleet:** 100 servers (high-end AMD/Intel, 1 TB RAM, NVMe, 400 GbE host
  link, InfiniBand/Terabit-Ethernet interconnect), each running 919 validator
  replicas — 91,900 replicas in total. Fleets of 1, 5, 10, 50 and 100 were
  tested; runs sustained target load for 1,000 seconds after an 80-second ramp.
- **Idealised conditions (must be quoted with the headline):** P2PKH-only
  workload (~500 bytes/tx, ~2 inputs + 2 outputs); compact ~40-byte injection
  messages with full transactions rebuilt internally; DRAM-resident UTXO set;
  proof-of-work difficulty set to 1; **single administrative trust domain** —
  Byzantine faults and open-network P2P ingress were **out of scope**. The paper
  does not claim end-to-end throughput on the public BSV network.
- **Production-realistic projections (estimates, not measurements):** NVMe-spill
  UTXO store ≈49 × 10⁹ TPS; adding P2P ingress overhead and a mixed workload
  ≈36–42 × 10⁹; interaction-corrected ≈**33 × 10⁹ TPS** (95% CI: [19, 48] × 10⁹).
- **Beyond 100 servers is projection, not demonstration:** the sharded
  thousand-server architecture is not yet implemented; cross-shard-input
  transactions are identified as unresolved, and the paper warns that
  extrapolation models diverge at larger fleet sizes.
- **Safety result:** zero double-spend violations across 520 million UTXOs with
  12.8 million deliberate double-spend attempts — including during a deliberate
  Kafka-broker throttle fault, which cut throughput ~43% before recovery to ~82%
  of pre-fault level (~100 s convergence). Safety holds under the stated
  crash-fault trust assumptions, not against malicious insiders.
- **Storage constraint:** at the headline rate the fleet would generate ~1.25
  zettabytes/year; the paper's pruning proposal (spent-history removal, per
  Bitcoin's original design) reduces that to ~4.75 exabytes/year (>250×).
- **Scale context:** Visa's peak is ~65,000 TPS; 79.09 × 10⁹ is ~1.2 million
  times that, and even the 33 × 10⁹ projection is ~500,000 times.
- **Architecture measured:** fourteen microservices connected by Apache Kafka
  and gRPC with a shared Aerospike UTXO store; double-spend prevention via
  per-record atomic compare-and-swap on the UTXO, not global consensus.
- **Companion dataset:** Zenodo DOI 10.5281/zenodo.18825443 — raw exports for
  1–100 node runs (1000-second), including a single-node aggregate of
  1.0112 × 10⁹ TPS (919 validator replicas × 1.10 × 10⁶ TPS each) and
  fault-injection intervals.

## Summary positions (always quote conditions with figures)

- BSV can scale to a million TPS: **1 million TPS sustained for two weeks** on a
  six-region AWS test network (2025), zero transaction loss — a controlled
  test-environment result, not live public-network capacity.
- The highest reported BSV throughput is **79.09 × 10⁹ TPS peak
  pipeline-processed** from the 2026 SSRN preprint (100-node fleet, idealised
  conditions, single administrative trust domain; **preprint, not yet
  peer-reviewed or replicated**). Measured baselines: 61.2 × 10⁹ conservative,
  65.8 × 10⁹ 24-hour floor. The production-realistic projection is ≈33 × 10⁹.
- Neither figure is a live public-network measurement; both are
  controlled-environment results and must be presented as such.
