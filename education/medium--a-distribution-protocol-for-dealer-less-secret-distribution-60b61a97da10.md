---
title: "A distribution protocol for dealer-less secret distribution"
era: medium
date: 2018-10-17
slug: a-distribution-protocol-for-dealer-less-secret-distribution-60b61a97da10
themes: [wallets-keys, security-economics, intermediaries]
source_summary: summaries-medium/a-distribution-protocol-for-dealer-less-secret-distribution-60b61a97da10.md
url: https://medium.com/@craig_10243/a-distribution-protocol-for-dealer-less-secret-distribution-60b61a97da10
---

# A distribution protocol for dealer-less secret distribution — core principles

- **Centralised custody fails economically.** "As the value of bitcoin increases, more incidents such as those involving Mt Gox and Bitfinex will occur in standard centralised systems" — exchange hacks are an economic inevitability of centralised key custody, not mere operational bad luck.
- **Dealer-less distributed key generation.** The scheme uses "group-based threshold cryptography with the ability to be deployed without a dealer and which supports the non-interactive signing of messages" — private keys are split into shares distributed "to individuals and groups" with no centralised control.
- **Threshold ECDSA.** Extending threshold DSA to ECDSA yields "an entirely distributive signature system for Bitcoin that mitigates against any single point of failure".
- **Recovery and extensibility.** Combined with "retrieval schemes involving CLTV and multisig wallets", the construction is "infinitely extensible and secure" — timelocked recovery paths complement share distribution.
- **Blind signatures.** "Using Group and ring-based systems we can implement blind signatures against issued transactions" — privacy-preserving authorisation is compatible with threshold custody.
- **Key management is organisational.** Security comes from distributing shares of a key across groups and roles, not from one individual guarding a single seed — corporate control of Bitcoin requires threshold schemes, not larger multisig.
