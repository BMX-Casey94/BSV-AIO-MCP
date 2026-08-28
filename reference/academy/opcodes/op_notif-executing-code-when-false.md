> For the complete documentation index, see [llms.txt](https://hub.bsvblockchain.org/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://hub.bsvblockchain.org/higher-learning/bsv-academy/bsv-opcodes/bitwise-transform/op_notif-executing-code-when-false.md).

# OP\_NOTIF - Executing Code When False

<figure><img src="/files/bdSdSOIeTisIaY8aw6cE" alt=""><figcaption></figcaption></figure>

**OP\_NOTIF** is the logical inverse of OP\_IF. It executes the enclosed code block when the top stack item represents a **false value** (zero or empty).

#### Basic OP\_NOTIF structure:

```
<Expression>
OP_NOTIF
  <False action>
OP_ENDIF
```

#### How OP\_NOTIF evaluates stack values:

* **Zero or empty array** → Code block executes
* **Non-zero values** → Code block is skipped
* The top stack item is **consumed** by OP\_NOTIF

#### Comparison of OP\_IF vs OP\_NOTIF behavior:

| **Stack Top Value** | **OP\_IF Behavior** | **OP\_NOTIF Behavior** |
| ------------------- | ------------------- | ---------------------- |
| **Non-zero (TRUE)** | Execute block       | Skip block             |
| **Zero (FALSE)**    | Skip block          | Execute block          |
| **Empty array**     | Skip block          | Execute block          |

#### When to use OP\_NOTIF:

Use OP\_NOTIF when you want to execute code specifically on **failure conditions** or to implement **inverse logic** without adding negation operations. It's particularly useful for fallback spending conditions.

#### Practical example:

```
<primary_signature> <primary_pubkey> OP_CHECKSIG
OP_NOTIF
  <backup_signature> <backup_pubkey> OP_CHECKSIGVERIFY
OP_ENDIF
```

This script first attempts to validate with the primary signature. If primary signature fails (returns FALSE), **OP\_NOTIF**executes the backup verification, providing a **fallback spending path** when primary credentials aren't available.

**Grammar requirement:** Like OP\_IF, every OP\_NOTIF must have a matching **OP\_ENDIF**.


---

# Agent Instructions
This documentation is published with GitBook. GitBook is the documentation platform designed so that both humans and AI agents can read, navigate, and reason over technical content effectively. Learn more at gitbook.com.

## Querying This Documentation
If you need additional information that is not directly available in this page, you can query the documentation dynamically by asking a question.

Perform an HTTP GET request on the current page URL with the `ask` query parameter, and the optional `goal` query parameter:

```
GET https://hub.bsvblockchain.org/higher-learning/bsv-academy/bsv-opcodes/bitwise-transform/op_notif-executing-code-when-false.md?ask=<question>&goal=<endgoal>
```

`ask` is the immediate question: it should be specific, self-contained, and written in natural language.
`goal` is optional and describes the broader end goal you are ultimately trying to accomplish on behalf of the user. GitBook uses it to tailor the answer towards what is most useful for that goal.

The response will contain a direct answer to the question and relevant excerpts and sources from the documentation.

Use this mechanism when the answer is not explicitly present in the current page, you need clarification or additional context, or you want to retrieve related documentation sections.
