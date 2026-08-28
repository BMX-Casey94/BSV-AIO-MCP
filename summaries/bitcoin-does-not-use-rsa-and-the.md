---
title: "Bitcoin Does Not Use RSA — And the Quantum Machine That Would Attack It Does Not Exist"
date: 2026-04-10
slug: bitcoin-does-not-use-rsa-and-the
url: https://singulargrit.substack.com/p/bitcoin-does-not-use-rsa-and-the
themes: [quantum-scepticism, wallets-keys, property-rights, security-economics]
---

# Bitcoin Does Not Use RSA — And the Quantum Machine That Would Attack It Does Not Exist
**Date:** 2026-04-10 | **URL:** https://singulargrit.substack.com/p/bitcoin-does-not-use-rsa-and-the
**Subtitle:** Bitcoin uses a digital signature algorithm. It encrypts nothing. The quantum threat to it is built on a computer that has never been built, using a logical qubit that has never existed.

## Core thesis
The public quantum-threat narrative about Bitcoin is fraudulent twice over: it misdescribes the primitive (Bitcoin uses ECDSA signatures over secp256k1 and encrypts nothing, so there is no ciphertext to "decrypt"), and it invokes a fault-tolerant machine that has never existed. Yet the exposure map is real and stratified — some output classes are permanently exposed — so honesty requires holding both truths: the machine is fraud; the exposure is not.

## Key arguments and claims
- Bitcoin's security rests on verifiable authorisation via the Elliptic Curve Digital Signature Algorithm on secp256k1, not on secrecy. The ledger, transaction graph, and balances are public. The hypothetical attack is private-key recovery enabling signature forgery — not decryption. The phrase "quantum computers will decrypt Bitcoin" should disqualify its speaker.
- Shor's algorithm is real mathematics; the fraud is the illicit conversion of theorem into machine — treating a resource estimate as a build sheet while the conditional clause ("if a cryptographically relevant fault-tolerant quantum computer existed") is smuggled out of public discussion.
- No logical qubit exists as a stable computational unit that survives noise and does work without postselection. "One cannot stack a thousand absent things and call them a roadmap."
- Attacking secp256k1 is estimated at roughly 2,330 logical qubits and ~126 billion Toffoli gates — fewer logical qubits than the ~20,000 headline figure for RSA-2048. Therefore the slogan "we are nowhere near breaking RSA" implies nothing reassuring about Bitcoin; those repeating it have borrowed a talking point instead of doing the arithmetic.
- Translated to physical hardware, the numbers are grotesque: a ten-minute in-flight transaction attack needs ~1.9 billion physical qubits; a one-hour attack ~317 million; even a one-day attack on already-exposed keys ~13 million. Against Bitcoin's ten-minute average block interval, mempool interception is "a civilisation-scale machine conjured into conversation".
- Exposure is stratified, not universal. Roughly 6–7 million BTC have no meaningful time-window protection once the machine exists; roughly 13 million BTC remain hash-protected until spend.
- P2PK outputs — including Satoshi-era coins — carry their public keys openly in the locking script: no race, no timing problem; the only barrier is the machine's non-existence. Address reuse converts P2PKH/P2WPKH hash protection into permanent exposure, an estimated 4–5 million BTC downgraded by "human indiscipline embedded in the chain itself".
- Clean hashed outputs are protected by SHA-256 and RIPEMD-160 only until spend, when the public key enters the mempool and a race window opens. Grover's algorithm is no saviour for panic merchants: Grover-reduced SHA-256 still offers ~128-bit effective security.
- The economics humiliate the apocalypse: a one-day, 13-million-qubit attack at ~10 W per qubit implies ~130 MW continuous draw before capital, cooling, and fabrication. Even an existing machine would mean selective, state-scale targeting of large dormant balances — not effortless universal theft. "Universal destiny raises more money than selective strategic capability."
- The governance trap: Satoshi's permanently exposed P2PK coins cannot be migrated by an absent owner. Either the network leaves them spendable by a future key-recoverer, or it freezes/burns them by consensus — arrogating power over dormant property and destroying the myth that the network never discriminates among UTXOs. A constitutional crisis waits behind the engineering fantasy.

## How Craig reasons (his model/logic)
Mechanism-first analysis: state the correct cryptographic primitive before assessing any threat; then taxonomy over universals (stratifying output classes by exposure condition); then order-of-magnitude engineering and energy arithmetic; finally constitutional-institutional reasoning about what migration proposals would do to property neutrality.

## Where this contradicts BTC-mainstream logic
- Against mainstream panic ("quantum will decrypt Bitcoin"): wrong primitive, nonexistent machine, absurd resource numbers.
- Against mainstream complacency ("nowhere near RSA, so Bitcoin is safe"): secp256k1's logical-qubit threshold is lower than RSA-2048's, so the borrowed talking point proves nothing.
- Against the slogan "safe until spent": hash protection ends at the moment of spend, and address reuse destroys it permanently.
- Against quantum-migration proposals that would freeze or burn exposed outputs: they constitute collective adjudication of private property, contradicting the neutrality Bitcoin claims — a position that cuts against both panic-mongers and protocol-tinkerers.

## Notable quotes
- "There is nothing to decrypt."
- "Zero is not the first rung of a ladder to a million. Zero is the absence of the ladder."
- "The machine is fraud, but the exposure map is not."
- "The rhetoric of sovereignty is always splendid until one notices how many people exercise their sovereignty by behaving like fools."

## Connections
The culmination of the quantum series, applying the fraud essay's absent-logical-qubit foundation, the encryption essay's Gidney resource arithmetic, and the timescale essay's cascade to Bitcoin's specific signature scheme. The Satoshi-coins governance trap links directly to the corpus's recurring property-rights and protocol-immutability themes.
