> For the complete documentation index, see [llms.txt](https://hub.bsvblockchain.org/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://hub.bsvblockchain.org/higher-learning/bsv-academy/bsv-opcodes/data-transformation/data-type-transformations.md).

# Data Type Transformations

Bitcoin Script distinguishes between **minimally encoded numbers** (used for mathematical operations) and **byte sequences** (arbitrary-length data). Two opcodes convert between these representations: **OP\_NUM2BIN** for extending numbers to specific byte lengths, and **OP\_BIN2NUM** for reducing byte sequences to minimal numeric form.

| **Word**    | **Input** | **Output** | **Description**                                               |
| ----------- | --------- | ---------- | ------------------------------------------------------------- |
| OP\_NUM2BIN | a b       | out        | Converts numeric value a into byte sequence of length b       |
| OP\_BIN2NUM | x         | out        | Converts byte sequence x into minimally encoded numeric value |

These opcodes became particularly important when Bitcoin Script originally limited mathematical operations to 4-byte values. While modern BSV has removed these restrictions, these opcodes remain valuable for data formatting and protocol compatibility.

### Understanding OP\_NUM2BIN

**OP\_NUM2BIN** takes a numeric value and a target length, then produces a byte sequence of exactly that length. If the number needs fewer bytes, the operation adds **leading zeroes** to reach the target length.

**Example 1: Extending to 16 bytes**

```
0x010203040506070809 OP_16 OP_NUM2BIN 
```

Input: 9-byte sequence Output: `0x010203040506070809000000000000` (16 bytes with 7 zeroes added)

**Why this matters:**

* **Fixed-length fields:** Some protocols require specific byte lengths
* **Alignment requirements:** Cryptographic operations may need consistent data sizes
* **Padding for comparison:** Ensure values have same length before comparing

<figure><img src="/files/JmN0HBQO7fcBmIsot2E3" alt=""><figcaption></figcaption></figure>

&#x20;

#### Key points about OP\_NUM2BIN:

* If the value is already longer than target length, the operation fails
* Target length must be specified as the second parameter
* Leading zeroes are added (not trailing) to maintain numeric value
* Useful for creating fixed-format data structures

### Understanding OP\_BIN2NUM

**OP\_BIN2NUM** does the opposite: it takes a byte sequence and removes any leading zeroes, producing the **minimal representation** of the numeric value.

**Example 2: Reducing to minimal form**

```
0x010203040506070809000000000000 OP_BIN2NUM
```

Input: 16 bytes with trailing zeroes Output: `0x010203040506070809` (9 bytes, zeroes stripped)

**Why this matters:**

* **Mathematical operations:** Bitcoin Script requires minimal encoding for numeric operations
* **Efficiency:** Smaller representations reduce transaction size and fees
* **Standardization:** Ensures consistent numeric representation across scripts

<figure><img src="/files/r0NgmbHjxGM1HaSnPPDX" alt=""><figcaption></figcaption></figure>

**Key points about OP\_BIN2NUM:**

* Only removes **leading** zeroes (most significant bytes)
* Required before performing mathematical operations on byte sequences
* Ensures compliance with Bitcoin Script's numeric encoding rules
* Does not change the numeric value, only the representation

### Combining Transformations

These opcodes often work together in practical scripts. A common pattern:

1. **Receive data** in arbitrary format
2. **Use OP\_NUM2BIN** to extend to required length
3. **Perform operations** (splitting, cryptographic functions, etc.)
4. **Use OP\_BIN2NUM** to prepare for numeric operations
5. **Complete mathematical** processing

**Example: Preparing transaction data for verification**

```
<raw_data> 
OP_16 OP_NUM2BIN       # Extend to 16 bytes for consistent processing
<process_operations>    # Perform required transformations
OP_BIN2NUM             # Convert back to minimal number
<numeric_verification>  # Perform mathematical checks
```

This pattern ensures data moves smoothly between different processing stages, maintaining the correct format at each step.


---

# Agent Instructions
This documentation is published with GitBook. GitBook is the documentation platform designed so that both humans and AI agents can read, navigate, and reason over technical content effectively. Learn more at gitbook.com.

## Querying This Documentation
If you need additional information that is not directly available in this page, you can query the documentation dynamically by asking a question.

Perform an HTTP GET request on the current page URL with the `ask` query parameter, and the optional `goal` query parameter:

```
GET https://hub.bsvblockchain.org/higher-learning/bsv-academy/bsv-opcodes/data-transformation/data-type-transformations.md?ask=<question>&goal=<endgoal>
```

`ask` is the immediate question: it should be specific, self-contained, and written in natural language.
`goal` is optional and describes the broader end goal you are ultimately trying to accomplish on behalf of the user. GitBook uses it to tailor the answer towards what is most useful for that goal.

The response will contain a direct answer to the question and relevant excerpts and sources from the documentation.

Use this mechanism when the answer is not explicitly present in the current page, you need clarification or additional context, or you want to retrieve related documentation sections.
