---
title: "IPv6 with CGA and Bitcoin"
date: 2018-11-02
era: medium
slug: ipv6-with-cga-and-bitcoin-a761d0185d5d
themes: [networking, privacy, identity]
source: summaries-medium/ipv6-with-cga-and-bitcoin-a761d0185d5d.md
---

# IPv6 with CGA and Bitcoin — core principles

- **A network address can be bound to a public key.** A cryptographically generated address (CGA) is an IPv6 address tied to the host’s public key, by certificate or local configuration — the same structural idea as a Bitcoin address derived from a public-key hash.
- **Privacy with configurable accountability.** CGA delivers privacy while still allowing link administrators a level of validation; the pairing is the same balance claimed for Bitcoin (pseudonymous but traceable).
- **Ownership of the claimed address is provable.** Using CGA, the sender of a Neighbour Discovery message can be shown to be the owner of the address; each node generates a key pair before claiming, and the CGA option verifies the key.
- **The host ID is a hash of the public key.** In the common configuration, 62 bits store HASH62(public_key); a *sec* parameter can lengthen the hash to raise the cost of collision.
- **Manual keying is not the path.** Binding by local configuration or certificate is the designed route; SEND provisions defend many NDP attacks but were not widely deployed.
- **Identity is a public-key-bound token.** Addresses as key-bound identifiers with administrative accountability, not anonymous unowned names.
