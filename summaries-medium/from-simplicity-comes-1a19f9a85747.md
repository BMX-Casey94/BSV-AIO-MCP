---
title: 'From simplicity comes …'
date: 2019-04-09
slug: from-simplicity-comes-1a19f9a85747
url: https://medium.com/@craig_10243/from-simplicity-comes-1a19f9a85747
themes: [protocol-immutability, mining-consensus, scaling-throughput, btc-critique]
---

# From simplicity comes …
**Date:** 2019-04-09 | **URL:** https://medium.com/@craig_10243/from-simplicity-comes-1a19f9a85747
**Subtitle:** The Silicon Valley culture of change at any cost, with pivot at every moment is detrimental to most of what we see in society. It…

## Core thesis
Simple rules, iterated, generate unbounded complexity — chaos is what happens when developers keep changing the rules. Bitcoin's strength is a protocol set in stone that miners cannot alter; miners may only set changeable *rules* (like the block cap) through majority hash power, which is why Bitcoin was always destined for data centres. He then applies this to Schnorr signatures, arguing their "scaling" benefit is negligible for ordinary transactions and that their real purpose is to push anonymity into BTC.

## Key arguments and claims
- Silicon Valley's "change at any cost, with pivot at every moment" culture "replaces simplicity with chaos"; complexity is not chaos — "simple rules lead to infinite and unbounded combinations of outcomes", as in Conway's Game of Life.
- The "'cryptocurrency' development community... seek[s] complexity, and end[s] with chaos. Like many technocrats, they want to control the outcome and not let it evolve."
- "Bitcoin is a simple protocol. As such, the security of the system is protected as miners cannot update the protocol" — a miner can refuse a transaction and reject blocks containing it only "at the risk of losing and the orphaning of anything they win", and even then "it merely delays a transaction".
- Replayability is the key strength: "A transaction can be replayed a week later, a month later, a year later, a decade later, or whenever the user decides."
- "Miners don't set protocol, rather the protocol is set in stone. If you change the protocol, you move away from Bitcoin. Protocol changes are not forks but rather new competing protocols with a possible airdrop."
- Rules versus protocol: "miners set rules", e.g. the block cap — "If just over 50% of the miners want to increase the size of the cap, it will rise, and many miners who are rejecting the increase will go broke"; "Hobby miners are forced to compete, and if they cannot, they are forced out of the network. Bitcoin was never a system designed to allow everyone to run a node. It was always destined for data centres."
- The white paper allows "any necessary rules" — a majority of miners can reject transactions "based on size or fees or anything else within the protocol... at the possible cost of lost revenue in case they choose wrongly"; "Rules can change, the protocol is set", and "no changes are required to the user software, SPV, or applications".
- "The scripting language included with Bitcoin can be extended to code about anything that can be thought of."
- On Schnorr: promoted by BTC supporters as scaling via signature aggregation ("five parties carrying out five separate signatures, a single signature would suffice"), but "generally, a transaction will be conducted by having one party pay another. As such, Schnorr signatures do not save space at all... the purported savings are negligible or less".
- The real motive: "the developers behind them are seeking to create an anonymous system... Bitcoin was never designed to be anonymous, and yet anonymity is what they are seeking" — removing "the ability for all users to trace transactions easily" to build "an anonymous currency allowing drug sales".
- The economic counter: "To have value, bitcoin needs to be easily exchanged. To be able to do so, it needs to be legal... It is the point of exchange that is simplest to attack and remove" — cutting fiat on/off-ramps "remove[s] all usefulness and value".

## How Craig reasons (his model/logic)
He reasons from design invariants: first a complexity-theory frame (simple rules iterate to richness; constant pivoting yields chaos), then a sharp taxonomy — protocol (fixed) versus rules (miner-set, economically enforced) — with replayability as the litmus test distinguishing them. The Schnorr critique follows his standard two-step: quantify the claimed benefit under realistic usage (single-signature pays dominate, so aggregation saves nothing), then attribute motive (anonymity, not scaling) and show the motive is self-defeating because value depends on lawful exchangeability.

## Where this contradicts BTC-mainstream logic
- Against "everyone runs a full node" decentralisation dogma: Bitcoin "was always destined for data centres", and hobby miners being priced out is the system working as designed.
- Against soft-fork governance: "Protocol changes are not forks but rather new competing protocols with a possible airdrop" — SegWit-era BTC upgrades are reclassified as a different system entirely.
- Against the Schnorr/Taproot scaling narrative (then being promoted for BTC): aggregation gains are "negligible or less" for typical one-to-one payments, and the change is really an anonymity grab.
- Against privacy-by-default orthodoxy: traceability is a "key strength" ("privacy over anonymity"), and anonymity features are framed as drug-market engineering that regulators can defeat at the exchange layer.
- Miner-majority rule-setting (block cap by >50% hash power) contradicts the user-activated-soft-fork/UASF theory that node operators, not miners, govern.

## Notable quotes
- "Simplicity can lead to complexity... complexity is nothing like chaos."
- "Miners don't set protocol, rather the protocol is set in stone."
- "Protocol changes are not forks but rather new competing protocols with a possible airdrop."
- "Bitcoin was never a system designed to allow everyone to run a node. It was always destined for data centres."
- "Rules can change, the protocol is set."
- "Schnorr signatures do not save space at all. There is no aggregation."

## Connections
Extends the set-in-stone protocol doctrine of essays like "Set in Stone" and the miner-economics arguments of "Miners and Rational Expectations"; the rules-vs-protocol distinction underpins his SPV/light-client writings, and the exchange-chokepoint argument recurs in his law-and-regulation pieces. The Schnorr critique targets BTC's then-upcoming Taproot proposal, continuing the "SegWit coin" polemic of "Bit Gold Is Not BitCoin" published the previous day.
