---
title: "The myth of the full validation node"
era: medium
date: 2018-12-21
slug: the-myth-of-the-full-validation-node-d7db52748649
themes: [btc-critique, mining-consensus, spv-light-clients, protocol-immutability]
source_summary: summaries-medium/the-myth-of-the-full-validation-node-d7db52748649.md
url: https://medium.com/@craig_10243/the-myth-of-the-full-validation-node-d7db52748649
---

# The myth of the full validation node — core principles

- **Miners are the nodes.** Under the white paper's definition a node creates blocks: "If you are not creating blocks… you are not accepting or validating anything. You are merely doing as miners say." Non-mining "full validating nodes" enforce nothing — when the majority of miners accept a conflicting chain, orphans happen.
- **The security question is validating transactions in blocks, not validating rules.** User-side block re-validation adds no enforcement power to the network.
- **SPV is the secure user model.** An SPV wallet takes a header from any miner matching the required proof-of-work, checks the merkle path, and detects double-spends in seconds — faster and more reliably than a user validating full blocks.
- **Validation-time asymmetry is an attack vector against non-mining validators.** On a slow link a user may need 16–20 minutes to validate an honest 10 GB block but under 30 seconds for an attacker's crafted 100-transaction block — so a man-in-the-middle that delays honest-chain delivery gets the attacker's block accepted first. Miners reject the orphan within about six blocks, but the defrauded user may take hours or days to revert.
- **Distrusting the competitive miner network makes users less secure.** "In not trusting the competitive process that is Bitcoin, in thinking her UASF node matters, she becomes less secure" — the belief that non-mining nodes help "lowers your own personal security, and limits the usefulness of Bitcoin".
- **Decentralisation is a tool to introduce competition — nothing more.** It is a means, and a small part of the system, not an end in itself.
- **The protocol is set in stone at v0.1.0.** "Soft forks and all of the changes make something that is not Bitcoin" — with a soft fork "you are validating the fork of the week". The substance of Bitcoin was the design, not the code: "much much more of the work that went into creating Bitcoin was designing rather than coding".
- **Builder guidance.** Build products on SPV and the competitive miner network; do not architect around users running validating infrastructure, and demand a network whose rules do not change under you.
