> For the complete documentation index, see [llms.txt](https://hub.bsvblockchain.org/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://hub.bsvblockchain.org/higher-learning/bsv-academy/bsv-opcodes/stack-operations/stack-eliminators.md).

# Stack Eliminators

<figure><img src="/files/rj2TcZOOULRXq02a9scd" alt=""><figcaption></figcaption></figure>

Just as important as creating copies is **removing unneeded data**. Eliminators **clean up the stack**, preventing it from growing unnecessarily large and keeping scripts **efficiaent**.

| Word       | Input | Output  | Description                     |
| ---------- | ----- | ------- | ------------------------------- |
| `OP_DROP`  | x     | Nothing | Removes the top stack item      |
| `OP_2DROP` | x1 x2 | Nothing | Removes the top two stack items |
| `OP_NIP`   | x1 x2 | x2      | Removes the second-to-top item  |

#### Common Patterns

**1. Discarding verification data:**

OP\_2DROP \<pubkey> OP\_CHECKSIG

After extracting needed information from **two data items**, drop them before proceeding to **signature verification**.

**2. Cleaning up after multi-signature:**

The **multi-signature opcode** (`OP_CHECKMULTISIG`) has a known bug requiring an **extra unused value** on the stack. Scripts typically use `OP_DROP` to **remove this dummy value** before continuing.

**3. Selective elimination with OP\_NIP:**

x1 x2 OP\_NIP // Result: x2

This is **more efficient** than `OP_SWAP OP_DROP` when you need to **keep the top item** but **remove what's beneath it**.

**Efficiency Note:** Each opcode adds to **script size and execution time**. Using `OP_2DROP` instead of two separate `OP_DROP` opcodes saves **one byte and one operation**.


---

# Agent Instructions
This documentation is published with GitBook. GitBook is the documentation platform designed so that both humans and AI agents can read, navigate, and reason over technical content effectively. Learn more at gitbook.com.

## Querying This Documentation
If you need additional information that is not directly available in this page, you can query the documentation dynamically by asking a question.

Perform an HTTP GET request on the current page URL with the `ask` query parameter, and the optional `goal` query parameter:

```
GET https://hub.bsvblockchain.org/higher-learning/bsv-academy/bsv-opcodes/stack-operations/stack-eliminators.md?ask=<question>&goal=<endgoal>
```

`ask` is the immediate question: it should be specific, self-contained, and written in natural language.
`goal` is optional and describes the broader end goal you are ultimately trying to accomplish on behalf of the user. GitBook uses it to tailor the answer towards what is most useful for that goal.

The response will contain a direct answer to the question and relevant excerpts and sources from the documentation.

Use this mechanism when the answer is not explicitly present in the current page, you need clarification or additional context, or you want to retrieve related documentation sections.
