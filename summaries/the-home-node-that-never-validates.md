---
title: "The Home Node That Never Validates"
date: 2026-05-10
slug: the-home-node-that-never-validates
url: https://singulargrit.substack.com/p/the-home-node-that-never-validates
themes: [mining-consensus, security-economics, networking, governance-decentralisation]
---

# The Home Node That Never Validates
**Date:** 2026-05-10 | **URL:** https://singulargrit.substack.com/p/the-home-node-that-never-validates
**Subtitle:** Censorship resistance in BTC is created by proof-of-work block production, not by domestic machines that merely check data after miners have already done the work.

## Core thesis
In a proof-of-work system, validation means block creation: gathering transactions, committing to a Merkle root, performing proof-of-work and publishing a competitive block. Non-mining home "nodes" merely verify locally after the productive act, and therefore cannot censor miners, govern the network, or keep miners honest. Censorship resistance is produced by competitive block production and routable access to miners — not by domestic machines checking data.

## Key arguments and claims
- The white paper's network procedure (Nakamoto, 2008) has nodes collecting transactions into blocks, working on proof-of-work and broadcasting; acceptance is expressed by building the next block on the accepted block's hash. The white paper's "node" is a block producer — the miner.
- BTC Core culture has smuggled authority by reusing the word "node" for non-mining verifiers: "Calling a domestic verifier a 'node' does not make it a miner." The borrowed crown rests on a terminological equivocation between two different functions.
- Verification versus validation is inspector versus builder, weighing a coin versus minting it: a home machine can check headers, scripts, the UTXO set and proof-of-work targets, but none of this creates the block, orders transactions, or competes in producing the next history state.
- The mempool is "a local waiting room, not a law court": mempool policy is a local pre-confirmation filter, not consensus and not block validity. A transaction excluded from every home mempool can still reach a miner by another path and be confirmed; the home machine's "rejection" achieves nothing censorial.
- Miners do not depend on domestic relay: mining is latency-sensitive, so pools maintain their own connectivity, direct submission channels and commercial arrangements. Decker and Wattenhofer (2013) and Gervais et al. (2016) show propagation matters — which is precisely why serious mining infrastructure does not leave its income hostage to hobbyist bandwidth. BIP 152 compact block relay (Corallo, 2016) is a performance optimisation, not a home-node veto.
- The formal consensus literature — Garay, Kiayias and Leonardos (2015) on backbone properties; Pass, Seeman and Shelat (2017) on asynchronous networks — analyses security in terms of hash power and block production, never government by household verifiers.
- Censorship is located at the inclusion point: only miners, pools or coordinated block-producing infrastructure can keep valid transactions out of blocks, and sustained censorship requires control over production, coercion of producers, or market pressure — because a valid fee-paying transaction is a revenue opportunity any competing miner can claim.
- Exit versus command: a home verifier can exit ("I will not follow that chain") but cannot command. Miners are disciplined because invalid blocks are unprofitable and will not be built upon or economically recognised — the home verifier is "an observer of validity", not its cause.
- One-CPU-one-vote, not one-IP-one-vote: consensus weight is tied to work, so "a million household verifiers do not become miners by being numerous". Node counts are politically seductive and technically empty.
- Home verification has a legitimate but modest role: local assurance against blind reliance on third-party servers — a measuring instrument, where "a scale does not mint coins" and "a thermometer does not heat the furnace".

## How Craig reasons (his model/logic)
Conceptual and terminological analysis anchored in a close reading of the white paper, reinforced by the formal consensus literature and propagation studies. Analogies (notary, inspector, thermometer, spectator) enforce the verification/validation distinction, while incentive analysis locates all censorial and disciplinary power at the productive layer that bears cost.

## Where this contradicts BTC-mainstream logic
- Directly rejects the Core-era doctrine that non-mining full nodes enforce consensus, censor miners, or keep miners honest.
- Rejects the political inflation of home verification into sovereignty: "the small machine becomes the measure of the system. The miner becomes a suspect industrial force."
- Rejects node-count metrics as evidence of decentralisation or security — counting witnesses says nothing about who authors the chain.
- Warns that restrictive non-mining relay culture pushes transactions into private miner channels, making access "more commercial, more opaque, and more concentrated" — the opposite of its stated aim.

## Notable quotes
- "The miner writes. The home node checks. A checker who cannot create a block cannot censor the creator of blocks."
- "Proof-of-work is not a feelings registry. It does not record indignation. It records blocks."
- "A censor who cannot prevent publication is not a censor. He is an inconvenience."
- "The household machine is watching from the pavement and calling itself the traffic authority."

## Connections
First in a sequence continued by "Small Worlds, Large Errors" (which adds the topology argument and the four-layer model) and the subsequent two-tier correspondence in "The Two Tiers Are a Market, Not a Cage" and "Censorship Resistance, Atomic Settlement, and the Limits of Coalition Power".
