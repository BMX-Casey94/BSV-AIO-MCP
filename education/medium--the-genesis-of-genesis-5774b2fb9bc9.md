---
title: "The Genesis of Genesis"
date: 2019-04-12
era: medium
themes: [audit-accounting, script-technical]
source: summaries-medium/the-genesis-of-genesis-5774b2fb9bc9.md
---

# The Genesis of Genesis — core principles

- **The genesis 50 bitcoin is an unspendable anchor, not lost money.** Those coins do not exist as spendable bitcoin; at launch they were 50 times zero, so nothing of value was lost.
- **The genesis block was designed never to be spent.** ECDSA permits a signature linking to an invalid or unknown public key, including a self-signed construction via a known ephemeral key.
- **The timechain is a tree, not a slogan.** Early source described a tree-shaped structure starting with the genesis block at the root; orphans and forks are part of how Bitcoin works and affect mining, not transactions.
- **Bitcoin is an immutable audit store.** Digital auditing techniques need a single immutable data store so that analysis of financial statements has a fixed record — that is a primary reason for the system, not only money.
- **General-ledger accounting belongs on the chain.** The first nChain patent application (WP0001) is about general-ledger accounting on the blockchain for that reason.
- **The initial subsidy was a reinvestment incentive.** A larger released subsidy (50 × COIN rather than a fractional early figure) was chosen so early adopters could reinvest in the network — not so they could hoard.
- **Public-key recovery is a property of ECDSA.** A public key can be recovered from signature (R, S) plus the message; that fact sits behind how genesis and early keys are analysed.
