---
title: "The Audit Evidence Problem Public Ledgers Were Supposed to Solve"
date: 2026-07-09
slug: the-audit-evidence-problem-public
url: https://singulargrit.substack.com/p/the-audit-evidence-problem-public
themes: [audit-accounting, privacy]
---

# The Audit Evidence Problem Public Ledgers Were Supposed to Solve
**Date:** 2026-07-09 | **URL:** https://singulargrit.substack.com/p/the-audit-evidence-problem-public
**Subtitle:** Why the useful accounting question is not "can we put records on-chain?" but "can an auditor inspect one genuine field, verify its prior commitment, and avoid exposing everything else?"

## Core thesis
The most common mistake in blockchain accounting is to begin with the ledger, which leads to two dead ends: publishing records on a public chain (commercially naïve and legally reckless) or hiding them entirely behind zero-knowledge predicates (which never lets the examiner inspect the actual value). The useful architecture is field-level selective disclosure: commit each accounting field into a Merkle tree, anchor only the root publicly, and later disclose the single field under examination with its nonce and inclusion proof — the examiner gets the genuine field plus independent verification that it is the field previously committed, while everything else stays confidential.

## Key arguments and claims
- Audit and tax examination are exercises in evidence, not ledger admiration: the examiner asks granular field-level questions — the tax amount on this invoice, the date used, the counterparty recorded, the code applied, and whether the figure shown now is the figure that existed then.
- The architecture: each field (invoice date, counterparty identifier, tax code, net/tax/gross amounts, payment reference, write-off amount) is canonically encoded, combined with a per-field nonce (essential because dates, tax codes and common amounts are low-entropy and otherwise dictionary-attackable), hashed, and folded into a Merkle tree; only the root is anchored publicly — "privacy by committing publicly and disclosing selectively".
- The claim is narrow and strong: a ledger commitment does not show that goods were delivered, a receivable is collectible, a counterparty is independent, or a transaction has commercial substance. "A committed falsehood remains false." It proves only fidelity of the disclosed field to the committed record, and the commitment's timing.
- Mapped to audit assertions: strongest for integrity and timing of committed fields; supports arithmetic accuracy by recomputation; contributes to existence/occurrence of the committed record only; does not establish commercial substance, valuation, collectability, related-party status, delivery, management intent or legal enforceability. Completeness requires population controls.
- The workpaper is the discipline: a sufficient workpaper identifies the field, disclosed value, nonce, inclusion path, committed root, public-medium reference, verifier output, timestamp evidence, the assertion supported, and the residual procedures — otherwise "the proof risks becoming a technical artefact detached from audit reasoning".
- The public medium is a control dependency to be assessed, not assumed: it must provide public verifiability, durable commitment carriage, timestamping/ordering, settlement finality, reorganisation resistance and accessible verification. The reference implementation uses a Bitcoin BSV environment "because it supports low-cost script-carried commitments at scale", but the contribution is medium-independent — "BSV is an implementation case, not the theory."
- The sidecar model: the system sits beside the ERP/accounting system, creating an evidential commitment at record creation, payment or reconciliation; no ledger replacement, no audit-methodology change, and unilateral adoption yields value before any trading partner joins.
- Use cases: VAT/GST/sales-tax examination (the authority gets the tax amount and code, verifies against prior commitment, and never receives unrelated line items — "proportionality in tax examination"); receivables audit with recomputation of a roll-forward; internal-audit control testing; forensic work on backdating — always with the "garbage in" boundary explicit, since a fraudster can commit a false invoice as easily as a truthful one.
- A structured expert benchmark (six profiles: audit partner, tax compliance reviewer, AIS academic, IT audit manager, forensic accountant, internal controls specialist) tests interpretability — the main danger being junior staff treating a clean green tick as substantive assurance.
- Edge cases are treated as accounting and control-design problems: corrections are committed and linked, never overwritten; assignments and factoring link original commitments to later transfers without proving legal validity; medium migration documents old roots, new roots and verification continuity.

## How Craig reasons (his model/logic)
Design-science accounting research: specify design requirements, implement, map technical outputs to audit assertions, identify control dependencies and failure modes, and translate everything into workpaper logic. The method is defined by its named boundaries (completeness, economic substance, public-medium dependency, workpaper sufficiency, over-reliance), with the "can/cannot verify" line kept central.

## Where this contradicts BTC-mainstream logic
- Against "put the records on-chain": publishing ordinary commercial records publicly is "commercially naïve and legally reckless"; the future "will not be a single universal ledger containing all records".
- Against "immutability proves the transaction": a successful proof is corroborative documentary evidence of a committed field, never evidence that the underlying transaction occurred — the workpaper should say "the disclosed field was verified against a prior public commitment", not "blockchain verified the transaction".
- Against trustlessness rhetoric: "It does not make accounting trustless. Accounting cannot be trustless because records must still represent economic events, controls must still operate, and professionals must still judge."

## Notable quotes
- "A committed falsehood remains false."
- "The public ledger should not contain the accounting record. It should contain a commitment to the record."
- "The proof is corroborative documentary evidence. It is not a substitute for professional judgement."
- "That is not a revolution in audit judgement. It is a disciplined improvement in audit evidence."

## Connections
The settlement-finality and reorganisation-resistance requirements for the commitment medium connect to the four-finalities analysis of "Nobody Asks Where Your Banknote Has Been" and the probabilistic-settlement critique in "The Dial That Used to Be Fixed".
