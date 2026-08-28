---
title: 'Sun-setting P2SH'
date: 2018-11-08
slug: sun-setting-p2sh-8b3c08f271c0
url: https://medium.com/@craig_10243/sun-setting-p2sh-8b3c08f271c0
themes: [protocol-immutability, script-technical, lightning-l2, governance-decentralisation]
---

# Sun-setting P2SH
**Date:** 2018-11-08 | **URL:** https://medium.com/@craig_10243/sun-setting-p2sh-8b3c08f271c0
**Subtitle:** Steve, Daniel and the team are working around the clock to make SV as close to the original Bitcoin protocol as they can. In this end, we…

## Core thesis
Bitcoin SV will restore the original Bitcoin protocol: soft forks are finished (consensus changes only via PoW and hard forks), and P2SH will be deprecated in stages in favour of direct script — which Craig argues is Bitcoin's only true "layer 2", since genuine layers encapsulate data inside the base protocol rather than running as separate systems like Lightning or side-chains.

## Key arguments and claims
- "The two worst ideas (cancers) to have infected Bitcoin are the joint diseases of: soft forks and P2SH." With Bitcoin SV, "the only path forward is that detailed in the original Bitcoin white paper… All consensus rules in Bitcoin will be handled using the only way that works: PoW and hard forks."
- P2SH cannot be removed instantly — "it is used in many applications. It is also saved money" — so SV announces a multi-stage sunset: accept non-standard scripts from miners, stop new P2SH being added, keep old P2SH spendable, with dates to be set.
- P2SH's real purpose was malign: "One reason for P2SH is to have sliding consensus rules… a strategy (as we saw in Core) of soft forks and have hidden transaction rules."
- The security defence of P2SH is rejected as "security by obscurity, and that is not a valid means to secure a system"; quoting a StackExchange answer, P2SH merely lets receivers dictate spending conditions — i.e. it enables non-standard scripts, so once the standard/non-standard distinction is removed, P2SH's rationale collapses.
- Privacy doctrine: "There is no anonymity in Bitcoin, there is pseudonymity, and that refers to privacy. To be private, a transaction must also be available and traceable."
- Anti-change-for-change's-sake: the wheel "has remained stuck as a circle for millennia"; the burden is on the proposer "to demonstrate just how much better the proposed addition would be", and all such changes "have taken away from Bitcoin".
- Layering thesis: "It [script] is the only layer 2 in Bitcoin. In network protocols, layers encapsulate data… Something like a side-chain, Plasma, or the Lightning Network is a separate system; it cannot be layer 2 as it is not encapsulated in script." His OSI-style stack: 0 physical, 1 data link (IP/Internet), 2 network (P2P transaction exchange), 3 Bitcoin transactions, 4 script — "More has not been created yet — it is wide open for development."
- Anti-permissionlessness: "there is no concept of permission-less"; Silk Road 2.0 and child-porn exchanges are "antithetical to what Bitcoin was designed to be: sound money." "Just as you cannot choose the format of an HTTP packet and a datagram, you do not get to add and change OP_CODEs in Bitcoin."
- Closes with the SV brand: "Business friendly. Sound money."

## How Craig reasons (his model/logic)
Originalism plus networking theory: fidelity to the white paper is the legitimacy test, and the OSI encapsulation model is imported to redefine "layer 2" so that only in-script constructions qualify. He deploys a security principle (obscurity is not security), a conservative burden-of-proof argument (the wheel analogy), and adversarial framing (soft forks and P2SH as "cancers"), naming Steve Shadders and Daniel as the SV implementation team.

## Where this contradicts BTC-mainstream logic
- Contradicts soft-fork orthodoxy (SegWit-style upgrades as the safe, backward-compatible path): soft forks are "the most insidious attack on Bitcoin", and only PoW-voted hard forks are legitimate consensus changes.
- Contradicts P2SH-as-best-practice (multisig, Lightning channels all ride on it): it is a cancer enabling hidden rules, to be sunset.
- Contradicts the Lightning/side-chain scaling narrative: LN, Plasma and side-chains are "separate systems", not layer 2 — only script is.
- Contradicts permissionlessness and experimentation culture: you "can work in the system, or find something else to try and break."

## Notable quotes
- "The two worst ideas (cancers) to have infected Bitcoin are the joint diseases of: soft forks and P2SH."
- "All consensus rules in Bitcoin will be handled using the only way that works: PoW and hard forks."
- "The claim of obscurity is false, it is purely one of security by obscurity, and that is not a valid means to secure a system."
- "There is no anonymity in Bitcoin, there is pseudonymity, and that refers to privacy. To be private, a transaction must also be available and traceable."
- "Just as you cannot choose the format of an HTTP packet and a datagram, you do not get to add and change OP_CODEs in Bitcoin."

## Connections
A Bitcoin SV launch-week manifesto (names Steve Shadders and Daniel of the SV team), companion to "Fixing OP_False" and "P2P and returning IP and Domain based transfers". The anti-Lightning layering argument recurs in "Lightning is malleable, steel is not" and "Bitcoin as the base layer"; the anti-soft-fork stance underpins his whole protocol-immutability ("set in stone") position.
