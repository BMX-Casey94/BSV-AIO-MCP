---
title: "Finite State Machines in Script"
date: 2019-03-18
era: medium
slug: finite-state-machines-in-script-21539501ac5e
themes: [script-technical, ai-blockchain, micropayments]
source: summaries-medium/finite-state-machines-in-script-21539501ac5e.md
---

# Finite State Machines in Script — core principles

- **Script can implement finite state machines directly.** Bitcoin Script — a Forth-like language — can host deterministic, non-deterministic and fuzzy FSMs via state tables and the alt stack, without nested IF clauses. "Bitcoin is far more powerful than people imagine."
- **The alt stack simulates switch/case.** Values stored there avoid branch-heavy code (processors dump pipelines on branching). A language system that converts case statements into alt statements simplifies FSM construction — illustrated with an insurance-policy contract where each "perform" state is a token sent to a start oracle.
- **Transition tables map naturally into Script.** An FSM differs from a jump table by maintaining a state variable. "A mini compiler for FSMs can be programmed simply to create the desired outcome in Bitcoin Script," and any object-oriented language could eventually be converted.
- **Fuzzy states reduce Script complexity while enriching behaviour.** Intermediate on/off values combine behaviours. Randomness is seeded "through block hashes and depth with the addition of address and value input and a hash randomisation process."
- **Looping via two-party nSequence channels.** Parties exchange partially signed two-of-two transactions with incrementing nSequence values; the server periodically settles the last state. "Alice cannot cheat, and she does not have a completely signed version. The result is one of the simplest ways of looping a Bitcoin transaction."
- **Immutability begins at the miner.** "Transactions are only immutable when they have been sent to a miner" — pre-settlement channel states are replaceable by design.
- **Transactions can run in parallel.** Multiple transactions in multiple parallel channels work "in the same way that CuDA-based scientific programmes or GPU games are developed" — for-each loops via wallet I/O, hash-chain ordering proofs, and IoT examples that end by paying a counterparty or switching a device off.
