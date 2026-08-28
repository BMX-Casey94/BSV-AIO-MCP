> For the complete documentation index, see [llms.txt](https://hub.bsvblockchain.org/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://hub.bsvblockchain.org/higher-learning/bsv-academy/bsv-opcodes/historical-opcodes-and-chronicle-restoration.md).

# Historical Opcodes and Chronicle Restoration

**Chronicle Release Update:** This chapter focuses specifically on opcodes affected by [the Chronicle Release (December 2025)](https://docs.bsvblockchain.org/network-topology/nodes/sv-node/chronicle-release), which represents a milestone **restoration of Bitcoin Script's original functionality to the BSV blockchain**. Understanding these changes is essential for developers working with modern BSV applications, as Chronicle restored previously disabled opcodes and introduced new cryptographic capabilities.

Bitcoin Script's evolution tells a fascinating story of restriction and restoration. In 2010, citing security concerns, Bitcoin's early developers disabled numerous opcodes that were part of Satoshi Nakamoto's original design. For over a decade, these opcodes remained dormant—present in the codebase but unusable in actual transactions. The **Chronicle Release in 2025** changed everything, restoring these historical opcodes and adding new functionality for modern cryptographic operations.

Understanding this history matters because it affects how you write scripts today. Opcodes that were unavailable for years now work exactly as originally intended. New opcodes expand Bitcoin Script's capabilities beyond its original specification. And the restoration demonstrates BSV's commitment to Satoshi's original vision while scaling for enterprise use.

#### In this course, you will explore:

* **The 2010 opcode restrictions** and their rationale
* **Opcodes fully restored by Chronicle Release** and their original functionality
* **New cryptographic opcodes** introduced in Chronicle
* **Version-related opcodes** and transaction versioning
* **Practical implications** for modern BSV development

#### By the end of this chapter, learners will:

* **Understand** **the historical context** behind opcode restrictions and restoration
* **Identify all opcodes** restored in Chronicle and their functions
* **Be able to explain** how version-related opcodes enable transaction versioning
* **Be able to apply** this knowledge when designing scripts for modern BSV applications


---

# Agent Instructions
This documentation is published with GitBook. GitBook is the documentation platform designed so that both humans and AI agents can read, navigate, and reason over technical content effectively. Learn more at gitbook.com.

## Querying This Documentation
If you need additional information that is not directly available in this page, you can query the documentation dynamically by asking a question.

Perform an HTTP GET request on the current page URL with the `ask` query parameter, and the optional `goal` query parameter:

```
GET https://hub.bsvblockchain.org/higher-learning/bsv-academy/bsv-opcodes/historical-opcodes-and-chronicle-restoration.md?ask=<question>&goal=<endgoal>
```

`ask` is the immediate question: it should be specific, self-contained, and written in natural language.
`goal` is optional and describes the broader end goal you are ultimately trying to accomplish on behalf of the user. GitBook uses it to tailor the answer towards what is most useful for that goal.

The response will contain a direct answer to the question and relevant excerpts and sources from the documentation.

Use this mechanism when the answer is not explicitly present in the current page, you need clarification or additional context, or you want to retrieve related documentation sections.
