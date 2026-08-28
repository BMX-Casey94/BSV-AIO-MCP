---
title: "Bitcoin Has a Population Problem — And We Can Prove It"
date: 2026-03-25
slug: bitcoin-has-a-population-problem
url: https://singulargrit.substack.com/p/bitcoin-has-a-population-problem
themes: [mining-consensus, security-economics, btc-critique, monetary-economics]
---

# Bitcoin Has a Population Problem — And We Can Prove It
**Date:** 2026-03-25 | **URL:** https://singulargrit.substack.com/p/bitcoin-has-a-population-problem
**Subtitle:** The security assumption everyone takes for granted has an expiry date. It's not a conjecture. It's a theorem.

## Core thesis
The honest majority assumption — the load-bearing premise of every formal Bitcoin security proof — is an economic condition with a calculable failure point, not a free parameter. Miners earning less than the security cost σ become compromisable, so there is a closed-form threshold n* = B/σ − β₀/((1−δ)ησ) beyond which the GKL guarantees fail; each halving of the reward B shrinks the safe region.

## Key arguments and claims
- Garay, Kiayias and Leonardos (2015; JACM 2024) proved the backbone properties under a quantitative Honest Majority Assumption: adversarial hashrate β ≤ (1−δ)γ with block rate 3f + 3ε < δ. Under HMA, typical executions yield Common Prefix (Theorem 15), Chain Growth (Theorem 13) and Chain Quality (Theorem 16), giving Persistence (Lemma 24) and Liveness (Lemma 25). Pass–Seeman–Shelat, Ren and Gazi–Kiayias–Russell inherit the same exogenous split.
- The blind spot: these are sufficiency results — "if HMA holds, then security follows" — silent on whether, why or when HMA fails. The new paper (*Safety and Liveness Failure Under Budget-Constrained Mining: Composing Backbone Proofs with Endogenous Honest Majority*, Craig S. Wright, University of Exeter) endogenises the split.
- The mechanism: miners are funded by fixed-per-epoch rewards and must each spend σ on operational security (patching, keys, monitoring, physical protection). More miners means less revenue each; below σ, marginal miners become compromisable and their hashrate transfers to the adversary. γ(n) plateaus while β(n) grows unboundedly from baseline β₀ — the curves must cross.
- Three regimes: safe (n ≤ n*), where six confirmations suffice; margin (n* < n < n_eq), where γ > β but without the GKL margin, so overtake probability ≈ (β/γ)^k stays bounded away from zero for any practical k; and majority-loss (n ≥ n_eq), where a private-chain attack succeeds with probability 1 and censorship breaks Liveness.
- The confirmation-depth death spiral (illustrative parameters): n = 50 → six blocks for one-in-a-million double-spend safety; n = 85 → 13; n = 90 → 20; n = 92 (the threshold n*) → 30, five hours per confirmation; at n = 93 the GKL condition fails entirely and no depth is ever certified. "This is not a cliff — it is a ramp."
- The proof has three layers: imported sufficiency (GKL theorems cited by number); native attacks in the GKL round-based model (a private-chain attack covering strict majority, fragmentation drift and random-walk recurrence — all yielding overtake probability 1 — plus censorship); and economic composition via a monotonicity lemma on Γ(n) = (1−δ)γ(n) − β(n), yielding a unique n* with no contrapositive of a sufficiency theorem.
- The halving problem: n* contains B in the numerator, so each halving cuts n* by B/(2σ) unless fees compensate. Miner exit should restore equilibrium, but the window between halving and marginal-miner exodus may be formally unsafe.
- The cheap-energy externality: equilibrium population n_e = B/(σ + c_e); preserving honest majority requires c_e ≥ β₀σ / ((1−δ)ηB − β₀). Energy too cheap induces excessive entry — good for miners, harmful for the network.
- Robustness: the threshold model is conservative (probabilistic compromise would shrink the safe region), and omitted attacks (eclipse, timing, difficulty manipulation) worsen reality. Pools raise n* by consolidating underfunded miners; under Zipf budgets (200-miner example) n* is larger but the structure identical. Small PoW chains with B in the tens of thousands of dollars may have n* in single digits — the margin region "is the operating regime".

## How Craig reasons (his model/logic)
Formal composition: import the cryptography literature's sufficiency theorems verbatim, build attacks in the same execution model, and close the gap with an endogenous economic layer, so one framework proves security below n* and failure above n_eq. The stance is conservative — explicit about what is not proved — and every parameter is observable or estimable.

## Where this contradicts BTC-mainstream logic
- The "six confirmations" convention is demoted from protocol constant to ecosystem-dependent variable that diverges near the threshold.
- The halving schedule — celebrated by BTC orthodoxy as sound-money engineering — contracts the safe mining population every epoch unless fee volume replaces subsidy.
- The cheap-energy-is-good-for-mining mantra is inverted: below a calculable bound, cheap energy is a negative security externality.
- Honest majority must be *engineered* (rewards, bonds, entry barriers, pool structure) rather than assumed — it is miner economics, not node counts, that matter.

## Notable quotes
- "This is like a structural engineer proving that a bridge can hold 10,000 tonnes, then never asking how many lorries are likely to cross it."
- "A payment system where confirmations take five hours is not a payment system."
- "The answer has a number, and that number has a formula. Whether you like the answer is beside the point."

## Connections
Companion piece to "Why Transaction Throughput Determines How Long Bitcoin's Security Model Holds" (same batch): both attack the exogeneity of BTC security assumptions — one the block-arrival process, the other the hashrate partition — and both hinge on fees replacing subsidy.
