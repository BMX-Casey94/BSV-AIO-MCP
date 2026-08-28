---
title: "Why Hash Power Is Not Security"
date: 2026-05-02
slug: why-hash-power-is-not-security
url: https://singulargrit.substack.com/p/why-hash-power-is-not-security
themes: [security-economics, mining-consensus, governance-decentralisation, law-regulation]
---

# Why Hash Power Is Not Security
**Date:** 2026-05-02 | **URL:** https://singulargrit.substack.com/p/why-hash-power-is-not-security
**Subtitle:** The standard attack-cost calculation is incomplete. Real protocol security depends on consensus cost, capital at risk, coordination cost, and accountability — and most analyses count only the first.

## Core thesis
Protocol security is not the cost of mounting a 51% attack; it is the cost of violating the protocol commitment. The standard condition αV < C captures only consensus cost, while the institutional condition αV < C + I + K + R adds capital at risk, coordination cost and accountability — terms that routinely determine whether attacks occur and that most analyses omit.

## Key arguments and claims
- The standard analysis holds a system secure when αV < C, where α is the consensus share required to attack, V the extractable value, and C the cost of acquiring capacity. It correctly models an external adversary acquiring capacity for direct extraction through double-spending or censorship — but only that.
- Budish (2018, NBER Working Paper 24717) and others refined C and V — marginal rather than spot acquisition cost, hash-power supply curves, net-of-detection gains — but "improve the calculation without changing its structure". The framework itself, treating the rule set as fixed and threats as external, needs expansion.
- The four-term condition: αV < C + I + K + R, where I is capital at risk (in-system holdings, infrastructure, reputation and ongoing income destroyed by a successful attack), K the coordination cost of organising the required group, and R the legal, regulatory, professional and reputational accountability imposed on identifiable participants.
- On C: it is the marginal cost of attack capacity, not the equilibrium operating cost; it depends on detection during acquisition; it is bidirectional (defenders can dilute attackers); and in proof-of-stake it is denominated in the token being attacked — an attacker who shorts first can lower realised cost.
- On I: an external attacker faces I = 0, but insiders — the actors who already hold capacity — face large I that "may dominate C". A mining firm's hardware, power agreements and infrastructure collapse with the protocol's asset value; systems where capacity sits with low-I actors are the vulnerable ones, whatever C says.
- On K: coordination cost scales with the number of parties required. A single actor holding 51% faces K = 0; coordinating thirty actors is expensive across identification, covert communication, negotiation, defection-prevention and proceeds distribution. Validators sharing the same client, hosting provider and industry meetings have lower K than the raw count implies.
- On R: approximately zero for anonymous external attackers beyond enforcement reach, but "large and often dispositive" for identifiable institutions — fraud statutes, market-manipulation rules, criminal sanctions, directors' fiduciary liability, banking closure under suspicious-activity reporting, licence revocation. A firm gaining $10 million from an attack but facing $100 million in fines and lawsuits "is rationally deterred even if C is low and I is moderate". R depends on identification, so identifiable authority is "itself a security feature".
- The terms interact as partial substitutes: high I compensates for lower C (why long-established systems can run parameters that would fail a young system); high K or high R each deter coordinated attacks.
- Measurement must expand per term — for C, marginal acquisition cost and detection probability; for I, capacity distribution by holder class; for K, the number and interconnection of required coordinators; for R, the share of capacity held by identifiable institutions. Current practice "systematically overstates the security of systems with high C and low values on the other terms".
- Governance attacks mirror the same four-term structure computed against the rule-changing coalition, unifying consensus and governance security in a four-quadrant typology.

## How Craig reasons (his model/logic)
Institutional and legal-economic analysis folded into a single expanded inequality. The standard model is shown to be a special case valid only when I, K and R are zero; measurement, design and evaluation implications are then derived from the general condition, treating legal liability and reputation as real, quantifiable economic costs.

## Where this contradicts BTC-mainstream logic
- Denies that hash rate, validator count or the Nakamoto coefficient are sufficient security statistics — they capture aspects of C and K but "do not address I or R directly".
- Inverts the anonymity-maximalist premise: identifiable institutional operators raise R, so identification is a security feature; anonymous systems forgo an entire deterrent term.
- Rejects the argument that the absence of large-scale 51% attacks validates the standard condition — it is better explained by high I, K and R among capacity holders.
- Implies a moderate-hash-rate system with identifiable, deeply invested operators can outrank a higher-hash-rate system with anonymous, low-stake operators — a direct challenge to hash-rate-maximalist security rankings.

## Notable quotes
- "Protocol security is not the cost of mounting a 51% attack. It is the cost of violating the protocol commitment."
- "The problem is not that C is wrong. The problem is that it is alone."
- "Tractability is not a substitute for correctness"
- "R is real where identification is real."

## Connections
The four-term condition was introduced in "Consensus Is Not Governance" and is fully developed here; the governance-attack vector connects to "The Hold-Up Problem in Protocol Economies", whose rule-changing coalition faces this same cost structure.
