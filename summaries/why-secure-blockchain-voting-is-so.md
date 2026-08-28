---
title: "Why Secure Blockchain Voting is So Hard: A Deep Dive into True Anonymity, ECDSA Blinding, and the Myths of Digital Democracy"
date: 2025-07-31
slug: why-secure-blockchain-voting-is-so
url: https://singulargrit.substack.com/p/why-secure-blockchain-voting-is-so
themes: [privacy, identity, governance-decentralisation, lightning-l2]
---

# Why Secure Blockchain Voting is So Hard: A Deep Dive into True Anonymity, ECDSA Blinding, and the Myths of Digital Democracy
**Date:** 2025-07-31 | **URL:** https://singulargrit.substack.com/p/why-secure-blockchain-voting-is-so
**Subtitle:** Why You Can’t Safely Vote from Your Sofa: The Cryptographic Minefield of Digital Democracy

## Core thesis
Blockchain voting proposals commit a philosophical category error by treating votes as payments: payments thrive on accountability, votes require its opposite. A legitimate digital ballot must simultaneously deliver unlinkability, deniability, verifiability without traceability, and coercion resistance — properties achievable only through ECDSA blinding, mixnets and zero-knowledge proofs, and structurally impossible for remote voting from the home.

## Key arguments and claims
- The core misunderstanding: a vote is not a coin. Voting "must prove that you are allowed to vote, while ensuring that no one can ever know how you voted". Signature-based validation, unless blinded, anchors a vote to its originator, and "Identity is not eligibility, and conflating them enables coercion."
- Four non-negotiable properties are defined: unlinkability (no trace from vote to voter), deniability (plausible denial of how one voted), verifiability without traceability, and coercion resistance (no mechanism exists to prove your vote to a coercer, even if you wanted to).
- Standard ECDSA "is deterministic in its linkage" — it ties signature to key to voter. ECDSA blinding supplies the escape: the voter blinds the vote, the election authority signs the blinded cipher without seeing its contents, and the voter unblinds to obtain a valid, unlinkable endorsement — the digital equivalent of the electoral roll being marked while the envelope stays sealed.
- Blinding is almost never deployed, for three stated reasons: implementation complexity (browsers, mobile platforms and server tools lack native blind-ECDSA support), incompatibility with existing PKI ("built to identify people and services, not to anonymise them"), and the inverted verification flow (validation must happen after signature, not before).
- Coercion is a contextual, not cryptographic, failure: "Coercion rarely looks like violence. It looks like 'prove it to me.'" Receipts and verifiability tokens are weaponisable; no checkbox marked "I'm voting alone" enforces solitude. "Any protocol allowing home voting while claiming coercion resistance is not merely flawed—it is dishonest."
- Endemic design failures are catalogued: credential linkage (reused credentials form a statistical fingerprint — "Hashes are not anonymity. They are pseudonymity with a time delay"), verification leakage (inclusion proofs, timestamps and ordering metadata enable correlation), re-encryption without provable unlinkability, and the absence of zero-knowledge proofs of valid inclusion.
- The trade-offs are structural incompatibilities, not engineering compromises: verifiability versus coercion resistance, eligibility versus anonymity, convenience versus security. "You cannot have partial secrecy... In digital democracy, half-measures are broken measures."
- A legitimate blockchain protocol would require: blinded credential authorisation; one-time vote commitments with no identifier reuse; mixnets or homomorphic/zero-knowledge tallying; no re-submission and no receipts ("All confirmation mechanisms must prove participation, not content"); and on-chain immutability without traceability — "The ledger must record events, not people."
- Why no one builds it: expense, the demand that voters "trust mathematics, not logos", and that no government "has yet proven willing to engineer a system that even they cannot surveil".
- Crypto governance is a cargo cult: token-weighted DAO voting is "capitalised shouting... shareholder meetings in disguise"; Ethereum governance offers "transparency but no anonymity, verification but no deniability"; Bitcoin hash-power signalling counts only industrial miners; Lightning-based voting is "like using a shared taxi to deliver your secret ballot".

## How Craig reasons (his model/logic)
The method is cryptographic first-principles combined with adversarial threat modelling: coercion is analysed as a property of physical and social context, not of code, and each proposed system is tested against a fixed quartet of requirements. Failures are taxonomised — linkage, leakage, pseudo-shuffling, missing proofs — and shown to follow logically from grafting convenience-first payments design onto a problem that demands "hostility to observability".

## Where this contradicts BTC-mainstream logic
- Rejects the "use Bitcoin for voting because it's immutable" refrain: "Immutability without unlinkability is just a perfect surveillance log."
- Dismisses Lightning as a voting substrate: channel-based, identifiable, and contingent on bilateral cooperation — "the antithesis of anonymity".
- Treats BTC hash-power "voting" as miner signalling, not democracy, and extends the charge to ETH/DAO governance: plutocratic token-weighting dressed as democratic process.
- Inverts the mainstream crypto instinct for maximal transparency: here, receipts and inclusion proofs are attack vectors, not features.

## Notable quotes
- "Identity is not eligibility, and conflating them enables coercion."
- "Hashes are not anonymity. They are pseudonymity with a time delay."
- "Immutability without unlinkability is just a perfect surveillance log."
- "It is panopticon politics on a chain."

## Connections
A notable counterweight within the corpus: where the micropayment essays celebrate total on-chain legibility, this essay insists immutability must be harnessed while "violently rejecting identifiability" — proof that his ledger thinking is conditioned on context, and consistent with his wider scepticism of Lightning and of governance-by-token.
