---
title: "DFA compilation and execution"
era: medium
date: 2018-10-19
slug: dfa-compilation-and-execution-38e6815897d2
themes: [script-technical, law-regulation, intermediaries]
source_summary: summaries-medium/dfa-compilation-and-execution-38e6815897d2.md
url: https://medium.com/@craig_10243/dfa-compilation-and-execution-38e6815897d2
---

# DFA compilation and execution — core principles

- **Contracts compile to automata.** A contractual agreement is captured as a deterministic finite automaton {S, I, t, s0, F} (extended with parallel actions), separating the legal text from the instance parameters of the particular deal; a European call option (inputs t, T, S_T, K) is the worked example.
- **The transition table is the contract.** "The state transition table completely determines the DFA at an abstract level, and is the only element needed for its functioning" — and it corresponds directly to the legal text, which is still generated and digitally signed by the contract writer.
- **States bind to scripts at run time.** "The dynamic (run time) identification of a DFA state with a computer script with the appropriate capabilities is the main inventive element" — per-state agent scripts change state, implement transitions and spin off successor scripts.
- **Each state is a UTXO.** The origination transaction "creates a UTXO in the blockchain associated with a specific state of the contract"; a "completion transaction" moves the system to a virtual accepting state (f) that is not incarnated on-chain and has no script.
- **Execution is a relay of independent agents.** Contracts are "executed by a set of agents (scripts) generated dynamically as the system moves from state to state", each receiving enough information from its predecessors, traceable back to the original parameter files.
- **Oracle inputs drive transitions.** Agents monitor real-world inputs — for the option, a clock (has maturity been reached?) and the current asset price — and decide the next transaction from the transition matrix.
- **Reference stack.** Python 3.5 main script plus an XML 1.0 parameter file; parameters load into a hash table or DHT (e.g. BitTorrent); transactions built with the Pybitcointools library.
- **Off-chain logic, on-chain state.** Contract logic lives in external agents while the blockchain stores state markers and transactions — Script plus the UTXO model suffices for full contract-lifecycle automation.
