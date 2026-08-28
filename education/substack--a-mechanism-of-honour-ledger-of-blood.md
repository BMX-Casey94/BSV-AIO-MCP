---
title: "A Mechanism of Honour - Ledger of Blood and Electricity"
era: substack
date: 2025-07-30
slug: a-mechanism-of-honour-ledger-of-blood
themes: [spv-light-clients, mining-consensus, law-regulation, scaling-throughput]
source: summaries/a-mechanism-of-honour-ledger-of-blood.md
---

# A Mechanism of Honour — core principles

- **A node is a miner.** Section 5 of the whitepaper defines the node as a labourer, not a voyeur. Non-mining full nodes are spectators with no authority over transaction integrity; only miners hold power.
- **SPV is the only road worth walking.** Without Simplified Payment Verification there is no peer-to-peer — only dependency, intermediaries and trust. Alice sends the transaction to Bob; Bob verifies it and forwards it to the miners. Every other participant is a spectator.
- **Users store headers, full input transactions and Merkle paths.** The TXID alone is insufficient: Bob must hash the full transaction data himself. Headers grow linearly against exponential scale — fifty megabytes, less than a few photographs — and ride Moore’s law.
- **A Merkle proof is a fail-fast against spam, not a double-spend preventer.** Hash the transaction, combine sibling hashes up to the root anchored in the header beside nonce and previous hash — the skeleton of immutability. Miners may charge fees for serving full transaction data to non-SPV counterparties.
- **Honesty is economic and legal.** Miners are capital-exposed, jurisdictionally located and physically identifiable; dishonest miners lose money. An attacker’s cost is electrical, physical, legal and financial, with detection expected within six blocks. The system is not trustless; it is ruthless.
- **Bitcoin gives control, not ownership.** She does not own the coins; she owns the right to spend them. Transactions linked to criminality can be isolated, quarantined and removed — the protocol aligns with law that punishes deception and rewards honesty.
- **Bitcoin scales by design, not by consensus.** Throughput of millions, even billions, of transactions per second is an architectural property. Consensus is the coward’s refuge; design is the builder’s truth.
