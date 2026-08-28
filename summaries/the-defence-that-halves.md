---
title: "The Defence That Halves"
date: 2026-07-26
slug: the-defence-that-halves
url: https://singulargrit.substack.com/p/the-defence-that-halves
themes: [security-economics, monetary-economics]
---

# The Defence That Halves
**Date:** 2026-07-26T10:28:26.542Z | **URL:** https://singulargrit.substack.com/p/the-defence-that-halves
**Subtitle:** A chain is only as hard to rewrite as this fortnight's electricity bill. That bill is set by a subsidy that halves every four years, against an attack cost that halves every eighteen months. =

## Core thesis
Proof of work does not make a ledger expensive to attack; it converts a current expense into a defence, and that expense equals what miners are paid right now. With the block subsidy halving every four years while hardware capability per dollar doubles every eighteen months, a chain without a large fee market becomes cheaper to rewrite on every plausible price path. The only specified replacement — transaction fees — requires throughput the one-megabyte cap forbids and the community has twice declined to provide.

## Key arguments and claims
- Difficulty adjusts every 2,016 blocks (roughly a fortnight) to restore the ten-minute interval whatever the hashpower; it is "a readout", not a store. There is no accumulated security: a chain mined for a decade is no harder to rewrite than one mined for a month at the same rate.
- Modelled as a rent-seeking contest with free entry, aggregate miner expenditure equals aggregate revenue; difficulty drops out of the calculation. Halve revenue and you halve expenditure, hashpower and rewrite cost. With heterogeneous costs the zero-profit condition binds only at the margin, so true spending is below revenue — his figures overstate the defence.
- White paper Section 6 specifies the incentive transitioning "entirely" to transaction fees: the subsidy was scaffolding, the fee market the building — an unwritten throughput specification, since steady-state security equals the number of transactions multiplied by what each pays.
- The one-megabyte cap (a temporary 2010 anti-spam measure, in place fifteen years) forecloses the volume term of fee revenue. The price term is bounded because a fee buys queue position, not security or value: Huberman, Leshno & Moallemi (2021) and Easley, O'Hara & Basu (2019) show fee revenue depends on capacity, congestion and waiting costs, not the exchange rate; the ceiling is users' outside option, so higher fees relocate users rather than raise revenue.
- The 2015–2017 capacity dispute was settled by separation, not argument: big-block chains forked away in August 2017 and again in November 2018; today's BTC population is a revealed preference for the limit, repeated through eight further years of visible backlogs.
- The reversal now required dwarfs what was declined: funding the 2036 security requirement from fees needs 894 transactions a second at a $50 fee, or 44,720 at $1 — 134 and 6,705 times the present limit (134 MB or 6.7 GB blocks); by 2045 the multiples run from eight thousand to four hundred thousand. Segregated Witness delivered a factor of two to four. "A chain processing gigabyte blocks is a different system running the same ticker."
- Layer two subtracts from security: a channel transaction is a fee that never reaches a miner while the value moved still rests on base-layer security. A channel pays two on-chain fees for arbitrary intermediate volume, so the ratio of value settled to fees collected rises without limit — the more successful the layer, the smaller the budget protecting it.
- Moore's law is about cost, not speed: capability per dollar doubles roughly every eighteen months, so the cost of matching the installed fleet halves on that clock. Because Dennard scaling ended in the mid-2000s (cost per operation kept improving; power per transistor stopped), the electricity requirement grows. Cheaper hardware gives defenders volume at the same spend and attackers a discount.
- On the most generous defensible price path ($1m per coin in 2030, $13m in 2045; 18.65% annual growth; 60% electricity share; $0.04/kWh; security indexed to 1.00 in 2028), miner revenue stays flat ($56–97bn) because price growth (18.65%) nearly cancels issuance decay (17.33%), netting 1.3%. The security index falls to 0.42 by 2031, then 0.1561 (2032), 0.0244 (2036), 0.0038 (2040) and 0.0004 (2045): roughly two thousand times cheaper to attack on a path that made the coin eighteen times more valuable.
- Holding security constant is impossible, not expensive: the required budget doubles every eighteen months ($222bn a year by 2032, $1,411bn by 2036, $90,318bn by 2045), needing 14.8% of world electricity in 2032, 86.5% in 2036 and forty-seven times world generation (about 31,734 TWh, growing roughly 822 TWh a year) in 2045. The curves cross in 2036, insensitive to generation assumptions, because the requirement grows at 58.7% annually.
- Renting hashpower is no rescue: rentable supply lacks the depth for a majority, and for attacks under a month capital dominates flow cost by better than ninety-nine to one (a one-day attack is 99.98% capital; about $82m a day to rent versus $121bn to buy in 2028). A deep rental market would collapse attack cost to the flow figures — a worse problem.
- Following the cash: proof of work produces no output; five to seven transactions a second are the occasion for the expenditure, not its product. Between 2028 and 2045, $1,335bn moves from new entrants to miners, of which $801bn is burned as electricity, via the sale of 626,203 newly issued coins at a $2.13m average absorption price — an inflow required merely to hold the price level. Against market capitalisation the outflow is trivial (0.411% in 2028 falling to 0.025% by 2045, as capitalisation rises from $14.2tn to $271tn); against the security it buys, enormous. Of the three Ponzi elements, one holds (earlier participants paid from later ones) and two do not (no promoter, no representation of business returns), so the term should not be used.
- Lower price paths are worse, not better: a $5m terminal gives a 2045 index of 0.00019; flat from 2030 gives 0.00005; 20% annual growth from today gives $1.86m and 0.00054; flat at today's price gives 0.00002. The dichotomy has no interior: either the fee base grows with the requirement — needing throughput the design forbids and the community twice declined — or security declines at the table's rate. Replication package: zenodo.org/uploads/21585743. Also cited: Budish (2025), Carlsten et al. (2016), Dennard et al. (1974), Gill, Stinner & Tyrell (2026), Moore (1965).

