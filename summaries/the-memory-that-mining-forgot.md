---
title: "The Memory That Mining Forgot"
date: 2026-03-08
slug: the-memory-that-mining-forgot
url: https://singulargrit.substack.com/p/the-memory-that-mining-forgot
themes: [mining-consensus, security-economics]
---

# The Memory That Mining Forgot
**Date:** 2026-03-08 | **URL:** https://singulargrit.substack.com/p/the-memory-that-mining-forgot
**Subtitle:** Why the most repeated claim about Bitcoin's proof-of-work — that it is "memoryless" — is, at the protocol level, false

## Core thesis
The claim that proof-of-work mining is "memoryless" — repeated across a decade of influential blockchain economics and used as the basis for a theoretical contrast with proof-of-stake — is false at the protocol level. A true property of a low-level component (the individual hash trial) was promoted, without justification, into a characterisation of the whole Nakamoto system, whose difficulty adjustment, coinbase maturity, fee accumulation, and chain-selection rules all inscribe history into future outcomes.

## Key arguments and claims
- Memorylessness is a theorem, not a stylistic choice: among continuous distributions only the exponential satisfies it, among discrete only the geometric. A single SHA-256 trial against a fixed target is genuinely memoryless — and that is all that is memoryless.
- A four-level taxonomy converts the slogan into precise propositions: Level 1, the hash trial (memoryless by the characterisation theorem); Level 2, block arrivals within a fixed-difficulty epoch (memoryless by construction, since parameters are held fixed); Level 3, the protocol-state process across epochs (not memoryless); Level 4, the realised economic payoff process (not memoryless). The error is elevating the Level-2 local approximation into a global characterisation.
- The decisive mechanism is the difficulty adjustment: every 2,016 blocks the protocol sets new difficulty as a deterministic function of the realised duration of the preceding epoch (with clamping). The arrival rate in epoch e+1 therefore depends on block-arrival history in epoch e — "precisely what memorylessness forbids". The composite is a piecewise-exponential, regime-switching process, and regime-switching exponentials are not memoryless.
- The violation is economically material, not merely formal: any analysis spanning more than roughly two weeks — prolonged attacks, long-run investment, security under changing conditions — crosses at least one retarget boundary where the memoryless approximation fails.
- Three further mechanisms independently make realised payoffs history-dependent. Coinbase maturity: rewards at height h cannot be spent until h + 100, so realisation depends on confirmation depth and fork state. Fee accumulation: the next block's prize grows with mempool fees as the inter-block interval lengthens — "a lottery that changes its jackpot based on how long it has been running". Heaviest-chain selection: reorganisation probability decreases with confirmation count k, so canonical status depends on all subsequent mining; the universal practice of counting confirmations is itself an acknowledgement that the system remembers.
- The target of criticism is the unqualified generalisation, not the within-epoch Poisson model, which remains sound within its scope. When a prominent security treatment contrasts PoW (memoryless) with PoS (not memoryless), the relevant object is the protocol-level economic environment — and there the characterisation is incorrect, because difficulty feedback creates path dependence at the protocol level (different in mechanism from PoS lock-up, but not the absence of history dependence).
- What the protocol actually is: a piecewise-exponential process with endogenous regime switching — the difficulty adjustment as feedback controller, coinbase maturity as vesting schedule, fee accumulation as time-varying prize, heaviest-chain as retrospective validation.
- Methodological rule: models must state the level at which memorylessness is invoked; analyses spanning multiple epochs, payoff realisation, or reorganisation risk may not assume it.
- The broader lesson is a recurring failure pattern in the economics of engineered systems: "theorem, then slogan, then error" — a component property promoted by citation drift into an unexamined article of faith.

## How Craig reasons (his model/logic)
Formal probability theory applied to protocol mechanism design: he fixes definitions via characterisation theorems, then tests whether each constitutive mechanism of the deployed system (written in code, enforced by nodes) preserves or destroys the property. The stance is that engineered artefacts must be modelled as built, not as stylised abstractions.

## Where this contradicts BTC-mainstream logic
- Directly contradicts the mainstream blockchain-economics security literature that characterises PoW mining as memoryless and grounds theoretical results on that basis.
- Rejects the standard PoW-versus-PoS contrast in which memorylessness is PoW's distinguishing virtue: both protocol families exhibit history dependence, differing in mechanism rather than in kind.
- Challenges the field's habit of treating simplifying assumptions as neutral descriptions: a constant-difficulty environment is a modelling choice that "should be stated as a modelling choice".

## Notable quotes
- "The tiles may well be flat. The dome, manifestly, curves."
- "The past is inscribed into the future, mechanically and unavoidably."
- "The inferential chain is: theorem, then slogan, then error."
- "The protocol remembers. It was designed to."

## Connections
This is the first half of a two-part correction concluded in "Markov, Not Memoryless" (published the following day), which quantifies the security-economics consequences of the same error.
