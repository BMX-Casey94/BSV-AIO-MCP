> For the complete documentation index, see [llms.txt](https://hub.bsvblockchain.org/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://hub.bsvblockchain.org/higher-learning/bsv-academy/introduction-to-bitcoin-script/chapter-4-simple-scripts/04-pay-to-multisig-p2ms.md).

# 04 - Pay to MultiSig (P2MS)

Pay to MultiSig (P2MS) uses the OP\_CHECKMULTISIG opcode to perform a check against multiple signatures and public keys. There are no limits to the number of keys/signatures that can be checked beyond any limits imposed by nodes on the size or complexity of individual transactions.

For this example, we will use a 2of3 multisignature operation. A 2of3 multisig script is defined as follows:

`2 <pubkey_1> <pubkey_2> <pubkey_3> 3 OP_CHECKMULTISIG`

To spend an output that is locked with a 2of3 P2MS script, any of the following solutions may be provided:

Example 1: `1 <signature_1> <signature_2>`

Example 2: `1 <signature_1> <signature_3>`

Example 3: `1 <signature_2> <signature_3>`

Using the example 1, the validation engine will evaluate the full script as follows:

`1 <signature_1> <signature_2> 2 <pubkey_1> <pubkey_2> <pubkey_3> 3 OP_CHECKMULTISIG`

A breakdown of the script evaluation process is shown below:

<table><thead><tr><th width="202.33333333333331">Stack</th><th>Script</th><th>Description</th></tr></thead><tbody><tr><td>Empty.</td><td><p>1 &#x3C;signature_1> &#x3C;signature_2> | |</p><p>2 &#x3C;pubkey_1> &#x3C;pubkey_2> &#x3C;pubkey_3> 3 OP_CHECKMULTISIG</p></td><td>scriptSig and scriptPubKey are combined.</td></tr><tr><td>1 &#x3C;signature_1> &#x3C;signature_2></td><td>2 &#x3C;pubkey_1> &#x3C;pubkey_2> &#x3C;pubkey_3> 3 OP_CHECKMULTISIG</td><td>Signatures are added to the stack</td></tr><tr><td>1 &#x3C;signature_1> &#x3C;signature_2> 2 &#x3C;pubkey_1> &#x3C;pubkey_2> &#x3C;pubkey_3> 3</td><td>OP_CHECKMULTISIG</td><td>Public keys and multi signature evaluation criteria are added to the stack</td></tr><tr><td>true</td><td>Empty.</td><td>Multi signature evaluation is performed</td></tr></tbody></table>

<figure><img src="/files/vRuEr8uwQX9UHZgtT2ZB" alt=""><figcaption></figcaption></figure>

As shown above, the spending parties must supply 2 valid signatures signed with keys taken from the pool of three keys stored in the output being spent. The signatures must be provided in the same order corresponding to the public keys in the locking script.

e.g. if the spending party submitted `1 <signature_2> <signature_1>` as their solution, this would be invalid and the transaction would be rejected.

## Junk Bug

The eagle eyed among you would have noticed that each of the example solutions has a single '1' as the first item in the script. This is a result of a bug in the evaluation software for OP\_CHECKMULTISIG in the original node client. The bug is harmless, and results in minimal overhead to users. To maintain the protocol, the bug has been left in all subsequent versions of the node client and will remain as part of the Bitcoin protocol. This stack item is not checked in the evaluation process and as such can be any value of any valid length. Transactions submitted to the network that do not have an extra stack item at the top of the stack are considered invalid and will be rejected.


---

# Agent Instructions
This documentation is published with GitBook. GitBook is the documentation platform designed so that both humans and AI agents can read, navigate, and reason over technical content effectively. Learn more at gitbook.com.

## Querying This Documentation
If you need additional information that is not directly available in this page, you can query the documentation dynamically by asking a question.

Perform an HTTP GET request on the current page URL with the `ask` query parameter, and the optional `goal` query parameter:

```
GET https://hub.bsvblockchain.org/higher-learning/bsv-academy/introduction-to-bitcoin-script/chapter-4-simple-scripts/04-pay-to-multisig-p2ms.md?ask=<question>&goal=<endgoal>
```

`ask` is the immediate question: it should be specific, self-contained, and written in natural language.
`goal` is optional and describes the broader end goal you are ultimately trying to accomplish on behalf of the user. GitBook uses it to tailor the answer towards what is most useful for that goal.

The response will contain a direct answer to the question and relevant excerpts and sources from the documentation.

Use this mechanism when the answer is not explicitly present in the current page, you need clarification or additional context, or you want to retrieve related documentation sections.
