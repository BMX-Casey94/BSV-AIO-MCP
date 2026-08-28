---
title: "nSequence and P2P exchange"
era: medium
date: 2018-11-13
slug: nsequence-and-p2p-exchange-9e4cbf32124c
themes: [script-technical, protocol-immutability, micropayments, lightning-l2]
source_summary: summaries-medium/nsequence-and-p2p-exchange-9e4cbf32124c.md
url: https://medium.com/@craig_10243/nsequence-and-p2p-exchange-9e4cbf32124c
---

# nSequence and P2P exchange — core principles

- **Payment channels were in Bitcoin v0.1.** The original design used nSequence numbers for transaction replacement before finalisation, combined with nLockTime, letting two parties negotiate peer-to-peer off-chain and broadcast only the final state to miners for settlement.
- **Non-final transactions are replaceable.** A transaction with nLockTime set in the future and sequence starting at 0 is not final: miners will not include it before the nLockTime is reached, and the network accepts the highest sequence number once nLockTime has been reached, rejecting all lower values.
- **Sequence UINT_MAX finalises immediately.** Setting the sequence to the maximum value makes the transaction final permanently, even if the time represented in nLockTime remains in the future.
- **Off-chain negotiation is fee-free.** Successive versions are negotiated and signed securely and without fees — the fees paid are to the miners for the settled transaction, not the exchange — enabling services where users withdraw and deposit without waiting for confirmations.
- **Sighash flags structure multi-party agreement.** Each input owner signs their own input; a higher sequence signals "I agree to put my money in, if everyone puts their money in and the outputs are this"; SIGHASH_SINGLE and SIGHASH_NONE let parties bow out selectively (Satoshi, bitcoin-dev, April 2013, to Mike Hearn).
- **Multisig defaults handle dropouts.** An OP_CHECKMULTISIG default transaction lets n−1 parties push out an unresponsive one; with a 2-of-3 address an escrow (such as a licensed shared registry) enforces the agreed transaction, and either party can pull out before the deadline.
- **Only the final outcome hits the chain.** "Intermediate transactions do not need to be broadcast. Only the final outcome gets recorded by the network" — enabling payment channels, high-frequency trades between a set of parties, and auctions.
- **Honesty is enforced economically, not by collusion-proofing.** The objection that one party could collude with a miner to commit a non-final version misunderstands Bitcoin: it is an economic system that uses technology, and script capability plus incentives enforce honest settlement.
