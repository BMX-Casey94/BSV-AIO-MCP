> For the complete documentation index, see [llms.txt](https://hub.bsvblockchain.org/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://hub.bsvblockchain.org/higher-learning/bsv-academy/bsv-opcodes/bitwise-transform/op_if-executing-code-when-true.md).

# OP\_IF - Executing Code When True

<figure><img src="/files/PYhEh0sMDEYdw4cslusv" alt=""><figcaption></figcaption></figure>

**OP\_IF** is the fundamental conditional opcode in Bitcoin Script. It examines the top item on the stack and executes the enclosed code block only if that item represents a **true value** (non-zero).

#### Basic OP\_IF structure:

```
<Expression>
OP_IF
  <True action>
OP_ENDIF
```

#### How OP\_IF evaluates stack values:

* **Non-zero values** → Treated as TRUE, code block executes
* **Zero or empty array** → Treated as FALSE, code block is skipped
* The top stack item is **consumed** by OP\_IF (removed from stack)

#### Execution flow:

If the expression before OP\_IF leaves a non-zero value on the stack, the script executes all opcodes between OP\_IF and OP\_ENDIF. If the value is zero, the script jumps directly to the opcode after OP\_ENDIF, completely ignoring the code inside the block.

#### Practical example:

```
<signature> <public_key> OP_CHECKSIG
OP_IF
  <recipient_pubkey_hash> OP_EQUALVERIFY
OP_ENDIF
```

In this example, **OP\_CHECKSIG** validates the signature and pushes TRUE (1) or FALSE (0) onto the stack. **OP\_IF** examines this result. If the signature is valid (TRUE), an additional check on the recipient address executes. If invalid (FALSE), the script skips the check and fails validation.

**Critical grammar rule:** Every OP\_IF must have a corresponding OP\_ENDIF. Scripts violating this rule are considered invalid and will be rejected by the network.


---

# Agent Instructions
This documentation is published with GitBook. GitBook is the documentation platform designed so that both humans and AI agents can read, navigate, and reason over technical content effectively. Learn more at gitbook.com.

## Querying This Documentation
If you need additional information that is not directly available in this page, you can query the documentation dynamically by asking a question.

Perform an HTTP GET request on the current page URL with the `ask` query parameter, and the optional `goal` query parameter:

```
GET https://hub.bsvblockchain.org/higher-learning/bsv-academy/bsv-opcodes/bitwise-transform/op_if-executing-code-when-true.md?ask=<question>&goal=<endgoal>
```

`ask` is the immediate question: it should be specific, self-contained, and written in natural language.
`goal` is optional and describes the broader end goal you are ultimately trying to accomplish on behalf of the user. GitBook uses it to tailor the answer towards what is most useful for that goal.

The response will contain a direct answer to the question and relevant excerpts and sources from the documentation.

Use this mechanism when the answer is not explicitly present in the current page, you need clarification or additional context, or you want to retrieve related documentation sections.
