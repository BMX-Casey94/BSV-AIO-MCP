> For the complete documentation index, see [llms.txt](https://hub.bsvblockchain.org/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://hub.bsvblockchain.org/higher-learning/bsv-academy/introduction-to-bitcoin-script/chapter-5-op_push_tx/01-turing-machines.md).

# 01 - Turing Machines

A Turing machine is defined as a machine that manipulates symbols on a tape according to a set of rules. Despite the simplicity of this definition, Turing machines can be complex, and have been shown capable of performing any mathematical or computing function.

The tape used by a Turing machine is unbounded in size and divided into discrete cells, each of which holds one symbol from a finite set. The machine has a 'head' which is positioned over these cells, the contents of which defines the current state, and is used to calculate the next state. The machine moves in both directions on the tape, modifying each cell depending on the current state and the cell's contents. Once the calculation is complete, the process halts, ending the process.

In Bitcoin, we treat the ledger as the unbounded tape and use Bitcoin transactions as the cells. Each output that is part of the Turing machine contains script that reflects the current state and the evaluation process that determines the next state based on the transaction inputs. In this way, complex, multi-step operations can be developed which are programmed to move to one of a finite set of valid next states. This type of operation can also be called a 'Finite State Machine'.

There are several explanations and examples of Turing completeness in Bitcoin script, including the following:

<https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3160279>

{% embed url="<https://medium.com/coinmonks/turing-machine-on-bitcoin-7f0ebe0d52b1>" %}

Each of these examples leverages a technique called `OP_PUSH_TX` which uses the properties of Bitcoin's digital signatures to discover the current state of a process, evaluate inputs and determine the next state. An agent is always required, and features such as payment channels can be leveraged to deliver demand based services within simple contracts.

In this chapter we will look at how this technique works, and evaluate the components of the Elliptic Curve signatures that enable these powerful applications to be developed.


---

# Agent Instructions
This documentation is published with GitBook. GitBook is the documentation platform designed so that both humans and AI agents can read, navigate, and reason over technical content effectively. Learn more at gitbook.com.

## Querying This Documentation
If you need additional information that is not directly available in this page, you can query the documentation dynamically by asking a question.

Perform an HTTP GET request on the current page URL with the `ask` query parameter, and the optional `goal` query parameter:

```
GET https://hub.bsvblockchain.org/higher-learning/bsv-academy/introduction-to-bitcoin-script/chapter-5-op_push_tx/01-turing-machines.md?ask=<question>&goal=<endgoal>
```

`ask` is the immediate question: it should be specific, self-contained, and written in natural language.
`goal` is optional and describes the broader end goal you are ultimately trying to accomplish on behalf of the user. GitBook uses it to tailor the answer towards what is most useful for that goal.

The response will contain a direct answer to the question and relevant excerpts and sources from the documentation.

Use this mechanism when the answer is not explicitly present in the current page, you need clarification or additional context, or you want to retrieve related documentation sections.
