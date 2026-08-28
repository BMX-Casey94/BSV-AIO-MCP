> For the complete documentation index, see [llms.txt](https://hub.bsvblockchain.org/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://hub.bsvblockchain.org/higher-learning/bsv-academy/bsv-opcodes/bitwise-transform/understanding-flow-control.md).

# Understanding Flow Control

**Flow control opcodes** allow Bitcoin scripts to make decisions during execution. These opcodes determine whether to execute or skip sections of code based on the values at the top of the stack. Flow controHash Time-Locked Contractsl is Bitcoin Script's primary mechanism for implementing **conditional logic**.

#### Available flow control opcodes:

* **OP\_IF** — Executes code block if top stack item is non-zero (true)
* **OP\_NOTIF** — Executes code block if top stack item is zero (false)
* **OP\_ELSE** — Provides alternative execution path
* **OP\_ENDIF** — Marks the end of a conditional block

#### How flow control works:

1. An **expression** evaluates and leaves a result on the stack
2. The flow control opcode (**OP\_IF** or **OP\_NOTIF**) examines the top stack item
3. Based on that value, the script either executes the code inside the conditional block or skips to **OP\_ELSE** (if present) or **OP\_ENDIF**
4. Script execution continues after the conditional block

#### Why this matters:

Flow control enables **multiple spending conditions** in a single output, creates **conditional payment paths** based on time or signatures, and implements **fallback mechanisms** when primary conditions aren't met. This powers advanced contracts like escrow, atomic swaps, and payment channels.


---

# Agent Instructions
This documentation is published with GitBook. GitBook is the documentation platform designed so that both humans and AI agents can read, navigate, and reason over technical content effectively. Learn more at gitbook.com.

## Querying This Documentation
If you need additional information that is not directly available in this page, you can query the documentation dynamically by asking a question.

Perform an HTTP GET request on the current page URL with the `ask` query parameter, and the optional `goal` query parameter:

```
GET https://hub.bsvblockchain.org/higher-learning/bsv-academy/bsv-opcodes/bitwise-transform/understanding-flow-control.md?ask=<question>&goal=<endgoal>
```

`ask` is the immediate question: it should be specific, self-contained, and written in natural language.
`goal` is optional and describes the broader end goal you are ultimately trying to accomplish on behalf of the user. GitBook uses it to tailor the answer towards what is most useful for that goal.

The response will contain a direct answer to the question and relevant excerpts and sources from the documentation.

Use this mechanism when the answer is not explicitly present in the current page, you need clarification or additional context, or you want to retrieve related documentation sections.
