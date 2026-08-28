---
title: 'The Secure (Bitcoin) Internet'
date: 2018-11-03
slug: the-secure-bitcoin-internet-2f589d81890f
url: https://medium.com/@craig_10243/the-secure-bitcoin-internet-2f589d81890f
themes: [networking, security-economics, privacy]
---

# The Secure (Bitcoin) Internet
**Date:** 2018-11-03 | **URL:** https://medium.com/@craig_10243/the-secure-bitcoin-internet-2f589d81890f
**Subtitle:** We see many sites moving more and more to application level encryption such that they can protect the transport of sensitive data.

## Core thesis
IPv6 is "THE killer application for SSL": because IPsec with mandatory cryptographic algorithms is built into the protocol rather than bolted on at the application layer, ubiquitous IPv6 deployment makes SSL/TLS redundant. Businesses with end-point encryption and authentication at layer three "will not bother with the notion of application-layer security" — SSL, "flawed… from the start", dies a slow death as IPv6 replaces the IPv4 stack host by host. As with the rest of this series, Bitcoin appears only in the title's framing of the coming architecture, not in the body.

## Key arguments and claims
- The structural difference: "IPSec is tacked onto IPv4, whereas it is fundamental to IPv6. The standards require mandatory IPSec (with all the associated crypto code), it is not just an add-on. IPv6 requires crypto." Endpoint authentication, "overlooked in IPv4", is also provided.
- The kill condition for SSL is modest: IPv6 need only "be as effective as SSL or better" and "have a wide deployment" — and IPv6 guarantees the latter, making IPsec "deployed far wider than SSL ever was".
- Centralised network crypto beats per-application crypto: "Crypto is difficult. Developers make mistakes again and again in implementing crypto. The centralised control and deployment of 'network crypto' is a good thing."
- SSL is beyond repair: "SSL is flawed — it was from the start, and it remains flawed. This point is moot as it would be difficult to make the protocol worse." (He links the 2011 BEAST-against-PayPal Register article as evidence.)
- Authentication without encryption is possible: IPsec's AH headers "can provide integrity and end-point authentication without the overhead of encryption" for situations "where encryption is prohibited or prohibitively expensive"; Intel's on-CPU AES processing will "greatly alleviate the costs of encryption" for most machines.
- CGA privacy addresses and multiple addresses per node break SSL's assumptions: "we will expect multiple addresses per node, so 'who needs spoofing?'… The combination of multiple IP addresses and CGA makes a difficult time for existing implementations of SSL. We could determine to try and fix SSL, but the issue here is simply why?"
- The protocol inventory: Authentication Header (AH, RFC4302) and Encapsulating Security Payload (ESP, RFC4303), Security Associations per RFC4301, mandatory algorithms per RFC4835 and IKEv2 per RFC4307 — "IPv6 already has a tunnelling and transport encryption protocol incorporated that has to be deployed. Why have SSL embedded within IPSec?"
- AH provides integrity, data-origin authentication and optional anti-replay; ESP adds confidentiality ("NOT recommended without integrity"); implementations "MUST support ESP and MAY support AH"; each SA entry sits in a Security Association Database with a 64-bit anti-replay counter.
- RFC4941's stateless auto-configuration gives hosts global-scope addresses that change over time while keeping a constant interface ID — which "facilitates the tracking of individual devices", strengthening the case that network-layer identity supersedes application-layer certificates.
- The business logic: "Why would a business have both a secure and an open website? Why would they implement separate controls for email, the web, file sharing, and all other applications they run."

## How Craig reasons (his model/logic)
Wright argues by substitution economics: define the incumbent's function, show the new layer delivers the same function mandatorily and ubiquitously, and conclude the incumbent is redundant — "why bother with SSL?" becomes a refrain. His evidence style is standards-citation (six RFCs enumerated) plus attack-of-record (BEAST) plus hardware trend (Intel AES-NI). The deeper model is his repeated engineering doctrine: implement security once at the correct layer rather than re-implementing it badly at every layer above.

## Where this contradicts BTC-mainstream logic
- No direct engagement with BTC protocol politics; the target is web-security orthodoxy. The transferable contradiction is his layer-purism: just as he holds encryption belongs in the network protocol, not in each application, he holds Bitcoin's base layer should carry functionality that BTC mainstream pushes to second layers — the same anti-bolt-on logic he deploys against Lightning.
- Contradicts the defence-in-depth truism that more independent encryption layers are always better: redundant crypto stacks are reframed as multiplied implementation risk ("more avenues for mistakes").

## Notable quotes
- "IPv6 is THE killer application for SSL. Not that SSL needs help, it is flawed."
- "IPSec is tacked onto IPv4, whereas it is fundamental to IPv6… IPv6 requires crypto."
- "Crypto is difficult. Developers make mistakes again and again in implementing crypto."
- "SSL is flawed — it was from the start, and it remains flawed."
- "We will expect multiple addresses per node, so 'who needs spoofing?'"
- "SSL is flawed, but at least we can see a slow death as the uptake of IPv6 replaces the existing IP stacks host by host."

## Connections
Third instalment of the IPv6 series begun with "Bitcoin as the Base layer" (1 November) and "IPv6 with CGA and Bitcoin" (2 November), delivering the promised depth on "the death of SSL" trailed in the first post. Cites RFCs 4301, 4302, 4303, 4307, 4835 and 4941, plus archived Register and cpu-wars articles. The network-layer-security thesis underpins his later IPv6+Bitcoin end-to-end vision promoted through nChain and craigwright.net.
