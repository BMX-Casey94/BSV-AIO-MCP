---
title: "Clickwrap smart contracts"
date: 2019-03-03
era: medium
slug: clickwrap-smart-contracts-3338507105bf
themes: [law-regulation, script-technical, tokenisation, protocol-immutability]
source: summaries-medium/clickwrap-smart-contracts-3338507105bf.md
---

# Clickwrap smart contracts — core principles

- **Bitcoin is an immutable evidence system for contract formation.** Clickwrap contracts are well-established in law; the residual failure is proof that terms were seen before assent. Bitcoin can close that gap.
- **Acceptance must be received.** *Entores Ltd v Miles Far East Corporation* [1955]: "It is not until his message is received that the contract is complete." Web responses are instantaneous communications; the UK Electronic Commerce Regulations 2002 deem orders received when the addressee can access them.
- **A ledger transaction can satisfy writing and signature.** A series of electronic communications can meet the Statute of Frauds as writing "signed" without pen and ink (*Golden Ocean*; *WS Tankship II*) — so "a transaction made on a distributed ledger (such as Bitcoin) is made in writing."
- **Hash-puzzle proof of notice.** Gate delivery behind Hash("Terms and Conditions" || "I agree") so the buyer must download and view the terms before receiving the unlock code. "It is not necessary to definitively prove that a party has comprehended a set of terms but rather that parties have downloaded it and agreed to be bound."
- **Bind acceptance to a key.** Hash("Terms and Conditions" || "I agree" || <Bitcoin Address>) using a derived key linked to a certified key, so acceptance is pseudonymous yet identifiable.
- **Store the terms on-chain.** Encrypted terms in the OP_RETURN field of a BSV transaction give "irrefutable proof of the exchange" — a validation-level hash puzzle evidencing acceptance, payable in native bitcoin or tokenised fiat against tokenised goods.
- **Smart contracts sit inside contract doctrine.** Offer, acceptance, receipt, writing and signature remain the formation rules; Script supplies evidence, not a private jurisdiction that replaces law.
