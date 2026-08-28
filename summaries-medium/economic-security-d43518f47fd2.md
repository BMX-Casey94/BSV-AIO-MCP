---
title: 'Economic Security'
date: 2019-05-22
slug: economic-security-d43518f47fd2
url: https://medium.com/@craig_10243/economic-security-d43518f47fd2
themes: [security-economics, mining-consensus, spv-light-clients, protocol-immutability]
---

# Economic Security
**Date:** 2019-05-22 | **URL:** https://medium.com/@craig_10243/economic-security-d43518f47fd2
**Subtitle:** Reorgs and orphan blocks are not an issue with Bitcoin. To say that they are is to compound two separate issues. Firstly, can you…

## Core thesis
Bitcoin's security is economic, not cryptographic: reorgs and orphan blocks are non-issues that critics conflate with double-spending through a false equivalence. Zero-confirmation transactions are safe when merchants detect double-spends by polling commercial nodes, a 51% attacker can only reverse his own payments and cannot change the protocol, and SPV — which Craig says is patented and will only ever come to Bitcoin (BSV), never BTC — is the critical piece that makes the whole system scale.

## Key arguments and claims
- Two separate issues are being compounded: "(1) can you make a double spend and get away with it? (2) are transactions lost or altered because of transactional forks?" Conflating them is a formal false equivalence (he prints the fallacy's definition and schema).
- "Bitcoin was never cryptographically secure in the way that they're arguing. It's not designed to be. It's based on economic security." A rogue majority miner would not "risk a billion-dollar investment to make money defrauding people on small payments"; "There is no such thing as 100% safe. There is only safe enough."
- Orphan blocks are a signalling method: the protocol loads both competing chains, recursively processes orphans, and carries valid transactions from either fork forward — "a transaction that is in one block will end up in the alternative fork, too". "If you don't get it, read the original alpha code."
- Reorgs hurt parasitic layers, not Bitcoin: "Reorgs impact Omni-based systems such as Tether and Wormhole with a disproportionate effect", and this externality is used dishonestly to argue Bitcoin itself is insecure.
- "You cannot base a double spend of a transaction on a block reorg. A block reorg is a probabilistic matter... basically the same as quantum events in nuclear science" — predictable in aggregate, never in timing, so useless to an attacker.
- Satoshi self-citation as authority: his July 2010 posts that "Most sites selling digital goods are fine to accept 0 confirmations" and that nodes will equilibrate at "never... more than 100K nodes" in server farms, with millions of lightweight clients. "Nothing has changed since then."
- "Bitcoin was always designed to end in data centres"; SPV wallets will be the majority; "SPV is actually secure and very simple. There is no need to validate the entire blockchain, which is just the call of those with tinfoil hats."
- The subsidy halvings expose BTC: "Without use, the Ponzi that is Tether will not support Bitcoin... Tether is a massive global money-laundering scheme" heading for "a massive messy takedown with multiple life sentences".
- Double-spend defence is detection, not prevention: "You don't fix double spends, you detect them." The merchant (Bob) sends Alice a template, Alice signs, Bob propagates; Bob polls a random selection of nodes before and after release; if no double spend appears within seconds, the payment is safe; if one appears, Bob waits and holds "evidence of criminal fraud" for legal action. "0-conf is safe if you detect double spends."
- This requires commercial nodes: "The method works very well as long as you accept that nodes are commercial entities. When you stop trying to make nodes Raspberry Pis, the system can actually work."
- "Bitcoin was never about non-repudiation... It's about fast secure payment and an economically incentivised information ledger"; any transaction is "sufficiently irreversible in an hour or so".
- On 51% attacks, quoting his 2008 self: "Even if a bad guy does overpower the network, it's not like he's instantly rich. All he can accomplish is to take back money he himself spent, like bouncing a check." A colluding miner must hide the double-spend "probabilistically while simultaneously leaving a huge evidence trail" enabling recovery and prosecution.
- "You cannot do a protocol change even with 51% of the network. Even SPV nodes will reject your chain, and all you are doing is creating an airdrop copy of Bitcoin. Bitcoin is not designed to split. If you copy it and release a fork with different protocol rules, it is not Bitcoin."
- SPV confession: "I didn't have SPV working when I first launched Bitcoin, and I'm glad that I didn't... in a decade nobody came close. So consequently, one of the most critical parts of Bitcoin is covered by a patent. Like it or not, there is no way to make Bitcoin scale and work without SPV. And it will only ever come to Bitcoin, never be on Core coin."
- The 2008 James A. Donald debate is the template: "None of the mentioned people ever wanted Bitcoin, because Bitcoin is not crime-friendly"; the same people "are now involved with creating a broken system such as Core coin (BTC)".
- Closes with Brandeis: "When once a banker has entered the Board... his grip proves tenacious and his influence usually supreme; for he controls the supply of new money."

## How Craig reasons (his model/logic)
He argues by fallacy taxonomy (naming and schematising the false equivalence), then by original-source exegesis — quoting his own 2008 metzdowd posts and 2010 bitcointalk posts as settled authoritative texts ("Nothing has changed since then"). Mechanism claims lean on the alpha code's orphan handling, and security is evaluated economically (incentive cost of attack versus gain, evidence trails enabling legal recovery) rather than cryptographically. The patent claim on SPV turns a technical argument into a property assertion.

## Where this contradicts BTC-mainstream logic
- Rejects the cryptographic-security framing of Bitcoin outright: security is economic and legal, so "safe enough" replaces absolute confirmation-count dogma.
- Vindicates 0-conf — treated as reckless in BTC culture since the RBF era — as safe under proper SPV double-spend detection.
- Full-node validation for every user is "tinfoil hat" thinking; SPV light clients plus commercial data-centre nodes were always the design, inverting the "everyone must run a node" orthodoxy.
- 51% attacks cannot change protocol rules — even SPV nodes reject the attacker's chain — against the hash-power-as-governance model; forks with altered rules are mere "airdrop copies", not Bitcoin.
- Reorg FUD is misdirection that really indicts Omni-layer systems (Tether, Wormhole), not Bitcoin.
- The "set in stone" protocol and the SPV patent assert that BTC cannot ever scale — a proprietary, exclusionary claim against open-development norms.

## Notable quotes
- "It's based on economic security."
- "You don't fix double spends, you detect them."
- "0-conf is safe if you detect double spends."
- "There is no such thing as 100% safe. There is only safe enough."
- "Bitcoin was always designed to end in data centres."
- "Bitcoin is not designed to split. If you copy it and release a fork with different protocol rules, it is not Bitcoin."

## Connections
The capstone of the May 2019 sequence: it extends the double-spend and Tether arguments of *Institutional madness*, reuses the James A. Donald sparring history from *Why code must not be law*, and closes with the same Brandeis work quoted in *Funding and rights*. The SPV patent claim ties to the nChain portfolio, and "Bitcoin is not designed to split" is a post-hash-war (Nov 2018 BCH/BSV split) doctrinal statement positioning BSV as the only continuation of the original protocol.
