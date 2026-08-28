---
title: "Ensuring honest money"
era: medium
date: 2019-01-23
slug: ensuring-honest-money-c49ec9110ec6
themes: [law-regulation, wallets-keys, privacy, property-rights]
source_summary: summaries-medium/ensuring-honest-money-c49ec9110ec6.md
url: https://medium.com/@craig_10243/ensuring-honest-money-c49ec9110ec6
---

# Ensuring honest money — core principles

- **Wallets must implement wrongful-retention law.** UK Theft Act 1968 s.24A ('dishonestly retaining a wrongful credit') makes keeping unexplained funds an offence regardless of how they arrived — so wallet software needs a refuse-and-return process, not plausible deniability.
- **Fungibility comes from bona fide commerce, not protocol taint-resistance.** A merchant accepting payment for consideration, without knowledge of a wrongful origin, is safe wherever the coins have been: valid commerce without knowledge creates fungibility.
- **Quarantine the unexpected; spend the expected.** Unsolicited coins (dust spam, unexplained payments) go into a warm-storage container excluded from the spendable balance; expected payments — where the customer populated a merchant-supplied template naming the input transactions — are instantly spendable because validity is already known.
- **'Bounce' unknown funds back to source.** For an unidentified transaction, return the coin to the address the mining fee is taken from; unexplained wealth kept is taxable, so returning is both the legal and the cheap option.
- **Make tracking spam a donation to miners.** A scheduled sweep returns quarantined dust minus the miner fee — a 1-satoshi tracking transaction is returned entirely to miners. Once senders know the money is simply burned to fees, the dust-spam incentive dies and the 'web bug' fails.
- **Cycle addresses without limit.** One address per payment: the ECDSA key space is large enough for every person on earth to cycle keys millions of times a day for centuries with no collision risk.
- **Privacy and honest money are the same design goal.** Single-use keys deliver the private cash system Bitcoin was designed to be; quarantine-and-return delivers the honest money it was designed to be. A compliant wallet achieves both at once.
