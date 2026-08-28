---
title: 'Bitcoin in law'
date: 2018-12-18
slug: bitcoin-in-law-7f2604f9fcd6
url: https://medium.com/@craig_10243/bitcoin-in-law-7f2604f9fcd6
themes: [law-regulation, property-rights, tokenisation, spv-light-clients]
---

# Bitcoin in law
**Date:** 2018-12-18 | **URL:** https://medium.com/@craig_10243/bitcoin-in-law-7f2604f9fcd6
**Subtitle:** On confirmation, the recipient faces minimal, if any, ongoing risk of fraud from the transferer (Alice, A). There remains an ever…

## Core thesis
A short doctrinal note making two points. First, settlement risk in Bitcoin is minimal even at zero confirmations: a merchant who checks nodes via `gettxout` (or SPV proofs) faces only an "ever diminishing" re-org risk, and mempool acceptance already constitutes "good delivery" absent miner collusion. Second, the legal character of a transfer depends on use: bitcoin transferred as currency passes good title even through a thief's hands (the money rule of *Miller v Race*), while tokenised assets on Bitcoin follow ordinary chattel rules, so stolen tokens remain recoverable from innocent recipients.

## Key arguments and claims
- Post-confirmation safety: "On confirmation, the recipient faces minimal, if any, ongoing risk of fraud from the transferer"; the residual block re-org risk becomes "a near-zero probability" after multiple blocks.
- 0-conf verification procedure: the merchant calls `gettxout` on a node — "If it returns anything, then the output is unspent"; in SPV, knowing the transaction path and its existence, the only failure mode is a double-spend.
- Double-spend requires collusion: "Without explicit collusion from A and a miner, and this is probabilistic at best and not in any miner's interest, the simple addition of a transaction (TX) into the mempool is good delivery."
- The organising distinction: "The rules of property and the rules of currency differ significantly." Under ordinary personal-property rules "the transferee obtains only the title originally held by the transferer" (nemo dat) — so a thief M passing stolen property to innocent B leaves A with "a right of recovery from B, even where B received no notice of an adverse claim".
- Tokenised assets are chattels: "a tokenised asset can be linked and registered to a key, but also to the individual's identity (such as through a PKI-based key registration process)", enabling the victim to "seek redress in court"; such "sub assets" use "the commodity value of Bitcoin without necessitating the currency use".
- The currency exception: *Miller v Race* (1758) — Bank of England notes, not then legal tender, were held to pass under the law of money, so the owner of a stolen note could not recover from an innocent recipient for value. This "acts as a foundation for the monetary use of Bitcoin in cash (or currency) exchange for value. A party who has received bitcoin as a consideration for an exchange at value receives good title."
- The dual regime stated plainly: "As a transfer of currency or private money, Bitcoin is governed by the money rules. When used as a means to record other property, it is covered by the rules for ordinary chattels."
- Authorities cited: Palgrave's *Dictionary of Political Economy* (1908) on personal property; *Miller v Race* ((1791), 1 Burr. 452); Blackstone's *Commentaries* II (1775); Raphael Cohen Morris on "Property and Sovereignty".

## How Craig reasons (his model/logic)
Wright runs classic common-law doctrinal analysis — the nemo dat rule for chattels against the negotiability/money exception — and maps it onto Bitcoin's technical settlement mechanics (RPC calls, mempool acceptance, SPV). The argumentative move is bifurcation: rather than asking "what is Bitcoin?" in the abstract, he insists the applicable rule follows the use, currency or property ledger. Technical claims (0-conf safety, miner incentives) are asserted from protocol mechanics and then given legal significance as "good delivery".

## Where this contradicts BTC-mainstream logic
- Contradicts the "wait for six confirmations" orthodoxy: a checked 0-conf transaction is good delivery, and re-org risk is near-zero after a few blocks — confirmation-depth maximalism is commercially unnecessary.
- Contradicts the "stolen coins are gone forever / code is law" fatalism: for tokenised property the law of recovery applies in full — courts, PKI-registered identity, and chattel rules reach on-chain assets.
- Contradicts the "fungibility requires all coins to be legally identical" anxiety in reverse: he embraces a dual regime where the same UTXO set supports money-rule transfers and recoverable chattel tokens, depending on use.
- Contradicts miner-neutrality ideology: double-spend assistance is framed as against miners' interests and legally exposure-laden ("explicit collusion from A and a miner"), presuming miners are accountable actors, not autonomous protocol cogs.

## Notable quotes
- "The rules of property and the rules of currency differ significantly."
- "The simple addition of a transaction (TX) into the mempool is good delivery."
- "A party who has received bitcoin as a consideration for an exchange at value receives good title."
- "As a transfer of currency or private money, Bitcoin is governed by the money rules. When used as a means to record other property, it is covered by the rules for ordinary chattels."
- "A cannot give a better title to B than A has in ordinary property law."

## Connections
Companion to "Currency" (19 December 2018), which expands the same *Miller v Race* framework and adds the miner-notification/liability analysis; both draw on the legal apparatus of "Bitcoin is a commodity" (12 December 2018, *Travelex*, *Miller v Race*). The PKI key-registration point links to his identity-and-certification writings and nChain patent work, and the tokenised-chattel recovery theme prefigures his later court actions seeking remedies over stolen or inaccessible coins (e.g. the Tulip Trading litigation).
