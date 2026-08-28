---
title: 'OP Codes and the push to confuse.'
date: 2018-06-07
slug: op-codes-and-the-push-to-confuse-24d10d5e3861
url: https://medium.com/@craig_10243/op-codes-and-the-push-to-confuse-24d10d5e3861
themes: [script-technical, btc-critique, protocol-immutability]
---

# OP Codes and the push to confuse.
**Date:** 2018-06-07 | **URL:** https://medium.com/@craig_10243/op-codes-and-the-push-to-confuse-24d10d5e3861
**Subtitle:** A certain group of BTC Core developers have their (one day but not in my lifetime) sidechains that will enable OP_Codes that have been left…

## Core thesis
A short technical jab at BTC Core developers: the OP_Code functionality they promise "one day" via sidechains can already be produced with Bitcoin's existing script — the opcodes "left broken in BTC" are "working in BCH", and even the new commands being sold as innovations are constructible from primitives that already exist. Good developers compose what exists rather than reinventing the wheel. (Note for the corpus: the post's four script constructions are presented as labelled figures whose listings are embedded images/code blocks not preserved in the plain-text body; the framing text carries the argument.)

## Key arguments and claims
- Core developers are building sidechains to enable "OP_Codes that have been left broken in BTC (and which are working in BCH)" — framing the opcode disablements as damage BTC inflicted on itself and BCH repaired.
- "Dup from Alt Stack" — copying a value to the main stack while leaving the alt stack untouched — is demonstrated with existing script, no new opcode required.
- "SWAP Stack" — exchanging the main and alt stacks — is shown as a composition of existing operations.
- "Dup TO ALT Stack" — copying to the alt stack while leaving a copy on the main stack — again requires nothing new.
- "SWAP CAT" — presented in forward and reverse constructions — reproduces concatenation-style behaviour without re-adding OP_CAT.
- The general claim: "Basically, all that these commands allow is already there… if you think." New opcodes are a marketing exercise, not a technical necessity.
- Competence critique aimed at Core: "Good developers do not reinvent the wheel and sell it as if that makes them smart."

## How Craig reasons (his model/logic)
Proof by construction: rather than argue theory, he exhibits working script patterns replicating each proposed opcode's effect, shifting the burden onto Core to justify why new opcodes or sidechains are needed at all. The rhetoric is dismissive and adversarial — the parenthetical "one day but not in my lifetime" sets the tone — and rests on an originalist premise: Bitcoin's script as released was already sufficient for those who understand the stack.

## Where this contradicts BTC-mainstream logic
- Rejects the Core orthodoxy that disabled opcodes (OP_CAT and kin, disabled in 2010 over DoS concerns) must stay disabled or return only through tightly controlled soft forks/sidechains — Craig treats the functionality as already available to anyone who thinks.
- Undercuts the sidechain roadmap as a solution in search of a problem: the justification for new opcodes collapses if the same outcomes compose from existing script.
- Implicitly endorses BCH's May 2018 opcode restoration as the correct engineering path — direct opposition to Core's protocol-conservatism framing of the same change set.

## Notable quotes
- "A certain group of BTC Core developers have their (one day but not in my lifetime) sidechains"
- "Good developers do not reinvent the wheel and sell it as if that makes them smart."
- "Basically, all that these commands allow is already there… if you think."

## Connections
Sits in Craig's mid-2018 run defending Bitcoin Cash's restored opcode set (BCH re-enabled OP_CAT and raised op_return limits in May 2018) against Core's script minimalism. Companion piece to "Lightning is malleable… Steel is not" (two weeks later), which makes the same sufficiency-of-original-script argument for payment channels and ECDSA group signatures "without OP_Codes and protocol changes".
