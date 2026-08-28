---
title: 'Security'
date: 2018-10-08
slug: security-5926122babf9
url: https://medium.com/@craig_10243/security-5926122babf9
themes: [security-economics, protocol-immutability, btc-critique]
---

# Security
**Date:** 2018-10-08 | **URL:** https://medium.com/@craig_10243/security-5926122babf9
**Subtitle:** Honestly I find it difficult to understand why people do not get the idea of why errors and low quality software occur.

## Core thesis
All software development is an economic function: quality and security vary with cost, so bugs are not mysteries but purchased trade-offs. Applied to Bitcoin, every change Core adds — SegWit named explicitly — expands the attack surface, making "each change, each experiment to alter Bitcoin… a disaster waiting to happen". The remedy is to lock the protocol and let business pay miners for whatever usage they want, because "Bitcoin is not a system for social equality, it is cash".

## Key arguments and claims
- Security and quality should be assumed, not specified as add-ons: input validation, boundary conditions, encrypting data as necessary, least privilege, and "White lists are better than Black lists" are baseline, yet the industry treats them as extras.
- Quality is priced like everything else: "Why do you pay more for a Lexus over a Hyundai?" — door locks, deadbolts, LoJack and Lucite windows are all optional because "quality varies with cost. If you want more, you pay more."
- Verified software is affordable but nobody wants to pay: you could demand old US Redbook "A"-class verification, "Except that that copy of Windows 10 will now cost $10,000+."
- He prices assurance from personal experience: contracted by gaming companies for code review and security testing, verifying static-analysis findings and reviewing manually, he managed "around 190 to 220 lines of code an hour on a good day for a language such as C. Less for Assembly" — so "an analysis of Windows would take over 50,000 man hours at this level", excluding fixes.
- The Bitcoin application: "How many million lines of code are in Bitcoin, how many are added and changed?" — every planned change, update and addition multiplies the room for error.
- Core's experiments are the threat: "the things that Core added to make BTC no longer Bitcoin (like SegWit)" come from developers "'experiment' trying to make Bitcoin into something it is not nor can be".
- The fix: "to lock the protocol and allow business to start to use Bitcoin for any purpose they are willing to pay miners for."
- Closing ethic: "Bitcoin is not a system for social equality, it is cash. You get what you pay for."

## How Craig reasons (his model/logic)
Pure economic reductionism: he strips security of its technical mystique by analogy to consumer goods (cars, locks, alarms), establishing that assurance is a quantity you purchase, then inserts his own hourly-rate numbers to make the cost concrete. The move is from microeconomics to protocol politics — if change is cost and cost is risk, then a money system should minimise change; stability, not functionality, is the security feature. The rhetorical mode is exasperated schoolmaster ("high-school level", "think about it for a moment") rather than demonstrative proof.

## Where this contradicts BTC-mainstream logic
- Against the perpetual-development model of Bitcoin Core (and 2018-era BCH upgrade cycles): each soft fork and feature is reclassified from "improvement" to uncompensated security risk.
- SegWit is named as the exemplar of change "to make BTC no longer Bitcoin" — the mainstream's flagship scaling upgrade reframed as an error-injection exercise.
- Against the egalitarian framing of Bitcoin (banking the unbanked, social equality): "Bitcoin is not a system for social equality, it is cash."
- Against the open-source ethos that more eyes and more releases mean more security: without paid, slow, line-by-line assurance, more code simply means more bugs — "You get what you pay for" applied to free software.

## Notable quotes
- "All software development is an economic function. Every addition, a change comes with consequences, and thus, costs."
- "The simple answer is that quality varies with cost. If you want more, you pay more."
- "I would do around 190 to 220 lines of code an hour on a good day for a language such as C."
- "Each change, each experiment to alter Bitcoin is a disaster waiting to happen."
- "Bitcoin is not a system for social equality, it is cash."
- "You get what you pay for."

## Connections
A compact statement of the "lock the protocol" doctrine that anchors his BSV-era writing, companion to the previous day's "Trust in Smart Contracts" (which ends on the same line: "This is why locking the protocol matters") and to "Limited change to bring stability". The SegWit-as-corruption claim continues the btc-critique thread of "BCH is Bitcoin", and the security-as-economics framing recurs in "A diatribe on Bitcoin, trust and the economy of security".
