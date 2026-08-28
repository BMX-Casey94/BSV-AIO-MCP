---
title: "IP-to-IP Negotiated Notes: An ECDH-Derived, Multi-Transfer Wallet Protocol for Private, Settled Digital-Cash Payments"
date: 2025-08-26
slug: ip-to-ip-negotiated-notes-an-ecdh
url: https://singulargrit.substack.com/p/ip-to-ip-negotiated-notes-an-ecdh
themes: [privacy, wallets-keys, script-technical, networking]
---

# IP-to-IP Negotiated Notes: An ECDH-Derived, Multi-Transfer Wallet Protocol for Private, Settled Digital-Cash Payments
**Date:** 2025-08-26 | **URL:** https://singulargrit.substack.com/p/ip-to-ip-negotiated-notes-an-ecdh
**Subtitle:** Designing an address-unlinkable, constraint-aware payment workflow where both parties can transmit and settle, using per-invoice ECDH derivations and semi-randomised note splitting

## Core thesis
A payment between two authenticated parties can be settled as many independent, standard P2PKH on-chain transactions ("notes") whose addresses, amounts, timing and receipts are all deterministically derived from a per-invoice scope — an ECDH shared element Z plus the invoice hash Hᴵ — so that the payment is private (recipient addresses unlinkable), constraint-aware (payee-published bounds enforced), symmetric (either party may broadcast) and fully auditable, using only primitives that already exist in Bitcoin.

## Key arguments and claims
- Scope: identity keys authenticate the off-chain channel and feed ECDH; they never appear on-chain. Z := ECDH(kₐ, Pᵦ) = ECDH(kᵦ, Pₐ) (32-byte x-coordinate) and Hᴵ := SHA-256(canonical_json(invoice)) jointly scope every derivation; cross-invoice reuse is forbidden by construction.
- Per-note recipient keys: tᵢ := int(SHA-256(Z ∥ Hᴵ ∥ "recv" ∥ LE32(i))) mod n with a deterministic reject-zero counter-bump; the sender computes Pᴮ,ᵢ = B + tᵢ·G and a standard Base58Check P2PKH address, while only the payee can derive the spending scalar kᴮ,ᵢ = (b + tᵢ) mod n. A proof sketch shows sender recovery of kᴮ,ᵢ would solve the secp256k1 discrete-log problem.
- Per-note sender change uses a separate "snd" domain (sᵢ, Pᴬ,ᵢ = A + sᵢ·G); change from note i never funds another note in the same invoice, eliminating the shared-change clustering heuristic.
- Bounded splitting: with payee bounds [v_min, v_max], feasibility requires N_min = ⌈T ÷ v_max⌉ ≤ N ≤ ⌊T ÷ v_min⌋ = N_max. N is chosen deterministically, interior-biased (mid ± span/4 jitter); amounts are drawn by prefix-clamping (low := max(v_min, rem − v_max·slots); high := min(v_max, rem − v_min·slots)) guaranteeing exact sum Σ aᵢ = T, then a seeded Fisher–Yates permutation (S_perm := H(S ∥ "permute")) destroys index-to-size correlation.
- Disjoint coin selection: a reservation table R assigns each note an exclusive input set (Sᵢ ∩ Sⱼ = ∅), ordered deterministically (notes by descending amount; UTXOs by value, txid, vout), with a bounded-knapsack preference order — exact match, single-input near-over, fewest inputs with minimal overshoot — and at most one preparatory payer→payer fan-out per invoice if granularity fails.
- Standard transaction arithmetic: size ≈ 10 + 148·m + 34·n bytes, fee := ceil(feerate_floor × size), dust threshold δ_dust enforced, legacy SIGHASH_ALL signing with low-s normalisation.
- Either-side broadcast: both parties may submit any subset at any time; duplicate submission is benign (same txid, deduplicated). Pacing schedules (all-at-once, paced, bursts of size β) derive from S_pace := H(Z ∥ Hᴵ ∥ "pace"); settlement finality is the payee's confirmation depth d per note.
- Receipts: each note commits a fixed-width leaf Lᵢ := SHA-256("leaf" ∥ LE32(i) ∥ txidᵢ ∥ amountᵢ ∥ addr_payloadᵢ); a Merkle root M over ordered leaves binds the whole set, and selective-disclosure proofs (single-leaf paths or multi-proofs) let either party prove any subset to an auditor while hiding the rest.
- Failure handling is deterministic and state-machine driven: per-note states Constructed → Signed → Queued → Broadcast → Seen → Confirmed, plus Reissued/Cancelled/Orphaned/Obsolete/Conflict; reissue preserves index and addresses while superseding txids; reorgs trigger rebroadcast of identical bytes; expiry cancels queued notes. All events are canonical-JSON, hash-chained ("prev_hash") and identity-signed.
- Verification regime: property tests P1–P7 (sums/bounds, address agreement, disjoint reservations, non-overlapping change, reissue invariants, receipts, rebuild-from-logs), negative tests N1–N8, golden vectors for cross-implementation byte-for-byte determinism, and a ≥ 95% branch-coverage CI gate.
- Adversary model A₁–A₄ (passive chain analyst, network observer, inquisitive counterparty, data broker) with explicit limits: amount bounds leak a coarse interval and timing can cluster if broadcast naively, mitigated by pacing, interleaved invoices, wider published bounds and varied first-announcers — "no new opcodes, no new script types, no new cryptographic gadgets".

## How Craig reasons (his model/logic)
Formal protocol specification in the style of a standards document: normative definitions and invariants (I1–I8), cryptographic reductions to ECDLP and SHA-256 preimage resistance, deterministic algorithms with correctness/termination proofs (induction on the prefix-clamping invariant), explicit state machines, and conformance testing. The design philosophy is determinism-as-interop-contract: two independent implementations given the same inputs must reproduce identical addresses, splits, reservations and receipts.

## Where this contradicts BTC-mainstream logic
No direct engagement — this post is a formal wallet-protocol specification; it revives the direct IP-to-IP, two-party negotiated payment model (absent from modern BTC practice) without polemic, and stays strictly within standard P2PKH transactions.

## Notable quotes
- "Identity keys are used only for ECDH and message authentication; they never appear on-chain."
- "Either party may submit any subset of fully signed transactions at any time; settlement is established by confirmation depth."
- "No new opcodes, no new script types, no new cryptographic gadgets."
- "Determinism is a first-class requirement."

## Connections
The companion essay "Privacy at Scale — Paying by Many Small Notes on Bitcoin" (published the following day) presents the same note-splitting machinery in expository form and draws out its scaling implications; the ECDH identity/anchor separation also connects to Craig's on-chain identity architecture.
