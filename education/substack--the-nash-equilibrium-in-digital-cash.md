---
title: "The Nash Equilibrium in Digital Cash Systems"
era: substack
date: 2026-02-01
slug: the-nash-equilibrium-in-digital-cash
themes: [mining-consensus, security-economics, protocol-immutability, monetary-economics]
source_summary: summaries/the-nash-equilibrium-in-digital-cash.md
url: https://singulargrit.substack.com/p/the-nash-equilibrium-in-digital-cash
---

# The Nash Equilibrium in Digital Cash Systems — core principles

- **Cooperative validation is an equilibrium question, not a slogan.** Model miners as players in a repeated game over blocks, each stage game offering cooperative throughput-oriented validation versus extractive deviation, with payoffs conditioned on the revenue environment and network conditions; classify runs into four outcomes — unique cooperative attractor, deviation-dominant attractor, mixed basins (path dependence), or oscillatory non-settling regimes.
- **Three interacting frictions govern convergence.** The revenue regime (subsidy-anchored versus fee-dominant), fee volatility, and propagation-delay variance — plus a protocol-uncertainty hazard that makes rule instability bite privately and mechanically at once.
- **Fee-dominant regimes destabilise cooperation.** At fee share κ = 0.10–0.30, runs are deviation-dominant in 93.75% of cases even at low fee volatility (σ_f 0.00–0.10); at σ_f = 0.25 outcomes split 50/50 between deviation-dominant and oscillatory; at σ_f = 0.50–1.00 the system is 100% oscillatory with no stable equilibrium.
- **Subsidy enlarges the cooperative basin but does not abolish the mechanism.** Subsidy-anchored regimes (κ = 0.70–0.90) converge uniquely to cooperation in 92.97% of low-volatility runs — the clearest stability observed — yet at σ_f = 0.25 mixed basins become modal (59.38%) and at high volatility 73.44% of runs turn oscillatory. Transitional regimes (κ = 0.50) reach a unique cooperative equilibrium in 60.94% of low-volatility runs.
- **Propagation-delay variance, not just level, alters incentives.** Latency enters payoffs as a linear penalty and drives the fork/orphan probability; the fork rate rises monotonically with delay variance, while deviation incidence can stay high and flat even before forks become visible — the damage appears in settlement reliability first.
- **Protocol uncertainty compresses horizons.** A per-block regime-mutation hazard raises the deviation payoff and fork probability; convergence rates fall when uncertainty rises above zero even where mean cooperation barely moves, leaving cooperation episodic and fragile.
- **Collapse thresholds are sharp, not gradual.** Cooperative stability persists up to a boundary, then gives way to cycling and multiplicity — an enforcement failure of the repeated game. Convergence, not average cooperation, determines whether a cooperative equilibrium is reliable.
- **Credible constraint, not flexibility, makes long-run cooperation rational.** A digital cash system does not scale on hope; it scales on constraints that make long-run cooperation rational — when base-layer rules are treated as discretionary inputs, deviation is not a moral failure but the predictable equilibrium response, and mutable transaction-layer policy raises the perceived mutation hazard and steepens effective discounting.
