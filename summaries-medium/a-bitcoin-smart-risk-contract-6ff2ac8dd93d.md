---
title: 'A Bitcoin Smart Risk Contract'
date: 2018-10-30
slug: a-bitcoin-smart-risk-contract-6ff2ac8dd93d
url: https://medium.com/@craig_10243/a-bitcoin-smart-risk-contract-6ff2ac8dd93d
themes: [security-economics, law-regulation, audit-accounting]
---

# A Bitcoin Smart Risk Contract
**Date:** 2018-10-30 | **URL:** https://medium.com/@craig_10243/a-bitcoin-smart-risk-contract-6ff2ac8dd93d
**Subtitle:** In economic terms, we want to assign liability such that the optimal damage mitigation strategy occurs. The victim of a breach will…

## Core thesis
Despite its title, the body is a law-and-economics treatment of software-vendor liability rather than anything Bitcoin-specific: liability should be assigned so that the party best placed to mitigate damage bears the cost, which Wright identifies with the legal doctrine of avoidable consequences ("marginal costs liability"). Because bug-free software is provably impossible, optimal security is a trade-off best discovered by markets — including a market for vulnerabilities — and "risk-based contracts" let consumers price the features-versus-security trade-off. The Bitcoin connection is left implicit: these contracts are the frame for pricing risk in Bitcoin software and systems. The text is plainly a repost of older blog material, with every footnote linking to a 2015 archive of his blogger.com site.

## Key arguments and claims
- The optimal liability rule is the doctrine of avoidable consequences: "The rule that creates the best incentives for both parties is the doctrine of avoidable consequences (marginal costs liability)." The breaching party is never liable for damage the victim could have mitigated.
- Users carry pre-breach duties: they have "an obligation to install and maintain the system in a secure state", and because systems combine several vendors' products, "no single software vendor can account for all possible combinations and interactions".
- Mitigation options divide between the parties: vendor-side protective controls (firewalls), user-side controls, vendor accounting/tracking functions, more testers, and additional controls.
- Security effort is priced into software: more vendor testing raises the consumer price; large vendors (Microsoft Windows) can spread incremental costs across millions of users, while small niche vendors (his example: hotel accounting software) cannot.
- Vendors are disciplined by reputation even without liability: accumulated vulnerabilities impose a reputational cost, and reputation has real accounting value as "good will" in business and capital transactions.
- Buyers are assumed rational: users "will incorporate the costs of patching their systems into the purchase price", so even vendors with low vulnerability rates are charged for the expected patching burden.
- Perfect software is impossible: "Gödel, Turning, and Distraka [Dijkstra] demonstrated that it is not possible to prove that a software product is bug free." Vendor testing therefore fits a hazard model, claimed to be Poisson-distributed, balanced against reputation.
- A market for vulnerabilities sets the efficient testing level: vendors buy bugs from specialist researchers and extend in-house testing "until the cost of their testing exceeds the cost of purchasing the vulnerability".
- The vulnerability market doubles as "an efficient transaction process for the assignment of negligence costs" — the user maintains optimal controls (patching frequency, configuration) while the vendor pays the optimal level for testing and mitigation.
- Conclusion: "In creating risk-based contracts, we allow the market to determine the optimal price for risks in software", so hazards can be modelled, expensed, and weighed against features.

## How Craig reasons (his model/logic)
Wright argues in the Posner/Coase law-and-economics register: identify the party with the cheapest avoidance cost, assign liability there, and let marginal analysis and markets do the rest. He fuses doctrinal legal concepts (avoidable consequences, negligence) with economic modelling (hazard functions, Poisson distributions, rational-purchaser assumptions) and accounting notions (goodwill). The mode is academic-paper style with numbered footnotes — but the apparatus is thin, with most notes resolving to the same archived blogger.com post, marking this as recycled pre-2015 material.

## Where this contradicts BTC-mainstream logic
- Contradicts the "code is law", liability-free ethos of open-source crypto development: Wright insists both vendors and users bear priced, legally cognisable duties of mitigation, and that negligence costs can and should be assigned.
- Contradicts formal-verification optimism (the claim that smart contracts or protocols can be proven correct): bug-free software is mathematically unprovable, so security is always an economic trade-off, never a solved problem.
- Contradicts the "disclaimer culture" of crypto software (all risk on the user): vendors face reputational and market-priced consequences, and users who fail to patch forfeit claims — responsibility runs on both sides.
- No direct engagement with BTC monetary or scaling orthodoxy; the essay's target is software-risk allocation generally, with "Bitcoin" doing little work beyond the title.

## Notable quotes
- "The rule that creates the best incentives for both parties is the doctrine of avoidable consequences (marginal costs liability)."
- "Gödel, Turning, and Distraka demonstrated that it is not possible to prove that a software product is bug free."
- "The vendor will continue to increase the amount of testing that they conduct, until the cost of their testing exceeds the cost of purchasing the vulnerability."
- "The vendor should not be liable for avoidable consequences."
- "In creating risk-based contracts, we allow the market to determine the optimal price for risks in software."

## Connections
A repost of older material from his personal blog (all footnotes link to November 2015 blogger.com archives), part of his long-running security-economics strand alongside "A diatribe on Bitcoin, trust and the economy of security". The vulnerability-market argument anticipates his later advocacy of bug bounties and priced security on BSV, and the efficient-liability framing recurs in his law-and-economics essays of late 2018.
