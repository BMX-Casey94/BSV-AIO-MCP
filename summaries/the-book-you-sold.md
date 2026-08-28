---
title: "The Book You Sold"
date: 2026-04-26
slug: the-book-you-sold
url: https://singulargrit.substack.com/p/the-book-you-sold
themes: [property-rights, tokenisation, privacy, intermediaries]
---

# The Book You Sold
**Date:** 2026-04-26 | **URL:** https://singulargrit.substack.com/p/the-book-you-sold
**Subtitle:** On the difference between owning a digital thing and merely having seen it

## Core thesis
Every digital sale today is quietly fraudulent: bits copy, so the seller never actually parts with the thing sold, and the NFT as deployed changed nothing — "a deed of title for a house that has no walls." A construction combining hierarchical secret sharing, a trusted execution environment, and a pseudonymous on-chain oracle pool makes decryption capability revocable on transfer, restoring for dynamic digital assets the medieval codex's property that selling means parting with.

## Key arguments and claims
- The two obvious approaches fail: handing the buyer the decryption key leaves the seller with the key "written down in seventeen places, three of them in the cloud"; entrusting the key to a single server achieves revocation but concentrates every asset in a corporation that can be "subpoenaed, hacked, bribed, or destroyed."
- The third path: the key must exist only as a relationship. Using Shamir-style sharing (1979) in Tassa's hierarchical form, the key is split seven ways — three owner-tier shares sealed inside the owner's TEE (which computes with them but cannot disclose them, even to the owner) and four oracle-tier shares held by an open, pseudonymous oracle pool; any five reconstruct.
- Reading protocol: the TEE broadcasts a request with a per-session public key; two oracles each compute the ECDH shared secret z_j = sk_oracle_j × P_session and post E_j = AEAD(HKDF(z_j), s_j) to the ledger with a payment claim; the TEE recovers the shares, reconstructs K, decrypts the next chapter, and wipes the key. Alice never sees the key; oracles never see each other.
- Transfer: Alice's on-chain spend reissues the token to Bob; the oracle pool re-runs share generation, sealing fresh owner-tier shares into Bob's TEE; Alice's TEE refuses the old shares because the ledger says she is not the owner, and oracles will encrypt only to the current owner's session keys.
- Contestation economics: a misdirecting oracle is exposed by a public challenge transaction citing both the transfer and the misdirected response; its escrow is slashed. Security needs "a single honest watcher anywhere in the world," not an honest majority: Pr(false attestation survives W blocks) ≤ W × p_no_watcher, with expected loss at least b_min per response.
- Honest boundary: the construction cannot revoke memories or already-copied plaintext — "Bits, once observed, cannot be unobserved... it is a defect of the universe." For static, fully consumed assets it adds nothing beyond what physical theft provides for a paper book; for dynamic assets (streams, evolving game state, per-session software licences, updating models) it restores genuine parting.
- Defence in depth: even if Alice extracts her three TEE shares via a silicon attack, she still needs two oracle shares, which post-transfer are denied to her — the TEE "is not a single point of failure because it is not the single point of trust."
- Applications: software licensing without a vendor licence-server (whose bankruptcy currently kills your software); a genuine secondary market for digital media (Steam, Audible and Kindle refuse transfer because "the parties profiting from the medium prefer that you cannot" — purchases are "leases dressed up as purchases"); enterprise access revocation without administrators; breach resilience, since exfiltrated data becomes a useless historical snapshot once keys are bound to TEEs and oracle pools.
- The system is anonymous at every layer: oracles know neither Alice nor Bob nor each other, accumulate reputation under an abandonable pseudonymous key, and are paid per response — structurally the same incentive design as Bitcoin mining. It supports one-shot transfers and continuous streaming with the same primitives.

## How Craig reasons (his model/logic)
Property theory reduced to architecture: he begins from what ownership means (parting with), shows the digital medium abolished it, and rebuilds it cryptographically — secret sharing for capability, the ledger for ownership state, economic slashing for enforcement. Historical analogy (the medieval bookseller) frames the argument, and explicit equations (K = combine(...); E_j = AEAD(HKDF(z_j), s_j)) carry the weight "that contracts and compliance officers cannot."

## Where this contradicts BTC-mainstream logic
- Against NFT orthodoxy: a transferable token pointing at an immovable file is "a transfer of social belief," not of capability; the mainstream settled for deeds without walls.
- Against platform-mediated licensing: corporate licence servers are single points of subpoena, hack and bankruptcy; the construction needs no administrator.
- Against the conflation of revocation with surveillance: the system is anonymous end-to-end — "It is not the absence of rules; it is the absence of gatekeepers."
- Against custodial "solutions" to digital ownership generally: trust is distributed across many small, ledger-visible economic decisions rather than concentrated in any body.

## Notable quotes
- "We have invented a deed of title for a house that has no walls."
- "Bits, once observed, cannot be unobserved. Memories, once formed, cannot be erased."
- "It is not the absence of rules; it is the absence of gatekeepers."
- "This is no longer yours."

## Connections
The TEE-plus-threshold-plus-ledger-oracle pattern is the same custody architecture as in "Shuffling the Deck Without a Dealer" and "The Sealed Envelope, Cryptographically Considered"; the oracle incentive model is explicitly analogised to Bitcoin mining, tying the essay to the batch's security-economics theme.
