> For the complete documentation index, see [llms.txt](https://hub.bsvblockchain.org/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://hub.bsvblockchain.org/higher-learning/bsv-academy/introduction-to-bitcoin-script/chapter-4-simple-scripts/02-pay-to-hash-puzzle.md).

# 02 - Pay to Hash Puzzle

A Pay to Hash Puzzle script is a simple script that uses a hash function as the checking function, requiring the spending party to provide a valid solution to the puzzle to spend the output.

When processing hash puzzle scripts, the validation engine takes one or more input argument and process them against one or more hash/algebraic functions to create a script that checks that the spending party has knowledge of a piece of hidden information. These scripts have very low overhead, but reduced security. Care should be taken when creating outputs with these functions as some hash function opcodes (e.g. OP\_SHA1) use hashing functions that are computationally insecure.

A pay to hash script can be defined in many ways:

Example 1: `OP_SHA256 <sha256_hash> OP_EQUAL`

Example 2: `OP_HASH256 <double_sha256_hash> OP_EQUAL`

Example 3`: OP_SHA256 OP_RIPEMD160 <ripemd160_hash> OP_EQUAL`

To spend an output that is locked with the script in example 3, the following solution is provided:

`<pre-hash_value>`

The validation engine will evaluate the full script of Example 3 as follows:

`<pre-hash_value> OP_SHA256 OP_RIPEMD160 <ripemd160_hash> OP_EQUAL`

A breakdown of the script evaluation process is shown below:

<table><thead><tr><th width="194.33333333333331">Stack</th><th>Script</th><th>Description</th></tr></thead><tbody><tr><td>Empty.</td><td><p>&#x3C;pre-hash_value> | |</p><p>OP_SHA256 OP_RIPEMD160 &#x3C;ripemd160_hash> OP_EQUAL</p></td><td>scriptSig and scriptPubKey are combined.</td></tr><tr><td>&#x3C;pre-hash_value></td><td>OP_SHA256 OP_RIPEMD160 &#x3C;ripemd160_hash> OP_EQUAL</td><td>Pre-hash value is added to the stack.</td></tr><tr><td>&#x3C;sha256_hash></td><td>OP_RIPEMD160 &#x3C;ripemd160_hash> OP_EQUAL</td><td>Pre-hash value is hashed using SHA256 hashing algorithm</td></tr><tr><td>&#x3C;ripemd160_hash></td><td>&#x3C;ripemd160_hash> OP_EQUAL</td><td>SHA256 hash of pre-hash value is hashed with RIPEMD160 hash algorithm</td></tr><tr><td>&#x3C;ripemd160_hash> &#x3C;ripemd160_hash></td><td>OP_EQUAL</td><td>Expected RIPEMD160 hash is added to the stack</td></tr><tr><td>true</td><td>Empty.</td><td>Hash value is checked against the expected hash value</td></tr></tbody></table>

<figure><img src="/files/nVpBGKqsSxL1dOvQkSh3" alt=""><figcaption></figcaption></figure>

As shown above, the pre-hash value is pushed onto the stack, before being double hashed, first with the SHA256 hashing algorithm and subsequently with the RIPEMD160 hashing algorithm. If the correct pre-hash value is used, the double hash value will match the expected hash outcome, and the input can be spent in the transaction.

## Pay to Script Hash (P2SH)

Pay to Script Hash (P2SH) was a so-called 'soft fork' change introduced to Bitcoin in 2012 ostensibly to allow more complex scripts to be used with smaller transactions. The scheme uses protocol hacks to bypass the expected behaviour of the network, and was disallowed following the 2020 Genesis upgrade on the BitcoinSV network.

Invalid P2SH outputs are defined using the following template:

`OP_HASH160 <script_hash> OP_EQUAL`

This script performs the same process outlined in Example 3 above, but uses the OP\_HASH160 opcode to perform the double hash with a single instruction.

Because P2SH introduces functionality that is not compatible with the Bitcoin protocol, nodes on the BSV network will evaluate any transaction sent to the network that creates a P2SH output as invalid, and will reject it with the 'Error: Pay to Script Hash' error code.


---

# Agent Instructions
This documentation is published with GitBook. GitBook is the documentation platform designed so that both humans and AI agents can read, navigate, and reason over technical content effectively. Learn more at gitbook.com.

## Querying This Documentation
If you need additional information that is not directly available in this page, you can query the documentation dynamically by asking a question.

Perform an HTTP GET request on the current page URL with the `ask` query parameter, and the optional `goal` query parameter:

```
GET https://hub.bsvblockchain.org/higher-learning/bsv-academy/introduction-to-bitcoin-script/chapter-4-simple-scripts/02-pay-to-hash-puzzle.md?ask=<question>&goal=<endgoal>
```

`ask` is the immediate question: it should be specific, self-contained, and written in natural language.
`goal` is optional and describes the broader end goal you are ultimately trying to accomplish on behalf of the user. GitBook uses it to tailor the answer towards what is most useful for that goal.

The response will contain a direct answer to the question and relevant excerpts and sources from the documentation.

Use this mechanism when the answer is not explicitly present in the current page, you need clarification or additional context, or you want to retrieve related documentation sections.
