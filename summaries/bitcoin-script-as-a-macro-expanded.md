---
title: "Bitcoin Script as a Macro-Expanded Turing Framework: A Compile-Time Loop Unrolling Architecture for Deterministic Contract Execution"
date: 2025-06-11
slug: bitcoin-script-as-a-macro-expanded
url: https://singulargrit.substack.com/p/bitcoin-script-as-a-macro-expanded
themes: [script-technical, btc-critique, protocol-immutability]
---

# Bitcoin Script as a Macro-Expanded Turing Framework: A Compile-Time Loop Unrolling Architecture for Deterministic Contract Execution
**Date:** 2025-06-11 | **URL:** https://singulargrit.substack.com/p/bitcoin-script-as-a-macro-expanded
**Subtitle:** A Theoretical and Practical Architecture for Simulating Turing-Complete Logic over Finite State Machines

## Core thesis
Bitcoin Script, modelled as a two-stack pushdown automaton (2PDA) and paired with a compile-time macro expander (the `--macro-unroll-loops` flag), achieves finite-space Turing completeness: any bounded computation can be materialised as a flat, deterministic, statically verifiable stream of legacy opcodes. Iteration is relocated from runtime to compile time — "Temporal iteration becomes spatial duplication" — so contracts gain Turing-equivalent expressiveness without loops, jumps, new opcodes or any consensus change.

## Key arguments and claims
- 2PDA equivalence: a deterministic two-stack PDA simulates an arbitrary Turing machine (Ginsburg–Greibach; Hopcroft–Ullman) by splitting the tape at the head, the left half reversed on Stack 1 and the right half on Stack 2. Script's main stack 𝕊 and alt stack 𝔄 supply exactly this; the interpreter configuration is ⟨pc, 𝕊, 𝔄⟩, and in BSV the only size bound is the block size σ ≤ 4 GiB.
- BTC's 2010–2013 "restriction patches" — the 201-opcode cap, 10 kB script-size limit, and disabling of OP_MUL, OP_DIV, OP_MOD, OP_LSHIFT, OP_RSHIFT, OP_AND — "amputated the expressive arm of the 2PDA"; BSV is presented as retaining the original 2009 opcode set and hence the full construction.
- Compiler pipeline: Source → Lexer → Macro Expander → Parser → AST → Static analyser → Code Emitter. Macros are α-hygienic (De Bruijn indices prevent capture); expansion is a single terminating pass; a soundness theorem (proved by induction on concatenation) guarantees the emitted word realises the macro's declared stack contract.
- Worked examples: LOOP(3, i ↦ [OP_PUSH(i)]) expands to OP_0 OP_1 OP_2; square_macro (OP_i OP_DUP OP_MUL); parity_macro with static conditionals; nested loops as Cartesian products; accumulator chains; alt-stack reversal; shift macros emulating disabled OP_LSHIFT as multiplication by 2ᵏ.
- Missing-opcode emulation: constant folding (push i·i), multiplication by repeated addition (linear in the operand), bit tests via shifts and modular reduction; the compiler aborts gracefully when a construct is inexpressible within bounds.
- Replay semantics: "the script is a witness of what has already been computed" — execution re-verifies a statically known trace. Full stack traces are generated at compile time, and a reverse mapping (opcode index → macro name, iteration, source line) enables decompilation and legal-grade audit.
- Circuit analogy: a TM running t(n) steps maps to a Boolean circuit family of size ∝ t(n)·log t(n); a macro-expanded script *is* such a circuit — "A Turing machine performs the computation; a Script records the computation."
- Security: post-expansion scripts contain no OP_IF ambiguity, jumps or recursion, eliminating reentrancy, gas exhaustion, infinite loops and client divergence; "The DAO bug on Ethereum… cannot even be expressed in a macro-expanded Bitcoin script."
- Practical limits: script size grows as |Π| = k·n (multiplicatively for nested loops); miner policy imposes a soft τ ≈ 10 MiB ceiling (~10 million 1-byte opcodes); mitigations include chained contracts, Merkleised scripts with selective branch revelation, and meta-virtualisation (Rule 110, tag systems).
- Advanced constructs sketched: finite-state escrows, token ledgers without global state, payment channels, DLCs with enumerated oracle attestations, zero-knowledge-style verification circuits, and programmable proof-of-work predicates.
- Sections 13–15 formalise composition (contracts as morphisms in a monoidal category with typed schemas M : S_in → S_out) and addresses as macro handles: P2PKH/P2SH/P2WSH/Taproot are hash commitments to templates; wallets manage descriptors (TemplateName, VersionTag, ParamVector) with chk = HASH160(π).
- Appendix A is candid about scope: "Turing-complete" here always means bounded-tape, finite-trace; the 2PDA stacks are logically unbounded but physically bounded by the transaction payload and miner policy.

## How Craig reasons (his model/logic)
Computability theory and compiler engineering, presented with formal apparatus (automata definitions, expansion rules, a soundness proof) and worked code. The philosophical move is to reframe the Turing-completeness debate as a category error: since every physically realisable computation halts, the demand for unbounded runtime looping is "the myth of infinite computation", and bounded completeness is the only kind that exists.

## Where this contradicts BTC-mainstream logic
- The mainstream claim that "Script is not Turing complete" is dismissed as "misdirection", not humility.
- Core's opcode disabling and caps are characterised as amputation; BSV is "the authentic protocol lineage".
- Ethereum's EVM — runtime branching, gas metering, halting dependence — is treated as the cautionary counter-model to static, auditable expansion.
- Soft miner-policy limits are acknowledged as economic, not protocol, bounds — against the "hard caps forever" ethos.

## Notable quotes
- "It is not Bitcoin Script that fails to be Turing-complete—it is the myth of infinite computation that fails."
- "To deny its Turing power is not humility, but misdirection."
- "The script becomes a cryptographic witness to its own correctness."
- "In short: structure lives at the edge, certainty lives in the core."

## Connections
The compiler-flag-focused twin of "Macro Expansion in Bitcoin Script" (same 2PDA thesis, here with the fuller security analysis and circuit analogy); together they supply the theoretical machinery that "Scripted Supply" assumes for on-chain commercial logic.
