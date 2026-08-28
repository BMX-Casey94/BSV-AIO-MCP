---
title: "Why I troll"
era: medium
date: 2018-11-26
slug: why-i-troll-5304f2cbbfc3
themes: [mining-consensus, networking, security-economics]
source_summary: summaries-medium/why-i-troll-5304f2cbbfc3.md
url: https://medium.com/@craig_10243/why-i-troll-5304f2cbbfc3
---

# Why I troll — core principles

- **Mining is a coupled system, not independent Poisson processes.** Block races are conditional-probability events: miners stop mining the moment they see a competitor's block, so any I.I.D.-based analysis of two-block races is fundamentally wrong.
- **Propagation beats discovery order.** Under the first-seen rule, a block that propagates in 0.01 s wins over one "discovered" earlier that propagates in 2 s — the block that reaches the network first is the one built upon.
- **Bitcoin propagation is fast.** Network measurement (arXiv:1804.02350) shows nearly all (99.98%) miners know of a new block in under 2 seconds; a miner still working the old height after that is in a 0.02% minority.
- **Miners act on expectation, not hindsight.** A 33% miner expects a block every 30 minutes; on seeing a competitor's block it has no expectation of finding one within seconds and knows two-thirds of the network is already building on the winner — so it switches. "Bob does not act on what could have been, he acts on what he expects."
- **Compute race probabilities conditionally.** The correct two-block-race figure is P(A followed by B, given no network transmission from A to B) — bounded in the worked example at under 0.0002 × 0.033, far below the naive independent-model figure.
- **Selfish-mining models mis-specify the system.** Analyses that treat miners' block discoveries as independent events (the selfish-mining literature) fail because information propagation changes actors' behaviour — a whole-network, profit-maximisation problem, not an isolated-actor one.
- **Header-first mining is a rational trade-off.** Miners choose between "spy-mining" on headers and full validation as a risk-reward trade-off driven by profit maximisation, not ideology.
