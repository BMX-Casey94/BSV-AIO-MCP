---
title: "The start of Metanet"
era: medium
date: 2019-02-14
slug: the-start-of-metanet-ef0560e81505
themes: [networking, security-economics, micropayments, monetary-economics]
source_summary: summaries-medium/the-start-of-metanet-ef0560e81505.md
url: https://medium.com/@craig_10243/the-start-of-metanet-ef0560e81505
---

# The start of Metanet — core principles

- **Secure the network by pricing the attack.** Metanet begins as an economically incentivised Internet: users post an escrow recoverable at session end and pay micropayments for continued use, so attackers pay more the more they attack. Isolationist firewalls disconnect the defender; priced access shifts power to the defender.
- **One money, not a token per site.** If every site issues its own tradable currency, no site has currency — a system less effective than barter. Money's value is the value of information; a single global measure is the point, which is why a multi-coin Internet was abandoned.
- **Bind session addresses to deposited bitcoin.** IPv6 allocation over mobile IP sessions can be keyed to a Bitcoin payment; scanning an IPv6 range takes decades, and a DDoS becomes infeasible when each attack consumes forfeitable deposits.
- **Forget by de-allocating keys, not by deleting data.** An immutable Internet keeps a copy of all posted material while the right to be forgotten is exercised through key dis-allocation — erasure of access, not of the record.
- **Write-once storage inverts hacker tradecraft.** The critical hacking skill is log-cleaning — destroying evidence of the attack. A WORM ledger makes that impossible, so Bitcoin is an information-security tool, not merely an information commodity.
- **Signed change-sets with role-based identity.** Every change is digitally signed on an evidential-quality ledger; errors reverse while leaving a trace of the error and of the parties responsible. Public pages stay pseudonymously accessible; identity links to actions.
- **Large payloads ride native script.** IPv6 jumbo frames of up to 4 GB can sit in transactions via OP_PUSHDATA4 {Data} OP_DROP. Because transactions are malleable, data can be authorised and a hash sent to the chain rather than the payload — Alice streams to Bob, who hashes and submits the signed, redacted transaction for miner verification.
- **Streams and static data settle on-chain.** Every stream can be captured using payment channels in Bitcoin transactions; static data is stored and associated with cryptographically controlled transactions. Bitcoin becomes the backbone, not a side settlement rail.
