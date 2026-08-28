---
title: "Verification Without Enforcement"
era: substack
date: 2026-05-18
slug: verification-without-enforcement-8b2
themes: [spv-light-clients, mining-consensus, governance-decentralisation, protocol-immutability]
source: summaries/verification-without-enforcement-8b2.md
---

# Verification Without Enforcement — core principles

- **Finality is a property of enforcement, not observation.** Global state is determined by which chain miners build on. Non-mining validation has zero causal effect on consensus; full nodes and SPV clients differ only in the locality of their checks.
- **SPV strictly dominates full validation for users.** Non-miners earn no rewards either way, while full validation costs bandwidth, storage and processing. The Nash equilibrium is miners validating and everyone else on headers; persisting home full nodes are behavioural, not equilibrium, phenomena.
- **Reorganisation risk decays with miner depth, not local replay.** Transaction inertia is a function of miner enforcement. An SPV client with one honest miner-adjacent peer inherits the same bound, so resource-normalised security is strictly higher for SPV.
- **Non-mining nodes worsen propagation.** Redundant inv advertisements from thousands of observers generate contention. Removing them cuts miner-arrival latency and does not reduce reachability; SPV clients also re-converge after eclipse faster than full nodes.
- **Permissionless admission is not permissionless governance.** The real network is core-periphery. "Permissionless" describes who may join, while rule-amendment concentrates in identifiable groups: commit access, foundations, pool concentration, sponsor capture, fork-type authority and token-weighted voting.
- **Protocol immutability is the commitment device.** Mining capital is asset-specific. Discretionary rule change is time-inconsistent (Kydland–Prescott) and invites hierarchical collusion among holders, developers and sponsors. TCP/IP is the analogue: set the rules in stone.
- **Observation does not check developers.** Full nodes do not vote on rule changes; they update software to remain compatible or face exclusion. Capture shows in the products of discretion — fee spikes, second-layer migration — not in a count of watching machines.
