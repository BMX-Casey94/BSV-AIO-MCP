---
title: "The Five-Per-Second Delusion: How “Hard Money” Becomes Soft IOUs"
date: 2025-11-05
era: substack
themes: [lightning-l2, scaling-throughput, intermediaries, btc-critique]
source: summaries/the-five-per-second-delusion-how.md
---

# The Five-Per-Second Delusion — core principles

- **Base-layer capacity is a mechanical constant that every layer inherits.** Roughly 1 MB every ten minutes is about 2,500 transactions — five per second. All economic behaviour above that ceiling inherits its scarcity.
- **When settlement demand exceeds capacity, fees and queues explode.** Rising fees push users to custodial hubs, which then dominate block space — a reflexive loop, not a healthy market.
- **Off-chain routing is constrained by directional liquidity, not topology.** A path in the graph says nothing about economic viability; one depleted hop fails the whole payment. Sending needs outbound liquidity, receiving needs inbound already placed elsewhere.
- **Channel concurrency and timelocks are coded ceilings.** Typically around 483 active HTLCs per channel; multi-hop CLTV chains extend settlement delay and expiry risk precisely during congestion.
- **Gossip pathfinding is blind.** Channel states are stale and amounts private, so payments become probabilistic; empirical failure rises sharply even for modest sums, and small payments die on the combined fee curve.
- **When claim velocity exceeds redemption velocity, fractionalisation is irresistible.** Internal ledger transfers feel instant because no coin moves; there can be 21 million on paper and 21 billion in circulation because redemption is neither required nor feasible.
- **A starved exit cannot clear a mass closure.** Force-closes cannot clear en masse at five TPS; time-locks expire by congestion, and survival is purchased through fee-bumping and miner relationships, not cryptography.
- **The escape is orders-of-magnitude base-layer throughput.** Stable low fees and universal redemption capacity keep promises anchored to settlement; relocating the bottleneck into channels is leverage, not scaling.
