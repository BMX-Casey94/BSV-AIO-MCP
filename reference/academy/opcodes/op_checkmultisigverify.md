> For the complete documentation index, see [llms.txt](https://hub.bsvblockchain.org/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://hub.bsvblockchain.org/higher-learning/bsv-academy/bsv-opcodes/op_nop-op_ver/op_checkmultisigverify.md).

# OP\_CHECKMULTISIGVERIFY

<figure><img src="/files/C98gBrKwbH8sl0eBbYcy" alt=""><figcaption></figcaption></figure>

**OP\_CHECKMULTISIGVERIFY** performs an ECDSA signature check consuming up to i items from the stack, where n is the number of public keys in the group, m is the number of signatures needed and i = n + m + 3. If the multisignature condition is valid, the script continues to process.

| **Word**                | **Hex** | **Input**                               | **Output**     | **Description**                                                                          |
| ----------------------- | ------- | --------------------------------------- | -------------- | ---------------------------------------------------------------------------------------- |
| OP\_CHECKMULTISIGVERIFY | 0xaf    | x sig1 sig2 ... \<n> pub1 pub2 ... \<m> | Nothing / fail | Same as OP\_CHECKMULTISIG, but runs OP\_VERIFY afterward. Fails if multisig check fails. |

**Example:**

```
OP_0 <signature_1> <signature_3> OP_2 <public_key_1> <public_key_2> <public_key_3> OP_3 OP_CHECKMULTISIGVERIFY
```

*Note: The first item pushed using OP\_0 is called the junk item, required due to an off-by-one bug in the original implementation.*

In this example, n = 2 and m = 3 so there are 2(signatures) + 3(pubkeys) + 2(indicators) + 1(junk item) = 8 items consumed from the stack. To spend an output with this multisignature script, the user must submit a junk item and 2 valid signatures corresponding to 2 of the public keys in the list, in the correct order.


---

# Agent Instructions
This documentation is published with GitBook. GitBook is the documentation platform designed so that both humans and AI agents can read, navigate, and reason over technical content effectively. Learn more at gitbook.com.

## Querying This Documentation
If you need additional information that is not directly available in this page, you can query the documentation dynamically by asking a question.

Perform an HTTP GET request on the current page URL with the `ask` query parameter, and the optional `goal` query parameter:

```
GET https://hub.bsvblockchain.org/higher-learning/bsv-academy/bsv-opcodes/op_nop-op_ver/op_checkmultisigverify.md?ask=<question>&goal=<endgoal>
```

`ask` is the immediate question: it should be specific, self-contained, and written in natural language.
`goal` is optional and describes the broader end goal you are ultimately trying to accomplish on behalf of the user. GitBook uses it to tailor the answer towards what is most useful for that goal.

The response will contain a direct answer to the question and relevant excerpts and sources from the documentation.

Use this mechanism when the answer is not explicitly present in the current page, you need clarification or additional context, or you want to retrieve related documentation sections.
