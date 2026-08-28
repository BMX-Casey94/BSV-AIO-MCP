> For the complete documentation index, see [llms.txt](https://hub.bsvblockchain.org/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://hub.bsvblockchain.org/higher-learning/bsv-academy/bsv-opcodes/cryptographic-functions/hash-functions-creating-cryptographic-fingerprints.md).

# Hash Functions: Creating Cryptographic Fingerprints

Hash functions are **one-way mathematical operations** that take input data of any size and produce a fixed-size output called a **hash** or **digest**. Even changing a single bit in the input produces a completely different hash output, making hash functions ideal for verifying data integrity.

Bitcoin Script includes **five primary hash functions**:

**Established Hash Functions:**

* **OP\_RIPEMD160** — 20-byte output (160 bits)
* **OP\_SHA1** — 20-byte output (160 bits)

#### Single Hash Operations

Each hash opcode **consumes the top stack item** and **replaces it with the hash** of that data.

| Opcode        | Hex  | Input | Output | Output Size | Description                             |
| ------------- | ---- | ----- | ------ | ----------- | --------------------------------------- |
| OP\_RIPEMD160 | 0xa6 | data  | hash   | 20 bytes    | Hashes input using RIPEMD-160 algorithm |
| OP\_SHA1      | 0xa7 | data  | hash   | 20 bytes    | Hashes input using SHA-1 algorithm      |

**Security Note:** While OP\_SHA1 remains available for backward compatibility, **it should not be used in new applications** due to known cryptographic vulnerabilities.


---

# Agent Instructions
This documentation is published with GitBook. GitBook is the documentation platform designed so that both humans and AI agents can read, navigate, and reason over technical content effectively. Learn more at gitbook.com.

## Querying This Documentation
If you need additional information that is not directly available in this page, you can query the documentation dynamically by asking a question.

Perform an HTTP GET request on the current page URL with the `ask` query parameter, and the optional `goal` query parameter:

```
GET https://hub.bsvblockchain.org/higher-learning/bsv-academy/bsv-opcodes/cryptographic-functions/hash-functions-creating-cryptographic-fingerprints.md?ask=<question>&goal=<endgoal>
```

`ask` is the immediate question: it should be specific, self-contained, and written in natural language.
`goal` is optional and describes the broader end goal you are ultimately trying to accomplish on behalf of the user. GitBook uses it to tailor the answer towards what is most useful for that goal.

The response will contain a direct answer to the question and relevant excerpts and sources from the documentation.

Use this mechanism when the answer is not explicitly present in the current page, you need clarification or additional context, or you want to retrieve related documentation sections.
