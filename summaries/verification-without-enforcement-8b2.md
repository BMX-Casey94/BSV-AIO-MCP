---
title: "Verification Without Enforcement"
date: 2026-05-18
slug: verification-without-enforcement-8b2
url: https://singulargrit.substack.com/p/verification-without-enforcement-8b2
themes: [spv-light-clients, mining-consensus, governance-decentralisation, protocol-immutability]
---

# Verification Without Enforcement
**Date:** 2026-05-18 | **URL:** https://singulargrit.substack.com/p/verification-without-enforcement-8b2
**Subtitle:** Why the "full node" thesis fails at three layers simultaneously — and what that tells us about the institutional architecture of public blockchains

## Core thesis
The folk theory of Bitcoin security makes three nested claims — that non-mining full nodes secure the user, that they support propagation, and that they check protocol governance — and all three fail for the same reason: they conflate observation with enforcement. Drawing on three of his own 2026 papers, Craig argues that only block-producing nodes matter for consensus, that removing non-mining nodes actually improves propagation, and that "permissionless" describes the admission layer while concealing a concentrated, identifiable governance layer.

## Key arguments and claims
- Technical layer (Wright 2026a): for any non-mining node \(v_i\), \(\partial G/\partial V_i\) is identically zero — global state is determined by which chain miners build on, and miners do not consult non-mining validation. Full nodes and SPV clients are thus causally undifferentiated; they differ only in the locality of their checks.
- Nor does full validation defeat the invoked threats: forged chains are built to satisfy the rules, eclipse attacks (Heilman et al., 2015) target peer connections, and censorship by nodes lacking enforcement capacity is irrelevant.
- Game theory: non-miners earn no rewards either way while full validation costs bandwidth, storage and processing, so SPV strictly dominates; the Nash equilibrium is miners validating and everyone else on headers (Proposition 5; Lemma 5 shows full-node equilibria unstable). Persisting home full nodes are behavioural, not equilibrium, phenomena.
- The Transaction Inertia Principle: reorganisation probability decays exponentially in confirmation depth as a function of miner enforcement; SPV clients with one honest miner-adjacent peer inherit the same bound (Garay et al. 2015; Pass et al. 2017), so resource-normalised security is strictly higher for SPV.
- Empirical layer (Wright 2026b): counterfactual ablation in a calibrated discrete-event simulation. Marginal Relay Contribution is below 1.7% (BTC) and 0.9% (BSV); removing non-mining nodes cuts median miner-arrival latency by 6.1% (BTC) and 8.3% (BSV), and 95th-percentile latency by 11.7% and 14.2%; reachability is not reduced. SPV clients re-converge after eclipse in 1.2 ± 0.3 block intervals versus 3.8 ± 1.1 for full nodes, and full validation could have changed outcomes on under 0.01% of transactions (malformed only).
- The mechanism is queueing-theoretic: Poisson-trickled inv advertisements from thousands of non-mining nodes generate tens of thousands of redundant messages per transaction; an M/M/1 model predicts the 6.1% BTC improvement, and graduated ablation shows the class is "contention-generating in proportion to its size".
- Institutional layer (Wright 2026c): three independent rule-systems — clearance, connectivity, rule-amendment — are collapsed by the folk theory. The real network is core-periphery, not an egalitarian mesh: eigenvector centrality concentrates over 97% of its mass on under 5% of nodes.
- "Permissionless" captures only admission: an audit of ten papers (Budish; Lewis-Pye & Roughgarden; Auer; Huberman et al.; Schilling & Uhlig; Chiu & Koeppl) finds the same load-bearing anonymous-agent assumption. Eight major chains exhibit six governance mechanisms: developer commit access (BTC Core ~5 merge-rights holders), foundation control (Ethereum Foundation treasury ~USD 1.6bn), validator/miner concentration (five pools ≈ 75% of BTC hashrate; three staking providers ≈ a third of staked ETH), sponsor capture (Blockstream ~USD 728m raised, Core developers on payroll), fork-type authority, and token-weighted voting (a16z in Uniswap).
- Protocol immutability as commitment device: Williamson's asset specificity (all four types present; mining capital stock USD 10–20bn), Kydland–Prescott time inconsistency, and Tirole's hierarchical collusion (principal = UTXO holders, supervisor = developers, agent = sponsor). TCP/IP is the analogue; Bitcoin's "set in stone" design matches the commitment logic.
- Case studies: SegWit (BIP141, August 2017) shipped as a soft fork where inaction meant acceptance, while block-size increase required hard-fork consent it could not muster; fees rose from USD 0.20–0.50 to above USD 20 (December 2017 median briefly over USD 30) and Lightning launched five months later — consistent with Stigler's four products of capture. The DAO fork (July 2016, ~USD 60m) enacted time inconsistency directly.

## How Craig reasons (his model/logic)
Triangulated formalism: a one-line partial-derivative proof from the protocol definition, a falsifiable simulation with named metrics and queueing-theoretic confirmation, and comparative institutional analysis (Williamson, Kydland–Prescott, Tirole, Stigler, Alston et al.). The unifying move is layer separation — observation versus enforcement, admission versus governance.

## Where this contradicts BTC-mainstream logic
- The core BTC doctrine that "every user running a full node" secures the network is formally refuted: non-mining validation has zero causal effect on consensus and measurably worsens propagation.
- The governance claim that full nodes check developers is rejected empirically: full nodes do not vote on BIPs; "they update software to remain compatible or face exclusion".
- The academic "permissionless" framing is audited and found to assume away identifiable, concentrated governance.
- SegWit is read institutionally as discretionary capture by a small commit-access group aligned with a commercial sponsor, not as community consensus.

## Notable quotes
- "Finality is a property of enforcement, not of observation."
- "The observation population is, in this precise sense, epiphenomenal to consensus."
- "The answer, at every layer, is less than has been claimed."

## Connections
Provides the formal backing for the dismissal of full-node "guardians" in "The Dangerous Thing Is Not Bitcoin, but Utility"; the commitment-device argument underpins the corpus's protocol-immutability theme.
