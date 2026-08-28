> For the complete documentation index, see [llms.txt](https://hub.bsvblockchain.org/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://hub.bsvblockchain.org/higher-learning/bsv-academy/bsv-opcodes/op_return-and-data-storage/common-use-cases.md).

# Common Use Cases

### Document Timestamping

One of the most straightforward applications is **document timestamping**—creating cryptographic proof that a document existed at a specific time without revealing its contents.

#### Process:

1. Generate SHA-256 hash of document
2. Embed hash in OP\_RETURN output
3. Once mined, the hash has immutable timestamp from block
4. Future verification: hash document and compare to blockchain record

#### Use cases:

* Legal evidence and prior art for patents
* Academic integrity for research papers
* Intellectual property timestamp proof
* Regulatory compliance records

**Example transaction structure:**

```
Output 0: Payment to recipient (standard P2PKH)
Output 1: OP_0 OP_RETURN <protocol_id> <document_hash> <metadata>
Output 2: Change back to sender
```

<figure><img src="/files/dtb3nszqz9tVWjjirc1V" alt=""><figcaption></figcaption></figure>

### Token Protocols

OP\_RETURN serves as the foundation for token protocols that enable issuing and transferring digital assets on Bitcoin. Token protocols use False Return outputs to encode **state transitions**—the metadata defining how tokens move between addresses.

#### Example token transfer:

Token-aware wallets read the OP\_RETURN **metadata to track balances**. The actual B**itcoin value (satoshis) in outputs is minimal**—just enough for **validity and fees**.

#### Token applications:

* Securities and equity representation
* Supply chain tracking
* Loyalty points and rewards
* Gaming assets and collectibles
* Stablecoins pegged to fiat

### Data Anchoring

Data anchoring **stores compact cryptographic commitments to large datasets**, enabling **verification without storing everything on-chain**. The most common approach uses Merkle trees:

#### Merkle Root Anchoring:

1. Organize large dataset as Merkle tree leaves
2. Compute single Merkle root (32-byte hash)
3. Store root in False Return output
4. Provide Merkle proofs to verify individual records

This pattern allows a company processing millions of daily transactions to anchor one Merkle root per batch, while users can verify individual transactions with compact proofs.

**Applications:**

* Payment processors batching transactions
* IoT networks committing sensor readings
* Healthcare systems proving record integrity
* Government auditable public records

&#x20;


---

# Agent Instructions
This documentation is published with GitBook. GitBook is the documentation platform designed so that both humans and AI agents can read, navigate, and reason over technical content effectively. Learn more at gitbook.com.

## Querying This Documentation
If you need additional information that is not directly available in this page, you can query the documentation dynamically by asking a question.

Perform an HTTP GET request on the current page URL with the `ask` query parameter, and the optional `goal` query parameter:

```
GET https://hub.bsvblockchain.org/higher-learning/bsv-academy/bsv-opcodes/op_return-and-data-storage/common-use-cases.md?ask=<question>&goal=<endgoal>
```

`ask` is the immediate question: it should be specific, self-contained, and written in natural language.
`goal` is optional and describes the broader end goal you are ultimately trying to accomplish on behalf of the user. GitBook uses it to tailor the answer towards what is most useful for that goal.

The response will contain a direct answer to the question and relevant excerpts and sources from the documentation.

Use this mechanism when the answer is not explicitly present in the current page, you need clarification or additional context, or you want to retrieve related documentation sections.
