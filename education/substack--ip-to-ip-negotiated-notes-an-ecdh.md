---
title: "IP-to-IP Negotiated Notes: An ECDH-Derived, Multi-Transfer Wallet Protocol for Private, Settled Digital-Cash Payments"
era: substack
date: 2025-08-26
slug: ip-to-ip-negotiated-notes-an-ecdh
themes: [privacy, wallets-keys, script-technical, networking]
source_summary: summaries/ip-to-ip-negotiated-notes-an-ecdh.md
url: https://singulargrit.substack.com/p/ip-to-ip-negotiated-notes-an-ecdh
---

# IP-to-IP Negotiated Notes: An ECDH-Derived, Multi-Transfer Wallet Protocol for Private, Settled Digital-Cash Payments — core principles

- **One payment can settle as many independent standard P2PKH notes, all derived from a per-invoice scope.** Identity keys authenticate the off-chain channel and feed ECDH but never appear on-chain: Z := ECDH(kₐ, Pᵦ) (32-byte x-coordinate) and Hᴵ := SHA-256(canonical_json(invoice)) jointly scope every derivation; cross-invoice reuse is forbidden by construction.
- **Per-note recipient keys are tweak-derived and payee-only spendable.** tᵢ := int(SHA-256(Z ∥ Hᴵ ∥ "recv" ∥ LE32(i))) mod n; the sender computes Pᴮ,ᵢ = B + tᵢ·G and a standard Base58Check P2PKH address, while only the payee derives kᴮ,ᵢ = (b + tᵢ) mod n — sender recovery of kᴮ,ᵢ would solve the secp256k1 discrete-log problem.
- **Change uses a separate domain and never cross-funds.** Sender change derives under the "snd" label (sᵢ, Pᴬ,ᵢ = A + sᵢ·G); change from note i never funds another note in the same invoice, eliminating the shared-change clustering heuristic.
- **Note splitting is bounded, deterministic and exactly summing.** With payee bounds [v_min, v_max], feasibility is N_min = ⌈T ÷ v_max⌉ ≤ N ≤ ⌊T ÷ v_min⌋ = N_max; prefix-clamped draws (low := max(v_min, rem − v_max·slots); high := min(v_max, rem − v_min·slots)) guarantee Σ aᵢ = T, then a seeded Fisher–Yates permutation destroys index-to-size correlation.
- **Disjoint coin selection is the backbone of unlinkability.** A reservation table assigns each note an exclusive input set (Sᵢ ∩ Sⱼ = ∅), ordered deterministically with a bounded-knapsack preference (exact match → single-input near-over → fewest inputs, minimal overshoot), and at most one preparatory payer→payer fan-out per invoice.
- **Standard transaction arithmetic throughout.** Size ≈ 10 + 148·m + 34·n bytes; fee := ceil(feerate_floor × size); dust threshold enforced; legacy SIGHASH_ALL signing with low-s normalisation — "no new opcodes, no new script types, no new cryptographic gadgets".
- **Either party may broadcast; pacing is deterministic.** Both sides may submit any subset at any time (duplicate submission is benign — same txid); pacing schedules derive from S_pace := H(Z ∥ Hᴵ ∥ "pace"); settlement finality is the payee's confirmation depth per note.
- **Receipts give selective auditability.** Each note commits a fixed-width leaf Lᵢ := SHA-256("leaf" ∥ LE32(i) ∥ txidᵢ ∥ amountᵢ ∥ addr_payloadᵢ); a Merkle root over ordered leaves binds the set, and single-leaf or multi-proof selective disclosure lets either party prove any subset to an auditor while hiding the rest.
- **Determinism is a first-class interoperability contract.** Two independent implementations given the same inputs must reproduce identical addresses, splits, reservations and receipts — enforced by property tests P1–P7, negative tests N1–N8, golden vectors for byte-for-byte equality, a ≥ 95% branch-coverage CI gate, and a hash-chained canonical-JSON event log.
- **Adversary model and honest limits.** Against passive chain analysts, network observers, inquisitive counterparties and data brokers (A₁–A₄): amount bounds leak a coarse interval and timing can cluster if broadcast naively — mitigated by pacing, interleaved invoices, wider published bounds and varied first-announcers.
