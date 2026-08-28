---
title: "OP Codes and the push to confuse."
era: medium
date: 2018-06-07
slug: op-codes-and-the-push-to-confuse-24d10d5e3861
themes: [script-technical, btc-critique, protocol-immutability]
source_summary: summaries-medium/op-codes-and-the-push-to-confuse-24d10d5e3861.md
url: https://medium.com/@craig_10243/op-codes-and-the-push-to-confuse-24d10d5e3861
---

# OP Codes and the push to confuse. — core principles

- **Composability of Bitcoin Script.** Bitcoin's original script is a stack machine whose existing primitives compose to reproduce effects often marketed as requiring new opcodes; "basically, all that these commands allow is already there… if you think".
- **Dup from Alt Stack.** Copying a value to the main stack while leaving the alt stack untouched is constructible with existing script — no new opcode required.
- **SWAP Stack.** Exchanging the main and alt stacks is a composition of existing operations, not a primitive.
- **Dup TO ALT Stack.** Copying a value to the alt stack while retaining a copy on the main stack again requires nothing beyond the original instruction set.
- **SWAP CAT.** Concatenation-style behaviour can be reproduced in forward and reverse constructions without re-adding OP_CAT, demonstrating that concatenation effects are reachable by composition.
- **Restored opcode sufficiency.** The opcodes disabled early in Bitcoin's history were restored on the BCH lineage (May 2018 restoration of OP_CAT and raised OP_RETURN limits) — the engineering path of re-enabling the original instruction set rather than bolting on side systems.
- **Compose, don't reinvent.** The engineering rule: good developers compose what exists; new opcodes demand justification against what the existing stack already expresses.
