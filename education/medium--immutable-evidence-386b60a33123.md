---
title: "Immutable evidence"
era: medium
date: 2019-02-16
slug: immutable-evidence-386b60a33123
themes: [audit-accounting, protocol-immutability, lightning-l2, law-regulation]
source_summary: summaries-medium/immutable-evidence-386b60a33123.md
url: https://medium.com/@craig_10243/immutable-evidence-386b60a33123
---

# Immutable evidence — core principles

- **Bitcoin is an immutable evidence trail admissible in court.** That is the defining function. Off-chain constructions (sidechains, Lightning, Plasma) exist to delete records; a public ledger exists to preserve them.
- **WORM means unique, not merely write-once.** SEA Rule 17a-4(f) and FINRA 10–06 / 11–32 / 11–39 require non-rewriteable, non-erasable capture of all necessary ESI. Optical media fail: CDR/DVDr copies can be multiplied and rewritten as new 'immutable' copies — the Enron/Madoff multiple-ledger problem.
- **One public ledger is the only source of truth.** If an organisation can run multiple private chains, there cannot be a definitive record. Only a single global public ledger makes alternate ledgers impossible.
- **A registered master key plus a daily hash chain proves uniqueness.** Master ECDSA key P(m) = S(master) × G; a secret S(lodge) is lodged with the regulator; Hash[i] = Hash[Hash[i-1]] through the year; daily address P(Day 1) = P(m) + (Hash[365]).G; each day's backup hash is written via OP_RETURN. There can be one and only one value that follows.
- **Regulators verify without seeing the books.** The construction lets a supervisor independently confirm that one ledger is the only ledger, while the organisation's accounts remain private to outsiders.
- **Miners alone are nodes.** Only block-producers have any impact; a system that does not create blocks is not a node, per white-paper section 5.
- **Confiscation and recovery are real.** The claim that nothing can be confiscated is fiction; even anonymous eCash was regularly traced and recovered, and Bitcoin's audit trail makes that stronger, not weaker.
- **Existing BSV scale already maps account records.** The ledger is already sufficient to hold organisational backups immutably; computer-aided audit techniques can then alert on anomalies in real time.
