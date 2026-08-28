---
title: 'The myths of Bitcoin'
date: 2018-08-14
slug: the-myths-of-bitcoin-bf3664e9d767
url: https://medium.com/@craig_10243/the-myths-of-bitcoin-bf3664e9d767
themes: [btc-critique, scaling-throughput, protocol-immutability, privacy]
---

# The myths of Bitcoin
**Date:** 2018-08-14 | **URL:** https://medium.com/@craig_10243/the-myths-of-bitcoin-bf3664e9d767
**Subtitle:** Bitcoin is Peer to Peer electronic cash.

## Core thesis
A manifesto dismantling the myths around Bitcoin: it is peer-to-peer electronic cash whose core design was set in stone at v0.1; it scales to terabyte blocks today once the hobby-node subsidy ends; miners are profit-seeking competitors, which is precisely why they can be trusted; 0-conf outperforms card networks; pseudonymity yes, anonymity never; users should run SPV; mining is not wasteful; and stability is the property that makes it money. Only Bitcoin Cash is restoring that design — "Bitcoin cash is the global financial platform of the future".

## Key arguments and claims
- One Bitcoin, set in stone at v0.1 (quoting Satoshi's bitcointalk post): "we endeavour to return Bitcoin cash to align as closely as is possible to that original. Only Bitcoin cash can do this. Bitcoin Core with the additional changes (including Segwit) cannot achieve this."
- Peer-to-peer means direct exchange without intermediaries — not everyone running a miner. Miners are a settlement layer; card payments can take 90 days to truly settle and remain retrospectively reversible, while Bitcoin transactions are "computationally impractical to reverse" (whitepaper). The v0.1 IP-to-IP key-exchange protocol was man-in-the-middle vulnerable but "can be easily fixed".
- Scalability: "The only problem with scalability is the subsidising of home user hobby nodes. Bitcoin can scale to terabyte size blocks today." Blockchains "were always designed to be commercial in nature"; "There is no such thing as spam in bitcoin" — any party willing to pay gets stored, and in time nearly all miner profit comes from transactions. More use means more profit, better scaling and cheaper transactions: "Bitcoin is incentivised to become the backbone system of the global Internet. It can only do this as cash."
- Trust through greed: asked how we trust corporate miners, "Very simple, we trust them to be greedy." Competition drives mining profitability to a "knife edge" where no entity can alter anything; moral sentiment plays no part in governance; Bitcoin is "apolitical other than being purely capitalist".
- Protocol governance: the v0.1 core design was fixed "for the rest of its lifetime"; miners will improve their own software competitively, privately and without disclosure — "this again is a good thing". Craig, nChain, CoinGeek and "yet unnamed miners" are stabilising the Bitcoin Cash protocol through the BComm initiative, creating "the first form of digital stable money in human history".
- Confirmation versus settlement: an unsettled (0-conf) transaction "is secure enough. It does not need to be impermeable, it needs to be good enough" — thousands of times more secure than Visa or MasterCard at any scale, settling in under a second, and becoming *more* secure as the network grows because double-spend detection latency falls.
- Anonymity is not privacy: "Privacy is important but anonymity isn't." Anonymous money serves "corrupt governments and criminals" (Enron could never be caught), will never be legally enforceable, and violates the "sunshine principal" [sic] of fraud detection; he cites Plato's Ring of Gyges (Republic, Book II) — anonymity makes justice "only in the interest of the strong".
- Ease of use and the "myth of the full node": "Users should be running SPV. This is defined within the original white paper. There is no requirement to validate every single transaction." Miners are competitive businesses "designed to end in datacentres"; the wallets that matter are HandCash, Keyport, POP and Centbee.
- Mining is not wasteful: value lies in exchange utility, not electricity input; Bitcoin delivers "the first form of stable money ever developed in human history" at lower cost than monetary issue, electronic data exchange and fiat systems combined, and becomes more efficient as it scales.
- Stability: remove the block cap entirely — "any level of scaling that people are willing to pay for" — and lock the protocol to the original so merchants can build "a complete ecosystem of global finance upon it".

## How Craig reasons (his model/logic)
A myth-busting listicle built on definitional groundwork ("let me first set some terms"): each myth is answered by returning to founding documents (the whitepaper, Satoshi's forum posts and emails) plus incentive analysis — greed, not virtue, is the trust basis — and, for anonymity, classical philosophy (Plato). The rhetorical mode is catechetical: myth stated, doctrine corrected, with repeated originalist appeals to v0.1 and an economist's framing of every technical question.

## Where this contradicts BTC-mainstream logic
- Full-node-for-everyone orthodoxy ("don't trust, verify"): replaced with SPV for users and competitive datacentre miners — non-mining nodes are a subsidy, not a security property.
- The block-size limit as sacred safety parameter: the cap should be removed entirely; the limit itself is the myth.
- "Digital gold / store of value first": cash is the only viable primary use, and "the myriad of other uses all fall into place" only after that is accepted.
- The cypherpunk anonymity ideal (and the privacy-coin trajectory): rejected outright on legal-enforceability and anti-corruption grounds — pseudonymity is the design, anonymity is the bug.
- "Mining wastes energy": rejected on comparative-cost grounds against the existing fiat and card infrastructure.
- Developer-led protocol evolution via BIPs: framed as the antithesis of money — a system "that developers think they can play with because they understand money very little".

## Notable quotes
- "Bitcoin is Peer to Peer electronic cash."
- "The only problem with scalability is the subsidising of home user hobby nodes."
- "There is no such thing as spam in bitcoin."
- "Very simple, we trust them to be greedy."
- "Privacy is important but anonymity isn't."
- "Bitcoin cash is the global financial platform of the future"

## Connections
Same-day companion (2018-08-14) to "Money Must First Be Stable", which supplies the technical case for the "set in stone" doctrine asserted here. Cites the Bitcoin whitepaper, Satoshi's "set in stone" bitcointalk post (topic 195), a Satoshi cryptography-list email, and Plato's Republic (Ring of Gyges); names nChain, CoinGeek and the BComm initiative — the institutional apparatus of Craig's BCH campaign three months before the November 2018 BSV split and hash war.
