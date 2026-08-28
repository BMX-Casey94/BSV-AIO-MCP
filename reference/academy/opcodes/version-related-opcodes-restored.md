> For the complete documentation index, see [llms.txt](https://hub.bsvblockchain.org/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://hub.bsvblockchain.org/higher-learning/bsv-academy/bsv-opcodes/historical-opcodes-and-chronicle-restoration/version-related-opcodes-restored.md).

# Version-Related Opcodes Restored

Chronicle restored the version-related opcodes that enable scripts to behave differently based on transaction version:

| Opcode           | Input | Output  | Restored Function                            |
| ---------------- | ----- | ------- | -------------------------------------------- |
| **OP\_VER**      | -     | version | Pushes transaction version onto stack        |
| **OP\_VERIF**    | -     | -       | Conditional: executes if version ≥ threshold |
| **OP\_VERNOTIF** | -     | -       | Conditional: executes if version < threshold |

**Understanding Transaction Versioning**

Bitcoin transactions include a **version field** that indicates which ruleset the transaction follows. After Chronicle, transactions using a version > 1 will utilize the Chronicle ruleset. Transactions that have a version field of 1 will remain on the pre-Chronicle ruleset.

**Transaction version determines:**

* **Which opcodes are available:** Chronicle version enables all restored opcodes
* **Which validation rules apply:** Different versions may use different consensus rules
* **Backward compatibility:** Old transactions continue validating under old rules

**OP\_VER** retrieves this transaction version and pushes it onto the stack, enabling version-aware script logic.

#### OP\_VERIF: Version-Based Conditional Execution

**OP\_VERIF** performs a **greater-than-or-equal-to check** against the transaction version. It's followed by a version threshold value, and the subsequent script block executes only if the transaction version is greater than or equal to that threshold.

**Syntax:**

```
OP_VERIF
  <threshold_version>
  # This block executes if transaction version >= threshold
OP_ELSE
  # This block executes if transaction version < threshold
OP_ENDIF
```

#### Example: Version-dependent behavior

```
OP_VERIF
  OP_3  # Chronicle version threshold
  # Use Chronicle-specific features
  <data1> <data2> OP_CAT
  OP_SHA512
OP_ELSE
  # Fallback for older versions
  <data1> <data2> 
  # Use pre-Chronicle workaround
OP_ENDIF
```

This enables scripts that adapt to the transaction version, using advanced features when available while maintaining compatibility with older transaction versions.

#### OP\_VERNOTIF: Inverted Version Conditional

**OP\_VERNOTIF** works oppositely to OP\_VERIF—it executes the script block if the transaction version is **less than** the threshold:

```
OP_VERNOTIF
  OP_3  # Chronicle version threshold
  # This block executes if transaction version < 3
  # (pre-Chronicle behavior)
OP_ELSE
  # This block executes if transaction version >= 3
  # (Chronicle-enabled behavior)
OP_ENDIF
```


---

# Agent Instructions
This documentation is published with GitBook. GitBook is the documentation platform designed so that both humans and AI agents can read, navigate, and reason over technical content effectively. Learn more at gitbook.com.

## Querying This Documentation
If you need additional information that is not directly available in this page, you can query the documentation dynamically by asking a question.

Perform an HTTP GET request on the current page URL with the `ask` query parameter, and the optional `goal` query parameter:

```
GET https://hub.bsvblockchain.org/higher-learning/bsv-academy/bsv-opcodes/historical-opcodes-and-chronicle-restoration/version-related-opcodes-restored.md?ask=<question>&goal=<endgoal>
```

`ask` is the immediate question: it should be specific, self-contained, and written in natural language.
`goal` is optional and describes the broader end goal you are ultimately trying to accomplish on behalf of the user. GitBook uses it to tailor the answer towards what is most useful for that goal.

The response will contain a direct answer to the question and relevant excerpts and sources from the documentation.

Use this mechanism when the answer is not explicitly present in the current page, you need clarification or additional context, or you want to retrieve related documentation sections.
