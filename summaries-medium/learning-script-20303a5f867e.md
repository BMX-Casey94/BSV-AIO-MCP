---
title: 'Learning Script'
date: 2019-03-18
slug: learning-script-20303a5f867e
url: https://medium.com/@craig_10243/learning-script-20303a5f867e
themes: [script-technical, btc-critique]
---

# Learning Script
**Date:** 2019-03-18 | **URL:** https://medium.com/@craig_10243/learning-script-20303a5f867e
**Subtitle:** The foundation of recursion comes in 6 functions. OP_ADD and OP_1ADD encapsulate point 4 and point 2 (below) respectively. Point 6 is…

## Core thesis
All decidable mathematics — "anything of any of use in science, engineering, and finance" — reduces to six primitive recursive functions, and Bitcoin Script's opcodes map directly onto them. This short tutorial instalment implements the Monus (cutoff subtraction) function and demonstrates functions calling functions, as steps towards a full Script compiler.

## Key arguments and claims
- "Following Godel's Axiom, all mathematics that is decidable... can be solved using the following six (6) constructs" — the primitive functions characterising computability via recursive functions.
- Opcode mapping: OP_MUL covers the multiplication function (point 6: `a b OP_MUL`), OP_1ADD the successor function (point 2), OP_ADD addition (point 4: `a b OP_ADD`); remaining to be covered are Monus, the Characteristic and the Identity functions.
- The successor function "acts to form the level-0 foundation of the infinite Grzegorczyk hierarchy of hyperoperations" — from which addition, multiplication, exponentiation and tetration are built.
- Monus computes cutoff subtraction, which never returns a negative value — "In creating mathematical functions and a compiler, it is an extremely valuable function."
- Composition is demonstrated: saved functions load into Monus, extending it to compute Monus[S(x), S(y)] — "Note how we can incorporate functions into functions."
- Pedagogical stance: the worked script is deliberately "more detailed... than is truly needed"; "There are more efficient methods to calculate the Monus. But I shall leave them to the reader."

## How Craig reasons (his model/logic)
Computability-theory framing applied directly to opcodes: Gödel and the Grzegorczyk hierarchy supply the formal warrant, and each primitive is shown to have a Script encoding. The mode is a serialised tutorial — definitions, a worked example, and exercises left to the reader — positioning Script as a foundation for compiler construction rather than a mere spending-condition language. (Note: the body is a short excerpt-style note; much of the referenced script detail appears as images not captured in the text.)

## Where this contradicts BTC-mainstream logic
- **"Script cannot compute":** the mainstream position that Bitcoin Script is intentionally inexpressive (no loops, disabled opcodes, not Turing-complete) is contradicted at the foundations — Craig claims the six primitives of recursive function theory, and hence all decidable computation, are encodable in (BSV's restored) Script.
- **Opcode disabling as permanent:** the 2010-era removal of opcodes such as OP_MUL was treated by BTC as settled design; this tutorial presupposes their restoration and builds a compiler roadmap on them.
- Engagement is implicit rather than polemical: the essay argues by construction, not by naming opponents.

## Notable quotes
- "All mathematics that is decidable (and as such, we may say, anything of any of use in science, engineering, and finance) can be solved using the following six (6) constructs."
- "The successor function acts to form the level-0 foundation of the infinite Grzegorczyk hierarchy of hyperoperations."
- "Note how we can incorporate functions into functions."
- "There are more efficient methods to calculate the Monus. But I shall leave them to the reader."

## Connections
Companion piece to "Finite State Machines in Script" published the same day, and part of the Forth/Script tutorial series promised there (with OP_CodeSeparator foreshadowed for later in 2019). Sits in the BSV era when restored opcodes made this computability programme claimable as a differentiator from BTC.
