---
title: "The Builder's Week: A Working Bitcoin Stack Appears, One Repository at a Time"
era: substack
date: 2026-06-01
slug: the-builders-week-a-working-bitcoin
themes: [micropayments, audit-accounting, script-technical, privacy]
source: summaries/the-builders-week-a-working-bitcoin.md
---

# The Builder's Week — core principles

- **Overlays settle in whole satoshis.** A bonded sub-satoshi channel meters micro-units off-chain; settlement reconciles to whole satoshis by a deterministic largest-remainder method that preserves the total exactly and writes no fractional output.
- **Anti-cheating is economic, not script-based.** Each participant posts a fixed one-satoshi bond, forfeited to the honest parties on a stale broadcast. Risked capital stays at one satoshi regardless of payment size or path length.
- **Timing is enforced at transaction level.** OP_CHECKLOCKTIMEVERIFY and OP_CHECKSEQUENCEVERIFY are no-ops on post-Genesis BSV. nLockTime and nSequence under the original replacement rule carry the load that Lightning's in-script penalty cannot.
- **Tests fail inside the real interpreter.** Negative tests must fail in the Script interpreter with Genesis rules on, not in wrapper guards. A guard tells you your guard works; the interpreter failing tells you the chain would reject it.
- **Verifiable accounting anchors Merkle proofs to the header.** Inclusion rides as pushdata in a live spendable script, never OP_RETURN, keeping evidence inside the chainable transaction graph. Selective disclosure is the privacy: sibling hashes stay opaque.
- **Audit is examinable truth, not confidence about hidden things.** The system proves inclusion, integrity, selective disclosure and arithmetic — not occurrence, classification, completeness or legal enforceability. Garbage in remains garbage — anchored, provable, and still garbage.
- **On-chain expiry is revocation decided by no one.** Overlay rekeying derives keys from position plus seed; an unspent output past its expiry is revocation — a fact written on the chain, verifiable by anyone. Access does not depend on a platform deciding you still belong.
- **Every game event can be a signed transaction.** Dealerless card state is a committed UTXO with exactly two successors — cooperative and timeout-default — so self-interest and honesty point the same way.
