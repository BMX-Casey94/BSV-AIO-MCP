> For the complete documentation index, see [llms.txt](https://hub.bsvblockchain.org/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://hub.bsvblockchain.org/higher-learning/bsv-academy/bsv-opcodes/cryptographic-functions.md).

# Cryptographic Functions

Bitcoin Script's cryptographic functions form the security foundation that makes trustless digital transactions possible. These functions—hash operations and digital signature verification—enable Bitcoin to verify data integrity, prove ownership, and validate transactions without requiring trust in third parties.

{% embed url="<https://youtu.be/K9l3_LXXKpI>" %}

**Chronicle Release Update:** [The Chronicle release](https://docs.bsvblockchain.org/network-topology/nodes/sv-node/chronicle-release) has significantly expanded Bitcoin Script's cryptographic capabilities by introducing **SHA-512** and **SHA-512/256 hash functions**. These additions provide developers with more powerful cryptographic options for enhanced security, better performance on modern 64-bit systems, and greater flexibility in designing sophisticated Bitcoin applications.

#### In this chapter you will explore:

* How **hash functions** (RIPEMD-160, SHA-1, SHA-256, SHA-512, SHA-512/256) create cryptographic fingerprints
* The purpose and security properties of **double-hash operations**
* **Chronicle Release enhancements**: SHA-512 and SHA-512/256 functions and their use cases
* How **OP\_CHECKSIG** and **OP\_CHECKSIGVERIFY** validate digital signatures
* **Multisignature verification** with OP\_CHECKMULTISIG for shared control
* The role of **OP\_CODESEPARATOR** in defining which script portions are signed

#### By the end of this chapter, learners will:

* **Understand** how hash functions ensure data integrity in Bitcoin transactions
* **Identify** which hash function to use for specific security and performance requirements
* **Explain** the advantages of SHA-512 and SHA-512/256 introduced in Chronicle Release
* **Apply** signature verification opcodes to validate transaction authorization
* **Analyze** how OP\_CODESEPARATOR enables selective script signing


---

# Agent Instructions
This documentation is published with GitBook. GitBook is the documentation platform designed so that both humans and AI agents can read, navigate, and reason over technical content effectively. Learn more at gitbook.com.

## Querying This Documentation
If you need additional information that is not directly available in this page, you can query the documentation dynamically by asking a question.

Perform an HTTP GET request on the current page URL with the `ask` query parameter, and the optional `goal` query parameter:

```
GET https://hub.bsvblockchain.org/higher-learning/bsv-academy/bsv-opcodes/cryptographic-functions.md?ask=<question>&goal=<endgoal>
```

`ask` is the immediate question: it should be specific, self-contained, and written in natural language.
`goal` is optional and describes the broader end goal you are ultimately trying to accomplish on behalf of the user. GitBook uses it to tailor the answer towards what is most useful for that goal.

The response will contain a direct answer to the question and relevant excerpts and sources from the documentation.

Use this mechanism when the answer is not explicitly present in the current page, you need clarification or additional context, or you want to retrieve related documentation sections.
