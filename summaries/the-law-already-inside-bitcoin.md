---
title: "The Law Already Inside Bitcoin"
date: 2026-03-17
slug: the-law-already-inside-bitcoin
url: https://singulargrit.substack.com/p/the-law-already-inside-bitcoin
themes: [security-economics, mining-consensus, law-regulation]
---

# The Law Already Inside Bitcoin
**Date:** 2026-03-17 | **URL:** https://singulargrit.substack.com/p/the-law-already-inside-bitcoin
**Subtitle:** A story of Legal Deterrence in ‘Permissionless’ Consensus

## Core thesis
The standard story — Bitcoin replaces trust in institutions with trust in mathematics, and law is external to security — is a fairy tale once real money is at stake. The economists' flow-cost model of double-spend security is mathematically correct only under the assumption of a legally untouchable attacker, and that assumption is factually wrong for every economically significant transaction: industrial mining pools are identifiable, capital-committed and jurisdictionally reachable, so legal deterrence and capital-destruction risk already backstop Bitcoin's security for large transactions.

## Key arguments and claims
- The rigorous economic critique holds that proof-of-work security is a flow-cost problem: the network must continuously spend enough to make attack unprofitable, proportional to value at risk. The load-bearing phrase is "with no rule of law" — the attacker is modelled as anonymous and consequence-free, which describes a hypothetical the industry left behind a decade ago.
- Mining is an identifiable oligopoly: as of March 2026 the five largest pools control over 70% of hashrate; Foundry USA (a Digital Currency Group subsidiary) and AntPool together account for nearly half; MARA Pool's operator MARA Holdings is NASDAQ-listed with 400,000 disclosed rigs, 53 exahashes per second and a Bitcoin treasury above four billion dollars.
- Jurisdictional concentration makes miners legible: U.S.-linked pools hold about 42% of hashrate, China-linked pools about 41%, and less than 2% of hashrate comes from pools that cannot be publicly identified via coinbase tags, corporate filings or disclosed operators.
- A majority attack at today's scale requires controlling more than 400 exahashes per second sustained — feasible only through the pool layer — and coinbase tags identify the attacking pool, while the defrauded counterparty (an exchange with counsel, insurance and regulatory relationships) is exactly who the pool depends on for fiat monetisation.
- The enforcer participation constraint: legal irrelevance does not scale with transaction value, it scales against it. Below a threshold — somewhere in the low single-digit millions — legal action costs more than recovery; above it, a double spend is wire fraud and computer fraud that prosecutors, insurers and exchanges pursue. Rough calibration: Binance paid $4.3 billion to the DOJ, FinCEN and OFAC; FTX and Alameda settled with the CFTC for $12.7 billion; BitMEX for $100 million — all for compliance failures, less serious than deliberate fraud.
- Pooled attacks are structurally fragile: contributed hash is mercenary and mobile. A hidden attack degrades payout quality (lower payouts, higher variance, more stale shares), so contributors leave without even detecting the attack; once detection occurs, exit accelerates to avoid taint. Simulations show a pool starting at 31% of hashrate can lose most contributed hash within hours, converging to its small proprietary base.
- A failed attack loses everything spent on the secret chain: honest miners need do nothing special — the longest-chain rule is itself the exclusion mechanism, and the attacker must sustain extraordinary effort while its coalition bleeds members.
- Capital specificity converts security from a flow-cost to a stock-cost problem: a Bitcoin ASIC computes SHA-256 and nothing else — excluded from Bitcoin mining it is "scrap metal with a power connector". MARA alone discloses over five billion dollars in fleet plus holdings; a successful double spend nets tens of millions against billions in capital at risk from identification, sanction and exclusion. Stock-cost deterrence was approximately absent in 2012 (rentable hash); it exists in 2026, and the economic model has not caught up.
- Bitcoin therefore runs two complementary security regimes: protocol-only security for small transactions (the vast majority by count, compatible with high throughput at low per-transaction cost), and a law-and-organisation regime for large transactions, where expected sanctions, exchange freezes, monetisation friction, reputational destruction, capital impairment and coalition erosion slash attack profitability.

## How Craig reasons (his model/logic)
Institutional economics applied to a formal model: accept the flow-cost result within its assumptions, then falsify the critical assumption empirically using pool concentration data, corporate filings, jurisdictional shares and enforcement precedents. Incentive analysis (contributor exit, capital specificity, enforcer participation thresholds) replaces the anonymous-attacker abstraction with the actual industrial organisation of mining.

## Where this contradicts BTC-mainstream logic
- Rejects the cypherpunk framing that law and protocol are substitutes and that Bitcoin's point is to choose protocol: in practice they are complements, each covering the range the other cannot.
- Rejects the mainstream economic critique that PoW security requires ongoing expenditure proportional to value at risk: that result depends on a lawless-attacker assumption false for pool-mediated attacks, where identifiability is close to 100%.
- Rejects the claim that proof-of-work lacks stock-cost deterrence: ASIC capital specificity and fixed infrastructure supply exactly the permanent capital-destruction threat the critique concedes would be decisive.
- Rejects the "beyond the reach of law" self-image of permissionless systems: no valuable economic system — banking, securities, insurance, telecoms, the internet — has ever operated outside legal institutions, and Bitcoin is no exception.

## Notable quotes
- "Legal irrelevance does not scale with transaction value. It scales against it."
- "This is not a flow-cost problem. It is a stock-cost problem."
- "The miners did not need to be regulated into compliance. They regulated themselves into visibility by the simple economic logic of pooling, specialisation, and scale."
- "Bitcoin’s security does not depend on being beyond the law. It depends on being embedded in it."

## Connections
The two-regime model supplies the legal-enforcement deterrence technology that "When the Prize Pays for the Protection" deliberately leaves as a reduced form, and the legibility-through-industrialisation argument anchors his wider law-regulation theme: institutions emerge from mining economics rather than being imposed on them.
