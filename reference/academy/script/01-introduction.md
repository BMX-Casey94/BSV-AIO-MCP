> For the complete documentation index, see [llms.txt](https://hub.bsvblockchain.org/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://hub.bsvblockchain.org/higher-learning/bsv-academy/introduction-to-bitcoin-script/chapter-4-simple-scripts/01-introduction.md).

# 01 - Introduction

In this chapter we will look at some simple script templates. Some of these are commonly used (e.g. P2PKH) and for those of you with some knowledge of Bitcoin will be familiar.

For each template, we will do a full breakdown of the script being solved in the evaluation engine including a table showing the state of the stack at each step, the opcodes being used and then present an animation to help you visualise the activity taking place.

{% file src="/files/xETGvO58H0yeobOIyjS3" %}

Bitcoin script templates are an important part of your toolset and being able to create simple, efficient templates for the applications you are designing is a critical part of being an effective Bitcoin Script engineer.


---

# Agent Instructions
This documentation is published with GitBook. GitBook is the documentation platform designed so that both humans and AI agents can read, navigate, and reason over technical content effectively. Learn more at gitbook.com.

## Querying This Documentation
If you need additional information that is not directly available in this page, you can query the documentation dynamically by asking a question.

Perform an HTTP GET request on the current page URL with the `ask` query parameter, and the optional `goal` query parameter:

```
GET https://hub.bsvblockchain.org/higher-learning/bsv-academy/introduction-to-bitcoin-script/chapter-4-simple-scripts/01-introduction.md?ask=<question>&goal=<endgoal>
```

`ask` is the immediate question: it should be specific, self-contained, and written in natural language.
`goal` is optional and describes the broader end goal you are ultimately trying to accomplish on behalf of the user. GitBook uses it to tailor the answer towards what is most useful for that goal.

The response will contain a direct answer to the question and relevant excerpts and sources from the documentation.

Use this mechanism when the answer is not explicitly present in the current page, you need clarification or additional context, or you want to retrieve related documentation sections.
