---
title: "Who Controls the Rules When Nobody Controls All of Them?"
date: 2026-03-14
slug: who-controls-the-rules-when-nobody
url: https://singulargrit.substack.com/p/who-controls-the-rules-when-nobody
themes: [governance-decentralisation, intermediaries, security-economics]
---

# Who Controls the Rules When Nobody Controls All of Them?
**Date:** 2026-03-14 | **URL:** https://singulargrit.substack.com/p/who-controls-the-rules-when-nobody
**Subtitle:** The game theory of distributed institutional control

## Core thesis
Mechanism design — the most productive branch of economic theory in forty years — rests on a single actor controlling the full design space, and that premise fails in most institutional settings that matter. Where rule-setting authority is split across participants who also compete in the downstream game the rules define (protocol governance, regulatory architecture, platform ecosystems), the conjunction of distributed control, participation and downstream investment produces a distinct strategic environment that nonetheless admits tractable equilibrium analysis: the leader's problem factorises, a closed-form threshold separates under- from over-provision, and over-provision emerges as a pure commitment effect.

## Key arguments and claims
- The structure has three load-bearing features: distributed control (different actors set different rule dimensions), participation (rule-setters' payoffs depend on downstream investment under the rules they set), and downstream investment (a third party's sunk capital responds to the rule vector). Removing any one collapses the model to a known special case — single-principal mechanism design (Myerson, Laffont, Tirole), common agency (Bernheim–Whinston, Martimort–Stole), or a setting with no investment response ratio at all.
- For the two-dimensional sequential case (two rule-setters, one downstream investor, strictly convex investment cost), the leader's reduced-form objective factorises: its derivative decomposes as the choice variable times a bracket containing a share-weighted investment response ratio, a rent response ratio, and a linear cost. The factorisation holds for any strictly convex cost with non-decreasing marginal cost, any smooth displacement technology under regularity conditions, and any degree of rent alignment; it extends to non-separable rent functions and does not depend on functional form.
- Under a monotonicity condition the equilibrium is unique, and a closed-form threshold — the cost parameter divided by the investment response ratio evaluated at the social optimum, adjusted for rent alignment — separates two regimes. Below it the leader underprovides: the hold-up logic of Grossman–Hart and Hart–Moore operating through institutional rule dimensions. Above it the leader overprovides to suppress the follower's rent extraction: a "top-dog" strategy in the Fudenberg–Tirole taxonomy.
- Timing is substantive, not convenient. Under simultaneous rule-setting with linear productivity and sufficient curvature in investment cost, the leader's problem is globally concave and every Nash equilibrium underprovides. Over-provision is thus identified as a commitment effect: it requires moving before the follower responds. The result holds automatically under superquadratic costs and may fail under convex productivity.
- Competition among followers produces a "tragedy of intermediation": each follower's individual rent falls as others crowd the extraction channel, but aggregate rent extraction rises, depressing downstream investment. The over-provision threshold strictly increases in the number of followers; at the baseline calibration, over-provision occurs against a monopoly follower but vanishes once three or more followers compete. A competitive intermediation market eliminates over-provision entirely.
- With multiple leaders, the aggregate equilibrium depends on a single sufficient statistic — the sum of each leader's surplus share divided by cost — for any strictly convex investment cost. This aggregation invariance breaks under hierarchical governance: a sequential leader within the coalition restrains her choice, inducing heavy follower investment, and the baseline calibration produces roughly 39 per cent more aggregate capability than flat governance with the same sufficient statistic.
- The welfare gap decomposes into gatekeeping loss (follower rent extraction) and development-cost loss (leader distortion). At the baseline under partial surplus internalisation, gatekeeping accounts for approximately 83 per cent of the gap; under over-provision the composition shifts to 36 per cent excess development cost and 64 per cent residual gatekeeping. The numbers are calibration-specific; the qualitative pattern is structural.
- The boundaries are stated exactly: the monotonicity condition is verified at a quadratic baseline via Sturm's theorem and extends to cost functions with non-decreasing curvature beyond a computable infrastructure-cost threshold, but a closed-form sufficient condition on primitives remains open; the welfare benchmark assumes the follower's activity is pure rent extraction rather than productive curation or certification.

## How Craig reasons (his model/logic)
Formal game theory in the mechanism-design tradition: isolate the features that distinguish the environment, prove a structural factorisation, derive closed-form thresholds and comparative statics under explicitly stated regularity conditions, then demonstrate that adjacent frameworks (mechanism design, common agency, Stackelberg quantity competition) are degenerate special cases. Calibration supplies magnitudes for illustration only, with each claim scoped to its exact conditions.

## Where this contradicts BTC-mainstream logic
No direct engagement — this post is a general equilibrium analysis of distributed institutional rule-setting, illustrated by reference to protocol governance, platform ecosystems, regulatory architecture and standard-setting bodies rather than any BTC/Core controversy.

## Notable quotes
- "Most economic models assume somebody owns the rules."
- "Removing either one collapses the structure to a known special case."
- "The governance structure among rule-setters—not merely the payoff parameters—determines the equilibrium."
- "More followers extract more aggregate rent, which depresses downstream investment and dampens the leader’s investment response ratio."

## Connections
The dominance of gatekeeping loss in the welfare decomposition is the formal counterpart of the intermediary-rent critique running through his fee-market and governance essays; the "tragedy of intermediation" gives game-theoretic footing to claims made rhetorically elsewhere in the corpus.
