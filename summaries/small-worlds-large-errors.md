---
title: "Small Worlds, Large Errors"
date: 2026-05-11
slug: small-worlds-large-errors
url: https://singulargrit.substack.com/p/small-worlds-large-errors
themes: [networking, mining-consensus, security-economics, btc-critique]
---

# Small Worlds, Large Errors
**Date:** 2026-05-11 | **URL:** https://singulargrit.substack.com/p/small-worlds-large-errors
**Subtitle:** Why home nodes do not slow miners, do not censor miners, and do not occupy the topology that matters for BTC block creation

## Core thesis
The retreating concession that home-node relay topology still "affects" censorship resistance is an evasion. The public gossip graph and the miner graph are different objects; the economically relevant topology is a small-world network of miners, pools and commercial infrastructure with short paths and motivated hubs. Because home nodes are not on the paths that matter, they do not merely fail to censor miners — they do not even slow them.

## Key arguments and claims
- Small-world model (Watts & Strogatz, 1998): high local clustering plus short average path lengths created by hubs and shortcuts. "Small world" does not mean every participant matters equally; some vertices can vanish with little effect while connected hubs matter far more than their count suggests.
- The economically relevant small world in BTC is miners, pools, transaction sources, block-propagation systems and commercial counterparties, driven by revenue and latency: learning late of a competing block wastes hash power; missing fee-paying transactions leaves revenue behind.
- Basic graph reasoning settles the slowing claim: "A vertex cannot delay traffic that does not pass through it." Peripheral clusters can refuse communication among themselves while hubs route around them; small-world structure makes peripheral censorship harder, not easier.
- Cost is not censorship: restrictive default relay policy raises the cost of one broadcast route for users who depend on it, but imposes nothing on miners reachable through direct or professional paths. "User inconvenience is not miner delay." A grocer refusing to stock a book does not slow a publisher selling directly online.
- Software coordination is not proof-of-work authority: BTC Core's own documentation distinguishes transaction relay policy (mempool admission of unconfirmed transactions) from consensus rules (block validity). Defaults are a behavioural equilibrium — miners can patch policy, accept direct submissions and build templates outside default assumptions whenever the value of deviating exceeds its cost.
- Fee incentives dissolve obstruction: the greater the gap between consensus validity and public relay policy, the greater the incentive for miners and users to route around it. Restrictive home nodes "become obsolete for that traffic", not censors.
- Block inclusion is the proper empirical endpoint: if a transaction refused by domestic machines reaches a miner directly, is mined and confirms, then the censorship claim failed, the slowing claim failed, and the home-node layer is shown to be "not merely ineffective; they were irrelevant". The block is the proof.
- Propagation research (Decker & Wattenhofer, 2013; Gervais et al., 2016) and BIP 152 compact block relay (Corallo, 2016) demonstrate why miners build efficient connectivity among themselves — not that home machines govern them.
- The four-layer model is introduced: (1) block creation, (2) transaction access, (3) block propagation, (4) local verification. The home-node myth "places the fourth layer above the first", treating local checking as if it governed production.
- "Most relay nodes" counts the wrong thing: most visible public nodes are not most miner paths, most domestic machines are not most hash power, and most local mempools are not most block templates. In proof-of-work the relevant count is block-producing power and miner access.

## How Craig reasons (his model/logic)
Network-topology analysis — small-world graph theory and explicit path arguments — fused with incentive economics. A layered architectural model separates production, delivery, propagation and audit, forcing every claim of authority to identify the actual path and layer on which it operates; claims that cannot do so are discharged as category errors.

## Where this contradicts BTC-mainstream logic
- Rejects even the sophisticated, nuance-varnished version of home-node power — the relay-topology friction argument — as a claim about miners.
- Rejects "dominant relay software" as pseudo-consensus: policy is configuration, not law, and "dominance among home verifiers is not dominance over miners".
- Reframes restrictive mempool policy as self-defeating: it diverts economically demanded traffic to miner-facing channels while the domestic layer congratulates itself.
- Against node-count rhetoric: breadth and visibility of domestic machines imply nothing about productive centrality — "broad visibility is not the same as productive centrality".

## Notable quotes
- "To say 'topology matters' without this distinction is to confuse a city map with a power grid."
- "A policy that miners can route around is not a censor. It is a detour sign on one road."
- "Cost is not censorship. User inconvenience is not miner delay. Public gossip friction is not proof-of-work authority."
- "That is not censorship resistance. That is bad routing."

## Connections
Direct sequel to "The Home Node That Never Validates", answering the soft concession that essay provoked. Its four-layer model becomes the explicit analytical framework for the correspondence answered in "The Two Tiers Are a Market, Not a Cage".
