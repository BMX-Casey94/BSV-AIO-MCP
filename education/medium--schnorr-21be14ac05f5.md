---
title: "Schnorr"
date: 2019-03-03
era: medium
slug: schnorr-21be14ac05f5
themes: [privacy, law-regulation, lightning-l2, btc-critique]
source: summaries-medium/schnorr-21be14ac05f5.md
---

# Schnorr — core principles

- **Privacy is not anonymity.** Private communications are "utterly different to anonymous communications": privacy supports trade because it is "linked to an ability to seek redress against another party"; anonymity severs redress and reputation.
- **Bitcoin already delivers legitimate privacy.** Used correctly — no key reuse, threshold ECDSA — the original system supplies all the privacy lawful trade requires. Anonymity is "the enemy of any cryptographic monetary system."
- **Anonymous coins cannot serve lawful trade.** "A contract to engage in an illegal or criminal activity is void ab initio." Dark-web markets cannot form enforceable contracts.
- **Money under law is necessarily traceable.** Source-of-wealth legislation means funds without demonstrable origin "can be taken in many instances"; mixer users who lose source and destination keys cannot validate ownership.
- **Threshold ECDSA already covers key backup.** Dealer-less key splitting achieves what Schnorr is marketed for — e.g. a corporate voting key split among eight board members requiring six to reconstruct. Schnorr aggregation (P(joint) = P(Alice) + P(Bob)) is an end-to-end scheme, not a 2-of-3 threshold, and Alice cannot tell whether Bob is one party or many.
- **Only a natural person can sign.** "A company cannot sign, and a machine or an agent cannot sign." EDI systems handled this with binding master contracts; no signature scheme changes that legal reality.
- **Record-keeping cannot be designed away.** The Bank Secrecy Act mandates records; "the mere act of deleting them is enough to make their system illegal." Promissory-note structures (as in Lightning hubs) attract those obligations.
- **Miners must be paid by competitive on-chain fees.** A viable marginal cost is "around 0.005 USD a transaction — no more," scaling to thousands of transactions per second at about a tenth of a cent — "or the miners will leave the chain." Removing profit from miners is how a chain dies.
