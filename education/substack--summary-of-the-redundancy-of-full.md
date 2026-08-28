---
title: "Summary of “The Redundancy of Full Nodes in Bitcoin: A Network-Theoretic Demonstration of Miner-Centric Propagation Topologies”"
era: substack
date: 2025-06-18
slug: summary-of-the-redundancy-of-full
themes: [mining-consensus, networking, governance-decentralisation]
source: summaries/summary-of-the-redundancy-of-full.md
---

# The Redundancy of Full Nodes — core principles

- **Non-mining full nodes are structurally irrelevant to propagation.** Spectral graph theory — eigenvalue centrality, algebraic connectivity, spectral radius and k-core decomposition — places them outside shortest transaction-to-block paths, with near-zero eigenvector and betweenness centrality, and never in the central graph cores.
- **Miners monopolise every authoritative path.** A densely interconnected miner core receives transactions in under 100ms, forms persistent redundant peer-to-peer clusters, and is the only authoritative broadcast system; full nodes lag by seconds, connect to few peers, and show high latency and transient uptime.
- **Removing all full nodes changes nothing.** Transaction propagation and block-relay completeness survive their deletion. Formal lemmas of path exclusion, centrality nullity and topological irrelevance follow from Perron–Frobenius theory, Kirchhoff’s matrix-tree theorem and spectral decomposition.
- **Miner dominance is economic design, not software policy.** The result holds across block-size regimes: DNS seeds and bootstrapping already hardcode topological centrality into the protocol’s operational structure.
- **Node count is not a decentralisation metric.** True decentralisation requires low variance in influence — uniformly distributed centrality — plus redundancy and resilience. Robustness collapses if the miner core is removed; it does not collapse if hobbyist nodes vanish.
- **Integrity rests on miner incentives and protocol immutability.** The network is a miner-dominated broadcast system, not a flat peer-to-peer democracy. Satoshi’s “nodes” were always miners; ideological narratives about node democracy lack empirical or mathematical support.
