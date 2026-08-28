---
title: "Digital Cash That Doesn’t Bleed: A 11,000-Transaction Micropayment Audit Across PayPal, Stripe, Visa, Mastercard, and BSV"
date: 2025-08-25
slug: digital-cash-that-doesnt-bleed-a
url: https://singulargrit.substack.com/p/digital-cash-that-doesnt-bleed-a
themes: [micropayments, monetary-economics, scaling-throughput, audit-accounting]
---

# Digital Cash That Doesn’t Bleed: A 11,000-Transaction Micropayment Audit Across PayPal, Stripe, Visa, Mastercard, and BSV
**Date:** 2025-08-25 | **URL:** https://singulargrit.substack.com/p/digital-cash-that-doesnt-bleed-a
**Subtitle:** A penny beats a percent: when fees cross 5–20%, micropayments die; when they anchor at $0.01, they scale.

## Core thesis
Micropayments live or die by fee geometry, not by user psychology or branding. In a controlled audit of 11,000 transactions per rail, percentage-based processors routinely breach economically viable fee-share thresholds for small payments, while BSV's flat, penny-class fee (anchored at roughly $0.01) never breaches 5%. "A penny beats a percent": only flat, predictable, negligible fees keep sub-£5 transactions economically alive.

## Key arguments and claims
- Method: five datasets of 11,000 transactions each (BSV from May 2024; processors and cards from May 2025), each record carrying price, total fee, and fee share = (total fee ÷ price) × 100. Threshold shares above 5%, 10% and 20% are reported with 95% exact binomial (Clopper–Pearson) confidence intervals.
- Results: PayPal — 90.3% of transactions exceed 5% fee share, 71.7% exceed 10%, 39.4% exceed 20%. Stripe — 59.0% / 46.0% / 14.6%. Visa — 31.2% / 5.6% / 0.5%. Mastercard — 15.5% / 1.3% / 0%. The BSV digital-cash rail records zero breaches at every threshold.
- Confidence intervals separate cleanly: PayPal's share above 10% sits in roughly 70.8–72.5%, Stripe's in 45.0–46.9%, against Visa's 5.2–6.0% and Mastercard's 1.1–1.6%; the ordering PayPal > Stripe > Visa > Mastercard > BSV is statistically unambiguous.
- Fee stability is demonstrated with a CUSUM (cumulative sum) process-control procedure: BSV's per-transaction fee stays anchored near $0.01 with only short-lived, mean-reverting noise and no sustained drift — predictability, not occasional bargains, is what underwrites pricing menus and margin forecasts.
- Throughput time-series show sustained processing with brief, self-correcting dips and no backlog accumulation, evidencing headroom behind the penny fee rather than an idle-network artefact.
- Viability economics: a £0.25 article pays 2.5p at a 10% toll or 5p at 20%, versus 1p on a penny rail — an effective share of 1 ÷ 25 = 4%, under the 5% viability line. Twelve such articles in a sitting cost 30p (10%) or 60p (20%) in ad-valorem fees versus 12p flat.
- Aggregation arithmetic for tiny tickets: a 2p API call settled singly at 1p fee is a 50% share, but batching N calls gives share 1 ÷ (2N); staying below 5% requires N > 10, and N = 20 yields 2.5% — enabling honest per-event metering with per-session settlement.
- Operational blueprint: route by economics (prices < £10 to the penny rail unless cards achieve ≤ 5%); session aggregation windows of 1–10 minutes or a ≥ £0.20 floor; signed, tamper-evident receipts (receipt_id, txid, payer/payee keys, itemised units, UTC timestamp, digest, merchant signature) with hashes anchored on-chain; compensating micro-refunds and credit-on-account instead of chargeback regimes; one-sided CUSUM monitoring with μ₀ = $0.01 and allowance k = $0.002, Sₜ = max(0, Sₜ₋₁ + (xₜ − (μ₀ + k))).
- Counterarguments (UX, onboarding, chargebacks, tooling) "collapse under arithmetic": the router chooses rails invisibly, KYC reuses existing provider flows, and CRM/fraud/analytics tooling integrates additively via signed receipts.

## How Craig reasons (his model/logic)
Empirical audit methodology: equal-sized samples, a price-invariant metric (fee share of ticket), fixed viability thresholds, exact binomial confidence intervals, and statistical process control (CUSUM) for temporal stability, plus throughput traces for capacity credibility. The economic reasoning is unit-economics — contribution margin at the bottom of the price curve — rather than ideology: "The conclusion is allocation, not crusade."

## Where this contradicts BTC-mainstream logic
No direct engagement — this post is an empirical fee-geometry audit of payment rails (PayPal, Stripe, Visa, Mastercard versus BSV); BTC and its fee market are never discussed, the argument proceeding by measurement rather than by protocol polemic.

## Notable quotes
- "A penny beats a percent."
- "Micropayments are not a rhetoric problem; they are a friction problem."
- "The conclusion is allocation, not crusade."
- "Never pay a percent where a penny will do."

## Connections
Supplies the empirical backbone for Craig's digital-cash claim that BSV functions as usable money where percentage-toll systems cannot; its per-event metering and session-settlement blueprint connects to his IP-to-IP note-splitting payment protocols.
