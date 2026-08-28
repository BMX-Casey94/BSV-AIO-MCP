---
title: "Markov, Not Memoryless"
date: 2026-03-09
slug: markov-not-memoryless
url: https://singulargrit.substack.com/p/markov-not-memoryless
themes: [mining-consensus, security-economics]
---

# Markov, Not Memoryless
**Date:** 2026-03-09 | **URL:** https://singulargrit.substack.com/p/markov-not-memoryless
**Subtitle:** The blockchain economics literature has confused two mathematical properties for a decade. The consequences are not trivial.

## Core thesis
Blockchain economics has conflated the memoryless property of the exponential distribution with the Markov property of a stochastic process — two properties that impose opposite restrictions on what a system may remember. Bitcoin's mining game is Markov with a rich, history-encoding state, and once that state is admitted, the dominant "flow cost" model of attack economics is shown to omit the deterrence terms that actually dominate the incentive constraint, with quantifiable consequences running to tens of millions of dollars.

## Key arguments and claims
- Definitions: a memoryless random variable (only exponential/geometric) defines a trivially Markov process with an empty state; a Markov process may encode arbitrarily rich history in its state, which need only be a sufficient statistic for the future. Memorylessness is the degenerate special case of Markov, not a synonym.
- At the local arrival level, block-solving time is exponential and memoryless — undisputed. At the game level, the state includes the full block tree, per-block miner identities, miner allocations across branches, accumulated vested interests, unmatured coinbase rewards, and the difficulty parameter. That state is Markov but emphatically not memoryless.
- The landmark game-theoretic treatment of PoW equilibria got this right: its Markov perfect equilibrium has miners accumulating "vested interests" (blocks solved on a branch since the fork point) that determine whether deviation is profitable. The downstream literature read "Markov" and heard "memoryless".
- Worked example: five miners, a fork at block ten, two post-fork blocks on the original chain versus three on the fork. A miner with fifty vested blocks faces a categorically different incentive landscape from an otherwise identical miner with zero — proof that the game has memory.
- Three protocol features enlarge the payoff-relevant state. Coinbase maturity (100 blocks): a miner with 20% of hash rate holds roughly twenty unmatured blocks — about 62.5 BTC at the current subsidy — destroyed if the miner forks and orphans the main chain. Difficulty adjustment (every 2,016 blocks): post-fork branches evolve independently, making fork resolution path-dependent through the transition law itself. Fee accumulation: the block prize grows with the current inter-block interval.
- The corrected attack-cost inequality adds three stock-like terms to the flow cost: vested-interest deterrence, maturity deterrence, and difficulty-feedback cost. For a pool controlling 30% of hash rate, maturity deterrence alone is approximately $3.6 million and vested-interest deterrence after one difficulty epoch approximately $11.7 million — together roughly 12% on top of the epoch-level flow cost.
- Stock-like deterrence grows linearly with time on the chain while flow cost is fixed by attack duration: the crossover threshold is approximately 63 blocks (about ten and a half hours). For a miner active for one epoch, stock-like deterrence exceeds the flow cost of a six-confirmation attack by a factor of roughly thirty-two. For every established miner, the stock term is the dominant deterrence term.
- A representation impossibility result: two states identical in every flow variable but differing in vested interests prescribe different equilibrium actions in the stochastic game; any one-shot model must prescribe the same action in both. The one-shot framework "cannot reproduce the equilibrium strategies of the actual game" — a structural loss, not an approximation error.
- Extension to proof-of-stake, "with an irony that is almost too neat": locked stake, unbonding periods, and slashing are explicit engineering of the history-dependent deterrence that PoW produces organically. The nothing-at-stake problem is the degenerate zero-vested-interest case; the one-shot flow-cost rubric mischaracterises both protocol families for the same reason — no state variable to encode what the protocol has accumulated.

## How Craig reasons (his model/logic)
Formal stochastic-process and game theory, followed by quantitative calibration: he fixes the category error at the level of definitions, demonstrates a representation impossibility, then prices the omitted terms using actual protocol parameters (100-block maturity, 2,016-block epochs, prevailing pool shares and subsidy).

## Where this contradicts BTC-mainstream logic
- Directly contradicts the most influential mainstream economic model of Bitcoin security, which treats attack cost as a pure "flow" — the short-run cost of honest mining — and presents that as a characterisation of the protocol rather than a simplification.
- Rejects the mainstream classification of PoW and PoS under a single flow-cost rubric: both generate accumulated state-dependent deterrence that the dominant framework sets to zero.
- Implies the literature has "systematically underestimated" PoW's deterrence — Bitcoin is substantially more secure against established miners than mainstream security economics concludes.

## Notable quotes
- "One forbids history. The other permits arbitrarily rich history, provided it is encoded in the current state."
- "A model that omits them is not describing Bitcoin with simplifying assumptions. It is describing a different system."
- "A reading that saw 'Markov' and heard 'memoryless,' and built a decade of security analysis on the confusion."
- "The protocol is not memoryless. It is Markov, with a state that encodes everything that matters."

## Connections
The direct sequel to "The Memory That Mining Forgot", moving from the probabilistic correction to its game-theoretic and monetary consequences; its account of PoW's organic vested-interest deterrence complements the institutional PoW/PoS contrast in "The Return of the Bearer Share".
