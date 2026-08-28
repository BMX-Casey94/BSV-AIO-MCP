---
title: 'Digital Rights Management: Serialised Media'
date: 2019-03-24
slug: digital-rights-management-serialised-media-2db1293cc348
url: https://medium.com/@craig_10243/digital-rights-management-serialised-media-2db1293cc348
themes: [script-technical, intermediaries, tokenisation]
---

# Digital Rights Management: Serialised Media
**Date:** 2019-03-24 | **URL:** https://medium.com/@craig_10243/digital-rights-management-serialised-media-2db1293cc348
**Subtitle:** In a fair exchange protocol, two parties either both honour an exchange (such as a contract), or neither of them do. It is known that…

## Core thesis
The post presents what Craig claims is the first symmetric fair-exchange protocol implemented on the Bitcoin blockchain: because Even and Yacobi (1980) proved deterministic fair exchange impossible without a trusted third party, the validated blockchain itself is cast as that trusted third party, enabling atomic, third-party-free exchange of "entities of value" — including the secrets used in media and DRM. The Medium body is a patent-style skeleton: the proposal is described only in overview (locking/unlocking scripts, OP_HASH160, locktime semantics), with "Table 1" and the Appendix (full transactions) present as headers but their content absent from the text — it reads as an excerpt of a longer technical document.

## Key arguments and claims
- Fair exchange defined: "two parties either both honour an exchange (such as a contract), or neither of them do"; "deterministic fair exchange is impossible without a trusted third party (Even and Yacobi 1980)" — "But under the Bitcoin protocol, a validated blockchain acts as a trusted third party."
- Prior art acknowledged: the Bitcoin Wiki's 'Atomic cross-chain trading' page (2014) and Tiernan's BIP 'Atomic Cross Chain Transfers' (2014); "Others have hinted that by combining secrets, a more symmetric solution is possible. We demonstrate how it can be achieved in Bitcoin."
- Claimed novelty: "the first known implementation of a symmetric fair exchange protocol on the Bitcoin blockchain" — offering the benefits of atomic cross-chain trading (separate transactions, no third party, atomic and secure) while being "perfectly symmetric".
- Mechanism sketched: locking/unlocking scripts in pseudocode; H(x) defined as the OP_HASH160 hash of x; non-zero locktime = earliest time (Unix time) a transaction may be added to the chain, zero locktime = immediate broadcast; the full protocol is relegated to the missing Table 1 and appendix.
- Application: "Such a system can be used to exchange secrets used in media and DRM"; Alice and Bob may trade "entities of value, such as bitcoin, other currencies, contracts, goods, or services" (Alice gives e1, Bob gives e2).
- Assertion of script sufficiency: "It is inherent that the scripting language supports the described algorithm" — i.e. no protocol change is needed.

## How Craig reasons (his model/logic)
Academic-paper/patent structure: problem statement, state of the art, benefits, key elements, proposal, appendix, references. The reasoning anchors on a cited impossibility result (Even–Yacobi) and then repositions the blockchain as the missing trusted third party — a characteristic move of converting a distributed-systems theorem into a Bitcoin capability claim. Notably absent here is the polemic of the surrounding posts; the register is technical and institutional.

## Where this contradicts BTC-mainstream logic
- Inverts "trustless" rhetoric: rather than eliminating trusted third parties, Bitcoin *is* the trusted third party — a reframing most of the 2014–2019 "trustlessness" discourse avoided.
- DRM and serialised media are anathema to crypto's anti-DRM, copyleft-adjacent culture; he proposes using Bitcoin to enforce digital rights rather than to route around them.
- Counters the "Bitcoin script is too limited for real contracts" narrative (used to justify Ethereum and later BTC script changes): the existing scripting language inherently suffices.
- Against the atomic-swap-as-DEX orthodoxy, the emphasis is not trust-minimised speculation but fair exchange of contracts, goods, and DRM secrets — commerce, not trading.

## Notable quotes
- "It is known that deterministic fair exchange is impossible without a trusted third party (Even and Yacobi 1980)."
- "But under the Bitcoin protocol, a validated blockchain acts as a trusted third party."
- "The proposed invention describes the first known implementation of a symmetric fair exchange protocol on the Bitcoin blockchain."
- "Such a system can be used to exchange secrets used in media and DRM."

## Connections
Reads as a public excerpt of nChain-era patent/papers output (the "proposed invention" phrasing is patent-drafting language), citing Even & Yacobi (1980), the Bitcoin Wiki atomic-swaps page, and Tiernan's BIP. The DRM/serialised-media theme connects to his later Metanet content-monetisation work, and the "script already suffices" claim supports the fixed-protocol argument of "Forks as a demerger" (same week).
