> For the complete documentation index, see [llms.txt](https://hub.bsvblockchain.org/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://hub.bsvblockchain.org/higher-learning/bsv-academy/bsv-opcodes/stack-data-queries/understanding-op_size.md).

# Understanding OP\_SIZE

<figure><img src="/files/tF5YdtLfnchM1dXOTxWw" alt=""><figcaption></figcaption></figure>

**OP\_SIZE** measures the byte length of the top stack item and pushes that length as a new item. Unlike OP\_DEPTH which counts items, OP\_SIZE measures **data size** in bytes.

#### Basic Operation

```
Stack: <data> (where data = 0x11223344, 4 bytes)
OP_SIZE
Stack: <data> 4
```

The number **4** appears because the **data is 4 bytes long**. Crucially, **the original data remains** on the stack—OP\_SIZE duplicates length information without consuming the data.

**Key insight:** OP\_SIZE tells you "how big is this item" without removing or modifying the item itself.

<figure><img src="/files/SLkuMlBNdDcLo9ALJIpK" alt=""><figcaption></figcaption></figure>


---

# Agent Instructions
This documentation is published with GitBook. GitBook is the documentation platform designed so that both humans and AI agents can read, navigate, and reason over technical content effectively. Learn more at gitbook.com.

## Querying This Documentation
If you need additional information that is not directly available in this page, you can query the documentation dynamically by asking a question.

Perform an HTTP GET request on the current page URL with the `ask` query parameter, and the optional `goal` query parameter:

```
GET https://hub.bsvblockchain.org/higher-learning/bsv-academy/bsv-opcodes/stack-data-queries/understanding-op_size.md?ask=<question>&goal=<endgoal>
```

`ask` is the immediate question: it should be specific, self-contained, and written in natural language.
`goal` is optional and describes the broader end goal you are ultimately trying to accomplish on behalf of the user. GitBook uses it to tailor the answer towards what is most useful for that goal.

The response will contain a direct answer to the question and relevant excerpts and sources from the documentation.

Use this mechanism when the answer is not explicitly present in the current page, you need clarification or additional context, or you want to retrieve related documentation sections.
