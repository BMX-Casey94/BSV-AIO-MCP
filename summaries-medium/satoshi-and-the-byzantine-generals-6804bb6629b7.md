---
title: 'Satoshi and the Byzantine Generals'
date: 2020-03-24
slug: satoshi-and-the-byzantine-generals-6804bb6629b7
url: https://medium.com/@craig_10243/satoshi-and-the-byzantine-generals-6804bb6629b7
themes: [mining-consensus, governance-decentralisation, spv-light-clients, satoshi-history]
---

# Satoshi and the Byzantine Generals
**Date:** 2020-03-24 | **URL:** https://medium.com/@craig_10243/satoshi-and-the-byzantine-generals-6804bb6629b7
**Subtitle:** Before I launched Bitcoin, I had been discussing how the proposed system would work…

## Core thesis
Craig argues that Bitcoin is not, and was never designed as, a democratic voting system: the only "nodes" are miners who actually solve blocks (the generals), while users are SPV clients (the privates). He re-reads Lamport's Byzantine generals problem, claiming Lamport simplified it by giving every general equal forces, whereas Bitcoin solves the harder version — unknown, unequal strengths — through game-theoretic signalling: proof-of-work as a peacock's tail demonstrating invested resources. The Medium post is an excerpt; the body continues on craigwright.net.

## Key arguments and claims
- The white paper's "one-CPU-one-vote" line has been misread: "It does not say 'one-computer-one-vote'", and a CPU does not represent an individual user.
- "Bitcoin nodes are generals. Generals are not privates." For each node there will "potentially be millions of users"; "If you are a Raspberry Pi user, and you never solve block puzzles, you are not a node on the Bitcoin network."
- Node-hood requires actually solving blocks, not attempting: "It is not the attempt to solve block puzzles, it is to actively solve block puzzles."
- Bitcoin and its forks "are all controlled through the actions of at most 10 miners, which are the nodes"; a miner with multiple ingress/egress points is still a single node.
- He quotes his own early statements: users running their own node "would be like every Usenet user runs their own NNTP server"; at equilibrium "many nodes will be server farms with one or two network nodes that feed the rest of the farm over a LAN" — "There may only be 100 miners globally, that is, 100 nodes, but they may have millions of machines."
- Users verify via SPV: they "only require the header to each block" and "can still verify them itself" without trusting a node — and he notes "nobody understood what I said, leaving me free to patent the only way we can scale Bitcoin".
- Re-reading Lamport: generals do not have one vote each; "Each general votes based on the size of their army." With one general at 100,000 men and four at 40,000, two generals together can outforce three — "The solution here is not based on democratic voting, it is based upon demonstrated resources."
- "Bitcoin, in fact, any blockchain-based system, is anti the vote by the masses. There is no way to create rules by consensus across individuals in any blockchain."
- The Byzantine generals problem is about "reliable computing systems... to handle malfunctions", not governance: "Bitcoin is distributed to enable reliability. There is no distributed consensus dictating the rule of the system."
- Lamport "simplified the problem by treating each general as commanding an equal number of troops"; Bitcoin solves the harder case where strengths are unknown and each general "would be capable of lying about their individual strength" — solved "in a game-theoretic manner: we test the capabilities of each general".
- "Bitcoin mining is analogous to the peacock's tail": the more resources a general can afford to waste, the more fitness is demonstrated; Lamport in 1982 could not foresee internet-scale heterogeneous hardware.
- Groups claiming rule-by-consensus (Bitcoin Core, Bitcoin ABC) are "running a partnership they seek to hide through fraudulent claims that they are decentralised... acting as central issuing parties and controllers over the network."

## How Craig reasons (his model/logic)
He combines close textual exegesis (the white paper, his own 2009–2010 posts, Lamport's 1982 paper) with a re-derivation of the underlying problem: strip the simplifying assumption (equal divisions), and the solution must be resource-weighted signalling rather than counting votes. The method is genealogical — recover the original problem, show the community's copy-of-a-copy misunderstanding — reinforced by game theory (costly signalling, the peacock's tail) and first-person Satoshi authority, including the aside that SPV's scalability was patentable because nobody understood it.

## Where this contradicts BTC-mainstream logic
- Contradicts the "every user should run a full node" orthodoxy: non-generating users are not nodes at all, and the network was designed for ~100 industrial miners with millions of machines.
- Contradicts "node-count = decentralisation" metrics popular in BTC discourse: only block-solving miners count, and they are few, visible, and attributable by design.
- Contradicts governance-by-consensus narratives (UASF, "the community decides"): "Bitcoin was never designed as a demagoguery"; rules are fixed and miners merely enforce them through demonstrated work.
- Contradicts the small-block/home-node reading of the white paper: the server-farm quotes are marshalled as proof Satoshi always intended datacentre-scale miners and SPV users.

## Notable quotes
- "Proof-of-work is essentially one-CPU-one-vote."
- "Bitcoin nodes are generals. Generals are not privates."
- "If you are a Raspberry Pi user, and you never solve block puzzles, you are not a node on the Bitcoin network."
- "There may only be 100 miners globally, that is, 100 nodes, but they may have millions of machines"
- "Bitcoin was never designed as a demagoguery"
- "Bitcoin mining is analogous to the peacock's tail."

## Connections
Companion piece to Ledgers and Design (which calls non-mining nodes "sibyls") and On Decentralisation (developer partnerships as hidden controllers). The "nobody understood... leaving me free to patent" line ties to the nChain patent portfolio strategy; the Usenet/NNTP and server-farm quotations are staples of his Satoshi-authorship campaign, reused in court filings (Kleiman, and later COPA). Footnotes cite his pre-launch discussions, early Bitcoin posts, and Lamport et al.'s 1982 Byzantine Generals paper.
