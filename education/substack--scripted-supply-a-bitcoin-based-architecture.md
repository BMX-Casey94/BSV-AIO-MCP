---
title: "Scripted Supply: A Bitcoin-Based Architecture for EDI and On-Chain Commerce"
date: 2025-06-10
era: substack
themes: [script-technical, intermediaries, audit-accounting, tokenisation]
source: summaries/scripted-supply-a-bitcoin-based-architecture.md
---

# Scripted Supply — core principles

- **The transaction is the payment.** The output is the settlement, the script is the agreement, and the block is the proof. Messaging systems encode declarations; Bitcoin encodes commitment.
- **A valid message can still be a lie.** EDI and REST APIs are encodings, not protocols of truth. No algorithm inside them can decide whether a well-formed purchase order is true. Commerce needs a state-based substrate in which every event is a provable, irreversible transition bound to cryptographic identity and time.
- **The UTXO is tokenised commercial state.** A delivery token spendable exactly once, enforced by consensus rather than policy, closes “authorisation drift” such as the double-pick of a cancelled invoice.
- **Script is predicate logic, not a VM.** Locking script is the proposition, unlocking script the proof. Each script evaluates as a DFA; the main-plus-alt-stack pair is a 2-PDA, so Turing-equivalent computation holds across chained transactions even though a single script never loops.
- **OP_RETURN is a tombstone.** It is legitimate only for non-control metadata. Visibility is not validity; presence is not proof. Token layers built on unspendable data blobs sit outside consensus.
- **Bitcoin ratifies facts.** It is stateless and side-effect-free. Where a reentrant, gas-metered simulation engine executes code, Bitcoin records what occurred.
- **Coordinate off-chain, enforce on-chain.** IP-to-IP messaging (ECDH, mutual TLS, Noise) handles coordination; the ledger anchors enforcement. Warehouse terminals watch UTXO state via SPV.
- **Pre-signed trees prune futures.** Mining one branch of a transaction tree renders sibling futures provably unspendable — path-pruned automata rather than mutable backend records.
- **On-chain commerce collapses the cost stack.** Legacy commerce pays protocol, software, verification, reconciliation, audit and legal layers; on-chain the residual is the transaction fee plus trivial overhead.
