---
title: "A Proof of Turing completeness in Bitcoin Script"
era: medium
date: 2018-10-12
slug: a-proof-of-turing-completeness-in-bitcoin-script-3cf5aa7aeb83
themes: [script-technical, btc-critique]
source_summary: summaries-medium/a-proof-of-turing-completeness-in-bitcoin-script-3cf5aa7aeb83.md
url: https://medium.com/@craig_10243/a-proof-of-turing-completeness-in-bitcoin-script-3cf5aa7aeb83
---

# A Proof of Turing completeness in Bitcoin Script — core principles

- **Dual stack = dual counter machine.** "Bitcoin uses a dual stack architecture that acts as a dual counter machine" — the main stack plus the alt stack supply the two unbounded counters of a Minsky-style machine, and "such systems have already been demonstrated as being Turing complete".
- **Closure under composition and iteration.** Via "the compositional product rule and the iteration rule" (if A and B are machines then A.B is a machine; if A is a machine then its iteration is a machine), "for every partial recursive function ... we can show that it can be evaluated by machine of the proposed family".
- **Loop-free iteration via the alt stack.** "Iterations can be simulated using an 'unrolled' loop function with allocation to the 'Alt' stack" — the alt stack provides the storage that loop unrolling requires, so the absence of loop opcodes costs nothing in expressiveness.
- **The only limit is physical.** "Bitcoin scripting is Turing complete with the limitations imposed on any realworld computer": "there cannot be an infinite tape" — finiteness is a property of every real computer, not a defect of Script.
- **Engineering consequence.** General computation belongs to the base protocol's native capability; moving complex contracts to other chains or layers is a choice, not a necessity imposed by Script's design.
