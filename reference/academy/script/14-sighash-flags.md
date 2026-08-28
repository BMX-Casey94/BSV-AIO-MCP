> For the complete documentation index, see [llms.txt](https://hub.bsvblockchain.org/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://hub.bsvblockchain.org/higher-learning/bsv-academy/introduction-to-bitcoin-script/chapter-5-op_push_tx/14-sighash-flags.md).

# 14 - SIGHASH flags

The Sighash flags determine which parts of the transaction are being signed.

This value impacts other elements of the pre-image including hashPrevouts, hashSequence and hashOutputs. The SIGHASH flags are all contained within the last single byte of a signature, however in the pre-image they are contained within a 4 byte value, where the left-most byte is the SIGHASH flag applied to the signature, and the remaining 3 bytes are zero.

Sighash flags work as follows:

### SIGHASH\_ANYONECANPAY

SIGHASH\_ANYONECANPAY determines which of the transaction inputs the signature covers.

If SIGHASH\_ANYONECANPAY **is not** set, the signature must include all of the transaction inputs in the hash\_nSequence and hash\_prevouts values.

If SIGHASH\_ANYONECANPAY **is** set, only the input that the signature is applied to needs to be included. Because the previous output and nSequence are handled otherwise, both hash\_nSequence and hash\_prevouts are set to 32byte null strings when SIGHASH\_ANYONECANPAY is set. SIGHASH\_ANYONECANPAY can be useful when signing an input in advance of other transaction participants, where other inputs may be unknown.

### SIGHASH\_ALL, SIGHASH\_SINGLE, SIGHASH\_NONE

Only one of SIGHASH\_ALL, SIGHASH\_SINGLE and SIGHASH\_NONE can be used in any signature. If more than one of these flags is set, the transaction will be invalid.

If SIGHASH\_ALL is used, the signature must include all of the transaction outputs when it builds the pre-image.

If SIGHASH\_SINGLE is used, the signature must include only the transaction output at the same index as the input being signed in the pre-image.

If SIGHASH\_NONE is used, none of the transaction's outputs are included in the pre-image.

### SIGHASH\_FORKID

SIGHASH\_FORKID is a flag that was added to the signatures after August 1 2017 to provide replay protection against the BTC network when it was separated from Bitcoin to add segregated witness. SIGHASH\_FORKID must ALWAYS be set, or the transactions will be invalid.

<figure><img src="/files/ZNzVl6VdeytsEdSz9qlc" alt=""><figcaption></figcaption></figure>

#### Example: Checking SIGHASH flags

<table><thead><tr><th width="237.33333333333331">Stack</th><th>Script</th><th>Description</th></tr></thead><tbody><tr><td>&#x3C;r_tx_preimg></td><td>...</td><td>Because nSequence is the final 4 byte value, we do not need to know what parts of r_tx_preimg remain to be able to extract it.</td></tr><tr><td>&#x3C;r_tx_preimg></td><td>OP_SIZE</td><td>Put the size of r_tx_preimg on the stack</td></tr><tr><td>&#x3C;r_tx_preimg> &#x3C;size></td><td>OP_4</td><td>SIGHASH length is 4 bytes long</td></tr><tr><td>&#x3C;r_tx_preimg> &#x3C;size> 0x04</td><td>OP_SUB</td><td>Calculate split location</td></tr><tr><td>&#x3C;r_tx_preimg> &#x3C;split_length></td><td>OP_SPLIT</td><td>Split the pre-image</td></tr><tr><td>&#x3C;lr_tx_preimg> &#x3C;sighash></td><td>OP_NIP</td><td>Remove remainder</td></tr><tr><td>&#x3C;sighash></td><td>&#x3C;required_sighash></td><td>Load the required sighash flag onto the stack as a 1 byte value</td></tr><tr><td>&#x3C;sighash> &#x3C;required_sighash></td><td>OP_NUMEQUALVERIFY</td><td>Use numeric equality check to validate that the correct sighash is used.</td></tr><tr><td>...</td><td>...</td><td>rest of script</td></tr></tbody></table>

In this script, we first use OP\_SIZE to push the length of r\_tx\_preimg to the stack. By subtracting 4 from this, we can calculate the location in the remaining pre-image where the sighash element begins, and use that value to split it from r\_tx\_preimg. Once sighash is on the stack, it is a simple numeric equality check against a supplied sighash.

Alternative scenarios include using a bitwise mask and performing AND/OR checks against individual flags rather than enforcing the entire sighash state.


---

# Agent Instructions
This documentation is published with GitBook. GitBook is the documentation platform designed so that both humans and AI agents can read, navigate, and reason over technical content effectively. Learn more at gitbook.com.

## Querying This Documentation
If you need additional information that is not directly available in this page, you can query the documentation dynamically by asking a question.

Perform an HTTP GET request on the current page URL with the `ask` query parameter, and the optional `goal` query parameter:

```
GET https://hub.bsvblockchain.org/higher-learning/bsv-academy/introduction-to-bitcoin-script/chapter-5-op_push_tx/14-sighash-flags.md?ask=<question>&goal=<endgoal>
```

`ask` is the immediate question: it should be specific, self-contained, and written in natural language.
`goal` is optional and describes the broader end goal you are ultimately trying to accomplish on behalf of the user. GitBook uses it to tailor the answer towards what is most useful for that goal.

The response will contain a direct answer to the question and relevant excerpts and sources from the documentation.

Use this mechanism when the answer is not explicitly present in the current page, you need clarification or additional context, or you want to retrieve related documentation sections.
