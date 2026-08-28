> For the complete documentation index, see [llms.txt](https://hub.bsvblockchain.org/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://hub.bsvblockchain.org/higher-learning/bsv-academy/bsv-opcodes/constant-value-and-pushdata-opcodes/simplified-notation-in-examples.md).

# Simplified Notation in Examples

As you continue learning Bitcoin Script, you'll notice that **educational examples often omit pushdata opcodes** from script notation. Instead of writing:

```
0x48 <signature> 0x21 <public_key> OP_DUP OP_HASH160 0x14 <pubkey_hash> OP_EQUALVERIFY OP_CHECKSIG
```

Examples typically simplify to:

```
<signature> <public_key> OP_DUP OP_HASH160 <pubkey_hash> OP_EQUALVERIFY OP_CHECKSIG
```

&#x20;

#### Why Simplified Notation Works

This simplification helps you **focus on the operational logic** without getting distracted by the technical details of how data reaches the stack. When you see `<data_item>` in an example, you can assume:

* The appropriate pushdata opcode is used (based on data length)
* Minimal encoding rules are followed
* The data is pushed onto the stack correctly

#### When Pushdata Details Matter

However, pushdata opcodes become important when you're:

* **Building actual transactions**: Programming tools need explicit byte sequences
* **Analyzing raw transaction data**: You'll see the actual opcodes in hex
* **Debugging script execution**: Understanding stack state requires knowing what each byte does
* **Optimizing script size**: Choosing data sizes affects pushdata opcodes and fees

As you progress to hands-on development, you'll work with complete scripts including all pushdata opcodes. For now, the simplified notation helps you learn the logical flow of script operations.


---

# Agent Instructions
This documentation is published with GitBook. GitBook is the documentation platform designed so that both humans and AI agents can read, navigate, and reason over technical content effectively. Learn more at gitbook.com.

## Querying This Documentation
If you need additional information that is not directly available in this page, you can query the documentation dynamically by asking a question.

Perform an HTTP GET request on the current page URL with the `ask` query parameter, and the optional `goal` query parameter:

```
GET https://hub.bsvblockchain.org/higher-learning/bsv-academy/bsv-opcodes/constant-value-and-pushdata-opcodes/simplified-notation-in-examples.md?ask=<question>&goal=<endgoal>
```

`ask` is the immediate question: it should be specific, self-contained, and written in natural language.
`goal` is optional and describes the broader end goal you are ultimately trying to accomplish on behalf of the user. GitBook uses it to tailor the answer towards what is most useful for that goal.

The response will contain a direct answer to the question and relevant excerpts and sources from the documentation.

Use this mechanism when the answer is not explicitly present in the current page, you need clarification or additional context, or you want to retrieve related documentation sections.
