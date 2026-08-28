---
title: "BTC Is Banking with Extra Steps"
date: 2026-06-18
slug: btc-is-banking-with-extra-steps
url: https://singulargrit.substack.com/p/btc-is-banking-with-extra-steps
themes: [btc-critique, lightning-l2, intermediaries, scaling-throughput]
---

# BTC Is Banking with Extra Steps
**Date:** 2026-06-18 | **URL:** https://singulargrit.substack.com/p/btc-is-banking-with-extra-steps
**Subtitle:** Peer to Peer is not hops

## Core thesis
BTC markets itself as direct peer-to-peer electronic cash, but its practical payment path is a relay of intermediaries — Alice → Square → Lightning → nodes → Coinbase → Bob — which is commercial banking architecture in disguise. Bitcoin as originally designed is a triangle: Alice pays Bob directly, IP-to-IP, with either or both parties submitting the transaction to a node that settles it in a block. The throttled base layer is what manufactures the need for the intermediary stack, so the maze is the deviation from the design, not the design.

## Key arguments and claims
- The test is simply “Alice wants to pay Bob” — draw the route. The honest BTC diagram is linear: Alice hands value to Square (a service provider with policies, data collection and feature control), Square to Lightning (channels, liquidity constraints, routing, online requirements, failed payments), Lightning to nodes constrained by artificial block limits and a fee market, nodes to Coinbase (account provider, exchange, custodian), Coinbase to Bob.
- This is reintermediation: the old banking system rebuilt with weaker consumer protection, worse usability and higher operational risk, while being sold as freedom.
- The Bitcoin diagram is a triangle — Alice → Bob, Alice → node, Bob → node. Nodes are not passive hobby machines or social identities; they are the competitive systems that build blocks, process, validate, order and settle transactions. They are the settlement infrastructure.
- Architecture determines economics, economics determines incentives, incentives determine behaviour: a system that drives users through intermediaries becomes an account system, a permissioned routing system governed by liquidity, channel policy, exchange policy, custodial risk and fee pressure — it becomes what it claimed to replace.
- The theoretical possibility of on-chain use is not a system designed for direct use: “a person can still pay for groceries in pennies if they bring a wheelbarrow.” A design that restricts capacity, drives fees up and pushes commerce into secondary systems has made direct payment a luxury ritual, not the central model.
- Cash must work at ordinary scale: small, frequent and commercial payments, merchants, automated services, micropayments, machine-to-machine exchange — “boringly functional”. BTC chose the opposite: artificial scarcity of transaction capacity, high fees as moral virtue, settlement austerity, then layer upon layer of services to patch the resulting unusability.
- The equivocation catalogue: the BTC world says “Bitcoin” when marketing simplicity, “BTC” for ticker markets, “Lightning” when the base layer fails as cash, “store of value” when payments fail, “settlement layer” when commerce becomes impossible, “self-custody” while activity clusters on exchanges, and “trustless” while users trust interfaces, providers, liquidity hubs, bridges and app stores.
- Lightning is not an escape from the base layer but a postponement: opening and closing channels, resolving disputes and final settlement all still touch the throttled chain, so upper layers inherit the constraint in different forms.
- The economics of scale: security is tied to economic activity; as subsidy declines, nodes are paid through fees that can arise from volume rather than punitive tolls. “Many transactions at low cost are economically superior to a small number of expensive transactions if the goal is a functioning commercial system.”
- Names carry architecture: allowing BTC to occupy the word “Bitcoin” unchallenged invites confusion between the electronic-cash design and the later settlement-token ideology. “The word ‘Bitcoin’ belongs to the system of peer-to-peer electronic cash.” The “everyone should run a node” politics collapses once a node is defined as a competitive block-building business, not a Raspberry Pi in a cupboard.

## How Craig reasons (his model/logic)
Architectural route-tracing as polemic: force the system to confess its dependency chain by drawing the actual payment path, then reason from architecture to incentives to behaviour. The method is definitional discipline (peer-to-peer means direct exchange, not hops) backed by economic logic about fees, scale and security, delivered in a satirical register (“a strange religion”).

## Where this contradicts BTC-mainstream logic
- Rejects the small-block orthodoxy outright: scarce block space is not prudence but the manufactured cause of the intermediary stack.
- Rejects Lightning-as-scaling: a routed channel network is a different architecture from electronic cash, not a layer on top of it, and it inherits base-layer constraints.
- Rejects the “everyone runs a node” validation theatre: nodes are economic actors that build blocks; users need to transact, not to become settlement infrastructure.
- Rejects the store-of-value and settlement-layer pivots as equivocations adopted after the cash function was abandoned — “the excuse became theology”.
- Rejects high fees as virtue: security should be funded by volume at low per-transaction cost, not by pricing ordinary users out.

## Notable quotes
- “That is commercial banking architecture wearing a novelty hat.”
- “Cash cannot be an occasional ceremony.”
- “It is a strange religion: the less useful the system becomes, the more sacred it is declared to be.”
- “BTC can keep its ticker. Bitcoin keeps the design.”

## Connections
The polemical front-end of the technical case made in “What the Protocol Remembers”, where throughput is proved to fund the post-subsidy security budget and extend the security model’s validity. Its “theology” framing echoes the forecasting-priesthood analysis of “The Retrodiction Fallacy”.
