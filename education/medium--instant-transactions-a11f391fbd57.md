---
title: "Instant transactions"
era: medium
date: 2018-12-09
slug: instant-transactions-a11f391fbd57
themes: [security-economics, spv-light-clients, law-regulation, wallets-keys]
source_summary: summaries-medium/instant-transactions-a11f391fbd57.md
url: https://medium.com/@craig_10243/instant-transactions-a11f391fbd57
---

# Instant transactions — core principles

- **Zero-confirmation transactions are safe under correct merchant procedure.** Security comes from process design plus legal recourse — not from confirmation waits or added protocol complexity.
- **Bitcoin is peer-to-peer at the message layer.** The merchant (receiver) broadcasts the transaction; mining exists only as "a competitive system to stop double spending", in which miners are paid to find and invalidate the errors of other miners.
- **The six-step merchant process.** (1) Client makes an offer; (2) merchant sets value/exchange rate and issues a transaction template with output address, scripts and payment terms; (3) template exchanged via SPV wallet using never-reused, deterministically derived addresses; (4) user adds inputs and change, signs and returns it — merchant sets a minimum fee (0.50 units) and minimum output (12.5 units); (5) merchant polls multiple miners' mempools to confirm inputs are unspent, broadcasts to multiple miners, then re-checks; (6) goods released.
- **Detection is fast and near-certain.** Merchant checks complete in 2 seconds or less; with post-send miner polling a double-spender succeeds "less than once in 100 billion times".
- **A double-spend attempt is criminal fraud, and the signed transaction is evidence.** Analogous to passing a bad cheque under the Bills of Exchange Act 1882 and Cheques Acts 1957/1992 (or US state larceny statutes); merchants in many jurisdictions may even detain the offender, and online merchants simply halt fulfilment.
- **Use each address once.** Key reuse is "the biggest privacy failure in Bitcoin"; deterministic derivation from a root key (patents EP3269784B1, WO2017178956A1, WO2017145048A1) makes fresh keys per payment practical and permits auditable private sub-ledgers provable to shareholders and tax officials.
- **Charge fees on outputs, not inputs.** Inputs shrink the UTXO set, so miners should not penalise large input sets — output-based fee policy aligns miner revenue with UTXO-set growth.
- **Only miners are nodes; SPV wallets are the user model.** The merchant, not the user, sets the transaction terms — Bitcoin works inside and with the law, not around it.
