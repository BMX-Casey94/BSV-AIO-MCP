---
title: 'Bitcoin (BCH) Vending machine'
date: 2018-10-10
slug: bitcoin-bch-vending-machine-600666d669d0
url: https://medium.com/@craig_10243/bitcoin-bch-vending-machine-600666d669d0
themes: [spv-light-clients, security-economics, micropayments]
---

# Bitcoin (BCH) Vending machine
**Date:** 2018-10-10 | **URL:** https://medium.com/@craig_10243/bitcoin-bch-vending-machine-600666d669d0
**Subtitle:** In this post, we look at what it would take to create a Bitcoin (BCH) Vending machine.

## Core thesis
A Bitcoin (BCH) vending machine is an engineering exercise in "good enough" risk management, not perfect security — and 0-conf transactions are "secure enough for most purposes" when the machine controls the payment flow. By issuing single-use payment addresses from a remote server, checking input histories in under a second, and verifying via contracted full nodes over SPV, the operator's fraud risk drops "lower than the loss of cash coinage". The broader jab: Bitcoin payments are simple, and those claiming otherwise are "making money from this false idea".

## Key arguments and claims
- 0-conf acceptance is a risk decision, not heresy: "This is not as risky as many falsely tout. A 0-conf transaction, that is a transaction that has not been included into a block and confirmed by a miner is secure enough for most purposes."
- The machine, not the customer, constructs the payment: "it is the Vending machine that should issue the payment request. This is a new address that is not stored on the machine, but on a remote server" — a single-use address, so "there is no way for the system to be scammed with an 'attack' based on knowing what the machine would likely present".
- Speed of verification: the machine "can check the path and transactions for all outputs referenced in the received (but yet unconfirmed) transaction input list. This would take under a second."
- Defence in depth: a remote server polls the network more widely and can send a stop notice over an encrypted channel that only controller and machine can decrypt — the machine holds a key even though it is not the wallet.
- SPV is sufficient for real commerce: "the vending machine operator will have a set of full nodes as a contract with an operator of full nodes. The SPV function is sufficient to allow the machine to operate with an extremely low risk of any loss. That is, a risk lower than the loss of cash coinage."
- The miner's fee is included in the requested amount, so underpayment simply fails: "if you do not send enough, you do not have the item delivered… if the amount is not sufficient to pay for both the goods and the miners fee, then, the transaction is not sent."
- Timing asymmetry favours the machine: "The attacker is always after the machine as the machine chooses when it sends… It would know this in well under 2 seconds" — faster than goods can be dispensed.
- Advanced flows are native script: "Anyone can pay" transactions for split bills in an automated restaurant; nLockTime/CLTV to expire invoices and refund deposits on high-value items; a DFA linked to the payment address that releases goods on receipt of the full amount; and a "returns" machine mapping refunds to the original sending address.
- The industry-simplicity jab: a Bitcoin wallet "is much simpler than many in the industry want you to believe. If it was not simple, then, there are many who would not be able to bamboozle people into thinking Bitcoin is hard and making money from this false idea."
- Engineering ethos: "No system is perfect and this is not even a valid target, it just needs to be good enough and economically viable."

## How Craig reasons (his model/logic)
Actuarial engineering rather than cryptographic absolutism: he sets the security target at "better than cash" (coinage loss), then assembles the cheapest combination of mechanisms — fresh addresses, input-history checks, network-wide polling, SPV against contracted nodes, fee-included pricing — that beats that target. Each design choice is justified by timing and incentive asymmetries (who chooses when to send, who pays the fee) rather than by protocol purity. The rhetorical frame is anti-mystification: complexity is a rent-seeking story told by intermediaries, and a worked counterexample dissolves it.

## Where this contradicts BTC-mainstream logic
- Directly against the post-2013 BTC orthodoxy that unconfirmed transactions are unsafe for commerce (the RBF-era position): 0-conf with machine-side checks is "secure enough for most purposes" — this was live BCH-community doctrine in 2018 and anathema to Core.
- Against the everyone-must-verify-with-their-own-full-node model: the merchant contracts with professional full-node operators and uses SPV — trust is placed in contracted, economically accountable infrastructure, exactly the "trusted third party" arrangement mainstream rhetoric claims Bitcoin eliminates.
- Against fee-market fatalism: the fee is just priced into the goods, and payment requests specify it — no mempool politics required.
- Against the "Bitcoin is too hard for payments" narrative that justified Lightning and custodial wallets in 2018: a vending machine with SPV does retail payments today, on-chain.

## Notable quotes
- "A 0-conf transaction, that is a transaction that has not been included into a block and confirmed by a miner is secure enough for most purposes."
- "The SPV function is sufficient to allow the machine to operate with an extremely low risk of any loss. That is, a risk lower than the loss of cash coinage."
- "If it was not simple, then, there are many who would not be able to bamboozle people into thinking Bitcoin is hard and making money from this false idea."
- "The attacker is always after the machine as the machine chooses when it sends."
- "No system is perfect and this is not even a valid target, it just needs to be good enough and economically viable."

## Connections
Applies the contract machinery from the same week's series — DFAs on payment addresses, CLTV invoice expiry — from "Creating a Smart Contract Registry" to a retail use case, and extends the SPV-merchant model Craig sketched in "Bitcoin as a notary" and his SPV posts. The 0-conf defence is core BCH-era doctrine (pre-split, October 2018) that he carried into BSV's "instant transactions" merchant pitch; the "Bitcoin is simple, intermediaries fake complexity" theme recurs in his lightning-L2 critiques such as "Lightning is malleable, steel is not".
