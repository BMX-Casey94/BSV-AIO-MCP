---
title: 'Bitcoin as the Base layer'
date: 2018-11-01
slug: bitcoin-as-the-base-layer-cff28c5dab9c
url: https://medium.com/@craig_10243/bitcoin-as-the-base-layer-cff28c5dab9c
themes: [networking, security-economics, privacy]
---

# Bitcoin as the Base layer
**Date:** 2018-11-01 | **URL:** https://medium.com/@craig_10243/bitcoin-as-the-base-layer-cff28c5dab9c
**Subtitle:** Many people have seen IPv6 as a simple addressing extension to the existing internet and see few changes to the way we secure systems…

## Core thesis
Despite the title, the body never discusses Bitcoin directly: it is the opening lecture of an IPv6 security series (the "base layer" framing positions IPv6 as the foundation on which a Bitcoin-based internet will run). Wright argues that IPv6 is not a mere addressing extension but a wholesale change to network security — it kills random-scanning worms through sheer address-space size, makes DNS the prime reconnaissance target, and, through mandatory protocol-level cryptography, will "destroy the notion of application-based security" and render SSL/TLS redundant. Networks must plan for this now "or we will be left in the dust".

## Key arguments and claims
- IPv6 replaces ARP with ICMPv6-based NDP, which must be secured with SEND "or we will fall prey to the same class of attacks we faced in IPv4 over hub shared networks"; he promises follow-up posts explaining SEND and NDP.
- IPv6 improvements over IPv4 listed: expanded address space, extended routing hierarchy with auto-configuration, improved multicast scalability, simplified headers with optional extension headers, built-in authentication/privacy through encryption, source routing (SDRP), and QoS capabilities.
- Less-discussed security enhancements flagged for future posts: privacy-extended CGA (cryptographically generated addresses) that "maintain privacy" while allowing "accountability… by link administrators", and host IDs usable "as a token to access to a network".
- Random scanning dies: a default /64 subnet has 2^64 addresses, so "finding a host in an IPv6 network is 10 billion times more difficult than scanning the entire deployed IPv4 Internet"; at 1,000,000 addresses per second an exhaustive subnet scan takes "> 500,000 years", and "IPv6 spells the end of the random scanning worm".
- DNS becomes the recon vector: public servers must remain DNS-reachable, so "DNS will become even more of a target… DNSSec is critical now"; zone-transfer and interception attacks will rise, and "it is about time we start to deny DNS zone transfers".
- Human weakness persists: administrators adopting easy-to-remember addresses (::1, ::2, ::53, or reusing the IPv4 last octet) recreate scannable patterns; EUI-64 addresses embed a guessable vendor MAC whose 48 bits "are not random".
- Multicast groups are a new attack surface: all-nodes (FF02::1), all-routers (FF05::2) and all-DHCP-servers (FF05::5) addresses let an attacker enumerate key resources, so these "are filtered at the border… set as a default if no IPv6 multicasting is enabled".
- "The death of SSL": IPv6 carries mandatory cryptographically based host identification and authorisation, which "makes SSL, TLS, and other protocol redundant"; application-layer crypto redeploys the same requirements repeatedly, and "each time we re-deploy the same crypto requirements over and over, we add more avenues for mistakes. Crypto is hard. If we can do it once in the O/S and not at each layer, we all win."

## How Craig reasons (his model/logic)
Wright writes as the security architect lecturing practitioners: enumerate the protocol mechanics (NDP, SEND, CGA, multicast scopes), quantify the attack-economics shift (scanning cost rising by orders of magnitude), and draw the managerial conclusion that risk must be managed "before they grow to large". His method is defence-planning realism — assume attackers adapt (harvesting addresses from logs, DNS zones and compromised transit routers) rather than relying on the obscurity of a large address space. The rhetorical mode is urgency: deploy the new controls now or "these will be exploited before we even note that they are a concern".

## Where this contradicts BTC-mainstream logic
- No direct engagement with BTC orthodoxy in this excerpt — the content is pure network-security doctrine. Its relevance to the Bitcoin corpus is architectural: the claim that crypto belongs in the protocol layer, "done once in the O/S and not at each layer", mirrors his recurring argument that Bitcoin scales as a base layer with IPv6 rather than through bolted-on application-layer fixes (the same logic he applies against Lightning).
- Implicitly contradicts the "more layers, more security" habit of web-era engineering: redundancy of encryption stacks is reframed as multiplied attack surface, not defence in depth.

## Notable quotes
- "IPv6 will change the way we think about security. We need to start planning now or we will be left in the dust."
- "IPv6 spells the end of the random scanning worm."
- "DNS will become even more of a target than it ever has been… DNSSec is critical now."
- "This makes SSL, TLS, and other protocol redundant."
- "Crypto is hard. If we can do it once in the O/S and not at each layer, we all win."
- "IPv6 can make us more secure, but only if we do it right."

## Connections
First instalment of a promised IPv6 security series ("I will explain what SEND and NDP are in the next couple of posts this week"), continued the following day in "IPv6 with CGA and Bitcoin" and "The Secure (Bitcoin) Internet", and prefigured by "Security in a world of IPv6 and Bitcoin" (October 2018). Cites RFC5157 on IPv6 scanning implications. The IPv6-plus-Bitcoin-as-base-layer vision later becomes a staple of his craigwright.net writing and nChain patent narrative.
