> For the complete documentation index, see [llms.txt](https://hub.bsvblockchain.org/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://hub.bsvblockchain.org/higher-learning/bsv-academy/bsv-opcodes/constant-value-and-pushdata-opcodes/pushing-arbitrary-data-pushdata-opcodes.md).

# Pushing Arbitrary Data: Pushdata Opcodes

<figure><img src="/files/9QBxbxXYMJtiqxURtnwQ" alt=""><figcaption></figcaption></figure>

While constant value opcodes handle small integers efficiently, Bitcoin Script needs to handle **arbitrary data** of any size—signatures (70-73 bytes), public keys (33 or 65 bytes), hashes (32 bytes), and even larger data items up to multiple gigabytes. This is where **pushdata opcodes** become essential.

#### Understanding Pushdata Operations

A pushdata opcode does three things:

1. **Tells the script interpreter**: "The next bytes are data, not opcodes"
2. **Specifies the length**: "Read this many bytes as a single data item"
3. **Pushes the data**: "Place those bytes as one item on the stack"

Unlike other opcodes that process stack items, pushdata opcodes **don't consume stack items**—they create them. They read bytes directly from the script itself.

#### The Four Pushdata Opcodes

Bitcoin Script includes **four different pushdata mechanisms**, each designed for different data size ranges:

| **Opcode**                      | **Length Indicator**         | **Max Data Size**   | **When to Use**                           |
| ------------------------------- | ---------------------------- | ------------------- | ----------------------------------------- |
| **Inline pushdata** (0x01-0x4B) | The opcode byte itself       | 75 bytes            | Most signatures, public keys, short data  |
| **OP\_PUSHDATA1**               | Next 1 byte                  | 255 bytes           | Medium data items, larger signatures      |
| **OP\_PUSHDATA2**               | Next 2 bytes (little-endian) | 65,535 bytes        | Large data, document hashes with metadata |
| **OP\_PUSHDATA4**               | Next 4 bytes (little-endian) | 4,294,967,295 bytes | Very large data items (BSV only)          |

#### Inline Pushdata (0x01 through 0x4B)

For data items **75 bytes or smaller**, Bitcoin Script uses the most efficient approach: the **opcode byte itself indicates the length**. If you want to push 32 bytes, you use opcode **0x20** (hexadecimal for 32) followed by your 32 bytes of data.

**Example: Pushing a 32-byte public key**

```
0x20 <32_bytes_of_public_key_data>
```

```
 
```

The **0x20** byte means "the next 32 bytes are data to push onto the stack." This elegant design eliminates the need for a separate length indicator, saving one byte per pushdata operation.

**Common inline pushdata lengths:**

* **0x14** (20 bytes): Public key hashes
* **0x20** (32 bytes): SHA-256 hashes, compressed public keys
* **0x41** (65 bytes): Uncompressed public keys
* **0x47-0x49** (71-73 bytes): Typical ECDSA signatures

#### OP\_PUSHDATA1: Medium Data (76-255 bytes)

When your data exceeds 75 bytes, you need **OP\_PUSHDATA1**. This opcode is followed by a **1-byte length indicator**, which can specify any value from 0 to 255.

**Example: Pushing 100 bytes**

```
OP_PUSHDATA1 0x64 <100_bytes_of_data>
```

```
 
```

**Breaking it down:**

* **OP\_PUSHDATA1**: "Read the next byte to find out how much data follows"
* **0x64**: Hexadecimal for 100
* **<100\_bytes\_of\_data>**: The actual data being pushed

This three-part structure (opcode + length + data) extends pushdata capability while adding only one extra byte of overhead.

#### OP\_PUSHDATA2: Large Data (256-65,535 bytes)

For larger data items, **OP\_PUSHDATA2** uses a **2-byte length indicator** in **little-endian format** (least significant byte first). This allows pushing data up to 65,535 bytes (approximately 64 KB).

**Example: Pushing 1,000 bytes (1 KB)**

```
OP_PUSHDATA2 0xe803 <1000_bytes_of_data>
```

```
 
```

**Understanding the length encoding:**

* **0xe803** in little-endian = **0x03e8** in big-endian = **1000** in decimal
* Little-endian means the "little" (least significant) byte comes first
* This matches Bitcoin's internal number representation

| **Decimal** | **Big-Endian (Human-Readable)** | **Little-Endian (Bitcoin Format)** |
| ----------- | ------------------------------- | ---------------------------------- |
| 1,000       | 0x03e8                          | 0xe803                             |
| 10,000      | 0x2710                          | 0x1027                             |
| 65,535      | 0xffff                          | 0xffff (same because symmetric)    |

#### OP\_PUSHDATA4: Very Large Data (Up to 4 GB)

The largest pushdata opcode, **OP\_PUSHDATA4**, uses a **4-byte length indicator** in little-endian format. This enables pushing data items up to **4,294,967,295 bytes** (approximately 4 GB).

**Example: Pushing 1,000,000 bytes (1 MB)**

```
OP_PUSHDATA2 0xe803 <1000_bytes_of_data> 
```

**Understanding the length encoding:**

* **0x40420f00** in little-endian = **0x000f4240** in big-endian = **1,000,000** in decimal
* The four bytes are read in reverse order to get the length

While this might seem excessive, BSV blockchain has removed artificial size limits precisely to enable these large data operations for applications like document storage, data anchoring, and complex token protocols.


---

# Agent Instructions
This documentation is published with GitBook. GitBook is the documentation platform designed so that both humans and AI agents can read, navigate, and reason over technical content effectively. Learn more at gitbook.com.

## Querying This Documentation
If you need additional information that is not directly available in this page, you can query the documentation dynamically by asking a question.

Perform an HTTP GET request on the current page URL with the `ask` query parameter, and the optional `goal` query parameter:

```
GET https://hub.bsvblockchain.org/higher-learning/bsv-academy/bsv-opcodes/constant-value-and-pushdata-opcodes/pushing-arbitrary-data-pushdata-opcodes.md?ask=<question>&goal=<endgoal>
```

`ask` is the immediate question: it should be specific, self-contained, and written in natural language.
`goal` is optional and describes the broader end goal you are ultimately trying to accomplish on behalf of the user. GitBook uses it to tailor the answer towards what is most useful for that goal.

The response will contain a direct answer to the question and relevant excerpts and sources from the documentation.

Use this mechanism when the answer is not explicitly present in the current page, you need clarification or additional context, or you want to retrieve related documentation sections.
