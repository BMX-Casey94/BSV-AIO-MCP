---
title: "The myths of Bitcoin"
era: medium
date: 2018-08-14
slug: the-myths-of-bitcoin-bf3664e9d767
themes: [btc-critique, scaling-throughput, protocol-immutability, privacy]
source_summary: summaries-medium/the-myths-of-bitcoin-bf3664e9d767.md
url: https://medium.com/@craig_10243/the-myths-of-bitcoin-bf3664e9d767
---

# The myths of Bitcoin — core principles

- **The core design was set in stone at v0.1.** Citing Satoshi's bitcointalk post (topic 195): the nature of Bitcoin was designed so that once version 0.1 was released, the core design was set in stone for the rest of its lifetime — miners improve their own implementations competitively, privately and without disclosure, and "this again is a good thing".
- **Peer-to-peer means direct exchange, not everyone mining.** Miners are a settlement layer; card payments can take 90 days to truly settle and remain retrospectively reversible, while Bitcoin transactions are "computationally impractical to reverse" (whitepaper). The v0.1 IP-to-IP key-exchange protocol was man-in-the-middle vulnerable but "can be easily fixed".
- **The scaling constraint was the hobby-node subsidy, not the protocol.** "Bitcoin can scale to terabyte size blocks today"; blockchains "were always designed to be commercial in nature".
- **There is no such thing as spam in Bitcoin.** Any party willing to pay the fee gets stored; in time nearly all miner profit comes from transactions, so more use means more profit, better scaling and cheaper transactions — "Bitcoin is incentivised to become the backbone system of the global Internet. It can only do this as cash."
- **Trust through greed.** Corporate miners are trustworthy precisely because they are profit-seeking: "we trust them to be greedy" — competition drives mining profitability to a knife edge where no entity can alter anything; Bitcoin is "apolitical other than being purely capitalist".
- **0-conf is good enough by design.** An unsettled transaction "does not need to be impermeable, it needs to be good enough" — thousands of times more secure than card networks at any scale, settling in under a second, and becoming *more* secure as the network grows because double-spend detection latency falls.
- **Privacy is not anonymity.** "Privacy is important but anonymity isn't" — anonymous money serves corrupt governments and criminals, will never be legally enforceable, and violates the sunshine principle of fraud detection (Plato's Ring of Gyges, Republic Book II: anonymity makes justice "only in the interest of the strong").
- **Users should run SPV.** "There is no requirement to validate every single transaction" — SPV is defined in the whitepaper; miners are competitive businesses "designed to end in datacentres", and the full-node-for-everyone ideal is a subsidy, not a security property.
- **Mining is not wasteful.** Value lies in exchange utility, not electricity input; Bitcoin delivers stable money at lower cost than monetary issue, electronic data exchange and fiat systems combined, and becomes more efficient as it scales.
- **Remove the cap, lock the protocol.** The block cap should be removed entirely — "any level of scaling that people are willing to pay for" — and the protocol locked to the original so merchants can build a complete ecosystem of global finance upon it.
