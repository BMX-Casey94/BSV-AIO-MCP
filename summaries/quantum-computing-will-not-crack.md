---
title: "Quantum Computing Will Not Crack Encryption. It Is a Lie. Even If It Weren't, the Numbers Are Absurd."
date: 2026-04-07
slug: quantum-computing-will-not-crack
url: https://singulargrit.substack.com/p/quantum-computing-will-not-crack
themes: [quantum-scepticism, security-economics]
---

# Quantum Computing Will Not Crack Encryption. It Is a Lie. Even If It Weren't, the Numbers Are Absurd.
**Date:** 2026-04-07 | **URL:** https://singulargrit.substack.com/p/quantum-computing-will-not-crack
**Subtitle:** The most damaging lie in quantum computing — and there is serious competition for that title — is the encryption story.

## Core thesis
The claim that quantum computers will soon break RSA and internet encryption is a fraud: Shor's algorithm is mathematically real, but no capable machine exists or is coming on any timeline supported by physics. Even granting the field's most optimistic published resource estimates at face value, the cost, power, and time per key make mass cryptographic collapse economically ludicrous.

## Key arguments and claims
- RSA-2048 uses a 617-digit modulus; Shor's 1994 algorithm would factor it in polynomial time on a sufficiently capable fault-tolerant machine. The conditional is real; the machine is not.
- The best estimates come from Craig Gidney (Google Quantum AI): Gidney-Ekerå 2021 — RSA-2048 in ~8 hours with ~20 million physical qubits at 0.1% gate error (itself a hundredfold improvement on the 2012 estimate of ~1 billion); Gidney May 2025 — under one million physical qubits at the cost of a runtime under one week. These are floors, not ceilings.
- Logical requirements: ~20,000 logical qubits (2021) or roughly 1,730–6,000 (2025), each encoded in ~1,000 physical qubits at 0.1% error, sustaining billions to tens of billions of sequential gates without one uncorrected error cascade.
- Demonstrated reality: Google's best processor has on the order of 1,000 physical qubits; best two-qubit gate errors ~0.1% are individual results, not uniform at scale; logical qubits demonstrated: zero. The gap is ~three orders of magnitude in count plus uniformity sustained for days.
- Five strictly sequential unsolved steps: build one logical qubit; demonstrate improvement with code distance (suggested only in one Google memory experiment, never in gates); scale to thousands of logical qubits; sustain days of error-corrected operation; build classical control infrastructure decoding syndromes on microsecond timescales across millions of qubits. Failure at any step voids the whole.
- Cost even if built: RAND estimates ~10 watts per physical qubit → 10 megawatts for the one-million-qubit machine (200 MW — "comparable to a small city" — for the 20-million-qubit version); energy alone in the hundreds of thousands of dollars per key; capital cost tens to hundreds of billions; realistic throughput weeks to months per key at millions of dollars each. Ephemeral TLS keys bound the damage to selective, high-value historical targets — not mass surveillance.
- The lie persists because a coalition benefits: the quantum industry draws both offensive and defensive investment; intelligence agencies gain budget justification; the post-quantum cryptography industry (NIST standards finalised 2024, mandated migration) is a multi-billion-dollar market incentivised to keep threat perception maximal; journalists monetise fear.
- What is genuinely true: post-quantum cryptography is legitimate; NIST's post-2030 deprecation horizon is reasonable migration planning; "harvest now, decrypt later" is a real concern for multi-decade secrets — but only if the machine is ever built, and every year without a logical qubit is evidence against the timeline.

## How Craig reasons (his model/logic)
Immanent critique: he takes the opposition's best numbers (Gidney's) at face value and shows the conclusion still collapses under arithmetic — dependency-chain analysis of five unsolved engineering steps, then cost accounting of power, capital, and throughput. He closes with coalition incentive analysis explaining why the narrative survives its own numbers.

## Where this contradicts BTC-mainstream logic
No direct engagement — this post dismantles the quantum-threat-to-encryption narrative on its own terms, using the field's most optimistic published estimates; Bitcoin's specific signature scheme is treated separately in the series' later essay.

## Notable quotes
- "The people telling you this is coming soon — from major quantum computing companies, from government program offices, from cybersecurity vendors selling post-quantum migration services — are either lying or have not read the physics."
- "What the hardware has delivered: no logical qubit. Ever."
- "The money flowing into this narrative is real. The threat is not."

## Connections
Explicitly builds on "the previous post in this series" (the multi-hundred-billion-dollar fraud essay). The five-step dependency chain and Gidney figures are mechanistically expanded in "From Microseconds to Weeks", and the analysis is specialised to secp256k1 in "Bitcoin Does Not Use RSA".
