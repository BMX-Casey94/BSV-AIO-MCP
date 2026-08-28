---
title: "Markov, Not Memoryless"
era: substack
date: 2026-03-09
slug: markov-not-memoryless
themes: [mining-consensus, security-economics]
source_summary: summaries/markov-not-memoryless.md
url: https://singulargrit.substack.com/p/markov-not-memoryless
---

# Markov, Not Memoryless — core principles

- **Memoryless and Markov impose opposite restrictions on memory.** A memoryless random variable (only exponential/geometric) defines a trivially Markov process with an empty state; a Markov process may encode arbitrarily rich history in its state, which need only be a sufficient statistic for the future. Memorylessness is the degenerate special case of Markov, not a synonym — one forbids history, the other permits it provided it is encoded in the current state.
- **The mining game's state is rich.** At game level the state includes the full block tree, per-block miner identities, miner allocations across branches, accumulated vested interests, unmatured coinbase rewards and the difficulty parameter — Markov, emphatically not memoryless. The landmark game-theoretic treatment of PoW equilibria got this right (Markov perfect equilibrium with vested interests); the downstream literature read "Markov" and heard "memoryless".
- **Vested interests change equilibrium behaviour.** In a five-miner fork scenario, a miner with fifty vested blocks on a branch faces a categorically different incentive landscape from an otherwise identical miner with zero — proof the game has memory.
- **Three protocol features enlarge the payoff-relevant state.** Coinbase maturity (100 blocks): a miner with 20% of hash rate holds roughly twenty unmatured blocks — about 62.5 BTC at the current subsidy — destroyed if it forks and orphans the main chain. Difficulty adjustment (2,016-block epochs) makes fork resolution path-dependent through the transition law itself. Fee accumulation grows the block prize with the current inter-block interval.
- **The corrected attack-cost inequality adds stock-like deterrence to flow cost.** Vested-interest deterrence, maturity deterrence and difficulty-feedback cost: for a pool controlling 30% of hash rate, maturity deterrence alone is approximately $3.6 million and vested-interest deterrence after one difficulty epoch approximately $11.7 million — together roughly 12% on top of the epoch-level flow cost.
- **Stock deterrence dominates for every established miner.** Stock-like deterrence grows linearly with time on the chain while flow cost is fixed by attack duration; the crossover threshold is approximately 63 blocks (about ten and a half hours), and for a miner active for one epoch, stock-like deterrence exceeds the flow cost of a six-confirmation attack by a factor of roughly thirty-two.
- **One-shot models structurally cannot represent the game.** Two states identical in every flow variable but differing in vested interests prescribe different equilibrium actions; any one-shot model must prescribe the same action in both — a structural loss, not an approximation error. A model that omits the stock terms is not describing Bitcoin with simplifying assumptions; it is describing a different system.
- **PoS engineers explicitly what PoW produces organically.** Locked stake, unbonding periods and slashing are deliberate constructions of history-dependent deterrence; the nothing-at-stake problem is the degenerate zero-vested-interest case. The one-shot flow-cost rubric mischaracterises both protocol families for the same reason — no state variable to encode what the protocol has accumulated.
- **Flow-cost analyses systematically underestimate PoW security.** Once the accumulated state is admitted, Bitcoin is substantially more secure against established miners than mainstream security economics concludes — a quantitative correction running to tens of millions of dollars per attack calculation.
