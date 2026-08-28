---
title: "BTC and Censorship"
date: 2019-04-15
era: medium
themes: [protocol-immutability, mining-consensus, script-technical]
source: summaries-medium/btc-and-censorship-410265a8a4a2.md
---

# BTC and Censorship — core principles

- **Censorship resistance is replayability under a locked protocol.** A signed transaction that is temporarily refused today can always be replayed later — that is the only meaning that matters.
- **There are no forks in Bitcoin.** Security is based on a stable protocol; the first soft fork that changes validity leaves Bitcoin.
- **Even a majority attacker cannot seize others' coins.** As the white paper states, a greedy attacker with more than half the hash power can only try to change one of his own transactions to take back money he recently spent; he cannot create value from thin air.
- **No node accepts an arbitrary change.** No miner, merchant or SPV system will accept an arbitrary protocol change; the protocol is set in stone.
- **An nLockTime transaction must remain valid for a century.** It stays valid now, in a decade, or in a hundred years — but only if the protocol never changes.
- **Hiding script from miners is a protocol breach.** Pay-to-script-hash constructions that take miners out of validating transaction contents allow valid transactions to be made invalid.
- **Soft forks can maroon existing outputs.** An output using an opcode later invalidated cannot be parsed by miners after the change, stranding funds already on-chain.
- **Future-unknown signature formats are censorship.** If you cannot determine the format of signatures or opcodes that may appear later, you cannot guarantee today's transaction will remain valid.
- **Every protocol change censors a transaction.** For a payment to be censorship-resistant it must be replayable now and in the future; changing the rules is the act of censorship.
- **Lock the protocol after restoring original validity.** Fix errors introduced into the code, then ensure the protocol is locked down and set in stone as designed.
