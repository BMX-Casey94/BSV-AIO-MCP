---
title: 'Locked transactions for planning'
date: 2019-03-29
slug: locked-transactions-for-planning-afeb01bac318
url: https://medium.com/@craig_10243/locked-transactions-for-planning-afeb01bac318
themes: [script-technical, protocol-immutability, property-rights, privacy]
---

# Locked transactions for planning
**Date:** 2019-03-29 | **URL:** https://medium.com/@craig_10243/locked-transactions-for-planning-afeb01bac318
**Subtitle:** Let’s imagine that Bob wants to ensure that his wealth can go to his children even if something happens. Bob has 50 bitcoin that he has…

## Core thesis
A short worked example of nLockTime as an estate-planning instrument: Bob, a businessman facing possible bankruptcy, time-locks 50 bitcoin to his daughter Alice's custodian wallet for her 18th birthday, then throws away his keys — creating what is legally a trust that neither creditors, nor his ex-wife, nor he himself can touch. The arrangement is only possible because the BSV protocol is "set in stone"; on BTC, developer changes every ~18 months would force him to retain and update the keys, leaving them vulnerable to coercion.

## Key arguments and claims
- The setup: Bob holds 50 bitcoin for Alice's college fund; she turns 18 in ten years. He is "in a risky business", personally guaranteeing company accounts, so bankruptcy is a live possibility — the money must be unreachable by creditors.
- The mechanism: a custodian wallet using a threshold key system secures Alice's keys until she turns 18; Bob signs an nLockTime time-locked transaction paying to her address and keeps it off the blockchain.
- Privacy rationale: an on-chain transaction "would let Alice's mother and Bob's creditors know that he has set the money aside and that he still controls it"; the off-chain locked transaction "takes the money out of existence and allows it to come back only when Alice is 18".
- Legal character: "Legally speaking, he has created a trust that takes control of the money away from himself and gives it to Alice in such a way that she will obtain control when she is 18 — but not before."
- Protocol stability as the enabling condition: Bob chooses "bitcoin (BSV) and avoided using the altcoins like BTC (SegWit Core)" because the transaction must remain valid for ten years; BTC's "series of developer changes every 18 months or so" would require him to keep updating the keys — and "if Bob has control of the keys, then others can try and take control of the keys from him".
- Key destruction as finality: "So Bob sets up his system and trust for Alice, and throws away his keys" — nobody, including Bob, can redirect or seize the funds before Alice turns 18.
- The power frame: "As soon as you allow developers to change the protocol, you give them power over the entire system… They crave power."

## How Craig reasons (his model/logic)
Compressed scenario reasoning: a single concrete family situation (divorce, creditors, a minor child) is used to derive the technical requirements — off-chain lock, threshold custody, key destruction — each mapped to a legal concept (trust formation, removal of control). The argument then pivots from the micro case to the systemic claim: protocol mutability reintroduces a controllable key-holder, and hence a point of coercion. Rhetorically it is a parable with a moral appended in a final "power of Bitcoin" section.

## Where this contradicts BTC-mainstream logic
- "Not your keys, not your crypto": inverted — Bob's security comes precisely from *destroying* his keys and using custodial threshold wallets; permanent key control is framed as a liability that invites coercion.
- Continuous-upgrade culture: the BTC model of regular soft/hard forks (every ~18 months) is presented as destroying the possibility of long-dated commitments, the opposite of the era's "rapid iteration is healthy" view.
- On-chain maximalism: keeping the transaction off the blockchain until maturity is a feature, not a failure — against the "if it's not on-chain it doesn't exist" instinct.
- Self-custody orthodoxy: custodial wallets are endorsed as legitimate infrastructure for minors and estate planning.

## Notable quotes
- "he has created a trust that takes control of the money away from himself and gives it to Alice in such a way that she will obtain control when she is 18 — but not before"
- "if Bob has control of the keys, then others can try and take control of the keys from him"
- "So Bob sets up his system and trust for Alice, and throws away his keys."
- "As soon as you allow developers to change the protocol, you give them power over the entire system."
- "The protocol is set in stone for a reason, and there is a reason that developers want to take control of the protocol and change it. They crave power."

## Connections
Direct companion to "Why the protocol is set" (published the previous day), which expands the same nLockTime-trust mechanics into the multi-generational Alice-and-Bob scenario. Extends his recurring 2019 theme that protocol immutability is the precondition for Bitcoin as a contracting and wealth-preservation system, and anticipates BSV's opcode-restoration ("set in stone") roadmap.
