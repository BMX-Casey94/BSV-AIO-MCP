---
title: "Scenario 2: Creation and Registry of an Asset"
era: medium
date: 2018-10-06
slug: scenario-2-creation-and-registry-of-an-asset-2b6379bc57ef
themes: [tokenisation, privacy, wallets-keys, property-rights]
source_summary: summaries-medium/scenario-2-creation-and-registry-of-an-asset-2b6379bc57ef.md
url: https://medium.com/@craig_10243/scenario-2-creation-and-registry-of-an-asset-2b6379bc57ef
---

# Scenario 2: Creation and Registry of an Asset — core principles

- **On-chain registration need not expose the owner.** An owner can register an asset on the blockchain without directly revealing ownership, while keeping the record publicly verifiable.
- **Deterministic sub-keys represent the asset.** The owner creates a deterministic sub-key derived from his public key to stand for the asset; ownership is verifiable through the key relationship rather than by naming the owner.
- **The asset becomes the on-chain actor.** Once created, the asset itself publishes details about itself onto the blockchain — the asset, not the owner, is the publishing entity.
- **Pseudonymity with verifiable linkage, not anonymity.** The registry entry stays fully public and auditable while the owner is pseudonymised through key derivation — privacy through key management rather than mixing or anonymity systems.
- **The mechanism is standardised.** Deterministic sub-key ownership verification using a distributed hash table and peer-to-peer ledger is documented in patent EP3295350B1; the state machine is unchanged from bare registration (Scenario 1).
