---
title: "Ten Thousand Qubits and a Prayer"
date: 2026-04-06
slug: ten-thousand-qubits-and-a-prayer
url: https://singulargrit.substack.com/p/ten-thousand-qubits-and-a-prayer
themes: [quantum-scepticism, satire]
---

# Ten Thousand Qubits and a Prayer
**Date:** 2026-04-06 | **URL:** https://singulargrit.substack.com/p/ten-thousand-qubits-and-a-prayer
**Subtitle:** On the Fashionable Art of Mistaking Aspiration for Achievement

## Core thesis
The preprint "Shor's algorithm is possible with as few as 10,000 reconfigurable atomic qubits" (Cain, Xu, King, Picard, Levine, Endres, Preskill, Huang, Bluvstein; arXiv:2603.28627, March 2026; Oratomic and Caltech) is bullshit in Harry Frankfurt's precise sense: a systematic architecture of conditional claims presented as unconditional results, where every load-bearing number depends on an undemonstrated assumption and the title reports the conclusion as though the assumptions had been discharged.

## Key arguments and claims
- The title's "as few as 10,000" fuses the cheapest architecture's qubit count with the most expensive architecture's runtime. The 9,739-qubit configuration runs RSA-2048 in ~10,000 days (~27 years) and ECC-256 in ~2,600 days (~7 years); the memorable "few days" figure requires 26,000 qubits (ECC-256 only), and fast RSA-2048 requires 102,000 qubits.
- The analysis assumes physical error rates of 0.07–0.1% across ten thousand-plus qubits; current neutral-atom systems operate at "2× below threshold" on a few hundred qubits, and the depolarising noise model ignores Rydberg crosstalk, laser drift, biased noise, and atom loss. Uncertainties that help the numbers are mentioned; those that hurt are silent.
- Every runtime assumes a 1 ms stabiliser cycle — "we anticipate that it can be achieved" — against demonstrated "several ms" on hundreds of qubits. No sensitivity analysis: at 10 ms the ECC-256 runtime becomes one hundred days and RSA-2048 the better part of a century.
- Figure 2a's critical data points at p = 0.1% are extrapolated, not simulated. Power-law fits from three points yielded unphysical exponents above d/2; the authors' "conservative" fix assumes the theoretical maximum exponent b = d/2 anchored to a single datum — "the opposite of conservatism wearing conservatism's hat."
- Code distances are reported as [[n, k, ≤d]] — upper bounds from BP-OSD decoding over 25,000 trials — then treated as exact values in every subsequent calculation: "assuming the conclusion."
- The laser-rastering claim (0.1% to 100% duty cycle, three orders of magnitude more addressable atoms) "violates elementary physics": 100% duty cycle demands zero repositioning, settling, and jitter time. Realistic improvement is one to two orders of magnitude.
- The code-surgery mechanism at the architecture's heart is admitted to be "a theoretically consistent existence proof"; surgery gadgets for the large memory codes are "computationally prohibitive" to construct, with 10×–72× time overheads per Toffoli and error rates bounded only "within an order of magnitude."
- The headline time-efficient architecture depends on two unpublished, unverifiable references ("In preparation", 2026) — the codes enabling it do not exist in public literature.
- Real-time decoding latency at 1 ms cycles is never analysed; backlog or slowdown both destroy the estimates.
- Ten independent assumptions must hold simultaneously; even at 70% individual plausibility the joint probability is 0.7^10 ≈ 3%. First affiliation Oratomic creates a direct financial interest in the headline claim.

## How Craig reasons (his model/logic)
Rhetorical-forensic analysis under Frankfurt's definition of bullshit: indifference to truth in service of impression. Craig reads the paper's own numbers against its title section by section, deploys probability multiplication across conjunctive assumptions, and uses builder-contract analogies to expose each silent substitution of aspiration for demonstration.

## Where this contradicts BTC-mainstream logic
No direct engagement — this post is a methodological takedown of a quantum resource-estimate preprint and the venture-funded incentive structure behind its framing.

## Notable quotes
- "The claim is, to employ a technical term, bullshit."
- "That is not science. That is marketing wearing a lab coat."
- ""We anticipate." The honest man's synonym for "we hope.""
- "One must have a heart of stone to read this paper's title without laughing."

## Connections
A companion case study to "Quantum Computing Is a Multi-Hundred-Billion-Dollar Fraud": the same caveat-stripping pattern, here within a single paper. Its ECC-256 and RSA-2048 resource figures feed directly into the series' later essays on encryption and on Bitcoin's secp256k1 exposure.
