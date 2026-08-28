---
title: 'Money Must First Be Stable'
date: 2018-08-14
slug: money-must-first-be-stable-a44fbe7574c7
url: https://medium.com/@craig_10243/money-must-first-be-stable-a44fbe7574c7
themes: [scaling-throughput, mining-consensus, protocol-immutability, monetary-economics]
---

# Money Must First Be Stable
**Date:** 2018-08-14 | **URL:** https://medium.com/@craig_10243/money-must-first-be-stable-a44fbe7574c7
**Subtitle:** I'm writing this in a more accessible format; that is a blog rather than an academic paper.

## Core thesis
Bitcoin's 10-minute block interval is not an arbitrary parameter to be optimised but a stability choice grounded in propagation mathematics: block discovery is an SEIR (epidemic-model) process rather than a clean Poisson one, and shortening the interval raises the orphan rate two-and-a-half to three times, widens block-size variance, and systematically favours large miners over small — while delivering merchants nothing that 0-conf does not already provide. Money must be stable; the protocol should be locked down, not iterated like "a typical Silicon Valley screw with it and hope that it works experiment".

## Key arguments and claims
- The observed average block time is ~560 seconds (9.3 minutes), not 600, because network hash rate keeps growing between difficulty adjustments on a near-Moore's-law path.
- Block propagation is an SEIR process — susceptible, exposed, infectious, recovered mapped onto mining states — which only approximates a Poisson/exponential distribution at longer block times; he links his SSRN model (abstract_id=3151940) and notes gossip propagation is slow at the tails (few holders, or nearly-complete dissemination).
- Validation mechanics matter at short intervals: he lists the CheckBlock/CheckBlockHeader requirements, UTXO caching behaviour, and missing-transaction downloads, observing that sub-one-minute block times follow a power-law distribution rather than an exponential one.
- Real monetary transaction streams are approximately exponential only over windows of roughly five minutes to an hour — he cites his 2006-2007 work modelling transaction time distributions for automated fraud/audit systems (SSRN 2953900); shorter windows are noise-dominated, so block sizes become far less predictable.
- The orphan penalty: at a one-minute interval the orphan rate is "around 2.5 to 3 times that exhibited at a 10-minute block interval"; the first quartile is 30% of the mean at 10 minutes versus 40.5% at one minute; small miners would fail to validate large third-quartile blocks 27% of the time before the next block arrives — a burden falling on miners with under 10% of hash rate while pools and 15%+ solo miners benefit.
- The merchant case is spurious: even at one-minute blocks roughly 20% take over two minutes, while commerce needs sub-three-second propagation — so fast blocks are "a false argument against the benefits of 0-conf".
- Throughput equivalence: 1GB per 10-minute block corresponds to 100MB per one-minute block — shortening the interval buys variance, not capacity.
- "The 10-minute time interval within Bitcoin was a guess. It's a good enough one": the workable range is somewhere between five and twenty minutes, never below two if the system must scale, and the true optimum is not calculable — it varies with time of day, season, use and electricity price.
- Stability as monetary policy: merchants must redeploy software on every protocol change, so "when compared to fiat, Bitcoin changes minute by minute"; the task is to "stabilise and lock down the protocol so that merchants can build and use coins globally".
- Conclusion: "Bitcoin was designed to be stable and set in stone. This is how good money works."

## How Craig reasons (his model/logic)
Engineering conservatism dressed as mathematical modelling: epidemic (SEIR) models imported from epidemiology, distributional analysis (exponential versus power-law versus Gaussian), quartile statistics on orphan rates and block sizes, and practitioner authority from his fraud-systems career. The argumentative pattern is consistent — quantify the variance costs of the proposed change, show the advertised benefit is illusory, and conclude with lock-down.

## Where this contradicts BTC-mainstream logic
- The faster-is-better block-time culture (Litecoin's 2.5 minutes, Ethereum's ~15 seconds, every "Bitcoin but faster" fork): Craig argues shorter intervals are objectively worse for mining decentralisation and give merchants nothing usable.
- The "0-conf is unsafe, wait for confirmations" orthodoxy: he argues 0-conf is the real merchant answer and that fast blocks are a false substitute for it.
- Iterative protocol governance — the BIP-driven culture of continuous upgrades on both BTC and, increasingly, BCH — is reframed as monetary instability that destroys merchant investment.
- Cuts equally against voices inside the 2018 BCH camp flirting with block-time and ordering changes: the stability doctrine here becomes the BSV "locked protocol" position three months later.

## Notable quotes
- "That is why 10 mins."
- "Money works best when it is stable."
- "Bitcoin needs to work within the financial world, not to have this idea that the financial world can be modelled to work in Bitcoin."
- "The 10-minute time interval within Bitcoin was a guess. It's a good enough one."
- "Bitcoin was designed to be stable and set in stone. This is how good money works."

## Connections
Published the same day (2018-08-14) as "The myths of Bitcoin", whose "set in stone" governance section this essay substantiates technically. Cites his own SSRN papers on block propagation (abstract_id=3151940) and transaction time distributions (2953900), drawing on his 2006-07 modelling of monetary transactions for automated fraud and audit systems. The orphan-rate economics extend "Iron and Steel" (June 2018); the lock-down demand anticipates the BCH/BSV split of November 2018.
