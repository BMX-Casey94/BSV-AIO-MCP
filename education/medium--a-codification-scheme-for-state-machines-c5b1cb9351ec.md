---
title: "A codification scheme for state machines"
era: medium
date: 2018-10-16
slug: a-codification-scheme-for-state-machines-c5b1cb9351ec
themes: [script-technical, tokenisation, law-regulation]
source_summary: summaries-medium/a-codification-scheme-for-state-machines-c5b1cb9351ec.md
url: https://medium.com/@craig_10243/a-codification-scheme-for-state-machines-c5b1cb9351ec
---

# A codification scheme for state machines — core principles

- **DFA formalisation of contracts.** A contract is modelled as a deterministic finite automaton {S, I, t, s0, F} — finite sets of states, inputs, transitions, an initial state and accepting states — plus optional actions (side effects that "do not determine the output of the computation").
- **Dynamic state determination.** Rather than tagging states a priori, "a codification scheme ... allows the dynamical (on-the-fly) determination of the state of a DFA", human- and computer-readable, suiting distributed execution where agents "purposely do not have complete information on the system".
- **States as testable condition sets.** Each state is characterised by "a unique set of conditions that either do or do not ensue, or are irrelevant"; each condition must be "explicit and testable" (e.g. ti = has a date passed; ci = was coupon i paid), yielding a unique True/False/irrelevant chain per state.
- **Conditions generalise.** Conditions "could in principle take multiple values" or be composed of sub-conditions — the scheme is not limited to binary flags.
- **Recurrent states compress repetition.** A bond's repeating Ti/Ci states differ only in period index i and collapse into a single recurrent state R with an index tracking "how many times the states have been occupied" — "an obvious analogy is that of the introduction of loops in programming languages" — with entry/exit points replacing initial/accepting states.
- **Worked financial instruments.** A 3-period coupon bond is specified with transition tables and a state diagram; a perpetuity (payments with no end) is codified by a small pseudocode modification (the loop ends at the first unmatured period), and compounding makes a perpetuity's discounted value finite in practice.
- **DFAs suffice for real contracts.** Complex stateful instruments — bonds, perpetuities — are expressible as DFAs on Bitcoin's UTXO model (nCrypt white papers WP0307 and WP0032, 2016); general-purpose world-computer computation is unnecessary for financial contracts.
