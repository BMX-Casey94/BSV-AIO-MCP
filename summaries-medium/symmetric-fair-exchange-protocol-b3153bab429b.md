---
title: 'Symmetric Fair Exchange Protocol'
date: 2018-10-15
slug: symmetric-fair-exchange-protocol-b3153bab429b
url: https://medium.com/@craig_10243/symmetric-fair-exchange-protocol-b3153bab429b
themes: [script-technical, intermediaries]
---

# Symmetric Fair Exchange Protocol
**Date:** 2018-10-15 | **URL:** https://medium.com/@craig_10243/symmetric-fair-exchange-protocol-b3153bab429b
**Subtitle:** Background

## Core thesis
Presented in patent-disclosure format, the post claims "the first known implementation of a symmetric fair exchange protocol on the Bitcoin blockchain". The theoretical pivot: deterministic fair exchange is provably impossible without a trusted third party (Even & Yacobi 1980), but "under the Bitcoin protocol, a validated blockchain acts as a trusted third party" — so two parties can atomically swap value (coins, contracts, goods or services) with perfect symmetry and no exchange or escrow.

## Key arguments and claims
- Fair exchange defined: "two parties either both honour an exchange (such as a contract), or neither of them do" — atomicity as an all-or-nothing property.
- Impossibility result as foundation: "It is known that deterministic fair exchange is impossible without a trusted third party (Even and Yacobi 1980)"; Craig's move is to cast the validated blockchain itself in that trusted-third-party role.
- Prior art acknowledged: the Bitcoin Wiki's 'Atomic cross-chain trading' page (2014), TierNolan's BIP 'Atomic Cross Chain Transfers' (2014), and Maxwell (2012), who "hints that by combining secrets a more symmetric solution is possible" — the gap Craig claims to fill.
- Benefit claims: all the properties of atomic cross-chain trading — "two parties to conduct a fair exchange using separate transactions and no third party, and is both atomic and secure" — plus being "perfectly symmetric" (neither party has a first-mover or griefing advantage).
- Mechanism sketch: Alice gives Bob e1, Bob gives Alice e2; scripts use "OP_HASH160" hashes H(x) and locktime semantics — "a non-zero locktime indicates the earliest time that the transaction may be added to the block chain … expressed in Unix time", zero meaning immediate broadcast. Time-locked refund paths plus hash-preimage revelation deliver the atomicity.
- Generality: the protocol trades "entities of value, such as bitcoins, other currencies, contracts, goods or services" — not merely cross-chain coins.
- The Medium text omits the actual Table 1 step-list and appendix transactions (referenced but not reproduced), so the post functions as an abstract of the invention rather than a full specification.

## How Craig reasons (his model/logic)
Patent-style reasoning: state the impossibility theorem, survey and delimit the prior art (Wiki, BIP, Maxwell's forum post), then claim the inventive step — symmetry — with pseudocode-level script elements (OP_HASH160, locktime) as the enabling mechanism. The register is IP-assertive ("The proposed invention describes the first known implementation…"), consistent with nChain's 2018 patent-filing programme rather than open-source BIP culture.

## Where this contradicts BTC-mainstream logic
- Reframes the era's "trustless" mantra: Craig does not say Bitcoin eliminates trust — he says "a validated blockchain acts as a trusted third party", relocating trust from institutions to the ledger. That is a direct challenge to "trustlessness" rhetoric while simultaneously showing why intermediaries (exchanges, escrow agents) become redundant.
- Contradicts the open-protocol/BIP norms of the Bitcoin dev culture: where Maxwell "hints" on a forum and TierNolan drafts a BIP, Craig claims the symmetric construction as an invention — priority-claiming ground the mainstream treated as commons.
- Quietly contradicts the "Bitcoin script is too limited for real contract protocols" line: the whole construction runs in native Script with hashlocks and locktimes.

## Notable quotes
- "deterministic fair exchange is impossible without a trusted third party (Even and Yacobi 1980)"
- "under the Bitcoin protocol, a validated blockchain acts as a trusted third party"
- "the first known implementation of a symmetric fair exchange protocol on the Bitcoin blockchain"
- "the proposed protocol is perfectly symmetric"
- "entities of value, such as bitcoins, other currencies, contracts, goods or services"

## Connections
Belongs to the October 2018 run of technical disclosures alongside the two Turing-completeness paper announcements (12 Oct), all feeding nChain's IP portfolio ahead of the BCH/BSV split. Cites Even & Yacobi (1980), Bitcoin Wiki 'Atomic cross-chain trading' (2014), TierNolan's atomic-transfer BIP (2014) and Maxwell's 2012 P2PTradeX forum post — the canonical lineage of atomic-swap research, which this claims to complete with symmetry.
