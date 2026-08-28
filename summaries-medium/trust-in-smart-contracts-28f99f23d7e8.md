---
title: 'Trust in Smart Contracts'
date: 2018-10-07
slug: trust-in-smart-contracts-28f99f23d7e8
url: https://medium.com/@craig_10243/trust-in-smart-contracts-28f99f23d7e8
themes: [security-economics, script-technical, protocol-immutability]
---

# Trust in Smart Contracts
**Date:** 2018-10-07 | **URL:** https://medium.com/@craig_10243/trust-in-smart-contracts-28f99f23d7e8
**Subtitle:** Both electronic and paper documents are subject to tampering. The discovery of collisions has demonstrated that the process of signing a…

## Core thesis
Digital signatures sign a hash, not a document, and hash collisions mean an attacker can swap a signed document for a different one with the same hash — so electronic contracts "do need to be re-read". Craig generalises this into an attack on pay-to-script-hash (P2SH): its 160-bit hash "likely has a decade of security", which is inadequate for long-term contracts, and "P2SH was never necessary" because anything run in P2SH can be run natively in script "more securely". The conclusion is a BSV-formation-era policy: end non-standard-script blocking, let miners process large scripts for larger fees, and lock the protocol.

## Key arguments and claims
- The collision attack on signed contracts: an attacker prepares "Sell at $500,000.00 (Order 1)" and "Sell at $1,000,000.00 (Order 2)" with the same MD5 hash using Confoo/Stripwire-style techniques; the buyer signs Order 1, the attacker substitutes Order 2, and the signature still verifies — "The ability of Microsoft Word to run macros and code makes it a relatively simple attack".
- Why signatures are vulnerable: "public key crypto is slow. So rather then signing the entire document, a hash of the document is signed. As long as the hash is trusted, the document is trusted. The concern is that collisions exist."
- Length-extension appendix: with a flawed hash like MD5, if x and y collide, then x+q and y+q also collide — appended data preserves the collision.
- Defence is diligence, not trust: "electronic documents do need to be re-read — but it is simpler in that there are tools to verify these. Ensure that the hash used is trusted, and even use multiple hashes together."
- P2SH's hash choice is the long-term risk: "SHA256(SHA256) vs RIPEMD160(SHA256)" — a 256-bit P2SH hash "would have many more years before it could be attacked", whereas as deployed "P2SH likely has a decade of security, but, seeing that some contracts need to last several, it is time to ask why it is used or needed."
- "The reality is that anything that can be run in P2SH can be run without P2SH — more securely. The imposition of non-standard scripts has been used to (falsely) block many use cases from Bitcoin (as others seek to have side chains, altcoins, etc.)"
- Pre-split BSV announcement: "This is why SV Pool and CoinGeek (and Bitcoin SV) plan to start processing non-standard scripts. To us, your long-term security matters."
- The "Raspberry Pi myth": the claim that non-standard scripts harm nodes is false because "Miners are competitive. They fight to be paid. They are paid more for larger scripts, so this is not an attack, it is the market at work."
- Market definition: "The market is not the speculators and the traders flipping coins, it is the producers and consumers" — the "dog-eat-dog" caricature of competition is rejected as socialist; real markets force out less productive members and raise profit levels that attract more efficient competitors.
- "Rather than adding foolish changes, we should be allowing businesses to compete. This is why locking the protocol matters."

## How Craig reasons (his model/logic)
He opens with a concrete cryptographic demonstration (chosen-collision contract swap) and uses it to discipline a vague intuition — that signed documents are tamper-proof — then scales the same hash-lifetime logic up to protocol design. The reasoning is actuarial: match hash strength to contract duration ("always look at the time frames of contracts"), and treat security as a cost-benefit calculation rather than an absolute. The second half pivots from cryptanalysis to economic argument, defining "the market" as producers and consumers so that miner fee incentives, not node-operator sentiment, become the legitimate arbiter of which scripts get processed.

## Where this contradicts BTC-mainstream logic
- P2SH is a respected, consensus-entrenched standard (in Bitcoin since 2012); Craig calls it "never necessary" and recommends people "avoid" it — a direct inversion of the script-versioning orthodoxy that P2SH was the safe way to extend Bitcoin.
- Contradicts the non-standard-script policy defended by node-centric thinking: what BTC/BCH clients relay as "non-standard" is reframed as an artificial blockade serving sidechain and altcoin interests.
- Rejects the "every user runs a full node on a Raspberry Pi" security model explicitly by name, substituting competitive miner incentives as the real security mechanism.
- Reframes "the market" away from price/speculation (the mainstream crypto usage) to producer-consumer productivity — an explicit swipe at trader culture.
- "It is time to end the fallacy that it helps with scaling. Bitcoin scales now." — denies that P2SH/L2-style indirection is a scaling technology at all, weeks before the BCH/BSV split over exactly these questions.

## Notable quotes
- "Unfortunately this is not true." (on the claim that electronic contracts need no re-reading)
- "As long as the hash is trusted, the document is trusted. The concern is that collisions exist."
- "P2SH likely has a decade of security, but, seeing that some contracts need to last several, it is time to ask why it is used or needed."
- "The fact is, P2SH was never necessary, and though it is a part of Bitcoin now, it is one I recommend people to avoid."
- "Native scripting is better than P2SH, and it is time to end the fallacy that it helps with scaling. Bitcoin scales now."
- "The market is not the speculators and the traders flipping coins, it is the producers and consumers."

## Connections
Direct sequel to "Creating a Smart Contract Registry" (previous day), supplying the signature-security caveat for long-lived on-chain contracts. One of the earliest public namings of Bitcoin SV alongside SV Pool and CoinGeek, a month before the November 2018 BCH/BSV split — the "non-standard scripts" pledge became a BSV differentiator. The "myth of the Raspberry Pi" and "locking the protocol" refrains recur throughout his 2018-2019 writing (e.g. "Limited change to bring stability", "Why scaling on-chain works"), and the anti-P2SH position later hardened into BSV's restoration of native script usage.
