> For the complete documentation index, see [llms.txt](https://hub.bsvblockchain.org/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://hub.bsvblockchain.org/higher-learning/bsv-academy/bsv-opcodes/historical-opcodes-and-chronicle-restoration/arithmetic-operations-restored.md).

# Arithmetic Operations Restored

The Chronicle Release restored all historically disabled opcodes, returning Bitcoin Script to the functionality Satoshi originally designed.

#### Arithmetic Operations Restored

Chronicle restored the fundamental arithmetic opcodes that enable mathematical operations beyond addition and subtraction.

| Opcode      | Input | Output | Restored Function                 |
| ----------- | ----- | ------ | --------------------------------- |
| **OP\_MUL** | a b   | a×b    | Multiplies two numbers            |
| **OP\_DIV** | a b   | a÷b    | Divides a by b (integer division) |
| **OP\_MOD** | a b   | a%b    | Returns remainder of a÷b          |

**Why these matter:**

Before Chronicle, multiplying two numbers required complex workarounds using repeated addition. Now you can simply use **OP\_MUL**. Division and modulo operations enable mathematical algorithms that were previously impractical.

**Example: Calculating compound interest**

```
<principal> <rate> OP_MUL <100> OP_DIV <principal> OP_ADD
# Result: principal + (principal × rate / 100)
```


---

# Agent Instructions
This documentation is published with GitBook. GitBook is the documentation platform designed so that both humans and AI agents can read, navigate, and reason over technical content effectively. Learn more at gitbook.com.

## Querying This Documentation
If you need additional information that is not directly available in this page, you can query the documentation dynamically by asking a question.

Perform an HTTP GET request on the current page URL with the `ask` query parameter, and the optional `goal` query parameter:

```
GET https://hub.bsvblockchain.org/higher-learning/bsv-academy/bsv-opcodes/historical-opcodes-and-chronicle-restoration/arithmetic-operations-restored.md?ask=<question>&goal=<endgoal>
```

`ask` is the immediate question: it should be specific, self-contained, and written in natural language.
`goal` is optional and describes the broader end goal you are ultimately trying to accomplish on behalf of the user. GitBook uses it to tailor the answer towards what is most useful for that goal.

The response will contain a direct answer to the question and relevant excerpts and sources from the documentation.

Use this mechanism when the answer is not explicitly present in the current page, you need clarification or additional context, or you want to retrieve related documentation sections.
