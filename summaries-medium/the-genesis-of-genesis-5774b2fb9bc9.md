---
title: 'The Genesis of Genesis'
date: 2019-04-12
slug: the-genesis-of-genesis-5774b2fb9bc9
url: https://medium.com/@craig_10243/the-genesis-of-genesis-5774b2fb9bc9
themes: [satoshi-history, audit-accounting, script-technical]
---

# The Genesis of Genesis
**Date:** 2019-04-12 | **URL:** https://medium.com/@craig_10243/the-genesis-of-genesis-5774b2fb9bc9
**Subtitle:** Some time ago in a blog post far far away, I wrote about the genesis block and the start of Bitcoin.

## Core thesis
Revisiting his earlier "Genesis" post, Craig argues the genesis block's unspendable 50 BTC is not a flaw but a deliberate "anchor" — and economically a non-event, since in January 2009 bitcoin had zero value ("50 bitcoin times zero"). The bulk of the essay is autobiographical evidence of authorship: he claims he distributed pre-release Bitcoin code in September 2008 (with different keys, a different genesis address, "timechain" terminology and a 10,000-satoshi initial reward), situates that work amid his GSE-Malware exam, master's degrees and BDO forensic career, and ties Bitcoin's origin to his audit work on digital auditing techniques (DATs) and the first nChain patent, WP0001 (general-ledger accounting on the blockchain).

## Key arguments and claims
- The "lost" genesis coins are a non-issue: "The so-called lost bitcoin from the genesis block do not exist as spendable bitcoin; it is an anchor." Value calculation: "50 bitcoin times zero. Remember, anything times zero is zero. There is nothing lost."
- "The keys vary between the genesis block that is public and the early code that was distributed. In September 2008, I sent many copies of the early code" — quoting a `txNew.vout[0].scriptPubKey` line with an `OP_CODESEPARATOR` and a long hex pubkey as evidence of the pre-release version.
- In that version "it was not called a 'block chain' — such was a later change"; he quotes the source comment describing "The timechain is a tree shaped structure starting with the genesis block at the root".
- "Orphans and forks are part of how Bitcoin works. Such was always the design" — they affect mining, not transactions.
- The genesis block "did not only have a different hash, it had a completely different address" in the September code.
- Timeline anchor: the code version "was completed and posted to people on Wednesday, September 10, 2008" — the day CERN's Large Hadron Collider powered up — while he was preparing for the SANS/GIAC GSE-Malware exam ("only four of us managed to ever achieve it"), enrolled in a statistics master's (University of Newcastle) and finishing a master-in-law (Northumbria).
- Motive claim: "One of the biggest reasons for the development of blockchain, Bitcoin, is that I saw the changes in order technology… It wasn't just money." DATs "shown an accuracy of over 96% on analysis of non-fraud financial statements" need "a single immutable data store. Such was Bitcoin."
- "There is a reason why WP0001, general ledger accounting on the blockchain and the first filed patent application I had with nChain, is about accounting."
- Wayback Machine defence: the absence of his pre-2015 archives "is proof of very little at all" — he used robots.txt and metadata tags to remove pages in 2015, and comment timestamps prove the pages existed.
- Technical aside "On Keys": ECDSA public-key recovery from signature (R,S) plus message; the genesis block "was designed never to be spent", and ECDSA permits a signature linking to an invalid/unknown public key, including a self-signed transaction constructed via the known ephemeral key K.
- The September code had `txNew.vout[0].nValue = 10000;` — with COIN = 10,000,000 the initial reward would have been a fraction of a bitcoin; the released `50 * COIN` subsidy was chosen so "early adopters would get a lot more so that they could reinvest in the network". He adds: "I greatly underestimated human greed and the propensity to scam people."
- Forensic credentials: at BDO he built data-mining tools that "enabled the prosecution of a child-grooming offender in South Australia" by deanonymising social-media accounts; his P2P knowledge came from music-industry piracy investigations. He cites the legal principle "piratis et latronibus capta domimium non mutant" and that disclaimers cannot shield economic criminals.

## How Craig reasons (his model/logic)
The essay blends evidentiary autobiography with technical detail: code snippets, dated external events (the LHC startup, archived GIAC pages, his 2008 gse-compliance blogspot posts) and professional war stories are marshalled as corroboration that he wrote Bitcoin. The argumentative mode is memory-as-proof — precise dates, certifications and named colleagues offered as checkable anchors — combined with a forensic-epistemology lesson (absence of Wayback evidence ≠ absence of pages). Underneath, an economic frame recurs: Bitcoin as audit infrastructure against fraud, not as speculative asset.

## Where this contradicts BTC-mainstream logic
- Contradicts the "genesis block bug/unspendable quirk" folk history: he reframes it as intentional design (an anchor, possibly with an invalid/self-signed key), not an accident of the first release.
- Contradicts the hoarding/store-of-value ethos: early coins' value is irrelevant because subsidy was a reinvestment incentive, and "I greatly underestimated human greed" indicts the number-go-up culture BTC came to embody.
- Contradicts the "Bitcoin is money first" narrative dominant post-2017: he insists the primary motivation was immutable audit storage to "reduce fraud" — accounting, not gold.
- Contradicts the sceptics' Wayback-based debunking of his Satoshi claim: he argues archive absence is engineered (robots.txt) and evidentially worthless.

## Notable quotes
- "The so-called lost bitcoin from the genesis block do not exist as spendable bitcoin; it is an anchor."
- "50 bitcoin times zero. Remember, anything times zero is zero. There is nothing lost."
- "In September 2008, I sent many copies of the early code."
- "I greatly underestimated human greed and the propensity to scam people."
- "The absence of evidence in the Wayback Machine is proof of very little at all."
- "The phoenix must burn to rise."

## Connections
A sequel to his pseudonymous "Genesis" post (medium.com/@adam_selene) and a keystone of his April 2019 Satoshi-authorship campaign alongside "Evidence and law" (published the same day) and "Satoshi Nakamoto". References his 2008 gse-compliance.blogspot.com posts on DATs, nChain patent WP0001 (blockchain general ledger), and his BDO forensic career; the ECDSA key discussion links to his technical pieces on signatures and key ownership.
