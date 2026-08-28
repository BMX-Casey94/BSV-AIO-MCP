---
title: "Quantum-Ineffective Bitcoin: A Script-Level, Hash-Anchored Defence Against Hypothetical Quantum Key Recovery"
date: 2025-09-09
slug: quantum-ineffective-bitcoin-a-script
url: https://singulargrit.substack.com/p/quantum-ineffective-bitcoin-a-script
themes: [quantum-scepticism, script-technical, security-economics, wallets-keys]
---

# Quantum-Ineffective Bitcoin: A Script-Level, Hash-Anchored Defence Against Hypothetical Quantum Key Recovery
**Date:** 2025-09-09 | **URL:** https://singulargrit.substack.com/p/quantum-ineffective-bitcoin-a-script
**Subtitle:** Rendering Shor-enabled theft economically futile through value fragmentation and mandatory hash preimages in standard Bitcoin Script

## Core thesis
Even granting a fault-tolerant quantum computer that can recover ECDSA private keys from exposed public keys (Shor-level capability), Bitcoin remains secure as digital cash without any protocol change. Two defences suffice: fragmenting value across many low-value UTXOs so each target is worth less than the per-key recovery cost, and requiring in Script that every spend reveal committed hash preimages in addition to a signature. Signatures are quantum-fragile; hashes are not — so key recovery alone never opens the lock, and the economics of theft are strictly negative.

## Key arguments and claims
- Shor's algorithm gives polynomial-time discrete logarithm extraction against ECDSA once a public key is visible, but this "does not generalise to one-way hash functions". Grover-type search yields at most a quadratic speed-up: an n-bit hash preimage falls from ~2^n to ~2^(n/2), leaving SHA-256 at roughly 2^128 quantum queries — impractical once error-correction overhead and circuit depth are counted.
- Collision attacks (reducible to ~2^(n/3)) are irrelevant because the lock demands a specific preimage of a fixed commitment, not any colliding pair. Multi-target batching gives only a √T improvement, leaving per-preimage work near 2^(n/2).
- Economic model: per-target expected profit is E[π] = q·V_i − C_shor − F_att, where C_shor is all-in per-key recovery cost, q the probability the attacker's conflicting spend confirms first, and F_att the fee burned on failure. Break-even is V* = (C_shor + F_att)/q; wallet policy simply enforces V_max < V*. Attacking N outputs scales losses linearly — "parallelism merely accelerates the burn rate".
- Timing geometry: with key-once hygiene, the public key first appears at broadcast, so the attacker must satisfy τ_shor + τ_craft+prop < Δ_confirm while also overcoming miners' first-seen preference. A k-input transaction forces ~k·τ_shor of quantum runtime inside one confirmation window.
- Concrete Script templates are given in Forth-style pseudocode: a key-hidden P2PKH variant requiring one 32-byte secret s to satisfy SHA-256, HASH160 and RIPEMD-160 commitments before OP_CHECKSIG; dual-secret variants using OP_CAT to bind SHA-256(s‖t), OP_SUBSTR to fix s inside t at offset k, and an OP_MUL arithmetic latch (n1·n2 = P) to force a uniquely shaped witness.
- Wallet algorithm: on receipt, fan out amount A into k = ⌈A/V_max⌉ outputs, each with a fresh keypair and fresh secrets derived as s_u = HMAC-SHA-256(K_master, "s" ‖ u_nonce); payments execute as "send-many" sequences (never consolidation); change is immediately re-fragmented; revealed secrets are permanently retired; preflight re-hashing must pass before signing, which happens last.
- An HMAC-anchored reverse hash chain provides auditable one-time tokens: master commitment M = SHA-256(HMAC(K, "master")), per-epoch seed S_e, a 10,000-step chain with published anchor A_e = y_{e,0}, and on-chain binding of each coin to D_{e,i} = SHA-256(e ‖ i ‖ y).
- Worked examples use V_max = 2,000,000 sat: receiving 13,745,000 sat yields six full outputs plus one of 1,745,000 sat; a 25,000,000 sat payment is split across four transactions bounded by I_max = 8 inputs and O_max = 6 outputs.
- Edge cases are enumerated and closed: key reuse and secret reuse (banned by policy), wait-and-snipe copying of s (useless without the key), template downgrade/replay, cross-transaction mix-and-match, miner collusion and reorganisations, and partial off-chain secret leakage (bounded to one sub-V_max coin).

## How Craig reasons (his model/logic)
Formal threat modelling married to expected-value economics: grant the adversary maximal quantum capability, then show the attack fails on cryptographic hardness (preimage bounds), on timing (a compound latency race), and on profit (negative drift per trial). The engineering constraint is deliberate — only baseline, pre-2010 Script opcodes, straight-line programs, no loops, timelocks or covenants — demonstrating the original protocol already contains the defence.

## Where this contradicts BTC-mainstream logic
- Rejects the mainstream premise that quantum threat necessitates new post-quantum signature schemes, address-format migrations or soft-forked opcodes; existing hash opcodes (OP_SHA256, OP_HASH160, OP_RIPEMD160, OP_SHA1, OP_HASH256) plus OP_MUL/OP_CAT suffice.
- Inverts standard UTXO hygiene advice: instead of consolidating small outputs (uneconomic under BTC's fee market), the wallet should perpetually fragment into tiny denominations — a prescription only coherent on a cheap, high-throughput chain, implicitly inditing BTC's manufactured fee market.
- Contradicts the "store your coins and never move them" custody norm: security here depends on active wallet policy (send-many, fresh secrets, immediate broadcast), not on cold storage of large outputs.
- Recasts quantum panic as an economics problem: the defender needs only to keep coin face value below a moving break-even, making the attacker's device "a heat source that converts capital into waste".

## Notable quotes
- "Signatures are quantum-fragile; modern hashes are not—quantum algorithms offer at most a square-root speed-up for preimage search."
- "Per-key attack cost > per-coin value ⇒ negative expected value per attempt. Multiply attempts, multiply losses."
- "The race is therefore lost in design, not merely in parameter tuning."
- "Recovering a key is not enough."

## Connections
Extends his recurring argument that original Bitcoin Script (including OP_CAT, OP_SUBSTR, OP_MUL) is already sufficient for sophisticated contracts, and dovetails with his micropayments advocacy: the fragmentation and send-many execution model presupposes the low-fee, high-throughput chain he argues BTC abandoned.
