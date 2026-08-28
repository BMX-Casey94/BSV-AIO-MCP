> For the complete documentation index, see [llms.txt](https://hub.bsvblockchain.org/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://hub.bsvblockchain.org/higher-learning/bsv-academy/bsv-opcodes/data-transformation/splitting-and-joining-data.md).

# Splitting and Joining Data

<figure><img src="/files/DcILYmQAE6y6BbbEgF8W" alt=""><figcaption></figcaption></figure>

Bitcoin Script stores all data as **byte sequences** on the stack. Sometimes you need to break these sequences into smaller pieces, or combine multiple pieces into a single value. Two opcodes handle these fundamental operations: **OP\_SPLIT** for dividing and **OP\_CAT** for joining.

| **Word**  | **Input** | **Output** | **Description**                      |
| --------- | --------- | ---------- | ------------------------------------ |
| OP\_SPLIT | x n       | x1 x2      | Splits byte sequence x at position n |
| OP\_CAT   | x1 x2     | out        | Concatenates two byte sequences      |

### Understanding OP\_SPLIT

**OP\_SPLIT** takes a byte sequence and a position number, then divides the sequence at that position. The position represents how many bytes from the start should go into the first output.

**Basic example:**

```
0x12345678 OP_1 OP_SPLIT
```

This splits the 4-byte sequence `0x12345678` at position 1:

* **First output (x1):** `0x12` (1 byte from the start)
* **Second output (x2):** `0x345678` (remaining 3 bytes)

The position number tells OP\_SPLIT "put this many bytes in the first piece, everything else in the second piece."

#### Key characteristics:

* Position must be between 0 and the length of the byte sequence
* Position 0 creates an empty first output and keeps everything in the second
* Position equal to length creates full first output and empty second
* Both outputs are pushed onto the stack (first output on top)

### Understanding OP\_CAT

**OP\_CAT** (concatenate) takes two byte sequences and joins them into a single sequence. The operation is straightforward: first input becomes the beginning, second input becomes the end.

**Basic example:**

```
0x1234 0x5678 OP_CAT
```

Result: `0x12345678`

**Order matters:** The item deeper in the stack (x1) comes first in the output, followed by the top stack item (x2). Think of it as "x1 + x2" where + means "join together."

#### Practical Application: Endianness Conversion

One powerful use of data transformation is converting **endianness**—the order in which bytes represent a number. Bitcoin transactions use different byte orders in different contexts:

* **Big-endian:** Most significant byte first (human-readable format)
* **Little-endian:** Least significant byte first (Bitcoin's internal format)

**Example: Converting 4-byte integer from big-endian to little-endian**

```
0x12345678 OP_1 OP_SPLIT OP_1 OP_SPLIT OP_1 OP_SPLIT 
OP_SWAP OP_CAT OP_SWAP OP_CAT OP_SWAP OP_CAT
```

**Step-by-step breakdown:**

1. Start: `0x12345678`
2. First split: `0x12` | `0x345678`
3. Split second piece: `0x12` | `0x34` | `0x5678`
4. Split third piece: `0x12` | `0x34` | `0x56` | `0x78`
5. Swap and concatenate operations reverse the order
6. Result: `0x78563412`

This technique is essential when transaction inputs arrive in big-endian format but need little-endian representation for mathematical operations or verification.

#### Common use cases for splitting and joining:

* **Parsing transaction fields:** Extract specific components from transaction data
* **Data structure manipulation:** Break apart or assemble complex data formats
* **Signature verification:** Separate signature components for validation
* **Protocol implementations:** Handle data formats required by token or data protocols


---

# Agent Instructions
This documentation is published with GitBook. GitBook is the documentation platform designed so that both humans and AI agents can read, navigate, and reason over technical content effectively. Learn more at gitbook.com.

## Querying This Documentation
If you need additional information that is not directly available in this page, you can query the documentation dynamically by asking a question.

Perform an HTTP GET request on the current page URL with the `ask` query parameter, and the optional `goal` query parameter:

```
GET https://hub.bsvblockchain.org/higher-learning/bsv-academy/bsv-opcodes/data-transformation/splitting-and-joining-data.md?ask=<question>&goal=<endgoal>
```

`ask` is the immediate question: it should be specific, self-contained, and written in natural language.
`goal` is optional and describes the broader end goal you are ultimately trying to accomplish on behalf of the user. GitBook uses it to tailor the answer towards what is most useful for that goal.

The response will contain a direct answer to the question and relevant excerpts and sources from the documentation.

Use this mechanism when the answer is not explicitly present in the current page, you need clarification or additional context, or you want to retrieve related documentation sections.
