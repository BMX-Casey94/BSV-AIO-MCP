> For the complete documentation index, see [llms.txt](https://hub.bsvblockchain.org/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://hub.bsvblockchain.org/higher-learning/bsv-academy/bsv-opcodes/op_nop-op_ver/op_equalverify.md).

# OP\_EQUALVERIFY

\
**OP\_EQUALVERIFY** only allows the script to continue processing if the top two data items on the stack are identical bytevectors. If the data items are not equal, the opcode causes the script to terminate and fail. The opcode performs the same function as OP\_EQUAL OP\_VERIFY.

| **Word**        | **Hex** | **Input** | **Output**     | **Description**                                                                                                |
| --------------- | ------- | --------- | -------------- | -------------------------------------------------------------------------------------------------------------- |
| OP\_EQUALVERIFY | 0x88    | x1 x2     | Nothing / fail | Returns true if inputs are exactly equal (bitwise), otherwise fails. More efficient than OP\_EQUAL OP\_VERIFY. |

**Example:**

```
OP_2 OP_ADD OP_3 OP_EQUALVERIFY
```

If the integer value 1 is on the top of the stack when this snippet begins processing, the script will continue to process beyond OP\_EQUALVERIFY. If any other value is on top of the stack, the script will fail.


---

# Agent Instructions
This documentation is published with GitBook. GitBook is the documentation platform designed so that both humans and AI agents can read, navigate, and reason over technical content effectively. Learn more at gitbook.com.

## Querying This Documentation
If you need additional information that is not directly available in this page, you can query the documentation dynamically by asking a question.

Perform an HTTP GET request on the current page URL with the `ask` query parameter, and the optional `goal` query parameter:

```
GET https://hub.bsvblockchain.org/higher-learning/bsv-academy/bsv-opcodes/op_nop-op_ver/op_equalverify.md?ask=<question>&goal=<endgoal>
```

`ask` is the immediate question: it should be specific, self-contained, and written in natural language.
`goal` is optional and describes the broader end goal you are ultimately trying to accomplish on behalf of the user. GitBook uses it to tailor the answer towards what is most useful for that goal.

The response will contain a direct answer to the question and relevant excerpts and sources from the documentation.

Use this mechanism when the answer is not explicitly present in the current page, you need clarification or additional context, or you want to retrieve related documentation sections.
