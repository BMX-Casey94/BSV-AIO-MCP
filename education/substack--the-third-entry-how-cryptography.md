---
title: "The Third Entry: How Cryptography Could Fix the Weakest Link in Accounting"
era: substack
date: 2026-02-10
slug: the-third-entry-how-cryptography
themes: [audit-accounting, privacy, identity]
source_summary: summaries/the-third-entry-how-cryptography.md
url: https://singulargrit.substack.com/p/the-third-entry-how-cryptography
---

# The Third Entry: How Cryptography Could Fix the Weakest Link in Accounting — core principles

- **Double-entry secures records, not evidence.** Pacioli's 1494 bookkeeping records events beautifully, but invoices, remittances and statements remain bilateral, mutable and forgeable; the evidence layer has not kept up with the record layer.
- **Triple-entry adds a committed public receipt.** Every bilateral transaction generates a cryptographically committed receipt on an immutable public medium, binding the seller's invoice to the buyer's payment — the lineage runs Ijiri's 1986 momentum accounting, reframed cryptographically by Ian Grigg in 2005, here specified precisely enough to deploy.
- **Hierarchical keys give privacy with auditability.** Each entity holds a long-lived master key that never appears publicly and derives a fresh deterministic but unlinkable subkey per transaction; an auditor can confirm that (e.g.) 47 subkeys derive from one master via a zero-knowledge Schnorr proof or a simpler master-key attestation, each with an explicit disclosure model and anti-replay protection.
- **ECDH links invoice to payment invisibly.** Counterparties perform an Elliptic-Curve Diffie–Hellman exchange per transaction; from the shared secret they derive an invoice linkage tag, a payment linkage tag and a binding key — the link is provable to the parties and invisible to outsiders.
- **The public record stores evidence, not information.** Published notes carry binding tags (keyed-hash fingerprints of each field) rather than plaintext: computational binding prevents retroactive alteration, pre-image resistance preserves confidentiality, and selective disclosure lets either party open individual fields for an auditor.
- **The cryptography is never the bottleneck.** A full note is about 720 bytes; a mid-sized company processing 50,000 invoices a month generates roughly 36 MB of note data; a reference prototype runs a full invoice–payment cycle in 1.2 milliseconds — 72 million cycles per day per thread.
- **Auditing becomes population-level, not sample-based.** A five-step auditor protocol (existence, linkage, ECDH verification, opening-and-arithmetic, identity continuity with engagement-scoped sequence counters) is evaluated against the five financial statement assertions of ISA 315 / AU-C 315: every private ledger entry is deterministically matched against its public counterpart, with unmatched entries flagged in either direction.
- **Messy commerce is handled uniformly.** Partial payments carry a binding tag over the remaining balance; overpayments trigger linked credit notes; netting notes commit to the algebraic sum of referenced invoices and credits.
- **Security is argued by reduction, not by proximity to a blockchain.** Five formal propositions reduce the accounting properties to named assumptions — signature unforgeability, hash collision resistance, pre-image resistance plus Computational Diffie–Hellman, CDH for linkage integrity, and hash determinism for selective disclosure — so it is clear exactly what breaks if an assumption fails.
- **Adoption pays at the first dyad.** Benefits accrue bilaterally from the first transaction, diffusing like EDI in the 1990s with auditor demand as catalyst — but the mechanism presupposes a cheap, high-throughput immutable public medium, which is precisely what a scaled Bitcoin ledger provides.
