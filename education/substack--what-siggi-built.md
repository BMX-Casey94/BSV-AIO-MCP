---
title: "What Siggi Built"
era: substack
date: 2026-04-22
slug: what-siggi-built
themes: [script-technical, scaling-throughput, lightning-l2, governance-decentralisation]
source_summary: summaries/what-siggi-built.md
url: https://singulargrit.substack.com/p/what-siggi-built
---

# What Siggi Built — core principles

- **Bitcoin Script was never the constraint — the tooling was.** A serious multi-frontend compiler (Rúnar: TypeScript, Solidity-style, Move-style, Go and Rust frontends into one shared AST, then ANF lowering, stack lowering and opcode emission) emits correct-by-construction Script: "the constraint was never the language; the constraint was that nobody had built a serious compiler for it."
- **Independent reimplementation is the hallmark of compiler correctness.** Three compilers (TypeScript, Go, Rust) producing byte-identical Script for identical source — enforced by golden-file tests over a 50-contract corpus — catch any single-implementation bug by the disagreement of the other two; stated theorems cover type safety, termination (no unbounded loops or recursion), determinism and cross-compiler conformance.
- **Post-quantum signature verification compiles to native Script today.** A WOTS+ verifier at ~10.5 KB and an SLH-DSA (FIPS 205) SHA2-128s verifier at ~203 KB run byte-identical from all three compilers — large, but far under BSV's 10 MB per-script ceiling, demonstrating hash-based quantum-defence design without any protocol change.
- **A validity-proof L2 can settle on Bitcoin with no sequencer.** State is carried by a covenant UTXO chain: each advance spends the previous covenant output and must present a STARK proof in the unlocking script; a Rúnar-compiled FRI verifier (~85 KB of Script, under 150 ms on regtest) is executed by the script engine as a consensus check, like OP_CHECKSIG.
- **The EVM is a specification, not a venue.** Unmodified EVM bytecode with MetaMask, ethers.js, Hardhat and Foundry compatibility can run where the base layer offers what the design needs: unbounded block size (a 128-transaction batch with proof ≈ 216 KB), stable fees (~100 satoshis/KB; a batch ≈ $0.0065, i.e. ~$0.00005 per transaction) and OP_PUSH_TX introspection enabling covenants.
- **Consensus itself can resolve the sequencer race.** Anyone holding a valid proof may spend the covenant UTXO; overlay nodes race, double-spend resolution picks the winner, and losers replay the on-chain batch data — "this is not Raft or Paxos; there is no leader election."
- **Prover economics can be subsidy-free.** Reported margins of ~12× on simple transfers and ~89× on Uniswap-style swaps at 1 gwei gas show validity proving funded by fees, not inflation.
- **Honest engineering states its trust surface.** Validity proofs rest on unprovable assumptions (SHA-256, STARK soundness, compiler correctness); bridge covenants cap sub-UTXOs (100 BSV each) with six-block and 100-block withdrawal timelocks; per-shard governance (none / single key / multisig) is an explicit trustlessness-versus-recoverability trade-off chosen at genesis.
