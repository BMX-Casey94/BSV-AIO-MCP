---
title: 'The myth of the full validation node'
date: 2018-12-21
slug: the-myth-of-the-full-validation-node-d7db52748649
url: https://medium.com/@craig_10243/the-myth-of-the-full-validation-node-d7db52748649
themes: [btc-critique, mining-consensus, spv-light-clients, protocol-immutability]
---

# The myth of the full validation node
**Date:** 2018-12-21 | **URL:** https://medium.com/@craig_10243/the-myth-of-the-full-validation-node-d7db52748649
**Subtitle:** There is a long-running false narrative of "full validating nodes." The dishonesty that has been sold as a truth is that running the…

## Core thesis
Craig argues that the BTC-culture ideal of the non-mining "full validating node" is not merely useless but actively harmful: only miners are nodes under the white paper's definition, and a user who validates full blocks instead of using SPV is *less* secure, because she can be fed an attacker-mined block faster than she can verify the honest chain. The UASF narrative is itself "the attack" — a slow subversion of Bitcoin away from the fixed v0.1.0 protocol, which Bitcoin SV will restore.

## Key arguments and claims
- The white paper defines a node as mining blocks: "Miners are nodes. If you are not creating blocks… you are not accepting or validating anything. You are merely doing as miners say."
- The security question in Bitcoin "is not validating rules. It is validating transactions in blocks" — and non-mining nodes can do nothing when the majority of miners accept a conflicting chain ("Orphans happen").
- Worked attack scenario: merchant Alice trusts her "full validating UASF node"; attacker Bob is a small miner controlling perhaps 25% of hashpower "using a compromised mining pool" — "the dishonest miner noted in the Bitcoin white paper."
- Bob runs a man-in-the-middle attack on Alice's connection, slowing honest-chain blocks: "Such is an attack that only works for UASF (foolish) nodes."
- The asymmetry is quantitative: with miners accepting 10 GB blocks, Alice on a slow link needs "16 to 20 minutes to validate a normal block," but validates Bob's crafted 100-transaction block "in under 30 seconds" — so she sees and accepts his double-spend in his Block 4 before the honest spend in Block 2.
- The miner network rejects Bob's block "in short order, with his block having next to no chance of catching up after the 6th block period," but Alice may take "hours or days" to revert — long enough to be defrauded.
- Under SPV, Alice "will take a header from any miner as long as it matches the required PoW conditions"; she would have received the Block 2 header "in mere seconds," checked the merkle tree, and detected the double-spend — "Bob loses."
- The irony: "In not trusting the competitive process that is Bitcoin, in thinking her UASF node matters, she becomes less secure." The deception "that non-mining nodes help in any way… lowers your own personal security, and limits the usefulness of Bitcoin."
- Ideological diagnosis: the attack has convinced a "widely deceived 'community' that Bitcoin is about socialism, about 'decentralising everything.' Decentralisation is a tool to introduce competition. Nothing more."
- Protocol immutability: "The rules of Bitcoin are 'set in stone'… at version 0.1.0"; soft forks mean "you are validating the fork of the week"; "much much more of the work that went into creating Bitcoin was designing rather than coding," and "all the issues raised have been things I previously considered and planned for."
- BTC is the subverted chain: Core's changes have made Bitcoin "something that cannot scale, that cannot function"; SegWit introduced a flaw that "cannot be fixed"; he promises to document "at least 100 ways in which BTC can be subverted" over the next 12 months. "Bitcoin was secure and in SV remains so… SV will be returned to the original protocol."

## How Craig reasons (his model/logic)
He combines textual exegesis (the white paper's definition of a node and its SPV section) with a game-theoretic adversarial model: a concrete Alice-and-Bob scenario with explicit numbers (25% hashpower, 10 GB blocks, 16–20 minute versus 30-second validation times) designed to invert the mainstream security claim on its own terms. The mode is polemical — naming the opposing narrative ("UASF," Jimmy Song's post is linked) as fraud — capped by an appeal to his own authority as the system's designer.

## Where this contradicts BTC-mainstream logic
- Contradicts the core BTC orthodoxy that every user should run a non-mining full node to "validate" the network and enforce consensus rules — he argues such nodes enforce nothing and endanger their operators.
- Contradicts the UASF (user-activated soft fork) doctrine of 2017 — that economic nodes, not miners, govern Bitcoin — reframing it as the attack vector itself; he links Jimmy Song's "Bitcoin, UASF and Skin in the Game" as the opposing text.
- Contradicts small-block philosophy: his scenario assumes miners "accepting 10 GB right now" and treats on-chain scaling as the only workable model ("Bitcoin only works when it scales on-chain").
- Contradicts the soft-fork upgrade path and SegWit specifically, which he calls an unfixable subversion, against the mainstream view of soft forks as safe, opt-in upgrades.
- Contradicts "decentralisation" as an end in itself, demoting it to a means for inducing miner competition — a direct inversion of BTC culture's foundational value, written weeks after the BCH/BSV hash war (Nov 2018) as SV positioning.

## Notable quotes
- "Miners are nodes."
- "The attack is the UASF."
- "The rules of Bitcoin are 'set in stone.' Soft forks and all of the changes make something that is not Bitcoin."
- "Decentralisation is a tool to introduce competition. Nothing more, and it is a small part of the system."
- "In not trusting the competitive process that is Bitcoin, in thinking her UASF node matters, she becomes less secure."
- "Bitcoin, as it was defined in the white paper, as a protocol was secure. It had code issues, overflows, and bugs, but the protocol was sound. In BTC, it is not."

## Connections
A flagship statement of Craig's post-hash-war SV doctrine, linking Jimmy Song's pro-UASF essay as its foil. It continues the argument of "BCH is Bitcoin" and feeds his announced series of "100 ways in which BTC can be subverted"; thematically tied to his SPV and scaling essays ("Why Scaling On-Chain Works") and to the "set in stone" protocol-immutability claim that underpins the BSV roadmap.
