---
title: 'Immutable evidence'
date: 2019-02-16
slug: immutable-evidence-386b60a33123
url: https://medium.com/@craig_10243/immutable-evidence-386b60a33123
themes: [audit-accounting, protocol-immutability, lightning-l2, law-regulation]
---

# Immutable evidence
**Date:** 2019-02-16 | **URL:** https://medium.com/@craig_10243/immutable-evidence-386b60a33123
**Subtitle:** Today's business use case is very simple, and in detailing it we may help others to understand a little more about bitcoin itself.

## Core thesis
Bitcoin's defining function is "an immutable evidence trail that is admissible in court", and every off-chain scheme — "Sidechains, Lightning, Plasma" — exists "to delete records" and thereby escape law. As a business use case he shows how BSV can give an organisation a single, provably unique set of accounting records satisfying FINRA and SEC WORM-storage rules, using a registered master key plus a daily hash chain, ending the multiple-ledger frauds of Enron and Madoff. Only a single global public ledger delivers this; private blockchains cannot.

## Key arguments and claims
- Off-chain equals record deletion: "Sidechains, Lightning, Plasma, and every other half-baked attempt to alter Bitcoin all boil down to one simple thing; they seek to delete records"; the "full verifying node" narrative is "a simple lie" sold to build an anonymous system for illicit trade and bucket shops.
- Nodes are miners only: "Miners alone have any impact at all in Bitcoin or any related system"; a system not creating blocks "is not a node", per section 5 of the white paper; BTC/ETH have "under 20 nodes".
- Confiscation is real: "The myth that is propagated, that nothing can be confiscated, is further from the truth than any fiction book could imagine. eCash was regularly traced and recovered, and yet it was anonymous without an audit trail."
- Compliance drivers are quoted verbatim: FINRA 10–06 (retain social-media records), 11–32 (tweets and texts are written material), 11–39 (retain/supervise business communication from personal devices); SEC Rule 17a-4(f) of the Securities Exchange Act requires media that "preserve the records exclusively in a non-rewrite-able, non-erasable format" (WORM); he links the 2016 FINRA action fining 12 firms $14.4m for failing to protect records from alteration.
- Optical media fail the test: CDR/DVDr copies can be multiplied and re-written as new "immutable" copies, so "there is no way to ensure that the media has not been copied multiple times" — the Enron/Madoff multiple-ledger problem.
- The construction (a "toy model"): master ECDSA key P(m) = S(master) × G; a secret S(lodge) lodged with the regulator or tax authority; a daily hash chain Hash[i] = Hash[Hash[i-1]] up to Hash[365]; daily derived addresses P(Day 1) = P(m) + (Hash[365]).G; the hash of each day's backup is written via OP_RETURN to the new address. "There can be one and only one value that follows."
- Consequence: regulators can independently verify that one ledger is the only ledger — "The existing frauds based on the creation of alternate ledgers can never occur again" — while the organisation's accounts remain private to outsiders.
- Private blockchains fail by design: "If an organisation can have multiple blockchains… there cannot be a definitive truth"; "With a single global public ledger, there is a single source of truth."
- BSV's existing scale is "already sufficient" to map all account records immutably; the post teases CAATs (computer-aided audit techniques) for real-time anomaly alerts "for a later post".

## How Craig reasons (his model/logic)
Compliance-driven design reasoning: he starts from statutory text (FINRA notices and SEA 17a-4(f) quoted directly), derives the technical requirement (provable uniqueness, not mere write-once storage), then sketches a cryptographic construction at "toy model" level with explicit formulas. Off-chain scaling is reinterpreted motivationally — as a legally driven attempt to destroy evidence — rather than as engineering, and the whole argument is anchored to his nChain patent portfolio.

## Where this contradicts BTC-mainstream logic
- **"Bitcoin cannot scale, so Lightning is necessary"** — the scaling premise is reframed as a records-deletion agenda; "Lightning cannot work, even as the parasite it is; if tried, it kills the host."
- **Private/permissioned enterprise blockchains (the 2016–19 Hyperledger-era orthodoxy)** — multiple controllable chains destroy immutability; only one public ledger gives truth.
- **Every-user-a-full-node** — dismissed as a lie; only block-producing miners matter.
- **Non-confiscation / "Bitcoin is anonymous digital cash"** — explicitly denied with the eCash tracing precedent.
- **Code-is-law** — subordinated to evidence admissibility and record-keeping statute.

## Notable quotes
- "Bitcoin is simply an immutable evidence trail."
- "they seek to delete records"
- "Miners alone have any impact at all in Bitcoin or any related system."
- "There can be one and only one value that follows."
- "With a single global public ledger, there is a single source of truth."
- "merely a public blockchain allows for the truth"

## Connections
Part of the Feb 2019 BSV business-use-case series (companion to "The great mining swindle" and "Forex accounting in script"); cites nChain patents WO2017145048A1 and US20180367298A1 for the master-key/threshold key-mapping methods; links FINRA enforcement and SEA Rule 17a-4(f) interpretation documents; promises a follow-up on CAATs; the Metanet is invoked as the end-state where "Bitcoin will be the system".
