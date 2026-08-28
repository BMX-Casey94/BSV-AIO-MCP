> For the complete documentation index, see [llms.txt](https://hub.bsvblockchain.org/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://hub.bsvblockchain.org/higher-learning/bsv-academy/introduction-to-bitcoin-script/chapter-5-op_push_tx/10-value.md).

# 10 - value

The value of the input (value) is an 8 byte little endian integer representing the satoshi value of the UTXO being signed.

This can be useful when enforcing process states that require either static or dynamic satoshi values to be used or otherwise checked in each iteration of the transaction.

<figure><img src="/files/dAnPkU1mtKLQz1en3Rx3" alt=""><figcaption></figcaption></figure>

#### Example: Value of input check

Checking the value can be a useful gating process to decide whether or not to end a process. In this example, the input value is checked, and if found to be less than 16 satoshis, an alternative condition is created.

<table><thead><tr><th width="237.33333333333331">Stack</th><th>Script</th><th>Description</th></tr></thead><tbody><tr><td>&#x3C;r_tx_preimg></td><td>...</td><td>Version, hash_prevouts, hash_nSequence, hash_outpoints and the script have been removed</td></tr><tr><td>&#x3C;r_tx_preimg></td><td>OP_8</td><td>length is 8 bytes long</td></tr><tr><td>&#x3C;r_tx_preimg> 0x08</td><td>OP_SPLIT</td><td>Split value</td></tr><tr><td>&#x3C;8byte_value> &#x3C;rr_tx_preimg></td><td>OP_SWAP</td><td>Move to top of stack</td></tr><tr><td>&#x3C;rr_tx_preimg> &#x3C;8byte_value></td><td>OP_BIN2NUM</td><td>Optimally encode the integer value</td></tr><tr><td>&#x3C;rr_tx_preimg> &#x3C;value></td><td>OP_16</td><td>16 satoshis is our limit</td></tr><tr><td>&#x3C;rr_tx_preimg> &#x3C;value> 16</td><td>OP_GREATERTHANOREQUAL</td><td>numeric check</td></tr><tr><td>&#x3C;rr_tx_preimg> &#x3C;result></td><td>OP_IF</td><td>if greater than</td></tr><tr><td>&#x3C;rr_tx_preimg></td><td>...</td><td>process</td></tr><tr><td>&#x3C;rr_tx_preimg></td><td>OP_ELSE</td><td>if less than</td></tr><tr><td>&#x3C;rr_tx_preimg></td><td>...</td><td>alternative process</td></tr><tr><td>&#x3C;data_items></td><td>OP_ENDIF</td><td>Resulting outcome</td></tr></tbody></table>


---

# Agent Instructions
This documentation is published with GitBook. GitBook is the documentation platform designed so that both humans and AI agents can read, navigate, and reason over technical content effectively. Learn more at gitbook.com.

## Querying This Documentation
If you need additional information that is not directly available in this page, you can query the documentation dynamically by asking a question.

Perform an HTTP GET request on the current page URL with the `ask` query parameter, and the optional `goal` query parameter:

```
GET https://hub.bsvblockchain.org/higher-learning/bsv-academy/introduction-to-bitcoin-script/chapter-5-op_push_tx/10-value.md?ask=<question>&goal=<endgoal>
```

`ask` is the immediate question: it should be specific, self-contained, and written in natural language.
`goal` is optional and describes the broader end goal you are ultimately trying to accomplish on behalf of the user. GitBook uses it to tailor the answer towards what is most useful for that goal.

The response will contain a direct answer to the question and relevant excerpts and sources from the documentation.

Use this mechanism when the answer is not explicitly present in the current page, you need clarification or additional context, or you want to retrieve related documentation sections.