## How Craig reasons (his model/logic)
A counting and accounting argument. He reduces security to a flow identity — under free entry, aggregate expenditure equals aggregate revenue, with difficulty a mere proportionality constant — then runs two clocks against each other: the subsidy halving every four years versus hardware cost halving every eighteen months. The method combines specification-reading (white paper Section 6), revealed-preference inference from fork history, comparative statics from the fee literature, and exhaustive arithmetic: a worked table, sensitivity over price paths and generation growth, and a dichotomy proof that no third option exists because only two terms (capacity, price) can raise fee revenue and both are bounded.

## Where this contradicts BTC-mainstream logic
- Inverts the orthodox slogan: "proof of work makes the ledger expensive to attack" is "the wrong way round" — PoW converts an expense into a defence, and the expense comes from the payment.
- Denies accumulated or "thermodynamic" security: "There is no accumulated security in a chain, no reservoir filled by fifteen years of hashing."
- Denies that a capped fee market can fund security: fees price delay, not value, and the queue length "is bounded by a constant set in 2010".
- Treats layer-two scaling as strictly negative for security: "Every transaction successfully moved off-chain is a subtraction from the fee base that was supposed to replace the subsidy."
- Denies that raising the limit remains a live option: "the option has already been exercised, and the answer was no"; the needed reversal is "a different system running the same ticker".
- Denies that price appreciation rescues security: price growth and issuance decay "very nearly cancel", leaving flat revenue against a doubling requirement.
- Unifies the energy and security debates: "They are one object seen twice. The electricity is what leaves the system. The security is what it was meant to purchase."

## Notable quotes
- "Difficulty is not a store. It is a readout."
- "The subsidy was scaffolding. The fee market was the building."
- "A chain processing gigabyte blocks is a different system running the same ticker."
- "A chain that will not scale cannot fund its own defence. The arithmetic sets the rate."

## Connections
No other essay in the set is named. The essay cites Budish (2025), whose constraint "There Is No Such Thing as Spam in a Priced System" invokes when arguing that capping volume tightens the security-funding problem — this essay supplies that arithmetic in full. Its account of the 2010 cap and the foreclosed fee market is the same decision the spam essay analyses as a rationing regime.
