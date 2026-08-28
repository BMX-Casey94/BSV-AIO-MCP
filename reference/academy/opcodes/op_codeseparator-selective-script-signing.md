> For the complete documentation index, see [llms.txt](https://hub.bsvblockchain.org/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://hub.bsvblockchain.org/higher-learning/bsv-academy/bsv-opcodes/cryptographic-functions/op_codeseparator-selective-script-signing.md).

# OP\_CODESEPARATOR: Selective Script Signing

<figure><img src="/files/NrKSAsLMyOqh5RSuzR95" alt=""><figcaption></figcaption></figure>

OP\_CODESEPARATOR controls **which portions of a script** are included when creating and verifying signatures.

| Opcode            | Input   | Output  | Description                                                                                                                            |
| ----------------- | ------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| OP\_CODESEPARATOR | Nothing | Nothing | Marks a boundary in the script. Signature verification operations only consider script content after the most recent OP\_CODESEPARATOR |

#### OP\_CODESEPARATOR Example: Witnessed Contract

**scriptSig:**

```
<witness_signature> <witness_public_key> <witness_name> <signatory_signature>
```

**scriptPubKey:**

```
OP_CODESEPARATOR
<contract_hash> OP_DROP
<signatory_public_key> OP_CHECKSIGVERIFY
OP_CODESEPARATOR
<witness_statement> OP_2DROP
OP_CHECKSIG
```

This pattern allows the witness to attest to the signing party's identity **without seeing the full contract content**. The witness signs only the witness statement, not the contract hash.


---

# Agent Instructions
This documentation is published with GitBook. GitBook is the documentation platform designed so that both humans and AI agents can read, navigate, and reason over technical content effectively. Learn more at gitbook.com.

## Querying This Documentation
If you need additional information that is not directly available in this page, you can query the documentation dynamically by asking a question.

Perform an HTTP GET request on the current page URL with the `ask` query parameter, and the optional `goal` query parameter:

```
GET https://hub.bsvblockchain.org/higher-learning/bsv-academy/bsv-opcodes/cryptographic-functions/op_codeseparator-selective-script-signing.md?ask=<question>&goal=<endgoal>
```

`ask` is the immediate question: it should be specific, self-contained, and written in natural language.
`goal` is optional and describes the broader end goal you are ultimately trying to accomplish on behalf of the user. GitBook uses it to tailor the answer towards what is most useful for that goal.

The response will contain a direct answer to the question and relevant excerpts and sources from the documentation.

Use this mechanism when the answer is not explicitly present in the current page, you need clarification or additional context, or you want to retrieve related documentation sections.
