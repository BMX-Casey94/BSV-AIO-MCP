> For the complete documentation index, see [llms.txt](https://hub.bsvblockchain.org/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://hub.bsvblockchain.org/higher-learning/bsv-academy/bsv-opcodes/stack-operations/understanding-the-stack-model.md).

# Understanding the Stack Model

<figure><img src="/files/KGdoDjF8dIJvMMUIJomv" alt=""><figcaption></figcaption></figure>

Before diving into specific operations, it's essential to visualize **how the stack works**. Think of it like a **stack of plates**—you can only add or remove from the top. This **Last-In-First-Out (LIFO)** behavior means the **most recently added item** is the **first one accessed**.

Bitcoin Script operations are grouped into **three main categories** based on what they do to the stack:

* **Duplicators** – Copy items to create additional references
* **Eliminators** – Remove items that are no longer needed
* **Relocators** – Move items to different positions

Each operation **modifies the stack state** without changing the actual values. This distinction is crucial: **stack operations reorganize data**, while other opcodes (covered in later chapters) **perform calculations** on that data.

**Key Concept:** Stack position matters. Most opcodes work with items at **specific depths**—often the **top one or two items**. Stack operations let you bring the **right data to the right position at the right time**.


---

# Agent Instructions
This documentation is published with GitBook. GitBook is the documentation platform designed so that both humans and AI agents can read, navigate, and reason over technical content effectively. Learn more at gitbook.com.

## Querying This Documentation
If you need additional information that is not directly available in this page, you can query the documentation dynamically by asking a question.

Perform an HTTP GET request on the current page URL with the `ask` query parameter, and the optional `goal` query parameter:

```
GET https://hub.bsvblockchain.org/higher-learning/bsv-academy/bsv-opcodes/stack-operations/understanding-the-stack-model.md?ask=<question>&goal=<endgoal>
```

`ask` is the immediate question: it should be specific, self-contained, and written in natural language.
`goal` is optional and describes the broader end goal you are ultimately trying to accomplish on behalf of the user. GitBook uses it to tailor the answer towards what is most useful for that goal.

The response will contain a direct answer to the question and relevant excerpts and sources from the documentation.

Use this mechanism when the answer is not explicitly present in the current page, you need clarification or additional context, or you want to retrieve related documentation sections.
