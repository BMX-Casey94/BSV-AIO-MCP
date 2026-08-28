---
title: "What the Protocol Remembers"
date: 2026-06-16
era: substack
themes: [security-economics, scaling-throughput, mining-consensus, btc-critique]
source: summaries/what-the-protocol-remembers.md
---

# What the Protocol Remembers — core principles

- **A single hash trial is memoryless; the Nakamoto protocol is not.** Among continuous distributions only the exponential qualifies. Difficulty adjustment, coinbase maturity, fee accumulation and the heaviest-chain rule make the protocol a machine built of memory.
- **Difficulty reset is a deterministic function of the epoch just ended.** Every 2,016 blocks, future arrival rates depend on past arrivals. The protocol remembers the last fortnight and prices it in at the next retarget.
- **Three further memory mechanisms are each independently fatal to a snapshot model.** The 100-block coinbase maturity puts the reward on probation; fee accumulation grows the prize while the miner waits; the heaviest-chain rule is accumulated memory of work.
- **The honest security statistic is a state vector, not a scalar.** Work gap, difficulty on each chain, distance to next retarget, confirmation depth and fees on the table. Mining is a dynamic investment problem, not a one-shot comparison of instantaneous expenditure.
- **A free majority attack is a local approximation, valid only in a single fee-free epoch.** With retargets on, honest miners leaving raises attack cost monotonically: fewer honest miners means longer epochs, higher retargets and deeper per-hash losses. Capitulation fires backward.
- **Throughput is the design parameter that funds post-subsidy security.** Every new transaction changes the Merkle root and hands miners a fresh search space. Low throughput is a compounding trap — a self-strangling toll booth. High throughput escapes the spiral: the same security budget at volume costs fractions of a cent.
- **Stochastic foundations are functions of protocol design.** Engineering and economics are one question. Cap the block and you date the expiry of your own security model.
