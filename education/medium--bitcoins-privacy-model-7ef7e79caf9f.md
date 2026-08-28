---
title: "Bitcoin’s privacy model"
era: medium
date: 2018-12-11
slug: bitcoins-privacy-model-7ef7e79caf9f
themes: [privacy, wallets-keys, identity, scaling-throughput]
source_summary: summaries-medium/bitcoins-privacy-model-7ef7e79caf9f.md
url: https://medium.com/@craig_10243/bitcoins-privacy-model-7ef7e79caf9f
---

# Bitcoin’s privacy model — core principles

- **The white paper's privacy model (Section 10): public transactions, unlinked identities, keys never reused.** This is more robust than the banking model, where a trusted third party sees everything and "any breach is catastrophic" — a system fragile by design.
- **Never reuse keys.** One-time keys act as "a security and privacy firewall" and can be discarded after signing; address reuse is what enables dust and spam tracking attacks — if no one kept old keys, dusting would be worthless.
- **Coin splitting (white paper Section 9) enables private SPV spending.** Split a coin into many UTXOs in advance for fractions of a cent, then spend multiple coins in a single block without unconfirmed chains; randomised split values make linkage exponentially harder.
- **Privacy scales with usage.** More transactions mean a larger and more private system: at retail scale (~15 million transactions/day, ~400 tps in operating hours) adversarial analysis is infeasible — yet the ledger remains "completely traceable (for example in a tax audit) with a minimum search time" for legitimate key-holders.
- **P2P means person-to-person, not node-to-node.** The payer never needs to be online, nor to run a node or hold an IP address (NFC, headers-only SPV); miners enter the picture only when the receiver broadcasts.
- **Identity can be layered on without sacrificing privacy.** An attested root key pair (even PKI-bound) can derive linked sub-keys per use (patent EP3268914B1), combining registered identity with per-transaction privacy.
- **Custodial processors and Layer-2 networks recreate the trusted-third-party model.** BitPay/Coinbase-style processors and Lightning/Plasma-style overlays reintroduce the fragile intermediary Bitcoin was designed to eliminate.
- **Use Bitcoin as designed rather than adding complexity.** "The key to making Bitcoin work well is not to add complexity, but to use it as it was originally designed."
