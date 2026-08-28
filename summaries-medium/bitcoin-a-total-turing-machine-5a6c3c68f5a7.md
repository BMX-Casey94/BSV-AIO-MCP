---
title: 'Bitcoin: A Total Turing Machine'
date: 2018-10-12
slug: bitcoin-a-total-turing-machine-5a6c3c68f5a7
url: https://medium.com/@craig_10243/bitcoin-a-total-turing-machine-5a6c3c68f5a7
themes: [script-technical, btc-critique, protocol-immutability]
---

# Bitcoin: A Total Turing Machine
**Date:** 2018-10-12 | **URL:** https://medium.com/@craig_10243/bitcoin-a-total-turing-machine-5a6c3c68f5a7
**Subtitle:** Today I have released a draft of a paper I started in 2014, "Bitcoin: A Total Turing Machine". It is available on SSRN. This is an intro…

## Core thesis
Craig announces the SSRN release (abstract 3265146) of a paper begun in 2014 and posts its opening sections. The paper argues that Bitcoin Script is not merely capable of primitive recursion but, by implementing the Ackermann function, supports total computable functions — making Bitcoin a "Total Turing Machine" (a decider that halts on every input) and, with a stochastic component, a "probabilistic Total Turing Machine" (PTTM). The practical conclusion: the claim that Bitcoin is "not Turing complete" is false, and Bitcoin can natively run smart contracts, DACs and optimisation-market contracts (e.g. Travelling Salesman problems) without any protocol change. The Medium body is the paper's introduction and Section II; the full text continues on SSRN.

## Key arguments and claims
- Bitcoin Script forms a decider / total Turing machine (citing Sipser 1996, Kozen 1997): "a class of Turing Machine that halts for every input". Because every decidable program halts in finite time, the set of programs that run on a TM and halt without being decidable "is a NULL set".
- Prior work (Wright 2016) showed Script is built from primitive recursive functions (Meyer & Ritchie 1967); (Wright 2017) built a toy language analogous to PL-{GOTO} (Brainerd & Landweber 1974), demonstrating Turing completeness "ignoring the real-world constraints of script limits and size constraints".
- The new result: via the Ackermann function, Bitcoin Script "include[s] the ability to extend to total computable functions that are not primitive recursive" — so Bitcoin exceeds primitive recursion.
- Looping is unnecessary because loops can be "unrolled" by compilers: high-level constructs such as "OP_ForLoop", "OP_WhileLoop", "OP_Case" are compiled down; footnote 1 reads "For details see Patent filing XXX" — an explicit nChain patent hook.
- The absence of loops was a deliberate anti-DOS design choice, not a capability ceiling: "The omission of a looping construct was designed to prevent DOS (denial of service) attacks infinite loops." Observers who concluded Bitcoin is unsuitable as a general-purpose system are wrong: "This assertion is incorrect."
- Core developers restricted the language: "The original list of OP_CODEs was more extensive than is currently available (several commands were disabled by the Core developers), nevertheless bitcoin script remains a simple yet powerful language."
- Equivalence claim: using Wright (2017), Bitcoin's predicate-logic script "is equivalent to Wolfram's (2,3) Turing Machine", whose universality conjecture (Wolfram 2002) was proven by Smith (2007); Smith's results "map directly" onto Bitcoin's recursion system.
- Application layer: Bitcoin can host open or time-bound contracts guaranteeing payment for "best fit solutions to common logistic systems and optimisation problems including the Travelling Salesman class of problems", with pseudonymous bidders, and a NIZKPoK acting as "a TM based verifier to a Non-Interactive Proof that is run on an external and non-associated TM".
- The posted draft still contains reviewer marginalia (A1–A7) and one of Craig's own comments — "I will get Stef / Antonetta to add a paragraph here" — showing it as a working nChain-era draft.

## How Craig reasons (his model/logic)
Formal computability-theory argumentation: he proceeds by definitions (decider, total TM, effective calculability quoting Rosser 1939 and Turing 1939), set-inclusion reasoning about halting programs, then reduction — showing Script simulates known-universal machines (dual-stack/counter machines, Wolfram's (2,3) UTM). The rhetorical mode is paper-announcement: heavy self-citation (Wright 2016, 2017), appeals to canonical CS authorities, and a patent cross-reference, blending academic and IP-claim registers.

## Where this contradicts BTC-mainstream logic
- Contradicts the near-universal 2018 orthodoxy that "Bitcoin Script is intentionally not Turing complete" (he quotes the Quora-era dismissal, countering that "Turing completeness is theoretical, nothing is Turing complete in practice") — the very premise used to justify Ethereum and the BTC "store of value, not world computer" pivot.
- Contradicts the Core-developer framing that disabling opcodes and excluding loops were necessary safety decisions defining Bitcoin's limits; Craig recasts them as reversible choices obscuring Satoshi's "original conception" of "highly sophisticated functionality beyond simple transfer of value".
- Contradicts the small-block/minimalism position that complex contracts belong off-chain or on other chains: he argues optimisation markets, DACs and smart contracts run on Bitcoin itself.

## Notable quotes
- "we show that the script system is Turing complete"
- "Bitcoin acts as a decider or Total Turing Machine"
- "The omission of a looping construct was designed to prevent DOS (denial of service) attacks infinite loops"
- "This assertion is incorrect."
- "several commands were disabled by the Core developers"
- "an infinite number of computations can be described by a finite recursive program" (quoting Wirth, 1976)

## Connections
Companion piece to "A Proof of Turing completeness in Bitcoin Script" (posted the same day, SSRN 3265157) and explicitly builds on Wright (2016) and Wright (2017). Footnote 1's "Patent filing XXX" ties it to the nChain patent programme (loop-construct opcodes); the reviewer note naming "Stef" points to nChain's Stef Matthews. Published weeks before the BCH/BSV split (Nov 2018), it is part of the intellectual case that original Bitcoin already subsumes Ethereum-style functionality.
