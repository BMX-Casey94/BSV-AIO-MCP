> For the complete documentation index, see [llms.txt](https://hub.bsvblockchain.org/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://hub.bsvblockchain.org/higher-learning/bsv-academy/introduction-to-bitcoin-script/chapter-5-op_push_tx/11-nsequence.md).

# 11 - nSequence

The nSequence field is a 4 byte little endian number that is the sequence number of the input. This value can be used with nLocktime to put transactions into a non-final state, allowing a managed transfer of data to take place.

<figure><img src="/files/d1kOFQtNq5oAg8B3wV9W" alt=""><figcaption></figcaption></figure>

#### Example: Extract and check nSequence

In this example, we will extract the nSequence value of this input and only allow the UTXO to be spent if it is final.

<table><thead><tr><th width="237.33333333333331">Stack</th><th>Script</th><th>Description</th></tr></thead><tbody><tr><td>&#x3C;r_tx_preimg></td><td>...</td><td>Version, hash_prevouts, hash_nSequence, hash_outpoints, script and value have been removed</td></tr><tr><td>&#x3C;r_tx_preimg></td><td>OP_4</td><td>nSequence length is 4 bytes long</td></tr><tr><td>&#x3C;r_tx_preimg> 0x04</td><td>OP_SPLIT</td><td>Split nSequence</td></tr><tr><td>&#x3C;nsequence> &#x3C;rr_tx_preimg></td><td>OP_SWAP</td><td>Move to top of stack</td></tr><tr><td>&#x3C;rr_tx_preimg> &#x3C;nsequence></td><td>0xFFFFFFFF</td><td>0xFFFFFFFF is final</td></tr><tr><td>&#x3C;rr_tx_preimg> &#x3C;nsequence> 0xFFFFFFFF</td><td>OP_EQUALVERIFY</td><td>Fail script if tx is non-final</td></tr><tr><td>&#x3C;r_tx_preimg></td><td>...</td><td>rest of script</td></tr></tbody></table>


---

# Agent Instructions
This documentation is published with GitBook. GitBook is the documentation platform designed so that both humans and AI agents can read, navigate, and reason over technical content effectively. Learn more at gitbook.com.

## Querying This Documentation
If you need additional information that is not directly available in this page, you can query the documentation dynamically by asking a question.

Perform an HTTP GET request on the current page URL with the `ask` query parameter, and the optional `goal` query parameter:

```
GET https://hub.bsvblockchain.org/higher-learning/bsv-academy/introduction-to-bitcoin-script/chapter-5-op_push_tx/11-nsequence.md?ask=<question>&goal=<endgoal>
```

`ask` is the immediate question: it should be specific, self-contained, and written in natural language.
`goal` is optional and describes the broader end goal you are ultimately trying to accomplish on behalf of the user. GitBook uses it to tailor the answer towards what is most useful for that goal.

The response will contain a direct answer to the question and relevant excerpts and sources from the documentation.

Use this mechanism when the answer is not explicitly present in the current page, you need clarification or additional context, or you want to retrieve related documentation sections.
