---
title: 'Taking money over the web using Bitcoin — the way it was designed'
date: 2019-01-20
slug: taking-money-over-the-web-using-bitcoin-the-way-it-was-designed-446385c1a04b
url: https://medium.com/@craig_10243/taking-money-over-the-web-using-bitcoin-the-way-it-was-designed-446385c1a04b
themes: [wallets-keys, privacy, tokenisation, micropayments]
---

# Taking money over the web using Bitcoin — the way it was designed
**Date:** 2019-01-20 | **URL:** https://medium.com/@craig_10243/taking-money-over-the-web-using-bitcoin-the-way-it-was-designed-446385c1a04b
**Subtitle:** Back in 2009, Bitcoin used a feature that allowed for the IP-to-IP exchange of information. The 2009 wallet was not more than a proof of…

## Core thesis
Bitcoin's original 2009 IP-to-IP payment feature — "one of the first things that the Core developers removed" — was the true peer-to-peer layer of Bitcoin, and Craig shows how to restore its intent: a merchant payment system built on CA-registered ECDSA web certificates and his patented common-secret derivation, giving private, never-reused payment addresses, immutable on-chain audit trails, tokenised fiat settlement, and EDI-style commerce for fractions of a cent.

## Key arguments and claims
- The 2009 wallet "was not more than a proof of concept, and many of the best aspects of Bitcoin have been disabled as those developing the software failed to understand it." IP-to-IP exchange "— not mining — is the peer-to-peer aspect of Bitcoin".
- "Nodes and wallets are separate. Nodes are miners, and wallets are what is used by the user to allow for a P2P transaction." He quotes the original client's own text describing the two send methods (online IP-to-IP with comments vs. offline address send).
- Mechanism: merchant Bob has a CA-registered ECDSA web certificate with master key P(Bob); customer Alice has a master key P(Alice) (potentially on a smart card) plus unrelated coin keys P(A-1-i). Using patent EP3268914B1 ("Determining a common secret…"), both compute a shared secret S, optionally hardened with an HMAC over the web-session ID or invoice number.
- Alice sends a single-satoshi dust transaction to P(Bob) carrying an AES-encrypted message Encrypt(S)[M]; Bob derives the actual payment address as P(Bob-Paid) = P(Bob) + HMAC(M~S)×G. "ONLY Bob and Alice will know the new secret HMAC(M~S)" — no outside party can link Alice's input coins to Bob's receipt address.
- The P(Bob) dust address doubles as a distributed "revocation list": Bob only ever spends from it when the certificate expires, so an attacker sweeping the dust acts as "an automated alert" — Bob can even seed it with ~$2,000 as a honeypot that alerts all customers if stolen.
- Accounting payoff: the chain gives Bob "a complete audit trail of all the payment addresses he has received", linkable to invoices and purchase orders, "one that cannot be deleted, altered, or manipulated"; VAT/sales tax can be split to the government at the moment of payment, so "the tax authority can be paid immediately without delay" and costly audits vanish.
- Tokenised fiat: via Tokenized or nChain's patented protocols (WO2017145004A1), Alice can pay Bob in a GBP bank-issued token "whilst still using Bitcoin as the 'plumbing' for the exchange".
- EDI replacement: legacy EDI charges by kilo-characters with 128–512-character minimum record lengths (12 documents of 12 characters billed as up to 5,120), at "$2 to 3 dollars for some EDI solutions and even $0.20 for a simple Visa transaction"; Bitcoin carries an immutable private invoice (typical EDI message ~150 bytes) "for fractions of a cent per invoice". The encrypted message replaces EDI's interchange layer: "Such would be a middle man, and in Bitcoin, we have removed the need for him."
- Key hygiene: "no Bitcoin address need ever be used more than once, and the payments and invoices are linked privately — which can even be pseudonymous".

## How Craig reasons (his model/logic)
A protocol-design walkthrough in the classic Alice-and-Bob cryptographic style, anchored in his own nChain patents (EP3268914B1, WO2017145004A1) and illustrated with formulae and script fragments. He pairs the construction with a total-cost-of-commerce comparison against legacy rails (EDI pricing bands, Visa fees) and frames the whole piece as restoration: the design was in Bitcoin from the start and was removed out of developer incomprehension.

## Where this contradicts BTC-mainstream logic
- Contradicts the Core consensus that IP-to-IP payments were rightly removed (as insecure/obsolete): Craig calls their removal a product of misunderstanding and reinstates the model with certificates.
- Contradicts the era's "Bitcoin can't do on-chain merchant commerce — use Lightning" narrative: here the entire payment, invoicing, and audit flow happens on-chain with dust transactions and OP_RETURN data.
- Contradicts the privacy-by-mixing / anonymity-set orthodoxy: privacy comes from single-use keys and shared-secret derivation, not from obscuring the ledger — the ledger remains a complete (but private) audit trail.
- Contradicts the "blockchain must not carry business data" minimalism: encrypted EDI documents in transactions are presented as a feature that kills the EDI middleman.

## Notable quotes
- "The 2009 wallet was not more than a proof of concept, and many of the best aspects of Bitcoin have been disabled as those developing the software failed to understand it."
- "Such — not mining — is the peer-to-peer aspect of Bitcoin, and it is one of the first things that the Core developers removed."
- "Nodes are miners, and wallets are what is used by the user to allow for a P2P transaction."
- "In other words, it never reuses keys."
- "There is no place for accounting frauds."
- "…it is time to start rethinking how you do business."

## Connections
Direct sequel to his "Smart card based mobile wallets" post (the identity-key model it builds on) and promises a follow-up on private fiat/token exchange; cites nChain patents EP3268914B1 and WO2017145004A1, the Tokenized protocol, and an "adam_selene" Medium post on nodes. An early statement of the Metanet concept ("Metanet linking" section) — on-chain immutable data stores keyed to hierarchical certificates.
