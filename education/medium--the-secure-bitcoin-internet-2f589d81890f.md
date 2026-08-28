---
title: "The Secure (Bitcoin) Internet"
date: 2018-11-03
era: medium
slug: the-secure-bitcoin-internet-2f589d81890f
themes: [networking, security-economics, privacy]
source: summaries-medium/the-secure-bitcoin-internet-2f589d81890f.md
---

# The Secure (Bitcoin) Internet — core principles

- **IPsec is fundamental to IPv6, not an add-on.** IPv4 tacks crypto on; IPv6 requires mandatory cryptographic algorithms and endpoint authentication at the network layer.
- **Do security once at the correct layer.** If layer-three encryption and authentication are ubiquitous, businesses will not bother with a separate application-layer stack for each service.
- **Centralised network crypto beats per-application crypto.** Crypto is difficult; developers repeat mistakes. Deploying it once in the network stack reduces implementation risk.
- **Authentication need not mean encryption.** IPsec Authentication Headers can give integrity and end-point authentication without the overhead of encryption where encryption is prohibited or too expensive.
- **Multiple CGA addresses break certificate assumptions.** Nodes will have many addresses that change over time; network-layer identity supersedes application-layer certificates, and RFC4941’s changing global addresses still keep a constant interface ID that can track a device.
- **One secure fabric, not a secure site and an open site.** Separate controls for email, web and file-sharing become unnecessary if the network already authenticates and protects the path.
- **The same layer-purism applies to Bitcoin.** Function belongs on the base protocol, not bolted on above it — the engineering doctrine that security and money should be implemented once, correctly, at the right layer.
