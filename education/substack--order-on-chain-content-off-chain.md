---
title: "Order On-Chain, Content Off-Chain, Judgement in the Overlay"
date: 2026-08-11
era: substack
themes: [ai-blockchain, scaling-throughput]
source: summaries/order-on-chain-content-off-chain.md
---

# Order On-Chain, Content Off-Chain, Judgement in the Overlay — core principles

- **A scaled public ledger supplies one missing primitive: a public, ordered, tamper-evident, independently verifiable record of commitments, cheap enough to use per event.** It provides a total order, a timestamp bound (existence by time T, not creation at T), tamper-evidence as a cost, and verification without trusting the recorder — headers plus a Merkle path, in time logarithmic in the batch size.
- **A ledger does not make anything true.** Notarised nonsense is nonsense with a receipt. It does not verify computation, carry semantics, confer privacy by default, delete, or guarantee availability. A hash of a lie is a durable lie; a hash without preimage and schema is an unbreakable promise about an unknown thing.
- **Assignment rule: does the meaning of this thing depend on when it was fixed?** Commit whatever's meaning depends on when it was fixed; version whatever is bulk and immutable; compute in the overlay whatever is a judgement. The joins are hashes going up and proofs coming down.
- **Three tiers.** The ledger is public and expensive to alter, therefore small. The store is large and cheap, content-addressed, needing availability not integrity. The overlay holds judgement, which must be revisable. Verdicts are revisable; records are not.
- **Version continuously, anchor periodically.** Each store version names its predecessor, making history self-authenticating; anchors supply time. Over-anchoring wastes a little money; under-anchoring means the record cannot answer the question eventually asked. Content can be destroyed: the commitment survives the content.
- **Batch into a Merkle tree: a root per session, not a transaction per claim.** One thirty-two-byte root covers a session; an inclusion proof for a million claims is twenty sibling hashes. Ten million events become ten thousand transactions. Proof size grows logarithmically.
- **Unit cost and capacity still bind.** Commitment must precede the act, so the batching window is an unprotected delay. Independent committers cannot batch across each other because they do not trust each other. A fee floor above the value of the item does not make micropayment expensive; it makes it impossible. The honest requirement is commitment latency in seconds, from an unbounded number of independent parties, at a unit cost below the smallest attributable value.
- **Deletion and immutability are opposed at the core.** Commit salted hashes, hold content off-chain, destroy content and salt together, leaving an unopenable commitment. That satisfies audit and content-erasure requirements but not any requirement to erase the fact a record existed.
- **The gain is checkability, not correctness.** Failure becomes attributable to a decision made at a known time on a known basis. Any architecture whose value proposition is "the data is on-chain so it is trustworthy" is confused at the first step.
