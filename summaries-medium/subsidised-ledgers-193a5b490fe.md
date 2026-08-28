---
title: 'Subsidised ledgers'
date: 2018-11-23
slug: subsidised-ledgers-193a5b490fe
url: https://medium.com/@craig_10243/subsidised-ledgers-193a5b490fe
themes: [mining-consensus, security-economics, scaling-throughput]
---

# Subsidised ledgers
**Date:** 2018-11-23 | **URL:** https://medium.com/@craig_10243/subsidised-ledgers-193a5b490fe
**Subtitle:** The nature of Bitcoin is one that is designed to incentivise use, the same thing some call spam. Bitcoin is a commodity ledger. Miners are…

## Core thesis
The block reward is a temporary subsidy that pays miners to include transactions — usage that some dismiss as "spam" is precisely what the system is designed to incentivise. Miners who mine empty blocks while fee-paying transactions wait are therefore "dishonest" parasites taking unearned money. Craig proposes a concrete tiered fee schedule that would fill roughly 12.75-MB average blocks and sustain mining revenue as the subsidy halves away.

## Key arguments and claims
- Use-is-the-point: Bitcoin "is designed to incentivise use — the same thing some call spam"; miners are paid in a competitive consensus to add entries to the commodity ledger.
- Empty-block miners as dishonest: a miner who "mines an empty block when there are transactions waiting to be processed is cheating and taking unearned money" — "This is why they are a parasite."
- Income, not lottery: the miner is "paid not a 'reward' in the form of a lottery, but an income for the completion of a task" — miners accept a contract to add data, and the subsidy exists "so that the system can grow and scale".
- Red Queen game: proof-of-work starts with blocks that may lack economic value; the subsidy bootstraps low-value transactions until commerce gives the system value.
- Subsidy arithmetic: miners are currently subsidised "around 662,500 coins a year", dropping to 331,250 in under two years — "around 1,800 coins a day being paid so miners will allow the ledger to be used".
- PayPal benchmark: PayPal handles ~16.75 million transactions a day, averaging just under 200 TPS; "The Bitcoin SV node software has already demonstrated that it can handle this level of transactions", with plans to scale by several magnitudes.
- Proposed fee schedule: 1,000 free transactions per block (including all UTXO-consolidating transactions); $0.004 per KB for the first 25,000 simple transactions; $0.008 per KB for the next 25,000; then $0.005 USD per standard transaction — miners take the higher-value transactions first when blocks are congested.
- Resulting block profile: low-fee transactions would occupy "12.75 MB on average each block — the peak being around 57.5-MB blocks", with remaining data at higher, unsubsidised rates.
- Long-run deflation of fees: "Over time, and as the system grows in use and value, we would expect this to become even cheaper for users… the sky is the limit for transactions."
- Transaction sizing notes: a basic transaction (one input, two outputs) is ~250 bytes; non-standard transactions run 5–80% larger.

## How Craig reasons (his model/logic)
Incentive accounting: he treats the coinbase subsidy as a contractual payment for ledger-writing services and audits miner behaviour against that purpose, attaching moral labels (honest/dishonest/parasite) to block-construction choices. The method is numeric and prescriptive — a worked fee tariff with byte sizes and expected block fill — benchmarked against PayPal's throughput rather than crypto-internal metrics.

## Where this contradicts BTC-mainstream logic
- Miner discretion orthodoxy: the standard view lets miners include or exclude any transaction; Craig says empty blocks amid pending fee-paying transactions are fraud on the subsidy.
- Fee-market economics: instead of letting a scarce block space auction set fees, he prescribes a low, tiered, USD-denominated tariff with a free tier.
- "Spam" framing: filling blocks with low-value data is not an attack but the designed use of the ledger.
- Block-space scarcity model: capacity abundance (12.75 MB average now, uncapped later) replaces the congestion-pricing worldview.

## Notable quotes
- "the same thing some call spam"
- "they are cheating and taking unearned money"
- "This is why they are a parasite."
- "Proof-of-work is a Red Queen game."
- "the sky is the limit for transactions"

## Connections
Extends the reward-schedule section of "Commodity and security" (published four days earlier) into a full fee policy; the $0.005 standard-transaction figure becomes the valuation input in "Valuing systems — the margin of substitute goods" two days later. Written in the hash-war period when empty-block mining was a live accusation between the ABC and SV camps.
