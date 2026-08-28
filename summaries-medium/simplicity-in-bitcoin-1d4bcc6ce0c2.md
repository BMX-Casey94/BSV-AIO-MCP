---
title: 'Simplicity in Bitcoin'
date: 2018-09-25
slug: simplicity-in-bitcoin-1d4bcc6ce0c2
url: https://medium.com/@craig_10243/simplicity-in-bitcoin-1d4bcc6ce0c2
themes: [security-economics, btc-critique, scaling-throughput]
---

# Simplicity in Bitcoin
**Date:** 2018-09-25 | **URL:** https://medium.com/@craig_10243/simplicity-in-bitcoin-1d4bcc6ce0c2
**Subtitle:** There is a small correlation between the effects of security and simplicity. This is complexity for its own sake will not add and may…

## Core thesis
Security and simplicity are largely orthogonal axes, and neither complexity nor simplicity "for its own sake" adds security — what matters is engineered robustness, often achieved by enmeshing simple and complex elements as in composite materials. Applied to crypto, this yields a satirical contrast: Bitcoin (BCH) is the simple, fit-for-purpose design ("global, fast, P2P electronic cash"), while ETH/EOS-style generalised blockchains pile on complexity (sharding, dApps) that is both brittle and provably intractable — sharding optimisation is NP-complete, and solving it efficiently would break ECDSA itself.

## Key arguments and claims
- "For the most part, the functions of simplicity and security are perpendicularly polar" — one aligns with the X axis, the other the Y; the framing is explicitly "a Chaos/Complexity Theory framework".
- Materials-science analogy: high-carbon steel is strong but brittle and "shatters" past its threshold; low-carbon steel bends and "can be reformed"; the most robust systems are "hybrid composites" where simple and complex elements are enmeshed.
- All software is inherently complex, and "even in the face of open-source code, software is not evaluated" — malcode, bugs and vulnerabilities are "the major flaw in any system design".
- Defence-in-depth adds security through introduced complexity: dual firewalls from separate vendors "such that neither ever suffers the same software flaw", and multiple anti-virus engines at gateway, server and data store.
- But complexity re-enters through human factors: multiple platforms defeat single-operator competence, and adding specialists creates coordination "stress points... making it more brittle"; training and drilling temper this — "this addition of complexity can create a simpler and more robust system".
- Satirical definitional contrast: Bitcoin is "global, fast, P2P electronic cash", whereas "Blockchain" is defined as a ledger for "censorship-resistant speculative and slow-kitty apps that move from fad to fad in a generalised glut of waste and value destruction", enabling "ICOs and other illegal security offerings designed to ponzi your way to a lambo".
- Security is a dynamical system: "Although point equilibria exist, they do not exist in time" — nodal minima require continual "tuning and updates".
- "Black boxes are prone to be vulnerable" is rejected: B2-and-higher rated systems can operate securely as black boxes, and "open source also has just as many flaws".
- The technical kill-shot at ETH scaling: "finding optimal network-aware sharding strategies is unfortunately an NP-complete problem"; if it were efficiently solvable then P=NP, which would also put the discrete logarithm problem at risk and "make ECDSA easily reversed. Luckily, it is incredibly unlikely that P=NP. Sorry ETH."

## How Craig reasons (his model/logic)
The essay reasons by cross-domain analogy (metallurgy, materials composites, firewall/AV architecture) imported into protocol design, under a stated chaos/complexity-theory frame. It pairs this with computational-complexity argument — reducing sharding to an NP-complete optimisation and then to the P-vs-NP foundations of ECDSA — and with satire, defining "blockchain" as a parody of ETH marketing copy. Evidence style mixes FIRST conference slides, sharding research papers, and ICO-fraud statistics.

## Where this contradicts BTC-mainstream logic
- Rejects the "many eyes make bugs shallow" premise: open source "has just as many flaws" and code is not meaningfully evaluated — undercutting the auditability argument shared by BTC and ETH culture.
- Treats protocol complexity (Core's and ETH's additions) as a security liability rather than progress, inverting the feature-roadmap model of both camps.
- Dismisses sharding — then ETH's flagship scaling plan — as NP-complete busywork, while implying Bitcoin scales without it.
- Frames ICOs and dApp platforms as "illegal security offerings" and "value destruction", against the 2018 mainstream positioning of Ethereum as a legitimate generalised platform.
- Anticipates the BSV position that a simple, fixed, cash-only protocol beats general-purpose chains — written two months before the BCH/BSV split.

## Notable quotes
- "This use of complexity for its own sake (See ETH, Core etc) will not add and may remove security."
- "Complex systems (in general) are more prone to catastrophic failure. That is they are more brittle."
- "The paradox is that this addition of complexity can create a simpler and more robust system."
- "Bitcoin: global, fast, P2P electronic cash"
- "finding optimal network-aware sharding strategies is unfortunately an NP-complete problem."
- "Luckily, it is incredibly unlikely that P=NP. Sorry ETH."

## Connections
Links to the netshard sharding paper (5harad.com), a CoinDesk piece on Ethereum ponzi games, and the 2018 study claiming 80% of 2017 ICOs were scams. The simplicity/security theme continues in the next day's post, "Why is Bitcoin Open Source?", which grounds the same argument in Saltzer and Schroeder's design maxims.
