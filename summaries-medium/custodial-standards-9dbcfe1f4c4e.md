---
title: 'Custodial standards'
date: 2019-05-10
slug: custodial-standards-9dbcfe1f4c4e
url: https://medium.com/@craig_10243/custodial-standards-9dbcfe1f4c4e
themes: [law-regulation, audit-accounting, wallets-keys, intermediaries]
---

# Custodial standards
**Date:** 2019-05-10 | **URL:** https://medium.com/@craig_10243/custodial-standards-9dbcfe1f4c4e
**Subtitle:** In the credit card industry, there is a security framework known as PCI-DSS. It represents really a minimal security level for anyone…

## Core thesis
The cryptocurrency industry must adopt PCI-DSS-style minimum security standards for custodial systems. Craig argues that most reported exchange "hacks" are actually internal embezzlement enabled by absent logging, that the EU's MLD5 directive will legally force custodial compliance by January 2020, and that Bitcoin (BSV) itself can anchor immutable audit logs so attackers can no longer delete evidence — professionalising a "cowboy industry".

## Key arguments and claims
- PCI-DSS "represents really a minimal security level for anyone running anything that accepts and stores other people's money online"; he will push for the same as a minimum standard in crypto, citing his own background: "I was a PCI, web-security, and code auditor" (linking his GIAC certified-professional page).
- "For every so-called exchange hack, 99 of the hundred reported occurrences are internal and cases of embezzlement. Of course, it becomes easy to blame a hacker when you have no required logs."
- Technical alternatives exist: nChain's "safe wallet" threshold-key storage keeps keys off servers; where funds sit on centralised servers ("as with Bitfinex, Binance, and Mt. Gox"), providers must answer how they protect customer money.
- Regulatory deadline: Europe's MLD5 (Directive 2018/843) takes force "at the latest in January next year" — and "every single crypto-only exchange such as Binance is a custodial wallet system", so non-compliant operators "will be considered criminal money laundering operations". Precedent: "ask the principles of Liberty Reserve, formerly of Costa Rica".
- The then-recent Binance attack (May 2019, ~7,000 BTC) "was very likely an embezzlement"; without standards the industry will "never be trusted".
- Custodial cowboys "have created a system that makes Visa look like a secure alternative" — concentrated custodial losses exceed anything associated with Visa or MasterCard.
- Design proposal: "Bitcoin (BSV) could be automated such that it links to the logins within the organisation" — e.g. every SSH login to custodial databases stored immutably on-chain, "obscured such that no individual outside the organisation" can read it, yet "no attacker would be able to compromise the system and delete the logs", enabling tracking and tracing of attacks.
- Non-custodial architecture is safer: branch offices need no keys locally; "a branch office can have all of the keys maintained at the central head office" — "The described way was how Bitcoin was designed."
- Goal: "institutional and government support" and a narrative shift "away from cowboy money launderers and thieves into a professional industry"; "It's time to professionalise."

## How Craig reasons (his model/logic)
Credential-led argument (auditor past, GIAC certification) combined with regulatory-arbitrage analysis: he reads MLD5's scope to show crypto-only exchanges are already custodians in law, and uses Liberty Reserve as the enforcement precedent. The constructive half is design-oriented — threshold keys plus blockchain-anchored, access-controlled audit logging — turning his immutability thesis into a compliance tool. Rhetorically combative: "cowboys", "cows to be milked", "brought to justice".

## Where this contradicts BTC-mainstream logic
- Contradicts the industry's self-regulation posture: he insists external, bank-grade minimum standards (PCI-DSS analogues) and AML law already apply, whether exchanges like it or not.
- Contradicts the "hacks are external attackers" narrative common after exchange incidents — he asserts ~99% are insider embezzlement, a claim aimed directly at Binance days after its May 2019 breach.
- Softens the "not your keys, not your coins" purist line: rather than abolishing custodians, he demands they be auditable and regulated — and claims Bitcoin was designed so branches never need local keys.
- Contradicts the idea that blockchains and compliance logging are opposites: the chain is proposed as the tamper-proof log that makes deletion of evidence impossible.

## Notable quotes
- "For every so-called exchange hack, 99 of the hundred reported occurrences are internal and cases of embezzlement."
- "Every single crypto-only exchange such as Binance is a custodial wallet system."
- "Basically, such cowboys have created a system that makes Visa look like a secure alternative."
- "The irony is that the hackers continuously get away with attacks because logs are deleted. Yet, we have a system that makes deleting logs impossible."
- "Right now, the crypto industry is not even as good as the Wild West of the Internet in the 90s."
- "It's time to professionalise, and they who don't like it are going to start to learn, but they won't be able to cheat customers."

## Connections
References nChain's "safe wallet" threshold-key system and nChain's second digital-security patent (June 2018 PRNewswire release), tying the essay to the nChain patent portfolio. Cites EU Directive 2018/843 (MLD5) and the Liberty Reserve prosecution. Written two days after the Binance 7,000 BTC hack (7 May 2019), and extends his recurring audit/accounting theme of the blockchain as immutable evidentiary infrastructure.
