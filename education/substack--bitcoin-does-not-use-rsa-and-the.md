---
title: "Bitcoin Does Not Use RSA — And the Quantum Machine That Would Attack It Does Not Exist"
era: substack
date: 2026-04-10
slug: bitcoin-does-not-use-rsa-and-the
themes: [quantum-scepticism, wallets-keys, property-rights, security-economics]
source_summary: summaries/bitcoin-does-not-use-rsa-and-the.md
url: https://singulargrit.substack.com/p/bitcoin-does-not-use-rsa-and-the
---

# Bitcoin Does Not Use RSA — core principles

- **Bitcoin's security is verifiable authorisation, not secrecy.** The system uses ECDSA signatures over secp256k1 and encrypts nothing — the ledger, transaction graph and balances are public — so the hypothetical quantum attack is private-key recovery enabling forgery, never "decryption"; there is nothing to decrypt.
- **secp256k1's attack threshold is lower than RSA-2048's.** Estimates put an elliptic-curve attack at roughly 2,330 logical qubits and ~126 billion Toffoli gates, against ~20,000 logical qubits for RSA-2048 — the slogan "nowhere near breaking RSA" implies nothing about Bitcoin, and builders should do the arithmetic rather than borrow talking points.
- **Physical-machine requirements make in-flight attacks absurd.** A ten-minute mempool interception needs ~1.9 billion physical qubits, a one-hour attack ~317 million, a one-day attack on already-exposed keys ~13 million at ~10 W per qubit (~130 MW continuous draw) — against a ten-minute average block interval, this is a civilisation-scale machine.
- **Quantum exposure is stratified by output class, and wallet hygiene determines it.** P2PK outputs carry public keys openly in the locking script (permanent exposure whenever a machine exists); P2PKH outputs are hash-protected by SHA-256/RIPEMD-160 until first spend; address reuse converts hash protection into permanent exposure — so fresh keys per payment is a security control, not a privacy nicety.
- **Grover's algorithm does not rescue panic.** Grover-reduced SHA-256 still offers ~128-bit effective security; hash functions are not the weak link.
- **A rational threat model predicts selective, not universal, theft.** Even an existing machine implies state-scale targeting of large dormant balances at millions of dollars per key — threat assessment should price attacks, not narrate apocalypses, because "universal destiny raises more money than selective strategic capability".
- **Freeze-or-burn "quantum migration" proposals are a property-rights trap.** Permanently exposed dormant coins (including P2PK-era coins) cannot be migrated by absent owners; freezing them by consensus is collective adjudication of private property and destroys the principle that the network never discriminates among UTXOs — protocol neutrality is the defence, not the casualty.
