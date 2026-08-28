---
title: 'Why CLTV was a bad idea'
date: 2019-01-08
slug: why-cltv-was-a-bad-idea-4b5d0c043e2a
url: https://medium.com/@craig_10243/why-cltv-was-a-bad-idea-4b5d0c043e2a
themes: [btc-critique, script-technical, lightning-l2, protocol-immutability]
---

# Why CLTV was a bad idea
**Date:** 2019-01-08 | **URL:** https://medium.com/@craig_10243/why-cltv-was-a-bad-idea-4b5d0c043e2a
**Subtitle:** People seem to have this misplaced idea that the SegWit Coin (BTC) Core devs are even adequate developers who understand Bitcoin and seek…

## Core thesis
CheckLockTimeVerify (CLTV), activated by Bitcoin Core in 2015, was not an innovation but the resurrection of OP_BLOCKNUMBER — a proposal repeatedly rejected in 2010 — revived solely to enable the Lightning Network, which Craig calls "a parasitic side protocol that destroys the security of the system". Every legitimate use case for CLTV is better served by nLockTime with wallet-held pre-signed transactions, which is more private, more flexible (parties can renegotiate until settlement), and keeps contract logic at the periphery rather than bloating the protocol. He concludes that Core's changes must be rolled back: "with the SV client, we shall be doing just so."

## Key arguments and claims
- Core developers face a logical dilemma: they "either understood Bitcoin and are seeking to subvert it, or they have no concept of Bitcoin" — adequacy and the observed outcome of BTC's changes are mutually exclusive.
- CLTV descends from OP_BLOCKNUMBER, "dates to late 2010", requested by Bitcointalk user ByteCoin and rejected "time and time again"; it was resurrected "to allow the introduction of a parasitic protocol that has no relationship to Bitcoin (and, in fact, does not work — see the Lightning Network)".
- The lost-wallet rationale is a non sequitur: "The nTimeLock… transaction is a file. The private key Alice uses is a file." If Alice can lose the pre-signed refund transaction she can equally lose her key — CLTV does not remove the file-keeping burden, so "even having CLTV does not mitigate loss. To say otherwise is disingenuous."
- The canonical 2-of-2 escrow (Alice pays Bob for work, refund if undelivered) is fully achievable with nLockTime: Bob pre-signs a return transaction before funding; Alice holds it and can recover after the locktime — "without all the CLTV hassle".
- Renegotiation is the decisive advantage: with nLockTime Alice can return to Bob "at day 7, 8, and then 9" before the day-10 locktime ripens; if they settle on day 9, "Nothing of what Bob and Alice would have done need ever be public." CLTV fixes all conditions in the published script "Forever" — "CLTV loses" privacy.
- Multi-party optionality: Alice can hold scripts signed by Bob at 10 minutes, Charlie at 15, both at 17.5 — a menu of nLockTime-satisfied outcomes no CLTV template can express; "In allowing the wallet to control a level of the processing… it becomes more powerful and flexible than CLTV could ever hope to achieve."
- Replace-by-fee and fee-bump arguments for CLTV are dismissed: "if the network is flooded, you cannot send an alternative in any case", and a block-height expiry makes a payment "something no merchant in their right mind would touch" — "another solution seeking a problem".
- "Bitcoin is not PGP": no web of trust, no persistent keys — "you keep the public key private and only create an address and key pair for a single interaction. Identity is not used in Bitcoin."
- "Miners are not peers": miners "validate and settle", enforce immutability and ordering; "the users" are the peers who negotiate. The myth that miners decide what is contracted "is a major fallacy that needs to end."
- Bitcoin "is not an implementation of Tim May's anarchist system… Bitcoin is private and designed to work inside the existing common-law legal frameworks defining money and trade."
- He concedes the original code "was a long way from being desirable" with stubs to finish, but "Bitcoin as a protocol was complete, and the changes to it by the Core developers have not helped at all."
- Credit where due: "At least Mike Hearn got it" (linking a 2011 Bitcointalk post and the Hearn–Satoshi correspondence on nLockTime).

## How Craig reasons (his model/logic)
Historical-archaeological method: he excavates the 2010 OP_BLOCKNUMBER thread to show CLTV was considered and rejected at Bitcoin's origin, positioning himself as correcting a decade-old insufficient explanation ("I often keep it short when I see something I disagree with… it is a decade late, but it can be addressed now"). Analytically he wields formal fallacy labels (non sequitur, with a logicallyfallacious.com link) and reductio via the file-equality argument. The architectural principle invoked is end-to-end design: "Bitcoin is designed to be simple at the centre; the logic can then, as with the Internet, be created on the periphery."

## Where this contradicts BTC-mainstream logic
- Repudiates the Core development model itself: soft-forked script additions (BIP-65/CLTV, 2015) are framed not as progress but as vandalism of a completed protocol — the opposite of the "conservative, careful Core" self-image.
- Denies Lightning's legitimacy outright: where 2018–19 mainstream BTC discourse treated Lightning as Bitcoin's scaling future, Craig calls it a parasite that "never will" work and the sole real motivation for CLTV.
- Rejects replace-by-fee (RBF) logic and the fee-market premise behind it ("the cap-limited concept that SegWit coin promotes; it is not how Bitcoin is designed").
- Contradicts "not your keys, not your coins" maximalism: users "do not need to have access to all keys they have ever used, and nor should they have to" — single-use keys and off-chain file custody replace key hoarding.
- Inverts the "users run nodes to enforce rules" doctrine: "Bitcoin is not peer to peer as in users run nodes; nodes are always miners."

## Notable quotes
- "They either understood Bitcoin and are seeking to subvert it, or they have no concept of Bitcoin."
- "CLTV or CheckLockTimeVerify was not some new idea and concept discovered by Core and implemented in 2015. It is in fact an OLD rejected proposal."
- "Lightning is not Bitcoin, it is a parasitic side protocol that destroys the security of the system."
- "The nTimeLock (and possibly also nSequence-locked) transaction is a file. The private key Alice uses is a file."
- "Bitcoin is not peer to peer as in users run nodes; nodes are always miners."
- "I do understand that those wanting socialism and anarchy do not like the concept of free contracting, but it is at the heart of trade."
- "It is time to return Bitcoin to what it was, and with the SV client, we shall be doing just so."

## Connections
Belongs to his early-2019 weekly "errors in ideas surrounding Bitcoin" series announced in the conclusion, alongside the nChain-patent application posts (immutable file store, smart-card wallets). Cites the 2010 Bitcointalk OP_BLOCKNUMBER thread (topic 1786), Mike Hearn's 2011 reply, the Hearn–Satoshi correspondence hosted on nakamotostudies.org, and his threshold-key patent WO2017145010A1. The nLockTime-as-contract theme continues his 28 December contract-law post and anticipates his later "return to v0.1 protocol" Genesis arguments.
