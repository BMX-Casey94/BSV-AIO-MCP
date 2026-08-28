---
title: "The Two Tiers Are a Market, Not a Cage"
date: 2026-05-12
era: substack
themes: [security-economics, intermediaries, law-regulation, mining-consensus]
source: summaries/the-two-tiers-are-a-market-not-a.md
---

# The Two Tiers Are a Market, Not a Cage — core principles

- **Differentiated access channels are two-tier pricing, not two-tier censorship.** Censorship resistance is the structural property that no non-miner can prevent inclusion of a fee-paying transaction. A transaction that can be submitted, but only through a channel that bills for delivery, has been quoted, not censored.
- **Cost of access, existence of access, and right of refusal are distinct.** Treating the price of professional channels as censorship is the move by which markets are recast as failures.
- **Every market is a stratified architecture of channels.** Information and search have prices (Stigler). Wholesale versus retail, syndicate desk versus postal parcel: neither channel discriminates; both price. Bitcoin is a two-sided platform — senders demand inclusion, miners supply it — so specialised channels are what any such market produces.
- **Channel architecture is cost minimisation, not a departure from an ideal.** Demanding one uniform channel socialises the most expensive participant's costs across the whole system. Heterogeneous needs — anonymity, latency, compliance posture, documentation — are discovered by specialised channels (Hayek, Kirzner).
- **Software defaults are a habit, not a law.** Mempool policy is a contingent coordination equilibrium. Direct miner submission and private mempools dominate wherever fee opportunities justify the relationship cost.
- **Reach one miner, reach them all.** The miner subgraph is a small-world graph whose diameter scales logarithmically. A transaction accepted by one miner propagates to all within milliseconds-to-seconds because forwarding fee-bearing transactions is profit-maximising behaviour. The user needs access to any miner, not every miner.
- **Deployed direct-submission interfaces make the miner set addressable.** On BSV, commercial miners run mAPI and the successor ARC, with instances peering directly into mining infrastructure; some require no API key. At least ninety-nine per cent of the active miner set is claimed as directly addressable from operator documentation.
- **The serious adversary is AS-level routing partition of the miner subgraph** — a network-layer problem, not a matter of home nodes or default policy.
- **Open, anonymous, equally accessible channels each carry positive cost.** Externality-bearing costless entry, forgone pricing information, foreclosed discovery. The system need not absorb those costs to be censorship-resistant.
