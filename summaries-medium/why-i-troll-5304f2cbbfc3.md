---
title: 'Why I troll'
date: 2018-11-26
slug: why-i-troll-5304f2cbbfc3
url: https://medium.com/@craig_10243/why-i-troll-5304f2cbbfc3
themes: [mining-consensus, networking, security-economics]
---

# Why I troll
**Date:** 2018-11-26 | **URL:** https://medium.com/@craig_10243/why-i-troll-5304f2cbbfc3
**Subtitle:** I should not troll on Twitter, but I do enjoy it. There is more importantly a reason why I troll. The reason is also very simple.

## Core thesis
Craig's Twitter trolling is a deliberate trap to expose "so-called experts" — here Peter Rizun (spelled "Rizen") — who model Bitcoin mining as independent Poisson processes. He argues block races are dependent-probability events: miners stop mining the moment they see a competitor's block, so any I.I.D.-based analysis of two-block races is fundamentally wrong.

## Key arguments and claims
- Rizun's core failing is applying an I.I.D. (independent, identically distributed) assumption to events that are actually "conditional probabilities and dependent events"; this is "the problem in all of his analysis".
- Toy model: Alice finds a block at T=0, Bob finds a competing block within 20 seconds. Rizun's maths holds only if miners mine independently — "But in Bitcoin they do not mine independently"; the first-seen rule and block propagation couple the events.
- Propagation beats discovery order: if Alice propagates in 0.01s and Bob in 2s, Alice wins even though Bob "discovered" first. This is "one of the MANY serious flaws in the foolish fallacy of selfish mining".
- Network propagation is fast: "nearly all (99.98%) miners will know of the block that Alice found in under 2 seconds", so Bob must be in the 0.02% who have not seen it to keep mining the old height.
- Rational-miner logic: Bob with 33.3% of hash expects a block every 30 minutes; on seeing Alice's block he has no expectation of finding one within 20s and knows 66.6% of miners are already building on Alice, so he switches — "Bob does not act on what could have been, he acts on what he expects."
- The correct calculation is conditional: Prob(A followed by B *given no network transmission from A to B*), which he bounds at <0.0002 × 0.033 — "far less" than the 0.01% figure implied by the naive model.
- Nodes vary between "spy-mining" headers and full validation, which he frames as a "risk-reward trade-off based on profit-maximisation strategies".
- Closes with a meta-troll: "PS… I see the 'u'… troll in a troll to inception level."

## How Craig reasons (his model/logic)
Systems-thinking versus isolated-actor modelling: he reframes a probability question as a whole-network, profit-maximisation problem in which information propagation changes actors' behaviour. The method is worked numerical examples plus a cited network-analysis paper, wrapped in adversarial showmanship — the troll post is itself bait, and the correction is the lesson.

## Where this contradicts BTC-mainstream logic
- Contradicts the selfish-mining literature (Eyal & Sirer lineage), which treats miners' block discoveries as independent events; he calls selfish mining a "foolish fallacy".
- Contradicts academic-expert authority around Bitcoin generally: credentialed analysts commit a category error by modelling a coupled system as independent actors.
- Notably this is intra-big-camp fire, not anti-Core: Rizun was chief scientist of Bitcoin Unlimited, so the essay also undercuts a fellow big-blocker's technical credibility.

## Notable quotes
- "He uses an I.I.D condition, that is independent, identically distributed events, and falsely assumes this when there are conditional probabilities and dependent events."
- "the nodes in the network do not stop mining, until the new block has been seen"
- "Bob does not act on what could have been, he acts on what he expects."
- "This is not a simple Poisson problem; the calculations are NOT independent."
- "Sorry, Peter — I got you again, and you still do not even see it."

## Connections
Cites "From Bitcoin to Bitcoin Cash: a network analysis" (arXiv:1804.02350) as its reference. Part of his long-running feud with Peter Rizun and his anti-selfish-mining campaign; the same dependent-systems argument underpins his 0-conf safety case in "Instant transactions" (Dec 2018).
