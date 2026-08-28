---
title: "An immutable file and data store"
era: medium
date: 2019-01-06
slug: an-immutable-file-and-data-store-36f67fc044d7
themes: [privacy, wallets-keys, protocol-immutability, tokenisation]
source_summary: summaries-medium/an-immutable-file-and-data-store-36f67fc044d7.md
url: https://medium.com/@craig_10243/an-immutable-file-and-data-store-36f67fc044d7
---

# An immutable file and data store — core principles

- **Deterministic per-file keys.** Derive a separate encryption key for every stored file from a single master secret: s(file.1) = H[ Da(0) | H(file) | INDEX ], then Pf(1) = s(file.1) × G and the receiving key Pa(1) = Pf(1) + Pa(0). Compromise of one file never cascades, and nothing needs backing up beyond the master secret.
- **Identity keys are not addresses.** Hold an ECDSA identity key Pa(0) (optionally PKI-registered) that is never used as a Bitcoin address; derived sub-keys are unlinkable to it, so no external party can tie stored files to the owner's identity.
- **Firewall funding from identity.** Pay for storage from a one-time funding address with no relation to the owner's identity — the privacy method of the Bitcoin white paper — and discard it afterwards.
- **On-chain data is a first-class payload.** Files embed in transactions via OP_RETURN or OP_PUSHDATA; OP_PUSHDATA4 allows up to 4.3 GB to be pushed to the stack, so multi-gigabyte immutable storage is a protocol-native capability, not an abuse of the ledger.
- **Encrypt with ECDH-style common secrets.** File ciphertext uses a shared secret s.f(1) = Da(0) × Df(0) × G, so outsiders cannot even compute the file's hash; two parties can independently derive the same secret from a shared message, enabling provable exchange of an encrypted-but-public file.
- **Hash-matching deduplicates storage.** Identical files are stored once, with a hashtable/key-index mapping names to content the way Unix links files — an entire drive remains retrievable decades later from any system.
- **Retention policy enforced by the wallet.** A pre-signed nLockTime expiry transaction, held off-chain, can let the funding UTXO expire so the stored file can be pruned — expiry is a wallet-side construct, not a protocol change.
- **Miners are the storage layer.** Permanent on-chain files presuppose professional miners, not hobbyist full nodes, storing and serving data at scale — a design assumption builders can rely on with unbounded blocks.
