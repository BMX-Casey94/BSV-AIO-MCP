---
title: "The Hold-Up Problem in Protocol Economies"
date: 2026-05-01
era: substack
themes: [governance-decentralisation, protocol-immutability, monetary-economics, security-economics]
source: summaries/the-hold-up-problem-in-protocol-economies.md
---

# The Hold-Up Problem in Protocol Economies — core principles

- **Specific investment plus discretionary rule revision is a textbook hold-up.** The discretionary party can appropriate the quasi-rent — the gap between an asset's in-relationship value and its salvage value (Klein, Crawford and Alchian). Protocol economies inherit this; they do not transcend it.
- **Williamson's specificity taxonomy applies directly.** Application developers lock to transaction formats, fee structures and settlement semantics; exchanges and custodians to key management and withdrawal logic; miners deploy ASICs — among the most extreme physical-asset specificity in the modern economy, since an algorithm change can render a fleet worthless.
- **Fixedness dominates when expected hold-up exceeds option value.** \(\Pi_i^F = B_i(P_t, x_i) - c_i(x_i)\); under mutable rules a hold-up term \(H\) and an option term \(O\) appear. Fixedness wins iff \(\Pr(r_t)\cdot\mathbb{E}[H] > \mathbb{E}[O]\). Neither regime is universally superior.
- **The damage is done by the possibility, not the realisation.** The hold-up term is multiplicative, scales with investment (an underinvestment feedback), and does not require a revision to occur — the Kydland–Prescott time-inconsistency structure.
- **Forking is not an answer.** Refusing a rule change moves the participant to a new and smaller equilibrium — separate hash power, liquidity, listings and developer attention. Exit disciplines opportunism only when near-costless (Hirschman). The discretionary party can extract up to the participant's exit cost.
- **Fork costs are asymmetric.** A small holder forks cheaply; a deeply integrated exchange cannot. Rule changes therefore extract most from the most specific investors — a perverse selection that discounts investment most heavily from those whose investment matters most.
- **Observable signatures of the ex ante discount.** High-specificity investment migrates toward credibly fixed base layers; technically equivalent services carry higher fees or risk premia on weak-commitment protocols; long-duration commitments concentrate where \(\Pr(r_t)\) is credibly low.
- **Four families of commitment mechanism.** Cost imposition (supermajority, delays, public process); accountability (legal, fiduciary, reputational — requiring identification); structural separation (multi-client ecosystems, federated standards bodies); and fixedness (most aggressive, sacrificing option value). The right mix is a design problem.
