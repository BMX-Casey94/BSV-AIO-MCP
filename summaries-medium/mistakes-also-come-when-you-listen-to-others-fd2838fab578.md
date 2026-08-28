---
title: 'Mistakes Also Come when You Listen to Others…'
date: 2020-01-15
slug: mistakes-also-come-when-you-listen-to-others-fd2838fab578
url: https://medium.com/@craig_10243/mistakes-also-come-when-you-listen-to-others-fd2838fab578
themes: [mining-consensus, law-regulation, governance-decentralisation, spv-light-clients]
---

# Mistakes Also Come when You Listen to Others…
**Date:** 2020-01-15 | **URL:** https://medium.com/@craig_10243/mistakes-also-come-when-you-listen-to-others-fd2838fab578
**Subtitle:** Many of the multitudes of problems surrounding the implementation of Bitcoin come from my failure to explain things to people. In part, I…

## Core thesis
Craig frames Bitcoin's misimplementation as partly his own fault — a failure to explain the design — then corrects the record: a "node" in the white paper is what is now called a miner, hash power is only a small part of what nodes do, and the white paper never promised an unchangeable ledger, only one "computationally impractical" for an attacker to alter. Because the blockchain "can be changed when honest nodes agree", court-ordered seizure and reallocation of bitcoin is technically possible, and "51% attacks" are crimes under the US Computer Fraud and Abuse Act. The Medium post is an excerpt; the body continues on craigwright.net.

## Key arguments and claims
- Bitcoin implements "traceable pseudonymity"; the proof-of-work algorithm "acts to associate nodes (miners) and their facilities" — i.e. PoW identifies, rather than anonymises, the operators.
- "A node is defined in the white paper as what is now commonly defined as a miner. A separate layer sits above such supernode peers, running an SPV connection." User wallets were never nodes.
- "Miners do not secure the network using hash power... hash power presents a limited subset of what nodes must achieve" — he reproduces the six network steps from section 5 of the white paper and notes only step 3 involves solving the hash puzzle.
- The white paper says an alteration "quickly becomes computationally impractical for an attacker to change if honest nodes control a majority of CPU power" — "which is not the same as saying that the blockchain cannot be changed".
- "The blockchain can be changed when honest nodes agree on the changes. Nodes (miners) who are subject to a court order could, for instance, write a change to the blockchain and reallocate the proceeds of crime to another address when it comes to either freezing or seizing bitcoin."
- Opponents of his vision "seek a system that cannot be controlled through law and legal processes"; hence "the possibility of doing so is not something that people associated with Bitcoin Core want governments to know".
- Mining centralisation is economically inevitable: "even if a proof-of-work system could be developed that was ultimately ASIC-proof, it would always lead to the formation of large corporate entities that would compete to validate transactions into blocks" — Bitcoin "will always aggregate into large corporate entities" holding data centres.
- Under the CFAA, "we can easily show how '51% attacks' and other consensus attacks violate criminal law", with "[s]imilar laws... in most other countries".

## How Craig reasons (his model/logic)
Authorial-intent exegesis: he reads the white paper as its author, quoting section 5 verbatim and insisting on original definitions (node = miner) against later community usage. The method pairs textual close-reading with legal instrumentalism — consensus is not a moral force field but a process run by identifiable, law-amenable corporate actors, so computer-crime statutes (CFAA) complete what cryptography leaves undone. The confessional framing ("my failure to explain") casts disagreement as misunderstanding rather than dispute.

## Where this contradicts BTC-mainstream logic
- Contradicts the "hash power secures the network" orthodoxy: hashing is one of six node duties, and validation/enforcement of rules is the real work.
- Contradicts immutability absolutism ("the blockchain cannot be changed"): the white paper promised only computational impracticality for attackers, and honest miners can lawfully rewrite allocations under court order — a direct attack on "code is law" and censorship-resistance ideology.
- Contradicts the ASIC-resistance/decentralised-mining goal (then live in BTC and altcoin circles): data-centre corporatisation is the designed and inevitable end state.
- Contradicts the "51% attacks are legitimate consensus" framing used to excuse reorgs and double-spends: he classifies them as criminal CFAA violations.

## Notable quotes
- "Bitcoin implements what is known as traceable pseudonymity."
- "Miners do not secure the network using hash power."
- "The blockchain can be changed when honest nodes agree on the changes."
- "Bitcoin always ends with competing organisations that hold information in data centres."
- "We can easily show how '51% attacks' and other consensus attacks violate criminal law."

## Connections
Part of his January 2020 law-and-regulation series on craigwright.net (the Medium body is an excerpt ending "Read the full article on my personal blog"). The section-5 node definition and court-ordered reallocation arguments recur in "Looking the Other Way" and "Myths of Decentralisation" (same batch), and the CFAA argument underpins his later Tulip Trading / stolen-coins legal strategy.
