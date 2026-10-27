---
title: "The cost designed into forgetting"
date: 2026-10-24
slug: the-cost-designed-into-forgetting
url: https://craigwright.net/the-cost-designed-into-forgetting
themes: [ai-blockchain, privacy, law-regulation]
---

# The cost designed into forgetting
**Date:** 2026-10-24 | **URL:** https://craigwright.net/the-cost-designed-into-forgetting | **Source:** craigwright.net research article

## Core thesis
The article argues that a request to remove training data arrives after the system has learned from it, and that the work needed to honour the request can depend on decisions made before training began. Institutions choose remedies; engineering determines the operations available to carry them out. Designing a cheaper response, the article says, does not settle the applicable legal obligation, but it can make the cost and limits of that response visible before an organisation commits to a system that is expensive to change.

## Key arguments and claims
- Hypothetical organisation choosing between two learning pipelines that both meet its initial performance requirement. One trains a single model over the whole collection. The other keeps parts of the training process separate enough that a later change can be confined to a smaller part of the system. The article says the initial training bill does not settle which arrangement is cheaper over the service’s life.
- Craig S. Wright (2026), *Training on the tightrope: AI copyright and data privacy as colliding regulatory regimes*, *Computer Law & Security Review*, 61, 106343, DOI 10.1016/j.clsr.2026.106343. The article says that paper examines conflicts between the rights attached to training material and the remedies applied to AI systems, and that this institutional question motivates the engineering question here: how much of the cost of a removal request has already been fixed by the architecture. This commentary is dated 24 October 2026.
- Lucas Bourtoule and colleagues, *Machine Unlearning*, IEEE Symposium on Security and Privacy (2021), pp. 141–159; public author version https://arxiv.org/html/1912.03817v3, especially Sections III–V and VII. The article describes SISA — sharded, isolated, sliced and aggregated — as the paper organises it: data partitioned into disjoint shards, a separate model trained on each, a point’s training influence confined to its constituent model, predictions combined. When a point is removed, the affected model is retrained without it. Slicing adds saved intermediate states so retraining can begin before the slice containing that point. The article records the trade-offs the paper creates: checkpoints require storage, and smaller training partitions can reduce predictive accuracy. It says these classification experiments do not establish a universal speed-up for current foundation models.
- The article says the SISA paper frames unlearning as a counterfactual comparison: the distribution of models after removal should match the distribution obtained by training without the removed point. That, the article says, is a claim about a specified training procedure, rather than a promise that every fact associated with a person will disappear from every possible answer. Hypothetical: two independently supplied records describe the same public event; removing one leaves the other. An evaluation that only asks whether the model can still name the event mixes removing one contribution with suppressing a fact. The target and the comparison need to be written down before the result can be interpreted.
- Varun Gupta and colleagues, *Adaptive Machine Unlearning*, NeurIPS 2021, https://proceedings.neurips.cc/paper/2021/hash/87f7ee4fdb57bdfd52179947211b7ebb-Abstract.html. The article says they show why guarantees for deletion sequences chosen independently of published models need not extend to adaptive sequences. Their work, as the article describes it, includes attacks on SISA in specified image-classification settings and a reduction using differential privacy to support adaptive-deletion guarantees. A person may inspect an answer and then ask for a record to be removed; later requests may respond to the updated system. The article says a guarantee needs to state which requests it covers and what information can influence them, and that a successful isolated removal test cannot establish the behaviour of an entire interactive sequence.
- Proposed comparison, which the article says is not an experiment reported here. Compare complete service arrangements over a common horizon: initial training, saved-state storage, expected removal work, validation and the loss of useful performance, with the request pattern varied, including requests that respond to model outputs. The procurement questions the article lists: what evidence identifies the affected records; which saved state remains suitable; what must be retrained; which outputs are tested; who accepts the resulting assurance. The sources box says the article reports no new experiment or replication, certifies no current model, and offers no determination of legal compliance. Only public research is used.

## How Craig reasons (his model/logic)
The article uses a 2026 legal paper to pose an engineering question, then reads two published unlearning results for what they do and do not transfer: SISA as a way of confining retraining, with storage and accuracy trade-offs, and the NeurIPS 2021 paper as a reason that non-adaptive deletion guarantees need not cover requests that depend on published answers. A short hypothetical separates removal of one record from suppression of a fact. The close is a procurement comparison the article labels as proposed, with the legal obligation left outside what the architecture itself decides.

## Where this contradicts BTC-mainstream logic
The article does not set up an explicit contrast with BTC-mainstream positions.

## Notable quotes
- "A request to remove training data arrives after the system has learned from it."
- "These classification experiments do not establish a universal speed-up for current foundation models."
- "Designing a cheaper response does not settle the applicable legal obligation."

## Connections
The article cites Wright (2026) in the *Computer Law & Security Review*, Bourtoule and colleagues (IEEE S&P 2021) and Gupta and colleagues (NeurIPS 2021). Its related-research link points to `training-data-rights.html` on the same site; that page was not fetched. No file under `summaries/` is cited by this article.

*Summary of the author's own account; claims are his and have not been independently verified.*
