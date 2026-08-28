---
title: "Bitcoin: A Total Turing Machine"
era: medium
date: 2018-10-12
slug: bitcoin-a-total-turing-machine-5a6c3c68f5a7
themes: [script-technical, btc-critique, protocol-immutability]
source_summary: summaries-medium/bitcoin-a-total-turing-machine-5a6c3c68f5a7.md
url: https://medium.com/@craig_10243/bitcoin-a-total-turing-machine-5a6c3c68f5a7
---

# Bitcoin: A Total Turing Machine — core principles

- **Script is a decider (Total Turing Machine).** Bitcoin Script forms a class of Turing machine that halts for every input (citing Sipser 1996, Kozen 1997); because every decidable program halts in finite time, the set of programs that run on a TM and halt without being decidable "is a NULL set".
- **Beyond primitive recursion.** Script is built from primitive recursive functions (Meyer & Ritchie 1967; Wright 2016), and by implementing the Ackermann function it "include[s] the ability to extend to total computable functions that are not primitive recursive".
- **Loop omission is an anti-DoS choice, not a capability ceiling.** "The omission of a looping construct was designed to prevent DOS (denial of service) attacks infinite loops"; loops are unnecessary because compilers can unroll them — high-level constructs such as OP_ForLoop, OP_WhileLoop and OP_Case compile down to existing script.
- **Disabled opcodes were a reversible restriction.** The original OP_CODE list "was more extensive than is currently available (several commands were disabled by the Core developers), nevertheless bitcoin script remains a simple yet powerful language" — restoring the original instruction set recovers the original design envelope.
- **Universality by simulation.** Bitcoin's predicate-logic script "is equivalent to Wolfram's (2,3) Turing Machine", whose universality conjecture (Wolfram 2002) was proven by Smith (2007), and Smith's results "map directly" onto Bitcoin's recursion system.
- **A stochastic extension.** With a randomness component the system becomes a "probabilistic Total Turing Machine" (PTTM).
- **Native smart-contract reach.** Bitcoin can host open or time-bound contracts guaranteeing payment for best-fit solutions to optimisation problems (the Travelling Salesman class) with pseudonymous bidders, and a NIZKPoK can act as "a TM based verifier to a Non-Interactive Proof that is run on an external and non-associated TM" — no protocol change required.
