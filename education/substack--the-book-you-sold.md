---
title: "The Book You Sold"
era: substack
date: 2026-04-26
slug: the-book-you-sold
themes: [property-rights, tokenisation, privacy, intermediaries]
source_summary: summaries/the-book-you-sold.md
url: https://singulargrit.substack.com/p/the-book-you-sold
---

# The Book You Sold — core principles

- **Ownership of a digital thing requires parting with it.** Bits copy, so a seller who retains decryption capability never actually parts with the thing sold; a transferable token pointing at an immovable file is "a deed of title for a house that has no walls" — a transfer of social belief, not of capability.
- **The two obvious architectures both fail.** Handing over the decryption key leaves the seller's copies everywhere; entrusting it to a single server achieves revocation but concentrates every asset in one corporation that can be "subpoenaed, hacked, bribed, or destroyed."
- **The key can exist only as a relationship.** Split the key with hierarchical (Tassa-form) Shamir sharing — owner-tier shares sealed inside the owner's TEE, which computes with them but cannot disclose them, plus oracle-tier shares held by an open, pseudonymous oracle pool — so that no party, including the owner, ever holds the key.
- **The ledger carries ownership state; the oracles carry capability.** A reading request has oracles post AEAD-encrypted shares against the requester's session key with a payment claim; the TEE reconstructs, decrypts and wipes; on transfer, the on-chain spend reissues the token, the pool re-shares to the new owner's TEE, and the old owner's shares become useless because the ledger says so.
- **A single honest watcher suffices for oracle accountability.** Misdirecting oracles are exposed by a public challenge transaction and their escrow slashed: Pr(false attestation survives W blocks) ≤ W × p_no_watcher — security through one honest watcher anywhere in the world, not an honest majority.
- **Distribute trust across many small, ledger-visible economic decisions.** Pseudonymous oracles accumulate reputation under abandonable keys and are paid per response — structurally the same incentive design as Bitcoin mining — with anonymity at every layer: "it is not the absence of rules; it is the absence of gatekeepers."
- **The TEE is not a single point of failure because it is not the single point of trust.** Even extracting all owner-tier shares via a silicon attack leaves the attacker short of the threshold, because post-transfer oracle shares are denied to the previous owner.
- **State the boundary honestly.** Bits once observed cannot be unobserved; for static, fully consumed assets the construction adds nothing beyond what physical theft provides for a paper book — the value is for dynamic assets: streams, evolving game state, per-session software licences and updating models.
- **The applications are concrete builder targets.** Software licensing that survives a vendor's bankruptcy; a genuine secondary market for digital media ("purchases" today are leases dressed up as purchases); enterprise access revocation without administrators; and breach resilience, because exfiltrated data becomes a useless historical snapshot once keys are bound to TEEs and oracle pools.
