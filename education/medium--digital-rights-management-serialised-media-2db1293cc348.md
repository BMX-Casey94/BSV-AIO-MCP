---
title: "Digital Rights Management: Serialised Media"
date: 2019-03-24
era: medium
slug: digital-rights-management-serialised-media-2db1293cc348
themes: [script-technical, intermediaries, tokenisation]
source: summaries-medium/digital-rights-management-serialised-media-2db1293cc348.md
---

# Digital Rights Management: Serialised Media — core principles

- **Fair exchange: both honour, or neither does.** Two parties either both complete an exchange (such as a contract) or neither of them do. Deterministic fair exchange is impossible without a trusted third party (Even and Yacobi, 1980).
- **The validated blockchain is that trusted third party.** Under the Bitcoin protocol the chain itself supplies the missing TTP, enabling atomic, third-party-free exchange of entities of value — bitcoin, other currencies, contracts, goods, services, or secrets used in media and DRM.
- **Script already suffices.** Locking and unlocking scripts, OP_HASH160 of a secret, and locktime semantics (non-zero locktime = earliest Unix time a transaction may be added; zero = immediate broadcast) implement the protocol. "It is inherent that the scripting language supports the described algorithm" — no protocol change is needed.
- **Symmetric atomic exchange.** The construction offers the benefits of atomic cross-chain trading (separate transactions, no third party, atomic and secure) while being perfectly symmetric. Prior art (the Bitcoin Wiki atomic-swap page; Tiernan's BIP) hinted that combining secrets could yield a more symmetric solution; the claim is that Bitcoin Script can demonstrate it.
- **Commerce, not speculation.** The point of the mechanism is fair exchange of contracts, goods and DRM secrets — serialised media and rights — not trust-minimised trading for its own sake.
