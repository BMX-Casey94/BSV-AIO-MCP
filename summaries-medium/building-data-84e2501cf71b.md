---
title: 'Building Data'
date: 2018-11-13
slug: building-data-84e2501cf71b
url: https://medium.com/@craig_10243/building-data-84e2501cf71b
themes: [script-technical, scaling-throughput, protocol-immutability, mining-consensus]
---

# Building Data
**Date:** 2018-11-13 | **URL:** https://medium.com/@craig_10243/building-data-84e2501cf71b
**Subtitle:** In the beginning, Bitcoin allowed data.

## Core thesis
Bitcoin's original script already contains the opcodes needed to embed arbitrary data on-chain — OP_PUSHDATA1/2/4 allow pushes up to 4.3 GB in a single push — and these capabilities were "castrated" only by the artificially small block size, not by the protocol itself. Craig argues data storage is a natural, profitable business for miners and promises that in 2019 "we move to remove the limits, the shackles on Bitcoin and set it free."

## Key arguments and claims
- The original Bitcoin script supports data pushes of 255 bytes (OP_PUSHDATA1), 65 KB (OP_PUSHDATA2), and 4.3 GB (OP_PUSHDATA4) — the opcodes are "still enabled but castrated through block size."
- The current 520-byte push limit (520 = 0x208) makes OP_PUSHDATA4 "an enabled but dead OP_CODE," since the smallest value it can express (0x10000000 = 268,435,456) vastly exceeds what may be pushed.
- "Data is the ideal business to add" — miners holding and serving data gain a revenue stream; if miners withhold data "they will find that they have a block orphaned," so incentives enforce data availability.
- He teases a late-November reveal connecting data pushes to transaction malleability, asserting "a mal fix kills the protocol" — i.e. the malleability fixes adopted by BTC (SegWit-style) damage Bitcoin rather than repair it.
- A demonstration is promised at the CoinGeek Week Conference, and "in 2019, we move to remove the limits" — framing the BSV roadmap of unbounded blocks as a restoration, not a change.

## How Craig reasons (his model/logic)
He argues from the original protocol text: enumerate the opcodes as shipped in v0.1, show they are still consensus-valid, and conclude that current restrictions are policy-layer shackles rather than protocol rules. The method is originalist and incentive-based — miner economics (orphan risk, fee revenue) are invoked as the enforcement mechanism that makes data storage safe at scale. Rhetorically it is promotional and prophetic ("Sorry, but the entire Internet is about to change"), tied to an upcoming conference reveal.

## Where this contradicts BTC-mainstream logic
- Directly attacks the small-block orthodoxy: the 520-byte push limit and 1 MB block cap are characterised as "shackles," not safety features — the opposite of the BTC view that tight limits protect decentralisation.
- Rejects the mainstream malleability-fix consensus (SegWit): "a mal fix kills the protocol. Dead… well, it is still walking… for a time" — predicting BTC's approach is fatal.
- Contradicts the "blockchain is not a data store" doctrine (OP_RETURN minimalism, anti-spam filtering): Craig casts on-chain data as a legitimate miner revenue business that the market, not developer policy, should regulate.

## Notable quotes
- "These (still enabled but castrated through block size) script commands worked by sending the next byte that contained the number of bytes to be pushed onto the stack."
- "Right now, due to the 520-byte limit (520=0x208)… this is an enabled but dead OP_CODE."
- "Data is easy and inexpensive for miners to hold and process. If miners try to withhold data, they will find that they have a block orphaned."
- "In 2019, we move to remove the limits, the shackles on Bitcoin and set it free."
- "Bitcoin is cash, and it is more than you could have imagined. No limits."

## Connections
Written the day before the BCH/BSV split (15 Nov 2018) as part of the run-up to the hash war; promotes the CoinGeek Week Conference where the data/malleability thesis was to be demonstrated. The "remove the limits in 2019" pledge foreshadows BSV's op_return and block-size increases, and the malleability tease connects to his recurring anti-SegWit argument developed across the Medium corpus.
