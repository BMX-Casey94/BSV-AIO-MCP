> For the complete documentation index, see [llms.txt](https://hub.bsvblockchain.org/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://hub.bsvblockchain.org/higher-learning/bsv-academy/bsv-opcodes/stack-operations/stack-duplicators.md).

# Stack Duplicators

<figure><img src="/files/z3VGIAQNjjGUcIEk6u49" alt=""><figcaption></figcaption></figure>

Duplicators create **copies of stack items** without removing the originals. This is essential when you need to **use the same value in multiple operations**—for instance, checking a signature and then using the public key for additional validation.

#### OP\_DUP

The **most frequently used duplicator** is `OP_DUP`, which copies the **top stack item**:

| Word     | Input | Output | Description                   |
| -------- | ----- | ------ | ----------------------------- |
| `OP_DUP` | x     | x x    | Duplicates the top stack item |

**Example:** Standard payment scripts **(P2PKH)** use `OP_DUP` to **duplicate the public key** before hashing it:

OP\_DUP OP\_HASH160 \<pubKeyHash> OP\_EQUALVERIFY OP\_CHECKSIG

Here, the public key needs to be duplicated because it's **used twice**: once for **hashing and comparison**, and again for **signature verification**.

#### OP\_2DUP and OP\_3DUP

When working with **multiple related values**, `OP_2DUP` and `OP_3DUP` duplicate **pairs or triplets**:

| Word      | Input    | Output            | Description                          |
| --------- | -------- | ----------------- | ------------------------------------ |
| `OP_2DUP` | x1 x2    | x1 x2 x1 x2       | Duplicates the top two stack items   |
| `OP_3DUP` | x1 x2 x3 | x1 x2 x3 x1 x2 x3 | Duplicates the top three stack items |

These are useful when you need to perform multiple checks on the same set of values.

#### OP\_OVER and OP\_2OVER

Rather than duplicating the top item, `OP_OVER` **reaches deeper into the stack**:

| Word       | Input       | Output            | Description                                  |
| ---------- | ----------- | ----------------- | -------------------------------------------- |
| `OP_OVER`  | x1 x2       | x1 x2 x1          | Copies the second-to-top item to the top     |
| `OP_2OVER` | x1 x2 x3 x4 | x1 x2 x3 x4 x1 x2 | Copies the pair two spaces back to the front |

**Use case:** When you need to **compare or combine a value** that's **buried beneath other items** without disturbing the stack order.

#### OP\_PICK and OP\_TUCK

For **maximum flexibility**, `OP_PICK` allows **copying from any depth**, while `OP_TUCK` **inserts a copy beneath** another item:

| Word      | Input                | Output             | Description                                         |
| --------- | -------------------- | ------------------ | --------------------------------------------------- |
| `OP_PICK` | xn ... x2 x1 x0 \<n> | xn ... x2 x1 x0 xn | Copies the item n positions back to the top         |
| `OP_TUCK` | x1 x2                | x2 x1 x2           | Copies top item and inserts it before second-to-top |

#### OP\_IFDUP

A **conditional duplicator**, `OP_IFDUP` only creates a copy if the **top value is non-zero**:

| Word       | Input | Output  | Description                          |
| ---------- | ----- | ------- | ------------------------------------ |
| `OP_IFDUP` | x     | x / x x | Duplicates top item only if not zero |

**Practical use:** Efficiently handling **optional values or flags** without separate conditional logic.


---

# Agent Instructions
This documentation is published with GitBook. GitBook is the documentation platform designed so that both humans and AI agents can read, navigate, and reason over technical content effectively. Learn more at gitbook.com.

## Querying This Documentation
If you need additional information that is not directly available in this page, you can query the documentation dynamically by asking a question.

Perform an HTTP GET request on the current page URL with the `ask` query parameter, and the optional `goal` query parameter:

```
GET https://hub.bsvblockchain.org/higher-learning/bsv-academy/bsv-opcodes/stack-operations/stack-duplicators.md?ask=<question>&goal=<endgoal>
```

`ask` is the immediate question: it should be specific, self-contained, and written in natural language.
`goal` is optional and describes the broader end goal you are ultimately trying to accomplish on behalf of the user. GitBook uses it to tailor the answer towards what is most useful for that goal.

The response will contain a direct answer to the question and relevant excerpts and sources from the documentation.

Use this mechanism when the answer is not explicitly present in the current page, you need clarification or additional context, or you want to retrieve related documentation sections.
