> For the complete documentation index, see [llms.txt](https://hub.bsvblockchain.org/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://hub.bsvblockchain.org/higher-learning/bsv-academy/bsv-opcodes/stack-data-queries/practical-application-multi-signature-flexibility.md).

# Practical Application: Multi-Signature Flexibility

Stack depth checking enables scripts that adapt to different signing scenarios:

```
OP_DEPTH OP_2 OP_LESSTHAN OP_IF
  // Single signature path
  <pubkey1> OP_CHECKSIG
OP_ELSE
  // Multi-signature path
  OP_2 <pubkey1> <pubkey2> OP_2 OP_CHECKMULTISIG
OP_ENDIF
```

This script accepts either:

* **One signature** (checked against first public key)
* **Two signatures** (requires both signatures in 2-of-2 multisig)

**Use cases:**

* **Emergency recovery:** Normal operations require one signature, high-value transfers require two
* **Tiered authorization:** Small amounts need one signature, large amounts need multiple
* **Progressive security:** Initial setup uses single key, later upgraded to multisig

&#x20;


---

# Agent Instructions
This documentation is published with GitBook. GitBook is the documentation platform designed so that both humans and AI agents can read, navigate, and reason over technical content effectively. Learn more at gitbook.com.

## Querying This Documentation
If you need additional information that is not directly available in this page, you can query the documentation dynamically by asking a question.

Perform an HTTP GET request on the current page URL with the `ask` query parameter, and the optional `goal` query parameter:

```
GET https://hub.bsvblockchain.org/higher-learning/bsv-academy/bsv-opcodes/stack-data-queries/practical-application-multi-signature-flexibility.md?ask=<question>&goal=<endgoal>
```

`ask` is the immediate question: it should be specific, self-contained, and written in natural language.
`goal` is optional and describes the broader end goal you are ultimately trying to accomplish on behalf of the user. GitBook uses it to tailor the answer towards what is most useful for that goal.

The response will contain a direct answer to the question and relevant excerpts and sources from the documentation.

Use this mechanism when the answer is not explicitly present in the current page, you need clarification or additional context, or you want to retrieve related documentation sections.
