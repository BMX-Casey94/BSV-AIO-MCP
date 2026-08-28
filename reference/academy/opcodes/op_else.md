> For the complete documentation index, see [llms.txt](https://hub.bsvblockchain.org/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://hub.bsvblockchain.org/higher-learning/bsv-academy/bsv-opcodes/bitwise-transform/op_else.md).

# OP\_ELSE

<figure><img src="/files/pS80ukEMuyxrRtFPCLcL" alt=""><figcaption></figcaption></figure>

**OP\_ELSE** adds a second execution path to IF statements, creating true **binary branching**. With OP\_ELSE, the script executes one of two distinct code blocks based on the conditional evaluation.

#### IF-ELSE structure:

```
<Expression>
OP_IF
  <True action>
OP_ELSE
  <False action>
OP_ENDIF
```

#### How OP\_ELSE works:

* **If OP\_IF condition is TRUE:** Execute code between OP\_IF and OP\_ELSE, skip code after OP\_ELSE
* **If OP\_IF condition is FALSE:** Skip code between OP\_IF and OP\_ELSE, execute code after OP\_ELSE
* **Exactly one branch** always executes (never both, never neither)

#### Key characteristics:

* OP\_ELSE is **optional** — Simple IF blocks don't require it
* **At most one OP\_ELSE** per conditional block
* Creates **mutually exclusive execution paths**

#### Practical example: Dual-signature escrow

```
<buyer_sig> <seller_sig> OP_2 OP_CHECKMULTISIG
OP_IF
  // Both parties agree - release payment
  OP_TRUE
OP_ELSE
  // Parties disagree - require arbiter
  <arbiter_sig> <arbiter_pubkey> OP_CHECKSIGVERIFY
OP_ENDIF
```

**TRUE path:** If buyer and seller both sign, payment releases automatically. **FALSE path:** If multisig fails, arbiter signature is required. This implements **conditional escrow** with fallback to a trusted third party.

#### Benefits of binary branching:

* Explicitly handles both cases with no ambiguity
* Improves script readability for both execution paths
* Enables complex logic as foundation for nested conditionals
* Guarantees one execution path always runs


---

# Agent Instructions
This documentation is published with GitBook. GitBook is the documentation platform designed so that both humans and AI agents can read, navigate, and reason over technical content effectively. Learn more at gitbook.com.

## Querying This Documentation
If you need additional information that is not directly available in this page, you can query the documentation dynamically by asking a question.

Perform an HTTP GET request on the current page URL with the `ask` query parameter, and the optional `goal` query parameter:

```
GET https://hub.bsvblockchain.org/higher-learning/bsv-academy/bsv-opcodes/bitwise-transform/op_else.md?ask=<question>&goal=<endgoal>
```

`ask` is the immediate question: it should be specific, self-contained, and written in natural language.
`goal` is optional and describes the broader end goal you are ultimately trying to accomplish on behalf of the user. GitBook uses it to tailor the answer towards what is most useful for that goal.

The response will contain a direct answer to the question and relevant excerpts and sources from the documentation.

Use this mechanism when the answer is not explicitly present in the current page, you need clarification or additional context, or you want to retrieve related documentation sections.
