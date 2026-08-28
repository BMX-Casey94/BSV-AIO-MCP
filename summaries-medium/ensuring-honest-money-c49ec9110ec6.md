---
title: 'Ensuring honest money'
date: 2019-01-23
slug: ensuring-honest-money-c49ec9110ec6
url: https://medium.com/@craig_10243/ensuring-honest-money-c49ec9110ec6
themes: [law-regulation, wallets-keys, privacy, property-rights]
---

# Ensuring honest money
**Date:** 2019-01-23 | **URL:** https://medium.com/@craig_10243/ensuring-honest-money-c49ec9110ec6
**Subtitle:** In law, there are provisions concerning the wrongful retention of monies. In the UK, such matters are covered under the Theft Act S. 24A…

## Core thesis
Bitcoin wallets can and should be designed for legal compliance with wrongful-retention law (UK Theft Act 1968 s.24A, "Dishonestly retaining a wrongful credit"): by quarantining unexpected coins and automatically returning them to their source, a merchant stays within the law, defeats dust-spam tracking economically, and keeps fungibility intact for genuine commerce. Privacy and honest money are presented as the same design goal, not rivals.

## Key arguments and claims
- The legal hook: Theft Act s.24A makes dishonestly retaining a wrongful credit an offence; "the legislation does not consider more other than that the monies came from a 'wrongful' source" — so recipients need a process, not ignorance.
- "Valid commerce (without knowledge) creates fungibility": a merchant accepting payment in consideration, without knowledge of a wrongful origin, "is safe no matter where the coins have originated."
- Wallet design: unexpected coins (dust spam, unexplained payments) go into a "warm-storage" quarantined container that is excluded from the spendable balance; expected payments — where the customer populated a merchant-supplied template with the input transactions — are instantly spendable because the merchant already knows they are valid.
- The "bounce" mechanism: for an unknown TX(A1), the merchant "simply returns the coin to the address where the mining fee is taken from". Unexplained wealth is taxable — "If Bob cannot explain wealth, then it remains that he will be taxed on it" — while genuine tips/donations are accounted as isolated amounts.
- Dust-spam counter-economics: a weekly sweep returns quarantined amounts to their origin minus the miner fee; for a 1-satoshi tracking transaction "the entire amount would be returned to miners." This kills the incentive: "Why would anyone seek to waste even small amounts of Bitcoin, if they know it will just be sent to be mined?" — and the spam "cannot be used as a web bug or tracking cookie".
- Address cycling: "the concept is to allow an address to be used once"; the ECDSA key space is large enough "for all people on the earth to cycle millions of times a day for centuries and still never expect to have a collision."
- The twin conclusion: "we allow Bitcoin to be the private cash system it was designed to be, and at the same time, we allow it to be the honest money it was designed to be."

## How Craig reasons (his model/logic)
Law-first mechanism design: he starts from a specific statute, derives the compliance requirement (be able to refuse/return funds), then engineers wallet behaviour to satisfy it, and finally closes the loop with an incentive argument (making tracking spam a pure donation to miners). The recurring distinction is privacy (single-use keys, no linkage) versus anonymity-for-wrongdoing (retaining wrongful credit), which he treats as separable and both achievable.

## Where this contradicts BTC-mainstream logic
- Contradicts the "code is law / all receipts are permissionless and final" stance: Craig insists recipients must be able to decline and return funds, and that failing to do so is legally dangerous.
- Contradicts the anti-taint orthodoxy (that coin taint analysis is an attack on fungibility to be resisted): he embraces returning tainted or unexplained coins as normal hygiene, and locates fungibility in bona fide commerce rather than in protocol-level indistinguishability.
- Contradicts the "Bitcoin exists outside state law" narrative: taxability of unexplained receipts and statutory compliance are treated as design constraints.
- Contradicts address-reuse norms (published donation addresses, reusable payment addresses): reuse is what enables dust-spam tracking in the first place.

## Notable quotes
- "Dishonestly retaining a wrongful credit."
- "In other words, valid commerce (without knowledge) creates fungibility."
- "In other words, Bob simply 'bounces' the transaction."
- "If Bob cannot explain wealth, then it remains that he will be taxed on it."
- "Why would anyone seek to waste even small amounts of Bitcoin, if they know it will just be sent to be mined?"
- "We allow Bitcoin to be the private cash system it was designed to be, and at the same time, we allow it to be the honest money it was designed to be."

## Connections
Companion piece to "Taking money over the web using Bitcoin" (same week, same single-use-key model) and part of his longer arc on tainted coins, legal recovery, and compliant wallet design that later surfaces in his court-ordered coin-return arguments (e.g. the Tulip Trading litigation). Cites the Theft Act 1968 s.24A text directly.
