---
title: 'IPv6 with CGA and Bitcoin'
date: 2018-11-02
slug: ipv6-with-cga-and-bitcoin-a761d0185d5d
url: https://medium.com/@craig_10243/ipv6-with-cga-and-bitcoin-a761d0185d5d
themes: [networking, privacy, identity]
---

# IPv6 with CGA and Bitcoin
**Date:** 2018-11-02 | **URL:** https://medium.com/@craig_10243/ipv6-with-cga-and-bitcoin-a761d0185d5d
**Subtitle:** IPv6 incorporates the new concept of privacy extended addresses. These are referred to as CGA (cryptographically generated addresses) and…

## Core thesis
A short technical note (the body ends mid-exposition, with no conclusion — it reads as an excerpt or truncated post) explaining cryptographically generated addresses: an IPv6 address bound to the host's public key, delivering privacy "whilst still providing a level of accountability and validation that can be configured by the link administrators". The Bitcoin connection is implicit and structural — a network address derived from a public-key hash mirrors Bitcoin's own address construction, fitting the series' IPv6-plus-Bitcoin architecture.

## Key arguments and claims
- CGA defined per RFC3972: "an IPv6 address, which is bound with the public key of the host where the protection can work via either certificate or local configuration"; manual keying "is difficult and not recommended".
- Authentication of neighbour discovery: "Using CGA we can ensure that the sender of an NDP (Neighbour Discovery Protocol) message is the owner of the claimed address" — each node generates a public/private key pair before claiming an address, "and the CGA option verifies this key", "reducing the success of several NDP attacks".
- SEND (Secure Neighbour Discovery) "provisions also allow us to defend against many NDP attacks, but as yet SEND is not widely deployed".
- The mechanism: "62 bits are used to store the cryptographic hash of a public key… the host ID = HASH62(public_key)".
- Tunable security: a "sec" parameter embedded "in the two rightmost bits of an 128-bit Ipv6 address allows the hash length to be increased in order to improve the security of the mechanism"; the CGA then has "the 64 + 20 x sec rightmost bits of the hash value equal the concatenation of 20 x sec zero bits and the interface identifier", ignoring the two rightmost bits and the universal/group bits on comparison.

## How Craig reasons (his model/logic)
This is Wright in protocol-specification mode: cite the RFC, define the primitive, then walk the bit-level construction (62-bit key hash, sec-parameter hash extension). The design value he emphasises is the pairing of privacy with configurable accountability — the same balance he repeatedly claims for Bitcoin itself (pseudonymous but traceable). Evidence style is standards-document exposition rather than argument; the excerpt stops before any polemical payoff.

## Where this contradicts BTC-mainstream logic
- No direct engagement with crypto orthodoxy in this excerpt — it is a standards tutorial. Its corpus significance is the implicit model of identity: addresses as public-key-bound tokens with administrative accountability, which runs against the "anonymous, permissionless, no-administrator" ideal of mainstream crypto discourse and anticipates his later "privacy is not anonymity" position.

## Notable quotes
- "A CGA [RFC3972] is an IPv6 address, which is bound with the public key of the host where the protection can work via either certificate or local configuration."
- "Using CGA we can ensure that the sender of an NDP (Neighbour Discovery Protocol) message is the owner of the claimed address."
- "In the most common configuration of CGA, 62 bits are used to store the cryptographic hash of a public key."
- "SEND is not widely deployed."

## Connections
Second instalment of the IPv6 security series announced the previous day in "Bitcoin as the Base layer" (which promised SEND/NDP explanations), and followed by "The Secure (Bitcoin) Internet" on 3 November. Cites RFC3972 (via a 2015 archive.org capture of ietf.org). The CGA concept — key-bound network identity — is a building block in his later claims that Bitcoin plus IPv6 enables end-to-end authenticated networking, a theme developed at length on craigwright.net.
