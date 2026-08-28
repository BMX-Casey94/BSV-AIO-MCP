> For the complete documentation index, see [llms.txt](https://hub.bsvblockchain.org/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://hub.bsvblockchain.org/higher-learning/bsv-academy/bsv-opcodes/stack-data-queries/practical-application-format-validation.md).

# Practical Application: Format Validation

Size checking enables precise data format requirements:

### Example: Fixed-length identifier

```
OP_SIZE OP_32 OP_EQUAL OP_VERIFY
```

This ensures the input is **exactly 32 bytes**—useful for validating hashes, IDs, or other fixed-format data.

### Example: Range validation

```
OP_SIZE OP_4 OP_GREATERTHANOREQUAL 
OP_SIZE OP_8 OP_LESSTHANOREQUAL 
OP_BOOLAND OP_VERIFY
```

This ensures input is **between 4 and 8 bytes**—useful for validating integers or codes that must fall within a specific size range.

&#x20;

**Use cases:**

* **Hash validation:** Ensure SHA-256 outputs are exactly 32 bytes
* **Protocol identifiers:** Verify token IDs match expected format
* **Form validation:** Check user inputs meet length requirements
* **Data structure parsing:** Confirm fields match specification

&#x20;

| Data Type          | Expected Size | Validation Pattern                  |
| ------------------ | ------------- | ----------------------------------- |
| SHA-256 hash       | 32 bytes      | `OP_SIZE OP_32 OP_EQUAL`            |
| RIPEMD-160 hash    | 20 bytes      | `OP_SIZE OP_20 OP_EQUAL`            |
| 4-byte integer     | 4 bytes       | `OP_SIZE OP_4 OP_EQUAL`             |
| Variable (max 100) | ≤100 bytes    | `OP_SIZE OP_100 OP_LESSTHANOREQUAL` |


---

# Agent Instructions
This documentation is published with GitBook. GitBook is the documentation platform designed so that both humans and AI agents can read, navigate, and reason over technical content effectively. Learn more at gitbook.com.

## Querying This Documentation
If you need additional information that is not directly available in this page, you can query the documentation dynamically by asking a question.

Perform an HTTP GET request on the current page URL with the `ask` query parameter, and the optional `goal` query parameter:

```
GET https://hub.bsvblockchain.org/higher-learning/bsv-academy/bsv-opcodes/stack-data-queries/practical-application-format-validation.md?ask=<question>&goal=<endgoal>
```

`ask` is the immediate question: it should be specific, self-contained, and written in natural language.
`goal` is optional and describes the broader end goal you are ultimately trying to accomplish on behalf of the user. GitBook uses it to tailor the answer towards what is most useful for that goal.

The response will contain a direct answer to the question and relevant excerpts and sources from the documentation.

Use this mechanism when the answer is not explicitly present in the current page, you need clarification or additional context, or you want to retrieve related documentation sections.
