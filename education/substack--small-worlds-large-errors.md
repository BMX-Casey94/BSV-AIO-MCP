---
title: "Small Worlds, Large Errors"
date: 2026-05-11
era: substack
themes: [networking, mining-consensus, security-economics, btc-critique]
source: summaries/small-worlds-large-errors.md
---

# Small Worlds, Large Errors — core principles

- **The public gossip graph and the miner graph are different objects.** The economically relevant topology is a small-world network of miners, pools and commercial infrastructure — high local clustering, short paths, motivated hubs (Watts and Strogatz). Home nodes are not on the paths that matter.
- **A vertex cannot delay traffic that does not pass through it.** Peripheral clusters can refuse communication among themselves while hubs route around them. Small-world structure makes peripheral censorship harder, not easier.
- **Cost is not censorship.** Restrictive default relay policy raises the cost of one broadcast route for users who depend on it; it imposes nothing on miners reachable through direct or professional paths. User inconvenience is not miner delay.
- **Software coordination is not proof-of-work authority.** Transaction relay policy (mempool admission) is distinct from consensus rules (block validity). Defaults are a behavioural equilibrium: miners can patch policy, accept direct submissions and build templates outside default assumptions whenever the value of deviating exceeds its cost.
- **Fee incentives dissolve obstruction.** The greater the gap between consensus validity and public relay policy, the greater the incentive to route around it. Restrictive home nodes become obsolete for that traffic, not censors.
- **Block inclusion is the empirical endpoint.** If a transaction refused by domestic machines reaches a miner, is mined and confirms, the censorship claim and the slowing claim both failed. The block is the proof.
- **Four layers, in order.** (1) block creation, (2) transaction access, (3) block propagation, (4) local verification. The home-node myth places the fourth layer above the first.
- **Count the right thing.** Most visible public nodes are not most miner paths; most domestic machines are not most hash power; most local mempools are not most block templates. In proof-of-work the relevant count is block-producing power and miner access. Broad visibility is not productive centrality.
