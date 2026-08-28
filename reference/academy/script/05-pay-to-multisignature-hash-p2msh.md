> For the complete documentation index, see [llms.txt](https://hub.bsvblockchain.org/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://hub.bsvblockchain.org/higher-learning/bsv-academy/introduction-to-bitcoin-script/chapter-4-simple-scripts/05-pay-to-multisignature-hash-p2msh.md).

# 05 - Pay to MultiSignature Hash (P2MSH)

| Stack                                                                                                             | Script                                                                                                                                                                                                                                                                           | Description                                              |
| ----------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------- |
| Empty.                                                                                                            | 1 \<signature\_1> \<signature\_2> \<pubkey\_1> \<pubkey\_2> \<pubkey\_3> \| \|OP\_3DUP OP\_CAT OP\_CAT OP\_HASH160 <3pubkey\_hash> OP\_EQUALVERIFY OP\_TOALTSTACK OP\_TOALTSTACK OP\_TOALTSTACK OP\_2 OP\_FROMALTSTACK OP\_FROMALTSTACK OP\_FROMALTSTACK OP\_3 OP\_CHECKMULTISIG | scriptSig and scriptPubKey are combined.                 |
| 1 \<signature\_1> \<signature\_2> \<pubkey\_1> \<pubkey\_2> \<pubkey\_3>                                          | OP\_3DUP OP\_CAT OP\_CAT OP\_HASH160 <3pubkey\_hash> OP\_EQUALVERIFY OP\_TOALTSTACK OP\_TOALTSTACK OP\_TOALTSTACK OP\_2 OP\_FROMALTSTACK OP\_FROMALTSTACK OP\_FROMALTSTACK OP\_3 OP\_CHECKMULTISIG                                                                               | Signatures and public keys are added to the stack        |
| 1 \<signature\_1> \<signature\_2> \<pubkey\_1> \<pubkey\_2> \<pubkey\_3>\<pubkey\_1> \<pubkey\_2> \<pubkey\_3>    | OP\_CAT OP\_CAT OP\_HASH160 <3pubkey\_hash> OP\_EQUALVERIFY OP\_TOALTSTACK OP\_TOALTSTACK OP\_TOALTSTACK OP\_2 OP\_FROMALTSTACK OP\_FROMALTSTACK OP\_FROMALTSTACK OP\_3 OP\_CHECKMULTISIG                                                                                        | 3 public keys are duplicated                             |
| 1 \<signature\_1> \<signature\_2> \<pubkey\_1> \<pubkey\_2> \<pubkey\_3>\<pubkey\_1> \<pubkey\_2\_3\_cat>         | OP\_CAT OP\_HASH160 <3pubkey\_hash> OP\_EQUALVERIFY OP\_TOALTSTACK OP\_TOALTSTACK OP\_TOALTSTACK OP\_2 OP\_FROMALTSTACK OP\_FROMALTSTACK OP\_FROMALTSTACK OP\_3 OP\_CHECKMULTISIG                                                                                                | Pubkey 2 and Pubkey 3 are concatenated                   |
| 1 \<signature\_1> \<signature\_2> \<pubkey\_1> \<pubkey\_2> \<pubkey\_3>\<pubkey\_1\_2\_3\_cat>                   | OP\_HASH160 <3pubkey\_hash> OP\_EQUALVERIFY OP\_TOALTSTACK OP\_TOALTSTACK OP\_TOALTSTACK OP\_2 OP\_FROMALTSTACK OP\_FROMALTSTACK OP\_FROMALTSTACK OP\_3 OP\_CHECKMULTISIG                                                                                                        | Pubkey 1 is concatenated with Pukey 2\_3 concatenation   |
| 1 \<signature\_1> \<signature\_2> \<pubkey\_1> \<pubkey\_2> \<pubkey\_3> \<pubkey\_1\_2\_3\_hash>                 | <3pubkey\_hash> OP\_EQUALVERIFY OP\_TOALTSTACK OP\_TOALTSTACK OP\_TOALTSTACK OP\_2 OP\_FROMALTSTACK OP\_FROMALTSTACK OP\_FROMALTSTACK OP\_3 OP\_CHECKMULTISIG                                                                                                                    | Concatenated pubkeys are double hashed using OP\_HASH160 |
| 1 \<signature\_1> \<signature\_2> \<pubkey\_1> \<pubkey\_2> \<pubkey\_3> \<pubkey\_1\_2\_3\_hash> <3pubkey\_hash> | OP\_EQUALVERIFY OP\_TOALTSTACK OP\_TOALTSTACK OP\_TOALTSTACK OP\_2 OP\_FROMALTSTACK OP\_FROMALTSTACK OP\_FROMALTSTACK OP\_3 OP\_CHECKMULTISIG                                                                                                                                    | Expected 3 pubkey hash is pushed onto the stack          |
| 1 \<signature\_1> \<signature\_2> \<pubkey\_1> \<pubkey\_2> \<pubkey\_3>                                          | OP\_TOALTSTACK OP\_TOALTSTACK OP\_TOALTSTACK OP\_2 OP\_FROMALTSTACK OP\_FROMALTSTACK OP\_FROMALTSTACK OP\_3 OP\_CHECKMULTISIG                                                                                                                                                    | Generated hash is evaluated against expected hash        |
| 1 \<signature\_1> \<signature\_2>​Altstack:\<pubkey\_3> \<pubkey\_2> \<pubkey\_1>                                 | OP\_2 OP\_FROMALTSTACK OP\_FROMALTSTACK OP\_FROMALTSTACK OP\_3 OP\_CHECKMULTISIG                                                                                                                                                                                                 | Pubkeys 3, 2 and 1 are pushed to altstack                |
| 1 \<signature\_1> \<signature\_2> 2​Altstack:\<pubkey\_3> \<pubkey\_2> \<pubkey\_1>                               | OP\_FROMALTSTACK OP\_FROMALTSTACK OP\_FROMALTSTACK OP\_3 OP\_CHECKMULTISIG                                                                                                                                                                                                       | Constant value '2' is pushed onto the stack              |
| 1 \<signature\_1> \<signature\_2> 2 \<pubkey\_1>\<pubkey\_2>\<pubkey\_3>                                          | OP\_3 OP\_CHECKMULTISIG                                                                                                                                                                                                                                                          | Pubkeys 3, 2 and 1 are pulled from altstack              |
| 1 \<signature\_1> \<signature\_2> 2 \<pubkey\_1>\<pubkey\_2>\<pubkey\_3> 3                                        | OP\_CHECKMULTISIG                                                                                                                                                                                                                                                                | Constant value '3' is pushed onto the stack              |
| true                                                                                                              | Empty.                                                                                                                                                                                                                                                                           | Multisignature evaluation is performed                   |

<figure><img src="/files/TkVuNnBPYKt51KCjq9sE" alt=""><figcaption></figcaption></figure>

As shown above, the spending parties must supply 2 valid signatures and the three public keys that correspond to the hash stored in the output. The 3 public keys are duplicated and hashed using the OP\_HASH160 opcode, and the resultant data item is checked against a hash value stored in the output.

Following this, the three public keys are pushed to the ALTSTACK so that the 2 signature evaluation criteria can be inserted, and then pulled back to the main stack. The 3 pubkey evaluation criteria is then added and the multisig operation takes place.

These types of scripts can be applied in many ways to enable multi-party collaboration for a range of use cases.


---

# Agent Instructions
This documentation is published with GitBook. GitBook is the documentation platform designed so that both humans and AI agents can read, navigate, and reason over technical content effectively. Learn more at gitbook.com.

## Querying This Documentation
If you need additional information that is not directly available in this page, you can query the documentation dynamically by asking a question.

Perform an HTTP GET request on the current page URL with the `ask` query parameter, and the optional `goal` query parameter:

```
GET https://hub.bsvblockchain.org/higher-learning/bsv-academy/introduction-to-bitcoin-script/chapter-4-simple-scripts/05-pay-to-multisignature-hash-p2msh.md?ask=<question>&goal=<endgoal>
```

`ask` is the immediate question: it should be specific, self-contained, and written in natural language.
`goal` is optional and describes the broader end goal you are ultimately trying to accomplish on behalf of the user. GitBook uses it to tailor the answer towards what is most useful for that goal.

The response will contain a direct answer to the question and relevant excerpts and sources from the documentation.

Use this mechanism when the answer is not explicitly present in the current page, you need clarification or additional context, or you want to retrieve related documentation sections.
