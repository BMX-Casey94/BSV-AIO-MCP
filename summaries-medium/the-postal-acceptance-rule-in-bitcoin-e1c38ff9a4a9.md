---
title: 'The postal acceptance rule in Bitcoin'
date: 2018-09-27
slug: the-postal-acceptance-rule-in-bitcoin-e1c38ff9a4a9
url: https://medium.com/@craig_10243/the-postal-acceptance-rule-in-bitcoin-e1c38ff9a4a9
themes: [law-regulation, mining-consensus, networking]
---

# The postal acceptance rule in Bitcoin
**Date:** 2018-09-27 | **URL:** https://medium.com/@craig_10243/the-postal-acceptance-rule-in-bitcoin-e1c38ff9a4a9
**Subtitle:** The postal acceptance rule states that where an acceptance is to be sent by post, the contract associated with that acceptance is…

## Core thesis
Bitcoin transactions fit the common-law framework for contract formation by non-instantaneous communication. Because Bitcoin is non-instantaneous and miners act as the verifying third party, the exchange of a Bitcoin payment mirrors the postal acceptance rule as already settled for e-mail: under the UK's Electronic Commerce (EC Directive) Regulations 2002, the legally operative moment is delivery — and for Bitcoin that means "the delivery and transfer of a Bitcoin transaction to a mining node", not the recipient opening a wallet.

## Key arguments and claims
- The postal acceptance rule (Adams v. Lindsell, 1818; Household Fire Insurance Co v Grant, 1879) concludes a contract at the moment of posting, not receipt; it was introduced to give assurance to the "new" British penny post.
- Lim (2004) counts "at least 'twelve theories or explanations offered for the postal acceptance rule'"; two fit internet transactions — communication via a third party, and non-instantaneity — and Bitcoin satisfies both, since "the mining system that verifies transactions can be seen to act as the third party".
- E-mail acceptance is settled law: in the US by the Uniform Electronic Transactions Act 1999, in the UK by the ECA; Craig asserts Bitcoin exchange "mirror[s] that postal acceptance rule in e-mail".
- The Sale of Goods (United Nations Convention) Act 1994 offers an alternative for international transactions: acceptance takes effect when consent "reaches the offeror" — in Bitcoin terms, "at the instant that the communication arrives at the offeror's Bitcoin address... when it is accepted into the Blockchain".
- Courts have declined to extend the postal rule to instantaneous media: Entores v. Miles Far East Corp (1955) and Brinkibon Ltd v Stahag Stahl (1983) for telex; Lord Wilberforce called the receipt rule "a sound rule, but not necessarily a universal rule", and Lord Fraser put the onus on the acceptor as the party best placed to confirm receipt.
- Web communications fail the postal-rule analogy because checksums and constant client-server verification make them "(near) instantaneously" received; Bitcoin differs because sender and recipient "may act in different time periods" despite immutable storage.
- The moment of receipt is neither when the recipient checks their address nor when the transaction enters a block — treating block inclusion as acceptance "would be analogous to a recipient not accepting a letter until the letter box was opened".
- The white paper itself supplies the classification: "messages are broadcast on a best effort basis", so Bitcoin is "analogous to email and not the web".
- Regulation 11(2)(a) of the Electronic Commerce (EC Directive) Regulations 2002 deems an order received "when the parties to whom they are addressed are able to access them"; mapped to Bitcoin, acceptance occurs at delivery to a mining node, "not the accessing of that transaction in a wallet".
- Exception: in-person handover of a transaction excludes the postal rule entirely.

## How Craig reasons (his model/logic)
This is doctrinal legal reasoning by analogy and precedent-mapping: each communications technology (post, telex, fax, e-mail, web, Bitcoin) is classified by its simultaneity and third-party characteristics, then slotted into the corresponding case-law rule. Authorities are cited precisely (case names with citations, statute sections, Lim's textbook), and the white paper's "best effort basis" language is treated as a technical fact with legal consequence. The mode is that of a legal memorandum, concluding with a crisp operative rule.

## Where this contradicts BTC-mainstream logic
- Treats Bitcoin transactions as legally effective contracts formed under existing common law — against the "code is law" / extra-legal settlement narrative of mainstream crypto.
- Makes miners legally significant as the acceptance-constituting third party, elevating their role from neutral relays to the linchpin of contractual finality.
- Implies zero-conf/broadcast has legal weight before block confirmation, since acceptance attaches at delivery to a mining node — cutting against confirmation-count orthodoxy.
- Frames blockchain records as evidence within statute (ECA, UETA, EC Directive) rather than as self-executing truth, subordinating the ledger to courts.

## Notable quotes
- "Bitcoin is non-instantaneous, but, the mining system that verifies transactions can be seen to act as the third party."
- "As fast as it is, Bitcoin is not instant. As stated in the Bitcoin white paper, 'messages are broadcast on a best effort basis'."
- "We can see Bitcoin as a form of transactional contracting that is analogous to email and not the web."
- "It is the delivery and transfer of a Bitcoin transaction to a mining node and not the accessing of that transaction in a wallet that marks the point of acceptance."
- "A sound rule, but not necessarily a universal rule" (Lord Wilberforce, quoted).

## Connections
Companion piece to "Defining smart contracts" (published the following day), which extends the same English-law analysis to electronic signatures and evidentiary weight; both draw on Lim's "Cyberspace Law" (OUP) and the Electronic Communications Act 2000, and together form Craig's 2018 mini-series locating Bitcoin inside existing contract law.
