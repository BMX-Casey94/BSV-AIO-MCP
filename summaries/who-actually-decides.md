---
title: "Who Actually Decides"
date: 2026-05-04
slug: who-actually-decides
url: https://singulargrit.substack.com/p/who-actually-decides
themes: [governance-decentralisation, intermediaries, mining-consensus]
---

# Who Actually Decides
**Date:** 2026-05-04 | **URL:** https://singulargrit.substack.com/p/who-actually-decides
**Subtitle:** Rule changes in protocol economies are produced by coalitions, not by communities. Identifying the coalition is the first step in any honest governance analysis.

## Core thesis
Protocol rule changes are produced by identifiable coalitions of necessary parties — maintainers, sponsors, foundations, adoption-critical infrastructure, exchanges, wallets and narrative authorities — not by "the community". The rule-changing coalition is the set of parties whose coordinated action is required to move a rule from proposed to effective; everyone outside it is observing the change, not producing it. Honest governance analysis begins by naming the coalition.

## Key arguments and claims
- The necessity test: "if these parties refused to act, would the change occur?" If yes, they are not in the coalition; if no, they are. The coalition is the set of necessary parties, and it is typically small relative to the participant population.
- Community vocabulary ("the community", "the network", "the ecosystem") obscures the asymmetry between those with authority and those merely exposed to decisions; the obscuring is the rhetorical work the language does.
- Olson (1965): groups with heterogeneous interests produce outcomes through the action of subgroups, not the whole; the framework applies directly to protocol governance.
- Coalition components enumerated: reference-implementation maintainers (merge accounts, release tagging, version designation — formal and identifiable); sponsors and funders (influence via hiring, budgets and programme design, without explicit direction); foundations and standards bodies (running BIP/EIP-type processes and curating authoritative standards); adoption-critical infrastructure (a handful of exchanges, staking providers and pools whose refusal prevents activation); exchange and listing authorities (ticker assignment and fork recognition — economically decisive even when not technically necessary); wallet and infrastructure software (explorers, indexers); narrative and classification authorities (framing a change as "bug fix" versus "hard fork" is itself a governance act).
- The coalition's payoff model: ΠC(r) = BC(r) + W(r) − K(r) − R(r) − I(r) − F(r), where BC is direct coalition benefit, W participant welfare (entering only via pass-through to coalition returns), K coordination cost, R accountability cost, I capital at risk, and F fragmentation cost. The coalition acts when ΠC(r) > 0. Aggregate welfare is therefore not a reliable predictor of which changes occur; the distribution of benefits across coalition members is.
- Capital-at-risk I(r) disciplines only when coalition members hold in-system positions; developers paid in fiat by external sponsors do not internalise confidence damage.
- Activation mechanisms allocate authority differently: miner/validator signalling (concentrated capacity lowers K); user-activated soft forks nominally expand the coalition but in practice relocate authority to adoption-critical infrastructure; hard-coded activation heights shift authority sharply to maintainers; token-weighted governance concentrates effective power in the largest holders and their custodians; emergency procedures reduce K by design and become a feature when routinely used.
- Coalition persistence lowers the marginal cost of later changes and accumulates authority — the precondition for capture, understood as an institution acquiring its own interests rather than necessarily corruption. Countermeasures: raise R (legal accountability), rotation or term limits, transparency requirements, structural separation of authority.
- Honest governance reporting would identify the coalition behind each historical change, the current coalition for a change of typical scope, its incentive structure, the proposals blocked and by whom, and coalition stability over time.

## How Craig reasons
Collective-action theory and institutional economics, with a formal payoff representation. Governance is defined as the coalition's decision rule; diagnostics are derived for distinguishing welfare-improving from opportunistic change; and official processes are treated as descriptions of how the coalition coordinated, not as assessments of welfare consequences.

## Where this contradicts BTC-mainstream logic
- Denies that "the community decided" describes any actual decision mechanism — BIP-style processes are maintainer and foundation authority, with everyone else observing.
- Reframes the UASF: nominally user-driven activation "relocates authority from consensus operators to infrastructure providers" such as large exchanges and custodians.
- Rejects process legitimacy: that a change passed the official process, or met no formal objection, says nothing about whether it was welfare-improving.

## Notable quotes
- "A protocol does not change its own rules. People change them."
- "Anyone outside this coalition is observing the change, not producing it."
- "The official process is a description of how the coalition coordinated its decision; it is not an assessment of the decision's welfare consequences."
- "Complexity is a property of the answer, not a reason to refuse to ask the question."

## Connections
Supplies the named actors for the governance layer of "Effective Decentralisation Is the Minimum, Not the Average"; its UASF analysis anticipates "The Myth of the Sovereign Node". Shares the Olson/Coase/North/Williamson/Hirschman reference spine with the rest of this batch.
