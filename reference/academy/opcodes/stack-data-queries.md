> For the complete documentation index, see [llms.txt](https://hub.bsvblockchain.org/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://hub.bsvblockchain.org/higher-learning/bsv-academy/bsv-opcodes/stack-data-queries.md).

# Stack data queries

Bitcoin Script operates on a stack-based execution model, but sometimes you need information about the stack itself rather than the data it contains. How many items are on the stack? How large is the top item? **Stack data query opcodes** provide these essential introspection capabilities, enabling scripts to make decisions based on stack state and data characteristics.

Understanding stack queries is fundamental for developers building robust Bitcoin Script applications. Whether you're validating input formats, implementing flexible payment conditions, or creating scripts that adapt to different input patterns, these opcodes provide the diagnostic tools you need. From simple item counting to sophisticated conditional logic based on data size, mastering stack queries unlocks more intelligent script design.

#### In this course, you will explore:

* How **OP\_DEPTH** counts stack items for conditional branching
* Practical applications for stack depth checking
* Using **OP\_SIZE** to validate data length requirements
* Combining stack queries with conditional logic
* Input validation patterns for user-submitted data
* Best practices for building adaptive scripts

#### By the end of this chapter, learners will:

* Understand the purpose and operation of each stack query opcode
* Apply stack depth checks to create flexible validation logic
* Implement data size requirements for protocol compliance
* Design scripts that adapt to different input patterns
* Build robust input validation using stack queries


---

# Agent Instructions
This documentation is published with GitBook. GitBook is the documentation platform designed so that both humans and AI agents can read, navigate, and reason over technical content effectively. Learn more at gitbook.com.

## Querying This Documentation
If you need additional information that is not directly available in this page, you can query the documentation dynamically by asking a question.

Perform an HTTP GET request on the current page URL with the `ask` query parameter, and the optional `goal` query parameter:

```
GET https://hub.bsvblockchain.org/higher-learning/bsv-academy/bsv-opcodes/stack-data-queries.md?ask=<question>&goal=<endgoal>
```

`ask` is the immediate question: it should be specific, self-contained, and written in natural language.
`goal` is optional and describes the broader end goal you are ultimately trying to accomplish on behalf of the user. GitBook uses it to tailor the answer towards what is most useful for that goal.

The response will contain a direct answer to the question and relevant excerpts and sources from the documentation.

Use this mechanism when the answer is not explicitly present in the current page, you need clarification or additional context, or you want to retrieve related documentation sections.
