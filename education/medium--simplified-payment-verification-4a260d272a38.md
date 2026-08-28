---
title: "Simplified Payment Verification"
date: 2019-10-09
era: medium
slug: simplified-payment-verification-4a260d272a38
themes: [spv-light-clients, scaling-throughput, law-regulation, mining-consensus]
source: summaries-medium/simplified-payment-verification-4a260d272a38.md
---

# Simplified Payment Verification — core principles

- **SPV is the peer aspect of Bitcoin.** You cannot scale the blockchain without it. True peer-to-peer means the payer sends a transaction directly to the merchant; the merchant validates it and posts it for clearing and settlement.
- **A node is a miner.** Section 5 of the white paper defines nodes as those who mine transactions. Non-mining “full nodes” are not nodes.
- **Users hold headers, not the full chain.** Block headers are under 50 MB and grow linearly, so the system scales by Moore’s law exponentially while taking a linear amount of resources.
- **Longest-chain checks are cheap.** Users query multiple random nodes in a Bayesian system to confirm they hold the longest proof-of-work chain, with little bandwidth.
- **Miners are a distributed intermediary.** No one intermediary needs to be directly trusted; honest nodes controlling the network is the security condition.
- **Security is legal-economic.** Miners invest hundreds of millions, are geographically fixed, and are subject to law. “Honest” in the white paper (used fifteen times) relates to acts such as the UK Fraud Act 2006.
- **Bitcoin was never designed to act outside the law.** It allows capture and sequestration of transactions associated with criminal activity and assists in tracing.
- **Double-spend attacks are noticed quickly.** Existing miners detect them within seconds; a chain six blocks deep would on average be determined after an hour or so and rejected outright.
