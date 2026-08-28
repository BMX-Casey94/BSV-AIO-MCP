> For the complete documentation index, see [llms.txt](https://hub.bsvblockchain.org/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://hub.bsvblockchain.org/higher-learning/bsv-academy/bsv-opcodes/cryptographic-functions/multisignature-verification-shared-control.md).

# Multisignature Verification: Shared Control

Multisignature scripts require **multiple signatures** from different parties to authorize spending, enabling applications like joint accounts, escrow services, and corporate treasuries.

#### OP\_CHECKMULTISIG: Multiple Signature Verification

| Opcode            | Input                                         | Output       | Description                                                                    |
| ----------------- | --------------------------------------------- | ------------ | ------------------------------------------------------------------------------ |
| OP\_CHECKMULTISIG | x sig1 sig2 ... \<n> pubkey1 pubkey2 ... \<m> | TRUE / FALSE | Verifies that at least M signatures match public keys from the N provided keys |

**Critical ordering requirement:** Signatures must appear in the same order as their corresponding public keys.

**The "Multisig Bug":** Due to an off-by-one error, OP\_CHECKMULTISIG removes one extra value from the stack. Script spenders must add a dummy value (typically OP\_0) before the signatures.

**Example: 2-of-3 Multisig**

```
OP_0 <sig1> <sig2> OP_2 <pubkey1> <pubkey2> <pubkey3> OP_3 OP_CHECKMULTISIG
```

This requires any 2 signatures from 3 possible signers—commonly used for escrow (buyer, seller, arbiter).


---

# Agent Instructions
This documentation is published with GitBook. GitBook is the documentation platform designed so that both humans and AI agents can read, navigate, and reason over technical content effectively. Learn more at gitbook.com.

## Querying This Documentation
If you need additional information that is not directly available in this page, you can query the documentation dynamically by asking a question.

Perform an HTTP GET request on the current page URL with the `ask` query parameter, and the optional `goal` query parameter:

```
GET https://hub.bsvblockchain.org/higher-learning/bsv-academy/bsv-opcodes/cryptographic-functions/multisignature-verification-shared-control.md?ask=<question>&goal=<endgoal>
```

`ask` is the immediate question: it should be specific, self-contained, and written in natural language.
`goal` is optional and describes the broader end goal you are ultimately trying to accomplish on behalf of the user. GitBook uses it to tailor the answer towards what is most useful for that goal.

The response will contain a direct answer to the question and relevant excerpts and sources from the documentation.

Use this mechanism when the answer is not explicitly present in the current page, you need clarification or additional context, or you want to retrieve related documentation sections.
