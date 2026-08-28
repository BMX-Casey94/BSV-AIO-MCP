> For the complete documentation index, see [llms.txt](https://hub.bsvblockchain.org/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://hub.bsvblockchain.org/higher-learning/bsv-academy/bsv-opcodes/op_nop-op_ver/chronicle-release-version-related-opcodes.md).

# Chronicle Release - Version-Related Opcodes

#### ⚡ Restored Functionality

The Chronicle release has restored version-related opcodes that were previously disabled. While full technical specifications are pending, these opcodes are now available:

#### 📋 Pending Detailed Documentation

| **Opcode**   | **Hex** | **General Purpose**                             | **Status**                 |
| ------------ | ------- | ----------------------------------------------- | -------------------------- |
| OP\_VER      | 0x62    | Pushes transaction version number onto stack    | ✅ Restored - Specs Pending |
| OP\_VERIF    | 0x65    | Conditional IF based on transaction version     | ✅ Restored - Specs Pending |
| OP\_VERNOTIF | 0x66    | Conditional NOT-IF based on transaction version | ✅ Restored - Specs Pending |

**For Script Developers:** These version-related opcodes enable transaction-version-aware conditional logic. Complete documentation including detailed behavior specifications, stack interaction patterns, and practical examples will be added as information becomes available. Check the official BSV documentation for the latest specifications.

#### Potential Use Cases (Preliminary)

* **Version-Gated Features:** Scripts that behave differently based on transaction version
* **Protocol Upgrades:** Forward-compatible scripts that adapt to protocol changes
* **Conditional Logic:** Version-aware conditional execution paths
* **Smart Contract Evolution:** Contracts that can upgrade behavior based on transaction version


---

# Agent Instructions
This documentation is published with GitBook. GitBook is the documentation platform designed so that both humans and AI agents can read, navigate, and reason over technical content effectively. Learn more at gitbook.com.

## Querying This Documentation
If you need additional information that is not directly available in this page, you can query the documentation dynamically by asking a question.

Perform an HTTP GET request on the current page URL with the `ask` query parameter, and the optional `goal` query parameter:

```
GET https://hub.bsvblockchain.org/higher-learning/bsv-academy/bsv-opcodes/op_nop-op_ver/chronicle-release-version-related-opcodes.md?ask=<question>&goal=<endgoal>
```

`ask` is the immediate question: it should be specific, self-contained, and written in natural language.
`goal` is optional and describes the broader end goal you are ultimately trying to accomplish on behalf of the user. GitBook uses it to tailor the answer towards what is most useful for that goal.

The response will contain a direct answer to the question and relevant excerpts and sources from the documentation.

Use this mechanism when the answer is not explicitly present in the current page, you need clarification or additional context, or you want to retrieve related documentation sections.
