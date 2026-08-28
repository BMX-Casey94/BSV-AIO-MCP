---
title: 'BTC and Censorship'
date: 2019-04-15
slug: btc-and-censorship-410265a8a4a2
url: https://medium.com/@craig_10243/btc-and-censorship-410265a8a4a2
themes: [btc-critique, protocol-immutability, mining-consensus, script-technical]
---

# BTC and Censorship
**Date:** 2019-04-15 | **URL:** https://medium.com/@craig_10243/btc-and-censorship-410265a8a4a2
**Subtitle:** There are those out there who try to explain how Bitcoin is about censorship resistance. Primarily, the same people are associated with…

## Core thesis
Censorship resistance in Bitcoin means one thing only: a stable, locked protocol under which a signed transaction stays valid forever, so anything "temporarily censored today… can always be replayed later". Because BTC has repeatedly changed the protocol via soft forks — above all P2SH and SegWit — it can invalidate previously valid transactions, which *is* censorship. Hence his conclusion: "BTC is neither censorship-resistant nor Bitcoin."

## Key arguments and claims
- Opens by quoting a CoinCentral article defining censorship resistance as sending money "without fear of government interference", and calls that claim "absolutely false" as applied to BTC, "the airdrop-altered fork of Bitcoin code designed to confuse the ignorant investor".
- "BTC was eroded the first time a 'soft fork' was allowed. There are no forks in Bitcoin. The security of Bitcoin is based on a stable protocol."
- Quotes the white paper's greedy-attacker passage: even an attacker with >50% of hash power "can only try to change one of his own transactions to take back money he recently spent" — he cannot create value from thin air or seize others' coins, because "honest nodes will never accept a block containing" invalid transactions.
- "No node in the Bitcoin network, no miner nor merchant, and certainly no SPV system will accept an arbitrary change. The protocol is set in stone."
- A transaction time-locked with nLockTime "will remain valid not only now but a decade or 100 years from now" — but only if the protocol never changes.
- P2SH is "the worst addition and breach of the Bitcoin protocol": it "allowed miners to be taken out of the equation", so transaction contents "can now not be checked and validated"; consequently "transactions that are valid can be made invalid".
- Soft forks maroon existing outputs: an output using an opcode later invalidated "cannot be parsed by miners" after the fork, stranding funds already on-chain.
- SegWit compounds it: "you cannot determine the format of signatures or opcodes that may be there in the future."
- The syllogism: "For a transaction to be censorship-resistant, it must be able to be replayed now and in the future… Every time you change the protocol, you censor a transaction."
- The remedy: "we will fix the errors in bad code that has been introduced into Bitcoin and then ensure that the protocol is locked down and set in stone as it was designed to be."

## How Craig reasons (his model/logic)
He wins by redefinition: rather than contest the mainstream claim on its own terms (can a third party block my payment?), he relocates "censorship" to protocol validity over time, then runs a mechanism-level argument through nLockTime, P2SH and SegWit. Authority is anchored by quoting his own white paper text, and the mode is prosecutorial — the mainstream position is introduced only as a blockquote to be dismantled.

## Where this contradicts BTC-mainstream logic
- Inverts the standard censorship-resistance narrative (CoinCentral and Core-adjacent writing): the true censor is the protocol developer who soft-forks, not the state.
- Contradicts the orthodoxy that soft forks are safe, backwards-compatible upgrades: for him every soft fork is a validity change that can strand coins.
- Contradicts the accepted status of P2SH and SegWit as improvements — both are framed as security breaches that remove miner validation.
- Contradicts "BTC is Bitcoin": BTC is "the doppelgänger copy", an "airdrop copy" whose protocol drift disqualifies it.

## Notable quotes
- "There are no forks in Bitcoin."
- "The protocol is set in stone."
- "For a transaction to be censorship-resistant, it must be able to be replayed now and in the future."
- "Every time you change the protocol, you censor a transaction."
- "Hence, BTC is neither censorship-resistant nor Bitcoin."

## Connections
Quotes the Bitcoin white paper's Section-6 greedy-attacker passage as first-party evidence ("As I explained when I wrote the white paper"). A companion piece to the same week's "Bitcoin is not against banks" and the later "The immovable", all built on the stable-protocol doctrine that became the BSV pitch ("locked down and set in stone"). The P2SH/SegWit critique recurs throughout his 2018–2019 writing and underpins his claim that BTC developers, not governments, are the real censors.
