---
title: 'Decentralised or just inefficient?'
date: 2019-04-26
slug: decentralised-or-just-inefficient-1eefecec03ff
url: https://medium.com/@craig_10243/decentralised-or-just-inefficient-1eefecec03ff
themes: [mining-consensus, governance-decentralisation, security-economics]
---

# Decentralised or just inefficient?
**Date:** 2019-04-26 | **URL:** https://medium.com/@craig_10243/decentralised-or-just-inefficient-1eefecec03ff
**Subtitle:** Let us do a little thought experiment. Later in the year, I'll be talking about a way of doing serialised algorithms across machines.

## Core thesis
Through a thought experiment about "sequential gold" — a hypothetical coin using a non-parallelisable proof-of-work where one machine earns as much as a million — Craig argues that egalitarian mining destroys Bitcoin's economic incentive structure: with rewards reduced to a pure lottery, no one invests in infrastructure, the small-world network collapses into an insecure mesh, and orphan chains fragment forever. He teases that he developed such serialised algorithms in 2005, rejected them for Bitcoin, and has a patent pending. The essay concludes that only a fixed protocol keeps power out of developers' hands — and that BTC's evolving protocol is how Bitcoin "was hijacked".

## Key arguments and claims
- He will present at the next CoinGeek Conference a method allowing "nodes that can mine without any parallelisation being possible" — one ASIC equals 100 racks of ASICs in return; a patent is being filed, posing a "Hegelian dilemma": use his patented tech with permission, or avoid it because he created it.
- Serial one-way functions that cannot be parallelised have long existed (he cites a MathSciNet reference, MR0770156); his addition is ones that "act as a one-way trap". Project-management analogy: "The number of women will not reduce the length of pregnancy."
- The arithmetic of egalitarian mining: 1-minute blocks give ~525,600 blocks/year; with 1 billion miners, "the average person [wins] the lottery once every 1900 years".
- "Bitcoin is an economic incentive system" — security comes from parties "investing money in building to create a secure system", not from "the communist or socialist version of Bitcoin".
- Without expected return, running a node is a tragedy of the commons: "why would you leave your node running, consuming electricity… to validate other people's transactions? Few would." People would buy government lotto tickets instead.
- Even assuming 0.1% altruists online 99% of the time (vs 999M users online 1%), the altruists win only ~9.16% of blocks — a block "once every 173 years" — while bearing costs of "around US$10,000-25,000" per month, doubled with compute and storage.
- Such a network "will always degrade": unlike Bitcoin, sequential gold "never incentivises a single fork", so orphan chains "fragment into more and more chains that will never rejoin". He claims 2013 simulations on his website demonstrated this.
- With an evolving protocol (his label for BTC: "Core coin"), a billion-user lottery network fragments unless all run the same version — and the only fix is to "hand control… to the development team", granting them "the power over everything in your life".
- Conclusion: "Only a stable protocol disseminates power. … Once you remove the ability to change the protocol, you take away the power of those seeking to alter it."

## How Craig reasons (his model/logic)
Socratic dialectic by design (he names the section so): abstract the proposer away, then run explicit arithmetic on a stylised model (block frequency, population shares, uptime-weighted reward distribution). The analytic core is incentive economics — tragedy of the commons, cost of infrastructure, network topology (small-world graph vs mesh) — rather than cryptography. Rhetorically he mixes a patent tease and a Hegelian dilemma with anti-socialist polemic ("utopians", "1984 doublespeak", "anarchist and criminal groups").

## Where this contradicts BTC-mainstream logic
- Contradicts the "everyone should run a full node / one-CPU-one-vote" egalitarian ideal: mass hobbyist validation is shown to be economically irrational and insecure, not decentralising.
- Contradicts ASIC-resistance and non-parallelisable-PoW proposals (then popular in altcoin and "democratised mining" circles) as incentive-destroying.
- Contradicts the view that protocol evolution via developer governance is healthy: for Craig, changeable protocols concentrate power in dev teams — "It is why Bitcoin was hijacked to create (BTC) Core coin."
- Contradicts the notion that altruism can secure a network: security must be paid for by expected profit, or the system needs "to be saved by government".

## Notable quotes
- "The number of women will not reduce the length of pregnancy."
- "Bitcoin is an economic incentive system. The security of Bitcoin relies on a group of individuals investing money in building to create a secure system."
- "Once you do so, you remove the incentive and you remove the security of Bitcoin's network effect, that is, an ultra small-world graph. The network collapses into a mere mesh."
- "It is the typical consequence of the socialist mindset… that fails to understand that you cannot create anything through destruction."
- "It is why Bitcoin was hijacked to create (BTC) Core coin."
- "Only a stable protocol disseminates power."

## Connections
Announces a talk for the next CoinGeek Conference (the BSV-aligned conference series) and a new patent filing — part of the nChain patent programme he frequently referenced in 2019. Builds on his recurring "set in stone" protocol-stability doctrine and his small-world-network model of Bitcoin; he references simulations published on his own website in 2013.
