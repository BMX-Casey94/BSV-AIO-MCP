---
title: 'Why Lightning will never be currency, and why BSV matters'
date: 2019-03-15
slug: why-lightning-will-never-be-currency-and-why-bsv-matters-60dfa5c9ac4d
url: https://medium.com/@craig_10243/why-lightning-will-never-be-currency-and-why-bsv-matters-60dfa5c9ac4d
themes: [lightning-l2, law-regulation, intermediaries, btc-critique]
---

# Why Lightning will never be currency, and why BSV matters
**Date:** 2019-03-15 | **URL:** https://medium.com/@craig_10243/why-lightning-will-never-be-currency-and-why-bsv-matters-60dfa5c9ac4d
**Subtitle:** Under the provisions of FinCEN, any exchange accepting and transmitting virtual currency is a money transmitter [1]. The law is rather…

## Core thesis
Walking through 31 CFR § 1010.100 exemption by exemption, Craig argues that Lightning Network routing nodes are money transmitters under FinCEN/BSA with no applicable carve-out — unlike Bitcoin miners, which are the exempt "clearance and settlement system". Lightning is legally and functionally a promissory-note mixer built to destroy transaction records; BSV matters because it keeps payments settled and recorded on-chain, where the law can reach them.

## Key arguments and claims
- The ISP exemption covers one who merely "provides the delivery, communication, or network access services" — but "such a rule would not incorporate Lightning nodes as they facilitate the passing of money and funds for other individuals."
- The payment-processor exemption covers parties facilitating purchase of goods/services "through a clearance and settlement system": "Miners of course are the clearance system", whereas "Lightning is in no way a clearance and settlement system. It is a payment system" updating "a series of promissory notes" — and promissory notes are expressly defined monetary instruments.
- Exemption (F) (funds "integral to the sale of goods or the provision of services") "would exempt common Nakamoto payment channels and those created by Mike Hearn" — two-party channels that settle on-chain — but not Lightning, which "requires multiple hops and intermediaries".
- Network data: "The average distance on the Lightning Network is 4.9 hops", expanding to 10–11, so "there are four or five layers of intermediaries between people who are engaged in trade" with no record kept — "Lightning acts as a mixer network to confuse and obfuscate payments."
- Motive attribution: Lightning's privacy claim is rewritten as "Total anonymity" in which "the fencer of stolen goods will not be able to tell if the drug dealer is the one who made the payment... the payment is for meth"; its purpose is records destruction for "terrorist funding, child exploitation, and drug sales", and a functional Lightning would let "a system such as Silk Road" operate untraceably.
- Centralisation: "a few key hubs that pass 99.8% of the traffic on the network. Effectively, they are paid banks that act outside of the requirement of the Bank Secrecy Act."
- BSA duties: reporting of transactions over $10,000 (single or related, within 24 hours) and suspicious activity at $5,000, including anything touching dark-web sites; "Nodes that don't comply are simply in breach of the act."
- Precedents: the 2017 US Treasury action against BTC-e, and *United States v. Budovsky* (Liberty Reserve, S.D.N.Y. 2013) — "digital currency is not a safe haven"; decentralisation is no defence because "every system has an owner, and every owner is responsible for the actions of the computers he runs."
- Schnorr-signature aggregation is lumped with Lightning and Monero as "purely a methodology designed to subvert privacy into anonymity."
- The BTC critique: "The lie that is promoted is that Bitcoin cannot scale. In order to promote such a lie, artificial limits have been maintained on the protocol" — producing "an airdrop that many people believed to be Bitcoin. BTC is everything Bitcoin was designed to oppose."

## How Craig reasons (his model/logic)
Statutory close-reading is the engine: he quotes the CFR's monetary-instrument definitions and the six money-transmitter exemptions, then tests miners, two-party channels and multi-hop Lightning against each clause. Legal formalism is combined with empirical network claims (hop counts, hub concentration), case-law citation, and aggressive motive attribution — the design goal of Lightning is asserted to be criminal obfuscation rather than scaling. The rhetorical centrepiece is the rewritten "privacy" paragraph, a satirical substitution device.

## Where this contradicts BTC-mainstream logic
- **"Bitcoin can't scale on-chain":** the foundational premise of the 2017–19 BTC roadmap; Craig calls it a manufactured lie maintained through artificial limits.
- **Lightning as scaling solution:** the orthodox layer-2 roadmap is reframed as trusted intermediaries reintroduced — "a series of hops through middle men who act as TTPs (trusted third parties)" — the very thing Bitcoin was built to eliminate.
- **"Not money transmission if non-custodial":** the community's regulatory optimism is answered with FinCEN's facts-and-circumstances test and the Budovsky precedent.
- **Privacy tech as neutral:** Schnorr, Lightning and Monero are grouped as anonymity engineering for crime, inverting the cypherpunk framing.
- **Payment channels per se are not the target:** he exempts original two-party Nakamoto/Hearn channels that settle on-chain, distinguishing them from multi-hop routing — a nuance mainstream debate often missed in his position.

## Notable quotes
- "Lightning is a payment channel with trusted intermediaries added into Bitcoin."
- "Lightning acts as a mixer network to confuse and obfuscate payments."
- "It is not privacy they seek, it is anonymity."
- "BTC is everything Bitcoin was designed to oppose."
- "The lie that is promoted is that Bitcoin cannot scale."
- "The law does not care whether your computer operates without you watching over it; every system has an owner, and every owner is responsible for the actions of the computers he runs."

## Connections
Cites FinCEN's 31 CFR § 1010.100(ff)(5)(ii)(A)–(F), the BTC-e penalty, *United States v. Budovsky*, bitcoinvisuals.com hop data, and Bitcoin Core's Schnorr aggregation announcement. Era context: four months after the BCH/BSV split, this is the legal flank of the BSV-vs-BTC campaign; the favoured two-party nSequence channels get a technical treatment in "Finite State Machines in Script" three days later, and the privacy/anonymity distinction continues from "Profiting from privacy" and "Proof".
