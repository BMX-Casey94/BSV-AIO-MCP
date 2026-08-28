---
title: 'Why the protocol is set'
date: 2019-03-28
slug: why-the-protocol-is-set-7db4f764c97c
url: https://medium.com/@craig_10243/why-the-protocol-is-set-7db4f764c97c
themes: [protocol-immutability, governance-decentralisation, script-technical, privacy]
---

# Why the protocol is set
**Date:** 2019-03-28 | **URL:** https://medium.com/@craig_10243/why-the-protocol-is-set-7db4f764c97c
**Subtitle:** Bitcoin is only decentralised when power is removed from developers and others who can change the protocol. That is the point. The…

## Core thesis
Decentralisation is about the decentralisation of *power*, and the only way to keep power out of anyone's hands is to lock the protocol "in stone". Craig argues this through an extended estate-planning scenario: an elderly couple use nLockTime time-locked transactions to build a private, multi-decade trust for their grandchildren — an arrangement that collapses entirely if developers can alter signature formats or opcodes mid-stream. BTC (SegWit Core) and ETH are developer-controlled systems; only BSV, with the original opcodes restored, guarantees a transaction signed today remains valid in 50 years.

## Key arguments and claims
- Definition of decentralisation: "Bitcoin is only decentralised when power is removed from developers and others who can change the protocol" — it is power, not node count or geography, that matters.
- The Alice-and-Bob scenario: a two-of-two multisig funded with 100 bitcoin; 50 reserved for grandchildren via future-dated nLockTime transactions (25 years out), the other 50 cross-assigned between the couple on rolling six-month locks updated quarterly — a structure designed so neither can be pressured by "manipulative" children into altering the trust.
- Robustness over time: after Bob dies, Alice cannot reconfigure the locked bequests even under pressure; she eventually spends her own 50, time-locks 30 to the grandchildren and 10 to her children (10-year lock), then destroys her private key so no one can seize control.
- nLockTime beats CLTV for privacy: "Unlike on-chain solutions such as CLTV that are public, the nLockTime transaction field allows Alice and Bob to construct a trust that remains secret" — mirroring historical English secret trusts; "Not everything should be on-chain."
- Custodial services as redundancy: encrypted copies of locked transactions can be stored on-chain by custodians so "no data can be lost" without revealing contents.
- The kill-shot argument: if the protocol changes one year after Alice dies — signature format altered, opcodes rewritten — "The locked transactions are no longer valid… A bunch of developers have altered the protocol and destroyed their wealth."
- Miners vs developers: miners "can only follow certain rules, and cannot change the protocol"; a miner risks money orphaning blocks but cannot invalidate old transactions. A 128 MB block cap "has no impact on the protocol" — scaling is orthogonal to validity.
- The 50-year test: "If a transaction cannot be saved offline for 50 years and then introduced later, the protocol has changed." Stability, not just the 21 million cap or block capacity, is what makes Bitcoin money.
- BSV commitment: "Bitcoin (BSV) will have all of the initial opcodes fixed and re-enabled this year", so a transaction signed in 2020 with nLockTime "will be valid in 2070" — unlike "SegWit coin (BTC) or any of the other altcoins".
- Motive claim: developers insisting the protocol must change are lying; "It is a means to grasp power" over the monetary and contract system.

## How Craig reasons (his model/logic)
Argument by constructed scenario: a detailed, multi-decade narrative with specific amounts, dates and family dynamics makes the abstract cost of protocol mutability concrete — the technical property (transaction validity over time) is translated into human consequences (destroyed inheritances). He pairs this with a power analysis (who gains the ability to change rules, and why) and a sharp miner/developer distinction to relocate "decentralisation" from topology to authority. The mode is didactic-then-denunciatory: patient walkthrough, then "If anyone tells you otherwise, they are either ignorant of what Bitcoin is or rather disingenuous."

## Where this contradicts BTC-mainstream logic
- "Development = progress" orthodoxy: routine protocol upgrades (SegWit, opcode changes, ETH hard forks) are reframed as seizures of power that can retroactively destroy users' wealth.
- Decentralisation-as-topology: against the node-count/hashrate-distribution metrics of the era, decentralisation is defined solely as the removal of anyone's ability to change the rules.
- On-chain transparency as virtue: the "everything public on-chain" ethos is rejected — private, off-chain nLockTime trusts are presented as a core Bitcoin strength, and CLTV-style public constructs as inferior.
- Block-size centrality: both sides of the scaling debate fixated on capacity; Craig insists the block cap "has no impact on the protocol" and validity-over-time is the real issue.

## Notable quotes
- "The only method to maintain decentralisation of power is to set the protocol and lock it. It must be set in stone."
- "Developers will tell you that they need to be able to change the protocol. It is a lie. It is a means to grasp power."
- "If a transaction cannot be saved offline for 50 years and then introduced later, the protocol has changed."
- "miners can only follow certain rules, and cannot change the protocol"
- "To be money, to be a source of contracting and wealth, Bitcoin needs stability."
- "Bitcoin is not about giving power to a few developer wizards. It is about taking power away from anyone wanting to change the monetary system."

## Connections
Companion piece to "Locked transactions for planning" (published the next day), which runs a compressed version of the same nLockTime-trust argument. Links to the bitcointalk "set in stone" post (topic 195, msg1611) attributed to Satoshi. The opcode restoration promise foreshadows BSV's post-Genesis "original protocol" roadmap; the miner/developer power distinction recurs throughout his 2019 writing.
