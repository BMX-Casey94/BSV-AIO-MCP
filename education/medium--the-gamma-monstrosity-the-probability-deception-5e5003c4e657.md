---
title: "The Gamma Monstrosity & the Probability Deception"
era: medium
date: 2018-09-08
slug: the-gamma-monstrosity-the-probability-deception-5e5003c4e657
themes: [mining-consensus, security-economics, networking]
source_summary: summaries-medium/the-gamma-monstrosity-the-probability-deception-5e5003c4e657.md
url: https://medium.com/@craig_10243/the-gamma-monstrosity-the-probability-deception-5e5003c4e657
---

# The Gamma Monstrosity & the Probability Deception — core principles

- **Security thresholds depend on propagation share γ.** The selfish-mining model ties its profitability threshold to the parameter γ: with γ = 0 the honest miners always propagate first and the threshold is 1/3 of hash power; with γ = 1/2 the threshold falls to 1/4 — so the value of γ is the whole question.
- **γ is an artefact of the assumed network topology.** The result falsely assumes a mesh-based network with many hops; under Bitcoin's actual topology the parameter collapses, and a negative gamma is "an error in the model", not a physical result.
- **Miners form a small-world near-complete graph.** Network measurement (Javarone & Wright, "From Bitcoin to Bitcoin Cash: a network analysis", CryBlock'18) demonstrates the small-world structure; "Bitcoin forms a near-complete graph and as the system becomes commercially more and more valuable it becomes closer to a complete graph."
- **Withholding attacks inject delay against the attacker.** In a near-complete graph an attacker's Sybil cluster behaves as a separate giant node that must accept and validate the honest block before propagating its competitor — "in all instances, there is a marked validation delay for the selfish miner", and the botnet command-and-control cost of the overlay further degrades its win likelihood.
- **The block reward enforces propagation.** "It is not enough for a miner to find a block; a miner is rewarded in effect when all other miners build upon that miner's block" — reinforced by the coinbase maturation waiting period, which ties revenue to network acceptance.
- **Non-mining nodes are irrelevant to propagation security.** The misconception that non-mining nodes add importance to block propagation or security is a social-media artefact; the security-relevant graph is the miner graph.
- **Stated assumptions make a model testable.** "On Bitcoin and Red Balloons" (Babaioff et al., 2011) is scientific because it states its assumption — vulnerability only if network distance exceeds d = 3 — which implies security at d ≤ 3 and lets measurement settle the question.
- **Untested models are not science.** Hypotheses must predict testable events (Lakatos on degenerating research programmes); Newton is not "wrong" but a cheaper model — GPS needs relativity while the moon landing ran on Newton — and no general analytic three-body solution exists (Bruns, Poincaré).
- **Causal claims need explicit criteria.** Hill's nine criteria — temporality, strength, dose-response, consistency, plausibility, alternatives, experiment, specificity, coherence — are the standard for asserting causation rather than correlation.
- **Interrogate unpublished claims with "who benefits?".** Before accepting an untested claim circulating on social channels, ask who benefits and why — proof of social media is not evidence.
