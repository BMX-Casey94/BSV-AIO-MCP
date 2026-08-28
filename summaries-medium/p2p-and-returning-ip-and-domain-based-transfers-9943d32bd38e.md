---
title: 'P2P and returning IP and Domain based transfers'
date: 2018-11-09
slug: p2p-and-returning-ip-and-domain-based-transfers-9943d32bd38e
url: https://medium.com/@craig_10243/p2p-and-returning-ip-and-domain-based-transfers-9943d32bd38e
themes: [spv-light-clients, networking, satoshi-history, protocol-immutability]
---

# P2P and returning IP and Domain based transfers
**Date:** 2018-11-09 | **URL:** https://medium.com/@craig_10243/p2p-and-returning-ip-and-domain-based-transfers-9943d32bd38e
**Subtitle:** Bitcoin was designed to be used as Peer to Peer cash. When the original paper and node software was released, the system was created with…

## Core thesis
Bitcoin's original design had two payment paths — direct IP-to-IP transfer when the recipient is online (with comments and confirmation) and address-based sending when not — but Core removed IP-to-IP out of the ideological belief that every user must run a node. Craig announces that Bitcoin SV, with nChain's backing, will reintroduce IP/domain-based transfers done securely (DNSSEC, certificates) to restore true peer-to-peer exchange and SPV wallet communication.

## Key arguments and claims
- Quotes Satoshi's original announcement: "There are two ways to send money. If the recipient is online, you can enter their IP address and it will connect, get a new public key and send the transaction with comments. If the recipient is not online, it is possible to send to their Bitcoin address…" — with the address method's disadvantages (no comments, privacy loss on address reuse) noted by Satoshi himself.
- The address-only model that resulted "forms an expectation that you need to send to the network, that has come about through the myth of nodes not being miners" — he links an article claiming to have demonstrated this was wrong.
- Concedes the v0.1 implementation was bad: "The original version of IP-to-IP sending was rather insecure. The messaging was completed in clear text, and the clients did nothing to validate each other. It was open to MiTM (Man in the Middle) attacks and snooping" — but "the concept was good if the execution was off".
- Blames removal on ideology, not security: "the erroneous blind siding and blinker of thinking that Bitcoin was about all the people globally having to run a node, Core removed the feature, and worse, could not even comprehend a use for it."
- Consequence: "the inability of a few people, with an idea of what Bitcoin should be that was not what it is, led to the removal of an important part of the system and the lack of development of SPV wallets."
- The correct construction: "a secure domain identifier and DNSSec. With secured domains, the use of certificates would allow a merchant and client to communicate and exchange data" — unfinished work that "nChain has been busy" on: "This was always supposed to be fixed."
- Out-of-band messaging in IP-to-IP "allowed users and merchants to connect when needed and exchange information, invoices, and more."
- Commitment: "In the Bitcoin SV node software, we plan to start allowing the reintroduction of the various aspects of Bitcoin that have been removed… We seek to push for more SPV wallets and to allow these to communicate and send between each other."

## How Craig reasons (his model/logic)
Appeal to founding text: Satoshi's own words establish that direct party-to-party exchange (settled by miners) is the authentic design, making address-only relay the deviation. He separates concept from implementation (admitting the MiTM flaw while denying it justifies removal), offers the engineering fix (DNSSEC + certificate-based identity), and frames history revisionistically — features were lost to ideology, and restoring them is restoration, not change.

## Where this contradicts BTC-mainstream logic
- Contradicts the "everyone should run a full node" orthodoxy: that expectation is "the myth of nodes not being miners", and it actively damaged Bitcoin by killing IP-to-IP and SPV development.
- Contradicts the accepted rationale for removing IP-to-IP (insecure, abandoned): the flaw was fixable engineering, and removal reflected Core's inability "to even comprehend a use for it".
- Contradicts address-centric, broadcast-to-network payment flow as the norm: true P2P is parties exchanging transactions directly, with miners only settling.
- Contradicts SPV-is-second-class thinking: SPV wallets communicating directly are the intended end-user architecture.

## Notable quotes
- "There are two ways to send money. If the recipient is online, you can enter their IP address and it will connect, get a new public key and send the transaction with comments." (quoting Satoshi)
- "This forms an expectation that you need to send to the network, that has come about through the myth of nodes not being miners."
- "It was open to MiTM (Man in the Middle) attacks and snooping… the concept was good if the execution was off."
- "the inability of a few people, with an idea of what Bitcoin should be that was not what it is, led to the removal of an important part of the system and the lack of development of SPV wallets."
- "We intend to see this re-introduced into Bitcoin in a secure manner."

## Connections
Cites Satoshi's cryptography-mailing-list post (via web.archive.org) and the original Bitcoin v0.1 source (uibase.cpp on GitHub), and links the "Nodes" article published under the adam_selene handle. Part of the Bitcoin SV launch-week cluster with "Sun-setting P2SH" and "Fixing OP_False"; the SPV/direct-communication theme later materialises in his IPv6 essays ("IPv6 with CGA and Bitcoin", "Security in a world of IPv6 and Bitcoin") and nChain's SPV/paymail-adjacent work.
