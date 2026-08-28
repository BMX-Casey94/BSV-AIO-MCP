> For the complete documentation index, see [llms.txt](https://hub.bsvblockchain.org/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://hub.bsvblockchain.org/higher-learning/bsv-academy/bsv-opcodes/bitwise-transform/nested-and-sequential-if-conditionals.md).

# Nested and Sequential IF Conditionals

**Nested IF** conditionals allow Bitcoin Script to implement complex **multi-condition logic** similar to switch/case statements. By placing IF statements inside other IF blocks, you create decision trees with multiple possible execution paths.

#### Nested structure:

```
<Case 1 check>
OP_IF
  <When 1 action>
OP_ELSE
  <Case 2 check>
  OP_IF
    <When 2 action>
  OP_ELSE
    <Default action>
  OP_ENDIF
OP_ENDIF
```

#### How nested IF conditionals work:

The first condition is evaluated. If TRUE, execute first action block and skip all nested conditionals. If FALSE, enter the ELSE block and evaluate the second condition. This continues for additional conditions, with the final ELSE catching all remaining cases.

#### Practical example:

```
<locktime> [Use OP_PUSH_TX to extract nLockTime] OP_DROP OP_1
OP_IF
  <timeout_pubkey> OP_CHECKSIG // Path 1: After timeout
OP_ELSE
  <is_emergency> 
  OP_IF
    OP_2 <pk1> <pk2> <pk3> OP_3 OP_CHECKMULTISIG // Path 2: Emergency
  OP_ELSE
    <primary_pubkey> OP_CHECKSIG // Path 3: Normal
  OP_ENDIF
OP_ENDIF
```

This implements three spending paths: after timelock (simple signature), emergency before timeout (2-of-3 multisig), or normal spending (primary key).

#### Alternative: Sequential IF conditionals

Instead of nesting, you can write separate IF statements sequentially:

```
<Case 1 check>
OP_IF
  <When 1 action>
OP_ENDIF

<Case 2 check>
OP_IF
  <When 2 action>
OP_ENDIF
```

&#x20;

#### Comparative Approaches

| **Aspect**             | **Nested IF conditionals** | **Sequential IF conditionals** |
| ---------------------- | -------------------------- | ------------------------------ |
| **Evaluation**         | Stops at first match       | Evaluates all conditions       |
| **ENDIF tracking**     | Complex with depth         | Simple (one per IF)            |
| **Mutual exclusivity** | Automatic via ELSE         | Must ensure manually           |
| **Readability**        | Harder with deep nesting   | Clearer at each level          |

#### When to use each:

* Use **nested IF** conditionals when conditions are mutually exclusive and form a decision tree
* Use **sequential IF** conditionals when conditions are independent or structure clarity is priority


---

# Agent Instructions
This documentation is published with GitBook. GitBook is the documentation platform designed so that both humans and AI agents can read, navigate, and reason over technical content effectively. Learn more at gitbook.com.

## Querying This Documentation
If you need additional information that is not directly available in this page, you can query the documentation dynamically by asking a question.

Perform an HTTP GET request on the current page URL with the `ask` query parameter, and the optional `goal` query parameter:

```
GET https://hub.bsvblockchain.org/higher-learning/bsv-academy/bsv-opcodes/bitwise-transform/nested-and-sequential-if-conditionals.md?ask=<question>&goal=<endgoal>
```

`ask` is the immediate question: it should be specific, self-contained, and written in natural language.
`goal` is optional and describes the broader end goal you are ultimately trying to accomplish on behalf of the user. GitBook uses it to tailor the answer towards what is most useful for that goal.

The response will contain a direct answer to the question and relevant excerpts and sources from the documentation.

Use this mechanism when the answer is not explicitly present in the current page, you need clarification or additional context, or you want to retrieve related documentation sections.
