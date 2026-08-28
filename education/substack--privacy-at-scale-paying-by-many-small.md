---
title: "Privacy at Scale — Paying by Many Small Notes on Bitcoin"
era: substack
date: 2025-08-27
slug: privacy-at-scale-paying-by-many-small
themes: [privacy, scaling-throughput, wallets-keys, networking]
source_summary: summaries/privacy-at-scale-paying-by-many-small.md
url: https://singulargrit.substack.com/p/privacy-at-scale-paying-by-many-small
---

# Privacy at Scale — Paying by Many Small Notes on Bitcoin — core principles

- **Practical privacy is an emergent property of scale, not exotic obfuscation.** A single high-value transfer is "a lighthouse on the ledger"; hundreds or thousands of small, standard, independent P2PKH notes "dissolve into background flow" — scale + independence + diversity, with receipts preserving deterministic auditability for insiders.
- **Privacy can be measured in bits.** With m_t outputs per hour in the same value band, one note in hour t gives an analyst ≈ log₂ m_t bits of uncertainty; K notes over H hours yield privacy ≳ Σ_t k_t · log₂ m_t. With m_t ≈ 2,000 in busy hours, each hour contributes ≈ 11 bits — a few dozen notes create a combinatorial swamp.
- **Invoice-scoped determinism lets both parties compute the whole payment.** The scope tuple {Z, H_I} — Z from ECDH between identity keys, H_I the SHA-256 of canonical invoice JSON — drives all derivations under domain labels "recv", "snd", "split" and "pace", so addresses, amounts and schedules match without exchanging per-note data.
- **Bounded splitting guarantees exact sums.** Feasibility is N_min = ⌈T ÷ v_max⌉ ≤ N ≤ ⌊T ÷ v_min⌋ = N_max within public bounds; prefix-clamped uniform draws guarantee the exact total and a seeded Fisher–Yates permutation removes index-to-size correlation. Example: £800 with £0.50–£2.00 bounds admits 400 ≤ N ≤ 1,600 notes.
- **Disjoint funding is the backbone of unlinkability.** A reservation table maps each note to an exclusive input set (Sᵢ ∩ Sⱼ = ∅), with per-note recipient keys (Pᴮ,ᵢ = B + tᵢ·G, spendable only via kᴮ,ᵢ = (b + tᵢ) mod n), one change address per note and intra-invoice change reuse banned — killing shared-change and input-overlap heuristics by construction.
- **Broadcast diversity breaks network heuristics.** Either-side announcement fractures first-seen attribution; paced windows with deterministic jitter and bursts defeat time-window clustering — while remaining deterministic and auditable.
- **Receipts enable audit without surveillance.** Per-note leaves Lᵢ (SHA-256 over index, txid, amount, address payload) fold into a single Merkle root M; selective disclosure proves any chosen subset via Merkle paths while everything else stays hidden.
- **Privacy at population scale is a throughput requirement.** A city clearing 100,000 payments per minute at 1,000 notes per payment needs ≈ 100 million notes per minute — roughly 1.67 million notes per second continuously. "A system that tops out at token TPS cannot credibly promise privacy at population scale: the background is too thin to drown the signal."
- **Builder guidance.** Do more of the ordinary thing, independently, with varied timing and paths — mixers and CoinJoins create rare, high-signal events, whereas standard transactions are individually unremarkable. Fee markets must "reward throughput of the mundane over spectacle, because the mundane is where privacy lives".
