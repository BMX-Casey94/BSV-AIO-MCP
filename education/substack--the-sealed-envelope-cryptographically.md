---
title: "The Sealed Envelope, Cryptographically Considered"
era: substack
date: 2026-04-24
slug: the-sealed-envelope-cryptographically
themes: [script-technical, tokenisation, security-economics, privacy]
source_summary: summaries/the-sealed-envelope-cryptographically.md
url: https://singulargrit.substack.com/p/the-sealed-envelope-cryptographically
---

# The Sealed Envelope, Cryptographically Considered — core principles

- **Hash commitments are the correct primitive only when nothing better exists.** A commit-reveal auction (c_i = H(b_i ‖ r_i)) is functional but structurally weak: bespoke application code re-implemented and re-broken per auction; non-transferable commitments (a dead device forfeits the bid); and a reveal phase that is a liveness hazard patched with deposits, extended windows and trustees.
- **A threshold-encrypted bid UTXO makes the reveal a native primitive.** Encrypt the bid behind a combined public key built from per-party contributions so nobody holds the combined private key; revealing the bid means spending the UTXO under k-of-(N+1) threshold-ECDSA cooperation — "the reveal is not application logic; the reveal is the native primitive 'spend this UTXO'."
- **Bearer transferability falls out of the UTXO by construction.** The bid UTXO moves by an ordinary spend — a hospitalised bidder can transfer to a spouse (with the private share transmitted off-chain, an honestly flagged weaker form of transfer); hash commitments are zero-percent transferable.
- **Threshold-gated reveal is cryptographically incompatible with unilateral opening.** No bidder can open any bid even colluding with a bribed or state-compromised auctioneer, because k cooperating parties are mathematically required — a property the hash-commitment pattern cannot be patched into having.
- **Infrastructure beats application code.** Bid UTXOs reuse existing tooling — mempool monitoring, fee estimation, transaction libraries, accounting and threshold-signing infrastructure — without modification: "hash commitments are application code; encrypted NFTs are infrastructure."
- **Cost is an engineering property of the substrate.** A ten-bidder auction totals 9,435 bytes ≈ 4,717.5 satoshis at 0.5 sat/byte ≈ $0.00142 at $30/BSV; a 100-bidder auction ≈ one cent; an equivalent account-model contract (~530,000 gas) runs ~$0.05–$0.17 depending on congestion — 36–120× dearer, because predictable byte-linear pricing is a design choice.
- **Native curve operations decide what a chain can host.** A construction needing secp256k1 scalar multiplication, unbounded transaction size, full Script and stable fees cannot be ported to a chain lacking them (curve emulation at ~10^7 gas per multiplication; OP_RETURN size limits; volatile fees) — substrate capabilities should drive protocol design, not brand loyalty.
- **Enumerate what the construction does not solve.** K-party cooperation is a liveness assumption; coercion ("a regulator with a gun") is out of scope; the TEE is the weakest link (mixed-vendor deployments reduce correlated compromise); mechanism design — first-price versus Vickrey — remains the auctioneer's problem.
