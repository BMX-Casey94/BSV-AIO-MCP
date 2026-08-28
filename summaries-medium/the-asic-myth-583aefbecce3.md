---
title: 'The ASIC myth'
date: 2019-01-16
slug: the-asic-myth-583aefbecce3
url: https://medium.com/@craig_10243/the-asic-myth-583aefbecce3
themes: [mining-consensus, security-economics, networking, scaling-throughput]
---

# The ASIC myth
**Date:** 2019-01-16 | **URL:** https://medium.com/@craig_10243/the-asic-myth-583aefbecce3
**Subtitle:** It is interesting how the arguments against commercial mining come down to an outcry against “mining centralisation”. All things in life…

## Core thesis
The campaign against ASIC mining and "mining centralisation" — exemplified by Ethereum's move to an ASIC-resistant algorithm — is economically and technically misguided: no proof-of-work system can deliver equality of outcome, and attempts to punish efficient miners only make a network less secure. Craig argues Bitcoin was designed as a small-world network of competing professional miners tending towards a near-complete graph, which is simultaneously more efficient and more resistant to Sybil and botnet attacks than any swarm of home users.

## Key arguments and claims
- The push for ASIC resistance is ideological: "a rather socialistic push for mining equality" whose "catch cry for enforced 'fairness'" is "equality in outcome through the redistribution of wealth from the most to the least efficient." Bitcoin's primary purpose is to be immune to such redistribution at the monetary level.
- Efficiency is decisive: "100,000 machines in a data centre are ALWAYS more efficient, use less power, and win hands down when compared to 1000 people who are each running 100 machines" — same machine count, far lower power and cost.
- Bitcoin's real topology is mis-modelled by academics. The "On Red Balloons and Bitcoin" paper (Babaioff et al. 2011) proved no Sybil-proof reward scheme exists at depth ≤3, but assumed Bitcoin is a distributed mesh. Craig counters that Bitcoin "forms a small-world network" approaching "a semi-complete graph", as "clearly and distinctly defined" in the white paper.
- Only miners matter for propagation: "The transactions must get to miners, and no other system makes any difference." Nodes remember and exchange peer IP lists, so the graph is not random; more powerful systems hold more connections, improving both efficiency and security.
- In mesh/distributed topologies a single well-connected Sybil "can then act as several nodes and delay or subvert transactional propagation"; in Bitcoin's topology "The attack format from Sybils is not feasible" because no node can be too connected. Block/transaction competition follows "a competing epidemic model" — once a node receives a transaction it is "immune" to a competing one (e.g. a double spend).
- ASICs defeat criminal botnets: an Antminer S9 (12.93 TH/s ±7%) equals "approximately 50,000 to 75,000 individual computers", roughly 1,000,000× a CPU (~15 MHash) and far beyond a GPU (~750 MHash). Against botnets "of up to 50 million compromised hosts", "Bitcoin is most secure when it is not based on home-user systems for mining."
- His 2010/2011 research (chapter 6 of his thesis) models criminal behaviour with "predator/prey games": "If we make the system more expensive to attack, criminal groups rationally act to find other targets." GPU mining makes Bitcoin cheap to attack.
- Cites Microsoft's cloud report that data centres use "22% to 93% lower energy consumption" and are up to 98% more carbon-efficient than on-premises systems — scale is the green option too.
- Concludes: "There is no proof-of-work solution that is not more efficient when scaled, and so was always the design" (linking nChain's "PoW and the firm" paper).

## How Craig reasons (his model/logic)
He combines three registers: an economic argument from efficiency and Coasean firm logic (mining as competition between companies, not individuals); a formal network-topology argument (small-world graphs, epidemic models borrowed from epidemiology) deployed against academic literature he says never measured the real network; and an ideological framing that casts opponents as levellers who "punish others who create wealth through productivity". He repeatedly anchors claims in his own prior research and nChain papers.

## Where this contradicts BTC-mainstream logic
- Contradicts the "one CPU one vote" / home-miner ideal of decentralisation that dominated BTC and altcoin discourse: Craig says equality of mining outcome is impossible and undesirable by design.
- Contradicts the ASIC-resistance design goal pursued at the time by Ethereum (ProgPoW debate) and Monero (anti-ASIC forks): he calls ASIC resistance an admission "they have not figured out how yet".
- Contradicts the standard academic model of Bitcoin as a random/mesh P2P network (the basis of the Red Balloons impossibility result and much propagation research): he asserts a small-world, near-complete graph of miners.
- Contradicts the "every user running a full node secures the network" orthodoxy: "only miners matter" for transaction propagation and security.

## Notable quotes
- "The catch cry for enforced 'fairness:' equality in outcome through the redistribution of wealth from the most to the least efficient."
- "100,000 machines in a data centre are ALWAYS more efficient, use less power, and win hands down when compared to 1000 people who are each running 100 machines."
- "The reality is that only miners matter here."
- "The attack format from Sybils is not feasible in Bitcoin."
- "Bitcoin scales best as it was designed — as system of competition between companies that seek to obtain the most efficient use of the power and equipment."
- "There is no proof-of-work solution that is not more efficient when scaled, and so was always the design."

## Connections
Cites his own ECU-published research on botnet economics (ro.ecu.edu.au/ism/149), chapter 6 of his thesis (predator/prey crime modelling), and the nChain paper "PoW and the firm". Written two months after the BCH/BSV split, it is part of his broader campaign defending large-scale commercial mining — the economic backbone of the BSV scaling thesis — against the "decentralisation" rhetoric of both BTC and BCH opponents.
