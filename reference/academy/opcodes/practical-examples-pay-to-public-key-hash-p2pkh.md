> For the complete documentation index, see [llms.txt](https://hub.bsvblockchain.org/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://hub.bsvblockchain.org/higher-learning/bsv-academy/bsv-opcodes/constant-value-and-pushdata-opcodes/practical-examples-pay-to-public-key-hash-p2pkh.md).

# Practical Examples: Pay to Public Key Hash (P2PKH)

Let's examine how constant and pushdata opcodes appear in Bitcoin's most common script type: **Pay to Public Key Hash (P2PKH)**. This will help you recognize these opcodes in real transactions.

#### Fully Assembled P2PKH Script

When a P2PKH transaction is validated, the script looks like this:

```
0x48 <signature> 0x20 <public_key> OP_CODESEPARATOR OP_DUP OP_HASH160 0x14 <public_key_hash> OP_EQUALVERIFY OP_CHECKSIG
```

**Note:** The **OP\_CODESEPARATOR** marks where scriptSig ends and scriptPubKey begins—the validation engine inserts it automatically.

#### Breaking Down the Pushdata Operations

Let's identify each pushdata operation:

**1. Pushing the signature (72 bytes):**

```
0x48 <signature>
```

* **0x48** = hexadecimal for 72
* Uses inline pushdata (72 is less than 75)
* Pushes a 72-byte ECDSA signature onto the stack

**2. Pushing the public key (32 bytes compressed):**

```
0x20 <public_key>
```

* **0x20** = hexadecimal for 32
* Uses inline pushdata (32 is less than 75)
* Pushes a 32-byte compressed public key onto the stack

**3. Pushing the expected public key hash (20 bytes):**

```
0x14 <public_key_hash> 
```

* **0x14** = hexadecimal for 20
* Uses inline pushdata (20 is less than 75)
* Pushes the 20-byte public key hash (the address hash) onto the stack

<figure><img src="/files/gfF3Onbnc6qwp1IZiXsj" alt=""><figcaption></figcaption></figure>

#### Typical Data Sizes in Bitcoin Script

Understanding common data sizes helps you recognize patterns:

| **Data Type**           | **Typical Size** | **Pushdata Method** |
| ----------------------- | ---------------- | ------------------- |
| Public key hash         | 20 bytes         | 0x14 (inline)       |
| SHA-256 hash            | 32 bytes         | 0x20 (inline)       |
| Compressed public key   | 33 bytes         | 0x21 (inline)       |
| Uncompressed public key | 65 bytes         | 0x41 (inline)       |
| ECDSA signature         | 70-73 bytes      | 0x46-0x49 (inline)  |
| Small data (metadata)   | <75 bytes        | Inline              |
| Medium data             | 76-255 bytes     | OP\_PUSHDATA1       |


---

# Agent Instructions
This documentation is published with GitBook. GitBook is the documentation platform designed so that both humans and AI agents can read, navigate, and reason over technical content effectively. Learn more at gitbook.com.

## Querying This Documentation
If you need additional information that is not directly available in this page, you can query the documentation dynamically by asking a question.

Perform an HTTP GET request on the current page URL with the `ask` query parameter, and the optional `goal` query parameter:

```
GET https://hub.bsvblockchain.org/higher-learning/bsv-academy/bsv-opcodes/constant-value-and-pushdata-opcodes/practical-examples-pay-to-public-key-hash-p2pkh.md?ask=<question>&goal=<endgoal>
```

`ask` is the immediate question: it should be specific, self-contained, and written in natural language.
`goal` is optional and describes the broader end goal you are ultimately trying to accomplish on behalf of the user. GitBook uses it to tailor the answer towards what is most useful for that goal.

The response will contain a direct answer to the question and relevant excerpts and sources from the documentation.

Use this mechanism when the answer is not explicitly present in the current page, you need clarification or additional context, or you want to retrieve related documentation sections.
