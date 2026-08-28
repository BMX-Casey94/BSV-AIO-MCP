---
title: "The Immutable Stock and the Unbounded Flow"
date: 2026-05-28
slug: the-immutable-stock-and-the-unbounded
url: https://singulargrit.substack.com/p/the-immutable-stock-and-the-unbounded
themes: [protocol-immutability, micropayments, script-technical, monetary-economics]
---

# The Immutable Stock and the Unbounded Flow
**Date:** 2026-05-28 | **URL:** https://singulargrit.substack.com/p/the-immutable-stock-and-the-unbounded
**Subtitle:** How a Fixed Number of Satoshis Settles an Arbitrary Number of Payments

## Core thesis
Commentary on Bitcoin commits a category error by treating the quantity of money as the quantity of payments. The monetary base is fixed — eight-decimal satoshis under an implicit issuance ceiling — but transactional capacity is not bounded by that base, because hash chains, payment channels, and blind e-cash decouple the count of payments from the count of on-chain settlements. A single satoshi, even priced at ten cents, can mediate an arbitrarily large number of transfers before settlement. The stock is fixed; the flow is not; the second fact makes the first economically tolerable.

## Key arguments and claims
- What is fixed: in the v0.1 source, COIN = 100,000,000 and CENT = 1,000,000 (main.h); one bitcoin is exactly 100,000,000 satoshis, with no fractional satoshi at the base layer. Neither the denomination nor the ceiling appears in the 2008 white paper — both are properties of the released protocol, enforced by independent validation at every full node.
- The 21-million figure appears nowhere in the code; it emerges from the subsidy schedule — 5,000,000,000 satoshis per block, halved every 210,000 blocks by a truncating integer right-shift. Summing the 33 non-zero epochs gives exactly 2,099,999,997,690,000 satoshis (20,999,999.9769 BTC), 2,310,000 satoshis short of the round figure.
- Immutability is consensus immutability under the original rules: any coalition changing supply, divisibility, or schedule must accept blocks the original rules reject, producing two ledgers — "The party that changed the rules is, definitionally, the party that forked away." Naming is not validation.
- The category error: ~2.1 × 10¹⁵ satoshis bounds simultaneously-held balances at one instant, not payments; a payment is a transfer of control and the same unit recirculates, so the bound on payments is set by velocity and settlement architecture, not the base.
- Hash chains (Lamport, 1981; PayWord, Rivest & Shamir, 1997): one signed commitment to a chain of length n underwrites n sequential micropayments with only the aggregate settled — one signature amortised over n cheap hashes. Length 10⁶ is "trivially computable"; 10⁹ is feasible.
- Payment channels exist in the original protocol: nSequence and lock-times make a transaction non-final until its inputs are final, higher-sequence versions superseding earlier ones (main.h). Decker & Wattenhofer (2015) formalised duplex channels with invalidation trees of decrementing time-locks — two on-chain writes bracketing off-chain updates bounded by tree depth and time-lock budget, not the funded amount.
- Blind e-cash (Chaum, 1983) separates reserve from circulating medium: a fixed on-chain reserve backs tokens issued, transferred, redeemed, and re-issued unboundedly, the issuer unable to reconstruct the payment graph.
- SIGHASH is the compositional grammar of settlement: the original source defines SIGHASH_ALL = 1, NONE = 2, SINGLE = 3, ANYONECANPAY = 0x80, letting independent parties sign fragments (their own input or output) that assemble into one settling transaction without open-ended trust.
- The ten-cent-satoshi arithmetic is explicitly an upper-bound illustration, not a measurement: one satoshi anchors 10⁶–10⁹ payments before settlement; the flow ceiling "is chosen, not given."
- The nChain patents are cited as engineering disclosure, "and for nothing more": Trevethan (2024, US 12,056,694 B2) on secure off-chain transactions; Vincent & Wright (2025, US 12,301,573 B2) on tokenised IoT access; Wright et al. (2022) on the Metanet data structure; Mackay et al. (2022) on blockchain-carried access certificates. The reference rule set is v0.1, "preserved by the Bitcoin SV node implementation."

## How Craig reasons (his model/logic)
A stock–flow distinction from elementary monetary economics, made precise through primary-source protocol analysis. He reads the v0.1 source directly (constants, GetBlockValue, finality checks, the SIGHASH routine), derives the exact supply figure by summation, and shows that mechanisms predating Bitcoin by decades (1981, 1983, 1997) plus mechanisms inside the original protocol already decouple payment flow from settlement writes.

## Where this contradicts BTC-mainstream logic
- Retires the mainstream critique that a capped, small monetary base cannot serve as global payment infrastructure: the inference from ~2.1 × 10¹⁵ satoshis to bounded payments is "a non sequitur" at every step after the first.
- Asserts that any chain altering the original rules — unit, issuance, script grammar, block constraints — is definitionally a fork and a different asset, with BSV named as preserving the original protocol; BTC's rule changes make it the departure, not the continuation.
- Undercuts the premise that off-chain scaling required new inventions: the transaction-replacement (payment-channel) mechanism and the SIGHASH grammar were present in Nakamoto's 2009 release — off-chain constructions complement an immutable base rather than fix a broken one.

## Notable quotes
- "The stock is fixed; the flow is not; the second fact is what makes the first economically tolerable."
- "Naming is not validation."
- "The immutability of the satoshi count is therefore not a feature bolted onto Bitcoin. It is constitutive of what the asset is."
- "A channel that processes a million updates writes twice to the chain — once to open, once to close."

## Connections
The essay anchors Craig's protocol-immutability theme (the original rule set as the definition of Bitcoin, preserved by BSV) to his micropayments and tokenisation themes (hash chains, channels, e-cash, Metanet), and its stock-versus-flow framing complements the network-scaling argument of "Digital Money Is a Network Problem."
