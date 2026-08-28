---
title: "The Lawless Blockchain Is a Story We Tell for Small Change"
date: 2026-06-15
slug: the-lawless-blockchain-is-a-story
url: https://singulargrit.substack.com/p/the-lawless-blockchain-is-a-story
themes: [security-economics, law-regulation, mining-consensus]
---

# The Lawless Blockchain Is a Story We Tell for Small Change
**Date:** 2026-06-15 | **URL:** https://singulargrit.substack.com/p/the-lawless-blockchain-is-a-story
**Subtitle:** A forthcoming paper extends Eric Budish’s famous limit on cryptocurrency security — and shows that the moment the stakes turn serious, the rule of law walks back into a room it was never really absent

## Core thesis
Craig presents his forthcoming paper, *Legal Deterrence in ‘Permissionless’ Consensus* (International Journal of Cryptocurrency Research, Vol. 6, Issue 1, June 2026), which extends Eric Budish’s deterrence condition for proof-of-work security along exactly two dimensions: the organisational structure of mining (pools, not monolithic attackers) and the institutional reality of legal enforcement. Budish’s theorem is recovered formally as the no-law, no-pool special case — contained, not refuted. The result is a two-regime system: protocol-only deterrence for the ocean of small payments, protocol-plus-law deterrence for large transfers through identifiable operators.

## Key arguments and claims
- Budish’s condition: an attack is deterred only if (attacker’s share of network power × ongoing flow cost of trust support × duration held) exceeds the double-spend prize. It is derived under an explicit “no-rule-of-law” scope condition — no prosecution, seizure, freezing or counterparty refusal.
- The legal term added to the attacker’s payoff is: probability of detection × probability of correct attribution × probability a sanction lands × sanction size, minus the enforcer’s cost of invoking the law, floored at zero. The floor encodes an enforcer participation constraint: law nobody will pay to use is worth nothing.
- The paper proves the legal term is exactly zero for small thefts (a five-dollar double-spend — Budish is “exactly right” there) and rises with the prize, because disgorgement grows at least dollar-for-dollar while enforcement cost is largely fixed overhead. There is no hard threshold, only a gradient.
- Calibration: 4,149 blocks in the 30 days to March 2026 show US-linked pools at just over 42% (Foundry USA alone 31.48%), China-linked pools at roughly 41.5%, F2Pool at 11.33%; over 98% of hash power is attributable to publicly identifiable operators. The value at which the legal term first turns positive is estimated at roughly $1m–$4.25m, an upper bound excluding criminal penalties.
- Pooled attacking capacity is a fragile coalition, not a fixed asset. A covert attack degrades payouts and raises stale shares, so contributors leave for better money (the Bloch–Kranton cover-up dynamic); once suspected, continued association brings legal scrutiny, exchange exclusion and hardware impairment. Monte Carlo simulation (1,000 runs, three exit models) of a pool starting with 31.5% of an 800 EH/s network shows effective capacity falling to 10.6–26.8% within 24 hours — far below majority.
- Four further omitted losses: reputational sanctions (Karpoff & Lott: over 90% of total punishment for fraud across 132 firms, versus negligible for diffuse environmental harm — double-spends are fraud against identifiable victims); ASIC capital loss (specialised silicon converts Budish’s flow-cost problem into a heavier stock-loss problem); honest-longest-chain exclusion (the protocol orphans the attacker’s chain automatically); and network-friction loss (Apostolaki et al. on routing attacks).
- MARA Holdings disclosed ~400,000 rigs, 53.2 EH/s and 44,893 BTC in its 2024 annual report: capital exposure exceeds a $10m prize by 540–620×. Supporting apparatus is borrowed from Becker (1968), Thompson’s mafia hierarchy (pool operator as “boss”, contributors as soldiers who can walk), Gulen & Myers (Clean Water Act violations ~40% lower in battleground states) and Matsuzawa (banning DUI checkpoints raised alcohol-related deaths over 12% — salient enforcement deters the watching population).

## How Craig reasons (his model/logic)
Law-and-economics deterrence theory fused with industrial organisation. The method is deliberately concessive: grant the strongest opposing model everything, then prove it a special case of a more general model via formal propositions, disciplined by calibration exercises (public filings, coinbase-tag attribution, litigation-cost surveys) and simulation. The real contrast is not “lawless chain versus lawful world” but between different bundles of protocol incentive, organisational structure, legal exposure and infrastructural dependence.

## Where this contradicts BTC-mainstream logic
- Rejects the “law unto itself” narrative — security through mathematics and electricity alone — as a romance untested by serious money.
- Rejects the folk image of mining as an anonymous swarm; the coordination layer is a small set of identifiable, often listed, companies.
- Rejects the reading of Budish as a “death sentence” for blockchains at scale; his result describes only the small-payment regime, yielding a sensible division of labour.
- Implicitly rejects “code is law”: attribution runs to the pool operator, and exchanges, prosecutors and courts sit inside the real payoff matrix.

## Notable quotes
- “I do not refute him. I contain him.”
- “A covert attack, in other words, leaks.”
- “The lawless blockchain, in the end, is a story we tell for small change.”
- “It was simply waiting, as it usually does, for the numbers to grow large enough to be worth its attention.”

## Connections
A companion to “What the Protocol Remembers” (same journal issue, same strategy of correcting Budish by restoring omitted mechanisms). Its legal-deterrence machinery connects directly to the doctrinal argument of “The Law of Controlled Amnesia”.
