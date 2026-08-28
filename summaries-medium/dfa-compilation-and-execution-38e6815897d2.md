---
title: 'DFA compilation and execution'
date: 2018-10-19
slug: dfa-compilation-and-execution-38e6815897d2
url: https://medium.com/@craig_10243/dfa-compilation-and-execution-38e6815897d2
themes: [script-technical, law-regulation, intermediaries]
---

# DFA compilation and execution
**Date:** 2018-10-19 | **URL:** https://medium.com/@craig_10243/dfa-compilation-and-execution-38e6815897d2
**Subtitle:** We present an analysis of the establishment and execution of contractual agreements embodied as deterministic finite automata (DFA). The…

## Core thesis
Contractual agreements can be compiled into deterministic finite automata and executed on the Bitcoin blockchain: the legal text is captured as an abstract state machine (states, inputs, transitions, accept states), the instance parameters are supplied separately in XML, and a Python "compiler" generates per-state agent scripts that submit blockchain transactions as the contract moves between states. A European call option is the worked example. The paper claims two inventions: the run-time identification of DFA states with executable scripts, and contract execution by a relay of independent agents, each spawning its successor.

## Key arguments and claims
- Conventional contract execution means a signed legal document "interpreted and executed (and sometimes contested) by humans"; the system separates the contractual text (captured as an abstract DFA) from the parameter values of the particular instance.
- The DFA is the standard tuple {S, I, t, s0, F} — states, inputs, transitions, initial state, final/accept states — extended with a set of parallel actions (a); the option example uses t (current time), T (maturity), S_T (price at maturity), K (strike).
- First claimed invention: "the establishment of computer agents (scripts) associated with the states of the DFA machine" — scripts that change state, implement transitions, and spin off the scripts for subsequent states; this dynamic state-to-script binding "is the main inventive element in the paper".
- The state transition table "completely determines the DFA at an abstract level, and is the only element needed for its functioning", and it corresponds directly to the legal text; a "completion transaction" moves the system to a virtual accepting state (f) that is not incarnated on-chain and has no script.
- Technical stack: a Python 3.5 main script plus an XML 1.0 parameter file; parameters load into a hash table or a DHT (e.g. BitTorrent); the origination transaction is built with the Pybitcointools library and "creates a UTXO in the blockchain associated with a specific state of the contract".
- Compilation sequence: read parameters → generate the legal contract (digitally signed by the option writer) → optionally generate human-readable docs → instantiate input/action functions → load the transition table → submit the origination transaction → spawn the script for state s0 → terminate the main script.
- Transition cycle: monitor/produce inputs (clock checks, messages) → read the transition table → take the action → submit a transition transaction → create and run the next state's script → terminate the current script. Completion spends the last UTXO and terminates the final script.
- Second claimed invention: execution by "a set of independent agents (scripts), which receive enough information in turn from previous agents", tracing back to the original parameter files.
- Agents need oracle-style real-world inputs — for the call option, a clock (has maturity been reached?) and the current asset price — and decide the next transaction from the transition matrix.
- The example is deliberately minimal ("as simple as possible but not more"); bankruptcy, death of the holder and internet shutdown are acknowledged as unmodelled states.

## How Craig reasons (his model/logic)
Computer-science formalism fused with patent-style claiming: reduce the legal instrument to a mathematical object (the transition table), assert the correspondence between that object and the legal text, then mechanise it with script-spawning agents and enumerate the instruction sequences step by step. Evidence is by specification and worked example rather than measurement; authority is internal, citing his own nCrypt white papers. The rhetorical mode is the white-paper/patent disclosure — "the main invention proposed in the paper", "the second invention" — not the blog polemic.

## Where this contradicts BTC-mainstream logic
- Against the era's "Bitcoin can't do smart contracts" orthodoxy: full contractual lifecycle automation is demonstrated on Bitcoin's UTXO model, with each contract state incarnated as a UTXO — no Ethereum-style world computer required.
- Against on-chain-code maximalism (Ethereum): the contract logic lives off-chain in agents; the blockchain stores only state markers and transactions. Script plus UTXO is sufficient.
- Against "code is law": a human-readable legal contract is still generated and digitally signed by the writer; the DFA corresponds to the legal text rather than replacing it.
- Cross-ecosystem pragmatism worth noting: the reference implementation cites Vitalik Buterin's Pybitcointools library as tooling.

## Notable quotes
- "The dynamic (run time) identification of a DFA state with a computer script with the appropriate capabilities is the main inventive element in the paper."
- "The state transition table completely determines the DFA at an abstract level, and is the only element needed for its functioning."
- "This creates a UTXO in the blockchain associated with a specific state of the contract on the Bitcoin blockchain."
- "We proposed in this paper to have the contracts executed by a set of agents (scripts) generated dynamically as the system moves from state to state."
- "As simple as possible but not more."

## Connections
Installment in the nCrypt/nChain white-paper programme: references [1] nCrypt "Realizing state machines" WP0307 (2016) and [2] "Botman: Umbrella document" WP0238 (2016). The Botman agent system assumed here is the subject of "Managing Blockchain Automata", published two days later — the two posts are companion pieces (contract compiler + execution platform).
