---
title: 'The infinite money fallacy'
date: 2018-10-04
slug: the-infinite-money-fallacy-3c7a541a2977
url: https://medium.com/@craig_10243/the-infinite-money-fallacy-3c7a541a2977
themes: [security-economics, wallets-keys, btc-critique]
---

# The infinite money fallacy
**Date:** 2018-10-04 | **URL:** https://medium.com/@craig_10243/the-infinite-money-fallacy-3c7a541a2977
**Subtitle:** There is a mistaken notion that an infinite number of monkeys, if given time and an infinite number of sturdy (monkey resistant)…

## Core thesis
The infinite-monkey theorem is "rot": an infinite *number* of trials within a bounded mathematical range does not yield every conceivable outcome — just as no real number in [1, 2] ever equals 3. Craig transposes this to Bitcoin security: although infinitely many hash collisions and private-key matches exist in principle, they are unreachable in practice, especially when keys are used once and discarded as Bitcoin was designed to do. Brute-force anxiety about Bitcoin's cryptography is therefore a category error about infinity.

## Key arguments and claims
- The infinite-monkey claim "demonstrates a true lack of awareness of numerical infinity. It excludes the range of an issue": there are infinitely many non-integer reals between 1.00… and 2.00…, yet none "will or can ever equal 3.00" — "deductively provable based on the laws of algebraic mathematics".
- The monkey fails not because of rare-event ("black swan") probabilities but because of "the mathematical range of the monkey's actions": a QWERTY keyboard's key distribution and space frequency mean a bashing monkey "falls into a pattern that never approaches discernible text, let alone a classic novel". Training the monkey to select individual keys "changes the nature of the process and increases the mathematical range".
- General design lesson: "Even given an infinite value of some quantity, it does not mean that you have an infinite range of possible outcomes."
- Application to Bitcoin: "There are always an infinite number of collisions to any hash-puzzle solution, this is unavoidable in any probabilistic security system, but it is also not an issue" — many collisions cannot satisfy the structure of a valid Bitcoin transaction (with a parenthetical jab: "we will ignore the faults in P2SH for today"), and the rest are infeasible to find.
- Key reuse is the real vulnerability, and it violates the design: "Many keys are re-used, but this was not how Bitcoin was designed. In Core, they seem to revel in the fact that you collect a number of private keys, but the truth is, Bitcoin was designed to move from private key to private key with little or no reuse."
- With one-time keys, brute force is self-defeating: "As you use a key, you move to a new address leaving the monkey to have to start calculating down its infinite path all over. As we have no method to create infinite storage, there is no way to map the keys used in Bitcoin."
- Address-collision arithmetic: a standard Bitcoin address reduces a 256-bit key to a 160-bit hash, so "there are around 2^96 valid private keys per Bitcoin address" — yet the chance of finding one is "like finding a single grain of sand from all the sand on all the planets that we have found. So, it is not a scenario you need to worry about."

## How Craig reasons (his model/logic)
Mathematical pedantry deployed as debunking: he distinguishes cardinality from range (an infinite set need not contain every value), then imports the distinction into cryptographic security, where "infinite collisions exist" is true but practically vacuous. The method mixes algebraic argument, concrete bit-length arithmetic (256→160 bits, 2^96 keys per address), and a design-intent claim about Satoshi's one-time-key model, with a side-swipe at BTC Core's wallet behaviour.

## Where this contradicts BTC-mainstream logic
- Contradicts BTC Core's normalised key/address-collection wallet model: Craig asserts Bitcoin "was designed to move from private key to private key with little or no reuse", and that Core "revel in" accumulating private keys — framing address reuse culture as a deviation from the original design.
- Contradicts the pop-security orthodoxy (common in quantum-computing and brute-force FUD) that enough computation eventually cracks Bitcoin keys: without infinite storage and with key rotation, infinite trials never converge.
- Flags P2SH as faulty ("we will ignore the faults in P2SH for today") — a standing technical critique of a Core-introduced script mechanism, developed elsewhere in his corpus.

## Notable quotes
- "There are an infinite number of values in this mathematical range, there is no value that will or can ever equal 3.00."
- "Even given an infinite value of some quantity, it does not mean that you have an infinite range of possible outcomes."
- "In Core, they seem to revel in the fact that you collect a number of private keys, but the truth is, Bitcoin was designed to move from private key to private key with little or no reuse."
- "There are around 2^96 valid private keys per Bitcoin address."
- "The chance of finding it is like finding a single grain of sand from all the sand on all the planets that we have found."

## Connections
Companion to the following day's "The Labour Fallacy of Bitcoin Value" (2018-10-05) in an early-October run of short "fallacy" posts; the one-time-key design claim ties into his SPV/privacy essays and his critique of Core's P2SH and address-reuse norms, recurring themes in the craigwright.net era.
