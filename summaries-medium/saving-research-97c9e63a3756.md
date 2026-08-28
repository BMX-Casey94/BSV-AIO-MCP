---
title: 'Saving research'
date: 2019-04-02
slug: saving-research-97c9e63a3756
url: https://medium.com/@craig_10243/saving-research-97c9e63a3756
themes: [privacy, identity, wallets-keys, script-technical]
---

# Saving research
**Date:** 2019-04-02 | **URL:** https://medium.com/@craig_10243/saving-research-97c9e63a3756
**Subtitle:** Today’s business post is about a method to record research and development data in a way that is tamper-proof and allows privacy, review…

## Core thesis
A "business post" unveiling an nChain invention — a "distribution protocol for blind dealer-less thresholds" — that uses Bitcoin scripting and blinded ECDSA threshold keys to record research data in tamper-proof, privacy-preserving form. The system lets a validated participant (Alice) authenticate to a data collector (Bob), receive a blinded address, and submit signed responses that Bob cannot link to her identity — enabling double-blind surveys, secure research methodologies, and voting on the Metanet. Details are reserved for a forthcoming patent, with SDKs to follow.

## Key arguments and claims
- The product framing: "One nChain invention that will come out soon is one we describe as providing a distribution protocol for blind dealer-less thresholds" — aimed at recording R&D data that is tamper-proof yet reviewable and validatable.
- Data-saving options: full data, blinded data, encrypted data, or "a hash that proves the existence of data at a point in time" — the blockchain anchors existence and integrity without disclosure.
- The survey use case: "we can issue a questionnaire and link each response back to individuals while maintaining full privacy and scientific double blinding" — the issuer knows responses come from authorised, validated parties but "cannot tell who will have responded in each event".
- The protocol flow: an Alice group "creates a blinded version of a message by means of secret sharing" and sends it to a Bob group; Bob's group "creates a signed version of the blinded message by means of secret sharing" and returns it; Alice's group un-blinds to obtain "the un-blinded message, signed by the Bob group, from a threshold number of shares".
- Blinded ECDSA threshold keys: Alice and Bob exchange surveys and research data under a blinded ECDSA key; Alice can herself be "double-blinded from the people handling the results", and submits "her blinded keys and transactions… to the blockchain".
- Unlinkability with accountability: "Bob will not know which transaction he has helped Alice sign, yet can be sure that she is a member of the party of research subjects" — the same mechanism "could also be used in voting".
- Out-of-band verification and swap mechanics: parties "verify each other out of band"; transactions "can be atomically swapped or swapped by using oblivious transfers over Bitcoin transactions"; Bob signs a blinded hash, Alice un-blinds the signature into "a valid Bitcoin transaction that she can send to the blockchain".
- IP and product strategy: "I am not going to detail the full process here; it will be published in the patent shortly", and "In time, it will be released in SDKs allowing users to implement such methods without understanding the full background process."
- End-state vision: "a combination of both voting, secure research methodologies, and even the ability to pseudonymously issue forms that can be double-blinded".

## How Craig reasons (his model/logic)
Protocol-specification reasoning: the essay walks through a cryptographic construction as a message-passing sequence between threshold groups (blind → sign → un-blind), emphasising what each party can and cannot learn at each step — privacy is engineered as a property of information flow, not of hiding from the ledger. The commercial framing (invention, patent, SDK) treats the blockchain as enterprise infrastructure for auditable-yet-private data, with the Metanet as the deployment target.

## Where this contradicts BTC-mainstream logic
- Privacy = anonymity orthodoxy: the design delivers *accountable* privacy — validated membership with unlinkable responses — against the era's conflation of privacy with untraceable anonymity (CoinJoin, Monero-style).
- On-chain vs off-chain scaling dogma: research data, votes and surveys are anchored to the blockchain itself, presuming a chain that can carry such data — contrary to the BTC "block space is too scarce for data" premise.
- "Don't roll your own crypto / patents are anti-Bitcoin": the explicit patent-first, SDK-later commercialisation model runs against the open-source, patent-averse culture of mainstream crypto.
- Trustless maximalism: the system embraces authorised parties and out-of-band identity verification as features, rejecting the "no trusted parties ever" purism.

## Notable quotes
- "providing a distribution protocol for blind dealer-less thresholds"
- "we can issue a questionnaire and link each response back to individuals while maintaining full privacy and scientific double blinding"
- "Bob will not know which transaction he has helped Alice sign, yet can be sure that she is a member of the party of research subjects."
- "Alice can then un-blind the signature to obtain a valid Bitcoin transaction that she can send to the blockchain."
- "it will be published in the patent shortly"

## Connections
Part of the nChain patent-portfolio essay series (cf. "A distribution protocol for dealer-less secret distribution" and related threshold-key posts), here applied to research-data integrity and voting. Sits alongside the Metanet vision of on-chain data and complements the privacy-with-accountability stance argued philosophically in "Satoshi Nakamoto" three days later.
