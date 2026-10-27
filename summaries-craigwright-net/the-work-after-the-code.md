---
title: "The work after the code"
date: 2026-10-11
slug: the-work-after-the-code
url: https://craigwright.net/the-work-after-the-code
themes: [security-economics]
---

# The work after the code
**Date:** 2026-10-11 | **URL:** https://craigwright.net/the-work-after-the-code | **Source:** craigwright.net research article

## Core thesis
The article argues that software work continues after the first implementation, and that testing, repair and the changes introduced by repair belong in the cost of delivering a dependable capability. It draws on a 2011 conference paper with Tanveer Zia that examines development and maintenance together, starting from the use of code volume as a measure of productive output. The page keeps the historical sample separate from a proposed contemporary comparison, and states that the hypothetical comparison and the proposed follow-on design are explanatory commentary.

## Key arguments and claims
- The hypothetical comparison is between two ways of implementing the same requirement. One produces a working demonstration quickly but needs repeated corrections. The other takes longer initially and requires less subsequent repair. The article says a comparison that stops at the demonstration cannot establish which approach used fewer resources to deliver a dependable result.
- The measurement boundary it argues for includes the time spent understanding a failure, reproducing it, changing the implementation and checking the result, plus documentation and handover. Otherwise, an apparent gain in one stage can be a transfer of work to another person or a later budget.
- The public manuscript, as the article describes it, covers 277 coding projects across 15 companies, with observations collected between June 2008 and December 2010. It records coding and debugging hours separately, together with code size and defects observed initially and through later patches. The projects involved in-house development in financial services, media and web development. The page says the study description draws on Section 2 of the public manuscript.
- The study is said to report that repairs could introduce further defects, creating additional rounds of work, and to examine the rising effort required to find additional bugs. Those observations are said to motivate an economic question about the full development cycle. Their reported rates and cost relationships are said to belong to the historical sample; using them for another organisation requires fresh evidence.
- A useful repair record, in the article’s account, connects a reported failure to a specific change and a check that can detect the failure, and identifies which neighbouring behaviours were examined. Closing an issue then has an evidential meaning: another person can see what was corrected and how the result was checked.
- NIST’s Secure Software Development Framework, version 1.1, published in 2022, is cited as a complementary set of practices. The page links to the NIST publication at the SP 800-218 final page. PW.7 is said to address source-code review and analysis. PW.8 is said to address executable-code testing, including the recording and triage of findings. RV.3 is said to add investigation of root causes and changes intended to reduce recurrence. The article says these practices help organise the work and do not supply a universal defect rate or a fixed number of testing hours. Their economic evaluation still needs a defined system, a stated testing scope and evidence about the consequences of failure. The sources note calls the NIST framework a separate methodological reference.
- A follow-on study could compare development methods against the same requirements and observe each through a declared maintenance period. It could record implementation, review and repair effort; distinguish defects by consequence; and track which changes created regressions. Differences in project difficulty and team experience would need to be accounted for. The observation period should remain visible: a defect discovered after the measurement closes can change the apparent cost of an earlier release, and a method that finds more faults before delivery may have supplied better evidence rather than produced worse software.
- The page states that this is a proposed comparison, not a report of new experimental findings, and that the question it carries forward is what resources were required to deliver and sustain the intended behaviour.
- Bibliographic claim on the page: Craig S. Wright and Tanveer A. Zia (2011), *A Quantitative Analysis into the Economics of Correcting Software Bugs*, in *Computational Intelligence in Security for Information Systems*, CISIS 2011, Lecture Notes in Computer Science 6694, pp. 198–205, described as a published conference paper, with DOI 10.1007/978-3-642-21323-6_25. The page also links an author-uploaded public manuscript. This research article was published on 11 October 2026.

## How Craig reasons (his model/logic)
He defines the productive result as a dependable capability sustained through a visible horizon, then refuses to stop the account at a working demonstration or at code volume. Hours, defects, patches and handover sit inside the measurement; the 2008–2010 rates stay inside that sample; and the NIST practices are treated as a way to organise review, testing and root-cause work, without being converted into a universal defect rate. The proposed comparison is specified so that regressions, project difficulty and faults found before delivery remain distinguishable in the result. The page marks that comparison as commentary, not as a new experiment.

## Where this contradicts BTC-mainstream logic
The article does not set up an explicit contrast with BTC-mainstream positions.

## Notable quotes
- "A comparison that stops at the demonstration cannot establish which approach used fewer resources to deliver a dependable result."
- "Their reported rates and cost relationships belong to the historical sample; using them for another organisation requires fresh evidence."
- "A defect discovered after the measurement closes can change the apparent cost of an earlier release."

## Connections
The article cites Wright and Zia (2011) and NIST’s Secure Software Development Framework, version 1.1 (2022). No summary card for that paper, or for this essay’s subject, was found in the local corpus. The page’s related links are sections of the site index (computing and security, economics and innovation, mathematics and formal methods), not other articles.

*Summary of the author's own account; claims are his and have not been independently verified.*
