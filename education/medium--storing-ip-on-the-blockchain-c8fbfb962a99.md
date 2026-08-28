---
title: "Storing IP on the Blockchain"
era: medium
date: 2019-01-27
slug: storing-ip-on-the-blockchain-c8fbfb962a99
themes: [tokenisation, micropayments, property-rights, script-technical]
source_summary: summaries-medium/storing-ip-on-the-blockchain-c8fbfb962a99.md
url: https://medium.com/@craig_10243/storing-ip-on-the-blockchain-c8fbfb962a99
---

# Storing IP on the Blockchain — core principles

- **The chain is a tamper-proof IP registry.** The author encrypts the work with their own public key and embeds it in a transaction (e.g. within OP_PUSH … OP_DROP in the locking script); proof-of-work immutability yields a provable, timestamped, undeletable certificate of ownership that retains the moral right with the author.
- **Ownership is proven by capability, not assertion.** The author proves ownership at any time by decrypting the on-chain content and signing a message using the Bitcoin root hierarchical key.
- **Sell access as a generalised atomic swap.** The author re-encrypts the content to the reader's key plus a fresh secret (T2); the reader's payment (T3) is spendable only if the secret is revealed; when the author spends T3 the decryption key appears on-chain. Either both legs complete or neither does — payment and delivery are one indivisible act.
- **ECDSA-only is a light requirement.** The fair-exchange construction needs no hash-puzzle machinery: payment in bitcoin with ECDSA-controlled transactions suffices, and the pattern generalises to any controlled resource — funds, web-app access, a rental car, an encrypted document.
- **Micropayments make per-use licensing viable.** Assign an address per work so users pay small amounts directly to the author — impossible on legacy rails whose transaction costs exceed the licence fee — and let smart contracts self-execute licences upon use, automating the collecting-society workload.
- **On-chain timestamping already has a commercial ecosystem.** Notarisation and registration services (P&TS of Switzerland, Bernstein Technologies, Binded, proofstack.io, Proof of Existence) demonstrate demand for immutable evidence of creation; government acceptance of such records is a question of time.
- **Unbounded data capacity is the enabler.** Embedding encrypted documents in locking scripts and pricing per-use payments on-chain presuppose a ledger without artificial data or throughput limits.
