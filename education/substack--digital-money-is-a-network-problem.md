---
title: "Digital Money Is a Network Problem Before It Is a Monetary Slogan"
era: substack
date: 2026-05-27
slug: digital-money-is-a-network-problem
themes: [networking, scaling-throughput, mining-consensus]
source: summaries/digital-money-is-a-network-problem.md
---

# Digital Money Is a Network Problem Before It Is a Monetary Slogan — core principles

- **Digital money is first a communication system.** Transactions and blocks must propagate fast enough that miners build on the same state. That requirement is a mathematical constraint, not a slogan.
- **The economically relevant graph is miner-to-miner.** Vertices are miners, gateways and relay endpoints; weights encode bandwidth, latency and reliability. Public node maps are not the decisive topology. Miners create blocks.
- **Algebraic connectivity measures resistance to fragmentation.** λ₂ of the weighted Laplacian is the spectral gap. A weak cut forces a small gap regardless of strong internal connectivity. Local excellence does not guarantee global cohesion.
- **Averages conceal cuts.** Diffuse random weakening is absorbable; the same weakening concentrated on a critical cut is severe. Average latency is a misleading reliability metric.
- **Scale is not the enemy; bad geometry is.** Large blocks, high volume and industrial mining do not automatically imply fragility. A large weighted graph with strong balanced weights is stable; a small network with a low-capacity partition is fragile.
- **Add capacity where it increases algebraic connectivity.** Edge importance is non-uniform: edges crossing the bottleneck matter most. Growth without strong attachment is not stability.
- **Incentives produce a weighted graph, not a proof of stability.** Delay is costly and stale risk wastes work, so miners invest in connectivity — but analysis of the resulting geometry is still required. Digital money is secured by propagation, not public node theatre.
