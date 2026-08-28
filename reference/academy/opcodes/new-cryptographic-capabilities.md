> For the complete documentation index, see [llms.txt](https://hub.bsvblockchain.org/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://hub.bsvblockchain.org/higher-learning/bsv-academy/bsv-opcodes/historical-opcodes-and-chronicle-restoration/new-cryptographic-capabilities.md).

# New Cryptographic Capabilities

Chronicle didn't just restore historical opcodes—it **introduced new functionality** for modern cryptographic operations.

#### New Hash Functions: SHA-512 Family

| Opcode              | Input | Output | Function                          |
| ------------------- | ----- | ------ | --------------------------------- |
| **OP\_SHA512**      | x     | hash   | Produces 64-byte SHA-512 hash     |
| **OP\_SHA512\_256** | x     | hash   | Produces 32-byte SHA-512/256 hash |

**Why Add New Hash Functions?**

* **Protocol compatibility:** Many modern systems use SHA-512 (FIDO2, modern TLS, data integrity standards)
* **Interoperability:** Scripts can verify hashes from external systems
* **Future-proofing:** Multiple hash options provide flexibility

**Example: Verifying external data**

```
<document_data> OP_SHA512 
<expected_sha512_hash> OP_EQUAL
```

#### Data Transformation: OP\_SPLIT

**OP\_SPLIT** divides a byte sequence at a specified position:

```
<32_byte_txid>_<4_byte_index> OP_32 OP_SPLIT
# Separates into: txid | index
```

Combined with **OP\_CAT** (for joining), **OP\_SPLIT** provides comprehensive data manipulation capabilities.


---

# Agent Instructions
This documentation is published with GitBook. GitBook is the documentation platform designed so that both humans and AI agents can read, navigate, and reason over technical content effectively. Learn more at gitbook.com.

## Querying This Documentation
If you need additional information that is not directly available in this page, you can query the documentation dynamically by asking a question.

Perform an HTTP GET request on the current page URL with the `ask` query parameter, and the optional `goal` query parameter:

```
GET https://hub.bsvblockchain.org/higher-learning/bsv-academy/bsv-opcodes/historical-opcodes-and-chronicle-restoration/new-cryptographic-capabilities.md?ask=<question>&goal=<endgoal>
```

`ask` is the immediate question: it should be specific, self-contained, and written in natural language.
`goal` is optional and describes the broader end goal you are ultimately trying to accomplish on behalf of the user. GitBook uses it to tailor the answer towards what is most useful for that goal.

The response will contain a direct answer to the question and relevant excerpts and sources from the documentation.

Use this mechanism when the answer is not explicitly present in the current page, you need clarification or additional context, or you want to retrieve related documentation sections.
