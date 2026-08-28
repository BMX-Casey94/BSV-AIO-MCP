---
title: "Bitcoin Script as a Macro-Expanded Turing Framework"
date: 2025-06-11
era: substack
themes: [script-technical, btc-critique, protocol-immutability]
source: summaries/bitcoin-script-as-a-macro-expanded.md
---

# Bitcoin Script as a Macro-Expanded Turing Framework — core principles

- **Bounded Turing completeness is the only kind that exists.** Modelled as a 2-PDA, Script plus compile-time loop unrolling materialises any bounded computation as a flat stream of legacy opcodes. The demand for unbounded runtime looping is the myth of infinite computation.
- **Temporal iteration becomes spatial duplication.** Loops are expanded at compile time. The script is a witness of what has already been computed; execution re-verifies a statically known trace.
- **Main and alt stacks split the tape.** Stack 1 holds the left half reversed, stack 2 the right half. The interpreter configuration is ⟨pc, 𝕊, 𝔄⟩. In BSV the practical size bound is the block.
- **The original 2009 opcode set is the full construction.** Caps and disabled arithmetic (OP_MUL, OP_DIV, OP_MOD, shifts, OP_AND) amputate the 2-PDA. Restored Script retains the authentic protocol lineage.
- **A Turing machine performs the computation; a Script records it.** A machine running t(n) steps maps to a circuit of size proportional to t(n)·log t(n); a macro-expanded script is that circuit.
- **Post-expansion scripts have no runtime loops.** No OP_IF ambiguity, jumps or recursion: reentrancy, gas exhaustion, infinite loops and client divergence cannot be expressed. The DAO-style bug cannot even be written.
- **Structure lives at the edge; certainty lives in the core.** Wallets manage templates and descriptors; miners validate austere bytecode. Addresses are hash commitments to templates.
- **Miner policy is an economic bound, not a protocol cap.** Script size grows with unrolling; chained contracts, Merkleised scripts and selective branch revelation mitigate it.
- **The script is a cryptographic witness to its own correctness.** Full stack traces at compile time, plus a reverse map from opcode index to macro, iteration and source line, give legal-grade audit.
