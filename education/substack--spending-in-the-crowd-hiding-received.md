---
title: "Spending in the Crowd — Hiding Received Notes by Time, Split, and Change"
era: substack
date: 2025-08-29
slug: spending-in-the-crowd-hiding-received
themes: [privacy, wallets-keys, audit-accounting, micropayments]
source_summary: summaries/spending-in-the-crowd-hiding-received.md
url: https://singulargrit.substack.com/p/spending-in-the-crowd-hiding-received
---

# Spending in the Crowd — Hiding Received Notes by Time, Split, and Change — core principles

- **Spend-side privacy is a continuing practice, not a one-off act at receipt.** Receipt-side unlinkability is squandered by naïve spending; a wallet "drizzle engine" automates time diversity (jittered scheduling over Δt ∈ [1 hour, 7 days]), amount diversity (bounded notes matching ambient traffic) and structural independence (per-note recipient and change keys, zero reuse).
- **Model the adversary explicitly.** Four classes: the employer/payer who knows {txid, amount, time-window} plus payroll metadata; the passive chain analyst running clustering heuristics; the passive network watcher inferring origin peers; the data broker correlating off-chain artefacts — with SHA-256/RIPEMD-160 preimage and collision resistance and secp256k1 discrete-log hardness held fixed.
- **Split feasibility is arithmetic, and determinism is the interop contract.** N_min = ⌈T ÷ v_max⌉ and N_max = ⌊T ÷ v_min⌋; prefix clamping (low := max(v_min, rem − v_max × s), high := min(v_max, rem − v_min × s)) then deterministic permutation, all seeded from seed := H(user_scope ∥ date ∥ "drizzle").
- **Disjoint input reservation is strict and rebuildable.** Each note maps to an input set Sᵢ with Sᵢ ∩ Sⱼ = ∅; selection follows a preference ladder (exact match → single near-over → fewest inputs minimising overshoot) using size_bytes(m,n) ≈ 10 + 148·m + 34·n; dust-producing change is reseated and conflicts force a full deterministic rebuild, never partial salvage.
- **Granularity is created once, not per spend.** Coarse income UTXOs are fanned out in a single preparatory you→you transaction per pay cycle, marked "funding_only": true, avoiding tidy amount ladders such as 1.00, 1.00, 1.00.
- **The observer's assignment problem explodes combinatorially.** Uncertainty ≈ Σₜ kₜ · log₂(mₜ), where mₜ is the ambient crowd in bin t and kₜ your notes in it — large crowds and wide distribution push the sum up fast.
- **Timing hygiene is policy, not hope.** 5–15-minute bins, gaps bounded by g_min ≤ gap ≤ g_max, soft caps (≤ β notes per merchant per hour, ≤ γ notes per 5-minute bin), no top-of-hour cadence, and either-side broadcast with varied entry peers to defeat first-seen attribution.
- **Auditability survives privacy.** Per-invoice Merkle roots over leaves Lᵢ = (i, txidᵢ, amountᵢ, address payload), canonical JSON logs with detached signatures and a prev_hash chain enable selective disclosure (prove only the rent subset) and byte-for-byte replay — "Privacy by default; proof on demand."
- **Residual risks are behavioural, not cryptographic.** Loyalty IDs, shipping metadata, recurring time slots and merchant reuse with persistent identifiers — "The cryptography holds; habits decide." A worked payroll case: £600 of two £1,200 credits spent as ~370 notes over 7 days across groceries, transit, dining, utilities and misc.
