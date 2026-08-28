---
title: "Effective Decentralisation Is the Minimum, Not the Average"
date: 2026-05-03
slug: effective-decentralisation-is-the
url: https://singulargrit.substack.com/p/effective-decentralisation-is-the
themes: [governance-decentralisation, security-economics, mining-consensus]
---

# Effective Decentralisation Is the Minimum, Not the Average
**Date:** 2026-05-03 | **URL:** https://singulargrit.substack.com/p/effective-decentralisation-is-the
**Subtitle:** A protocol cannot be more decentralised than its most concentrated effective control layer. Reporting one layer and ignoring the others is not measurement; it is selection bias.

## Core thesis
Decentralisation is not a scalar but a vector with at least four components — admission, consensus operation, governance, and mutability — and its economically meaningful summary is the minimum across those layers, not the average. A system cannot be more decentralised than its most concentrated effective control layer, because each layer is an independent attack surface. Reporting one flattering metric (usually validator or hash distribution) as "decentralisation" is selection bias, not measurement.

## Key arguments and claims
- Formal statement: Deff = min(Dadmission, Dconsensus, Dgovernance, Dmutability), with each D normalised so that higher values represent greater dispersion.
- The four layers: admission (who may participate at all), consensus operation (who produces blocks), governance (who can revise the rule set), and mutability (whether base-layer rules can change and by what mechanism). Governance and mutability are distinct: concentrated governance over a low-mutability rule set is constrained governance.
- Min-rule rationale: the layers are alternative attack surfaces, not complements. Strength at the consensus layer does not protect against governance attacks. Analogies: a supply chain's capacity is its bottleneck's capacity; a chain's strength is its weakest link; multi-step authentication is its weakest step.
- Sharper consequence: improving a non-binding layer changes nothing. Raising validator count from 5,000 to 10,000 does not raise Deff if governance was already the binding layer at 5,000.
- Standard metrics classified by layer: hash-rate distribution and the Nakamoto coefficient measure consensus, and only partially — they ignore shared clients, infrastructure providers, sponsors and jurisdictional exposure. Validator count and stake distribution ignore client diversity, delegated stake and common control. Token Gini coefficients capture only token-voting governance and suffer severe identification problems from multi-address custody and wrapping.
- Node count is "a metric of network observation rather than control": a node that only observes the chain exercises no authority, and conflating node count with decentralisation is "one of the more durable category errors in the field".
- Client diversity measures implementation authority (a governance sub-layer): a system dominated by one client is governed by that client's maintainers regardless of dispersion elsewhere.
- Missing metrics: sponsor/funding concentration; adoption-critical infrastructure (which exchanges, pools and staking services could block activation); custody concentration (custodians, not beneficial owners, exercise operational control); cloud/hosting concentration (correlated failure and coercion); legal-jurisdiction concentration of identified actors; social-coordination concentration.
- Cross-layer correlations make the true minimum lower than layer-by-layer figures suggest: sponsors fund the implementations; professional validators are operationally identical to a few staking services; adoption-critical actors are also the heavyweight governance voices. Unadjusted standard metrics should be treated as upper bounds, not point estimates.
- Complete reporting requires: layer-by-layer dispersion measurement, correlation adjustments, explicit identification of the binding constraint, the minimum coalition needed to harm participants at each layer, and an acknowledgement of what is not measured.

## How Craig reasons
Institutional-economics measurement theory. He treats decentralisation as a proxy for the cost of adverse coordination, imports the weakest-link/bottleneck rule from systems with sequential constraints, then audits each popular metric against the layer it actually measures. The method is classificatory and formal — a min-operator over normalised layer scores — grounded in Williamson, North, Coase and Hirschman.

## Where this contradicts BTC-mainstream logic
- Directly rejects the BTC-canonical claim that full-node count measures decentralisation: observation is not control.
- Rejects Nakamoto-coefficient and validator-count reporting as sufficient: they capture one layer while ignoring client, sponsor, custody and governance concentration.
- Rejects the averaging/weighting defence: layers are alternatives, so strength at one cannot compensate for weakness at another; weighting by ease of measurement is "not defensible".
- Implies BTC and major proof-of-stake chains alike are bottlenecked at the client/governance layers — single dominant implementations and small maintainer sets — regardless of miner or validator dispersion.

## Notable quotes
- "Decentralisation is reported as a number. It is not a number. It is a vector."
- "The conflation of node count with decentralisation is one of the more durable category errors in the field."
- "A system with open admission and concentrated governance is open at the door and closed at the rule book."
- "The standard report is partly so easy because it omits what is hard."

## Connections
Companion piece to "Who Actually Decides", which names the coalitions occupying the governance layer, and to "The Myth of the Sovereign Node", which develops the node-count category error into a full critique of BTC consensus theology. The mutability layer is treated at length in "What TCP/IP Got Right".
