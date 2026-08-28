> For the complete documentation index, see [llms.txt](https://hub.bsvblockchain.org/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://hub.bsvblockchain.org/higher-learning/bsv-academy/introduction-to-bitcoin-script/chapter-5-op_push_tx/03-op_push_tx.md).

# 03 - OP\_PUSH\_TX

OP\_PUSH\_TX is a scripting technique where the transaction script requires the user to submit a transaction pre-image as part of the solution.

Within the script, the pre-image is signed and then checked using one of Bitcoin's CHECKSIG opcodes (e.g. OP\_CHECKSIG, OP\_CHECKSIGVERIFY).

The SIGHASH flags applied to the signature can give you a means to check things such as total quantity of inputs and outputs, output script types and more. More detail on Sighash flags can be found [HERE](https://wiki.bitcoinsv.io/index.php/Sighash_flags).

There are different versions of the `OP_PUSH_TX` technique, but for the purposes of this module, we will use a simplified version known as 'Optimised OP\_PUSH\_TX'.

To simplify the calculation process, Optimised OP\_PUSH\_TX uses pre-set values for both the private key and ephemeral key, allowing OP\_PUSH\_TX to be executed with a script of less than 100 bytes.

<figure><img src="/files/gQ7t8DJisL3bBTepqe7k" alt=""><figcaption></figcaption></figure>


---

# Agent Instructions
This documentation is published with GitBook. GitBook is the documentation platform designed so that both humans and AI agents can read, navigate, and reason over technical content effectively. Learn more at gitbook.com.

## Querying This Documentation
If you need additional information that is not directly available in this page, you can query the documentation dynamically by asking a question.

Perform an HTTP GET request on the current page URL with the `ask` query parameter, and the optional `goal` query parameter:

```
GET https://hub.bsvblockchain.org/higher-learning/bsv-academy/introduction-to-bitcoin-script/chapter-5-op_push_tx/03-op_push_tx.md?ask=<question>&goal=<endgoal>
```

`ask` is the immediate question: it should be specific, self-contained, and written in natural language.
`goal` is optional and describes the broader end goal you are ultimately trying to accomplish on behalf of the user. GitBook uses it to tailor the answer towards what is most useful for that goal.

The response will contain a direct answer to the question and relevant excerpts and sources from the documentation.

Use this mechanism when the answer is not explicitly present in the current page, you need clarification or additional context, or you want to retrieve related documentation sections.
