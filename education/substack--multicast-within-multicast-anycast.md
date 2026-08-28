---
title: "Multicast Within Multicast: Anycast, Sharded Resends, and Hierarchical Distribution for Transaction and Block Propagation"
era: substack
date: 2025-08-20
slug: multicast-within-multicast-anycast
themes: [scaling-throughput, networking, mining-consensus]
source_summary: summaries/multicast-within-multicast-anycast.md
url: https://singulargrit.substack.com/p/multicast-within-multicast-anycast
---

# Multicast Within Multicast: Anycast, Sharded Resends, and Hierarchical Distribution for Transaction and Block Propagation — core principles

- **Deterministic delivery replaces probabilistic relay.** Gossip's redundancy grows quadratically with node count and enforces no delivery path; unicast duplicates O(N) per sender with no collective verification — a miner silently dropping 0.01% of transactions diverges with no signal. Structured multicast makes correctness computable and auditable.
- **Anycast ingress minimises latency without central assignment.** Wallets send to a canonical address replicated worldwide; routing delivers to the nearest ingress (a Nairobi wallet might enter via Johannesburg), balancing load by construction.
- **Naming is hash-derived and publicly verifiable.** The low-order k bits of the 256-bit TXID select the multicast group — k = 8 yields 256 groups, k = 16 yields 65,536 — each an IPv6 Source-Specific Multicast address from a reserved prefix; anyone can verify G = f(T), so mis-routed or spoofed packets are rejected. BlockIDs map identically.
- **A "tree of trees" scales horizontally.** A baseline global group (block headers, minimal ordering metadata, coinbase, wide-dependency parents) forms the spine; sharded groups derived from SHA-256(TXID) carry the bulk flow; subtree allocations (template IDs, application tags) permit specialised subscription — scale by adding hash bits.
- **Sequence discontinuity is proof of loss.** Each shard keeps an independent monotonic sequence space; subscribers NACK the shard's designated resend endpoint for only the missing numbers, replayed from a short-term buffer within a bounded repair horizon (~60 seconds) that gives every subscriber equal repair opportunity.
- **Anti-spoofing is bound into the packet.** Packets are tied to (shard_id, sequence_number, payload_hash), so resends cannot masquerade as new data, and per-subtree numbering prevents one flow starving or reordering another.
- **Blocks are first-class citizens of the fabric.** The header goes to the baseline group while the payload is segmented into shard-subtree streams with a secondary block-segment sequence space; per-shard Merkle subtrees compose the block's global Merkle root, so miners verify commitments against transactions they already hold instead of re-flooding gigabytes.
- **Convergence is provable, not probabilistic.** Every subscriber either holds the complete ordered sequence for its shards or can prove exactly which packets are missing and recover them within the horizon — silent divergence becomes impossible, and disputes resolve by "deterministic packet sequences and Merkle roots rather than probabilistic peer testimony".
- **Builder guidance.** Consensus begins in communication: design transaction dissemination so that ordering is enforced by sequence numbers and Merkle commitments at the network layer, not inferred from fee markets and stochastic propagation.
