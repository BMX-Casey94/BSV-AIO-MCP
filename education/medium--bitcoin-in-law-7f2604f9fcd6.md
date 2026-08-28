---
title: "Bitcoin in law"
era: medium
date: 2018-12-18
slug: bitcoin-in-law-7f2604f9fcd6
themes: [law-regulation, property-rights, tokenisation, spv-light-clients]
source_summary: summaries-medium/bitcoin-in-law-7f2604f9fcd6.md
url: https://medium.com/@craig_10243/bitcoin-in-law-7f2604f9fcd6
---

# Bitcoin in law — core principles

- **Settlement risk is minimal even at zero confirmations.** The merchant calls `gettxout` on a node — "If it returns anything, then the output is unspent"; under SPV, knowing the transaction path and its existence, the only failure mode is a double-spend, and re-org risk decays to near-zero after a few blocks.
- **Mempool acceptance is good delivery.** "Without explicit collusion from A and a miner, and this is probabilistic at best and not in any miner's interest, the simple addition of a transaction (TX) into the mempool is good delivery."
- **Property rules and currency rules differ significantly.** Under ordinary personal-property law (nemo dat), "the transferee obtains only the title originally held by the transferer" — a theft victim retains a right of recovery even against an innocent recipient with no notice of the adverse claim.
- **The currency exception passes good title.** *Miller v Race* (1758): Bank of England notes — not then legal tender — passed under the law of money, so the owner of a stolen note could not recover from an innocent recipient for value; this grounds bitcoin's monetary use: "A party who has received bitcoin as a consideration for an exchange at value receives good title."
- **Bitcoin operates under a dual regime.** "As a transfer of currency or private money, Bitcoin is governed by the money rules. When used as a means to record other property, it is covered by the rules for ordinary chattels."
- **Tokenised assets are chattels.** A tokenised asset "can be linked and registered to a key, but also to the individual's identity (such as through a PKI-based key registration process)", enabling the victim of theft to seek redress in court; such sub-assets use "the commodity value of Bitcoin without necessitating the currency use".
- **Miners are accountable actors.** Double-spend assistance is against miners' interests and carries legal exposure ("explicit collusion from A and a miner") — consensus validity does not confer legal immunity.
