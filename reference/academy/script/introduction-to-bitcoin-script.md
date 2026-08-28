> For the complete documentation index, see [llms.txt](https://hub.bsvblockchain.org/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://hub.bsvblockchain.org/higher-learning/bsv-academy/introduction-to-bitcoin-script/chapter-1-about-bitcoin-script/introduction-to-bitcoin-script.md).

# 01 - Introduction

Welcome to Development with Script. In this course we will focus on Bitcoin Script, the immensely powerful and flexible programming language that is used in all Bitcoin transactions. Script is a fascinating tool which allows complex transactional conditions to be developed, using the set-in-stone Bitcoin protocol. This course is aimed at giving you a solid grasp of the ways in which Bitcoin script's unique functionality is applied within Bitcoin transactions to allow you to build applications that leverage the superpowers of Bitcoin.

{% file src="/files/au2CrUc3mymqpHOir1ON" %}

The course will be broken down into 5 chapters as follows:

Chapter 1 will focus on the history of FORTH and its relationship to Bitcoin Script, and the differences between the two. It will also look at the efficiency of script which is a key element of the Bitcoin protocol that will eventually allow nodes to validate hundreds of millions of transactions per second. We will also discuss why script does not allow jumps in code, but also look at how it can be used to implement turing complete systems. We will also have a look at how Bitcoin Script has evolved over the years to get to its current state, and discuss why there will be no further changes to its design.

Chapter 2 will begin looking at the programming language itself, in particular some of the rules that are applied when scripts are validated. We will then look at the capabilities of script, and explore how it might be used as a basis to implement more general purpose computing systems. We will also discuss the architecture of the script evaluator, including the two stacks, how they differ, and the purpose each can be applied to, as well as looking in-depth at reverse polish notation, and discussing how it is employed in Bitcoin, and some of the requirements around optimising data item usage.

Chapter 3 will take students through the Bitcoin Script opcodes. The opcodes can be considered a library of primitive functions that are used to express the desired functionality required of a script. Bitcoin's opcodes can be used to build any compute function possible with a little imagination. We will also take a brief look back at the changes that have been rolled into Bitcoin Script, and what they might mean for anyone who has written scripts to the ledger using older variations of the opcode set.

Chapter 4 will take a closer look at a specific set of opcodes that offer higher level functionality, including IF/ELSE conditions, string formatting, and most importantly, the digital signature checks that keep Bitcoin outputs secure. We will take a close look into what a digital signature checks and how.

Chapter 5 will then look at a series of well-known and battle-tested transaction types, to give you an idea of how templates can be employed to deliver applications to millions of unique users.

We hope that this course will give you the knowledge and skills you need to be more effective in your development of applications on Bitcoin, and allows you to build better products that serve more people faster.

Thank you.


---

# Agent Instructions
This documentation is published with GitBook. GitBook is the documentation platform designed so that both humans and AI agents can read, navigate, and reason over technical content effectively. Learn more at gitbook.com.

## Querying This Documentation
If you need additional information that is not directly available in this page, you can query the documentation dynamically by asking a question.

Perform an HTTP GET request on the current page URL with the `ask` query parameter, and the optional `goal` query parameter:

```
GET https://hub.bsvblockchain.org/higher-learning/bsv-academy/introduction-to-bitcoin-script/chapter-1-about-bitcoin-script/introduction-to-bitcoin-script.md?ask=<question>&goal=<endgoal>
```

`ask` is the immediate question: it should be specific, self-contained, and written in natural language.
`goal` is optional and describes the broader end goal you are ultimately trying to accomplish on behalf of the user. GitBook uses it to tailor the answer towards what is most useful for that goal.

The response will contain a direct answer to the question and relevant excerpts and sources from the documentation.

Use this mechanism when the answer is not explicitly present in the current page, you need clarification or additional context, or you want to retrieve related documentation sections.
