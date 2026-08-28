> For the complete documentation index, see [llms.txt](https://hub.bsvblockchain.org/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://hub.bsvblockchain.org/higher-learning/bsv-academy/bsv-opcodes/op_nop-op_ver/op_nop.md).

# OP\_NOP

<figure><img src="/files/1YeKcpHqX6XVsH5UlXEt" alt=""><figcaption></figcaption></figure>

**OP\_NOP** simply performs no action. It consumes nothing from the stack and leaves nothing on the stack. It can be used in sophisticated transaction templates to pad elements of a script or maintain size requirements.

| **Word** | **Hex** | **Input** | **Output** | **Description**                                                   |
| -------- | ------- | --------- | ---------- | ----------------------------------------------------------------- |
| OP\_NOP  | 0x61    | Nothing   | Nothing    | Does nothing. Can be used as a placeholder or for script padding. |

#### Example: Script Padding

```
<data> OP_NOP OP_HASH160 <hash> OP_EQUAL
```

OP\_NOP is used as a placeholder that could be replaced in future versions while maintaining script size compatibility.


---

# Agent Instructions
This documentation is published with GitBook. GitBook is the documentation platform designed so that both humans and AI agents can read, navigate, and reason over technical content effectively. Learn more at gitbook.com.

## Querying This Documentation
If you need additional information that is not directly available in this page, you can query the documentation dynamically by asking a question.

Perform an HTTP GET request on the current page URL with the `ask` query parameter, and the optional `goal` query parameter:

```
GET https://hub.bsvblockchain.org/higher-learning/bsv-academy/bsv-opcodes/op_nop-op_ver/op_nop.md?ask=<question>&goal=<endgoal>
```

`ask` is the immediate question: it should be specific, self-contained, and written in natural language.
`goal` is optional and describes the broader end goal you are ultimately trying to accomplish on behalf of the user. GitBook uses it to tailor the answer towards what is most useful for that goal.

The response will contain a direct answer to the question and relevant excerpts and sources from the documentation.

Use this mechanism when the answer is not explicitly present in the current page, you need clarification or additional context, or you want to retrieve related documentation sections.
