---
title: "Double-Spend Assurance without Blocks: Designing Miner-Signed Proofs and Spentness Commitments in a Header-Only System"
era: substack
date: 2025-09-07
slug: double-spend-assurance-without-blocks
themes: [spv-light-clients, mining-consensus, security-economics, micropayments]
source_summary: summaries/double-spend-assurance-without-blocks.md
url: https://singulargrit.substack.com/p/double-spend-assurance-without-blocks
---

# Double-Spend Assurance without Blocks: Designing Miner-Signed Proofs and Spentness Commitments in a Header-Only System — core principles

- **Future non-existence is unprovable; present exclusivity is provable — and sufficient.** In a trustless distributed system no cryptographic proof can show that no conflicting transaction will ever exist; but categorical "as-of-height" guarantees plus enforceable fraud evidence deliver practical, court-quality finality for zero-confirmation commerce.
- **Naïve SPV proves inclusion, never exclusivity.** Headers plus Merkle branches verify presence — sufficient for eventual confirmation but not for instantaneous double-spend detection; the payer must become the prover.
- **The payer supplies existence and unspentness proofs.** For each input: (a) the classic white-paper Merkle branch from the creating transaction to a block header, and (b) an unspentness proof via miner attestations (signed statements that the outpoint is in the miner's UTXO set at tip H with no mempool conflict) or structural UTXO commitments (sparse Merkle tree keyed by outpoint, Merkle Mountain Range, or RSA accumulator with non-membership proofs).
- **The AcceptanceReceipt turns "I promise" into provable inclusion.** Fields: miner ID and public key; timestamp; txid and inputs hash; signed no-conflict status; a TTL promise to enforce first-seen ordering for a defined window (e.g. two hours); optionally a mempool Merkle root with inclusion branch.
- **Aggregation across hash rate is the evidentiary threshold.** Receipts from miners controlling 60–80% of hash rate amount to court-quality evidence: any later double-spend requires coordination among actors who signed contradictory statements — an equivocation proof the merchant can produce.
- **DoubleSpendProofs formalise fraud evidence.** Outpoint (txid, vout), first and second transaction IDs, first-seen timestamps, miner ID and signature, delivered in real time over websockets/SPV streams; a miner signing receipts for both sides of a conflict has "cryptographically contradicted themselves".
- **Penalties make honesty the equilibrium.** Reputational ruin in a competitive mining market, contractual liability, bond forfeiture and loss of insurance — "Honest mining is not a moral preference; it is the rational path." Miners are bound not by prophecy but by consequence.
- **The Spentness Tree gives structural commitments.** A sparse Merkle tree with key = outpoint and value = empty (unspent) or hash(spending_txid): non-membership proof at height H; on acceptance the miner updates the leaf to hash(txid) and signs an update receipt binding old and new roots; the new root is committed into the next block header — guaranteeing unspentness up to H and unique spentness thereafter.
- **Header-only commerce scales to billions of wallets.** Merchant storage is just block headers, SPV input proofs, miner receipts, double-spend proofs and spentness proofs — "compact enough to be stored on a laptop or even a phone", and stronger in law than a full node because receipts bind identifiable hash power. This enables real micropayments: coffee, machine-to-machine tolls, streaming payments by the second.
- **Stated limits.** The model requires broad hashrate participation (a single receipt proves little) and trades latency against assurance — instant single-miner acceptance versus seconds-to-minutes of wider coverage.
