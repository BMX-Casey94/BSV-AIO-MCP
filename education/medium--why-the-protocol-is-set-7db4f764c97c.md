---
title: "Why the protocol is set"
date: 2019-03-28
era: medium
themes: [protocol-immutability, governance-decentralisation, script-technical, privacy]
source: summaries-medium/why-the-protocol-is-set-7db4f764c97c.md
---

# Why the protocol is set — core principles

- **Decentralisation is the removal of power to change the rules.** Bitcoin is only decentralised when developers and others cannot alter the protocol; node count and geography are not the measure.
- **Lock the protocol in stone.** The only method to keep power out of anyone's hands is to set the protocol and leave it fixed.
- **A transaction must remain valid for decades.** If a signed transaction cannot be saved offline for 50 years and then introduced later, the protocol has changed.
- **nLockTime enables private, multi-decade trusts.** Future-dated locked transactions can fund grandchildren and rolling intra-family assignments without publishing the arrangement on-chain.
- **nLockTime beats public CLTV for privacy.** Unlike on-chain CLTV constructs, the nLockTime field lets parties build a secret trust that mirrors historical English secret trusts; not everything should be on-chain.
- **Destroying a key can complete a bequest.** After assigning locked outputs, destroying the private key prevents later seizure or reconfiguration of the remaining control.
- **Encrypted custodial copies are redundancy, not disclosure.** Locked transactions can be stored encrypted on-chain by custodians so data cannot be lost without revealing contents.
- **Miners cannot change the protocol.** They follow fixed rules; orphaning a block costs them money, but they cannot invalidate old transactions. A block-size cap is orthogonal to validity.
- **Stability is what makes Bitcoin money.** To be money and a source of contracting and wealth, Bitcoin needs protocol stability, not a licence for developer upgrades.
- **Opcode restoration is a validity guarantee.** With the original opcodes fixed and re-enabled, a transaction signed today with nLockTime remains valid decades later.
