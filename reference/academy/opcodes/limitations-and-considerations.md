> For the complete documentation index, see [llms.txt](https://hub.bsvblockchain.org/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://hub.bsvblockchain.org/higher-learning/bsv-academy/bsv-opcodes/op_return-and-data-storage/limitations-and-considerations.md).

# Limitations and Considerations

### What False Return Outputs Cannot Do

#### 1. Cannot store mutable data

* Data is immutable once confirmed
* Cannot edit, update, or delete
* Solution: Create versioned records with new transactions

**2. Cannot execute conditional logic**

* In False Return outputs, OP\_RETURN immediately terminates execution, limiting conditional logic for scripting purposes. However, OP\_RETURN can be used in conjunction with other opcodes such as OP\_CODESEPARATOR to build in conditional logic to scripts.
* Cannot combine with signature checks in same output
* Solution: Use separate outputs for conditions

**3. Cannot be spent or transfer value**

* Provably unspendable by design
* Cannot attach claimable value
* Solution: Use side-by-side payment outputs

### Privacy Considerations

Data in OP\_RETURN is **permanently public and globally visible**. Anyone can read every False Return output ever created.

#### Privacy guidelines:

✅ Store **hashes** of sensitive documents

✅ **Encrypt data** before embedding

**✅ Public commitments** meant to be transparent

❌ **Personal identifying** information in plaintext

❌ **Proprietary data** without encryption

❌ Data subject to **deletion regulations**

**Example: Privacy-preserving timestamp**

```
OP_0 OP_RETURN <protocol_id> SHA-256(document + salt) <encrypted_metadata>
```


---

# Agent Instructions
This documentation is published with GitBook. GitBook is the documentation platform designed so that both humans and AI agents can read, navigate, and reason over technical content effectively. Learn more at gitbook.com.

## Querying This Documentation
If you need additional information that is not directly available in this page, you can query the documentation dynamically by asking a question.

Perform an HTTP GET request on the current page URL with the `ask` query parameter, and the optional `goal` query parameter:

```
GET https://hub.bsvblockchain.org/higher-learning/bsv-academy/bsv-opcodes/op_return-and-data-storage/limitations-and-considerations.md?ask=<question>&goal=<endgoal>
```

`ask` is the immediate question: it should be specific, self-contained, and written in natural language.
`goal` is optional and describes the broader end goal you are ultimately trying to accomplish on behalf of the user. GitBook uses it to tailor the answer towards what is most useful for that goal.

The response will contain a direct answer to the question and relevant excerpts and sources from the documentation.

Use this mechanism when the answer is not explicitly present in the current page, you need clarification or additional context, or you want to retrieve related documentation sections.
