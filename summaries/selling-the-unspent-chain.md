---
title: "Selling the Unspent Chain"
date: 2026-05-28
slug: selling-the-unspent-chain
url: https://singulargrit.substack.com/p/selling-the-unspent-chain
themes: [micropayments, tokenisation, lightning-l2, protocol-immutability]
---

# Selling the Unspent Chain
**Date:** 2026-05-28 | **URL:** https://singulargrit.substack.com/p/selling-the-unspent-chain
**Subtitle:** Combining Payment Channels, E-Cash, and Partial Hash Chains So a Million Micropayments Can Be Sold Before They Are Spent

## Core thesis
A hash chain of micropayments is not natively a bearer instrument, because pre-images are copyable and a seller who retains them can race a buyer to redemption. The essay's single claim: a hash chain becomes securely sellable — in whole or in defined blocks — when each unspent link is bound to an e-cash token whose transfer extinguishes the seller's claim and whose uniqueness the fixed Bitcoin ledger enforces. Three layers must be combined: the hash chain for cheap amortised payments, the payment channel for on-chain settlement of the latest state, and the electronic-cash construction for denominated bearer tokens transferred by key replacement.

## Key arguments and claims
- Hash chains (Lamport 1981; Rivest & Shamir's PayWord, 1997) amortise one signature over the entire chain; the per-coin cost is a single hash evaluation. A million-link chain is a stack of a million coins sharing one signed commitment.
- Chains are ordered and partial-revealable: revealing the pre-image at position k implicitly certifies every coin up to k. A holder spent up to position 300,000 owns a contiguous, well-defined block of 700,000 unspent links — the thing to be sold.
- The bare chain fails resale: pre-images are just numbers, copyable at will, so nothing extinguishes the seller's ability to spend what was sold.
- Payment channels (the original protocol's transaction-replacement mechanism; Decker & Wattenhofer's 2015 duplex construction with an invalidation tree of decrementing time-locks) enforce the latest agreed state on chain; the BitcoinSV streaming-channel construction uses signature-hash flags committing to the payer's input while leaving the settlement output composable.
- The tokenisation patent (Wright & Savanah, 2022; US 12,406,237 B2) embeds metadata in a pay-to-script-hash redeem script at a public-key slot; tokens are divisible into spent and unspent portions and transferable with issuer co-signature — letting the unspent remainder be split at the current chain position and re-issued to a buyer.
- The finite-token construction (Wright & Savanah, 2025; US 12,271,466 B2) publishes a finite set of one-satoshi-backed key-pair tokens whose holder mapping is unpublished, yielding anonymous bearer units within the set; double-spend is prevented by the ledger because each token's satoshi can be spent once.
- The off-chain transfer patent (nChain, 2024c; US 12,056,694 B2) computes a shared key from the first party's key and a platform key; on transfer "the first party's key becomes invalid" — the seller's control is extinguished at the instant the buyer's is created. Some generated transactions remain valid for on-chain recording even if the platform fails entirely.
- Worked example: 1,000,000 links denominated at one satoshi each; 300,000 spent; the remainder sold as two blocks of 350,000 to two buyers; 300,000 + 350,000 + 350,000 = 1,000,000 exactly, with nothing written to the ledger during the sales.
- Amortisation: selling a block of 350,000 links costs one token split and one key replacement, not 350,000 operations; overhead scales with the number of sales and settlements, not the number of links. Across the chain's whole life the ledger records two events — channel open and channel close.
- Against Chaum (1983): no trusted online mint is required, because over-issue is impossible on a fixed-supply ledger and double-spend is caught by consensus rather than a mint's database. Residual trust is reduced to a platform trusted only for liveness and correct execution; anonymity is within the published set and statistical.

## How Craig reasons (his model/logic)
Compositional systems engineering: decompose a concrete commercial problem into orthogonal functions (amortisation, settlement, bearer transfer), exhibit each layer's failure mode in isolation, then assemble peer-reviewed constructions and the operative claims of specific patents into a single instrument — closing with an honest statement of residual trust assumptions and what the patents do and do not claim.

## Where this contradicts BTC-mainstream logic
No direct engagement — this post is a constructive engineering synthesis on the original protocol, arguing only that the whole construction "is built on the original protocol rather than a modified chain" because none of its mechanisms requires any consensus change.

## Notable quotes
- "a hash chain becomes securely sellable when each unspent link is an e-cash token whose transfer extinguishes the seller's claim and whose uniqueness is enforced by the ledger."
- "The race condition is closed not by trusting the seller to delete their copy but by making the seller's copy worthless."
- "The hash chain is the inventory; the channel is the till; the e-cash token is the coin; the key-replacement transfer is the act of handing the coin over so the giver no longer holds it."

## Connections
Extends the sub-satoshi channel engineering of "The Builder's Week" and rests on the integer-ledger, fixed-base argument of "The Integer and the Idol"; its e-cash-without-a-mint contrast with Chaum parallels "The Abolition of the Dealer"'s dissolution of trusted third parties.
