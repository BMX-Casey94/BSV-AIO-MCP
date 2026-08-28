---
title: "Money Must First Be Stable"
era: medium
date: 2018-08-14
slug: money-must-first-be-stable-a44fbe7574c7
themes: [scaling-throughput, mining-consensus, protocol-immutability, monetary-economics]
source_summary: summaries-medium/money-must-first-be-stable-a44fbe7574c7.md
url: https://medium.com/@craig_10243/money-must-first-be-stable-a44fbe7574c7
---

# Money Must First Be Stable — core principles

- **The 10-minute interval is a stability choice, not an arbitrary parameter.** "The 10-minute time interval within Bitcoin was a guess. It's a good enough one" — the workable range is roughly five to twenty minutes, never below two for a system that must scale, and the true optimum varies with time of day, season, use and electricity price.
- **Observed block time runs ahead of target.** Because hash rate grows between difficulty adjustments on a near-Moore's-law path, the observed average interval is ~560 seconds (9.3 minutes), not 600.
- **Block propagation is an SEIR process, not clean Poisson.** Susceptible–exposed–infectious–recovered dynamics map onto mining states; the exponential/Poisson approximation only holds at longer block intervals, and gossip propagation is slow at the tails (few holders or near-complete dissemination).
- **Validation cost dominates at short intervals.** CheckBlock/CheckBlockHeader requirements, UTXO caching and missing-transaction downloads mean sub-one-minute block times follow a power-law rather than exponential distribution.
- **Real transaction streams are only approximately exponential over 5–60 minute windows.** From his 2006–07 modelling of monetary transaction distributions for automated fraud/audit systems (SSRN 2953900): shorter windows are noise-dominated, so block sizes become far less predictable as the interval shrinks.
- **Shorter intervals raise orphans and favour large miners.** At a one-minute interval the orphan rate is around 2.5–3 times that at ten minutes; the first quartile shifts from 30% to 40.5% of the mean; small miners would fail to validate large third-quartile blocks 27% of the time before the next block arrives — a burden falling on miners under 10% of hash rate while pools and 15%+ solo miners benefit.
- **Shortening the interval buys variance, not capacity.** 1GB per ten-minute block is equivalent to 100MB per one-minute block; throughput is unchanged.
- **Fast blocks are no substitute for 0-conf.** Even at one-minute blocks roughly 20% take over two minutes, while commerce needs sub-three-second propagation — so the merchant case is served by 0-conf, not by destabilising the interval.
- **Protocol stability is monetary policy.** Merchants must redeploy software on every protocol change — "when compared to fiat, Bitcoin changes minute by minute" — so the task is to "stabilise and lock down the protocol so that merchants can build and use coins globally". "Bitcoin was designed to be stable and set in stone. This is how good money works."
