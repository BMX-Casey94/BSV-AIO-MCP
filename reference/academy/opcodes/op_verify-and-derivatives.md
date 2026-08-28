> For the complete documentation index, see [llms.txt](https://hub.bsvblockchain.org/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://hub.bsvblockchain.org/higher-learning/bsv-academy/bsv-opcodes/op_nop-op_ver/op_verify-and-derivatives.md).

# OP\_VERIFY and Derivatives

<figure><img src="/files/xfHRHbyTeEx48Qy7fgfQ" alt=""><figcaption></figcaption></figure>

**OP\_VERIFY** acts as a gating function against any condition being evaluated. OP\_VERIFY consumes the top value on the stack. If the value is any non-zero value, the opcode allows the script to continue, or if it is a zero value item, causes it to terminate and fail.

**Important:** OP\_VERIFY removes the top item from the stack regardless of whether execution continues or fails.

**Example: Basic Verification**

```
OP_5 OP_5 OP_EQUAL OP_VERIFY
```

This pushes 5 twice, compares them (resulting in 1/true), and then OP\_VERIFY consumes that true value and allows the script to continue. If the comparison had resulted in 0/false, the script would fail.


---

# Agent Instructions
This documentation is published with GitBook. GitBook is the documentation platform designed so that both humans and AI agents can read, navigate, and reason over technical content effectively. Learn more at gitbook.com.

## Querying This Documentation
If you need additional information that is not directly available in this page, you can query the documentation dynamically by asking a question.

Perform an HTTP GET request on the current page URL with the `ask` query parameter, and the optional `goal` query parameter:

```
GET https://hub.bsvblockchain.org/higher-learning/bsv-academy/bsv-opcodes/op_nop-op_ver/op_verify-and-derivatives.md?ask=<question>&goal=<endgoal>
```

`ask` is the immediate question: it should be specific, self-contained, and written in natural language.
`goal` is optional and describes the broader end goal you are ultimately trying to accomplish on behalf of the user. GitBook uses it to tailor the answer towards what is most useful for that goal.

The response will contain a direct answer to the question and relevant excerpts and sources from the documentation.

Use this mechanism when the answer is not explicitly present in the current page, you need clarification or additional context, or you want to retrieve related documentation sections.
