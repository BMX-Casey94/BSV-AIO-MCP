---
title: "When the Prize Pays for the Protection"
date: 2026-03-19
slug: when-the-prize-pays-for-the-protection
url: https://singulargrit.substack.com/p/when-the-prize-pays-for-the-protection
themes: [security-economics, mining-consensus, monetary-economics]
---

# When the Prize Pays for the Protection
**Date:** 2026-03-19 | **URL:** https://singulargrit.substack.com/p/when-the-prize-pays-for-the-protection
**Subtitle:** What happens when a contest's reward depends on the very security that contest provides?

## Core thesis
In any system where protection is financed by the activity it protects — city policing funded by property taxes, insurance pools, platform security, blockchain mining funded by fees — the prize in the security contest is endogenous, creating a fixed-point problem with a generic structure: two stable equilibria (shutdown and high security) separated by an unstable tipping threshold, discontinuous collapse past a critical fee, hysteresis in recovery, and amplified fragility near the fold. The essay summarises a paper, "Endogenous Prizes in Security Contests", submitted to Econometrica and posted on SSRN.

## Key arguments and claims
- The fixed-point problem: security depends on contestant entry; entry depends on the prize; the prize is revenue from users; users participate only if the system is secure enough. Equilibrium security must be simultaneously consistent with the demand it generates, the revenue that demand produces, the entry that revenue attracts, the attack cost that entry creates and the deterrence that attack cost provides. Results require no specific functional forms — only regularity conditions on the demand system, cost schedule and deterrence technology.
- Result one: the equilibrium set forms a complete lattice. The least equilibrium is shutdown (no users, revenue, contestants or security — always an equilibrium); the greatest is a high-security state; between them sits an unstable tipping threshold. This two-stable-equilibria structure is generic, arising from the complementarity that more users make the system more worth protecting, which makes it more secure, which attracts more users.
- Result two: a saddle-node bifurcation in the fee. As the fee rises, the high equilibrium and the unstable threshold converge, collide at a critical fee and annihilate; beyond it only shutdown survives. Collapse is discontinuous — an infinitesimal fee increase destroys the entire surplus of the high equilibrium — and irreversible: the recovery threshold lies strictly below the collapse threshold, so the fee must be cut further to restart than it was raised to break.
- Result three: all comparative statics inherit a common amplification denominator, 1/(1−Φ′), where Φ′ is the slope of the self-map at equilibrium — always greater than one at a stable equilibrium and diverging to infinity near the fold. A 10% increase in attack cost, for instance, also attracts users, revenue and further entry, multiplying the initial shock; proximity to the tipping point determines fragility.
- Result four: the welfare-maximising fee is strictly below the revenue-maximising fee, because a monopolist ignores the security externality — a slightly lower fee brings more users, more security, and benefit to all existing users. The gap measures the welfare cost of market power in protection-financed systems.
- Applications beyond the model: payment infrastructure (adoption and failure display tipping dynamics), cybersecurity investment (critical trust thresholds below which no investment sustains a platform), insurance markets (restoring a failed pool requires premiums lower than those that caused failure — a documented phenomenon explained from first principles), and proof-of-work blockchains, where the documented 51% attacks on Bitcoin Gold and Ethereum Classic are instances of the shutdown equilibrium: attackers needed only to push the system past its tipping point.
- Technical contribution: distinct from contests where contestants' own effort changes the prize — here a third party (users) determines the prize via participation, generating complementarities through a contest with cost heterogeneity rather than direct network effects. Proofs use Tarski's fixed-point theorem, the implicit function theorem and the intermediate value theorem; a "multiplicity condition" on primitives determines whether multiple equilibria occur.
- The calibrated illustration (proof-of-work parameters) shows three equilibria — shutdown near zero security, an unstable threshold around 10%, a stable high equilibrium around 79% — with the multiplicity condition satisfied by a factor of five; the amplification multiplier is approximately 1.02 at the high equilibrium but diverges near the fold; assuming homogeneous costs produces an error of about 24%, amplified a further 2% by the demand-side feedback loop.
- Explicit non-claims: no assertion that any real system sits at its tipping point (an empirical question); tipping dynamics are not inevitable far from the fold; and the deterrence technology is reduced-form — computational investment, legal enforcement, reputational capital or institutional design all fit the framework.

## How Craig reasons (his model/logic)
Formal economic theory in the contest-theory and strategic-complementarities tradition: pose the endogenous-prize structure as a fixed-point problem, characterise the equilibrium lattice and bifurcation structure with general tools, derive amplification and welfare results, then illustrate magnitudes with a calibrated numerical example while carefully fencing off what the theory does not claim. The paper, appendix and replication package are public (SSRN abstract 6436941).

## Where this contradicts BTC-mainstream logic
No direct engagement — this post presents a general theory of protection-financed contests, using proof-of-work blockchains as one illustration among several rather than addressing BTC/Core positions directly.

## Notable quotes
- "The prize is revenue from users — and users only show up if the system is secure enough to be worth using."
- "The system has memory: its current state depends not just on the current fee, but on the path that brought it there."
- "To restart the system after a collapse, the fee must be cut further than it needed to be raised to cause the collapse."
- "The attackers did not need to overcome enormous resources. They needed only to push the system past its tipping point, after which the feedback loop did the rest."

## Connections
The deliberately reduced-form deterrence technology — which "may come from computational investment, legal enforcement, reputational capital, or institutional design" — is precisely where "The Law Already Inside Bitcoin" plugs legal deterrence into the model, and the critical-fee collapse result gives formal content to the fee-ruin warning of "The Chessboard, the Grain, and the Fee Market That Ate Itself".
