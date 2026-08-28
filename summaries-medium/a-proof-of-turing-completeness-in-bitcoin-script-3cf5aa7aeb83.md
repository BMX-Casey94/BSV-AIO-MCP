---
title: 'A Proof of Turing completeness in Bitcoin Script'
date: 2018-10-12
slug: a-proof-of-turing-completeness-in-bitcoin-script-3cf5aa7aeb83
url: https://medium.com/@craig_10243/a-proof-of-turing-completeness-in-bitcoin-script-3cf5aa7aeb83
themes: [script-technical, btc-critique]
---

# A Proof of Turing completeness in Bitcoin Script
**Date:** 2018-10-12 | **URL:** https://medium.com/@craig_10243/a-proof-of-turing-completeness-in-bitcoin-script-3cf5aa7aeb83
**Subtitle:** Continuing on an early set of drafts that I will publish fully in time,

## Core thesis
A short announcement-cum-abstract for the SSRN paper of the same name (abstract 3265157), framed as part of "an early set of drafts that I will publish fully in time". The claim: Bitcoin's dual-stack Script architecture is provably Turing complete because it acts as a dual counter machine, subject only to the real-world constraint that no physical machine has an infinite tape. The Medium post is an excerpt; the full paper is on SSRN.

## Key arguments and claims
- Sufficiency argument: "It would be sufficient to show that Bitcoin uses a dual stack architecture that acts as a dual counter machine. Such systems have already been demonstrated as being Turing complete" — i.e. the main stack plus alt stack give the two unbounded counters needed for Minsky-style universality.
- Bitcoin script "is a minimal family of which λ and R are members"; via "the compositional product rule and the iteration rule" (if A, B are machines then A.B is a machine; if A is a machine then its iteration is a machine) "Bitcoin scripting is Turing complete with the limitations imposed on any realworld computer".
- The only limitation is physical: "there cannot be an infinite tape" — finiteness is a property of all real computers, not a defect of Script.
- Recursion without loops: "Iterations can be simulated using an 'unrolled' loop function with allocation to the 'Alt' stack" — the alt stack supplies the storage that loop unrolling needs.
- Consequence of the product/iteration rules: "for every partial recursive function of in variables we can show that it can be evaluated by machine of the proposed family".

## How Craig reasons (his model/logic)
Pure proof-sketch by reduction: pick a known-universal abstract machine (the dual counter machine), show Script's architecture instantiates it, then cite composition and iteration rules to close the argument. The style is terse and citation-driven (numbered references [7], [17], [20], [21] to the SSRN paper's bibliography), presenting the Medium post as a pointer to formal work rather than a self-contained argument.

## Where this contradicts BTC-mainstream logic
- Directly attacks the 2018 received wisdom that Bitcoin Script "is not Turing complete" and therefore cannot support general computation — the standard BTC/Ethereum dividing line of the era.
- Undercuts the justification for moving complex computation to other chains or Layer 2: if the base protocol is already Turing complete (modulo the finite-tape caveat every computer shares), the "Bitcoin can't do that" rationale for Ethereum-style chains collapses.
- Implicitly rejects the view that Script's disabled/limited opcode set defines Bitcoin's ceiling, since the proof needs only the surviving dual-stack mechanics.

## Notable quotes
- "Bitcoin uses a dual stack architecture that acts as a dual counter machine"
- "we demonstrate that Bitcoin scripting is Turing complete with the limitations imposed on any realworld computer"
- "there cannot be an infinite tape"
- "Iterations can be simulated using an 'unrolled' loop function with allocation to the 'Alt' stack"
- "Continuing on an early set of drafts that I will publish fully in time"

## Connections
Sibling announcement to "Bitcoin: A Total Turing Machine" (same day, SSRN 3265146), which cites this line of work as Wright (2017). Both posts belong to the October 2018 cluster of paper releases — alongside nChain's patent filings on loop constructs — making the pre-BCH/BSV-split case that original Bitcoin script already supports general computation.
