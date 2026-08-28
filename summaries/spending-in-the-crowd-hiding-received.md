---
title: "Spending in the Crowd — Hiding Received Notes by Time, Split, and Change"
date: 2025-08-29
slug: spending-in-the-crowd-hiding-received
url: https://singulargrit.substack.com/p/spending-in-the-crowd-hiding-received
themes: [privacy, wallets-keys, audit-accounting, micropayments]
---

# Spending in the Crowd — Hiding Received Notes by Time, Split, and Change
**Date:** 2025-08-29 | **URL:** https://singulargrit.substack.com/p/spending-in-the-crowd-hiding-received
**Subtitle:** How a wallet can auto-drizzle income into ordinary transactions so even the payer can’t trace your spending

## Core thesis
Receipt-side privacy (the previous day's essay) is squandered if spending is naïve. Spend-side unlinkability is achieved by a wallet "drizzle engine" that automatically schedules spends over Δt ∈ [1 hour, 7 days], splits each payment into many bounded notes, enforces disjoint inputs and unique per-note change with zero address reuse, and negotiates each payment directly with counterparties. Under these conditions even the original payer — an employer who knows exactly what they sent — cannot reliably link their outbound notes to your later spending.

## Key arguments and claims
- Four-class threat model: **E** (employer, knows the set E = {txid, amount, time-window} plus payroll metadata), **A₁** (passive chain analyst running clustering heuristics), **A₂** (passive network watcher inferring origin peers), **A₃** (data broker correlating off-chain artefacts). Cryptographic assumptions (SHA-256/RIPEMD-160 preimage and collision resistance, secp256k1 discrete-log hardness) are held fixed.
- The engine automates three habits: time diversity (jittered scheduling across the window), amount diversity (bounded notes matching ambient merchant-class traffic), and structural independence (per-note recipient keys, per-note change keys, no reuse).
- Split feasibility is checked arithmetically: N_min = ⌈T ÷ v_max⌉ and N_max = ⌊T ÷ v_min⌋; amounts are drawn with prefix clamping — low := max(v_min, rem − v_max × s), high := min(v_max, rem − v_min × s) — then deterministically permuted so index never correlates with size.
- Disjoint input reservation: a table R maps each note i to an input set Sᵢ with the strict rule Sᵢ ∩ Sⱼ = ∅; selection follows a preference ladder (exact match → single near-over → fewest inputs minimising overshoot) using the size estimator size_bytes(m,n) ≈ 10 + 148·m + 34·n. Dust-producing change candidates are reseated; conflicts force a full deterministic rebuild, never partial salvage.
- If income arrives as coarse UTXOs, granularity is created once via a preparatory fan-out (you→you), marked "funding_only": true, at most one per pay cycle, avoiding tidy ladders such as 1.00, 1.00, 1.00.
- The observer's assignment uncertainty is lower-bounded by uncertainty ≈ Σₜ kₜ · log₂(mₜ), where mₜ is the ambient crowd in bin t and kₜ your notes in it; large crowds and wide distribution push the sum up fast.
- Timing hygiene: 5–15-minute bins, gaps bounded by g_min ≤ gap ≤ g_max, soft caps (≤ β notes per merchant per hour, ≤ γ notes per 5-minute bin), no top-of-hour cadence, and either-side broadcast with varied entry peers to defeat first-seen attribution.
- Auditability is preserved through per-invoice Merkle roots M over leaves Lᵢ = (i, txidᵢ, amountᵢ, address payload), canonical JSON logs with detached signatures and a prev_hash chain, enabling selective disclosure (e.g. prove only the rent subset) and byte-for-byte replay.
- Illustrative payroll case: two £1,200 credits; roughly £600 spent as ~370 notes over 7 days — groceries £220 → ~120 notes in [0.50, 3.00]; transit £60 → ~80; dining £90 → ~60; utilities £180 → ~70; misc £50 → ~40.
- Principal residual risks are behavioural, not cryptographic: loyalty IDs, shipping metadata, recurring time slots, merchant reuse with persistent identifiers.

## How Craig reasons (his model/logic)
Systems engineering married to threat modelling: the essay specifies a deterministic, replayable wallet protocol (seeded PRNG seed := H(user_scope ∥ date ∥ "drizzle"), canonical JSON, hash-chained logs) and then justifies it with a combinatorial, information-theoretic argument — privacy as the explosion of an observer's assignment problem. Privacy is treated as an operational discipline enforced by construction, not as a cryptographic primitive; "The cryptography holds; habits decide."

## Where this contradicts BTC-mainstream logic
No direct engagement — this post is a wallet-level engineering specification for spend-side privacy that presupposes, rather than argues for, a scalable low-fee ledger (fee floor 1 sat/byte, ceiling 4), direct IP-to-IP negotiation with counterparties, and either-side broadcast — all foreign to BTC's gossip-relay, high-fee reality. It implicitly rejects the mixer/CoinJoin approach by making disjoint inputs and the absence of shared change its load-bearing invariants.

## Notable quotes
- "Privacy after you receive money is achieved by dissolving those receipts into the ordinary traffic of the ledger"
- "privacy is not a one-off act at receipt, but a continuing practice in how you spend."
- "The cryptography holds; habits decide."
- "Privacy by default; proof on demand."

## Connections
Explicitly builds on "yesterday's essay" on receipt-side privacy (per-note recipient keys and change at intake). It is the technical companion to the Ledgerford allegory published the same day, and operationalises the "privacy through lawful scale" thesis of the following day's legal-boundaries essay; the per-invoice Merkle-root selective-disclosure scheme recurs throughout the series.
