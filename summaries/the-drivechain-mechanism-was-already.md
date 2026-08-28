---
title: "The Drivechain Mechanism Was Already Patented"
date: 2026-04-25
slug: the-drivechain-mechanism-was-already
url: https://singulargrit.substack.com/p/the-drivechain-mechanism-was-already
themes: [mining-consensus, btc-critique, law-regulation, governance-decentralisation]
---

# The Drivechain Mechanism Was Already Patented
**Date:** 2026-04-25 | **URL:** https://singulargrit.substack.com/p/the-drivechain-mechanism-was-already
**Subtitle:** On vote-counting, blinded commitments, and the difference between inventing something and giving it a different name.

## Core thesis
The drivechain proposal (Paul Sztorc's BIP-300 hashrate escrows and BIP-301 blind merged mining) is not a novel mechanism. Its operational core — a fixed voter set casting on-chain signals that are tallied over a window, releasing pre-locked funds when a threshold is crossed — was disclosed in nChain patent US 11,347,838 B2 (priority 23 February 2016, granted 31 May 2022; inventors Craig Wright and Stephane Savanah), eighteen months before BIP-300 was drafted. BIP-301's blind merge mining is likewise an instance of the same patent family's "veiled value" commitment primitive.

## Key arguments and claims
- BIP-300 mechanics: six consensus messages (M1–M6) in coinbase OP_RETURNs; a 256-slot sidechain registry (D1) and withdrawal-bundle list (D2); OP_DRIVECHAIN redefining OP_NOP5; sidechain funds held in a single anyone-can-spend CTIP UTXO with no signature gate. Withdrawals are aggregated into a "bundle," hashed with first input and output zeroed (the "blinded TxID"); miners vote on the hash via M3/M4 messages, each block moving the ACK counter by at most one, over a fixed 26,300-block (~six-month) window; at 13,150 ACKs the M6 transaction pays out.
- BIP-301 mechanics: a user broadcasts a BMM Request carrying h* (the sidechain block's Merkle root); a miner pairs a BMM Accept with the same h* in the same main:block and collects the fee without validating the sidechain — "operational blindness," not Chaumian cryptographic blindness.
- Peter Todd's 2023 critique (commissioned by LayerTwo Labs) is endorsed in its diagnosis: BIP-300 has no fraud proofs (unlike the 2014 Blockstream pegged-sidechains design), BIP-300 and BIP-301 do not interact, and a 51% coalition can take BIP-300-locked coins by vote, the lockbox having "a gate made of miner ACKs accumulated over a window."
- The patent's mechanism: token-bearing UTXOs (one satoshi each in the worked example) enfranchise a finite, published, anonymity-preserving voter set; a vote is a spend to a designated yes/no address; an off-chain "Manager" loop tallies spends, writes iteration records plus a hash of its own source code back to the chain, and pays out when the tally crosses threshold — the worked example: "If the amount of unique 'Yes' votes received reaches 57, the agreed amount of Bitcoins will be paid to Jason's account."
- Element-for-element mapping: miners' coinbase keypairs satisfy claim 1's "blockchain public key and private key pair" token; M4 coinbase vectors are the on-chain votes; the D2 ACK counter is the recorded tally (claim 11); M6's release is Jason's payment; window expiry is loop termination; audit is on-chain message visibility. "There is no element in BIP-300 that has no analog in the patent."
- The "implementing the loop using a script" escape clause fails: claim 21 enumerates hard-coded code, stored files and hash-table entries, and the patent's whole architecture puts the loop on a parallel computing resource precisely because Bitcoin Script cannot loop — a C++ full node qualifies. "Code is code. The objection collapses."
- The wider family: atomic-swap patent US 11,838,407 B2 (priority 14 May 2018; two-preimage "veiled secret values"); tokenisation application CA 3013180 (February 2016); the agent-based Turing-complete transactions patent (February 2016); and the bonded threshold-signature "congress" patents (US 11,348,095 / US 12,003,616, 2017). BIP-301's h* is the family's commit-a-fingerprint-that-anchors-but-does-not-reveal primitive.
- A three-axis taxonomy of peg designs: trust model (cryptographic gating → unbonded vote-gating), what the commitment represents, and what gates release. Drivechains occupy the unbonded vote-gating corner; the congress patents the bonded threshold corner — Todd's critique reads as an argument for the congress corner without using the vocabulary.
- Explicit non-claims: no plagiarism allegation — the priority filings became public around August 2017, the month BIP-300 was drafted, so convergence was natural. The coda adds that the patent mechanisms "started as a R&D project in 2012."

## How Craig reasons (his model/logic)
Patent-claim construction applied to protocol analysis: strip the vocabularies, compare mechanisms operationally, and let isomorphism do the arguing. He then generalises into a design-space taxonomy, separating the technical claim (prior disclosure) from the legal one (infringement), which he expressly declines to litigate.

## Where this contradicts BTC-mainstream logic
- The ten-year drivechain debate's premise of novelty is false; both sides argued over names while the mechanism sat in the public patent record.
- Bitcoin protocol vocabulary ("hashrate escrow," "merge mining") "has... occluded the architectural questions rather than clarified them" — the right questions are bonding, slashing, voter-set incentives, threshold and window choice.
- Agrees with Todd that BIP-300 replaces signature-gating with miner trust, but reframes it: the dispute is about which corner of a pre-mapped design space to inhabit.
- Implicit priority theme: celebrated BTC-side proposals repeatedly postdate nChain/Wright disclosures of the same primitives.

## Notable quotes
- "You will not have done so. You will have introduced a vocabulary."
- "The spend is the vote."
- "Code is code. The objection collapses."
- "The mechanism is what the mechanism is. Naming it differently changes nothing."

## Connections
The congress patents' threshold-ECDSA validator sets are the same Savanah–Wright machinery used constructively in the mental-poker and sealed-bid essays; the "veiled value" primitive underlies the encrypted-NFT constructions; the priority theme recurs in the quantum essay's invocation of Lamport and Winternitz (1979).
