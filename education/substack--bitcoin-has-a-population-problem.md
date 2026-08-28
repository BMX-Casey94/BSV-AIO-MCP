---
title: "Bitcoin Has a Population Problem — And We Can Prove It"
era: substack
date: 2026-03-25
slug: bitcoin-has-a-population-problem
themes: [mining-consensus, security-economics, btc-critique, monetary-economics]
source_summary: summaries/bitcoin-has-a-population-problem.md
url: https://singulargrit.substack.com/p/bitcoin-has-a-population-problem
---

# Bitcoin Has a Population Problem — And We Can Prove It — core principles

- **Honest majority is an economic condition, not a free parameter.** The formal security proofs for Bitcoin (Garay–Kiayias–Leonardos 2015, JACM 2024) assume adversarial hashrate β ≤ (1−δ)γ as an exogenous premise; whether that premise holds depends on miner revenue covering each miner's operational security cost σ — a condition with a closed-form failure threshold.
- **A safe mining population has a computable floor.** With per-epoch reward B and compromise-transfer dynamics, the safe region ends at n* = B/σ − β₀/((1−δ)ησ); below the threshold the GKL guarantees (Common Prefix, Chain Growth, Chain Quality, hence Persistence and Liveness) cease to apply.
- **Each halving contracts the safe region unless fees replace subsidy.** Because n* carries B in its numerator, every halving cuts the safe population by B/(2σ); security spend must migrate from subsidy to fee volume or the network passes through a formally unsafe window between halving and marginal-miner exit.
- **Confirmation depth is an ecosystem variable, not a protocol constant.** Near the threshold the double-spend overtake probability (β/γ)^k stays bounded away from zero for any practical k: illustrative parameters move from 6 confirmations at n = 50 to 30 at the threshold, after which no depth is ever certified — "a payment system where confirmations take five hours is not a payment system."
- **Honest majority must be engineered, not assumed.** Rewards, pool structure, entry conditions and fee volume are the levers; pools raise n* by consolidating underfunded miners, and node counts are not the relevant security variable — miner economics is.
- **Cheap energy can be a negative security externality.** Equilibrium population n_e = B/(σ + c_e); preserving honest majority requires c_e ≥ β₀σ/((1−δ)ηB − β₀), so energy priced below that bound induces entry that is good for miners and harmful for the network.
- **Builders should treat small-chain security margins as suspect.** Chains with subsidy B in the tens of thousands of dollars can have single-digit safe populations; the margin region — alive but without the GKL guarantee — is their normal operating regime, and businesses should demand observable miner-economics data before relying on confirmation conventions.
