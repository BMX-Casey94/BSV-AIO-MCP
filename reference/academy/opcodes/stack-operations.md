> For the complete documentation index, see [llms.txt](https://hub.bsvblockchain.org/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://hub.bsvblockchain.org/higher-learning/bsv-academy/bsv-opcodes/stack-operations.md).

# Stack Operations

Bitcoin Script's power comes from its ability to manipulate data efficiently. Unlike traditional programming where you work with named variables, **Bitcoin Script uses a stack**—a last-in-first-out data structure where **items are pushed onto the top and popped from the top**. Understanding how to rearrange, copy, and remove items from this stack is fundamental to writing effective Bitcoin scripts.

Stack operations are the building blocks that **allow scripts to organize data for validation**. Whether you're building a simple payment script or a complex multi-party contract, you'll constantly use these opcodes to position values where they're needed for computation, comparison, or signature verification.

{% embed url="<https://youtu.be/BWeBgEOGgrw>" %}

#### You will explore:

* How stack duplicators create copies of data without altering originals
* When to eliminate unnecessary values to keep scripts efficient
* How relocators rearrange stack items for computation
* The role of the alternate stack in complex operations
* Practical patterns combining stack operations

#### By the end of this chapter, learners will:

* Understand the three categories of stack operations and their purposes
* Apply duplicators to preserve values for multiple operations
* Construct scripts that efficiently manage stack depth
* Implement alternate stack patterns for temporary storage


---

# Agent Instructions
This documentation is published with GitBook. GitBook is the documentation platform designed so that both humans and AI agents can read, navigate, and reason over technical content effectively. Learn more at gitbook.com.

## Querying This Documentation
If you need additional information that is not directly available in this page, you can query the documentation dynamically by asking a question.

Perform an HTTP GET request on the current page URL with the `ask` query parameter, and the optional `goal` query parameter:

```
GET https://hub.bsvblockchain.org/higher-learning/bsv-academy/bsv-opcodes/stack-operations.md?ask=<question>&goal=<endgoal>
```

`ask` is the immediate question: it should be specific, self-contained, and written in natural language.
`goal` is optional and describes the broader end goal you are ultimately trying to accomplish on behalf of the user. GitBook uses it to tailor the answer towards what is most useful for that goal.

The response will contain a direct answer to the question and relevant excerpts and sources from the documentation.

Use this mechanism when the answer is not explicitly present in the current page, you need clarification or additional context, or you want to retrieve related documentation sections.
