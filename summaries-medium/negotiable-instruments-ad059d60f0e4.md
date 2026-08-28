---
title: 'Negotiable Instruments'
date: 2018-07-02
slug: negotiable-instruments-ad059d60f0e4
url: https://medium.com/@craig_10243/negotiable-instruments-ad059d60f0e4
themes: [law-regulation, property-rights, lightning-l2, wallets-keys]
---

# Negotiable Instruments
**Date:** 2018-07-02 | **URL:** https://medium.com/@craig_10243/negotiable-instruments-ad059d60f0e4
**Subtitle:** Negotiable Instruments

## Core thesis
On-chain Bitcoin transfers are negotiable instruments in the common-law sense: title is perfected on delivery, so a bona fide taker for value keeps the coins even if they were stolen. Lightning balances are not perfected until the channel closes — they remain recoverable debts, like cheques or card payments. And "Code is Law" is a fallacy: courts can compel payment, seize assets, or reassign property regardless of who holds the keys.

## Key arguments and claims
- Doctrinal definition from Simmons v. London Joint Stock Bank (House of Lords, 1891/92): a negotiable instrument is one whose property is acquired by anyone who takes it "bona fide" and for value, "perfected notwithstanding any defect of title in the person from whom the receiver took the instrument" — and the true owner must be able to transfer the engagement by simple delivery.
- Miller v. Race (Lord Mansfield): money "cannot be recovered after it has passed in currency" — not from the thief, but from the bona fide taker for value from the thief.
- The "for value" element is load-bearing: a gift is not for value, and negotiable status matters because it determines whether the state can force recovery.
- "Bitcoin is a negotiable instrument. It is perfected when passed from one party on-chain to another" — but not always, and not in every form of transfer.
- Lightning as the counter-example: a Lightning transfer "is more like a cheque and is only perfected later"; delivery occurs only when the channel closes, and "until this point, the payment remains at risk".
- The Alice/Bob scenario: Alice's stolen bitcoin, sold on to Bob who spends the proceeds on a holiday, cannot be recovered from Bob if he was unaware of the theft; had Bob been paid over Lightning, the incomplete delivery means "the state has a legal right to take your assets" — an innocent merchant holding an LN balance "can be required to return the amounts".
- Code-is-Law rebuttal: "cryptographic keys do not stop a court assigning an asset". Refusing to pay after a court order yields four outcomes — contempt (indefinite incarceration without trial), seizure of other assets, court-ordered reassignment of the property with the system updated, or life as a fugitive; intentionally destroying keys "could be deemed a crime". A token tied to share equity "can be re-assigned no matter the state on a blockchain".
- The merchant bottom line: what you receive as cash for value and bona fide remains yours; a Visa payment "is yours eventually (and maybe as it can be taken back)" — Lightning sits on the Visa side of the line. "Owning your keys alone does not make you safe, it does not mean you are outside the real world."
- Closing frame: "Bitcoin is an economic system. It works as it is not some Code is Law fairy's tail." [sic]

## How Craig reasons (his model/logic)
Case-law formalism applied as a classification test: take the doctrinal definition from House of Lords authority, enumerate its elements (bona fide, for value, delivery, perfection), then apply each to on-chain versus Lightning transfers until the two fall on opposite sides of the rule. The method is legalistic-analogical (on-chain : cash :: Lightning : cheque/Visa) and consequence-driven — the point of the taxonomy is always who keeps the money when the state arrives.

## Where this contradicts BTC-mainstream logic
- Key-possession absolutism ("not your keys, not your coins"): Craig holds keys are legally irrelevant against a court order — contempt, seizure and reassignment all route around cryptography.
- The Code-is-Law orthodoxy of crypto-anarchism is named and attacked directly as a "fairy's tail".
- "Lightning is just Bitcoin, trustlessly": legally, Lightning changes the property character of a payment from perfected cash to recoverable debt — the opposite of a scaling improvement for merchants.
- The privacy-through-fungibility orthodoxy is implicitly inverted: what protects an innocent recipient of stolen coins is negotiability — a legal property of clean title transfer — not anonymity.

## Notable quotes
- "cannot be recovered after it has passed in currency" (quoting Miller v. Race)
- "Bitcoin is a negotiable instrument. It is perfected when passed from one party on-chain to another."
- "cryptographic keys do not stop a court assigning an asset"
- "Owning your keys alone does not make you safe, it does not mean you are outside the real world."
- "It works as it is not some Code is Law fairy's tail."

## Connections
Legal companion to "Lightning is malleable… Steel is not" (June 2018), extending its HTLC-as-promissory-note argument into property law; cites Simmons v. London Joint Stock Bank [1891] and Miller v. Race (via Smith's Leading Cases). The anti-Code-is-Law, courts-can-reassign-coins position becomes central to Craig's later writing and to his litigation-era arguments around court-ordered asset recovery.
