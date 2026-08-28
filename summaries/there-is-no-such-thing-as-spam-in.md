---
title: "There Is No Such Thing as Spam in a Priced System"
date: 2026-08-04
slug: there-is-no-such-thing-as-spam-in
url: https://singulargrit.substack.com/p/there-is-no-such-thing-as-spam-in
themes: [micropayments, btc-critique, intermediaries]
---

# There Is No Such Thing as Spam in a Priced System
**Date:** 2026-08-04T00:14:19.028Z | **URL:** https://singulargrit.substack.com/p/there-is-no-such-thing-as-spam-in
**Subtitle:** The moment you decide which paying transactions deserve a slot, you have built a permissioned network and given it a euphemism

## Core thesis
Calling a fee-paying, rule-valid transaction "spam" is not an engineering classification but an admission-control decision, and admission control is governance. Any system that sorts among paying users by payload, purpose, "standardness" or escalating penalties has instituted a permission regime, acquired regulators, and abandoned the permissionlessness that made it distinctive. The alternative is arithmetic: scale the capacity, price the resource, and let payer and miner settle it between them.

## Key arguments and claims
- Spam means unsolicited, bulk, uncompensated, imposed. A valid, fee-paying, miner-accepted transaction fails a formal three-part test (non-solicitation, non-compensation, non-consent of the burdened party): the miner published a fee schedule, is paid by construction, and consented per transaction; non-mining node operators consented by choosing software implementing a published ruleset.
- Premises P1–P5: block space is a scarce produced resource; a fee is a price and its acceptance a sale; "permissionless" means admission conditioned only on objective validity and payment; uniform rules are constitutive, content-sorting rules discretionary; discretionary rules locate power in whoever wrote and maintains them.
- Prices allocate a scarce resource without asking why the buyer values it; that indifference to purpose is "the entire moral content of a price system".
- Two gates: Gate 1 (consensus validity) is objective, verifiable and symmetric; Gate 2 (policy) sorts among transactions that all passed Gate 1 and all paid. Everything in Gate 2 is governance, whatever the software calls it.
- Yeung (2018): regulation is standard-setting, information-gathering and enforcement — a filter exhibits all three, so it is algorithmic regulation in code. Black (2008): even dispersed across implementers, relay and pool operators, it remains a polycentric regulatory regime.
- Searle (2005): a standardness rule is literally "X counts as Y in C", assigning status functions and deontic powers — a permission-granting institution. Hindriks & Guala (2015): "standard transaction" is an introduced theoretical term that hides who introduced it. De Filippi & Wright (2018): code-enforced rules can leave "little or no recourse".
- Coase (1937): the firm is the supersession of the price mechanism. Filtering substitutes direction for price at the margin, moving the network from the market side of Coase's boundary to the hierarchy side. "Miners can just choose" fails because default software plus relay policy centralises the discretion into whoever maintains the default.
- A cap relocates rather than solves allocation: demand growth becomes a fee spike borne by the small users the cap ostensibly protects, plus an unserved wedge allocated by queue, relationship or conformity — rationing problems are solved by rationers. Elastic, priced capacity absorbs demand growth mostly as volume.
- Qian (1994), the strongest formal case for below-clearing prices (rationing as screening under soft budget constraints), fails on its own conditions: fee payers face hard budget constraints — "there is no state bank refinancing the sender".
- The externality argument (unpaid nodes bear costs) licences metering, separate pricing of UTXO state growth, paid relay and marginal-cost recovery — never content classification: two transactions consuming identical resources should be priced identically, else "the schedule has stopped being a price and become a fine".
- Gorton & Ordoñez (2014): bearer instruments work because they are information-insensitive; a filter makes acceptance conditional on content inspection, so a filtered ledger is "an information-sensitive payment system by construction".
- Six accountability questions for any admissions regime: who sets the standard, by what procedure, on what evidence, with what appeal, accountable to whom, removable how.
- Counter-evidence is reported: Budish (2025, QJE) argues the cost of securing permissionless consensus scales linearly with value secured — "preposterous at global scale". Craig's two marked inferences: the constraint bears on value secured, not transaction count; and capping volume restricts the fee base that funds security, tightening Budish's constraint.
- The alternative carries obligations: demonstrated scaling under adversarial load; fees covering marginal cost including perpetual UTXO-set growth; relay as a paid service, not a subsidy; node operators choosing their own cost level.

## How Craig reasons (his model/logic)
Definitional and institutional classification. He fixes meanings (spam, fee, permissionless, rule versus policy), states premises explicitly, then applies external frameworks as tests — Yeung and Black on regulation, Searle's constitutive-rule template, Coase's boundary of the firm, Gorton and Ordoñez on information-insensitivity — showing the disputed practice satisfies the formal definition of a permission regime. The economics is price theory: externality arguments licence metering, not classification; caps create rationing, and rationing requires rationers. The strongest opposing models (Qian, Budish) are stated fairly and answered on their own conditions.

## Where this contradicts BTC-mainstream logic
- Rejects the spam/filtering vocabulary outright: filters are "a regulatory system implemented in code".
- Rejects standardness/policy rules as part of "the protocol": Gate 2 is governance requiring a legitimation it does not have.
- Rejects the small-block claim that caps protect ordinary users: the cap "guarantees that they experience the maximum possible congestion pricing".
- Rejects node-cost externalities as grounds for filtering: operators consented to the published ruleset; under-pricing "calls for better pricing", never content classification.
- Rejects "miners can just choose": discretion embedded in defaults and relay policy is centralised, then "re-described as emergent".
- Rejects the retreat that permissionlessness was never the point: constitutive rules constitute the system; regulative rules govern the people in it.

## Notable quotes
- "Every payment network on earth would prefer more volume to less, and any network that would not is not a payment network but a club."
- "Once you fix quantity below the quantity demanded, you have created a rationing problem, and rationing problems are solved by rationers."
- "And the moment a fee schedule discriminates by purpose rather than by resource, the schedule has stopped being a price and become a fine."
- "A power that cannot be withdrawn is not a policy. It is a constitution, adopted without a convention."

## Connections
No other essay in the set is named. The text cites Budish (2025) and argues that "the case for maximising the fee base through volume is stronger, not weaker" — the fee-base/security-budget arithmetic that "The Defence That Halves" supplies in detail; and its treatment of the capacity cap as a rationing device is the same 2010 decision that essay analyses as already made.
