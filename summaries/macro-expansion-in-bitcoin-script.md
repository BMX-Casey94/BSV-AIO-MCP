---
title: "Macro Expansion in Bitcoin Script: A Two-Stack Automaton Framework for Turing-Equivalent, Wallet-Side Contract Compilation"
date: 2025-06-11
slug: macro-expansion-in-bitcoin-script
url: https://singulargrit.substack.com/p/macro-expansion-in-bitcoin-script
themes: [script-technical, wallets-keys, protocol-immutability]
---

# Macro Expansion in Bitcoin Script: A Two-Stack Automaton Framework for Turing-Equivalent, Wallet-Side Contract Compilation
**Date:** 2025-06-11 | **URL:** https://singulargrit.substack.com/p/macro-expansion-in-bitcoin-script
**Subtitle:** Formal Models, Stack Algebra, and Deterministic Compilation Techniques for Expressive, Protocol-Compliant Smart Contracts

## Core thesis
A complete, formally specified wallet-side compilation strategy for Bitcoin Script: a canonical family of hygienic macros (OP_XSWAPₙ, OP_XDROPₙ, OP_XROTₙ, OP_HASHCAT, LOOP[n]) expands deterministically into legacy 2009 opcodes, with correctness proved by a formal stack algebra, so that expressive, Turing-equivalent (over finite bounded traces) contracts require no consensus change and miners validate nothing but austere bytecode.

## Key arguments and claims
- 2PDA framing (Hopcroft & Ullman): main and alt stacks simulate the two halves of a Turing tape; equivalence holds provided every control path is statically bounded and unrolled. Script's constraints (~10,000-byte scripts; no OP_JUMP/OP_CALL/OP_LOOP) are honoured, not circumvented.
- Division of labour: "The wallet becomes the domain for symbolic computation. The node remains a deterministic verifier of finite acyclic state transitions." Expansion is total, stateless and reproducible; macro tokens never reach the network.
- Formal macro definition M = ⟨σ, π, ρ⟩ with ρ: ℤᵏ → Ω⁺ over the 2009 opcode set Ω; required properties: totality, finite expansion, opcode validity, stack soundness, non-interactivity; the macro dependency graph must be acyclic (no mutual recursion).
- Canonical family with exact expansions: OP_XSWAPₙ → ⟨n−1⟩ OP_PICK ⟨n−1⟩ OP_ROLL OP_SWAP OP_DROP (O(n) size); OP_XDROPₙ → ⟨n−1⟩ OP_ROLL OP_DROP; OP_XROTₙ → ⟨n−1⟩ OP_ROLL (so OP_XROT₃ ≡ OP_ROT); OP_HASHCAT → OP_DUP OP_SHA256 OP_SWAP OP_CAT on BSV, or a precomputed PUSHDATA literal of x‖SHA256(x) where OP_CAT is disabled; LOOP[n]{B} → concatenation of B(i) for i = 0…n−1, |W| = n×|B|.
- Stack algebra: each opcode is a rewrite rule f_op; a macro's transformer is Fᵂ = f_opₖ ∘ … ∘ f_op₁; expansion is a prefix rewrite S = P ⧺ R ↦ Q ⧺ R; soundness follows by structural induction; macros form a monoid (closure, associativity, identity = empty word), with a Curry–Howard-style analogy between stack contracts and function types.
- The text is candid about engineering fallibility: one worked OP_XSWAP₃ trace fails to reach its stated postcondition, prompting the parenthetical admission that "symbolic simulation tools or formal verification frameworks must be used"; several alternative XSWAP derivations appear across sections (PICK/ROLL/SWAP/DROP; an alt-stack detour; an OVER/ROT/NIP sequence in Appendix A).
- Push encoding: OP_0–OP_16 and OP_1NEGATE for small integers, direct pushes ≤ 75 bytes, PUSHDATA1/2/4 beyond; ScriptNum little-endian sign-magnitude; the minimal-data rule (SCRIPT_VERIFY_MINIMALDATA) and the 520-byte MAX_SCRIPT_ELEMENT_SIZE are enforced at compile time.
- Boundedness and errors: consensus limits ≤ 10,000 bytes and ≤ 10,000 opcodes, ≤ 201 opcodes under standard relay policy, ≤ 1,000 stack elements (main and alt tracked separately); five error categories (arity, parameter type, template instantiation, size overflow, stack growth); "error handling is not recovery—it is refusal to emit", with fail-fast the default and a speculative mode for debugging.
- Verification pipeline: arity/signature check → single-pass expansion → symbolic execution by abstract interpretation → branch-height consistency (both OP_IF branches must leave identical stack height at OP_ENDIF) → cryptographic literal injection for disabled opcodes → compositional correctness. Artefacts emitted: the expanded script, a stack-trace summary, a source-to-bytecode map, and an optional hash-chained proof log.
- Deployment workflow: an augmented assembly dialect for authors; deterministic builds recorded in a contract.yml manifest {source_hash, macro_version, compiler_version, build_timestamp, script_hex}; RFC 6979 deterministic signing; an auditor "verify mode" rebuilds the hex byte-for-byte; only legacy opcodes are emitted, so contracts are forward- and backward-compatible across node versions.
- Positioning: higher-level languages (Ivy, sCrypt) can adopt macro contracts as primitive types; future directions include Coq/Isabelle/Lean integration (analogised to CompCert/CakeML) and "deterministic build → deterministic law" for evidentiary use.

## How Craig reasons (his model/logic)
Formal language and automata theory married to compiler-verification discipline: everything is specified as tuples, transfer functions, invariants and proof sketches, then operationalised as a build pipeline with manifests and reproducibility guarantees. The stance is engineering-pragmatic — feature flags target both BTC (emulating disabled opcodes) and BSV (native OP_CAT/OP_MUL) — while insisting the protocol itself never changes.

## Where this contradicts BTC-mainstream logic
- "Strict BTC nodes" are treated as a degraded compilation target requiring constant-folding emulation of disabled opcodes; BSV is the complete environment.
- Expressiveness is achieved with zero protocol change, rejecting both Core's ossification-by-caution and the new-opcode/soft-fork lobby.
- Terminological jab: "'full node' is common in BTC literature. In the context of original-rule Bitcoin, the correct description is simply validation node or miner."

## Notable quotes
- "You write the loop once, but emit it many times—fully expanded, and verifiable by the node interpreter as a static script."
- "Bitcoin, when understood in this framework, is not underpowered—it is intentionally total over finite symbolic space."
- "error handling is not recovery—it is refusal to emit."
- "By relocating complexity to the wallet compiler and leaving miners to validate only austere, legacy opcodes, the scheme reconciles expressive contract engineering with the immutability of the original protocol."

## Connections
The monograph-length twin of "Bitcoin Script as a Macro-Expanded Turing Framework" (same 2PDA thesis; here the full macro algebra, error model and wallet pipeline); it underwrites the contract-engineering claims of "Scripted Supply".
