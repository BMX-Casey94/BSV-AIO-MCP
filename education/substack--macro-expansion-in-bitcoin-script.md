---
title: "Macro Expansion in Bitcoin Script"
date: 2025-06-11
era: substack
themes: [script-technical, wallets-keys, protocol-immutability]
source: summaries/macro-expansion-in-bitcoin-script.md
---

# Macro Expansion in Bitcoin Script — core principles

- **The wallet compiles; the node verifies.** Symbolic computation belongs in the wallet. The node remains a deterministic verifier of finite acyclic state transitions. Macro tokens never reach the network.
- **Main and alt stacks are a 2-PDA.** They simulate the two halves of a Turing tape, provided every control path is statically bounded and unrolled. Script’s constraints — no OP_JUMP, OP_CALL or OP_LOOP — are honoured, not circumvented.
- **Hygienic macros expand to 2009 opcodes.** A canonical family (OP_XSWAPₙ, OP_XDROPₙ, OP_XROTₙ, OP_HASHCAT, LOOP[n]) expands deterministically into legacy bytecode. Expressiveness requires no consensus change.
- **You write the loop once and emit it many times.** LOOP[n]{B} concatenates B(i) for i = 0…n−1. The node interpreter sees only a static script.
- **Expansion is total, finite and sound.** Macros must be total, finitely expanding, opcode-valid, stack-sound and non-interactive; the dependency graph must be acyclic. Soundness follows by structural induction on a stack algebra.
- **Error handling is refusal to emit.** Fail-fast is the default. Consensus and policy bounds (script size, opcode count, stack depth, 520-byte elements, minimal-data) are enforced at compile time.
- **Both IF branches must leave the same height.** Branch-height consistency at OP_ENDIF is checked by symbolic execution before anything is signed.
- **Builds are deterministic and auditable.** A contract.yml manifest records source hash, macro version, compiler version, timestamp and script hex. An auditor rebuilds the hex byte-for-byte. Only legacy opcodes are emitted, so contracts remain compatible across node versions.
- **Bitcoin is intentionally total over finite symbolic space.** Relocating complexity to the wallet compiler leaves miners validating austere, original opcodes — expressive contracts with an immutable protocol.
