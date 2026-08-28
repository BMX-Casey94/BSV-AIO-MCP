> For the complete documentation index, see [llms.txt](https://hub.bsvblockchain.org/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://hub.bsvblockchain.org/higher-learning/bsv-academy/bsv-opcodes/stack-data-queries/common-use-pattern-length-validation.md).

# Common Use Pattern: Length Validation

The primary application of OP\_SIZE is **enforcing data format requirements**—ensuring inputs meet expected size constraints before processing.

**Example: String length limit**

```
OP_SIZE OP_10 OP_LESSTHANOREQUAL OP_VERIFY
```

**How this works:**

1. **Measure top item:** OP\_SIZE determines byte length
2. **Compare to 10:** Check if length ≤ 10 bytes
3. **Enforce requirement:** OP\_VERIFY fails script if false

**Why this matters:**

* **Input sanitization:** Reject oversized data before processing
* **Protocol compliance:** Ensure data fits expected format
* **Resource protection:** Prevent excessive computation on huge inputs
* **User feedback:** Clear failure point for invalid submissions

&#x20;

**Real-world example:** A script accepting user-submitted usernames might enforce maximum length:

```
// Stack: <username>
OP_SIZE OP_20 OP_LESSTHANOREQUAL OP_VERIFY
// Continue with username validation
<rest_of_validation_logic>
```

This prevents someone from submitting a 1MB "username" that could cause processing issues.


---

# Agent Instructions
This documentation is published with GitBook. GitBook is the documentation platform designed so that both humans and AI agents can read, navigate, and reason over technical content effectively. Learn more at gitbook.com.

## Querying This Documentation
If you need additional information that is not directly available in this page, you can query the documentation dynamically by asking a question.

Perform an HTTP GET request on the current page URL with the `ask` query parameter, and the optional `goal` query parameter:

```
GET https://hub.bsvblockchain.org/higher-learning/bsv-academy/bsv-opcodes/stack-data-queries/common-use-pattern-length-validation.md?ask=<question>&goal=<endgoal>
```

`ask` is the immediate question: it should be specific, self-contained, and written in natural language.
`goal` is optional and describes the broader end goal you are ultimately trying to accomplish on behalf of the user. GitBook uses it to tailor the answer towards what is most useful for that goal.

The response will contain a direct answer to the question and relevant excerpts and sources from the documentation.

Use this mechanism when the answer is not explicitly present in the current page, you need clarification or additional context, or you want to retrieve related documentation sections.
