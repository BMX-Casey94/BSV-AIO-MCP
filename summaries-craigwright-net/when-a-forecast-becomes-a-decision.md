---
title: "When a forecast becomes a decision"
date: 2026-10-13
slug: when-a-forecast-becomes-a-decision
url: https://craigwright.net/when-a-forecast-becomes-a-decision
themes: [research-article]
---

# When a forecast becomes a decision
**Date:** 2026-10-13 | **URL:** https://craigwright.net/when-a-forecast-becomes-a-decision | **Source:** craigwright.net research article

## Core thesis
The article argues that a forecast can move closer to the observed outcome and still lead to a more expensive action. What can be done, what it costs, and where a small error changes the choice determine whether the closer number is the better decision. Prediction error and payoff, in the example it builds, need not rank forecasts the same way.

## Key arguments and claims
- The research source is Craig S. Wright (2026), *Utility-Weighted Forecasting and Calibration for Risk-Adjusted Decisions under Trading Frictions*, public preprint arXiv:2601.07852v1, submitted 9 January 2026. The article says the preprint treats a predictive distribution as an input to an objective, trading costs and a set of permitted positions, and evaluates the resulting decision after implementation costs. It says the public record identifies this version as a preprint, and that this article adds no replication result or claim of general profitability.
- The worked case is described as deliberately simplified and hypothetical. There are two choices: take one fixed-size position for one period, or do nothing. Opening and closing the position costs a total of 10 basis points, measured against its value. The article defines one basis point as one-hundredth of a percentage point, and says every other cost and risk is ignored for the illustration. Forecast A predicts a gross return of 11 basis points. Forecast B predicts 5. A fixed rule takes the position only when the predicted gross return exceeds the 10-basis-point cost, so A triggers a trade and B leaves the position unopened.
- Suppose, the article says, the realised gross return is 9 basis points. A misses by 2 and B by 4, so A has the lower squared prediction error: 4 against 16. A's position returns minus 1 basis point after costs. B's decision returns zero. The prediction-error ranking and the realised-payoff ranking disagree. The article says the example establishes no forecasting strategy and estimates no market effect. If the cost is changed to 4 basis points, both forecasts trigger the same position. With the original cost, an error near the trading threshold changes the action; elsewhere, a larger numerical error may leave the action untouched.
- Tilmann Gneiting's work on point forecasts, linked at https://arxiv.org/abs/0912.0902, is cited for the claim that a forecast request and its scoring rule need to agree. Asking for a mean, a median or a particular quantile defines different tasks. An evaluation can mislead when it substitutes one target for another.
- Adam Elmachtoub and Paul Grigas's Smart Predict-then-Optimize framework, linked at https://arxiv.org/abs/1710.08005, is described as carrying the connection into optimisation. Its decision loss measures the consequence of the choice induced by a prediction. The objective and constraints therefore help determine how prediction models are trained and compared.
- The preprint, as the article describes it, proposes a calibration step between the forecast and the optimiser. It weights probability errors by their significance for the specified decision, including the effects of costs and binding constraints. The theoretical comparison depends on stated assumptions about the objective, costs and feasible choices, and does not establish an unconditional advantage for every recalibration. The empirical section uses a December 2025 evaluation window. The article says the reported improvements concern the methods and conditions studied, and that the paper calls for evaluation across further months and regimes. It does not state a figure for those improvements on this page.
- A follow-on comparison, which the article does not report as done, could publish a decision ledger beside the forecast scores: the information available, the prediction, the rule applied, the action selected and the cost charged. The simple check suggested by the hypothetical is to move the cost threshold while holding the forecasts and outcomes fixed, and to record when the ranking changes. That exercise, the article says, would examine sensitivity to an assumption and would not create additional observed market data. The sources note says the numerical example is illustrative.

## How Craig reasons (his model/logic)
The article builds a two-action case in which squared error and net payoff rank the same two forecasts in opposite orders, then uses that boundary to say what a score has to match. Gneiting supplies the point-forecast warning. Elmachtoub and Grigas supply a decision loss. The author's preprint is described as a calibration weighted by the decision, with the advantage conditional on stated assumptions, a December 2025 window, and a call for further regimes. The page adds no replication. The last proposal is a ledger that would show where two methods actually chose differently.

## Where this contradicts BTC-mainstream logic
The article does not set up an explicit contrast with BTC-mainstream positions.

## Notable quotes
- "A forecast can move closer to the observed outcome while leading to a more expensive action."
- "The prediction-error ranking and the realised-payoff ranking disagree."
- "Asking for a mean, a median or a particular quantile defines different tasks."

## Connections
The article cites its preprint arXiv:2601.07852v1, Gneiting's work on point forecasts (arXiv:0912.0902) and Elmachtoub and Grigas's Smart Predict-then-Optimize framework (arXiv:1710.08005). No summarised essay in the repo was cited by the page. CORPUS.md lists, outside the summarised set, "Calibration That Pays: Why Forecast “Accuracy” Fails Once Trading Costs Exist", described there as an S&P 500 forecasting study. This article does not cite that post.

*Summary of the author's own account; claims are his and have not been independently verified.*
