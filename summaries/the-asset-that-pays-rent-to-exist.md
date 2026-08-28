---
title: "The Asset That Pays Rent to Exist"
date: 2026-07-25
slug: the-asset-that-pays-rent-to-exist
url: https://singulargrit.substack.com/p/the-asset-that-pays-rent-to-exist
themes: [security-economics, monetary-economics, btc-critique]
---

# The Asset That Pays Rent to Exist
**Date:** 2026-07-25T04:07:08.090Z | **URL:** https://singulargrit.substack.com/p/the-asset-that-pays-rent-to-exist
**Subtitle:** Gold sits in a vault. Equity sits on a register. BTC has to be bought back from the world every ten minutes, and the bill is indexed to its own price.

## Core thesis
Gold and equities are stocks: once produced, they persist without further expenditure. BTC is a flow — its ledger must be continuously re-secured with real resources at a cost the protocol pins to the asset's own price. The "power-law" extrapolations to $1 million and $10 million are therefore not merely optimistic but internally contradictory: the carrying cost rises in lockstep with the price, the electricity system will not supply what the extrapolation demands, and the fee market meant to replace the decaying subsidy is, on the peer-reviewed theory of this exact system, structurally incapable of doing so.

## Key arguments and claims
- Power-law charts regress log price on log time and extend the fit. Fry & Cheah (2016) show the same econophysics machinery fits bubbles and negative bubbles to BTC (a November 2012 endogenous bubble, March 2013 and December 2013 exogenous shocks, a Ripple spillover). Wright's objection is stronger: even taken at face value, the line commits believers to an impossible claim on real resources.
- Figure 1, denominator repair: Krause & Tolaymat (2018) put BTC at 17 MJ per dollar of "value created" versus 122 (aluminium), 4 (copper), 5 (gold), 7 (PGMs), 9 (rare earths); the aluminium bar is the standard defence. But proof-of-work produces nothing — hashes function "solely as a cost signal" (Gill, Stinner & Tyrell, 2026) and issuance is a transfer, not output. The only service sold is settlement: on 2026 data (~148.1 TWh; fees of $85.8M against $14.3B miner revenue, 0.6%), energy per dollar of service sold is 6,214 MJ — roughly 51× aluminium and 1,200× gold. Counting issuance as output yields the flattering, erroneous 37 MJ/$.
- Carrying cost is the right metric for a held asset. Gold's accounting stops at the gate (Nuss & Eckelman, 2014; 215 GJ/kg incurred once, per Krause & Tolaymat); O'Connor et al. (2015) treat storage as negligible and note gold can be lent — the lease rate is "the benefit of holding gold", so custody can be negative-cost. Huberman, Leshno & Moallemi (2021) give a firm-run register the cost c_f·λ_H — no price term — versus the BPS's c_m·N, pinned to miner revenue and hence to price.
- The identity R = s(t)·B·P(t)·(1+f) (B = 52,560 blocks/year) makes the annual burn linear in price within a subsidy epoch: from July 2026's $64,390, ×16 at $1M and ×155 at $10M (×8 and ×78 after the April 2028 halving). Gold and equities sit flat at ×1.
- In ρ = S/(P·N) the price cancels: security per dollar of market value follows the halving schedule whatever the price does — 0.84%/yr to 2027, then 0.41%, 0.20% (2032), 0.10% (2036) and 0.012% by 2048. The oft-quoted "$167B of annual security at $1M" belongs to the pre-2028 epoch; a 2031 peak implies $83.8B.
- Efficiency cannot rescue it — Gill et al.'s "productivity trap": cheaper energy enlarges the fleet rather than cutting the burn, because security "depends solely on cost levels" and the difficulty adjustment reinvests every saving. The IT-efficiency analogy runs backwards.
- Figure 3, the collision: with world generation ~31,734 TWh, electricity at 60% of miner spend and $45/MWh (ERCOT anchor), $1M implies 2,234 TWh (7.0% of world generation) and $10M implies 22,338 TWh (70.4%); half of world electricity is crossed at $7.10M. A solved six-region equilibrium instead peaks at 257.3 TWh (0.81%; Monte Carlo band 225–291 TWh; worst of 1,500 adverse draws 0.92%). The electricity that cannot be bought becomes scarcity rent to power owners and sunk-ASIC holders; realised hashpower peaks at 5,139 EH/s against a frictionless 6,418 EH/s. It is "a wall the security hits", not the price. de Vries (2023) projects AI servers alone at 85.4–134.0 TWh/yr by 2027 — mining bids against a load with a real product.
- The product is fixed at ~7 transactions/second (220,903,200 tx/year; ~2,000 transactions per 1 MB block, per Huberman et al.): ~670 kWh per transaction today, 1,165 kWh at the solved $1M peak, 10,112 kWh at the identity's $1M demand, 101,121 kWh at $10M.
- The fee market cannot replace the subsidy. Arithmetic: holding an $83.8B/yr security flow at a $1M plateau needs fees covering 51% of it by 2032 and 97% by 2048 — about $193 per transaction rising to $368, versus ~$0.39 today: a factor of roughly 950. Theory: Huberman et al. show fee revenue is bounded because "agents may not participate as the system gets congested"; "the fee level does not increase if user WTP increases"; and total revenue "depends only on K, ρ, and the distribution of delay costs F... and therefore does not depend on the exchange rate" — fees price delay, not value secured, so a $100M transfer and a $100 transfer pay identically. Hence "there is no guarantee that the equilibrium number of miners is adequate", and a shortage of mining resources does not raise fees — "if anything, it is likely to result in the opposite". Their Theorem 7 (Θ(K/log K)) makes congestion an inefficient tax base at every block size, and their own prescription — elastic capacity, μ = λ/(Kρ*) — brands BTC's fixed parameters explicitly "undesirable". The Garratt–van Oordt sunk-capital effect cushions crashes but does not pay the rising bill.
- The one favourable use case is real but small: Sarnecki & Burke (2026) find 20 MW of mining at a 100 MW Irish wind farm absorbs 83% of dispatch-down energy and lifts system revenue 32% — yet Ireland's entire 2024 dispatch-down (1.3 TWh) is ~0.5% of the solved $1M peak. A siting benefit, not a scale answer.

