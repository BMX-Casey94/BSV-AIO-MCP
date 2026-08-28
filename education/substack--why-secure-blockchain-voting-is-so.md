---
title: "Why Secure Blockchain Voting is So Hard: A Deep Dive into True Anonymity, ECDSA Blinding, and the Myths of Digital Democracy"
era: substack
date: 2025-07-31
slug: why-secure-blockchain-voting-is-so
themes: [privacy, identity, governance-decentralisation, lightning-l2]
source: summaries/why-secure-blockchain-voting-is-so.md
---

# Why Secure Blockchain Voting is So Hard — core principles

- **A vote is not a coin.** Payments thrive on accountability; ballots require its opposite. A legitimate digital ballot must deliver unlinkability, deniability, verifiability without traceability, and coercion resistance — simultaneously.
- **Identity is not eligibility.** Conflating them enables coercion. Signature-based validation, unless blinded, anchors a vote to its originator. Standard ECDSA is deterministic in its linkage: signature to key to voter.
- **ECDSA blinding is the sealed envelope.** The voter blinds the ballot, the authority signs the blinded cipher without seeing its contents, and the voter unblinds to obtain a valid, unlinkable endorsement — the roll is marked while the envelope stays sealed.
- **Hashes are not anonymity.** They are pseudonymity with a time delay. Reused credentials form a statistical fingerprint; inclusion proofs, timestamps and ordering metadata enable correlation. Immutability without unlinkability is a perfect surveillance log.
- **Coercion is contextual, not cryptographic.** It looks like “prove it to me.” Receipts and verifiability tokens are weaponisable. Any protocol that allows home voting while claiming coercion resistance is dishonest; no checkbox enforces solitude.
- **The ledger must record events, not people.** A legitimate protocol needs blinded credential authorisation, one-time commitments with no identifier reuse, mixnets or zero-knowledge tallying, no receipts that prove content, and on-chain immutability without traceability.
- **Half-measures are broken measures.** Verifiability versus coercion resistance, eligibility versus anonymity, convenience versus security are structural incompatibilities, not engineering compromises. You cannot have partial secrecy in digital democracy.
