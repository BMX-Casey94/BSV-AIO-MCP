---
title: 'Bitcoin''s privacy model'
date: 2018-12-11
slug: bitcoins-privacy-model-7ef7e79caf9f
url: https://medium.com/@craig_10243/bitcoins-privacy-model-7ef7e79caf9f
themes: [privacy, wallets-keys, identity, scaling-throughput]
---

# Bitcoin’s privacy model
**Date:** 2018-12-11 | **URL:** https://medium.com/@craig_10243/bitcoins-privacy-model-7ef7e79caf9f
**Subtitle:** Bitcoin has a remarkably simple yet robust privacy model at scale.

## Core thesis
Section 10 of the white paper defines a simple privacy model — public transactions unlinked from identities, with keys never reused — that is more robust than the traditional banking model it replaces. Privacy at scale comes from key hygiene, coin splitting and SPV, not from mixing or anonymity overlays; Lightning, Plasma and custodial processors merely recreate the fragile trusted-third-party model Bitcoin was designed to eliminate.

## Key arguments and claims
- Traditional model: a trusted third party (bank) sees every transaction, so "any breach is catastrophic" and PII leakage enables identity theft — "a system that is fragile by design".
- Banks and card networks monetise behavioural data: "Your information is the most valuable thing a bank has right now, and this is why they oppose Bitcoin" — this data value is why "we have seen Bitcoin hijacked" by teams insisting it is insecure or not private.
- BitPay, Coinbase and "most Bitcoin corporate systems today" replicate the old TTP model, as do Lightning and Plasma: "It is not what Bitcoin was designed to be."
- P2P means person-to-person, not node-to-node: the payer "never even needs to be online" and requires neither a node nor an IP address (NFC, headers-only SPV); miners enter only when the receiver broadcasts.
- Core mechanism: never reuse keys. One-time keys act as "a security and privacy firewall" and can be discarded after signing; address reuse is what enables dust/"spam" tracking attacks — if no one kept old keys, dusting would be worthless.
- Coin splitting (white-paper Section 9): split a 2.0 BSV coin into many UTXOs before shopping for fees of "fractions of a cent", then spend multiple coins in a single block without unconfirmed chains, "allowing SPV to function well"; randomised split values make linkage exponentially harder.
- Merchant privacy: a new address per transaction hides sales volumes from competitors; at Walmart scale (~15 million transactions/day, ~400 tps in operating hours) analysis is infeasible — "there is not a single HPC (Supercomputer) in existence that could analyse the Bitcoin blockchain to match coins from unknown sources", yet the system remains "completely traceable (for example in a tax audit) with a minimum search time".
- Identity layer: an attested root public-private key pair (even PKI-bound) can derive linked sub-keys per use, combining registered identity with per-transaction privacy (cites patent EP3268914B1).
- Core opposes Section 9-style combining and splitting "because they oppose scaling Bitcoin. With more transactions, the system is larger and also more private."

## How Craig reasons (his model/logic)
Exegesis of the white paper (Sections 9–10) read through economic incentives: privacy is an emergent property of scale plus disciplined key hygiene, not cryptographic obfuscation. He contrasts institutional data economics (why banks hoard data) with protocol design, and supports the claims with his patent portfolio and back-of-envelope throughput figures.

## Where this contradicts BTC-mainstream logic
- Contradicts the "Bitcoin is anonymous — use mixers or privacy coins" orthodoxy: privacy is achieved without anonymity technology.
- Contradicts the full-node-for-everyone ethos: users need only headers/SPV — "Bitcoin is designed to be a commercial system and not simply a bunk of Raspberry Pi machines".
- Contradicts the small-block position: more transactions mean more privacy, so opposing scaling is anti-privacy.
- Contradicts Lightning/L2 scaling narratives: LN and Plasma are cast as recreations of the trusted-third-party banking model.
- Contradicts chain-analysis fatalism in both directions: at scale the ledger is practically unanalysable by adversaries yet cheaply auditable by legitimate key-holders.

## Notable quotes
- "P2P is not about nodes nor mining. P2P is person to person."
- "The result is a system that is fragile by design."
- "The key idea is that we do not re-use keys."
- "Your information is the most valuable thing a bank has right now, and this is why they oppose Bitcoin."
- "there is not a single HPC (Supercomputer) in existence that could analyse the Bitcoin blockchain to match coins from unknown sources, and at the same time, the system is completely traceable"
- "The key to making Bitcoin work well is not to add complexity, but to use it as it was originally designed."

## Connections
Direct companion to "Instant transactions" (linked in-body) and a technical development of the private-not-anonymous doctrine from "Why Silk Road was an abyss" (previous day). Cites nChain patent EP3268914B1 for hierarchical key derivation; the Walmart throughput figure and anti-Raspberry-Pi jab tie into his scaling essays of the era.
