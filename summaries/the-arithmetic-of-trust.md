---
title: "The Arithmetic of Trust"
date: 2026-05-29
slug: the-arithmetic-of-trust
url: https://singulargrit.substack.com/p/the-arithmetic-of-trust
themes: [audit-accounting, privacy, spv-light-clients]
---

# The Arithmetic of Trust
**Date:** 2026-05-29 | **URL:** https://singulargrit.substack.com/p/the-arithmetic-of-trust
**Subtitle:** Verifiable accounting arithmetic without disclosure — why the next age of audit will not be built on more documents, but on proofs

## Core thesis
Accounting's central conflict is that everyone wants truth but nobody wants disclosure: full disclosure destroys commercial privacy, redaction destroys verification, and management summaries produce "trust me". The essay claims accounting arithmetic can be verified without disclosing the underlying values, through an integrated architecture of cryptographic commitments, Merkle inclusion proofs, selective proof retrieval, and zero-knowledge arithmetic. Accounting systems thereby cease to produce only records and begin to produce proofs — a new class of audit evidence with explicitly stated limits.

## Key arguments and claims
- Records are assertions, not truth: an invoice asserts a sale, a reconciliation asserts correspondence; documents can be selected, altered, reconstructed, misclassified, redacted, or misunderstood.
- The architecture: ERP capture → each value committed (fixed but hidden) → commitments anchored in an evidence population → Merkle proof of inclusion → a selective proof-retrieval layer returning only needed fragments → a zero-knowledge proof that hidden values satisfy a specified equation → the verifier learns the calculation is correct but not the values; selective disclosure remains for authorised exceptions.
- The Merkle Proof Entity patent (WO 2022/100946 A1) proves target data of a blockchain transaction exists on chain from a transaction identifier, Merkle root, block hash and proof; WO 2025/119666 A1 shards, indexes and retrieves Merkle proof portions so that proof scales to millions of accounting events.
- A commitment is "a locked box with a public silhouette": it stops a dishonest party enjoying both secrecy and flexibility — privacy without opportunistic revision.
- Five equations matter: invoice arithmetic (gross = net + tax − discount); the receivables roll-forward (closing = opening + invoices − receipts, credit notes, write-offs); total debits = total credits; bank reconciliation (book cash ± reconciling items = bank balance); VAT/GST payable = output tax − input tax.
- Zero-knowledge proofs prove only the encoded statement: not that invoices were legitimate, goods delivered, write-offs reasonable, recognition compliant with IFRS 15 or ASC 606, or management free of collusion. Range proofs exclude hidden negatives and overflow tricks.
- Merkle alone is insufficient (presence is not arithmetic; inclusion is not correctness); zero-knowledge alone is insufficient (a conjurer can prove a theorem about numbers invented that morning) — the layers must be integrated and anchored to the evidence population.
- The economic frame is Townsend's costly state verification (1979) and disclosure theory (Verrecchia 2001): cheaper, private verification refines institutional design — "when proof becomes cheaper, trust becomes less theatrical."
- Seven risks are named plainly: garbage-in, incomplete population, circuit error, parameter/setup risk, metadata leakage, legal misunderstanding, and "worship" — marketing arithmetic proof as if it were an audit opinion.
- The public medium is "a control dependency, not a deity": it must offer append-only persistence, independently verifiable ordering, durable availability, documented finality, retention, equivocation protection, and audit-suitable governance; the proof server is a servant, never the source of truth.
- The contribution extends five AIS conversations: blockchain/triple-entry accounting, adoption scepticism, smart-contract auditing, continuous monitoring, and layered audit-system research.

## How Craig reasons (his model/logic)
Institutional economics (information asymmetry, costly state verification) married to design-science artefact construction: a hierarchy of proofs in which each mechanism answers exactly one question, with the audit boundary — what the proof does not claim — stated as rigorously as the capability.

## Where this contradicts BTC-mainstream logic
No direct engagement — this post is an accounting-information-systems architecture paper; its only swipe at crypto-mainstream habits is against proposals that "put something 'on-chain' and then bow as if truth had entered the room wearing a crown."

## Notable quotes
- "Trust me is not an accounting control. It is a prayer said by someone holding the pen."
- "A document asks to be believed. A proof demands to be checked."
- "The auditor does not need to see everything to know something. That is not weakness. It is precision."
- "Accounting does not need a glass house. It needs stronger walls with better windows."

## Connections
The companion engineering is "The Builder's Week", whose verifiable-accounting repositories implement the two WIPO patents cited here — though that implementation deliberately refuses zero-knowledge proofs, a live tension with this essay's ZK layer. The concealment-plus-audit motif is developed philosophically in "The Abolition of the Dealer".
