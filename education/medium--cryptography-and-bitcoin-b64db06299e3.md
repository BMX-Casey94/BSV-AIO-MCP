---
title: "Cryptography and Bitcoin"
date: 2020-02-20
era: medium
themes: [privacy, identity, law-regulation, btc-critique]
source: summaries-medium/cryptography-and-bitcoin-b64db06299e3.md
---

# Cryptography and Bitcoin — core principles

- **Bitcoin is not encrypted.** Transactions are conducted, exchanged, and validated in clear text. A hash is a secure index to a file — a checksum — not an encryption algorithm. Only digital signatures are cryptographic.
- **The ledger is append-only, not frozen.** Changes are made by adding new records; legally mandated correction for public companies works the same way and underwrites court-ordered remediation.
- **“Anonymous” means nameless, not identity-less.** The white paper uses the Black’s Law sense. Hierarchical keys can keep a registered identity key off the public exchange while remaining provably linked to the transactor, using the homomorphic properties of ECDSA.
- **Re-key each payment.** As the white paper states, a new key pair should be used for each transaction so payments are not linked to a common owner.
- **Privacy is unlinkability to the public, with known counterparties.** Transacting parties hold each other’s verified identities; the public sees unlinkable records. That is the opposite of dark-web anonymity.
- **Identity sits at the edges.** Trusted-third-party honeypots fail catastrophically; distributing identity data to the edges of the graph raises the cost of attack.
- **Law applies on its own terms.** Transmissions above USD 10,000 trigger US reporting; business relationships above EUR 15,000 trigger customer due diligence. Bitcoin is not immune.
- **Freezing can follow a key and its branches.** Because nothing on-chain is encrypted, a freezing order can be applied to an individual key and any transaction that branches from it, without nodes or exchanges interfering.
- **Keys are not title.** Merely owning keys is insufficient to prove ownership of coins where due diligence was inadequate (*Armstrong DLW GmbH v Winnington Networks Ltd*).
- **Traceability is a design feature.** The system significantly limits insider trading, tax evasion, money laundering, and cybercrime; it was never intended to act against courts and government.
