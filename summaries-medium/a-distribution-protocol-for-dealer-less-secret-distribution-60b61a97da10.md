---
title: 'A distribution protocol for dealer-less secret distribution'
date: 2018-10-17
slug: a-distribution-protocol-for-dealer-less-secret-distribution-60b61a97da10
url: https://medium.com/@craig_10243/a-distribution-protocol-for-dealer-less-secret-distribution-60b61a97da10
themes: [wallets-keys, security-economics, intermediaries]
---

# A distribution protocol for dealer-less secret distribution
**Date:** 2018-10-17 | **URL:** https://medium.com/@craig_10243/a-distribution-protocol-for-dealer-less-secret-distribution-60b61a97da10
**Subtitle:** In this post I again preview a paper written a couple years ago, but not yet published. The first draft of this paper dates to July 2016…

## Core thesis
A one-paragraph preview of an unpublished paper (first drafted July 2016, posted to SSRN): as bitcoin's value rises, centralised key-holding systems will keep suffering Mt Gox- and Bitfinex-scale failures, so Craig proposes dealer-less distributed key generation with threshold ECDSA — splitting private keys into shares with no centralised control — to remove any single point of failure in Bitcoin signing.

## Key arguments and claims
- The paper previewed dates to July 2016 and is available on SSRN (abstract_id=3265164); Craig stresses its vintage, implicitly staking priority.
- Threat model: "As the value of bitcoin increases, more incidents such as those involving Mt Gox and Bitfinex will occur in standard centralised systems" — exchange hacks are an economic inevitability of centralised key custody, not mere operational bad luck.
- The scheme: "group-based threshold cryptography with the ability to be deployed without a dealer and which supports the non-interactive signing of messages" — private keys are divided into shares distributed "to individuals and groups".
- It "creates a distributed-key-generation system for bitcoin that removes the necessity for any centralised control list minimising any threat of fraud or attack".
- Technical claim: extending threshold DSA to ECDSA yields "an entirely distributive signature system for Bitcoin that mitigates against any single point of failure".
- Combined with "retrieval schemes involving CLTV and multisig wallets", the solution is "infinitely extensible and secure"; group- and ring-based constructions additionally allow "blind signatures against issued transactions".

## How Craig reasons (his model/logic)
Abstract-style research announcement: problem (centralised custody failures), construction (dealer-less DKG + threshold ECDSA), claimed properties (no single point of failure, non-interactive signing, extensibility via CLTV/multisig, blind signatures via ring systems). Evidence is by citation to his own unpublished SSRN paper rather than demonstration here; the July 2016 dating does double duty as a priority claim amid his patent and authorship campaigns.

## Where this contradicts BTC-mainstream logic
- Against exchange-centric custody norms: the fix for Mt Gox/Bitfinex is not better exchanges but eliminating "any centralised control" over keys via threshold schemes.
- Against the "not your keys, not your coins" single-key orthodoxy: security comes from distributing shares of a key across groups, not from an individual guarding one seed — key management becomes an organisational, not personal, discipline.
- Contrasts with the era's multisig status quo: he positions dealer-less DKG with non-interactive signing as strictly superior to plain multisig (developed at length in the companion DAC overview, where 501-of-1000 multisig is dismissed as too large for standard transactions).

## Notable quotes
- "As the value of bitcoin increases, more incidents such as those involving Mt Gox and Bitfinex will occur in standard centralised systems."
- "We have created an entirely distributive signature system for Bitcoin that mitigates against any single point of failure."
- "This scheme creates a distributed-key-generation system for bitcoin that removes the necessity for any centralised control list minimising any threat of fraud or attack."
- "Using Group and ring-based systems we can implement blind signatures against issued transactions."

## Connections
The SSRN paper (3265164, drafted July 2016) belongs to the same 2016 nCrypt-era research batch as the state-machine white papers previewed the previous day, and supplies the key-sharing machinery assumed by "Blockchain-Based Decentralised Autonomous Corporations: An Overview" (published the same day), where Shamir-style threshold shares let autonomous agents sign without any single keyholder.
