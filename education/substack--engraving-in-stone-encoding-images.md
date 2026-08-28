---
title: "Engraving in Stone: Encoding Images in Bitcoin (or BTC) Transactions"
era: substack
date: 2025-09-08
slug: engraving-in-stone-encoding-images
themes: [script-technical, protocol-immutability, audit-accounting]
source_summary: summaries/engraving-in-stone-encoding-images.md
url: https://singulargrit.substack.com/p/engraving-in-stone-encoding-images
---

# Engraving in Stone: Encoding Images in Bitcoin (or BTC) Transactions — core principles

- **Permanence is granted by encoding, not by permission.** Any protocol field that accepts arbitrary bytes can carry data, and the chain preserves it regardless of committees, policy debates or taste; the serious question is not whether to embed but how to do it efficiently and verifiably.
- **Four canonical byte-carrying "masks".** (1) Fake P2PKH addresses — the 20-byte hash160 slot accepts any 20 bytes, with dust burned to the unspendable output; (2) multisig scripts — each 33-byte "public key" slot accepts any 33-byte string, packing several slices per output; (3) OP_RETURN — the honest canvas, ~80 bytes, provably unspendable, but subject to miner policy and possible censorship; (4) Taproot leaves — just another byte-carrying field.
- **The preparation pipeline.** Optional compression (zstd, gzip) to B′; chunk to the slot size (20, 33 or ~80 bytes); hash each chunk hᵢ = H(Cᵢ) with SHA-256; fold chunk hashes pairwise into a single Merkle root as the file's fingerprint.
- **The manifest separates archive from graffiti.** It records file size, chunk count, the Merkle root, optional metadata (MIME type, compression flag, name) plus the TXIDs and their read order — and is itself embedded by the same mechanisms. Without it, scattered chunks are "mere rubble"; with it, reconstruction is deterministic for any future reader.
- **Verification is binary.** Collect the manifest's TXIDs, extract payload slices, concatenate in manifest order, hash and compare against the committed root — "either the data matches or it does not." Block headers supply timestamp (existence at or before the block) and immutability (proof-of-work weight at height H).
- **Raw embedding scales linearly and anti-socially.** A 100 KB file at 20 bytes per output demands 5,000 outputs; a 1 MB file 50,000 — "permanence by bloat", parasitic on every node's storage and bandwidth.
- **Anchor hashes on-chain; keep bulk bytes off-chain.** Committing per-chunk hashes and the Merkle root on-chain while bytes live off-chain (P2P, cloud, "USB drives buried in the desert") scales sublinearly/logarithmically — "You only need to store the right bytes."
- **The chain is a notary, not a scrapbook.** Contracts anchored as hashes give courts "not gossip but mathematics"; tamper-proof evidence and archives immune to burning, rot and censorship — Bitcoin as "the notary of last resort", neutral between Magna Carta and memes.
- **Inclusion policy is miner policy, not protocol.** OP_RETURN's shrinking limits ("80 bytes, then 40, then perhaps none at all, depending on the year and the fashion") are committee fashion; consensus rules, not mempool policy, define validity — fee-paid inclusion is the miner's commercial decision.
