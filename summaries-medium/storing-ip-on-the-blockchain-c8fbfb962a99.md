---
title: 'Storing IP on the Blockchain'
date: 2019-01-27
slug: storing-ip-on-the-blockchain-c8fbfb962a99
url: https://medium.com/@craig_10243/storing-ip-on-the-blockchain-c8fbfb962a99
themes: [tokenisation, micropayments, property-rights, script-technical]
---

# Storing IP on the Blockchain
**Date:** 2019-01-27 | **URL:** https://medium.com/@craig_10243/storing-ip-on-the-blockchain-c8fbfb962a99
**Subtitle:** Electronic distribution of intellectual property (IP) poses numerous risks for the creators of the content since it becomes difficult to…

## Core thesis
Blockchain — explicitly BSV — can serve as an immutable registry for intellectual property: authors store encrypted works on-chain as tamper-proof, timestamped certificates of ownership, then license access through smart contracts, micropayments, and a generalised atomic swap in which paying for and receiving the decryption key are a single indivisible act. The result cuts out notaries and collecting societies and gives authors a direct, low-cost monetisation channel.

## Key arguments and claims
- The problem: electronic IP distribution makes control and monitoring hard, ownership "can be hard to prove", and traditional notary-based management is "cumbersome and expensive", with long gaps between creation and patent filing leaving works unprotected.
- Registry construction: the author encrypts the content with their own public key and embeds it in transaction T1 (e.g. "within OP_PUSH … OP_DROP in the locking script"); because PoW makes the record immutable, the author can at any time "prove ownership of the content by decrypting it and signing a message using the Bitcoin root hierarchical key" — "a provable, timestamped, and immutable proof of ownership" that retains the moral right with the author.
- Access sale as a generalised atomic swap: the author re-encrypts the content to the reader's public key plus a fresh secret key and posts it in T2; the reader's payment T3 "can only be spent if the secret key is revealed"; when the author spends T3, the secret private key is exposed on-chain, giving the reader everything needed to decrypt T2. "The exchange is atomic: either Alice spends the BSV she has received from Bob and Bob gets access to the resource, or neither happen."
- The method is derived from nChain's 2018 work on pseudonymous key transfers, generalised one level up to "the atomic exchange of access to a controlled resource" — funds, webapp access, a rental car, or an encrypted document — and needs no hash-puzzle step: "We merely require that Bob pays… in BSV and that the transactions are controlled using ECDSA signatures, which is a very light requirement."
- Micropayments: an author assigns a Bitcoin address to a work so users "make a small payment to the author in return for use… without having to pay the high transactions costs of existing financial networks"; smart contracts make licences "self-executing upon use of a work" and "automate the workload of the collecting societies".
- Ecosystem evidence: notarisation firm P&TS (Switzerland), Bernstein Technologies (innovation-lifecycle trails on the Bitcoin blockchain), Binded (copyright registration with optional U.S. Copyright Office filing), proofstack.io ("secure a copyright worldwide in 60 seconds"), and Proof of Existence.
- Adoption claim: "acceptance of blockchain by governments is a mere question of time."

## How Craig reasons (his model/logic)
A solutions-engineering walkthrough rather than a polemic: problem statement, a transaction choreography (T1/T2/T3) with script-level detail, then a survey of existing commercial services as validation. The reasoning leans on nChain patents and papers as building blocks and on immutability-via-proof-of-work as the property that makes on-chain records legally meaningful evidence of ownership.

## Where this contradicts BTC-mainstream logic
- Contradicts the era's "the blockchain is not a data store" orthodoxy and BTC's tight OP_RETURN limits: embedding encrypted documents directly in locking scripts is presented as a primary use case.
- Contradicts the "on-chain micropayments are dead, use Lightning" consensus of early 2019: per-use content payments are priced on-chain in BSV precisely because fees are fractions of a cent.
- Contradicts the minimal-trust purism that treats notaries, collecting societies, and copyright offices as irreplaceable institutions: smart contracts and immutable timestamps are offered as their cheaper substitutes.

## Notable quotes
- "Once the information has been registered on the blockchain, it can never be lost or changed, retaining the moral right with the author."
- "In IP, such methods could mean that licences are self-executing upon use of a work."
- "The exchange is atomic: either Alice spends the BSV she has received from Bob and Bob gets access to the resource, or neither happen."
- "We merely require that Bob pays for the collection of crypto assets in BSV and that the transactions are controlled using ECDSA signatures, which is a very light requirement."
- "Acceptance of blockchain by governments is a mere question of time."

## Connections
Builds directly on nChain patents (KR20180115768A, WO2017145049A1) and the nChain 2018 paper on pseudonymous key transfers; the atomic-access-swap is a sibling construction to the symmetric fair-exchange protocol he describes elsewhere. Published two months after the BCH/BSV split, the explicit BSV denomination marks it as part of the early BSV application pitch (Metanet-era on-chain data use cases).
