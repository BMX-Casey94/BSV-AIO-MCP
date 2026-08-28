---
title: "MSBs and Account-Based Systems"
date: 2019-06-04
era: medium
slug: msbs-and-account-based-systems-e64dc056f92a
themes: [law-regulation, privacy, intermediaries]
source: summaries-medium/msbs-and-account-based-systems-e64dc056f92a.md
---

# MSBs and Account-Based Systems — core principles

- **Legal category is fixed by function, not self-description.** Any system engaged in money transfer or money handling is, by nature, a Money Services Business (MSB) / money transmitter — whatever its proponents call it.
- **Obligations follow the activity down the stack.** Every subsystem engaged in the activity must comply with the money-transmitter rules that apply to it.
- **Mixing infrastructure carries transmitter liability.** Every node and every software wallet engaged in mixing would need to fulfil the obligations that apply to a money transmitter.
- **The core duties are enumerable.** Maintain an anti-money laundering (AML) programme, keep records, and meet the reporting requirements of the jurisdiction — in the US, filing SARs (Suspicious Activity Reports) and CTRs (Currency Transaction Reports).
- **Peer-to-peer is not an exemption.** P2P exchange is covered under the AML rules.
- **Compliance is not optional.** Avoiding the requirements of the Bank Secrecy Act (BSA) in the US is not an option.
- **Design implication for builders.** Wallets and services that handle or transfer value should be engineered on the assumption that AML record-keeping and reporting duties attach to money-handling functions; adding protocol-level mixing attracts transmitter liability rather than escaping it.
