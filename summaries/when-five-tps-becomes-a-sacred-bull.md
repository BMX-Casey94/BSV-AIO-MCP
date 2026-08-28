---
title: "When Five TPS Becomes a Sacred Bull"
date: 2025-11-18
slug: when-five-tps-becomes-a-sacred-bull
url: https://singulargrit.substack.com/p/when-five-tps-becomes-a-sacred-bull
themes: [scaling-throughput, btc-critique, lightning-l2, mining-consensus]
---

# When Five TPS Becomes a Sacred Bull
**Date:** 2025-11-18 | **URL:** https://singulargrit.substack.com/p/when-five-tps-becomes-a-sacred-bull
**Subtitle:** How They Shrank Bitcoin, Then Pretended It Was a Feat

## Core thesis
BTC Core's five-transactions-per-second ceiling is an ideological intervention, not a technical necessity. Left unmolested, the original protocol would have doubled throughput roughly every eighteen months simply by riding ordinary hardware and network progress; and network-theoretic research shows home-hosted full nodes are structurally peripheral, so the small-block dogma protects a political myth rather than decentralisation.

## Key arguments and claims
- The doubling arithmetic is spelled out: from a 5 TPS baseline, doubling every ~18 months yields ~10 TPS at 18 months, ~20 at 36, ~40 at 54, ~80 at 72 months — continuing to 160, 320 and ~640 TPS. "The act of freezing capacity is not neutral… It is an intervention." Doing nothing would have outperformed the present system.
- The original design assumed evolution: a 10-minute interval and 1 MB initial block as pragmatic starting parameters, counting on Moore's law, bandwidth growth, falling storage costs and improved peer-to-peer propagation.
- The paper "The Redundancy of Full Nodes in Bitcoin: A Network-Theoretic Demonstration of Miner-Centric Propagation Topologies" (arXiv:2506.14197) is cited repeatedly: using complex network analysis, eigenvalue centrality and propagation simulation across BTC and BSV, it shows a densely interconnected miner clique dominates transaction-to-block inclusion paths while home full nodes are "structurally excluded" — "dangling leaves, not structural beams" in a scale-free, small-world graph.
- The "regression fetish": the protocol is shaped around the weakest conceivable hardware. "The world built vast data centres; BTC Core demanded Raspberry Pis." No other field designs around obsolete hardware — "obsolete hardware either adapts or dies".
- Economic consequences: capped block space manufactures congestion, which manufactures fees, which manufactures exclusion; micro-transactions are priced out first, killing micropayments, streaming commerce, machine-to-machine settlement, high-frequency gaming and IoT economies; BTC retrenches into "a boutique settlement layer, arrogant enough to call the retreat strategy".
- Network consequences: a starved chain never ingests enough data to develop resilience; enterprises will not build on a system that "gasps under trivial load"; off-chain workarounds are "crutches for a protocol too constrained to walk unaided".
- Lightning is indicted as symptom, not solution: "Lightning did not emerge from brilliance. It emerged from desperation." Liquidity routing, hub-and-spoke centralisation and partial trustlessness reproduce the very intermediation the base layer was meant to avoid. "Every LN channel is a confession."
- The psychology of regression: fear of scaling (real-world accountability) → aversion to responsibility → minimalism as fetish → ritual self-congratulation. "Fear became caution. Caution became dogma. Dogma became identity."
- The sabotage triad: limiting block size ("The cap is not a safety net; it is a garrotte"), refusing natural growth, and preventing computational expansion — amputating the miner ecosystem's ability to compete on performance.

## How Craig reasons (his model/logic)
The argument stacks three methods: engineering arithmetic (geometric doubling from a stated baseline), empirical network science (graph-theoretic citation of arXiv:2506.14197 to refute the full-node sovereignty claim), and economic incentive analysis (fees, congestion, exclusion), rounded out with a cultural-psychological account of why regression is defended.

## Where this contradicts BTC-mainstream logic
- Against "small blocks protect decentralisation": the propagation topology shows hobbyist nodes have no operational role in consensus; the cap merely lowers the ceiling for everyone while preserving the existing miner hierarchy.
- Against "Lightning is how Bitcoin scales": LN exists only because the base layer was deliberately throttled; it introduces centralisation and failure modes "the base protocol never required".
- Against "fee markets are healthy maturation": fees are manufactured scarcity that expels ordinary users and destroys the digital-cash use case.
- Against "anyone must be able to run a node on minimal hardware": this ritualises powerlessness — "a pageant of decentralisation" — since the graph shows those nodes never held the influence promised.

## Notable quotes
- "The protocol did not fail to scale; its custodians refused to let it."
- "The world built vast data centres; BTC Core demanded Raspberry Pis."
- "Lightning is not a scaling solution. It is an escape hatch."
- "The network is not protected—it is neutered. The protocol is not hardened—it is embalmed."

## Connections
This essay supplies the empirical backbone (arXiv:2506.14197) for the "full node mythology" attacked in "The Quiet Violence of Sunday", and its micropayment-utility argument feeds the direct-exchange vision of "The Great Global Skim" and the allegory of "The Coin That Must Never Rise".
