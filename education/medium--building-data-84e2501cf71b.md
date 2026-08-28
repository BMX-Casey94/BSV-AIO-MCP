---
title: "Building Data"
era: medium
date: 2018-11-13
slug: building-data-84e2501cf71b
themes: [script-technical, scaling-throughput, protocol-immutability, mining-consensus]
source_summary: summaries-medium/building-data-84e2501cf71b.md
url: https://medium.com/@craig_10243/building-data-84e2501cf71b
---

# Building Data — core principles

- **Original script already carries arbitrary data.** OP_PUSHDATA1 pushes up to 255 bytes, OP_PUSHDATA2 up to 65 KB, and OP_PUSHDATA4 up to 4.3 GB in a single push; these opcodes shipped in the original Bitcoin and remain consensus-valid.
- **Limits are policy shackles, not protocol rules.** The 520-byte push limit (520 = 0x208) leaves OP_PUSHDATA4 an enabled but dead opcode — the smallest value it can express (0x10000000) vastly exceeds what may be pushed; the opcodes were castrated through block size, not disabled.
- **On-chain data is a natural miner business.** Data is easy and inexpensive for miners to hold and process, giving them a revenue stream beyond payment transactions.
- **Orphan risk enforces data availability.** If miners try to withhold data, they will find that they have a block orphaned — incentives, not developer policy, police availability at scale.
- **Unbounded blocks are restoration, not change.** Removing the block cap removes the shackles on Bitcoin and sets it free; the 2019 roadmap was to remove the limits entirely.
- **Transaction malleability must not be "fixed" by restructuring transactions.** The malleability fixes adopted elsewhere (SegWit-style separation of the signature) damage the protocol rather than repair it — a malleability fix kills the protocol.
