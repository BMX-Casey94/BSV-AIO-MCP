---
title: "Custodial standards"
date: 2019-05-10
era: medium
themes: [law-regulation, audit-accounting, wallets-keys, intermediaries]
source: summaries-medium/custodial-standards-9dbcfe1f4c4e.md
---

# Custodial standards — core principles

- **Custodians need bank-grade minimums.** PCI-DSS is a floor for anyone who accepts and stores other people’s money online; crypto custody should sit no lower.
- **Most “hacks” are missing logs.** Without required audit trails, internal embezzlement is easy to relabel as an external attack.
- **Threshold keys keep keys off servers.** A safe-wallet design means funds need not sit on the exchange box; where they do, the operator must answer how customer money is protected.
- **Crypto-only exchanges are custodial wallets in law.** MLD5 already treats them as such; operating without the programme is money-laundering, as Liberty Reserve discovered.
- **Bitcoin can anchor undeletable logs.** Organisational logins (for example every SSH session to a custodial database) can be written on-chain, obscured from outsiders, so an attacker cannot wipe the evidence.
- **Branches should not hold keys.** Non-custodial architecture keeps keys at head office; that is how Bitcoin was designed to be used in a firm.
- **The chain makes deletion of evidence impossible.** That is the professionalising property: Visa-grade accountability rather than a cowboy industry that cannot be trusted.
