---
title: "The Abolition of the Dealer"
date: 2026-06-02
slug: the-abolition-of-the-dealer
url: https://singulargrit.substack.com/p/the-abolition-of-the-dealer
themes: [privacy, intermediaries, governance-decentralisation]
---

# The Abolition of the Dealer
**Date:** 2026-06-02 | **URL:** https://singulargrit.substack.com/p/the-abolition-of-the-dealer
**Subtitle:** On mental poker, and the engineering of trust among people who are right not to trust one another

## Core thesis
Mental poker — posed by Shamir, Rivest and Adleman in 1979 as the question of playing fair poker over the telephone — was the first worked example of secure two-party computation, and it matured into a general doctrine: secrecy and proof are not enemies, and fairness can be built into the structure of a game rather than entrusted to anyone's character. The trusted third party is not regulated, audited or constrained but "proven unnecessary, in full generality"; the same gesture that abolishes the card dealer also abolishes him in markets, elections, public randomness, confidential audit and the custody of keys.

## Key arguments and claims
- SRA's 1979 memo (MIT/LCS/TM-125) proved a perfectly fair deal impossible by elementary means, then supplied a complete protocol via commutative encryption — boxes carrying two padlocks removable in either order; the first secure computation rather than merely secure transmission.
- Coppersmith (1985) showed careless parameters leaked partial information about cards; Goldwasser and Micali (1982) answered by founding semantic security — encryption must reveal not even a single bit of partial knowledge — a load-bearing definition of modern cryptography first stated "in order to deal an honest hand of cards."
- The field's maturation: Yung's multiplayer game; Bárány and Füredi on three or more players; Crépeau on coalitions and on concealing strategy itself; Schindelhauer's zero-knowledge-checkable toolbox of card operations; Barnett and Smart's card representation whose size does not grow with players; Castellà-Roca's dropout-tolerant protocols.
- Six instruments: the commitment (Blum's coin-flipping by telephone — binding and hiding at once); semantic security; the verifiable shuffle (Neff 2001 — re-encrypted, reordered output with a compact proof any sceptic can check); the zero-knowledge proof (Goldwasser, Micali, Rackoff 1985); secret sharing (Shamir 1979 — a polynomial split so any quorum reconstructs and any smaller group learns nothing); and the completeness theorems.
- Yao (1982) answered the millionaires' problem with garbled circuits; Goldreich, Micali and Wigderson (1987), in "How to Play Any Mental Game", proved any game of incomplete information has a protocol yielding exactly the outcome a perfectly trusted referee would produce, provided an honest majority — "Mental poker was the first move; this was the checkmate."
- Five applications: sealed-bid auctions (commit to bids, resolve by secure computation, prove correctness — losing bids never revealed); universally verifiable elections (mix-net shuffles with per-shuffle proofs, tallying under encryption or quorum decryption); randomness no one owns (commit-and-reveal, with verifiable delay functions — Boneh, Bonneau, Bünz, Fisch 2018 — closing the abort loophole; beacons and leader election); confidential audit (prove thresholds, ranges and reconciliation without surrendering records); and threshold keys (a quorum signs without the key ever existing whole in one place).
- The synthesis: Nakamoto's ledger supplies the public, ordered, append-only stage on which commitments are posted and outcomes anchored; private machinery on public ground yields "a complete grammar for conducting the consequential affairs of strangers… without appointing anyone to be trusted with the outcome."

## How Craig reasons (his model/logic)
Intellectual history read as moral philosophy: the rationalist's identity axiom ("a card is exactly one card") enforced by structure rather than witnesses; trust migrated "from the realm of character to the realm of structure"; and an explicit aesthetic-moral unity — a system that cannot be made to lie is beautiful in the exact way a proof is beautiful, and good because it secures fairness without sacrificing anyone to anyone.

## Where this contradicts BTC-mainstream logic
No direct engagement — this post is a history and philosophy of secure computation from 1979 to the present, touching Bitcoin only to cast Nakamoto's ledger as the public stage that completes the mental-poker synthesis.

## Notable quotes
- "To trust is to take out a loan against another's character, and to pay interest on it forever."
- "The interesting question is not how to make men trustworthy. It is how to make their trustworthiness unnecessary."
- "The trusted third party is not regulated, not audited, not constrained. He is proven unnecessary, in full generality, for any game one can specify."
- "The card is private; the table is public; and neither requires a dealer."

## Connections
The philosophical charter for the cardtable repository in "The Builder's Week"; the confidential-audit application shares territory with "The Arithmetic of Trust"; and the ledger-as-stage section echoes the fixed-base argument of "Selling the Unspent Chain".
