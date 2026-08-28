---
title: "The Two Tiers Are a Market, Not a Cage"
date: 2026-05-12
slug: the-two-tiers-are-a-market-not-a
url: https://singulargrit.substack.com/p/the-two-tiers-are-a-market-not-a
themes: [security-economics, intermediaries, law-regulation, mining-consensus]
---

# The Two Tiers Are a Market, Not a Cage
**Date:** 2026-05-12 | **URL:** https://singulargrit.substack.com/p/the-two-tiers-are-a-market-not-a
**Subtitle:** On the four-layer model, software defaults, and the moral economics of transaction access

## Core thesis
Replying to the correspondent 铭链科技, Craig argues that differentiated transaction-access channels — public gossip versus direct miner submission — constitute two-tier pricing, not two-tier censorship resistance. Censorship resistance is the structural property that no non-miner can prevent the inclusion of a fee-paying transaction; and because miners form a densely interconnected small-world subgraph, reaching any single miner is functionally equivalent to reaching them all.

## Key arguments and claims
- The critique collapses three distinct things: the cost of access, the existence of access, and the right of refusal. Censorship resistance is a property of the last; treating the price of professional channels as censorship is "the rhetorical move by which the regulatory state has, for two centuries, transformed the existence of markets into evidence of their failure".
- Stigler (1961): information and search have prices, so every market is a stratified architecture of channels — wholesale versus retail, syndicate desk versus postal parcel. "Neither channel 'discriminates.' Both channels price."
- Rochet and Tirole (2003, 2006): two-sided platform pricing is endogenous to participant elasticities and often welfare-improving; Bitcoin is a two-sided platform — senders demand inclusion, miners supply it — so the "ordinary user"/"sophisticated actor" partition is what any such market produces.
- Coase (1937, 1960), Demsetz (1968), Williamson (1979), Klein, Crawford and Alchian (1978): channel architecture is the equilibrium output of cost minimisation; demanding one uniform channel amounts to socialising the most expensive participant's costs across the whole system.
- Hayek (1945) and Kirzner (1997): user needs are heterogeneous — anonymity, latency, compliance posture, documentation — so specialised channels are the market's discovery process, not a departure from a unified ideal.
- Software defaults are a contingent equilibrium, not protocol law: Biais, Bisière, Bouvard and Casamatta (2019) formalise multiple coordination equilibria; Daian et al. (2020, "Flash Boys 2.0") document that direct miner submission and private mempools dominate wherever fee opportunities justify the relationship cost. "The default mempool policy is a habit, not a law."
- Empirical map of direct submission: on BSV, TAAL and GorillaPool — substantially the entire active commercial miner set — run mAPI and the successor ARC interface, designed so each ARC instance peers directly with active mining infrastructure; GorillaPool's mAPI requires no API key. On BTC, Marathon Digital launched Slipstream in February 2024 to accept consensus-valid but non-standard transactions refused by default Core policy. Craig claims at least ninety-nine per cent of the active miner set is directly addressable, citing operator documentation as primary evidence.
- Reach-one-equals-reach-all: the miner subgraph GM has small-world diameter dM scaling logarithmically; a transaction accepted by one miner propagates to all within milliseconds-to-seconds because forwarding fee-bearing transactions is profit-maximising behaviour, "not a courtesy". The user needs access to any miner, not every miner.
- The genuinely serious adversary is AS-level routing partition of the miner subgraph (Apostolaki, Zohar and Vanbever, 2017) — a network-layer problem, not a matter of home nodes or default policy.
- Redefining censorship resistance as a user-experience property is the historical vocabulary of regulatory expansion — the Securities Act, Bank Secrecy Act and Patriot Act were each justified by attention to someone's lived experience; Stigler (1971), Peltzman (1976), Tullock (1967) and Krueger (1974) supply the capture and rent-seeking analysis.
- "Open, anonymous, equally accessible" channels each carry positive cost — externality-bearing costless entry, forgone pricing information, foreclosed discovery — and the system need not absorb those costs to be censorship-resistant.

## How Craig reasons (his model/logic)
Transaction-cost and institutional economics (Coase, Williamson, Demsetz), two-sided platform theory, Austrian market-process theory (Hayek, Kirzner) and public-choice regulatory scepticism, combined with a formal small-world graph argument and documentary evidence about deployed miner infrastructure.

## Where this contradicts BTC-mainstream logic
- Rejects the moral framing of tiered access as censorship — against egalitarian crypto discourse: "those who object to differentiated channels in transaction submission are not objecting to censorship; they are objecting to the existence of price".
- Denies Core's default mempool policy any authority over miners; deviation is structurally permitted and rational where fees justify it.
- Notes that BTC's historically conservative policy pushed non-standard transactions out of default mempools, prompting Marathon's Slipstream — evidence the market routes around defaults rather than being governed by them.
- Warns that UX-based redefinitions of censorship resistance invite regulatory capture — against both Core policy politics and the correspondent's framing.

## Notable quotes
- "A transaction that can be submitted, but only through a channel that bills for its delivery, has not been censored. It has been quoted."
- "Pricing is not censorship. Conditioning is not refusal. Specialised channels are not exclusion."
- "The user does not require access to every miner; the user requires access to any miner."
- "The two-tier observation it offers is a real observation about a real market. It is not, however, an observation about censorship. It is an observation about price."

## Connections
Extends the four-layer model from "Small Worlds, Large Errors" against a named critic; the correspondent's remaining pushbacks are answered in the follow-up "Censorship Resistance, Atomic Settlement, and the Limits of Coalition Power".
