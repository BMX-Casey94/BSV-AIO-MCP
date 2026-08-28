---
title: "What Siggi Built"
date: 2026-04-22
slug: what-siggi-built
url: https://singulargrit.substack.com/p/what-siggi-built
themes: [script-technical, scaling-throughput, lightning-l2, governance-decentralisation]
---

# What Siggi Built
**Date:** 2026-04-22 | **URL:** https://singulargrit.substack.com/p/what-siggi-built
**Subtitle:** A compiler, a virtual machine, and a quiet rewrite of what Bitcoin Script can do

## Core thesis
Two pieces of working infrastructure built by Siggi Óskarsson refute two entrenched crypto orthodoxies: that Bitcoin Script is too limited for serious smart contracts, and that EVM-compatible Layer 2s must settle on Ethereum. Rúnar is a multi-frontend compiler emitting correct-by-construction Bitcoin Script; BSVM is an EVM L2 on BSV in which every state transition is authorised by a STARK validity proof verified on-chain inside a Rúnar-compiled Script covenant, with no sequencer.

## Key arguments and claims
- Rúnar (BSV Association technical report, March 2026; source at github.com/icellan/runar) compiles contracts from five frontends — TypeScript, Solidity-style, Move-style, Go, Rust — into one shared AST, then through validation, type checking, A-Normal Form (ANF) lowering, stack lowering and opcode emission.
- The ANF conformance boundary is the correctness crux: three independent compiler implementations (TypeScript, Go, Rust) produce byte-identical Script for identical source, enforced by nine golden-file tests plus dynamic comparison across a 50-contract corpus; a bug in any one compiler is caught by the disagreement of the other two.
- Four stated theorems with proof sketches: type safety, termination (validator rejects unbounded loops and all recursion), determinism, and cross-compiler conformance. Explicitly not machine-checked proofs in Coq or Lean.
- Post-quantum proof of concept compiled to native Script: a WOTS+ verifier at ~10.5 KB and an SLH-DSA (FIPS 205) SHA2-128s verifier at ~203 KB — large, but far under BSV's 10 MB per-script ceiling, and byte-identical across all three compilers.
- BSVM runs unmodified EVM bytecode with MetaMask, ethers.js, Hardhat and Foundry compatibility; state is carried by a covenant UTXO chain in which each advance spends the previous covenant output and must present a STARK proof in the unlocking script; the Rúnar-compiled FRI verifier (~85 KB of Script, under 150 ms on regtest) is executed by BSV's script engine as a consensus check, like OP_CHECKSIG.
- Why BSV and not Ethereum: unlimited block size (a 128-transaction batch with proof is ~216 KB — small by BSV standards), stable fees (~100 satoshis/KB; a batch costs ~21,600 satoshis ≈ $0.0065 at $30/BSV, i.e. ~$0.00005 per transaction, "one and a half orders of magnitude cheaper than any Ethereum-based L2"), and OP_PUSH_TX introspection enabling covenants. Ethereum has none of the three properties.
- Pipeline: a Go EVM (extracted from geth) returns sub-millisecond preconfirmations; revm executes inside SP1 (a STARK zkVM proving RISC-V execution) to produce the validity proof; receipt, proof and on-chain finality are decoupled tiers an application can choose between.
- No sequencer: anyone holding a valid proof may spend the covenant UTXO; overlay nodes race, BSV's double-spend resolution picks the winner, losers replay the OP_RETURN batch data. Prover economics are subsidy-free: ~12× margin on simple transfers and ~89× on Uniswap-style swaps at 1 gwei gas.
- Bridge covenant holds BSV in sub-UTXOs capped at 100 BSV each, with six-block (small) and 100-block (large) withdrawal timelocks; per-shard governance is chosen at genesis among none, single_key, or multisig modes — an explicit trustlessness-versus-recoverability trade-off.
- Stated limits: validity proofs rest on unprovable assumptions (SHA-256, STARK soundness, compiler correctness); Teranode throughput figures are measured under crash-fault, not Byzantine, semantics.

## How Craig reasons (his model/logic)
Engineering reportage disciplined by first-principles L1 analysis: he evaluates an architecture against the base layer's actual properties (data capacity, fee stability, introspection opcodes), treats independent reimplementation and byte-level reproducibility as the hallmark of seriousness, and insists that what "runs" and can be audited outranks what is merely gestured at in forward-looking posts.

## Where this contradicts BTC-mainstream logic
- Refutes the commonplace that "Bitcoin Script cannot do very much": the opcodes were never the constraint — "The constraint was never the language. The constraint was that nobody had built a serious compiler for it."
- Refutes the Ethereum-centre of gravity: "The EVM is a specification, not a venue" — full tooling compatibility does not require Ethereum as L1.
- Refutes the sequencer-as-necessity assumption of every production rollup (Arbitrum, Optimism, zkSync): sequencerless operation works because BSV consensus itself resolves the race.
- Implicitly anti-BTC/Core: only the Genesis restoration (February 2020) of Satoshi's opcodes and removal of size caps makes an 85 KB on-chain FRI verifier possible; pre-Genesis limits of a few kilobytes would have forbidden it.

## Notable quotes
- "The EVM is a specification, not a venue."
- "This is not Raft or Paxos. There is no leader election."
- "What Siggi has built is not a thought experiment. It runs."
- "That is, in the end, what distinguishes serious infrastructure from everything else."

## Connections
The covenant-chained UTXO state machine and OP_PUSH_TX recur throughout this batch (mental poker, sealed-bid auctions); Rúnar's compiled WOTS+/SLH-DSA verifiers are the compiler-level counterpart of the native-Script post-quantum constructions in "The Quantum Apocalypse Is Coming"; the stable-fee economics mirror the per-game cost arguments in "Shuffling the Deck Without a Dealer".
