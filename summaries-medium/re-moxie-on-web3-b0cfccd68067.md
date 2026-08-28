---
title: 'Re: Moxie on Web3'
date: 2022-01-08
slug: re-moxie-on-web3-b0cfccd68067
url: https://medium.com/@craig_10243/re-moxie-on-web3-b0cfccd68067
themes: [governance-decentralisation, spv-light-clients, privacy, scaling-throughput]
---

# Re: Moxie on Web3
**Date:** 2022-01-08 | **URL:** https://medium.com/@craig_10243/re-moxie-on-web3-b0cfccd68067
**Subtitle:** On decentralization, servers and cryptography

## Core thesis
**Attribution caveat:** although filed under Craig Wright's Medium account, the body's internal evidence identifies the author as Mike Hearn, not Craig Wright: the narrator says his "first project when I joined the Bitcoin world was to work with Andreas Schildbach" on Bitcoin Wallet for Android, says "I started calling apps that used it SPV wallets and the name stuck", links his own 2016 "The resolution of the Bitcoin experiment" farewell post, speaks of Satoshi in the third person, and describes spending 2021 building an app-packaging tool (Hearn's Conveyor project). Craig Wright, who claims to be Satoshi, would not write any of this. The essay is a response to Moxie Marlinspike's "Web3: First Impressions": it agrees Ethereum is not meaningfully decentralised, but argues (1) Moxie conflates Ethereum with all blockchains — Bitcoin's SPV mode proved trustless mobile clients viable; and (2) Moxie's "centralised cryptography" (Signal/WhatsApp E2E) cannot bind an adversary who controls the client, as WhatsApp's 2019 forwarding limits demonstrated. It proposes threshold-signed updates with distributed auditors as an incremental fix, and better desktop/server developer tooling as the path back to user-run infrastructure.

## Key arguments and claims
- Ethereum "claims to be a decentralized ecosystem but isn't"; the "it's early days" excuse fails because "12 years is sufficient to have solved these problems".
- Moxie's server-centric critique ("All the network diagrams are of servers…") is "only actually true for Ethereum": Bitcoin had a light-client mode from day one, and Bitcoin Wallet for Android (built with Andreas Schildbach) was "built in the most decentralized way possible" with competitive UX and a large userbase.
- SPV mechanics: the client tells peers "please don't send me the contents of every block or transaction, I only want to see transactions matching a filter", downloads block headers only, selects the chain with the highest total work, and receives matching transactions with Merkle branches linking them to the header Merkle roots — minimal bandwidth/storage/CPU "whilst keeping the P2P network as an untrusted adversary". Bloom filters gave probabilistic privacy ("in practice, real users cared much more about performance").
- Ethereum "wasn't designed with resource consumption in mind (nor, frankly, ordinary commerce)"; its redesigned block contents "lost the ability to have mobile clients but also destroyed its own ability to scale through parallelism", whereas Bitcoin can parallelise and shard full-mode work.
- Conflating Ethereum, Bitcoin and "the block chain algorithm" produces false generalisations — "blockchains don't scale well", "blockchains can't have mobile clients" — when the truth is "Ethereum can't do those things".
- After "the Bitcoin community drank the kool-aid it collapsed as a medium of exchange"; interest and momentum moved to Ethereum/NFTs.
- The bold disagreement: "cryptography cannot impose any limits on an adversary that also controls the client doing the encryption. Centralized infrastructure that uses cryptography to defeat the centralized infrastructure is a contradiction in terms."
- WhatsApp could silently disable E2E tomorrow "without anyone even noticing, including Moxie himself"; Signal is open source but "there's no way to check that the client I'm using… actually matches that source code".
- WhatsApp's 2019 forwarding limits are "a total defeat of the Signal protocol's cryptographic objectives": a forwarding counter placed outside the encrypted message violates the principle that the same message encrypted twice must not encrypt to the same bytes (the AES/ECB analogy). "There was nothing anyone could do about this."
- "Centralized infrastructure can claim to provide privacy but can never provide control"; a blog post saying "we promise we don't log messages to disk" should carry equal weight to Signal's cryptography.
- Quick fix: threshold signatures — split the app-signing key into shards held by geographically distributed auditing firms with source access, so OS update mechanisms enforce a binary signed/not-signed decision encoding the app's social contract; auditors could refuse to sign an update that strips encryption. Residual risks: auditors are paid and chosen by the central authority; costs are update latency and dollars, but UX is unaffected.
- Against "People don't want to run their own servers, and never will": the first clause is true, the second "a prediction about the future, which is a notoriously difficult thing to predict". Counterexamples: BitTorrent, Gnutella, multiplayer game servers, AirDrop. The real causes are contingent: IPv4 exhaustion/NAT/firewalls, mobile energy constraints, and the "horrific usability" of the Linux/AWS/Kubernetes stack ("Consider how awkward it is to configure working backups for a new Linux server").
- The early-2000s "golden age" of home servers (Windows GUI server apps, plentiful IPv4, few NATs, mains-powered PCs) proves a different world is imaginable; Apple — local-first apps, Time Capsule backups, update rejection — is "an existence proof of what's technically possible" against centralised ChromeOS, despite having no pro-liberty philosophy.
- Way forward: make building and distributing desktop apps and one-machine servers radically easier — self-updating, signed and notarised cross-platform builds (MSIX on Windows, Sparkle on macOS, systemd packages on Linux), user-controllable updates, distribution outside app stores. The author spent most of 2021 building such a tool, announcement pending. "Make it easy for developers to do the right thing, and more of us will do it."

## How Craig reasons (his model/logic)
Not Craig's reasoning — see the attribution caveat. The author's method is an engineer's rebuttal: concede shared premises, isolate overgeneralisations, then supply existence proofs (Bitcoin Wallet for Android, BitTorrent-era home servers, Apple) and a falsifying case study (WhatsApp forwarding limits) against the claimed guarantees of centralised cryptography. It ends with incremental tooling rather than ideology: "These days I'm focused on finding incremental, non-radical paths forward. No more peer-to-peer networks for me."

## Where this contradicts BTC-mainstream logic
- Against 2022 Web3 orthodoxy: Ethereum's decentralisation is marketing, and E2E messaging privacy guarantees are weaker than advertised — both "advertised as" decentralised/private but "in practice… not".
- Against BTC's post-2017 store-of-value orthodoxy: the author laments that Bitcoin "collapsed as a medium of exchange" after the community "drank the kool-aid" — a critique from the big-block/payments camp, not from Craig Wright's position.
- Divergence from Craig Wright's own claims (critical for this corpus): Satoshi is discussed in the third person, SPV's naming is credited to the author, and Bitcoin's scaling is framed around parallelisation and sharding of full nodes — positions incompatible with Wright's authorship claim and his small-world/node-in-data-centre narrative. This post should not be mined as evidence of Craig's views; its presence under @craig_10243 is anomalous (repost or collection artefact).

## Notable quotes
- "cryptography cannot impose any limits on an adversary that also controls the client doing the encryption"
- "Centralized infrastructure can claim to provide privacy but can never provide control"
- "after the Bitcoin community drank the kool-aid it collapsed as a medium of exchange"
- "12 years is sufficient to have solved these problems"
- "People don't want to run their own servers, and never will" (quoted from Moxie, then disputed)
- "Make it easy for developers to do the right thing, and more of us will do it."

## Connections
Responds to Moxie Marlinspike's "Web3: First Impressions" (moxie.org, 7 January 2022) and his Signal post "The ecosystem is moving"; cites the WhatsApp forwarding-limits FAQ, the Wikipedia ECB article, and the author's own "The resolution of the Bitcoin experiment" (plan99.net, 2016). The essay originates from Mike Hearn's plan99.net blog; its relationship to the Wright corpus is that of an apparent misattribution or repost, and it sits oddly beside "The History of Freezing in Bitcoin" (April 2020), where Wright attacks Hearn's 2011 freeze-order post.
