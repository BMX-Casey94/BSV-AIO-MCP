---
title: 'Schnorr'
date: 2019-03-03
slug: schnorr-21be14ac05f5
url: https://medium.com/@craig_10243/schnorr-21be14ac05f5
themes: [privacy, law-regulation, lightning-l2, btc-critique]
---

# Schnorr
**Date:** 2019-03-03 | **URL:** https://medium.com/@craig_10243/schnorr-21be14ac05f5
**Subtitle:** Most of cryptocurrency has been defined since Silk Road as one attempt after another to alter bitcoin from a pseudonymous system to create…

## Core thesis
Schnorr signatures are being dishonestly marketed to the BTC market as a privacy and scaling improvement; in Craig's analysis they are neither. The real motive, he argues, is developer pursuit of "plausible deniability" — another attempt to turn pseudonymous Bitcoin into an anonymous dark-web coin — and it is doomed because US law (FinCEN/Bank Secrecy Act) mandates record-keeping that no signature scheme can erase. Bitcoin used correctly (no key reuse, threshold ECDSA) already delivers all legitimate privacy, and anonymity is "the enemy of any cryptographic monetary system."

## Key arguments and claims
- Private communications are "utterly different to anonymous communications": privacy supports trade because it is "linked to an ability to seek redress against another party"; anonymity severs redress and reputation.
- Dark-web markets cannot form enforceable contracts: "a contract to engage in an illegal or criminal activity is void ab initio" — so anonymous coins can never serve lawful trade.
- Money under law is necessarily traceable: source-of-wealth legislation means funds without demonstrable origin "can be taken in many instances"; mixer users who lose source/destination keys cannot validate ownership.
- Anonymity kills monetary systems: "Just as the government was easily able to stop eCash, it can easily stop another anonymous system." Monero is "incredibly easy to stop, and come[s] under existing legislation."
- Technical walkthrough of Schnorr aggregation: with P(joint) = P(Alice) + P(Bob), Alice cannot tell whether Bob is one party or many — P(Bob) may itself be P(Mallory) + P(Biff). It is an end-to-end scheme (all parties must sign), not a 2-of-3 threshold.
- The claim that Schnorr enables private backup of key material is "an utter falsehood": threshold and dealer-less ECDSA key splitting already achieves it — e.g. a corporate voting key split among eight board members requiring six to reconstruct.
- Signature law: only a natural person can sign — "A company cannot sign, and a machine or an agent cannot sign"; EDI systems handled this with binding master contracts. Schnorr cannot change that legal reality.
- The BSA (31 USC 5311 et seq, under the OCC) requires records; "the mere act of deleting them is enough to make their system illegal." Lightning hubs "will start coming under the requirements of the BSA," and Lightning's promissory-note structure creates a "store of value" under Pub. L. 111–24, title V, §503.
- The block-size cap and the push to Lightning are "purely a response to FinCEN and legislation such as the Bank Secrecy Act" — an attempt to build a system that allows deletion of logs and records.
- Schnorr, like P2SH ("the worst addition to corrupting Bitcoin"), removes validation from miners; BTC Core ("SegWitCoin") developers "are seeking to create a system that cannot be validated fully."
- Economics: with the halvening approaching and regulators watching exchanges ("backstreet gambling houses or bucket shops"), BTC must be funded by competitive on-chain fees — a marginal cost "of around 0.005 USD a transaction — no more," scaling to thousands of transactions per second at ~a tenth of a cent — "or the miners will leave the chain."
- Patent taunt: "we are approaching number 700 in patents filed, and I expect to have number 1200 filed over the year."

## How Craig reasons (his model/logic)
He works three registers in sequence: legal doctrine (void contracts, BSA record-keeping, signature law), cryptographic mechanics (the additive key-aggregation equations), and motive attribution (developers' true aim is deniability, not privacy). The recurring move is a distinction — privacy versus anonymity, individual versus entity, records versus deletion — used to show the marketed benefit collapses under legal analysis. He closes with an economic competitiveness calculation and a patent-count show of force.

## Where this contradicts BTC-mainstream logic
- Rejects the BTC roadmap's framing of SegWit → Lightning → Schnorr as scaling/privacy progress: "none of it has any relation to scaling at all."
- Contradicts the cypherpunk premium on anonymity: anonymity is the fatal flaw that got 1990s e-cash killed; Bitcoin survived precisely because it is "within the law."
- Denies the "crypto is new, so old law doesn't apply" orthodoxy: BSA obligations attach to Lightning hubs and record-deleting designs are per se illegal.
- Attacks the home-user validation ethos: Schnorr and P2SH strip miners of full validation, and miners' profit is what secures the chain — "Removing profit from miners is just the perfect way to kill the chain."

## Notable quotes
- "The truth is, it is not a privacy nor is it a scaling solution."
- "Anonymity is the enemy of any cryptographic monetary system."
- "Silk Road was one of the worst things to happen to Bitcoin, and yet also proved the efficacy of the system."
- "It is a common method used by a lot of failing organisations in the Silicon Valley tradition: fail, until you succeed, or run out of money."
- "Fortunately, you don't change the law by making something designed to allow crime."
- "Thank you for discounting me, and thank you for ignoring us for so long."

## Connections
Part of his early-2019 anti-Core/anti-Lightning cluster alongside "The myth of forks" and "The labour fallacy of mining" (same week). The threshold key-splitting discussion foreshadows his patent EP3268914B1 (common-secret/hierarchical deterministic keys) cited in "Clickwrap smart contracts." Written in the post-BCH/BSV-split period while nChain's patent programme (~700 filings) was being publicised.
