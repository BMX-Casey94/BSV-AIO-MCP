---
title: 'Secure wallet systems'
date: 2019-02-10
slug: secure-wallet-systems-614af37aa7f
url: https://medium.com/@craig_10243/secure-wallet-systems-614af37aa7f
themes: [wallets-keys, security-economics, script-technical]
---

# Secure wallet systems
**Date:** 2019-02-10 | **URL:** https://medium.com/@craig_10243/secure-wallet-systems-614af37aa7f
**Subtitle:** Early on, I created a system that we had awarded as one of our earliest patents.

## Core thesis
Craig presents his "Secure Split Key" threshold system — nChain patent PCT/IB2017/050829 — as the answer to Mt Gox-style key compromise: a private key is split via Shamir's Secret Sharing into shares held by different parties so that the complete key never exists in one place, no single party (not even the user) can sign unilaterally, yet the key can be regenerated when needed. Combined with deterministic key generation and script-based composition, this gives recoverable, institution-grade wallets without trusting any single custodian.

## Key arguments and claims
- Motivation: "After Mt Gox, it was clear that there is a need for a 'Secure Split Key' technique — to build upon the Deterministic Key Generation technique that I have documented before." The goal is key storage that "cannot be obtained by an unauthorised party, but can also be reproduced when necessary" (PCT/IB2017/050829, "Secure Multiparty loss resistant Storage and Transfer of Cryptographic Keys…").
- Mechanism 1: split the key (or mnemonic seed) into shares using "Shamir's Secret Sharing Scheme" (4S); "Each individual share is of no value or use on its own"; the reconstruction threshold "can vary according to the needs of the situation".
- Mechanism 2: two or more nodes "determin[e] a common secret" used to derive an encryption key for encrypting shares or share-related messages; shares are then transmitted using that common-secret channel (paired with PCT/IB2017/050856), because "any unauthorised interception of multiple shares could enable the interceptor to reconstruct the key".
- Core security property: "The key does not exist anywhere in its complete form until required… No single party has the ability to generate the private key unilaterally, not even the user."
- Consequences: if the user dies or is incapacitated, remaining shares allow "an attorney, next of kin, etc." to access funds; "if the wallet provider is hacked, the key and thus the funds remain secure".
- Worked 2-of-3 scheme: user registers; key pair generated; private key split via 4S; one share to the user, one retained by the provider, one to remote safe storage; the provider "can destroy any or all copies of the complete private key"; reconstruction uses the user's share plus the provider's share on demand; any single lost share is survivable.
- Payoff claim: with this plus deterministic key generation, "no Mt. Gox-type hack would succeed in stealing bitcoins; a hacker would not be able to access users' complete private keys".
- Threshold-signature basics: many participants each hold "merely a share of the private key"; combined shares produce a signature indistinguishable from a single signature, with one public key for verification.
- Composability in script: "Alice can have a 2-of-3 scheme where Bob has one key for the first key in a 2-of-2 script, and Bob may use a 2-of-3 scheme where Alice has one key for the second key" — enabling mutual self-backup or arbitrary control hierarchies.
- Operational hygiene: key shares are "sent to the parties in the system sequentially merely once. The shares are used, and then a new key is created."
- Device and recovery extensions: shares can be held by devices, oracles or IoT controllers "that act to sign based on a vote"; a practical scheme is PIN-derived key + on-device root + recovery root "locked in a safe or an escrow service". A web wallet "would not need to have the user's entire key, and yet could act to recover lost bitcoin and tokens".

## How Craig reasons (his model/logic)
Patent-to-product exposition: he states the problem (Mt Gox), names the patented mechanism, then walks step-by-step through a 2-of-3 deployment as an existence proof. The underlying model is adversarial key management — assume any single repository is eventually breached or any single holder eventually fails, and distribute trust so that compromise, death and loss are all survivable events rather than catastrophic ones.

## Where this contradicts BTC-mainstream logic
- Contradicts the "not your keys, not your coins" absolutism of mainstream self-custody culture: he explicitly designs away unilateral user control ("not even the user" can generate the key alone) in favour of threshold custody with providers, attorneys and escrows.
- Contradicts the "lost coins are gone forever / code is law" fatalism: recovery of lost bitcoin and tokens via a web wallet is presented as a feature to engineer, not a violation.
- Contradicts the post-Mt Gox lesson as usually drawn ("don't keep coins on exchanges"): the fix is cryptographic architecture, not behavioural purity — exchanges and wallet providers can be made safe.
- Tension with the anti-patent ethos of open-source crypto: the wallet infrastructure he advocates is patented nChain IP.

## Notable quotes
- "After Mt Gox, it was clear that there is a need for a 'Secure Split Key' technique."
- "Each individual share is of no value or use on its own, until it is combined with one or more other shares."
- "The key does not exist anywhere in its complete form until required… No single party has the ability to generate the private key unilaterally, not even the user."
- "no Mt. Gox-type hack would succeed in stealing bitcoins; a hacker would not be able to access users' complete private keys, and could not steal their bitcoins."
- "The shares are used, and then a new key is created."
- "the online system would not need to have the user's entire key, and yet could act to recover lost bitcoin and tokens."

## Connections
Builds on his earlier "Deterministic Key Generation" post and pairs with PCT/IB2017/050856 (common-secret determination) and EP3268914B1 ("invention #42"), the same secret-sharing family referenced in "Generic Thin Operating System for Blockchain IOT Devices" (3 Feb 2019), where IoT devices perform "secret-sharing-protocol (#42) calculations". Part of the February 2019 run of nChain patent exposition essays.
