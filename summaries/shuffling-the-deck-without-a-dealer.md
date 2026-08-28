---
title: "Shuffling the Deck Without a Dealer"
date: 2026-04-23
slug: shuffling-the-deck-without-a-dealer
url: https://singulargrit.substack.com/p/shuffling-the-deck-without-a-dealer
themes: [privacy, script-technical, tokenisation, security-economics]
---

# Shuffling the Deck Without a Dealer
**Date:** 2026-04-23 | **URL:** https://singulargrit.substack.com/p/shuffling-the-deck-without-a-dealer
**Subtitle:** Forty-five years of mental-poker cryptography finally lands on Bitcoin — and it had to wait for the UTXO

## Core thesis
Mental poker, introduced by Shamir, Rivest and Adleman in 1979, is finally deployable — not because the cryptography is new, but because four prerequisites have converged: an elliptic-curve set-shuffle (the Burns–Wright patent GB 2616862 B), BSV's cheap unbounded UTXO chain, consumer hardware TEEs, and OS-level screen-capture defences. The UTXO model is the uniquely correct substrate because a card is a one-shot object, and single-use is a consensus-level primitive on BSV rather than an expensive application-layer simulation.

## Key arguments and claims
- The SRA 1979 scheme leaked: Goldwasser and Micali (1984) showed quadratic-residuosity commutative encryption distinguishes red suits from black without decryption; Crépeau (1986/87) and Barnett–Smart (2003) rebuilt the line on ElGamal, zero-knowledge shuffle proofs and the Decisional Diffie-Hellman assumption. By 2018 the protocol layer was solved — but the literature ignored the reveal endpoint (a screen is "a pile of pixels sitting in a shared display buffer") and assumed trusted channels between pre-identified parties.
- Construction: each player p holds per-card scalars v_{p,j} (derived via HKDF from a TEE-resident ECDH key); card j is locked by the combined public key Q_j = Σ P_{p,j}, whose private counterpart w_j = Σ v_{p,j} mod n is known to no one and never assembled. Each player re-randomises every point by a fresh scalar α_p and permutes the deck by π_p; indistinguishability reduces to DDH on secp256k1 with a hybrid bound of D·N times the per-step advantage. SHA-256 commitments c_p = H(S_p ‖ α_p ‖ π_p) posted to BSV bind each shuffle stage; cheating is detectable at close-out and collateral is forfeit.
- The "encrypted NFT" is the tuple (Q_j, P_{1..N,j}, E_j, c_j), where E_j is an AEAD ciphertext of the card's face under K(w_j) = HKDF-SHA256(w_j·G); the face is computationally inaccessible to any coalition smaller than N.
- The naïve reveal (handing over v_{p,j}) fails three ways — reusable secret, long-term key leakage, no context binding — and is fixed by single-use ECDH reveal tokens τ = HKDF-Expand(Z_{p,j,r}, (gid, j, ℓ, h_ℓ, E_r), L), valid exactly once and bound to game, card, draw position, block height and recipient.
- Spending uses the Savanah–Wright threshold-ECDSA protocol (WO 2019/034951 A1): shares via joint random secret sharing, joint nonce generation, Berlekamp–Welch decoding tolerating ⌊(partials − k)/2⌋ malicious partials; the output is an ordinary (r, s) signature at OP_CHECKSIG — no fork, no new opcode, no multisig script.
- The visual layer is treated as first-class: Android FLAG_SECURE (since Android 3.0), ScreenCaptureCallback (Android 14), iOS UIScreen.isCaptured (iOS 11). The paper concedes physical photography of the screen is undefeatable — the aim is raising attack cost, not perfection.
- Key custody rests on Apple Secure Enclave, ARM TrustZone and Intel SGX, with honest treatment of Foreshadow-class side channels, the iOS P-256-versus-secp256k1 gap, three deployment tiers, CVE tracking, per-game key refresh and proactive share refresh.
- Economics: a 4-player 52-card hand costs ~8,124 bytes ≈ 4,062 satoshis ≈ 0.12 US cents at 0.5 sat/byte and $30/BSV; comparable Ethereum L1/L2 deployments run $0.50–$50. BSV's byte-fee market is "structurally non-congestive"; Ethereum's is "structurally congestive" — dispositive for commercial gaming.
- Limitations stated plainly: cost figures are engineering estimates, not benchmarks; security rests on DDH; TEE compromise is a plannable tail event; UI protection defeats only casual attackers; the primitives are patent-licensed (nChain Licensing AG); the protocol is not a voting system and not "trustless" in the broad sense.

## How Craig reasons (his model/logic)
A compositional systems-engineering method over a historical-literature survey: identify the primitive each era contributed, then show that correct composition — with explicit threat modelling and enumerated limitations — is the real contribution. Underneath sits substrate-first reasoning: match the semantics of the object (one-shot cards) to the consensus primitive that already provides them (UTXO single-spend), and price the result against rival fee-market structures.

## Where this contradicts BTC-mainstream logic
- Account-model NFT standards (ERC-721) are "a pile of workarounds for a substrate that was never designed to host one-shot objects"; re-entrancy, mint-twice and phantom-ownership bugs are substrate errors, not implementation bad luck.
- The forty-five-year failure to deploy is "an indictment of the industry's substrate choices, not of the literature's intelligence."
- Against "trustless" marketing: residual trust assumptions (TEE vendor, honest-majority BSV hashpower, message delivery) are stated rather than dissolved.
- Against Ethereum fee economics: per-game cost variance of 10× or more is a structural property of congestion pricing, not an engineering oversight.

## Notable quotes
- "A card is not an entry in an ERC-721 mapping. A card is a spent or unspent output."
- "A paper that does not state its limitations has not specified its system."
- "The cryptographic talent has been there. The substrate has not been there. Now it is."
- "At some point you have to build the thing."

## Connections
The encrypted-NFT primitive and Savanah–Wright threshold signing are exactly the machinery reused in "The Sealed Envelope, Cryptographically Considered"; the fee-market contrast echoes the BSVM economics in "What Siggi Built"; the patent-priority theme connects to "The Drivechain Mechanism Was Already Patented".
