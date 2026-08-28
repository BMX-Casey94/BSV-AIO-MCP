---
title: "What the Protocol Remembers"
date: 2026-06-16
slug: what-the-protocol-remembers
url: https://singulargrit.substack.com/p/what-the-protocol-remembers
themes: [security-economics, scaling-throughput, mining-consensus, btc-critique]
---

# What the Protocol Remembers
**Date:** 2026-06-16 | **URL:** https://singulargrit.substack.com/p/what-the-protocol-remembers
**Subtitle:** A single hash trial forgets everything. The Nakamoto protocol forgets nothing — and a forthcoming paper proves that the most influential economic account of blockchain security has been resting on the difference

## Core thesis
Craig’s forthcoming paper, *Why Hash-Trial Memorylessness Does Not Extend to the Nakamoto Protocol* (International Journal of Cryptocurrency Research, Vol. 6, Issue 1, June 2026), proves that the memorylessness assumption underpinning Budish’s economics of Bitcoin security holds only for the individual hash trial, not for the protocol. Difficulty adjustment, coinbase maturity, fee accumulation and the heaviest-chain rule make the protocol a machine built of memory. Once this is restored, Budish’s “free majority attack” theorem collapses outside a single fee-free epoch, and throughput emerges as the design parameter fixing both the memoryless model’s expiry date and the post-subsidy security budget.

## Key arguments and claims
- Memorylessness is a theorem, not an adjective: among continuous distributions only the exponential qualifies, among discrete ones only the geometric (Feller). A single hash trial qualifies; the protocol does not.
- Budish treats instantaneous mining expenditure as a single sufficient statistic for security; Eyal and Sirer’s selfish-mining literature and the confirmation-time queueing models rest on the same Poisson foundation. Bowden et al. already rejected the homogeneous Poisson fit empirically at better than one chance in a thousand once difficulty moves.
- Four levels are distinguished: the hash trial (genuinely memoryless); intra-epoch block gaps (trivially so, difficulty being fixed by definition); the cross-epoch protocol state; and the miner’s realised payoff. Memorylessness dies at the third and fourth levels.
- Every 2,016 blocks the protocol resets difficulty as a deterministic function of the epoch just ended, making future arrival rates depend on past arrivals: a regime-switching process in Hamilton’s sense. Noda et al. show the same feedback loop produces cobweb oscillations once hash rate responds too elastically to reward.
- Three further memory mechanisms, each independently fatal: 100-block coinbase maturity (the reward serves a probation); fee accumulation (block value grows with elapsed time — the prize increases while the miner waits); and the heaviest-chain rule (confirmation depth is the protocol’s accumulated memory of work).
- The honest scalar must become a state vector: work gap between chains, difficulty on each, distance to next retarget, confirmation depth, fees on the table. Mining becomes a dynamic Ericson–Pakes investment problem, not a static one-shot comparison.
- Head-to-head simulation, 10,000 attack paths on identical random draws, bare-majority attacker over five epochs: Budish’s constant-difficulty model reproduces his Theorem 2 (mean net cost ≈ −$400,000; 49.1% of paths profitable). With retargets switched on, mean net cost is $1.275 billion and every path exceeds $1.2 billion.
- Honest miners leaving raises attack cost monotonically (fewer honest miners means longer epochs, higher retargets, deeper per-hash losses), and a large attack can itself tip the system into Noda’s oscillating regime — a self-reinforcing trap.
- The hash trial’s own memorylessness has a shelf life because the search space is finite (~2^96). Today the network explores ~0.0006% per block; at an 18-month hash-rate doubling, departure becomes detectable around 2041 (1%), passes the 5% threshold around 2045, and fails outright (~50%) around 2050.
- Throughput rescues the model: every new transaction changes the Merkle root and hands miners a fresh 2^96 urn. A 4 tx/s protocol (explicitly labelled BTC) hits breakdown around 2061; 1 billion tx/s pushes it past 2103; 10 billion past 2108 — four decades of validity bought purely by scaling, with independent verification above 70,000 tx/s sustained on a single production node.
- The security-budget trap: by 2050 the subsidy is a few thousand dollars per block. Funding today’s security at 4 tx/s requires roughly $130 per transaction — a self-strangling toll booth; at 1 million tx/s the same budget costs five hundredths of a cent. Low throughput is a compounding trap; high throughput escapes the spiral.

## How Craig reasons (his model/logic)
Probability theory deployed as corrective surgery: take the exact technical meaning of a term, show the field uses it loosely, prove the corrected characterisation formally, then quantify the stakes with simulation and dated projections. The deepest move treats stochastic foundations as functions of protocol design, fusing engineering and economics into one question.

## Where this contradicts BTC-mainstream logic
- Demotes Budish’s “majority attack is free” theorem from universal truth to a local approximation valid only in a single fee-free epoch.
- Undercuts the Poisson foundation of the selfish-mining and confirmation-time literature.
- Refutes small-block philosophy on probabilistic grounds: a throughput-constrained protocol dates the expiry of its own security model and signs up for a security budget it cannot fund.

## Notable quotes
- “Every security model is a confession.”
- “The protocol does not forget the last fortnight. It remembers it exactly, and it prices it in at the next retarget.”
- “Capitulation is a weapon that fires backward.”
- “Budish wrote down the snapshot. This paper supplies the film.”

## Connections
The companion correction to “The Lawless Blockchain Is a Story We Tell for Small Change” — same journal issue, same Budish target, complementary mechanism (memory rather than law). Its throughput argument is the technical foundation for the polemic of “BTC Is Banking with Extra Steps”.
