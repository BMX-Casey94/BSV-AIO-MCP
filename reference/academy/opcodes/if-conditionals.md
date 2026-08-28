> For the complete documentation index, see [llms.txt](https://hub.bsvblockchain.org/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://hub.bsvblockchain.org/higher-learning/bsv-academy/bsv-opcodes/if-conditionals.md).

# IF conditionals

{% embed url="<https://youtu.be/VMpNyXmiMqA>" %}

**Flow control** transforms Bitcoin Script from a simple stack calculator into a **powerful programmable validation engine**. At the heart of flow control are **IF conditionals**—**conditional statements** that allow scripts to execute or skip sections of code based on **stack values**. Understanding IF conditionals is essential for building **sophisticated Bitcoin applications** that respond dynamically to different spending conditions.

Bitcoin Script's **IF statements** enable you to create scripts with **multiple spending paths**, implement **time-locked transactions**, build **escrow mechanisms**, and design **conditional payment systems**. When you're creating **multi-signature wallets** with fallback options, IF conditionals provide the **branching logic** that makes these applications possible.

**In this course, you will explore:**

* How **OP\_IF** and **OP\_NOTIF** create **conditional execution paths** based on stack values
* The role of **OP\_ELSE** in creating **binary branching logic**
* **Grammar rules** requiring **OP\_ENDIF** to close every conditional block
* Techniques for **nesting IF** conditionals to implement **complex case-statement logic**
* **Real-world applications** of flow control in Bitcoin transaction scripts

&#x20;

#### By the end of the course, learners will:

* Understand how IF conditionals **evaluate stack values** to control script execution
* Apply **OP\_IF, OP\_NOTIF, OP\_ELSE, and OP\_ENDIF** to create conditional logic
* Identify when to use **nested versus sequential IF conditional patterns**
* Analyze Bitcoin scripts to recognize **branching structures**
* Explain Bitcoin's **grammar requirements** for valid conditional statements

&#x20;


---

# Agent Instructions
This documentation is published with GitBook. GitBook is the documentation platform designed so that both humans and AI agents can read, navigate, and reason over technical content effectively. Learn more at gitbook.com.

## Querying This Documentation
If you need additional information that is not directly available in this page, you can query the documentation dynamically by asking a question.

Perform an HTTP GET request on the current page URL with the `ask` query parameter, and the optional `goal` query parameter:

```
GET https://hub.bsvblockchain.org/higher-learning/bsv-academy/bsv-opcodes/if-conditionals.md?ask=<question>&goal=<endgoal>
```

`ask` is the immediate question: it should be specific, self-contained, and written in natural language.
`goal` is optional and describes the broader end goal you are ultimately trying to accomplish on behalf of the user. GitBook uses it to tailor the answer towards what is most useful for that goal.

The response will contain a direct answer to the question and relevant excerpts and sources from the documentation.

Use this mechanism when the answer is not explicitly present in the current page, you need clarification or additional context, or you want to retrieve related documentation sections.
