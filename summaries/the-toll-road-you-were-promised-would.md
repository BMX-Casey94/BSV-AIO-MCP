---
title: "The Toll Road You Were Promised Would Be Free: How Refusing to Scale Rebuilds the Banks"
date: 2026-04-08
slug: the-toll-road-you-were-promised-would
url: https://singulargrit.substack.com/p/the-toll-road-you-were-promised-would
themes: [scaling-throughput, lightning-l2, btc-critique, intermediaries]
---

# The Toll Road You Were Promised Would Be Free: How Refusing to Scale Rebuilds the Banks
**Date:** 2026-04-08 | **URL:** https://singulargrit.substack.com/p/the-toll-road-you-were-promised-would
**Subtitle:** Or: The Lightning Network is a hub-and-spoke payment processor wearing a hoodie.

## Core thesis
The refusal to scale Bitcoin's base layer is the original sin from which every subsequent intermediary descends. A base layer that cannot carry demanded transaction volume pushes activity into off-chain systems that are, by economic function, third-party rent-extractors — payment channels, federated sidechains, bridges, rollups — thereby rebuilding the banking system under new branding and failing the white paper's design specification. Only on-chain scaling fulfils it.

## Key arguments and claims
- The white paper's abstract specifies payments sent "directly from one party to another without going through a financial institution" (Nakamoto, 2008). "Directly" imposes a capacity constraint: whatever the base layer cannot carry moves to "somewhere else", which is by definition an intermediary.
- The 1 MB block limit was a temporary anti-spam measure, not an architectural commitment. Its retention created a fee market in which median fees exceeded $30 at peak congestion (2017, 2021), rendering small-value settlement irrational. Block-space scarcity is a policy choice, not a physical constraint.
- Budish (2025, *Quarterly Journal of Economics*) shows the flow cost of Nakamoto-style trust scales linearly with value secured: a chain whose fee revenue cannot fund its security budget depends on subsidy, speculation, or external enforcement. A high-volume, low-fee chain can fund security from economic activity alone.
- On-chain settlement is a fact validated by consensus; off-chain settlement is "a promise that may eventually be settled on-chain". The distinction is structural, not terminological.
- Lightning's centralisation is empirically measured, not polemical: Lin et al. (2020, *New Journal of Physics*) found a core-periphery topology with average Gini coefficient ~0.88 — 10% of nodes held 80% of staked bitcoin, 50% held 99%. Martinazzi & Flori (2020, *PLOS ONE*) showed removing hub nodes causes a substantial efficiency drop. Zabka et al. (2022, Financial Cryptography; 2024, *Telecommunications Policy*) found a few nodes dominate betweenness centrality, with inequality rising over 15% across their measurement period.
- A Lightning hub is functionally a payment processor: it stands between sender and receiver, holds capital in escrow, routes for a fee, and can fail, be attacked, or refuse service. Cryptographic channels do not change the economic function.
- Blockstream's Liquid is a federated sidechain: a fixed set of known functionaries manages the peg — a consortium trust model explicitly non-Nakamoto. Drivechains and validity-proof chains introduce their own distinct trust assumptions; none matches native proof-of-work settlement.
- The organisations building layers are often the same ones that opposed raising the block size; their commercial justification depends on the base layer remaining constrained. Per Katz & Shapiro (1994) on systems competition, complementors whose business depends on fragmentation will resist unification — industrial organisation, not conspiracy.
- Scaling means whole-system capacity — validation, propagation, storage, indexing, and a fee-volume economic model — solvable by the same engineering trajectory that scaled the Internet. BSV's removal of the block-size limit keeps all activity on one chain, maximising network effects (Katz & Shapiro, 1985; Economides, 1996). Bridges, by contrast, carry over $2.8 billion in documented losses (Zhang et al., 2024; Rashid et al., 2025).

## How Craig reasons (his model/logic)
A syllogism built from design-specification fidelity and industrial-organisation economics: the white paper requires peer-to-peer settlement; peer-to-peer settlement requires on-chain capacity; on-chain capacity requires scaling; therefore scaling is not optional. He supports each premise with peer-reviewed network-topology empirics and incentive analysis of the firms that profit from constraint.

## Where this contradicts BTC-mainstream logic
- Against Core's settlement-layer vision: high fees and scarce block space are a chosen policy, not a security necessity — and they exclude the majority of economic activity from Nakamoto trust.
- Against the hobbyist-full-node definition of decentralisation: storage and bandwidth costs have fallen by orders of magnitude since 2009; larger blocks are within commercial infrastructure's reach.
- Against Lightning as "decentralised scaling": peer-reviewed measurements show a centralised hub-and-spoke payment processor.
- Against sidechains and L2s as trustless: they are federations and businesses with structural incentives to keep the base layer small.
- Against the claim that scaling requires layers: a scaled base layer needs no channels, federations, bridges, or rollups at all.

## Notable quotes
- "The entire history of financial crises is the history of promises failing to become facts."
- "The fox did not merely enter the henhouse; it bricked up the door and sold the hens a ladder."
- "Every sidechain is a trust downgrade dressed as a feature upgrade."
- "Everything else is a toll road wearing the costume of a public highway."

## Connections
Explicit sequel to a prior essay on network convergence toward a single dominant ledger, extending its Katz–Shapiro/Economides network-economics framework. Budish's security-budget analysis recurs across the corpus's scaling and security-economics essays; the bridge-loss figures connect to the earlier cross-chain fragility discussion.
