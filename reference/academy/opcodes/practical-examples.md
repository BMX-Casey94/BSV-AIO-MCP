> For the complete documentation index, see [llms.txt](https://hub.bsvblockchain.org/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://hub.bsvblockchain.org/higher-learning/bsv-academy/bsv-opcodes/op_nop-op_ver/practical-examples.md).

# Practical Examples

#### Example 1: Conditional Path Selection

```
OP_DEPTH OP_1 OP_EQUAL OP_IF
    OP_DROP <pubkey> OP_CHECKSIGVERIFY OP_RETURN
OP_ENDIF
OP_DEPTH OP_HASH160 <pubkeyhash> OP_EQUALVERIFY OP_CHECKSIG
```

The script checks the depth of the stack. If there is just 1 item, it assumes it is a signature and checks it against a public key using OP\_CHECKSIGVERIFY followed by OP\_RETURN. If there is more than one item, it assumes a public key and signature, which it checks against a stored public key hash using OP\_EQUALVERIFY.

#### Example 2: Multi-Path Verification

```
OP_DUP OP_IF
    <pubkey1> <pubkey2> OP_2 OP_CHECKMULTISIG
OP_ELSE
    <pubkey> OP_CHECKSIG
OP_ENDIF
```

The first conditional can be entered if either 1, 2, or 3 of the signing parties choose to sign. If a zero value is at the top of the stack initially, the second entity can sign using a single signature check.

#### Example 3: Data Capture with Verification

```
OP_2DROP <pubkey> OP_CHECKSIG
```

The output being spent is used to capture data on the ledger which is not relevant to the spending of the token. The script drops two data items and then performs a signature check. This can be used with a scriptSig like:

```
<signature> <data_item1> <data_item2>
```

#### Example 4: Complex Verification Chain

```
OP_1SUB OP_DUP OP_TOALTSTACK OP_NOTIF
    OP_2 <pubkey1> <pubkey2> OP_2 OP_CHECKMULTISIG
    OP_FROMALTSTACK OP_DROP
OP_ELSE
    OP_FROMALTSTACK OP_1SUB OP_NOTIF
        <pubkey> OP_CHECKSIG
    OP_ELSE
        OP_FALSE OP_RETURN
    OP_ENDIF
OP_ENDIF
```

The spending party must indicate using an integer value of 1 or 2 which path they wish to take. The first entity requires a 2of2 multisignature solution with scriptSig:

```
<x> <signature1> <signature2> <1>
```

The second entity would use:

```
<signature> <2>
```

If the top value is neither 1 nor 2, the script enters the nested OP\_ELSE statement where OP\_FALSE OP\_RETURN causes it to fail.


---

# Agent Instructions
This documentation is published with GitBook. GitBook is the documentation platform designed so that both humans and AI agents can read, navigate, and reason over technical content effectively. Learn more at gitbook.com.

## Querying This Documentation
If you need additional information that is not directly available in this page, you can query the documentation dynamically by asking a question.

Perform an HTTP GET request on the current page URL with the `ask` query parameter, and the optional `goal` query parameter:

```
GET https://hub.bsvblockchain.org/higher-learning/bsv-academy/bsv-opcodes/op_nop-op_ver/practical-examples.md?ask=<question>&goal=<endgoal>
```

`ask` is the immediate question: it should be specific, self-contained, and written in natural language.
`goal` is optional and describes the broader end goal you are ultimately trying to accomplish on behalf of the user. GitBook uses it to tailor the answer towards what is most useful for that goal.

The response will contain a direct answer to the question and relevant excerpts and sources from the documentation.

Use this mechanism when the answer is not explicitly present in the current page, you need clarification or additional context, or you want to retrieve related documentation sections.
