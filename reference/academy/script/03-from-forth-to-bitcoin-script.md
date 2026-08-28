> For the complete documentation index, see [llms.txt](https://hub.bsvblockchain.org/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://hub.bsvblockchain.org/higher-learning/bsv-academy/introduction-to-bitcoin-script/chapter-1-about-bitcoin-script/03-from-forth-to-bitcoin-script.md).

# 03 - From FORTH to Bitcoin Script

FORTH is the parent of Bitcoin Script, which adds some grammar changes and removes capabilities such as jump instructions and loops.

In transactions on the Bitcoin ledger, each output contains a predicate called a lockScript. This predicate is written in Bitcoin script and evaluates an input against a set of conditions. When a transaction output is spent, the user provides a set of input data called the unlockScript which is loaded onto the stack before the lockScript processes it. If the evaluation finishes with a single non-zero value on the stack, the unlockScript is valid and the tokens contained in the output can be spent in the transaction. For a transaction to be valid, every input must have a valid unlockScript and every new lockScript must meet the Bitcoin grammar rules we will cover in chapter 2.

Bitcoin script predicates can only contain opcodes defined within the Bitcoin protocol itself. The evaluation ends when any of the following conditions are met:

* The script reaches an OP\_RETURN opcode
* The script fails an OP\_VERIFY check
* The scriptSig is incomplete or invalid
* The end of the script is reached
* The script exceeds a policy such as the maximum stack memory policy (for more information on policies, please see the BitcoinSV wiki, or consider taking Introduction to Bitcoin Infrastructure)

Bitcoin script cannot jump back to a previous instruction. For an input to a transaction to be valid its script must process without halting until it ends.


---

# Agent Instructions
This documentation is published with GitBook. GitBook is the documentation platform designed so that both humans and AI agents can read, navigate, and reason over technical content effectively. Learn more at gitbook.com.

## Querying This Documentation
If you need additional information that is not directly available in this page, you can query the documentation dynamically by asking a question.

Perform an HTTP GET request on the current page URL with the `ask` query parameter, and the optional `goal` query parameter:

```
GET https://hub.bsvblockchain.org/higher-learning/bsv-academy/introduction-to-bitcoin-script/chapter-1-about-bitcoin-script/03-from-forth-to-bitcoin-script.md?ask=<question>&goal=<endgoal>
```

`ask` is the immediate question: it should be specific, self-contained, and written in natural language.
`goal` is optional and describes the broader end goal you are ultimately trying to accomplish on behalf of the user. GitBook uses it to tailor the answer towards what is most useful for that goal.

The response will contain a direct answer to the question and relevant excerpts and sources from the documentation.

Use this mechanism when the answer is not explicitly present in the current page, you need clarification or additional context, or you want to retrieve related documentation sections.
