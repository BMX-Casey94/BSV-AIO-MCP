---
title: "Bitcoin (BCH) Vending machine"
era: medium
date: 2018-10-10
slug: bitcoin-bch-vending-machine-600666d669d0
themes: [spv-light-clients, security-economics, micropayments]
source_summary: summaries-medium/bitcoin-bch-vending-machine-600666d669d0.md
url: https://medium.com/@craig_10243/bitcoin-bch-vending-machine-600666d669d0
---

# Bitcoin (BCH) Vending machine — core principles

- **0-conf acceptance is a risk decision, and usually acceptable.** An unconfirmed transaction is secure enough for most purposes when the payee controls the payment flow; the engineering target is "better than cash" — a loss risk lower than the loss of cash coinage.
- **The merchant issues the payment request.** A fresh single-use address is generated per sale from a remote server and never stored on the machine, so there is no attack based on predicting what address the machine will present.
- **Input-history checking is sub-second.** The machine can check the path and transactions for all outputs referenced in the received but unconfirmed transaction's input list in under a second.
- **Defence in depth with contracted nodes.** A remote server polls the network more widely and can send a stop notice over an encrypted channel only controller and machine can decrypt; the operator contracts with full-node operators rather than trusting the walk-up customer.
- **SPV suffices for real commerce.** The SPV function against contracted, economically accountable full nodes gives an extremely low risk of loss — trust is placed in contracted infrastructure, not in every merchant running their own node.
- **Price the fee into the request.** The miner's fee is included in the requested amount; if the payment is not sufficient to cover both goods and fee, the transaction is not sent and no item is delivered.
- **Timing asymmetry favours the payee.** The machine chooses when it sends and would detect a double-spend attempt in well under two seconds — faster than goods can be dispensed.
- **Advanced flows are native script.** "Anyone can pay" transactions for split bills, nLockTime/CLTV to expire invoices and refund deposits on high-value items, a DFA linked to the payment address releasing goods on receipt of the full amount, and returns machines refunding to the original sending address.
- **Good enough is the valid target.** No system is perfect and perfection is not a valid target — the requirement is to be good enough and economically viable.
- **Payments are simple; complexity is a rent-seeking story.** A Bitcoin payment wallet is much simpler than intermediaries claim — the myth of difficulty is a revenue source for those selling workarounds.
