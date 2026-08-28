> For the complete documentation index, see [llms.txt](https://hub.bsvblockchain.org/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://hub.bsvblockchain.org/higher-learning/bsv-academy/bsv-opcodes/constant-value-and-pushdata-opcodes.md).

# Constant Value and PUSHDATA Opcodes

Bitcoin Script is a stack-based language, meaning all operations work with data stored on a **stack**—a simple data structure where items are added and removed from the top. Before you can perform any calculations, comparisons, or cryptographic operations, you need a way to put data onto that stack. This is where **constant value opcodes** and **pushdata opcodes** become essential.

Think of the stack like a deck of cards. You can only add cards to the top or remove cards from the top. Constant value opcodes are like having pre-numbered cards (1 through 16, plus special values) that you can instantly place on top. Pushdata opcodes are like writing any information you want on a blank card—whether it's a signature, a public key, or any other data—and then placing that card on top.

Understanding these fundamental opcodes is crucial because they appear in virtually every Bitcoin Script. From simple payment scripts to complex smart contracts, you'll use these operations to supply the raw materials—the numbers and data—that other opcodes process.

#### You will explore:

* **How constant value opcodes instantly push numbers onto the stack**
* **The difference between small constants (OP\_0 through OP\_16) and larger data**
* **How pushdata opcodes handle variable-length data efficiently**
* **The four pushdata opcodes and when to use each one**
* **Minimal encoding rules that keep scripts compact and standardized**
* **Why only pushdata and constant opcodes can appear in input scripts**

#### By the end of this chapter, learners will:

* **Understand** how constant value opcodes simplify common operations
* **Identify** which pushdata opcode to use based on data size
* **Explain** the minimal encoding rule and its importance
* **Recognize** valid input script patterns
* **Apply** pushdata operations to construct basic Bitcoin Scripts


---

# Agent Instructions
This documentation is published with GitBook. GitBook is the documentation platform designed so that both humans and AI agents can read, navigate, and reason over technical content effectively. Learn more at gitbook.com.

## Querying This Documentation
If you need additional information that is not directly available in this page, you can query the documentation dynamically by asking a question.

Perform an HTTP GET request on the current page URL with the `ask` query parameter, and the optional `goal` query parameter:

```
GET https://hub.bsvblockchain.org/higher-learning/bsv-academy/bsv-opcodes/constant-value-and-pushdata-opcodes.md?ask=<question>&goal=<endgoal>
```

`ask` is the immediate question: it should be specific, self-contained, and written in natural language.
`goal` is optional and describes the broader end goal you are ultimately trying to accomplish on behalf of the user. GitBook uses it to tailor the answer towards what is most useful for that goal.

The response will contain a direct answer to the question and relevant excerpts and sources from the documentation.

Use this mechanism when the answer is not explicitly present in the current page, you need clarification or additional context, or you want to retrieve related documentation sections.
