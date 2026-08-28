---
title: "Creating a Smart Contract Registry"
era: medium
date: 2018-10-06
slug: creating-a-smart-contract-registry-26dac7f238f5
themes: [script-technical, tokenisation, law-regulation]
source_summary: summaries-medium/creating-a-smart-contract-registry-26dac7f238f5.md
url: https://medium.com/@craig_10243/creating-a-smart-contract-registry-26dac7f238f5
---

# Creating a Smart Contract Registry — core principles

- **The UTXO is the contract token.** A contract remains in effect for as long as there is a valid unspent transaction output representing it; as soon as that output is spent, the contract is considered complete or terminated.
- **The chain holds existence; the repository holds content.** It can be public knowledge that a contract exists between A and B — verifiable by anyone — while everything beyond its existence is restricted to authorised parties; the redeem-script metadata acts as a pointer to an off-chain repository holding the formal contract, with encrypted data on DHTs.
- **Deterministic publication enables verification.** Publishing to a pay-to-script-hash address deterministically derived from the issuer's key plus the contract metadata lets anyone holding the contract document and knowing the issuer re-derive the redeem script and scan the chain for the matching UTXO.
- **Expiry and roll-over are native Bitcoin.** Publish the contract UTXO together with a second transaction spending it, with CheckLockTimeVerify set to the end date; rolling contracts spend the UTXO into the new rolled-on contract, and cancellation is simply spending the output before the locktime.
- **The formal contract model is a DFA.** A deterministic finite automaton specifies parameters and their sources, state definitions, transitions with triggers and rules, and a rules table — codified in a scheme such as XBRL, XML or JSON.
- **Compile to script, render back to legal prose.** A compiler converts the codified contract into oracle code and/or Bitcoin script; a browser renders it back into formal legal language, with research into auto-generating readable documents (e.g. PDF) from the smart contract itself.
- **Three execution modes, mixable per transition.** The DFA can be implemented directly as Bitcoin transactions in script, as external oracle processes monitoring the chain, or as instructions for a smart wallet (a local oracle handling conditions such as input assignment) — alone or in combination per state transition.
- **Sub-contracts are the same construct.** Hierarchical deterministic sub-keys (patent EP3268914B1) derive sub-contract UTXOs with deterministic redeem-script addresses — e.g. a 100-unit contract split into five 20-unit checkpoint sub-contracts, each closable by different signatories (notaries, surveyors) via m-of-n multisig.
- **Partial protection without re-issuance.** The hash can be scoped over a subset of the contract so amendable elements (e.g. the beneficiary of a unit trust after on-sale) change without forcing re-issuance, and individual sections can be encrypted while the overall content stays public.
- **Permanence imposes retention duties.** Because the blockchain is permanent, a contract cannot be terminated by simply removing the associated document — the repository must have the same storage and retention rules as the blockchain itself.
- **Any UTXO can become a control contract.** For example, a merchant payment address whose oracle sweeps funds only after a paid access period ends — digital access control built from standard transactions.
