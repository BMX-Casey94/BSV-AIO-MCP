---
title: "Economic Security"
date: 2019-05-22
era: medium
themes: [security-economics, mining-consensus, spv-light-clients, protocol-immutability]
source: summaries-medium/economic-security-d43518f47fd2.md
---

# Economic Security — core principles

- **Bitcoin’s security is economic, not cryptographic.** There is no 100% safe, only safe enough; a rogue majority will not risk a billion-pound plant to defraud small payments.
- **Reorgs and double-spends are different questions.** Whether a spend can be reversed, and whether a fork drops a transaction, are not the same problem; conflating them is a false equivalence.
- **Orphan blocks carry valid transactions forward.** The protocol loads both chains, recursively processes orphans, and a payment in one fork still appears in the other.
- **You do not fix double-spends; you detect them.** The merchant issues a template, the payer signs, the merchant polls commercial nodes; silence in seconds is safety, a clash is evidence of fraud.
- **Zero-confirmation is safe under that detection.** Sites selling digital goods were always fine to accept 0-conf; the method works when nodes are commercial entities, not hobbyist Raspberry Pis.
- **SPV is how the system scales.** There is no need for every user to validate the entire chain; Bitcoin was always meant to end in data centres with millions of light clients.
- **A 51% attacker cannot change the protocol.** Even SPV nodes reject a rule-breaking chain; all the attacker can do is bounce his own cheque, leaving a huge evidence trail.
- **Bitcoin is not designed to split.** Copy it and release a fork with different rules and you have an airdrop, not Bitcoin.
- **The system is fast payment plus an incentivised ledger.** It was never about cryptographic non-repudiation; a transaction is sufficiently irreversible in about an hour.
