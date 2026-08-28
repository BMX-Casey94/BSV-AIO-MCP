> For the complete documentation index, see [llms.txt](https://hub.bsvblockchain.org/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://hub.bsvblockchain.org/higher-learning/bsv-academy/bsv-opcodes/constant-value-and-pushdata-opcodes/building-blocks-constant-value-opcodes.md).

# Building Blocks: Constant Value Opcodes

<figure><img src="/files/5cfKwDI2ywdf0B8UlWx6" alt=""><figcaption></figcaption></figure>

Before diving into complex operations, Bitcoin Script provides a shortcut for the most common values you'll need: **small integers from -1 to 16, plus an empty value**. Rather than requiring multiple bytes to represent these simple numbers, Bitcoin includes dedicated **constant value opcodes** that push these values onto the stack with a single byte.

#### The Complete Set of Constants

Bitcoin Script includes **18 constant value opcodes** divided into three categories:

| **Opcode**                                              | **Pushes Value**   | **Description**                               |
| ------------------------------------------------------- | ------------------ | --------------------------------------------- |
| **OP\_0** (also called **OP\_FALSE**)                   | Empty array (null) | Pushes an empty byte array onto the stack     |
| **OP\_1NEGATE**                                         | -1                 | Pushes the number negative one onto the stack |
| **OP\_1** (also called **OP\_TRUE**) through **OP\_16** | 1 through 16       | Pushes integers 1 through 16 onto the stack   |

&#x20;

These opcodes are remarkably efficient. Instead of using multiple bytes to represent "push 1 byte containing value 3," you simply use **OP\_3**—one byte that accomplishes the entire operation.

#### Why These Specific Values?

You might wonder why Bitcoin Script includes constants for -1 through 16 but not, say, -5 or 20. The answer lies in **practical usage patterns**:

* **OP\_0 / OP\_FALSE**: Essential for boolean logic and empty placeholders
* **OP\_1 / OP\_TRUE**: Common in boolean checks and counter initialization
* **OP\_1NEGATE (-1)**: Used in certain mathematical operations and protocol patterns
* **OP\_2 through OP\_16**: Frequently appear in multisignature scripts, counter operations, and threshold checks

The most common example is **multisignature scripts**, which specify how many signatures are required (M) out of how many public keys (N). For a 2-of-3 multisig, the script uses **OP\_2** and **OP\_3** directly rather than pushing these values as data.

#### Practical Example: 2-of-3 Multisignature

Here's how constant values appear in a real multisignature script:

```
OP_2 <pubkey_1> <pubkey_2> <pubkey_3> OP_3 OP_CHECKMULTISIG
```

**Breaking down the constants:**

* **OP\_2**: Pushes the value 2 onto the stack (number of required signatures)
* **OP\_3**: Pushes the value 3 onto the stack (total number of public keys)

The **OP\_CHECKMULTISIG** opcode reads these values to understand "verify that 2 out of these 3 public keys have provided valid signatures." Without constant value opcodes, you'd need to encode each number as a data item, adding unnecessary bytes to every multisignature transaction.

#### Key Characteristics

Understanding how constant opcodes behave helps you recognize them in scripts:

1. **Single-byte efficiency**: Each constant requires only one byte in the script
2. **No following data**: Unlike pushdata opcodes, constants don't read subsequent bytes
3. **Immediate values**: The value is pushed instantly during execution
4. **Boolean aliases**: OP\_0/OP\_FALSE and OP\_1/OP\_TRUE can be used interchangeably
5. **Limited range**: Only -1 through 16 are available; other numbers require pushdata


---

# Agent Instructions
This documentation is published with GitBook. GitBook is the documentation platform designed so that both humans and AI agents can read, navigate, and reason over technical content effectively. Learn more at gitbook.com.

## Querying This Documentation
If you need additional information that is not directly available in this page, you can query the documentation dynamically by asking a question.

Perform an HTTP GET request on the current page URL with the `ask` query parameter, and the optional `goal` query parameter:

```
GET https://hub.bsvblockchain.org/higher-learning/bsv-academy/bsv-opcodes/constant-value-and-pushdata-opcodes/building-blocks-constant-value-opcodes.md?ask=<question>&goal=<endgoal>
```

`ask` is the immediate question: it should be specific, self-contained, and written in natural language.
`goal` is optional and describes the broader end goal you are ultimately trying to accomplish on behalf of the user. GitBook uses it to tailor the answer towards what is most useful for that goal.

The response will contain a direct answer to the question and relevant excerpts and sources from the documentation.

Use this mechanism when the answer is not explicitly present in the current page, you need clarification or additional context, or you want to retrieve related documentation sections.
