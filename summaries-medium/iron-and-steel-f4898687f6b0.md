---
title: 'Iron and Steel'
date: 2018-06-09
slug: iron-and-steel-f4898687f6b0
url: https://medium.com/@craig_10243/iron-and-steel-f4898687f6b0
themes: [mining-consensus, security-economics, networking, btc-critique]
---

# Iron and Steel
**Date:** 2018-06-09 | **URL:** https://medium.com/@craig_10243/iron-and-steel-f4898687f6b0
**Subtitle:** Iron is a pure chemical element as well as being a rather malleable metal. It may be better than many forms of metal we used in history…

## Core thesis
Bitcoin's supposed flaws — above all orphan blocks — are the carbon that turns iron into steel: the difficulty adjustment makes orphans revenue-neutral on average, while the risk of being orphaned is the signalling mechanism that drives miners to invest in dense, low-latency connectivity, producing a small-world network that is asymmetrically expensive to attack. Engineering attempts to make Bitcoin "more efficient" destroy that asymmetry and weaken the system; "Bitcoin (cash) remains steel" while SegWit-era Core is becoming pure iron.

## Key arguments and claims
- The metallurgical analogy: pure iron is too soft or brittle for tools; a few imperfections (carbon) alter the structure fundamentally — "Orphans are not a flaw; they are the carbon introduced into the Iron that makes Bitcoin steel."
- Orphan neutrality: every two weeks a mean of ~2,016 blocks are *awarded* regardless of how many are orphaned, so "the block rewards for a miner remain the same on average no matter how large the orphan rate" (Table 1 / Figure 1). Miners fixate on single visible losses, not the whole — he quotes Adam Smith twice on trades conspiring against the public (Wealth of Nations IV.VIII and I.XI).
- Orphans as investment signal: the creation of an orphan block "incentivises a miner to spend more money and capital ensuring that they are densely connected to the other miners" — sorting investment into connectivity as well as hash power.
- Stag Hunt game (Rousseau via Skyrms 2004): the "stag" is creating a near-complete small-world network, the "hare" is simply adding ASICs; Bitcoin's long-play asymmetry makes honesty cheaper than defection, and the correlated equilibrium payoff of 7(1/3)+2(1/3)+6(1/3) = 5 beats the mixed-strategy Nash equilibrium. Orphan losses are the signalling process aligning miners on the payoff-dominant strategy.
- "Mining is not about discovering blocks; it is about getting your discovered block to all other miners" — followed by a five-point miner checklist: security, network management, high-bandwidth low-latency links, redundancy, dense connectivity.
- Attack asymmetry in numbers: a 0.1% miner can push a 1GB block to 1,000 miners in under 2 seconds for under 1% of capital investment; a Sybil attacker needs over 500,000 densely connected systems against 1,000 honest miners at 9-10x the mesh-network cost — "The costs of such an attack today exceed 125 Billion USD to complete."
- Alice/Bob worked example: equal 1,000-unit hash power, Alice at 0.2s vs Bob at 3.2s large-block latency gives a 3s/600s = 0.5% edge (Alice effectively a 50.5% miner); Bob must buy 21 extra ASIC units (2.1% more spend) to match — and bandwidth grows cheaper relative to hash power as the network scales.
- Efficiency is the enemy: making the network more efficient lowers Sybil costs, lets non-miners "act[] and pretend[] to be nodes" at low cost (a dig at Raspberry Pi / UASF culture), and breaks the incentive to form a small-world rather than mesh topology. The academic literature shares the error: the Microsoft authors of "On Bitcoin and Red Balloons" "never tested the system" and "assumed a mesh network".
- Competition, not social consensus: "There is no such thing as a robust system built on social consensus" — only skin in the game forces participants to investigate decisions; stakeless voting "is twitter, and it breeds trolls". Orphaning is "the ONLY way that miners can honestly vote", quoting the whitepaper's "vote with their CPU power" passage.
- Definition: Bitcoin "is an economic system that utilises selected cryptographic tools; it is not a cryptographic system."

## How Craig reasons (his model/logic)
Layered mechanism analysis: a metallurgical analogy frames the claim, then he descends through difficulty-adjustment arithmetic, formal game theory (Stag Hunt, payoff- vs risk-dominant equilibria, Pareto/Hicks optimality), worked numerical examples (Alice/Bob latency, Sybil capital costs), and classical political economy (Adam Smith) as authority. The rhetorical mode is inversion — what engineers call flaws are load-bearing — backed by whitepaper exegesis and academic citation rather than appeals to community sentiment.

## Where this contradicts BTC-mainstream logic
- Orphan-elimination gospel: mainstream dev culture treats orphan rates as pure waste to be engineered away (compact blocks, relay networks); Craig says removing orphans collapses the connectivity incentive that secures the network.
- "Every user a node" / UASF orthodoxy: non-mining nodes are derided as cheap Sybil pretenders — "Bitcoin is not designed to have demagoguery where you vote without any interest in what you vote on."
- The mesh-network assumption underlying academic Bitcoin attacks (red balloons, selfish mining): he claims the real topology is a dense small-world graph, making those attacks infeasible by orders of magnitude.
- Social-consensus governance — BTC's rough-consensus culture — is rejected outright in favour of investment-weighted competition.
- SegWit-era Core is framed as "moving towards becoming pure iron": the BTC improvement programme as metallurgical weakening, with BCH as the surviving alloy.

## Notable quotes
- "Orphans are not a flaw; they are the carbon introduced into the Iron that makes Bitcoin steel."
- "Mining is not about discovering blocks; it is about getting your discovered block to all other miners."
- "It is an economic system that utilises selected cryptographic tools; it is not a cryptographic system."
- "There is no such thing as a robust system built on social consensus."
- "This is the ONLY way that miners can honestly vote."
- "Bitcoin (cash) remains steel."

## Connections
Announced as "the first in a (long) series of articles" explaining why Bitcoin's apparent flaws are strengths; the steel metaphor continues directly into "Lightning is malleable… Steel is not" (2018-06-19). Cites Adam Smith's Wealth of Nations, Skyrms (2004) on the Stag Hunt, Babaioff/Dobzinski/Oren/Zohar's "On Bitcoin and Red Balloons" (EC '12), and the Bitcoin whitepaper. The small-world mining-network and orphan-economics arguments recur throughout his later SSRN/arXiv papers on miner incentives.
