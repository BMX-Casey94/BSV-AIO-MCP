---
title: "Who Actually Controls a Blockchain? An Economist’s Map of the Power Structure"
date: 2026-05-21
slug: who-actually-controls-a-blockchain
url: https://singulargrit.substack.com/p/who-actually-controls-a-blockchain
themes: [governance-decentralisation, mining-consensus, intermediaries]
---

# Who Actually Controls a Blockchain? An Economist’s Map of the Power Structure
**Date:** 2026-05-21 | **URL:** https://singulargrit.substack.com/p/who-actually-controls-a-blockchain
**Subtitle:** On institutional separability, the dynamics of producer choice, and why the same protocol can produce two very different distributions of power.

## Core thesis
"Who controls a blockchain?" has no single answer because control is distributed across five institutionally distinct layers, and block-producers (miners or validators) hold only one of them. The existing literature treats the protocol as exogenous to producer behaviour, burying an untested assumption Craig names *institutional separability* — that the actors who author rules, implement software, produce blocks, enforce law, and provide liquidity are genuinely different groups. That assumption is measurable, mostly holds for Bitcoin and Ethereum, and fails at exactly one consequential point: the overlap between validators and the exchanges that set the token's price.

## Key arguments and claims
- Authority decomposes into five layers: Layer 1 rule authorship (BIP/EIP authors), Layer 2 software implementation (Geth, Nethermind, Besu, Erigon, Reth; Bitcoin Core), Layer 3 operational validation (miners/validators — the only layer the literature models), Layer 4 institutional enforcement (OFAC SDN list, SEC, ESMA, FCA, courts), and Layer 5 liquidity coordination (Binance, Coinbase, Kraken, OKX).
- The producer's payoff depends on all five layers but the producer controls only Layer 3; the expected token price — "the single largest term in most producers' payoff" — is set at Layer 5.
- Separability is measured with a Jaccard index over actor sets (resolved to legal/operational units), stacked into a 5×5 overlap matrix computed for Ethereum and Bitcoin over 2022Q4–2025Q3. Headline result: the Layer-3 row mean overlap is 0.053 for Ethereum and 0.013 for Bitcoin, with most off-diagonal entries exactly zero.
- Two exceptions: a small Layer 1 ∩ Layer 2 overlap (people who both author rules and maintain clients), and the structurally important Layer 3 ∩ Layer 5 overlap — major centralised exchanges operating simultaneously as large staking entities and as the venues determining liquidity, "the single structural channel through which the actors who set the token's price can also influence consensus directly."
- The producer's problem is a dynamic discrete-choice (Bellman) programme; Craig derives a bounded-rational mean-field approximation yielding logit best-responses whose aggregate limit is the replicator equation.
- Layer-5 liquidity feedback (more producers → deeper markets → higher payoff) creates positive feedback of the Katz–Shapiro / Farrell–Saloner / Brian Arthur kind, producing bistability, path dependence, and lock-in; the transition is a pitchfork bifurcation whose supercriticality condition he derives from the curvature of the feedback function.
- Four falsifiable predictions: H1 profitability dominates declared preference; H2 production-grade client availability is a binding ceiling and readiness precedes adoption; H3 proof-of-stake adjusts to shocks more slowly than proof-of-work because bonding raises switching costs; H4 legal-exposure shocks bite regulated entities specifically. Only H2 is executed, as a directional pilot.
- The H2 pilot: a quarterly panel of Reth's validator share against a hand-coded ordinal maturity index, tested by bivariate Granger causality. Forward (readiness → share): F = 4.88, p = 0.049; reverse: F = 1.05, p = 0.33. The qualitative asymmetry is robust across recodings and lag lengths, but exact significance is fragile (p = 0.08 and p = 0.17 under alternative codings) on fifteen observations.
- A complementary episode: Nethermind's share jumped 14% → 22% in one quarter alongside Coinbase's announced client-diversification decision, while still-immature Reth could not absorb the demand — the H2 mechanism and the Layer-3 ∩ Layer-5 overlap visible in a single event.

## How Craig reasons (his model/logic)
Institutional economics welded to dynamical systems. He takes the Coase–Williamson–North–Ostrom question (who holds authority, and is it separable?) and answers it with the producer literature's own tools: set-theoretic measurement, dynamic discrete choice, mean-field approximation, and Jacobian stability analysis. Throughout he insists on an honesty discipline: derived approximations rather than postulates, named failure modes, and a running ledger of what is demonstrated versus merely illustrated.

## Where this contradicts BTC-mainstream logic
- Rejects the folk answers "nobody controls it" and "the miners/validators control it" as "wrong, or at least badly incomplete": producers are choosers of regimes, not authors of rules.
- Rejects single-scalar "decentralisation" metrics (validator or node counts) in favour of layer-by-layer overlap measurement; a chain can be decentralised at Layer 3 yet concentrated at Layer 5.
- Implies entrenched chains may be locked-in incumbents rather than technical winners: "The locked-in regime is not necessarily the better one."

## Notable quotes
- "The producer optimises over a menu that four other groups of actors have set."
- "A model whose assumptions you cannot violate is a model that is not saying anything."
- "I would rather be boring and right about the boundary than thrilling and wrong about it."
- "Stop asking whether a system is decentralised, and start measuring, layer by layer, who overlaps with whom."

## Connections
This post presents the same working paper as "Decentralization Deserves a Number" (25 May 2026), its plain-language companion. The hazard-model extension explicitly names Bitcoin Cash, Bitcoin SV, and Ethereum Classic as the fork panel for future work, tying the framework to Craig's long-running interest in what distinguishes surviving chains.
