---
title: "The Home Node That Never Validates"
date: 2026-05-10
era: substack
themes: [mining-consensus, security-economics, networking, governance-decentralisation]
source: summaries/the-home-node-that-never-validates.md
---

# The Home Node That Never Validates — core principles

- **In proof-of-work, validation means block creation.** Gather transactions, commit to a Merkle root, perform proof-of-work, publish a competitive block. The white paper's "node" is a block producer. Acceptance is expressed by building the next block on the accepted block's hash.
- **Verification is not validation.** A home machine can check headers, scripts, the UTXO set and proof-of-work targets. None of this creates the block, orders transactions, or competes in producing the next history state. Inspector versus builder; weighing a coin versus minting it.
- **The mempool is a local waiting room, not a law court.** Mempool policy is a pre-confirmation filter, not consensus and not block validity. A transaction excluded from every home mempool can still reach a miner by another path and confirm.
- **Miners do not depend on domestic relay.** Mining is latency-sensitive; pools maintain their own connectivity, direct submission channels and commercial arrangements. Compact block relay is a performance optimisation, not a home-node veto.
- **Censorship sits at the inclusion point.** Only miners, pools or coordinated block-producing infrastructure can keep valid transactions out of blocks. A valid fee-paying transaction is a revenue opportunity any competing miner can claim.
- **Exit is not command.** A home verifier can refuse to follow a chain; it cannot prevent publication. Miners are disciplined because invalid blocks are unprofitable and will not be built upon. The home verifier is an observer of validity, not its cause.
- **One-CPU-one-vote, not one-IP-one-vote.** Consensus weight is tied to work. A million household verifiers do not become miners by being numerous. Node counts are politically seductive and technically empty.
- **Home verification has a modest, legitimate role.** Local assurance against blind reliance on third-party servers — a measuring instrument. A scale does not mint coins; a thermometer does not heat the furnace.
- **Restrictive non-mining relay culture is self-defeating.** It pushes transactions into private miner channels, making access more commercial, more opaque and more concentrated — the opposite of its stated aim.
