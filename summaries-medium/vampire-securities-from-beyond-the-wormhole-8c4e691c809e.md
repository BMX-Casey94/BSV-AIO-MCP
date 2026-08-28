---
title: 'Vampire Securities from beyond the Wormhole'
date: 2018-09-06
slug: vampire-securities-from-beyond-the-wormhole-8c4e691c809e
url: https://medium.com/@craig_10243/vampire-securities-from-beyond-the-wormhole-8c4e691c809e
themes: [tokenisation, lightning-l2, law-regulation, mining-consensus]
---

# Vampire Securities from beyond the Wormhole
**Date:** 2018-09-06 | **URL:** https://medium.com/@craig_10243/vampire-securities-from-beyond-the-wormhole-8c4e691c809e
**Subtitle:** It is common for Omni and Counterparty style tokens to say how they back the underlying security using the one that they parasitically sit…

## Core thesis
Bitmain's Wormhole (WHC) token platform on Bitcoin Cash is "parasitic and vampiric": its claim to be "backed by burned bitcoins" is a misrepresentation making it an unregistered asset-backed security — "yet another securities fraud posing as innovation". Wright argues the burn address is probably fake (a vanity address, not an OP_FALSE script), that Wormhole is really a proof-of-stake system using BCH only for timestamping, and that Lightning, Plasma and Wormhole are not "layer 2" at all but separate protocols feeding off Bitcoin. True permissionless building, he concludes, means locking the BCH protocol and building inside Script — and he threatens to deploy hash power to stop the parasites.

## Key arguments and claims
- Wormhole's marketing of "Wormhole Cash (WHC) tokens that are backed by burned bitcoins" is false: "this horror from beyond the wormhole is parasitic and vampiric and acts as an undead sucking the life out of the system it sinks its teeth into."
- The Wormhole team's claim that no safe, decentralised two-way anchoring with BCH is feasible is "more than a blatant lie. In fact, it is not anchored even one-way. Wormhole is simply a means of destroying bitcoin and moving to a proof of stake system." Nothing in the whitepaper actually requires burning.
- Proof of stake is fundamentally broken: "Proof of stake has no solution for double spends. All of the so-called proof of stake solutions end up becoming hybrids"; Wormhole's sole use of Bitcoin is "to periodically timestamp transactions in a proof of stake system".
- Economic incentives are the system: "the system only survives through economic incentives… Bitcoin is a system of competition and it is this competition that drives the growth and investment into mining and hence the security"; Wormhole, Ethereum and EOS "throw away the one thing that made Bitcoin work, competition", creating "a set of controlled and enslaved miners" and "a system that is static and without evolution".
- Securities-law characterisation: by advertising WHC as bitcoin-backed, Wormhole is an asset-backed security issued on "misrepresentation to investors by Bitmain", a company then seeking an IPO — "There is no room for ignorance nor would the law consider that an excuse. This statement is blatant security fraud." He quotes illegal-distribution and Ponzi definitions and concludes: "As WHC takes value and offers nothing in return, it is a ponzi."
- The burn address is technically bogus: only the last 6 characters of an address are checksum; a true burn requires a script containing OP_FALSE, which "makes the Bitcoin unrecoverable". Wormhole's address `1111111111111111115KMYP7R278` splits into address `<1111111111111111115KMY>` + checksum `<P7R278>` — not a systematic all-ones construction, so finding it with a valid key "is only a matter of computational power and is well within the reach of any Amazon cluster". Verdict: "The WHC burn address is most probably fake."
- "Layer 2 is always within script": by the TCP/IP encapsulation model (HTTP within TCP within IP within the datagram), a genuine higher layer must be "completely encapsulated" — "to be layered within Bitcoin means that you must be within script inside a Bitcoin transaction. Not that you use a marker attached to a transaction."
- "The Lightning Network, like Plasma and like Wormhole Coin are parasitic layers" — analogous to Novell IPX gateways riding TCP/IP in the 1990s protocol wars: "They are not separate layer two systems built on top of Bitcoin, they are completely separate protocols."
- "Nothing Physical can be Permission-less": courts can reassign any underlying asset regardless of tokens; refusal to comply is contempt of court, which "brings unlimited incarceration. A judge can incarcerate you until you comply." Tokens defying local law "become instantly worthless", and buyers gain grounds to sue issuers — "We can expect many class-action suits in coming years."
- Universal securities thesis: "There are no tokens that are not a security. In fact, there cannot be a token that is not a security." Utility tokens "are simply prepaid sales. Case law on this topic goes back hundreds of years"; even in the USA "there are around 20 federal bodies each with different jurisdiction covering different security offerings". "'Code is law' does not apply to Bitcoin and cannot apply in any blockchain system."
- PoS systems are "by nature permissioned"; genuine permissionlessness is "simple, lock the BCH protocol and build upon it. Bitcoin Cash will remove the various caps allowing people to build within script… without having to ask the permission of Core developers, companies such as Bitmain or any implementation developer at all."
- Omni/Wormhole-specific vulnerabilities: "block re-orgs destroy the security of Omni and hence Wormhole"; they "have no zero-conf protections"; fast transaction ordering lets attackers exploit reordering. Bitcoin itself is immune: "orphans and reordering are the natural state within Bitcoin. These are how miners signal" — miners bear orphan losses, users should not care.
- A direct hash-war threat: "we will build up hash power and stop all changes that people seek to the Bitcoin protocol to allow these parasites. There will be no Lightning Network, no Plasma and no way to make Wormhole work effectively using Bitcoin Cash."

