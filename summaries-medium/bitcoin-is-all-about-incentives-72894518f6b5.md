---
title: 'Bitcoin is all about incentives'
date: 2018-11-06
slug: bitcoin-is-all-about-incentives-72894518f6b5
url: https://medium.com/@craig_10243/bitcoin-is-all-about-incentives-72894518f6b5
themes: [mining-consensus, protocol-immutability, monetary-economics, governance-decentralisation]
---

# Bitcoin is all about incentives
**Date:** 2018-11-06 | **URL:** https://medium.com/@craig_10243/bitcoin-is-all-about-incentives-72894518f6b5
**Subtitle:** There are people who try and tell you that Bitcoin is not about incentives or economics. The structure of Bitcoin is one that allows…

## Core thesis
Written nine days before the BCH/BSV split, at the height of the hash-war build-up, this essay argues that Bitcoin is "first and foremost an incentive system": miners with skin in the game — not developers — are paid to keep the protocol stable, and any unauthorised OP_CODE (specifically Bitcoin ABC's DSV, OP_CHECKDATASIG) can be neutralised by treating transactions using it as miner fees on the honest chain. Attackers seeking to split the chain would thereby "subsidise the honest miners", making SV mining "100s of times more profitable" and draining the attacking fork of value. Bitcoin is "capitalist money designed to follow the vision of Mises and Hayek", not "social consensus" or developer experimentation.

## Key arguments and claims
- The framing claim: "Miners (nodes) have skin in the game unlike developers, and thus, are in competition for the block reward and transaction fees. The result is they will seek to maintain the protocol and not to debase and alter the currency."
- Pseudonymity with traceability: "Bitcoin is pseudonymous as it is about honest money. Private has to be traceable. It is not drug money, it is not money for bucket shops and it is not money for crime."
- He quotes Satoshi's "root problem with conventional currency is all the trust that's required" passage and extends it: "we need a system that does not allow developers to become technocrats thinking they are smarter than the market… so is the history of promises from technocrats."
- The DSV countermeasure: if ABC miners inject OP_CHECKDATASIG/VERIFY to force "a temporary fork that they want to try and make permanent… the honest miners can treat the invalid OP_Codes as a fee. This remains within the bounds of what Bitcoin was designed to be."
- The fork arithmetic: "price(BCH) = price(ABC) + price(SV)" (citing Money Button's hash-battle guide), so "any amount sent to deliberately attack the chain moves from ABC to SV… a miner subsidy to incentivise good behaviour."
- The double-spend fraud he attributes to DSV: ABC transactions carrying DSV are invisible to the SV chain, "allowing them to have their money and spend it, too. A fraud. There is no other way to say it" — countered by letting SV miners sweep any DSV-bearing output as a fee.
- Protocol lockdown: "No OP_CODES that have been defined in the original version of Bitcoin would be altered. It would stop the reckless experimentation with what is designed to be sound money"; change "can occur, but, it is expensive and difficult. This means, the money supply is stable, it is sound."
- Wallet liability: Bitcoin.com signalling DSV on all transactions "seeks to actively defraud their users leaving them liable… for any losses"; without user consent "the user would have the right to recover against the exchange or wallet doing this in law", and "in the case of a company doing this (such as Bitmain), the shareholders would have an action against the directors". With value split 50/50, forcing a client onto one branch costs "50% of the funds".
- Ideology: "Bitcoin is not about 'social consensus' or some other collectivist dream, it is capitalist money designed to follow the vision of Mises and Hayek. That is, sound money that cannot be debased." Replacing central bankers with developers means replacing "a few monetary economists with no idea… with far more clueless code monkeys — sorry, that is exactly what Bitcoin was designed to stop."
- The funding transition: quoting Satoshi — "In a few decades when the reward gets too small, the transaction fee will become the main compensation for nodes" — and the whitepaper's incentive section; attacker-funded fees can even subsidise free transactions: "what better way is there right now than to have the dishonest miners and developers start to fund it first."
- The gold analogy: gold could be debased because "you needed to trust the mint"; "Bitcoin, when controlled in competition by miners, cannot be easily manipulated, and as it scales, it will be more and more difficult to alter, to debase."
- The closing operational note: DSV transactions sent to the SV chain via P2SH will be included "but the funds will become unspendable… burnt and lost forever", earmarked as enticement for miners defending the protocol.

## How Craig reasons (his model/logic)
Wright's method here is incentive engineering grounded in textual originalism: he quotes Satoshi's whitepaper and forum posts as constitutional authority ("The incentive may help encourage nodes to stay honest…"), then designs a mechanism — invalid-OP_CODE-as-fee — that routes attacker funds to honest miners so that defection pays for its own suppression. Game-theoretic vocabulary (skin in the game, the Red Queen Game, lottery/lotto-ticket payoffs in a split) is fused with legal-remedy analysis (user claims against wallets, shareholder actions against directors), presenting law and incentives as twin enforcement layers. The rhetoric is wartime mobilisation: named enemies (Bitmain, Bitcoin.com, "greedy attackers"), a loyalty test for users, and a closing "We will not give up."

## Where this contradicts BTC-mainstream logic
- Contradicts developer-led governance: protocol change by developer "whim" is illegitimate technocracy; miners in competition, not commit access, decide — the inverse of the BTC Core model where the reference implementation defines the protocol.
- Contradicts "social consensus" as Bitcoin's legitimacy source: explicitly dismissed as "some other collectivist dream" in favour of market incentives and Austrian-school sound money (Mises, Hayek).
- Contradicts the fork-as-free-choice narrative: without replay protection "only one chain wins, the other will in time end", and wallets that steer users onto a fork incur legal liability for the risk premium — forks are torts, not just market events.
- Contradicts the neutrality of new opcodes: an added OP_CODE is not a feature but an attack surface that honest miners may monetise as a fee — turning BTC/BCH upgrade culture ("reckless experimentation") into a funding mechanism for the locked protocol.
- Contradicts fee-scepticism and the perpetual-subsidy security model: he leans on Satoshi's fee-transition quotes to argue miners must increasingly live on transaction fees, with attacker transactions as the first windfall.

## Notable quotes
- "Bitcoin is first and foremost an incentive system."
- "Miners (nodes) have skin in the game unlike developers."
- "Bitcoin is pseudonymous as it is about honest money. Private has to be traceable."
- "Bitcoin is not an experiment, it is about stable money."
- "Bitcoin is not about 'social consensus' or some other collectivist dream, it is capitalist money designed to follow the vision of Mises and Hayek."
- "We will not give up. The real Bitcoin is worth fighting for."

## Connections
A hash-war dispatch linking the Wormhole essays' anti-Bitmain campaign ("Coin burning for dummies", two days earlier) to the imminent 15 November 2018 BCH/BSV split; it cites Money Button's 5 November guide for wallets and exchanges and positions nChain as guardian of "the original Bitcoin… as close to version 0.1 as is possible". Heavy quotation of Satoshi (whitepaper section 6, the fee-transition posts, the SHA-256-collapse post) doubles as Satoshi-authorship signalling during his authorship campaign. The invalid-OP_CODE-as-fee mechanism extends his "OP Codes and the push to confuse" and "Limited change to bring stability" arguments for a locked protocol.
