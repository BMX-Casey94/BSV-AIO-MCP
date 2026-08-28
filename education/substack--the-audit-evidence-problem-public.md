---
title: "The Audit Evidence Problem Public Ledgers Were Supposed to Solve"
date: 2026-07-09
era: substack
themes: [audit-accounting, privacy]
source: summaries/the-audit-evidence-problem-public.md
---

# The Audit Evidence Problem Public Ledgers Were Supposed to Solve — core principles

- **The public ledger holds a commitment, not the books.** Each accounting field is canonically encoded with a per-field nonce, hashed, and folded into a Merkle tree; only the root is anchored. The examiner later receives one genuine field plus its nonce and inclusion proof — independent verification that it is the field previously committed, while everything else stays confidential.
- **Nonces are essential for low-entropy fields.** Dates, tax codes and common amounts are otherwise dictionary-attackable; a per-field nonce makes the commitment private until selective disclosure.
- **A committed falsehood remains false.** The proof shows fidelity of the disclosed field to the committed record, and the commitment's timing. It does not show delivery, collectability, independence, commercial substance or honest management.
- **Map proofs to audit assertions, not to "the transaction".** Strongest for integrity and timing of committed fields; supports arithmetic accuracy by recomputation; contributes only to existence of the committed record. Completeness still needs population controls; valuation, related-party status and legal enforceability remain professional judgement.
- **The workpaper is the discipline.** Identify the field, disclosed value, nonce, inclusion path, committed root, public-medium reference, verifier output, timestamp evidence, the assertion supported, and the residual procedures — otherwise the proof becomes a technical artefact detached from audit reasoning.
- **The public medium is a control dependency.** It must offer public verifiability, durable commitment carriage, timestamping and ordering, settlement finality, reorganisation resistance and accessible verification. Low-cost script-carried commitments at scale (as on BSV) are an implementation case, not the theory.
- **A sidecar, not a replacement ledger.** Commitments sit beside the ERP at record creation, payment or reconciliation. Unilateral adoption yields value before any trading partner joins; no audit-methodology change is required.
- **Corrections are committed and linked, never overwritten.** Assignments and factoring link original commitments to later transfers without proving legal validity; medium migration documents old roots, new roots and verification continuity.
- **Accounting cannot be trustless.** Records must still represent economic events, controls must still operate, and professionals must still judge. A clean verification tick is corroborative documentary evidence, not a substitute for that judgement.
