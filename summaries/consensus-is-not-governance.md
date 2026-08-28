---
title: "Consensus Is Not Governance"
date: 2026-04-30
slug: consensus-is-not-governance
url: https://singulargrit.substack.com/p/consensus-is-not-governance
themes: [governance-decentralisation, protocol-immutability, security-economics, monetary-economics]
---

# Consensus Is Not Governance
**Date:** 2026-04-30 | **URL:** https://singulargrit.substack.com/p/consensus-is-not-governance
**Subtitle:** Why "permissionless" describes admission, not authority — and why economists keep mistaking the two

## Core thesis
A consensus mechanism is a procedure for recognising which proposed states count as valid; a governance system is the authority structure that decides whether the validity rules themselves may change. Conflating the two — usually via the word "permissionless" — produces models that cannot answer the key question: under what conditions will participants commit specific investment to a rule system a coalition can later revise?

## Key arguments and claims
- Formal setup: let Pt be the rule set at time t and Ct the consensus process under it. Consensus answers only "given Pt, which proposed update is the next accepted state?" The prior question — who decides Pt+1 — is governance, Gt. A system can have decentralised Ct with concentrated Gt, or the reverse.
- Three separable layers: Admission (A — who may participate), Governance (G — who has effective authority to revise the rule set), and Mutability (μ — whether base-layer settlement semantics can be revised after deployment, and at what coordination cost). The claim is A ≠ G ≠ μ.
- "Permissionless" properly describes only admission. A system can be "open at the door and closed at the rule book", and the rule book determines economic behaviour.
- Scalar decentralisation metrics — node counts, the Nakamoto coefficient, the Herfindahl index of mining concentration — measure Ct and say "almost nothing about Gt".
- Participants invest under the joint expectation of (Pt, Ct, Gt), not under Ct alone. A firm integrating a payment rail makes a Williamsonian asset-specific investment; what protects it against ex post opportunism by the party with discretion to change the terms is a question consensus-only models cannot pose.
- Illustration: a firm builds infrastructure on transaction format F; a maintainer-sponsor-validator coalition deprecates F for an incompatible F'. The firm was never refused admission, yet its sunk infrastructure is stranded — "functionally equivalent to having been refused admission". Consensus analysis cannot distinguish welfare-improving changes from coalition-enriching ones.
- This is a commitment problem, not a coordination problem, in the sense of Kydland and Prescott (1977): participants anticipate discretionary revision and discount investment ex ante, even if the revision never occurs. "You can always fork" fails because fork costs are the asset specificity of the original investment (Hirschman, 1970: exit disciplines only when near-costless).
- Governance in practice takes observable forms: reference implementation control (repository permissions, release schedules), funding concentration (foundations, sponsors, grant programmes), adoption authority (validators and exchanges choosing to run a release), classification authority ("soft fork", "bug fix" or "emergency"), activation design (miner signalling, validator quorums, UASFs, hard-coded block heights), token voting (plutocratic), and narrative authority.
- Decentralisation becomes a vector, not a scalar; the relevant property is "the minimum across the layers, not the maximum" — the most concentrated control layer binds.
- Security must expand beyond attack cost: the standard αV > C condition is incomplete; the institutional form is αV > C + I + K + R, where I is capital at risk, K coordination cost, and R legal and reputational accountability — K and R are governance terms.
- TCP/IP's stability is an institutional achievement, not a technical property: the RFC process, working groups, rough consensus and deployed code separate base-layer revision from operational routing.
- Five objections are answered, including "governance is the social layer" (North 1990: rules-of-the-game are proper objects of analysis) and "no formal coalition exists" (coalitions are "revealed by their behaviour, not by their charters"). Insurance markets already separate consensus failures from governance-driven losses.

## How Craig reasons (his model/logic)
Institutional and transaction-cost economics rendered semi-formally: typed layers (A, G, μ), state variables (Pt, Ct, Gt) and inequalities, drawing on Coase (1937), Williamson (1985), Kydland-Prescott (1977), Hirschman (1970) and North (1990). The method is taxonomic separation, then equilibrium reasoning about investment under discretion.

## Where this contradicts BTC-mainstream logic
- Rejects the claim that a protocol is "decentralised because it is permissionless" — admission openness says nothing about rule-book authority.
- Rejects "trustless because it has consensus": consensus removes trust in transaction ordering while leaving governance trust over validity rules intact.
- Denies that hash distribution or Nakamoto coefficients evidence decentralised governance; one dominant repository with a small maintainer set is concentrated governance regardless of miner dispersion.
- Rejects "forking provides exit, so commitment is not a problem" — exit cost equals the stranded specificity of the sunk investment.

## Notable quotes
- "a system can be open at the door and closed at the rule book, and the second is the part that determines economic behaviour"
- "Consensus is a procedure for ordering valid transactions under fixed rules. Governance is an authority structure for changing those rules."
- "Coalitions in this sense are revealed by their behaviour, not by their charters."
- "The consensus mechanism is a marvel of computer science. It is not a substitute for institutional economics."

## Connections
The analytical foundation of the series: "The Hold-Up Problem in Protocol Economies" builds on its claim that effective rule-change authority exists in every operational protocol, and the αV > C + I + K + R condition is developed in "Why Hash Power Is Not Security"; the TCP/IP comparator is shared with "The Geography of Discretion".
