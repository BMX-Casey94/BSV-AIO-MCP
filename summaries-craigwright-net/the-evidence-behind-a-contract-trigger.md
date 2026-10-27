---
title: "The evidence behind a contract trigger"
date: 2026-10-27
slug: the-evidence-behind-a-contract-trigger
url: https://craigwright.net/the-evidence-behind-a-contract-trigger
themes: [script-technical, audit-accounting]
---

# The evidence behind a contract trigger
**Date:** 2026-10-27 | **URL:** https://craigwright.net/the-evidence-behind-a-contract-trigger | **Source:** craigwright.net research article

## Core thesis
The article argues that an automated contract can apply its rules exactly and still act on a mistaken report, so the evidence that starts the action belongs in the design: what was observed, who supplied it, and which other reports depend on the same source. A contractual hierarchy can organise a complicated service; following each trigger back through its evidence is what shows what that organisation can safely automate.

## Key arguments and claims
- Hypothetical supplier, paid when a delivery is confirmed. Three reporting services send signed messages, and the payment rule accepts agreement from any two. The article says all three may obtain their answer from the same warehouse database, so one mistaken delivery entry can arrive with three valid signatures.
- The article presents Craig Wright and Antoaneta Serguieva (2017), *Sustainable blockchain-enabled services: Smart contracts*, *2017 IEEE International Conference on Big Data (Big Data)*, pp. 4255–4264, publisher DOI 10.1109/BigData.2017.8258452, as a starting point. It says a public author manuscript was deposited on 18 June 2018 at https://arxiv.org/abs/1806.10638v1, especially Section II. As the article describes that work: a hierarchy of software agents and cryptographic keys for conditional contracts and subcontracts; a contract model with states, transitions, triggering conditions and where parameters are obtained; agent processes that can monitor on-chain and off-chain information. The building-contract example separates planning and building-standard approvals into stages represented by transactions. The article calls the proposal a design contribution, rather than field validation of an operating service, and says the conference paper is historical research, not a new publication announced in this article.
- Dylan Yaga, Peter Mell, Nik Roby and Karen Scarfone (2018), *Blockchain Technology Overview*, NISTIR 8202, DOI 10.6028/NIST.IR.8202, especially Section 7.3. The article says that section describes a ledger recording sensor readings or human reports without establishing that they match events outside the system: sensors can malfunction, and people can enter false information. For the supplier, it distinguishes goods reaching the specified recipient from a warehouse system marking them dispatched. Both messages could be authentic records; only one may satisfy the agreed payment condition.
- Hypothetical arithmetic, which the article says is not a measured failure rate or a model of every oracle network. Three observers each make a binary classification, each with a ten-per-cent probability of being wrong, errors mutually independent. A majority is wrong when exactly two are wrong or all three are wrong: *3 × 0.1² × 0.9 + 0.1³ = 0.028*, or 2.8 per cent. If three otherwise perfect reporting services all repeat one upstream classification that is wrong ten per cent of the time, their majority is wrong ten per cent of the time. The article says adding reporting services has not reduced that common-source error, and that distinct signing keys and separate service names do not establish independent observations.
- W3C (2013), *PROV Model Primer*, Working Group Note, 30 April 2013, https://www.w3.org/TR/prov-primer/, especially Sections 2 and 3. The article says it distinguishes entities, the activities that use or produce them, and the agents responsible, and that derivation connects a later report to the material from which it was produced. Applied to the delivery example, the article would retain the original observation, the collecting service, the processing steps, the resulting report and the rule version that consumed it, and would keep observation time, report time and action time separate. It says a newly signed report could still describe an old event or a different consignment, and that a provenance description is evidence about a production process whose underlying observation still has to be checked.
- A proposed evaluation, which the article says is a test plan, not a report of experiments already performed. Hold the payment rule fixed and vary the evidence: independent observations, several reports copied from one source, a delayed message, a duplicate, an identifier mismatch, conflicting observations and a missing report. Specify the expected response beforehand: proceed, wait, reject or refer the case for review. Record incorrect releases, unnecessary holds, time to resolution and the work required to resolve an exception, and identify who can correct an input and who authorises a subsequent action. The sources box says the article reports no new experiment, operational deployment or measured failure rate, and does not certify a particular oracle service.

## How Craig reasons (his model/logic)
The article moves from a hypothetical in which several valid signatures share one upstream record, to a 2017 design paper for the contract hierarchy, to NISTIR 8202 for the gap between a ledger entry and an outside event, to a small probability comparison that isolates independent error from common-source error, and then to the W3C PROV vocabulary for the route from observation to action. It closes with a test plan whose expected responses are fixed before the cases, and it labels the figures and the evaluation as explanatory rather than measured.

## Where this contradicts BTC-mainstream logic
The article does not set up an explicit contrast with BTC-mainstream positions.

## Notable quotes
- "An automated contract can apply its rules exactly and still act on a mistaken report."
- "Distinct signing keys and separate service names do not establish independent observations."
- "A provenance description is evidence about a production process; assessing the underlying observation remains part of the work."

## Connections
The article cites Wright and Serguieva (2017), NISTIR 8202 and the W3C *PROV Model Primer* (2013). Its related-research link points to `who-can-change-the-rules.html` on the same site; that page was not fetched. No file under `summaries/` is cited by this article.

*Summary of the author's own account; claims are his and have not been independently verified.*
