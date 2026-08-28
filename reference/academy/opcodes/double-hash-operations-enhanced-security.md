> For the complete documentation index, see [llms.txt](https://hub.bsvblockchain.org/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://hub.bsvblockchain.org/higher-learning/bsv-academy/bsv-opcodes/cryptographic-functions/double-hash-operations-enhanced-security.md).

# Double-Hash Operations: Enhanced Security

Double-hash operations apply a hash function **twice in succession**, providing additional security against certain cryptographic attacks.

#### Traditional Double-Hash Operations

| Opcode      | Hex  | Input | Output | Output Size | Description                                                  |
| ----------- | ---- | ----- | ------ | ----------- | ------------------------------------------------------------ |
| OP\_HASH160 | 0xa9 | data  | hash   | 20 bytes    | Hashes input twice: first with SHA-256, then with RIPEMD-160 |
| OP\_HASH256 | 0xaa | data  | hash   | 32 bytes    | Hashes input twice with SHA-256                              |

**OP\_HASH160** is particularly important in Bitcoin as it produces the **standard Bitcoin address format**.


---

# Agent Instructions
This documentation is published with GitBook. GitBook is the documentation platform designed so that both humans and AI agents can read, navigate, and reason over technical content effectively. Learn more at gitbook.com.

## Querying This Documentation
If you need additional information that is not directly available in this page, you can query the documentation dynamically by asking a question.

Perform an HTTP GET request on the current page URL with the `ask` query parameter, and the optional `goal` query parameter:

```
GET https://hub.bsvblockchain.org/higher-learning/bsv-academy/bsv-opcodes/cryptographic-functions/double-hash-operations-enhanced-security.md?ask=<question>&goal=<endgoal>
```

`ask` is the immediate question: it should be specific, self-contained, and written in natural language.
`goal` is optional and describes the broader end goal you are ultimately trying to accomplish on behalf of the user. GitBook uses it to tailor the answer towards what is most useful for that goal.

The response will contain a direct answer to the question and relevant excerpts and sources from the documentation.

Use this mechanism when the answer is not explicitly present in the current page, you need clarification or additional context, or you want to retrieve related documentation sections.
