---
title: 'The Property Flaw of Lightning'
date: 2020-03-27
slug: the-property-flaw-of-lightning-d36ebf5b78a3
url: https://medium.com/@craig_10243/the-property-flaw-of-lightning-d36ebf5b78a3
themes: [lightning-l2, property-rights, law-regulation, btc-critique]
---

# The Property Flaw of Lightning
**Date:** 2020-03-27 | **URL:** https://medium.com/@craig_10243/the-property-flaw-of-lightning-d36ebf5b78a3
**Subtitle:** Segregated Witness (SegWit) was said to be introduced to stop purported errors caused by malleability. The truth of the matter is that it…

## Core thesis
Craig argues SegWit's real purpose was not fixing malleability but enabling the Lightning Network, which converts Bitcoin from a property-based token system into an account-based balance system — a conversion he says legally cannot work. Because each satoshi is an indivisible property token, doctrines like nemo dat and the UK Theft Act 1968 (handling stolen goods) follow coins into Lightning channels: stolen bitcoin remain stolen property, freezing orders stop channel movement, and miners or exchanges processing tainted coins are criminally liable. The Medium post is an excerpt; the body continues on craigwright.net.

## Key arguments and claims
- SegWit "was said to be introduced to stop purported errors caused by malleability. The truth of the matter is that it was introduced as a means of producing the Lightning Network... and changing Bitcoin from a property-based token system to an account-based one."
- Bitcoin's unit of property is the satoshi: "There are 100 million individual tokens for every nominal coin"; the design lets "a digital file act as if it was a corporal thing", enabling true possession and even bailment (escrow via smart contract).
- "The tokens in Bitcoin are not stored on the blockchain, they are registered there" — the chain is "a distributed clearing house and registry or ledger"; until registration, double-spend risk remains.
- Malleability was never a Bitcoin flaw: "malleability is only a security flaw in Lightning-based payment channels, which were never a part of Bitcoin" — the base peg value in a Lightning transaction cannot be removed "without destroying the entire channel".
- Lightning needs balances, not tokens, "because they are treated very differently under law" — but "There is no way in a blockchain to remove the property rights associated with bitcoin", which is "the greatest flaw of the system".
- Nemo dat quod non habet ("no one gives what they don't have"): buying bitcoin without CDD/KYC means "good title does not pass"; stolen bitcoin sent into a Lightning channel still cannot be transferred — nemo plus iuris ("one cannot transfer to another more rights than he has").
- The Theft Act 1968 definition of property "clearly includes bitcoin"; freezing orders (already seen "in the UK and Ireland multiple times") can stop any movement of coins in a channel.
- Handling stolen goods carries up to fourteen years' imprisonment; a miner receiving a fee derived from stolen coins "is handling stolen goods", and a "$100 million data centre" can be sequestered as proceeds of crime.
- Property rights survive mixing: "If you move a Bitcoin token through 1,000 addresses, the original owner maintains ownership" — his worked example has a miner taking a BTC0.01 fee from a frozen BTC1.0 transfer and thereby handling stolen goods.
- Lightning depends on miners validating on-chain; where transactions "rollback" through malleability, "the Lightning Network completely fails".
- Identity was always in the design: "Bitcoin is not a system without identity; section 10 of my white paper notes identities, which are firewalled from the public network" — users must do their own CDD by law.

## How Craig reasons (his model/logic)
The method is doctrinal legal analysis layered on a token ontology: first establish that satoshis are indivisible property tokens (possession, bailment, exclusion of others), then run that premise through English property and criminal statute (nemo dat, Theft Act 1968, freezing orders) to show layer-2 constructions cannot shed base-layer legal obligations. He supports the statutory argument with a numerical worked example (1,000,000-satoshi fee on a frozen coin) and reframes a technical history (SegWit/malleability) as evidence of concealed motive — the account-model endgame.

## Where this contradicts BTC-mainstream logic
- Contradicts the canonical SegWit rationale: malleability was a pretext; the real aim was Lightning and an account-based redesign — a direct attack on Core's 2017 narrative.
- Contradicts the "layer-2 inherits layer-1 security" claim: legally it inherits layer-1 property encumbrances, so Lightning channels are fragile to freezing orders and theft claims.
- Contradicts "the protocol is the law" / code-is-law finality: courts and statutes (Theft Act, proceeds-of-crime orders) override channel states, and miners face personal criminal exposure.
- Contradicts the fungibility-by-mixing assumption: title defects survive 1,000 hops; there is no laundering away of ownership.
- Contradicts the anonymity ideal: white-paper section 10 is read as a firewall of identity from the public, not an absence of identity — CDD obligations attach to users.

## Notable quotes
- "no one gives what they don't have"
- "malleability is only a security flaw in Lightning-based payment channels, which were never a part of Bitcoin"
- "The tokens in Bitcoin are not stored on the blockchain, they are registered there."
- "If you move a Bitcoin token through 1,000 addresses, the original owner maintains ownership."
- "if a Bitcoin miner receives tokens that are stolen, they are handling stolen goods"
- "Bitcoin is not a system without identity; section 10 of my white paper notes identities, which are firewalled from the public network."

## Connections
Pairs with Binance: The Untrusted Intermediary (nemo dat and tainted title) and Ledgers and Design (right vs record, seizure, the Theft Act framing). The bailment/escrow discussion cites his earlier property writing [1][2]. This is the core of his anti-Lightning canon from the post-BSV era, later echoed in his court arguments that BTC developers departed from Bitcoin's property design; written amid the Kleiman litigation and his Satoshi-authorship campaign.
