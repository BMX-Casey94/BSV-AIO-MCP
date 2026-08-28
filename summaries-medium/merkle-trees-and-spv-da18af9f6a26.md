---
title: 'Merkle Trees and SPV'
date: 2019-11-02
slug: merkle-trees-and-spv-da18af9f6a26
url: https://medium.com/@craig_10243/merkle-trees-and-spv-da18af9f6a26
themes: [spv-light-clients, scaling-throughput, networking, satoshi-history]
---

# Merkle Trees and SPV
**Date:** 2019-11-02 | **URL:** https://medium.com/@craig_10243/merkle-trees-and-spv-da18af9f6a26
**Subtitle:** By now, it should be well understood that Bitcoin utilises the concept of a Merkle tree to its advantage; by way of background, we provide…

## Core thesis
An excerpt (the body continues on craigwright.net) giving a technical overview of Merkle trees and Simplified Payment Verification, framed as background to "the present invention" — patent-style language indicating this is nChain IP disclosure. Craig argues that SPV as currently implemented rests on two flawed paradigms: verification happens only after broadcast, and light clients must query full nodes for Merkle paths. His alternative — pre-broadcast SPV checks on a transaction's inputs, with users maintaining their own Merkle paths for their UTXOs — is presented as the design that "allows Bitcoin to scale". Notably, he cites the white paper as "Bitcoin: A Peer-to-Peer Electronic Cash System, Craig Wright, [2008]", naming himself as Nakamoto.

## Key arguments and claims
- Bitcoin's SPV rests on two properties: Merkle proofs showing a transaction is included in a tree represented by a Merkle root, and block headers committing to that root; combining them means "a lightweight Bitcoin client need only maintain a copy of the block headers for the entire blockchain — rather than blocks in full".
- An SPV check requires only "a full list of up-to-date block headers; and the Merkle path for the transaction in question" — verification is a Merkle-path authentication proof plus a valid header containing the root.
- The "state of the art" SPV paradigm is a post-broadcast check: the user confirms a payment "to a suitable depth on the blockchain, e.g., 6 blocks" after it has been mined. "In contrast, the present invention requires that the necessary SPV check be performed on a transaction's inputs prior to its broadcast", which "greatly reduces the burden and traffic on the network in dealing with invalid transactions".
- The second flawed paradigm: SPV clients must "query full nodes on the network to obtain the Merkle path". His alternative has "users keep, maintain, or at least have access to their own copies of Merkle paths pertinent to the unspent transaction outputs owned by them", removing that burden and enabling scaling.
- The worked example uses Alice (customer) and Bob (merchant) at a point of sale with three transactions: Tx1 and Tx2 carry Alice's spendable outputs (vout-1, vout-0), and Tx3 spends both inputs into one output paying Bob.
- SPV "makes use of two properties of the Bitcoin blockchain" and was "a part of the original Bitcoin protocol", though "not fully developed" — he dates the concept to "since I released the Bitcoin white paper", asserting authorship.
- Efficient Merkle-tree techniques "form an important component in implementing SPV in an efficient and secure manner, allowing us to scale and effectively implement a verification solution that provides true peer-to-peer transactioning"; he links his own PDF, "On Merkle Trees", as required background.

## How Craig reasons (his model/logic)
The method is patent-specification exposition: formal definitions ("will be referred to herein"), numbered properties, an illustrative Alice/Bob embodiment with Tx1/Tx2/Tx3, and explicit contrast between "the state of the art" and "the present invention". He grounds authority in the white paper — cited with himself as author — and proceeds deductively from the two Merkle/header properties to the minimal data an SPV client needs. The rhetorical mode is that of an inventor correcting an industry that implemented his design incorrectly.

## Where this contradicts BTC-mainstream logic
- Contradicts the full-node orthodoxy: the mainstream (BTC-era) view holds that sovereign verification requires running a full node; Craig recasts full nodes as a burden SPV was designed to avoid, with light clients needing only headers plus self-held Merkle paths.
- Contradicts the accept-then-verify flow of real-world Bitcoin usage (wait for confirmations after broadcast) by demanding input-side SPV checks before a transaction is ever broadcast — reframing the network's job as not having to deal with invalid transactions at all.
- Implicitly contradicts the "SPV is broken/unsafe without Bloom-filtering full-node help" critique by making the user, not the network of full nodes, the custodian of Merkle paths.

## Notable quotes
- "The basic concept of SPV has existed since I released the Bitcoin white paper, and the rudimentary concept, though not fully developed, was a part of the original Bitcoin protocol."
- "In contrast, the present invention requires that the necessary SPV check be performed on a transaction's inputs prior to its broadcast."
- "The shift in emphasis greatly reduces the burden and traffic on the network in dealing with invalid transactions."
- "SPV checks that remove such burden on the network, by stipulating the lightweight Bitcoin client where users keep, maintain, or at least have access to their own copies of Merkle paths pertinent to the unspent transaction outputs owned by them, allow Bitcoin to scale."
- "Bitcoin: A Peer-to-Peer Electronic Cash System, Craig Wright, [2008]"

## Connections
Companion to his PDF "On Merkle Trees" (craigwright.net, Nov 2019) and part of the nChain patent-family disclosures ("Overview of the Invention" language) around SPV and scaling; thematically linked to his other 2019 posts arguing only miners are nodes and that SPV, not full nodes, is how Bitcoin scales. The full text continues at craigwright.net/blog/bitcoin-blockchain-tech/merkle-trees-and-spv/.
