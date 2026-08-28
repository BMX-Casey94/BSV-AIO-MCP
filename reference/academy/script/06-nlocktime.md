> For the complete documentation index, see [llms.txt](https://hub.bsvblockchain.org/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://hub.bsvblockchain.org/higher-learning/bsv-academy/introduction-to-bitcoin-script/chapter-1-about-bitcoin-script/06-nlocktime.md).

# 06 - nLockTime

`00000000`

The final element of the transaction is its nLockTime. nLockTime is the second part of setting up payment channels.

{% file src="/files/dM9mDaRB8QlJgFCQg3gv" %}

Payment channels are a highly useful tool and a native element of the Bitcoin protocol.

<figure><img src="/files/kRIBt4JbvM3zFNaxtpVl" alt=""><figcaption></figcaption></figure>

When a transaction's nLockTime is in the future, it can be considered non-final if there are also inputs with non-final nSequence values. In this particular transaction, the nLocktime is set to 0x00000000 meaning that the field references block 0 and the transaction is final at any time.

<figure><img src="/files/1y3VJBkESGXRDHR9JWvY" alt=""><figcaption></figcaption></figure>

In the above animation it can be seen that the transaction is not final until either the nSequence field is UINT\_MAX or the nLockTime passes which then overrides the fact that the nSequence UINT has not been incremented to its MAX value.


---

# Agent Instructions
This documentation is published with GitBook. GitBook is the documentation platform designed so that both humans and AI agents can read, navigate, and reason over technical content effectively. Learn more at gitbook.com.

## Querying This Documentation
If you need additional information that is not directly available in this page, you can query the documentation dynamically by asking a question.

Perform an HTTP GET request on the current page URL with the `ask` query parameter, and the optional `goal` query parameter:

```
GET https://hub.bsvblockchain.org/higher-learning/bsv-academy/introduction-to-bitcoin-script/chapter-1-about-bitcoin-script/06-nlocktime.md?ask=<question>&goal=<endgoal>
```

`ask` is the immediate question: it should be specific, self-contained, and written in natural language.
`goal` is optional and describes the broader end goal you are ultimately trying to accomplish on behalf of the user. GitBook uses it to tailor the answer towards what is most useful for that goal.

The response will contain a direct answer to the question and relevant excerpts and sources from the documentation.

Use this mechanism when the answer is not explicitly present in the current page, you need clarification or additional context, or you want to retrieve related documentation sections.
