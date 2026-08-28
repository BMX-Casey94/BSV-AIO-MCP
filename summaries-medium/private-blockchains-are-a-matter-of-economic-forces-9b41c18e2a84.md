---
title: 'Private blockchains are a matter of economic forces'
date: 2018-12-18
slug: private-blockchains-are-a-matter-of-economic-forces-9b41c18e2a84
url: https://medium.com/@craig_10243/private-blockchains-are-a-matter-of-economic-forces-9b41c18e2a84
themes: [security-economics, script-technical, protocol-immutability, scaling-throughput]
---

# Private blockchains are a matter of economic forces
**Date:** 2018-12-18 | **URL:** https://medium.com/@craig_10243/private-blockchains-are-a-matter-of-economic-forces-9b41c18e2a84
**Subtitle:** The issue of “Private Blockchains” comes to a purely economic outcome. The issue of public vs private is and has always been one of…

## Core thesis
The public-versus-private blockchain question is not ideological but "a purely economic outcome": confidentiality is properly achieved with encryption (symmetric keys, one-time pads), not by hiding data on a private chain, so once a public chain is cheaper, faster and more secure there is no rational case for a private one. He then demonstrates that Bitcoin scripts already deliver the main enterprise use of "private" chains — tamper-proof proof-of-existence — via hash puzzles that pay miners directly, rebutting the standard objection that such outputs are "insecure".

## Key arguments and claims
- Security by obscurity is not security: "An encrypted session is more secure than one that is merely 'hidden' or 'air-gapped'" (linking his "SCADA Air Gaps Do Not Exist" piece); symmetric-key encryption and one-time pads give access control "whether inside a firewall or on the web".
- The canonical proof-of-existence script: `OP_HASH256 5b093a8f…a259ae OP_EQUAL` — the hash of the Bitcoin white paper's abstract — shows a "private blockchain" use (proof and attestation of a transaction) is "rather simple in Bitcoin".
- Rebutting the Bitcoin wiki: the wiki calls hash puzzles insecure because "any transaction attempting to spend them can be replaced with a different transaction sending the funds somewhere else". Wright's answer: "The (false) assumption here is that it matters" — the spendable output is "a way to pay miners for a service. Bitcoin is a commodity ledger."
- Cost claim: storing a hash puzzle on Bitcoin SV costs "in the order of $0.02 today" if immediate inclusion is not needed ("if 3 blocks or 30 mins are OK"). "Fees should be low."
- Construction for forensic records: a Data Push (in script or OP_Return) stores a file identifier, a second input/output pair carries the file hash as a hash puzzle, and linking inputs to outputs builds "a ledger of values that we seek to prove" — "a forensic proof of a file's existence… a record of a contract between parties that can stand on its own in court".
- Hash-of-hash privacy: using SHA256d, the puzzle commits to the hash of the file hash, so "we have created a means to allow evidence and proof without ever leaking the file"; RIPEMD160 can shrink the pre-image further "if the security of RipeMD160 is good enough".
- Enterprise use cases: log-file integrity, software-version verification ("Microsoft host hashes, but all websites are vulnerable to hacking, the Bitcoin blockchain is not"), contract hashes, and Cisco IOS image validation where Bitcoin addresses mark the vendor source.
- Miner-payment mechanics make retention programmable: a zero/low-fee transaction with "an nLocktime value for a spend in 7 years" keeps the record for a statutory retention period and then lets it be spent and pruned — "Let the miners have it. It is the fee for storing the data and adding value."
- The economic kill-shot: if the public chain is "more secure, more easily accessible, and also less expensive (no servers to run, no staff to maintain it)… Why would you even start thinking about a private Internet or a private blockchain…? That is the real puzzle."
- Scaling is the enabler: "This is why we are scaling Bitcoin to allow millions of transactions a second… The commodity value of Bitcoin comes through use."

## How Craig reasons (his model/logic)
Wright argues as a security economist: confidentiality is a controls problem solved by cryptography, so the only remaining variable is cost, and on cost a public commodity ledger beats any private deployment. The method is demonstrative engineering — actual script opcodes, a worked two-input transaction construction, dollar fee figures, named vendor examples (Microsoft, Cisco) — capped by a reductio: reframe the "insecurity" of hash puzzles as their point (the output is miner payment), and the objection dissolves. Patent links (WO2017145048A1, EP3268914B1) anchor the techniques to nChain's IP portfolio.

## Where this contradicts BTC-mainstream logic
- Contradicts the 2017–2018 enterprise-blockchain orthodoxy (Hyperledger, R3, "permissioned DLT"): private chains are economically irrational once a public chain scales — confidentiality comes from encryption, not from gatekeeping the ledger.
- Contradicts the Bitcoin wiki / Core developer position that hash-puzzle outputs are insecure and improper: the "flaw" is the fee mechanism, and data storage is legitimate paid use.
- Contradicts the "OP_RETURN-only, minimal data" etiquette and the broader "blockchain is not a data store" doctrine: "Bitcoin is a commodity ledger. It is for use in storing data and for transactions."
- Contradicts the high-fee "digital gold" settlement-layer model: "Fees should be low", with concrete BSV figures ($0.02 for deferred inclusion) against BTC's fee market.
- Contradicts UTXO-set puritanism: outputs can be designed to be spent by miners and pruned after a retention window, treating the UTXO set as a renewable resource rather than a sacred permanent record.

## Notable quotes
- "The issue of public vs private is, and has always been one of setting the correct controls."
- "An encrypted session is more secure than one that is merely 'hidden' or 'air-gapped.'"
- "It is also said to be insecure, as a 'miner could take the output.' Well, the other way to think about it is that it is a way to pay miners for a service."
- "Bitcoin is a commodity ledger. It is for use in storing data and for transactions."
- "This is a forensic proof of a file's existence. Signed and encoded, it can be a record of a contract between parties that can stand on its own in court."
- "Why would you even start thinking about a private Internet or a private blockchain…? That is the real puzzle."

## Connections
Extends the commodity-ledger thesis of "Bitcoin is a commodity" (12 December 2018) and supplies the technical mechanics behind the compliance use cases in "The lie of anarchy" (13 December 2018) and the "BLOCKCHAIN Based Accounting" white paper (14 December 2018) — the same WO2017145048A1 patent on secure data extraction is linked in both. The air-gap reference connects to his earlier "SCADA Air Gaps Do Not Exist" security writing, and the nLocktime retention trick recurs in his later data-storage and Teranode material.
