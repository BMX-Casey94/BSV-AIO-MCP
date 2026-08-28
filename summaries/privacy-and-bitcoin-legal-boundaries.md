---
title: "Privacy and Bitcoin: Legal Boundaries, Economic Realities, and the Illusion of Technical Obfuscation"
date: 2025-08-30
slug: privacy-and-bitcoin-legal-boundaries
url: https://singulargrit.substack.com/p/privacy-and-bitcoin-legal-boundaries
themes: [privacy, law-regulation, scaling-throughput, btc-critique]
---

# Privacy and Bitcoin: Legal Boundaries, Economic Realities, and the Illusion of Technical Obfuscation
**Date:** 2025-08-30 | **URL:** https://singulargrit.substack.com/p/privacy-and-bitcoin-legal-boundaries
**Subtitle:** Why scaling and multiplicity of small transactions provide lawful privacy, and why mechanisms like CoinJoin and Taproot do not deliver the claimed protections

## Core thesis
Privacy in Bitcoin is best achieved not through artificial obfuscation such as CoinJoin or Taproot, but through the lawful, economic scaling of transactions into many small, independent payments. Mandated transparency renders mixing counterproductive — large CoinJoin transactions create targets rather than protect users — while millions of ordinary, standard, auditable transactions produce a "statistical fog" in which any single payment is insignificant yet the system as a whole remains traceable when law requires.

## Key arguments and claims
- A three-term legal taxonomy: **privacy** (lawful conduct without unwarranted intrusion, within a traceable framework), **anonymity** (concealment of identity), and **secrecy** (suppression even of the fact of a transaction). Legal systems uphold privacy, tolerate limited anonymity, and consistently reject secrecy.
- The traceability architecture of modern financial law — KYC/AML obligations, suspicious-activity and large-transaction reporting, subpoenas, and FATF harmonisation including the "travel rule" — means any mechanism promising "absolute anonymity" is untenable: "anything 'untraceable' inevitably stands out."
- Economic theory of privacy as indistinguishability within a large anonymity set: one large transfer is a signal; hundreds of small notes are noise. Market analogy: a sudden block trade moves prices and attracts inquiry, whereas the same position accumulated gradually in small trades preserves informational privacy and avoids front-running.
- BTC's structural limitation is named precisely: the one-megabyte block cap, "no more than about seven transactions per second globally", is a governance choice of scarcity that makes privacy-by-scale "mathematically impossible" on BTC.
- Taproot is dismissed as cosmetic: it masks script complexity (one branch or ten) but not transaction flows; regulators demand origin-and-destination traceability, under which script-masking is irrelevant — "at best, Taproot conceals trivia."
- CoinJoin is "a beacon, not a shield": its large, irregular many-input/many-output footprint is instantly flagged; legally it risks treatment as unregistered mixing (already prosecuted in multiple jurisdictions); economically it shrinks the anonymity set to the visible participant pool — "Aggregation concentrates risk; dispersion dilutes it."
- Case study: Alice pays Bob £700 as hundreds of notes of £0.50–£2.00 each, within Bob's posted min/max policy, using ECDH-derived invoice-scoped addresses, transmitted IP-to-IP as standard P2PKH outputs — lawful and auditable individually, unlinkable in aggregate.
- Wages case study: an employer paying salary as hundreds of small notes remains fully compliant (declared, logged, auditable), while the employee's later spending — unique keys, unique change addresses, no input overlap — cannot be reliably linked back even by the employer; selective receipts can prove rent or tax without exposing anything else.
- BSV is presented as demonstrating the required industrial throughput: "millions of small, standardised transactions provide the statistical fog."
- The legal-economic crux: "Law does not criminalise smallness: there is no statute against paying in coins or breaking a sum into many lawful notes. What law targets is deliberate concealment through non-standard obfuscation."

## How Craig reasons (his model/logic)
A law-and-economics method: juridical term-defining (privacy/anonymity/secrecy), regulatory realism (subpoena power, FATF) treated as a binding design constraint rather than an adversary to be evaded, and anonymity-set/market-microstructure analysis to show that dispersion — not aggregation — maximises plausible deniability. Privacy is framed as an emergent property of throughput, "an output of scale", not a bolted-on feature.

## Where this contradicts BTC-mainstream logic
- Rejects the BTC block-size cap directly: 1 MB / ~7 tps is "artificial scarcity" that destroys the statistical fog privacy requires — privacy on BTC is "mathematically impossible."
- Rejects Taproot's marketing as a privacy breakthrough: it conceals script paths, not flows, and collapses under mandated disclosure.
- Rejects CoinJoin and mixer-style aggregation as both legally indefensible (conspicuous, prosecutable, non-compliant) and economically backwards (it narrows the anonymity set it claims to enlarge).
- Inverts the mainstream framing that scaling threatens privacy/decentralisation: here, scaling is the *only* lawful route to privacy, and obfuscation is the true exposure.

## Notable quotes
- "Scale, not contrivance, is the true source of privacy in digital cash."
- "Aggregation concentrates risk; dispersion dilutes it."
- "Law does not criminalise smallness: there is no statute against paying in coins or breaking a sum into many lawful notes."
- "Crucially, privacy in Bitcoin is not an input—it is an output of scale."

## Connections
This is the theoretical anchor of the late-August privacy cluster: the drizzle-wallet specification ("Spending in the Crowd") and the Ledgerford allegory operationalise its thesis, sharing the £700 Alice→Bob case study, and the "Sunday Reflection" restates it in moral register. The scaling argument ties back to Craig's long-running throughput critique of BTC.
