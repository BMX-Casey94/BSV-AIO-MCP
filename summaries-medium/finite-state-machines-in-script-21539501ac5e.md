---
title: 'Finite State Machines in Script'
date: 2019-03-18
slug: finite-state-machines-in-script-21539501ac5e
url: https://medium.com/@craig_10243/finite-state-machines-in-script-21539501ac5e
themes: [script-technical, ai-blockchain, micropayments]
---

# Finite State Machines in Script
**Date:** 2019-03-18 | **URL:** https://medium.com/@craig_10243/finite-state-machines-in-script-21539501ac5e
**Subtitle:** This note provides methods for constructing deterministic and non-deterministic finite state automata in Bitcoin Script. The “best” method…

## Core thesis
Bitcoin Script — a Forth-like language — can directly implement deterministic, non-deterministic and fuzzy finite state machines via state tables and the alt stack, without nested IF clauses. Combined with nSequence payment channels for looping and parallel transactions for concurrency, this turns Bitcoin into a platform for smart contracts, AI-style agents and even games: "Bitcoin is far more powerful than people imagine."

## Key arguments and claims
- FSMs solve problems that are awkward procedurally — a compiler distinguishing a float from an algebraic expression, a machine controller responding to random-ordered inputs — and a program responding to indefinite input "is closer to a 'thinking machine' than a mere sequential program".
- Branch-heavy code is slow because "many processors dump their pipelines upon branching"; using parallel Bitcoin Script for each possibility "leads to a different process and dynamic" (citing Noble, "Avoid Decisions", 1991).
- Values stored on the alt stack simulate switch/case statements; "A language system that converts case statements into alt statements in Bitcoin Script simplifies the process of creating FSMs" — illustrated with an insurance policy contract (young-female-policy, old-smoker, all-other-cases) where each "perform" state is a token sent to a start oracle.
- An FSM differs from a jump table by maintaining a state variable; transition tables map naturally into Script, so "a mini compiler for FSMs can be programmed simply to create the desired outcome in Bitcoin Script", and "any object-orientated language" could eventually be converted.
- Fuzzy State Machines let states hold intermediate on/off values, combining behaviours (chasing + on-foot/in-vehicle); "Counter-intuitively, such an approach can reduce the complexity of the Script state machine, while adding more complexity to the behaviour." Randomness is seeded "through block hashes and depth with the addition of address and value input and a hash randomisation process".
- Game-AI showcase: the full life cycles of Quake's Shambler and Rocket as layered/hierarchical FSMs — "a series of parallel scripts could even be used to create a Quake Computer Game", each monster object acting as an agent/oracle.
- Looping via payment channels: parties exchange partially signed two-of-two transactions (CTx1…CTx4) with incrementing nSequence values; the server periodically settles the last state, and "Alice cannot cheat, and she does not have a completely signed version. The result is one of the simplest ways of looping a Bitcoin transaction."
- Immutability caveat: "Transactions are only immutable when they have been sent to a miner" — pre-settlement channel states are replaceable by design.
- Parallelism: "Bitcoin transactions can also act in parallel with multiple transactions running in multiple parallel channels... in the same way that CuDA-based scientific programmes or GPU games are developed"; for-each loops via wallet I/O, hash-chain ordering proofs, and an IoT energy-monitoring example that ends by paying the energy company or switching the device off.
- Grievance-as-moat: "nobody managed to grasp any of it, and many called it all a fraud allowing us to file a number of patents on topics that would have been available freely had I not been attacked"; OP_CodeSeparator is teased for a later post.

## How Craig reasons (his model/logic)
Textbook-transfer method: he cites the compiler literature (Aho/Sethi/Ullman, Sedgewick) and Forth pedagogy (Starting Forth, Noble) and shows each construct has a Script analogue. The argument proceeds by construction — state tables, worked Quake diagrams, channel transaction templates — rather than by benchmark or deployment evidence. Underneath the tutorial sits a strategic narrative: techniques the "community" dismissed as fraud were quietly patented by nChain.

## Where this contradicts BTC-mainstream logic
- **"Script is deliberately limited":** the post-2010 orthodoxy (disabled opcodes, no loops, not Turing-complete, computation belongs off-chain or on Ethereum) is contradicted by claims of native looping, fuzziness, parallelism and OO-language compilation in Script — on BSV's restored opcode set.
- **Off-chain computation orthodoxy:** where BTC pushed computation to layers, he argues the base protocol itself is the computer, with miners as the settlement of last resort.
- **Lightning-style channels:** his channels are strictly two-party, sequentially settled nSequence constructs — the model he exempted from money-transmitter status in the Lightning essay three days earlier — versus multi-hop routing.
- **"0-conf/off-chain states are final":** "Transactions are only immutable when they have been sent to a miner" cuts against both 0-conf acceptance and layer-2 finality narratives.

## Notable quotes
- "The true reality is that Bitcoin is far more powerful than people imagine."
- "Transactions are only immutable when they have been sent to a miner."
- "In some cases, the perceived appearance of intelligence is more important than the actual intelligence."
- "We can code systems in the same way that CuDA-based scientific programmes or GPU games are developed."
- "Many called it all a fraud allowing us to file a number of patents on topics that would have been available freely had I not been attacked."
- "The implementation of a mini compiler that transforms the tabular representation of an FSM to Script allows for the simplified creation of smart contracts."

## Connections
Opens the promised series of Forth/Script lessons continued the same day in "Learning Script"; cites *Compilers: Principles, Tools and Techniques*, Sedgewick's *Algorithms*, Noble's "Avoid Decisions" and forth.com. The two-party channel construction is the technical counterpart to the Lightning critique ("Why Lightning will never be currency", 15 March 2019), and the patent remark ties the tutorial to the nChain portfolio strategy described in "Profiting from privacy".
