---
title: 'Why is Bitcoin Open Source?'
date: 2018-09-26
slug: why-is-bitcoin-open-source-196273d1712b
url: https://medium.com/@craig_10243/why-is-bitcoin-open-source-196273d1712b
themes: [security-economics, protocol-immutability, btc-critique]
---

# Why is Bitcoin Open Source?
**Date:** 2018-09-26 | **URL:** https://medium.com/@craig_10243/why-is-bitcoin-open-source-196273d1712b
**Subtitle:** To an extent all software is a black-box. As a consequence, the quote listed as the title is commonly made, but problematic. It may be…

## Core thesis
Bitcoin is open source not because openness guarantees security — no software state can ever be fully known — but because Bitcoin is money, and money requires trust that "there is nothing hidden". Security is always relative risk priced in economic terms, so the design goal is a simple, fixed protocol built on Saltzer and Schroeder's protection maxims, with all complexity pushed up into Script. The conclusion: "It is locking the original protocol (as closely as we can) and building that will allow Bitcoin to be cash and scale."

## Key arguments and claims
- "To an extent all software is a black box": the claim that Bitcoin must be open source to "free us from government" is "false and problematic"; openness adds no security value, only trust value, since "Bitcoin is money. The most critical aspect of money is trust."
- Software analysis "is an NP-infeasible problem. Turing and then Dijkstra demonstrated proofs that the state of a system can never be fully known" — so open code yields only "a lower cost of testing and rectification", not assurance (Popper invoked on the impossibility of absolute knowledge).
- Bitcoin's actual achievement is narrow: "The main problem Bitcoin solved is double spending", via "a competitive system" whose global nature blocks the regulatory capture that lets incumbents in ordinary capitalist systems suppress competition.
- Protocol versus software: "It is not the protocol that needs to be tweaked, it is the software. The protocol is simple." Extension belongs "in script. A script that is a predicate and which can be seen to always end."
- DoS is not a design criterion: "Hit any system with a sustained attack from 1,000,000,000 bots, and it goes down. End of story" — what matters is evidence creation and minimising long-term risk.
- Saltzer and Schroeder's 1975 "The Protection of Information in Computer Systems" (Proc. IEEE) supplies eight design maxims — economy of mechanism, fail-safe defaults, complete mediation, open design, separation of privilege, least privilege, least common mechanism, psychological acceptability — which Craig calls "the fundamentals of how Bitcoin has been designed".
- Point 8, psychological acceptability, "is commonly overlooked": unusable security gets bypassed, and "In Bitcoin Core, the developers never came to understand user acceptance."
- "Absolute security does not exist, nor can it be achieved": the goal is that "the economic constraints placed upon the attacker exceed the perceived benefits", citing Aycock (2006)'s six factors for measuring relative security.
- Security is framed comparatively, not absolutely: the question is not "am I secure?" but "am I more secure than my neighbour?" (Wright & Zia, 2011), because "attackers are rational economic actors" who maximise gain and minimise risk.

## How Craig reasons (his model/logic)
The argument is built from classic security-engineering authority: Saltzer and Schroeder's maxims are quoted wholesale as a checklist Bitcoin satisfies, Aycock's six factors provide the measurement frame, and Craig cites his own published work (crystal-box testing papers; Wright & Zia 2011) as the theoretical base. Epistemically it is Popperian — absolute knowledge and absolute security are both unattainable, so only relative, economically-priced risk exists — and the rhetorical mode is corrective, stripping open-source ideology down to a trust mechanism for money.

## Where this contradicts BTC-mainstream logic
- Demotes open source from a security guarantee to a trust signal: "Even in the face of open-source code, software is not evaluated" — against the "don't trust, verify" ethos.
- Separates protocol from implementation and demands the protocol be frozen ("locking the original protocol"), opposing BTC's continuous soft-fork development model.
- Locates extensibility in Script predicates rather than in protocol changes or layer-2 networks, contradicting both Core's roadmap and Lightning-style scaling.
- Accuses Bitcoin Core developers of failing "psychological acceptability" — blaming BTC's poor UX on a violated security maxim rather than on necessary trade-offs.
- Recasts security as relative economic deterrence ("am I more secure than my neighbour?"), rejecting the absolute-security rhetoric common in crypto ("unhackable", "trustless").

## Notable quotes
- "It is not the protocol that needs to be tweaked, it is the software. The protocol is simple."
- "There is always a way to DoS a system... Hit any system with a sustained attack from 1,000,000,000 bots, and it goes down. End of story."
- "In Bitcoin Core, the developers never came to understand user acceptance."
- "Absolute security does not exist, nor can it be achieved."
- "The question is not, 'am I secure?'... but rather, 'am I more secure than my neighbour?'"
- "Bitcoin is designed to be simple, open, and safe. In this, it can be trusted. It is cash."

## Connections
Direct continuation of "Simplicity in Bitcoin" (previous day), now grounded in Saltzer & Schroeder (1975). Cites Craig's own academic output — his crystal-box testing papers and Wright & Zia (2011) on attacker economics — and links a CoinDesk article on Bitcoin code-review failures. The "lock the protocol" conclusion is the security-theoretic statement of the protocol-immutability doctrine later central to BSV.
