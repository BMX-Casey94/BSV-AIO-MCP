---
title: "Trust in Smart Contracts"
era: medium
date: 2018-10-07
slug: trust-in-smart-contracts-28f99f23d7e8
themes: [security-economics, script-technical, protocol-immutability]
source_summary: summaries-medium/trust-in-smart-contracts-28f99f23d7e8.md
url: https://medium.com/@craig_10243/trust-in-smart-contracts-28f99f23d7e8
---

# Trust in Smart Contracts — core principles

- **Signatures sign hashes, not documents.** Because public-key cryptography is slow, a hash of the document is signed; as long as the hash is trusted the document is trusted — and collisions break that trust.
- **Chosen-collision attacks swap signed contracts.** An attacker prepares two contracts with the same hash (MD5-era techniques, aided by macro-capable formats such as Word), obtains a signature on the benign one, and substitutes the other — the signature still verifies, so electronic documents do need to be re-read.
- **Length extension preserves collisions.** With a flawed hash such as MD5, if x and y collide then x+q and y+q also collide — appended data keeps the collision alive.
- **Defence is diligence, not trust.** Ensure the hash used is trusted, use multiple hashes together, and use verification tooling to re-check documents before relying on them.
- **Match hash strength to contract lifetime.** A 160-bit script hash (RIPEMD160(SHA256)) offers perhaps a decade of security, while some contracts must last several; a 256-bit commitment (SHA256(SHA256)) buys many more years — always look at the time frames of contracts.
- **Prefer native script over hash-wrapped indirection.** Anything that can be run in P2SH can be run natively in script, more securely; non-standard-script relay policies are an artificial blockade on use cases, not a security requirement.
- **Miner fees make large scripts a market, not an attack.** Miners are competitive and are paid more for larger scripts, so processing them is the market at work rather than an attack on nodes.
- **The market is producers and consumers.** Not speculators flipping coins: competition forces out less productive members and attracts more efficient ones.
- **Protocol stability is a security feature.** Rather than adding changes, allow businesses to compete on a locked protocol — locking the protocol is what makes long-lived contracts safe.
