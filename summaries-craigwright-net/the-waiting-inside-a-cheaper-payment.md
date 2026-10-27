---
title: "The waiting inside a cheaper payment"
date: 2026-10-25
slug: the-waiting-inside-a-cheaper-payment
url: https://craigwright.net/the-waiting-inside-a-cheaper-payment
themes: [micropayments, monetary-economics, intermediaries]
---

# The waiting inside a cheaper payment
**Date:** 2026-10-25 | **URL:** https://craigwright.net/the-waiting-inside-a-cheaper-payment | **Source:** craigwright.net research article

## Core thesis
The article argues that combining small charges can reduce the fee paid for each purchase, and that the saving needs a clock: when the customer pays, when the seller can use the money, and which institution carries the gap. Aggregation can be a sensible design, the article says, and it also changes the service being compared.

## Key arguments and claims
- The article points to published research: Craig S. Wright (2026), *Empirical cost analysis of sub-dollar digital payments: Comparing legacy fee architectures with byte-denominated simplified payment verification*, *Results in Engineering*, 30, 111124, DOI 10.1016/j.rineng.2026.111124. It says that research distinguishes fixed-plus-percentage fees from byte-denominated charges, and that its 55,000 evaluations combine schedule-computed legacy fees with transaction-measured SPV fees. The comparison concerns direct processing charges, with other service costs outside its scope. This commentary is dated 25 October 2026. The article then asks what timing and funding arrangement makes aggregation possible if aggregation reduces a fixed charge.
- Deliberately simplified illustration. Each purchase has value *v*. Processing costs a fixed amount *a* plus a fraction *b* of value. If the service can legally and operationally combine *N* purchases into one charge, with no extra aggregation fee, and the same schedule applies to the combined amount, the average direct fee per purchase becomes *a/N + bv*, rather than *a + bv*.
- Invented figures, which the article says are arithmetic examples, not prices offered by a provider: a 10-cent purchase, a 20-cent fixed fee and a one-percent proportional rate. Separate collection costs 20.1 cents per purchase. Collecting ten purchases as a single one-dollar charge costs 21 cents in total, or 2.1 cents per purchase.
- If purchases arrive exactly one minute apart and the service charges when the tenth arrives, the first purchase waits nine minutes, the last waits zero, and the average wait is 4.5 minutes. With spacing *d*, the mean wait within a completed batch is *(N − 1)d/2*. The article says this excludes processing time and assumes every batch fills. A count threshold may leave a final incomplete batch waiting. A time limit controls that delay but can produce smaller batches and higher fees per purchase. An average calculated only from completed batches would conceal the unfinished work.
- The article distinguishes this batch charging from netting obligations between payment institutions. It cites BIS, *The quest for speed in payments* (2017), https://www.bis.org/publications/quest-speed-payments, especially the explanation of payee funds availability and inter-provider settlement. As the article reads that analysis: a payee can receive available funds before settlement between payment service providers; in a deferred arrangement the receiving provider can advance the funds, which creates an exposure between providers that needs risk controls; real-time settlement requires liquidity when individual payments settle. The article says the BIS historical country examples are not used here as current service descriptions, and that the discussion is a distinction between arrangements, not a claim about the current design of any named service.
- Proposed tests, which the article says are not results of a new field study and not a recommendation of a payment product. Compare immediate collection, delayed collection and an advance-funded arrangement against the same sales sequence. Retain each purchase time, collection time, funds-availability time, amount and fee. Record any financing charge or unrecovered balance separately. Include a quiet period, a customer who stops buying before the threshold, and a failed collection. Report outstanding balances and waiting-time tails alongside the mean. Only public research is used.

## How Craig reasons (his model/logic)
The article takes a published comparison of direct processing charges as given, then adds a timing question that comparison leaves open. It writes a fee schedule for a combined charge, attaches a waiting-time formula under stated assumptions, and separates payee funds-availability from inter-provider settlement by way of the 2017 BIS analysis. The closing move is a proposed record of the same sales sequence under three funding arrangements, with quiet periods, unfinished batches and failed collections kept in the comparison. The numerical examples are labelled as invented.

## Where this contradicts BTC-mainstream logic
The article does not set up an explicit contrast with BTC-mainstream positions.

## Notable quotes
- "Combining small charges can reduce the fee paid for each purchase."
- "“the seller receives funds immediately” does not, by itself, identify the settlement model."
- "A smaller direct fee can improve the economics of a small sale."

## Connections
The article cites the 2026 *Results in Engineering* paper and BIS, *The quest for speed in payments* (2017). Its related-research link points to `tiny-payments.html` on the same site; that page was not fetched. No file under `summaries/` is cited by this article.

*Summary of the author's own account; claims are his and have not been independently verified.*
