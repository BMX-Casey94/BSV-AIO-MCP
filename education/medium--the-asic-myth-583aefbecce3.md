---
title: "The ASIC myth"
era: medium
date: 2019-01-16
slug: the-asic-myth-583aefbecce3
themes: [mining-consensus, security-economics, networking, scaling-throughput]
source_summary: summaries-medium/the-asic-myth-583aefbecce3.md
url: https://medium.com/@craig_10243/the-asic-myth-583aefbecce3
---

# The ASIC myth — core principles

- **Mining equality of outcome is impossible and undesirable.** Proof-of-work rewards efficiency; punishing efficient miners through ASIC resistance only makes a network cheaper to attack and less secure. Bitcoin's monetary purpose is immunity to enforced redistribution.
- **Scale wins on every metric.** 100,000 machines in a data centre are always more efficient, use less power and cost less than the same machines scattered across 1,000 homes; data centres run 22–93% lower energy consumption and up to 98% better carbon efficiency than on-premises systems.
- **Bitcoin is a small-world network, not a random mesh.** Miners form a near-complete graph — as the white paper defines — because nodes remember and exchange peer lists and the best-connected systems carry the most links. Academic impossibility results premised on a mesh topology (the Red Balloons Sybil-reward proof) do not describe the real network.
- **Sybil attacks fail in a near-complete graph.** In a mesh, one well-connected Sybil can delay or subvert propagation; in Bitcoin's topology no attacker can be too connected, and the competing-epidemic model of propagation means a node that has accepted a transaction is immune to a competing double-spend.
- **Only miners matter for propagation.** Transactions must reach miners; no other system makes any difference. Home-user 'full nodes' contribute nothing to transaction security.
- **ASICs are the defence against botnets.** One Antminer S9 (12.93 TH/s) equals roughly 50,000–75,000 individual computers; CPU (~15 MHash) and GPU (~750 MHash) mining leaves a chain cheap for botnets of up to 50 million compromised hosts to attack. Bitcoin is most secure when mining is not based on home-user systems.
- **Price the attacker out.** Predator/prey modelling of criminal economics: make the system more expensive to attack and rational criminal groups find other targets. Security is an economic function of attack cost, not of participant count.
- **Proof-of-work was always designed for professional competition.** Mining is competition between firms seeking the most efficient use of power and equipment; there is no proof-of-work scheme that is not more efficient when scaled.
