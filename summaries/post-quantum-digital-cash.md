---
title: "Post-Quantum Digital Cash"
date: 2026-07-12
slug: post-quantum-digital-cash
url: https://singulargrit.substack.com/p/post-quantum-digital-cash
themes: [quantum-scepticism, monetary-economics, security-economics, wallets-keys]
---

# Post-Quantum Digital Cash
**Date:** 2026-07-12T23:40:05.565Z | **URL:** https://singulargrit.substack.com/p/post-quantum-digital-cash
**Subtitle:** The problem is not the algorithm. It is the money.

## Core thesis
Swapping RSA/ECDSA for post-quantum primitives is the easy part; the real problem is that digital cash is a payment *system* — verification cost, finality, privacy and recoverability are decided at the system level, not by the signature scheme. The quantum threat itself is mis-modelled as a date/threshold when it is actually a descending cost-per-key frontier measured against the value each key protects. Post-quantum digital cash is "a payment-system design problem wearing a cryptography costume". (He opens by noting he believes QC is "a scam" that will not arrive in his grandchildren's lives, but models the case as promoted.)

## Key arguments and claims
- **The threat is asymmetric.** Shor's algorithm breaks the public-key layer (factoring, discrete log → RSA and ECC fall); Grover's only quarters/halves symmetric and hash security (quadratic speedup — 256-bit becomes ~128-bit), fixed cheaply with longer keys. Hash-based signatures are the most conservative replacement (security rests only on the hash); lattices give efficiency. Standards exist; the machine to run Shor at cryptographically relevant scale does not.
- **The substitution fallacy.** Replacing the primitive changes the mathematics an attacker must defeat; it does not change verification cost, finality, privacy, value-per-key, or recourse for defective transfers. "Replacing the primitive and declaring victory is like replacing the lock on a bank vault and calling the bank secure."
- **Money is a bearer-instrument problem.** Digital cash targets bearer properties — possession is entitlement, transfer final, no intermediary — in a world where bits can be copied; the whole apparatus from e-cash to ledgers exists to prevent double-spending while preserving bearer behaviour. Beyond primitives, the bearer target demands cheap verification, finality, privacy, and "the uncomfortable one" — some answer to high-value defect (theft, extortion, mistake).
- **The threat is a cost, not a threshold.** A cryptographically relevant quantum computer is "one of the most capital-intensive single-purpose machines ever contemplated" — breaking a key is a production process with a cost, not an event. Qubit counts are technical inputs, not economic feasibility: cost per break is set jointly by capital intensity, utilisation, runtime, operating cost and reliability. Exposure = the gap between the falling cost frontier and the value behind a given key; high-value consolidated keys are exposed first, everyday cash last, if ever. The framework is sound; specific dollar figures are provisional.
- **Verification cost is a first-class variable.** Bearer verification must be information-light at the point of sale; heavy post-quantum signatures (kilobytes versus tens of bytes) can "secure the instrument against a future machine while breaking it against the present merchant". The efficient system scales verification strength to the value and risk of the transfer rather than applying one regime uniformly.
- **Finality versus recoverability is the deepest tension.** They cannot both be maximal: "Recoverability is the negation of pure bearer finality." His argued (not settled) boundary: low-value transparent transfers final like cash; very high-value opaque transfers get provenance and controlled, costly, governed recovery — "finality by default, recoverability a narrow, costly, governed exception triggered by value and defect". A post-quantum migration re-decides this tension whether designers notice or not.
- **Layered resilience.** The stack: quantum-resistant base; scalable low-cost verification; low-value finality; privacy-preserving transfer; bounded governance for high-value defects at the top. No layer suffices alone — "Governance without strict bounds produces a reversible ledger wearing a cash mask."
- **Real systems.** A CBDC that swaps signatures but leaves finality/privacy unexamined "has upgraded the wrong layer"; defaulting to full reversibility and surveillance makes it "a database with quantum-resistant access control". Stablecoins face the finality/recoverability tension sharpest; harvest-now-decrypt-later exposure is per-asset against the cost frontier, so long-lived high-value confidential records migrate first.

## How Craig reasons (his model/logic)
Systems engineering crossed with security economics: state the threat precisely (Shor versus Grover), reject the binary doomsday model in favour of a cost-versus-value frontier (explicitly flagged as a framework with provisional numbers), then drive the analysis from the bearer-instrument target down through verification cost to the finality/recoverability trade-off, ending in a layered architecture. Characteristic moves: separating the primitive from the system, and converting an unfalsifiable prophecy into "an economic object, tractable and updatable".

## Where this contradicts BTC-mainstream logic
- **Against "just upgrade the signatures".** The mainstream post-quantum roadmap treats migration as a component swap; he argues the migration is the moment the system's finality, privacy and recovery properties get re-decided — by design or by default.
- **Against pure-bearer ideology.** "Code is law"-style absolutism is rejected: at sufficient scale, absence of recourse for high-value defective transfers "becomes a systemic and legal problem" — governed recovery as bounded exception is necessary, which aligns with his court-order/legal-deterrence positions and against BTC's immutability-absolutism.
- **Against consolidated keys.** High-value consolidated holdings are exposed first on the cost frontier — an implicit argument against custodial concentration (exchanges, ETFs) and for distributed, low-value-per-key cash usage.
- **QC doomsday dismissed as prophecy.** The threshold model is "an unfalsifiable prophecy"; the correct object is a descending cost frontier — consistent with his wider quantum-scepticism cluster.

## Notable quotes
- "Post-quantum digital cash is a payment-system design problem wearing a cryptography costume."
- "The quantum threat is a cost, not a threshold."
- "Recoverability is the negation of pure bearer finality."
- "It is about building money that survives a quantum world without forgetting what money is for."

## Connections
Part of the quantum cluster — *Quantum-Ineffective Bitcoin* (Script-level, hash-anchored defence), *Bitcoin Does Not Use RSA*, *Quantum Computing Will Not Crack Encryption* — and the bearer-instrument line runs through *Nobody Asks Where Your Banknote Has Been*, *The Dial That Used to Be Fixed* and *The Law of Controlled Amnesia*. The bounded-recovery position connects to the legal cluster (*Transparency Is Not Centralisation*, *The Law Already Inside Bitcoin*).
