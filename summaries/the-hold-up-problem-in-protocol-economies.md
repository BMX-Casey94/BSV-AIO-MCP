---
title: "The Hold-Up Problem in Protocol Economies"
date: 2026-05-01
slug: the-hold-up-problem-in-protocol-economies
url: https://singulargrit.substack.com/p/the-hold-up-problem-in-protocol-economies
themes: [governance-decentralisation, protocol-immutability, monetary-economics, security-economics]
---

# The Hold-Up Problem in Protocol Economies
**Date:** 2026-05-01 | **URL:** https://singulargrit.substack.com/p/the-hold-up-problem-in-protocol-economies
**Subtitle:** Why specific investment under mutable rules creates a commitment problem — and why "you can always fork" is not an answer

## Core thesis
When participants make protocol-specific investments and a coalition retains effective discretion over base-layer rule revision, the situation is a textbook hold-up problem. Investment is discounted ex ante whether or not the discretion is exercised, and "you can always fork" is no answer because the cost of forking is precisely the asset specificity that made the investment vulnerable.

## Key arguments and claims
- The hold-up problem comes from industrial organisation: where relationship-specific investment meets a counterparty with discretion to revise terms, the discretionary party can appropriate the quasi-rent (Klein, Crawford and Alchian, 1978) — the gap between an asset's in-relationship value and its lower salvage value.
- Williamson's taxonomy of specificity is applied: site, physical asset, human asset, dedicated asset, brand and temporal. The classical case is the supplier who builds a plant beside a single buyer and is renegotiated toward marginal cost.
- Protocol economies are populated by specific investors: application developers (transaction formats, fee structures, settlement semantics), exchanges and custodians (key management, withdrawal logic, compliance reporting), merchants, compliance infrastructure, liquidity providers, and users with non-portable balances.
- At the consensus layer, miners deploy ASICs — "among the most extreme cases of physical asset specificity in the modern economy", since an algorithm change can render a fleet worthless — and proof-of-stake validators post bonded stake, specific by design.
- Formal model: with investment xi under rules Pt, the fixed-rule payoff is ΠiF = Bi(Pt, xi) − ci(xi); under mutable rules, ΠiM = Bi(Pt, xi) − ci(xi) − Pr(rt)·𝔼[Hi(rt, xi)] + 𝔼[Oi(rt)], where H is the hold-up loss and O the option value of beneficial revision. Fixedness dominates iff Pr(rt)·𝔼[H] > 𝔼[O]; neither regime is universally superior.
- The hold-up term is multiplicative (a small probability of a large loss equals a moderate probability of a moderate one), scales with xi (larger investment, larger exposure — an underinvestment feedback), and does not require revision to occur: "The damage to the equilibrium is done by the possibility, not by the realisation", the Kydland–Prescott (1977) time-inconsistency structure.
- Forking is not a solution. A participant who refuses a rule change is moved to "a new and smaller equilibrium" — separate hash power, liquidity, listings, brand and developer attention. Hirschman (1970): exit disciplines opportunism only when near-costless. The discretionary party can extract value up to the participant's exit cost, which is then rationally accepted.
- Fork costs are asymmetric: a small holder forks cheaply; a deeply integrated exchange cannot. Rule changes therefore extract most from the most specific investors — "a perverse selection effect" discounting investment most heavily from those whose investment matters most.
- Observable consequences of the ex ante discount: migration of high-specificity investment toward credibly fixed base layers; differential pricing of technically equivalent services (higher fees, larger token allocations, risk premia on weak-commitment protocols); concentration of long-duration commitments where Pr(rt) is credibly low; and more cautious regulatory engagement, since regulators make specific investments in supervisory frameworks.
- Four families of commitment mechanism: cost imposition (supermajority thresholds, time delays, public process), accountability (legal, fiduciary and reputational consequences — requiring identification), structural separation (multi-client ecosystems, federated standards bodies), and fixedness (most aggressive, sacrificing option value). Each has costs; the right mix is a design problem.
- Six objections are answered, including "probability of revision is small" (empirical, and beliefs drive the discount regardless), "rule changes are usually improvements" (aggregate welfare does not compensate stranded investors), and "sophisticated participants accept these risks" (the discount is what sophisticated acceptance looks like).

## How Craig reasons (his model/logic)
Transaction-cost economics formalised into an explicit inequality, then pressed into equilibrium and empirical-prediction mode: cross-section, time-series, pricing and composition signatures that would falsify or confirm the framework. Williamson, Klein-Crawford-Alchian, Kydland-Prescott and Hirschman are imported wholesale; protocol economies "do not transcend" the commitment problem — they inherit it.

## Where this contradicts BTC-mainstream logic
- Directly refutes "you can always fork" / "exit is always available": fork cost equals stranded asset specificity, so exit does not discipline opportunistic rule revision.
- Rejects "the protocol is permissionless and therefore decentralised, and there is nothing further to discuss" as "a refusal to address the problem".
- Denies that claimed decentralised governance has been shown to distribute rule-change authority widely enough to prevent opportunism — "empirically testable and, in most cases, has not been tested".
- Reframes soft forks and contentious activations not as healthy upgrades but as events that raise perceived Pr(rt) and tax all future specific investment in the chain.

## Notable quotes
- "The damage to the equilibrium is done by the possibility, not by the realisation."
- "The fork option is not absent from the analysis. It is part of the analysis."
- "The participant's 'choice' to remain on the new chain is a choice in name only."

## Connections
Explicitly a sequel — it cites "the previous essay in this series" (Consensus Is Not Governance) for the existence of effective rule-change authority; its commitment-mechanism families map onto the institutional conditions in "The Geography of Discretion" and the accountability term in "Why Hash Power Is Not Security".
