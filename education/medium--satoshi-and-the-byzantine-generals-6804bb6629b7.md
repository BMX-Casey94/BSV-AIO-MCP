---
title: "Satoshi and the Byzantine Generals"
date: 2020-03-24
era: medium
themes: [mining-consensus, governance-decentralisation, spv-light-clients, satoshi-history]
source: summaries-medium/satoshi-and-the-byzantine-generals-6804bb6629b7.md
---

# Satoshi and the Byzantine Generals — core principles

- **Nodes are miners; users are not.** Bitcoin nodes are the generals who solve blocks. A machine that never solves a block puzzle is not a node, however many headers it stores.
- **One-CPU-one-vote is not one-person-one-vote.** A CPU does not represent an individual user. Proof-of-work weights influence by demonstrated resources, not headcount.
- **Node-hood requires solving blocks.** Attempting to mine is not enough; a miner with many ingress points is still a single node.
- **Industrial scale was the design.** At equilibrium there may be about 100 miners globally — 100 nodes — feeding millions of machines over a LAN, as server farms rather than a Usenet of home NNTP servers.
- **Users verify with SPV.** They need only the header of each block and can still verify payments themselves without trusting a particular node.
- **Rules are not voted by the masses.** There is no way to create rules by consensus across individuals on a blockchain. Bitcoin is distributed for reliability, not for democratic rule-making.
- **Lamport’s equal-army simplification does not apply.** Generals vote by the size of their army. Two strong generals can outforce three weak ones; the solution is demonstrated resources, not equal votes.
- **Proof-of-work is costly signalling.** Mining is analogous to the peacock’s tail: the more resources a general can afford to expend, the more fitness is demonstrated — including when strengths are unknown and parties can lie.
- **For each node there may be millions of users.** The network scales by separating industrial miners from SPV clients, not by making every user a node.
