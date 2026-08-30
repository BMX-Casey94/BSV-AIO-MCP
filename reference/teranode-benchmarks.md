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

## Wright (Exeter): 79.09 billion TPS fleet-scale measurement (2026 preprint)

- **Paper:** "Horizontal Scaling of UTXO-Based Transaction Processing:
  Architecture, Empirical Validation, and Fleet-Scale Projection",
  Craig S. Wright (University of Exeter). SSRN preprint, DOI
  10.2139/ssrn.6341941 (written 27 April 2026; posted August 2026).
  **Status: preprint in peer review — not yet peer-reviewed.**
- **Headline result:** a 100-node fleet across 10 geographic regions sustained
  **79.09 × 10⁹ pipeline-processed TPS at peak** (scaling efficiency η = 0.783);
  the more conservative measured figure is ≈61.2 × 10⁹ TPS.
- **Idealised conditions (must be quoted with the headline):** DRAM-resident
  P2PKH workload, compact gRPC injection, reduced proof-of-work difficulty,
  within a **single administrative trust domain**. Byzantine faults and
  open-network P2P ingress were **out of scope**. The paper does not claim
  end-to-end throughput on the public BSV network.
- **Production-realistic projection:** ≈**33 × 10⁹ TPS** (95% CI:
  [19, 48] × 10⁹) once NVMe-spill UTXO storage, P2P ingress overhead, and a
  mixed transaction workload are modelled. This figure is a projection, not a
  measurement.
- **Safety result:** zero double-spend violations across 520 million UTXOs with
  12.8 million deliberate double-spend attempts injected.
- **Architecture measured:** Teranode decomposed into fourteen microservices
  connected by Apache Kafka with a shared Aerospike UTXO store, operating under
  crash-fault semantics.
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
  conditions, single administrative trust domain; **preprint in peer review**).
  Its production-realistic projection is ≈33 × 10⁹ TPS.
- Neither figure is a live public-network measurement; both are
  controlled-environment results and must be presented as such.
