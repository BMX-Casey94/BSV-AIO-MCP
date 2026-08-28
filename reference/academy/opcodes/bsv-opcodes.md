> For the complete documentation index, see [llms.txt](https://hub.bsvblockchain.org/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://hub.bsvblockchain.org/higher-learning/bsv-academy/bsv-opcodes.md).

# BSV Opcodes

{% embed url="<https://youtu.be/FZ0uqjs2Rww>" %}

The Bitcoin script language that BSV uses contains 186 opcodes that form a complete programming toolkit for building sophisticated transaction validation logic. This comprehensive path breaks down Bitcoin's scripting language into clear, practical knowledge—transforming opcodes from abstract hexadecimal values into powerful tools for building secure, programmable transactions.

Through 10 focused courses covering operational categories from historical restoration to advanced cryptographic functions, you'll explore how these opcodes work together to create Bitcoin's powerful scripting capability—including significant enhancements introduced in the **Chronicle Release**.

**What You'll Learn**

* **Chronicle Release and Historical Context:** The 2010 opcode restrictions, their rationale, and the opcodes fully restored in the Chronicle Release alongside new cryptographic capabilities
* **Fundamental Building Blocks:** Constant values and pushdata opcodes that form the foundation of every script, including minimal encoding rules and valid input script patterns
* **Control Flow Logic:** IF/ELSE structures, OP\_VERIFY, and OP\_RETURN for conditional execution, script termination, and on-chain data storage
* **Stack Manipulation:** Operations that duplicate, eliminate, and relocate data on the stack for complex script construction
* **Data Transformation:** Operations that split, join, and convert data between formats, including endianness handling for transaction processing
* **Stack Analysis:** Opcodes that query stack depth and data size for dynamic, adaptive script behaviour
* **Bitwise and Arithmetic Operations:** Full mathematical capability including transformations, comparisons, and calculations
* **Cryptographic Functions:** Hash functions (SHA-256, RIPEMD-160, SHA-512, SHA-512/256) and ECDSA signature verification that secure the network

**Course Structure**

**Course 1: Historical Opcodes and Chronicle Restoration** – Explore the history of opcode restrictions and the Chronicle Release's milestone restoration of Bitcoin Script's original functionality. Understand which opcodes were re-enabled, how version-related opcodes (OP\_VER, OP\_VERIF, OP\_VERNOTIF) function, and the new cryptographic capabilities introduced in 2025

**Course 2: Constant Value and PUSHDATA Opcodes** – Master the opcodes that place data onto the stack, from single-byte constants (OP\_0 through OP\_16) to pushdata operations for variable-length data. Learn minimal encoding rules that keep scripts compact and why only pushdata and constant opcodes can appear in input scripts

**Course 3: IF Conditionals** – Learn flow control using OP\_IF, OP\_NOTIF, OP\_ELSE, and OP\_ENDIF to create conditional logic and branching execution paths. Explore nesting techniques for complex case-statement logic and Bitcoin's grammar requirements for valid conditional statements

**Course 4: OP\_NOP, OP\_Ver** – Understand OP\_NOP's placeholder functionality and how OP\_VERIFY creates validation checkpoints that fail scripts on false conditions. Master the efficiency benefits of VERIFY derivatives (OP\_EQUALVERIFY, OP\_CHECKSIGVERIFY, OP\_CHECKMULTISIGVERIFY) and explore the restored version-related opcodes from Chronicle

**Course 5: OP\_RETURN and Data Storage** – Explore script termination and OP\_RETURN's role in creating provably unspendable outputs while permanently recording arbitrary data on the blockchain. Understand the distinction between UTXO set storage and blockchain storage, data capacity limits, encoding strategies, and use cases including timestamping, tokens, and data anchoring

**Course 6: Stack Operations** – Master stack manipulation through duplicators (OP\_DUP, OP\_OVER, OP\_PICK), eliminators (OP\_DROP, OP\_NIP), and relocators (OP\_SWAP, OP\_ROT). Learn when and how to use the alternate stack for temporary data storage and how these operations combine to organise data for validation

**Course 7: Data Transformation** – Learn operations that split and join data (OP\_CAT, OP\_SPLIT) and transform data types (OP\_NUM2BIN, OP\_BIN2NUM). Explore endianness conversion techniques and data formatting strategies for cryptographic and mathematical operations

**Course 8: Stack Data Queries** – Discover opcodes that return information about the stack itself: OP\_DEPTH for counting stack items and conditional branching, and OP\_SIZE for validating data length requirements. Learn to build adaptive scripts and robust input validation patterns using these introspection tools

**Course 9: Bitwise Transformations and Arithmetic** – Explore the complete mathematical toolkit: bitwise operations (OP\_AND, OP\_OR, OP\_XOR), arithmetic functions (OP\_ADD, OP\_MUL, OP\_DIV), comparisons (OP\_EQUAL, OP\_LESSTHAN), and boolean logic for building sophisticated computational scripts

**Course 10: Cryptographic Functions** – Master hash functions (RIPEMD-160, SHA-1, SHA-256, SHA-512, SHA-512/256) and double-hash operations that create cryptographic fingerprints. Understand the Chronicle Release enhancements—SHA-512 and SHA-512/256—and their advantages for modern 64-bit systems. Apply ECDSA signature verification (OP\_CHECKSIG, OP\_CHECKMULTISIG) and explore OP\_CODESEPARATOR for selective script signing

**Practical Components**

This path includes practical examples showing how opcodes combine to create real-world scripts. You'll see implementations of:

* Pay-to-Public-Key-Hash (P2PKH) transactions
* Multi-signature scripts with flexible authorisation
* Data validation and conditional logic
* On-chain data anchoring and timestamping using OP\_RETURN
* Complex mathematical operations
* Witnessed signature structures using OP\_CODESEPARATOR

The examples demonstrate script construction, stack manipulation, and opcode sequencing for building secure, efficient transaction scripts.

**Technical Prerequisites**

* Basic understanding of Bitcoin transactions helpful but not required
* Familiarity with hexadecimal notation beneficial
* No programming knowledge required—scripts are explained in natural language
* Interest in understanding Bitcoin's programmability at a fundamental level

**Who This Path Is For**

This course is designed for developers, technical professionals, researchers, and anyone curious about Bitcoin's scripting capabilities. Whether you're building applications on BSV, auditing transaction scripts, designing novel script patterns, or simply want to understand how Bitcoin enables programmable money, you'll gain the foundational knowledge to work confidently with Bitcoin Script as employed by BSV —including the expanded capabilities introduced by the Chronicle Release.

By the end of this path, you'll understand:

* **Script Composition:** How opcodes combine to create validation logic
* **Stack-Based Execution:** How Bitcoin processes scripts using a stack-based virtual machine
* **Chronicle Release Changes:** Which opcodes were restored, what's new, and how it affects modern BSV development
* **Security Patterns:** Best practices for safe script construction
* **Optimisation Techniques:** Using VERIFY opcodes and efficient data handling
* **Advanced Capabilities:** Building complex conditions, multi-signature schemes, and data validation
* **Historical Context:** Why certain opcodes were restricted, how Chronicle restored them, and what that means for developers today

**Your Achievement**

Once you complete the path with a score of 80% or more, you'll earn a Certificate of Completion to recognise your achievement and demonstrate your comprehensive understanding of Bitcoin's scripting language.


---

# Agent Instructions
This documentation is published with GitBook. GitBook is the documentation platform designed so that both humans and AI agents can read, navigate, and reason over technical content effectively. Learn more at gitbook.com.

## Querying This Documentation
If you need additional information that is not directly available in this page, you can query the documentation dynamically by asking a question.

Perform an HTTP GET request on the current page URL with the `ask` query parameter, and the optional `goal` query parameter:

```
GET https://hub.bsvblockchain.org/higher-learning/bsv-academy/bsv-opcodes.md?ask=<question>&goal=<endgoal>
```

`ask` is the immediate question: it should be specific, self-contained, and written in natural language.
`goal` is optional and describes the broader end goal you are ultimately trying to accomplish on behalf of the user. GitBook uses it to tailor the answer towards what is most useful for that goal.

The response will contain a direct answer to the question and relevant excerpts and sources from the documentation.

Use this mechanism when the answer is not explicitly present in the current page, you need clarification or additional context, or you want to retrieve related documentation sections.
