---
title: "Private blockchains are a matter of economic forces"
era: medium
date: 2018-12-18
slug: private-blockchains-are-a-matter-of-economic-forces-9b41c18e2a84
themes: [security-economics, script-technical, protocol-immutability, scaling-throughput]
source_summary: summaries-medium/private-blockchains-are-a-matter-of-economic-forces-9b41c18e2a84.md
url: https://medium.com/@craig_10243/private-blockchains-are-a-matter-of-economic-forces-9b41c18e2a84
---

# Private blockchains are a matter of economic forces — core principles

- **Public versus private blockchain is a purely economic outcome.** Confidentiality is properly achieved with encryption (symmetric keys, one-time pads), not by hiding data on a private chain; once a public chain is more secure, more accessible and cheaper (no servers, no staff), there is no rational case for a private one.
- **Security by obscurity is not security.** "An encrypted session is more secure than one that is merely 'hidden' or 'air-gapped'" — access control comes from cryptography, whether inside a firewall or on the web.
- **Proof-of-existence is native to Bitcoin Script.** The canonical hash puzzle `OP_HASH256 <hash> OP_EQUAL` — e.g. the hash of the Bitcoin white paper's abstract — attests a document on-chain; the enterprise use of "private" chains is "rather simple in Bitcoin".
- **A hash puzzle's spendability is the fee mechanism, not a flaw.** The objection that anyone (a miner) can take the output assumes it matters — the spendable output is "a way to pay miners for a service. Bitcoin is a commodity ledger."
- **Forensic record construction.** A data push (in script or OP_RETURN) stores a file identifier; a second input/output pair carries the file hash as a hash puzzle; linking inputs to outputs builds "a forensic proof of a file's existence… a record of a contract between parties that can stand on its own in court".
- **Hash-of-hash preserves confidentiality.** Using SHA256d, the puzzle commits to the hash of the file hash — "evidence and proof without ever leaking the file"; RIPEMD160 can shrink the pre-image further if its security suffices.
- **Retention is programmable via nLockTime.** A zero/low-fee transaction with an nLockTime spend 7 years out keeps a record for the statutory retention period, then lets miners claim and prune it — "It is the fee for storing the data and adding value."
- **Enterprise use cases.** Log-file integrity, software-version verification ("Microsoft host hashes, but all websites are vulnerable to hacking, the Bitcoin blockchain is not"), contract hashes, and Cisco IOS image validation with vendor-marked addresses.
- **Cost and fee posture.** Storing a hash puzzle on Bitcoin SV costs in the order of $0.02 if immediate inclusion is not needed (3 blocks or 30 minutes acceptable) — "Fees should be low."
- **Scaling is the enabler.** "This is why we are scaling Bitcoin to allow millions of transactions a second… The commodity value of Bitcoin comes through use."
