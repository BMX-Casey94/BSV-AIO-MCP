# Upstream defect: `bsv-sdk` (Rust) built `hashPrevouts` in the wrong order

**Status: FIXED UPSTREAM — closed, no issue needs filing.**

| | |
|---|---|
| **Affected** | `bsv-sdk` <= 0.1.x (last version we observed it on: 0.1.72) |
| **Fixed in** | `bsv-sdk` 0.2.89 — also verified fixed on 0.4.0 |
| **Found** | 2026-08-06, while bringing the Rust tier's mock provider to fail-closed |
| **Closed** | 2026-08-17, by requiring `bsv-sdk = ">=0.2.89, <0.3"` in `packages/runar-rs/Cargo.toml` |
| **Pin** | `packages/runar-rs/tests/mock_broadcast_validation.rs::pin_bsv_sdk_sighashes_every_input_index_correctly` |

## How it was closed

The defect was never bounded by upstream's willingness to fix it — it was
bounded by **our own stale version floor**. `packages/runar-rs/Cargo.toml`
pinned `bsv-sdk = ">=0.1, <0.3"` and the checked-in lockfile held 0.1.72, so a
release that already contained the fix was never resolved. Widening the range
and re-resolving made the pin below go RED on its own:

```
---- pin_bsv_sdk_cannot_sighash_input_index_above_zero stdout ----
bsv-sdk now sighashes input_index > 0 correctly! Remove the `unsupported_index`
carve-out in src/sdk/provider.rs::validate_broadcast_tx and validate ALL known inputs.
```

That is exactly what the pin existed to do. Acting on it:

- the manifest now requires `>=0.2.89` — the fix is a **requirement**, not a
  lockfile accident that the next `cargo update` could undo;
- `validate_broadcast_tx` no longer skips inputs at index > 0. Every input whose
  outpoint the provider knows is executed, at every index;
- the `unsupported_index` bucket is **deleted** from
  `BroadcastValidationReport` rather than left at a permanent 0 with a comment
  describing a defect that no longer exists;
- the pin was rewritten to assert the CORRECT behaviour, so it now goes red on a
  regression instead of on a fix.

Net effect: the Rust tier's fail-closed broadcast gate got **stronger**.
Multi-input transactions were previously validated only at input 0; they are now
validated in full.

`0.4.0` was evaluated too. It fixes the same defect and passes the same suite,
but `packages/runar-rs` path-depends on `compilers/rust`, which still requires
`<0.3`; taking 0.4.0 in this crate alone makes cargo build two copies of
`bsv-sdk` and leaves the compiler crate's `Spend` on a different interpreter than
the SDK's. `>=0.2.89, <0.3` keeps the whole in-repo Rust graph on ONE bsv-sdk.
Moving to 0.4.0 is a separate change that must bump `compilers/rust` in the same
commit.

---

## Historical record — the defect as it was

Kept because it is the reproducer any future regression should be checked
against, and because the pin test's assertions only make sense next to it.

## Summary

`Spend` computes the BIP-143 `hashPrevouts` as **"the current input's outpoint
first, then the other inputs"**, rather than in transaction input order. Those
two orderings coincide only when `input_index == 0`.

Consequence: a **valid** signature over a correctly-constructed BIP-143 preimage
for any input at index > 0 evaluates to **false**. Conversely, a signature that
`Spend` *does* accept at index > 0 is one no other implementation — and no node —
will accept.

## Why we are confident it is upstream, not us

The signature in the reproducer is produced by **`bsv-sdk`'s own `LocalSigner`**,
so both sides of the comparison come from the same crate. The same transaction,
same key, same input index is **accepted by the Go tier's `go-sdk` script
interpreter** (`github.com/bsv-blockchain/go-sdk/script/interpreter`), which is
an independent implementation of the same consensus rules.

So: two implementations disagree, one of them agrees with the network, and it is
not this one.

## Reproduction

1. Build a transaction with **two** P2PKH inputs and one output.
2. Sign **input 1** (not input 0) with `bsv-sdk`'s `LocalSigner`, using the
   standard BIP-143 preimage for that input.
3. Evaluate input 1 with `bsv::script::spend::Spend`.

**Expected:** script succeeds — the signature is valid for that input.
**Actual:** script evaluates to false.

Signing and evaluating **input 0** of the same transaction succeeds, which is the
discriminator: nothing about the key, the script, or the output set changes.

## Root cause

BIP-143 defines `hashPrevouts` as the double-SHA256 of the serialized outpoints
of **all** transaction inputs, **in transaction order**:

```
hashPrevouts = dSHA256( outpoint(vin[0]) || outpoint(vin[1]) || ... )
```

The order is a property of the transaction, not of the input being signed — it is
identical for every input. `Spend` instead reassembles the input list as
`[current_input] ++ other_inputs`, which equals transaction order **iff** the
current input is already first.

The same reasoning applies to `hashSequence`, which is built from the same
reassembled list — worth checking in the same pass.

## Suggested fix

Reassemble the input list by **splicing the current input back at its original
index** rather than prepending it, before computing `hashPrevouts` /
`hashSequence`. For reference, `@bsv/sdk` (TypeScript) does exactly this in
`TransactionSignature.formatBip143`:

```js
inputs.splice(params.inputIndex, 0, currentInput)
```

## Impact for downstream users

Any consumer signing or validating a **multi-input** transaction is affected. In
practice this means:

- multi-input spends cannot be validated with this crate beyond input 0
- a consumer that validates only input 0 and infers the rest is **silently
  weaker** than it appears

In our case it meant our Rust SDK's broadcast validator had to refuse to draw any
conclusion from inputs at index > 0 — see the linked pin, which was written to go
**red** when this is fixed so we could tighten immediately. It did, and we did.

## Related, same crate, same investigation

`Spend::validate()` never returns `false` — every failure path calls
`scriptEvaluationError`, which throws. Downstream `if !spend.validate()` branches
are therefore unreachable. Not a correctness bug, but it invites
"`validate()` returned true, we're fine" reasoning in consumers. Still true on
0.2.89; `validate_broadcast_tx` handles both arms regardless.

The other Rust-tier `bsv-sdk` limitation — `OP_2MUL` rejected by its
pre-Chronicle opcode policy, which blocks script-validation of Rúnar covenants —
is **not** fixed and is **not** an upstream defect. See
`upstream-bsv-sdk-op2mul-chronicle.md`.

---

## Lesson worth keeping

A finding recorded as an "unfixable upstream defect" was, for some unknown span
of time, already fixed upstream. Nothing in the repo would have noticed: the pin
could only fire against the version the lockfile chose, and the lockfile was
never re-resolved. **A pin on third-party behaviour is only as live as the
dependency range it runs under.** Any "accepted upstream risk" should carry a
recurring re-resolution check, not just a test.
