---
title: "Multicast as the Only Viable Architecture for Billion-Transaction Networks"
era: substack
date: 2025-08-18
slug: multicast-as-the-only-viable-architecture
themes: [scaling-throughput, networking, spv-light-clients, mining-consensus]
source_summary: summaries/multicast-as-the-only-viable-architecture.md
url: https://singulargrit.substack.com/p/multicast-as-the-only-viable-architecture
---

# Multicast as the Only Viable Architecture for Billion-Transaction Networks — core principles

- **At a billion transactions per second, propagation is a physics problem, not an ideology.** Modelled as 90% small (250-byte) and 10% large (1,000-byte) transactions, the weighted mean of 325 bytes yields a sustained 325 GB/s — a 2.6 Tb/s firehose, roughly 26 saturated 100-GbE ports per full-payload receiver.
- **Gossip fails the arithmetic structurally.** Reaching ~1,000 receivers within three hops requires fanout g ≈ 10, so the source uplink becomes g × D = 26 Tb/s — an order of magnitude beyond any commercial uplink; even ideal gossip transmissions (1,110) exceed the multicast minimum, and 30% redundancy inflates them to ≈1,443, about 1.42× the optimal tree.
- **Multicast meets the provable floor exactly.** The source uplink stays fixed at D = 2.6 Tb/s; a spanning tree over R = 1,020 receivers has R−1 = 1,019 edges each carrying one copy, so total link-work (R−1) × D is the lower bound and adding receivers scales linearly.
- **IP multicast is proven, not speculative.** Standardised in RFC 1112 (1989) and demonstrated at global scale by the MBone; mass deployment stalled on ISP billing models and control politics, not performance.
- **SPV keeps the edge light.** A ten-minute block at 1e9 tx/s holds ≈6×10¹¹ transactions; Merkle depth ≈ 39 levels × 32 bytes ≈ 1,248 bytes, so a proof is ~1.3 KB beside the 80-byte header — an exchange handling a million customer tx/s needs ≈1.3 GB/s of proof traffic instead of 2.6 Tb/s.
- **Role separation is non-negotiable.** Only the ~20 block-producing miners drink the firehose; exchanges, wallets and services subscribe by interest and verify by proof — "everyone a full node" would reserve participation to the richest organisations and create the very inequality it protests.
- **Recovery must be deterministic.** Multicast uses forward error correction plus NACK-based retransmission along deterministic tree paths with bounded tail latency; gossip suffers replay storms, head-of-line blocking and unbounded latency variance.
- **Efficiency is the foundation of decentralisation, not its betrayal.** Gossip's waste centralises (only vast uplink budgets survive), while subscription-driven multicast minimises exposure and protects privacy by design — "Decentralisation without multicast is theatre."
