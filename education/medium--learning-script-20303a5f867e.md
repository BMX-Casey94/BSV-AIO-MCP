---
title: "Learning Script"
date: 2019-03-18
era: medium
slug: learning-script-20303a5f867e
themes: [script-technical, btc-critique]
source: summaries-medium/learning-script-20303a5f867e.md
---

# Learning Script — core principles

- **Decidable mathematics maps onto Script opcodes.** Following Gödel, all decidable mathematics — "anything of any of use in science, engineering, and finance" — can be solved using six primitive recursive constructs, and Bitcoin Script's opcodes map directly onto them.
- **The primitive mapping.** OP_MUL covers multiplication (`a b OP_MUL`); OP_1ADD the successor function; OP_ADD addition (`a b OP_ADD`). Remaining primitives include Monus, the Characteristic and the Identity functions.
- **Successor is the foundation of the hyperoperation hierarchy.** It "acts to form the level-0 foundation of the infinite Grzegorczyk hierarchy of hyperoperations," from which addition, multiplication, exponentiation and tetration are built.
- **Monus is cutoff subtraction.** It never returns a negative value. "In creating mathematical functions and a compiler, it is an extremely valuable function."
- **Functions compose.** Saved functions load into Monus, extending it to compute Monus[S(x), S(y)] — "Note how we can incorporate functions into functions."
- **Script is a compiler foundation, not merely a spending-condition language.** Restored opcodes make the six primitives of recursive-function theory — and hence all decidable computation — encodable on-chain.
