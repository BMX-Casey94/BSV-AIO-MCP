---
title: "Multicast as the Only Viable Architecture for Billion-Transaction Networks"
date: 2025-08-18
slug: multicast-as-the-only-viable-architecture
url: https://singulargrit.substack.com/p/multicast-as-the-only-viable-architecture
themes: [scaling-throughput, networking, spv-light-clients, mining-consensus]
---

# Multicast as the Only Viable Architecture for Billion-Transaction Networks
**Date:** 2025-08-18 | **URL:** https://singulargrit.substack.com/p/multicast-as-the-only-viable-architecture
**Subtitle:** Because nothing says “scalable” like wasting 26 terabits per second to prove you can’t count past three hops

## Core thesis
At a billion transactions per second, gossip-style broadcast is not merely inefficient but physically impossible; multicast — one stream replicated only at branch points — is the sole architecture consistent with the arithmetic. Paired with SPV proofs and interest-based filtering at the edge, multicast is an engineering mandate for any digital-cash network at global scale, not an optional optimisation.

## Key arguments and claims
- The workload: 1 billion tx/s, modelled as 90% small (250-byte) and 10% large (1,000-byte) transactions, gives a 325-byte weighted mean — 325 gigabytes per second, a sustained 2.6 Tb/s firehose.
- Distribution target: 20 block-producing miner/data nodes plus 1,000 exchanges (1,020 receivers), each reached within a hard ceiling of three hops to contain orphan risk and latency tails.
- Hardware reality: 2.6 Tb/s demands roughly 26 saturated 100-GbE ports, four fully utilised 800-GbE ports, or multiple bleeding-edge 1.6-TbE interfaces — per full-payload receiver, continuously.
- Gossip's arithmetic failure: reaching ~1,000 receivers in ≤3 hops requires fanout g ≈ 10, so the source uplink becomes g × D = 26 Tb/s — an order of magnitude beyond any commercial uplink; ideal transmissions (10 + 100 + 1,000 = 1,110) already exceed the multicast minimum, and a conservative 30% redundancy inflates them to ≈1,443, about 1.42× the optimal tree.
- Multicast's arithmetic: the source uplink stays fixed at D = 2.6 Tb/s; a spanning tree over R = 1,020 receivers has R−1 = 1,019 edges, each carrying exactly one copy; total link-work (R−1) × D is the provable floor, and adding receivers scales linearly.
- Historical warrant: IP multicast was standardised in RFC 1112 (1989) and proven at global scale by the MBone; mass deployment stalled on ISP billing models and control politics, not performance.
- SPV quantified: a ten-minute block at 1e9 tx/s holds ≈6×10¹¹ transactions; Merkle depth ≈ log₂(6×10¹¹) ≈ 39 levels × 32 bytes ≈ 1,248 bytes, so a proof is ~1.3 KB alongside the 80-byte header; an exchange handling a million customer tx/s needs ≈1.3 GB/s of proof traffic instead of 2.6 Tb/s.
- Role separation is non-negotiable: only the ~20 miners drink the firehose; exchanges, wallets and services subscribe by interest and verify by proof — "everyone a full node" would reserve participation to the richest organisations and so create the very inequality it protests.
- Recovery: multicast uses forward error correction plus NACK-based retransmission along deterministic tree paths with bounded tail latency; gossip suffers replay storms, head-of-line blocking, backpressure loops and unbounded latency variance.
- Epilogue inversion: gossip centralises (only vast uplink budgets survive its waste), while subscription-driven multicast minimises exposure and so protects privacy by design; "Decentralisation without multicast is theatre."

## How Craig reasons (his model/logic)
First-order bandwidth arithmetic and hardware comparison, treated as non-negotiable physics rather than ideology. He establishes a lower bound ((R−1) × D), shows gossip exceeds it structurally while multicast meets it exactly, and reinforces the engineering with networking history. Decentralisation itself is reframed as an outcome of efficiency: structure, not noise, is what lets many participate.

## Where this contradicts BTC-mainstream logic
- Direct assault on the "everyone validates everything" full-node ethos central to BTC culture: at scale it is a category error and a recipe for oligarchy.
- Dismisses the gossip/mempool relay model BTC actually uses as fit only for "academic simulations and romantic manifestos, not for the architecture of money".
- Vindicates the whitepaper's original division of labour — miners need everything, end-users need only proofs (SPV) — against the later full-node dogma.
- Recasts small-block "decentralisation" rhetoric as self-defeating: waste centralises; efficiency decentralises.

## Notable quotes
- "The problem is not ideological but physical."
- "It is the architecture of the playground rumour, not the high-speed exchange."
- "Efficiency is not a betrayal of decentralisation—it is its foundation."
- "Decentralisation without multicast is theatre."

## Connections
Followed two days later by *Multicast Within Multicast*, which supplies the anycast ingress, hash-based naming and shard-resend mechanics this essay mandates; the billion-transaction premise underwrites the micropayment economy argued in *Pennies and Power*.
