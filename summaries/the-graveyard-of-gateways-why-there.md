---
title: "The Graveyard of Gateways: Why There Can Only Be One Blockchain"
date: 2026-04-04
slug: the-graveyard-of-gateways-why-there
url: https://singulargrit.substack.com/p/the-graveyard-of-gateways-why-there
themes: [networking, intermediaries, scaling-throughput, btc-critique]
---

# The Graveyard of Gateways: Why There Can Only Be One Blockchain
**Date:** 2026-04-04 | **URL:** https://singulargrit.substack.com/p/the-graveyard-of-gateways-why-there
**Subtitle:** Or: How the market already answered this question thirty years ago, and nobody in crypto bothered to check.

## Core thesis
The multi-chain thesis replays the 1978–1994 protocol wars: general-purpose networks converge on one dominant standard because compatibility is valuable and fragmentation costly. Cross-chain bridges are the modern protocol gateway — expensive, fragile, rent-extracting and empirically DeFi's largest loss point — and if one chain verifiably delivers the relevant functionality more cheaply at scale, fragmentation is an artificial tax, not diversity.

## Key arguments and claims
- The protocol wars (c. 1978–1994) pitted TCP/IP against OSI — backed by the EEC, national governments, the US Department of Commerce and even the DoD, which in 1985 accepted a National Research Council recommendation to abandon TCP/IP — plus IBM SNA, DECnet, Novell IPX/SPX, Banyan VINES and Xerox XNS. By 1994 it was over; Maathuis and Smit (2003) conclude contemporary quality assessments favoured TCP/IP — not an inferior standard winning by path-dependency accident.
- The losers' signature is "survival through encapsulation over the winning network": IPX tunnelled inside UDP/IP, SNA estates connected over IP, OSI surviving as a teaching model. "This is not an analogy. It is a template."
- The economics is canonical industrial organisation: Katz and Shapiro (1985) on network externalities; Farrell and Saloner (1985) on excess inertia under incomplete information; Arthur (1989) on increasing-returns lock-in; Economides (1996) — compatibility "is what converts potential complementarity into actual value"; Shapiro and Varian (1999) — network markets are "tippy" and do not settle into comfortable pluralism.
- Bitcoin's stated purpose (Nakamoto, 2008) is payments "without going through a financial institution". A multi-chain world multiplies trusted third parties instead: "The exchange becomes the bank. The bridge becomes the clearinghouse. The wrapped token becomes the promissory note. The relayer becomes the correspondent."
- The bridge graveyard, quantified: Zhang et al. (RAID 2024) catalogued 35 bridge attacks (April 2021–April 2024) across ten vulnerability types; Rashid et al. (2025) reviewed 64 bridges, documenting 31 exploits and $1.5–2 billion lost in 2022 alone; Belchior et al. (2021) found no interoperability mechanism achieves native single-chain security. Per Chainalysis and DefiLlama, over $2.8 billion has been stolen from bridges — ~40% of all value hacked in Web3 — including Ronin (~$600 million), Wormhole ($325 million), BNB Bridge ($570 million) and Nomad ($190 million, drained by copy-and-paste attackers).
- Five propositions carry the case: (1) network effects (liquidity, counterparty density, tooling, compliance simplicity); (2) economies of scale — competing chains duplicate validation, indexing, wallets, monitoring, exchange integration and tooling; (3) fragmentation imposes transaction costs (spreads, hedging, custody, timing mismatches, bridge risk); (4) the knife-edge — where functionality is equal, price determines allocation, so multi-chain use survives only on non-price differentiation, lock-in, speculation or subsidy; (5) positive feedback makes standards markets tip, then accelerates.
- The conditional claim, stated honestly: BSV asserts it provides payments, data, smart contracts, tokenisation, micropayments and enterprise data management on one chain, at lower cost, at scale others cannot absorb without layered architectures. "This is either true or it is not" — testable by throughput benchmarks, cost comparisons, functional audits and sustained production workloads. If true, the one-chain conclusion follows from standard network economics.
- Objections taken seriously: specialisation (real but niche and historically transitional as the general standard absorbs functions); "competition is healthy" (the competition that matters is the contest to *become* the standard, not perpetual incompatibility); "bridges solve the problem" (empirically the largest single source of loss); "multiple chains reduce systemic risk" (segmentation can contain failures, but the interoperability layer itself proved more fragile than the chains it connects).

## How Craig reasons (his model/logic)
Historical analogy disciplined by formal literature: the protocol-wars record supplies the template, network economics (Katz–Shapiro, Arthur, Economides, Shapiro–Varian) the mechanism, and the bridge-loss dataset the empirical falsification of the interoperability fix. The conclusion is deliberately conditional — antecedent to be demonstrated, consequent standard economics.

## Where this contradicts BTC-mainstream logic
- Rejects the multi-chain/L2/interoperability worldview (Ethereum rollups, Cosmos/Polkadot interoperability, wrapped-BTC bridges) as reintermediation under new branding.
- Reframes "ecosystem diversity" as duplicated overhead and toll extraction: "Every boundary is a fee. Every crossing is a risk. Every bridge is an intermediary."
- Undercuts BTC's layered-scaling posture by insisting the winning standard must absorb functionality natively at lower cost — one chain, not a stack of gateways.
- Positions BSV's single-chain scaling claim as the empirically testable antecedent, against maximalist brand loyalty on all sides.

## Notable quotes
- "It mistakes the multiplication of toll booths for the opening of roads."
- "It is not progress. It is the 1980s."
- "That is not the removal of trusted third parties. It is their multiplication."
- "If one ledger can do everything the others can do, and do it more cheaply, then fragmentation is not diversity. It is an artificial tax on users, collected by intermediaries who exist only because the market has not yet finished converging. The market will finish."

## Connections
Extends the corpus's anti-intermediation theme (cf. "When Money Moves for Free, Who Gets Paid?", same batch) to crypto's own interoperability layer, and complements the networking essays with a standards-economics argument for one scalable chain.
