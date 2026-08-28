---
title: "Engraving in Stone: Encoding Images in Bitcoin (or BTC) Transactions"
date: 2025-09-08
slug: engraving-in-stone-encoding-images
url: https://singulargrit.substack.com/p/engraving-in-stone-encoding-images
themes: [script-technical, protocol-immutability, audit-accounting]
---

# Engraving in Stone: Encoding Images in Bitcoin (or BTC) Transactions
**Date:** 2025-09-08 | **URL:** https://singulargrit.substack.com/p/engraving-in-stone-encoding-images
**Subtitle:** Designing Persistence Beyond Permission

## Core thesis
Permanence in Bitcoin is a matter of encoding, not permission: any protocol field that accepts arbitrary bytes can carry data, and the chain will preserve it regardless of committees, policy debates or taste. The serious question is not whether embedding should be done but how to do it efficiently and verifiably — and the disciplined answer is chunking, per-chunk hashes, a Merkle root and an embedded manifest, with the economic conclusion that hashes should be anchored on-chain while bulk bytes live off-chain.

## Key arguments and claims
- Four canonical "masks" for arbitrary bytes: (1) fake P2PKH addresses — the 20-byte hash160 slot accepts any 20 bytes, wrapped in checksum and Base58Check, with dust burned to the unspendable "address"; (2) multisig scripts — each 33-byte "public key" slot accepts any 33-byte string, packing several slices per output; (3) OP_RETURN — the honest canvas, ~80 bytes, provably unspendable, but subject to miner policy and possible censorship; (4) Taproot leaves — "a book of hidden leaves", just another byte-carrying field.
- Preparation pipeline for a file B: optional compression (zstd, gzip) to B′; chunking to the slot size (20, 33 or ~80 bytes); per-chunk hashing hᵢ = H(Cᵢ) with SHA-256; folding the chunk hashes pairwise into a single Merkle root as the file's fingerprint.
- The manifest is what separates archive from graffiti: it records file size, chunk count, the Merkle root, optional metadata (MIME type, compression flag, name), plus the TXIDs and their read order — and is itself embedded by the same mechanisms, "turtles all the way down." Without it, scattered chunks are "mere rubble"; with it, reconstruction is deterministic for any future reader.
- Verification and reconstruction: collect the manifest's TXIDs, extract payload slices, concatenate in manifest order, hash the result and compare against the committed root — "either the data matches or it does not." Block headers supply timestamp (existence at or before the block) and immutability (proof-of-work weight at height H).
- The economics are quantified: a 100 KB file at 20 bytes per output demands 5,000 outputs; a 1 MB file 50,000 — "permanence by bloat", "the permanence of landfill", parasitic on every node's storage and bandwidth.
- The lean alternative: anchor per-chunk hashes and the Merkle root on-chain, keep bytes off-chain (P2P, cloud, "USB drives buried in the desert"). Raw embedding scales linearly (file size = outputs = cost); anchored proofs scale sublinearly/logarithmically — "You only need to store the right bytes."
- The early-2010s ASCII-art era is dismissed as graffiti without order or manifest — "entertaining but unserious", unprovable; the manifest is "the adult's correction to this adolescent urge."
- Implications: contracts anchored as hashes ("The court receives not gossip but mathematics"), tamper-proof evidence, and archives immune to burning, rot and censorship — Bitcoin as "the notary of last resort", neutral between Magna Carta and memes.

## How Craig reasons (his model/logic)
Sardonic polemic fused with protocol mechanics and engineering economics. The rhetorical frame is anti-gatekeeping — "permanence has nothing to do with consensus", which governs which ledger survives, not which bytes may live within it — while the technical core is disciplined systems design (chunking, Merkle commitments, manifests) and a cost analysis contrasting linear bloat with logarithmic anchoring. The recurring distinction is between physical immutability and logical determinism: only ordered, committed, verifiable structure converts carved bytes into evidence.

## Where this contradicts BTC-mainstream logic
- Rejects the "spam"/"misuse" framing of data embedding that dominates BTC discourse: "if a field accepts bytes, those bytes can be chosen" — etiquette arguments "do not erase bytes."
- Jabs at OP_RETURN's shrinking policy limits ("80 bytes, then 40, then perhaps none at all, depending on the year and the fashion") as committee fashion rather than consensus, and notes OP_RETURN inclusion is miner policy, not protocol.
- Demotes Taproot — "the darling of committees" — from celebrated upgrade to merely one more byte-carrying canvas.
- Implicitly sides with miner-sets-policy (fee-paid inclusion) over developer-sets-policy filtering, consistent with Craig's broader position that consensus rules, not mempool policy, define validity.

## Notable quotes
- "The chain does not blush, it does not take sides, it simply endures."
- "Permanence is not granted by consensus, nor by approval, nor by some committee of ideologues. Permanence is granted by encoding."
- "The ledger was never meant to be the world's scrapbook. It was meant to be its notary."
- "History, for once, will not be written by the victors — but by those who knew how to commit their truths in bytes that no one could erase."

## Connections
Shares the series' recurring toolkit — Merkle roots, manifests, deterministic reconstruction, selective proof — with the privacy essays' receipt trees, and its hash-anchoring design is the same evidentiary logic as the Spentness commitments in the double-spend essay: the chain as court ledger and notary rather than warehouse.
