---
title: "The Immutable Stock and the Unbounded Flow"
era: substack
date: 2026-05-28
slug: the-immutable-stock-and-the-unbounded
themes: [protocol-immutability, micropayments, script-technical, monetary-economics]
source: summaries/the-immutable-stock-and-the-unbounded.md
---

# The Immutable Stock and the Unbounded Flow — core principles

- **The stock is fixed; the flow is not.** The monetary base bounds simultaneously-held balances at one instant, not payments. A payment is a transfer of control; the same unit recirculates. The bound on payments is velocity and settlement architecture, not the base.
- **Immutability is consensus under the original rules.** Any coalition that changes supply, divisibility or schedule must accept blocks the original rules reject, producing two ledgers. The party that changed the rules is, definitionally, the party that forked away. Naming is not validation.
- **The satoshi count is constitutive of the asset.** One bitcoin is exactly 100,000,000 satoshis. The ~21 million figure emerges from the subsidy schedule — 5,000,000,000 satoshis per block, halved every 210,000 blocks by a truncating integer right-shift — not from a slogan in the white paper.
- **Hash chains amortise one signature over n payments.** A signed commitment to a chain of length n underwrites n sequential micropayments with only the aggregate settled. Length 10⁶ is trivially computable; 10⁹ is feasible.
- **Payment channels exist in the original protocol.** nSequence and lock-times make a transaction non-final until its inputs are final; higher-sequence versions supersede earlier ones. A channel that processes a million updates writes twice to the chain — once to open, once to close.
- **SIGHASH is the compositional grammar of settlement.** ALL, NONE, SINGLE and ANYONECANPAY let independent parties sign fragments that assemble into one settling transaction without open-ended trust.
- **A single satoshi can mediate an arbitrarily large number of transfers before settlement.** Blind e-cash separates reserve from circulating medium. Off-chain constructions complement an immutable base; they do not fix a broken one.
