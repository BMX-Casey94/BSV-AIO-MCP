---
title: "The Quantum Apocalypse Is Coming Any Decade Now, So Here Is the Solution to a Problem That Will Not Exist"
date: 2026-04-27
era: substack
themes: [quantum-scepticism, script-technical, security-economics, btc-critique]
source: summaries/the-quantum-apocalypse-is-coming.md
---

# The Quantum Apocalypse Is Coming Any Decade Now — core principles

- **Single-use keys are protocol discipline, not a security assumption.** One address, one key, one use means public keys are exposed only between broadcast and confirmation; that hygiene is what makes hash-based and nonce-committed spends viable without hyper-trees or new opcodes.
- **Construction A: hash-commit the ECDSA nonce.** At funding, lock to \(h = \mathrm{SHA\text{-}256}(r \parallel \text{preimage})\); the unlocking script reveals the committed \(r\) and preimage, and SIGHASH binds the signature to the outputs. A Shor-capable attacker who recovers the key still needs a SHA-256 second preimage — 128 bits of post-Grover work — at 89 bytes, about one-thirteenth of a cent.
- **Construction B: WOTS+ verifies in native Script.** At \(w=16\), 68 hash chains (64 message digits plus a 4-digit checksum) are unrolled into a 15-deep `OP_IF` cascade because Script cannot loop: exactly 10,423 bytes of locking script, with a ~2,400-byte unlocking script that reveals the chain values at the digit positions.
- **Plain SHA-256 chaining is the cheap default; RFC 8391 is the paid upgrade.** Simplified chaining reduces security to collision resistance (~85-bit quantum via Brassard–Høyer–Tapp); the RFC-compliant tweakable script runs ~180,000 bytes ≈ 2.5 cents. Both are specified; the cheaper one is the default.
- **Construction C is the hybrid: enforce A and B together.** Because A is nearly free, paying twice holds whether or not a cryptographically interesting quantum computer ever arrives.
- **Genesis restored the opcode set that makes this possible.** Native hash-based verification needs `OP_CAT` and the rest of Satoshi's opcodes; no soft fork and no new opcodes are required.
- **Threshold WOTS+ remains unsolved.** Hash chains do not compose linearly under Shamir sharing; the gap is labour, not a protocol defect.
- **Insurance calculus, not belief.** Three per cent of catastrophic loss is enough to motivate a two-tenths-of-a-cent precaution; deploy a small inexpensive thing rather than a rip-and-replace migration to Dilithium/SPHINCS+-class schemes.
