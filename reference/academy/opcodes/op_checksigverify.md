> For the complete documentation index, see [llms.txt](https://hub.bsvblockchain.org/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://hub.bsvblockchain.org/higher-learning/bsv-academy/bsv-opcodes/op_nop-op_ver/op_checksigverify.md).

# OP\_CHECKSIGVERIFY

<figure><img src="/files/1zAxblBe2tht88zfJTOk" alt=""><figcaption></figcaption></figure>

**OP\_CHECKSIGVERIFY** performs an ECDSA signature check consuming the top two values on the stack and allows the script to continue processing if the signature is valid.

| **Word**           | **Hex** | **Input**  | **Output**     | **Description**                                                                     |
| ------------------ | ------- | ---------- | -------------- | ----------------------------------------------------------------------------------- |
| OP\_CHECKSIGVERIFY | 0xad    | sig pubkey | Nothing / fail | Same as OP\_CHECKSIG, but runs OP\_VERIFY afterward. Fails if signature is invalid. |

**Example:**

```
<signature> <public_key> OP_CHECKSIGVERIFY
```

If the signature is invalid, the OP\_CHECKSIGVERIFY opcode causes the script to terminate and fail. This is a basic signature check script occasionally used by transactions on the network, although most wallets favor Pay To Public Key Hash (P2PKH) as the default script format.


---

# Agent Instructions
This documentation is published with GitBook. GitBook is the documentation platform designed so that both humans and AI agents can read, navigate, and reason over technical content effectively. Learn more at gitbook.com.

## Querying This Documentation
If you need additional information that is not directly available in this page, you can query the documentation dynamically by asking a question.

Perform an HTTP GET request on the current page URL with the `ask` query parameter, and the optional `goal` query parameter:

```
GET https://hub.bsvblockchain.org/higher-learning/bsv-academy/bsv-opcodes/op_nop-op_ver/op_checksigverify.md?ask=<question>&goal=<endgoal>
```

`ask` is the immediate question: it should be specific, self-contained, and written in natural language.
`goal` is optional and describes the broader end goal you are ultimately trying to accomplish on behalf of the user. GitBook uses it to tailor the answer towards what is most useful for that goal.

The response will contain a direct answer to the question and relevant excerpts and sources from the documentation.

Use this mechanism when the answer is not explicitly present in the current page, you need clarification or additional context, or you want to retrieve related documentation sections.
