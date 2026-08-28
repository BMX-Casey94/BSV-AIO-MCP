---
title: 'Forks as a demerger, or a split as a copy?'
date: 2019-03-20
slug: forks-as-a-demerger-or-a-split-as-a-copy-c38bf6d8abed
url: https://medium.com/@craig_10243/forks-as-a-demerger-or-a-split-as-a-copy-c38bf6d8abed
themes: [protocol-immutability, governance-decentralisation, mining-consensus, spv-light-clients]
---

# Forks as a demerger, or a split as a copy?
**Date:** 2019-03-20 | **URL:** https://medium.com/@craig_10243/forks-as-a-demerger-or-a-split-as-a-copy-c38bf6d8abed
**Subtitle:** There is a lie and myth of decentralised consensus where a small group of developers alters a protocol and says that it is a fork that …

## Core thesis
A "fork" that changes the protocol is not Bitcoin at all but an airdropped copy — legally analogous to a demerger — because Bitcoin's essence is a single ledger under a protocol "set in stone". Miners may vote on rules *within* the protocol (block size, acceptance of blocks) but can never alter it; any change requiring users to update software (SegWit on BTC, opcode and ordering changes on BCH) creates a new system run by a small, legally answerable group, and destroys the long-dated contracting (nLockTime) that makes Bitcoin useful for property.

## Key arguments and claims
- Single-ledger test: if property records sit on the chain and the ledger is copied, "do you now have two copies of property?" — a copied chain cannot sustain two valid titles to the same house or share.
- ICOs are "a re-badged penny stock/pink sheet scam" from the 90s USENET era; "every single ICO that has ever existed is in some way a fraud"; blockchain will not materially cut IPO costs because the ledger is not a material cost of capital raising.
- "Apple shares are decentralised. Google shares are decentralised." — dispersed ownership with investor-protection rules already exists; "democratised finance" via tokens is false marketing.
- "If you can change the protocol, you cannot call it decentralised." A protocol-altering dev group is, in law, an unincorporated partnership/trust (UK Unincorporated Companies Act) — "an unincorporated board issuing derivatives under their control"; "there has never been a group of more than eight people who control Bitcoin Core (BTC)".
- Miners can risk orphaning and enforce limits *within* the rules — the block cap is "outside of the protocol", since any miner could build >1MB blocks and, with >51% support, make it the norm without software changes.
- SegWit is "the bait and switch": a protocol change requiring user software updates, hence a new system. BCH likewise "created an airdrop copy" by duplicating the ledger and altering transaction ordering (the white paper orders transactions by time of arrival) and adding new OP_Codes.
- UASF is equally an error: users cannot set protocol rules either; "Only miners are nodes", and consensus "is purely enforced by mining".
- nLockTime lets users pre-sign transactions valid years or generations later (succession planning, wills, real-property records valid "for over a century"); any protocol change destroys this, and "You cannot have certainty and contracting... on any system that allows protocol changes."
- SPV is "far simpler than people understood": an offline customer wallet stores keys, full UTXOs with Merkle paths, and optionally block headers; the merchant verifies the Merkle proof as "a fail-fast mechanism against spam attacks" (not double-spend prevention). Alice needs only ECDSA signing capability; even block headers are optional for her.
- Where the protocol can change, "SPV does not exist" — which is why SPV works on Bitcoin but not on BTC.
- Analogy: handing users a disk they must install to stay connected is like shipping Linux while calling it Microsoft — "It is what was done to Bitcoin."

## How Craig reasons (his model/logic)
He argues by definition and deduction from the white paper's text — especially section 5 (nodes are miners) and the final line, "Any needed rules and incentives can be enforced with this consensus mechanism", which he reads as a logical biconditional: what miners can't vote on is outside the protocol. Layered on top is legal categorisation (demerger law, unincorporated associations, derivatives) and property-law thought experiments (one ledger, one title), plus folksy analogies (Linux vs Microsoft). The mode is prosecutorial: opponents are "the ignorant, fools, or those seeking to scam others".

## Where this contradicts BTC-mainstream logic
- Rejects the Core governance model of "rough consensus" among developers as centralised control by fewer people than a public-company board.
- Denies the UASF narrative (2017) that users/economic nodes set protocol rules — only miners vote, and only within a fixed protocol.
- Inverts the ticker-symbol legitimacy conferred by exchanges: "bucket shops" altering tickers fool people into accepting a new ledger as "Bitcoin".
- Contradicts the BCH camp equally: BCH's ordering/opcode changes make it as much an airdrop copy as BTC — notable given he was then aligned with BCH (post-split BSV context).
- Attacks the ICO/tokenisation orthodoxy of "democratising finance" and cheaper capital formation as fraud and category error.
- Mainstream treats "fork = legitimate upgrade path"; he reframes any protocol-changing fork as an airdrop into a new system and a fraud on investors.

## Notable quotes
- "Bitcoin was said to be set in stone, and it is the only way the system works."
- "If you can change the protocol, you cannot call it decentralised."
- "There is no way to decentralise a group of developers. Anyone who's telling you differently is lying."
- "Only miners are nodes — an important aspect of Bitcoin."
- "If users have to change software, it is an airdrop into a new system."
- "Any needed rules and incentives can be enforced with this consensus mechanism."

## Connections
Written four months after the BCH/BSV split, this is the canonical statement of his "protocol set in stone" doctrine that justified BSV's restoration of the original protocol. It cross-references sections 5 and 8 of the Bitcoin white paper, prefigures the SPV/lite-client work later branded around Teranode-era infrastructure, and pairs with "Peer-to-peer digital electronic cash" (two days later) on the fixed-protocol definition of decentralisation.
