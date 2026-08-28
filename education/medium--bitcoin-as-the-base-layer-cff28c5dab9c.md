---
title: "Bitcoin as the Base layer"
date: 2018-11-01
era: medium
slug: bitcoin-as-the-base-layer-cff28c5dab9c
themes: [networking, security-economics, privacy]
source: summaries-medium/bitcoin-as-the-base-layer-cff28c5dab9c.md
---

# Bitcoin as the Base layer — core principles

- **IPv6 is the foundation under a Bitcoin internet.** It is not a mere addressing extension; it changes how systems are secured and is the network layer on which Bitcoin as a base protocol is meant to run.
- **Do cryptography once, at the protocol layer.** Mandatory host identification and authorisation in IPv6 make repeated application-layer stacks (SSL/TLS) redundant; each re-deployment adds avenues for mistakes.
- **Crypto is hard; the OS should do it once.** If identification and privacy are done in the operating system and not at each layer, the attack surface shrinks rather than multiplying under a “more layers” habit.
- **Address-space size kills random scanning.** A default /64 subnet has 2^64 addresses; exhaustive scanning becomes economically absurd, ending the random-scanning worm.
- **Privacy and accountability can coexist.** Privacy-extended cryptographically generated addresses (CGA) maintain privacy while allowing link administrators accountability; host IDs can serve as a token to access a network.
- **DNS becomes the reconnaissance target.** Public servers must remain reachable, so DNSSEC and denial of zone transfers become critical; attackers adapt to logs, zones and transit rather than brute-force scans.
- **Plan the new controls before they are exploited.** NDP must be secured with SEND; multicast all-nodes/all-routers groups should be filtered at the border; easy-to-remember or EUI-64 addresses recreate scannable patterns.
