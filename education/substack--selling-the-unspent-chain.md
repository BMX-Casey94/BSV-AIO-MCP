---
title: "Selling the Unspent Chain"
era: substack
date: 2026-05-28
slug: selling-the-unspent-chain
themes: [micropayments, tokenisation, lightning-l2, protocol-immutability]
source: summaries/selling-the-unspent-chain.md
---

# Selling the Unspent Chain — core principles

- **A hash chain is inventory, not a bearer instrument.** Pre-images are copyable. A seller who retains them can race a buyer to redemption. The race is closed not by trusting the seller to delete their copy but by making the seller's copy worthless.
- **Three layers must be combined.** The hash chain amortises one signature over a million cheap hashes; the payment channel settles the latest state on chain; the e-cash token is the coin transferred by key replacement so the giver no longer holds it.
- **Unspent links become sellable when bound to tokens.** Each unspent link is an e-cash token whose transfer extinguishes the seller's claim and whose uniqueness the fixed Bitcoin ledger enforces. Partial reveal at position k certifies every coin up to k; the remainder is a well-defined block that can be sold.
- **The original protocol already supplies the channel.** Transaction replacement, nSequence and signature-hash flags let the payer commit to an input while leaving the settlement output composable. Two on-chain events — open and close — bracket the whole life of the chain.
- **Overhead scales with sales, not with links.** Selling a block of 350,000 links costs one token split and one key replacement, not 350,000 operations. Nothing is written to the ledger during the sales.
- **No trusted online mint is required.** Over-issue is impossible on a fixed-supply ledger; double-spend is caught by consensus rather than a mint's database. Residual trust is liveness and correct execution, not issuance. The construction needs no consensus change.
