> For the complete documentation index, see [llms.txt](https://hub.bsvblockchain.org/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://hub.bsvblockchain.org/higher-learning/bsv-academy/bsv-opcodes/historical-opcodes-and-chronicle-restoration/string-manipulation-fully-restored.md).

# String Manipulation Fully Restored

Chronicle restored the complete set of string manipulation opcodes:

| Opcode         | Input     | Output    | Restored Function                           |
| -------------- | --------- | --------- | ------------------------------------------- |
| **OP\_CAT**    | x1 x2     | x1\|x2    | Concatenates two byte sequences             |
| **OP\_SUBSTR** | x pos len | substring | Extracts substring from position for length |
| **OP\_LEFT**   | x n       | left\_n   | Returns leftmost n bytes                    |
| **OP\_RIGHT**  | x n       | right\_n  | Returns rightmost n bytes                   |

**OP\_CAT: Concatenation**

**OP\_CAT** joins two byte sequences into one:&#x20;

```
0x1234 0x5678 OP_CAT
# Result: 0x12345678
```

**Why OP\_CAT matters:**

You can directly concatenate data for building structures, combining signature elements, creating messages, and constructing Merkle tree proofs.

#### OP\_SUBSTR: Substring Extraction

**OP\_SUBSTR** extracts a portion of a byte sequence starting at a specific position:

```
0x12345678 OP_1 OP_2 OP_SUBSTR
# Extracts 2 bytes starting at position 1: 0x3456
```

**Common use cases:**

* Parsing structured data formats
* Extracting specific fields from complex messages
* Protocol implementations requiring precise data extraction

#### OP\_LEFT and OP\_RIGHT: Boundary Extraction

**OP\_LEFT** returns the leftmost bytes:

```
0x12345678 OP_2 OP_LEFT
# Returns first 2 bytes: 0x1234
```

**OP\_RIGHT** returns the rightmost bytes:

```
0x12345678 OP_2 OP_RIGHT
# Returns last 2 bytes: 0x5678
```

These opcodes simplify extracting data from the beginning or end of byte sequences without calculating positions.


---

# Agent Instructions
This documentation is published with GitBook. GitBook is the documentation platform designed so that both humans and AI agents can read, navigate, and reason over technical content effectively. Learn more at gitbook.com.

## Querying This Documentation
If you need additional information that is not directly available in this page, you can query the documentation dynamically by asking a question.

Perform an HTTP GET request on the current page URL with the `ask` query parameter, and the optional `goal` query parameter:

```
GET https://hub.bsvblockchain.org/higher-learning/bsv-academy/bsv-opcodes/historical-opcodes-and-chronicle-restoration/string-manipulation-fully-restored.md?ask=<question>&goal=<endgoal>
```

`ask` is the immediate question: it should be specific, self-contained, and written in natural language.
`goal` is optional and describes the broader end goal you are ultimately trying to accomplish on behalf of the user. GitBook uses it to tailor the answer towards what is most useful for that goal.

The response will contain a direct answer to the question and relevant excerpts and sources from the documentation.

Use this mechanism when the answer is not explicitly present in the current page, you need clarification or additional context, or you want to retrieve related documentation sections.
