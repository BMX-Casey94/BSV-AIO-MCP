---
title: 'Blockchain-Based Decentralised Autonomous Corporations: An Overview'
date: 2018-10-17
slug: blockchain-based-decentralised-autonomous-corporations-an-overview-5dc0d469fcb5
url: https://medium.com/@craig_10243/blockchain-based-decentralised-autonomous-corporations-an-overview-5dc0d469fcb5
themes: [tokenisation, ai-blockchain, btc-critique, governance-decentralisation]
---

# Blockchain-Based Decentralised Autonomous Corporations: An Overview
**Date:** 2018-10-17 | **URL:** https://medium.com/@craig_10243/blockchain-based-decentralised-autonomous-corporations-an-overview-5dc0d469fcb5
**Subtitle:** This document is intended to provide an overview on Decentralised Autonomous Corporations (DAC) based on the blockchain technology. We…

## Core thesis
An internal-style technical overview (retitled in the body as "BCH-based Decentralised Autonomous Corporations: an overview of a small part of Bitcoin's future") defining how decentralised autonomous corporations can be built on Bitcoin: tokenised shares, threshold-secure multiparty signing by autonomous agents, blockchain voting and identity layers, and a worked application to AI-driven portfolio management. The polemical frame: "BTC is not Bitcoin following the addition of SegWit", and none of this will exist "on anything other than Bitcoin (BCH). Not ETH, not BTC, not some sham coin."

## Key arguments and claims
- Definitions: a DAC is a "visualised corporation without the need for any central point of control, with a certain agenda, business plan, and protocol" — it "can be a corporation, a trust, or a company"; crucially, "all entities are owned by people, and this means that the capital and decisions are associated with a human party".
- DACs "cannot be shut down, or even modified to make them send all of their money to an attacker's account" because there is "no failure point that can be attacked".
- DACs must generate addresses and sign transactions decentrally. Naive multisig fails at scale: a 501-of-1000 multisig would need ~501 signatures × ~70 bytes = "a 35,000 bytes transaction" against a 10,000-byte standard-transaction maximum — hence secure multiparty computation (SMC).
- SMC via Shamir's secret sharing: a k-out-of-n scheme where any k shares reconstruct the secret but "knowledge of any k − 1 or fewer shares of s leaves the secret completely undetermined"; shares are (i, f(i)) points on a random degree-(k−1) polynomial with f(0) = s, and zero is excluded as an index since it would reveal the secret.
- Key elliptic-curve property: "if a (k,n) threshold scheme with polynomial interpolation is set with the public key, the private key can be recovered from k of the n pieces exactly in the same way as the public key" — enabling distributed ECDSA signing.
- Agent taxonomy: Autonomous Agents are "purely software" written in "Practical Agent ProgrAmming Language (PAPAL)"; they cannot manufacture or code, so physical-world "contractors" are hired. Classes include interface agents (keyword-frequency investment suggestions), voting-AAs, and task-AAs that shepherd contractor proposals to a vote.
- Tokenised governance: the DAC issues N tokens as shares (possibly via a Dominant Assurance Contract with refund if the goal is missed); coloured-coin transactions carry (x, f(x)) share pairs, and on transfer the old pair is invalidated — Craig flags that holding k pieces of the DAC keypair "is equivalent to a 51% attack".
- Supporting platforms: a blockchain voting platform where votes are cast as transactions so shareholders "can count the votes themselves" with an audit trail; "BlockID", a blockchain identity service (driver licence, passport, credit card, keys) built on attributes like date of birth and social security number, since "identity theft is rampant on the Web".
- Decision-making can be delegated to voting-AAs using option decision trees, neural networks, or SVMs; the DAM (Digital Asset Management) application deploys breaking-news-AAs, stock-tracker-AAs, model-AAs (ARIMA, neural nets, stochastic models), risk-AAs, and trader-AAs for portfolio management, with k-means clustering over similarity metrics (Euclidean distance, Dynamic Time Warping) and a fallback to human votes when data falls outside centroid thresholds.
- A simple one-layer sigmoid neural network is specified for {buy, hold, sell} outputs from MA signals, momentum, and stochastic-oscillator inputs, trained with "trend-oriented training in parallel to a forecast-oriented training".

## How Craig reasons (his model/logic)
White-paper survey mode: definitional sections, formal properties (correctness/privacy of secret sharing stated as numbered conditions), byte-level calculations to eliminate design alternatives (the 35 KB multisig reductio), then a sprawl of proposed subsystems (PAPAL, MyVote, BlockID, MyProfile, DAM) with bracketed open questions left in the text — the document reads as an internal nChain research overview, mixing finished cryptography with brainstorm-stage product sketches and ML name-dropping. The rhetorical crescendos ("No DOA, no PoS… legally valid entities") are pure BCH-campaign polemic from the pre-split weeks of late 2018.

## Where this contradicts BTC-mainstream logic
- Explicitly denies BTC's claim to be Bitcoin: "Bitcoin is covered by the ticker BCH. BTC is not Bitcoin following the addition of SegWit" — the SegWit change is treated as disqualifying, a month before the BCH/BSV split.
- Against Ethereum's DAO narrative: autonomous corporations belong on Bitcoin, as "legally valid entities" with human owners — against both "The DAO" (he writes "No DOA") and proof-of-stake governance, and against the "unstoppable code" reading since ownership and decisions remain with "a human party".
- Against multisig/maximalist key-management orthodoxy: standard transactions cap at 10,000 bytes, so large-scale corporate control requires threshold SMC, not script multisig.
- Against trustless-anonymity ideology: the design recentres identity (BlockID with social-security-number attributes) and legal personhood as prerequisites, not bugs.

## Notable quotes
- "Note, Bitcoin is covered by the ticker BCH. BTC is not Bitcoin following the addition of SegWit."
- "The best part, nothing of this or anything like it will be on anything other than Bitcoin (BCH). Not ETH, not BTC, not some sham coin. No DOA, no PoS… legally valid entities."
- "Note: all entities are owned by people, and this means that the capital and decisions are associated with a human party."
- "DACs are distributed. There is no failure point that can be attacked, and DACs cannot be shut down."
- "The maximum size of a standard transaction is 10,000 bytes. Each signature is about 70 bytes, so 501 of 1,000 signatures would make a 35,000 bytes transaction."
- "If someone holds k pieces, it is equivalent to a 51% attack."

## Connections
Published the same day as "A distribution protocol for dealer-less secret distribution", whose threshold-ECDSA scheme is the signing machinery this overview assumes (its reference [3] is a secure-multiparty-computation deck); the DFA state-machine codification from the previous day supplies the contract-execution layer. Part of Craig's October 2018 BCH advocacy burst immediately before the November 2018 BCH/BSV split, and an early statement of the tokenisation + on-chain identity (BlockID) programme he pursued through nChain patents.
