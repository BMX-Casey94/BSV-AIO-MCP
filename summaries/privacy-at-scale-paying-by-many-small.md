---
title: "Privacy at Scale — Paying by Many Small Notes on Bitcoin"
date: 2025-08-27
slug: privacy-at-scale-paying-by-many-small
url: https://singulargrit.substack.com/p/privacy-at-scale-paying-by-many-small
themes: [privacy, scaling-throughput, wallets-keys, networking]
---

# Privacy at Scale — Paying by Many Small Notes on Bitcoin
**Date:** 2025-08-27 | **URL:** https://singulargrit.substack.com/p/privacy-at-scale-paying-by-many-small
**Subtitle:** Why thousands of tiny, standard transactions beat one big payment for practical privacy

## Core thesis
Practical payment privacy is an emergent property of scale, not a product of exotic obfuscation. Decomposing one large, conspicuous transfer into hundreds or thousands of small, standard, independent P2PKH notes — each with disjoint inputs, unique per-note recipient and change addresses, and diversified broadcast timing and paths — dissolves the payment into background flow. "Privacy follows from the crowd": scale + independence + diversity, with receipts preserving deterministic auditability for insiders.

## Key arguments and claims
- A single high-value transfer is "a lighthouse on the ledger"; many small ordinary transfers "dissolve into background flow". The recipe: scale (hundreds or thousands of bounded notes), independence (each note valid alone, unique addresses, disjoint inputs, per-note change), and diversity (either party broadcasts; paced, jittered, multi-route announcements).
- A back-of-envelope information model: with m_t outputs per hour in the same value band, one note in hour t gives an analyst ≈ log₂ m_t bits of uncertainty; K notes over H hours yield privacy ≳ Σ_t k_t · log₂ m_t. With m_t ≈ 2,000 in busy hours, each hour contributes ≈ 11 bits; a few dozen notes create a combinatorial swamp.
- Invoice-scoped determinism: the scope tuple {Z, H_I} — Z from ECDH between identity keys, H_I the SHA-256 of canonical invoice JSON — drives all derivations under domain labels "recv", "snd", "split" and "pace", so both parties compute identical addresses, amounts and schedules without exchanging per-note data.
- Note-splitting within public bounds [v_min, v_max]: feasibility is N_min = ⌈T ÷ v_max⌉ ≤ N ≤ ⌊T ÷ v_min⌋ = N_max; prefix-clamped uniform draws (low := max(v_min, rem − v_max × slots); high := min(v_max, rem − v_min × slots)) guarantee exact sum, and a seeded Fisher–Yates permutation removes index-to-size correlation. Example: £800 with £0.50–£2.00 bounds admits 400 ≤ N ≤ 1,600 notes.
- Per-note keys: recipient tweak tᵢ := int(SHA-256(Z ∥ Hᴵ ∥ "recv" ∥ LE32(i))) mod n, address key Pᴮ,ᵢ = B + tᵢ·G spendable only via kᴮ,ᵢ = (b + tᵢ) mod n; sender change uses the "snd" label, one change address per note, with intra-invoice change reuse banned — killing the shared-change and input-overlap heuristics by construction.
- Disjoint funding is "the backbone of unlinkability": a reservation table maps each note to an exclusive input set (Sᵢ ∩ Sⱼ = ∅), built deterministically with at most one preparatory fan-out if granularity is too coarse.
- Broadcast diversity breaks network heuristics: either-side announcement fractures first-seen attribution; paced windows with deterministic jitter and bursts defeat time-window clustering. Pacing remains deterministic and auditable.
- Receipts enable "audit without surveillance": per-note leaves Lᵢ (SHA-256 over index, txid, amount, address payload) fold into a single Merkle root M; selective disclosure proves any chosen subset via Merkle paths while everything else stays hidden.
- Adversary classes A1–A4 (passive chain analyst, passive network observer, inquisitive counterparty, data broker) are enumerated with residual risks honestly stated: within-note payer clustering persists (acceptable — recipient unlinkability is the target), and amount/timing shapes must avoid tidy patterns.
- The epilogue reframes scaling: privacy demands note volume, not headline TPS. A city clearing 100,000 payments per minute at 1,000 notes per payment requires ≈ 100 million notes per minute — roughly 1.67 million notes per second continuously. "A system that tops out at token TPS cannot credibly promise privacy at population scale: the background is too thin to drown the signal."

## How Craig reasons (his model/logic)
Information-theoretic intuition (entropy of the anonymity set, log₂ crowd size) layered over deterministic protocol engineering. Privacy is treated as a systems property manufactured by multiplying ordinary, standard transactions under strict disciplines (disjoint inputs, per-note keys, scoped derivations), then closed with auditability: canonical logs, hash-chained records and Merkle receipts make the insider view a replay rather than an opinion.

## Where this contradicts BTC-mainstream logic
- Explicitly rejects BTC-scale throughput ceilings: "It is not 'seven transactions per second,' nor even 'a few million on a good day'" — privacy at population scale requires sustained metropolitan-level note streams that only a massively scaled ledger can carry.
- Inverts the mainstream privacy approach: instead of mixers, CoinJoins or exotic constructions (which create rare, high-signal events), privacy comes from doing "more of the ordinary thing" with standard P2PKH transactions that are individually unremarkable.
- Contradicts the fee-market-as-rationing view: fee markets must "reward throughput of the mundane over spectacle, because the mundane is where privacy lives".

## Notable quotes
- "One big transfer creates a lighthouse. Hundreds or thousands of small notes create weather."
- "Do more of the ordinary thing, do it independently, and do it with varied timing and paths; privacy follows from the crowd."
- "Scaling, then, is not a vanity metric; it is the precondition for discretion."
- "Privacy follows from the crowd; audit follows from the calculus of identical bytes."

## Connections
The expository companion to the formal "IP-to-IP Negotiated Notes" protocol published the previous day — same ECDH-scoped derivations, note-splitting, disjoint reservations and Merkle receipts — with an epilogue tying privacy to Craig's scaling-throughput argument that massive block capacity is a prerequisite for discretion.
