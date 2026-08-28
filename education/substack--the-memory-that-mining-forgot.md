---
title: "The Memory That Mining Forgot "
era: substack
date: 2026-03-08
slug: the-memory-that-mining-forgot
themes: [mining-consensus, security-economics]
source_summary: summaries/the-memory-that-mining-forgot.md
url: https://singulargrit.substack.com/p/the-memory-that-mining-forgot
---

# The Memory That Mining Forgot — core principles

- **Memorylessness is a theorem, not a stylistic choice.** Among continuous distributions only the exponential satisfies it; among discrete, only the geometric. A single SHA-256 trial against a fixed target is genuinely memoryless — and that is all that is memoryless in the system.
- **Use a four-level taxonomy before invoking the property.** Level 1, the hash trial, is memoryless by the characterisation theorem; Level 2, block arrivals within a fixed-difficulty epoch, is memoryless by construction; Level 3, the protocol-state process across epochs, is not; Level 4, the realised economic payoff process, is not. The standard error is elevating the Level-2 local approximation into a global characterisation.
- **The difficulty adjustment inscribes history into the future.** Every 2,016 blocks the protocol sets new difficulty as a deterministic function of the realised duration of the preceding epoch (with clamping), so the arrival rate in epoch e+1 depends on block-arrival history in epoch e — precisely what memorylessness forbids. The composite is a piecewise-exponential, regime-switching process, and regime-switching exponentials are not memoryless.
- **The violation is economically material beyond a fortnight.** Any analysis spanning more than roughly two weeks — prolonged attacks, long-run investment, security under changing conditions — crosses at least one retarget boundary where the memoryless approximation fails.
- **Coinbase maturity makes payoffs history-dependent.** Rewards at height h cannot be spent until h + 100, so realisation depends on confirmation depth and fork state; the protocol operates a vesting schedule.
- **Fee accumulation makes the prize time-varying.** The next block's reward grows with mempool fees as the inter-block interval lengthens — a lottery that changes its jackpot based on how long it has been running.
- **Heaviest-chain selection is retrospective validation.** Reorganisation probability decreases with confirmation count k, so canonical status depends on all subsequent mining; the universal practice of counting confirmations is itself an acknowledgement that the system remembers.
- **The Poisson model survives — within its scope.** The target of the correction is the unqualified generalisation, not the within-epoch model, which remains sound; protocol-level path dependence (difficulty feedback) differs in mechanism from proof-of-stake lock-up, but both are history dependence.
- **Model the artefact as built, not as stylised.** What the protocol actually is: a piecewise-exponential process with endogenous regime switching — difficulty adjustment as feedback controller, coinbase maturity as vesting schedule, fee accumulation as time-varying prize, heaviest chain as retrospective validation. The tiles may be flat; the dome, manifestly, curves.
- **State the level of every memorylessness claim.** Analyses spanning multiple epochs, payoff realisation or reorganisation risk may not assume the property; the broader lesson is a recurring failure pattern in the economics of engineered systems — theorem, then slogan, then error — as a component property is promoted by citation drift into an article of faith.
