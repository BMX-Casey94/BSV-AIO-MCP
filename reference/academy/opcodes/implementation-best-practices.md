> For the complete documentation index, see [llms.txt](https://hub.bsvblockchain.org/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://hub.bsvblockchain.org/higher-learning/bsv-academy/bsv-opcodes/op_return-and-data-storage/implementation-best-practices.md).

# Implementation Best Practices

### Transaction Structure

A well-formed False Return transaction using OP\_RETURN typically includes:

```
Transaction:
  Inputs:
    - Input 0: UTXO being spent
  Outputs:
    - Output 0: Payment (if transferring value)
    - Output 1: OP_0 OP_RETURN <data>
    - Output 2: Change back to sender
```

#### Key points:

* OP\_RETURN can appear in any output position
* BSV allows multiple False Return outputs per transaction
* Zero-value False Return outputs are standard and accepted

#### Data Encoding

Choose encoding based on your requirements:

**1. Raw Binary** (most compact)

```
OP_0 OP_RETURN <protocol_id_2bytes> <timestamp_4bytes> <hash_32bytes>
```

✅ Most space-efficient\
❌ Not human-readable

**2. Hexadecimal**

```
OP_0 OP_RETURN "STAMP" "a3f5bc..." "2024-01-15"
```

✅ Readable in block explorers\
❌ 2x size increase

**3. JSON** (structured)

```
OP_0 OP_RETURN '{"type":"timestamp","hash":"a3f5bc..."}'
```

✅ Self-describing, flexible\
❌ Significant size overhead

**Recommendation:** Use raw binary or Protocol Buffers for high-frequency applications; JSON for developer-friendly transparency.

### Size Optimization

Transaction fees are based on data size. Optimization techniques:

1. **Compact identifiers**: Use 2-4 byte protocol IDs instead of verbose strings
2. **Hash instead of raw data**: Store 32-byte hashes rather than full documents
3. **Compress redundant information**: Remove whitespace, use abbreviations
4. **Batch with Merkle trees**: Commit multiple items in single OP\_RETURN
5. **Choose binary formats**: Binary > Hex > JSON for space efficiency

**Cost example** (0.05 sat/byte):

* 40-byte OP\_RETURN: \~2 satoshis
* 1000-byte OP\_RETURN: \~50 satoshis

While costs are minimal, optimization matters for high-volume applications.


---

# Agent Instructions
This documentation is published with GitBook. GitBook is the documentation platform designed so that both humans and AI agents can read, navigate, and reason over technical content effectively. Learn more at gitbook.com.

## Querying This Documentation
If you need additional information that is not directly available in this page, you can query the documentation dynamically by asking a question.

Perform an HTTP GET request on the current page URL with the `ask` query parameter, and the optional `goal` query parameter:

```
GET https://hub.bsvblockchain.org/higher-learning/bsv-academy/bsv-opcodes/op_return-and-data-storage/implementation-best-practices.md?ask=<question>&goal=<endgoal>
```

`ask` is the immediate question: it should be specific, self-contained, and written in natural language.
`goal` is optional and describes the broader end goal you are ultimately trying to accomplish on behalf of the user. GitBook uses it to tailor the answer towards what is most useful for that goal.

The response will contain a direct answer to the question and relevant excerpts and sources from the documentation.

Use this mechanism when the answer is not explicitly present in the current page, you need clarification or additional context, or you want to retrieve related documentation sections.
