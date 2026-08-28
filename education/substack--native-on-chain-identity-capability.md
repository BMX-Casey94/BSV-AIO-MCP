---
title: "Native On-Chain Identity: capability-first, passwordless, and self-recovering"
era: substack
date: 2025-08-23
slug: native-on-chain-identity-capability
themes: [identity, wallets-keys, privacy, script-technical]
source_summary: summaries/native-on-chain-identity-capability.md
url: https://singulargrit.substack.com/p/native-on-chain-identity-capability
---

# Native On-Chain Identity: capability-first, passwordless, and self-recovering — core principles

- **Identity is a capability proven inside the transaction, not an account in a directory.** "An 'account' is not identity, it is an entry in someone else's ledger"; a valid signature or script evaluation is the only identity that matters, and any single administrator who can deny access breaks the system.
- **Ephemeral ECDH gives passwordless authentication with forward secrecy.** Each session derives fresh keys used once and destroyed — K = (k_A × P_B) = (k_B × P_A) — "the system forgets, and forgetting is security."
- **Devices bind by hash-chain derivation.** Each device holds a seed s and derives per-interaction scalars kᵢ = H(s ∥ i) mod n with public key Kᵢ = kᵢ·G on secp256k1; keys live for one transaction, and rotation on loss is enforced by script: Accept(K₁, …, Kₙ) → Accept(K₁, …, Kₙ, Kₙ₊₁) ∧ Timeout(K_old).
- **Recovery is cryptographic certainty, not administrative grace.** The master secret S is Shamir-split, f(x) = S + a₁x + … + a_{t−1}x^{t−1} (mod p), reconstructed by Lagrange interpolation S = Σ λⱼ·sⱼ over GF(p); the user always holds at least one share, so no custodian quorum can act without them.
- **Recovery custodians are bound by quorum, delay and bond.** Independent key-recovery centres across jurisdictions (e.g. Zurich, Singapore, São Paulo) require t-of-n quorum, on-chain timelocks allowing abort of fraudulent requests, and Bitcoin collateral slashed on misbehaviour — plus per-centre "Know Your Factor" checks (live video, hardware token, in-person verification).
- **Capabilities are economically anchored to UTXOs.** Rights are instantiated as bonded outputs; revocation is enforced by spending or burning; attestation markets let miners or exchanges sell optional timestamped signals ("this key was active at block height n") without becoming choke points.
- **Privacy is the default outcome.** Pairwise pseudonyms per counterparty, Merkle-structured credentials with selective disclosure (prove "age ≥ 18" by revealing one leaf), and audit without doxxing via signed receipt bundles.
- **AI agents are native capability holders.** Ephemeral service principals hold capability UTXOs capped by value, time and method (0.01 BTC for 24 hours, sub-delegated as 0.001 BTC for one hour), with script enforcing the narrowing — no directory permissions.
- **Builder guidance.** Stop copying Web2 patterns — admin backdoors, static permanent roles, indispensable resolver gatekeepers; resolvers become caches, and if every resolver vanishes the capabilities survive because they travel with the spend. "The script is the law."
