---
title: "The puzzle of the double hash"
date: 2019-04-30
era: medium
themes: [mining-consensus, scaling-throughput, law-regulation, script-technical]
source: summaries-medium/the-puzzle-of-the-double-hash-968196edb06d.md
---

# The puzzle of the double hash — core principles

- **Double hashing is not a collision defence.** If two pre-images collide, they still collide after a second hash; an extra hash loses a bit of information rather than adding birthday-attack security.
- **Address construction can worsen collisions.** SHA-256 then RIPEMD-160 creates two collision surfaces, so the chance of two public keys mapping to one address is not improved by the extra hash.
- **Bitcoin’s security is economic.** Attack cost versus defence cost is the standard; length-extension attempts would be detected, monitored and blocked, and Script already offers better mitigations than SHA-256d folklore.
- **The double hash splits mining from data.** The intermediate hash can be sent to a miner who proofs a block without holding every transaction; via a Merkle tree, all but one transaction can be withheld.
- **An ASIC facility need not host the block.** Proof-of-work and verification become specialised, contractible functions: the hasher pays the verifier on valid blocks, and if either cheats both lose.
- **Power and bandwidth need not sit together.** Places with cheap power but poor network access can still mine; large miners already treat block propagation as a solved industrial problem.
- **Immutability of the hash is not uncensorable delivery.** Jurisdictions can prune illicit payloads and still validate the hash, logging and restricting who receives the content.
- **The miner is a distributed function.** Industrial Bitcoin is a supply chain of hashing, verification and hosting, not a requirement that every hasher store every byte.
