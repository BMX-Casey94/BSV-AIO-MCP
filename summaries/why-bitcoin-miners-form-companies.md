---
title: "Why Bitcoin Miners Form Companies: What Blockchain Teaches Us About the Nature of Firms"
date: 2026-02-12
slug: why-bitcoin-miners-form-companies
url: https://singulargrit.substack.com/p/why-bitcoin-miners-form-companies
themes: [mining-consensus, governance-decentralisation, security-economics]
---

# Why Bitcoin Miners Form Companies: What Blockchain Teaches Us About the Nature of Firms
**Date:** 2026-02-12 | **URL:** https://singulargrit.substack.com/p/why-bitcoin-miners-form-companies
**Subtitle:** The economics of mining consolidation isn't a bug—it's a century-old theory playing out in fast-forward.

## Core thesis
Bitcoin mining's consolidation from laptop hobbyists (2009) to vertically integrated corporations (2019) is not a failure of decentralisation but Ronald Coase's 1937 theory of the firm running in fast-forward, in an environment stripped of historical baggage. Drawing on a paper applying transaction-cost economics and mechanism design to proof of work, Craig argues that consolidation follows inevitably from cost structure, and that proof of work rests on a novel governance concept — dynamic legitimacy — that proof of stake structurally cannot satisfy.

## Key arguments and claims
- Permissionless systems are defined by four constraints — anonymity, permissionlessness, Sybil resistance, oracle independence — which jointly rule out one-person-one-vote democracy: under anonymity anyone can mint a million keys (the Sybil attack, identified by John Douceur in 2002). Governance must therefore weight participation by a costly, rivalrous signal.
- Three cost forces determine optimal firm size: market transaction costs fall with scale (industrial electricity at 2–4 cents/kWh versus residential 10–20 cents; bulk hardware discounts); organisational costs rise and accelerate with scale (hierarchy, monitoring, coordination); revenue variance falls with scale (solo rewards follow a Poisson process with brutal variance; pooling lowers the risk premium and required cash buffer).
- SHA-256 ASICs exhibit extreme physical asset specificity in Oliver Williamson's sense — near-zero value outside Bitcoin mining — exposing independents to hold-up risk and making vertical integration the textbook response.
- The equilibrium structure is a long-tail distribution: a handful of large firms near the efficiency frontier plus a tail of smaller operations — oligopolistic competition, exactly what Coasian theory predicts, observable in fast-forward because the industry grew from scratch (CPU → GPU → FPGA → ASIC, each a Schumpeterian reshuffling).
- Comparative advantage operates even under absolute advantage: Alice (£500/hour mining) and Bob (£120/hour) raise combined output from £24,800 to £28,600 by specialising — why mining operations develop dedicated procurement, facilities and operations roles.
- Five axioms for legitimate governance under the constraints: Sybil-proof weighting, rivalrous commitment, temporal non-persistence (past commitment confers no present authority), open contestability, and incentive alignment (costs borne when authority is exercised). Together they uniquely require dynamic legitimacy — authority proportional to costly, verifiable, rivalrous commitment right now.
- Proof of work instantiates dynamic legitimacy: every block requires fresh expenditure; yesterday's mining buys nothing today; authority extinguishes the instant spending stops. This is a genuinely new governance category, distinct from property-rights, constitutional, or evolutionary authority.
- Proof of stake violates temporal non-persistence: past capital keeps generating present governance weight at low marginal cost. Differential reinvestment compounds concentration; delegation economies produce winner-take-most dynamics; and large validators can rewrite protocol parameters (rewards, thresholds, slashing) to disadvantage entrants — Stigler's regulatory capture with no external regulator. Stake decay fails because incumbent stakers would set the decay rate.
- Mining pools are misread as centralisation: members retain near-zero-cost exit (Hirschman's exit rather than voice), so an operator attempting censorship faces rapid membership departure. Equating the operator with its membership is like equating a party's leadership with its voter base.
- Energy expenditure is reframed institutionally: it is the cost of producing governance legitimacy under permissionless constraints, as elections and courts have administrative costs. Eliminating it without another costly signal reintroduces the Sybil vulnerability.

## How Craig reasons (his model/logic)
Comparative institutional analysis in the Coase–Williamson tradition: specify the feasibility constraints first, derive what governance forms are even possible, then compare actually available alternatives rather than measuring against an unattainable ideal. Mechanism-design axioms yield a uniqueness result (dynamic legitimacy), and the mining ecosystem is treated as a natural experiment in institutional emergence.

## Where this contradicts BTC-mainstream logic
- Directly inverts the "mining consolidation = centralisation failure" narrative common across crypto commentary: consolidation is the predicted efficient outcome of scale economies, variance reduction and asset specificity.
- Rejects the mainstream proof-of-stake pitch (post-Merge Ethereum orthodoxy) that staking is a greener equivalent: PoS structurally violates temporal non-persistence and is endogenously capture-prone in ways PoW is not.
- Reframes the environmental critique: the question is not whether energy cost is zero but whether what it buys — governance satisfying dynamic legitimacy — is worth the price.
- Challenges the "pools are centralised actors" talking point by separating delegated, revocable operator authority from member hash power.

## Notable quotes
- "Mining consolidation isn't a pathology. It's Coase's theory of the firm, running in fast-forward, in an environment stripped of all the historical baggage that normally makes firm formation hard to study."
- "The governance system captures itself."
- "Energy expenditure in proof of work isn't waste—it's the cost of producing governance legitimacy under the constraints of a permissionless system."
- "The firms that emerge in proof of work systems aren't a betrayal of decentralisation. They're what decentralisation looks like when it meets the real world of transaction costs, risk management, and comparative advantage."

## Connections
Reinforces the incentive analysis of the Nash-equilibrium essay (miners as rational economic agents) and supplies the governance-theoretic backbone for Craig's proof-of-work defence; the endogenous-capture concept extends his broader critique of validator-governed systems.
