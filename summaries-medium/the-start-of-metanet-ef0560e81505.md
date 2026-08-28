---
title: 'The start of Metanet'
date: 2019-02-14
slug: the-start-of-metanet-ef0560e81505
url: https://medium.com/@craig_10243/the-start-of-metanet-ef0560e81505
themes: [networking, security-economics, micropayments, monetary-economics]
---

# The start of Metanet
**Date:** 2019-02-14 | **URL:** https://medium.com/@craig_10243/the-start-of-metanet-ef0560e81505
**Subtitle:** Way back in the depths of the late 90s, I was a young brash 20-something with this concept that I would change the Internet for the better…

## Core thesis
Craig traces Metanet to his late-1990s idea of an "economically incentivised Internet": security through economics rather than walls, where users and attackers alike must post escrows and pay micropayments, and every action is immutably logged on Bitcoin. He recounts abandoning per-site digital cash as a fallacy worse than barter — money must be universal — and argues that IPv6 integrated with Bitcoin payments makes scanning and DDoS economically infeasible, shifting "the balance of power away from the attacker to the defender".

## Key arguments and claims
- Origin: "Metanet and Bitcoin started with the concept of an economically incentivised Internet" — a system "secure through economic incentives", for which he was "ridiculed… for most of my 30 years in information security".
- Against isolationist security: unlike "Marcus Ranum who promoted the concept that a pair of pliers is the ultimate firewall", Craig saw disconnection as the attack; in his model "attackers have to pay more and more as they attack a network".
- Mechanism: users "put up an escrow amount that they could get back at the end of the session"; sites charge "small micropayments for continued use" or free access with a deposit — replacing "the ad-based tragedy of the commons in the Internet today" and its sale of user data.
- The multi-coin fallacy: in the 90s he assumed sites would issue their own eCash-like or Hashcash-style tokens; "If every site has their own form of tradable currency, the reality is that no site has currency… it is a system that is less effective than barter." Swapping "Alice coin for Craig coin" destroys money's informational value; gold worked because it "gave a single measure to the financial economy on a global basis. The value of money comes from the value of information." Today's multi-coin crypto world is the same error he "abandoned in the early 2000s".
- IPv6 integration: port-scanning an IPv6 range would take "decades"; his IP covers "the allocation of addressing over mobile IP sessions that is based directly on the allocation of a payment through Bitcoin" — session addresses tied to deposited bitcoin, forfeited on rule-breach, so "even a simple distributed denial-of-service attack would become infeasible".
- Metanet as immutable Internet: it "allows the right to be forgotten through key dis-allocation, whilst maintaining a copy of all material ever posted"; for attackers "it is the worst invention ever" — they pay to attack and leave an immutable record.
- GitHub analogy: "every single change is digitally signed with an evidential quality ledger"; errors are reversed "leaving a trace of the error and private details of the changes including the parties responsible"; role-based identity links individuals to actions while public pages stay pseudonymously accessible.
- Security economics: attacking requires purchasing access rights or "an algorithmically defined escrow payment" per service; audit and monitoring can be "provided by an indexing service on the blockchain", fully separated from the target; attacks become "immediately alerted at remote locations… instantly reversible".
- Hacker tradecraft inverted: log-cleaning — "the destruction and deletion of the evidence of the attack" — is the critical hacking skill (he cites teaching SANS SEC560/SEC660 and FOR572 under Jonathan Ham); write-once-read-many blockchain storage makes it impossible, so "Bitcoin is not merely an information commodity. It is the ultimate information-security tool."
- Endgame: Bitcoin "will eventually become the global backbone for the entire Internet"; "Every stream will be able to be captured using payment channels in Bitcoin transactions"; static data ends up "stored and associated with Bitcoin transactions that are controlled cryptographically".
- Technical mechanism: IPv6 jumbo frames "of up to 4 GB" can ride in Bitcoin transactions using OP_PUSHDATA4 {Data} OP_DROP; because "transactions are malleable, the data can be authorised, and a hash may be used when sending to the blockchain rather than the data" — Alice streams data to Bob, who hashes it and submits the signed, malleated (redacted) transaction for miner verification.
- The post closes with an extended primer on IPv6 (128-bit addressing, ~340 undecillion addresses, auto-configuration via MAC addresses, tunnelling mechanisms, the fixed 40-byte header and Next Header field) drawn from his government-training work (AGIMO IPv6 sessions).

## How Craig reasons (his model/logic)
Intellectual autobiography as vindication: he narrates his 30-year infosec career (SANS instructor, government IPv6 trainer) to frame Metanet as the long-derided idea whose time has come. The core analytic move is economic reframing — security failures are incentive failures, so price the attack surface (escrows, micropayments, forfeits) and make evidence indelible. A secondary monetary argument (universal money vs barter-like token fragmentation) does double duty as a critique of the entire altcoin/ICO landscape.

## Where this contradicts BTC-mainstream logic
- Contradicts the "one non-monetary use at a time / keep data off-chain" BTC orthodoxy: he wants the entire Internet's streams and static content committed to Bitcoin transactions, including 4 GB jumbo-frame payloads via OP_PUSHDATA4.
- Contradicts the multi-asset/token thesis of the wider crypto market (and the ICO era): thousands of currencies are "less effective than barter"; one universal money is the whole point.
- Contradicts the immutability-means-no-privacy objection: he claims a "right to be forgotten through key dis-allocation" is compatible with a total immutable record — erasure of keys, not data.
- Contradicts the "Bitcoin is apolitical money, not infrastructure" framing: Bitcoin is recast as the Internet's future backbone and security layer, with payment channels metering all access.
- Note for era context: the transaction-malleability-as-feature claim (signed redacted transactions) directly opposes the BTC narrative that malleability was a bug justifying SegWit.

## Notable quotes
- "Metanet and Bitcoin started with the concept of an economically incentivised Internet."
- "I see a world where attackers have to pay more and more as they attack a network."
- "If every site has their own form of tradable currency, the reality is that no site has currency."
- "The value of money comes from the value of information."
- "Metanet creates an immutable Internet. It allows the right to be forgotten through key dis-allocation, whilst maintaining a copy of all material ever posted to the Internet."
- "Bitcoin is not merely an information commodity. It is the ultimate information-security tool, and it drastically shifts the balance of power away from the attacker to the defender."

## Connections
The canonical Metanet origin essay, prefigured in "Generic Thin Operating System for Blockchain IOT Devices" (3 Feb 2019, "The Metanet is the network of everything") and rooted in the Blacknet backstory of "Careful what you wish for…" (8 Feb 2019). References his SANS teaching (SEC560, SEC660, FOR572 under Jonathan Ham) and AGIMO IPv6 government training; the escrow/payment-gated access model connects to his nChain patent portfolio ("the patents have been filed").
