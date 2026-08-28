---
title: "A Mechanism of Honour - Ledger of Blood and Electricity"
date: 2025-07-30
slug: a-mechanism-of-honour-ledger-of-blood
url: https://singulargrit.substack.com/p/a-mechanism-of-honour-ledger-of-blood
themes: [spv-light-clients, mining-consensus, law-regulation, scaling-throughput]
---

# A Mechanism of Honour - Ledger of Blood and Electricity
**Date:** 2025-07-30 | **URL:** https://singulargrit.substack.com/p/a-mechanism-of-honour-ledger-of-blood
**Subtitle:** Why Trustless Systems Depend on Law, Miners, and the Inviolability of Hashes

## Core thesis
Simplified Payment Verification is not a convenience but the cornerstone of Bitcoin's peer-to-peer design: a node is by definition a miner, and only miners hold power; users need store nothing more than block headers, their full input transactions and Merkle paths. Security and honesty are enforced by proof-of-work economics and by law — not by archival full-node hobbyists, who are dismissed as parasites.

## Key arguments and claims
- Section 5 of the whitepaper defines what a node is: "A node is not a voyeur. A node is a labourer. It mines." Non-mining "full nodes" are spectators with no authority over transaction integrity.
- SPV is "not merely a shortcut—it is the only road worth walking": without it there is no peer-to-peer, "only dependency, intermediaries, and trust. And trust is a lie."
- The peer-to-peer flow is direct: Alice sends the transaction to Bob; Bob verifies it and forwards it to the miners. "Every other participant is a spectator."
- SPV users store only block headers — "Fifty megabytes. Less than a few photographs of your dog" — giving linear growth against exponential scale, riding Moore's law; they query random miners and rely on Bayesian inference and statistical confidence in chain validity.
- Miners are capital-exposed, jurisdictionally located, physically identifiable entities: "They cannot hide. They do not wish to hide. Dishonest miners lose money." An attacker's cost is not merely electrical but "exposure. Physical. Legal. Financial", with detection expected within six blocks — one hour.
- The word "honest" appears 15 times in the whitepaper; the UK Fraud Act 2006 defines dishonesty explicitly, and Bitcoin "aligns with that. It punishes deception. It rewards honesty." Transactions linked to criminality "can be isolated, quarantined, and removed".
- The SPV wallet's required contents are enumerated: full input transactions (TX1, TX2) with their Merkle paths (the TXID alone is insufficient — Bob must hash the full transaction data himself); private/public keys; minimal processing sufficient for ECDSA point multiplication and hashing; optionally block headers.
- A Merkle proof "does not prevent a double spend but acts as a fail-fast mechanism against spam attacks"; miners may charge fees for serving full transaction data to non-SPV counterparties.
- Ownership is redefined: "She does not own the coins. She owns the right to spend them... Bitcoin does not give ownership. It gives control."
- The Merkle anatomy of TX3 is walked in detail: Hash(TX3) yields Hash3, which combines with Hash2 to form Hash23, joins Hash01, and propagates to the Merkle root anchored in the block header alongside nonce and previous hash — "the skeleton of immutability".
- Full-node operators are "parasites. They are barnacles on the hull"; "Bitcoin does not scale by consensus... It scales by design"; the closing promise is that throughput of "millions, even billions, of transactions per second" will be demonstrated, not theorised.

## How Craig reasons (his model/logic)
The reasoning combines textual exegesis of the whitepaper (section analysis, word counts) with game-theoretic incentive analysis of mining, legal institutionalism (the Fraud Act 2006, Churchill's defence of the gold standard as a cage for political inflators), and engineering formalism — the Merkle-path walkthrough is presented as proof that verification reduces to "the transaction. The hash. The path. The truth."

## Where this contradicts BTC-mainstream logic
- BTC's full-node culture is "full-node fetishism", a ritual that "adds nothing to the integrity of the transaction"; non-mining nodes carry no power.
- BTC itself is "not peer-to-peer... a waiting room", "a cathedral to inefficiency" sanctified by ideology rather than utility.
- The rhetoric of "trustlessness" is rejected: the system "is not trustless. It is ruthless" — secured by cost, law and identifiable miners, not by the absence of accountable actors.
- Consensus-as-governance is dismissed: "Consensus is the coward's refuge. Design is the builder's truth" — Bitcoin scales by architecture, not debate.

## Notable quotes
- "A node is not a voyeur. A node is a labourer."
- "It is not trustless. It is ruthless."
- "Bitcoin does not give ownership. It gives control."
- "The world will not scale Bitcoin. Bitcoin will scale the world."

## Connections
The SPV wallet mechanics described here are the technical substrate for the micropayment economies of the 25 and 29 July essays — sub-cent commerce presupposes users who verify without full nodes; the law-and-miners framing extends his recurring property-rights and legal-accountability themes.
