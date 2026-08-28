---
title: 'Lightning is malleable… Steel is not'
date: 2018-06-19
slug: lightning-is-malleable-steel-is-not-4e68bfdef31
url: https://medium.com/@craig_10243/lightning-is-malleable-steel-is-not-4e68bfdef31
themes: [lightning-l2, law-regulation, btc-critique, protocol-immutability]
---

# Lightning is malleable… Steel is not
**Date:** 2018-06-19 | **URL:** https://medium.com/@craig_10243/lightning-is-malleable-steel-is-not-4e68bfdef31
**Subtitle:** A little-known fact is that even Bitcoin is a security. The mistake is thinking that this is the issue. Bitcoin is a security that is…

## Core thesis
Lightning is both a legal trap and an economic parasite. Legally, HTLCs are promissory notes under the Bills of Exchange Act 1882 definition and Lightning hubs are profit-seeking money forwarders squarely within SEC and AML/CTF reach, while Bitcoin-as-cash is an excluded security under 15 U.S.C. § 77c(a). Technically, SegWit's malleability fix was never needed for payment channels — native to Bitcoin since January 2009 — and exists only to enable Lightning's punishment-based channels, letting the overlay detach from and consume the underlying commodity until the system ends as a Ripple-like "Proof of State" banking network. "At least Bitcoin Cash (BCH) managed to avoid this trap."

## Key arguments and claims
- Bitcoin *is* a security, but an excluded one: Congress "did not intend to provide a broad federal remedy for all fraud" (Marine Bank v. Weaver), and as "unbacked pure commodity currency" used as cash — where "the system completes each exchange" — it falls under the 15 U.S.C. § 77c(a) registration exemptions. "Not as 'Digital Gold' but as cash."
- Howey is misread by "armchair lawyers": it "sets the baseline as to what forms a security, not the bounds" — the Supreme Court deliberately left the term open to judicial expansion, so nothing is safely outside the definition.
- HTLC = promissory note: an unconditional written, signed promise to pay a sum certain on demand or at a determinable time, per the UK Bills of Exchange Act 1882 (electronic form and digital signatures qualify). Lightning senders must pre-fund fees for every hub on the route; "Each hub in a channel acts as a paid money forwarder."
- The case web: Longines Symphonette (a repurchase guarantee made commemorative medallions securities), SEC v. Western Pac. Gold & Silver (abstract instruments over bullion are regulated even when bullion itself is not), United Housing v. Forman (expectation of profit), Sauve v. K.C. (risk-capital test — "Lightning hubs are profit-seeking enterprises or ventures"), and Consolidated Investment Services (even non-existent instruments can be securities, so "it is digital" is no defence).
- AML/CTF exposure: promissory notes are bearer instruments under AML/CTF law, so LN hubs must comply; "It is foolish to think any cryptocurrency cannot be stopped" — the whole space is under 0.1% of daily monetary velocity and simply not yet a political target.
- The strangler-fig endgame: if Lightning becomes a trusted medium of exchange it no longer needs the commodity base; cross-chain swaps let it migrate off BTC entirely, leaving "Bitcoin, Litecoin and all Blockchains as dead and hollow ghosts" — "a Proof of State system with a Ripple-like consensus" run by government exchanges and banks. "Lightning becomes the system that enslaves, not the system that frees the world."
- Miner funding arithmetic: the block reward falls to 6.25 BTC in two years, 3.125 in six, 1.5625 in ten; Moore's law demands 16x and 100x compute for equal security over those horizons, and with investment growth 4,000x and 1,000,000x — so the network needs to be 1,000-10,000x more powerful in a decade, requiring the "mythical 100k to 1 million USD Bitcoin valuation" funded by on-chain fees. Lightning diverts those fees to hubs, producing "a beggar thy neighbour strategy" of fee competition between systems with no long-term viability requirement.
- Malleability history: "Payment channels have been a feature of Bitcoin since the initial release"; "Payment channels and even atomic swaps can be completed without a malleability fix. A non-issue." Only Lightning's punishment-based bidirectional channels require non-malleability — the vulnerability SegWit fixed was "(disingenuously) created".
- Malleability as defence: residual malleability makes a parasitic overlay "more difficult and economically less viable"; removing it lets the system "fragment into many coins" that can be captured, and "removes one of the critical aspects of Bitcoin, scarcity" by letting the overlay set — and eventually abolish — settlement in the underlying currency.
- Topology contrast: Bitcoin's incentives drive a small-world near-complete graph; Lightning forms "a loose mesh with a small number of centrally controlled choke points".
- Previews: Schnorr-style group signatures using ECDSA — additive keys combining into a single valid key/address with a single on-chain signature, "no sharing of the keys", and "we do not require OP_Codes and protocol changes"; plus a warning that unincorporated development groups likely constitute Full Liability Partnerships, exposing every member to every other member's liabilities.

## How Craig reasons (his model/logic)
Doctrinal legal analysis fused with incentive economics: he takes statutory and case-law definitions (Bills of Exchange Act, Howey, risk-capital), checks Lightning's mechanics element by element until the classification bites, then switches to long-horizon economic modelling (halvings, Moore's law, fee diversion) to show the overlay's terminal state. The rhetoric is eschatological — strangler figs, enslavement, hollow ghosts — anchored by an unusually dense apparatus of cited authorities for a blog post.

## Where this contradicts BTC-mainstream logic
- The "not a security" crypto orthodoxy: Craig inverts it — almost everything is potentially a security; survival depends on the narrow registration exclusions, which Bitcoin satisfies only as completed-exchange cash, not as "digital gold".
- The standard SegWit justification (malleability fix as prerequisite for layer-2): flatly denied — channels worked from January 2009; the fix exists to serve Lightning's punishment design specifically.
- "Lightning scales Bitcoin and lowers fees": recast as fee parasitism that starves miner revenue exactly as the subsidy halves, undermining the security budget.
- "Trustless off-chain = liberation": recast as re-intermediation — regulated hub money-forwarders, bearer-instrument AML obligations, and an end state indistinguishable from state banking.
- Cross-chain atomic swaps as a flagship feature: reframed as the mechanism by which the overlay abandons the underlying chain altogether.

## Notable quotes
- "A little-known fact is that even Bitcoin is a security."
- "Lightning becomes the system that enslaves, not the system that frees the world."
- "The truth is payment channels do not require non-malleable transactions."
- "It is foolish to think any cryptocurrency cannot be stopped."
- "Bitcoin supported the development of complex payment channels from Jan 2009."
- "At least Bitcoin Cash (BCH) managed to avoid this trap."

## Connections
Direct sequel to "Iron and Steel" (2018-06-09) — the steel/malleability metaphor carries across both titles — and the legal argument continues in "Negotiable Instruments" (2018-07-02). Cites his SSRN paper (abstract_id=2993312) and a dense legal apparatus: Marine Bank v. Weaver, Howey, United Housing v. Forman, Longines Symphonette, SEC v. Western Pac. Gold & Silver, Sauve v. K.C., Consolidated Investment Services, the UK Bills of Exchange Act 1882 and 15 U.S.C. § 77c(a). The promised ECDSA key-aggregation technique foreshadows later nChain patent and paper output.
