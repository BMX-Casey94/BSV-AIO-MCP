---
title: "Cryptographic Control as Fiduciary Power"
date: 2026-01-22
slug: cryptographic-control-as-fiduciary
url: https://singulargrit.substack.com/p/cryptographic-control-as-fiduciary
themes: [law-regulation, intermediaries, wallets-keys]
---

# Cryptographic Control as Fiduciary Power
**Date:** 2026-01-22 | **URL:** https://singulargrit.substack.com/p/cryptographic-control-as-fiduciary
**Subtitle:** Why key-holders, MPC committees, and exchange custody teams sit inside ordinary private law

## Core thesis
Custodial gatekeeping — whether by single-key custodians, multi-signature escrow agents, MPC committees, smart-contract admin-key holders or exchange custody teams — is legally meaningful power over another's proprietary position, and it sits inside ordinary English private law. Technical capacity is not title, and technical irreversibility is not legal immunity: equity regulates the persons who hold gatekeeping power through in personam orders, accounting, injunctions, constructive trusts and structural relief.

## Key arguments and claims
- Modern custody rarely leaves the economic owner with unilateral dispositive capacity: a gatekeeping layer (custodian-held signing, multi-signature, threshold signing/MPC, administrative smart-contract controls) can release, delay, condition or refuse a disposition, and that is legally meaningful whether or not the ledger treats the signature as sufficient.
- Two persistent analytical errors: treating technical capacity as a proxy for title (English law has never equated "ability to transfer" with beneficial ownership — agents, trustees, nominees and mortgagees hold transfer mechanisms without owning beneficially), and treating on-chain irreversibility as immunity from legal constraint.
- The method is a power map: who can do what to whose proprietary position, on what conditions; who holds a veto; who can rotate keys, alter thresholds, change signers, pause a contract or upgrade code; who decides a withdrawal is "safe" or "compliant"; who profits from delay and who benefits from discretion.
- Single-key custody is the cleanest fiduciary problem: the custodian holds an exclusive veto over disposition while the customer holds only an internal account entitlement, dependent on custodian-controlled withdrawal queues, identity checks and recovery procedures. Dependence, not rhetoric, is why fiduciary questions arise; equity's response is prophylactic — restricting conflicts, collateral use of power and unauthorised profit.
- Multi-signature and MPC shift the surface, not the substance: a 2-of-3 scheme still allocates decisive powers (which combinations can transfer without the customer, who holds a veto, who can rotate keys, who determines whether conditions are satisfied), and collusion can force outcomes.
- Threshold signatures can look on-chain like a single key while the real governance is committee-based and discretionary; the legally relevant facts are internal — share holders, approval triggers, compliance vetoes, reconstitution of the threshold set, emergency bypass procedures. A technology that hides discretion increases the need for legal clarity about discretion.
- Smart contracts add a meta-layer: admin controls (upgrade keys, pause powers, parameter changes, emergency withdrawals, oracle dependencies) sit above the visible contract logic; a system whose rules a small group can alter after users have locked assets is not "rule-bound" as users are invited to assume — it is governed. A pause power for genuine emergency protection differs legally from one used to manage liquidity, protect insiders or extract concessions.
- Exchange custody is the hardest case because the power is continuous: omnibus wallets, internal book-entry transfers, hot/cold partitioning, discretionary withdrawal pipelines, risk scoring, manual review and compliance holds. Recovery authority is often functionally equivalent to dispositive authority; an exchange deciding access, verification, destination acceptability and account safety holds a practical veto over the customer's proprietary position.
- Trust classification turns on objective intention and undertaking, not metaphysics about whether a private key is "property": segregation or earmarking, limits on the platform's own use, and purpose-bound disposition evidence an intention to hold for another; broad rights to use assets as working capital (lending, rehypothecation, internal liquidity deployment) coupled with a mere equivalent-balance promise trend towards debt.

*(Note: the source text file ends mid-essay, within the "When custody becomes trust" section; any later sections are not present in the file and are not summarised.)*

## How Craig reasons (his model/logic)
Functional power analysis within orthodox equity doctrine: convert each technical architecture into a power map of vetoes, discretions and dependencies, then apply settled categories — trust, fiduciary loyalty, supervision of discretion — to the persons holding power rather than to the ledger. The court's question is never whether it can "control the chain" but whether the gatekeeper owes duties in the exercise of the gate.

## Where this contradicts BTC-mainstream logic
- Rejects "code is law" immunity: technical irreversibility does not place the controller beyond constraint, because equity works on persons and institutions, not by reversing ledger entries.
- Rejects "not your keys, not your coins" as title analysis: key-holding is transfer power, and English law has never equated ability to transfer with beneficial ownership.
- Rejects the marketing of multi-signature and MPC arrangements as "decentralising or neutralising custodial risk": often they merely relocate decisive vetoes and make the power map harder to see.
- Rejects "code-enforced" smart-contract rhetoric: administrative controls create a governed meta-layer above the visible logic.

## Notable quotes
- "Control is power, not ownership"
- "A technology that hides discretion increases the need for legal clarity about discretion, not the opposite."
- "That veto is the nucleus of fiduciary analysis."
- The question is not whether courts can "control the chain". The question is whether the person who holds the gatekeeping power owes duties in its exercise.

## Connections
A condensed companion to "Cryptographic Control Is Fiduciary Power, Not Title" (published three days earlier), covering the same architectures up to the trust/debt boundary; it complements the governance-side analysis of "Accountability Follows Control".
