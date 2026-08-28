---
title: "Limited change to bring stability"
era: medium
date: 2018-08-19
slug: limited-change-to-bring-stability-36abb2fed8e1
themes: [protocol-immutability, script-technical, lightning-l2, btc-critique]
source_summary: summaries-medium/limited-change-to-bring-stability-36abb2fed8e1.md
url: https://medium.com/@craig_10243/limited-change-to-bring-stability-36abb2fed8e1
---

# Limited change to bring stability — core principles

- **Bitcoin Script has a strictly finite upgrade budget.** The reserved words are OP_RESERVED, OP_RESERVED1, OP_RESERVED2 and OP_NOP1–OP_NOP10 — a fixed inventory of slots that must be hoarded for the inevitable future replacement of hash and signature algorithms.
- **Cryptographic primitives have finite lifecycles.** OP_SHA1 is at end of life with known collisions; OP_RIPEMD160 is not expected to last more than a decade; replacing OP_HASH160 would consume two OP_NOPs plus OP_VER version marking. SHA256-dependent opcodes include OP_SHA256, OP_HASH160 and OP_HASH256; OP_CHECKSIG and OP_CHECKSIGVERIFY depend on them indirectly.
- **Signature replacement is a when, not an if.** When the ECDSA-256 curve fails, OP_CHECKSIG, OP_CHECKSIGVERIFY, OP_CHECKMULTISIG and OP_CHECKMULTISIGVERIFY all need replacement — of twelve spare slots, a minimum of four are needed for hash functions and four for signatures, leaving no room for discretionary spend.
- **CLTV and CSV consumed two scarce slots for no new capability.** OP_NOP2 and OP_NOP3 were spent on OP_CHECKLOCKTIMEVERIFY and OP_CHECKSEQUENCEVERIFY — yet "there is no business case that cannot be completed with CLTV that could not have used nLockTime based Bitcoin transactions. The same or better result can be delivered using nLockTime as CLTV."
- **Soft forks are not part of Bitcoin.** "Soft forks are not a part of bitcoin and destroy the competitive nature of the system" — new opcodes were never designed to be smuggled in as soft-forked constraints on previously free NOP slots.
- **Century-scale contracts require a frozen script.** Contracts and financial instruments last over 100 years, so the script system must be stable enough to carry them; money must not change without reason. "Bitcoin was set in stone as of version 0.1.0."
- **P2SH is a permanent kludge.** "If you add or remove a proton, it is no longer gold" — P2SH added a neutron: it can be done, but the resulting system is less stable and can never be removed.
- **Stability signals attract institutions.** Banks used marble edifices to signal permanence; a locked protocol with the original script fully re-enabled is Bitcoin's equivalent — and with the original instruction set restored, "there is nothing that could be conceivably desired that cannot be done within bitcoin".
