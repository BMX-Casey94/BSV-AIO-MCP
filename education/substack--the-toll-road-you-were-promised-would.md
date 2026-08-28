---
title: "The Toll Road You Were Promised Would Be Free: How Refusing to Scale Rebuilds the Banks"
era: substack
date: 2026-04-08
slug: the-toll-road-you-were-promised-would
themes: [scaling-throughput, lightning-l2, btc-critique, intermediaries]
source_summary: summaries/the-toll-road-you-were-promised-would.md
url: https://singulargrit.substack.com/p/the-toll-road-you-were-promised-would
---

# The Toll Road You Were Promised Would Be Free — core principles

- **"Directly from one party to another" is a capacity constraint.** The white paper's design specification (Nakamoto, 2008) requires peer-to-peer payment without a financial institution; whatever volume the base layer cannot carry moves to "somewhere else", which is by economic function an intermediary — so on-chain scaling is not optional.
- **On-chain settlement is a fact; off-chain settlement is a promise.** A transaction validated by consensus is final settlement; a channel balance or sidechain receipt is "a promise that may eventually be settled on-chain" — the history of financial crises is the history of promises failing to become facts.
- **Block-space scarcity is a policy choice, not a physical constraint.** The 1 MB limit was a temporary anti-spam measure; retaining it creates a fee market in which median fees exceeded $30 at peak congestion, rationally excluding small-value settlement from Nakamoto trust.
- **A high-volume, low-fee chain can fund security from economic activity alone.** Budish (2025, QJE) shows the flow cost of Nakamoto-style trust scales with value secured; a chain whose fee revenue cannot fund its security budget depends on subsidy, speculation or external enforcement.
- **Payment-channel networks centralise by measurement, not by insult.** Peer-reviewed topology studies (Lin et al. 2020; Martinazzi & Flori 2020; Zabka et al. 2022/2024) find core-periphery structure with Gini ≈ 0.88 — 10% of nodes holding 80% of staked value — and rising betweenness dominance; a routing hub holds escrowed capital, charges for routing and can fail or refuse service: a payment processor by function.
- **Federated pegs and layered schemes are trust downgrades.** A fixed set of known functionaries managing a peg is a consortium trust model; no layered construction matches native proof-of-work settlement, and "every sidechain is a trust downgrade dressed as a feature upgrade."
- **Intermediaries whose business depends on base-layer constraint will resist unification.** Per Katz & Shapiro (1994) on systems competition, complementors profiting from fragmentation defend it — industrial organisation, not conspiracy; builders should examine who funded the layers before trusting their scaling advice.
- **Scaling means whole-system capacity.** Validation, propagation, storage, indexing and a fee-volume economic model, all solvable by the same engineering trajectory that scaled the Internet — removing the block-size limit keeps all activity on one chain and maximises network effects.
