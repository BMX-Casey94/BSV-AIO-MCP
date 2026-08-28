---
title: 'The great mining swindle'
date: 2019-02-18
slug: the-great-mining-swindle-2dec8ffa819d
url: https://medium.com/@craig_10243/the-great-mining-swindle-2dec8ffa819d
themes: [mining-consensus, scaling-throughput, btc-critique, networking]
---

# The great mining swindle
**Date:** 2019-02-18 | **URL:** https://medium.com/@craig_10243/the-great-mining-swindle-2dec8ffa819d
**Subtitle:** One part of the hijacking of Bitcoin stems from the manufacturing of ASICs. The purpose of a node is not simply to find a puzzle that gives…

## Core thesis
Bitcoin has been "hijacked" by ASIC manufacturers — above all Bitmain — who redefined a node as a hash-puzzle solver and sold the myth of the "block reward". In truth, section 5 of the white paper defines a node as a propagation, ordering, validation and storage system; the subsidy is a temporary bootstrap measure; and genuine nodes are data-centre-scale operations whose storage is already cheap enough that "each node could replace the entire global accounting and financial system with immutable records — now."

## Key arguments and claims
- The white paper's section 5 is definitional: step 1 is "New transactions are broadcast to all nodes" — "the primary element and aspect required to run a node are network conductivity and propagation"; nodes then order transactions chronologically, validate inputs against the rules, solve the puzzle, propagate the block, and validate other nodes' blocks.
- "Reward" is a misnomer: "I will say subsidy again here as it is a diminishing incentive and not a reward" — it exists to subsidise early investment in large-scale node infrastructure; long-term income must come from transaction fees.
- Selfish mining is "mystic pseudoscientific FUD": in the small-world "giant component" formed by miners, a selfish miner always reacts after the honest block has already propagated; an honest miner can expose it by sending "a fake block header from any network address" forcing a premature response, and the selfish miner's "guaranteed win becomes probabilistic in nature".
- Non-mining "nodes" are not nodes: "the only nodes within Bitcoin are miners"; "there is no place for a non-mining Sybil node" in a small-world network.
- The swindle: Bitmain and peers "create ASIC chips… a small component and not even the major component of a node", while convincing buyers "that the only part of the network that mattered was solving the hash puzzle and that the transaction fees were irrelevant" — extracting value without reinvesting despite knowing the subsidy declines and fee volume must take over "in the next six years".
- Home hardware is a control mechanism: "the sale of small home 'nodes' that do nothing" amounts to "ASIC-based pet rocks" giving "a level of collectivist control over an idle mass of uninformed people (see BTC, ETH)".
- His engineering evidence: between 2011 and 2015 his Australian company Cloudcroft built a large-scale compute/storage platform reaching "6.2 PB for each single rack" in 2015; moving to ExaDrive DC100 SSDs at "as little as 0.1 watts per TB" yields "up to 77 PB in each rack".
- Capacity arithmetic: average 1 TB blocks × 144 blocks/day × 365 days ≈ 52.5 PB/year — about one rack; with ~50 TB maximum blocks, "the current system would merely require 6 racks per node to replace all of global commerce and accounting".
- Conclusion: "Bitcoin is an immutable evidence system, a ledger that stops fraud… Bitcoin is the ultimate truth machine."

## How Craig reasons (his model/logic)
Textual exegesis of the white paper (section 5 treated as the authoritative definition of "node"), reinforced by network-theoretic claims (small-world giant component) deployed against the academic selfish-mining literature, and capped by first-person engineering credentials (Cloudcroft rack densities) as feasibility proof. The rhetoric is exposé-style — "swindle", "lie", "pet rocks" — aimed at a named corporate target, Bitmain.

## Where this contradicts BTC-mainstream logic
- **"Everyone should run a full node" (BTC verification culture)** — non-mining nodes "do nothing"; validation without block production is not a node.
- **Home/hobbyist mining and ASIC resistance as decentralisation** — real nodes are data centres; consumer ASICs are "pet rocks".
- **The academic selfish-mining literature (Eyal & Sirer and successors)** — dismissed wholesale as pseudoscientific FUD that ignores propagation realities.
- **"Block reward" framing of miner income** — it is a declining subsidy; the fee-market transition is imminent and deliberately obscured by hardware sellers.
- **Small-block scaling pessimism** — with proper infrastructure, a handful of racks per node absorbs global commerce; the capacity constraint is manufactured.

## Notable quotes
- "I will say subsidy again here as it is a diminishing incentive and not a reward."
- "the only nodes within Bitcoin are miners"
- "There is no threat of mystic pseudoscientific FUD spreading such as 'selfish mining'"
- "ASIC-based pet rocks"
- "each node could replace the entire global accounting and financial system with immutable records — now."
- "Bitcoin is the ultimate truth machine."

## Connections
Companion piece to "Immutable evidence" (two days earlier) developing the node definition and evidence-trail theme; the anti-Bitmain, pro-data-centre line reflects the post–November 2018 BCH/BSV hash-war positioning; his Cloudcroft storage history (2011–2015) is offered as the R&D background; the fee-over-subsidy argument recurs throughout his scaling essays.
