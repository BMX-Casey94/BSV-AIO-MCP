---
title: "The Abolition of the House"
date: 2026-06-05
slug: the-abolition-of-the-house
url: https://singulargrit.substack.com/p/the-abolition-of-the-house
themes: [intermediaries, tokenisation, privacy, property-rights]
---

# The Abolition of the House
**Date:** 2026-06-05 | **URL:** https://singulargrit.substack.com/p/the-abolition-of-the-house
**Subtitle:** On how three cryptographic primitives — dealerless dealing, broadcast encryption, and exchangeable goods

## Core thesis
The game operator — in the language of the gaming hall, simply "the house" — is not one trusted party but three bundled into one coat: fairness of mechanism (the honest shuffle), keeping of secrets (your hand, the face-down card, the fog over the map), and custody of property (chips, items, balances). Each trust has its own cryptographic dissolution — dealerless dealing, broadcast encryption with revocation and traitor tracing, and programmable digital scarcity — and what can be dissolved separately can be dissolved together. When all three are supplied, the operator has nothing left to do: the game ceases to be a service rendered by a house and becomes a protocol enacted among the players themselves.

## Key arguments and claims
- The bundle was technical necessity, not preference: without the right cryptography, one trusted party was the cheapest way to provide fairness, secrecy, and custody at once; online operators tightened the bundle further with matchmaking and anti-cheat.
- Fairness without a dealer: mental poker (Shamir, Rivest, Adleman 1981); Goldwasser-Micali probabilistic encryption (1982); Barnett and Smart's rigorised protocols (2003); Neff's verifiable secret shuffle (2001) proves a genuine permutation without revealing the arrangement; Shamir's secret sharing (1979); and the Goldreich-Micali-Wigderson completeness theorem (1987) — any computation a trusted party could perform can be performed jointly by the distrustful parties.
- Secrecy without a keeper: broadcast encryption (Fiat and Naor, CRYPTO '93) transmits so that precisely a chosen subset can read, with collusion-resistant short-ciphertext schemes (Boneh, Gentry, Waters 2005); revocation for stateless receivers (Naor, Naor, Lotspiech 2001) lets the readable set change as players join, leave, or are expelled; traitor tracing (Chor, Fiat, Naor 1994) stamps leaked keys and pirate decoders with the leaker's identity. The seam is shown honestly: in the dealerless setting the sealing emerges from the joint construction, so broadcast encryption is the conceptual home of the subset-access problem rather than a black box.
- Property without a custodian: items become real bearer objects — scarce by construction, owned by possession of a key, transferable directly, and rule-bearing (Szabo's composed rules; ERC-721's standard form; Chaum's token lineage; Nakamoto's ledger). The decisive new property is portability: a bearer asset wanders between games as money wanders between shops, and its price is discovered across venues rather than decreed by an operator's store.
- Five newly buildable classes: persistent portable asset economies; operator-independent competitive integrity (no privileged seat from which to rig); cross-game composability with emergent secondary markets; disclosure as a designed structure (sealed moves proven later, delayed spectator reveals, selective disclosure to an adjudicator); and collusion-traceable hidden-information games.
- The epistemic shift: fairness moves from a believed claim — asserted by the house, perhaps audited by a trusted regulator — to a verifiable artifact: the transcript of a proven shuffle, public randomness anyone may check, disclosure that demonstrably opens only to the entitled.
- The honest counterweight: (1) collusion outside the protocol — the player who simply tells a confederate what he legitimately saw — is unreachable by any mathematics; tracing catches key redistribution, not the whispered word; (2) every primitive rests on physical keys, and no-custodian means no-recourse — a stolen key is the asset gone, finally; (3) power relocates to protocol authors, asset issuers ("in their quiet way, a new kind of house"), standards maintainers, and large holders; (4) feasibility — rounds, ciphertext and proof sizes, throughput and latency are genuine costs, and the naïve composition does not scale for free.
- Builder disciplines: unbundle deliberately (the convenient trusted helper is the house returning by the side door); make the asset real or do not call it owned; treat disclosure as first-class design; name the residual trusted parties and physical roots; design for the collusion one cannot prevent.

## How Craig reasons (his model/logic)
Compositional synthesis: three independent cryptographic lineages mapped onto three distinct trust functions, with the seams between mechanisms shown rather than concealed. As throughout the series, every power is paired with its cost — the "honest counterweight" — and claims are bounded to what each primitive delivers (tracing keys, not whispers; scarcity, not magic).

## Where this contradicts BTC-mainstream logic
No direct engagement — this post applies the series' primitives (dealerless dealing, engineered scarcity, key custody) to dissolve the trusted game operator. Its insistence that an item whose existence depends on one company's server is not property at all cuts against mainstream operator-bound game economies.

## Notable quotes
- "The house is not defeated or evicted; it is rendered unnecessary, which is a deeper thing, and it simply ceases to be."
- "The operator was never the game. The operator was the scaffolding we erected around the game because we could not otherwise trust the shuffle, keep the secret, or honour the stake."
- "The confederate is older than cryptography, and will outlive it."
- "no-custodian means, with full and unforgiving symmetry, no-recourse"

## Connections
Gathers the four preceding essays — dealerless dealing, digital scarcity, the relocation of power, and the physical floor beneath keys — into a single application: the game. It is the series' worked example of what the primitives make buildable and what they cost.
