---
title: "What TCP/IP Got Right"
date: 2026-05-05
slug: what-tcpip-got-right
url: https://singulargrit.substack.com/p/what-tcpip-got-right
themes: [protocol-immutability, networking, governance-decentralisation]
---

# What TCP/IP Got Right
**Date:** 2026-05-05 | **URL:** https://singulargrit.substack.com/p/what-tcpip-got-right
**Subtitle:** A fixed base layer is not technical stagnation. It is the institutional precondition for everything built on top of it. The internet learned this. Most blockchain protocols still have not.

## Core thesis
A credibly fixed base layer is not technical stagnation but the institutional precondition for cumulative investment in the layers above it. TCP/IP's decades of stability were an institutional achievement — standards-process design, distributed authority, implementation diversity, backwards compatibility — not the inevitable product of age. Most blockchain protocols have inverted the priority, improvising the institutional architecture while tinkering with the base layer, and pay for it in shallow application ecosystems.

## Key arguments and claims
- Fixedness defined by four negations: not immutable (change is possible but constrained), not static (innovation is channelled upward), not inflexible (the extension space responds to needs), not governance-free (it is governance under tight constraints). The operative property is credibility — participants can rationally expect stability across the relevant investment horizon.
- The TCP/IP evidence: IPv4's core semantics stable since the early 1980s, with CIDR, NAT and IPsec as backwards-compatible extensions; the IPv6 transition deliberate across more than two decades; TCP extended through its defined option space (selective acknowledgement, timestamps, fast open); QUIC and SCTP added alongside TCP rather than revising it; DNS, HTTP and SMTP keeping stable cores with defined extension mechanisms.
- The institutional ingredients: the IETF's rough consensus and running code, with staged RFC review requiring demonstrated implementations; backwards compatibility as a norm (an incompatible change becomes a new protocol, not a revision); the end-to-end principle (Saltzer, Reed and Clark, 1984) pushing functionality to the endpoints; authority distributed across IETF, IEEE, W3C, ICANN and regional registries; multiple independent implementations; and a deep, slow-moving installed base.
- The hourglass model: a narrow waist of protocols everything must support is the location of stability; the wide application top is the location of innovation. Base-layer fixedness is what permits upper-layer freedom.
- The economic mechanism: firms specialise capital to stable base-layer semantics. If a coalition could rewrite the packet format quarterly, investors would have to hedge or accept stranded investment, expected returns would fall, and "the hourglass would collapse". Hence the essay's central empirical claim: mutable base layers produce shallow application layers — the pattern observed in blockchain ecosystems with frequent discretionary revision.
- Why blockchains failed to absorb the lesson: no standards-body inheritance; a "move fast and break things" culture; rich base layers (Turing-complete virtual machines) that force base-layer change when needs evolve; designer economic incentives toward visible base-layer activity; and an underappreciated trade-off whose costs are distributed while the beneficiaries of stability are invisible.
- The minority that fixed their base layers — settlement-layer systems with minimal primitives (transaction validation, ordering, settlement) and rare, deliberate, broadly consented change — attracted deeper, longer-horizon, more specialised application investment.
- The costs of fixedness are acknowledged: base-layer design errors are hard to correct, evolution is slow, and some beneficial changes become institutionally impossible. The trade-off is situational — young systems with uncertain requirements should not commit prematurely.
- The recursive dynamic: stability attracts investment, investment produces an installed base, and the installed base reinforces stability.

## How Craig reasons
Institutional economics of commitment and asset specificity (North, Williamson), combined with path-dependence (David's QWERTY, Arthur on increasing returns) and the end-to-end systems literature. The TCP/IP record is used as an existence proof that base-layer fixedness is achievable at scale — not as a normative standard for all systems — and the analysis is framed as an explicit trade-off between adaptability and commitment.

## Where this contradicts BTC-mainstream logic
- Rejects the "ossification is failure" objection common in Core and wider crypto discourse: the relevant comparison is failure modes, and for settlement infrastructure with high asset specificity the costs of excessive change dominate.
- "Slow is the point": the slowness of standards processes is the mechanism that produces stability, not a defect.
- Implicitly indicts both frequent-revision chains and rich-base-layer smart-contract platforms, and any system that markets low-mutability credibility while practising high mutability — participants respond to the actual mutability profile, visible in the shallowness of the application layer.

## Notable quotes
- "The base layer accommodated them by not changing."
- "Mutable base layers produce shallow application layers."
- "Slow is the point."
- "Treating mutability as costless is not a design choice; it is the failure to make one."

## Connections
Provides the extended treatment of the mutability layer named in "Effective Decentralisation Is the Minimum, Not the Average", and its "identifiable coalitions" controlling revision are the subject of "Who Actually Decides". Underpins the set-in-stone protocol position that recurs throughout the corpus.
