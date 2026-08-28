---
title: 'Commodity and security'
date: 2018-11-19
slug: commodity-and-security-4fa134c99f14
url: https://medium.com/@craig_10243/commodity-and-security-4fa134c99f14
themes: [law-regulation, mining-consensus, monetary-economics]
---

# Commodity and security
**Date:** 2018-11-19 | **URL:** https://medium.com/@craig_10243/commodity-and-security-4fa134c99f14
**Subtitle:** Bitcoin is a commodity based on the exchange of a tokenised security issued as a payment to the "miners" or nodes in the system for a…

## Core thesis
Craig defines Bitcoin as a commodity — the right to have an "immutable" entry written to the ledger — purchased with a tokenised security (the satoshi) paid to miners. From this he builds a contract-law model of mining (offer and acceptance producing a natural block-size equilibrium) and an extensive liability framework: miners form a common-law partnership and can be negligent for processing double-spends or for validating op-codes whose illegal purpose is easily determined, such as OP_DATASIGVERIFY.

## Key arguments and claims
- Commodity definition: the commodity is "the right to have an entry written into the ledger" exchanged for tokens between user and miner; miners "accept fees in exchange for the provision of a service".
- Integer token units: only whole satoshis exist — 100,000,000 (10⁸) satoshi per nominal bitcoin; "There are no fractional satoshi."
- Mining as contract: users make an offer to all miners; miners accept by including the transaction in a block; competition yields "a natural block-size equilibrium based on the utility and external use value in the blockchain".
- Transaction expiry mechanics: a transaction never truly expires; most miners drop it from memory after 72 hours, but it can be re-sent — low-fee transactions may clear in "off" periods and be excluded at peak times.
- Double-spend as larceny: creating mutually exclusive transactions to defraud a merchant "will be a form of larceny"; miners who fail to orphan an intentional double-spend when a consensus minimum fee was paid open themselves to "actions in negligence".
- Least-cost-provider enforcement: cites Mann & Belzley (2005) — enforcement is most effective from the party best placed to prevent the harm.
- Liability analogy spectrum: a miner doing simple validation mirrors a telecommunications carrier (conduit, low liability); at the other extreme, miners incorporating op-codes "specifically designed to facilitate illegal activity" are like publishers (high liability).
- Common-law partnership: consensus miners "could be deemed to comprise a common-law partnership", so failing to restrain a rogue miner is like partners failing to restrain a rogue partner — liability for one extends to all on that fork.
- OP_DATASIGVERIFY attack: its use is "clearly designated for the provision of bucket shops and a Silk-Road-version-2.0 drug market" — an easily determined illegal use, unlike general-purpose script where the miner "cannot be expected to 'rule' on the validity of a transaction".
- Wallet taxonomy: source wallets (initiate exchanges, keep logs) vs destination/merchant wallets; merchant wallets can relocate to permissive jurisdictions (Antigua internet-gambling example, including the US's lost WTO case), but user wallets cannot escape their users' jurisdiction.
- Regulatory targeting: backbone/mining-level filtering is impractical; address- and script-filtering legislation is "better directed to wallet services and merchants".
- Subsidy schedule: 50 BTC per block at launch, 12.5 now, 6.25 in under two years, 3.125 by 2024 — "the fees at this point will be critical to the continued existence of the system".
- Enforcement realism: quotes Dr Russell Smith (Australian Institute of Criminology, 2000) that online scam perpetrators can close down, move assets and conceal identities, leaving "little likelihood of success whether civil or criminal proceedings are taken".

## How Craig reasons (his model/logic)
Law-review method: footnoted citations (Mann & Belzley, Zittrain's "Internet Points of Control", Smith on digital fraud), analogical legal reasoning across conduit/publisher/library/printer categories, and classification taxonomies (user wallet, backbone provider, propagation network, merchant wallet). Contract doctrine is mapped directly onto protocol behaviour — block inclusion as acceptance, orphaning as risk allocation — so that existing common-law categories, not new crypto norms, supply the rules.

## Where this contradicts BTC-mainstream logic
- "Code is law" / permissionlessness: miners are contractually bound service providers who can be negligent, not autonomous agents beyond law.
- Miner neutrality: miners are obliged to orphan blocks containing fraudulent double-spends; inaction is itself actionable.
- Disintermediation narrative: footnote 4 calls it an "error" to see the system as disintermediated rather than "an exchange by two (or more) contractually associated parties".
- Anti-regulation ethos: securities liability, negligence suits and court analogies are welcomed as the system's enforcement layer.

## Notable quotes
- "Bitcoin is a commodity based on the exchange of a tokenised security"
- "Mining is a competitive industry."
- "This leads to a natural block-size equilibrium based on the utility and external use value in the blockchain."
- "the act will be a form of larceny"
- "miners could be deemed to comprise a common-law partnership"
- "clearly designated for the provision of bucket shops and a Silk-Road-version-2.0 drug market"

## Connections
Links to his own Medium post "Drugs, fraud and murder" and a yours.org thread on OP_CHECKDATASIG; the DSV liability argument continues in "A house divided" (five days later), and the reward-schedule section feeds directly into "Subsidised ledgers". Cites Mann & Belzley (William and Mary Law Review, 2005), Zittrain (2003) and Smith (2000).
