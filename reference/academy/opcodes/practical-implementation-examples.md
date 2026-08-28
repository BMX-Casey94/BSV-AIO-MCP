> For the complete documentation index, see [llms.txt](https://hub.bsvblockchain.org/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://hub.bsvblockchain.org/higher-learning/bsv-academy/bsv-opcodes/stack-data-queries/practical-implementation-examples.md).

# Practical Implementation Examples

### Example 1: User Form Validation

A script accepting user-submitted data with multiple constraints:

```
// Stack: <email> <username> <age>

// Check structure: exactly 3 inputs
OP_DEPTH OP_3 OP_EQUAL OP_VERIFY

// Validate age (1 byte, value 0-127)
OP_SIZE OP_1 OP_EQUAL OP_VERIFY

// Validate username (5-20 bytes)
OP_SWAP
OP_DUP OP_SIZE OP_5 OP_GREATERTHANOREQUAL OP_VERIFY
OP_SIZE OP_20 OP_LESSTHANOREQUAL OP_VERIFY

// Validate email (must contain @ symbol, max 50 bytes)
OP_SWAP
OP_SIZE OP_50 OP_LESSTHANOREQUAL OP_VERIFY
// Additional email format validation would follow
```

**Real-world application:** Registration systems where users submit credentials on-chain.

&#x20;

### Example 2: Payment Amount Tiers

A script that applies different validation rules based on payment amount size:

```
// Stack: <signature> <amount>

OP_SIZE OP_4 OP_LESSTHAN OP_IF
  // Small amount (< 4 bytes): relaxed validation
  <pubkey1> OP_CHECKSIG
OP_ELSE
  // Large amount (>= 4 bytes): strict validation
  OP_SIZE OP_8 OP_LESSTHANOREQUAL OP_VERIFY
  OP_DUP OP_<max_value> OP_LESSTHANOREQUAL OP_VERIFY
  <pubkey1> <pubkey2> OP_2 OP_CHECKMULTISIG
OP_ENDIF
```

**Real-world application:** Wallets implementing progressive security (simple auth for small amounts, multisig for large).

&#x20;

### Example 3: Protocol Version Detection

A script supporting multiple protocol versions based on input structure:

```
OP_DEPTH  
OP_DUP OP_2 OP_EQUAL OP_IF 
  // Version 1: 2 inputs (basic) 
  OP_DROP 
  <version1_validation> 
OP_ELSE 
  OP_DUP OP_4 OP_EQUAL OP_IF 
    // Version 2: 4 inputs (extended) 
    OP_DROP 
    <version2_validation> 
  OP_ELSE 
    // Invalid version 
    OP_RETURN 
  OP_ENDIF 
OP_ENDIF 
```

**Real-world application:** Token protocols evolving over time while maintaining backward compatibility.


---

# Agent Instructions
This documentation is published with GitBook. GitBook is the documentation platform designed so that both humans and AI agents can read, navigate, and reason over technical content effectively. Learn more at gitbook.com.

## Querying This Documentation
If you need additional information that is not directly available in this page, you can query the documentation dynamically by asking a question.

Perform an HTTP GET request on the current page URL with the `ask` query parameter, and the optional `goal` query parameter:

```
GET https://hub.bsvblockchain.org/higher-learning/bsv-academy/bsv-opcodes/stack-data-queries/practical-implementation-examples.md?ask=<question>&goal=<endgoal>
```

`ask` is the immediate question: it should be specific, self-contained, and written in natural language.
`goal` is optional and describes the broader end goal you are ultimately trying to accomplish on behalf of the user. GitBook uses it to tailor the answer towards what is most useful for that goal.

The response will contain a direct answer to the question and relevant excerpts and sources from the documentation.

Use this mechanism when the answer is not explicitly present in the current page, you need clarification or additional context, or you want to retrieve related documentation sections.
