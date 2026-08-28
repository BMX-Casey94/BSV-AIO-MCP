---
title: 'Miners and rational expectations'
date: 2018-12-29
slug: miners-and-rational-expectations-170d71ac23ee
url: https://medium.com/@craig_10243/miners-and-rational-expectations-170d71ac23ee
themes: [mining-consensus, security-economics, btc-critique]
---

# Miners and rational expectations
**Date:** 2018-12-29 | **URL:** https://medium.com/@craig_10243/miners-and-rational-expectations-170d71ac23ee
**Subtitle:** CSW [10:55 AM] — He is treating the scenario as a forward memory — remembering what HAS NOT happened. If you have the system as memoryless…

## Core thesis
Selfish-mining analyses (he names "Peter and Emin" — Peter Rizun and Emin Gün Sirer) are built on a category error: they treat mining as if miners can reason over hypothetical future chains ("a forward memory — remembering what HAS NOT happened"), when in fact proof-of-work is memoryless and miners act on rational expectations of the next block, always 10 minutes away. Because miners stop work the instant they see a competing block, the counterfactual profits the academics attribute to selfish strategies never exist to be captured. He concludes that "pre-consensus" changes the epistemic situation entirely — miners would know what is expected, removing the uncertainty on which the attack models depend.

## Key arguments and claims
- Mining is memoryless: "the miner expects the next block at 10 mins from now — ALWAYS"; a 33% miner expects its own next block "at 30 mins from now — always", regardless of elapsed time.
- Rational expectations drive action: when a 33% miner sees another miner find a block, it immediately perceives that its own expected wait is now MORE than 30 minutes (it must propagate after the block), so it switches — it does not calculate that selfish mining "can win".
- The selfish-mining scenario requires "looking into an uncertain future and ignoring all the losses, until you get the rare win" — a strategy no rational miner with ongoing costs can adopt.
- Worked example: A finds a block at t=0, B at t=1; B mines on A's block and wins at T=500. The academics say B "would have been better mining on B and then having 2 blocks" — but "if B changed, B would not have the block at T=500". The counterfactual is incoherent because the win is path-dependent on the action actually taken.
- Rizun and Sirer "act on the measured data… look at what has already happened, and say: this is irrational" — retrospective analysis of realised chains cannot reveal the ex-ante rational choice.
- "The idea of emergence is a religion to Peter and Emin": they see pieces, not the whole system — he analogises to cutting up a brain and declaring "I found no centre of X".
- "Pre-consensus" removes uncertainty: "Miners now know what is expected. They have no rational expectation of waiting. They know." A certain and an uncertain system "are NOT the same thing".
- "Nodes stop mining AS SOON AS THEY SEE a block. It IS how Bitcoin functions" — random chance alone in the system means miners do not need to monitor.
- The technocrat jab: modelling counterfactual miner profits "is a way technocrats run money. It is why Bitcoin exists — to remove those technocrats."

## How Craig reasons (his model/logic)
He reasons from the economics of rational-expectations theory applied to a Poisson (memoryless) process: decisions are ex-ante, based on constant hazard rates, not ex-post reconstruction of realised histories. His central methodological distinction is between the realised path (what the academics measure) and the counterfactual path (which cannot be evaluated because changing the action changes the outcome). Rhetorically he mixes technical probability argument with polemic — accusing his targets of reductionism ("emergence is a religion") and of being the technocratic class Bitcoin was built to displace.

## Where this contradicts BTC-mainstream logic
- Directly attacks the selfish-mining literature (Eyal & Sirer 2014 and Rizun's follow-ups) that mainstream Bitcoin discourse accepted as proof that >25–33% miners could profitably deviate — Craig says the attack's payoff calculation is a "forward memory" fallacy.
- Contradicts the academic-core consensus that miner behaviour needed protocol-level correction (and later, in BCH-land, that pre-consensus/Avalanche-style mechanisms were dangerous) — he instead argues pre-consensus strengthens the system by collapsing uncertainty.
- Challenges the "emergence" framing popular in crypto-academia: he insists Bitcoin's security properties are designed and whole-system, not emergent from parts.

## Notable quotes
- "He is treating the scenario as a forward memory — remembering what HAS NOT happened."
- "As said, the miner expects the next block at 10 mins from now — ALWAYS. As a 33% miner they expect the next block they find at 30 mins from now — always."
- "They do not see that if B changed, B would not have the block at T=500."
- "The idea of emergence is a religion to Peter and Emin."
- "And a certain and an uncertain system are NOT the same thing."
- "Remember, nodes stop mining AS SOON AS THEY SEE a block. It IS how Bitcoin functions."

## Connections
Part of his late-2018 campaign against the selfish-mining literature, written weeks after the BCH/BSV split while "pre-consensus" was being debated in the BCH ecosystem (Avalanche proposals). The anti-Rizun/Sirer thread continues across his Medium essays on mining economics, and the rational-expectations framing echoes his SSRN work on Bitcoin's security model.
