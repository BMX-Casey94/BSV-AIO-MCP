---
title: 'Neural Network Threshold Oracles'
date: 2018-10-26
slug: neural-network-threshold-oracles-92497c2f245c
url: https://medium.com/@craig_10243/neural-network-threshold-oracles-92497c2f245c
themes: [ai-blockchain, script-technical, security-economics]
---

# Neural Network Threshold Oracles
**Date:** 2018-10-26 | **URL:** https://medium.com/@craig_10243/neural-network-threshold-oracles-92497c2f245c
**Subtitle:** The main advantage to a systems engineering approach is the ease with which it can be automated. Various inputs and formula can become…

## Core thesis
Bitcoin-funded nodes can act as perceptrons in a multi-layer neural network, using threshold-signature schemes to fire signed transactions in response to external inputs. Craig argues this turns risk modelling, insurance pricing and security monitoring into an automatable "economic risk function" whose inputs and integrity are auditable on the blockchain. The essay is a short technical sketch rather than a full paper, and trails off mid-sentence ("The data needed for such an effort already.").

## Key arguments and claims
- A systems-engineering approach is valuable because it "can be automated": equations for insurance, risk and travelling-salesman problems "could be modelled in three layers" of a neural network.
- "A node can act as a perceptron" — the firing/vote sequence is driven by a threshold and an address, and the mechanism is extended to particle-swarm-optimised and genetic-algorithm code "when the node is also funded using Bitcoin (or another currency)".
- The inputs use his "patent-№479 threshold system" and send signed transactions to the next layer, triggered either "on block" or via "CPFP (Child Pays for Parent) chained transactions" — i.e. Bitcoin script and fee-bumping as the oracle's signalling rail.
- An input layer with one neuron per system or application can map "IP options, malware, and buffer overflow conditions, selected attacks"; a hidden layer combines current, prior and external data; the output layer yields "an economic risk function".
- Existing external threat-data services are deficient because they ship "clipped data": attacks take time to diagnose, so "much otherwise useful data is lost" outside baseline alerting thresholds.
- The blockchain's role is evidentiary: it "allows for auditing of the system and the ability to validate the inputs and ensure the integrity of the system", and the same perceptron mesh can serve as "control point for IoT devices and any other agent-based system".
- Commercialisation path: risk data from multiple organisations feeds "a decentralised system that can be distributed to all users", sold by existing vendors or third parties — "A large vendor such as Microsoft could create an implementation model."
- Honest limitation conceded: training requires "the determination of the correct weights for each neuron", feasible in selected systems but "a far larger effort" for generalised deployment.

## How Craig reasons (his model/logic)
He reasons by engineering analogy: map a known machine-learning architecture (multi-layer perceptron) onto Bitcoin primitives (keys, thresholds, signed transactions, CPFP) and declare the two isomorphic. The method is patent-flavoured — he cites his own threshold-system patent and a companion secret-distribution post as the enabling mechanism — and commercial in orientation, ending with vendor productisation rather than a worked proof. Evidence style is assertive sketching: figures and component lists stand in for benchmarks or a prototype.

## Where this contradicts BTC-mainstream logic
- Contradicts the "Bitcoin is only for payments / keep data off-chain" orthodoxy: Craig wants malware telemetry, risk models and IoT control signals committed to and audited on the blockchain, prefiguring his later "everything on-chain" Metanet pitch.
- Contradicts the trust-minimisation purist view that oracles are an unavoidable compromise ("the oracle problem"); he treats threshold-signed, economically funded nodes as a native, legitimate oracle layer rather than an attack surface.
- Cuts against the small-block aesthetic of minimising chain usage: CPFP-chained signalling transactions as a routine control mechanism presupposes cheap, abundant block space — a BCH-era position in late 2018.

## Notable quotes
- "A node can act as a perceptron. The vote or firing sequence is based on the use of a threshold and address."
- "The inputs use the patent-№479 threshold system and send signed transactions to the next layer based on external input or other events."
- "The result of the neural network would supply the output as an economic risk function."
- "The blockchain allows for auditing of the system and the ability to validate the inputs and ensure the integrity of the system."
- "A large vendor such as Microsoft could create an implementation model."

## Connections
Explicitly links to his companion Medium post "A distribution protocol for dealer-less secret distribution" as the threshold mechanism, and references his "patent-№479" threshold system — part of the nChain patent portfolio he was building in 2018. The IoT-control theme recurs in his "IoT and the coming toaster world" essay; the on-chain-everything stance anticipates his later Metanet advocacy.
