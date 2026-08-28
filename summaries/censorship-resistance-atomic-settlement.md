---
title: "Censorship Resistance, Atomic Settlement, and the Limits of Coalition Power"
date: 2026-05-12
slug: censorship-resistance-atomic-settlement
url: https://singulargrit.substack.com/p/censorship-resistance-atomic-settlement
themes: [law-regulation, privacy, security-economics, scaling-throughput]
---

# Censorship Resistance, Atomic Settlement, and the Limits of Coalition Power
**Date:** 2026-05-12 | **URL:** https://singulargrit.substack.com/p/censorship-resistance-atomic-settlement
**Subtitle:** A reply to the two-tier critique...

## Core thesis
The two-tier critique's three pushbacks — that Craig's definition of censorship resistance proves too much, that regulatory exposure can invert propagation incentives, and that his coalition and propagation arguments are in tension — all share one load-bearing assumption: that transactions are large, identifiable transfers between persistent counterparties. The protocol's native mode is atomic settlement with fresh single-use keypairs (section 10 of the white paper), and at that granularity regulatory filtering and miner filtering coalitions are structurally impotent.

## Key arguments and claims
- Granted versus structural censorship resistance: the postal monopoly rests on the Private Express Statutes (18 U.S.C. §§1693–1699) and banking on state chartering, OFAC, the Bank Secrecy Act and FinCEN — closed, state-defined operator classes that cannot resist state instructions. Bitcoin's operator class is open-entry; the state "cannot instruct this operator class to apply filters because there is no comprehensive list of who is in it".
- Rand's vocabulary supplies the controlling distinction: political power (initiation of force, defining who may operate) versus economic power (voluntary exchange). Postal and banking systems satisfy the same surface definition of censorship resistance "for entirely different metaphysical reasons".
- The critique's boundary case — OFAC-compliant pools filtering sanctioned addresses — requires persistent identifiers, listed counterparties and per-transaction screening: the legacy payment model. The protocol natively produces atomic transfers between fresh keypairs with no protocol-level concept of identity or a sanctioned address.
- Granularity dissolves the case: one million dollars becomes one million single-dollar transactions, each from a freshly generated keypair, each below any conceivable reporting threshold, each between counterparties with no prior database existence — "a shape these technologies were not designed to see".
- Structuring law (31 U.S.C. §5324) has three operative elements — a reporting obligation, a regulated intermediary, and intent to evade — and none is naturally present in atomic peer-to-peer operation; FinCEN's 2013 guidance reaches identified intermediaries (exchanges, custodial wallets, mixers), not miners or the protocol, because "the regulation requires a regulable entity".
- Chain analysis (Chainalysis, TRM Labs, Elliptic) is post-hoc forensics, not a pre-ingestion filter: its heuristics are probabilistic; its per-transaction cost is roughly constant regardless of value, so "the economics of compliance break" at small amounts; and fresh single-input, single-output transactions defeat the common-input-ownership heuristic, behavioural clustering and temporal correlation outright.
- The coalition tension is reconciled structurally: Folk-Theorem coordination works for protocol rules (large cooperative surplus, gradual observable defection, durable multi-round punishment) but fails at transaction level (small surplus per transaction, instantaneous observable defection, immediate reward collection, permissionless exit).
- Coalitions cannot coordinate on a classifier: unlike the OFAC SDN list, fresh addresses provide no shared object to filter; member-specific classifiers have different error rates, making defection ambiguous and breaking the Folk Theorem's requirement that defection be unambiguously identifiable. Strict classifiers produce false positives, forgo fee revenue, and drive hash rate to exit to non-classifying pools.
- Direct-submission infrastructure (ARC on BSV, analogues elsewhere) solves access without the gossip layer: "The channel does not screen transactions; it conveys them." Pools are variance-reduction aggregators whose filtering policies are unstable for the same coalition reasons.
- At design volume — millions, and at architectural limit billions, of transactions per second — screening cost scales linearly with transaction count while regulatory benefit does not: "a structural mismatch between two architectures of value transfer". Intermediation technology cannot police settlement technology.

## How Craig reasons (his model/logic)
Legal-doctrinal analysis (statutory elements tests for structuring and money-transmission), white-paper design exegesis, repeated-game game theory (the Folk Theorem's identifiability and punishment conditions), compliance-cost economics, and a Randian conceptual frame separating economic from political power.

## Where this contradicts BTC-mainstream logic
- Undercuts the mainstream regulatory-fear narrative — OFAC-compliant mining as an existential filter — by showing it presupposes legacy transaction shapes the protocol does not natively produce.
- Implicitly indicts BTC's constrained throughput: the protective atomic mode requires the scale (millions to billions of transactions per second) that only implementations without artificial block-size limits can reach.
- Diverges from both the two-tier critic and surveillance-fatalist positions: censorship resistance is an architectural property of granularity and open entry, not a policy posture.

## Notable quotes
- "The market is not a cage. The market is also not a cartel. The market is the natural form of value transfer when the technology of settlement has rendered the technology of intermediation unnecessary."
- "A user who sends a stream of small transactions because the protocol naturally produces small transactions is not breaking a single transaction to evade reporting; he is using the protocol as it was designed to be used."
- "The coalition would need to coordinate not on a list of identified objects but on a classifier."
- "The legacy apparatus is intermediation technology. The protocol at scale is settlement technology."

## Connections
The concluding instalment of the reply begun in "The Two Tiers Are a Market, Not a Cage"; it presupposes the propagation and coalition analyses from "Small Worlds, Large Errors" and the wider essay sequence on miner topology.
