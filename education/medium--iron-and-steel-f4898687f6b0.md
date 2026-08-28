---
title: "Iron and Steel"
era: medium
date: 2018-06-09
slug: iron-and-steel-f4898687f6b0
themes: [mining-consensus, security-economics, networking, btc-critique]
source_summary: summaries-medium/iron-and-steel-f4898687f6b0.md
url: https://medium.com/@craig_10243/iron-and-steel-f4898687f6b0
---

# Iron and Steel — core principles

- **Orphan blocks are load-bearing, not waste.** "Orphans are not a flaw; they are the carbon introduced into the Iron that makes Bitcoin steel" — the orphan risk is the signalling mechanism that sorts miner investment into connectivity.
- **Difficulty adjustment makes orphans revenue-neutral on average.** Roughly 2,016 blocks are awarded every difficulty period regardless of how many are orphaned, so a miner's average block reward is unchanged by orphan rate; only the variance is visible, and miners fixate on single visible losses rather than the whole.
- **Orphan risk drives small-world topology.** The creation of an orphan block incentivises a miner to spend capital on dense, low-latency connectivity to other miners — not merely on more hash power.
- **Mining is a propagation race.** "Mining is not about discovering blocks; it is about getting your discovered block to all other miners" — the miner's checklist is security, network management, high-bandwidth low-latency links, redundancy and dense connectivity.
- **Stag Hunt equilibrium of honest mining.** Modelling miner coordination as a Stag Hunt (Skyrms 2004): the payoff-dominant "stag" is building a near-complete small-world network, the "hare" is simply adding ASICs; orphan losses align miners on the payoff-dominant strategy, whose correlated-equilibrium payoff beats the mixed-strategy Nash equilibrium.
- **Attack asymmetry in numbers.** A 0.1% miner can push a 1GB block to 1,000 miners in under 2 seconds for under 1% of capital investment; a Sybil attacker needs over 500,000 densely connected systems at 9–10x the mesh-network cost — an attack cost estimated at over $125 billion.
- **Latency is hash power.** Worked example: at equal 1,000-unit hash power, a miner with 0.2s large-block latency versus a rival's 3.2s gains a 3s/600s = 0.5% edge (effectively a 50.5% miner); the slower rival must buy ~2.1% more ASICs to compensate — and bandwidth grows cheaper relative to hash power as the network scales.
- **Efficiency engineering can destroy security.** Making block propagation "more efficient" lowers Sybil costs, lets non-mining nodes pretend to significance at near-zero cost, and breaks the incentive to form a small-world rather than mesh topology; academic attack models (e.g. "On Bitcoin and Red Balloons") assumed a mesh network that the real system does not have.
- **Investment-weighted signalling beats social consensus.** "There is no such thing as a robust system built on social consensus" — orphaning is how miners "vote with their CPU power" (whitepaper), and stakeless voting "is twitter, and it breeds trolls" (Adam Smith, Wealth of Nations IV.VIII and I.XI, on trades conspiring against the public).
- **Bitcoin is economics first.** "It is an economic system that utilises selected cryptographic tools; it is not a cryptographic system."
