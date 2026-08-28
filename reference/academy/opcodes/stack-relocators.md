> For the complete documentation index, see [llms.txt](https://hub.bsvblockchain.org/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://hub.bsvblockchain.org/higher-learning/bsv-academy/bsv-opcodes/stack-operations/stack-relocators.md).

# Stack Relocators

<figure><img src="/files/aXh2x1q80A1g5onVYDDn" alt=""><figcaption></figcaption></figure>

Relocators **move items to new positions** without creating copies or removing data. They're essential for **rearranging values** to meet the **input requirements** of other opcodes.

#### OP\_SWAP

The **most basic relocator** exchanges the **top two items**:

| Word      | Input | Output | Description             |
| --------- | ----- | ------ | ----------------------- |
| `OP_SWAP` | x1 x2 | x2 x1  | Swaps the top two items |

**Example:** Arithmetic operations like subtraction are **order-sensitive**. If your stack has values in the **wrong order**, `OP_SWAP` fixes it:

// Want to compute: x1 - x2 // Stack has: x2 x1 x2 x1 OP\_SWAP OP\_SUB // Result: x1 - x2

#### OP\_ROT

`OP_ROT` (rotate) moves the **third item to the top**, shifting the **top two items down**:

| Word     | Input    | Output   | Description                  |
| -------- | -------- | -------- | ---------------------------- |
| `OP_ROT` | x1 x2 x3 | x2 x3 x1 | Rotates top three items left |

**Use case:** Bringing a buried value to the top when you need it for the next operation.

#### OP\_2SWAP and OP\_2ROT

These operate on pairs of values:

| Word       | Input             | Output            | Description                                |
| ---------- | ----------------- | ----------------- | ------------------------------------------ |
| `OP_2SWAP` | x1 x2 x3 x4       | x3 x4 x1 x2       | Swaps the top two pairs                    |
| `OP_2ROT`  | x1 x2 x3 x4 x5 x6 | x3 x4 x5 x6 x1 x2 | Moves the fifth and sixth items to the top |

#### OP\_ROLL

For **maximum control**, `OP_ROLL` moves an item from **any depth to the top** (removing it from its original position):

| Word      | Input                | Output          | Description                            |
| --------- | -------------------- | --------------- | -------------------------------------- |
| `OP_ROLL` | xn ... x2 x1 x0 \<n> | ... x2 x1 x0 xn | Moves item n positions back to the top |

**Key distinction:** Unlike `OP_PICK` which **copies**, `OP_ROLL` **moves**—the original position becomes empty as items shift.


---

# Agent Instructions
This documentation is published with GitBook. GitBook is the documentation platform designed so that both humans and AI agents can read, navigate, and reason over technical content effectively. Learn more at gitbook.com.

## Querying This Documentation
If you need additional information that is not directly available in this page, you can query the documentation dynamically by asking a question.

Perform an HTTP GET request on the current page URL with the `ask` query parameter, and the optional `goal` query parameter:

```
GET https://hub.bsvblockchain.org/higher-learning/bsv-academy/bsv-opcodes/stack-operations/stack-relocators.md?ask=<question>&goal=<endgoal>
```

`ask` is the immediate question: it should be specific, self-contained, and written in natural language.
`goal` is optional and describes the broader end goal you are ultimately trying to accomplish on behalf of the user. GitBook uses it to tailor the answer towards what is most useful for that goal.

The response will contain a direct answer to the question and relevant excerpts and sources from the documentation.

Use this mechanism when the answer is not explicitly present in the current page, you need clarification or additional context, or you want to retrieve related documentation sections.
