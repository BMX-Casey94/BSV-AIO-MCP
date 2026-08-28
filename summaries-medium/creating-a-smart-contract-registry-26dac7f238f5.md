---
title: 'Creating a Smart Contract Registry'
date: 2018-10-06
slug: creating-a-smart-contract-registry-26dac7f238f5
url: https://medium.com/@craig_10243/creating-a-smart-contract-registry-26dac7f238f5
themes: [script-technical, tokenisation, law-regulation]
---

# Creating a Smart Contract Registry
**Date:** 2018-10-06 | **URL:** https://medium.com/@craig_10243/creating-a-smart-contract-registry-26dac7f238f5
**Subtitle:** This post is the first in a series to describe a number of important methods that are needed in creating commercially viable contracts in…

## Core thesis
Modern contract management is "massively ad-hoc" — local copies, manual maintenance, and natural language that needs specialist lawyers to unpick — and Bitcoin (BCH) can fix this with an on-chain registry of smart contracts. The mechanism: represent each contract as an unspent transaction output (UTXO) whose metadata points to an off-chain repository holding the full formal contract; the contract is valid while the UTXO sits unspent and complete/terminated the moment it is spent. The post is the first of a series and is explicitly a walkthrough of the granted nChain patent EP3257191B1 ("Registry and automated management method for blockchain-enforced smart contracts").

## Key arguments and claims
- A contract's existence can be public while its contents stay private: "it can be public knowledge that there is a contract between A and B that anyone can verify, but anything other than its existence is restricted to authorised parties" — implemented with encrypted data on DHTs.
- The UTXO itself is the contract token: "the contract remains in effect for as long as there is a valid unspent transaction output representing the contract"; spending the output marks completion, and the redeem-script metadata acts "as a pointer or reference to an off-chain repository of the formal details of the contract".
- Publication uses a pay-to-script-hash address deterministically derived from the issuer's key plus the contract metadata, so anyone holding the contract document and knowing the issuer can re-derive the redeem script and scan the chain for the matching UTXO.
- Contract expiry and roll-over are native Bitcoin: publish the contract UTXO and simultaneously a second transaction spending it with CheckLockTimeVerify set to the end date; rolling contracts spend the UTXO into the "new" rolled-on contract, and cancellation is just spending the output before the locktime.
- The formal contract model is a DFA (deterministic finite automaton): parameters and their sources, state definitions, transitions with triggers and rules, and a rules table — expressed in a codification scheme such as XBRL, XML or JSON.
- A "compiler" converts the codified contract into oracle code and/or Bitcoin script; a "browser" renders it back into "formal legal language" — Craig notes research "to auto-generate a readable document (in a format such as PDF etc.) from the smart contract itself".
- The DFA can be implemented three ways, alone or mixed per state transition: directly as Bitcoin transactions in script, as external oracle processes monitoring the chain, or as instructions for a "smart wallet" (a local oracle handling conditions such as input assignment).
- Sub-contracts and conditions are the same construct as contracts — UTXOs with deterministic redeem-script addresses — with sub-keys derived via the granted patent "Determining a common secret… and hierarchical, deterministic cryptographic keys" (EP3268914B1), enabling hierarchies such as a 100 BCH contract split into five 20 BCH checkpoint sub-contracts, each closable by different signatories (notaries, surveyors via m-of-n multisig).
- Partial protection is a first-class feature: the hash can be scoped over a sub-set of the contract so that amendable elements (e.g. the beneficiary of a unit trust after on-sale) do not force re-issuance, and individual sections can be encrypted while the overall content stays public.
- Because the blockchain is permanent, "a contract cannot be terminated by simply removing the associated Contract document", so the repository "must have the same storage and retention rules as the Blockchain itself".
- "Control contracts" generalise the idea: any UTXO can become a smart contract, e.g. a merchant payment address whose oracle sweeps funds only after a paid access period ends.

## How Craig reasons (his model/logic)
This is patent-specification reasoning transplanted to a blog: numbered use cases ("150 — Create a sub-contract", "[200] Check Contract"), defined key terms, and mechanism enumeration rather than polemic. The method is compositional — take primitive Bitcoin features (UTXO, P2SH, CLTV/nLockTime, deterministic key derivation) and show each contract-lifecycle requirement (publish, verify, amend, expire, roll over, terminate) reduces to one of them. Authority is grounded in his own granted patents and nChain white papers, with the DFA/automata formalism giving the legal subject matter an engineering grammar.

## Where this contradicts BTC-mainstream logic
- Against the 2018 orthodoxy that Bitcoin script is too limited for real contracts and that such functionality belongs on Ethereum or sidechains: the full contract lifecycle — registry, conditionality, sub-contracts, expiry — is built from standard BCH transactions, with tokenisation "available for Bitcoin Cash" promised in follow-ups.
- Against the "store data on-chain" reading of blockchain contracts: the chain holds only existence proofs and hashes; the contract body lives in access-controlled off-chain repositories — a direct rejection of both on-chain-data maximalism and the claim that this requires a new platform.
- Against the irreversibility-as-bug framing: permanence is treated as a feature that forces proper legal retention rules on the repository side, not something to be designed away.
- Implicitly against "code is law": contracts remain formal legal instruments rendered into "formal legal language" on demand, with oracles as "trusted third-parties" building in conditionality — human legal infrastructure is assumed, not eliminated.

## Notable quotes
- "One of the key problems with modern contract management is that it tends to be massively ad-hoc with local stores and copies of contracts that are manually maintained and managed."
- "The contract remains in effect for as long as there is a valid unspent transaction output representing the contract."
- "As soon as this output is spent, then the contract is considered complete."
- "It can be public knowledge that there is a contract between A and B that anyone can verify, but anything other than its existence is restricted to authorised parties."
- "A contract cannot be terminated by simply removing the associated Contract document."
- "This mechanism can then be used to turn any UTXO into a smart contract, such as for digital access."

## Connections
First post of an announced series on commercially viable BCH contracts, explicitly continuing into tokenisation posts, oracle posts, and five linked scenario posts (public registry of an asset, creation/registry of an asset, lease contract, rolling contract, contract conditionality). It is a public walkthrough of nChain granted patents EP3257191B1 (smart-contract registry) and EP3268914B1 (determining a common secret / hierarchical deterministic keys), and pairs with the following day's "Trust in Smart Contracts" on the security of the underlying signature scheme. The CLTV-based expiry and deterministic sub-key machinery reappear across his later BSV-era contract and token writing.
