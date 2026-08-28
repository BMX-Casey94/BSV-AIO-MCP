---
title: "The Quantum Apocalypse Is Coming Any Decade Now, So Here Is the Solution to a Problem That Will Not Exist"
date: 2026-04-27
slug: the-quantum-apocalypse-is-coming
url: https://singulargrit.substack.com/p/the-quantum-apocalypse-is-coming
themes: [quantum-scepticism, script-technical, security-economics, btc-critique]
---

# The Quantum Apocalypse Is Coming Any Decade Now, So Here Is the Solution to a Problem That Will Not Exist
**Date:** 2026-04-27 | **URL:** https://singulargrit.substack.com/p/the-quantum-apocalypse-is-coming
**Subtitle:** On native-Script WOTS+, ECDSA r-puzzles with hash-committed nonces, and the consulting-hours industry that has been built on a threat that will arrive shortly after fusion power and right before the meaningful AGI deadline

## Core thesis
Craig does not believe a fault-tolerant quantum computer of cryptographically interesting size will exist within any planning-relevant horizon (his estimates: under 1% in ten years, ~3% in twenty, ~15% in fifty, ~40% in a century). But the compliance regime — NIST, ETSI, the European Banking Authority — believes otherwise, so he specifies cheap native-Script post-quantum insurance for BSV: Construction A (ECDSA with a hash-committed nonce), Construction B (a WOTS+ verifier in exactly 10,423 bytes of locking script) and Construction C (the hybrid), with no soft fork and no new opcodes, at about two-tenths of a cent per spend.

## Key arguments and claims
- The sceptical case: thirty years of effort has produced machines that "on a good day, with a following wind, factored 21 into 3 times 7" with the factors known in advance; Google's 2019 "quantum supremacy" problem was constructed for the announcement and solved classically on a laptop shortly after. Breaking secp256k1 needs several thousand fault-tolerant logical qubits at ~10^9 gate depth; the state of the art is ~1,000 physical qubits ≈ ~10 logical; at the historical ~2×-per-three-years improvement rate, linear extrapolation to the required 100,000× takes about fifty years. The pragmatic case for writing the paper anyway: standards committees control what banks must deploy, and "three percent of catastrophic loss is enough to motivate cheap precautions."
- BSV's single-use rule ("one address, one key, one use") is protocol-level discipline, not a security assumption; public keys are exposed only between broadcast and confirmation. BTC, with rampant address reuse and legacy pay-to-public-key outputs, leaves keys on-chain in plain view.
- Construction A: at funding time, commit to h = SHA-256(r-component ‖ secret preimage); the locking script enforces the committed r and preimage reveal, and SIGHASH binds the signature to the outputs. A Shor-capable attacker who recovers the key still cannot redirect funds without a SHA-256 second preimage — 128 bits of post-Grover work. Cost: 89 bytes, about one-thirteenth of a cent.
- Construction B: WOTS+ at w=16 — 68 hash chains (64 message digits plus a 4-digit checksum), each seed hashed 15 times; the signature reveals the chain values at the digit positions (~2,400-byte unlocking script). Verification must hash forward by a stack-supplied count, which native Script cannot loop over, so the loop is unrolled into a 15-deep OP_IF cascade (9 bytes per level, 137 bytes per chain): exactly 10,423 bytes of locking script, reproducible from the shipped Python compiler.
- The honest simplification: plain SHA-256 chaining reduces security to collision resistance (85-bit quantum via the Brassard–Høyer–Tapp bound) rather than RFC 8391's tweakable chaining (128-bit second-preimage). The RFC-compliant script runs ~180,000 bytes ≈ 2.5 cents, fourteen times more, for headroom against 2^85 quantum collision queries; both are specified, the simplified one default.
- Construction C enforces A and B simultaneously; since A is nearly free, the hybrid holds whether or not quantum computers ever arrive — "paying twice for safety is the cheapest insurance you will ever buy."
- The enabler is BSV's Genesis upgrade (February 2020), which restored OP_CAT and the rest of Satoshi's opcode set.
- Stated gap: threshold WOTS+ is unsolved — hash chains do not compose linearly under Shamir sharing — and the paper says so precisely; it is "blocked on labour."
- The industry critique: the post-quantum-consulting complex wants rip-and-replace migrations to Dilithium/SPHINCS+-class schemes — ten-times signatures, forks, six-figure contracts — when the correct calculation is to "deploy a small inexpensive thing, sleep well."

## How Craig reasons (his model/logic)
Expected-value insurance calculus (probability × loss versus precaution cost) married to exact-byte engineering accountability. Satire carries the scepticism; protocol discipline (single-use as rule, not assumption) carries the security argument.

## Where this contradicts BTC-mainstream logic
- The quantum-threat consensus is portrayed as a grant-cycle artefact whose five-year timelines "slide gently rightward"; NIST standardised three schemes, one promptly broken.
- BTC is doubly exposed: address reuse and P2PK legacy outputs publish keys permanently, and the 2010 disabling of OP_CAT makes native hash-based verification impossible there.
- Against exotic replacements: hash-based signatures reduce to one brutally honest assumption — SHA-256 has not budged in twenty-five years.
- Against the literature's framing of one-time use as an "assumption": on BSV it is enforced protocol discipline, so plain WOTS+ beats SPHINCS+-style hyper-trees there.

## Notable quotes
- "After three decades of throwing money at the problem we have machines that have, on a good day, with a following wind, factored 21 into 3 times 7."
- "Not believer's enthusiasm. Insurance."
- "If you wish to argue with my disbelief in quantum computing, you can join the queue, which is long, and which has been forming since 1994."

## Connections
The WOTS+/SLH-DSA verifiers compiled by Rúnar in "What Siggi Built" are the compiler-level counterpart of this hand-counted Script construction; the hash commitment treated sceptically in "The Sealed Envelope" reappears as Construction A's nonce commitment.
