---
title: "Shuffling the Deck Without a Dealer"
era: substack
date: 2026-04-23
slug: shuffling-the-deck-without-a-dealer
themes: [privacy, script-technical, tokenisation, security-economics]
source_summary: summaries/shuffling-the-deck-without-a-dealer.md
url: https://singulargrit.substack.com/p/shuffling-the-deck-without-a-dealer
---

# Shuffling the Deck Without a Dealer — core principles

- **Match the object to the consensus primitive that already provides its semantics.** A card is a one-shot object, and single-use is a consensus-level primitive in the UTXO model rather than an expensive application-layer simulation: "a card is not an entry in an ERC-721 mapping; a card is a spent or unspent output."
- **Mental poker was solved cryptographically decades ago; the substrate was missing.** The 1979 SRA scheme leaked (Goldwasser–Micali 1984 distinguished suits via quadratic residuosity); Crépeau (1986/87) and Barnett–Smart (2003) rebuilt it on ElGamal, zero-knowledge shuffle proofs and DDH — deployment waited on a cheap UTXO chain, consumer TEEs and screen-capture defences, not on new cryptography.
- **A multi-party shuffle can be built from per-card scalars that no one ever assembles.** Each player holds per-card scalars derived via HKDF from a TEE-resident ECDH key; card j is locked by combined public key Q_j = Σ P_{p,j}, whose private counterpart is known to no one; each player re-randomises every point and permutes the deck, with indistinguishability reducing to DDH on secp256k1.
- **On-chain commitments make cheating detectable and punishable.** SHA-256 commitments to each shuffle stage posted to the chain bind the players; deviation is detectable at close-out and collateral is forfeit — the ledger is the referee, not a participant.
- **Single-use reveal tokens fix the naïve key handover.** Revealing by surrendering scalars fails (reusable secret, long-term key leakage, no context binding); HKDF-derived reveal tokens valid exactly once and bound to game, card, draw position, block height and recipient solve all three.
- **Threshold ECDSA spends look like ordinary signatures.** The Savanah–Wright protocol (WO 2019/034951 A1) produces an ordinary (r, s) signature at OP_CHECKSIG with Berlekamp–Welch tolerance of malicious partials — no fork, no new opcode, no multisig script required.
- **The reveal endpoint is part of the threat model.** Screen protection (Android FLAG_SECURE, ScreenCaptureCallback; iOS UIScreen.isCaptured) and key custody in Secure Enclave, TrustZone or SGX are first-class design concerns; physical photography of the screen is conceded as undefeatable — the aim is raising attack cost, not perfection.
- **Byte-priced, non-congestive fees decide commercial viability.** A 4-player 52-card hand costs ~8,124 bytes ≈ 4,062 satoshis ≈ 0.12 US cents at 0.5 sat/byte and $30/BSV, against $0.50–$50 on congestive fee markets; per-game cost variance of 10× or more is a structural property of congestion pricing, not an engineering oversight — and a serious protocol states its limitations rather than dissolving them.
