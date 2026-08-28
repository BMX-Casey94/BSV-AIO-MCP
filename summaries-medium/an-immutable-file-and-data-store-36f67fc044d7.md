---
title: 'An immutable file and data store'
date: 2019-01-06
slug: an-immutable-file-and-data-store-36f67fc044d7
url: https://medium.com/@craig_10243/an-immutable-file-and-data-store-36f67fc044d7
themes: [privacy, wallets-keys, protocol-immutability, tokenisation]
---

# An immutable file and data store
**Date:** 2019-01-06 | **URL:** https://medium.com/@craig_10243/an-immutable-file-and-data-store-36f67fc044d7
**Subtitle:** I shall be starting a weekly post on uses of Bitcoin (BSV). BSV allows using the full potential of Bitcoin and the many possible systems…

## Core thesis
Opening a weekly series on BSV applications built exclusively on granted nChain patents, Craig details a system for permanent, private, on-chain file storage: a user derives a separate deterministic encryption key for every file from a single master key, stores files in Bitcoin transactions (OP_PUSHDATA), and retains pseudonymous, decades-long access with no trusted storage provider. The scheme — built on the "method 42" common-secret patent — means no external party can link stored files to the owner's identity, and he frames it as the first disclosure of what he calls "Metanet".

## Key arguments and claims
- All solutions in the series "are based on patents we have been granted at nChain; as such, they cannot be used other than on the Bitcoin SV chain" — patent exclusivity as a BSV moat.
- Alice holds an ECDSA identity key Pa(0) (optionally PKI-registered) that is never used as a Bitcoin address; per PCT/IB2017/050856 ("method 42", EP3268914B1) she derives deterministic sub-keys such as Pa(1) that are unlinkable to Pa(0).
- Per-file keys solve the key-storage dilemma: standard AES applications use one key for thousands of files (compromise cascades), while storing keys with an app provider requires trust; here "a separate key is calculated for each file, and yet, the user does not need to fear losing the file nor any of his keys".
- File-address derivation: s(file.1) = H[ Da(0) | H(file) | INDEX ], then Pf(1) = s(file.1) × G; the receiving key Pa(1) = Pf(1) + Pa(0) = [ s(file.1) + Da(0) ] × G.
- Funding is firewalled: Alice pays from a one-time funding address Pf(0) with "no relation to her identity in any way" — "the privacy method used in the Bitcoin white paper" — and can discard it afterwards.
- Files are embedded in transactions via OP_RETURN or OP_PUSHDATA ("OP_PushData4 allowed 4.3 GB to be pushed to the stack"), encrypted with the ECDH-style shared secret s.f(1) = Da(0) × Df(0) × G, so outsiders cannot even compute the file's hash.
- Hash-matching gives deduplication (each image stored once), and a hashtable/key-index maps files "like Unix links files" — entire drive stores retrievable "50 years later" from any system.
- Two-party extension with Bob: both parties independently derive the common secret from a shared message, enabling provable exchange of an encrypted-but-public file; a pre-signed nLockTime expiry transaction (kept off-chain) can let the UTXO expire so the file "can expire and be pruned".
- Beyond AES: he flags one-time pads with "XOR and a Zeta function" as "the ultimate encryption system", tied to further patents "coming out during the year".
- Commercial threat made explicit: "today's aspects alone are sufficient to spawn several new companies (sorry Dropbox, OneDrive, and Google Drive…)".

## How Craig reasons (his model/logic)
Patent-driven constructive engineering: he takes a granted cryptographic primitive (deterministic common-secret generation) and composes it step-by-step into a full application, presenting the key algebra in-line as both proof and specification. The reasoning style is design-by-derivation — every property (privacy, recoverability, deduplication, expiry) is shown to fall out of the key hierarchy rather than asserted. Rhetorically it alternates between tutorial (Alice/Bob walkthrough), patent abstract, and product pitch, closing with the Metanet reveal.

## Where this contradicts BTC-mainstream logic
- Directly opposes the BTC orthodoxy that data storage on-chain is abuse ("not a data store", OP_RETURN limits of 40–80 bytes): Craig treats multi-GB OP_PUSHDATA file storage as a first-class Bitcoin use case.
- Rejects the "full-node hobbyist" model — permanent on-chain files presuppose that miners, not users, store and serve data at scale.
- Counters the era's privacy discourse built on mixers and anonymity: his privacy is pseudonymous key-separation plus encryption under law-compatible PKI attestation, not anonymity.
- Implicitly anti-"code is law" / anti-copyleft: patent exclusivity ("cannot be used other than on the Bitcoin SV chain") as a legitimate enforcement layer over open protocols.

## Notable quotes
- "All of the solutions are based on patents we have been granted at nChain; as such, they cannot be used other than on the Bitcoin SV chain."
- "In the system we propose, a separate key is calculated for each file, and yet, the user does not need to fear losing the file nor any of his keys."
- "OP_PushData4 allowed 4.3 GB to be pushed to the stack."
- "She can save files from her childhood and come back and find them 50 years later."
- "today's aspects alone are sufficient to spawn several new companies (sorry Dropbox, OneDrive, and Google Drive…)"
- "Welcome to Metanet. The system is deeper than any Rabbit hole you can imagine… Now, I start to explain it all."

## Connections
First instalment of his announced weekly BSV-applications series and the public debut of the "Metanet" concept he developed through 2019. Built on nChain patents PCT/IB2017/050856 / EP3268914B1 ("Determining a common secret…", dubbed "method 42") and WO2017145010A1 (threshold/multiparty key storage). The two-party section and the following week's smart-card wallet post explicitly extend the same patent family.
