> For the complete documentation index, see [llms.txt](https://hub.bsvblockchain.org/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://hub.bsvblockchain.org/higher-learning/bsv-academy/bsv-opcodes/op_return-and-data-storage/what-is-op_return.md).

# What is OP\_RETURN?

<figure><img src="/files/6Ja01XDbl0gDcfxiIcOC" alt=""><figcaption></figcaption></figure>

OP\_RETURN is a Bitcoin Script opcode that immediately terminates script execution. When a validation engine encounters OP\_RETURN, it stops processing and ends the script with the top value on the stack as the final result.

| Word       | Hex  | Input         | Output | Description                                               |
| ---------- | ---- | ------------- | ------ | --------------------------------------------------------- |
| OP\_RETURN | 0x6a | Any (ignored) | None   | ***Ends script with top value on stack as final result*** |

OP\_RETURN can also be used to create "False Return" outputs with a locking script consisting of OP\_FALSE OP\_RETURN followed by data. Such outputs are provably unspendable and should be given a value of zero Satoshis. These outputs can be pruned from storage in the UTXO set, reducing its size.

This might seem counterintuitive—why create an output that can't be spent? The answer lies in understanding Bitcoin's **UTXO (Unspent Transaction Output) set**. Before False Return outputs, developers storing data on the blockchain created fake payment scripts that looked like valid addresses but encoded data instead. These outputs permanently bloated the UTXO set—the database every node maintains of spendable coins.

False Return outputs and the usage of OP\_RETURN solved this elegantly. By making data outputs explicitly unspendable from creation, nodes can immediately recognize them and exclude them from the UTXO set. The data still gets recorded in the blockchain permanently, but doesn't create ongoing overhead for nodes.

**Key distinction:**

* **Blockchain storage**: Data is permanent but doesn't affect UTXO set
* **UTXO storage**: Creates ongoing costs for every node on the network

#### Data Capacity

The amount of data allowed in OP\_RETURN outputs has evolved significantly:

| Implementation | Period       | Limit               | Multiple Outputs |
| -------------- | ------------ | ------------------- | ---------------- |
| Bitcoin Core   | 2014-2015    | 40 bytes            | No               |
| Bitcoin Core   | 2015-present | 80 bytes            | No               |
| BSV blockchain | 2018-present | No artificial limit | Yes              |

BSV removed hardcoded restrictions on OP\_RETURN size, recognizing that arbitrary limits constrain legitimate use cases. Data size is now limited only by overall transaction size and practical cost considerations. This enables applications requiring substantial data storage while maintaining efficiency.


---

# Agent Instructions
This documentation is published with GitBook. GitBook is the documentation platform designed so that both humans and AI agents can read, navigate, and reason over technical content effectively. Learn more at gitbook.com.

## Querying This Documentation
If you need additional information that is not directly available in this page, you can query the documentation dynamically by asking a question.

Perform an HTTP GET request on the current page URL with the `ask` query parameter, and the optional `goal` query parameter:

```
GET https://hub.bsvblockchain.org/higher-learning/bsv-academy/bsv-opcodes/op_return-and-data-storage/what-is-op_return.md?ask=<question>&goal=<endgoal>
```

`ask` is the immediate question: it should be specific, self-contained, and written in natural language.
`goal` is optional and describes the broader end goal you are ultimately trying to accomplish on behalf of the user. GitBook uses it to tailor the answer towards what is most useful for that goal.

The response will contain a direct answer to the question and relevant excerpts and sources from the documentation.

Use this mechanism when the answer is not explicitly present in the current page, you need clarification or additional context, or you want to retrieve related documentation sections.
