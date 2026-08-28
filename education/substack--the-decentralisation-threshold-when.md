---
title: "The Decentralisation Threshold: When More Validators Reduce Net Security"
date: 2026-07-06
era: substack
themes: [governance-decentralisation, security-economics, mining-consensus, scaling-throughput]
source: summaries/the-decentralisation-threshold-when.md
---

# The Decentralisation Threshold — core principles

- **Net security is not monotone in the number of validators.** For any system that pays for its own coordination out of a finite budget, there exists a unique interior optimum n*. Below it each additional validator adds security; above it each one subtracts security.
- **The mechanism is a budget identity.** Security budget splits into coordination cost and per-node hardening. For PBFT-class protocols coordination scales quadratically, so per-node hardening collapses as n grows. The drain is strictly convex; the gain is strictly concave; the marginals cross once.
- **The licensed conclusion is “stop here”.** Not diminishing returns, but retreat if you are past the optimum. The marginal validator past n* is not a hedge; it is a leak. Anyone claiming a system needs more validators must show it is operating below n*.
- **Compromise probability dominates coordination cost.** Moving the per-node compromise rate has a far larger effect on optimal committee size than a tenfold change in coordination cost. Correlation does not rescue large committees; it indicts them — at perfect correlation the optimum collapses to one.
- **Surviving systems already shrink effective n.** Large nominal validator counts organise into small attestation committees, cap the active set, or sample a committee per round. Subsampling, aggregation and checkpointed finality reduce effective n while preserving the appearance of a large set.
- **This is not an argument against decentralisation.** It is an argument against treating decentralisation as a virtue that compounds without limit — against substituting a slogan for a first-order condition. More validators can mean less security and more expense at once.
