---
title: "Quantum-Ineffective Bitcoin: A Script-Level, Hash-Anchored Defence Against Hypothetical Quantum Key Recovery"
era: substack
date: 2025-09-09
slug: quantum-ineffective-bitcoin-a-script
themes: [quantum-scepticism, script-technical, security-economics, wallets-keys]
source_summary: summaries/quantum-ineffective-bitcoin-a-script.md
url: https://singulargrit.substack.com/p/quantum-ineffective-bitcoin-a-script
---

# Quantum-Ineffective Bitcoin: A Script-Level, Hash-Anchored Defence Against Hypothetical Quantum Key Recovery — core principles

- **Grant the adversary full Shor capability — Bitcoin still needs no protocol change.** Two defences suffice: fragment value across many low-value UTXOs so each target is worth less than the per-key recovery cost, and require in Script that every spend reveal committed hash preimages in addition to a signature.
- **Signatures are quantum-fragile; hashes are not.** Shor's algorithm extracts discrete logarithms from exposed public keys but does not generalise to one-way hash functions; Grover-type search gives at most a quadratic speed-up — an n-bit hash preimage falls from ~2^n to ~2^(n/2), leaving SHA-256 at roughly 2^128 quantum queries, impractical once error-correction overhead and circuit depth are counted.
- **Collision attacks are irrelevant to preimage locks.** The lock demands a specific preimage of a fixed commitment, not any colliding pair; multi-target batching yields only a √T improvement, leaving per-preimage work near 2^(n/2).
- **The defence is economic: keep face value below break-even.** Per-target expected profit E[π] = q·V_i − C_shor − F_att, where C_shor is all-in per-key recovery cost, q the probability the attacker's conflicting spend confirms first, and F_att the fee burned on failure. Break-even is V* = (C_shor + F_att)/q; wallet policy enforces V_max < V*, and attacking N outputs scales losses linearly — "parallelism merely accelerates the burn rate".
- **The timing race is lost by design.** With key-once hygiene the public key first appears at broadcast, so the attacker must satisfy τ_shor + τ_craft+prop < Δ_confirm while overcoming miners' first-seen preference; a k-input transaction forces ~k·τ_shor of quantum runtime inside one confirmation window.
- **Concrete Script templates use only original opcodes.** A key-hidden P2PKH variant requires a 32-byte secret s satisfying SHA-256, HASH160 and RIPEMD-160 commitments before OP_CHECKSIG; dual-secret variants use OP_CAT to bind SHA-256(s‖t), OP_SUBSTR to fix s inside t at offset k, and an OP_MUL arithmetic latch (n1·n2 = P) — straight-line programs, no loops, timelocks or covenants.
- **Wallet policy is active, not cold.** On receipt, fan out amount A into k = ⌈A/V_max⌉ outputs, each with a fresh keypair and secrets s_u = HMAC-SHA-256(K_master, "s" ‖ u_nonce); pay as send-many sequences, never consolidate; re-fragment change immediately; retire revealed secrets permanently; preflight re-hash before signing, which happens last.
- **HMAC-anchored reverse hash chains give auditable one-time tokens.** Master commitment M = SHA-256(HMAC(K, "master")), per-epoch seed S_e, a 10,000-step chain with published anchor A_e = y_{e,0}, and on-chain binding of each coin to D_{e,i} = SHA-256(e ‖ i ‖ y).
- **Worked parameters.** V_max = 2,000,000 sat: receiving 13,745,000 sat yields six full outputs plus one of 1,745,000 sat; a 25,000,000 sat payment splits across four transactions bounded by I_max = 8 inputs and O_max = 6 outputs.
- **Builder guidance.** Quantum defence is an economics and wallet-policy problem solvable with existing Script (OP_SHA256, OP_HASH160, OP_RIPEMD160, OP_MUL, OP_CAT) — no post-quantum signature schemes, address migrations or soft-forked opcodes required — but it presupposes a cheap, high-throughput chain where perpetual fragmentation is affordable.
