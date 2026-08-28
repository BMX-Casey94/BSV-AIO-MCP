---
title: "The Third Entry: How Cryptography Could Fix the Weakest Link in Accounting"
date: 2026-02-10
slug: the-third-entry-how-cryptography
url: https://singulargrit.substack.com/p/the-third-entry-how-cryptography
themes: [audit-accounting, privacy, identity]
---

# The Third Entry: How Cryptography Could Fix the Weakest Link in Accounting
**Date:** 2026-02-10 | **URL:** https://singulargrit.substack.com/p/the-third-entry-how-cryptography
**Subtitle:** Double-entry bookkeeping has survived for 500 years. Its evidence layer hasn't kept up. Here's a mechanism that changes that — without sacrificing privacy.

## Core thesis
Double-entry bookkeeping, described by Luca Pacioli in 1494, records events beautifully but does not secure evidence: invoices, remittances and statements remain bilateral, mutable and forgeable. Craig presents a formally specified triple-entry mechanism — from a paper submitted to the Journal of Information Systems — in which every bilateral transaction generates a cryptographically committed receipt on an immutable public medium, binding seller's invoice to buyer's payment while keeping all business detail private from unauthorised observers.

## Key arguments and claims
- The lineage is explicit: Yuji Ijiri's 1986 "momentum accounting" proposal, reframed cryptographically by Ian Grigg in 2005, here made precise enough to deploy.
- Each entity holds a long-lived master key that never appears publicly, deriving a fresh deterministic but unlinkable subkey per transaction. Auditors can confirm that (e.g.) 47 subkeys derive from one master via a zero-knowledge Schnorr proof or a simpler master-key attestation, each with an explicit disclosure model and anti-replay protections.
- Counterparties perform an Elliptic-Curve Diffie–Hellman (ECDH) exchange per transaction; from the shared secret they derive an invoice linkage tag, a payment linkage tag, and a binding key — making the invoice–payment link provable to the parties yet invisible to outsiders.
- Published notes contain binding tags (keyed-hash fingerprints of each field) rather than plaintext: computational binding prevents retroactive alteration, pre-image resistance preserves confidentiality, and selective disclosure lets either party open individual fields for an auditor.
- A full note is about 720 bytes; a mid-sized company processing 50,000 invoices per month generates roughly 36 MB of note data, with all cryptographic operations taking under one minute on a single thread. A reference prototype runs a full invoice–payment cycle in 1.2 milliseconds — 72 million cycles per day per thread.
- A concrete five-step auditor protocol is specified: existence, linkage, ECDH verification, opening-and-arithmetic, and identity continuity (engagement-scoped, with sequence counters against replay).
- Messy commerce is handled uniformly: partial payments carry a binding tag over remaining balance; overpayments trigger linked credit notes; netting notes commit to the algebraic sum of referenced invoices and credits.
- The mechanism is evaluated against the five financial statement assertions in auditing standards (ISA 315, AU-C 315), transforming auditing from sample-based to population-level: every private ledger entry is deterministically matched against its public counterpart, with unmatched entries flagged in either direction.
- Security is argued by reduction, not proximity to blockchain: five formal propositions reduce accounting properties to named assumptions — signature unforgeability, hash collision resistance, pre-image resistance plus Computational Diffie–Hellman, CDH for linkage integrity, and hash determinism for selective disclosure.
- Adoption does not require network effects: benefits accrue at the dyad level from the first transaction, diffusing bilaterally like EDI in the 1990s, with auditor demand as a potential catalyst.

## How Craig reasons (his model/logic)
Design-science methodology: take decades-old primitives (ECDH, hash functions, signatures, hierarchical deterministic keys) and integrate them systematically into an accounting-evidence artefact, then evaluate it against the doctrines that actually govern audit — financial statement assertions, threat-model-to-control mapping, and a benchmarked prototype. Each security claim is reduced to an explicit cryptographic assumption so it is clear what breaks if the assumption fails.

## Where this contradicts BTC-mainstream logic
No direct engagement — this post is a medium-agnostic accounting mechanism, explicitly "not a blockchain paper" (it runs on Ethereum, Hyperledger Fabric, or any notarised append-only log). Its implicit rebuke is aimed at mainstream blockchain-accounting literature, which "stops at 'it's immutable' and wave[s] its hands" rather than specifying what an auditor receives step by step.

## Notable quotes
- "The public record stores evidence, not information."
- "The mechanism pays for itself at the first dyad."
- "Most blockchain-accounting papers describe what the auditor could do. This one specifies what the auditor receives, step by step, and explicitly states what is and is not revealed."
- "The bottleneck will never be the cryptography."

## Connections
Extends Craig's long-standing triple-entry accounting work and his audit-and-evidence theme; the hierarchical-key and selective-disclosure architecture overlaps with his identity and privacy essays, and the reliance on a cheap, high-throughput immutable public medium connects to his scaling arguments for BSV.
