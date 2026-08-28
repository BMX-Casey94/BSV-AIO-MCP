---
title: 'The History of Freezing in Bitcoin'
date: 2020-04-23
slug: the-history-of-freezing-in-bitcoin-13f0cf1a89d9
url: https://medium.com/@craig_10243/the-history-of-freezing-in-bitcoin-13f0cf1a89d9
themes: [law-regulation, property-rights, mining-consensus, governance-decentralisation]
---

# The History of Freezing in Bitcoin
**Date:** 2020-04-23 | **URL:** https://medium.com/@craig_10243/the-history-of-freezing-in-bitcoin-13f0cf1a89d9
**Subtitle:** The solution to problems with crime and money laundering always existed within Bitcoin. In the white paper itself, it is explained…

## Core thesis
A Medium excerpt (body continues on craigwright.net) arguing that coin-freezing was always native to Bitcoin's design: the white paper's alert mechanism, implemented as the alert key Craig introduced in 2010, plus the 100-block coinbase maturity rule, allow honest miner-nodes to orphan blocks that violate court orders. Rebutting Mike Hearn's April 2011 claim that an anonymous 5% hash-power minority could slowly spend frozen coins, Craig replies that mining at scale can no longer be anonymous, that pool operators — not pool members — are the nodes, and that honest nodes will reject rule-violating blocks. Conclusion: "Bitcoin is completely traceable, and can be frozen", and will therefore never serve illicit markets.

## Key arguments and claims
- The white paper envisioned alerts: nodes alert each other "to events" using the same protocol that distributes blocks and transactions; SPV wallets were to be protected by alerts from nodes. The hard problem was "determining which nodes should be trusted" — a voting-strategy question. "Remember here, of course, that nodes are miners."
- He introduced the alert key in 2010; it was not linked into individual nodes because nodes were then small, but "from the inception of Bitcoin, I have explained that nodes will be large" — ending in commercial data centres.
- He recounts a 2008 argument with "the paedophile James Donald", claiming those who demand a fully decentralised, non-commercial system do so from "the desire to engage in illicit activity". "Bitcoin was never about an anarchist peer system" — the peer network exists "to gain resilience and increase security".
- 'Decentralised' in 2008 meant reliability and survivability, not avoiding government: the white paper's second reference is "a centralised blockchain solution dating back to the late 1990s", extending the third reference (1991) — the Haber/Stornetta timestamping lineage, whose authors doubted a decentralised timestamp server was possible.
- "Bitcoin is not democratic. The rules of Bitcoin were set upon the creation of Bitcoin." No cryptographic protection attaches to how many coins one holds.
- Property theory: "The mantra of 'your keys your bitcoin' is utterly wrong." A bitcoin is "a designation for 100 million indivisible and fungible digital tokens"; what you own is "the chattel property rights associated with each individual token", held in UTXO "envelopes". "Possession is not ownership… the keys are not the bitcoin itself."
- The alert key "would and did allow the freezing of bitcoin" without requiring every user to hold, validate or accept it; in discussions with Mike Hearn he "failed to adequately describe all the mechanisms".
- Hearn understood Bitcoin would end in "a few selected, corporate data centres" — not because of ASICs but because "CPU power in Bitcoin is not simply the hash rate"; as the subsidy halves, fees dominate, and "Bitcoin is only valuable when it is competitive".
- Against Hearn's quoted 2011 objection (anonymous 5% miners could spend frozen coins slowly): anonymous mining at scale is now impossible; "Pool operators set the rules — not ones who are using a pool. Pool operators are the nodes"; any large node "is easily detectable".
- The enforcement syllogism: "nodes enforce rules. A court order is a rule. Honest nodes reject blocks that don't enforce the rules." The 100-block maturity period "allows for the valid 'orphaning' of blocks that violate a court order".
- A minority fork flaunting freeze orders would be "completely illegal on any regulated exchange" and "almost completely valueless"; the true bitcoin would remain frozen while bypass attempts get orphaned onto an alternate system.
- Exchanges receiving forked or theft-recovery-covered coins are complicit: "The receipt of stolen property presents a crime", and such exchanges "would be quickly shut down".
- Quoting Hearn: freezing via synchronised hash power beats blacklisting because a frozen address's value "can no longer be merged or split". Craig adds that recovery of assets is harder but "can be integrated just like block size increases".
- "User-activated soft fork (UASF) nodes don't exist… nodes are solely and exclusively miners. Any system that does not mine a block is not a node."
- Opponents rely on "proof of social media (POSM)" — deception and lies; he links his difficulty comprehending such dishonesty to his autism, and cites personal difficulties and Asperger's for why he was "unable to lead the development of the system I had created in 2011".

## How Craig reasons (his model/logic)
First-person historical testimony ("When I launched Bitcoin…") combined with textual appeal to the white paper and its references; a legal-property reframing (tokens as chattels, UTXOs as envelopes, keys as mere assignment instruments); a syllogistic core (nodes/rules/court orders); and adversarial quote-and-rebuttal of Mike Hearn's 2011 blog post. The rhetoric mixes mechanism-level argument with ad hominem (James Donald, "complete and utter scumbags") and self-exculpatory autobiography.

## Where this contradicts BTC-mainstream logic
- "Not your keys, not your coins": he inverts the slogan — ownership is a property right in tokens; keys merely assign them, so courts can reach coins regardless of who holds keys.
- Censorship resistance as BTC's core value: "Bitcoin doesn't stop people censoring transactions. Bitcoin doesn't stop governments from issuing orders against nodes."
- UASF / non-mining "full node" sovereignty (the 2017 NYA-era orthodoxy): non-mining nodes "don't exist" as nodes; only miners enforce rules.
- "Code is law" immutabilism: court-ordered freezing and asset recovery are presented as native design features, not attacks.
- The anarcho-capitalist reading of "decentralisation": redefined as reliability engineering ("a means to increase reliability and survivability"), with AML directives welcomed as constraints on BTC "or derivative systems".
- Hobbyist/small-miner mythology: nodes were always destined for data centres; anonymous mining at scale is impossible "Such is how Bitcoin was designed."

## Notable quotes
- "The mantra of 'your keys your bitcoin' is utterly wrong."
- "Possession is not ownership."
- "nodes enforce rules. A court order is a rule. Honest nodes reject blocks that don't enforce the rules."
- "User-activated soft fork (UASF) nodes don't exist."
- "Bitcoin is completely traceable, and can be frozen."
- "All that they can do is use proof of social media (POSM)."

## Connections
A direct rebuttal of Mike Hearn's April 2011 blog post on freeze orders, quoted at length (footnote [1]); the excerpt continues at craigwright.net/blog/law-regulation/the-history-of-freezing-in-bitcoin/. Doctrinally central to his later BSV-era frozen-coins and court-order recovery positions (cf. the Tulip Trading litigation) and pairs with "As an Autistic Savant…" (16 April 2020), which carries the same autism disclosure.
