---
title: 'A formal rebuttal of "The Blockchain Trilemma: A Formal Proof of the Inherent Trade-Offs Among Decentralization, Security, and Scalability" by Souhail Mssassi and Anas Abou El Kalam.'
date: 2025-07-09
slug: a-formal-rebuttal-of-the-blockchain
url: https://singulargrit.substack.com/p/a-formal-rebuttal-of-the-blockchain
themes: [governance-decentralisation, scaling-throughput, security-economics, mining-consensus]
---

# A formal rebuttal of "The Blockchain Trilemma: A Formal Proof of the Inherent Trade-Offs Among Decentralization, Security, and Scalability" by Souhail Mssassi and Anas Abou El Kalam.
**Date:** 2025-07-09 | **URL:** https://singulargrit.substack.com/p/a-formal-rebuttal-of-the-blockchain
**Subtitle:** AKA - Failed Peer Review at the worst.

## Core thesis
The paper by Souhail Mssassi and Anas Abou El Kalam (Appl. Sci. 2025, 15(1), 19) claiming a formal proof of the blockchain trilemma is "neither mathematically rigorous nor conceptually consistent": it rests on undefined or tautological definitions of decentralisation, misapplies security models alien to Bitcoin, and dresses conjecture in symbolic notation without any falsifiable theorem. Measured against Craig's own arXiv refutation (arXiv:2507.05809), the paper "should be retracted or re-evaluated under proper peer review".

## Key arguments and claims
- First fatal flaw: "the term decentralisation is undefined or, worse, defined tautologically" — on page 2 the authors "implicitly equate decentralisation with node count and geographic dispersion", an error Craig says is repeatedly discredited. Bitcoin's security instead depends on "economic incentives aligning through proof-of-work, with enforcement governed by the fixed protocol and miners who follow that protocol".
- Permissionlessness is redefined: Bitcoin is permissionless "in the sense that anyone can participate under the rules—not that every participant is equal in effect or function".
- The authors' model assumes security requires many independently validating nodes and that scalability contradicts this via reduced redundancy; Craig counters that "redundant validation has zero marginal utility after the block is mined and accepted", so scalability is achieved precisely by not having everyone validate everything.
- Second major error: misapplied security models. Mssassi et al. treat security "as a monolith", conflating traditional Byzantine fault tolerance with Nakamoto consensus; Bitcoin's probabilistic finality "is not about absolute agreement but economic irreversibility", and such a system "scales indefinitely because consensus is not built on message passing between trusted parties but through an objective, computational race".
- Thirdly, the "formal proof" is "a semantic shell game": "not derived from first principles nor from computational constraints... a stylised narrative using symbolic logic to encode assumptions as axioms", with "no theorem presented with a verifiable falsification mechanism".
- The trilemma reduces to a false dichotomy — that increased scale must reduce either decentralisation or security — whereas "when correctly defined, all three aspects can be simultaneously maintained under the fixed Bitcoin protocol".
- Craig's corrective definitions: decentralisation as "access to participation under rules", security as "economic finality", and scalability as "the ability to process a large number of transactions under fixed protocol constraints"; scalability is limited "by economic propagation and block size capacity", not by network consensus.
- The verdict is maximal: the paper is "an ideologically driven, semantically hollow construction" whose "assumptions are flawed, their logic circular, and their definitions selectively engineered to force a trade-off that does not inherently exist"; a fuller formal demolition "shall be forthcoming".

## How Craig reasons (his model/logic)
The mode is adversarial peer review: definitional analysis first (showing the key term is a "floating signifier"), then category correction (distinguishing Nakamoto's economic-race consensus from message-passing BFT), then a philosophy-of-science test (a proof without a falsifiable theorem is not a proof). Each defect in the target paper is paired with the corrective claim from his own arXiv:2507.05809 refutation, which is positioned as the rigorous baseline.

## Where this contradicts BTC-mainstream logic
- Denies that decentralisation-as-node-count is a security parameter at all — the premise underlying BTC's small-block, everyone-validates culture.
- Asserts redundant validation "has zero marginal utility after the block is mined and accepted", flatly rejecting the mainstream "verify, don't trust" full-node doctrine.
- Recasts security as economic finality rather than widespread independent validation, and scalability as bounded by "economic propagation and block size capacity" rather than by consensus — inverting the standard BTC scaling narrative.
- Treats the CAP-theorem analogy, commonly invoked to justify the trilemma, as inapplicable to Bitcoin's probabilistic proof-of-work design.

## Notable quotes
- "redundant validation has zero marginal utility after the block is mined and accepted"
- "Their proof is not derived from first principles nor from computational constraints. It is instead a stylised narrative using symbolic logic to encode assumptions as axioms."
- "It is a myth borne of confusion and perpetuated by those unwilling to engage with the system as implemented."
- "This paper should be retracted or re-evaluated under proper peer review for failing to meet the standards of computational or economic analysis."

## Connections
This is the targeted, paper-specific strike accompanying "The Collapse of the Blockchain Trilemma" (published two days earlier), which makes the same category-error argument in essay form, and Craig's arXiv paper "A Formal Refutation of the Blockchain Trilemma" (arXiv:2507.05809), cited throughout as the authoritative rebuttal.
