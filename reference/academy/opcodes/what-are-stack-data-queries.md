> For the complete documentation index, see [llms.txt](https://hub.bsvblockchain.org/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://hub.bsvblockchain.org/higher-learning/bsv-academy/bsv-opcodes/stack-data-queries/what-are-stack-data-queries.md).

# What Are Stack Data Queries?

Stack data query opcodes differ from other Bitcoin Script operations because they **provide information** **rather than transform data**. Instead of modifying stack contents, they measure and report on stack characteristics.

Think of stack queries as diagnostic tools. Just as a doctor checks vital signs before treatment, scripts use stack queries to assess conditions before proceeding with validation or computation.

**Two fundamental queries:**

| Word      | Input | Output           | Description                                  |
| --------- | ----- | ---------------- | -------------------------------------------- |
| OP\_DEPTH | items | items, qty items | Counts stack items and pushes the count      |
| OP\_SIZE  | item  | item, item size  | Measures top item length without removing it |

**Key characteristic:** Both opcodes are **non-destructive**—they leave the original stack contents intact while adding measurement information.

<figure><img src="/files/SOfXLyGr0KGwXARDckD5" alt=""><figcaption></figcaption></figure>


---

# Agent Instructions
This documentation is published with GitBook. GitBook is the documentation platform designed so that both humans and AI agents can read, navigate, and reason over technical content effectively. Learn more at gitbook.com.

## Querying This Documentation
If you need additional information that is not directly available in this page, you can query the documentation dynamically by asking a question.

Perform an HTTP GET request on the current page URL with the `ask` query parameter, and the optional `goal` query parameter:

```
GET https://hub.bsvblockchain.org/higher-learning/bsv-academy/bsv-opcodes/stack-data-queries/what-are-stack-data-queries.md?ask=<question>&goal=<endgoal>
```

`ask` is the immediate question: it should be specific, self-contained, and written in natural language.
`goal` is optional and describes the broader end goal you are ultimately trying to accomplish on behalf of the user. GitBook uses it to tailor the answer towards what is most useful for that goal.

The response will contain a direct answer to the question and relevant excerpts and sources from the documentation.

Use this mechanism when the answer is not explicitly present in the current page, you need clarification or additional context, or you want to retrieve related documentation sections.
