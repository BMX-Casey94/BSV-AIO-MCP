---
title: 'nSequence and P2P exchange'
date: 2018-11-13
slug: nsequence-and-p2p-exchange-9e4cbf32124c
url: https://medium.com/@craig_10243/nsequence-and-p2p-exchange-9e4cbf32124c
themes: [script-technical, protocol-immutability, micropayments, lightning-l2]
---

# nSequence and P2P exchange
**Date:** 2018-11-13 | **URL:** https://medium.com/@craig_10243/nsequence-and-p2p-exchange-9e4cbf32124c
**Subtitle:** In the beginning, Bitcoin allowed two parties to engage in a Peer-to-Peer trade and exchange that was P2P and then to be sent to the…

## Core thesis
Bitcoin's original v0.1.0 design already supported true peer-to-peer exchange and payment channels through nSequence transaction replacement combined with nLockTime: parties negotiate off-chain by exchanging successively higher-sequence versions of a transaction, and only the final state is broadcast to miners for settlement. Bitcoin Core disabled this (all BTC transactions now use nLockTime = 0 with Sequence = UINT_MAX), but Bitcoin SV will restore it — "Welcome to what Bitcoin was and will be again."

## Key arguments and claims
- Original Bitcoin "used sequence numbers... designed to be used for transaction replacement before a transaction was finalised"; the feature was disabled, so non-default sequences now appear only in raw transactions and explorers default to the final FFFF'FF value.
- Mechanism: a transaction with nLockTime set in the future and sequence starting at 0 is "not 'final'" — miners will not include it before the nLockTime is reached, giving both parties an agreed final state plus the ability to send updated versions.
- Replacement rule: "the network will accept the highest sequence number for transactions once the nLockTime has been reached, rejecting all others with a lower value." Setting the sequence to UINT_MAX finalises the transaction permanently, "even if the time represented in nLockTime remains in the future".
- Escrow integration: with a 2-of-3 address, parties can use "an escrow (such as a licenced shared registry)" to enforce an agreed transaction, and either party can "pull out" of the negotiation before the deadline.
- Fee structure: prepared transactions are negotiated and signed off-chain "securely and without fees — the fees paid are to the miners for the settled transaction, not the exchange". This enables services where users withdraw and deposit "without waiting for confirmations".
- He quotes Satoshi's April 2013 bitcoin-dev explanation to Mike Hearn at length: an unrecorded open transaction "can keep being replaced until nLockTime"; each input owner signs their input and a higher sequence signals "I agree to put my money in, if everyone puts their money in and the outputs are this"; SIGHASH_SINGLE and SIGHASH_NONE let parties bow out selectively; an OP_CHECKMULTISIG default transaction lets n-1 parties push out an unresponsive one; "One use of nLockTime is high frequency trades between a set of parties"; "Intermediate transactions do not need to be broadcast. Only the final outcome gets recorded by the network."
- Result: "we can create payment channels and more. This includes high-frequency trades and transactions including auctions."
- Dismissal of the miner-collusion objection: those who say "one party could collude with a miner to commit a non-final version of the transaction" — "never understood Bitcoin nor the capability of script. Bitcoin is an economic system that uses technology."
- Restoration pledge: "Bitcoin will remain cash, and it returns to the first version: 0.1.0 as was set in stone."

## How Craig reasons (his model/logic)
Argument from original-design authority: he walks through the protocol fields (nSequence, nLockTime, SIGHASH flags, OP_CHECKMULTISIG) as a technical tutorial, then anchors every claim in a primary source — Satoshi's own 2013 email to Mike Hearn — to establish that payment channels were Satoshi's design, not a later invention. Objections are dismissed not by counter-argument but by status: critics "never understood Bitcoin", because "Bitcoin is an economic system that uses technology", so economic incentives (not miner collusion) enforce honesty. The closing frame is restorationist: the protocol was "set in stone" at 0.1.0.

## Where this contradicts BTC-mainstream logic
- Contradicts the Lightning Network's founding premise: BTC mainstream held that payment channels required new layer-2 infrastructure (and malleability fixes like SegWit); Craig argues the *original* protocol already had them and Core deliberately broke them.
- Contradicts Core's sequence semantics of the era (RBF repurposing, nLockTime = 0 / Sequence = UINT_MAX as default-final): he treats that state as a disabling of Bitcoin, not a development of it.
- Contradicts the "protocol must evolve" governance view: "0.1.0 as was set in stone" asserts protocol immutability against Core's (and ABC's) willingness to change consensus rules.
- Contradicts the miner-collusion security critique of replacement-based channels by fiat rather than proof — asserting script capability and economic incentives settle the matter.

## Notable quotes
- "Welcome to what Bitcoin was and will be again."
- "the fees paid are to the miners for the settled transaction, not the exchange"
- "One use of nLockTime is high frequency trades between a set of parties." (quoting Satoshi)
- "Intermediate transactions do not need to be broadcast. Only the final outcome gets recorded by the network." (quoting Satoshi)
- "So much has been lost in those wanting to change Bitcoin rather than in understanding it."
- "Bitcoin is an economic system that uses technology."
- "Bitcoin will remain cash, and it returns to the first version: 0.1.0 as was set in stone."

## Connections
Built around Satoshi's April 2013 bitcoin-dev post to Mike Hearn (lists.linuxfoundation.org/pipermail/bitcoin-dev/2013-April/002417.html) and the bitcoin.it wiki pages on Contracts, NLockTime, and protocol documentation (including the "rapidly-adjusted (micro)payments" contract example). Posted on 13 Nov 2018 — the same day as "Sustaining Hash" and two days before the BCH/BSV split — as the technical manifesto for SV's "restore the original protocol" campaign. The 2-of-3 escrow referenced connects back to "Prevention is the key" (12 Nov 2018); the payment-channel argument is his standing rebuttal to Lightning (cf. "Lightning is malleable, steel is not").
