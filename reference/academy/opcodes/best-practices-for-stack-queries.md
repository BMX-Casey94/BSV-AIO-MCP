> For the complete documentation index, see [llms.txt](https://hub.bsvblockchain.org/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://hub.bsvblockchain.org/higher-learning/bsv-academy/bsv-opcodes/stack-data-queries/best-practices-for-stack-queries.md).

# Best Practices for Stack Queries

### When to Use OP\_DEPTH

#### ✓ Use OP\_DEPTH for:

* **Input pattern detection:** Determine which validation path to follow
* **Arity checking:** Ensure correct number of parameters provided
* **Protocol version detection:** Different input counts for protocol versions
* **Optional parameters:** Handle both compact and detailed input formats

#### ✗ Don't use OP\_DEPTH for:

* **Counting within loops:** Script doesn't support dynamic loops
* **Stack overflow detection:** Not necessary in bounded script execution
* **General counting:** Only useful for conditional branching decisions

#### When to Use OP\_SIZE

#### ✓ Use OP\_SIZE for:

* **Format validation:** Ensure data matches expected byte length
* **Hash verification:** Confirm cryptographic outputs have correct size
* **Protocol compliance:** Check data meets specification requirements
* **Input sanitization:** Reject oversized or undersized data

#### ✗ Don't use OP\_SIZE for:

* **Numeric range checking:** Use arithmetic comparison opcodes instead
* **Content validation:** OP\_SIZE only measures length, not contents
* **Character counting:** Byte length ≠ character count for multi-byte encodings

#### Defensive Validation Pattern

A robust validation approach combines queries systematically:

```
 

// 1. Structure check (correct number of inputs) 
OP_DEPTH OP_<expected> OP_EQUAL OP_VERIFY 
 
// 2. Format checks (each input meets size requirements) 
OP_SIZE OP_<min> OP_GREATERTHANOREQUAL OP_VERIFY 
OP_SIZE OP_<max> OP_LESSTHANOREQUAL OP_VERIFY 
 
// 3. Content validation (data is valid) 
<domain_specific_validation> 
 
// 4. Business logic (perform intended operation) 
<operation_logic> 
```

#### Benefits of this pattern:

* **Fail fast:** Reject invalid inputs immediately
* **Clear errors:** Each validation point identifies specific failure
* **Security:** Prevent malformed data from reaching sensitive operations
* **Maintainability:** Systematic structure makes scripts easier to audit

### Performance Considerations

Stack queries are **lightweight operations**:

* **OP\_DEPTH:** Counts stack items (very fast)
* **OP\_SIZE:** Measures byte length (very fast)

**Cost comparison:**

* Stack queries: \~1-2 operations equivalent
* Cryptographic operations: \~1000+ operations equivalent

**Optimization tip:** Always validate with stack queries *before* expensive operations like OP\_CHECKSIG or OP\_HASH256.


---

# Agent Instructions
This documentation is published with GitBook. GitBook is the documentation platform designed so that both humans and AI agents can read, navigate, and reason over technical content effectively. Learn more at gitbook.com.

## Querying This Documentation
If you need additional information that is not directly available in this page, you can query the documentation dynamically by asking a question.

Perform an HTTP GET request on the current page URL with the `ask` query parameter, and the optional `goal` query parameter:

```
GET https://hub.bsvblockchain.org/higher-learning/bsv-academy/bsv-opcodes/stack-data-queries/best-practices-for-stack-queries.md?ask=<question>&goal=<endgoal>
```

`ask` is the immediate question: it should be specific, self-contained, and written in natural language.
`goal` is optional and describes the broader end goal you are ultimately trying to accomplish on behalf of the user. GitBook uses it to tailor the answer towards what is most useful for that goal.

The response will contain a direct answer to the question and relevant excerpts and sources from the documentation.

Use this mechanism when the answer is not explicitly present in the current page, you need clarification or additional context, or you want to retrieve related documentation sections.
