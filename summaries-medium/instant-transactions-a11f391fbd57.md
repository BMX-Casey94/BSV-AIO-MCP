---
title: 'Instant transactions'
date: 2018-12-09
slug: instant-transactions-a11f391fbd57
url: https://medium.com/@craig_10243/instant-transactions-a11f391fbd57
themes: [security-economics, spv-light-clients, law-regulation, wallets-keys]
---

# Instant transactions
**Date:** 2018-12-09 | **URL:** https://medium.com/@craig_10243/instant-transactions-a11f391fbd57
**Subtitle:** The FUD around bitcoin is deep, but we shall start to clear it up.

## Core thesis
Zero-confirmation ("instant") transactions are safe for merchants who follow correct procedure, and the "0-conf is not safe" mantra is deliberate fraud propagated by market manipulators. Safety comes from merchant-controlled transaction templates, miner polling, and legal recourse — not from confirmation waits or technical "fraud proofs".

## Key arguments and claims
- Double-spend demonstrations on 0-conf are lab constructs; the claims are "a form of fraud" made through anonymous accounts to manipulate markets, analogous to false advertising under UK marketing regulations ("false or deceptive messages… leaving out important information").
- Bitcoin is peer-to-peer at the message layer: "the merchant sends" the transaction; mining exists only as "a competitive system to stop double spending", and miners are paid "to find errors in the efforts of other miners, and to invalidate these".
- Six-step merchant process: (1) client makes an offer; (2) merchant sets value/exchange rate and issues a Bitcoin-transaction template with output address, scripts and payment terms; (3) template exchanged via SPV wallet using never-reused, deterministically derived addresses; (4) user adds inputs/change, signs and returns it — the merchant sets a minimum fee (0.50 units) and minimum output (12.5 units); (5) merchant polls multiple miners' mempools to confirm inputs are unspent, broadcasts to multiple miners, then re-checks; (6) goods released.
- A detected double-spend attempt is criminal fraud: the merchant "has the legal right to detain the client in many countries", analogous to passing a bad cheque under the Bills of Exchange Act 1882 and Cheques Acts 1957/1992, or US state larceny statutes.
- The numbers: in "2 seconds (or less)" the merchant has checked; with post-send miner polling a double-spender will "get away with this fraud less than once in 100 billion times".
- Online merchants need even less protection: Amazon simply halts fulfilment on detecting fraud, and the signed transaction is itself evidence.
- Key reuse is "the biggest privacy failure in Bitcoin"; addresses should be used once, enabled by deterministic derivation from a root key (cites patents EP3268914B1, WO2017178956A1, WO2017145048A1), which also permits auditable private sub-ledgers provable to "shareholders and even tax officials".
- On BSV, large input sets should not be penalised: inputs shrink the UTXO set, so miners should charge on outputs — "It is one thing we want to push in SV."
- Closes with a standing wager: "I will cover any loss that occurs on a REAL double-spend fraud", plus a promise to help jail the perpetrator.

## How Craig reasons (his model/logic)
Security is reframed as procedure plus law rather than pure cryptography: risk is an economic quantity managed by process design, contractual terms and the existing legal system. He layers protocol mechanics (templates, mempool polling), legal analogy (cheque law), his own patent portfolio as technical scaffolding, and a monetary dare as the rhetorical closer.

## Where this contradicts BTC-mainstream logic
- Contradicts the 2018-era orthodoxy (Core and much of BCH) that 0-conf is unsafe and that confirmation waits, RBF defences or fraud proofs are needed.
- Contradicts "code is law" crypto-anarchism directly: "Bitcoin works inside and with the law" — disputes are settled by police and courts, not protocol.
- Contradicts user-sovereignty framing: "Bitcoin is not about allowing users to tell businesses how to operate" — the merchant sets the terms.
- Contradicts the everyone-runs-a-node ethos: "ONLY miners are nodes in Bitcoin", and SPV wallets are the user model ("there is no SPV wallet — none has yet existed. More, they are simple").

## Notable quotes
- "The fraud is the claim of a double spend. The truth is, these do not exist."
- "It is the merchant and not the user who sets the terms used here"
- "Bitcoin is not about allowing users to tell businesses how to operate. If you have such an idea, you are deluded."
- "It is not some technical system of fraud proofs and the anarchist utopia that no state will exist. Bitcoin works inside and with the law."
- "if you try and double spend, you will see a set of flashing lights and not even have the chance to smell the coffee."
- "I will cover any loss that occurs on a REAL double-spend fraud. Oh… I do not expect to even have to spend a cent."

## Connections
Cites three nChain-era patents (WO2017178956A1, EP3268914B1, WO2017145048A1) for deterministic key derivation and private sub-ledgers; promises a full SPV explanation "in Jan 2019"; the signed-template flow is described as "one of the many aspects of what we have as Metanet". Companion piece to "Bitcoin's privacy model" (two days later), which links back to this essay.
