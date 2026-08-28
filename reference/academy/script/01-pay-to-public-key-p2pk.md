> For the complete documentation index, see [llms.txt](https://hub.bsvblockchain.org/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://hub.bsvblockchain.org/higher-learning/bsv-academy/introduction-to-bitcoin-script/chapter-4-simple-scripts/01-pay-to-public-key-p2pk.md).

# 01 - Pay to Public Key (P2PK)

Pay to Public Key is the most simple script that can be deployed that uses the security of Elliptic curve signatures to lock transaction outputs.

A pay to public key script is defined as follows:

`<public_key> OP_CHECKSIG`

To spend an output that is locked with a P2PK script, the following solution is provided:

`<signature>`

The validation engine will evaluate the full script as follows:

`<signature> <public_key> OP_CHECKSIG`

For the purposes of brevity, we exclude the pushdata opcodes and use | | to represent the OP\_CODESEPARATOR that the validation engine automatically inserts inbetween the input and output scripts.

A breakdown of the script evaluation process is shown below:

<table><thead><tr><th width="177.33333333333331">Stack</th><th>Script</th><th>Description</th></tr></thead><tbody><tr><td>Empty.</td><td><p>&#x3C;sig> | |</p><p>&#x3C;pubKey> OP_CHECKSIG</p></td><td>scriptSig and scriptPubKey are combined.</td></tr><tr><td>&#x3C;sig></td><td>&#x3C;pubKey> OP_CHECKSIG</td><td>Signature is added to the stack.</td></tr><tr><td>&#x3C;sig> &#x3C;pubKey></td><td>OP_CHECKSIG</td><td>Pubkey is added to stack.</td></tr><tr><td>true</td><td>Empty.</td><td>Signature is checked against the public key</td></tr></tbody></table>

<figure><img src="/files/zz0rNkSKA0AWaH6Dz4Pb" alt=""><figcaption></figcaption></figure>

As shown above, the signature and public key are pushed onto the stack, and then consumed by OP\_CHECKSIG which leaves the result of the check on the stack. If the signature is valid, the input can be spent in the transaction.


---

# Agent Instructions
This documentation is published with GitBook. GitBook is the documentation platform designed so that both humans and AI agents can read, navigate, and reason over technical content effectively. Learn more at gitbook.com.

## Querying This Documentation
If you need additional information that is not directly available in this page, you can query the documentation dynamically by asking a question.

Perform an HTTP GET request on the current page URL with the `ask` query parameter, and the optional `goal` query parameter:

```
GET https://hub.bsvblockchain.org/higher-learning/bsv-academy/introduction-to-bitcoin-script/chapter-4-simple-scripts/01-pay-to-public-key-p2pk.md?ask=<question>&goal=<endgoal>
```

`ask` is the immediate question: it should be specific, self-contained, and written in natural language.
`goal` is optional and describes the broader end goal you are ultimately trying to accomplish on behalf of the user. GitBook uses it to tailor the answer towards what is most useful for that goal.

The response will contain a direct answer to the question and relevant excerpts and sources from the documentation.

Use this mechanism when the answer is not explicitly present in the current page, you need clarification or additional context, or you want to retrieve related documentation sections.
