---
title: "The great mining swindle"
era: medium
date: 2019-02-18
slug: the-great-mining-swindle-2dec8ffa819d
themes: [mining-consensus, scaling-throughput, btc-critique, networking]
source_summary: summaries-medium/the-great-mining-swindle-2dec8ffa819d.md
url: https://medium.com/@craig_10243/the-great-mining-swindle-2dec8ffa819d
---

# The great mining swindle — core principles

- **A node is a propagation, ordering, validation and storage system.** White-paper section 5 is definitional: new transactions are broadcast to all nodes. Network conductivity and propagation are the primary requirement; nodes then order transactions, validate inputs, solve the puzzle, propagate the block, and validate other nodes' blocks. Hashing is one step, not the definition.
- **The only nodes are miners.** There is no place for a non-mining Sybil 'node' in a small-world network. Validation without block production is not a node.
- **The coinbase is a subsidy, not a reward.** It is a diminishing incentive that bootstraps early investment in large-scale node infrastructure. Long-term income must come from transaction fees as the subsidy declines.
- **ASICs are a component, not a node.** The hash-puzzle chip is a small part of a data-centre-scale operation. Selling home hashers as if they were nodes — and as if fees were irrelevant — mis-states what a node is and what pays for it.
- **Selfish mining fails in a small-world giant component.** A selfish miner always reacts after the honest block has already propagated; an honest miner can force a premature response (a fake block header from any network address), and the supposed guaranteed win becomes merely probabilistic.
- **Storage is already cheap enough for global ledgers.** 2015 rack densities of 6.2 PB, and later SSDs at 0.1 watts per TB yielding up to 77 PB per rack, make the arithmetic: 1 TB blocks × 144/day × 365 ≈ 52.5 PB/year — about one rack. At ~50 TB maximum blocks, six racks per node replace global commerce and accounting.
- **Bitcoin is an immutable evidence system.** A ledger that stops fraud by making records undeletable — the ultimate truth machine — presupposes professional nodes that store and serve that data at scale.
