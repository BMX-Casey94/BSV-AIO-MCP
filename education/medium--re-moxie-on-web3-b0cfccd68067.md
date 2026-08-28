---
title: "Re: Moxie on Web3"
date: 2022-01-08
era: medium
themes: [governance-decentralisation, spv-light-clients, privacy, scaling-throughput]
source: summaries-medium/re-moxie-on-web3-b0cfccd68067.md
---

# Re: Moxie on Web3 — core principles

- **Bitcoin had light clients from day one.** SPV is not an afterthought. A mobile wallet can be built in the most decentralised way possible with competitive UX, without downloading every block.
- **SPV asks only for matching payments.** The client tells peers not to send the contents of every block or transaction; it wants only transactions matching a filter, plus the headers.
- **Headers select the heaviest chain.** The client downloads block headers only and selects the chain with the highest total work.
- **Merkle branches bind payments to headers.** Matching transactions arrive with Merkle branches linking them to the header Merkle roots, so the peer-to-peer network remains an untrusted adversary.
- **Bandwidth, storage and CPU stay minimal.** That is how ordinary commerce reaches phones without turning every user into a full replica of the ledger.
- **Bloom filters trade a little privacy for performance.** They give probabilistic unlinkability; in practice, real users cared more about performance.
- **Bitcoin can parallelise and shard full-mode work.** Designs that ignore resource consumption lose mobile clients and destroy scale through parallelism. Those failures are not properties of the blockchain algorithm itself.
- **Twelve years is long enough.** “It is early days” is not an excuse for a system that still cannot support light clients or ordinary commerce.
