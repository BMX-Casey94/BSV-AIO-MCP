---
title: "Who Controls the Rules? Governance Credibility and the $109 Billion Question"
date: 2026-03-27
slug: who-controls-the-rules-governance
url: https://singulargrit.substack.com/p/who-controls-the-rules-governance
themes: [governance-decentralisation, protocol-immutability, intermediaries, monetary-economics]
---

# Who Controls the Rules? Governance Credibility and the $109 Billion Question
**Date:** 2026-03-27 | **URL:** https://singulargrit.substack.com/p/who-controls-the-rules-governance
**Subtitle:** The rules of money change whenever someone decides they should. We measured how often.

## Core thesis
The decisive variable for whether low-cost digital cash can compress the $109 billion in annual US friction rents is not who controls a protocol but whether its rules stay the same — governance credibility, G. Measured across 74 episodes in 30 protocols, credibility is bimodal: developer-led, foundation-led and token-voting systems cluster near zero; only explicit protocol locks exceed 0.60. Rule immutability, not "decentralisation", is the institutional innovation.

## Key arguments and claims
- G is the probability that a protocol's rules (capacity, fees, consensus, censorship policy) are unchanged next period, estimated as Ĝ = 1 − Ŵ_R, the restrictor coalition's weight measured from observable data: hashrate splits in forks, exchange ticker assignments, token votes and post-fork market-cap ratios.
- The $109 billion friction rent has two measured components: $34.1 billion of debit interchange (Fed Regulation II data: 100.7 billion covered transactions at $0.338 average) and $75.4 billion of deposit franchise rents (Drechsler–Savov–Schnabl deposit beta 0.38 × $3.861 trillion of non-interest-bearing deposits at the funds rate).
- A debit transaction traverses five institutions because settlement is not final at the point of transfer; reconciliation, chargebacks, fraud screening and identity verification exist for the same reason. Atomic UTXO settlement makes each unnecessary — "Settlement is the transaction" — at $0.00004 per transaction versus $0.34 interchange: 8,500 to one.
- The distribution is bimodal: median 0.15, mean 0.286; 72% of episodes fall below 0.30, 18% above 0.60, 11% between. Conditioning on outcomes sharpens it: rule changes median Ĝ = 0.15; rules held, 0.85.
- By governance type: developer-led (Bitcoin Core, Monero) median Ĝ = 0.075 (SegWit ≈ 0.025, Taproot ≈ 0.075, BTC/BCH ≈ 0.125); foundation-led (Ethereum, Solana, Cardano) 0.10 (DAO fork ≈ 0.09, PoS Merge ≈ 0.005, EIP-1559 ≈ 0.075); token voting (32 episodes) 0.15 — Tezos passed 19 consecutive amendments at 0.10–0.20, Tornado Cash and Beanstalk were captured outright (0.00), Compound ≈ 0.075, Aragon ≈ 0.113. Token voting is "structurally identical to a shareholder vote".
- Protocol lock median Ĝ = 0.925 — the only category consistently above 0.60. "Governance credibility depends on what the controller does, not on whether a controller exists."
- Five episodes: the DAO fork (2016; $60 million drained, 85–97% approval, Ethereum Classic left at 5–10% of market cap; Ĝ = 0.03–0.15); the PoS Merge (2022; the consensus mechanism itself replaced, ETHW < 1%; Ĝ = 0.00–0.01); the BCH IFP defeat (2020; an 8% block-reward tax rejected as BCHN took ~63–65% of hashrate and expelled ABC; Ĝ = 0.60–0.65); the Parity freeze (2017; $300 million frozen, EIP-999 refused; Ĝ = 0.85–0.95 — credibility can evolve); and the BSV lock (post-Genesis 2020; script, UTXO structure and incentives frozen, defended by the BSV Association; Ĝ = 0.85–1.00).
- In the Lagos–Wright model, 95.7% of deposit demand is convenience-driven, so the liquidity channel yields ≈ zero welfare effect; the gain runs entirely through rent compression — a credible outside option disciplines deposit pricing, transferring $28–48 billion to end users. Households discount a digital instrument by (1 − G) × δ, so low-G protocols never exert that pressure.
- The unmade comparison: incumbents have G ≈ 0 too — Visa revises interchange annually, banks reprice by board vote, the Fed moved the funds rate 0.08% → 5.33% in eighteen months. The real contest: locked protocol (≈ 0.90) versus Visa (≈ 0) versus the Fed (≈ 0) versus most of crypto (≈ 0.15).
- Findings are from *Scalable Blockchain Digital Cash, Conditional Settlement, and the Reorganization of Global Financial Intermediation* (under peer review); the 74-episode dataset is in its replication package.

## How Craig reasons (his model/logic)
Positive measurement over normative debate: define a scalar credibility parameter, estimate it from market-observable traces of governance power, and let a decade-long bimodal dataset carry the argument. A general-equilibrium model then ties the parameter to welfare, turning a culture-war question ("decentralised or not?") into an empirical one ("do the rules hold?").

## Where this contradicts BTC-mainstream logic
- Bitcoin Core is a low-credibility developer-led restrictor (median Ĝ = 0.075); SegWit and Taproot are rule changes imposed over miner opposition — the opposite of the "rough consensus, immutable base layer" self-image.
- "Decentralisation" is rejected as the relevant axis: a controller who locks the rules beats leaderless easy-amendment systems on the only metric that disciplines incumbents.
- Token-voting DAOs — mainstream crypto's governance ideal — are equated with shareholder votes and shown to be capturable (flash loans, whales).
- BSV's post-Genesis lock is presented as the dataset's unique institutional innovation, inverting the mainstream framing of BSV as the governed/centralised chain.

## Notable quotes
- "The question is not who controls the protocol. The question is whether the rules will be the same tomorrow."
- "The question is not who holds the keys. The question is whether they use them."
- "The only way to get above 0.60 is to stop changing the rules."

## Connections
Supplies the measurement apparatus for the neutrality condition argued qualitatively in "When Money Moves for Free, Who Gets Paid?" (same batch), and gives the protocol-immutability theme an econometric dataset and welfare estimate.
