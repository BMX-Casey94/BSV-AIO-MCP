---
title: 'Simplified Payment Verification'
date: 2019-10-09
slug: simplified-payment-verification-4a260d272a38
url: https://medium.com/@craig_10243/simplified-payment-verification-4a260d272a38
themes: [spv-light-clients, scaling-throughput, law-regulation, mining-consensus]
---

# Simplified Payment Verification
**Date:** 2019-10-09 | **URL:** https://medium.com/@craig_10243/simplified-payment-verification-4a260d272a38
**Subtitle:** In the Bitcoin white paper, I specified how it is possible to verify payments without running a full network node…

## Core thesis
An excerpt — the body continues on craigwright.net. SPV is "the peer aspect of Bitcoin" and the precondition of scaling: users hold only block headers (under 50 MB, growing linearly) while miners — defined by Section 5 of the white paper as those who mine — enforce the rules within the law. Because BTC abandoned SPV and direct payer-to-payee exchange, "BTC, are not peer-to-peer at all"; and because miners are heavily invested, geographically fixed businesses, Bitcoin's security is backed by law (the UK Fraud Act 2006), not by anonymity.

## Key arguments and claims
- Definitional: "Section 5 of the white paper defines nodes in Bitcoin; more critically, to be a node, you need to be mining transactions." Non-mining "full nodes" are not nodes.
- "You cannot scale the blockchain without SPV, and more importantly, SPV is the peer aspect of Bitcoin." True peer-to-peer means Alice sends a transaction directly to merchant Bob; Bob validates it and posts it for "clearing and settlement", with miners as "a distributed intermediary" in which "no one intermediary needs to be directly trusted".
- Churchill analogy: he "supported the reintroduction of the gold standard… as it stopped the knaves in Parliament from altering values for political concerns"; a distributed system likewise stops knaves altering the monetary supply without creating trusted third parties.
- Resource math: block headers are "under 50 MB in size" — smaller than many image files — and growth is linear, so "we have a system that scales by Moore's law exponentially yet takes a linear amount of resources".
- Longest-chain check: users query "multiple random nodes" in a "Bayesian system" to confirm they hold the longest proof-of-work chain, cheaply and with little bandwidth.
- Security is legal-economic: verification holds "as long as the honest nodes control the network"; miners "invest hundreds of millions of dollars", are "geographically located and cannot easily move", and so are "subject to the provisions of law". "The reason that the word honest is mentioned 15 times in the white paper is that it relates directly to acts such as the U.K.'s Fraud Act 2006."
- From an early white paper draft: transactions "would only be vulnerable to reversal" — Bitcoin "is not designed to be a system that acts outside of the controls of law" and "allows the capture and sequestration of transactions… associated with criminal activity".
- Attack economics: existing miners detect double-spends "within seconds"; an attacker building "a chain six blocks deep would on average be determined after an hour or so, when all would be rejected outright".
- "The myth that Bitcoin acts outside the law has been propagated by those seeking to create criminal systems, but it is a false and malicious lie and one that is easily discredited."

## How Craig reasons (his model/logic)
Authoritative exegesis of his own text — Section 5's definitions, the fifteen occurrences of "honest", early drafts — combined with scaling arithmetic (linear header growth versus exponential Moore's-law capacity) and legal-economic reasoning (miner capital plus fixed location equals liability). Definitions carry the argument: once "node" and "peer-to-peer" are defined his way, BTC fails both by construction.

## Where this contradicts BTC-mainstream logic
- Against the every-user-a-full-node orthodoxy: users need only headers; non-mining nodes are not nodes at all.
- Against BTC's claim to be peer-to-peer electronic cash: without SPV and direct payer-to-payee flows, BTC "is not peer-to-peer at all".
- Against censorship-resistance maximalism: miners are lawful, fixed, liable businesses; Bitcoin "assists in the tracing of transactions" and supports seizure of criminal proceeds.
- Against 51%-attack fatalism: attacks are noticed within seconds to an hour and are economically irrational given legal exposure.

## Notable quotes
- "SPV is the peer aspect of Bitcoin."
- "To be a node, you need to be mining transactions."
- "The reason that the word honest is mentioned 15 times in the white paper is that it relates directly to acts such as the U.K.'s Fraud Act 2006."
- "Bitcoin was never designed as a system that acts outside of the real world."
- "The myth that Bitcoin acts outside the law… is a false and malicious lie and one that is easily discredited."

## Connections
Excerpt of a craigwright.net post; anchors his SPV/scaling strand (see "Fully peer-to-peer" in this corpus) and the nChain SPV patent claims of the era. Written in the post-BCH/BSV-split positioning of BSV as the scaling-faithful chain; the Fraud Act framing feeds directly into "If Gold Turned to Lead" and "Bitcoin Fights Corruption" later the same month.
