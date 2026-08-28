> For the complete documentation index, see [llms.txt](https://hub.bsvblockchain.org/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://hub.bsvblockchain.org/higher-learning/bsv-academy/bsv-opcodes/historical-opcodes-and-chronicle-restoration/backward-compatibility-considerations.md).

# Backward Compatibility Considerations

Chronicle was designed to maintain **full backward compatibility** through transaction versioning:

* **Legacy transactions continue working:** Pre-Chronicle transactions validate under their original rulesets
* **Version-based activation:** Restored opcodes are available in Chronicle-version transactions
* **No chain split:** Universal agreement on version-based opcode availability
* **Smooth transition:** Scripts can be written to work across versions using OP\_VERIF

### Development Best Practices

**Choose Appropriate Opcodes:**

```
# Good: Direct multiplication
<a> <b> OP_MUL

# Avoid: Complex workaround when OP_MUL is available
<a> <b> OP_DUP OP_ADD OP_ADD ...
```

**Use version opcodes for compatibility:**

```
# Ensure Chronicle features are available
OP_VER OP_3 OP_GREATERTHANOREQUAL OP_VERIFY
<data1> <data2> OP_CAT  # Safe to use OP_C
```

**Leverage string manipulation for efficiency:**

```
# Extract specific data ranges efficiently
<message> OP_8 OP_LEFT  # Header
<message> OP_8 OP_32 OP_SUBSTR  # Body
<message> OP_4 OP_RIGHT  # Footer
```

**Test thoroughly:** Restored opcodes need testing for edge cases

**Document version requirements:** Specify minimum transaction version for your scripts


---

# Agent Instructions
This documentation is published with GitBook. GitBook is the documentation platform designed so that both humans and AI agents can read, navigate, and reason over technical content effectively. Learn more at gitbook.com.

## Querying This Documentation
If you need additional information that is not directly available in this page, you can query the documentation dynamically by asking a question.

Perform an HTTP GET request on the current page URL with the `ask` query parameter, and the optional `goal` query parameter:

```
GET https://hub.bsvblockchain.org/higher-learning/bsv-academy/bsv-opcodes/historical-opcodes-and-chronicle-restoration/backward-compatibility-considerations.md?ask=<question>&goal=<endgoal>
```

`ask` is the immediate question: it should be specific, self-contained, and written in natural language.
`goal` is optional and describes the broader end goal you are ultimately trying to accomplish on behalf of the user. GitBook uses it to tailor the answer towards what is most useful for that goal.

The response will contain a direct answer to the question and relevant excerpts and sources from the documentation.

Use this mechanism when the answer is not explicitly present in the current page, you need clarification or additional context, or you want to retrieve related documentation sections.
