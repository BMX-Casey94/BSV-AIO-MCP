---
title: 'Bitcoin is not against banks'
date: 2019-04-14
slug: bitcoin-is-not-against-banks-fffb7b633fb0
url: https://medium.com/@craig_10243/bitcoin-is-not-against-banks-fffb7b633fb0
themes: [monetary-economics, intermediaries, wallets-keys, btc-critique]
---

# Bitcoin is not against banks
**Date:** 2019-04-14 | **URL:** https://medium.com/@craig_10243/bitcoin-is-not-against-banks-fffb7b633fb0
**Subtitle:** Forget the lies you have been told about Bitcoin. Bitcoin doesn't stop banking, it doesn't even stop central banks.

## Core thesis
Bitcoin was never an attack on banking: it does not stop banks or even central banks, whose own origin on a 1:1 gold reserve proves the point. What Bitcoin actually provides is a single global open ledger on which banks, governments and corporations "cannot fudge the numbers". The essay then pivots into a product vision — a bitcoin e-Wallet and underlying "iDaemon" platform with split-key custody, honest fees and AML-compatible pseudonymity — arguing that the future is regulated, inclusive finance built on Bitcoin, not its abolition.

## Key arguments and claims
- Central banks were "born using a gold standard" with a one-to-one reserve requirement, which quickly slipped to a four-units-to-1 ratio at the British central bank — fractional-reserve banking is presented as a historical fact, not a Bitcoin-era crime.
- "There is little difference between bitcoin held with Coinbase and the modern banking system" — custodial holding recreates banking, so the anti-bank narrative is incoherent.
- The core value proposition is the single ledger: "banks, governments, and corporations cannot fudge the numbers".
- Custody vision: an exchange need not hold full private keys; a "partial seed system" (built on Shamir's Secret Sharing and ECDSA, with dedicated hardware RNG rather than software RNG) means that if the operator is hacked, "the funds cannot be moved because we don't have all the seed parts".
- Security philosophy rejects obscurity: even with architecture known and internals compromised, "our security lies in the genetic building blocks of our transactions and keys. We focus on atomic security rather than assurances."
- Network strength comes from use, not hoarding: "Bitcoin becomes stronger and more powerful the more it is used. Not because people HODL, but because they use Bitcoin on a day-to-day basis, paying fees to miners."
- On settlement honesty: transactions "take roughly 10 minutes to settle, but they take only fractions of a second to propagate" — wallets should show real-time statuses ("Transaction in progress, confirmed, and even failed") rather than sugar-coating.
- Fees should be calculated dynamically per transaction by its variables and bit-count, with optional user "tips" to hasten inclusion; BTC and BCH are dismissed as "(bastardised) copies of Bitcoin" that are "scared of imposing additional fees".
- Privacy model: a new key set per transaction; address reuse enables forensic clustering ("as we have" done); users "remain pseudonymous as the standard". Subpoenas and police seizure are "fine" — the operator holds neither enough key parts nor personal data, so "existing anti-money laundering rules" apply alongside "good old-fashioned police work".
- End goal is the iDaemon platform — e-Wallet, exchange and bank — delivering "global inclusive finance" where "regulators compete and are accountable" and "fraud is expensive and rare", explicitly against "a world of bucket shops and ICO scams".

## How Craig reasons (his model/logic)
Manifesto reasoning: a revisionist historical claim (central banks began as full-reserve institutions) is used to dissolve the anti-bank framing, then replaced with an engineering-and-economics vision in which security is structural ("atomic") rather than promised, and network value is a function of fee-generating usage. The rhetorical mode is the repeated "We have a vision…" litany, pitching a concrete product architecture (split seeds, per-transaction keys, dynamic fees) as the true meaning of Bitcoin.

## Where this contradicts BTC-mainstream logic
- Contradicts the "Bitcoin kills banks / end the Fed" orthodoxy directly: Bitcoin "doesn't stop banking, it doesn't even stop central banks".
- Contradicts "not your keys, not your coins": he actively designs custodial wallets — made safe by split-key cryptography rather than by users holding seeds.
- Contradicts the HODL/store-of-value thesis: value and security come from daily transactional use and miner fees, not scarcity-hoarding.
- Contradicts the fee-market minimalism of BTC/BCH: tipping and dynamically exact fees are "the closest truth to how Bitcoin really works".
- Contradicts anonymity-tooling culture: pseudonymity plus subpoena-compatibility and AML compliance is the design goal, not a compromise.

## Notable quotes
- "Bitcoin doesn't stop banking, it doesn't even stop central banks."
- "There is little difference between bitcoin held with Coinbase and the modern banking system."
- "Not because people HODL, but because they use Bitcoin on a day-to-day basis, paying fees to miners."
- "We focus on atomic security rather than assurances."
- "Our users remain pseudonymous as the standard."
- "We have a vision, and it is Bitcoin."

## Connections
Sits in the April 2019 cluster with "BTC and Censorship" and "We don't want to lead with 'anonymous'", all asserting the pro-law, pro-banking reading of Bitcoin months after the BCH/BSV split; the swipe at "(bastardised) copies of Bitcoin (BTC, BCH)" places it firmly in the BSV camp. The split-seed custody design echoes his longstanding invocation of Shamir's Secret Sharing (relevant later to the Kleiman litigation's "Tulip Trust" claims), and the iDaemon/e-Wallet pitch recycles his pre-2015 Australian venture narrative ("Forged in Australia — taken global").
