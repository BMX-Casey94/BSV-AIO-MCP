---
title: "The Builder's Week: A Working Bitcoin Stack Appears, One Repository at a Time"
date: 2026-06-01
slug: the-builders-week-a-working-bitcoin
url: https://singulargrit.substack.com/p/the-builders-week-a-working-bitcoin
themes: [micropayments, audit-accounting, script-technical, privacy]
---

# The Builder's Week: A Working Bitcoin Stack Appears, One Repository at a Time
**Date:** 2026-06-01 | **URL:** https://singulargrit.substack.com/p/the-builders-week-a-working-bitcoin
**Subtitle:** What ten open-source repositories on a single GitHub account actually do, how they interlock, and why the honest parts matter more than the loud ones.

## Core thesis
Craig reports shipping, in one week, a set of open-source BSV repositories that do in running code what the field "has spent fifteen years promising": bonded sub-satoshi payment channels, a three-repository verifiable-accounting family, an overlay broadcast-encryption layer, and a dealerless card protocol. The governing principle is that a builder's honesty about limits is the strongest evidence for his claims — every component declares its own boundary in ink, and every test fails honestly inside the real script interpreter.

## Key arguments and claims
- bonded-subsat-channel: the user chooses a granularity k (k = 1,000,000 gives millionth-of-a-satoshi micro-units, off-chain only); settlement reconciles micro-unit balances to whole satoshis via Q*, a deterministic largest-remainder method that preserves the total exactly and writes no fractional output.
- Anti-cheating is economic, not script-based: each participant posts a fixed one-satoshi bond, forfeited to the honest parties on a stale broadcast, making cooperative settlement the unique rational outcome; risked capital stays at one satoshi regardless of payment size or path length.
- No in-script timelocks: OP_CHECKLOCKTIMEVERIFY and OP_CHECKSEQUENCEVERIFY are no-ops on post-Genesis BSV, so Lightning's penalty branch "cannot be transplanted: its load-bearing beam is, on this chain, made of air"; timing is enforced at transaction level via nLockTime and nSequence under the original replacement rule.
- Testing discipline: every spend executes through the real Bitcoin Script interpreter with Genesis rules on; negative tests must fail inside the interpreter, not in wrapper guards. The repo ships a self-contained embedded BSV node — wire protocol, proof-of-work header chain, UTXO store, mempool, HD wallet.
- verifiable-accounting (Rust, plus two TypeScript variants): Layer A anchors a record via a Merkle proof to the block header's merkleroot field (patent WO 2022/100946 A1); Layer B shards and indexes proof data so a query returns only the needed fragment (WO 2025/119666 A1) — sibling hashes are opaque, so "the selective disclosure is the privacy."
- Five named accounting equations — invoice total, receivables roll-forward, debit-equals-credit, bank reconciliation, VAT identity — are checked by direct recomputation over disclosed records. Zero-knowledge proofs are deliberately refused: "audit is the production of examinable truth, not the performance of confidence about hidden things."
- verifiable-accounting-chain builds triple-entry accounting on three pillars: a PKI root with deterministic per-ledger-field sub-keys; an ECDH-linked, spend-linked, signed transaction chain in which reordering or dropping a transaction breaks the cryptographic links; and per-field selective disclosure. The Merkle root rides as pushdata in a live spendable script, never OP_RETURN, keeping evidence inside the chainable transaction graph.
- The stated boundary: the system proves inclusion, integrity, selective disclosure and arithmetic — not truth, occurrence, classification, completeness, or legal enforceability. "Garbage in remains garbage — anchored, provable, and still garbage." The adversarial verification mode is default; the trusted-operational mode is opt-in and never accepted on the audit path.
- overlay-broadcast: a Logical Key Hierarchy key-graph (patent GB 2623780 B) cuts revocation to O(log n); three rekeying strategies (user-, key-, group-oriented); the overlay on BSV data-storage transactions (EP 4 046 048 B1) re-derives keys from position plus seed, so only positions cross the wire — "seed-isolated signalling". AES-256-GCM AEAD, ECIES over secp256k1, FROST/GG20 threshold custody; "an unspent output past its expiry is revocation" — an on-chain fact decided by no one.
- cardtable: transaction-native mental poker in which every game event is a signed transaction and every state a committed UTXO with exactly two successors — cooperative and timeout-default; verifiable shuffle, commit-reveal entropy, encrypted card UTXOs; first target game In-Between (Acey-Deucey); tokens carry no value; the full multi-card game is partial.

## How Craig reasons (his model/logic)
Engineering constructivism under declared limits: build in the open, explain every term, make tests fail honestly where reality lives, grade key-management to flight-software standards (NPR 7150.2, JPL "Power of Ten"), and encode boundaries in source "so that no one — including a future, more excitable version of me — can quietly paper over it." Incentive design replaces appeals to virtue: arrange matters so self-interest and honesty point the same way.

## Where this contradicts BTC-mainstream logic
- Lightning's anti-cheat penalty depends on in-script timelock opcodes that are no-ops on post-Genesis BSV; the bonded channel is the native alternative — fixed one-satoshi risk versus capital that grows with routed throughput.
- Explicit allegiance: "When I say Bitcoin, I mean the original protocol… That is BSV… There is no BTC code here, and there will never be."
- Pushdata in spendable scripts is preferred to the BTC-era OP_RETURN "dead-end", keeping evidence inside the spendable, chainable transaction graph.

## Notable quotes
- "A builder's honesty about limits is the strongest evidence for his claims."
- "A guard tells you your guard works. The interpreter failing tells you the chain would reject it."
- "Garbage in remains garbage — anchored, provable, and still garbage."
- "Access does not depend on a platform deciding you still belong. It depends on whether an output was spent in time — a fact written on the chain, verifiable by anyone, decided by no one."

## Connections
The working counterpart to three companion essays: the channel instantiates "The Integer and the Idol"'s claim that overlays settle in whole satoshis; the accounting repositories implement (and constrain) "The Arithmetic of Trust"; cardtable operationalises "The Abolition of the Dealer".
