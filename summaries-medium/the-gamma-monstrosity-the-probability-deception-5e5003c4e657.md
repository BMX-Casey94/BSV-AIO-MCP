---
title: 'The Gamma Monstrosity & the Probability Deception'
date: 2018-09-08
slug: the-gamma-monstrosity-the-probability-deception-5e5003c4e657
url: https://medium.com/@craig_10243/the-gamma-monstrosity-the-probability-deception-5e5003c4e657
themes: [mining-consensus, security-economics, networking]
---

# The Gamma Monstrosity & the Probability Deception
**Date:** 2018-09-08 | **URL:** https://medium.com/@craig_10243/the-gamma-monstrosity-the-probability-deception-5e5003c4e657
**Subtitle:** For some time now, I have allowed people to continue with this foolish and unscientific notion of gamma in the Selfish Mining fallacy. In…

## Core thesis
The "selfish mining" attack of Eyal and Sirer rests on the parameter gamma (γ), which Craig argues is an artefact of a false network model: it assumes Bitcoin is a loose gossip mesh, when in fact miners form a near-complete graph. In a densely connected network, an attacker's Sybil cluster only injects validation and propagation delay against itself, driving gamma negative and voiding the attack's claimed profitability thresholds. The essay's second half is a philosophy-of-science lecture: untested models are "pseudo-mystic science", and causal claims require something like Hill's criteria.

## Key arguments and claims
- Quotes the selfish mining paper's own definition: "γ = 0, the honest miners always publish and propagate their block first, and the threshold is at 1/3. With γ = 1/2 the threshold is at 1/4" — the result he aims to demolish.
- The paper "falsely assumes a mesh-based network structure with many hops" and mislabels a likelihood model as probability; a negative gamma is "an error in the model", not a physical result.
- His co-authored paper with Marco Javarone ("From Bitcoin to Bitcoin Cash: a network analysis", CryBlock'18) demonstrates Bitcoin's small-world structure; "Bitcoin forms a near-complete graph and as the system becomes commercially more and more valuable it becomes closer to a complete graph."
- Babaioff et al.'s "On Bitcoin and Red Balloons" (2011) is praised as "scientific in nature" because it states assumptions: Bitcoin is vulnerable only if network distance exceeds d=3 — implying security under d=3.
- Incentive mechanism driving density: "It is not enough for a miner to find a block; a minor is rewarded in effect when all other miners build upon that miner's block", enforced by the coinbase maturation waiting period.
- "The misconception that non-mining nodes add any importance to Bitcoin block propagation or security is a social media or attack and is irrelevant to the structure of Bitcoin."
- In a complete graph the selfish miner's Sybil cluster behaves as a separate giant node: it must accept the honest block, validate it (spy mining would invalidate its own strategy), then propagate its competing block — "In all instances, there is a marked validation delay for the selfish miner."
- Botnet command-and-control costs of running the Sybil network are "ignored within the selfish mining hypothesis"; even at zero cost, the overlay "imposes delay", a negative impact on the attacker's block-win likelihood.
- Philosophy of science: hypotheses must be tested (Lakatos on "degenerating research programmes"); Newton is not "wrong" but a cheaper model — GPS needs relativity, the moon landing ran on Newton; Bruns and Poincaré showed no general analytic three-body solution (16 specific solutions known); Gödel proved only the simplest arithmetic is complete.
- Hill's nine criteria for causal inference (temporality, strength, dose-response, consistency, plausibility, alternatives, experiment, specificity, coherence) are his standard for claims; he applies them to his own cybercrime-economics papers and accuses climate science and Keynesian economics of failing dose-response. Ends with "Proof of Social Media": before accepting an unpublished claim, ask "Who benefits, and why?"

## How Craig reasons (his model/logic)
He attacks the assumptions of the opposing model rather than its internal mathematics: change the network topology from mesh to near-complete graph and the gamma parameter collapses. The argument is layered — empirical (his ACM network-measurement paper), economic (miner incentives, validation delay, botnet operating costs), then meta-scientific (Lakatos, Gödel, Hill's criteria) to recast the dispute as science versus mysticism. Rhetorically it pairs credential display with delegitimisation of "pseudo-academics" who "never bothered to test their limited hypothesis".

## Where this contradicts BTC-mainstream logic
- Selfish mining was mainstream-cited evidence that Bitcoin is insecure well below 51% hashpower, justifying conservative protocol design; Craig calls the result an untested fallacy that evaporates under Bitcoin's real topology.
- Contradicts the full-node security orthodoxy head-on: non-mining nodes are "irrelevant to the structure of Bitcoin" — the opposite of the BTC "every user validates" doctrine.
- Contradicts the gossip/mesh picture of the Bitcoin network underpinning BTC decentralisation rhetoric: miners are incentivised into a dense, near-complete graph, and that density is a security property, not a centralisation sin.
- Frames academic cryptocurrency research (Cornell in particular) as agenda-driven "Proof of Social Media", rejecting the authority BTC culture grants it.

## Notable quotes
- "this foolish and unscientific notion of gamma in the Selfish Mining fallacy"
- "Bitcoin forms a near-complete graph and as the system becomes commercially more and more valuable it becomes closer to a complete graph."
- "It is not enough for a miner to find a block; a minor is rewarded in effect when all other miners build upon that miner's block."
- "The misconception that non-mining nodes add any importance to Bitcoin block propagation or security is a social media or attack"
- "To be science, it is necessary that a hypothesis predicts an event that can be tested."
- "Who benefits, and why?"

## Connections
Cites his ACM CryBlock'18 paper with Javarone, Babaioff et al. (arXiv:1111.2626), Lakatos's science/pseudoscience lecture, Gödel (1931), and his own 2012 papers "Criminal Specialization as a Corollary of Rational Choice" and "Territorial Behavior and the Economics of Botnets". A salvo in his long-running campaign against the Eyal–Sirer selfish mining result, continued across craigwright.net and his later arXiv papers on Bitcoin's small-world network.
