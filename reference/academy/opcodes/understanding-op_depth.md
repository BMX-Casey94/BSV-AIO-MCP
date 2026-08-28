> For the complete documentation index, see [llms.txt](https://hub.bsvblockchain.org/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://hub.bsvblockchain.org/higher-learning/bsv-academy/bsv-opcodes/stack-data-queries/understanding-op_depth.md).

# Understanding OP\_DEPTH

<figure><img src="/files/9DItiAQDp5IxO9dWF12b" alt=""><figcaption></figcaption></figure>

**OP\_DEPTH** examines the entire stack and pushes a number representing how many items currently exist. This count includes all items on the main stack at the moment of execution.

### Basic Operation

Consider a stack with three items:

```
Stack: <data1> <data2> <data3>
OP_DEPTH
Stack: <data1> <data2> <data3> 3
```

The number **3** appears on top because there were three items present. The original items remain untouched—OP\_DEPTH only adds information, it doesn't remove anything.

**Important note:** OP\_DEPTH counts the stack *before* adding its own output. It measures what was there, then adds the measurement result.

#### Common Use Pattern: Conditional Branching

The most powerful application of OP\_DEPTH is **adaptive validation**—scripts that change behavior based on how many inputs they receive.

**Example: Flexible authentication**

```
OP_DEPTH OP_1 OP_EQUAL OP_IF
  <pubkey> OP_CHECKSIG
OP_ELSE
  OP_DUP OP_HASH160 <pubkeyhash> OP_EQUALVERIFY OP_CHECKSIG
OP_ENDIF
```

**How this works:**

1. **Check depth:** OP\_DEPTH counts stack items
2. **Compare to 1:** OP\_1 OP\_EQUAL checks if count equals 1
3. **Branch A (if 1 item):** Assume it's a signature, verify against stored public key
4. **Branch B (if >1 item):** Assume public key + signature, verify against stored hash

**Why this matters:**

* **Compact representation:** One script handles two payment patterns
* **Backward compatibility:** Can accept legacy signature-only inputs
* **Efficiency:** No need for separate script versions

<figure><img src="/files/Puu0zLgpTasUFVNr4gRs" alt=""><figcaption></figcaption></figure>

&#x20;


---

# Agent Instructions
This documentation is published with GitBook. GitBook is the documentation platform designed so that both humans and AI agents can read, navigate, and reason over technical content effectively. Learn more at gitbook.com.

## Querying This Documentation
If you need additional information that is not directly available in this page, you can query the documentation dynamically by asking a question.

Perform an HTTP GET request on the current page URL with the `ask` query parameter, and the optional `goal` query parameter:

```
GET https://hub.bsvblockchain.org/higher-learning/bsv-academy/bsv-opcodes/stack-data-queries/understanding-op_depth.md?ask=<question>&goal=<endgoal>
```

`ask` is the immediate question: it should be specific, self-contained, and written in natural language.
`goal` is optional and describes the broader end goal you are ultimately trying to accomplish on behalf of the user. GitBook uses it to tailor the answer towards what is most useful for that goal.

The response will contain a direct answer to the question and relevant excerpts and sources from the documentation.

Use this mechanism when the answer is not explicitly present in the current page, you need clarification or additional context, or you want to retrieve related documentation sections.
