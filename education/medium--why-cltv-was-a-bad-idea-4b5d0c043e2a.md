---
title: "Why CLTV was a bad idea"
era: medium
date: 2019-01-08
slug: why-cltv-was-a-bad-idea-4b5d0c043e2a
themes: [btc-critique, script-technical, lightning-l2, protocol-immutability]
source_summary: summaries-medium/why-cltv-was-a-bad-idea-4b5d0c043e2a.md
url: https://medium.com/@craig_10243/why-cltv-was-a-bad-idea-4b5d0c043e2a
---

# Why CLTV was a bad idea — core principles

- **nLockTime supersedes in-script locktime opcodes.** Any CLTV-style escrow is achievable with nLockTime: the payee pre-signs a refund transaction before funding, the payer holds it off-chain, and it becomes broadcastable after the locktime — no new opcode and no script bloat required.
- **Off-chain custody enables renegotiation.** Because the pre-signed transaction is a file held by the wallet, parties can agree revised terms at any point before maturity and settle early; nothing of the abandoned path is ever published. Conditions fixed into a published script remain public forever, so in-script locktimes lose privacy.
- **A signed transaction and a private key carry the same custody burden.** Both are files; the lost-file objection to nLockTime refunds applies equally to losing a key, so it cannot justify a protocol change.
- **Contract logic belongs at the periphery.** Bitcoin is designed to be simple at the centre, with logic created at the edges — as with the Internet. A wallet holding a menu of pre-signed outcomes (different counterparties at 10, 15, 17.5 minutes) is strictly more expressive than any fixed script template.
- **Expiry-denominated payments are uncommercial.** A payment that must be swept before a block height or be replaced is something no merchant should accept, and fee-bump rationales collapse precisely when congestion makes replacement impossible.
- **Keys are single-use interactions, not identities.** No web of trust and no persistent keys: keep the public key private and create an address/key pair for a single interaction. Identity is not used in Bitcoin.
- **Miners settle; users contract.** Nodes are miners — they validate, order and enforce immutability — while users are the peers who negotiate terms. Protocol changes made to serve contract construction invert that division of labour.
- **Resist opcode accretion.** Where a proposed opcode duplicates behaviour the original nLockTime design already achieves at the wallet layer, the correct engineering decision is to leave the base protocol untouched — a fixed protocol is itself the builder's guarantee.
