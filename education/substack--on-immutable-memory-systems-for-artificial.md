---
title: "On Immutable Memory Systems for Artificial Agents"
era: substack
date: 2025-06-16
slug: on-immutable-memory-systems-for-artificial
themes: [ai-blockchain, protocol-immutability, audit-accounting, privacy]
source: summaries/on-immutable-memory-systems-for-artificial.md
---

# On Immutable Memory Systems for Artificial Agents — core principles

- **Soft memory cannot know.** Stateless models simulate output distributions; their "memory" is a recency-weighted token buffer or vector store with no cryptographic commitment, so hallucination is a structural inevitability rather than a byproduct.
- **Every state transition must be hashed, timestamped and committed.** Extending a finite automaton with a transition ledger — each step hashed as \(h_i = H(q_i \parallel \sigma \parallel q_j \parallel t)\) — yields auditability, non-repudiation, verifiable state and temporal anchoring.
- **Merkle-commit outputs and anchor the root on a public chain.** Batched trees \(M_n\) have their root \(R_n\) written into a blockchain block via a transaction; the recognised language is restricted to strings whose every transition carries an inclusion proof. An unproven output is not merely incorrect — it is non-existent.
- **Provenance is constitutive of fact.** A knowledge fragment without provenance \(p_i\) is not a fact; it is a hallucination. Fine-tuning that overwrites prior embeddings erases evidence of previous beliefs — erosion, not learning.
- **ECDH and HKDF enforce granular, forward-secret access.** A shared secret feeds HKDF with per-fragment context (timestamp, Merkle root, UUID, access class); no general decryptor exists, and a lattice of clearance levels forbids upward traversal.
- **Immutable learning is a DAG of refinements, never deletions.** Committed fragments may be refined by new edges; they may not be erased. That structure prevents catastrophic forgetting, ideological drift and fine-tuning-based historical revisionism.
- **Memory as law: the agent cites, it does not speculate.** Statutes and rules committed as RDF triples with a formal ontology constrain emission to conclusions provably entailed by committed triples — an oracle of permanence in which hallucination is cryptographically forbidden.
- **The architecture presupposes a scalable, low-cost public ledger.** Every memory root is anchored on-chain; that is only practical on a high-throughput chain that can carry frequent, cheap commitments.
