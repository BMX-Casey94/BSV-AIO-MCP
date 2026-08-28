---
title: "Subsidised ledgers"
date: 2018-11-23
era: medium
themes: [mining-consensus, security-economics, scaling-throughput]
source: summaries-medium/subsidised-ledgers-193a5b490fe.md
---

# Subsidised ledgers — core principles

- **The block reward is a temporary subsidy for use.** Bitcoin is designed to incentivise use — the same thing some call spam. Miners are paid in a competitive consensus to add entries to the commodity ledger; the subsidy exists so that the system can grow and scale.
- **Empty blocks amid waiting transactions are a breach of that bargain.** A miner who mines an empty block when there are transactions waiting to be processed is cheating and taking unearned money — a parasite on the subsidy.
- **Mining is income for a completed task, not a lottery.** The miner is paid not a "reward" in the form of a lottery, but an income for the completion of a task: miners accept a contract to add data.
- **Proof-of-work is a Red Queen game.** The subsidy bootstraps low-value transactions until commerce gives the system value; early blocks may lack economic value, and the race continues as capacity and use grow.
- **Subsidy arithmetic is finite.** Miners were then subsidised around 662,500 coins a year, dropping to 331,250 in under two years — around 1,800 coins a day being paid so miners will allow the ledger to be used.
- **A tiered fee schedule fills blocks as the subsidy fades.** One proposed tariff: 1,000 free transactions per block (including all UTXO-consolidating transactions); $0.004 per KB for the first 25,000 simple transactions; $0.008 per KB for the next 25,000; then $0.005 USD per standard transaction — miners take the higher-value transactions first when blocks are congested.
- **Low-fee use occupies real capacity.** Under that schedule, low-fee transactions would occupy about 12.75 MB on average each block, with peaks around 57.5 MB, and remaining data at higher, unsubsidised rates. A basic transaction (one input, two outputs) is about 250 bytes; non-standard transactions run 5–80% larger.
- **Fees fall as use and value grow.** Over time, as the system grows in use and value, it becomes even cheaper for users — the sky is the limit for transactions.
