---
title: "Hash Power and the Limits of Law"
date: 2026-03-13
slug: hash-power-and-the-limits-of-law
url: https://singulargrit.substack.com/p/hash-power-and-the-limits-of-law
themes: [mining-consensus, law-regulation, security-economics, networking]
---

# Hash Power and the Limits of Law
**Date:** 2026-03-13 | **URL:** https://singulargrit.substack.com/p/hash-power-and-the-limits-of-law
**Subtitle:** What happens when two superpowers each control half of Bitcoin's mining — and have no way to hold each other accountable?

## Core thesis
As of March 2026, BTC hash power is split almost evenly between US-linked pools (~42%) and Chinese-linked pools (~53%) — two states that cannot cooperate on law enforcement. Criminal and civil machinery connecting American courts to Chinese defendants is broken at every level, so the realistic US enforcement instrument against a hostile mining pool is not prosecution but leverage over internet infrastructure chokepoints — a lever that exists without an adequate legal accountability framework.

## Key arguments and claims
- Pool attribution (flagged as Craig's own classification of ambiguous cases): Foundry USA (a Delaware subsidiary of Digital Currency Group) exceeds 31% of global hash rate and MARA Pool adds 5.7%; on the Chinese side AntPool (Bitmain) 15.7%, F2Pool 11.3%, ViaBTC 9.5%, SpiderPool 8.8% — a combined 52.84%, sufficient in principle, if coordinated, for a majority attack.
- China's September 2021 ban (ten PRC ministries) targeted physical mining, not pool coordination software: operators relocated Stratum servers and redomiciled holding companies, so pool coordination — which transactions enter blocks, which chain to build on — remains under Chinese corporate control even though the hash power is geographically distributed.
- The criminal layer fails: the CFAA, wire-fraud statutes, and IEEPA give paper jurisdiction, but there is no US–China extradition treaty, and the 2000 MLAT lets China refuse any request it deems harmful to its "sovereignty, security, or public interest". The 2014 PLA Unit 61398 indictments were "a message, not a prosecution"; third-country arrests work for individuals, not infrastructure that never leaves China.
- The civil layer fails: Hague Service takes six months to two years; Article 36 of China's Data Security Law prohibits providing domestically stored data to foreign judicial bodies without approval; China does not recognise US civil judgments. The blockchain shows *that* a reorg happened but not coordination — legal attribution needs server logs, internal communications, and financial flows, all behind Article 36 and opaque Cayman/VIE structures.
- The infrastructure thesis: a pool depends on DNS resolution (root zone maintained by Verisign under agreement with ICANN; .com/.net registries in Virginia), interdomain routing, fast block propagation through relay networks (Falcon, developed at Cornell; FIBRE), exchange connectivity, and cloud hosting — much of it US-tied. The dependency is directionally asymmetric: Chinese pools need the global internet more than US pools need China's.
- The enforcement sequence: DOJ indictments; OFAC designation under IEEPA cyber sanctions; registrars seize .com domains; cloud, exchange, and payment providers terminate; relay access severed; in the most contingent case, coordinated BGP prefix filtering. The effect is not arrests but degraded propagation, rising orphan risk, and rational miner migration — the playbook used against Gameover Zeus, Iranian financial institutions, and Russian ransomware operators.
- China's side: Articles 285–287 of the PRC Criminal Law cover intrusion and interference, with jurisdiction claimed on all four bases, but outward-directed prosecution is a political question; the Anti-Foreign Sanctions Law (2021, strengthened March 2025) prohibits Chinese compliance with US sanctions, and Beijing's February 2023 report on US "long-arm jurisdiction" signals retaliation, not cooperation.
- Three caveats: this is chokepoint influence, not internet control; selfish mining and fee sniping are protocol-native and must not be criminalised — the gap applies only to double-spend fraud, deliberate disruption, or targeted censorship; and the lever cuts both ways via the Great Firewall.
- International law: classification turns on attribution under the ILC Articles — private conduct makes US action retorsion or domestic enforcement; state direction shifts analysis to countermeasures law and the Tallinn Manual. The gap: classification depends on facts the framework cannot establish within the timeframe enforcement requires.
- Three policy proposals: a pre-authorised, congressionally overseen framework for infrastructure interdiction (triggering conditions, independent review, time limits, proportionality); explicit multilateral treatment of mining-pool conduct via a Budapest Convention supplementary protocol or interpretive guidance; and a sector-specific US–China cryptocurrency enforcement protocol analogous to the 2015 bilateral cyber agreement.

## How Craig reasons (his model/logic)
Legal-doctrinal mapping layered over network-infrastructure analysis: he traces each enforcement channel (criminal, civil, infrastructural) to its precise point of failure or leverage, using empirical pool-distribution data, statutory texts in both jurisdictions (including original Chinese), and international-law classification to separate the formally available from the practically enforceable.

## Where this contradicts BTC-mainstream logic
- Qualifies the mainstream "BTC is beyond state control" narrative: no government can rewrite consensus rules, but "the protocol interior is permissionless. The infrastructure envelope is not" — mining coordination runs on the ordinary, centralised, law-subject internet.
- Contradicts the assumption that hash-rate geography equates to jurisdictional control: pool coordination, not hardware location, is the legally salient locus.
- Pushes back on law-enforcement maximalism: protocol-native competitive behaviour (selfish mining) must remain lawful; the law's role is confined to conventional crime using the protocol as an instrument.

## Notable quotes
- "The formal law exists. The enforcement does not."
- "The protocol interior is permissionless. The infrastructure envelope is not."
- "Theories are not enforcement."
- "Chinese pools need the global internet more than U.S. pools need the Chinese internet."

## Connections
Applies the corpus's law-and-attribution themes to state-level actors; its majority-attack scenario is the geopolitical counterpart to the attack-cost economics quantified in "Markov, Not Memoryless". The post summarises a full-length academic article under submission (76 footnotes).
