---
title: "Smart-card-based mobile wallets"
era: medium
date: 2019-01-13
slug: smart-card-based-mobile-wallets-9cb75595b71d
themes: [wallets-keys, identity, privacy, security-economics]
source_summary: summaries-medium/smart-card-based-mobile-wallets-9cb75595b71d.md
url: https://medium.com/@craig_10243/smart-card-based-mobile-wallets-9cb75595b71d
---

# Smart-card-based mobile wallets — core principles

- **Composite-key signing splits trust across devices.** The address corresponds to P0 + Pi, where P0 = card secret × G and Pi = wallet secret × G; the card signs with S = wallet secret + card secret, producing a standard composite ECDSA signature (R, S). Neither phone nor card can sign alone, so compromising one device yields nothing.
- **Transmit hashes and public values, never secrets.** The phone constructs the transaction and sends only the hash plus non-secret values over NFC; the card performs a single simple operation. Only non-secret information crosses the interface, defeating interception and power-analysis attacks on transmitted keys.
- **Single-use keys by construction.** Change outputs go to a freshly derived address P(i+1), so each key is used once — while the owner can still attest to a key later without breaking privacy.
- **PKI attestation belongs on addresses, not public keys.** A CA can attest the Bitcoin address (not the public key) of a biometric card's base key, yielding a complete AML/KYC-compatible identity system — UK residency cards, passports — with no on-chain linkage exposed. Identity and privacy are compatible by design.
- **Biometric gating plus physical backup beats seed phrases.** Card and app sign only when the user's biometrics are present; a backup card can sit in a safe, and wallet data can be saved publicly or even on-chain without security loss, because security lives in the split secret rather than in hoarding one key file.
- **Session keys that are never stored.** For device encryption, derive E = SHA256(SHA256(salt + Sn) + serial-number) from a common secret Sn recomputed each cycle from a fresh message Mn held only on the user's keyring device; the key is used for one encrypt/decrypt cycle and exists nowhere at rest.
- **Key evolution per cycle.** VnS = VMS + SHA-256(Mn) and PnS = PMS + SHA-256(Mn) × G yield a new full-strength AES-256 key per session, with per-file or per-folder variants keyed by distinct salts.
- **Hardware-wallet security without the hardware-wallet UX.** The split-secret, biometric model delivers everything sought from dedicated devices such as Ledger, with far more flexibility, and drops into consumer wallets (Handcash and Centbee were the named integration targets).
