---
title: 'Security in a world of IPv6 and Bitcoin'
date: 2018-10-03
slug: security-in-a-world-of-ipv6-and-bitcoin-a31592b4f9ac
url: https://medium.com/@craig_10243/security-in-a-world-of-ipv6-and-bitcoin-a31592b4f9ac
themes: [networking, security-economics, micropayments]
---

# Security in a world of IPv6 and Bitcoin
**Date:** 2018-10-03 | **URL:** https://medium.com/@craig_10243/security-in-a-world-of-ipv6-and-bitcoin-a31592b4f9ac
**Subtitle:** We are starting to move to IPv6 and the cloud. Right now, the uptake is minimal at best with very few early adopters for all of the hype…

## Core thesis
Enterprise security is migrating from the "crunchy shell" perimeter-firewall model to end-to-end encrypted, policy-controlled IPv6 networks where every host is individually firewalled and mobile — and Bitcoin (BCH) slots into this architecture as the native payment channel, yielding "a path to Internet of Value on demand". The essay is mostly a practical Windows/Group Policy security blueprint, framed by the prediction that IP addressing will be embedded in everything and that BCH "will be the exchange system for everything".

## Key arguments and claims
- IPv6 and cloud uptake is currently "minimal at best" despite the hype, but "the climate is changing. Soon, IP addresses will be on everything. More, Bitcoin (BCH) will be the exchange system for everything."
- Network systems sit on "an exponential growth curve" — exponentially cheaper, incrementally more powerful — driving applications not yet imagined; cited near-term examples with "serious money already behind them": $1 disposable communication tablets (droppable into places like Iran to defeat filtering), IP/RFID-tagged supermarket goods (milk, Coke cans) integrated with smart appliances and stock control, and web-addressable light bulbs (already available).
- "The catch-cry of the 21st century will be, Anytime, Anywhere."
- IPv6, done correctly, "can make for extremely secure networks"; secure mobile networking is already achievable via Group Policy on Linux/Mac, and is harder under IPv4 due to protocol constraints and the nature of DHCP versus DHCPv6. He restricts the walkthrough to Windows "as it becomes far too complicated" otherwise, pointing to Microsoft's published IPv6 implementation and Group Policy guides.
- Core architecture: use Group Policy to set clients to communicate only over encrypted sessions and only with trusted servers — because "client peer-to-peer communications can be a means of malware dissemination" and there is rarely a legitimate need for direct client-to-client traffic.
- Mobile users are forced to communicate with company servers; with disk encryption, IPv6 + IPsec and the right controls, "each and every host is firewalled", and untrusted hosts are dropped by policy and host firewall rules (assuming keys are uncompromised).
- DaaS (Desktop as a Service) with keyed tablets hardens this further: the desktop lives in a data centre, so users "are never actually on the system" — local physical-escalation attacks are neutralised, and a lost tablet yields at most a key to a remote desktop that still requires authentication, with no data loss "if configured correctly".
- Because all sessions are encrypted and restricted to the tablet and organisational servers, user location is irrelevant — true mobility "as IPv6 allows" — while the organisation keeps control of Internet access through its proxy and email servers. "With flags in IPv6, we just happen to be able to integrate the payment of all this."
- Conclusion: "a well defined and deployed cloud and IPv6 system can actually be far more secure than the traditional crunchy shell-firewall model", and "with IPv6 jumbo blocks and BCH as a payment channel… We have a path to Internet of Value on demand."

## How Craig reasons (his model/logic)
Practitioner systems-engineering reasoning rather than legal or economic argument: threat models (malware via peer-to-peer client traffic, physical device loss, local privilege escalation) are matched to concrete controls (Group Policy, IPsec, host firewalls, DaaS, proxies). The framing is extrapolative — exponential cost curves and ubiquitous addressing — used to position Bitcoin as the payment primitive of the coming network architecture, asserted rather than argued.

## Where this contradicts BTC-mainstream logic
- Contradicts the scaling-sceptic orthodoxy that Bitcoin cannot serve as a universal machine-to-machine payment layer: Craig casually assumes BCH as "the exchange system for everything", including per-packet or per-session network payments via IPv6 flags and jumbo blocks — the micropayment Internet-of-Value vision that BTC fee-market doctrine rejects.
- Contradicts the perimeter-security orthodoxy of enterprise IT (adjacent to crypto's "trust nothing centralised" instinct in reverse): centralised policy control, proxies and data-centre desktops are presented as *more* secure, not less — mirroring his broader view that controlled, accountable infrastructure beats decentralisation for its own sake.
- Implicitly against the "on-chain coffee" objection culture: the endgame is payments integrated at the network layer, not a settlement-only chain.

## Notable quotes
- "Soon, IP addresses will be on everything. More, Bitcoin (BCH) will be the exchange system for everything."
- "The catch-cry of the 21st century will be, Anytime, Anywhere."
- "In a large organisation, client peer-to-peer communications can be a means of malware dissemination."
- "A well defined and deployed cloud and IPv6 system can actually be far more secure than the traditional crunchy shell-firewall model."
- "Now, with IPv6 jumbo blocks and BCH as a payment channel… We have a path to Internet of Value on demand."

## Connections
Sits in the early-October 2018 run of posts blending Craig's infosec-consulting background with BCH advocacy ahead of the Nov 2018 split; the IPv6-plus-Bitcoin payment vision later became a recurring craigwright.net theme (IPv6 multicast, per-packet micropayments). Links to Microsoft TechNet IPv6/Group Policy implementation guides via Wayback captures.
