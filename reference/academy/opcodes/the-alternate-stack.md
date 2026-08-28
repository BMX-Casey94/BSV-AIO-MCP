> For the complete documentation index, see [llms.txt](https://hub.bsvblockchain.org/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://hub.bsvblockchain.org/higher-learning/bsv-academy/bsv-opcodes/stack-operations/the-alternate-stack.md).

# The Alternate Stack

<figure><img src="/files/4Y8NG7jeuNUmcwKi4QMQ" alt=""><figcaption></figcaption></figure>

Bitcoin Script provides a **secondary stack**—the **alternate stack (altstack)**—for **temporary data storage**. This is particularly useful in **complex scripts** where you need to **"set aside" values temporarily** while processing other data.

| Word              | Input   | Output  | Description                                |
| ----------------- | ------- | ------- | ------------------------------------------ |
| `OP_TOALTSTACK`   | x1      | (alt)x1 | Moves top item to altstack                 |
| `OP_FROMALTSTACK` | (alt)x1 | x1      | Moves top altstack item back to main stack |

The altstack operates on the same **LIFO principle**—the **last item moved to it** is the **first retrieved**.

\[Diagram: Main stack and alternate stack side-by-side, showing items moving between them]

#### Practical Pattern: Temporary Storage

```
// Store a value for later x1 x2 x3 OP_TOALTSTACK // Main stack: x1 x2 // Altstack: x3 // Do operations with x1 and x2 OP_ADD // Main stack: (x1+x2) // Retrieve stored value OP_FROMALTSTACK // Main stack: (x1+x2) x3
```

#### Advanced Example: Multi-Path Verification

The altstack enables **elegant solutions** for scripts with **multiple execution paths** where you need to **track state across branches**:

```
// Store path identifier on altstack OP_1SUB OP_DUP OP_TOALTSTACK OP_NOTIF // Path 1: Multi-sig 2 <pubkey1> <pubkey2> 2 OP_CHECKMULTISIG OP_FROMALTSTACK OP_DROP OP_ELSE // Path 2: Single sig OP_FROMALTSTACK OP_1SUB OP_NOTIF <pubkey> OP_CHECKSIG OP_ELSE OP_FALSE OP_RETURN OP_ENDIF OP_ENDIF 
```

By storing the **path identifier** on the altstack, the script can check it later without **cluttering the main stack** during signature verification.


---

# Agent Instructions
This documentation is published with GitBook. GitBook is the documentation platform designed so that both humans and AI agents can read, navigate, and reason over technical content effectively. Learn more at gitbook.com.

## Querying This Documentation
If you need additional information that is not directly available in this page, you can query the documentation dynamically by asking a question.

Perform an HTTP GET request on the current page URL with the `ask` query parameter, and the optional `goal` query parameter:

```
GET https://hub.bsvblockchain.org/higher-learning/bsv-academy/bsv-opcodes/stack-operations/the-alternate-stack.md?ask=<question>&goal=<endgoal>
```

`ask` is the immediate question: it should be specific, self-contained, and written in natural language.
`goal` is optional and describes the broader end goal you are ultimately trying to accomplish on behalf of the user. GitBook uses it to tailor the answer towards what is most useful for that goal.

The response will contain a direct answer to the question and relevant excerpts and sources from the documentation.

Use this mechanism when the answer is not explicitly present in the current page, you need clarification or additional context, or you want to retrieve related documentation sections.
