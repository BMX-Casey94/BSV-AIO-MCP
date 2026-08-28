---
title: "Triple-Entry Accounting Has Been Misunderstood"
date: 2026-05-26
slug: triple-entry-accounting-has-been
url: https://singulargrit.substack.com/p/triple-entry-accounting-has-been
themes: [audit-accounting, privacy, law-regulation]
---

# Triple-Entry Accounting Has Been Misunderstood
**Date:** 2026-05-26 | **URL:** https://singulargrit.substack.com/p/triple-entry-accounting-has-been
**Subtitle:** The point was never to make accounting “transparent.” The point was to make evidence harder to forge, easier to reconcile, and more difficult to deny.

## Core thesis
Triple-entry accounting has been misread as putting accounts on a public ledger to achieve "transparency." Its real, narrower, and stronger purpose is evidentiary: a third entry is a shared, tamper-evident, selectively disclosable object between transacting parties that binds invoices, signatures, commitments, and time of publication into a record neither side can later alter undetected. It improves the evidentiary substrate of accounting without abolishing double-entry books, audit judgement, or legal interpretation.

## Key arguments and claims
- Accounting is "an evidence system pretending to be a measurement system." Double-entry solved internal symmetry (every debit meets a credit) but not the inter-organisational evidence problem: "One firm's invoice is not automatically the counterparty's liability." Audit exists largely because accounting records are not self-proving.
- The common mistake is imagining triple-entry means publishing accounts. Publishing every invoice, price, counterparty, and credit term "would not be accounting innovation. It would be corporate self-harm dressed up as transparency." The design requirement is controlled verifiability, not universal disclosure.
- The mechanism: field-level cryptographic commitments, hashes, signatures, and selective disclosure. A firm commits to invoice fields without exposing them and reveals only what an auditor needs for a specific assertion (cut-off, existence, accuracy, occurrence, completeness). Completeness remains hardest — no system can prove no off-system invoice exists.
- Double-entry is not replaced: charts of accounts, subledgers, ERP controls, revenue recognition, and audit trails remain. "The third entry is therefore not the accounting record itself. It is evidence about the accounting record."
- An explicit boundary on cryptography: it can prove a key signed a message, disclosed data matches a commitment, a record existed when anchored, and two records are linked — but it cannot prove goods were delivered, services performed, economic substance, correct revenue recognition, absence of side agreements, or honest management. "Accounting conclusions are richer than cryptographic facts."
- The payment-record overclaim is flagged as the most dangerous: a payer-created payment note proves payer-side intention, not cash receipt. Final settlement evidence requires payee acknowledgement, bank evidence, or payment-rail confirmation; payments can fail, be reversed, netted, or charged back.
- Public anchoring needs a minimum admissible profile: append-only or tamper-evident, durably available for the full accounting-retention period, independently verifiable ordering, a documented finality model, and no dependence on one vendor's promise — otherwise "the evidence has merely moved from the client's database to the vendor's database."
- ERP integration must be process-native: commitments generated at invoice issuance, acknowledgements linked, payment records deterministically referencing the committed invoice, settlement evidence attached. Key custody, segregation of duties, threshold approval, rotation, and recovery must survive staff turnover, insolvency, and litigation holds: "A cryptographic design that cannot survive accounting administration is not an accounting system. It is a demonstration."
- Privacy is framed honestly: contents and linkage can be hidden, but metadata leaks — timing, amount ranges, publication frequency, batching, fee patterns. "The cryptographic layer can do much. It cannot repeal inference."
- Confirmations are reduced, not eliminated: shared signed evidence can answer some assertion-specific questions, but side agreements, collectability, enforceability, and final bank settlement still need external confirmation. Fraud is not prevented but repriced: it shifts from "alter the books quietly" to "create a consistent false evidentiary structure in advance" — harder, more expensive, more coordinated.
## How Craig reasons (his model/logic)
Institutional and evidentiary analysis rather than formal modelling. He treats accounting as a trust-coordination institution whose value depends on evidentiary credibility, then applies a strict discipline of scope: for every cryptographic primitive he states what it proves and where its probative force stops, mapping each tool to the audit assertion it can support. The delay in adoption is blamed on two failures — "technical romanticism" (believing a public ledger solves accounting) and "accounting conservatism" (believing that because cryptography cannot prove everything it proves nothing) — with the serious path between them. The standard of success is a better evidence architecture, "not a miracle machine."

## Where this contradicts BTC-mainstream logic
- Rejects the "transparency" mythology — "the lazy claim that some public ledger magically makes accounts true" — and the fantasy that cryptography proves commercial substance, delivery, performance, or the absence of fraud.
- Rejects "code replaces audit/standards" positions: the end state is "not a world where auditors vanish," "not a world where accounting standards are replaced by code," "not a world where cryptographic proof becomes commercial truth."
- Equally rejects the conservative dismissal that blockchain evidence is useless; audit evidence is cumulative, and the point is "to improve specific evidence for specific assertions under specific assumptions."

## Notable quotes
- "Accounting has always been an evidence system pretending to be a measurement system."
- "This is not 'transparency.' It is controlled verifiability."
- "Good controls do not make wrongdoing impossible. They increase the cost of concealment."

## Connections
The insistence on tamper-evident, timestamped records with verifiable ordering connects to Craig's broader case for an immutable public ledger as evidence infrastructure rather than a transparency engine; the assertion-by-assertion framing complements his meter-verification work, where the same "evidence at the moment of transaction, not during the later audit" logic appears.