## How Craig reasons (his model/logic)
An accounting argument closed against physical constraints. He converts a price extrapolation into an annual resource invoice via a competitive-mining revenue identity; distinguishes stocks from flows (carrying cost, not production cost, is the metric for a held asset); repairs denominators (what does the network actually sell?); and uses a ratio in which the price cancels (ρ = S/(P·N)) to exhibit a second, price-independent erosion. Each mainstream defence — statistical fit, hardware efficiency, the fee market, sunk capital, stranded energy — is steelmanned from the peer-reviewed literature and then closed on its own terms, culminating in a solved supply-side equilibrium that quantifies how far the identity's demand exceeds what the grid will clear.

## Where this contradicts BTC-mainstream logic
- "Digital gold" / store-of-value framing: the three assets "have fundamentally different cost structures, and the difference is not a matter of degree"; BTC's custody cost is "a continuous, unavoidable, price-indexed drain", while gold's can be negative.
- Power-law and similar price models: "a description of a realised path", and, taken seriously, physically incoherent.
- The "cleaner than aluminium" energy defence: a category error; properly denominated, BTC is roughly fifty-one times aluminium.
- Fee-market succession for the security budget: fees are the price of delay reduction, not of value secured; there is no feedback loop bidding missing security into existence — "The thermostat is not merely weak. It is not wired to anything."
- The sacred 1 MB cap: the canonical fee-market model calls fixed capacity explicitly "undesirable" and prescribes elastic capacity — the opposite of BTC's defended design, and consonant with Wright's unbounded-block position.
- Green/stranded-energy mining: genuine but a siting argument, "orthogonal to the carrying-cost problem".
- Hardware-progress optimism: efficiency does not reduce the burn; it enlarges the fleet.

## Notable quotes
- "BTC is a flow — a service that must be re-purchased from the physical world continuously, block after block, at a price the protocol pins directly to the market price of the asset itself."
- "You cannot make a cost signal cheaper. You can only make it larger for the same money."
- "The thermostat is not merely weak. It is not wired to anything."
- "The power law is not a law. It is an invoice that assumes it will never come due, drawn on a physical world that has already declined to honour it."

## Connections
No explicit cross-references to the other essays in the set. The argument is the mirror image of "Bitcoin After the Casino": that essay's claim that security must be funded by "high volume multiplied by low fees" is precisely the exit this essay leaves open after showing BTC's capped-capacity fee market cannot fund security, and its appeal to Huberman et al.'s elastic-capacity prescription points the same way. The gold-in-a-vault carrying-cost contrast complements the custody-side argument of "Digital Cash Is Not a Vault".
