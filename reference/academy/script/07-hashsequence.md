> For the complete documentation index, see [llms.txt](https://hub.bsvblockchain.org/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://hub.bsvblockchain.org/higher-learning/bsv-academy/introduction-to-bitcoin-script/chapter-5-op_push_tx/07-hashsequence.md).

# 07 - hashSequence

The hashSequence field is the hash of the concatenation of the nSequence values of all inputs being signed. The make-up of the Hash of nSequence is dependent on whether `SIGHASH_ANYONECANPAY` flag is used.

If `SIGHASH_ANYONECANPAY` is **NOT** used, the hash value is a SHA256 hash of a concatenated list of the sequence number of each of the transaction's inputs.

If `SIGHASH_ANYONECANPAY` is used, the value is a 32 byte null string.

<figure><img src="/files/fCOHGtHf0IONx4W4MiHh" alt=""><figcaption></figcaption></figure>

#### Example: Check all sequence values are final

In this example, the script checks that two inputs are used, and that the input is final. To perform the check, the hash of sequence will be split from `r_tx_preimg` and tested against a hash of the expected value.

It is assumed that `version` and `hash_prevouts` have both been removed from `r_tx_preimage`.

<table><thead><tr><th width="250.33333333333331">Stack</th><th width="187">Script</th><th>Description</th></tr></thead><tbody><tr><td>&#x3C;r_tx_preimg></td><td>...</td><td>nVersion field and hashPrevouts have been removed</td></tr><tr><td>&#x3C;r_tx_preimg></td><td>0x20</td><td>add hash_nSequence length to the stack</td></tr><tr><td>&#x3C;r_tx_preimg> 0x20</td><td>OP_SPLIT</td><td>Split hash_nSequence from pre-image</td></tr><tr><td>&#x3C;hash_nSequence> &#x3C;rr_tx_preimg></td><td>OP_SWAP</td><td>Swap hash_nSequence to front</td></tr><tr><td>&#x3C;rr_tx_preimg> &#x3C;hash_nSequence></td><td>0xffffffffffffffff</td><td>Expected sequence value if two final inputs are used</td></tr><tr><td>&#x3C;rr_tx_preimg> &#x3C;hash_nSequence> 0xffffffffffffffff</td><td>OP_SHA256</td><td>Hash sequence value</td></tr><tr><td>&#x3C;rr_tx_preimg> &#x3C;hash_nSequence> &#x3C;sha256_ffffffff></td><td>OP_EQUALVERIFY</td><td>Check it is equal - fail if not</td></tr><tr><td>&#x3C;rr_tx_preimg></td><td>...</td><td>rest of script</td></tr></tbody></table>

This gives us a useful tool for managing closure of payment channels, providing an optimal processing path for channels submitted with fully final inputs.


---

# Agent Instructions
This documentation is published with GitBook. GitBook is the documentation platform designed so that both humans and AI agents can read, navigate, and reason over technical content effectively. Learn more at gitbook.com.

## Querying This Documentation
If you need additional information that is not directly available in this page, you can query the documentation dynamically by asking a question.

Perform an HTTP GET request on the current page URL with the `ask` query parameter, and the optional `goal` query parameter:

```
GET https://hub.bsvblockchain.org/higher-learning/bsv-academy/introduction-to-bitcoin-script/chapter-5-op_push_tx/07-hashsequence.md?ask=<question>&goal=<endgoal>
```

`ask` is the immediate question: it should be specific, self-contained, and written in natural language.
`goal` is optional and describes the broader end goal you are ultimately trying to accomplish on behalf of the user. GitBook uses it to tailor the answer towards what is most useful for that goal.

The response will contain a direct answer to the question and relevant excerpts and sources from the documentation.

Use this mechanism when the answer is not explicitly present in the current page, you need clarification or additional context, or you want to retrieve related documentation sections.
