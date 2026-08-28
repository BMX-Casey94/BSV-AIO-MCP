> For the complete documentation index, see [llms.txt](https://hub.bsvblockchain.org/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://hub.bsvblockchain.org/higher-learning/bsv-academy/bsv-opcodes/cryptographic-functions/digital-signatures-proving-ownership.md).

# Digital Signatures: Proving Ownership

<figure><img src="/files/dTWb9kQHk4fWF4lfshGJ" alt=""><figcaption></figcaption></figure>

While hash functions verify **data integrity**, digital signatures verify **authorization**—whether someone has the right to spend funds. Bitcoin uses **Elliptic Curve Digital Signature Algorithm (ECDSA)** with the **secp256k1 curve**.

**Important Identity Distinction:** Digital signatures alone do not establish human identity. They only prove that someone possessing a specific private key authorized a transaction.

#### Single Signature Verification:&#x20;

#### OP\_CHECKSIG

| Opcode             | Input      | Output         | Description                                                               |
| ------------------ | ---------- | -------------- | ------------------------------------------------------------------------- |
| OP\_CHECKSIG       | sig pubkey | TRUE / FALSE   | Verifies the signature against the public key for the current transaction |
| OP\_CHECKSIGVERIFY | sig pubkey | Nothing / fail | Same as OP\_CHECKSIG, but executes OP\_VERIFY afterward                   |

**Pay-to-Public-Key-Hash (P2PKH) Example:**

```
<signature> <public_key> 
OP_DUP OP_HASH160 <pubkey_hash> OP_EQUALVERIFY OP_CHECKSIG 
```

This pattern ensures both that the correct public key is provided and that a valid signature for that key is present.


---

# Agent Instructions
This documentation is published with GitBook. GitBook is the documentation platform designed so that both humans and AI agents can read, navigate, and reason over technical content effectively. Learn more at gitbook.com.

## Querying This Documentation
If you need additional information that is not directly available in this page, you can query the documentation dynamically by asking a question.

Perform an HTTP GET request on the current page URL with the `ask` query parameter, and the optional `goal` query parameter:

```
GET https://hub.bsvblockchain.org/higher-learning/bsv-academy/bsv-opcodes/cryptographic-functions/digital-signatures-proving-ownership.md?ask=<question>&goal=<endgoal>
```

`ask` is the immediate question: it should be specific, self-contained, and written in natural language.
`goal` is optional and describes the broader end goal you are ultimately trying to accomplish on behalf of the user. GitBook uses it to tailor the answer towards what is most useful for that goal.

The response will contain a direct answer to the question and relevant excerpts and sources from the documentation.

Use this mechanism when the answer is not explicitly present in the current page, you need clarification or additional context, or you want to retrieve related documentation sections.
