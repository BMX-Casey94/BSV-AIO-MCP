---
title: "Scripted Supply: A Bitcoin-Based Architecture for EDI and On-Chain Commerce"
date: 2025-06-10
slug: scripted-supply-a-bitcoin-based-architecture
url: https://singulargrit.substack.com/p/scripted-supply-a-bitcoin-based-architecture
themes: [script-technical, intermediaries, audit-accounting, tokenisation]
---

# Scripted Supply: A Bitcoin-Based Architecture for EDI and On-Chain Commerce
**Date:** 2025-06-10 | **URL:** https://singulargrit.substack.com/p/scripted-supply-a-bitcoin-based-architecture
**Subtitle:** EEI—Electronic Exchange Instructions

## Core thesis
EDI and its modern API successors are message-based systems that encode declarations, not executions — a syntactically valid EDI message can still be a lie, and no intra-system mechanism can tell the difference. Commerce therefore requires a state-based substrate in which every event is a provable, irreversible state transition bound to cryptographic identity and time. Bitcoin (BSV), with its restored Script system, is presented as the only existing machine that does this: the transaction is the payment, the UTXO is tokenised commercial state, and the ledger is the authoritative record of what actually occurred.

## Key arguments and claims
- EDI (ANSI X12, UN/EDIFACT) is "an encoding convention", not a protocol: an X12 850 purchase order is a regular language parseable by a DFA, but no algorithm within EDI can decide membership of the subset of truthful messages — "a correct EDI message may encode a lie".
- Value Added Networks (1980s) are "epistemologically passive" centralised relays able to delay, reorder, omit or modify messages; they "monetise position" and profit from the friction they claim to reduce.
- Cloud APIs and REST/JSON modernisation are "an aesthetic improvement, not a semantic one": a 200 OK is a trust statement, backend logic is mutable and opaque, and SaaS records (invoices, purchase orders, fulfilment logs) can be retroactively altered.
- Payment is structurally detached from messaging: there is no injective, verifiable, immutable function f: m ↦ p between the message domain (EDI/ERP) and the payment domain (SWIFT, SEPA, ACH, FPS, VisaNet). This bifurcation spawns entire "parasitic" industries — invoice factoring, chargebacks, reconciliation, dispute resolution.
- Cost model: legacy commerce carries C = cₚ + cₛ + cᵥ + cᵣ + cₐ + cₗ (protocol, software, verification, reconciliation, audit, legal); on-chain commerce reduces this to C′ = cₜ + ε (transaction fee plus trivial overhead). Cites World Bank/OECD estimates of 5–10% of global transaction value consumed by documentation, reconciliation and settlement delay, rising to 30% of operational cost in commodities, pharmaceuticals and aerospace.
- Failure-mode case study: the "double pick" — a cancelled invoice is not atomically linked to fulfilment, so the warehouse stages both orders and the customer collects two while paying for one; generalised as "authorisation drift". The BSV remedy is a delivery token modelled as a UTXO spendable exactly once, enforced by consensus rather than policy.
- Script theory: Script is a Forth/PostScript-inspired predicate logic, not a VM; locking script = proposition, unlocking script = proof; each script evaluates as a DFA, while the main-plus-alt-stack pair forms a 2-PDA, so the system achieves Turing-equivalent computation across chained transactions ("a 2PDA is complete over transactions") even though a single script never loops.
- OP_RETURN is "a tombstone": legitimate only for non-control metadata. BTC/Ethereum-style token layers built on unspendable data blobs conflate visibility with verifiability — "Visibility ≠ validity. Presence ≠ proof."
- Ethereum contrast: the EVM is a stateful, reentrant, gas-metered simulation engine (the DAO hack cited as the canonical reentrancy failure); Bitcoin is stateless and side-effect-free — "Where Ethereum executes code, Bitcoin ratifies facts."
- Deployment architecture: off-chain IP-to-IP coordination (ECDH, mutual TLS, Noise) for messaging, on-chain anchoring for enforcement; warehouse terminals and scanners act as validators watching UTXO state via SPV/ElectrumX/Teranode; pre-signed transaction trees form "path-pruned automata" in which mining one branch renders all sibling futures provably unspendable.
- The post is Part I of a planned book: Chapter 4 is promised for 20 June 2025, Part II initially subscriber-only, with a full book via "the Ring" and a line-by-line whitepaper analysis to follow.

## How Craig reasons (his model/logic)
The method is formal automata theory fused with institutional economics. Every system is modelled as a labelled transition system (states, alphabet, δ, q₀, F); EDI fails because no transition function exists, while Bitcoin succeeds because Script *is* δ. Overlaid on this is incentive analysis: VANs, API providers, insurers, auditors and lawyers are cast as a "secondary economy" that monetises the ambiguity the defective substrate produces, and whose costs vanish once enforcement becomes computation.

## Where this contradicts BTC-mainstream logic
- Asserts BTC "amputated" Script (disabled opcodes, the 10,000-byte cap, the 201-opcode limit) and that BSV "restores the original limits and design" — a direct rejection of Core's stewardship of the protocol.
- Rejects the mainstream "smart contract platform" framing outright ("That term is garbage") and treats Ethereum's VM — the industry benchmark for programmability — as structurally unsound.
- Condemns OP_RETURN-based data and token schemes common in the BTC ecosystem as unverifiable commentary outside consensus.
- Replaces the mainstream audit-and-reconcile model of commercial finance with protocol enforcement: "Bitcoin is the court", with jurisdiction "dissolved into protocol".

## Notable quotes
- "EDI does not fail when it transmits incorrect information. It fails when it successfully transmits well-formed lies."
- "The transaction is the payment. The output is the settlement. The script is the agreement. The block is the proof."
- "Bitcoin encodes commitment." / "EDI encodes hope."
- "No rollback. No reversion. No forgiveness."

## Connections
The 2-PDA and compile-time-expansion machinery is developed at full length in the companion essays "Bitcoin Script as a Macro-Expanded Turing Framework" and "Macro Expansion in Bitcoin Script". The demand for provable, attributable state (and the attack on audit-theatre) recurs in "In Praise of Shadowled Ledgers".
