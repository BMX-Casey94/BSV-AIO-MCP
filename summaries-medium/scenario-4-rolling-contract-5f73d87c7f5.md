---
title: 'Scenario 4: Rolling Contract'
date: 2018-10-06
slug: scenario-4-rolling-contract-5f73d87c7f5
url: https://medium.com/@craig_10243/scenario-4-rolling-contract-5f73d87c7f5
themes: [tokenisation, script-technical, law-regulation]
---

# Scenario 4: Rolling Contract
**Date:** 2018-10-06 | **URL:** https://medium.com/@craig_10243/scenario-4-rolling-contract-5f73d87c7f5
**Subtitle:** In this situation, Bob decides to lease a laptop from Eve on a rolling annual basis, where he needs to provide two months' notice to…

## Core thesis
Fourth in the series, adding automatic-renewal logic to the contract taxonomy: Bob leases a laptop from Eve on a rolling annual basis, where the lease automatically rolls over unless two months' notice is given before the renewal date. The body is a short setup paragraph whose substantive model is a state-machine diagram (image not captured in the plain-text body).

## Key arguments and claims
- Rolling (auto-renewing) contracts can be modelled on-chain: the example is a laptop lease renewing annually.
- Termination requires active notice — "two months' notice to cancel the lease at the renewal date" — otherwise "it will automatically roll-on".
- The renewal/notice-window logic is expressed as "a simple state machine model" (diagram only), i.e. default transitions occur unless a party acts.

## How Craig reasons (his model/logic)
Continues the incremental state-machine method: where Scenario 3 introduced a fixed term, this instalment introduces conditional temporal transitions — notice windows and automatic roll-over — showing how default rules in contract law map onto state transitions that execute unless interrupted. The modelling choice mirrors how the law treats silence (inaction) as consent to renewal.

## Where this contradicts BTC-mainstream logic
- No direct engagement. As with the rest of the series, the piece is constructive rather than polemical; its quiet premise is that Bitcoin can express ordinary commercial contract logic — renewal, notice, lapse — that 2018 mainstream discourse assigned to Ethereum-style smart-contract platforms.

## Notable quotes
- "Bob decides to lease a laptop from Eve on a rolling annual basis"
- "he needs to provide two months' notice to cancel the lease at the renewal date otherwise it will automatically roll-on."
- "This has a simple state machine model as shown in the diagram below"

## Connections
Part 4 of the five-part "Scenario" series (all 2018-10-06), building directly on Scenario 3's fixed-term lease by replacing a hard termination date with a rolling renewal and notice mechanism; followed by Scenario 5's conditional, multi-party contract.