## How Craig reasons (his model/logic)
Wright stacks three registers: technical mechanism (checksum structure, OP_FALSE burns, encapsulation theory, re-org attacks), economic first principles (competition and incentives as the source of security; PoS's inability to solve double-spends), and legal classification (asset-backed securities, illegal distribution, Ponzi definitions, contempt of court). The rhetorical mode is horror-satire ("vampire", "undead", "horror from beyond the wormhole") welded to a prosecutor's brief against Bitmain, with historical analogy (IPX vs TCP/IP) used to reclassify "layer 2" marketing as a separate-network gateway trick.

## Where this contradicts BTC-mainstream logic
- Contradicts the Lightning-Network-as-layer-2 orthodoxy head-on: Lightning is not a layer of Bitcoin but a parasitic separate protocol, like IPX gatewaying onto TCP/IP.
- Contradicts the ICO/token orthodoxy of "utility tokens" outside securities law: every token is a security, prepaid-sale case law is centuries old, and "code is law" is a "childish notion".
- Contradicts the permissionlessness ideal as marketed by DeFi/token platforms: nothing physical can be permissionless because courts and physical machines exist in jurisdictions.
- Contradicts proof-of-stake legitimacy generally (Ethereum, EOS): PoS cannot solve double-spends and degenerates into permissioned hybrid systems.
- Written in the BCH camp two months before the BSV split, it also contradicts the Bitmain-aligned BCH roadmap of the time — and prefigures the hash war with an explicit promise to "build up hash power and stop all changes".

## Notable quotes
- "this horror from beyond the wormhole is parasitic and vampiric"
- "Wormhole is yet another securities fraud posing as innovation."
- "As WHC takes value and offers nothing in return, it is a ponzi."
- "Layer 2 is always within script."
- "There are no tokens that are not a security. In fact, there cannot be a token that is not a security."
- "There will be no Lightning Network, no Plasma and no way to make Wormhole work effectively using Bitcoin Cash."

## Connections
Part one of a two-part attack, continued the next day in "Worm-a-nomics" ("I will cover this and the economics of Wormhole further tomorrow"). Cites news.bitcoin.com's report of $1.2M of BCH burned, the yours.org Wormhole announcement posts, and Investopedia/legal references on asset-backed securities. Names Vitalik Buterin and Joseph Poon as Plasma authors seeking, "as they did with Lightning", to build parasitic systems. Sits in the immediate run-up to the November 2018 BCH/BSV hash war, with nChain's lock-the-protocol position stated as the alternative.
