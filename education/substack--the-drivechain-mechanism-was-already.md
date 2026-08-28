---
title: "The Drivechain Mechanism Was Already Patented"
era: substack
date: 2026-04-25
slug: the-drivechain-mechanism-was-already
themes: [mining-consensus, btc-critique, law-regulation, governance-decentralisation]
source_summary: summaries/the-drivechain-mechanism-was-already.md
url: https://singulargrit.substack.com/p/the-drivechain-mechanism-was-already
---

# The Drivechain Mechanism Was Already Patented — core principles

- **Evaluate peg and sidechain designs on mechanism, not vocabulary.** Strip the names and compare operationally: a fixed voter set casting on-chain signals, tallied over a window, releasing pre-locked funds when a threshold is crossed is one mechanism however it is branded — "naming it differently changes nothing."
- **Vote-gated release replaces cryptographic security with miner trust.** BIP-300-style designs hold funds in an anyone-can-spend output gated only by miner ACKs accumulated over a long window (26,300 blocks, ≈ six months, 13,150 ACKs to release): a 51% coalition can take the locked coins by vote, there are no fraud proofs, and the lockbox has "a gate made of miner ACKs accumulated over a window".
- **"Operational blindness" is not cryptographic blindness.** Blind merged mining (a miner pairing an accept-message with a sidechain hash it never validated) lets miners collect fees without validation — an instance of the commit-a-fingerprint-that-anchors-but-does-not-reveal primitive, not a trustless peg.
- **On-chain voting maps element-for-element onto prior disclosed art.** Token-bearing UTXOs enfranchising a published voter set, votes as spends to designated addresses, an off-chain tally loop writing records back to the chain, and payout at threshold (nChain US 11,347,838 B2, priority 23 February 2016) — "the spend is the vote."
- **"Implement the loop in Script" is no escape from a mechanism claim.** Bitcoin Script cannot loop by design, so tally loops live on parallel computing resources; a full node executing the iteration qualifies as the mechanism — "code is code."
- **Peg designs occupy a three-axis design space.** Classify by trust model (cryptographic gating → unbonded vote-gating → bonded threshold gating), by what the commitment represents, and by what gates release; the serious engineering questions are bonding, slashing, voter-set incentives, threshold and window choice — not branding.
- **Bonded threshold validator sets are the accountable corner.** Threshold-signature "congress" designs (US 11,348,095 / US 12,003,616) gate release behind bonded, identifiable signers rather than anonymous miner votes — the architecture a fraud-proof argument implicitly points towards.
- **Priority disputes are a distraction from design quality.** The patent record and the proposal record document convergent disclosure, and the useful lesson for builders is the taxonomy: know which corner of the design space your bridge or sidechain inhabits before committing funds to it.
