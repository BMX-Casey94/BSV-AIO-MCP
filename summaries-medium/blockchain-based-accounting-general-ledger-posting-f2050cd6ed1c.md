---
title: 'BLOCKCHAIN Based Accounting: General Ledger Posting'
date: 2018-12-14
slug: blockchain-based-accounting-general-ledger-posting-f2050cd6ed1c
url: https://medium.com/@craig_10243/blockchain-based-accounting-general-ledger-posting-f2050cd6ed1c
themes: [audit-accounting, tokenisation, wallets-keys, script-technical]
---

# BLOCKCHAIN Based Accounting: General Ledger Posting
**Date:** 2018-12-14 | **URL:** https://medium.com/@craig_10243/blockchain-based-accounting-general-ledger-posting-f2050cd6ed1c
**Subtitle:** For more details see the following link:

## Core thesis
This is a reposted nChain white paper (not a polemical essay): it specifies a service that extracts, classifies, and posts on-chain transactions into an enterprise general ledger in accounting-ready form, using transaction inputs/outputs to drive the posting rules. The claim is that GL postings can be "publicly demonstrated to be a true and accurate reflection of the activities of the entity", with GL states anchored on-chain by hash, and that this works for both BSV-denominated and tokenised transactions without constraining how the entity allocates its keys.

## Key arguments and claims
- The mechanism monitors the blockchain (via a "blockchain oracle", white paper 0160) and maps a hierarchy of public keys and deterministic sub-keys (white paper 0042) against the entity's chart of accounts, so posting is automated and "the blockchain will enforce the controls automatically".
- Double-entry bookkeeping is preserved: the GL stays "thin" (aggregated entries with drill-down to sub-ledgers), and Bitcoin best practice — "frequently changing the key used for a transaction" — is exactly what makes naive GL posting complex and this mapping layer necessary.
- Scope of automated posting: simple BSV payments, complex tokenised transactions, multi-party transactions (multiple inputs/outputs), and inter-entity transactions; plus extracts for "assets and debts" and "cash flow" substantiation of the full chart of accounts.
- Posting granularity is configurable "from a coarse rolled-up value to a granular individual transaction"; rules can be double-stacked in the key hierarchy, interpreted as posting at the child not the parent "to prevent double-posting" while allowing exception rules.
- Audit evidentiary chain: "by using the same cryptographic techniques to sign the posting rule-set that was used and the posting data itself, it provides a robust chain of evidence to support the requirements of any external auditor". Source data is "the underlying cash movement… a publicly unalterable record".
- Cash-based accounting is the default; accrual accounting is handled by running posting rules off transactions before block confirmation — "transactions that should be accrued for later settlement (for example those published with an nLocktime value) can be fully accounted for before the underlying settlement is committed to the blockchain" — with the Account Posting Agent acting as a Bitcoin node.
- Substantiation alternative: where posting directly from chain data is too complex (e.g. accounts-receivable redeem scripts per white paper 0124), the same pipeline instead validates that application-system postings (payroll etc.) match actual BSV cash movement, with broader rules "reducing the implementation complexity".
- Migration path: until "Bitcoin ubiquity" — tax liabilities still computed and paid in fiat — the blockchain feeds the existing GL; afterwards "it is possible to migrate the general ledger itself onto the blockchain" (white paper 0060).
- Tokenised valuation caveat: for BSV "the value of the transaction remains the value of the transaction", but for tokenised transactions (USD, ounces of gold) "the rule must specify how to derive the value from the metadata within the transaction".

## How Craig reasons (his model/logic)
This is engineering-specification reasoning rather than rhetoric: a functional overview, a canonical rule-set, numbered use cases ([100] Determine Accounting Configuration through [400] Post to General Ledger), and footnoted implementation caveats. The method is to take enterprise accounting as the fixed requirement — double-entry, thin GL, parallel books, audit substantiation — and show Bitcoin bending to fit it, not vice versa. Authority is established by cross-reference to the numbered nChain white-paper series and published patents rather than by argument from first principles.

## Where this contradicts BTC-mainstream logic
- Contradicts the "Bitcoin kills accountants/banks" disruption narrative: the design goal is to feed Oracle-grade enterprise GL systems and satisfy external auditors — Bitcoin as compliance plumbing for existing institutions.
- Contradicts the "on-chain data is spam" doctrine: the entire white paper presumes businesses should record financial activity on-chain, and that doing so is the chain's purpose.
- Contradicts the anonymity/pseudonymity ethos: best practice here is a managed key hierarchy mapped to a chart of accounts — identity-structured keys in service of auditability, not privacy.
- Contradicts the "0-conf is worthless" position indirectly: accrual posting runs off unconfirmed transactions in the mempool, treating pre-confirmation data as accounting-relevant.

## Notable quotes
- "The method ensures that the posting to the general ledger (GL) can be publicly demonstrated to be a true and accurate reflection of the activities of the entity in regards to the blockchain."
- "The best practice for Bitcoin (for example, frequently changing the key used for a transaction) makes the posting of information to an entity's general ledger complex."
- "The source data used for the posting is the underlying cash movement (for the most part) and is a publicly unalterable record."
- "It provides a robust chain of evidence to support the requirements of any external auditor."
- "Once Bitcoin ubiquity has been achieved, it is possible to migrate the general ledger itself onto the blockchain."

## Connections
Part of the numbered nChain white-paper series, cross-referencing 0042 (deterministic sub-keys, EP3268914B1), 0060 (full GL on-chain), 0124 (blockchain accounts receivable, WO2017145049A1), 0160 (blockchain oracle, EP3257002A1) and 0165 (tokenisation); the post links patent WO2017145048A1 ("Cryptographic method and system for secure extraction of data from a blockchain"). It operationalises the compliance thesis of "The lie of anarchy" (13 December 2018) and the commodity-ledger framing of "Bitcoin is a commodity" (12 December 2018), and its hash-puzzle data-extraction mechanics overlap with "Private blockchains are a matter of economic forces" (18 December 2018).
