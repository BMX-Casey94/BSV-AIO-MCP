---
title: "P2P and returning IP and Domain based transfers"
era: medium
date: 2018-11-09
slug: p2p-and-returning-ip-and-domain-based-transfers-9943d32bd38e
themes: [spv-light-clients, networking, satoshi-history, protocol-immutability]
source_summary: summaries-medium/p2p-and-returning-ip-and-domain-based-transfers-9943d32bd38e.md
url: https://medium.com/@craig_10243/p2p-and-returning-ip-and-domain-based-transfers-9943d32bd38e
---

# P2P and returning IP and Domain based transfers — core principles

- **Original Bitcoin had two payment paths.** From Satoshi's release announcement: if the recipient is online, you enter their IP address, connect, get a new public key and send the transaction with comments; if the recipient is not online, you send to their Bitcoin address.
- **Address-based sending is the degraded fallback.** Satoshi himself noted the address method's disadvantages: no comments, and privacy loss when addresses are reused.
- **Direct party-to-party exchange is the P2P design.** Payer and payee exchange the transaction directly and miners settle it; the broadcast-to-network, address-only flow grew from the mistaken belief that every user must run a node — the myth of nodes not being miners.
- **Concept versus execution: v0.1 IP-to-IP was insecure but fixable.** The original messaging was cleartext with no client validation, open to man-in-the-middle attack and snooping — a flaw in the implementation, not the concept, so the remedy was engineering rather than removal.
- **Secure identity makes IP/domain transfers safe.** A secure domain identifier with DNSSEC, plus certificates, lets a merchant and client authenticate one another and exchange data safely.
- **Out-of-band messaging carries the commercial layer.** Direct connections let users and merchants connect when needed and exchange information, invoices and more alongside the payment.
- **SPV wallets are the intended end-user architecture.** Light wallets that communicate directly with each other and with merchants — not universal full-node operation — are how end users were meant to transact.
