---
title: "Digital Cash Is Not a Vault"
date: 2026-08-12
era: substack
themes: [wallets-keys, security-economics]
source: summaries/digital-cash-is-not-a-vault.md
---

# Digital Cash Is Not a Vault — core principles

- **A private key is an authorisation credential, not a security architecture.** The real question is why compromise of one key should suffice to lose a substantial holding. Bitcoin was designed as cash for small casual transactions; single-key convenience suits spending money. Treating it as the custody model for savings, treasuries or generational wealth is a category error.
- **Security depth must scale with value at risk.** Bitcoin supported independent threshold (m-of-n) authorisation from v0.1. OP_CHECKSIG and OP_CHECKMULTISIG are native, not an alien banking practice. A transaction can be perfectly valid and still embody an inappropriate security policy.
- **Self-custody means the absence of an external custodian, not a single key.** It does not require a single signer, a single device, or even a single location. The objective is resilient control: one compromise must not equal system compromise.
- **Hardware wallets are components, not threat models.** Isolation reduces classes of exposure rather than abolishing them. A device that is very difficult to compromise remains a single point of failure if its compromise alone is sufficient. Moving from phone to hardware wallet is a stronger implementation of the same single point of failure.
- **Independence, not key count, is the measure.** Five keys from one RNG, one bag, one building, one supply chain or one administrator are common-mode failures. Under a threshold policy, one weak key is a compromised layer, not automatically a stolen holding.
- **The seed phrase is a dangerous abstraction.** Engraving twelve or twenty-four words in metal protects against fire, not against the fact that one recovered credential authorises everything.
- **Security is an optimisation problem rather than a ritual.** Expected cost is compromise probability times loss plus operating cost. Tiers follow: spending wallet (one key), reserve (multiple independent keys), long-term savings (geographic and technological separation), corporate treasury (segregation of duties, dual control, auditability, tested recovery).
- **Digital cash needs the convenience of cash; digital savings need the security of savings.** Convenience should be optimised subject to the required security level, not treated as the security level itself. A treasury should require more ceremony than a coffee. Device selection comes last, after value at risk, fund category, adversary classes, and how many independent failures may precede movement.
