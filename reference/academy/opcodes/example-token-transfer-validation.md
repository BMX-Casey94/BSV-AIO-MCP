> For the complete documentation index, see [llms.txt](https://hub.bsvblockchain.org/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://hub.bsvblockchain.org/higher-learning/bsv-academy/bsv-opcodes/stack-data-queries/example-token-transfer-validation.md).

# Example: Token Transfer Validation

Token protocols often require specific data formats. Stack queries enforce these requirements:

```
// Expect: <amount> <token_id> <recipient_address> 
OP_DEPTH OP_3 OP_EQUAL OP_VERIFY 
 
// Validate amount (1-8 bytes) 
OP_SIZE OP_1 OP_GREATERTHANOREQUAL 
OP_SIZE OP_8 OP_LESSTHANOREQUAL 
OP_BOOLAND OP_VERIFY 
 
// Validate token_id (exactly 32 bytes) 
OP_SWAP OP_SIZE OP_32 OP_EQUAL OP_VERIFY 
 
// Validate recipient (exactly 20 bytes for address hash) 
OP_SWAP OP_SIZE OP_20 OP_EQUAL OP_VERIFY 
 
// Continue with transfer logic 
<token_transfer_validation> 
```

**Validation layers:**

1. **Structure:** Exactly 3 inputs required
2. **Amount format:** 1-8 bytes (reasonable integer range)
3. **Token ID format:** 32 bytes (standard hash)
4. **Address format:** 20 bytes (standard RIPEMD-160 hash)


---

# Agent Instructions
This documentation is published with GitBook. GitBook is the documentation platform designed so that both humans and AI agents can read, navigate, and reason over technical content effectively. Learn more at gitbook.com.

## Querying This Documentation
If you need additional information that is not directly available in this page, you can query the documentation dynamically by asking a question.

Perform an HTTP GET request on the current page URL with the `ask` query parameter, and the optional `goal` query parameter:

```
GET https://hub.bsvblockchain.org/higher-learning/bsv-academy/bsv-opcodes/stack-data-queries/example-token-transfer-validation.md?ask=<question>&goal=<endgoal>
```

`ask` is the immediate question: it should be specific, self-contained, and written in natural language.
`goal` is optional and describes the broader end goal you are ultimately trying to accomplish on behalf of the user. GitBook uses it to tailor the answer towards what is most useful for that goal.

The response will contain a direct answer to the question and relevant excerpts and sources from the documentation.

Use this mechanism when the answer is not explicitly present in the current page, you need clarification or additional context, or you want to retrieve related documentation sections.
