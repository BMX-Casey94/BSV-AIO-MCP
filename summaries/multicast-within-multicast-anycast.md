---
title: "Multicast Within Multicast: Anycast, Sharded Resends, and Hierarchical Distribution for Transaction and Block Propagation"
date: 2025-08-20
slug: multicast-within-multicast-anycast
url: https://singulargrit.substack.com/p/multicast-within-multicast-anycast
themes: [scaling-throughput, networking, mining-consensus]
---

# Multicast Within Multicast: Anycast, Sharded Resends, and Hierarchical Distribution for Transaction and Block Propagation
**Date:** 2025-08-20 | **URL:** https://singulargrit.substack.com/p/multicast-within-multicast-anycast
**Subtitle:** Designing a Naming, Hashing, and Subtree Allocation Framework for Scalable Transaction Dissemination and Ordered Consensus

## Core thesis
Billions of transactions per second cannot be propagated by gossip, unicast or mempool flooding. The only viable substrate is a layered fabric — anycast ingress, deterministic TXID/BlockID-to-group hashing, hierarchical "multicast within multicast" (baseline → shard → subtree), and sequenced shard-level resends — that makes loss immediately detectable, recovery bounded and targeted, and global ordering provable rather than probabilistic.

## Key arguments and claims
- Gossip's redundancy consumes bandwidth quadratically with node count and enforces no deterministic delivery path; unicast requires O(N) duplication per sender and lacks collective verification — a miner silently dropping 0.01% of transactions diverges with no signal; mempool flooding inherits the worst of both, "a stochastic rumour mill".
- Anycast ingress: wallets send to a canonical address replicated worldwide; routing delivers to the nearest ingress (a Nairobi wallet might enter via Johannesburg), minimising latency and balancing load without central assignment.
- Deterministic naming: the low-order k bits of the 256-bit TXID select the multicast group — k = 8 yields 256 groups, k = 16 yields 65,536 — each an IPv6 Source-Specific Multicast (SSM) address from a reserved organisational prefix; anyone can verify G = f(T), so mis-routed or spoofed packets are rejected; BlockIDs are mapped identically.
- The hierarchy: a baseline global group (block headers, minimal ordering metadata, coinbase and wide-dependency parent transactions) forms the spine; sharded groups derived from SHA-256(TXID) carry the bulk flow; subtree allocations (template IDs, application tags) permit finer, specialised subscription — a "tree of trees" that scales horizontally by adding hash bits.
- Shard resend algorithm: each shard keeps an independent monotonic sequence space, so "Sequence discontinuity is proof of loss"; subscribers NACK the shard's designated resend endpoint (the injecting ingress node or manifest-announced mirrors) for only the missing numbers, replayed from a short-term buffer.
- Anti-spoofing and fairness: packets are bound to (shard_id, sequence_number, payload_hash), so resends cannot masquerade as new data; a bounded repair horizon (around sixty seconds) gives every subscriber equal repair opportunity; per-subtree numbering prevents one flow starving or reordering another.
- Blocks as first-class citizens: the header goes to the baseline group while the payload is segmented into shard-subtree streams with a secondary block-segment sequence space; per-shard Merkle subtrees compose the block's global Merkle root, so miners verify commitments against transactions they already hold instead of re-flooding gigabytes.
- Miner-specific substreams: subscription profiles may differ (full coverage, selected shards, single application templates), but the TXID → shard → subtree → sequence mapping is universal — ordering is enforced deterministically, not inferred probabilistically.
- Convergence guarantee: every subscriber either holds the complete ordered sequence for its shards or can prove exactly which packets are missing and recover them within the horizon; silent divergence becomes impossible.
- Economic upshot: reliable billion-scale propagation creates the conditions for true micropayment economies, strengthens consensus synchrony, and makes disputes resolvable by "deterministic packet sequences and Merkle roots rather than probabilistic peer testimony".

## How Craig reasons (his model/logic)
Requirements-led distributed-systems design. Five strict requirements are enumerated — complete delivery to miners, bounded repair, cross-shard ordering, deterministic hash-based naming, and coordination-free horizontal scaling — and each mechanism (anycast, SSM mapping, sequence spaces, NACK repair, Merkle composition) is introduced to satisfy one. The recurring move is to replace probabilistic gossip with constructions whose correctness is computable and auditable.

## Where this contradicts BTC-mainstream logic
- Repudiates BTC's actual relay stack — gossip relays, mempool flooding, unicast — as unfit for a financial system at planetary scale.
- Rejects the small-block settlement-layer premise outright: the design target is billions of transactions per second, "digital cash at global scale", on the base layer.
- Treats ordering and verifiability as network-layer duties enforced by sequence numbers and Merkle commitments, not as emergent outcomes of fee markets and stochastic propagation.

## Notable quotes
- "Where gossip was entropy, structured multicast is order."
- "What should be a precise, verifiable, and auditable broadcast is instead a stochastic rumour mill."
- "Sequence discontinuity is proof of loss."
- "The lesson is simple: consensus begins not in cryptography but in communication."

## Connections
The direct sequel to *Multicast as the Only Viable Architecture* (published two days earlier), supplying the ingress, naming, sharding and repair mechanics for the mandate argued there; the micropayment economy it enables is the subject of *Pennies and Power* and *Stewardship in the Smallest Coin*.
