---
title: "Censorship Resistance, Atomic Settlement, and the Limits of Coalition Power"
date: 2026-05-12
era: substack
themes: [law-regulation, privacy, security-economics, scaling-throughput]
source: summaries/censorship-resistance-atomic-settlement.md
---

# Censorship Resistance, Atomic Settlement, and the Limits of Coalition Power — core principles

- **The protocol's native mode is atomic settlement with fresh single-use keypairs.** Section 10 of the white paper: no protocol-level concept of identity or a sanctioned address. Filtering that presupposes persistent identifiers and listed counterparties is the legacy payment model, not Bitcoin's.
- **Open-entry operator class cannot be instructed as a closed list.** Postal and banking monopolies rest on state-defined operator classes. Bitcoin's miner set has no comprehensive roster the state can instruct to apply filters.
- **Granularity dissolves screening.** A large transfer becomes many single-unit transactions, each from a freshly generated keypair, each below reporting thresholds, each between counterparties with no prior database existence — a shape intermediation technology was not designed to see.
- **Structuring law needs a reporting obligation, a regulated intermediary and intent to evade.** None is naturally present in atomic peer-to-peer operation. Guidance reaches identified intermediaries (exchanges, custodial wallets, mixers), not miners or the protocol, because the regulation requires a regulable entity.
- **Chain analysis is post-hoc forensics, not a pre-ingestion filter.** Heuristics are probabilistic; per-transaction cost is roughly constant regardless of value, so compliance economics break at small amounts. Fresh single-input, single-output spends defeat common-input-ownership, behavioural clustering and temporal correlation.
- **Folk-Theorem coordination works for protocol rules and fails at transaction level.** Protocol rules: large cooperative surplus, gradual observable defection, durable punishment. Per-transaction filtering: small surplus, instantaneous defection, immediate reward, permissionless exit.
- **Coalitions cannot coordinate on a classifier of fresh addresses.** Unlike a published sanctions list, there is no shared object to filter. Member-specific classifiers have different error rates, making defection ambiguous. Strict classifiers produce false positives, forgo fee revenue, and drive hash rate to non-classifying pools.
- **Direct-submission infrastructure conveys; it does not screen.** Channels such as ARC solve access without the gossip layer. Pools are variance-reduction aggregators whose filtering policies are unstable for the same coalition reasons.
- **At design volume, screening cost scales linearly with transaction count; regulatory benefit does not.** Millions — and at architectural limit billions — of transactions per second create a structural mismatch. Intermediation technology cannot police settlement technology.
- **Using the protocol as designed is not evasion.** A user who sends a stream of small transactions because the protocol naturally produces small transactions is not breaking a single transaction to evade reporting.
