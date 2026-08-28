---
title: "Forks as a demerger, or a split as a copy?"
date: 2019-03-20
era: medium
slug: forks-as-a-demerger-or-a-split-as-a-copy-c38bf6d8abed
themes: [protocol-immutability, governance-decentralisation, mining-consensus, spv-light-clients]
source: summaries-medium/forks-as-a-demerger-or-a-split-as-a-copy-c38bf6d8abed.md
---

# Forks as a demerger, or a split as a copy? — core principles

- **Bitcoin is a single ledger under a protocol set in stone.** A "fork" that changes the protocol is not Bitcoin but an airdropped copy — legally analogous to a demerger. "Bitcoin was said to be set in stone, and it is the only way the system works."
- **One title, one chain.** If property records sit on the chain and the ledger is copied, "do you now have two copies of property?" A copied chain cannot sustain two valid titles to the same house or share.
- **If you can change the protocol, you cannot call it decentralised.** A protocol-altering developer group is, in law, an unincorporated partnership issuing derivatives under their control. "There is no way to decentralise a group of developers."
- **Miners vote within the protocol, never on it.** They may risk orphaning and enforce limits inside the rules — the block cap is "outside of the protocol", since any miner could build larger blocks and, with majority support, make it the norm without software changes. "Only miners are nodes"; consensus "is purely enforced by mining." Users cannot set protocol rules either (UASF is an error).
- **If users have to change software, it is an airdrop into a new system.** Transaction-ordering changes and new opcodes likewise create a new system. The white paper orders transactions by time of arrival.
- **nLockTime makes long-dated contracting possible.** Users can pre-sign transactions valid years or generations later — succession planning, wills, real-property records valid "for over a century." Any protocol change destroys this. "You cannot have certainty and contracting... on any system that allows protocol changes."
- **SPV is simple and depends on a fixed protocol.** An offline customer wallet stores keys, full UTXOs with Merkle paths, and optionally block headers. The merchant verifies the Merkle proof as "a fail-fast mechanism against spam attacks" (not double-spend prevention). Alice needs only ECDSA signing capability. Where the protocol can change, "SPV does not exist."
- **Dispersed ownership already exists in listed equities.** "Apple shares are decentralised. Google shares are decentralised." Democratised finance via tokens is false marketing; the ledger is not a material cost of capital raising.
