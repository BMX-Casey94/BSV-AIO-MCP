---
title: "Digital Cash That Doesn’t Bleed: A 11,000-Transaction Micropayment Audit Across PayPal, Stripe, Visa, Mastercard, and BSV"
era: substack
date: 2025-08-25
slug: digital-cash-that-doesnt-bleed-a
themes: [micropayments, monetary-economics, scaling-throughput, audit-accounting]
source_summary: summaries/digital-cash-that-doesnt-bleed-a.md
url: https://singulargrit.substack.com/p/digital-cash-that-doesnt-bleed-a
---

# Digital Cash That Doesn’t Bleed: A 11,000-Transaction Micropayment Audit Across PayPal, Stripe, Visa, Mastercard, and BSV — core principles

- **Micropayments live or die by fee geometry.** "A penny beats a percent": percentage-based processors routinely breach economically viable fee-share thresholds for small payments, while a flat penny-class fee (~$0.01) never breaches 5% — only flat, predictable, negligible fees keep sub-£5 transactions alive.
- **Measured results across 11,000 transactions per rail.** Share of transactions breaching 5% / 10% / 20% fee-share: PayPal 90.3% / 71.7% / 39.4%; Stripe 59.0% / 46.0% / 14.6%; Visa 31.2% / 5.6% / 0.5%; Mastercard 15.5% / 1.3% / 0%; BSV zero breaches at every threshold — with exact binomial (Clopper–Pearson) 95% confidence intervals separating cleanly.
- **Fee predictability underwrites pricing, not occasional bargains.** A CUSUM process-control procedure shows the penny rail's per-transaction fee anchored near $0.01 with only short-lived, mean-reverting noise and no sustained drift; throughput time-series show sustained processing with self-correcting dips and no backlog accumulation.
- **Unit economics decide viability.** A £0.25 article pays 2.5p at a 10% toll or 5p at 20%, versus 1p on a penny rail — an effective 4% share, under the 5% viability line; twelve such articles cost 30p (10%) or 60p (20%) ad valorem versus 12p flat.
- **Aggregation tames tiny tickets.** A 2p API call settled singly at 1p fee is a 50% share, but batching N calls gives share 1 ÷ (2N); staying below 5% requires N > 10, and N = 20 yields 2.5% — enabling honest per-event metering with per-session settlement.
- **The operational blueprint.** Route by economics (prices < £10 to the penny rail unless cards achieve ≤ 5%); session aggregation windows of 1–10 minutes or a ≥ £0.20 floor; signed tamper-evident receipts (receipt_id, txid, payer/payee keys, itemised units, UTC timestamp, digest, merchant signature) with hashes anchored on-chain; compensating micro-refunds and credit-on-account instead of chargeback regimes; one-sided CUSUM monitoring with μ₀ = $0.01, allowance k = $0.002, Sₜ = max(0, Sₜ₋₁ + (xₜ − (μ₀ + k))).
- **Builder guidance.** "Never pay a percent where a penny will do" — let an invisible router choose rails, reuse existing KYC flows, and integrate CRM/fraud/analytics additively via signed receipts. "The conclusion is allocation, not crusade."
