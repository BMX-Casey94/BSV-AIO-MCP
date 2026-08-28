> For the complete documentation index, see [llms.txt](https://hub.bsvblockchain.org/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://hub.bsvblockchain.org/higher-learning/bsv-academy/bsv-opcodes/data-transformation.md).

# Data Transformation

Bitcoin Script processes data as byte sequences on the stack, but real-world applications often need to manipulate this data—splitting values apart, joining them together, or converting between different representations. **Data transformation opcodes** provide these essential capabilities, enabling scripts to reshape information as needed **for cryptographic operations, mathematical processing, or protocol compliance**.

\
Understanding data transformation is crucial f**or developers building practical Bitcoin Script applications as is the focus in the BSV blockchain ecosystem**. Whether you're handling transaction inputs that need endianness conversion, working with variable-length data structures, or preparing values for mathematical operations, these opcodes provide the **fundamental tools for data manipulation**. From simple concatenation to complex format conversions, mastering these operations unlocks sophisticated scripting patterns.

{% embed url="<https://youtu.be/eU1SrmW3UNc>" %}

#### You will explore:

* How **OP\_CAT** and **OP\_SPLIT** join and divide byte sequences
* Practical applications for splitting and concatenating data
* Converting between numeric values and byte sequences with **OP\_NUM2BIN** and **OP\_BIN2NUM**
* Endianness conversion techniques for transaction processing
* Data formatting strategies for cryptographic and mathematical operations
* Best practices for efficient data transformation

#### By the end of this chapter, learners will:

* Understand the purpose and operation of each data transformation opcode
* Apply splitting and joining operations to manipulate byte sequences
* Convert between numeric representations and fixed-length byte arrays
* Implement endianness conversions for transaction data
* Design efficient data transformation workflows for script applications


---

# Agent Instructions
This documentation is published with GitBook. GitBook is the documentation platform designed so that both humans and AI agents can read, navigate, and reason over technical content effectively. Learn more at gitbook.com.

## Querying This Documentation
If you need additional information that is not directly available in this page, you can query the documentation dynamically by asking a question.

Perform an HTTP GET request on the current page URL with the `ask` query parameter, and the optional `goal` query parameter:

```
GET https://hub.bsvblockchain.org/higher-learning/bsv-academy/bsv-opcodes/data-transformation.md?ask=<question>&goal=<endgoal>
```

`ask` is the immediate question: it should be specific, self-contained, and written in natural language.
`goal` is optional and describes the broader end goal you are ultimately trying to accomplish on behalf of the user. GitBook uses it to tailor the answer towards what is most useful for that goal.

The response will contain a direct answer to the question and relevant excerpts and sources from the documentation.

Use this mechanism when the answer is not explicitly present in the current page, you need clarification or additional context, or you want to retrieve related documentation sections.
