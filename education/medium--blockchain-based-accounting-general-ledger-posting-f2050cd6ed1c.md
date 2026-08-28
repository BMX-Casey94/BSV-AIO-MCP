---
title: "BLOCKCHAIN Based Accounting:\n General Ledger Posting"
era: medium
date: 2018-12-14
slug: blockchain-based-accounting-general-ledger-posting-f2050cd6ed1c
themes: [audit-accounting, tokenisation, wallets-keys, script-technical]
source_summary: summaries-medium/blockchain-based-accounting-general-ledger-posting-f2050cd6ed1c.md
url: https://medium.com/@craig_10243/blockchain-based-accounting-general-ledger-posting-f2050cd6ed1c
---

# BLOCKCHAIN Based Accounting: General Ledger Posting — core principles

- **On-chain activity can be posted to an enterprise general ledger automatically.** A blockchain oracle monitors the chain and maps a hierarchy of public keys and deterministic sub-keys against the entity's chart of accounts, so posting is automated and "the blockchain will enforce the controls automatically".
- **GL postings become publicly demonstrable.** The method ensures posting "can be publicly demonstrated to be a true and accurate reflection of the activities of the entity", with GL states anchored on-chain by hash.
- **Double-entry bookkeeping is preserved.** The GL stays "thin" — aggregated entries with drill-down to sub-ledgers — and Bitcoin best practice (frequently changing the key used for a transaction) is exactly what makes the key-to-account mapping layer necessary.
- **Posting granularity and rule-stacking are configurable.** From coarse rolled-up values to individual transactions; rules can be double-stacked in the key hierarchy, interpreted as posting at the child rather than the parent to prevent double-posting while allowing exception rules.
- **The audit evidence chain is cryptographic.** Signing the posting rule-set and the posting data with the same techniques used on-chain provides "a robust chain of evidence to support the requirements of any external auditor"; the source data is the underlying cash movement — a publicly unalterable record.
- **Accrual accounting runs off unconfirmed transactions.** Transactions to be accrued for later settlement (e.g. those published with an nLockTime value) "can be fully accounted for before the underlying settlement is committed to the blockchain", with the Account Posting Agent acting as a Bitcoin node.
- **Scope covers payments, tokens and inter-entity flows.** Simple BSV payments, complex tokenised transactions, multi-party transactions and inter-entity transactions, plus assets/debts and cash-flow substantiation across the full chart of accounts.
- **Substantiation is the fallback where direct posting is too complex.** Where chain data cannot drive posting directly (e.g. accounts-receivable redeem scripts), the same pipeline validates that application-system postings (payroll etc.) match actual on-chain cash movement.
- **Tokenised valuation needs explicit rules.** For BSV "the value of the transaction remains the value of the transaction", but for tokenised amounts (USD, ounces of gold) the posting rule must specify how to derive value from the transaction metadata.
- **Migration path to a fully on-chain ledger.** Until Bitcoin ubiquity (tax still computed and paid in fiat) the blockchain feeds the existing GL; afterwards "it is possible to migrate the general ledger itself onto the blockchain".
