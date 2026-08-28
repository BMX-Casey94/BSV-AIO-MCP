---
title: 'Limited change to bring stability'
date: 2018-08-19
slug: limited-change-to-bring-stability-36abb2fed8e1
url: https://medium.com/@craig_10243/limited-change-to-bring-stability-36abb2fed8e1
themes: [protocol-immutability, script-technical, lightning-l2, btc-critique]
---

# Limited change to bring stability
**Date:** 2018-08-19 | **URL:** https://medium.com/@craig_10243/limited-change-to-bring-stability-36abb2fed8e1
**Subtitle:** Something people fail to understand about bitcoin is it is intentionally limited in what it can do and how it can be changed. This is…

## Core thesis
Bitcoin's script has a strictly finite budget of reserved opcodes (OP_RESERVED, OP_RESERVED1/2, OP_NOP1–10) that must be hoarded for the inevitable future replacement of hash and signature algorithms. OP_NOP2 and OP_NOP3 were "wastefully squandered" on CLTV and CSV — opcodes Craig says exist only to enable Lightning's "theft of network effect". Soft forks "are not a part of bitcoin", the protocol was "set in stone as of version 0.1.0", and Bitcoin Cash will be returned to that implementation and locked.

## Key arguments and claims
- The reserved-word inventory is enumerated: OP_RESERVED, OP_RESERVED1, OP_RESERVED2 and OP_NOP1–OP_NOP10. OP_NOP2/NOP3 were consumed by OP_CHECKLOCKTIMEVERIFY and OP_CHECKSEQUENCEVERIFY.
- CLTV is technically redundant: "There is no business case that cannot be completed with CLTV that could not have used nLockTime based Bitcoin transactions. The same or better result can be delivered using nLockTime as CLTV." Its real purpose was "the theft of network effect in an attempted migration to a separate system using lightning".
- "Contrary to the false Core narrative, new opcodes are not designed to be added using a soft fork. Soft forks are not a part of bitcoin and destroy the competitive nature of the system."
- The opcode budget is justified by cryptographic lifecycles: OP_SHA1 is "at the end of life" with known collisions; OP_RIPEMD160 "is not expected to last more than a decade"; OP_HASH160 replacement would consume two OP_NOPs plus OP_VER version marking.
- SHA256-dependent opcodes listed: OP_SHA256, OP_HASH160, OP_HASH256; indirect users OP_CHECKSIG and OP_CHECKSIGVERIFY. When ("note not if but when") the ECDSA-256 curve fails, OP_CHECKSIG, OP_CHECKSIGVERIFY, OP_CHECKMULTISIG and OP_CHECKMULTISIGVERIFY all need replacement.
- His arithmetic: 12 spare opcode slots existed; a minimum of 4 needed for hash functions and 4 for digital signatures; with two already wasted "we are down to two spare opcodes already… we actually have no room for error in future updates" if bitcoin is to last "more than 20 years".
- "Bitcoin was set in stone as of version 0.1.0" — money must not change "without reason"; contracts and financial instruments "last over 100 years", so the script system must be stable enough to carry them.
- Bitcoin Cash's opcode additions are attacked as a "foolish attempt to mindlessly add additional opcodes" to bring traffic; stability is what attracts financial organisations and "a listed ETF".
- "Bitcoin cash is bitcoin and we're going to work to return it to the version 0.1.0 implementation and lock that protocol." With the original script fully re-enabled, "there is nothing that could be conceivably desired that cannot be done within bitcoin".
- P2SH is "one of these horrible kludges" that can never be removed: "If you add or remove a proton, it is no longer gold"; P2SH is "adding a neutron to gold, it can be done, but the resulting system is less stable".
- Hash-power intent declared: "We have invested in hash power and intend to use that for the sole goal of scaling and stabilising bitcoin" — written three months before the BCH/BSV split.
- Institutional analogy: banks "used marble edifices to signal their stability"; bitcoin must signal the same permanence.

## How Craig reasons (his model/logic)
The method is protocol archaeology plus engineering lifecycle planning: enumerate the finite resource (spare opcodes), list the known-finite-lifespan primitives (SHA1, RIPEMD160, ECDSA), and show the budget barely closes — a scarcity argument against discretionary change. He attributes motive adversarially (CLTV/CSV as a Lightning land-grab), and anchors legitimacy in the original artefact (v0.1.0) with physical analogies (gold's atomic structure, marble bank edifices) for immutability.

## Where this contradicts BTC-mainstream logic
- Rejects the soft-fork upgrade mechanism itself — the backbone of BTC's post-2012 development model — as not "part of bitcoin" and destructive of miner competition.
- Declares CLTV and CSV (BIP65/BIP112, core to Lightning's HTLCs) illegitimate and redundant with nLockTime, framing Lightning as "theft of network effect".
- Rejects P2SH — near-universal in BTC usage — as a permanent kludge that weakened the system.
- Contradicts the developer-led, experiment-then-deploy culture: "Right now, everything that developers are doing to alter bitcoin is an experiment that drives adoption away."
- Prefigures the BSV position that the protocol must be locked at the original design, against both BTC's evolving roadmap and BCH's opcode expansions.

## Notable quotes
- "Bitcoin was set in stone as of version 0.1.0"
- "Soft forks are not a part of bitcoin and destroy the competitive nature of the system."
- "There is no business case that cannot be completed with CLTV that could not have used nLockTime based Bitcoin transactions."
- "we are down to two spare opcodes already"
- "If you add or remove a proton, it is no longer gold."
- "Bitcoin cash is bitcoin and we're going to work to return it to the version 0.1.0 implementation and lock that protocol."

## Connections
Direct sequel to "The cult of Decentralisation" (stability as money's core property, now applied to script). The CLTV/OP_BLOCKNUMBER history is revisited in "Black Mirror" (Satoshi's reorg objection quoted from bitcointalk). The hash-power declaration anticipates the Nov 2018 BCH/BSV hash war; the nChain/CoinGeek scaling agenda behind it surfaces openly in "Black Mirror". The "lock the protocol" demand becomes the defining BSV marketing claim ("Bitcoin is cash and it does not change (BSV)" in "The crypto-ring of Gyges").
