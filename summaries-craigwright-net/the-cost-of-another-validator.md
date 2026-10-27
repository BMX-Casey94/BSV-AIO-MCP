---
title: "The cost of another validator"
date: 2026-10-15
slug: the-cost-of-another-validator
url: https://craigwright.net/the-cost-of-another-validator
themes: [governance-decentralisation, security-economics]
---

# The cost of another validator
**Date:** 2026-10-15 | **URL:** https://craigwright.net/the-cost-of-another-validator | **Source:** craigwright.net research article

## Core thesis
The article argues that a larger committee can spread responsibility while consuming the resources needed to protect its members. The question it poses is what the next participant contributes after coordination and protection have both been counted. An elegant curve, it says, can explain a mechanism without selecting the same committee as the underlying integer calculation.

## Key arguments and claims
- The source is Craig S. Wright (2026), *Supplementary Appendix to The Decentralisation Threshold: When More Validators Reduce Net Security*, a public Zenodo deposit of 8 May 2026, doi:10.5281/zenodo.20078799. The article says it uses the model and results in Sections 1–5 and the numerical specification in Section 11. The sources note says the numerical checks concern the stated illustrative model and are not a deployed-network benchmark.
- In what the article calls the appendix's illustrative quadratic coordination model, a budget of 100 units and a coordination coefficient of 0.005 leave 87.5 units after coordinating 50 validators, or 1.75 units per validator if the residual is divided equally. At 100 validators, coordination consumes 50 units and protection receives 0.50 units per validator. The article says these are model units, not measured expenditure from a deployed network. Quadratic coordination is described as a stated cost specification, not something that can be assigned to every system because its participants are called validators. A useful application, it says, must measure the relevant communication, verification and operational costs.
- The independent-compromise baseline gives each validator the same compromise probability and counts how many are compromised. The adverse event occurs when that count reaches a specified fraction of the committee, rounded up to a whole number. With a one-third threshold, the article says, 84 validators require 28 compromised members, 85 validators require 29, and at 86 the threshold remains 29. Adding a member therefore changes the two neighbouring comparisons differently: when the threshold stays fixed there is another opportunity for compromise without an increase in the count required; when it rises, an additional compromise is required. The article says this produces a sawtooth in the exact probability, derived by adding one independent Bernoulli trial to the existing count, and that a smooth trend does not describe every one-member change.
- The appendix is also said to use a Chernoff upper bound on the adverse-event probability. Subtracting that bound from one gives what the article calls a conservative smooth measure of protection. Under the stated curvature and endpoint conditions, subtracting increasing convex costs produces a unique interior optimum. Separately, the exact integer problem has a finite maximiser because its benefit is bounded while its modelled cost grows without bound. The article says that existence argument does not itself establish uniqueness, or a smooth decline at every integer beyond the best committee.
- For the appendix's illustrative fixed-probability parameters, the article says direct enumeration selects 85 validators and the corresponding smooth calculation selects approximately 122.8. It says the author rechecked those two calculations for this article using the stated equations. It calls this a numerical check of the illustrative model, not an estimate of the appropriate size of any operating network. The approximation makes the trade-off easy to study; the exact calculation evaluates the choices that can actually be made inside that model. Treating the approximation as an operational prescription, the article says, would discard information already available at negligible computational cost.
- Applying the framework, it says, requires evidence on the compromise probability, dependence between operators, coordination costs, and the value assigned to avoided failure. Shared software, infrastructure or control can undermine an independence assumption even when the machines have different labels. A practical comparison would hold the service requirement and threat scenario fixed, document those inputs, and report how the preferred committee changes as uncertain inputs vary. It would distinguish a modelled threshold event from demonstrated failure of a particular protocol, whose timing and execution assumptions also matter.

## How Craig reasons (his model/logic)
The article works inside one stated model and keeps each mathematical object on its own claim. Budget arithmetic shows what a fixed total does to protection per validator. The integer threshold supplies the sawtooth. A Chernoff bound supplies a smooth protection measure and, under stated conditions, a unique interior optimum. Exact enumeration is then set beside that smooth figure, 85 against approximately 122.8, and the article says the author rechecked both. Existence of a finite maximiser is not allowed to imply uniqueness or a smooth decline at every larger integer. The close lists the measurements a real application would still need.

## Where this contradicts BTC-mainstream logic
The article does not set up an explicit contrast with BTC-mainstream positions.

## Notable quotes
- "A larger committee can spread responsibility while consuming the resources needed to protect its members."
- "It is a small calculation with a large interpretive consequence: a smooth trend does not describe every one-member change."
- "Counting the participants is the beginning of that investigation."

## Connections
The article is an account of the author's Zenodo appendix to *The Decentralisation Threshold: When More Validators Reduce Net Security*. The repo contains a summary of the 6 July 2026 Substack essay of that title, [The Decentralisation Threshold: When More Validators Reduce Net Security](../summaries/the-decentralisation-threshold-when.md). This page does not cite that essay. It also links [Short paths, uneven connections](short-paths-uneven-connections.md).

*Summary of the author's own account; claims are his and have not been independently verified.*
