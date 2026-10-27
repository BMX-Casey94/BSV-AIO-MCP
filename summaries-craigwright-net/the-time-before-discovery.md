---
title: "The time before discovery"
date: 2026-10-10
slug: the-time-before-discovery
url: https://craigwright.net/the-time-before-discovery
themes: [audit-accounting, security-economics]
---

# The time before discovery
**Date:** 2026-10-10 | **URL:** https://craigwright.net/the-time-before-discovery | **Source:** craigwright.net research article

## Core thesis
The article argues that a security review records when a problem becomes visible, that the problem may have begun much earlier, and that this gap affects what an organisation can learn from its records, how it compares controls, and where it should spend its next unit of audit effort. It draws on work with Tanveer Zia that puts the observation process into the security model. The page says the public university record dates the conference publication to 2012, and that the examples and practical interpretation in the article are explanatory commentary.

## Key arguments and claims
- The hypothetical: a server is checked on Monday and a compromise is found on Friday. If Monday’s check reliably established that the server was uncompromised, the incident began somewhere in that interval. Friday supplies a discovery time. Further evidence is needed to locate the incident itself. If Monday’s check could have missed an existing compromise, even that lower boundary is uncertain.
- A log of completed inspections, the article says, needs the scope and sensitivity of each inspection alongside its date. Otherwise, two organisations with identical underlying exposure can appear different simply because one looks more often or looks more effectively.
- The article cites the NIST statistical handbook, linking to its discussion of censoring, for the claim that an exact event time, an interval containing the event, and a period ending without an observed failure contain different information, and that censoring methods retain those distinctions when estimating failure behaviour.
- The relevant endpoint must still be defined. Time without a detected compromise is said to measure something different from time known to be uncompromised. Treating the former as the latter adds an assumption about detection. An analyst should state that assumption and examine how results change when it is weakened.
- The 2012 paper, as the article describes it, combines hazard and recurrent-event methods with a susceptible–infected–removed model. It relates detection to the audit sample, the interval between reviews and the spread of compromise across hosts. One stated assumption is that an infected host will be identified if it is inspected.
- The analysis also considers false negatives caused by sampling and compares fixed with varying audit intervals. Audit costs and organisational constraints enter the choice; effort need not scale proportionally with the number of hosts reviewed. The article calls these conditional modelling tools, rather than a measured universal audit schedule.
- The page links the phrase “public manuscript record” to an SSRN record (abstract_id=3442169) and says that record identifies the earlier 2011 text. It does not give a DOI for the 2012 conference paper. The bibliographic line is: Craig Wright and Tanveer Zia (2012), *Modeling system audit as a sequential test with discovery as a failure time endpoint*, described as a published conference paper, with a link to a university publication record. Methods discussed can also be read in a publicly available manuscript linked from the page.
- The wider programme is placed in the author’s 2017 doctoral thesis, *The Quantification of Information Systems Risk*, linked from a university publications page. The article says the published abstract describes an integrated treatment of human, software and system risks, combining statistical and game-theoretic approaches, and that it connects system design and misconfiguration with survival modelling, resource allocation and the distribution of costs and liability.
- A security budget, in this account, buys several different things: reduced exposure, better observation and faster response. A review that finds more incidents may have improved detection. A fall in recorded incidents may reflect prevention, a change in what is inspected, or a loss of visibility. Counts alone cannot choose between those explanations.
- A useful evaluation would preserve inspection dates, sampled hosts, detection methods and subsequent interventions; record changes in the population being monitored; and distinguish observed outcomes from reconstructed incident times. Where detection is imperfect, that uncertainty belongs in the comparison. The historical research is called a starting framework. Applying it to a present-day environment requires current evidence about that environment and validation of the selected model. The practical question stated is how much additional risk reduction or useful information an extra review buys, given what the organisation can actually observe and change.
- The page’s publication date is 10 October 2026.

## How Craig reasons (his model/logic)
He treats the date a review records as a discovery time, and he asks what the inspection was able to see before that date. Distinctions from reliability analysis — an exact time, an interval, and a period with no observed failure — are used so that audit frequency and sensitivity stay inside the estimate. The hazard, recurrent-event and susceptible–infected–removed account is then read as a conditional tool, including the stated assumption that an inspected infected host will be identified. The 2017 thesis is brought in to connect those measurements to a budget that may be buying prevention, observation or response, which recorded counts alone cannot separate. The close lists what a present comparison would have to preserve, and the page marks the practical reading as commentary.

## Where this contradicts BTC-mainstream logic
The article does not set up an explicit contrast with BTC-mainstream positions.

## Notable quotes
- "Friday supplies a discovery time."
- "Time without a detected compromise measures something different from time known to be uncompromised."
- "Counts alone cannot choose between those explanations."

## Connections
The article cites the 2012 conference paper with Tanveer Zia, an earlier 2011 text identified on the linked manuscript record, the NIST statistical handbook’s censoring discussion, and the 2017 thesis *The Quantification of Information Systems Risk*. No summary card for those items was found in the local corpus. The page’s related links are sections of the site index (computing and security, mathematics and formal methods, governance and accountability), not other articles.

*Summary of the author's own account; claims are his and have not been independently verified.*
