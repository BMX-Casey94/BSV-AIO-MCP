---
title: "The Nash Equilibrium in Digital Cash Systems"
date: 2026-02-01
slug: the-nash-equilibrium-in-digital-cash
url: https://singulargrit.substack.com/p/the-nash-equilibrium-in-digital-cash
themes: [mining-consensus, security-economics, protocol-immutability, monetary-economics]
---

# The Nash Equilibrium in Digital Cash Systems
**Date:** 2026-02-01 | **URL:** https://singulargrit.substack.com/p/the-nash-equilibrium-in-digital-cash
**Subtitle:** Revisiting rational choice under transaction-validation constraints

## Core thesis
Whether a digital cash system settles into stable, cooperative transaction validation is not a matter of slogans but of measurable equilibrium structure. Using a repeated mining game, Craig shows that cooperative convergence depends on three interacting frictions: the revenue regime (subsidy-anchored versus fee-dominant), fee volatility, and propagation-delay variance — plus a protocol-uncertainty hazard. Where rules are stable and legible, miners converge on cooperative validation; where rule change is credible or fees dominate and fluctuate, deviation becomes the rational equilibrium response.

## Key arguments and claims
- Miners play a repeated game over blocks; each stage game offers a choice between cooperative throughput-oriented validation and extractive deviation, with payoffs conditioned on revenue environment and network conditions.
- Latency is modelled as an agent-level draw (intensities {0.00, 0.05, 0.10, 0.20}), truncated at zero with variance scaling with the mean. It enters payoffs as a linear penalty (-0.05Λ_i) and drives the fork/orphan probability — so variance, not just level, alters incentives.
- Protocol uncertainty is a per-block regime-mutation hazard ({0.00, 0.02, 0.05, 0.10}). When the regime flips to "unstable", the deviation payoff gains an additive 0.25 bonus and fork probability gains 0.01 — making rule instability bite privately and mechanically at once.
- Runs are classified into four outcomes: unique cooperative attractor, deviation-dominant attractor, mixed basins (path dependence), or oscillatory non-settling regimes.
- Fee-dominant regimes (κ = 0.10–0.30) are deviation-dominant in 93.75% of runs even at low fee volatility (σ_f 0.00–0.10). At σ_f = 0.25 outcomes split 50/50 between deviation-dominant and oscillatory; at σ_f = 0.50–1.00 the system is 100% oscillatory with no stable equilibrium.
- Transitional regime (κ = 0.50): a unique cooperative equilibrium emerges in 60.94% of low-volatility runs, with 39.06% in mixed basins; higher volatility destroys convergence entirely (100% failure to settle).
- Subsidy-anchored regimes (κ = 0.70–0.90) converge uniquely to cooperation in 92.97% of low-volatility runs — the clearest stability observed — but at σ_f = 0.25 mixed basins become modal (59.38%) and at high volatility 73.44% of runs turn oscillatory. Subsidy enlarges the cooperative basin; it does not abolish the mechanism.
- The fork/orphan rate rises monotonically with propagation-delay variance sd(Λ), while deviation incidence can stay high and flat even before forks become visible — the damage appears in settlement reliability first.
- Uncertainty produces measurable horizon compression: convergence rates fall when uncertainty rises above zero even where mean cooperation barely moves, leaving cooperation episodic and fragile.
- Collapse thresholds are sharp, not gradual: cooperative stability persists up to a boundary, then gives way to cycling and multiplicity — an enforcement failure of the repeated game.

## How Craig reasons (his model/logic)
The method is formal game theory disciplined by simulation: parameterise a repeated mining game, sweep the friction parameters, classify observed attractors, and only then interpret. He insists on separating model specification, simulation outcomes, and interpretation into distinct compartments, treating "governance language" as cheap unless tied to measured output. Historical episodes (mempool policy changes, capacity constraints) enter as corollaries of the mechanism, not as anecdotes.

## Where this contradicts BTC-mainstream logic
- BTC's long-run security model assumes a fee-dominant revenue regime; the simulations show fee dominance shifts the stability basin away from cooperation even under mild volatility, and into full oscillation at high volatility.
- Artificially constrained block capacity is identified as a destabilising intervention: scarcity amplifies fee competition, which amplifies volatility, which expands equilibrium multiplicity and cycling.
- Mutable transaction-layer policy (relay rules, replacement policies) is not "efficiency improvement" but a change in the game structure that raises the perceived mutation hazard and steepens effective discounting.
- The mainstream rhetoric of adaptability and robustness is inverted: a governance regime treating base-layer rules as discretionary inputs creates a stochastic meta-game in which extraction and short horizons are rational. Credible constraint, not flexibility, is what makes long-run cooperation rational.

## Notable quotes
- "A digital cash system does not scale on hope. It scales on constraints that make long-run cooperation rational."
- "When those conditions are violated, deviation is not a moral failure. It is the predictable equilibrium response."
- "A repeated game does not reward the rhetoric of mutability; it rewards credible constraints."
- "Convergence is what determines whether a cooperative equilibrium is reliable, not merely whether cooperation is present at some average level."

## Connections
This essay supplies the game-theoretic foundation for Craig's recurring protocol-immutability theme: the base layer as "constitutional substrate" with experimentation pushed to higher layers. Its propagation-variance results connect directly to the engineering treatment in the Teranode essay, and its fee-volatility analysis underpins his monetary critique of BTC's declining-subsidy security budget.
