---
title: 'Smart-card-based mobile wallets'
date: 2019-01-13
slug: smart-card-based-mobile-wallets-9cb75595b71d
url: https://medium.com/@craig_10243/smart-card-based-mobile-wallets-9cb75595b71d
themes: [wallets-keys, identity, privacy, security-economics]
---

# Smart-card-based mobile wallets
**Date:** 2019-01-13 | **URL:** https://medium.com/@craig_10243/smart-card-based-mobile-wallets-9cb75595b71d
**Subtitle:** In today's instalment of business ideas that can be created using IP nChain has developed, I will detail how a smart-card application can…

## Core thesis
Continuing his series of business ideas built on nChain IP, Craig specifies a Bitcoin wallet split between a biometric Java smart card and a smartphone app: the signing key is a composite of a card secret and a wallet secret, so neither device alone can sign, every payment uses a fresh single-use address, and the registered identity key never touches the blockchain. The same ECDSA common-secret machinery extends to full-disk or per-file encryption of any personal device, where the encryption key is recalculated per session from a message held only on the user's keyring device — never stored, never transmitted.

## Key arguments and claims
- Composite-key signing: the blockchain address corresponds to P0 + Pi, where P0 = secret(smart card) × G and Pi = secret(wallet value) × G; the card signs with S = secret(wallet value) + secret(smart card), returning a composite ECDSA signature (R, S) for the address (P0+Pi).
- Single-use keys by construction: change goes to a new address P(i+1) derived via a fresh secret — "The process ensures that you only use keys once; and more, it can allow you to attest to a key later whilst maintaining complete privacy."
- Division of labour: the phone constructs the transaction and sends only the hash plus the wallet secret over NFC; "the card only has to complete a simple operation", and "The phone app never needs to send the secret to the card, it sends the public key."
- Identity with privacy: the card's base ECDSA key can be attested by a PKI CA recording "the Bitcoin address (and not the Public Key)", enabling "a complete AML/KYC-based identity system" with biometric cards (UK residency cards, passports) — "Such a process solves all of the issues with PKI and privacy."
- Biometric gating and backup: card and app "work only when the user's biometrics are there to sign"; a card backup can be stored in a safe; wallet data "can be saved publicly without any loss of security, written onto the blockchain, or backed up otherwise".
- Market target: it delivers "all that people seek from a clumsy and antiquated hardware device such as Ledger and with far more flexibility", and can enhance wallets "such as Handcash or Centbee".
- Device-encryption application (patent EP3257006B1): the disk key E = SHA256(SHA256(salt + Sn) + serial-number), where Sn is the ECDH-style common secret recalculated each cycle from a fresh message Mn; "The Encryption key E is not stored anywhere, and the message Mn is not stored on the laptop" — only on the smartphone.
- Against existing device security: 4–8 character PINs fall to physical-possession brute force, passphrases burden memory, and USB keys leak via "electromagnetic signals generated during transmission (e.g. via power analysis)" (citing The Intercept's TPM/BitLocker document); his method transmits "only non-secret information".
- Key evolution per cycle: VnS = VMS + SHA-256(Mn), PnS = PMS + SHA-256(Mn) × G — a new full-strength AES256 key per session, with per-file/folder variants keyed by distinct salts.

## How Craig reasons (his model/logic)
Patent-specification reasoning: the post reproduces the structure of a patent filing (problem statement, glossary, numbered protocol steps, variations, references) and derives every security property from the deterministic key arithmetic rather than from threat-model narrative. His method is compositional — one primitive (Determining a Common Secret, EP3268914B1) is instantiated across wallets, authentication, and disk encryption to show a single IP core with many products. The persuasive mode is engineering completeness: glossary definitions, initialisation/encryption/decryption phases, and explicit exclusions.

## Where this contradicts BTC-mainstream logic
- Rejects the seed-phrase/hardware-wallet orthodoxy (Ledger, Trezor, BIP-39 backups): keys are composite, biometric-gated, single-use, and never backed up as a static secret — "a clumsy and antiquated hardware device such as Ledger".
- Embraces PKI and AML/KYC attestation as compatible with privacy, directly opposing the era's cypherpunk identification of identity systems with surveillance: attestation happens on addresses, keys stay private.
- Contradicts "not your keys, not your coins" maximalism again: the wallet's data can be public or even on-chain without security loss, because security lives in the split secret, not in hoarding a single key file.

## Notable quotes
- "The process ensures that you only use keys once; and more, it can allow you to attest to a key later whilst maintaining complete privacy."
- "Doing so will even allow for a complete AML/KYC-based identity system… Such a process solves all of the issues with PKI and privacy."
- "It allows all that people seek from a clumsy and antiquated hardware device such as Ledger and with far more flexibility."
- "The encryption key is used for only one encryption/decryption cycle. A new key is calculated for each cycle."
- "The Encryption key E is not stored anywhere, and the message Mn is not stored on the laptop."
- "the transmitted secret can still be intercepted due to the electromagnetic signals generated during transmission (e.g. via power analysis)".

## Connections
Second instalment of the nChain-IP business-ideas series, explicitly cross-referencing "the last post" (the immutable file store) for file encryption. Built on patents EP3268914B1 ("Determining a common secret for two nodes", the "method 42"/DCS family) and EP3257006B1 ("Personal Device Security Using Elliptic Curve Cryptography for Secret Sharing"), with a reference to The Intercept's 2015 TPM-vulnerabilities document. Names BSV-wallet ecosystem companies Handcash and Centbee as integration targets.
