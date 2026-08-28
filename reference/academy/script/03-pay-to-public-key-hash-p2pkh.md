> For the complete documentation index, see [llms.txt](https://hub.bsvblockchain.org/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://hub.bsvblockchain.org/higher-learning/bsv-academy/introduction-to-bitcoin-script/chapter-4-simple-scripts/03-pay-to-public-key-hash-p2pkh.md).

# 03 - Pay to Public Key Hash (P2PKH)

Pay to Public Key Hash (P2PKH) is the most widely used locking script on the blockchain today. It combines the security of elliptic curve signatures with a hash function. The major benefit over the use of a P2PK script is that the user's public key is kept private from the network until the output is spent, providing an additional layer of cryptographic security for the user. The major benefit over the use of a Pay to Hash output is the use of Elliptic curve signatures, which are more secure than hash functions alone.

A pay to public key hash script is defined as follows:

`OP_DUP OP_HASH160 <public_key_hash> OP_EQUALVERIFY OP_CHECKSIG`

To spend an output that is locked with a P2PKH script, the following solution is provided:

`<signature> <public_key>`

The validation engine will evaluate the full script as follows:

`<signature> <public_key> OP_DUP OP_HASH160 <public_key_hash> OP_EQUALVERIFY OP_CHECKSIG`

A breakdown of the script evaluation process is shown below:

<table><thead><tr><th width="208.33333333333331">Stack</th><th width="286">Script</th><th>Description</th></tr></thead><tbody><tr><td>Empty.</td><td><p>&#x3C;sig> &#x3C;pubKey> | |</p><p>OP_DUP OP_HASH160 &#x3C;pubKeyHash> OP_EQUALVERIFY OP_CHECKSIG</p></td><td>scriptSig and scriptPubKey are combined.</td></tr><tr><td>&#x3C;sig> &#x3C;pubKey></td><td>OP_DUP OP_HASH160 &#x3C;pubKeyHash> OP_EQUALVERIFY OP_CHECKSIG</td><td>Signature and public key are added to the stack</td></tr><tr><td>&#x3C;sig> &#x3C;pubKey> &#x3C;pubKey></td><td>OP_HASH160 &#x3C;pubKeyHash> OP_EQUALVERIFY OP_CHECKSIG</td><td>Public key is duplicated.</td></tr><tr><td>&#x3C;sig> &#x3C;pubKey> &#x3C;pubKeyHash></td><td>&#x3C;pubKeyHash> OP_EQUALVERIFY OP_CHECKSIG</td><td>Duplication of public key is hashed.</td></tr><tr><td>&#x3C;sig> &#x3C;pubKey> &#x3C;pubKeyHash> &#x3C;pubKeyHash></td><td>OP_EQUALVERIFY OP_CHECKSIG</td><td>Expected public key hash is added to the stack</td></tr><tr><td>&#x3C;sig> &#x3C;pubKey></td><td>OP_CHECKSIG</td><td>Equality is checked between the script generated public key hash and expected public key hash.</td></tr><tr><td>true</td><td>Empty.</td><td>The signature is checked against the public key</td></tr></tbody></table>

<figure><img src="/files/TxELXtLaMlSJ5MFvUQN2" alt=""><figcaption></figcaption></figure>

As shown above, the signature and public key are both provided by the spending party. The public key is hashed, and the hash is checked against an expected value stored in the output. The check uses OP\_EQUALVERIFY, automatically failing the script if the check is not equal. Once it is established that the public key hashes to the expected value, OP\_CHECKSIG checks the signature and leaves the result of the check on the stack. If the signature is valid, the input can be spent in the transaction.


---

# Agent Instructions
This documentation is published with GitBook. GitBook is the documentation platform designed so that both humans and AI agents can read, navigate, and reason over technical content effectively. Learn more at gitbook.com.

## Querying This Documentation
If you need additional information that is not directly available in this page, you can query the documentation dynamically by asking a question.

Perform an HTTP GET request on the current page URL with the `ask` query parameter, and the optional `goal` query parameter:

```
GET https://hub.bsvblockchain.org/higher-learning/bsv-academy/introduction-to-bitcoin-script/chapter-4-simple-scripts/03-pay-to-public-key-hash-p2pkh.md?ask=<question>&goal=<endgoal>
```

`ask` is the immediate question: it should be specific, self-contained, and written in natural language.
`goal` is optional and describes the broader end goal you are ultimately trying to accomplish on behalf of the user. GitBook uses it to tailor the answer towards what is most useful for that goal.

The response will contain a direct answer to the question and relevant excerpts and sources from the documentation.

Use this mechanism when the answer is not explicitly present in the current page, you need clarification or additional context, or you want to retrieve related documentation sections.
