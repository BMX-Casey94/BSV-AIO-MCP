> For the complete documentation index, see [llms.txt](https://hub.bsvblockchain.org/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://hub.bsvblockchain.org/higher-learning/bsv-academy/bsv-opcodes/stack-data-queries/combining-stack-queries.md).

# Combining Stack Queries

The real power of stack queries emerges when combining **OP\_DEPTH** and **OP\_SIZE** with conditional logic to create sophisticated validation patterns.

### Example: Adaptive Payment Script

```
OP_DEPTH OP_1 OP_EQUAL OP_IF 
  // Single input: validate it's a 65-byte signature 
  OP_SIZE OP_65 OP_EQUAL OP_VERIFY 
  <pubkey> OP_CHECKSIG 
OP_ELSE 
  // Multiple inputs: validate format and check multisig 
  OP_SIZE OP_33 OP_EQUAL OP_VERIFY  // Verify pubkey size 
  OP_SWAP 
  OP_SIZE OP_65 OP_EQUAL OP_VERIFY  // Verify signature size 
  OP_CHECKSIG 
OP_ENDIF 
```

&#x20;

**What this achieves:**

1. **Depth check:** Determines input pattern (signature-only vs pubkey+signature)
2. **Size validation:** Ensures each input meets expected byte length
3. **Format enforcement:** Rejects malformed data before cryptographic operations
4. **Signature verification:** Checks authentication after validation

**Why combine queries:**

* **Layered validation:** Check structure, then format, then content
* **Early failure:** Reject invalid inputs before expensive operations
* **Clear error points:** Each check identifies specific validation failure
* **Efficiency:** Avoid unnecessary computation on malformed data

<figure><img src="/files/sbvPPEllMCyvnMKYQ3Wg" alt=""><figcaption></figcaption></figure>


---

# Agent Instructions
This documentation is published with GitBook. GitBook is the documentation platform designed so that both humans and AI agents can read, navigate, and reason over technical content effectively. Learn more at gitbook.com.

## Querying This Documentation
If you need additional information that is not directly available in this page, you can query the documentation dynamically by asking a question.

Perform an HTTP GET request on the current page URL with the `ask` query parameter, and the optional `goal` query parameter:

```
GET https://hub.bsvblockchain.org/higher-learning/bsv-academy/bsv-opcodes/stack-data-queries/combining-stack-queries.md?ask=<question>&goal=<endgoal>
```

`ask` is the immediate question: it should be specific, self-contained, and written in natural language.
`goal` is optional and describes the broader end goal you are ultimately trying to accomplish on behalf of the user. GitBook uses it to tailor the answer towards what is most useful for that goal.

The response will contain a direct answer to the question and relevant excerpts and sources from the documentation.

Use this mechanism when the answer is not explicitly present in the current page, you need clarification or additional context, or you want to retrieve related documentation sections.
