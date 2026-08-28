---
title: "Time Is Not Consensus"
era: substack
date: 2026-04-14
slug: time-is-not-consensus
themes: [mining-consensus, networking, security-economics]
source_summary: summaries/time-is-not-consensus.md
url: https://singulargrit.substack.com/p/time-is-not-consensus
---

# Time Is Not Consensus — core principles

- **Double-spending is an ordering problem, and ordering by clock fails.** Any system that resolves competing spends through a fixed time window assumes a shared, reliable notion of time that does not exist on real networks: "it depends on who believes those 30 seconds have elapsed, according to which clock, under which network conditions, and under whose control."
- **NTP is an estimation protocol, not an oracle.** Each machine adjusts its local clock from packets subject to delay, jitter, asymmetry, loss, source selection and oscillator drift; two machines can both be "using NTP" and disagree materially at exactly the moment agreement matters — the ordinary condition of distributed systems, not a corner case.
- **Clock-based settlement windows have five attack surfaces.** Network delay (conflicting spends arrive in different orders), clock skew (the window becomes a family of overlapping local opinions), time-source manipulation, observation partitioning (quorum membership itself becomes the target) and challenge suppression (delaying the conflicting transaction past local expiry).
- **A model that depends on silence makes silence the attack surface.** Challenge-period finality fails whenever an adversary can control what decision-makers do not see in time; "once the model depends on silence, silence becomes attack surface."
- **A waiting rule gives uncertainty a stopwatch.** If a conflicting spend can later win, the merchant "was never paid in any final sense — he was shown a provisional message that later lost the race"; a rapid provisional state is still provisional, and "that is not settlement — that is suspense."
- **Bitcoin's timestamp server substitutes verifiable sequence for synchronised clocks.** Hash a block of items, publish widely, include the previous timestamp in each new hash: the construction requires a public, cumulative ordering mechanism, and Bitcoin's practical notion of time is the sequence of accepted proof-of-work blocks.
- **Block-header timestamps are bounded records, not consensus substitutes.** Header times are constrained by network acceptance rules and embedded in competitive proof-of-work; settlement security derives from accumulated work on the longest valid chain — "the timestamp is part of the record; it is not a substitute for consensus."
- **Committee finality hides trust rather than removing it.** Majority-of-selected-databases schemes settle by "committee time", shifting the attack to committee selection, partition, bribery and boundary disagreement — "one has not removed trust; one has merely hidden it inside infrastructure and called it protocol."
