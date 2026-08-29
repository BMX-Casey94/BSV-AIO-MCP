# `bsv-sdk` (Rust) cannot run Rúnar covenants: `OP_2MUL` and the Chronicle profile

**Status: STILL PRESENT — and it is NOT an upstream defect.**

| | |
|---|---|
| **Affects** | every `bsv-sdk` release we have tested: 0.1.72, 0.2.89, 0.4.0 |
| **Symptom** | `Spend::validate()` on any Rúnar stateful covenant returns `Err(DisabledOpcode("OP_2MUL"))` / `disabled opcode: OP_2MUL` |
| **Consequence** | the Rust tier cannot script-validate the primary fund path of a stateful contract; those inputs are bucketed `unvalidatable` |
| **Pins** | `packages/runar-rs/tests/mock_broadcast_validation.rs::pin_bsv_sdk_rejects_op2mul_disabled_by_pre_chronicle_policy` and `::pin_runar_stateful_covenant_input_is_unvalidatable_by_bsv_sdk` |

## Correction to the previous write-up

Comments across the Rust tier described this as a **parser desync**: "the
compiled covenant embeds a `0x8d` byte; the parser desyncs and aborts". That
mechanism is wrong, and the correction matters because it changes who owns the
problem.

Walking a deployed covenant as a Bitcoin script — reading each opcode, skipping
each push payload by its declared length — parses cleanly end to end (936 of 936
bytes on the `SatCounter` fixture) and lands on the single `0x8d` byte **at a
genuine opcode boundary**, not inside push data. There is no desync. The script
really does contain `OP_2MUL`, and `bsv-sdk` really is reading it as such.

## Actual mechanism

Rúnar compiles for **Chronicle**, the post-Genesis BSV profile that re-enables
`OP_2MUL` (0x8d) and `OP_2DIV` (0x8e) and lifts the 520-byte element cap. This
is a deliberate, repo-wide target choice:

- `packages/runar-compiler/src/passes/06-emit.ts` maps `'OP_2MUL': 0x8d` with the
  comment `// Chronicle: multiply by 2`;
- `packages/runar-compiler/src/passes/oppushtx-codegen.ts` emits `OP_2MUL` in the
  low-S normalisation of the OP_PUSH_TX signature construction (`delta = 2s - n`);
- the Go tier runs the same scripts by enabling
  `interpreter.WithAfterChronicle()`, which is also what lifts the element cap
  (see `docs/audit/2026-07-oracle-remediation-status.md`).

Because OP_PUSH_TX is how *every* stateful contract binds itself to the spending
transaction, `OP_2MUL` appears in **every** Rúnar covenant.

`bsv-sdk` implements the pre-Chronicle opcode policy, where `OP_2MUL` is
hard-disabled with no config escape. So the two are simply built for different
profiles. Upstream is not wrong; it is targeting a different node.

## Why a pin, and why it is written the way it is

GK-031 (the `hashPrevouts` mis-ordering, now closed — see
`upstream-bsv-sdk-bip143-hashprevouts.md`) turned from a permanent "accepted
risk" into a closed finding for exactly one reason: it had a test that would fail
the day upstream changed. This finding had none — it lived only in prose
comments, so nothing in the repo could ever notice a change.

Two pins now exist:

1. **`pin_bsv_sdk_rejects_op2mul_disabled_by_pre_chronicle_policy`** — a bare
   `<1> OP_2MUL` script through `Spend`, asserting the error message is exactly
   `disabled opcode: OP_2MUL`. Minimal, depends on nothing Rúnar-specific, and
   fails the moment upstream gains Chronicle support or a config escape.
2. **`pin_runar_stateful_covenant_input_is_unvalidatable_by_bsv_sdk`** — a real
   compiled stateful contract, deployed and called through the SDK's own path,
   asserting the covenant input is bucketed `unvalidatable` while the funding
   input still really executes. States the consequence in Rúnar's own terms.

When either goes red, delete the `disabled opcode` tolerated-error class in
`packages/runar-rs/src/sdk/provider.rs::validate_broadcast_tx`, so covenant
inputs are script-validated instead of bucketed.

## What is NOT affected

This bounds only the Rust tier's *off-chain* replay. It says nothing about
whether Rúnar covenants are correct or spendable:

- the Go tier validates the same covenants with `WithAfterChronicle()`;
- byte-level cross-tier conformance goldens cover the compiled output;
- `integration/` broadcasts real stateful spends to a real node.

## If someone wants this closed rather than pinned

Two routes, both outside the Rust SDK:

1. Upstream adds an opcode-policy flag (the Go SDK's `WithAfterChronicle()` is
   the precedent). Then delete the carve-out.
2. Rúnar stops emitting `OP_2MUL` in OP_PUSH_TX codegen — `<1> OP_2MUL` is
   `OP_DUP OP_ADD` in pre-Chronicle opcodes. **This is a byte-moving codegen
   change across all seven tiers** and would invalidate every checked-in golden,
   so it is not a Rust-tier decision and must not be made as one.
