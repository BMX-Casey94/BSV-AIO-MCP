---
title: "Merkle Trees and SPV"
date: 2019-11-02
era: medium
slug: merkle-trees-and-spv-da18af9f6a26
themes: [spv-light-clients, scaling-throughput, networking, satoshi-history]
source: summaries-medium/merkle-trees-and-spv-da18af9f6a26.md
---

# Merkle Trees and SPV — core principles

- **SPV uses Merkle proofs plus headers.** A Merkle proof shows a transaction is in the tree represented by a Merkle root; the block header commits to that root. A lightweight client need only keep block headers for the entire chain, not full blocks.
- **An SPV check needs two things.** A full list of up-to-date block headers, and the Merkle path for the transaction in question — a Merkle-path authentication proof plus a valid header containing the root.
- **Check inputs before broadcast.** Performing the necessary SPV check on a transaction’s inputs prior to broadcast greatly reduces the burden and traffic on the network in dealing with invalid transactions.
- **Users hold their own Merkle paths.** Lightweight clients should keep, maintain, or at least have access to Merkle paths for the unspent outputs they own, rather than querying full nodes for those paths.
- **That shift is what allows Bitcoin to scale.** Removing the network burden of serving Merkle paths, and rejecting invalid spends before they hit the network, is how SPV implements true peer-to-peer transactioning.
- **SPV was part of the original protocol.** The rudimentary concept, though not fully developed, was in the white paper. Efficient Merkle-tree techniques are an important component of implementing it securely.
