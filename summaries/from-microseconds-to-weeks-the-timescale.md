---
title: "From Microseconds to Weeks: The Timescale Problem That Makes Quantum Computing Impossible Right Now — if not forever!"
date: 2026-04-09
slug: from-microseconds-to-weeks-the-timescale
url: https://singulargrit.substack.com/p/from-microseconds-to-weeks-the-timescale
themes: [quantum-scepticism, security-economics]
---

# From Microseconds to Weeks: The Timescale Problem That Makes Quantum Computing Impossible Right Now — if not forever!
**Date:** 2026-04-09 | **URL:** https://singulargrit.substack.com/p/from-microseconds-to-weeks-the-timescale
**Subtitle:** Start at the nanosecond. End at the week. Watch what happens at each step

## Core thesis
The most clarifying way to see why quantum computing cannot do what is advertised is to follow the timescales: nanosecond gates, microsecond coherence, microsecond error-correction cycles, millisecond logical T gates, and week-long computations. Each layer of the cascade multiplies the difficulty, demonstrating that the gap between demonstration and capability is physics stacked against physics — not engineering polish.

## Key arguments and claims
- Superconducting qubits (Google, IBM) operate at ~15 millikelvin. Single-qubit gates take ~10–50 ns; two-qubit gates ~100–500 ns; coherence times run 50–500 microseconds. A 100 ns gate on a 500 µs qubit implies a ~0.02% per-gate error floor; best demonstrated two-qubit error rates are ~0.1%, near the surface-code threshold of ~1% — progress, but only the first layer.
- The coherence wall: in 50 µs you can run roughly 250 two-qubit gates before near-certain decoherence. Useful algorithms need thousands to millions of gates, so survival depends on continuous error-correction cycles, each costing time.
- A surface-code cycle takes ~1 µs (the Gidney-Ekerå figure). Distance-3 needs 17 physical qubits per logical qubit; distance-25 — required for Shor-scale computation — needs ~1,250 physical qubits per logical qubit, still at 1 µs per cycle.
- The hidden killer is classical control: the decoder must return corrections within ~10 µs. Google's 2023 surface-code paper used a faster but weaker union-find decoder because minimum-weight perfect matching was too slow at their qubit count. Real-time decoding for a million qubits at 1 MHz each is a specialised supercomputer inside a cryostat; it does not exist.
- The Eastin-Knill theorem forbids a universal transversal gate set, so the T gate requires magic states. Standard 15-to-1 distillation costs ~100 surface-code cycles (~100 µs per T gate), rising to milliseconds at Shor-scale distances; Gidney's 2025 "cultivation" reduces but does not remove the overhead.
- RSA-2048 needs ~2.6 billion Toffoli gates ≈ 8 billion T gates. Fully sequential at 1 ms each that is 92 days — hence the need for thousands of parallel magic-state factories. A week of computation is ~600 billion correction cycles per qubit; at 0.1% error rates the system must catch ~600 million raw physical errors, with calibration held uniform across a million qubits for seven days — "a specification for a machine that has not been conceived in detail, let alone built."
- The physical container: dilution refrigerators cool a few litres; million-qubit systems need modular cryogenic interconnects whose demonstrated fidelities remain below surface-code threshold.
- No platform escapes the ratio. Trapped ions: coherence of seconds-to-minutes but gates of 100 µs–1 ms — a week-long superconducting computation becomes a decade. Silicon nuclear spins (Zhang et al.: ~523 µs coherence): weak environmental coupling means slow microsecond-to-millisecond gates and unsolved inter-cluster scaling. Neutral atoms: ~99% Rydberg fidelities sit below threshold, with atom loss as a distinct error mode.
- The cascade in one picture: gate 10–500 ns; coherence 50–500 µs; cycle ~1 µs; logical Clifford ~1–10 µs; logical T ~1–100 ms; 8 billion T gates; 20 million (2021) or under 1 million (2025) physical qubits; current logical qubits: zero. Gap: three to four orders of magnitude in count, unmeasured orders in uniformity.

## How Craig reasons (his model/logic)
Quantitative order-of-magnitude physics structured as a single cascading argument across seven layers, using the field's own canonical resource estimates (Gidney-Ekerå 2021; Gidney 2025) as yardsticks, then a platform-comparative analysis showing each alternative trades one dimension of the same ratio for another.

## Where this contradicts BTC-mainstream logic
No direct engagement — this post is a physics-timescale argument about quantum hardware feasibility; its bearing on Bitcoin is developed separately in the series' secp256k1 essay.

## Notable quotes
- "Nanoseconds become microseconds. Microseconds become milliseconds. Milliseconds become hours. Hours become days. Days become weeks."
- "Two billion Toffoli gates is two billion Toffoli gates whether you are running on superconductors or ions or atoms."
- "The timescale is not a detail. The timescale is the truth."

## Connections
The mechanistic core of the quantum series: it references "the Zhang et al. paper that opened this series" and supplies the engineering arithmetic behind the fraud and encryption essays, culminating in the Bitcoin-specific exposure analysis of "Bitcoin Does Not Use RSA".
