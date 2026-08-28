---
title: "Saving research"
date: 2019-04-02
era: medium
themes: [privacy, identity, wallets-keys, script-technical]
source: summaries-medium/saving-research-97c9e63a3756.md
---

# Saving research — core principles

- **Bitcoin can record research data as tamper-proof, reviewable evidence.** Full data, blinded data, encrypted data, or a hash proving existence at a point in time can be anchored without disclosure.
- **Blind dealer-less thresholds distribute signing without a trusted dealer.** Groups create and sign blinded messages by secret sharing, then un-blind to obtain a threshold signature.
- **Accountable privacy is the design goal.** A validated participant can submit signed responses that the collector cannot link to their identity, while still knowing the respondent is an authorised member of the subject group.
- **Double-blind surveys are constructible on-chain.** Questionnaires can be issued so responses link back to authorised individuals while scientific double blinding is preserved.
- **Blinded ECDSA threshold keys carry the exchange.** Parties exchange surveys and research data under a blinded ECDSA key; the subject can themselves be double-blinded from those handling the results.
- **Unlinkability does not cancel membership proof.** The collector will not know which transaction they helped sign, yet can be sure the signer belongs to the research-subject party — the same mechanism applies to voting.
- **Verify identity out of band; settle on-chain.** Parties verify each other off-ledger; a blinded hash is signed, then un-blinded into a valid Bitcoin transaction sent to the blockchain.
- **Atomic swaps and oblivious transfers compose with the flow.** Transactions can be atomically swapped or swapped by oblivious transfer over Bitcoin transactions.
- **Pseudonymous forms, voting and secure methodology combine.** The end state is voting, secure research methods, and the ability to issue double-blinded forms without sacrificing auditability.
