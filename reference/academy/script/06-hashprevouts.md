> For the complete documentation index, see [llms.txt](https://hub.bsvblockchain.org/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://hub.bsvblockchain.org/higher-learning/bsv-academy/introduction-to-bitcoin-script/chapter-5-op_push_tx/06-hashprevouts.md).

# 06 - hashPrevouts

The composition of the hash of previous outputs field (hash\_prevouts) is dependent on whether the `SIGHASH_ANYONECAPAY` flag is used in the transaction pre-image. If `SIGHASH_ANYONECAPAY` is set to 0, this field is the SHA256 hash of the concatenated hash of the each outpoint being spent in this transaction, listed in 36 byte format (txid - 32bytes, vout - 4bytes). If `SIGHASH_ANYONECAPAY` is set to 1, only the outpoint that this input spends is signed, so the field is entered as a 32 byte null string.

<figure><img src="/files/TQLaQd99vZi0hG2byffE" alt=""><figcaption></figcaption></figure>

#### Example: Put`hash_prevouts` on the top of the stack

In this example, we bring `hash_prevouts` to the top of the stack for further processing.

| Stack                                                 | Script             | Description                                      |
| ----------------------------------------------------- | ------------------ | ------------------------------------------------ |
| \<r\_tx\_preimg>                                      | ...                | Version field has been removed                   |
| \<r\_tx\_preimg>                                      | 0x20               | add Hash of Previous Outputs length to the stack |
| \<r\_tx\_preimg> 0x20                                 | OP\_SPLIT          | Split version from pre-image                     |
| \<hash\_prevouts> \<r\_tx\_preimg>                    | OP\_SWAP / OP\_NIP | Swap version to front, or drop if not needed     |
| \<r\_tx\_preimg> \<hash\_prevouts> / \<r\_tx\_preimg> | ...                | Script continues                                 |


---

# Agent Instructions
This documentation is published with GitBook. GitBook is the documentation platform designed so that both humans and AI agents can read, navigate, and reason over technical content effectively. Learn more at gitbook.com.

## Querying This Documentation
If you need additional information that is not directly available in this page, you can query the documentation dynamically by asking a question.

Perform an HTTP GET request on the current page URL with the `ask` query parameter, and the optional `goal` query parameter:

```
GET https://hub.bsvblockchain.org/higher-learning/bsv-academy/introduction-to-bitcoin-script/chapter-5-op_push_tx/06-hashprevouts.md?ask=<question>&goal=<endgoal>
```

`ask` is the immediate question: it should be specific, self-contained, and written in natural language.
`goal` is optional and describes the broader end goal you are ultimately trying to accomplish on behalf of the user. GitBook uses it to tailor the answer towards what is most useful for that goal.

The response will contain a direct answer to the question and relevant excerpts and sources from the documentation.

Use this mechanism when the answer is not explicitly present in the current page, you need clarification or additional context, or you want to retrieve related documentation sections.
