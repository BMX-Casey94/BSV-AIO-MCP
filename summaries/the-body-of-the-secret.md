---
title: "The body of the secret "
date: 2026-06-04
slug: the-body-of-the-secret
url: https://singulargrit.substack.com/p/the-body-of-the-secret
themes: [security-economics, wallets-keys]
---

# The body of the secret
**Date:** 2026-06-04 | **URL:** https://singulargrit.substack.com/p/the-body-of-the-secret
**Subtitle:** On why information security is, in the last analysis, physical security — every cipher resting on a secret that has a location, every trustless system on a root of trust one can hold, burn, or steal,

## Core thesis
Cryptography's dream of disembodied security — a fortress of proofs indifferent to the physical world — is false, because a cipher on paper protects nothing: the instant a key is used it re-enters the physical world as charge, voltage, time, heat, and sound, and the physical world leaks. The history of practical attack is the history of breaking matter rather than mathematics; trusted hardware concentrates rather than abolishes the physical problem; the chain of trust bottoms out in fabricated artifacts and the hands that made them; and the last keeper of every secret is a coercible human body. The honest claim is never that a secret cannot be taken, but that taking it has been made expensive, accountable, and bounded.

## Key arguments and claims
- The clean dream: Shannon (1949) proved the one-time pad perfectly secret; Kerckhoffs (1883) insisted strength must reside entirely in the key; Diffie-Hellman (1976) and RSA (1978) rest security on hard number-theoretic problems. All true — and all silent about the chip in which the key resides while it works.
- The catalogue of physical attack: Kocher's timing attacks (CRYPTO '96) reconstruct keys from computation durations; differential power analysis (Kocher, Jaffe, Jun, CRYPTO '99) reads keys from current fluctuations and forced the smartcard industry to redesign; van Eck (1985) reconstructed screens from electromagnetic radiation at a distance; Genkin, Shamir and Tromer (CRYPTO 2014) lifted a full 4096-bit RSA key from a laptop's acoustic whine via an ordinary mobile phone — co-authored by one of RSA's own inventors; Boneh, DeMillo and Lipton (EUROCRYPT '97) showed a single faulty signature lays bare the private key.
- The invariant pattern: in not one of these attacks is the mathematics broken; what gives way is the matter the mathematics lives in. Leakage is a property of physical computation as such — an arms race without final victory, from timing to power to electromagnetic to acoustic to thermal to optical channels.
- Trusted hardware is concentration, not abolition. Anderson and Kuhn's "Tamper Resistance — a Cautionary Note" (1996) catalogues strongholds falling to acid, lasers, abrasion and probing; cold-boot attacks (Halderman et al. 2008) recover keys from fading memory charge — longer when chilled — defeating leading disk-encryption products; Foreshadow (Van Bulck et al. 2018) turned speculative execution against SGX itself, spilling sealed secrets and forging attestations. Tamper-resistant is an honest word; tamper-proof is not.
- Thompson's "Reflections on Trusting Trust" (1984): the regress of trust does not terminate in a proof — the bottom is a physical artifact you did not fabricate and the humans who built it. Enclave attestation, chased to its origin, dissolves into the physical and institutional security of a chipmaker: a fab, a foundry, a supply chain, a courier.
- The human keeper: xkcd's five-dollar wrench (no. 538) is the cryptanalysis no theorem answers. Biometrics are the most treacherous key-store: a bodily credential cannot be revoked once lifted, and the body can be compelled where the mind may lawfully refuse.
- Bearing on the trustless world: a private key is a physical secret with a location, and Bitcoin makes it a bearer instrument of absolute purity — to lose the key is to lose the value outright, with no registrar to petition. Disintermediation strips the bank's protection along with its permission, raising custody's stakes to the absolute.
- The discipline of the physical (after Anderson's Security Engineering, 2001): design as though the adversary already holds the device; minimise the secret and its embodied life; split secrets across many bodies so no single chip, disk, person or room is the entire key; shield and isolate; and above all, name the physical root.

## How Craig reasons (his model/logic)
A survey-of-attacks method — the history of cryptanalysis read as matter defeating mathematics — joined to an epistemological regress (trusting trust) that terminates in atoms and hands. The normative payload is a humbler triad replacing impossibility claims: security that is expensive, accountable, and bounded, with the trust surface named and guarded.

## Where this contradicts BTC-mainstream logic
No direct engagement — this post examines the secret-key foundation beneath every "trustless" system, Bitcoin included. Its implicit rebuke falls on marketing of "tamper-proof" hardware and on "trustless" used as though the word were a wall: every such system has an irreducible physical trusted party, and honesty requires naming it.

## Notable quotes
- "The cryptographer dreams in numbers, and numbers do not bleed."
- "The honest claim is never the secret cannot be extracted. It is only, ever, the secret is expensive to extract."
- "A trust surface unnamed is a trust surface unguarded."
- "Security in the abstract is perfect and worthless."

## Connections
The fourth essay in the series: it examines the foundation the previous three assumed — the secret key beneath the dealerless game, the ownable file, and the relocated keys of institutional power. Its "physical floor" is invoked as one of the honest costs in "The Abolition of the House".
