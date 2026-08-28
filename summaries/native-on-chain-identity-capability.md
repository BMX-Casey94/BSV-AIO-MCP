---
title: "Native On-Chain Identity: capability-first, passwordless, and self-recovering"
date: 2025-08-23
slug: native-on-chain-identity-capability
url: https://singulargrit.substack.com/p/native-on-chain-identity-capability
themes: [identity, wallets-keys, privacy, script-technical]
---

# Native On-Chain Identity: capability-first, passwordless, and self-recovering
**Date:** 2025-08-23 | **URL:** https://singulargrit.substack.com/p/native-on-chain-identity-capability
**Subtitle:** Rethinking Identity: From Passwords to Protocol-Defined Control

## Core thesis
Digital identity must be rebuilt as a capability proven inside the transaction, not as an account in someone's directory. Accounts, tenants and issuers are "feudal artefacts of Web2" — central choke points with veto power. A native on-chain identity is passwordless by construction (ephemeral one-shot ECDH), self-recovering by threshold cryptography (Shamir sharing with user-mandatory quorum, timelocks and slashing bonds), and economically anchored to UTXOs so that misbehaviour carries a real, pre-committed cost.

## Key arguments and claims
- Identity = capability: "An 'account' is not identity, it is an entry in someone else's ledger." A valid signature or script evaluation inside a transaction is the only identity that matters; if a single directory or administrator can deny access, the system is broken.
- Ephemeral cryptography: each session derives fresh ECDH keys used once and destroyed — K = (k_A × P_B) = (k_B × P_A) — giving forward secrecy and unlinkability; "the system forgets, and forgetting is security."
- Device binding: each device holds a seed s and derives per-interaction scalars kᵢ = H(s ∥ i) mod n with public key Kᵢ = kᵢ·G on secp256k1; keys live for one transaction, then are destroyed. Rotation on loss is enforced by script: Accept(K₁, …, Kₙ) → Accept(K₁, …, Kₙ, Kₙ₊₁) ∧ Timeout(K_old).
- Programmable recovery: the master secret S is Shamir-split, f(x) = S + a₁x + … + a_{t−1}x^{t−1} (mod p), reconstructed via Lagrange interpolation S = Σ λⱼ·sⱼ over GF(p). The user always holds at least one share, so no custodian quorum can act without them.
- Recovery centres (KRCs) are independent custodians spread across jurisdictions (examples: Zurich, Singapore, São Paulo), possibly unknown to one another. Recovery requires three interlocking constraints: Quorum (t of n KRCs), Delay (on-chain timelocks allowing abort of fraudulent requests), and Bond (each KRC posts Bitcoin collateral, slashed on misbehaviour). Each KRC applies its own "Know Your Factor" checks — live video, hardware token, in-person verification.
- Practical flows: lost device → recovery PSBT with partial KRC signatures under a timelock, then atomic key rotation; lost share → rotate a fresh Shamir split from an active device; suspected compromise → a "high friction" paranoid mode that raises thresholds and lengthens timelocks.
- Economic alignment: capabilities are instantiated as bonded UTXOs; revocation is enforced by spending or burning outputs. Attestation markets let miners or exchanges sell optional, timestamped signals ("this key was active at block height n") without becoming choke points.
- Privacy is the default outcome: pairwise pseudonyms per counterparty, Merkle-structured credentials with selective disclosure (prove "age ≥ 18" by revealing one leaf), and audit without doxxing via signed receipt bundles.
- AI agents fit natively: ephemeral service principals hold capability UTXOs capped by value, time and method (e.g. 0.01 BTC for 24 hours, sub-delegated as 0.001 BTC for one hour), with script enforcing the narrowing — no directory permissions.
- Web2 patterns to stop copying: admin backdoors/super-tenants, static permanent roles, and resolvers treated as indispensable gatekeepers. Resolvers become caches; if every resolver vanishes, capabilities survive because they travel with the spend.

## How Craig reasons (his model/logic)
First-principles protocol design combined with incentive analysis. Craig defines axioms (capability, custody, ephemerality, threshold recovery, economic anchoring), then derives the architecture mathematically — ECDH session keys, hash-chain device derivation, Shamir interpolation over finite fields, script-encoded policy — and closes each mechanism with an economic enforcement loop (bonds, slashing, UTXO-anchored rights) so that security is paid for rather than promised.

## Where this contradicts BTC-mainstream logic
No direct engagement — this post is a constructive design for on-chain identity, aimed at Web2 directory models (accounts, password resets, admin overrides) rather than at BTC/Core positions; its reliance on expressive script, UTXO-anchored rights and on-chain enforcement implicitly presumes a Bitcoin with unneutered scripting capability.

## Notable quotes
- "An 'account' is not identity, it is an entry in someone else's ledger."
- "The system forgets, and forgetting is security."
- "Recovery is not administrative grace; it is cryptographic certainty."
- "The script is the law."

## Connections
Shares the ECDH-based, per-transaction key derivation machinery with Craig's IP-to-IP payment protocol essays, and its UTXO-bonded incentive design echoes his broader theme that on-chain economics, not administrators, enforce honest behaviour.
