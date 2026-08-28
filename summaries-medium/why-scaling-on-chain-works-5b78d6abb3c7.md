---
title: 'Why Scaling on-Chain Works'
date: 2018-09-08
slug: why-scaling-on-chain-works-5b78d6abb3c7
url: https://medium.com/@craig_10243/why-scaling-on-chain-works-5b78d6abb3c7
themes: [scaling-throughput, governance-decentralisation]
---

# Why Scaling on-Chain Works
**Date:** 2018-09-08 | **URL:** https://medium.com/@craig_10243/why-scaling-on-chain-works-5b78d6abb3c7
**Subtitle:** This is a very quick summary of why scaling on-chain works. In 2009, the effective limit in software was 32MB — although this was only due…

## Core thesis
On-chain scaling is a hardware-economics non-problem: storage capacity per dollar doubles every 15 months — faster than Moore's law — so even an aggressive growth path (a 500TB blockchain by 2030, terabyte-scale blocks) converges to roughly 50% spare capacity at constant cost. The original 32MB limit was a software artefact, not an economic constraint, so the cap should simply be removed and commercial servers left to compete. Hobbyist nodes are explicitly out of scope.

## Key arguments and claims
- "In 2009, the effective limit in software was 32MB — although this was only due to the limits of the software. For a commercial server, this would not have been an issue."
- Declares his frame up front: "I am sorry, I do not care about Raspberry Pi(e) or laptop nodes" — the analysis is for commercial infrastructure only.
- The standard objection — blockchain data grows exponentially — "ignores the fact that the amount of available storage scales faster than Moore's law".
- His aggressive target path: remove the cap entirely; 500TB total blockchain storage by 2030; "5TB OR MORE sent in peak times by 2030. In a single block"; "I want to see Bitcoin Cash handling up to 1.25 TB blocks by the end of 2021."
- With storage per USD doubling every 15 months, the 2009-equivalent acceptable block size today would already be 8GB — "if there was a limit, and that is something I think should not exist".
- Starting now with modest excess storage, the plan "converges to allow 50% spare storage at the same costs" — growth tracks the hardware curve rather than outpacing it.
- "There is nothing special to be done in order to achieve this, it is just allowing commercial systems to compete and to remove the false idea that home use and hobby nodes need to be subsidised."
- Closing line: "Bitcoin scales."

## How Craig reasons (his model/logic)
A cost-curve extrapolation: take the observed doubling time of storage price-performance (15 months), project it against a block-size growth schedule, and show the two curves converge with headroom. The move reframes a protocol-governance fight as commodity-hardware arithmetic, making opposition look economically illiterate. Evidence is presented as spreadsheet tables (referenced in the text), and the rhetorical mode is brusque dismissal of the hobbyist constituency rather than engagement with it.

## Where this contradicts BTC-mainstream logic
- This is the big-block position in its purest form, written two months before the BCH/BSV split: no block-size cap at all, versus BTC's defended 1MB/weight limit.
- Inverts the centralisation critique: BTC orthodoxy says big blocks price out home validators and centralise the network; Craig says expecting home and hobby nodes to matter is a "subsidy" that distorts a commercial system.
- Rejects the premise that scaling requires new mechanisms (fee markets, Lightning, batching, witness discounts): "There is nothing special to be done" — just let hardware curves and commercial competition run.
- Implicitly denies that non-mining validation is a security property worth preserving, aligning with his small-world/miner-network position in "The Gamma Monstrosity" published the same day.

## Notable quotes
- "In 2009, the effective limit in software was 32MB — although this was only due to the limits of the software."
- "I do not care about Raspberry Pi(e) or laptop nodes."
- "the amount of available storage scales faster than Moore's law"
- "I want to see Bitcoin Cash handling up to 1.25 TB blocks by the end of 2021."
- "remove the false idea that home use and hobby nodes need to be subsidised"
- "Bitcoin scales."

## Connections
Companion piece to "The Gamma Monstrosity & the Probability Deception" (same day) — the miner-centric network model there supplies the topology this scaling path assumes. The no-cap position was carried into the November 2018 BCH/BSV split and realised in BSV's "Genesis" unbounded-protocol restoration of February 2020; the 15-month storage-doubling argument recurs throughout his later scaling posts on craigwright.net.
