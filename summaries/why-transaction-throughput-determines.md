---
title: "Why Transaction Throughput Determines How Long Bitcoin’s Security Model Holds"
date: 2026-03-20
slug: why-transaction-throughput-determines
url: https://singulargrit.substack.com/p/why-transaction-throughput-determines
themes: [scaling-throughput, security-economics, mining-consensus, btc-critique]
---

# Why Transaction Throughput Determines How Long Bitcoin’s Security Model Holds
**Date:** 2026-03-20 | **URL:** https://singulargrit.substack.com/p/why-transaction-throughput-determines
**Subtitle:** The mathematics of mining memorylessness has an expiry date — and it depends on how many transactions you process.

## Core thesis
The "memorylessness" assumption underlying every economic security model of proof-of-work is only an approximation, and it has a calculable expiry date because SHA-256's input domain per block template is finite. Transaction throughput continuously refreshes that domain (each new transaction yields a new Merkle root and hence a fresh template), so a protocol's throughput capacity directly determines how long the Poisson security model remains valid. BTC at ~4 TPS breaks down around 2061; a billion-TPS system holds past 2100.

## Key arguments and claims
- Mining is universally modelled as a Poisson process with geometrically distributed hash trials; Budish's 2025 *Quarterly Journal of Economics* paper explicitly states "Nakamoto trust is memoryless", and the selfish-mining, double-spend and queueing literatures all inherit the assumption.
- Parra-Moyano, Reich and Schmedders (2024, *Computational Economics*) observed that the minable domain is finite: a 4-byte nonce plus 8-byte coinbase extra-nonce gives 2^96 (~79 billion billion billion) inputs per block template. Mining is therefore sampling *without* replacement — negative hypergeometric, not the negative binomial the literature assumes.
- Per Devore and Berk (2012), the with-replacement approximation holds while samples stay under 5% of the population. At today's ~750 EH/s the network computes ~4.5 × 10^23 hashes per 10-minute block — 0.0006% of 2^96, so the approximation is excellent now. At projected hash rates (Moore's-law doubling), 2040 sees ~768,000 EH/s (0.6% of the domain) and 2050 sees ~78 million EH/s (59%) — at which point memorylessness fails for individual hash trials.
- The template-refresh effect: a block template is defined by previous-block hash, transaction set and coinbase output; any new transaction changes the Merkle root and opens a fresh 2^96 "urn". Effective domain = (templates per block) × 2^96. At 4 TPS: 2,400 templates → 2^107. At 1 billion TPS: 600 billion templates → 2^135. At 10 billion TPS → 2^138.
- Breakdown dates for the Poisson approximation: no refresh ~2045; BTC's observed 4 TPS ~2061; 5,000 TPS ~2077; 1 million TPS ~2088; 1 billion TPS ~2103; 10 billion TPS ~2108. Each tenfold throughput increase adds ~3.3 bits; 4 TPS → 10 billion TPS adds 31 bits, i.e. 47 extra years of validity.
- At 1 billion TPS a miner receives ~600 billion new transactions per block (~1,000 per microsecond); even at 2050 hash rates the explored fraction of the effective domain is 9.8 × 10^−13 per block. Sustained throughput above one million TPS has been demonstrated on adversarial PoW networks with UTXO architectures, and demand arises from machine-to-machine, IoT micropayments, supply-chain settlement and data-integrity workloads.
- The economic compounding: as the subsidy halves (3.125 BTC in 2024 toward 0.05 BTC by 2048), Budish's equilibrium constraint requires fee revenue to fund security. A 4,000-transaction block cap forces high per-transaction fees, risking user exodus, hashrate decline and a faster approach to the Poisson threshold — three mutually reinforcing pressures. By contrast, a billion transactions at $0.0001 each yields $100,000 per block without pricing anyone out.
- Budish's core insight (permissionless PoW requires flow payments large relative to attack value) survives — his one-shot Nash argument uses no Poisson machinery — but his attack-duration, attack-cost and zero-net-cost formulas (Theorem 2) treat the race as a homogeneous birth-death process and are valid only while the Poisson approximation holds. Difficulty adjustment, fee accumulation, 100-block coinbase maturity and heaviest-chain selection already violate memorylessness at other levels.

## How Craig reasons (his model/logic)
Applied stochastic-process analysis fused with protocol-design economics: he takes a statistical correction from the literature (finite urn, negative hypergeometric), quantifies it against hash-rate projections, then shows the fix is a *design parameter* — throughput — rather than a market outcome.

## Where this contradicts BTC-mainstream logic
- The 1MB / ~4 TPS constraint is recast from a decentralisation virtue into a security liability that shortens the validity horizon of the entire economic model (2061 versus 2103+).
- The "high-fee fee market" is inverted: capped fee volume plus rising per-transaction fees creates a user-exodus → hashrate-decline → faster-Poisson-breakdown feedback loop, whereas mainstream BTC treats rising fees as healthy security funding.
- Scaling is reframed as a *security* imperative, not merely a payments-capacity question — directly opposing the small-block position that throughput is optional.
- Budish-style analyses that treat the stochastic foundation as exogenous are incomplete: the foundation's shelf life is itself chosen by the protocol designer.

## Notable quotes
- "The mathematics of memorylessness provides an independent reason why throughput matters: it is not merely a question of how many payments the system can handle."
- "The urn is replaced faster than any miner can meaningfully sample from it."
- "The difference is 47 years. That is not a rounding error."
- "The mathematics is clear. The design choice is the protocol's."

## Connections
Extends the corpus's security-budget critique of BTC with a second, independent mathematical channel; complements "Bitcoin Has a Population Problem" (same batch), which endogenises honest majority rather than the block-arrival process, and echoes Satoshi's stated intent that Bitcoin was designed never to hit a scale ceiling.
