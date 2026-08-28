---
title: "Set in Stone"
date: 2026-07-28
slug: set-in-stone
url: https://singulargrit.substack.com/p/set-in-stone
themes: [protocol-immutability, governance-decentralisation]
---

# Set in Stone
**Date:** 2026-07-28T12:34:00.329Z | **URL:** https://singulargrit.substack.com/p/set-in-stone
**Subtitle:** Why a Fixed Base Produces More Innovation Than a Flexible One

## Core thesis
Competition does not disappear when a design channel is closed; it relocates to whichever margin remains contestable. If a system's foundations can be altered, altering them becomes a competitive strategy and rational firms invest in influence; if they cannot, the same money is forced into engineering — "what we normally call innovation". A fixed base yields more innovation than a flexible one not despite the fixity but because of it, and the experiment has already run for thirty years in telecommunications standardisation.

## Key arguments and claims
- **The 3GPP case.** 3GPP's corpus runs to thousands of specifications, and its key property is that it is *frozen in versions*: Release 15 gave the first 5G specifications, Releases 16 and 17 extended them, and each Release passes functional, stage-3 and protocol code freezes, after which it does not change. Release 15 devices keep working under Release 17, and "nobody can lobby to change Release 15" — no committee to capture, no vote to win. Competition moves to implementation quality, power efficiency, beamforming, chipset integration, cost and applications: "The specification is the ground, not the prize."
- **The SEP evidence.** Firms declare Standard Essential Patents to ETSI under FRAND obligations. Reading across the literature — Bekkers, Verspagen and Smits (GSM); Bekkers and West (UMTS); Bekkers, Bongard and Nuvolari; Baron and Pohlmann; Brachtendorf, Gaessler and Harhoff; Lemley and Simcoe — one pattern recurs: **accumulated technical knowledge predicts standardisation position better than accumulated legal ownership**. Ownership follows capability. A stronger "substitutive" version (extra patents add nothing beyond a knowledge threshold) is flagged as plausible but under-evidenced: small samples, uncontrolled interaction terms, composite dependent variables dominated by portfolio size.
- **The counterfactual.** A mutable spec forces a portfolio choice between engineering and influence; influence returns are step-functions — a clause only your technology satisfies wipes out competitors' investment overnight. Hence Tullock's rent-seeking waste, Krueger's quantification (several per cent of national income), Buchanan, Tollison and Tullock's general theory, North's payoff-structure account (selection "close to deterministic") and Olson's ratchet of rule-capture coalitions.
- **Mutability concentrates power.** A fixed rule is equally binding on and knowable by everyone; a mutable rule is knowable only to those in the room. Flexibility is sold as democratic and functions as oligarchic.
- **Fixed is not frozen.** Saltzer, Reed and Clark's 1984 end-to-end argument put application functions at the endpoints; the web, email, streaming, VoIP and messaging needed no new Internet Protocol. Deering's hourglass: wide top and bottom, narrow fixed waist. 3GPP matches this by additive versioning — Release 17 adds to Release 15, never modifies it.
- **The Bitcoin case.** Design one: base set forever — Script fully enabled, block capacity unbounded by protocol, no upgrade mechanism, no governance, because "the rules are not in question". Design two: a living document revised by whoever maintains the reference implementation — capacity constrained by policy, removed functionality staying removed, proposal wars, factions, veto-holders, a procedural class. Forks are "the predictable output of a system in which the rules are contestable and the contest has no terminal decision procedure"; a fixed base cannot fork over rule disputes because none arise. The strongest objection (immutability entrenches flaws) proves too much — it would justify a mutable IP — and mislocates repair: edge workarounds are voluntary, competitive and reversible; base amendments compulsory, monopolistic and permanent. Honestly applied, almost nothing clears the bar for touching the base.
- **Depth versus breadth.** March's exploitation–exploration: stable architecture makes deep specialisation rational; instability pushes engineering from deep to shallow. The edge is a structured space inheriting its structure from the fixed base.
- **The dirty part.** SEP declarations are self-made and unadjudicated, producing over-declaration; the European Commission's JRC pilot (2020) confirmed many declared SEPs are not essential, compatibly with Brachtendorf, Gaessler and Harhoff. Rent-seeking is conserved: excluded from the spec, it moved to the unverified measurement layer. Freeze the base *and* make every attestation layer checkable by anyone from the record itself — a public immutable ledger is "the verification layer that the SEP regime lacks", to be developed separately.

## How Craig reasons (his model/logic)
A relocation-of-competition argument built from industrial-organisation economics: define the payoff structure (fixed versus mutable base), derive the rational firm's choice between engineering and influence, then support it with the rent-seeking canon (Tullock, Krueger, North, Olson), thirty years of standardisation evidence (3GPP Releases; the SEP literature) and design theory (end-to-end, hourglass, additive versioning). He separates findings he treats as established from stronger versions he flags as fragile, and states the strongest opposing case before answering it.

## Where this contradicts BTC-mainstream logic
- **Ossification as the goal.** "The absence of governance is not a deficiency to be remedied — it is the entire point."
- **The original design was complete.** Script fully enabled, capacity unbounded by protocol — against BTC's policy-constrained capacity and removed functionality, which he places in the pathological second design.
- **Forks as pathology**, not legitimate governance: the predictable output of contestable rules with no terminal decision procedure.
- **Innovation belongs at the edge**, not in base-layer process — the opposite of BIP-driven development.
- **Flexible governance is oligarchy.** "Every argument for flexible governance is, in its operational effect, an argument for governance by those who can afford to attend."
- **Immutability favours competence over capital.** "Where the ground does not move, you cannot buy a position — you have to earn one."

## Notable quotes
- "Competition does not disappear. It relocates."
- "The specification is the ground, not the prize."
- "Flexibility is sold as democratic and functions as oligarchic, because the capacity to exploit flexibility is distributed far more unequally than the capacity to read a fixed document."
- "Set the base in stone. Then go and build something at the edge, where the work is."

## Connections
The essay names neither of the other two. Textually: its four closing claims (competition is conserved; a fixed base enables edge innovation; mutability concentrates power; returns accrue to knowledge) and its closing exhortation recur near-verbatim in *Five Times Versus Twenty Per Cent*; its Tullock/Krueger rent-seeking machinery is what *The Price of Being in the Room* formalises. It ends with a forward pointer — the ledger as verification layer is "one I intend to develop separately".
