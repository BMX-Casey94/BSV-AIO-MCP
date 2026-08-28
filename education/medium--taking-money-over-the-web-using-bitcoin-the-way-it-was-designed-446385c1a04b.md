---
title: "Taking money over the web using Bitcoin — the way it was designed"
era: medium
date: 2019-01-20
slug: taking-money-over-the-web-using-bitcoin-the-way-it-was-designed-446385c1a04b
themes: [wallets-keys, privacy, tokenisation, micropayments]
source_summary: summaries-medium/taking-money-over-the-web-using-bitcoin-the-way-it-was-designed-446385c1a04b.md
url: https://medium.com/@craig_10243/taking-money-over-the-web-using-bitcoin-the-way-it-was-designed-446385c1a04b
---

# Taking money over the web using Bitcoin — the way it was designed — core principles

- **IP-to-IP exchange is Bitcoin's peer-to-peer layer.** The 2009 wallet's IP-to-IP mode — direct payer-to-payee communication — was the true P2P aspect of Bitcoin; nodes (miners) settle while wallets transact. Restoring that intent means merchant payments negotiated directly between the parties and then settled on-chain.
- **Derive per-invoice payment addresses from a common secret.** The merchant publishes a CA-registered ECDSA certificate key P(Bob); the payer sends a single-satoshi dust transaction carrying an AES-encrypted message Encrypt(S)[M]; both sides derive the actual payment address P(Bob-Paid) = P(Bob) + HMAC(M~S) × G. Only the two parties know the linkage — no address reuse, no external correlation of inputs to receipts.
- **A dormant dust address doubles as a revocation tripwire.** If the merchant spends from the published address only when the certificate expires, any theft of its funds acts as an automated alert to all customers — it can even be seeded with a honeypot balance.
- **The ledger is the accounting system.** Derived addresses give a complete audit trail of every payment address used, linkable to invoices and purchase orders, that cannot be deleted, altered or manipulated; VAT/sales tax can be split to the tax authority inside the payment transaction itself.
- **Tokenised fiat rides Bitcoin rails.** Bank-issued GBP tokens (via Tokenized or the WO2017145004A1 patent family) let a payer settle in fiat-denominated value while Bitcoin provides the plumbing for the exchange.
- **On-chain messages replace EDI.** Legacy EDI bills by kilo-character with 128–512-character minimum record lengths and costs of $0.20–$3 per transaction; an encrypted ~150-byte invoice in a Bitcoin transaction costs fractions of a cent and removes the interchange middleman entirely.
- **Never reuse addresses; link payments and invoices privately.** Key hygiene plus shared-secret derivation gives pseudonymous commerce that remains fully auditable by the parties — privacy without obscuring the ledger.
