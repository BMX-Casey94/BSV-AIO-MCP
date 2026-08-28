---
title: "Decentralization Deserves a Number"
date: 2026-05-25
slug: decentralization-deserves-a-number
url: https://singulargrit.substack.com/p/decentralization-deserves-a-number
themes: [governance-decentralisation, mining-consensus, security-economics]
---

# Decentralization Deserves a Number
**Date:** 2026-05-25 | **URL:** https://singulargrit.substack.com/p/decentralization-deserves-a-number
**Subtitle:** Node counts measure nothing. Here is a five-layer test for who actually holds a protocol — and what it says about Bitcoin and Ethereum.

## Core thesis
Block producers are not legislators but adopters: they choose which chain, client, or fork to run, but do not author the rules they operate under. "Decentralisation" should therefore be replaced by a measurable quantity — cross-layer separability, the degree to which five distinct jobs are staffed by different people. Once producer choice is modelled under coordination feedback, systems exhibit tipping points and lock-in, and the proof-of-work versus proof-of-stake debate resolves into a genuine trade-off between flexibility and commitment.

## Key arguments and claims
- The five layers: Layer 1 rule authorship (BIPs; EIPs/ERCs — "the legislature"), Layer 2 software implementation (Geth, Nethermind, Besu, Reth, Bitcoin Core), Layer 3 operational production (miners/validators — "the layer everyone fixates on, and it is the layer with the least authority over the others"), Layer 4 legal enforcement (sanctions, regulators, courts), Layer 5 liquidity coordination (exchanges, market makers, custodians — "a chain whose token cannot be priced or moved is technically alive and economically dead").
- Separability is computed by listing real-world entities per layer (merged proposal authors; client teams; pools/validators with material share; jurisdictions with demonstrated reach; volume-carrying exchanges) and computing pairwise set-overlap scores into a matrix. A near-empty matrix certifies genuine separation; a near-all-ones matrix exposes "a consortium chain where one firm authors the rules, ships the only client, runs the validators, and operates the exchange."
- Craig is candid that the current measurement is illustrative: equal entity-counting ignores economic weight, and cross-layer entity resolution is "fiddly work that materially affects the answer." The method, not the number, is the point.
- Producer choice under coordination feedback is modelled with replicator dynamics borrowed from evolutionary biology; the model locates the bifurcation — the exact tipping point where one sensible equilibrium flips into multiple stuck ones. Lock-in is the QWERTY/VHS phenomenon: "an inferior standard that survives purely because everyone is already on it."
- Headline empirical claim: proof-of-work adjusts fast, proof-of-stake slow, because bonded stake is a switching cost. After China's mid-2021 mining ban, roughly half of Bitcoin's hash power went dark (a 54% collapse); the network recovered half of the loss in about two weeks. Ethereum's largest validator exit episode took roughly 83 days to clear half its backlog; the largest entry queue never cleared within the observed window — roughly an order-of-magnitude difference.
- The trade-off reframing: proof-of-work buys flexibility (cheap entry/exit, fast healing, but "loyalty is only ever as deep as this week's profit"); proof-of-stake buys commitment (expensive attacks, stable validator set, but rigidity — participants "trapped — by design").
- The honesty inventory: the PoW/PoS comparison is a "mechanism vignette," not a controlled test — it is cross-asset (Bitcoin vs Ethereum), compares a recovering stock to a rate-limited flow, and part of the PoS slowness is the protocol's mechanical churn limit rather than behaviour.
- One prediction returned a flat null: testing whether producers follow profit using 42,964 blocks from Bitcoin's 2017 SegWit signalling period failed because pool costs (electricity contracts, hardware efficiency) live off-chain and are unobservable. Reported as a "data-availability diagnostic": the public ledger has a permanent blind spot exactly where private cost lives.
- Two directional vignettes: client readiness leads adoption in Ethereum's client data (single chain, fifteen quarterly points), and around the 2022 OFAC sanction of Tornado Cash the share of Ethereum blocks routed through regulated, compliance-enforcing relays jumped from about 11% to 78% in ten weeks — sharply concentrated among legally exposed entities, but lacking a clean "before" period.
- Final tally: "Four predictions. One genuine pilot, two directional vignettes, one instructive null."

## How Craig reasons (his model/logic)
Institutional economics formalised through dynamic discrete choice and population dynamics. The substantive contribution is explicitly the model itself — microfounded bounded-rational choice aggregating into replicator dynamics, with a stability analysis locating the lock-in bifurcation — while the empirics are offered as bounded demonstrations. The reasoning generalises deliberately: the same five-layer structure is mapped onto standards wars and platform ecosystems.

## Where this contradicts BTC-mainstream logic
- Directly attacks the slogans "miners secure the network, validators run the chain, the community governs" as claims about power that are each "wrong in a way that matters."
- Rejects node-count decentralisation metrics outright: "Counting nodes tells you almost nothing. Measuring cross-layer separability tells you a great deal." A system can have thousands of independent Layer-3 operators and still be tightly controlled upstream.
- Refuses the mainstream "which consensus is better" framing, recasting PoW and PoS as opposite ends of a flexibility–commitment trade-off rather than a hierarchy.

## Notable quotes
- "They are not legislators. They are adopters."
- "The blockchain is the most transparent production ledger humanity has ever built."
- "A null result that teaches you where the data runs out is not a failure. Burying it would have been."

## Connections
This is the plain-language companion to "Who Actually Controls a Blockchain?" (21 May 2026); both summarise the working paper "A Dynamic Institutional-Selection Model under Coordination Feedback and Network Externalities," with this version adding the PoW/PoS adjustment-speed vignettes, the SegWit null result, and the Tornado Cash relay episode.
