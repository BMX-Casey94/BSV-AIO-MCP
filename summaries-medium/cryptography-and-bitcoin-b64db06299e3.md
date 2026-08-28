---
title: 'Cryptography and Bitcoin'
date: 2020-02-20
slug: cryptography-and-bitcoin-b64db06299e3
url: https://medium.com/@craig_10243/cryptography-and-bitcoin-b64db06299e3
themes: [privacy, identity, law-regulation, btc-critique]
---

# Cryptography and Bitcoin
**Date:** 2020-02-20 | **URL:** https://medium.com/@craig_10243/cryptography-and-bitcoin-b64db06299e3
**Subtitle:** Cryptography can be used to limit access, and may be restrictive. When a file is encrypted, it can only be accessed with the key. As such…

## Core thesis
An excerpt of a longer craigwright.net essay (the body continues on his personal blog) built on one technical distinction: Bitcoin uses no encryption whatsoever — transactions are clear text, hashes are integrity indexes, and only digital signatures are cryptographic. From this he argues Bitcoin is inherently compatible with law: traceable, seizable under court order, and designed for a privacy model in which transacting parties hold each other's verified identities while the public sees unlinkable records — the opposite of the anonymity BTC allegedly chased.

## Key arguments and claims
- "Bitcoin is not encrypted. All transactions are conducted, exchanged, and validated in clear text." A hash is "a secure method of producing an index to a file", analogous to a checksum — not an encryption algorithm.
- Immutability does not freeze records: "you can make changes by adding new records… It only adds additional records" — append-only correction "legally mandated across all public companies in the US", which underwrites court-ordered remediation.
- The white paper's "anonymous" carries the Black's Law Dictionary sense of "nameless", not identity-less; hierarchical key methodologies leverage "the homomorphic properties of ECDSA" so a registered identity key stays off the public exchange yet is provably linked to the transactor — key-distribution methods "we have been working on and patenting".
- Regulation applies on its own terms: transmissions above USD 10,000 trigger US reporting; business relationships above EUR 15,000 trigger customer due diligence. "Some people think that Bitcoin would be immune to such regulations. They are, sadly, deluded."
- Design motivation: trusted-third-party honeypots (the Target breach is named) fail catastrophically; Bitcoin distributes identity data "to the edges of the graph", raising the cost of attack.
- Law enforcement by design: a freezing order "could be applied to both an individual key and any transaction that branches from the key"; because nothing on-chain is encrypted, proceeds-of-crime legislation can be enforced without interference from nodes or exchanges.
- Keys are not ownership: citing *Armstrong DLW GMBH v Winnington Networks Ltd* (the carbon-credit EUA fraud), "merely owning keys… is insufficient to prove ownership of coins" where due diligence was inadequate.
- Autobiographical provenance: he modelled Bitcoin partly on the EU Allowances carbon-credit registries — from 2005 he ran a forestry programme and sought to register and trade credits; each member state's registry was "analogous to a Bitcoin node"; he built his own system to trace a virtual token without "double counting" — "'double-spending'" in the white paper's vocabulary.
- BTC broke the model: Core's derivatives "have completely broken the privacy model of Bitcoin, in an attempt to create an anonymous system that will facilitate crime using dark web servers" — yet "the built-in traceability associated with Bitcoin precludes such a scenario".
- End state: in full implementation, "Bitcoin is a system that significantly limits insider trading, tax evasion, money laundering, and cybercrime."

## How Craig reasons (his model/logic)
Technical-legal fusion: a precise cryptographic distinction (signature vs encryption vs hash) is used to collapse the "crypto means untraceable" assumption, then statutory thresholds (USD 10,000 / EUR 15,000), a dictionary definition (Black's Law on "anonymous") and case law (*Armstrong*) are layered on top. He also argues from autobiography — the 2005 forestry and carbon-credit episode — as design provenance, an evidence style mixing statute, precedent, lexicography and memoir.

## Where this contradicts BTC-mainstream logic
- "Bitcoin is encrypted and anonymous" popular belief: flatly denied — clear text, pseudonymous, and fully traceable.
- Cypherpunk privacy-as-anonymity: his "new privacy model" is unlinkability to the public combined with full counterparty identity — the inverse of dark-web anonymity, which he says BTC pursued and failed to reach.
- "Not your keys, not your coins": inverted — keys alone do not prove ownership; documented provenance and due diligence do.
- Immutability absolutism: the ledger can be lawfully corrected by appending new records, aligning the system with court orders rather than against them.

## Notable quotes
- "Bitcoin is not encrypted. All transactions are conducted, exchanged, and validated in clear text."
- "Some people think that Bitcoin would be immune to such regulations. They are, sadly, deluded."
- "merely owning keys, while having bitcoin registered on the distributed registry that is the blockchain, is insufficient to prove ownership of coins"
- "Bitcoin is a system that significantly limits insider trading, tax evasion, money laundering, and cybercrime."
- "at no point was Bitcoin ever intended for such purposes" (acting against courts and government)
- "As an additional firewall, a new key pair should be used for each transaction to keep them from being linked to a common owner" (quoting the white paper)

## Connections
Excerpt of the craigwright.net law-regulation essay of the same name; cites *Armstrong DLW GMBH v Winnington Networks Ltd* and quotes the white paper's privacy section; references patented key-distribution work (the nChain portfolio). The carbon-credit origin story recurs across his 2019–2020 autobiographical essays. Related Medium pieces: "Bitcoin is anything but anonymous", "Rights and Tracing", "Forget Anonymity".
