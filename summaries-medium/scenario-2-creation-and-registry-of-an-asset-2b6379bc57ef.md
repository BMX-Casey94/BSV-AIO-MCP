---
title: 'Scenario 2: Creation and Registry of an Asset'
date: 2018-10-06
slug: scenario-2-creation-and-registry-of-an-asset-2b6379bc57ef
url: https://medium.com/@craig_10243/scenario-2-creation-and-registry-of-an-asset-2b6379bc57ef
themes: [tokenisation, privacy, wallets-keys, property-rights]
---

# Scenario 2: Creation and Registry of an Asset
**Date:** 2018-10-06 | **URL:** https://medium.com/@craig_10243/scenario-2-creation-and-registry-of-an-asset-2b6379bc57ef
**Subtitle:** This is a slightly enhanced version of scenario 1 where Bob wants to publish the asset onto the Blockchain, but doesn't want to directly…

## Core thesis
Extends Scenario 1's on-chain asset registry with privacy: Bob can register an asset without directly revealing his ownership by deriving a deterministic sub-key from his public key to stand for the asset, which then "publishes details about itself onto the Blockchain". The mechanism is anchored to an nChain patent (EP3295350B1). The body is a short setup paragraph; the state machine is stated to be identical to Scenario 1's (diagram only).

## Key arguments and claims
- On-chain asset registration need not expose the owner's identity: Bob "doesn't want to directly reveal his ownership", and the construction accommodates that.
- The mechanism: "Bob first creates a deterministic sub-key from his public key" to represent the asset — ownership is verifiable through the key relationship rather than by naming the owner.
- The technique is credited to the patent "A method and system for verifying ownership of a digital asset using a distributed hash table and a peer-to-peer distributed ledger" (linked as EP3295350B1).
- Once created, the asset itself "publishes details about itself onto the Blockchain" — the asset, not the owner, is the on-chain actor.
- As in Scenario 1, there is no termination date, and the state machine is unchanged.

## How Craig reasons (his model/logic)
Patent-backed engineering exposition: a specific cryptographic primitive (deterministic sub-key derivation, in the family of HD-wallet-style key chains) is proposed as the privacy layer for on-chain registries, and the argument is buttressed by citation of his own patent portfolio rather than by rhetorical appeal. Privacy is framed as pseudonymity with verifiable linkage — not anonymity.

## Where this contradicts BTC-mainstream logic
- Contradicts the era's privacy orthodoxy that on-chain privacy requires mixing, ring signatures, or dedicated anonymity coins: Craig's model keeps the asset's record fully public and auditable while pseudonymising the owner via key derivation — consistent with his wider "privacy, not anonymity" position that stands apart from both BTC privacy-coin thinking and surveillance critiques of Bitcoin.
- Implicitly rejects the "Bitcoin can't do tokens" view: an asset can be an on-chain publishing entity in its own right.

## Notable quotes
- "Bob wants to publish the asset onto the Blockchain, but doesn't want to directly reveal his ownership."
- "Bob first creates a deterministic sub-key from his public key"
- "This asset then publishes details about itself onto the Blockchain."
- "the state machine for this scenario is the same as that for scenario 1."

## Connections
Part 2 of the five-part "Scenario" series (all 2018-10-06). Cites European patent EP3295350B1, part of the nChain patent portfolio Craig was assembling in 2017-2018 around key management and digital-asset ownership — the same deterministic-key work that surfaces in his later wallet and tokenisation writings.
