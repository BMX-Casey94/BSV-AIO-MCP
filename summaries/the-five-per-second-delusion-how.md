---
title: "The Five-Per-Second Delusion: How “Hard Money” Becomes Soft IOUs"
date: 2025-11-05
slug: the-five-per-second-delusion-how
url: https://singulargrit.substack.com/p/the-five-per-second-delusion-how
themes: [lightning-l2, scaling-throughput, intermediaries, btc-critique]
---

# The Five-Per-Second Delusion: How “Hard Money” Becomes Soft IOUs
**Date:** 2025-11-05 | **URL:** https://singulargrit.substack.com/p/the-five-per-second-delusion-how
**Subtitle:** When a starved base layer meets Lightning’s wishful arithmetic, the end state isn’t freedom—it’s a cartel of liquidity providers selling paper promises.

## Core thesis
BTC’s roughly five-transaction-per-second base layer is an immutable arithmetic constraint that makes universal cash use impossible, and the Lightning Network — built as a compensatory scaffold — compounds rather than transcends that limit. The inevitable equilibrium is consolidation into a handful of liquidity hubs and custodians, ending in a “fake standard”: BTC as a fetishised reserve asset beneath an elastic paper economy of IOUs, exactly as gold once underpinned fractional paper claims.

## Key arguments and claims
- Base-layer capacity is a mechanical constant: ~1 MB blocks every ten minutes accommodate roughly 2,500 transactions, i.e. about five per second; all economic behaviour above that ceiling inherits its scarcity.
- Fee-market arithmetic on a starved base layer is expressed as a simple inequality: if settlement demand (D) exceeds capacity (C), fees (F) → ∞ as queue time (Tq) → ∞, producing a reflexive loop in which rising fees push users to custodial hubs, which then dominate blockspace.
- Lightning routing is constrained by directional liquidity, not topology: a path existing in the graph says nothing about its economic viability, and one depleted hop fails the whole payment.
- Channels impose capital lock-up: sending requires outbound liquidity, receiving requires inbound liquidity already placed elsewhere; rebalancing either pays on-chain fees or fails frequently via circular off-chain routes.
- HTLC concurrency is a coded ceiling — typically around 483 active HTLCs per channel — and multi-hop CLTV timelock chains extend settlement delay and expiry risk precisely during congestion.
- Gossip-protocol pathfinding is blind: channel states are stale, amounts are private, so payments become probabilistic (“instant” becomes “maybe”), with empirical failure rates rising sharply for payments above even ~0.01 BTC.
- Small payments die on the cost curve: a four-hop route can exceed one per cent in combined base and proportional fees under ideal conditions, and far worse under stress, so rational routing deprioritises low-value transfers.
- Custodial platforms monetise the constraints: internal ledger transfers feel instant precisely because no BTC moves; once claim velocity exceeds redemption velocity, fractionalisation becomes irresistible — “21 million on paper, 21 billion in circulation”.
- Systemic risks at scale include correlated hub outages (force-closes cannot clear en masse at five TPS), procyclical liquidity crunches with no lender of last resort, regulatory capture of KYC/AML choke points, socialised losses when redemption is arithmetically impossible, and moral hazard via rehypothecation and yield products on synthetic BTC.
- The terminal irony is “Lightning without Bitcoin”: channels could be denominated in satoshis without ever anchoring to the chain, so the money supply becomes elastic through confidence rather than code — “inflation by abstraction”.

## How Craig reasons (his model/logic)
The method is explicit constraint-based economic modelling: state the system’s documented parameters (block size, interval, HTLC limits, timelocks), assume rational profit-seeking actors in an adversarial-but-realistic environment, and derive equilibrium outcomes through incentive and fee-auction analysis. Historical analogy to the gold standard and shadow banking (rehypothecation, layered credit) supplies the interpretive frame, and a section of slogan-by-slogan rebuttals (“Not your keys, not your coins”, “Layer 2 fixes this”, “Routing scales magically”) treats BTC advocacy as catechism refuted by arithmetic.

## Where this contradicts BTC-mainstream logic
- Rejects “Layer 2 fixes this”: every channel open, close and rebalance funnels through the same five-TPS aperture, so Lightning relocates rather than removes the bottleneck.
- Rejects “not your keys, not your coins” as practised: self-custody is mathematically prohibitive for most users when every on-chain operation is a scarce, auctioned commodity.
- Rejects the “mesh network” scaling narrative: routing scales only until liquidity imbalance, HTLC ceilings and fee accumulation force convergence on a hub-and-spoke clearinghouse.
- Rejects the 21-million hard-cap narrative as economically operative: off-chain claims and custodial ledgers create de facto elastic supply denominated in BTC.
- Rejects the digital-gold/store-of-value end state as stable: scarcity at the base forces an abundance of promises above it, “and promises, as history proves, always break at scale”.

## Notable quotes
- “When settlement becomes too costly to perform, trust becomes too cheap to avoid.”
- “Marketing calls this scaling. Economics calls it leverage.”
- “There can be 21 million on paper, 21 billion in circulation, and no immediate contradiction — because redemption is neither required nor feasible.”
- “Lightning is not the cure; it is the symptom.”

## Connections
This essay anchors a cluster with “Lightning’s Velvet Manacles” (which details the watchtower/penalty mechanics behind the custody drift) and “The Mirage of the Bitcoin Standard” (which extends the paper-claims argument into a full fractional-reserve parallel with 1971). Its prescribed escape — orders-of-magnitude base-layer throughput, stable low fees, universal redemption capacity — is the positive programme of “The Geometry of Freedom”.
