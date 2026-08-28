---
title: "Double-Spend Assurance without Blocks: Designing Miner-Signed Proofs and Spentness Commitments in a Header-Only System"
date: 2025-09-07
slug: double-spend-assurance-without-blocks
url: https://singulargrit.substack.com/p/double-spend-assurance-without-blocks
themes: [spv-light-clients, mining-consensus, security-economics, micropayments]
---

# Double-Spend Assurance without Blocks: Designing Miner-Signed Proofs and Spentness Commitments in a Header-Only System
**Date:** 2025-09-07 | **URL:** https://singulargrit.substack.com/p/double-spend-assurance-without-blocks
**Subtitle:** Why categorical proof of non-existence in the future is impossible, and how to achieve practical, court-quality finality with SPV, miner receipts, and Spentness Trees.

## Core thesis
It is impossible in a trustless distributed system to prove a negative about the future — that no conflicting transaction will ever exist. But by combining SPV input proofs, miner-signed first-seen receipts, real-time double-spend alerts, and cryptographic Spentness commitments, one can obtain categorical "as-of-height" guarantees and enforceable evidence of fraud, delivering practical, court-quality finality for zero-confirmation transactions using only block headers.

## Key arguments and claims
- The logical foundation: existence can be proven (a record, a signature, a Merkle branch); non-existence cannot. Naïve SPV, keeping only headers and Merkle proofs, verifies inclusion — presence — but never exclusivity; it "suffices for eventual confirmation but fails for instantaneous double-spend detection."
- The payer becomes the prover. For each input they must supply (a) an existence proof — the classic white-paper Merkle branch from the creating transaction to a block header — and (b) an unspentness proof, via either miner attestations (signed statements that the outpoint is in the miner's UTXO set at tip H with no mempool conflict) or structural UTXO commitments (sparse Merkle tree keyed by outpoint, Merkle Mountain Range, or RSA accumulator, supporting non-membership proofs).
- The AcceptanceReceipt is specified field by field: miner ID and public key; timestamp; txid and inputs hash; a signed no-conflict status; a TTL promise to enforce first-seen ordering for a defined window (e.g. two hours); and optionally a mempool Merkle root with an inclusion branch — elevating "I promise" into provable inclusion.
- Aggregation gives the evidentiary threshold: receipts from miners controlling 60–80% of hash rate amount to court-quality evidence, since any later double-spend would require coordination among actors who have signed contradictory statements — an equivocation proof the merchant can produce.
- DoubleSpendProofs formalise fraud evidence: outpoint (txid, vout), first and second transaction IDs, first-seen timestamps, miner ID and signature, delivered in real time over websockets/SPV streams. A miner signing receipts for both sides of a conflict has "cryptographically contradicted themselves" — excuses of network delay evaporate.
- Penalties make honesty the equilibrium: reputational ruin in a competitive mining market, contractual liability, bond forfeiture, loss of insurance. "Honest mining is not a moral preference; it is the rational path."
- The Spentness Tree: a sparse Merkle tree with key = outpoint (txid, vout) and value = empty (unspent) or hash(spending_txid). Workflow: non-membership proof at height H; on acceptance the miner updates the leaf to hash(txid) and signs an update receipt binding old and new roots; the new root is committed into the next block header. Guarantees: unspentness up to H, and unique spentness thereafter — any conflicting update requires a signed, provable contradiction.
- Merchant storage is minimal yet legally decisive: block headers, SPV input proofs, miner receipts, any double-spend proofs, and spentness proofs — "compact enough to be stored on a laptop or even a phone", and stronger in law than a full node because receipts bind identifiable hash power.
- Stated limits: the model requires broad hashrate participation (a single receipt proves little), and there is an explicit latency-versus-assurance trade-off between instant single-miner acceptance and seconds-to-minutes of wider coverage.
- Broader implications: real micropayments (coffee, machine-to-machine tolls, streaming payments by the second), and headers-only verification that lets "billions of wallets exchanging trillions of transactions" operate without full blocks.

## How Craig reasons (his model/logic)
A layered argument moving from formal logic to institutional economics: begin with an impossibility result (no cryptographic proof of future negatives), then substitute what mathematics cannot supply with signed commitments, incentives and penalties — "miners are bound not by prophecy but by consequence." Protocol engineering (sparse Merkle trees, accumulators, receipt schemas) is continuously framed by legal-evidentiary standards: the design target is not probabilistic comfort but evidence a court cannot dismiss.

## Where this contradicts BTC-mainstream logic
- Directly attacks the mainstream refrain that "0-conf is unsafe": it is unsafe "only in systems where fraud cannot be proven and punished."
- Rejects the BTC-style naïve gossip broadcast model in favour of direct delivery to mining gateways with structured signed feedback.
- Contradicts the everyone-must-run-a-full-node verification ethos: headers-only SPV clients, extended with receipts and commitments, are presented as sufficient for billion-user commerce — a return to "the original design" of lightweight clients.
- Treats miners as identifiable, contractually accountable commercial actors rather than anonymous sources of probabilistic confirmation — inverting the trust model from blind network reliance to explicit, verifiable miner commitments.

## Notable quotes
- "It is impossible in a trustless distributed system to prove a negative about the future—that no conflicting transaction will ever exist."
- "Without it, coins are not property but theatre props, endlessly duplicated without consequence."
- "Future non-existence will never be provable. Present exclusivity, however, can be—and that is sufficient for commerce, law, and civilisation itself."
- "The old refrain that "0-conf is unsafe" collapses under this model."

## Connections
Extends the white-paper SPV model Craig routinely invokes as Satoshi's original scaling vision. Its direct-to-miner broadcast and receipt infrastructure complements the IP-to-IP payment model of the privacy series, and the micropayment viability it establishes underwrites the "scale produces privacy" economics of the legal-boundaries essay.
