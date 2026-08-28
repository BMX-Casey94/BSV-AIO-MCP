---
title: 'Breach of contract — Remedies for breach'
date: 2018-12-27
slug: breach-of-contract-remedies-for-breach-71fb0ff2b1fd
url: https://medium.com/@craig_10243/breach-of-contract-remedies-for-breach-71fb0ff2b1fd
themes: [law-regulation, script-technical]
---

# Breach of contract — Remedies for breach
**Date:** 2018-12-27 | **URL:** https://medium.com/@craig_10243/breach-of-contract-remedies-for-breach-71fb0ff2b1fd
**Subtitle:** When the court decides there has been a breach, there are many remedies at its disposal.

## Core thesis
A short piece on contract remedies whose real target is smart-contract design: specific performance — compelling the breaching party to perform as written — is the remedy that maps cleanly onto code, whereas damages require subjective valuation that courts, not contracts, must resolve. Craig concludes that any smart contract not confined to specific performance "could easily be overturned or subject to legal review."

## Key arguments and claims
- Once a court finds breach, "there are many remedies at its disposal"; one is specific performance, under which "a breaching party is required to fulfil the contract as written."
- Canonical example: A contracts to sell real property to B, then sells the house to C — "the law requires that the house go to B."
- A major rationale for specific performance is institutional economy: courts avoid having to estimate B's damages. "Such a contract can easily be determined within a smart contract."
- Damages are hard because value is subjective: the court would have to determine B's valuation of the house and subtract the price; "B has a reason to exaggerate, and then objective evidence may be refuted or not support such claims."
- Where specific performance is impractical, relative bargaining power shapes the damages outcome — and "sometimes, such a scenario may even lead to zero damages."
- Design constraint for smart contracts: "any smart contract that is not purely based on specific performance as detailed within a contract could easily be overturned or subject to legal review."

## How Craig reasons (his model/logic)
Law-and-economics reasoning in miniature: he compares remedies by their information costs (specific performance avoids the court's valuation problem; damages invite exaggeration and failed objective proof), then derives an engineering rule for smart contracts from the legal analysis. The mode is didactic — a standard contract-law example repurposed to bound what code may legitimately automate.

## Where this contradicts BTC-mainstream logic
- Contradicts the Ethereum-style orthodoxy that smart contracts are self-executing and beyond judicial reach ("code is law"): only specific-performance contracts enjoy anything like that status; damages-based arrangements remain subject to courts and can be overturned.
- Contradicts the assumption that automating performance removes the legal system from the loop — on Craig's account the remedy structure of contract law defines the permissible boundary of automation, so lawful smart-contract design must start from remedies doctrine, not from code capability.

## Notable quotes
- "One solution is to require specific performance. As such, a breaching party is required to fulfil the contract as written."
- "Such a contract can easily be determined within a smart contract."
- "As value is subjective, it may not be easy to calculate; B has a reason to exaggerate."
- "Any smart contract that is not purely based on specific performance as detailed within a contract could easily be overturned or subject to legal review."

## Connections
Pairs with "On Predicates" (21 Dec 2018), which supplies the general anti-"code is law" framework that this piece applies to remedies. Part of Craig's contract-law series on Medium ("Trust in Smart Contracts," "Defining Smart Contracts," and the scenario essays on asset registries, leases and rolling contracts).
