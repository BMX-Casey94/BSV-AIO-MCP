---
title: 'Bitcoin and Quantum Computing'
date: 2019-01-23
slug: bitcoin-and-quantum-computing-b6f048db01eb
url: https://medium.com/@craig_10243/bitcoin-and-quantum-computing-b6f048db01eb
themes: [quantum-scepticism, script-technical, security-economics, btc-critique]
---

# Bitcoin and Quantum Computing
**Date:** 2019-01-23 | **URL:** https://medium.com/@craig_10243/bitcoin-and-quantum-computing-b6f048db01eb
**Subtitle:** Even if a Quantum Computer existed — they do not — Bitcoin would be fine.

## Core thesis
Quantum computers are hypothetical machines that do not exist, and even under the most generous assumptions Bitcoin is already quantum-resistant: address non-reuse, multisig, and hash-puzzle script constructions neutralise every theoretical attack. The quantum-threat narrative is oversold by funding-hungry researchers and is used, "at worst, intentionally designed to deceive", to push people into new and untested systems.

## Key arguments and claims
- Quantum computing rests on unproven postulates (Deutsch 1985); the hype traces to Shor's (1999) polynomial-time factorisation algorithm for certain classes of problems.
- Incentive critique: "the scientists creating them oversell the near-term capability. And so is to be expected. Without funding, they would never come to exist." Media reporting "(intentionally) obscures the forms of calculation needed to break a system".
- His SSRN paper (abstract 3152419) claims to demonstrate the flaws in quantum-attack arguments: Bitcoin is safe "for at least the next few decades and maybe all time".
- Economic-feasibility bound: an attack is only even theoretically viable against "well-known and reused Bitcoin addresses that have exposed public keys and which hold large amounts of value for periods longer than 30 days" — and organisations can move received funds to fresh addresses "within minutes of receipt".
- Multisig multiplies the attack cost: "an attack on a Bitcoin address requires an attack on all the keys associated with the address"; a 15-of-15 key address "would take 18 months to compromise" even granting a sub-30-day key reversal.
- "The simple answer is to not reuse Bitcoin addresses" — privacy and quantum safety are the same hygiene: "keeping public keys anonymous".
- The "quantum-killer script": add an indexed hash puzzle to a single-use key and modify the signature in script — e.g. Hash256(<Sig> + <pubKey> + <Data_Hash(i)>) Mod (N) == <Redeem Value>. "ECDSA plus a hash is immune even in theory to such so-called quantum-computer attacks (that do not exist)."
- Additive/homomorphic key structures extend the idea: <pubKey(1)> = <pubKey(0)> + Hash(Hash(S)).G + Hash(Hash(Y)).G, with a hash puzzle over Hash(S+Y), enabling 1-of-2 signature scripts where one key un-signs and the other solves the puzzle.
- The closing jab: "Bitcoin was always quantum resistant. It stems from the scripting language, and the very part of Bitcoin that allows it to be safe from any future attack is also one of the things that Core and BTC have done their utmost to subvert."

## How Craig reasons (his model/logic)
Scepticism of academic hype cycles combined with an economic model of attacks (what is worth attacking, for how long, at what cost) rather than worst-case cryptography. He then argues from within Bitcoin's own tooling — script opcodes, hash puzzles, additive keys — showing countermeasures need no new cryptography, and converts the whole topic into evidence for his anti-Core thesis that disabling script functionality removed Bitcoin's built-in safety margin.

## Where this contradicts BTC-mainstream logic
- Contradicts the quantum-fear narrative common in 2017–2019 crypto media ("quantum computers will destroy Bitcoin") and the push towards novel post-quantum signature schemes: Craig says existing script plus key hygiene suffices.
- Contradicts the address-reuse practices normalised in the BTC ecosystem (published donation addresses, reused exchange cold wallets): reuse is the entire attack surface.
- Contradicts Core's script restrictions (disabled opcodes, tight standardness rules): the disabled expressive power is reframed as Bitcoin's quantum-defence layer that BTC "subverted" — an implicit argument for BSV's opcode-restoration path.

## Notable quotes
- "Even if a quantum computer existed — they do not — Bitcoin would be fine."
- "Without funding, they would never come to exist."
- "The reality is that the arguments are spurious at best; at worst, they are intentionally designed to deceive."
- "The simple answer is to not reuse Bitcoin addresses."
- "ECDSA plus a hash is immune even in theory to such so-called quantum-computer attacks (that do not exist)."
- "The truth is that Bitcoin was always quantum resistant."

## Connections
Promotes his SSRN paper (abstract_id 3152419) on quantum-attack flaws. The script-restoration theme connects to his OP_FALSE/fixing-script essays and anticipates BSV's "Genesis" upgrade (Feb 2020) that re-enabled disabled opcodes; the single-use-key hygiene ties back to "Ensuring honest money" and the web-payments essay of the same week.
