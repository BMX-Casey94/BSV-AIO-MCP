---
title: "The Decentralisation Threshold: When More Validators Reduce Net Security"
date: 2026-07-06
slug: the-decentralisation-threshold-when
url: https://singulargrit.substack.com/p/the-decentralisation-threshold-when
themes: [governance-decentralisation, security-economics, mining-consensus, scaling-throughput]
---

# The Decentralisation Threshold: When More Validators Reduce Net Security
**Date:** 2026-07-06 | **URL:** https://singulargrit.substack.com/p/the-decentralisation-threshold-when
**Subtitle:** On Wednesday 8 July I present paper #1571269089, "The Decentralisation Threshold: When More Validators Reduce Net Security," at IEEE SmartNets 2026.

## Core thesis
Net security in a distributed consensus system is not monotone in the number of validators. For any system that pays for its own coordination out of a finite budget, there exists a unique interior optimum n*: below it each additional validator adds security, above it each one actively subtracts security. For a representative parametrisation the optimum sits at eighty-five validators — "Not five hundred thousand. Eighty-five."

## Key arguments and claims
- The mechanism is a budget identity: Bsec = Bcoord(n) + Bhard(n). For PBFT-class protocols coordination scales quadratically, Bcoord(n) = cn² (message complexity O(n²) per round), so per-node hardening (Bsec − cn²)/n collapses hyperbolically. At Bsec = 100, c = 0.005: 1.75 units per node at n = 50, effectively zero at nmax = √(Bsec/c) = 141.
- Hardening buys down compromise probability: p(b) = p0·e^(−ηb). The drain R(n) = cn² + an (quadratic coordination plus linear attack surface) is strictly convex and derived from the budget identity, "not assumed for algebraic convenience".
- The gain side is the exact binomial tail: an attacker needs ⌈fdn⌉ of n nodes (fd = 1/3 for standard BFT); the tail converges to zero but oscillates — a sawtooth with exact period three, proved by a one-step coupling argument. The Chernoff envelope gives π(n) ≤ e^(−κn) with κ = DKL(fd‖p); bounded gain plus divergent drain guarantees a maximum regardless.
- Main theorem: with G increasing and strictly concave, R increasing and strictly convex, and the marginals crossing, S(n) = G(n) − R(n) has a unique interior maximum at G′(n*) = R′(n*). The licensed conclusion is sharp: not "diminishing returns" but "stop here, and if you are past it, retreat".
- A closed form exists via the Lambert W function: ñ* = (1/κ)·W(κ²Gmax/(2r)) — but it optimises an upper envelope that overshoots the true optimum by roughly 40% at baseline (123 against 85). "An approximation acknowledged is a tool; an approximation concealed is a fraud with better typography."
- Baseline numbers (Gmax = 100, r = 5×10⁻⁵, p = 0.20, fd = 1/3, κ = 0.0487): exact optimum n* = 85 with attack probability 1.6×10⁻³ and net security 99.48/100; at 500 validators net security falls to 87.5. Sensitivity across the (r, p) grid yields optima from 19 to 223 — always finite.
- Compromise probability dominates: moving p from 0.10 to 0.25 roughly quintuples the optimal committee size, while a tenfold change in coordination cost only halves it.
- Deployed systems already obey the theorem (claimed as illustration, not calibration): Ethereum's beacon chain has 500,000+ nominal validators but organises attestation into per-slot committees of 128; Cosmos Hub caps its active set at 180; Aptos runs ~130; Algorand samples a committee cryptographically per round. Subsampling, aggregation and checkpointed finality reduce effective n while preserving nominal count.
- Three objections are met with labelled extensions: heterogeneous validators (Poisson-binomial; a Beta-distributed draw moves the optimum from 85 to 82); correlated compromises (the optimum moves down, collapsing to n* = 1 at ρ → 1 — "correlation does not rescue large committees; it indicts them"); and endogenous p(n) through budget dilution (an anti-concentration lemma drags the worked-example optimum from 100 below 11).
- Scope is stated candidly: an economic optimisation, not a cryptographic safety proof; non-strategic attacker (a Stackelberg equilibrium is Open Problem 1); and a genuinely linear drain would degenerate the interior optimum to a boundary — "a limitation stated is a limitation controlled".

## How Craig reasons (his model/logic)
Formal microeconomics of security: reduce the problem to two curves (concave gain, convex drain) derived from a budget identity, then prove a unique interior maximum with elementary machinery. The discipline is notable — exact enumeration over smooth approximation for design decisions, every objection answered with an extension, every limitation stated in print.

## Where this contradicts BTC-mainstream logic
- Against the industry piety "more decentralisation is more security": called "the most expensive superstition in distributed systems" — false "as a structural matter, provably, for any consensus system that pays for its own coordination out of a finite budget".
- Against validator-count marketing: systems operating above their optimum "are not more secure; they are less secure and more expensive simultaneously, which is a combination only ideology could market as progress".
- Against large nominal validator counts (e.g. Ethereum's half-million): surviving systems all deploy mitigations that shrink effective committee size — "The engineering folklore got there before the theorem did; the theorem explains the folklore."
- The burden of proof is reversed: "anyone claiming that a system needs more validators must show it is operating below n*".

## Notable quotes
- "The marginal validator past the optimum is not a hedge; it is a leak."
- "It has purchased the appearance of decentralisation at the price of its substance, which is the sort of bargain usually reserved for politics."
- "Correlation does not rescue large committees; it indicts them."
- "None of this is an argument against decentralisation. It is an argument against treating decentralisation as a virtue that compounds without limit—against the substitution of a slogan for a first-order condition."

## Connections
The paper sits alongside Wright's 2025 arXiv works "A formal refutation of the blockchain trilemma" and his rebuttal of Mssassi & Abou El Kalam's trilemma proof (both cited in the references), extending his campaign against the claim that decentralisation, security and scalability form an irreducible trade-off.
