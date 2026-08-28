---
title: "The Gospel According to Grok"
date: 2026-05-06
era: substack
themes: [satoshi-history, identity, privacy, satire]
source: summaries/the-gospel-according-to-grok.md
---

# The Gospel According to Grok — core principles

- **The chain records transactions, not identity.** Scripts, outputs, headers, hashes and proof-of-work sit on the ledger. There is no evidential bridge from key to person. "The chain is the attestation" hides the missing step.
- **A signature proves control of a key, and nothing more.** It does not prove identity, authorship, originality of the key, continuity of possession, or lawful ownership.
- **Attribution must precede a signature's evidential value.** If Alice hands Bob a public key directly, later signatures confirm control within that relationship. Finding a key in a ledger years later and declaring it Alice's because convenient inverts the logic.
- **The white paper's privacy model forbids persistent attribution.** Keep public keys anonymous and use a new key pair for each transaction. Treating keys as identity contradicts the architecture that produces them.
- **The genesis block is initialisation, not a Section-5 mine.** It has no previous block, extends no chain, and is accepted because it is hard-coded. The genesis coinbase creates no normal spendable output and no signed thread tying early activity to one actor.
- **Key control is not legal ownership.** A thief's signature verifies; an employee holding a corporate key verifies; an escrow agent verifies. The protocol checks script conditions, not provenance — a deliberately narrow mechanism.
- **If ledger activity attributed identity, every user's pseudonymity would collapse.** Every key would be an identity hook and every unspent output a confession. Privacy and key non-reuse cannot be preached for everyone while early keys are treated as permanent identity markers.
- **Identity is established by a body of evidence.** A signature is at most one component, never the source of the attribution itself. The required link is external: a statement, an email, a signed message from an already-attributed key, a direct key handoff, or an independent witness.
