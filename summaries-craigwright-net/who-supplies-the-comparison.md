---
title: "Who supplies the comparison?"
date: 2026-10-14
slug: who-supplies-the-comparison
url: https://craigwright.net/who-supplies-the-comparison
themes: [research-article]
---

# Who supplies the comparison?
**Date:** 2026-10-14 | **URL:** https://craigwright.net/who-supplies-the-comparison | **Source:** craigwright.net research article

## Core thesis
The article argues that a before-and-after chart of staggered policy adoption is intelligible only once the reader knows who supplies each comparison and whose experience each point represents. Adoption timing, regression weights and assumptions about untreated outcomes are treated as part of the result. The article says the comparison is part of the evidence.

## Key arguments and claims
- The research source is Craig S. Wright (2026), *Design-Robust Event-Study Estimation under Staggered Adoption: Diagnostics, Sensitivity, and Orthogonalisation*, public preprint arXiv:2601.18801v1. The article says the repository records submission on 14 January 2026. It says the preprint examines the relationship between adoption timing, regression weights and sensitivity to assumptions about untreated outcomes. It says this page explains the methodological questions and the literature the preprint builds on, and that it reports no new policy-effect estimate or independent replication. The public source is identified as a preprint.
- The running example is hypothetical: a programme introduced in one group of regions in 2020 and another in 2022. In 2022, the article says, the later group has just entered while the earlier group has already experienced the programme for two years, so one calendar year contains different stages of exposure. An event-study chart reorganises observations around time since adoption. A first-year point might combine both groups from different calendar years. A third-year point needs a longer follow-up and may have fewer groups available.
- Liyang Sun and Sarah Abraham's research, linked at https://arxiv.org/abs/1804.05785, is cited for why conventional two-way fixed-effects event-study coefficients need care when adoption dates and treatment effects differ. The article says a coefficient labelled for one relative time can contain contributions from effects at other relative times, and that apparent differences before adoption can arise from heterogeneous treatment effects elsewhere in the design. Using an already-exposed group as part of the comparison can bring its evolving programme effect into the estimate for a newly exposed group. Removing permanent regional differences and common calendar shocks does not, the article says, by itself make that comparison an untreated benchmark. More observations can estimate the regression's mixture more precisely without turning it into the particular policy effect the reader expects.
- Brantly Callaway and Pedro H. C. Sant'Anna, linked at https://arxiv.org/abs/1803.09015, are described as developing a framework that starts with effects for an adoption group at a particular time. Under the relevant assumptions, comparisons use suitable never-treated or not-yet-treated observations, and those group-time effects can be combined to answer different questions.
- A constructed example, which the article says uses invented values and is not a finding from the preprint, supposes the early group has an effect of 2 units at every observed post-adoption horizon and the later group has an effect of 6. An equally weighted first-year average is 4. If the dataset ends before the later group reaches its third year, the available third-year average is 2. The plotted average has fallen although neither group's effect has changed. The article says reporting which groups contribute at each horizon, or comparing a common set where feasible, makes that composition visible, and that restricting the sample changes whose experience the estimate describes.
- Ashesh Rambachan and Jonathan Roth, linked from the article to https://jonathandroth.github.io/assets/files/HonestParallelTrends_Main.pdf, are described as developing inference that allows specified departures from parallel trends. The article says their approach asks what remains learnable when post-adoption differences in untreated trends are restricted relative to earlier differences, or constrained in how smoothly they change, and that the restrictions require substantive justification. Varying them produces a sensitivity analysis. The resulting uncertainty, it says, reflects both noisy estimates and limits on identifying the causal effect under the chosen assumptions. A quiet-looking pre-adoption chart cannot establish the later path of the unobserved untreated outcomes.
- The preprint, as this article describes it, brings these concerns into a reporting framework, including diagnostics for negative weights and contributions from other event times, and methods designed to reduce sensitivity to errors in estimated auxiliary models when conditioning on observed characteristics. The practical output it names is a chart that presents adoption groups, eligible comparisons, aggregation weights and sensitivity assumptions alongside the estimated effects. The sources note says the numerical example is constructed for this article.

## How Craig reasons (his model/logic)
The article keeps calendar time and time-since-adoption in view at once, then asks what a named coefficient is actually averaging. Sun and Abraham supply the warning about mixtures across relative times. Callaway and Sant'Anna supply group-time effects and a choice of comparison group. A toy pair of constant effects, 2 and 6, is used to show a falling average that comes from who is still observed. Rambachan and Roth supply a way to vary the parallel-trends restriction rather than treat a flat pre-period as proof of the counterfactual. The preprint is then described as a reporting framework, and is left as a preprint with no new policy estimate on this page.

## Where this contradicts BTC-mainstream logic
The article does not set up an explicit contrast with BTC-mainstream positions.

## Notable quotes
- "The comparison is part of the evidence."
- "A quiet-looking pre-adoption chart cannot establish their later path."
- "Before asking why an effect grows or fades, establish that the plotted points are answering the intended question."

## Connections
The article cites its preprint arXiv:2601.18801v1, Sun and Abraham (arXiv:1804.05785), Callaway and Sant'Anna (arXiv:1803.09015), and a paper by Rambachan and Roth linked from the page. No matching essay was found in the repo corpus.

*Summary of the author's own account; claims are his and have not been independently verified.*
