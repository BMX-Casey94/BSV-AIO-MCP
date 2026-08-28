---
title: "Personal Security Device"
era: medium
date: 2018-10-09
slug: personal-security-device-102c2441b5a2
themes: [wallets-keys, identity]
source_summary: summaries-medium/personal-security-device-102c2441b5a2.md
url: https://medium.com/@craig_10243/personal-security-device-102c2441b5a2
---

# Personal Security Device — core principles

- **Design invariant: no secret stored, none transmitted, none reused.** Full-disk encryption in which the key is never stored on the protected device, never passed between user and device, and used for only one encryption/decryption cycle — a new key is calculated for each cycle.
- **Existing unlock methods fail to defined threats.** Short PINs fall to brute force given physical possession; passphrases depend on memory; even USB key delivery can be intercepted through electromagnetic signals during transmission (e.g. power analysis).
- **Two-device master-key architecture.** Laptop (server) and smartphone key-ring (client) each hold a master private key (VMS, VMC) and exchange master public keys (PMS, PMC) on a common ECC standard — for example secp256k1, the Bitcoin curve — with common generator G.
- **Per-cycle key evolution from a fresh message.** A fresh message Mn (Hash160 of a random number, re-hashed with SHA-256) drives new keys: VnS = VMS + SHA-256(Mn) and PnS = PMS + SHA-256(Mn)·G; the laptop computes the shared secret Sn = VnS × PnC without the phone needing to derive it.
- **The encryption key binds the secret to hardware.** E = SHA256(SHA256(salt + Sn) + serial-number), with salt = Mn; E is not stored anywhere, and Mn is not stored on the laptop.
- **Authentication is by ECDSA proof of key evolution.** The phone signs the new message Mn with its newly derived private key; the laptop independently recomputes the phone's new public key and verifies — no shared secret ever crosses the wire.
- **Decryption is a signed retrieval.** The laptop requests the old message Mo; the phone returns it signed with its current-generation key; the laptop recomputes the previous cycle's keys, secret and encryption key to unlock the disk.
- **Variations extend the same primitive.** Use Sn directly as the key where no serial number exists, or run per-file/folder encryption with a key-ring table mapping file IDs to messages, rotating after every access.
- **The phone becomes the wallet key-ring.** A biometric-authenticated phone can act as an authentication and key-management system integrated directly into a Bitcoin wallet — derived, rotating, device-bound keys under biometric control, rather than static seed-phrase backups.
