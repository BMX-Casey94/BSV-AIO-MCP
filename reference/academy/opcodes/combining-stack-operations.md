> For the complete documentation index, see [llms.txt](https://hub.bsvblockchain.org/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://hub.bsvblockchain.org/higher-learning/bsv-academy/bsv-opcodes/stack-operations/combining-stack-operations.md).

# Combining Stack Operations

Real-world scripts rarely use stack operations in isolation. The power comes from **combining them efficiently** to achieve **complex data manipulation** with **minimal opcodes**.

### Pattern 1: Duplicate-Check-Drop

```
// Check if a value matches expected without consuming it x OP_DUP <expected> OP_EQUAL OP_VERIFY // Stack still has: x
```

### Pattern 2: Reach Deep and Compare

```
// Compare item at depth 3 with top item x1 x2 x3 x4 OP_3 OP_PICK // Copy x1 to top OP_OVER // Copy x4 beneath it OP_EQUAL // Compare // Original stack unchanged except for comparison result
```

### Pattern 3: Conditional Storage

```
x OP_IFDUP OP_IF OP_TOALTSTACK // Process with x stored ... OP_FROMALTSTACK OP_ELSE // Process without storage ... OP_ENDIF
```


---

# Agent Instructions
This documentation is published with GitBook. GitBook is the documentation platform designed so that both humans and AI agents can read, navigate, and reason over technical content effectively. Learn more at gitbook.com.

## Querying This Documentation
If you need additional information that is not directly available in this page, you can query the documentation dynamically by asking a question.

Perform an HTTP GET request on the current page URL with the `ask` query parameter, and the optional `goal` query parameter:

```
GET https://hub.bsvblockchain.org/higher-learning/bsv-academy/bsv-opcodes/stack-operations/combining-stack-operations.md?ask=<question>&goal=<endgoal>
```

`ask` is the immediate question: it should be specific, self-contained, and written in natural language.
`goal` is optional and describes the broader end goal you are ultimately trying to accomplish on behalf of the user. GitBook uses it to tailor the answer towards what is most useful for that goal.

The response will contain a direct answer to the question and relevant excerpts and sources from the documentation.

Use this mechanism when the answer is not explicitly present in the current page, you need clarification or additional context, or you want to retrieve related documentation sections.
