> For the complete documentation index, see [llms.txt](https://hub.bsvblockchain.org/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://hub.bsvblockchain.org/higher-learning/bsv-academy/introduction-to-bitcoin-script/chapter-1-about-bitcoin-script/07-the-script-evaluator.md).

# 07 - The Script Evaluator

In each Bitcoin node is a system element called a script evaluator. When a Bitcoin transaction is received by a node, the evaluator performs a series of checks against it such as looking at its size, the values of its inputs and outputs and more.

During this process, the transaction is broken down into its separate component elements, such as inputs and outputs. Each part must undergo its own separate evaluation with different rules and policies.

As discussed previously, Bitcoin Scripts are processed when a transaction output is being spent as an input to a new transaction. The transaction input that spends the script must contain a valid solution to the predicate contained in the referenced output. Depending on the script used, the input can be very simple, or highly complex.

The transaction processing system must first retrieve the output being spent from the ledger. This is specified by using the TXID and index which are provided as the first part of the input. Once the output's lockScript has been retrieved, the processing system appends the lockScript which makes up the second part of the transaction input to the front of the unlockScript, and inserts an OP\_CODESEPARATOR to demark the boundary between unlockScript and lockScript. This opcode can also be used in the lockScript to segregate elements of the script from parts being signed, offering novel ways to manage contracts and exchange.

The script evaluator evaluates the script from start to finish against a set of rules which are part of the Bitcoin protocol. This means that all nodes must process each script in the exact same manner for consensus to be achieved, or network forks can occur.

Transactions are only valid if all of their inputs finish processing with a single non-zero value on the stack.


---

# Agent Instructions
This documentation is published with GitBook. GitBook is the documentation platform designed so that both humans and AI agents can read, navigate, and reason over technical content effectively. Learn more at gitbook.com.

## Querying This Documentation
If you need additional information that is not directly available in this page, you can query the documentation dynamically by asking a question.

Perform an HTTP GET request on the current page URL with the `ask` query parameter, and the optional `goal` query parameter:

```
GET https://hub.bsvblockchain.org/higher-learning/bsv-academy/introduction-to-bitcoin-script/chapter-1-about-bitcoin-script/07-the-script-evaluator.md?ask=<question>&goal=<endgoal>
```

`ask` is the immediate question: it should be specific, self-contained, and written in natural language.
`goal` is optional and describes the broader end goal you are ultimately trying to accomplish on behalf of the user. GitBook uses it to tailor the answer towards what is most useful for that goal.

The response will contain a direct answer to the question and relevant excerpts and sources from the documentation.

Use this mechanism when the answer is not explicitly present in the current page, you need clarification or additional context, or you want to retrieve related documentation sections.
