---
title: 'Personal Security Device'
date: 2018-10-09
slug: personal-security-device-102c2441b5a2
url: https://medium.com/@craig_10243/personal-security-device-102c2441b5a2
themes: [wallets-keys, identity]
---

# Personal Security Device
**Date:** 2018-10-09 | **URL:** https://medium.com/@craig_10243/personal-security-device-102c2441b5a2
**Subtitle:** The last week, another of the patent applications related to my papers received a grant. This research proposes a methodology to encrypt…

## Core thesis
Announcing another granted patent (EP3257006B1), Craig describes full-disk encryption for a laptop or PC where no key is ever stored on the device: the smartphone holds a one-time "message" from which both devices recompute the encryption key each session, so every key is used once and never transmitted. The scheme is built on his earlier "Determining a common secret" (DCS) patent using secp256k1 — the same curve as Bitcoin — and he pitches the smartphone-plus-biometrics key-ring as integrable "directly into a Bitcoin wallet" for authentication and key management.

## Key arguments and claims
- Existing disk-encryption unlock methods all fail in different ways: 4-8 character PINs fall to brute force with physical possession; passphrases depend on memory; even USB key delivery "can still be intercepted due to the electromagnetic signals generated during transmission (e.g. via power analysis)" — citing the Intercept's TPM/BitLocker power-analysis document.
- The fix: "enabling the personal device to calculate the secret based on transmission of only non-secret information by an authenticated user" — a full-strength AES256 key "that is never passed between user and device", recalculated per cycle and used only once.
- Architecture: laptop ("Server") and smartphone key-ring ("Client") each hold a master private key (VMS, VMC) and exchange master public keys (PMS, PMC); both use the same ECC standard, "for example secp256k1", with common generator G.
- Per-cycle key evolution: a fresh message Mn (Hash160 of a random number, hashed again with SHA-256) drives new keys — VnS = VMS + SHA-256(Mn), PnS = PMS + SHA-256(Mn) × G — and the laptop computes secret Sn = VnS × PnC without the phone needing to derive it.
- The actual encryption key binds secret to hardware: E = SHA256(SHA256(salt + Sn) + serial-number), with salt = Mn; "The encryption key E is not stored anywhere, and message Mn is not stored on the laptop."
- Authentication is by ECDSA proof of key evolution: the phone signs the new message Mn with its newly derived private key, and the laptop independently recomputes the phone's new public key and verifies — no shared secret ever crosses the wire.
- Decryption is a signed retrieval: the laptop requests the old message Mo, the phone returns it signed with its current-generation key, and the laptop recomputes the previous cycle's keys, secret and encryption key to unlock the disk.
- Variations: use Sn directly as the key where no serial number exists; or per-file/folder encryption with a table on the key-ring mapping file IDs to messages, rotating after every access.
- The strategic claim: a biometric-authenticated phone "can act as an authentication and a key-management system… directly integrated into a Bitcoin wallet", using the same keys "to authenticate to servers and devices, and as a means to incentivise security in the habits of people generally".

## How Craig reasons (his model/logic)
Patent-exposition mode: numbered protocol steps, defined notation (VMS/PMS/VMC/PMC), explicit exclusions, and footnoted variations — the structure of a specification rather than an argument. The reasoning is threat-model driven: each existing unlock method is paired with its defeat (brute force, memory failure, power analysis), and the design goal is stated as an invariant — no secret stored on the protected device, no secret transmitted, no key reused. The DCS patent functions as a reusable cryptographic primitive he plugs new applications into, and the Bitcoin wallet integration is asserted as an application of the same key hierarchy rather than argued.

## Where this contradicts BTC-mainstream logic
- No direct engagement with BTC orthodoxy — this is a patent walkthrough, not a protocol polemic. The friction is implicit: against the seed-phrase/paper-backup key-management culture of 2018 crypto, Craig models keys as derived, rotating, and device-bound under biometric control — key management as enterprise infrastructure rather than personal mnemonic sovereignty.
- Also quietly against "not your keys, not your coins" purism in its trust model: security is anchored in an authenticated second device and a patented protocol, i.e. proprietary, licensable infrastructure — the opposite of the open, permissionless tooling ethos.

## Notable quotes
- "The encryption/decryption key is a full-strength cryptographic key (e.g. AES256) that is never passed between user and device."
- "The encryption key is used for only one encryption/decryption cycle. A new key is calculated for each cycle."
- "The encryption key E is not stored anywhere, and message Mn is not stored on the laptop."
- "We can allow a trusted device (or even a set of devices) that are trusted and authenticated (such as a mobile phone with biometrics) to act as an authentication and a key-management system."
- "This can be directly integrated into a Bitcoin wallet."

## Connections
Builds directly on the DCS patent EP3268914B1 ("Determining a common secret for two nodes") — the same hierarchical deterministic key mechanism cited in "Creating a Smart Contract Registry" (three days earlier) for deriving contract sub-keys, showing how Craig cross-applies one patented primitive across contracts, wallets and device security. Part of the October 2018 run of nChain patent announcements; the biometric-phone-as-key-ring idea anticipates his later BSV-era writing on identity-bound wallets and key recovery.
