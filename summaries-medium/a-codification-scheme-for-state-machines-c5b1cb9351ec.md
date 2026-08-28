---
title: 'A codification scheme for state machines'
date: 2018-10-16
slug: a-codification-scheme-for-state-machines-c5b1cb9351ec
url: https://medium.com/@craig_10243/a-codification-scheme-for-state-machines-c5b1cb9351ec
themes: [script-technical, tokenisation, law-regulation]
---

# A codification scheme for state machines
**Date:** 2018-10-16 | **URL:** https://medium.com/@craig_10243/a-codification-scheme-for-state-machines-c5b1cb9351ec
**Subtitle:** We define a codification scheme for the states of deterministic finite automaton (DFA) [1]. Contrary to usual practice, the codification…

## Core thesis
Craig presents a paper (from the nCrypt 2016 working-paper series) defining a machine-readable codification scheme for the states of a deterministic finite automaton (DFA): rather than states being statically tagged a priori, an algorithm dynamically determines the machine's state from explicit, testable conditions. This suits distributed blockchain implementations of state machines — exemplified by a coupon bond and a perpetuity — and he closes by noting these ideas were patented early, so "a lot of existing projects, banks etc are going to be on BCH".

## Key arguments and claims
- The invention: "a codification scheme which allows the dynamical (on-the-fly) determination of the state of a DFA", both human- and computer-readable, e.g. for distributed contract execution where agents "purposely do not have complete information on the system".
- A DFA is specified as finite sets {S, I, t, s0, F} — states, inputs, transitions, initial state, accepting states — plus optional actions (side effects that "do not determine the output of the computation"); a 3-period coupon bond is worked through with state transition tables and a state diagram.
- Each state is characterised by "a unique set of conditions that either do or do not ensue, or are irrelevant" — each condition "explicit and testable" (e.g. ti = whether a date has passed; ci = whether coupon i was paid), yielding a unique True/False/irrelevant chain per state.
- Conditions need not be binary: they "could in principle take multiple values" or be composed of sub-conditions — "all these variations... should also be considered as cover[ed] by the present invention" (patent-claim drafting language).
- Recurrent states: the bond's repeating Ti/Ci states differ only in period index i, so they collapse into a single recurrent state R with an index tracking "how many times the states have been occupied" — "an obvious analogy is that of the introduction of loops in programming languages" — with entry/exit points replacing initial/accepting states.
- A perpetuity (payments with no end) is codified by a small modification of the pseudocode: the while loop ends at the first period whose maturity has not been reached; in practice compounding makes a perpetuity's discounted value finite.
- The closing boast: "we started patenting these ideas before people thought that this was possible on Bitcoin... This is the fun of IP, you do not get to just do as you will without paying the inventors."

## How Craig reasons (his model/logic)
Formal computer-science exposition in academic-paper form: definitions, transition tables, state diagrams, pseudocode, worked financial examples (coupon bond, perpetuity), and explicit references (Wikipedia for DFA basics; nCrypt white papers WP0307 and WP0032, 2016, for the blockchain-DFA implementation). The reasoning is constructive — define the scheme, prove uniqueness of state determination, then generalise via recurrent states — and the register shifts at the end to IP assertion, revealing the patent-strategy motive behind the publication.

## Where this contradicts BTC-mainstream logic
- Against the "Bitcoin can't do stateful smart contracts" narrative (used to justify Ethereum): complex stateful instruments — bonds, perpetuities — are expressible as DFAs on Bitcoin's UTXO model.
- Against open-source/anti-IP crypto culture: he explicitly frames patents as a toll on the ecosystem — projects and banks "are going to be on BCH" and will pay "the inventors".
- Against Turing-completeness maximalism: the DFA (weaker than a stack machine, per his own background section) is presented as sufficient for real financial contracts, implying Ethereum-style general computation is unnecessary.

## Notable quotes
- "The main invention in this paper is a codification scheme which allows the dynamical (on-the-fly) determination of the state of a DFA."
- "Each condition must be something explicit and testable, i.e., there is a definite (computational) way to tell if the condition ensues or not."
- "An obvious analogy is that of the introduction of loops in programming languages."
- "The fun thing, we started patenting these ideas before people thought that this was possible on Bitcoin. So, a lot of existing projects, banks etc are going to be on BCH."
- "This is the fun of IP, you do not get to just do as you will without paying the inventors."

## Connections
Draws directly on nCrypt white papers "Realizing state machines" (WP0307, 2016) and "Blockchain-based deterministic finite automata" (WP0032, 2016) — part of the nChain/nCrypt patent portfolio Craig was building through 2016-2018. Companion to the DAC overview published the next day (which uses threshold key-sharing for autonomous corporations) and to his broader "Bitcoin as a notary" / tokenisation thread; the bond-as-state-machine idea resurfaces in later BSV tokenisation proposals.
