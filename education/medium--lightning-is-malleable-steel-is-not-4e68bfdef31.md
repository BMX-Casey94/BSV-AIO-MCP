---
title: "Lightning is malleable… Steel is not"
era: medium
date: 2018-06-19
slug: lightning-is-malleable-steel-is-not-4e68bfdef31
themes: [lightning-l2, law-regulation, btc-critique, protocol-immutability]
source_summary: summaries-medium/lightning-is-malleable-steel-is-not-4e68bfdef31.md
url: https://medium.com/@craig_10243/lightning-is-malleable-steel-is-not-4e68bfdef31
---

# Lightning is malleable… Steel is not — core principles

- **Payment channels are native to Bitcoin since January 2009.** "Payment channels and even atomic swaps can be completed without a malleability fix. A non-issue." The original design supported complex payment channels from release; only punishment-based bidirectional channel designs require non-malleable transaction IDs.
- **Bitcoin is a security, but an excluded one when used as cash.** Congress "did not intend to provide a broad federal remedy for all fraud" (Marine Bank v. Weaver); an unbacked pure commodity currency used as cash — where the system completes each exchange — falls under the 15 U.S.C. § 77c(a) registration exemptions. The protection attaches to completed-exchange cash usage, not to "digital gold" holding.
- **Howey sets a floor, not a ceiling.** Howey "sets the baseline as to what forms a security, not the bounds" — the courts deliberately left the term open to expansion, so no instrument is safely outside the definition by design.
- **HTLCs are promissory notes in law.** A hashed timelock contract is an unconditional written, signed promise to pay a sum certain on demand or at a determinable time under the UK Bills of Exchange Act 1882 (electronic form and digital signatures qualify); a routed hub that must be pre-funded fees "acts as a paid money forwarder".
- **The securities case web.** Longines Symphonette (a repurchase guarantee can make medallions securities), SEC v. Western Pac. Gold & Silver (abstract instruments over bullion are regulated even when the bullion is not), United Housing v. Forman (expectation of profit), Sauve v. K.C. (risk-capital test — profit-seeking forwarding hubs are ventures), Consolidated Investment Services (even non-existent instruments can be securities — "it is digital" is no defence).
- **Bearer-instrument AML exposure.** Promissory notes are bearer instruments under AML/CTF law, so forwarding intermediaries carrying them fall within compliance obligations.
- **Fee diversion undermines the security budget.** As the subsidy halves (6.25, then 3.125, then 1.5625 coins) while Moore's law demands 16x–100x compute for equal security, miner revenue must migrate to on-chain fees; an overlay that diverts fee volume off-chain is a "beggar thy neighbour" strategy that starves the base layer's security.
- **An overlay that succeeds no longer needs the base.** If an off-chain system becomes a trusted medium of exchange, cross-chain swaps let it migrate off the underlying commodity entirely, ending as "a Proof of State system with a Ripple-like consensus" — settlement in the base currency first becomes optional, then abolished, removing scarcity enforcement.
- **Topology distinguishes the systems.** Bitcoin's incentives drive a small-world near-complete miner graph; hub-routed overlays form a loose mesh with centrally controlled choke points.
- **ECDSA key aggregation without new opcodes.** Schnorr-style group signatures are constructible with ECDSA — additive keys combining into a single valid key and address with one on-chain signature, no sharing of keys, "no OP_Codes and protocol changes" required.
- **Unincorporated dev groups risk full liability partnership.** Informal development collectives likely constitute Full Liability Partnerships, exposing every member to every other member's liabilities.
