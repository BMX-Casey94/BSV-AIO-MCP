---
title: 'Ledgers and Design'
date: 2020-03-18
slug: ledgers-and-design-22f9f2eaacc0
url: https://medium.com/@craig_10243/ledgers-and-design-22f9f2eaacc0
themes: [audit-accounting, law-regulation, property-rights, mining-consensus]
---

# Ledgers and Design
**Date:** 2020-03-18 | **URL:** https://medium.com/@craig_10243/ledgers-and-design-22f9f2eaacc0
**Subtitle:** Bookkeeping and accounting journals used within double-entry bookkeeping require write once read many (WORM) tables. Any accounting is…

## Core thesis
Craig grounds Bitcoin in the 800-year tradition of double-entry bookkeeping: the blockchain is a write-once-read-many journal where errors are corrected by new visible entries, never by deletion. He then dismantles a widely circulated Stanford undergraduate list of Bitcoin "myths" (no third-party seizure, no taxes, no charge-backs, bitcoins can't be stolen), arguing that seizure, freezing orders, and taxation all operate on Bitcoin through miners, exchanges, and courts — and that his 2010 alert key was built precisely to let the network honour court orders. The Medium post is an excerpt; the body continues on craigwright.net.

## Key arguments and claims
- Accounting journals have required WORM tables for "over 800 years"; paper ledgers made alteration self-evident, and computerised systems reintroduced fraud risk that "Bitcoin can solve".
- Bitcoin corrects errors like a paper journal: not by reversing entries "but by creating a new entry... correcting the error", leaving the mistake visible for auditors.
- UTXO grouping lets the blockchain form parallel journals and sub-ledgers by account, enabling "a private yet secure accounting platform, built on top of Bitcoin".
- Miners are agents of the network who "maintain the ledger for a fee"; honest nodes can append and even "reassign records and registry entries" — Bitcoin is cleartext, not encrypted, so court-ordered alteration is technically possible, and "the myth that third parties cannot seize or freeze coins is not one that finds any ground in reality".
- The seizure/tax myths trace to "a poorly researched Stanford undergraduate project" claiming "No Third-Party Seizure", "No Taxes", "No Risk of 'Charge-backs'", and "Bitcoins Cannot be Stolen" — each of which he refutes in turn.
- "Bitcoin does not stop your money from being seized. Bitcoin prevents dishonest third parties from cheating." Mixers taint everything they touch under proceeds-of-crime legislation; isolated UTXOs let honest recipients prove bona fide purchase.
- The alert key: he had "been working on the alert key since July 2010" — not merely for the August 2010 overflow bug, but as "a mechanism that allowed people to simply report stolen bitcoin, and other proceeds of crime"; its removal (by later maintainers) raised the cost of finding tainted coins but not the legal duty to do CDD/KYC/AML.
- Governments can shut Bitcoin down at will: US banking mandates (the Black Friday gambling precedent), exchange seizure, and freezing orders would leave boycotting miners "earning around 1/1000 of the revenue of the miners that are following the court order", so "honest compliant miners would win".
- Tax is inescapable: "If you don't pay your taxes, you go to prison, whether you use Bitcoin or not"; blockchain payments will "simplify the facilitation of tax without fraud or evasion" via employer reporting with "a fully auditable and traceable record".
- Right vs record: "The blockchain itself is a registration system... The blockchain does not represent the rights themselves" — you own bitcoin only with good title and provenance, not mere possession; each satoshi is "an indivisible isolated token" (100 million per coin).
- Non-mining nodes "are simply slow, useless systems that act as 'sibyls' on the network... They serve no purpose"; the UASF narrative "was told with the sole purpose of misleading regulators" — a forked asset remains subject to the same freezing orders, and listing exchanges "will be criminalised".
- His 2010 "Imagine if gold turned to lead when stolen" remark referred to an unfinished system; now "code that would enable nodes to follow court orders and alert on freezing orders... Identity systems had not been created. They have now."

## How Craig reasons (his model/logic)
He argues from professional accounting practice and legal doctrine rather than crypto-native theory: WORM journals, double-entry correction, bona fide purchase, proceeds-of-crime taint, and the right/record distinction in property law. The rhetorical structure is myth-demolition — quoting the Stanford list verbatim and refuting each clause — combined with first-person Satoshi authority ("When I implemented the alert key...") and economic enforcement logic (compliant miners out-earn boycotters 1000:1, so law wins without needing majority hashpower).

## Where this contradicts BTC-mainstream logic
- Contradicts "code is law" immutability absolutism: miners can append and reassign registry entries under court order, and cleartext ledgers make this feasible — the exact opposite of the censorship-resistance creed.
- Contradicts "not your keys, not your coins" and seizure-resistance folklore: freezing orders, taint, and contempt-of-court reach bitcoin regardless of key control.
- Contradicts the full-node/"verify don't trust" ethos: non-mining nodes are "sibyls" that do nothing; only miners matter — and UASF is a fraud on regulators.
- Contradicts the digital-gold/tax-flight narrative: gold itself carries ownership-record duties, and Bitcoin makes tax easier to enforce, not harder.
- Contradicts the white-paper reading that non-reversible payments are absolute: non-reversal applies only to "small casual transactions"; mediation costs remain for large transfers.

## Notable quotes
- "Accountants have used such a ledger format and posted journal entries using the same method for over 800 years now."
- "Bitcoin does not stop your money from being seized. Bitcoin prevents dishonest third parties from cheating."
- "The blockchain itself is a registration system... The blockchain does not represent the rights themselves."
- "Non-mining nodes are simply slow, useless systems that act as 'sibyls' on the network"
- "If you don't pay your taxes, you go to prison, whether you use Bitcoin or not."
- "Imagine if gold turned to lead when stolen"

## Connections
The right-vs-record and nemo dat arguments connect directly to The Property Flaw of Lightning (March 2020) and Binance: The Untrusted Intermediary (March 2020); the "miners are the only nodes" claim is developed in Satoshi and the Byzantine Generals (March 2020). The alert-key history is part of his Satoshi-authorship campaign, reclaiming early design decisions (July–August 2010, the overflow bug) as evidence of a law-compliant design intent. Cites the Stanford "Bitcoin myths" undergraduate page [1] as its foil.
