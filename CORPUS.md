# CSW Context — Craig Wright's Bitcoin Writing, Structured for BSV-Logic Understanding

A complete, machine-readable corpus of Craig Wright's Bitcoin-related writing across
two eras — his **Medium** blog (2018–2022, the BCH/BSV split, hash war, nChain patent and
Satoshi-authorship campaigns) and his **Substack** ([Singular Grit](https://singulargrit.substack.com),
2025–2026, the formalised economic and legal theory) — built to feed a downstream agent/MCP
with a faithful map of his thinking, modelling and building around Bitcoin, and precisely
where it contradicts BTC-mainstream logic.

## Corpus at a glance

| | Medium (2018–2022) | Substack (2025–2026) | Combined |
|---|---|---|---|
| Posts archived | 311 | 482 | 793 |
| Bitcoin-related (summarised) | 275 | 201 | 476 |
| Out of scope (classified, with reasons) | 36 | 281 | 317 |

- Medium era: 7 June 2018 → 2022, fetched via Medium's internal `profile/stream` API
- Substack era: 8 June 2025 → 12 August 2026, full archive captured via `api/v1/archive`
- 2 paywalled Substack IN posts summarised from free previews (noted in their files)
- 1 Medium post (`re-moxie-on-web3`) flagged as a probable Mike Hearn essay misfiled
  under Craig's account — summarised but excluded from evidence of his positions

## Repository layout

```
README.md                  this file
SYNTHESIS.md               thematic synthesis: ten pillars, reasoning methods, contradiction map
CONTRADICTIONS.md          consistency audit: internal (2 lenses), external (BRC guide), cross-era
summaries/                 201 Substack essay summaries (YAML frontmatter + fixed template)
summaries-medium/          275 Medium essay summaries (same template)
topics/                    both eras batched into 26 subject directories + _review/ watch-list
canvases/                  interactive canvas presentation of the corpus
data/
  corpus_index.json        Substack master index: verdict, reason, themes, summary path, URL
  contradictions.json      unified machine-readable consistency audit
  contradictions/          raw audit inputs (internal tech/econ, external BRC, cross-era)
  archive.json             raw Substack archive metadata
  classification.json      Substack per-post IN/OUT verdicts with reasons
  digest.md                compact digest of all Substack core theses
  posts/raw|text/          full Substack post JSON + plain-text conversions
data-medium/               the same for Medium: corpus_index.json, archive.json,
                           classification.json, posts/json|text/
scripts/                   the pipeline (fetch → triage → classify → summarise → index → topics)
mcp/                       frozen MCP contract (start here before writing the server)
docs/superpowers/plans/    Phase A implementation plan
reference/                 BRC index, testnet-ops, deny list, ordinality, DeepWiki, registries
from-zyra-bsv-app-studio/  donor snapshot — pattern library only, do not fork
```

## MCP (next build)

The intelligence layer is specified in [`mcp/`](mcp/README.md) and [`MCP-DESIGN.md`](MCP-DESIGN.md).
Phase A (knowledge plane over these snapshots) is planned in
[`docs/superpowers/plans/2026-08-14-bsv-knowledge-mcp-phase-a.md`](docs/superpowers/plans/2026-08-14-bsv-knowledge-mcp-phase-a.md).
The server is not implemented yet. Do not copy `from-zyra-bsv-app-studio/`.

## Methodology

Both phases ran the same five-stage pipeline:

1. **Enumerate** — Substack: `api/v1/archive` paginated to exhaustion (482 posts).
   Medium: internal `profile/stream` API paginated by post ID (311 posts), driven through
   `curl.exe` with browser headers to pass Medium's TLS fingerprinting.
2. **Fetch** — full post bodies (Substack `api/v1/posts/{slug}`; Medium `posts/{postId}`),
   HTML/structured JSON converted to text.
3. **Triage** — weighted keyword scan as a first pass only; analogy-driven essays score low
   despite being core, so no score threshold was trusted.
4. **Classify** — parallel LLM agents classified every post from title+subtitle, reading the
   body where uncertain; low-confidence verdicts manually reviewed.
5. **Summarise** — parallel agents, each reading full texts and writing to a fixed template:
   core thesis · key arguments (names/numbers/mechanisms) · reasoning method · BTC-mainstream
   divergences · verbatim quotes · connections. UK English; no invented content; excerpts and
   stub posts flagged honestly.

## Theme distribution (combined 476 essays)

| Theme | Substack | Medium | Total |
|---|---|---|---|
| law-regulation | 44 | 143 | 187 |
| btc-critique | 63 | 82 | 145 |
| monetary-economics | 58 | 68 | 126 |
| mining-consensus | 49 | 61 | 110 |
| governance-decentralisation | 53 | 50 | 103 |
| security-economics | 51 | 45 | 96 |
| privacy | 35 | 53 | 88 |
| protocol-immutability | 32 | 52 | 84 |
| scaling-throughput | 46 | 35 | 81 |
| intermediaries | 49 | 28 | 77 |
| property-rights | 21 | 45 | 66 |
| script-technical | 15 | 47 | 62 |
| satoshi-history | 8 | 49 | 57 |
| tokenisation | 15 | 34 | 49 |
| micropayments | 27 | 19 | 46 |
| wallets-keys | 16 | 28 | 44 |
| audit-accounting | 21 | 21 | 42 |
| networking | 20 | 18 | 38 |
| identity | 11 | 25 | 36 |
| lightning-l2 | 16 | 20 | 36 |
| spv-light-clients | 15 | 15 | 30 |
| satire | 22 | 2 | 24 |
| quantum-scepticism | 10 | 1 | 11 |
| ai-blockchain | 5 | 3 | 8 |

(Essays carry 2–4 tags, so totals exceed essay counts.)

## The 201 Substack essays (2025–2026, chronological)

| Date | Title | Themes | Summary |
|---|---|---|---|
| 2025-06-10 | [Commixtio, Coin Obfuscation, and the Law: Roman Doctrine and Modern Blockchain Tracing ](https://singulargrit.substack.com/p/commixtio-coin-obfuscation-and-the) | law-regulation, privacy, property-rights | [summary](summaries/commixtio-coin-obfuscation-and-the.md) |
| 2025-06-10 | [Scripted Supply: A Bitcoin-Based Architecture for EDI and On-Chain Commerce](https://singulargrit.substack.com/p/scripted-supply-a-bitcoin-based-architecture) | script-technical, intermediaries, audit-accounting, tokenisation | [summary](summaries/scripted-supply-a-bitcoin-based-architecture.md) |
| 2025-06-11 | [Macro Expansion in Bitcoin Script](https://singulargrit.substack.com/p/macro-expansion-in-bitcoin-script) | script-technical, wallets-keys, protocol-immutability | [summary](summaries/macro-expansion-in-bitcoin-script.md) |
| 2025-06-11 | [Bitcoin Script as a Macro-Expanded Turing Framework ](https://singulargrit.substack.com/p/bitcoin-script-as-a-macro-expanded) | script-technical, btc-critique, protocol-immutability | [summary](summaries/bitcoin-script-as-a-macro-expanded.md) |
| 2025-06-14 | [MicroTragedy™](https://singulargrit.substack.com/p/microtragedy) | satire, btc-critique, monetary-economics | [summary](summaries/microtragedy.md) |
| 2025-06-14 | [In Praise of Shadowled Ledgers](https://singulargrit.substack.com/p/in-praise-of-shadowled-ledgers) | identity, audit-accounting, law-regulation, satire | [summary](summaries/in-praise-of-shadowled-ledgers.md) |
| 2025-06-16 | [On Immutable Memory Systems for Artificial Agents ](https://singulargrit.substack.com/p/on-immutable-memory-systems-for-artificial) | ai-blockchain, protocol-immutability, audit-accounting, privacy | [summary](summaries/on-immutable-memory-systems-for-artificial.md) |
| 2025-06-16 | [The Little Coin That Wasn’t Afraid](https://singulargrit.substack.com/p/the-little-coin-that-wasnt-afraid) | micropayments, satire, intermediaries | [summary](summaries/the-little-coin-that-wasnt-afraid.md) |
| 2025-06-17 | [Set in Stone or Sold to the Highest Bidder: Why Immutability Is Bitcoin's Only Defence](https://singulargrit.substack.com/p/set-in-stone-or-sold-to-the-highest) | protocol-immutability, btc-critique, privacy, satoshi-history | [summary](summaries/set-in-stone-or-sold-to-the-highest.md) |
| 2025-06-18 | [Summary of “The Redundancy of Full Nodes in Bitcoin: A Network-Theoretic Demonstration of Miner-Centric Propagation Topologies” ](https://singulargrit.substack.com/p/summary-of-the-redundancy-of-full) | mining-consensus, networking, governance-decentralisation | [summary](summaries/summary-of-the-redundancy-of-full.md) |
| 2025-06-19 | [Stablecoins and the Lost Spark](https://singulargrit.substack.com/p/stablecoins-and-the-lost-spark) | tokenisation, monetary-economics, btc-critique, satoshi-history | [summary](summaries/stablecoins-and-the-lost-spark.md) |
| 2025-06-22 | [“Where Your Treasure Is”: A Christian Denunciation of Hoarding, HODL Culture, and False Promises of Wealth Without Work](https://singulargrit.substack.com/p/where-your-treasure-is-a-christian) | monetary-economics, btc-critique | [summary](summaries/where-your-treasure-is-a-christian.md) |
| 2025-06-26 | [The Imperative of Scalable Blockchain for Global Commerce](https://singulargrit.substack.com/p/the-imperative-of-scalable-blockchain) | scaling-throughput, monetary-economics, intermediaries | [summary](summaries/the-imperative-of-scalable-blockchain.md) |
| 2025-06-29 | [The Future of Digital Currency: The Need for Global Competition in CBDCs and Stablecoins](https://singulargrit.substack.com/p/the-future-of-digital-currency-the) | scaling-throughput, monetary-economics, intermediaries | [summary](summaries/the-future-of-digital-currency-the.md) |
| 2025-07-01 | [Safe Low Bandwidth SPV: A Formal Treatment of Simplified Payment Verification Protocols and Security Bounds ](https://singulargrit.substack.com/p/safe-low-bandwidth-spv-a-formal-treatment) | spv-light-clients, security-economics, mining-consensus, networking | [summary](summaries/safe-low-bandwidth-spv-a-formal-treatment.md) |
| 2025-07-07 | [The Collapse of the Blockchain Trilemma: A Formal Analysis through Baran’s Topology and Automata Logic](https://singulargrit.substack.com/p/the-collapse-of-the-blockchain-trilemma) | governance-decentralisation, scaling-throughput, security-economics, networking | [summary](summaries/the-collapse-of-the-blockchain-trilemma.md) |
| 2025-07-08 | [Digital Manipulation: An Exploration of Kripkean Dogmatism and Dark Triad Traits in Cryptocurrency Social Media Communities](https://singulargrit.substack.com/p/digital-manipulation-an-exploration) | identity, btc-critique, governance-decentralisation | [summary](summaries/digital-manipulation-an-exploration.md) |
| 2025-07-09 | [A formal rebuttal of "The Blockchain Trilemma: A Formal Proof of the Inherent Trade-Offs Among Decentralization, Security, and Scalability" by Souhail Mssassi and Anas Abou El Kalam.](https://singulargrit.substack.com/p/a-formal-rebuttal-of-the-blockchain) | governance-decentralisation, scaling-throughput, security-economics, mining-consensus | [summary](summaries/a-formal-rebuttal-of-the-blockchain.md) |
| 2025-07-22 | [Sovereign Soil: Scripted Autonomy in Agricultural IoT via BSV-Based Conditional Control](https://singulargrit.substack.com/p/sovereign-soil-scripted-autonomy) | script-technical, micropayments, intermediaries, protocol-immutability | [summary](summaries/sovereign-soil-scripted-autonomy.md) |
| 2025-07-25 | [Micropayments, Immutable Data, and the Economic Revolution of Near-Zero Transaction Costs](https://singulargrit.substack.com/p/micropayments-immutable-data-and) | micropayments, monetary-economics, intermediaries, audit-accounting | [summary](summaries/micropayments-immutable-data-and.md) |
| 2025-07-28 | [Ghosts of Gold: Fractional Reserve Dynamics in the Age of BTC](https://singulargrit.substack.com/p/ghosts-of-gold-fractional-reserve) | btc-critique, monetary-economics, intermediaries, lightning-l2 | [summary](summaries/ghosts-of-gold-fractional-reserve.md) |
| 2025-07-29 | [The Dawn of the Nano-Economy: New Frontiers Unlocked by Sub-Cent Micropayments](https://singulargrit.substack.com/p/the-dawn-of-the-nano-economy-new) | micropayments, monetary-economics, ai-blockchain, scaling-throughput | [summary](summaries/the-dawn-of-the-nano-economy-new.md) |
| 2025-07-30 | [A Mechanism of Honour - Ledger of Blood and Electricity](https://singulargrit.substack.com/p/a-mechanism-of-honour-ledger-of-blood) | spv-light-clients, mining-consensus, law-regulation, scaling-throughput | [summary](summaries/a-mechanism-of-honour-ledger-of-blood.md) |
| 2025-07-31 | [Why Secure Blockchain Voting is So Hard: A Deep Dive into True Anonymity, ECDSA Blinding, and the Myths of Digital Democracy](https://singulargrit.substack.com/p/why-secure-blockchain-voting-is-so) | privacy, identity, governance-decentralisation, lightning-l2 | [summary](summaries/why-secure-blockchain-voting-is-so.md) |
| 2025-08-02 | [Resilience, Redundancy, and Real-World Data Integrity in Offline BSV Transaction Systems for Agriculture](https://singulargrit.substack.com/p/resilience-redundancy-and-real-world) | micropayments, audit-accounting, script-technical, satire | [summary](summaries/resilience-redundancy-and-real-world.md) |
| 2025-08-05 | [Mechanised Myths: Control, Compliance, and the Dystopian Present](https://singulargrit.substack.com/p/mechanised-myths-control-compliance) | governance-decentralisation, intermediaries, spv-light-clients, micropayments | [summary](summaries/mechanised-myths-control-compliance.md) |
| 2025-08-09 | [Pennies and Power: How Micropayments Could Break the Corporate Siege](https://singulargrit.substack.com/p/pennies-and-power-how-micropayments) | micropayments, intermediaries, lightning-l2, monetary-economics | [summary](summaries/pennies-and-power-how-micropayments.md) |
| 2025-08-10 | [Stewardship in the Smallest Coin: Wesleyan Capitalism and the Moral Economy of Micropayments](https://singulargrit.substack.com/p/stewardship-in-the-smallest-coin) | micropayments, monetary-economics, intermediaries | [summary](summaries/stewardship-in-the-smallest-coin.md) |
| 2025-08-18 | [Multicast as the Only Viable Architecture for Billion-Transaction Networks](https://singulargrit.substack.com/p/multicast-as-the-only-viable-architecture) | scaling-throughput, networking, spv-light-clients, mining-consensus | [summary](summaries/multicast-as-the-only-viable-architecture.md) |
| 2025-08-20 | [The Gospel of the Sellout](https://singulargrit.substack.com/p/the-gospel-of-the-sellout) | satire, btc-critique, monetary-economics, governance-decentralisation | [summary](summaries/the-gospel-of-the-sellout.md) |
| 2025-08-20 | [Multicast Within Multicast: Anycast, Sharded Resends, and Hierarchical Distribution for Transaction and Block Propagation](https://singulargrit.substack.com/p/multicast-within-multicast-anycast) | scaling-throughput, networking, mining-consensus | [summary](summaries/multicast-within-multicast-anycast.md) |
| 2025-08-22 | [The Audit of Fools: Statistical Illiteracy in the Cult of Full Nodes ](https://singulargrit.substack.com/p/the-audit-of-fools-statistical-illiteracy) | audit-accounting, spv-light-clients, btc-critique, scaling-throughput | [summary](summaries/the-audit-of-fools-statistical-illiteracy.md) |
| 2025-08-23 | [Native On-Chain Identity: capability-first, passwordless, and self-recovering](https://singulargrit.substack.com/p/native-on-chain-identity-capability) | identity, wallets-keys, privacy, script-technical | [summary](summaries/native-on-chain-identity-capability.md) |
| 2025-08-25 | [Digital Cash That Doesn’t Bleed: A 11,000-Transaction Micropayment Audit Across PayPal, Stripe, Visa, Mastercard, and BSV](https://singulargrit.substack.com/p/digital-cash-that-doesnt-bleed-a) | micropayments, monetary-economics, scaling-throughput, audit-accounting | [summary](summaries/digital-cash-that-doesnt-bleed-a.md) |
| 2025-08-26 | [IP-to-IP Negotiated Notes: An ECDH-Derived, Multi-Transfer Wallet Protocol for Private, Settled Digital-Cash Payments](https://singulargrit.substack.com/p/ip-to-ip-negotiated-notes-an-ecdh) | privacy, wallets-keys, script-technical, networking | [summary](summaries/ip-to-ip-negotiated-notes-an-ecdh.md) |
| 2025-08-27 | [Privacy at Scale — Paying by Many Small Notes on Bitcoin](https://singulargrit.substack.com/p/privacy-at-scale-paying-by-many-small) | privacy, scaling-throughput, wallets-keys, networking | [summary](summaries/privacy-at-scale-paying-by-many-small.md) |
| 2025-08-29 | [The Thousand Little Coins of Ledgerford](https://singulargrit.substack.com/p/the-thousand-little-coins-of-ledgerford) | satire, privacy, wallets-keys, audit-accounting | [summary](summaries/the-thousand-little-coins-of-ledgerford.md) |
| 2025-08-29 | [Spending in the Crowd — Hiding Received Notes by Time, Split, and Change](https://singulargrit.substack.com/p/spending-in-the-crowd-hiding-received) | privacy, wallets-keys, audit-accounting, micropayments | [summary](summaries/spending-in-the-crowd-hiding-received.md) |
| 2025-08-30 | [Privacy and Bitcoin: Legal Boundaries, Economic Realities, and the Illusion of Technical Obfuscation](https://singulargrit.substack.com/p/privacy-and-bitcoin-legal-boundaries) | privacy, law-regulation, scaling-throughput, btc-critique | [summary](summaries/privacy-and-bitcoin-legal-boundaries.md) |
| 2025-08-31 | [Sunday Reflection: Privacy, Records, and the Integrity of Exchange](https://singulargrit.substack.com/p/sunday-reflection-privacy-records) | privacy, law-regulation, audit-accounting | [summary](summaries/sunday-reflection-privacy-records.md) |
| 2025-09-07 | [Double-Spend Assurance without Blocks: Designing Miner-Signed Proofs and Spentness Commitments in a Header-Only System](https://singulargrit.substack.com/p/double-spend-assurance-without-blocks) | spv-light-clients, mining-consensus, security-economics, micropayments | [summary](summaries/double-spend-assurance-without-blocks.md) |
| 2025-09-08 | [Engraving in Stone: Encoding Images in Bitcoin (or BTC) Transactions](https://singulargrit.substack.com/p/engraving-in-stone-encoding-images) | script-technical, protocol-immutability, audit-accounting | [summary](summaries/engraving-in-stone-encoding-images.md) |
| 2025-09-09 | [Quantum-Ineffective Bitcoin: A Script-Level, Hash-Anchored Defence Against Hypothetical Quantum Key Recovery](https://singulargrit.substack.com/p/quantum-ineffective-bitcoin-a-script) | quantum-scepticism, script-technical, security-economics, wallets-keys | [summary](summaries/quantum-ineffective-bitcoin-a-script.md) |
| 2025-09-11 | [Harry Ledger and the Philosopher’s Coin](https://singulargrit.substack.com/p/harry-ledger-and-the-philosophers) | satire, btc-critique | [summary](summaries/harry-ledger-and-the-philosophers.md) |
| 2025-09-25 | [Definitional Corruption and the Erosion of Truth: A Wittgensteinian Analysis of BTC Debates](https://singulargrit.substack.com/p/definitional-corruption-and-the-erosion) | btc-critique, lightning-l2, governance-decentralisation | [summary](summaries/definitional-corruption-and-the-erosion.md) |
| 2025-09-26 | [The Failure of BTC Core’s Changes: A Case Study in Protocol Capture and Manipulation](https://singulargrit.substack.com/p/the-failure-of-btc-cores-changes) | btc-critique, scaling-throughput, lightning-l2, governance-decentralisation | [summary](summaries/the-failure-of-btc-cores-changes.md) |
| 2025-09-27 | [The Hollow Empire: A Satire of BTC Core as a Parasitic Bureaucracy Masquerading as Innovation](https://singulargrit.substack.com/p/the-hollow-empire-a-satire-of-btc) | satire, btc-critique, lightning-l2, governance-decentralisation | [summary](summaries/the-hollow-empire-a-satire-of-btc.md) |
| 2025-10-02 | [The Necessity of the Stone: Protocol Finality, Political Intrusion, and the Integrity of Bitcoin](https://singulargrit.substack.com/p/the-necessity-of-the-stone-protocol) | protocol-immutability, monetary-economics, law-regulation, governance-decentralisation | [summary](summaries/the-necessity-of-the-stone-protocol.md) |
| 2025-10-04 | [The Lifeline of Wires: Why Digital Cash Dies Without the Net](https://singulargrit.substack.com/p/the-lifeline-of-wires-why-digital) | networking, mining-consensus, btc-critique, satire | [summary](summaries/the-lifeline-of-wires-why-digital.md) |
| 2025-10-15 | [Private Keys, Proofs, and the Illusion of Ownership in Digital Cash Systems](https://singulargrit.substack.com/p/private-keys-proofs-and-the-illusion) | wallets-keys, property-rights, law-regulation, spv-light-clients | [summary](summaries/private-keys-proofs-and-the-illusion.md) |
| 2025-10-16 | [Quantum Illusions: The False Promise of Quantum Threats and the Manipulation of Cryptographic Fear](https://singulargrit.substack.com/p/quantum-illusions-the-false-promise) | quantum-scepticism, security-economics, governance-decentralisation | [summary](summaries/quantum-illusions-the-false-promise.md) |
| 2025-10-27 | [The Lie of Progress: How Bitcoin Became Fiat in a Digital Suit](https://singulargrit.substack.com/p/the-lie-of-progress-how-bitcoin-became) | btc-critique, scaling-throughput, lightning-l2, intermediaries | [summary](summaries/the-lie-of-progress-how-bitcoin-became.md) |
| 2025-10-28 | [Digital Identity and the Architecture of Autonomy: A Framework for Self-Sovereign Verification in a Stateless System](https://singulargrit.substack.com/p/digital-identity-and-the-architecture) | identity, privacy, property-rights, law-regulation | [summary](summaries/digital-identity-and-the-architecture.md) |
| 2025-10-30 | [Consortium and Crowdsourced Model for Next-Generation Research and Patent Development](https://singulargrit.substack.com/p/consortium-and-crowdsourced-model) | ai-blockchain, networking, law-regulation, audit-accounting | [summary](summaries/consortium-and-crowdsourced-model.md) |
| 2025-11-05 | [The Myth of the Bitcoin Standard: Debt, Delusion, and the Enduring Economics of State Spending](https://singulargrit.substack.com/p/the-myth-of-the-bitcoin-standard) | monetary-economics, btc-critique, governance-decentralisation | [summary](summaries/the-myth-of-the-bitcoin-standard.md) |
| 2025-11-05 | [The Five-Per-Second Delusion: How “Hard Money” Becomes Soft IOUs](https://singulargrit.substack.com/p/the-five-per-second-delusion-how) | lightning-l2, scaling-throughput, intermediaries, btc-critique | [summary](summaries/the-five-per-second-delusion-how.md) |
| 2025-11-10 | [The Throttled Machine: How Five Transactions a Second Killed Bitcoin’s Promise](https://singulargrit.substack.com/p/the-throttled-machine-how-five-transactions) | scaling-throughput, btc-critique, intermediaries, privacy | [summary](summaries/the-throttled-machine-how-five-transactions.md) |
| 2025-11-11 | [The Geometry of Freedom: Why Bitcoin Must Scale or Die](https://singulargrit.substack.com/p/the-geometry-of-freedom-why-bitcoin) | scaling-throughput, btc-critique, privacy, governance-decentralisation | [summary](summaries/the-geometry-of-freedom-why-bitcoin.md) |
| 2025-11-12 | [Lightning’s Velvet Manacles: Watchtowers, Custody, and the Quiet Return of Shadow Banking](https://singulargrit.substack.com/p/lightnings-velvet-manacles-watchtowers) | lightning-l2, security-economics, intermediaries, privacy | [summary](summaries/lightnings-velvet-manacles-watchtowers.md) |
| 2025-11-13 | [The Mirage of the Bitcoin Standard: Fractional Reserve Finance in Digital Form](https://singulargrit.substack.com/p/the-mirage-of-the-bitcoin-standard) | monetary-economics, btc-critique, intermediaries, scaling-throughput | [summary](summaries/the-mirage-of-the-bitcoin-standard.md) |
| 2025-11-15 | [Ventriloquising the Void: How Economies Pretend to Speak](https://singulargrit.substack.com/p/ventriloquising-the-void-how-economies) | monetary-economics, btc-critique, mining-consensus, satire | [summary](summaries/ventriloquising-the-void-how-economies.md) |
| 2025-11-16 | [The Quiet Violence of Sunday: Notes on Protocol Capture, Manufactured Ignorance, and the Cult of BTC-Core](https://singulargrit.substack.com/p/the-quiet-violence-of-sunday-notes) | protocol-immutability, btc-critique, law-regulation, mining-consensus | [summary](summaries/the-quiet-violence-of-sunday-notes.md) |
| 2025-11-18 | [When Five TPS Becomes a Sacred Bull](https://singulargrit.substack.com/p/when-five-tps-becomes-a-sacred-bull) | scaling-throughput, btc-critique, lightning-l2, mining-consensus | [summary](summaries/when-five-tps-becomes-a-sacred-bull.md) |
| 2025-11-20 | [The Cult of Digital Metallurgy and the Poverty of Small Minds](https://singulargrit.substack.com/p/the-cult-of-digital-metallurgy-and) | tokenisation, monetary-economics, satoshi-history, btc-critique | [summary](summaries/the-cult-of-digital-metallurgy-and.md) |
| 2025-11-21 | [The Great Global Skim](https://singulargrit.substack.com/p/the-great-global-skim) | intermediaries, monetary-economics, btc-critique, satire | [summary](summaries/the-great-global-skim.md) |
| 2025-11-23 | [The Coin That Must Never Rise](https://singulargrit.substack.com/p/the-coin-that-must-never-rise) | satire, intermediaries, micropayments, monetary-economics | [summary](summaries/the-coin-that-must-never-rise.md) |
| 2025-11-25 | [The Ledger of Fools](https://singulargrit.substack.com/p/the-ledger-of-fools) | satire, btc-critique, lightning-l2, scaling-throughput | [summary](summaries/the-ledger-of-fools.md) |
| 2025-11-27 | [The Cult of Cross-Disciplinary Prophets](https://singulargrit.substack.com/p/the-cult-of-cross-disciplinary-prophets) | satire, btc-critique, monetary-economics, satoshi-history | [summary](summaries/the-cult-of-cross-disciplinary-prophets.md) |
| 2025-11-29 | [The Cult of Digital Metallurgy and the Poverty of Small Minds](https://singulargrit.substack.com/p/the-cult-of-digital-metallurgy-and-35a) | tokenisation, monetary-economics, btc-critique | [summary](summaries/the-cult-of-digital-metallurgy-and-35a.md) |
| 2025-11-30 | [The Ledger of All Things: Bitcoin as a Universal Engine of Proof](https://singulargrit.substack.com/p/the-ledger-of-all-things-bitcoin) | satoshi-history, audit-accounting, tokenisation | [summary](summaries/the-ledger-of-all-things-bitcoin.md) |
| 2025-12-03 | [The Cult of Scarcity](https://singulargrit.substack.com/p/the-cult-of-scarcity) | btc-critique, monetary-economics, scaling-throughput, governance-decentralisation | [summary](summaries/the-cult-of-scarcity.md) |
| 2025-12-04 | [Concentration Is Not Centralisation](https://singulargrit.substack.com/p/concentration-is-not-centralisation) | mining-consensus, governance-decentralisation, scaling-throughput, protocol-immutability | [summary](summaries/concentration-is-not-centralisation.md) |
| 2025-12-07 | [The Forked Illusion: How Both Sides Cannot Be Right About Bitcoin—and Why Both Are Exposed by Their Own Logic](https://singulargrit.substack.com/p/the-forked-illusion-how-both-sides) | btc-critique, satoshi-history, protocol-immutability, scaling-throughput | [summary](summaries/the-forked-illusion-how-both-sides.md) |
| 2025-12-08 | [The Cult of Scarcity](https://singulargrit.substack.com/p/the-cult-of-scarcity-10d) | btc-critique, monetary-economics, scaling-throughput, security-economics | [summary](summaries/the-cult-of-scarcity-10d.md) |
| 2025-12-09 | [The Ministry of Unnecessary Words](https://singulargrit.substack.com/p/the-ministry-of-unnecessary-words) | satire, governance-decentralisation, mining-consensus, protocol-immutability | [summary](summaries/the-ministry-of-unnecessary-words.md) |
| 2025-12-10 | [The Bridge of Shouted Standards](https://singulargrit.substack.com/p/the-bridge-of-shouted-standards) | satire, governance-decentralisation, protocol-immutability, mining-consensus | [summary](summaries/the-bridge-of-shouted-standards.md) |
| 2025-12-12 | [The Ledger and the Load-Bearers](https://singulargrit.substack.com/p/the-ledger-and-the-load-bearers) | spv-light-clients, scaling-throughput, satire, security-economics | [summary](summaries/the-ledger-and-the-load-bearers.md) |
| 2025-12-15 | [The Cult of the Full Node](https://singulargrit.substack.com/p/the-cult-of-the-full-node) | spv-light-clients, btc-critique, scaling-throughput, security-economics | [summary](summaries/the-cult-of-the-full-node.md) |
| 2026-01-12 | [Accountability Follows Control: English Private Law and the Governance of Bitcoin](https://singulargrit.substack.com/p/accountability-follows-control-english) | law-regulation, governance-decentralisation, intermediaries | [summary](summaries/accountability-follows-control-english.md) |
| 2026-01-15 | [Bailment on a Ledger](https://singulargrit.substack.com/p/bailment-on-a-ledger) | law-regulation, property-rights, intermediaries | [summary](summaries/bailment-on-a-ledger.md) |
| 2026-01-19 | [Cryptographic Control Is Fiduciary Power, Not Title](https://singulargrit.substack.com/p/cryptographic-control-is-fiduciary) | law-regulation, intermediaries, wallets-keys | [summary](summaries/cryptographic-control-is-fiduciary.md) |
| 2026-01-20 | [The Coat Check Problem in the CLARITY Act](https://singulargrit.substack.com/p/the-coat-check-problem-in-the-clarity) | law-regulation, intermediaries, property-rights | [summary](summaries/the-coat-check-problem-in-the-clarity.md) |
| 2026-01-22 | [Cryptographic Control as Fiduciary Power](https://singulargrit.substack.com/p/cryptographic-control-as-fiduciary) | law-regulation, intermediaries, wallets-keys | [summary](summaries/cryptographic-control-as-fiduciary.md) |
| 2026-01-24 | [Protocol as Offer](https://singulargrit.substack.com/p/protocol-as-offer) | law-regulation, mining-consensus, protocol-immutability | [summary](summaries/protocol-as-offer.md) |
| 2026-02-01 | [The Nash Equilibrium in Digital Cash Systems](https://singulargrit.substack.com/p/the-nash-equilibrium-in-digital-cash) | mining-consensus, security-economics, protocol-immutability, monetary-economics | [summary](summaries/the-nash-equilibrium-in-digital-cash.md) |
| 2026-02-10 | [The Third Entry: How Cryptography Could Fix the Weakest Link in Accounting](https://singulargrit.substack.com/p/the-third-entry-how-cryptography) | audit-accounting, privacy, identity | [summary](summaries/the-third-entry-how-cryptography.md) |
| 2026-02-11 | [You Don’t Own Your Digital Stuff. NFTs Could Actually Fix That — Without Intellectual Property.](https://singulargrit.substack.com/p/you-dont-own-your-digital-stuff-nfts) | property-rights, tokenisation, law-regulation | [summary](summaries/you-dont-own-your-digital-stuff-nfts.md) |
| 2026-02-12 | [Why Bitcoin Miners Form Companies: What Blockchain Teaches Us About the Nature of Firms](https://singulargrit.substack.com/p/why-bitcoin-miners-form-companies) | mining-consensus, governance-decentralisation, security-economics | [summary](summaries/why-bitcoin-miners-form-companies.md) |
| 2026-02-13 | [Your Property Rights Don’t Exist Without a State — And That’s Not a Moral Claim](https://singulargrit.substack.com/p/your-property-rights-dont-exist-without) | property-rights, law-regulation, governance-decentralisation | [summary](summaries/your-property-rights-dont-exist-without.md) |
| 2026-03-02 | [Linear Scaling, Not Ritual: What Teranode Actually Changes](https://singulargrit.substack.com/p/linear-scaling-not-ritual-what-teranode) | scaling-throughput, spv-light-clients, networking, protocol-immutability | [summary](summaries/linear-scaling-not-ritual-what-teranode.md) |
| 2026-03-05 | [The Mark That Belongs to No One](https://singulargrit.substack.com/p/the-mark-that-belongs-to-no-one) | identity, law-regulation, property-rights | [summary](summaries/the-mark-that-belongs-to-no-one.md) |
| 2026-03-07 | [The Return of the Bearer Share](https://singulargrit.substack.com/p/the-return-of-the-bearer-share) | governance-decentralisation, mining-consensus, law-regulation, identity | [summary](summaries/the-return-of-the-bearer-share.md) |
| 2026-03-08 | [The Memory That Mining Forgot ](https://singulargrit.substack.com/p/the-memory-that-mining-forgot) | mining-consensus, security-economics | [summary](summaries/the-memory-that-mining-forgot.md) |
| 2026-03-09 | [Markov, Not Memoryless](https://singulargrit.substack.com/p/markov-not-memoryless) | mining-consensus, security-economics | [summary](summaries/markov-not-memoryless.md) |
| 2026-03-12 | [Your Token Is Not Your JPEG — And That Distinction Is the Entire Point](https://singulargrit.substack.com/p/your-token-is-not-your-jpeg-and-that) | property-rights, law-regulation, tokenisation | [summary](summaries/your-token-is-not-your-jpeg-and-that.md) |
| 2026-03-13 | [Hash Power and the Limits of Law](https://singulargrit.substack.com/p/hash-power-and-the-limits-of-law) | mining-consensus, law-regulation, security-economics, networking | [summary](summaries/hash-power-and-the-limits-of-law.md) |
| 2026-03-14 | [Who Controls the Rules When Nobody Controls All of Them?](https://singulargrit.substack.com/p/who-controls-the-rules-when-nobody) | governance-decentralisation, intermediaries, security-economics | [summary](summaries/who-controls-the-rules-when-nobody.md) |
| 2026-03-15 | [The Chessboard, the Grain, and the Fee Market That Ate Itself](https://singulargrit.substack.com/p/the-chessboard-the-grain-and-the) | btc-critique, scaling-throughput, micropayments, satire | [summary](summaries/the-chessboard-the-grain-and-the.md) |
| 2026-03-16 | [The Oldest New Problem in Finance: Proof of Stake and the Return of the Bearer Share](https://singulargrit.substack.com/p/the-oldest-new-problem-in-finance) | law-regulation, governance-decentralisation, property-rights | [summary](summaries/the-oldest-new-problem-in-finance.md) |
| 2026-03-17 | [The Law Already Inside Bitcoin](https://singulargrit.substack.com/p/the-law-already-inside-bitcoin) | security-economics, mining-consensus, law-regulation | [summary](summaries/the-law-already-inside-bitcoin.md) |
| 2026-03-18 | [The Bearer Share Is Dead. Long Live Proof of Stake.](https://singulargrit.substack.com/p/the-bearer-share-is-dead-long-live) | governance-decentralisation, law-regulation, identity | [summary](summaries/the-bearer-share-is-dead-long-live.md) |
| 2026-03-19 | [When the Prize Pays for the Protection](https://singulargrit.substack.com/p/when-the-prize-pays-for-the-protection) | security-economics, mining-consensus, monetary-economics | [summary](summaries/when-the-prize-pays-for-the-protection.md) |
| 2026-03-20 | [Why Transaction Throughput Determines How Long Bitcoin’s Security Model Holds](https://singulargrit.substack.com/p/why-transaction-throughput-determines) | scaling-throughput, security-economics, mining-consensus, btc-critique | [summary](summaries/why-transaction-throughput-determines.md) |
| 2026-03-23 | [When Money Moves for Free, Who Gets Paid?](https://singulargrit.substack.com/p/when-money-moves-for-free-who-gets) | intermediaries, monetary-economics, governance-decentralisation, micropayments | [summary](summaries/when-money-moves-for-free-who-gets.md) |
| 2026-03-24 | [Verification Without Enforcement Is Observation, Not Security](https://singulargrit.substack.com/p/verification-without-enforcement) | spv-light-clients, mining-consensus, btc-critique, networking | [summary](summaries/verification-without-enforcement.md) |
| 2026-03-25 | [Bitcoin Has a Population Problem — And We Can Prove It](https://singulargrit.substack.com/p/bitcoin-has-a-population-problem) | mining-consensus, security-economics, btc-critique, monetary-economics | [summary](summaries/bitcoin-has-a-population-problem.md) |
| 2026-03-27 | [Who Controls the Rules? Governance Credibility and the $109 Billion Question](https://singulargrit.substack.com/p/who-controls-the-rules-governance) | governance-decentralisation, protocol-immutability, intermediaries, monetary-economics | [summary](summaries/who-controls-the-rules-governance.md) |
| 2026-04-04 | [The Graveyard of Gateways: Why There Can Only Be One Blockchain](https://singulargrit.substack.com/p/the-graveyard-of-gateways-why-there) | networking, intermediaries, scaling-throughput, btc-critique | [summary](summaries/the-graveyard-of-gateways-why-there.md) |
| 2026-04-06 | [Ten Thousand Qubits and a Prayer](https://singulargrit.substack.com/p/ten-thousand-qubits-and-a-prayer) | quantum-scepticism, satire | [summary](summaries/ten-thousand-qubits-and-a-prayer.md) |
| 2026-04-06 | [Quantum Computing Is a Multi-Hundred-Billion-Dollar Fraud](https://singulargrit.substack.com/p/quantum-computing-is-a-multi-hundred) | quantum-scepticism, monetary-economics | [summary](summaries/quantum-computing-is-a-multi-hundred.md) |
| 2026-04-07 | [Quantum Computing Will Not Crack Encryption. It Is a Lie. Even If It Weren't, the Numbers Are Absurd.](https://singulargrit.substack.com/p/quantum-computing-will-not-crack) | quantum-scepticism, security-economics | [summary](summaries/quantum-computing-will-not-crack.md) |
| 2026-04-08 | [The Toll Road You Were Promised Would Be Free: How Refusing to Scale Rebuilds the Banks](https://singulargrit.substack.com/p/the-toll-road-you-were-promised-would) | scaling-throughput, lightning-l2, btc-critique, intermediaries | [summary](summaries/the-toll-road-you-were-promised-would.md) |
| 2026-04-09 | [From Microseconds to Weeks: The Timescale Problem That Makes Quantum Computing Impossible Right Now — if not forever!](https://singulargrit.substack.com/p/from-microseconds-to-weeks-the-timescale) | quantum-scepticism, security-economics | [summary](summaries/from-microseconds-to-weeks-the-timescale.md) |
| 2026-04-10 | [Bitcoin Does Not Use RSA — And the Quantum Machine That Would Attack It Does Not Exist](https://singulargrit.substack.com/p/bitcoin-does-not-use-rsa-and-the) | quantum-scepticism, wallets-keys, property-rights, security-economics | [summary](summaries/bitcoin-does-not-use-rsa-and-the.md) |
| 2026-04-11 | [Transparency Is Not Centralisation: NAR, DAR, and the Legal Architecture of Blockchain Governance](https://singulargrit.substack.com/p/transparency-is-not-centralisation) | law-regulation, property-rights, governance-decentralisation, btc-critique | [summary](summaries/transparency-is-not-centralisation.md) |
| 2026-04-13 | [Service, Stake, and the Curious Case of Misclassification](https://singulargrit.substack.com/p/service-stake-and-the-curious-case) | mining-consensus, law-regulation, monetary-economics, security-economics | [summary](summaries/service-stake-and-the-curious-case.md) |
| 2026-04-14 | [Time Is Not Consensus](https://singulargrit.substack.com/p/time-is-not-consensus) | mining-consensus, networking, security-economics | [summary](summaries/time-is-not-consensus.md) |
| 2026-04-15 | [When the Tollkeepers Disappear: The Consequences of Real Digital Cash](https://singulargrit.substack.com/p/when-the-tollkeepers-disappear-the) | intermediaries, micropayments, monetary-economics, scaling-throughput | [summary](summaries/when-the-tollkeepers-disappear-the.md) |
| 2026-04-17 | [Authority Without Command: The Alert Key, Coordination, and the System That Might Have Been](https://singulargrit.substack.com/p/authority-without-command-the-alert) | governance-decentralisation, satoshi-history, mining-consensus, networking | [summary](summaries/authority-without-command-the-alert.md) |
| 2026-04-17 | [The Theft That Never Was](https://singulargrit.substack.com/p/the-theft-that-never-was) | quantum-scepticism, property-rights, protocol-immutability, privacy | [summary](summaries/the-theft-that-never-was.md) |
| 2026-04-22 | [What Siggi Built](https://singulargrit.substack.com/p/what-siggi-built) | script-technical, scaling-throughput, lightning-l2, governance-decentralisation | [summary](summaries/what-siggi-built.md) |
| 2026-04-23 | [Shuffling the Deck Without a Dealer](https://singulargrit.substack.com/p/shuffling-the-deck-without-a-dealer) | privacy, script-technical, tokenisation, security-economics | [summary](summaries/shuffling-the-deck-without-a-dealer.md) |
| 2026-04-24 | [The Sealed Envelope, Cryptographically Considered](https://singulargrit.substack.com/p/the-sealed-envelope-cryptographically) | script-technical, tokenisation, security-economics, privacy | [summary](summaries/the-sealed-envelope-cryptographically.md) |
| 2026-04-25 | [The Drivechain Mechanism Was Already Patented](https://singulargrit.substack.com/p/the-drivechain-mechanism-was-already) | mining-consensus, btc-critique, law-regulation, governance-decentralisation | [summary](summaries/the-drivechain-mechanism-was-already.md) |
| 2026-04-26 | [The Book You Sold](https://singulargrit.substack.com/p/the-book-you-sold) | property-rights, tokenisation, privacy, intermediaries | [summary](summaries/the-book-you-sold.md) |
| 2026-04-27 | [The Quantum Apocalypse Is Coming Any Decade Now, So Here Is the Solution to a Problem That Will Not Exist](https://singulargrit.substack.com/p/the-quantum-apocalypse-is-coming) | quantum-scepticism, script-technical, security-economics, btc-critique | [summary](summaries/the-quantum-apocalypse-is-coming.md) |
| 2026-04-29 | [The Geography of Discretion](https://singulargrit.substack.com/p/the-geography-of-discretion) | protocol-immutability, governance-decentralisation, btc-critique, law-regulation | [summary](summaries/the-geography-of-discretion.md) |
| 2026-04-30 | [Consensus Is Not Governance](https://singulargrit.substack.com/p/consensus-is-not-governance) | governance-decentralisation, protocol-immutability, security-economics, monetary-economics | [summary](summaries/consensus-is-not-governance.md) |
| 2026-05-01 | [Cold Authority: Constructing an Air-Gapped Bitcoin SV Wallet Using ElectrumSV](https://singulargrit.substack.com/p/cold-authority-constructing-an-air) | wallets-keys, security-economics, privacy | [summary](summaries/cold-authority-constructing-an-air.md) |
| 2026-05-01 | [The Hold-Up Problem in Protocol Economies](https://singulargrit.substack.com/p/the-hold-up-problem-in-protocol-economies) | governance-decentralisation, protocol-immutability, monetary-economics, security-economics | [summary](summaries/the-hold-up-problem-in-protocol-economies.md) |
| 2026-05-02 | [Batching, Headers, and Throughput: Operating a Bitcoin SV Wallet with Offline Synchronisation and High-Volume Microtransactions](https://singulargrit.substack.com/p/batching-headers-and-throughput-operating) | spv-light-clients, scaling-throughput, micropayments, wallets-keys | [summary](summaries/batching-headers-and-throughput-operating.md) |
| 2026-05-02 | [Why Hash Power Is Not Security](https://singulargrit.substack.com/p/why-hash-power-is-not-security) | security-economics, mining-consensus, governance-decentralisation, law-regulation | [summary](summaries/why-hash-power-is-not-security.md) |
| 2026-05-03 | [Effective Decentralisation Is the Minimum, Not the Average](https://singulargrit.substack.com/p/effective-decentralisation-is-the) | governance-decentralisation, security-economics, mining-consensus | [summary](summaries/effective-decentralisation-is-the.md) |
| 2026-05-04 | [Who Actually Decides](https://singulargrit.substack.com/p/who-actually-decides) | governance-decentralisation, intermediaries, mining-consensus | [summary](summaries/who-actually-decides.md) |
| 2026-05-05 | [What TCP/IP Got Right](https://singulargrit.substack.com/p/what-tcpip-got-right) | protocol-immutability, networking, governance-decentralisation | [summary](summaries/what-tcpip-got-right.md) |
| 2026-05-06 | [The Economy Has Always Been Data](https://singulargrit.substack.com/p/the-economy-has-always-been-data) | monetary-economics, intermediaries, scaling-throughput | [summary](summaries/the-economy-has-always-been-data.md) |
| 2026-05-06 | [The Gospel According to Grok](https://singulargrit.substack.com/p/the-gospel-according-to-grok) | satoshi-history, identity, privacy, satire | [summary](summaries/the-gospel-according-to-grok.md) |
| 2026-05-07 | [The Myth of the Sovereign Node](https://singulargrit.substack.com/p/the-myth-of-the-sovereign-node) | btc-critique, mining-consensus, satire | [summary](summaries/the-myth-of-the-sovereign-node.md) |
| 2026-05-08 | [SegWit2x as Market Coordination Around Incentives](https://singulargrit.substack.com/p/segwit2x-as-market-coordination-around) | mining-consensus, governance-decentralisation, intermediaries, btc-critique | [summary](summaries/segwit2x-as-market-coordination-around.md) |
| 2026-05-08 | [The Priesthood of Artificial Scarcity](https://singulargrit.substack.com/p/the-priesthood-of-artificial-scarcity) | btc-critique, scaling-throughput, intermediaries, monetary-economics | [summary](summaries/the-priesthood-of-artificial-scarcity.md) |
| 2026-05-10 | [The Home Node That Never Validates](https://singulargrit.substack.com/p/the-home-node-that-never-validates) | mining-consensus, security-economics, networking, governance-decentralisation | [summary](summaries/the-home-node-that-never-validates.md) |
| 2026-05-11 | [Small Worlds, Large Errors](https://singulargrit.substack.com/p/small-worlds-large-errors) | networking, mining-consensus, security-economics, btc-critique | [summary](summaries/small-worlds-large-errors.md) |
| 2026-05-12 | [Censorship Resistance, Atomic Settlement, and the Limits of Coalition Power](https://singulargrit.substack.com/p/censorship-resistance-atomic-settlement) | law-regulation, privacy, security-economics, scaling-throughput | [summary](summaries/censorship-resistance-atomic-settlement.md) |
| 2026-05-12 | [The Two Tiers Are a Market, Not a Cage ](https://singulargrit.substack.com/p/the-two-tiers-are-a-market-not-a) | security-economics, intermediaries, law-regulation, mining-consensus | [summary](summaries/the-two-tiers-are-a-market-not-a.md) |
| 2026-05-16 | [The Frightening Commerce of Free Persons](https://singulargrit.substack.com/p/the-frightening-commerce-of-free) | intermediaries, privacy, law-regulation, monetary-economics | [summary](summaries/the-frightening-commerce-of-free.md) |
| 2026-05-16 | [The Dangerous Thing Is Not Bitcoin, but Utility](https://singulargrit.substack.com/p/the-dangerous-thing-is-not-bitcoin) | intermediaries, btc-critique, monetary-economics, micropayments | [summary](summaries/the-dangerous-thing-is-not-bitcoin.md) |
| 2026-05-17 | [The Toll Booth Economy](https://singulargrit.substack.com/p/the-toll-booth-economy) | intermediaries, monetary-economics, privacy, micropayments | [summary](summaries/the-toll-booth-economy.md) |
| 2026-05-18 | [Verification Without Enforcement](https://singulargrit.substack.com/p/verification-without-enforcement-8b2) | spv-light-clients, mining-consensus, governance-decentralisation, protocol-immutability | [summary](summaries/verification-without-enforcement-8b2.md) |
| 2026-05-19 | [Five Transactions a Second, and Other Discourtesies to Commerce](https://singulargrit.substack.com/p/five-transactions-a-second-and-other) | scaling-throughput, btc-critique, lightning-l2, monetary-economics | [summary](summaries/five-transactions-a-second-and-other.md) |
| 2026-05-20 | [The Miner Is Not a Monarch](https://singulargrit.substack.com/p/the-miner-is-not-a-monarch) | law-regulation, property-rights, mining-consensus, governance-decentralisation | [summary](summaries/the-miner-is-not-a-monarch.md) |
| 2026-05-21 | [Who Actually Controls a Blockchain? An Economist’s Map of the Power Structure](https://singulargrit.substack.com/p/who-actually-controls-a-blockchain) | governance-decentralisation, mining-consensus, intermediaries | [summary](summaries/who-actually-controls-a-blockchain.md) |
| 2026-05-22 | [Who Reads the Meter? The Hidden Trust Problem Underneath Every Energy Market That Runs on a Blockchain](https://singulargrit.substack.com/p/who-reads-the-meter-the-hidden-trust) | security-economics, audit-accounting, micropayments | [summary](summaries/who-reads-the-meter-the-hidden-trust.md) |
| 2026-05-25 | [Decentralization Deserves a Number](https://singulargrit.substack.com/p/decentralization-deserves-a-number) | governance-decentralisation, mining-consensus, security-economics | [summary](summaries/decentralization-deserves-a-number.md) |
| 2026-05-26 | [Triple-Entry Accounting Has Been Misunderstood](https://singulargrit.substack.com/p/triple-entry-accounting-has-been) | audit-accounting, privacy, law-regulation | [summary](summaries/triple-entry-accounting-has-been.md) |
| 2026-05-27 | [Digital Money Is a Network Problem Before It Is a Monetary Slogan](https://singulargrit.substack.com/p/digital-money-is-a-network-problem) | networking, scaling-throughput, mining-consensus | [summary](summaries/digital-money-is-a-network-problem.md) |
| 2026-05-28 | [Selling the Unspent Chain](https://singulargrit.substack.com/p/selling-the-unspent-chain) | micropayments, tokenisation, lightning-l2, protocol-immutability | [summary](summaries/selling-the-unspent-chain.md) |
| 2026-05-28 | [The Immutable Stock and the Unbounded Flow](https://singulargrit.substack.com/p/the-immutable-stock-and-the-unbounded) | protocol-immutability, micropayments, script-technical, monetary-economics | [summary](summaries/the-immutable-stock-and-the-unbounded.md) |
| 2026-05-29 | [The Arithmetic of Trust](https://singulargrit.substack.com/p/the-arithmetic-of-trust) | audit-accounting, privacy, spv-light-clients | [summary](summaries/the-arithmetic-of-trust.md) |
| 2026-05-31 | [IPv4.1 Does Not Exist](https://singulargrit.substack.com/p/ipv41-does-not-exist) | protocol-immutability, btc-critique, networking, identity | [summary](summaries/ipv41-does-not-exist.md) |
| 2026-05-31 | [The Integer and the Idol](https://singulargrit.substack.com/p/the-integer-and-the-idol) | monetary-economics, protocol-immutability, btc-critique, property-rights | [summary](summaries/the-integer-and-the-idol.md) |
| 2026-06-01 | [The Builder's Week: A Working Bitcoin Stack Appears, One Repository at a Time](https://singulargrit.substack.com/p/the-builders-week-a-working-bitcoin) | micropayments, audit-accounting, script-technical, privacy | [summary](summaries/the-builders-week-a-working-bitcoin.md) |
| 2026-06-02 | [The Abolition of the Free Copy](https://singulargrit.substack.com/p/the-abolition-of-the-free-copy) | property-rights, tokenisation, security-economics, intermediaries | [summary](summaries/the-abolition-of-the-free-copy.md) |
| 2026-06-02 | [The Abolition of the Dealer](https://singulargrit.substack.com/p/the-abolition-of-the-dealer) | privacy, intermediaries, governance-decentralisation | [summary](summaries/the-abolition-of-the-dealer.md) |
| 2026-06-03 | [Who Shall Keep the Keys?](https://singulargrit.substack.com/p/who-shall-keep-the-keys) | intermediaries, governance-decentralisation, law-regulation, monetary-economics | [summary](summaries/who-shall-keep-the-keys.md) |
| 2026-06-04 | [An Open Market for Intelligence](https://singulargrit.substack.com/p/an-open-market-for-intelligence) | ai-blockchain, micropayments, intermediaries | [summary](summaries/an-open-market-for-intelligence.md) |
| 2026-06-04 | [The body of the secret ](https://singulargrit.substack.com/p/the-body-of-the-secret) | security-economics, wallets-keys | [summary](summaries/the-body-of-the-secret.md) |
| 2026-06-05 | [The Abolition of the House](https://singulargrit.substack.com/p/the-abolition-of-the-house) | intermediaries, tokenisation, privacy, property-rights | [summary](summaries/the-abolition-of-the-house.md) |
| 2026-06-06 | [The Beast at the Door](https://singulargrit.substack.com/p/the-beast-at-the-door) | btc-critique, monetary-economics, scaling-throughput, intermediaries | [summary](summaries/the-beast-at-the-door.md) |
| 2026-06-07 | [The Scoreboard Is Not the Game: Money, Measurement, and the Collapse of Monetary Understanding](https://singulargrit.substack.com/p/the-scoreboard-is-not-the-game-money) | monetary-economics, protocol-immutability, governance-decentralisation, btc-critique | [summary](summaries/the-scoreboard-is-not-the-game-money.md) |
| 2026-06-07 | [A Pretty Curve Is Not an Economic Theory](https://singulargrit.substack.com/p/a-pretty-curve-is-not-an-economic) | btc-critique, monetary-economics | [summary](summaries/a-pretty-curve-is-not-an-economic.md) |
| 2026-06-07 | [Zero-Confirmation and the Cult of the Spectator](https://singulargrit.substack.com/p/zero-confirmation-and-the-cult-of) | mining-consensus, security-economics, spv-light-clients, governance-decentralisation | [summary](summaries/zero-confirmation-and-the-cult-of.md) |
| 2026-06-09 | [You Cannot Hoard Your Way to Money](https://singulargrit.substack.com/p/you-cannot-hoard-your-way-to-money) | monetary-economics, btc-critique, micropayments, scaling-throughput | [summary](summaries/you-cannot-hoard-your-way-to-money.md) |
| 2026-06-12 | [The Arithmetic of the Last Fool](https://singulargrit.substack.com/p/the-arithmetic-of-the-last-fool) | btc-critique, scaling-throughput, monetary-economics, satire | [summary](summaries/the-arithmetic-of-the-last-fool.md) |
| 2026-06-14 | [Settlement Speed Is the Wrong Margin](https://singulargrit.substack.com/p/settlement-speed-is-the-wrong-margin) | monetary-economics, micropayments, audit-accounting | [summary](summaries/settlement-speed-is-the-wrong-margin.md) |
| 2026-06-15 | [The Lawless Blockchain Is a Story We Tell for Small Change](https://singulargrit.substack.com/p/the-lawless-blockchain-is-a-story) | security-economics, law-regulation, mining-consensus | [summary](summaries/the-lawless-blockchain-is-a-story.md) |
| 2026-06-16 | [What the Protocol Remembers](https://singulargrit.substack.com/p/what-the-protocol-remembers) | security-economics, scaling-throughput, mining-consensus, btc-critique | [summary](summaries/what-the-protocol-remembers.md) |
| 2026-06-17 | [The Retrodiction Fallacy: Backfitting, Power Laws, and the Manufacture of Predictive Authority](https://singulargrit.substack.com/p/the-retrodiction-fallacy-backfitting) | monetary-economics, btc-critique | [summary](summaries/the-retrodiction-fallacy-backfitting.md) |
| 2026-06-18 | [BTC Is Banking with Extra Steps](https://singulargrit.substack.com/p/btc-is-banking-with-extra-steps) | btc-critique, lightning-l2, intermediaries, scaling-throughput | [summary](summaries/btc-is-banking-with-extra-steps.md) |
| 2026-06-18 | [The Warehouse and the Mind](https://singulargrit.substack.com/p/the-warehouse-and-the-mind) | property-rights, law-regulation, tokenisation | [summary](summaries/the-warehouse-and-the-mind.md) |
| 2026-06-29 | [The Law of Controlled Amnesia](https://singulargrit.substack.com/p/the-law-of-controlled-amnesia) | law-regulation, monetary-economics, privacy | [summary](summaries/the-law-of-controlled-amnesia.md) |
| 2026-07-03 | [The Asset the Law Gave Up On](https://singulargrit.substack.com/p/the-asset-the-law-gave-up-on) | property-rights, law-regulation, monetary-economics, intermediaries | [summary](summaries/the-asset-the-law-gave-up-on.md) |
| 2026-07-04 | [The Dial That Used to Be Fixed](https://singulargrit.substack.com/p/the-dial-that-used-to-be-fixed) | btc-critique, monetary-economics, privacy, law-regulation | [summary](summaries/the-dial-that-used-to-be-fixed.md) |
| 2026-07-05 | [The Number That Moved by Standing Still](https://singulargrit.substack.com/p/the-number-that-moved-by-standing) | law-regulation, monetary-economics | [summary](summaries/the-number-that-moved-by-standing.md) |
| 2026-07-06 | [Nobody Asks Where Your Banknote Has Been ](https://singulargrit.substack.com/p/nobody-asks-where-your-banknote-has) | monetary-economics, property-rights, law-regulation, privacy | [summary](summaries/nobody-asks-where-your-banknote-has.md) |
| 2026-07-06 | [The Decentralisation Threshold: When More Validators Reduce Net Security](https://singulargrit.substack.com/p/the-decentralisation-threshold-when) | governance-decentralisation, security-economics, mining-consensus, scaling-throughput | [summary](summaries/the-decentralisation-threshold-when.md) |
| 2026-07-09 | [The Audit Evidence Problem Public Ledgers Were Supposed to Solve](https://singulargrit.substack.com/p/the-audit-evidence-problem-public) | audit-accounting, privacy | [summary](summaries/the-audit-evidence-problem-public.md) |
| 2026-07-10 | [The Weakest Line in Every Ledger](https://singulargrit.substack.com/p/the-weakest-line-in-every-ledger) | audit-accounting, tokenisation, privacy | [summary](summaries/the-weakest-line-in-every-ledger.md) |
| 2026-07-11 | [What Is Proof?](https://singulargrit.substack.com/p/what-is-proof) | security-economics, law-regulation, mining-consensus | [summary](summaries/what-is-proof.md) |
| 2026-07-12 | [Post-Quantum Digital Cash](https://singulargrit.substack.com/p/post-quantum-digital-cash) | quantum-scepticism, monetary-economics, security-economics, wallets-keys | [summary](summaries/post-quantum-digital-cash.md) |
| 2026-07-25 | [The Asset That Pays Rent to Exist](https://singulargrit.substack.com/p/the-asset-that-pays-rent-to-exist) | security-economics, monetary-economics, btc-critique | [summary](summaries/the-asset-that-pays-rent-to-exist.md) |
| 2026-07-26 | [The Defence That Halves](https://singulargrit.substack.com/p/the-defence-that-halves) | security-economics, monetary-economics | [summary](summaries/the-defence-that-halves.md) |
| 2026-07-27 | [The Cost of Permission](https://singulargrit.substack.com/p/the-cost-of-permission) | governance-decentralisation, intermediaries | [summary](summaries/the-cost-of-permission.md) |
| 2026-07-28 | [Set in Stone](https://singulargrit.substack.com/p/set-in-stone) | protocol-immutability, governance-decentralisation | [summary](summaries/set-in-stone.md) |
| 2026-07-29 | [Five Times Versus Twenty Per Cent](https://singulargrit.substack.com/p/five-times-versus-twenty-per-cent) | protocol-immutability, governance-decentralisation | [summary](summaries/five-times-versus-twenty-per-cent.md) |
| 2026-07-31 | [The Price of Being in the Room](https://singulargrit.substack.com/p/the-price-of-being-in-the-room) | protocol-immutability, governance-decentralisation | [summary](summaries/the-price-of-being-in-the-room.md) |
| 2026-08-01 | [When Every Block Counts, Except the Ones That Don’t](https://singulargrit.substack.com/p/when-every-block-counts-except-the) | mining-consensus, security-economics | [summary](summaries/when-every-block-counts-except-the.md) |
| 2026-08-02 | [The Protocol No Gatekeeper Wants](https://singulargrit.substack.com/p/the-protocol-no-gatekeeper-wants) | intermediaries, protocol-immutability, micropayments | [summary](summaries/the-protocol-no-gatekeeper-wants.md) |
| 2026-08-02 | [Bitcoin After the Casino](https://singulargrit.substack.com/p/bitcoin-after-the-casino) | monetary-economics, protocol-immutability, btc-critique | [summary](summaries/bitcoin-after-the-casino.md) |
| 2026-08-04 | [There Is No Such Thing as Spam in a Priced System](https://singulargrit.substack.com/p/there-is-no-such-thing-as-spam-in) | micropayments, btc-critique, intermediaries | [summary](summaries/there-is-no-such-thing-as-spam-in.md) |
| 2026-08-11 | [Order On-Chain, Content Off-Chain, Judgement in the Overlay](https://singulargrit.substack.com/p/order-on-chain-content-off-chain) | ai-blockchain, scaling-throughput | [summary](summaries/order-on-chain-content-off-chain.md) |
| 2026-08-12 | [Digital Cash Is Not a Vault](https://singulargrit.substack.com/p/digital-cash-is-not-a-vault) | wallets-keys, security-economics | [summary](summaries/digital-cash-is-not-a-vault.md) |

## The 275 Medium essays (2018–2022, chronological)

| Date | Title | Themes | Summary |
|---|---|---|---|
| 2018-06-07 | [OP Codes and the push to confuse.](https://medium.com/@craig_10243/op-codes-and-the-push-to-confuse-24d10d5e3861) | script-technical, btc-critique, protocol-immutability | [summary](summaries-medium/op-codes-and-the-push-to-confuse-24d10d5e3861.md) |
| 2018-06-09 | [Iron and Steel](https://medium.com/@craig_10243/iron-and-steel-f4898687f6b0) | mining-consensus, security-economics, networking, btc-critique | [summary](summaries-medium/iron-and-steel-f4898687f6b0.md) |
| 2018-06-19 | [Lightning is malleable… Steel is not](https://medium.com/@craig_10243/lightning-is-malleable-steel-is-not-4e68bfdef31) | lightning-l2, law-regulation, btc-critique, protocol-immutability | [summary](summaries-medium/lightning-is-malleable-steel-is-not-4e68bfdef31.md) |
| 2018-07-02 | [Negotiable Instruments](https://medium.com/@craig_10243/negotiable-instruments-ad059d60f0e4) | law-regulation, property-rights, lightning-l2, wallets-keys | [summary](summaries-medium/negotiable-instruments-ad059d60f0e4.md) |
| 2018-08-14 | [Money Must First Be Stable](https://medium.com/@craig_10243/money-must-first-be-stable-a44fbe7574c7) | scaling-throughput, mining-consensus, protocol-immutability, monetary-economics | [summary](summaries-medium/money-must-first-be-stable-a44fbe7574c7.md) |
| 2018-08-14 | [The myths of Bitcoin](https://medium.com/@craig_10243/the-myths-of-bitcoin-bf3664e9d767) | btc-critique, scaling-throughput, protocol-immutability, privacy | [summary](summaries-medium/the-myths-of-bitcoin-bf3664e9d767.md) |
| 2018-08-16 | [The cult of Decentralisation](https://medium.com/@craig_10243/the-cult-of-decentralisation-b62a1445dbf0) | governance-decentralisation, monetary-economics, mining-consensus, btc-critique | [summary](summaries-medium/the-cult-of-decentralisation-b62a1445dbf0.md) |
| 2018-08-19 | [Limited change to bring stability](https://medium.com/@craig_10243/limited-change-to-bring-stability-36abb2fed8e1) | protocol-immutability, script-technical, lightning-l2, btc-critique | [summary](summaries-medium/limited-change-to-bring-stability-36abb2fed8e1.md) |
| 2018-09-01 | [Black Mirror](https://medium.com/@craig_10243/black-mirror-fb2457166a3d) | mining-consensus, governance-decentralisation, btc-critique, monetary-economics | [summary](summaries-medium/black-mirror-fb2457166a3d.md) |
| 2018-09-02 | [Banking on Bitcoin](https://medium.com/@craig_10243/banking-on-bitcoin-563fbc31e44a) | wallets-keys, intermediaries, btc-critique, law-regulation | [summary](summaries-medium/banking-on-bitcoin-563fbc31e44a.md) |
| 2018-09-02 | [BCH is Bitcoin.](https://medium.com/@craig_10243/bch-is-bitcoin-2f10c5bc32f9) | btc-critique, protocol-immutability | [summary](summaries-medium/bch-is-bitcoin-2f10c5bc32f9.md) |
| 2018-09-02 | [The crypto-ring of Gyges](https://medium.com/@craig_10243/the-crypto-ring-of-gyges-f4858a037827) | privacy, law-regulation, property-rights | [summary](summaries-medium/the-crypto-ring-of-gyges-f4858a037827.md) |
| 2018-09-04 | [Death and taxes, it is time to kill off mythical beasts](https://medium.com/@craig_10243/death-and-taxes-it-is-time-to-kill-off-mythical-beasts-d7dc1dbaa615) | law-regulation, audit-accounting, monetary-economics, privacy | [summary](summaries-medium/death-and-taxes-it-is-time-to-kill-off-mythical-beasts-d7dc1dbaa615.md) |
| 2018-09-04 | [For more](https://medium.com/@craig_10243/for-more-f10559073979) | satoshi-history, monetary-economics, btc-critique, law-regulation | [summary](summaries-medium/for-more-f10559073979.md) |
| 2018-09-04 | [More from me](https://medium.com/@craig_10243/more-from-me-9cd80e197065) | mining-consensus, scaling-throughput, satoshi-history, security-economics | [summary](summaries-medium/more-from-me-9cd80e197065.md) |
| 2018-09-05 | [The paradox of the Übermensch](https://medium.com/@craig_10243/the-paradox-of-the-übermensch-4da7c1bcbd6c) | satoshi-history, governance-decentralisation, privacy, mining-consensus | [summary](summaries-medium/the-paradox-of-the-bermensch-4da7c1bcbd6c.md) |
| 2018-09-06 | [Vampire Securities from beyond the Wormhole](https://medium.com/@craig_10243/vampire-securities-from-beyond-the-wormhole-8c4e691c809e) | tokenisation, lightning-l2, law-regulation, mining-consensus | [summary](summaries-medium/vampire-securities-from-beyond-the-wormhole-8c4e691c809e.md) |
| 2018-09-07 | [Worm-a-nomics](https://medium.com/@craig_10243/worm-a-nomics-e8d59107f6d0) | tokenisation, monetary-economics, security-economics, lightning-l2 | [summary](summaries-medium/worm-a-nomics-e8d59107f6d0.md) |
| 2018-09-07 | [A diatribe on Bitcoin, Trust and the economy of security (redux)](https://medium.com/@craig_10243/a-diatribe-on-bitcoin-trust-and-the-economy-of-security-redux-b83b9b7943ff) | monetary-economics, btc-critique, micropayments | [summary](summaries-medium/a-diatribe-on-bitcoin-trust-and-the-economy-of-security-redux-b83b9b7943ff.md) |
| 2018-09-08 | [The Gamma Monstrosity & the Probability Deception](https://medium.com/@craig_10243/the-gamma-monstrosity-the-probability-deception-5e5003c4e657) | mining-consensus, security-economics, networking | [summary](summaries-medium/the-gamma-monstrosity-the-probability-deception-5e5003c4e657.md) |
| 2018-09-08 | [Why Scaling on-Chain Works](https://medium.com/@craig_10243/why-scaling-on-chain-works-5b78d6abb3c7) | scaling-throughput, governance-decentralisation | [summary](summaries-medium/why-scaling-on-chain-works-5b78d6abb3c7.md) |
| 2018-09-09 | [Misconceptions surrounding copyright](https://medium.com/@craig_10243/misconceptions-surrounding-copyright-bbfec4c212a5) | law-regulation, property-rights, tokenisation | [summary](summaries-medium/misconceptions-surrounding-copyright-bbfec4c212a5.md) |
| 2018-09-10 | [Stable by design](https://medium.com/@craig_10243/stable-by-design-e967b93dc147) | protocol-immutability, security-economics, btc-critique | [summary](summaries-medium/stable-by-design-e967b93dc147.md) |
| 2018-09-11 | [Trust and Risk](https://medium.com/@craig_10243/trust-and-risk-45d42d853693) | security-economics, micropayments, btc-critique | [summary](summaries-medium/trust-and-risk-45d42d853693.md) |
| 2018-09-12 | [Human rights and property](https://medium.com/@craig_10243/human-rights-and-property-2cde4181c012) | property-rights, tokenisation, privacy, law-regulation | [summary](summaries-medium/human-rights-and-property-2cde4181c012.md) |
| 2018-09-13 | [The 1937 Crash](https://medium.com/@craig_10243/the-1937-crash-c9ab5c3f5521) | monetary-economics, audit-accounting, governance-decentralisation | [summary](summaries-medium/the-1937-crash-c9ab5c3f5521.md) |
| 2018-09-14 | [Keynesian flaws.](https://medium.com/@craig_10243/keynesian-flaws-33ce9332d1f0) | monetary-economics, mining-consensus, governance-decentralisation, btc-critique | [summary](summaries-medium/keynesian-flaws-33ce9332d1f0.md) |
| 2018-09-15 | [Equality](https://medium.com/@craig_10243/equality-9948207d20e) | governance-decentralisation, scaling-throughput, btc-critique, monetary-economics | [summary](summaries-medium/equality-9948207d20e.md) |
| 2018-09-16 | [Q&A/Written Interview — The answers — Part 1](https://medium.com/@craig_10243/q-a-written-interview-the-answers-part-1-ec508ef92cc) | btc-critique, scaling-throughput, governance-decentralisation, identity | [summary](summaries-medium/q-a-written-interview-the-answers-part-1-ec508ef92cc.md) |
| 2018-09-17 | [Q&A/Written Interview — The answers — Part 2](https://medium.com/@craig_10243/q-a-written-interview-the-answers-part-2-20c3f5f84f67) | protocol-immutability, btc-critique, property-rights, scaling-throughput | [summary](summaries-medium/q-a-written-interview-the-answers-part-2-20c3f5f84f67.md) |
| 2018-09-17 | [Are the Poor Exploited?](https://medium.com/@craig_10243/are-the-poor-exploited-331790523319) | monetary-economics, micropayments, btc-critique | [summary](summaries-medium/are-the-poor-exploited-331790523319.md) |
| 2018-09-18 | [Q&A/Written Interview — The answers — Part 3](https://medium.com/@craig_10243/q-a-written-interview-the-answers-part-3-71116e036958) | monetary-economics, mining-consensus, scaling-throughput, btc-critique | [summary](summaries-medium/q-a-written-interview-the-answers-part-3-71116e036958.md) |
| 2018-09-18 | [Dynamic disequilibria and the creation of criminal opportunity](https://medium.com/@craig_10243/dynamic-disequilibria-and-the-creation-of-criminal-opportunity-255e98f59266) | security-economics, monetary-economics | [summary](summaries-medium/dynamic-disequilibria-and-the-creation-of-criminal-opportunity-255e98f59266.md) |
| 2018-09-18 | [I avoid bullshit and scams.](https://medium.com/@craig_10243/i-avoid-bullshit-and-scams-20407b5f252e) | btc-critique, satire | [summary](summaries-medium/i-avoid-bullshit-and-scams-20407b5f252e.md) |
| 2018-09-19 | [Q&A/Written Interview — The answers — Part 4](https://medium.com/@craig_10243/q-a-written-interview-the-answers-part-4-d6bfed8c4261) | privacy, law-regulation, mining-consensus, lightning-l2 | [summary](summaries-medium/q-a-written-interview-the-answers-part-4-d6bfed8c4261.md) |
| 2018-09-19 | [IoT and the coming Toaster-world](https://medium.com/@craig_10243/iot-and-the-coming-toaster-world-654edcdb977) | governance-decentralisation, networking, scaling-throughput | [summary](summaries-medium/iot-and-the-coming-toaster-world-654edcdb977.md) |
| 2018-09-20 | [I shall continue answering in order.](https://medium.com/@craig_10243/i-shall-continue-answering-in-order-eae445cba4bf) | governance-decentralisation, mining-consensus, btc-critique, scaling-throughput | [summary](summaries-medium/i-shall-continue-answering-in-order-eae445cba4bf.md) |
| 2018-09-24 | [Hoarding and Bitcoin](https://medium.com/@craig_10243/hoarding-and-bitcoin-b158d465aea6) | monetary-economics, btc-critique, lightning-l2 | [summary](summaries-medium/hoarding-and-bitcoin-b158d465aea6.md) |
| 2018-09-25 | [Simplicity in Bitcoin](https://medium.com/@craig_10243/simplicity-in-bitcoin-1d4bcc6ce0c2) | security-economics, btc-critique, scaling-throughput | [summary](summaries-medium/simplicity-in-bitcoin-1d4bcc6ce0c2.md) |
| 2018-09-26 | [Why is Bitcoin Open Source?](https://medium.com/@craig_10243/why-is-bitcoin-open-source-196273d1712b) | security-economics, protocol-immutability, btc-critique | [summary](summaries-medium/why-is-bitcoin-open-source-196273d1712b.md) |
| 2018-09-27 | [The postal acceptance rule in Bitcoin](https://medium.com/@craig_10243/the-postal-acceptance-rule-in-bitcoin-e1c38ff9a4a9) | law-regulation, mining-consensus, networking | [summary](summaries-medium/the-postal-acceptance-rule-in-bitcoin-e1c38ff9a4a9.md) |
| 2018-09-28 | [Defining smart contracts](https://medium.com/@craig_10243/defining-smart-contracts-eb31fd825de6) | law-regulation, script-technical, btc-critique | [summary](summaries-medium/defining-smart-contracts-eb31fd825de6.md) |
| 2018-09-29 | [Bitcoin and Contracts](https://medium.com/@craig_10243/bitcoin-and-contracts-3542ae5f43ff) | law-regulation, spv-light-clients, monetary-economics | [summary](summaries-medium/bitcoin-and-contracts-3542ae5f43ff.md) |
| 2018-09-30 | [The application, scope and limits of Letters of Indemnity in Bitcoin Contracts](https://medium.com/@craig_10243/the-application-scope-and-limits-of-letters-of-indemnity-in-bitcoin-contracts-633e1491cf1) | law-regulation, property-rights, intermediaries | [summary](summaries-medium/the-application-scope-and-limits-of-letters-of-indemnity-in-bitcoin-contracts-63.md) |
| 2018-10-01 | [Bitcoin as a Notary](https://medium.com/@craig_10243/bitcoin-as-a-notary-d260589fcd06) | law-regulation, identity, audit-accounting, governance-decentralisation | [summary](summaries-medium/bitcoin-as-a-notary-d260589fcd06.md) |
| 2018-10-03 | [Security in a world of IPv6 and Bitcoin](https://medium.com/@craig_10243/security-in-a-world-of-ipv6-and-bitcoin-a31592b4f9ac) | networking, security-economics, micropayments | [summary](summaries-medium/security-in-a-world-of-ipv6-and-bitcoin-a31592b4f9ac.md) |
| 2018-10-04 | [The infinite money fallacy](https://medium.com/@craig_10243/the-infinite-money-fallacy-3c7a541a2977) | security-economics, wallets-keys, btc-critique | [summary](summaries-medium/the-infinite-money-fallacy-3c7a541a2977.md) |
| 2018-10-05 | [The Labour Fallacy of Bitcoin Value](https://medium.com/@craig_10243/the-labour-fallacy-of-bitcoin-value-f375dd58e044) | monetary-economics, btc-critique, law-regulation | [summary](summaries-medium/the-labour-fallacy-of-bitcoin-value-f375dd58e044.md) |
| 2018-10-06 | [Hidden costs](https://medium.com/@craig_10243/hidden-costs-8afaab3d9b1b) | monetary-economics, btc-critique, protocol-immutability, governance-decentralisation | [summary](summaries-medium/hidden-costs-8afaab3d9b1b.md) |
| 2018-10-06 | [Scenario 1: Public Registry of an Asset](https://medium.com/@craig_10243/scenario-1-public-registry-of-an-asset-f89787870e54) | tokenisation, property-rights, script-technical | [summary](summaries-medium/scenario-1-public-registry-of-an-asset-f89787870e54.md) |
| 2018-10-06 | [Scenario 2: Creation and Registry of an Asset](https://medium.com/@craig_10243/scenario-2-creation-and-registry-of-an-asset-2b6379bc57ef) | tokenisation, privacy, wallets-keys, property-rights | [summary](summaries-medium/scenario-2-creation-and-registry-of-an-asset-2b6379bc57ef.md) |
| 2018-10-06 | [Scenario 3: Lease Contract](https://medium.com/@craig_10243/scenario-3-lease-contract-d0ee4cd3900e) | tokenisation, script-technical, law-regulation | [summary](summaries-medium/scenario-3-lease-contract-d0ee4cd3900e.md) |
| 2018-10-06 | [Scenario 4: Rolling Contract](https://medium.com/@craig_10243/scenario-4-rolling-contract-5f73d87c7f5) | tokenisation, script-technical, law-regulation | [summary](summaries-medium/scenario-4-rolling-contract-5f73d87c7f5.md) |
| 2018-10-06 | [Scenario 5: Contract Conditionality](https://medium.com/@craig_10243/scenario-5-contract-conditionality-5155ef919f9f) | tokenisation, script-technical, law-regulation, intermediaries | [summary](summaries-medium/scenario-5-contract-conditionality-5155ef919f9f.md) |
| 2018-10-06 | [Creating a Smart Contract Registry](https://medium.com/@craig_10243/creating-a-smart-contract-registry-26dac7f238f5) | script-technical, tokenisation, law-regulation | [summary](summaries-medium/creating-a-smart-contract-registry-26dac7f238f5.md) |
| 2018-10-07 | [Trust in Smart Contracts](https://medium.com/@craig_10243/trust-in-smart-contracts-28f99f23d7e8) | security-economics, script-technical, protocol-immutability | [summary](summaries-medium/trust-in-smart-contracts-28f99f23d7e8.md) |
| 2018-10-08 | [Security](https://medium.com/@craig_10243/security-5926122babf9) | security-economics, protocol-immutability, btc-critique | [summary](summaries-medium/security-5926122babf9.md) |
| 2018-10-09 | [Personal Security Device](https://medium.com/@craig_10243/personal-security-device-102c2441b5a2) | wallets-keys, identity | [summary](summaries-medium/personal-security-device-102c2441b5a2.md) |
| 2018-10-10 | [Bitcoin (BCH) Vending machine](https://medium.com/@craig_10243/bitcoin-bch-vending-machine-600666d669d0) | spv-light-clients, security-economics, micropayments | [summary](summaries-medium/bitcoin-bch-vending-machine-600666d669d0.md) |
| 2018-10-11 | [What is Bitcoin](https://medium.com/@craig_10243/what-is-bitcoin-cdb0a3133586) | law-regulation, monetary-economics, property-rights | [summary](summaries-medium/what-is-bitcoin-cdb0a3133586.md) |
| 2018-10-12 | [Bitcoin: A Total Turing Machine](https://medium.com/@craig_10243/bitcoin-a-total-turing-machine-5a6c3c68f5a7) | script-technical, btc-critique, protocol-immutability | [summary](summaries-medium/bitcoin-a-total-turing-machine-5a6c3c68f5a7.md) |
| 2018-10-12 | [A Proof of Turing completeness in Bitcoin Script](https://medium.com/@craig_10243/a-proof-of-turing-completeness-in-bitcoin-script-3cf5aa7aeb83) | script-technical, btc-critique | [summary](summaries-medium/a-proof-of-turing-completeness-in-bitcoin-script-3cf5aa7aeb83.md) |
| 2018-10-12 | [What is Bitcoin….](https://medium.com/@craig_10243/what-is-bitcoin-8ee9d3e86674) | monetary-economics, law-regulation, mining-consensus | [summary](summaries-medium/what-is-bitcoin-8ee9d3e86674.md) |
| 2018-10-13 | [Problems and key questions around Bitcoin](https://medium.com/@craig_10243/problems-and-key-questions-around-bitcoin-76fc7282aae4) | law-regulation, monetary-economics, intermediaries | [summary](summaries-medium/problems-and-key-questions-around-bitcoin-76fc7282aae4.md) |
| 2018-10-14 | [The tax implications of bitcoin as money](https://medium.com/@craig_10243/the-tax-implications-of-bitcoin-as-money-2572cf2573fc) | law-regulation, audit-accounting, monetary-economics | [summary](summaries-medium/the-tax-implications-of-bitcoin-as-money-2572cf2573fc.md) |
| 2018-10-15 | [Symmetric Fair Exchange Protocol](https://medium.com/@craig_10243/symmetric-fair-exchange-protocol-b3153bab429b) | script-technical, intermediaries | [summary](summaries-medium/symmetric-fair-exchange-protocol-b3153bab429b.md) |
| 2018-10-16 | [Digital signature rules and their relationship to bitcoin](https://medium.com/@craig_10243/digital-signature-rules-and-their-relationship-to-bitcoin-b1faeae1f446) | law-regulation, intermediaries, identity | [summary](summaries-medium/digital-signature-rules-and-their-relationship-to-bitcoin-b1faeae1f446.md) |
| 2018-10-16 | [A codification scheme for state machines](https://medium.com/@craig_10243/a-codification-scheme-for-state-machines-c5b1cb9351ec) | script-technical, tokenisation, law-regulation | [summary](summaries-medium/a-codification-scheme-for-state-machines-c5b1cb9351ec.md) |
| 2018-10-17 | [Foreign-exchange considerations & Bitcoin](https://medium.com/@craig_10243/foreign-exchange-considerations-bitcoin-c2d112386a97) | law-regulation, monetary-economics | [summary](summaries-medium/foreign-exchange-considerations-bitcoin-c2d112386a97.md) |
| 2018-10-17 | [A distribution protocol for dealer-less secret distribution](https://medium.com/@craig_10243/a-distribution-protocol-for-dealer-less-secret-distribution-60b61a97da10) | wallets-keys, security-economics, intermediaries | [summary](summaries-medium/a-distribution-protocol-for-dealer-less-secret-distribution-60b61a97da10.md) |
| 2018-10-17 | [Blockchain-Based Decentralised Autonomous Corporations: An Overview](https://medium.com/@craig_10243/blockchain-based-decentralised-autonomous-corporations-an-overview-5dc0d469fcb5) | tokenisation, ai-blockchain, btc-critique, governance-decentralisation | [summary](summaries-medium/blockchain-based-decentralised-autonomous-corporations-an-overview-5dc0d469fcb5.md) |
| 2018-10-18 | [Monetary transfer and transmission rules](https://medium.com/@craig_10243/monetary-transfer-and-transmission-rules-89b76489807e) | law-regulation, intermediaries, monetary-economics | [summary](summaries-medium/monetary-transfer-and-transmission-rules-89b76489807e.md) |
| 2018-10-19 | [Rights as property](https://medium.com/@craig_10243/rights-as-property-68c55b475880) | property-rights, law-regulation, tokenisation | [summary](summaries-medium/rights-as-property-68c55b475880.md) |
| 2018-10-19 | [DFA compilation and execution](https://medium.com/@craig_10243/dfa-compilation-and-execution-38e6815897d2) | script-technical, law-regulation, intermediaries | [summary](summaries-medium/dfa-compilation-and-execution-38e6815897d2.md) |
| 2018-10-20 | [Phases of the Bitcoin system](https://medium.com/@craig_10243/phases-of-the-bitcoin-system-eb5531a711b4) | mining-consensus, intermediaries, wallets-keys | [summary](summaries-medium/phases-of-the-bitcoin-system-eb5531a711b4.md) |
| 2018-10-21 | [Managing Blockchain Automata](https://medium.com/@craig_10243/managing-blockchain-automata-f34fe622a6d) | intermediaries, networking, micropayments, script-technical | [summary](summaries-medium/managing-blockchain-automata-f34fe622a6d.md) |
| 2018-10-23 | [OpSec and the Bitcoin business](https://medium.com/@craig_10243/opsec-and-the-bitcoin-business-db5691ebe907) | law-regulation, privacy, audit-accounting | [summary](summaries-medium/opsec-and-the-bitcoin-business-db5691ebe907.md) |
| 2018-10-24 | [Hearsay in the Blockchain world](https://medium.com/@craig_10243/hearsay-in-the-blockchain-world-e75196db28fe) | law-regulation, privacy, identity | [summary](summaries-medium/hearsay-in-the-blockchain-world-e75196db28fe.md) |
| 2018-10-26 | [Neural Network Threshold Oracles](https://medium.com/@craig_10243/neural-network-threshold-oracles-92497c2f245c) | ai-blockchain, script-technical, security-economics | [summary](summaries-medium/neural-network-threshold-oracles-92497c2f245c.md) |
| 2018-10-27 | [Burning and why it matters that it is stopped](https://medium.com/@craig_10243/burning-and-why-it-matters-that-it-is-stopped-2aa0af10d4d1) | tokenisation, monetary-economics, law-regulation, protocol-immutability | [summary](summaries-medium/burning-and-why-it-matters-that-it-is-stopped-2aa0af10d4d1.md) |
| 2018-10-28 | [Taxing Bitcoin — Introduction.](https://medium.com/@craig_10243/taxing-bitcoin-introduction-2bacb31df9ca) | law-regulation, monetary-economics, audit-accounting | [summary](summaries-medium/taxing-bitcoin-introduction-2bacb31df9ca.md) |
| 2018-10-28 | [Myths of permission-less](https://medium.com/@craig_10243/myths-of-permission-less-d39b4af7ad9d) | law-regulation, governance-decentralisation, property-rights, tokenisation | [summary](summaries-medium/myths-of-permission-less-d39b4af7ad9d.md) |
| 2018-10-29 | [Taxing Bitcoin — Ordinary and tax concepts of “Money”](https://medium.com/@craig_10243/taxing-bitcoin-ordinary-and-tax-concepts-of-money-15f935c60260) | law-regulation, monetary-economics, property-rights | [summary](summaries-medium/taxing-bitcoin-ordinary-and-tax-concepts-of-money-15f935c60260.md) |
| 2018-10-30 | [Taxing Bitcoin — GST implications of Bitcoin as money](https://medium.com/@craig_10243/taxing-bitcoin-gst-implications-of-bitcoin-as-money-7d3b4bfabb50) | law-regulation, monetary-economics, mining-consensus, audit-accounting | [summary](summaries-medium/taxing-bitcoin-gst-implications-of-bitcoin-as-money-7d3b4bfabb50.md) |
| 2018-10-30 | [A Bitcoin Smart Risk Contract](https://medium.com/@craig_10243/a-bitcoin-smart-risk-contract-6ff2ac8dd93d) | security-economics, law-regulation, audit-accounting | [summary](summaries-medium/a-bitcoin-smart-risk-contract-6ff2ac8dd93d.md) |
| 2018-10-30 | [The scams in Crypto](https://medium.com/@craig_10243/the-scams-in-crypto-376e327df2af) | law-regulation, tokenisation, governance-decentralisation | [summary](summaries-medium/the-scams-in-crypto-376e327df2af.md) |
| 2018-10-31 | [Property Law in the Age of Bitcoin](https://medium.com/@craig_10243/property-law-in-the-age-of-bitcoin-28355604618f) | property-rights, law-regulation, mining-consensus, networking | [summary](summaries-medium/property-law-in-the-age-of-bitcoin-28355604618f.md) |
| 2018-10-31 | [Tax and Bitcoin — Income tax implications of Bitcoin as money](https://medium.com/@craig_10243/tax-and-bitcoin-income-tax-implications-of-bitcoin-as-money-d29498766d83) | law-regulation, monetary-economics, audit-accounting | [summary](summaries-medium/tax-and-bitcoin-income-tax-implications-of-bitcoin-as-money-d29498766d83.md) |
| 2018-10-31 | [True Sale and Insolvency Challenges in ICO Token Sales](https://medium.com/@craig_10243/true-sale-and-insolvency-challenges-in-ico-token-sales-561a48706ece) | law-regulation, tokenisation | [summary](summaries-medium/true-sale-and-insolvency-challenges-in-ico-token-sales-561a48706ece.md) |
| 2018-11-01 | [Tax and Bitcoin — Investment in Bitcoin](https://medium.com/@craig_10243/tax-and-bitcoin-investment-in-bitcoin-40a23e4cbda5) | law-regulation, monetary-economics, audit-accounting | [summary](summaries-medium/tax-and-bitcoin-investment-in-bitcoin-40a23e4cbda5.md) |
| 2018-11-01 | [Bitcoin as the Base layer](https://medium.com/@craig_10243/bitcoin-as-the-base-layer-cff28c5dab9c) | networking, security-economics, privacy | [summary](summaries-medium/bitcoin-as-the-base-layer-cff28c5dab9c.md) |
| 2018-11-02 | [Tax and Bitcoin — Transacting and accounting for Bitcoin](https://medium.com/@craig_10243/tax-and-bitcoin-transacting-and-accounting-for-bitcoin-f858631f0a89) | law-regulation, audit-accounting, monetary-economics | [summary](summaries-medium/tax-and-bitcoin-transacting-and-accounting-for-bitcoin-f858631f0a89.md) |
| 2018-11-02 | [IPv6 with CGA and Bitcoin](https://medium.com/@craig_10243/ipv6-with-cga-and-bitcoin-a761d0185d5d) | networking, privacy, identity | [summary](summaries-medium/ipv6-with-cga-and-bitcoin-a761d0185d5d.md) |
| 2018-11-03 | [The Secure (Bitcoin) Internet](https://medium.com/@craig_10243/the-secure-bitcoin-internet-2f589d81890f) | networking, security-economics, privacy | [summary](summaries-medium/the-secure-bitcoin-internet-2f589d81890f.md) |
| 2018-11-04 | [Coin burning for dummies](https://medium.com/@craig_10243/coin-burning-for-dummies-baa3cd14f915) | monetary-economics, tokenisation, security-economics | [summary](summaries-medium/coin-burning-for-dummies-baa3cd14f915.md) |
| 2018-11-06 | [Bitcoin is all about incentives](https://medium.com/@craig_10243/bitcoin-is-all-about-incentives-72894518f6b5) | mining-consensus, protocol-immutability, monetary-economics, governance-decentralisation | [summary](summaries-medium/bitcoin-is-all-about-incentives-72894518f6b5.md) |
| 2018-11-06 | [Drugs, Fraud and Murder](https://medium.com/@craig_10243/drugs-fraud-and-murder-ddf12208ae8b) | law-regulation, mining-consensus, governance-decentralisation, script-technical | [summary](summaries-medium/drugs-fraud-and-murder-ddf12208ae8b.md) |
| 2018-11-07 | [Rent seeking in economics and Crypto](https://medium.com/@craig_10243/rent-seeking-in-economics-and-crypto-344e3d54bd81) | monetary-economics, mining-consensus, governance-decentralisation | [summary](summaries-medium/rent-seeking-in-economics-and-crypto-344e3d54bd81.md) |
| 2018-11-07 | [Repudiation](https://medium.com/@craig_10243/repudiation-3b35bd315abf) | law-regulation, property-rights, wallets-keys | [summary](summaries-medium/repudiation-3b35bd315abf.md) |
| 2018-11-08 | [Fixing OP_Fals](https://medium.com/@craig_10243/fixing-op-fals-fd157899d2b7) | monetary-economics, mining-consensus, protocol-immutability, script-technical | [summary](summaries-medium/fixing-op-fals-fd157899d2b7.md) |
| 2018-11-08 | [Sun-setting P2SH](https://medium.com/@craig_10243/sun-setting-p2sh-8b3c08f271c0) | protocol-immutability, script-technical, lightning-l2, governance-decentralisation | [summary](summaries-medium/sun-setting-p2sh-8b3c08f271c0.md) |
| 2018-11-09 | [P2P and returning IP and Domain based transfers](https://medium.com/@craig_10243/p2p-and-returning-ip-and-domain-based-transfers-9943d32bd38e) | spv-light-clients, networking, satoshi-history, protocol-immutability | [summary](summaries-medium/p2p-and-returning-ip-and-domain-based-transfers-9943d32bd38e.md) |
| 2018-11-09 | [Bitcoin is not Anti State — it is Pro Honest government](https://medium.com/@craig_10243/bitcoin-is-not-anti-state-it-is-pro-honest-government-1ab1ec0a9fba) | law-regulation, privacy, governance-decentralisation, monetary-economics | [summary](summaries-medium/bitcoin-is-not-anti-state-it-is-pro-honest-government-1ab1ec0a9fba.md) |
| 2018-11-10 | [Corporate Activism](https://medium.com/@craig_10243/corporate-activism-1b34eece57f3) | law-regulation, mining-consensus, governance-decentralisation, protocol-immutability | [summary](summaries-medium/corporate-activism-1b34eece57f3.md) |
| 2018-11-11 | [Payment intermediaries](https://medium.com/@craig_10243/payment-intermediaries-db46605e79f4) | intermediaries, monetary-economics, law-regulation | [summary](summaries-medium/payment-intermediaries-db46605e79f4.md) |
| 2018-11-12 | [Prevention is the key](https://medium.com/@craig_10243/prevention-is-the-key-5c74d098c53a) | intermediaries, security-economics, law-regulation, script-technical | [summary](summaries-medium/prevention-is-the-key-5c74d098c53a.md) |
| 2018-11-13 | [Sustaining Hash](https://medium.com/@craig_10243/sustaining-hash-50cad6c16c4b) | mining-consensus, security-economics, governance-decentralisation | [summary](summaries-medium/sustaining-hash-50cad6c16c4b.md) |
| 2018-11-13 | [nSequence and P2P exchange](https://medium.com/@craig_10243/nsequence-and-p2p-exchange-9e4cbf32124c) | script-technical, protocol-immutability, micropayments, lightning-l2 | [summary](summaries-medium/nsequence-and-p2p-exchange-9e4cbf32124c.md) |
| 2018-11-13 | [Building Data](https://medium.com/@craig_10243/building-data-84e2501cf71b) | script-technical, scaling-throughput, protocol-immutability, mining-consensus | [summary](summaries-medium/building-data-84e2501cf71b.md) |
| 2018-11-14 | [Proof of State, or, the new Fed](https://medium.com/@craig_10243/proof-of-state-or-the-new-fed-41ae1a117093) | monetary-economics, mining-consensus, governance-decentralisation, btc-critique | [summary](summaries-medium/proof-of-state-or-the-new-fed-41ae1a117093.md) |
| 2018-11-14 | [Miners and Property rights](https://medium.com/@craig_10243/miners-and-property-rights-a7c5a01252e2) | law-regulation, property-rights, mining-consensus, governance-decentralisation | [summary](summaries-medium/miners-and-property-rights-a7c5a01252e2.md) |
| 2018-11-15 | [The hardware wallet in a phone](https://medium.com/@craig_10243/the-hardware-wallet-in-a-phone-a2fbbcf03a74) | wallets-keys, security-economics | [summary](summaries-medium/the-hardware-wallet-in-a-phone-a2fbbcf03a74.md) |
| 2018-11-15 | [Set in Stone](https://medium.com/@craig_10243/set-in-stone-7ebc9d31500e) | protocol-immutability, monetary-economics, satoshi-history, governance-decentralisation | [summary](summaries-medium/set-in-stone-7ebc9d31500e.md) |
| 2018-11-16 | [Present Liability Schemes and Sanctions](https://medium.com/@craig_10243/present-liability-schemes-and-sanctions-944888a00c6b) | law-regulation, intermediaries, tokenisation, governance-decentralisation | [summary](summaries-medium/present-liability-schemes-and-sanctions-944888a00c6b.md) |
| 2018-11-18 | [Taking care of Business.](https://medium.com/@craig_10243/taking-care-of-business-63430b62be2f) | scaling-throughput, monetary-economics, btc-critique | [summary](summaries-medium/taking-care-of-business-63430b62be2f.md) |
| 2018-11-19 | [Commodity and security](https://medium.com/@craig_10243/commodity-and-security-4fa134c99f14) | law-regulation, mining-consensus, monetary-economics | [summary](summaries-medium/commodity-and-security-4fa134c99f14.md) |
| 2018-11-20 | [Bitcoin is for Business](https://medium.com/@craig_10243/bitcoin-is-for-business-168b683b51c7) | scaling-throughput, monetary-economics, btc-critique | [summary](summaries-medium/bitcoin-is-for-business-168b683b51c7.md) |
| 2018-11-23 | [Subsidised ledgers](https://medium.com/@craig_10243/subsidised-ledgers-193a5b490fe) | mining-consensus, security-economics, scaling-throughput | [summary](summaries-medium/subsidised-ledgers-193a5b490fe.md) |
| 2018-11-24 | [A house divided](https://medium.com/@craig_10243/a-house-divided-ebdea8f4d655) | law-regulation, property-rights, governance-decentralisation | [summary](summaries-medium/a-house-divided-ebdea8f4d655.md) |
| 2018-11-25 | [Valuing systems — the margin of substitute goods.](https://medium.com/@craig_10243/valuing-systems-the-margin-of-substitute-goods-891b47fe381e) | monetary-economics, scaling-throughput, mining-consensus | [summary](summaries-medium/valuing-systems-the-margin-of-substitute-goods-891b47fe381e.md) |
| 2018-11-26 | [Why I troll](https://medium.com/@craig_10243/why-i-troll-5304f2cbbfc3) | mining-consensus, networking, security-economics | [summary](summaries-medium/why-i-troll-5304f2cbbfc3.md) |
| 2018-12-09 | [Instant transactions](https://medium.com/@craig_10243/instant-transactions-a11f391fbd57) | security-economics, spv-light-clients, law-regulation, wallets-keys | [summary](summaries-medium/instant-transactions-a11f391fbd57.md) |
| 2018-12-10 | [The Fury](https://medium.com/@craig_10243/the-fury-fb603e344d20) | satoshi-history, law-regulation, governance-decentralisation | [summary](summaries-medium/the-fury-fb603e344d20.md) |
| 2018-12-10 | [Why Silk Road was an abyss](https://medium.com/@craig_10243/why-silk-road-was-an-abyss-67526e2902da) | privacy, law-regulation, identity | [summary](summaries-medium/why-silk-road-was-an-abyss-67526e2902da.md) |
| 2018-12-11 | [BSV is the only Bitcoin.](https://medium.com/@craig_10243/bsv-is-the-only-bitcoin-e1f045bc7cc8) | protocol-immutability, btc-critique | [summary](summaries-medium/bsv-is-the-only-bitcoin-e1f045bc7cc8.md) |
| 2018-12-11 | [Bitcoin’s privacy model](https://medium.com/@craig_10243/bitcoins-privacy-model-7ef7e79caf9f) | privacy, wallets-keys, identity, scaling-throughput | [summary](summaries-medium/bitcoins-privacy-model-7ef7e79caf9f.md) |
| 2018-12-12 | [Bitcoin is a commodity](https://medium.com/@craig_10243/bitcoin-is-a-commodity-1635dfca32fd) | monetary-economics, law-regulation, scaling-throughput, property-rights | [summary](summaries-medium/bitcoin-is-a-commodity-1635dfca32fd.md) |
| 2018-12-13 | [The lie of anarchy](https://medium.com/@craig_10243/the-lie-of-anarchy-bd7c1f239289) | law-regulation, audit-accounting, protocol-immutability, governance-decentralisation | [summary](summaries-medium/the-lie-of-anarchy-bd7c1f239289.md) |
| 2018-12-14 | [BLOCKCHAIN Based Accounting:
 General Ledger Posting](https://medium.com/@craig_10243/blockchain-based-accounting-general-ledger-posting-f2050cd6ed1c) | audit-accounting, tokenisation, wallets-keys, script-technical | [summary](summaries-medium/blockchain-based-accounting-general-ledger-posting-f2050cd6ed1c.md) |
| 2018-12-18 | [Private blockchains are a matter of economic forces](https://medium.com/@craig_10243/private-blockchains-are-a-matter-of-economic-forces-9b41c18e2a84) | security-economics, script-technical, protocol-immutability, scaling-throughput | [summary](summaries-medium/private-blockchains-are-a-matter-of-economic-forces-9b41c18e2a84.md) |
| 2018-12-18 | [Bitcoin in law](https://medium.com/@craig_10243/bitcoin-in-law-7f2604f9fcd6) | law-regulation, property-rights, tokenisation, spv-light-clients | [summary](summaries-medium/bitcoin-in-law-7f2604f9fcd6.md) |
| 2018-12-19 | [Currency](https://medium.com/@craig_10243/currency-e725723340c3) | monetary-economics, law-regulation, property-rights, mining-consensus | [summary](summaries-medium/currency-e725723340c3.md) |
| 2018-12-20 | [Expectation of Profits](https://medium.com/@craig_10243/expectation-of-profits-a56c845056a3) | law-regulation, tokenisation | [summary](summaries-medium/expectation-of-profits-a56c845056a3.md) |
| 2018-12-21 | [On Predicates](https://medium.com/@craig_10243/on-predicates-b92df80f9b76) | law-regulation, script-technical | [summary](summaries-medium/on-predicates-b92df80f9b76.md) |
| 2018-12-21 | [The myth of the full validation node](https://medium.com/@craig_10243/the-myth-of-the-full-validation-node-d7db52748649) | btc-critique, mining-consensus, spv-light-clients, protocol-immutability | [summary](summaries-medium/the-myth-of-the-full-validation-node-d7db52748649.md) |
| 2018-12-22 | [Account and Transfer Systems.](https://medium.com/@craig_10243/account-and-transfer-systems-5f713649f158) | intermediaries, wallets-keys, law-regulation | [summary](summaries-medium/account-and-transfer-systems-5f713649f158.md) |
| 2018-12-24 | [Crowd Funding and ICOs](https://medium.com/@craig_10243/crowd-funding-and-icos-35780d27a24d) | law-regulation, tokenisation | [summary](summaries-medium/crowd-funding-and-icos-35780d27a24d.md) |
| 2018-12-27 | [Breach of contract — Remedies for breach](https://medium.com/@craig_10243/breach-of-contract-remedies-for-breach-71fb0ff2b1fd) | law-regulation, script-technical | [summary](summaries-medium/breach-of-contract-remedies-for-breach-71fb0ff2b1fd.md) |
| 2018-12-28 | [Contract Law and Smart Contracts](https://medium.com/@craig_10243/contract-law-and-smart-contracts-1f1531f4bbd0) | law-regulation, script-technical, intermediaries | [summary](summaries-medium/contract-law-and-smart-contracts-1f1531f4bbd0.md) |
| 2018-12-29 | [Miners and rational expectations](https://medium.com/@craig_10243/miners-and-rational-expectations-170d71ac23ee) | mining-consensus, security-economics, btc-critique | [summary](summaries-medium/miners-and-rational-expectations-170d71ac23ee.md) |
| 2018-12-30 | [Splitting a registry](https://medium.com/@craig_10243/splitting-a-registry-a932933cba15) | script-technical, property-rights, law-regulation | [summary](summaries-medium/splitting-a-registry-a932933cba15.md) |
| 2019-01-06 | [An immutable file and data store](https://medium.com/@craig_10243/an-immutable-file-and-data-store-36f67fc044d7) | privacy, wallets-keys, protocol-immutability, tokenisation | [summary](summaries-medium/an-immutable-file-and-data-store-36f67fc044d7.md) |
| 2019-01-08 | [Why CLTV was a bad idea](https://medium.com/@craig_10243/why-cltv-was-a-bad-idea-4b5d0c043e2a) | btc-critique, script-technical, lightning-l2, protocol-immutability | [summary](summaries-medium/why-cltv-was-a-bad-idea-4b5d0c043e2a.md) |
| 2019-01-13 | [Smart-card-based mobile wallets](https://medium.com/@craig_10243/smart-card-based-mobile-wallets-9cb75595b71d) | wallets-keys, identity, privacy, security-economics | [summary](summaries-medium/smart-card-based-mobile-wallets-9cb75595b71d.md) |
| 2019-01-16 | [The ASIC myth](https://medium.com/@craig_10243/the-asic-myth-583aefbecce3) | mining-consensus, security-economics, networking, scaling-throughput | [summary](summaries-medium/the-asic-myth-583aefbecce3.md) |
| 2019-01-20 | [Taking money over the web using Bitcoin — the way it was designed](https://medium.com/@craig_10243/taking-money-over-the-web-using-bitcoin-the-way-it-was-designed-446385c1a04b) | wallets-keys, privacy, tokenisation, micropayments | [summary](summaries-medium/taking-money-over-the-web-using-bitcoin-the-way-it-was-designed-446385c1a04b.md) |
| 2019-01-23 | [Ensuring honest money](https://medium.com/@craig_10243/ensuring-honest-money-c49ec9110ec6) | law-regulation, wallets-keys, privacy, property-rights | [summary](summaries-medium/ensuring-honest-money-c49ec9110ec6.md) |
| 2019-01-23 | [Bitcoin and Quantum Computing](https://medium.com/@craig_10243/bitcoin-and-quantum-computing-b6f048db01eb) | quantum-scepticism, script-technical, security-economics, btc-critique | [summary](summaries-medium/bitcoin-and-quantum-computing-b6f048db01eb.md) |
| 2019-01-27 | [Storing IP on the Blockchain](https://medium.com/@craig_10243/storing-ip-on-the-blockchain-c8fbfb962a99) | tokenisation, micropayments, property-rights, script-technical | [summary](summaries-medium/storing-ip-on-the-blockchain-c8fbfb962a99.md) |
| 2019-02-01 | [“Lightning” Network and the Financial Industry Regulatory Authority (FINRA)](https://medium.com/@craig_10243/lightning-network-and-the-financial-industry-regulatory-authority-finra-bbbf28ccddac) | law-regulation, lightning-l2, intermediaries, privacy | [summary](summaries-medium/lightning-network-and-the-financial-industry-regulatory-authority-finra-bbbf28cc.md) |
| 2019-02-03 | [Generic Thin Operating  System for Blockchain IOT Devices](https://medium.com/@craig_10243/generic-thin-operating-system-for-blockchain-iot-devices-32e7abf22c0e) | micropayments, networking, scaling-throughput, security-economics | [summary](summaries-medium/generic-thin-operating-system-for-blockchain-iot-devices-32e7abf22c0e.md) |
| 2019-02-08 | [Careful what you wish for…](https://medium.com/@craig_10243/careful-what-you-wish-for-c7c2f19e6c4f) | satoshi-history, lightning-l2, law-regulation, btc-critique | [summary](summaries-medium/careful-what-you-wish-for-c7c2f19e6c4f.md) |
| 2019-02-09 | [The story of Bitcoin, continued](https://medium.com/@craig_10243/the-story-of-bitcoin-continued-2f1ec78ba38b) | satoshi-history, privacy, law-regulation, protocol-immutability | [summary](summaries-medium/the-story-of-bitcoin-continued-2f1ec78ba38b.md) |
| 2019-02-10 | [Secure wallet systems](https://medium.com/@craig_10243/secure-wallet-systems-614af37aa7f) | wallets-keys, security-economics, script-technical | [summary](summaries-medium/secure-wallet-systems-614af37aa7f.md) |
| 2019-02-12 | [The false lure of anonymity](https://medium.com/@craig_10243/the-false-lure-of-anonymity-110a35088979) | privacy, mining-consensus, governance-decentralisation, law-regulation | [summary](summaries-medium/the-false-lure-of-anonymity-110a35088979.md) |
| 2019-02-14 | [The start of Metanet](https://medium.com/@craig_10243/the-start-of-metanet-ef0560e81505) | networking, security-economics, micropayments, monetary-economics | [summary](summaries-medium/the-start-of-metanet-ef0560e81505.md) |
| 2019-02-16 | [Proof of Work](https://medium.com/@craig_10243/proof-of-work-1a323e82fd9) | satoshi-history, privacy, btc-critique, protocol-immutability | [summary](summaries-medium/proof-of-work-1a323e82fd9.md) |
| 2019-02-16 | [Immutable evidence](https://medium.com/@craig_10243/immutable-evidence-386b60a33123) | audit-accounting, protocol-immutability, lightning-l2, law-regulation | [summary](summaries-medium/immutable-evidence-386b60a33123.md) |
| 2019-02-18 | [The great mining swindle](https://medium.com/@craig_10243/the-great-mining-swindle-2dec8ffa819d) | mining-consensus, scaling-throughput, btc-critique, networking | [summary](summaries-medium/the-great-mining-swindle-2dec8ffa819d.md) |
| 2019-02-22 | [Hello Dave…](https://medium.com/@craig_10243/hello-dave-330c164a4aad) | satoshi-history, lightning-l2, law-regulation, privacy | [summary](summaries-medium/hello-dave-330c164a4aad.md) |
| 2019-02-24 | [Forex accounting in script](https://medium.com/@craig_10243/forex-accounting-in-script-51984db05c6f) | script-technical, law-regulation, tokenisation, audit-accounting | [summary](summaries-medium/forex-accounting-in-script-51984db05c6f.md) |
| 2019-02-25 | [Lessons in monetary terms](https://medium.com/@craig_10243/lessons-in-monetary-terms-5e1493e0d197) | monetary-economics, law-regulation, property-rights | [summary](summaries-medium/lessons-in-monetary-terms-5e1493e0d197.md) |
| 2019-02-27 | [Statist](https://medium.com/@craig_10243/statist-9fba301c0a08) | governance-decentralisation, law-regulation, property-rights, monetary-economics | [summary](summaries-medium/statist-9fba301c0a08.md) |
| 2019-03-03 | [Schnorr](https://medium.com/@craig_10243/schnorr-21be14ac05f5) | privacy, law-regulation, lightning-l2, btc-critique | [summary](summaries-medium/schnorr-21be14ac05f5.md) |
| 2019-03-03 | [Clickwrap smart contracts](https://medium.com/@craig_10243/clickwrap-smart-contracts-3338507105bf) | law-regulation, script-technical, tokenisation, protocol-immutability | [summary](summaries-medium/clickwrap-smart-contracts-3338507105bf.md) |
| 2019-03-04 | [Proof of (unregistered) security](https://medium.com/@craig_10243/proof-of-unregistered-security-798f4df2fbb9) | law-regulation, security-economics, mining-consensus, governance-decentralisation | [summary](summaries-medium/proof-of-unregistered-security-798f4df2fbb9.md) |
| 2019-03-06 | [The myth of forks](https://medium.com/@craig_10243/the-myth-of-forks-be04f8e5fe4a) | protocol-immutability, satoshi-history, scaling-throughput, mining-consensus | [summary](summaries-medium/the-myth-of-forks-be04f8e5fe4a.md) |
| 2019-03-07 | [The labour fallacy of mining](https://medium.com/@craig_10243/the-labour-fallacy-of-mining-c2c0f919784) | monetary-economics, scaling-throughput, mining-consensus, satoshi-history | [summary](summaries-medium/the-labour-fallacy-of-mining-c2c0f919784.md) |
| 2019-03-10 | [Profiting from privacy](https://medium.com/@craig_10243/profiting-from-privacy-78c35dcb0a35) | privacy, micropayments, identity, wallets-keys | [summary](summaries-medium/profiting-from-privacy-78c35dcb0a35.md) |
| 2019-03-13 | [Proof](https://medium.com/@craig_10243/proof-22e2cd5fc385) | law-regulation, identity, privacy, btc-critique | [summary](summaries-medium/proof-22e2cd5fc385.md) |
| 2019-03-15 | [Why Lightning will never be currency, and why BSV matters](https://medium.com/@craig_10243/why-lightning-will-never-be-currency-and-why-bsv-matters-60dfa5c9ac4d) | lightning-l2, law-regulation, intermediaries, btc-critique | [summary](summaries-medium/why-lightning-will-never-be-currency-and-why-bsv-matters-60dfa5c9ac4d.md) |
| 2019-03-18 | [Finite State Machines in Script](https://medium.com/@craig_10243/finite-state-machines-in-script-21539501ac5e) | script-technical, ai-blockchain, micropayments | [summary](summaries-medium/finite-state-machines-in-script-21539501ac5e.md) |
| 2019-03-18 | [Learning Script](https://medium.com/@craig_10243/learning-script-20303a5f867e) | script-technical, btc-critique | [summary](summaries-medium/learning-script-20303a5f867e.md) |
| 2019-03-18 | [Free Speech](https://medium.com/@craig_10243/free-speech-526a972d5fb5) | micropayments, law-regulation, identity, tokenisation | [summary](summaries-medium/free-speech-526a972d5fb5.md) |
| 2019-03-19 | [DMCA](https://medium.com/@craig_10243/dmca-de119d616699) | law-regulation, privacy, btc-critique | [summary](summaries-medium/dmca-de119d616699.md) |
| 2019-03-20 | [Forks as a demerger, or a split as a copy?](https://medium.com/@craig_10243/forks-as-a-demerger-or-a-split-as-a-copy-c38bf6d8abed) | protocol-immutability, governance-decentralisation, mining-consensus, spv-light-clients | [summary](summaries-medium/forks-as-a-demerger-or-a-split-as-a-copy-c38bf6d8abed.md) |
| 2019-03-21 | [Privacy versus hypocrisy](https://medium.com/@craig_10243/privacy-versus-hypocrisy-bbb8c0809b9b) | privacy, property-rights, satoshi-history, law-regulation | [summary](summaries-medium/privacy-versus-hypocrisy-bbb8c0809b9b.md) |
| 2019-03-22 | [Peer-to-peer digital electronic cash](https://medium.com/@craig_10243/peer-to-peer-digital-electronic-cash-369bb306028b) | monetary-economics, law-regulation, tokenisation, btc-critique | [summary](summaries-medium/peer-to-peer-digital-electronic-cash-369bb306028b.md) |
| 2019-03-24 | [Digital Rights Management: Serialised Media](https://medium.com/@craig_10243/digital-rights-management-serialised-media-2db1293cc348) | script-technical, intermediaries, tokenisation | [summary](summaries-medium/digital-rights-management-serialised-media-2db1293cc348.md) |
| 2019-03-27 | [How to make a brain wallet](https://medium.com/@craig_10243/how-to-make-a-brain-wallet-a8040b7c1993) | wallets-keys, security-economics, btc-critique | [summary](summaries-medium/how-to-make-a-brain-wallet-a8040b7c1993.md) |
| 2019-03-28 | [Why the protocol is set](https://medium.com/@craig_10243/why-the-protocol-is-set-7db4f764c97c) | protocol-immutability, governance-decentralisation, script-technical, privacy | [summary](summaries-medium/why-the-protocol-is-set-7db4f764c97c.md) |
| 2019-03-29 | [Locked transactions for planning](https://medium.com/@craig_10243/locked-transactions-for-planning-afeb01bac318) | script-technical, protocol-immutability, property-rights, privacy | [summary](summaries-medium/locked-transactions-for-planning-afeb01bac318.md) |
| 2019-03-30 | [Welcome to science](https://medium.com/@craig_10243/welcome-to-science-c5e33a827449) | security-economics, mining-consensus, scaling-throughput, lightning-l2 | [summary](summaries-medium/welcome-to-science-c5e33a827449.md) |
| 2019-04-02 | [Saving research](https://medium.com/@craig_10243/saving-research-97c9e63a3756) | privacy, identity, wallets-keys, script-technical | [summary](summaries-medium/saving-research-97c9e63a3756.md) |
| 2019-04-03 | [Decentralised planning](https://medium.com/@craig_10243/decentralised-planning-c781f37d9342) | monetary-economics, governance-decentralisation, protocol-immutability, btc-critique | [summary](summaries-medium/decentralised-planning-c781f37d9342.md) |
| 2019-04-05 | [Satoshi Nakamoto](https://medium.com/@craig_10243/satoshi-nakamoto-a7c4cf21253e) | satoshi-history, privacy, law-regulation, monetary-economics | [summary](summaries-medium/satoshi-nakamoto-a7c4cf21253e.md) |
| 2019-04-06 | [Two steps forward, one step back](https://medium.com/@craig_10243/two-steps-forward-one-step-back-1ef6e60ccd8e) | satoshi-history, btc-critique, law-regulation, security-economics | [summary](summaries-medium/two-steps-forward-one-step-back-1ef6e60ccd8e.md) |
| 2019-04-07 | [My Mentor](https://medium.com/@craig_10243/my-mentor-f6ea4b828da6) | satoshi-history, law-regulation, script-technical | [summary](summaries-medium/my-mentor-f6ea4b828da6.md) |
| 2019-04-07 | [Panopticrypt](https://medium.com/@craig_10243/panopticrypt-ed6154e06b34) | privacy, satoshi-history, security-economics, law-regulation | [summary](summaries-medium/panopticrypt-ed6154e06b34.md) |
| 2019-04-08 | [The Reason for Law](https://medium.com/@craig_10243/the-reason-for-law-8ffb7adc8957) | law-regulation, satoshi-history, protocol-immutability | [summary](summaries-medium/the-reason-for-law-8ffb7adc8957.md) |
| 2019-04-08 | [Bit Gold Is Not BitCoin](https://medium.com/@craig_10243/bit-gold-is-not-bitcoin-cea96eac20c9) | btc-critique, satoshi-history, monetary-economics, mining-consensus | [summary](summaries-medium/bit-gold-is-not-bitcoin-cea96eac20c9.md) |
| 2019-04-09 | [From simplicity comes …](https://medium.com/@craig_10243/from-simplicity-comes-1a19f9a85747) | protocol-immutability, mining-consensus, scaling-throughput, btc-critique | [summary](summaries-medium/from-simplicity-comes-1a19f9a85747.md) |
| 2019-04-10 | [Forget anonymity.](https://medium.com/@craig_10243/forget-anonymity-8c4ea82ad46a) | law-regulation, privacy, intermediaries | [summary](summaries-medium/forget-anonymity-8c4ea82ad46a.md) |
| 2019-04-11 | [Bitcoin and Contract Jurisdiction](https://medium.com/@craig_10243/bitcoin-and-contract-jurisdiction-3ef4ec3091eb) | law-regulation, script-technical | [summary](summaries-medium/bitcoin-and-contract-jurisdiction-3ef4ec3091eb.md) |
| 2019-04-11 | [Trolls and bullies](https://medium.com/@craig_10243/trolls-and-bullies-d19287bb754d) | micropayments, privacy, identity | [summary](summaries-medium/trolls-and-bullies-d19287bb754d.md) |
| 2019-04-12 | [The Genesis of Genesis](https://medium.com/@craig_10243/the-genesis-of-genesis-5774b2fb9bc9) | satoshi-history, audit-accounting, script-technical | [summary](summaries-medium/the-genesis-of-genesis-5774b2fb9bc9.md) |
| 2019-04-12 | [Evidence and law](https://medium.com/@craig_10243/evidence-and-law-f8f10001efa5) | law-regulation, satoshi-history, privacy, lightning-l2 | [summary](summaries-medium/evidence-and-law-f8f10001efa5.md) |
| 2019-04-13 | [Patent wars…](https://medium.com/@craig_10243/patent-wars-24929b73f381) | btc-critique, spv-light-clients, scaling-throughput, law-regulation | [summary](summaries-medium/patent-wars-24929b73f381.md) |
| 2019-04-14 | [Bitcoin is not against banks](https://medium.com/@craig_10243/bitcoin-is-not-against-banks-fffb7b633fb0) | monetary-economics, intermediaries, wallets-keys, btc-critique | [summary](summaries-medium/bitcoin-is-not-against-banks-fffb7b633fb0.md) |
| 2019-04-15 | [BTC and Censorship](https://medium.com/@craig_10243/btc-and-censorship-410265a8a4a2) | btc-critique, protocol-immutability, mining-consensus, script-technical | [summary](summaries-medium/btc-and-censorship-410265a8a4a2.md) |
| 2019-04-16 | [Wiki](https://medium.com/@craig_10243/wiki-2578e6c0ace5) | satoshi-history, monetary-economics | [summary](summaries-medium/wiki-2578e6c0ace5.md) |
| 2019-04-17 | [We don’t want to lead with “anonymous”](https://medium.com/@craig_10243/we-dont-want-to-lead-with-anonymous-a4890db7766d) | privacy, law-regulation, satoshi-history | [summary](summaries-medium/we-dont-want-to-lead-with-anonymous-a4890db7766d.md) |
| 2019-04-20 | [The “Perfect” Firewall…](https://medium.com/@craig_10243/the-perfect-firewall-3d6971213a2b) | security-economics, privacy, btc-critique | [summary](summaries-medium/the-perfect-firewall-3d6971213a2b.md) |
| 2019-04-23 | [The immovable](https://medium.com/@craig_10243/the-immovable-8aa39ee04515) | law-regulation, satoshi-history, btc-critique, property-rights | [summary](summaries-medium/the-immovable-8aa39ee04515.md) |
| 2019-04-25 | [Misinformation and the myth of Satoshi](https://medium.com/@craig_10243/misinformation-and-the-myth-of-satoshi-4aafdbf734b7) | satoshi-history, mining-consensus, btc-critique | [summary](summaries-medium/misinformation-and-the-myth-of-satoshi-4aafdbf734b7.md) |
| 2019-04-26 | [Decentralised or just inefficient?](https://medium.com/@craig_10243/decentralised-or-just-inefficient-1eefecec03ff) | mining-consensus, governance-decentralisation, security-economics | [summary](summaries-medium/decentralised-or-just-inefficient-1eefecec03ff.md) |
| 2019-04-27 | [The wheel of time is not on an axis](https://medium.com/@craig_10243/the-wheel-of-time-is-not-on-an-axis-ccefa8963f6) | law-regulation, property-rights, tokenisation, monetary-economics | [summary](summaries-medium/the-wheel-of-time-is-not-on-an-axis-ccefa8963f6.md) |
| 2019-04-30 | [The puzzle of the double hash](https://medium.com/@craig_10243/the-puzzle-of-the-double-hash-968196edb06d) | mining-consensus, scaling-throughput, law-regulation, script-technical | [summary](summaries-medium/the-puzzle-of-the-double-hash-968196edb06d.md) |
| 2019-05-08 | [Don’t be fooled — Bitcoin is not BTC](https://medium.com/@craig_10243/dont-be-fooled-bitcoin-is-not-btc-61e6aee8ac53) | btc-critique, protocol-immutability, satoshi-history, law-regulation | [summary](summaries-medium/dont-be-fooled-bitcoin-is-not-btc-61e6aee8ac53.md) |
| 2019-05-10 | [Custodial standards](https://medium.com/@craig_10243/custodial-standards-9dbcfe1f4c4e) | law-regulation, audit-accounting, wallets-keys, intermediaries | [summary](summaries-medium/custodial-standards-9dbcfe1f4c4e.md) |
| 2019-05-13 | [Crypto flim-flam](https://medium.com/@craig_10243/crypto-flim-flam-6b4ff367b634) | btc-critique, monetary-economics, law-regulation, intermediaries | [summary](summaries-medium/crypto-flim-flam-6b4ff367b634.md) |
| 2019-05-14 | [Money is a measuring stick](https://medium.com/@craig_10243/money-is-a-measuring-stick-6f5fe9cb8c9d) | monetary-economics, scaling-throughput, btc-critique | [summary](summaries-medium/money-is-a-measuring-stick-6f5fe9cb8c9d.md) |
| 2019-05-16 | [Institutional madness](https://medium.com/@craig_10243/institutional-madness-6f4fade7b9fc) | law-regulation, lightning-l2, security-economics, btc-critique | [summary](summaries-medium/institutional-madness-6f4fade7b9fc.md) |
| 2019-05-18 | [Why code must not be law](https://medium.com/@craig_10243/why-code-must-not-be-law-438e2cafe2e4) | law-regulation, satoshi-history, protocol-immutability, privacy | [summary](summaries-medium/why-code-must-not-be-law-438e2cafe2e4.md) |
| 2019-05-20 | [Funding and rights](https://medium.com/@craig_10243/funding-and-rights-baf26b37947f) | wallets-keys, intermediaries, satoshi-history, btc-critique | [summary](summaries-medium/funding-and-rights-baf26b37947f.md) |
| 2019-05-22 | [Economic Security](https://medium.com/@craig_10243/economic-security-d43518f47fd2) | security-economics, mining-consensus, spv-light-clients, protocol-immutability | [summary](summaries-medium/economic-security-d43518f47fd2.md) |
| 2019-05-23 | [Satoshi and the Sophists](https://medium.com/@craig_10243/satoshi-and-the-sophists-9c940d4eb22e) | law-regulation, privacy, satoshi-history | [summary](summaries-medium/satoshi-and-the-sophists-9c940d4eb22e.md) |
| 2019-05-24 | [Shades of Black…](https://medium.com/@craig_10243/shades-of-black-5f269ff97cde) | law-regulation, governance-decentralisation, btc-critique | [summary](summaries-medium/shades-of-black-5f269ff97cde.md) |
| 2019-05-30 | [The GST Story](https://medium.com/@craig_10243/the-gst-story-b9f8a19a1a07) | law-regulation, monetary-economics, satoshi-history | [summary](summaries-medium/the-gst-story-b9f8a19a1a07.md) |
| 2019-05-30 | [Satoshi and Science](https://medium.com/@craig_10243/satoshi-and-science-318ba8d266be) | satoshi-history, law-regulation, btc-critique | [summary](summaries-medium/satoshi-and-science-318ba8d266be.md) |
| 2019-06-03 | [From the Bygone Days of Yore — Part 1](https://medium.com/@craig_10243/from-the-bygone-days-of-yore-part-1-632efa716024) | satoshi-history, property-rights, law-regulation | [summary](summaries-medium/from-the-bygone-days-of-yore-part-1-632efa716024.md) |
| 2019-06-04 | [MSBs and Account-Based Systems](https://medium.com/@craig_10243/msbs-and-account-based-systems-e64dc056f92a) | law-regulation, privacy, intermediaries | [summary](summaries-medium/msbs-and-account-based-systems-e64dc056f92a.md) |
| 2019-06-06 | [Fully Peer-to-Peer](https://medium.com/@craig_10243/fully-peer-to-peer-18817df99beb) | satoshi-history, identity, governance-decentralisation | [summary](summaries-medium/fully-peer-to-peer-18817df99beb.md) |
| 2019-06-07 | [The Right to Privacy](https://medium.com/@craig_10243/the-right-to-privacy-c8a66eda0ae3) | privacy, law-regulation | [summary](summaries-medium/the-right-to-privacy-c8a66eda0ae3.md) |
| 2019-06-11 | [Feign Madness but Keep Your Balance](https://medium.com/@craig_10243/feign-madness-but-keep-your-balance-4be62e56f22a) | property-rights, scaling-throughput, identity | [summary](summaries-medium/feign-madness-but-keep-your-balance-4be62e56f22a.md) |
| 2019-06-12 | [Monetary Law and Blockchains](https://medium.com/@craig_10243/monetary-law-and-blockchains-edad5aadd009) | btc-critique, law-regulation, protocol-immutability, monetary-economics | [summary](summaries-medium/monetary-law-and-blockchains-edad5aadd009.md) |
| 2019-06-13 | [On scammers](https://medium.com/@craig_10243/on-scammers-f5fca5801bb2) | law-regulation, property-rights, satoshi-history, audit-accounting | [summary](summaries-medium/on-scammers-f5fca5801bb2.md) |
| 2019-06-17 | [Taxing Crypto](https://medium.com/@craig_10243/taxing-crypto-548bf6da43fc) | law-regulation, script-technical, audit-accounting | [summary](summaries-medium/taxing-crypto-548bf6da43fc.md) |
| 2019-06-18 | [The Genetic Fallacy](https://medium.com/@craig_10243/the-genetic-fallacy-274e939c7e53) | identity, satoshi-history, btc-critique | [summary](summaries-medium/the-genetic-fallacy-274e939c7e53.md) |
| 2019-06-28 | [Operating an Escrow Document Storage and Secure Signing Registry](https://medium.com/@craig_10243/operating-an-escrow-document-storage-and-secure-signing-registry-39789123b5a6) | wallets-keys, law-regulation, property-rights | [summary](summaries-medium/operating-an-escrow-document-storage-and-secure-signing-registry-39789123b5a6.md) |
| 2019-07-24 | [Reversing Illicit Transactions on Bitcoin Is Simple](https://medium.com/@craig_10243/reversing-illicit-transactions-on-bitcoin-is-simple-71a99cf14ec3) | law-regulation, governance-decentralisation, mining-consensus, btc-critique | [summary](summaries-medium/reversing-illicit-transactions-on-bitcoin-is-simple-71a99cf14ec3.md) |
| 2019-07-25 | [Spam Away…](https://medium.com/@craig_10243/spam-away-eb25b01a2514) | scaling-throughput, micropayments, btc-critique | [summary](summaries-medium/spam-away-eb25b01a2514.md) |
| 2019-07-26 | [Zeno’s Paradoxes and Bitcoin](https://medium.com/@craig_10243/zenos-paradoxes-and-bitcoin-d96a0286ee7) | monetary-economics, mining-consensus, satoshi-history | [summary](summaries-medium/zenos-paradoxes-and-bitcoin-d96a0286ee7.md) |
| 2019-07-29 | [Subsidised Growth](https://medium.com/@craig_10243/subsidised-growth-3363ab447c89) | mining-consensus, monetary-economics, satoshi-history, spv-light-clients | [summary](summaries-medium/subsidised-growth-3363ab447c89.md) |
| 2019-08-01 | [PII in the Bitcoin World](https://medium.com/@craig_10243/pii-in-the-bitcoin-world-4eb0416124b6) | privacy, security-economics, identity, law-regulation | [summary](summaries-medium/pii-in-the-bitcoin-world-4eb0416124b6.md) |
| 2019-08-02 | [Why Law Matters](https://medium.com/@craig_10243/why-law-matters-db0e32492d05) | law-regulation, governance-decentralisation, satoshi-history, mining-consensus | [summary](summaries-medium/why-law-matters-db0e32492d05.md) |
| 2019-08-23 | [Good Title Is Not a Key](https://medium.com/@craig_10243/good-title-is-not-a-key-7342b6327f) | law-regulation, property-rights, wallets-keys, mining-consensus | [summary](summaries-medium/good-title-is-not-a-key-7342b6327f.md) |
| 2019-09-01 | [Bitcoin Is Anything BUT Anonymous](https://medium.com/@craig_10243/bitcoin-is-anything-but-anonymous-f1d23fdc18a1) | privacy, identity, satoshi-history, audit-accounting | [summary](summaries-medium/bitcoin-is-anything-but-anonymous-f1d23fdc18a1.md) |
| 2019-09-03 | [Human Rights and Property](https://medium.com/@craig_10243/human-rights-and-property-34bb3120af08) | property-rights, privacy, tokenisation, identity | [summary](summaries-medium/human-rights-and-property-34bb3120af08.md) |
| 2019-09-06 | [Rights and Tracing](https://medium.com/@craig_10243/rights-and-tracing-603bee35c584) | law-regulation, property-rights, mining-consensus, governance-decentralisation | [summary](summaries-medium/rights-and-tracing-603bee35c584.md) |
| 2019-09-12 | [Satoshi’s Vision: The Art of Bitcoin](https://medium.com/@craig_10243/satoshis-vision-the-art-of-bitcoin-a793a274a64b) | satoshi-history, btc-critique | [summary](summaries-medium/satoshis-vision-the-art-of-bitcoin-a793a274a64b.md) |
| 2019-09-28 | [Satoshi; or, The Solution to Nakamoto’s Dilemma](https://medium.com/@craig_10243/satoshi-or-the-solution-to-nakamotos-dilemma-22829108ee46) | satoshi-history, protocol-immutability, mining-consensus | [summary](summaries-medium/satoshi-or-the-solution-to-nakamotos-dilemma-22829108ee46.md) |
| 2019-10-09 | [Simplified Payment Verification](https://medium.com/@craig_10243/simplified-payment-verification-4a260d272a38) | spv-light-clients, scaling-throughput, law-regulation, mining-consensus | [summary](summaries-medium/simplified-payment-verification-4a260d272a38.md) |
| 2019-10-15 | [Taxing Times…](https://medium.com/@craig_10243/taxing-times-3cd2067fab8d) | protocol-immutability, law-regulation, btc-critique, governance-decentralisation | [summary](summaries-medium/taxing-times-3cd2067fab8d.md) |
| 2019-10-21 | [If Gold Turned to Lead](https://medium.com/@craig_10243/if-gold-turned-to-lead-54e82c27b79b) | law-regulation, property-rights, privacy, satoshi-history | [summary](summaries-medium/if-gold-turned-to-lead-54e82c27b79b.md) |
| 2019-10-23 | [Bitcoin Fights Corruption](https://medium.com/@craig_10243/bitcoin-fights-corruption-5e5fd7c79123) | law-regulation, monetary-economics, micropayments, privacy | [summary](summaries-medium/bitcoin-fights-corruption-5e5fd7c79123.md) |
| 2019-11-02 | [Merkle Trees and SPV](https://medium.com/@craig_10243/merkle-trees-and-spv-da18af9f6a26) | spv-light-clients, scaling-throughput, networking, satoshi-history | [summary](summaries-medium/merkle-trees-and-spv-da18af9f6a26.md) |
| 2019-11-04 | [On Scammers, a redux.](https://medium.com/@craig_10243/on-scammers-a-redux-b194e5185453) | law-regulation, satoshi-history | [summary](summaries-medium/on-scammers-a-redux-b194e5185453.md) |
| 2019-11-05 | [A Fundamental Misunderstanding](https://medium.com/@craig_10243/a-fundamental-misunderstanding-60e788cfcc1) | wallets-keys, law-regulation, micropayments | [summary](summaries-medium/a-fundamental-misunderstanding-60e788cfcc1.md) |
| 2019-11-08 | [Digital Gold](https://medium.com/@craig_10243/digital-gold-d46b9493a17b) | btc-critique, privacy, monetary-economics, law-regulation | [summary](summaries-medium/digital-gold-d46b9493a17b.md) |
| 2019-11-13 | [Proof of Assignment](https://medium.com/@craig_10243/proof-of-assignment-50a36de081c7) | law-regulation, protocol-immutability, mining-consensus, property-rights | [summary](summaries-medium/proof-of-assignment-50a36de081c7.md) |
| 2019-11-18 | [Transparency and Government](https://medium.com/@craig_10243/transparency-and-government-69c7e8f59180) | privacy, monetary-economics, btc-critique, governance-decentralisation | [summary](summaries-medium/transparency-and-government-69c7e8f59180.md) |
| 2020-01-03 | [A story of apples](https://medium.com/@craig_10243/a-story-of-apples-b02c5d98a8d4) | law-regulation, satoshi-history, identity | [summary](summaries-medium/a-story-of-apples-b02c5d98a8d4.md) |
| 2020-01-15 | [Mistakes Also Come when You Listen to Others…](https://medium.com/@craig_10243/mistakes-also-come-when-you-listen-to-others-fd2838fab578) | mining-consensus, law-regulation, governance-decentralisation, spv-light-clients | [summary](summaries-medium/mistakes-also-come-when-you-listen-to-others-fd2838fab578.md) |
| 2020-01-17 | [Looking the Other Way](https://medium.com/@craig_10243/looking-the-other-way-116ace0a875e) | satoshi-history, btc-critique, law-regulation, scaling-throughput | [summary](summaries-medium/looking-the-other-way-116ace0a875e.md) |
| 2020-01-21 | [How Digital Signatures Work](https://medium.com/@craig_10243/how-digital-signatures-work-efd303fa8f11) | law-regulation, wallets-keys, identity | [summary](summaries-medium/how-digital-signatures-work-efd303fa8f11.md) |
| 2020-01-24 | [Open Source](https://medium.com/@craig_10243/open-source-ed8e1066fbbd) | security-economics, property-rights, law-regulation | [summary](summaries-medium/open-source-ed8e1066fbbd.md) |
| 2020-02-06 | [Myths of Decentralisation…](https://medium.com/@craig_10243/myths-of-decentralisation-761c713ab2cd) | property-rights, governance-decentralisation, law-regulation, networking | [summary](summaries-medium/myths-of-decentralisation-761c713ab2cd.md) |
| 2020-02-13 | [Forking and Passing Off…](https://medium.com/@craig_10243/forking-and-passing-off-ccbe22f2637e) | law-regulation, property-rights, protocol-immutability, btc-critique | [summary](summaries-medium/forking-and-passing-off-ccbe22f2637e.md) |
| 2020-02-14 | [Hey up Craig,](https://medium.com/@craig_10243/hey-up-craig-109407a9bde0) | monetary-economics, protocol-immutability | [summary](summaries-medium/hey-up-craig-109407a9bde0.md) |
| 2020-02-14 | [This article outlines the difference between btc, bch, eth, lite and other forks PERFECTLY.](https://medium.com/@craig_10243/this-article-outlines-the-difference-between-btc-bch-eth-lite-and-other-forks-perfectly-60fae54c8d89) | btc-critique, law-regulation, property-rights | [summary](summaries-medium/this-article-outlines-the-difference-between-btc-bch-eth-lite-and-other-forks-pe.md) |
| 2020-02-14 | [BitCoin system has 21 million BitCoin tokens.](https://medium.com/@craig_10243/bitcoin-system-has-21-million-bitcoin-tokens-a9329f5c384) | monetary-economics, micropayments | [summary](summaries-medium/bitcoin-system-has-21-million-bitcoin-tokens-a9329f5c384.md) |
| 2020-02-20 | [Cryptography and Bitcoin](https://medium.com/@craig_10243/cryptography-and-bitcoin-b64db06299e3) | privacy, identity, law-regulation, btc-critique | [summary](summaries-medium/cryptography-and-bitcoin-b64db06299e3.md) |
| 2020-02-22 | [The High Priests of “crypto” and the dogma wars](https://medium.com/@craig_10243/the-high-priests-of-crypto-and-the-dogma-wars-100b56771c9e) | btc-critique, governance-decentralisation, protocol-immutability, satire | [summary](summaries-medium/the-high-priests-of-crypto-and-the-dogma-wars-100b56771c9e.md) |
| 2020-02-24 | [On Decentralisation](https://medium.com/@craig_10243/on-decentralisation-e761949d7e5c) | governance-decentralisation, law-regulation, protocol-immutability, btc-critique | [summary](summaries-medium/on-decentralisation-e761949d7e5c.md) |
| 2020-03-02 | [Binance: The Untrusted Intermediary](https://medium.com/@craig_10243/binance-the-untrusted-intermediary-dddec51f5c47) | intermediaries, law-regulation, property-rights, privacy | [summary](summaries-medium/binance-the-untrusted-intermediary-dddec51f5c47.md) |
| 2020-03-18 | [Ledgers and Design](https://medium.com/@craig_10243/ledgers-and-design-22f9f2eaacc0) | audit-accounting, law-regulation, property-rights, mining-consensus | [summary](summaries-medium/ledgers-and-design-22f9f2eaacc0.md) |
| 2020-03-24 | [Satoshi and the Byzantine Generals](https://medium.com/@craig_10243/satoshi-and-the-byzantine-generals-6804bb6629b7) | mining-consensus, governance-decentralisation, spv-light-clients, satoshi-history | [summary](summaries-medium/satoshi-and-the-byzantine-generals-6804bb6629b7.md) |
| 2020-03-27 | [The Property Flaw of Lightning](https://medium.com/@craig_10243/the-property-flaw-of-lightning-d36ebf5b78a3) | lightning-l2, property-rights, law-regulation, btc-critique | [summary](summaries-medium/the-property-flaw-of-lightning-d36ebf5b78a3.md) |
| 2020-04-02 | [Satoshi NEVER Posted on Bitcointalk](https://medium.com/@craig_10243/satoshi-never-posted-on-bitcointalk-dd6967d772f7) | satoshi-history, identity | [summary](summaries-medium/satoshi-never-posted-on-bitcointalk-dd6967d772f7.md) |
| 2020-04-16 | [As an Autistic Savant…](https://medium.com/@craig_10243/as-an-autistic-savant-55075026dc48) | satoshi-history, identity, script-technical, protocol-immutability | [summary](summaries-medium/as-an-autistic-savant-55075026dc48.md) |
| 2020-04-23 | [The History of Freezing in Bitcoin](https://medium.com/@craig_10243/the-history-of-freezing-in-bitcoin-13f0cf1a89d9) | law-regulation, property-rights, mining-consensus, governance-decentralisation | [summary](summaries-medium/the-history-of-freezing-in-bitcoin-13f0cf1a89d9.md) |
| 2020-05-05 | [Money Is Time and Energy](https://medium.com/@craig_10243/money-is-time-and-energy-2e558d611c51) | monetary-economics, tokenisation, intermediaries | [summary](summaries-medium/money-is-time-and-energy-2e558d611c51.md) |
| 2020-07-06 | [The way you explain how Bitcoin can not stop debt, convinces me that you don’t understand how…](https://medium.com/@craig_10243/the-way-you-explain-how-bitcoin-can-not-stop-debt-convinces-me-that-you-dont-understand-how-be195fd0efca) | monetary-economics, intermediaries | [summary](summaries-medium/the-way-you-explain-how-bitcoin-can-not-stop-debt-convinces-me-that-you-dont-und.md) |
| 2022-01-08 | [Re: Moxie on Web3](https://medium.com/@craig_10243/re-moxie-on-web3-b0cfccd68067) | governance-decentralisation, spv-light-clients, privacy, scaling-throughput | [summary](summaries-medium/re-moxie-on-web3-b0cfccd68067.md) |

## Out-of-scope posts

281 Substack and 36 Medium posts classified OUT with per-post reasons in the
respective `corpus_index.json`. Representative titles per month:

### Substack OUT (281)

<details><summary><b>2025-06</b> — 34 posts</summary>

- [A Dirty Love Letter to Crunch, Flesh, and Broth ](https://singulargrit.substack.com/p/a-dirty-love-letter-to-crunch-flesh) — *Food essay*
- [The Weight of What Remains](https://singulargrit.substack.com/p/the-weight-of-what-remains) — *Memoir, Java, personal reflection*
- [— Echoes of Silence —](https://singulargrit.substack.com/p/echoes-of-silence) — *Personal memoir*
- [Shadows Across the Strait](https://singulargrit.substack.com/p/shadows-across-the-strait) — *Migration fiction, Morocco to Spain*
- [The Trickster](https://singulargrit.substack.com/p/the-trickster) — *Religious/mythological essay*
- [The Curse of Knowing](https://singulargrit.substack.com/p/the-curse-of-knowing) — *Personal essay on intelligence and mediocrity*
- [The Wound of Form: On Genre as Condemnation](https://singulargrit.substack.com/p/the-wound-of-form-on-genre-as-condemnation) — *Genre, liturgy, writing*
- [THE BURDEN OF LUXURY ](https://singulargrit.substack.com/p/the-burden-of-luxury) — *Food, steak*
- [Against the Common Lie](https://singulargrit.substack.com/p/against-the-common-lie) — *Merit, culture*
- [The Sword of Truth: Why Freedom of Speech Demands Identity](https://singulargrit.substack.com/p/the-sword-of-truth-why-freedom-of) — *Free speech and identity in common law; not ledger-tied*
- [One Fruit to Undermine Them All](https://singulargrit.substack.com/p/one-fruit-to-undermine-them-all) — *Food, pineapple*
- [The Architecture of Liberty: Order, Merit, and the Moral Imperative of Constraint](https://singulargrit.substack.com/p/the-architecture-of-liberty-order) — *Political and moral philosophy*
- [The Coward’s Creed:A Treatise on the Failure of the Non-Aggression Principle and the Moral Collapse of Voluntaryism](https://singulargrit.substack.com/p/the-cowards-creeda-treatise-on-the) — *Anti-NAP political philosophy treatise*
- [The Flaming Throne and the Delicate Idiocy of Cruise Control](https://singulargrit.substack.com/p/the-flaming-throne-and-the-delicate) — *Motorcycle satire; Triumph Storm ride, no Bitcoin content*
- [The Weight of Virtue: Character, Choice, and the Architecture of the Good](https://singulargrit.substack.com/p/the-weight-of-virtue-character-choice) — *Virtue ethics*
- [The Algorithmic Displacement of Selfhood](https://singulargrit.substack.com/p/the-algorithmic-displacement-of-selfhood) — *AI and selfhood risk*
- [China’s Strategic Inflection](https://singulargrit.substack.com/p/chinas-strategic-inflection) — *China geopolitics, demographics, tariffs*
- [On the Nature of Reason](https://singulargrit.substack.com/p/on-the-nature-of-reason) — *Philosophy of reason*
- [Book Review: Validity in Interpretation by E.D. Hirsch](https://singulargrit.substack.com/p/book-review-validity-in-interpretation) — *Book review, hermeneutics*
- [Bayesian Evolutionary Swarms: A Formal System Where Truth Wins ](https://singulargrit.substack.com/p/bayesian-evolutionary-swarms-a-formal) — *AI formal system; hash commitments but not ledger-based*
- [Dinner in the Manner of a Knife’s Edge](https://singulargrit.substack.com/p/dinner-in-the-manner-of-a-knifes) — *Food writing*
- [Foundations in the Mud, and Other Divine Necessities of the Real ](https://singulargrit.substack.com/p/foundations-in-the-mud-and-other) — *Agriculture and soil*
- [Bring Home the Army: Reclaiming Republic Through Maritime Defence and Non-Interventionist Sovereignty](https://singulargrit.substack.com/p/bring-home-the-army-reclaiming-republic) — *Defence geopolitics*
- [Missiles and Memes: The Aesthetics of Strategic Failure](https://singulargrit.substack.com/p/missiles-and-memes-the-aesthetics) — *Geopolitics, Iran/strategic failure*
- [A Republic of Spectres: de Tocqueville, Rand, and the Hollow Core of Modern America](https://singulargrit.substack.com/p/a-republic-of-spectres-de-tocqueville) — *American political culture critique*
- [The Architecture of My War: Values Declared, Delusions Disavowed](https://singulargrit.substack.com/p/the-architecture-of-my-war-values) — *Personal values declaration, no Bitcoin content*
- [The Economic Fallacy of Tariffs: How the U.S. is Following Japan's Path to Decline](https://singulargrit.substack.com/p/the-economic-fallacy-of-tariffs-how) — *Tariffs, US/Japan trade economics*
- [Men Without Chests: Virtue, Empire, and the Ruins of Education](https://singulargrit.substack.com/p/men-without-chests-virtue-empire) — *Education and virtue critique*
- [The Path to War: Lessons from Japan’s Failed Imperial Ambitions and the Perils of Protectionism](https://singulargrit.substack.com/p/the-path-to-war-lessons-from-japans) — *History, protectionism, Japan*
- [The Spread of Client States and the Looming Collapse: A Historical and Contemporary Analysis](https://singulargrit.substack.com/p/the-spread-of-client-states-and-the) — *Geopolitics of empire and client states*
- [Judicial Analysis of Governance, Legal Process, and Enforcement in Galt’s Gulch](https://singulargrit.substack.com/p/judicial-analysis-of-governance-legal) — *Galt's Gulch fiction/legal analysis*
- [Polemical Thought Piece Plan: The Collapse of Education into Training](https://singulargrit.substack.com/p/polemical-thought-piece-plan-the) — *Education polemic*
- [Christian Responsibility in Economic Development: The Moral Imperative of Growth, Justice, and Leadership](https://singulargrit.substack.com/p/christian-responsibility-in-economic) — *Religious economic sermon*
- [The Hard Path to Virtue: Education, Truth, and the Necessity of Reform](https://singulargrit.substack.com/p/the-hard-path-to-virtue-education) — *Education, virtue*

</details>

<details><summary><b>2025-07</b> — 22 posts</summary>

- [The Mirage of Machine Certainty: Epistemic Scarcity and the Political Economy of Truth](https://singulargrit.substack.com/p/the-mirage-of-machine-certainty-epistemic) — *AI epistemics via Austrian economics; blockchain only incidental appendix mention*
- [On the Fetid Ritual of Citation: A Polemic Against Academic Necrophilia](https://singulargrit.substack.com/p/on-the-fetid-ritual-of-citation-a) — *Polemic against academic citation culture*
- [Peer Review Before the Guillotine: Letters, Prestige, and the Rise of the Bureaucratic Void](https://singulargrit.substack.com/p/peer-review-before-the-guillotine) — *Academic peer-review and bureaucracy critique*
- [Contour, Culture, and Crop: Planting for Profit and Protection on Sloping Lands](https://singulargrit.substack.com/p/contour-culture-and-crop-planting) — *Agriculture, contour planting*
- [The Real Problems Worth Solving: A Human-Centred Blueprint for Entrepreneurs](https://singulargrit.substack.com/p/the-real-problems-worth-solving-a) — *Entrepreneurship, human needs*
- [Collapse at the Speed of Causality ](https://singulargrit.substack.com/p/collapse-at-the-speed-of-causality) — *Pure physics, no infinities or multiverses*
- [The Stillness Protocol](https://singulargrit.substack.com/p/the-stillness-protocol) — *Same AI/Neuralink-inspired fiction*
- [Grok and the Gospel of the Dumb God: The Cult of Artificial Omniscience](https://singulargrit.substack.com/p/grok-and-the-gospel-of-the-dumb-god) — *AI critique*
- [The Mirror of the Unmade](https://singulargrit.substack.com/p/the-mirror-of-the-unmade) — *Allegorical fiction; no Bitcoin*
- [Sunday, in Soil and Sunlight: On Rest, Work, and the Green Resurrection of Earth](https://singulargrit.substack.com/p/sunday-in-soil-and-sunlight-on-rest) — *Rest, gardening, liturgy*
- [The Return of the Tailor: Customised Agriculture in the Age of Soil and Sanity](https://singulargrit.substack.com/p/the-return-of-the-tailor-customised) — *Agriculture, customised farming*
- [A Monologue in Vermilion](https://singulargrit.substack.com/p/a-monologue-in-vermilion) — *Agronomic satire*
- [The Rise of the Cognitive Aristocracy ](https://singulargrit.substack.com/p/the-rise-of-the-cognitive-aristocracy) — *AI and class divide*
- [The Discipline of Becoming: On Consistency, Change, and the Myth of Motivation](https://singulargrit.substack.com/p/the-discipline-of-becoming-on-consistency) — *Motivational, consistency*
- [On the Space Between Breaths](https://singulargrit.substack.com/p/on-the-space-between-breaths) — *Philosophy of self and silence*
- [Wealth, Work, and the Moral Vacuum of Managerial Detachment](https://singulargrit.substack.com/p/wealth-work-and-the-moral-vacuum) — *Managerial labour critique*
- [Stewardship, Soil, and Service: A Wesleyan Approach to Agricultural Renewal](https://singulargrit.substack.com/p/stewardship-soil-and-service-a-wesleyan) — *Wesleyan agricultural ethics*
- [From Soil to Signal: A Monday in the Life of a Digital Farmer](https://singulargrit.substack.com/p/from-soil-to-signal-a-monday-in-the) — *Digital farming diary, agriculture*
- [Pipe Dreams](https://singulargrit.substack.com/p/pipe-dreams) — *Plumbing, personal*
- [The Age of Words Without Deeds](https://singulargrit.substack.com/p/the-age-of-words-without-deeds) — *Cultural critique, motivational builders-vs-talkers*
- [Robin Hood: The Survival of the Outlaw, Not the Altruist](https://singulargrit.substack.com/p/robin-hood-the-survival-of-the-outlaw) — *History/folklore reinterpretation*
- [From Burial Mounds to Deeds: How the Ritual of Death Shaped Property, Law, and Capitalism](https://singulargrit.substack.com/p/from-burial-mounds-to-deeds-how-the) — *Legal-anthropological property history; no digital-cash link*

</details>

<details><summary><b>2025-08</b> — 15 posts</summary>

- [The Vanity of Cavities and the Delusions of Suction](https://singulargrit.substack.com/p/the-vanity-of-cavities-and-the-delusions) — *Pumps, plumbing satire*
- [The Steward’s Dominion: On Agriculture, Agency, and the Sacred Task of Building](https://singulargrit.substack.com/p/the-stewards-dominion-on-agriculture) — *Agriculture and building*
- [“Words Are for Losers”: Communication, Writing, and the Death of Meritocracy ](https://singulargrit.substack.com/p/words-are-for-losers-communication) — *Communication and meritocracy*
- [The Great Confusion: Capitalism vs the Mercantilist Bubble](https://singulargrit.substack.com/p/the-great-confusion-capitalism-vs) — *Capitalism vs mercantilism, general economics*
- [Bureaucracy vs. Meritocracy: The Cult of “Done” Over the Craft of “Right”](https://singulargrit.substack.com/p/bureaucracy-vs-meritocracy-the-cult) — *Organisational culture, bureaucracy vs craft*
- [The Age of Rational Abandonment: How the West Learned to Forget Itself](https://singulargrit.substack.com/p/the-age-of-rational-abandonment-how) — *Civilisational/postmodernism critique, politics-culture*
- [Rows of Hunger, Rows of Plenty: The Unsentimental Science of Growing Food All Year](https://singulargrit.substack.com/p/rows-of-hunger-rows-of-plenty-the) — *Year-round food growing, agriculture*
- [Freshness Without Permission Slips](https://singulargrit.substack.com/p/freshness-without-permission-slips) — *Food subscription and drone delivery business*
- [When Your Thinking Machine Thinks Like a Brain-Damaged Ferret on Caffeine](https://singulargrit.substack.com/p/when-your-thinking-machine-thinks) — *AI critique, no ledger*
- [From White Coats to Hoodie Hustlers: How Silicon Valley Hollowed Out the Words ‘Scientist’ and ‘Engineer’](https://singulargrit.substack.com/p/from-white-coats-to-hoodie-hustlers) — *Science/engineering culture critique*
- [Patents: The Fortress of the Mind’s Rightful Property](https://singulargrit.substack.com/p/patents-the-fortress-of-the-minds) — *Patent/IP defence*
- [The Patent of Elias Marr](https://singulargrit.substack.com/p/the-patent-of-elias-marr) — *Intellectual-property fable*
- [Stewards of the Mind: Why Invention is a Sacred Trust](https://singulargrit.substack.com/p/stewards-of-the-mind-why-invention) — *IP stewardship, Wesleyan framing*
- [The Theology of Boxes: A Rant on USPTO Forms](https://singulargrit.substack.com/p/the-theology-of-boxes-a-rant-on-uspto) — *Patent-office bureaucracy satire*
- [The Sabbath of Fists: A Study in Gloves, Grace, and Grievance](https://singulargrit.substack.com/p/the-sabbath-of-fists-a-study-in-gloves) — *Boxing and religion*

</details>

<details><summary><b>2025-09</b> — 18 posts</summary>

- [The Cogitator Protocols: A Bureaucratic Revelation in Three Acts](https://singulargrit.substack.com/p/the-cogitator-protocols-a-bureaucratic) — *Absurdist bureaucracy/AI satire, no Bitcoin subject*
- [Sparks, Concrete, and the Amnesia of Skill](https://singulargrit.substack.com/p/sparks-concrete-and-the-amnesia-of) — *Welding/farming personal skill essay*
- [The Stone and the Fire: On Integrity, Decay, and the Future of Man](https://singulargrit.substack.com/p/the-stone-and-the-fire-on-integrity) — *Philosophy of integrity and decay*
- [The Mirror of the Unmade](https://singulargrit.substack.com/p/the-mirror-of-the-unmade-bbe) — *Allegorical fiction; no Bitcoin*
- [The Stillness Protocol](https://singulargrit.substack.com/p/the-stillness-protocol-317) — *Dystopian neural-implant fiction*
- [Entangled Minds](https://singulargrit.substack.com/p/entangled-minds) — *Neuroelectric fiction novella*
- [The Parallax Key](https://singulargrit.substack.com/p/the-parallax-key) — *Science-fiction novel about neural consciousness; no Bitcoin substance*
- [The Currency of Silence](https://singulargrit.substack.com/p/the-currency-of-silence) — *Dystopian satire on surveillance/control; tokenised silence only a device*
- [The People vs. Banksy™ (and Other Decorative Crimes)](https://singulargrit.substack.com/p/the-people-vs-banksy-and-other-decorative) — *Graffiti and bureaucracy satire*
- [The Inevitability of Me — by Zylon Husk ](https://singulargrit.substack.com/p/the-inevitability-of-me-by-zylon) — *Tech-messiah satire, no Bitcoin subject*
- [The Subversive Pursuit: Reclaiming Beauty in an Age of Disintegration](https://singulargrit.substack.com/p/the-subversive-pursuit-reclaiming) — *Aesthetics, beauty*
- [From Household to Cloister: The Historical Transformation of Christian Leadership and Family Life](https://singulargrit.substack.com/p/from-household-to-cloister-the-historical) — *Religion, church history*
- [The Poisoned Gift of Credit: Why Ease Breeds Insecurity](https://singulargrit.substack.com/p/the-poisoned-gift-of-credit-why-ease) — *Credit/usury inquiry, no digital-cash tie*
- [The Cult of Empty Victory](https://singulargrit.substack.com/p/the-cult-of-empty-victory) — *Debate societies and sophistry critique*
- [The Tragedy of the Imaginary Ten](https://singulargrit.substack.com/p/the-tragedy-of-the-imaginary-ten) — *Dating/statistics essay*
- [The Fire of Will](https://singulargrit.substack.com/p/the-fire-of-will) — *Wesleyan sermon*
- [Silent Pollinators of the Tunnel: Harnessing Stingless Bees in Polytarp Cultivation](https://singulargrit.substack.com/p/silent-pollinators-of-the-tunnel) — *Bees, agriculture*
- [The Last Round Before the Mirror](https://singulargrit.substack.com/p/the-last-round-before-the-mirror) — *Personal meditation on ageing*

</details>

<details><summary><b>2025-10</b> — 24 posts</summary>

- [The Quiet War in Plastic Walls](https://singulargrit.substack.com/p/the-quiet-war-in-plastic-walls) — *Greenhouse pest management*
- [The Choir of Perfect Minds](https://singulargrit.substack.com/p/the-choir-of-perfect-minds) — *Dystopian neural-link fiction*
- [The Quiet Industry of a Great Man](https://singulargrit.substack.com/p/the-quiet-industry-of-a-great-man) — *Personal/agriculture, polytunnel Sunday*
- [The Labour of Being: On the Lost Meaning of Work and Leisure](https://singulargrit.substack.com/p/the-labour-of-being-on-the-lost-meaning) — *Work and leisure philosophy*
- [It Is a Privilege to Work, and in Work We Should Find Pleasure](https://singulargrit.substack.com/p/it-is-a-privilege-to-work-and-in) — *Dignity of labour treatise*
- [Experience and Its Counterfeits: The Ethics of Growth in a Repetitive Age](https://singulargrit.substack.com/p/experience-and-its-counterfeits-the) — *Philosophy of experience and mastery*
- [We Become What We Repeat: Habit, Identity, and the Architecture of the Self](https://singulargrit.substack.com/p/we-become-what-we-repeat-habit-identity) — *Habit, identity, character philosophy*
- [The Mirage of the Logical Qubit: A Treatise on the Cult of Quantum Salvation](https://singulargrit.substack.com/p/titlethe-mirage-of-the-logical-qubit) — *Quantum-computing critique; no evident Bitcoin-crypto tie*
- [Nobility: The Forgotten Discipline of Excellence](https://singulargrit.substack.com/p/nobility-the-forgotten-discipline) — *Moral philosophy*
- [The Labour of Grace: On Work, Discipline, and the Ascent of the Soul](https://singulargrit.substack.com/p/the-labour-of-grace-on-work-discipline) — *Religion, work as worship*
- [The Quiet Architects of Eden: Cultivating Native Stingless Bees for Family, Food, and Future](https://singulargrit.substack.com/p/the-quiet-architects-of-eden-cultivating) — *Beekeeping guide*
- [The Flower and the Machine — Reclaiming Agriculture from Automation](https://singulargrit.substack.com/p/the-flower-and-the-machine-reclaiming) — *Agriculture, bees, automation critique*
- [The Gentle Republic — The Asian Honeybee and the Art of Resilience](https://singulargrit.substack.com/p/the-gentle-republic-the-asian-honeybee) — *Bees*
- [The Utility of the Useless: Why the Humanities Sustain Science](https://singulargrit.substack.com/p/the-utility-of-the-useless-why-the) — *Humanities vs STEM*
- [The Earth That Feeds Itself: A Manifesto Against the Agrarian Machine](https://singulargrit.substack.com/p/the-earth-that-feeds-itself-a-manifesto) — *Agriculture/small-farming manifesto*
- [The Discipline of Rest: A Sunday Reflection on Work, Truth, and Renewal](https://singulargrit.substack.com/p/the-discipline-of-rest-a-sunday-reflection) — *Personal reflection*
- [The Weight of One: A Manifesto on Self-Reliance and the Refusal to Beg](https://singulargrit.substack.com/p/the-weight-of-one-a-manifesto-on) — *Self-reliance manifesto, personal*
- [The Cult of Expectation: How Modern Dependency Killed Initiative](https://singulargrit.substack.com/p/the-cult-of-expectation-how-modern) — *Dependency and initiative polemic*
- [The Discipline of De-Anthropomorphised Writing: A Study in Precision, Control, and the Erasure of the Human Metaphor](https://singulargrit.substack.com/p/the-discipline-of-de-anthropomorphised) — *Writing craft, academic style*
- [The Architecture of the Self: Freedom as the Discipline of Thought](https://singulargrit.substack.com/p/the-architecture-of-the-self-freedom) — *Freedom and self-discipline philosophy*
- [The Price of Utility: Abraham Flexner, Education, and the Betrayal of Curiosity](https://singulargrit.substack.com/p/the-price-of-utility-abraham-flexner) — *Education philosophy*
- [The Sabbath of the Mind: On Truth, Work, and the Sacred Duty of Becoming](https://singulargrit.substack.com/p/the-sabbath-of-the-mind-on-truth) — *Moral reflection*
- [The Mirage of Infinity: Cantor’s Fallacy and the Limits of the Unbounded](https://singulargrit.substack.com/p/the-mirage-of-infinity-cantors-fallacy) — *Pure maths/philosophy of infinity, Cantor*
- [Dissecting the Myth of “Heavy-Tailed Chaos”: A Forensic Deconstruction of Slow Transition to Low-Dimensional Dynamics in Heavy-Tailed RNNs](https://singulargrit.substack.com/p/dissecting-the-myth-of-heavy-tailed) — *ML/stats research critique, no ledger*

</details>

<details><summary><b>2025-11</b> — 15 posts</summary>

- [The Architecture of Eloquence: On the Sanctity of Language and the Mechanical Desecration Thereof](https://singulargrit.substack.com/p/the-architecture-of-eloquence-on) — *Language sanctity and writing craft*
- [The Civilised Art of Talking Like One Thinks](https://singulargrit.substack.com/p/the-civilised-art-of-talking-like) — *Rhetoric and speech*
- [The Sublime Use of Useless Knowledge](https://singulargrit.substack.com/p/the-sublime-use-of-useless-knowledge) — *Philosophy of knowledge*
- [The Architecture of Meaning: On the Collapse and Reclamation of Culture](https://singulargrit.substack.com/p/the-architecture-of-meaning-on-the) — *Culture and meaning essay*
- [Keynes and Samuelson: The Corruption of Prudence and the Myth of Endless Stimulus](https://singulargrit.substack.com/p/keynes-and-samuelson-the-corruption) — *Keynesian fiscal-policy history, no digital-cash tie*
- [From Surplus to Ruin: Keynes, Samuelson, and Rand on the Moral Failure of Economic Stewardship](https://singulargrit.substack.com/p/from-surplus-to-ruin-keynes-samuelson) — *Keynes/Samuelson/Rand fiscal history, not digital cash*
- [The Morality of Men and the Economy of Failure](https://singulargrit.substack.com/p/the-morality-of-men-and-the-economy) — *Wesleyan sermon*
- [The Market Has Spoken: A Dissection of Anthropomorphic Fallacies in Economic Discourse](https://singulargrit.substack.com/p/the-market-has-spoken-a-dissection) — *Anthropomorphic fallacies in economic discourse, not digital cash*
- [The Discipline of Writing: Craft, Clarity, and the Uncompromising Page](https://singulargrit.substack.com/p/the-discipline-of-writing-craft-clarity) — *Writing craft; no Bitcoin content*
- [The Martian Mirage](https://singulargrit.substack.com/p/the-martian-mirage) — *Mars colonisation critique, robotics*
- [The Republic of the Illiterates](https://singulargrit.substack.com/p/the-republic-of-the-illiterates) — *Education, writing craft*
- [The Red Planet and Other Expensive Delusions: THE GREAT MARTIAN MISAPPROPRIATION](https://singulargrit.substack.com/p/the-red-planet-and-other-expensive) — *Mars colonisation satire/critique*
- [The Economics of Extravagance: A Terawatt in Orbit and the Delusions That Built It](https://singulargrit.substack.com/p/the-economics-of-extravagance-a-terawatt) — *Space-based AI compute economics critique*
- [The Miniaturisation of the Modern Mind: On Power, Cowardice, and the New War Against Human Excellence](https://singulargrit.substack.com/p/the-miniaturisation-of-the-modern) — *Philosophy, Gracian, decline of thought*
- [The Gospel of Mechanism and the Folly of Red Sand Dreams](https://singulargrit.substack.com/p/the-gospel-of-mechanism-and-the-folly) — *Mars colonisation critique*

</details>

<details><summary><b>2025-12</b> — 26 posts</summary>

- [The Economics of Extravagance: A Terawatt in Orbit and the Delusions That Built It](https://singulargrit.substack.com/p/the-economics-of-extravagance-a-terawatt-c6e) — *Space-based AI compute critique, no ledger*
- [The Mirage of the Leisure Century](https://singulargrit.substack.com/p/the-mirage-of-the-leisure-century) — *Keynes/Musk post-work fantasy critique*
- [Security Theatre Is a Liability](https://singulargrit.substack.com/p/security-theatre-is-a-liability) — *General infosec usability; no Bitcoin tie in substance*
- [The Missing Machine](https://singulargrit.substack.com/p/the-missing-machine) — *Economic calculation debate; no Bitcoin mention*
- [THE GOSPEL OF THE ALGORITHM: A COMEDY OF ERRORS WRITTEN BY MACHINES & SUFFERED BY HUMANS ](https://singulargrit.substack.com/p/the-gospel-of-the-algorithm-a-comedy) — *AI satire fiction, no ledger subject*
- [The Architecture of Excellence](https://singulargrit.substack.com/p/the-architecture-of-excellence) — *Habits and virtue; personal/motivational self-help*
- [The Cult of the Recent: Against Academic STEM Envy](https://singulargrit.substack.com/p/the-cult-of-the-recent-against-academic) — *Academia and citation culture*
- [The Apprenticeship of Freedom](https://singulargrit.substack.com/p/the-apprenticeship-of-freedom) — *Liberal education*
- [The Quantum Confidence Trick](https://singulargrit.substack.com/p/the-quantum-confidence-trick) — *Quantum sampling hype; never touches cryptography or Bitcoin*
- [The Mirror in the Marketplace](https://singulargrit.substack.com/p/the-mirror-in-the-marketplace) — *Profit and market morality*
- [Juries Against the Machine State](https://singulargrit.substack.com/p/juries-against-the-machine-state) — *Juries and judicial power*
- [The State as Arsonist, the Market as Scapegoat](https://singulargrit.substack.com/p/the-state-as-arsonist-the-market) — *Monopoly and welfare as governmental failures*
- [The Jury and the Republic](https://singulargrit.substack.com/p/the-jury-and-the-republic) — *Federalist 10, constitutional politics*
- [The Gospel of the Empty Blueprint](https://singulargrit.substack.com/p/the-gospel-of-the-empty-blueprint) — *Anti-socialism parable, not Bitcoin*
- [The State Is Not a Spirit](https://singulargrit.substack.com/p/the-state-is-not-a-spirit) — *Political philosophy*
- [The Hash and the Myth: A Civilised Guide to One-Way Numbers](https://singulargrit.substack.com/p/the-hash-and-the-myth-a-civilised) — *Pure hash-function explainer; never ties to Bitcoin/ledger*
- [The Benevolent Autocrat and the Succession Trap](https://singulargrit.substack.com/p/the-benevolent-autocrat-and-the-succession) — *Autocracy political theory*
- [Education for Liberty, Not for the Factory](https://singulargrit.substack.com/p/education-for-liberty-not-for-the) — *Education philosophy*
- [Scrooge, Cratchit, and the Modern Christmas Debt Cult](https://singulargrit.substack.com/p/scrooge-cratchit-and-the-modern-christmas) — *Christmas debt-culture morality essay*
- [The Chaos of Human Want and the Folly of Planning It](https://singulargrit.substack.com/p/the-chaos-of-human-want-and-the-folly) — *General capitalism/Hayek knowledge-problem defence, no digital-cash tie*
- [The Republic of the Half-Read](https://singulargrit.substack.com/p/the-republic-of-the-half-read) — *Reading and democracy*
- [The Training Revolt](https://singulargrit.substack.com/p/the-training-revolt) — *Education decay*
- [Reason Before Opinion: Why Philosophy Remains the Foundation of Thinking in an Age of Obedience](https://singulargrit.substack.com/p/reason-before-opinion-why-philosophy) — *Philosophy of thinking*
- [The Ghost in the Machine: Why AI Has Made Logic, Reason, and the “Soft Arts” More Critical Than Ever](https://singulargrit.substack.com/p/the-ghost-in-the-machine-why-ai-has) — *AI and human thought*
- [New Year’s Ledger of Liberty](https://singulargrit.substack.com/p/new-years-ledger-of-liberty) — *State-and-market political essay; ledger metaphorical*
- [Those Who Can Do, and Those Who Cannot Call to the State](https://singulargrit.substack.com/p/those-who-can-do-and-those-who-cannot) — *Politics of competence and dependence*

</details>

<details><summary><b>2026-01</b> — 25 posts</summary>

- [Freedom of the Mind: Why Philosophy and the Arts Are the Final Defence Against Mechanical Obedience](https://singulargrit.substack.com/p/freedom-of-the-mind-why-philosophy) — *Philosophy and arts defence*
- [The Gospel of Zero Waste and Other Lies We Tell Ourselves](https://singulargrit.substack.com/p/the-gospel-of-zero-waste-and-other) — *Food waste and agriculture policy*
- [Truth Without Apology](https://singulargrit.substack.com/p/truth-without-apology) — *Epistemology of truth, no Bitcoin tie*
- [Aesthetics Is Not Decoration: Beauty as Signal, Discipline, and Truth](https://singulargrit.substack.com/p/aesthetics-is-not-decoration-beauty) — *Aesthetics*
- [Three Boxes and a Lie](https://singulargrit.substack.com/p/three-boxes-and-a-lie) — *Politics, class-list thinking*
- [Protein Quality, Growth, and Cognitive Development: Why Children Need Animal-Source Nutrients for IQ and Height](https://singulargrit.substack.com/p/protein-quality-growth-and-cognitive) — *Nutrition, child development*
- [IQ, Inheritance, and the Genome: What “Genetic” Means, What It Does Not, and Why Sex Chromosomes Complicate the Story](https://singulargrit.substack.com/p/iq-inheritance-and-the-genome-what) — *Genetics, heritability*
- [Vegan Children: The Diet That Becomes a Project](https://singulargrit.substack.com/p/vegan-children-the-diet-that-becomes) — *Child nutrition*
- [Calibration That Pays: Why Forecast “Accuracy” Fails Once Trading Costs Exist](https://singulargrit.substack.com/p/calibration-that-pays-why-forecast) — *S&P 500 forecasting study; not digital cash*
- [The Successor Delusion: Why Evolution Does Not Owe the Earth Another Mind](https://singulargrit.substack.com/p/the-successor-delusion-why-evolution) — *Evolution and intelligence speculation*
- [Gaia as Idol: The Moral Planet Myth and the Flight from Reality](https://singulargrit.substack.com/p/gaia-as-idol-the-moral-planet-myth) — *Environmentalism/climate rhetoric critique*
- [A Four-Acre Food Commons: Year-One Economics of a Polytarp-Tunnel, Hydroponic, and Poultry-Integrated Vegetable System](https://singulargrit.substack.com/p/a-four-acre-food-commons-year-one) — *Smallholding agriculture economics*
- [The Protein Sermon and the Human Cost](https://singulargrit.substack.com/p/the-protein-sermon-and-the-human) — *Diet/nutrition moralising critique*
- [The Failure of Climate Forecasting: A Retrospective Analysis of Thirty Years of Model Error](https://singulargrit.substack.com/p/the-failure-of-climate-forecasting) — *Climate model critique*
- [Tolerance, Meaning, and the Limits of Forbearance](https://singulargrit.substack.com/p/tolerance-meaning-and-the-limits) — *Philosophy of tolerance*
- [The Emergence of AI in Finance: Opportunities, Challenges, and Implications](https://singulargrit.substack.com/p/the-emergence-of-ai-in-finance-opportunities) — *AI-in-finance survey; never lands on ledger/blockchain*
- [The Bipartite Shadow Hypothesis: Where Erdős–Hajnal Now Bottlenecks](https://singulargrit.substack.com/p/the-bipartite-shadow-hypothesis-where) — *Pure graph theory*
- [The One Leaf That Matters: A Bounded-Depth Reduction for P6-Free Graphs](https://singulargrit.substack.com/p/the-one-leaf-that-matters-a-bounded) — *Pure graph theory, Erdos-Hajnal*
- [What Economics Claims to Know](https://singulargrit.substack.com/p/what-economics-claims-to-know) — *Economic methodology/epistemology, not monetary*
- [Independent Judgment Without Amateurism](https://singulargrit.substack.com/p/independent-judgment-without-amateurism) — *US administrative law after Loper Bright*
- [Speech as Infrastructure](https://singulargrit.substack.com/p/speech-as-infrastructure) — *Content moderation policy*
- [The Tyranny of One-Size-Fits-All Nutrition](https://singulargrit.substack.com/p/the-tyranny-of-one-size-fits-all) — *Nutrition*
- [The Lost Lesson: Economics After the Slogans](https://singulargrit.substack.com/p/the-lost-lesson-economics-after-the) — *Book pitch; general economics, not digital cash*
- [The Architecture of Excellence — Chapter 1 (Preview)](https://singulargrit.substack.com/p/the-architecture-of-excellence-chapter) — *Book preview, habits/virtue*
- [THE DISCIPLINE OF GREATNESS](https://singulargrit.substack.com/p/the-discipline-of-greatness) — *Motivational book synopsis*

</details>

<details><summary><b>2026-02</b> — 26 posts</summary>

- [Unveiling the Facade](https://singulargrit.substack.com/p/unveiling-the-facade) — *Human progress, cultural critique*
- [The Dichotomy of Progress](https://singulargrit.substack.com/p/the-dichotomy-of-progress) — *Progress narrative, culture*
- [The Hypocrisy of Envy](https://singulargrit.substack.com/p/the-hypocrisy-of-envy) — *Wealth redistribution politics, no digital-cash connection*
- [The Smuggled Morality of “Fair” in an Age of Mass Excuses](https://singulargrit.substack.com/p/the-smuggled-morality-of-fair-in) — *Envy, borders, redistribution polemic*
- [The Word “Fair” and the Vice It Hides](https://singulargrit.substack.com/p/the-word-fair-and-the-vice-it-hides) — *Envy, poverty, redistribution polemic*
- [The Myth of “Artificial Scarcity”: Food Waste, Forecasting, and the Price of Abundance](https://singulargrit.substack.com/p/the-myth-of-artificial-scarcity-food) — *Food waste and logistics economics*
- [The Unveiled Elegance of Dirichlet Numbers](https://singulargrit.substack.com/p/the-unveiled-elegance-of-dirichlet) — *Pure mathematics*
- [The Jury Is Not a Fact-Finding Machine. It Never Was.](https://singulargrit.substack.com/p/the-jury-is-not-a-fact-finding-machine) — *Jury-trial law, not digital assets*
- [The Algorithm Denied Your Loan. Good Luck Suing.](https://singulargrit.substack.com/p/the-algorithm-denied-your-loan-good) — *AI liability and law*
- [The Algorithm Is Watching: How AI Surveillance Is Gutting the Fourth Amendment](https://singulargrit.substack.com/p/the-algorithm-is-watching-how-ai) — *AI surveillance and Fourth Amendment*
- [The AI Governance Trilemma: Why We Can't Have It All](https://singulargrit.substack.com/p/the-ai-governance-trilemma-why-we) — *AI governance*
- [Sovereign Algorithms](https://singulargrit.substack.com/p/sovereign-algorithms) — *AI regulation*
- [The Alibi of Form: On Power That Refuses Its Own Name](https://singulargrit.substack.com/p/the-alibi-of-form-on-power-that-refuses) — *Governance and power philosophy*
- [Turtles All the Way Down: The Exquisite Lie That Science Tells Itself](https://singulargrit.substack.com/p/turtles-all-the-way-down-the-exquisite) — *Philosophy of science*
- [Beauty Against Permission: Why a Civilisation That Cannot Say “Ugly” Deserves What It Gets](https://singulargrit.substack.com/p/beauty-against-permission-why-a-civilisation) — *Aesthetics and culture*
- [The Art of the Good Rejection](https://singulargrit.substack.com/p/the-art-of-the-good-rejection) — *Writing and praise*
- [The Cognitive Zombie: What Your AI Understands About You (Which Is Nothing)](https://singulargrit.substack.com/p/the-cognitive-zombie-what-your-ai) — *Philosophy of AI consciousness; no ledger or Bitcoin tie*
- [They Stole Shakespeare from the Poor and Called It Progress](https://singulargrit.substack.com/p/they-stole-shakespeare-from-the-poor) — *Education and class critique*
- [The Trained and the Educated: Why Democracies Die When Schools Stop Teaching People to Think](https://singulargrit.substack.com/p/the-trained-and-the-educated-why) — *Education and democracy*
- [The Permanent Things: On STEM, the Arts, and the Education of Citizens](https://singulargrit.substack.com/p/the-permanent-things-on-stem-the) — *Education, STEM vs arts*
- [What Madison Knew and We Forgot: The Collapse of Self-Governance in a Trained Society](https://singulargrit.substack.com/p/what-madison-knew-and-we-forgot-the) — *Politics, civic education*
- [You Were Never Going to Find Yourself in Bali](https://singulargrit.substack.com/p/you-were-never-going-to-find-yourself) — *Self-help critique*
- [The Word That Ate Itself](https://singulargrit.substack.com/p/the-word-that-ate-itself) — *Tolerance, language*
- [How “Don’t Harass” Became “Don’t Disagree”: The Three-Stage Capture of Evaluative Speech in British Law](https://singulargrit.substack.com/p/how-dont-harass-became-dont-disagree) — *British speech law, not digital assets*
- [The Machinery of Silence](https://singulargrit.substack.com/p/the-machinery-of-silence) — *Institutional censorship of thought; culture/politics*
- [The Machine That Cannot Know](https://singulargrit.substack.com/p/the-machine-that-cannot-know) — *AI knowledge problem, no ledger connection*

</details>

<details><summary><b>2026-03</b> — 15 posts</summary>

- [The Soul in the Machine: On the Dark Triad, the Digital Colosseum, and the Psychology That Dares Not Speak Its Name](https://singulargrit.substack.com/p/the-soul-in-the-machine-on-the-dark) — *Dark Triad psychology and algorithms*
- [The Architecture of Ruin: Dark Triad Personalities, Digital Stages, and the Consequences of Unexamined Ideas](https://singulargrit.substack.com/p/the-architecture-of-ruin-dark-triad) — *Psychology/philosophy of platform culture*
- [Make It Fair: The Quiet Expropriation of Britain’s Culture for Machine Training](https://singulargrit.substack.com/p/make-it-fair-the-quiet-expropriation) — *Copyright and AI training policy politics*
- [The Blueprints Nobody Reads: How Dead Philosophers Built the Internet’s Worst People](https://singulargrit.substack.com/p/the-blueprints-nobody-reads-how-dead) — *Philosophy of platform design and human nature*
- [What Should a Regular Person Prioritise in This Time of Paradigm Change?](https://singulargrit.substack.com/p/what-should-a-regular-person-prioritise) — *Personal sovereignty motivational essay*
- [The Missing Foundation ](https://singulargrit.substack.com/p/the-missing-foundation) — *Digital identity/content-addressing infrastructure; ledger-adjacent but never ledger-tied*
- [You Are Not a Mystery. You Are a Construction Site.](https://singulargrit.substack.com/p/you-are-not-a-mystery-you-are-a-construction) — *Motivational, self-construction*
- [The Word They Stole: Tolerance, Power, and the Art of Conceptual Fraud](https://singulargrit.substack.com/p/the-word-they-stole-tolerance-power) — *Tolerance, conceptual politics*
- [The Toll Booth Where the Library Used to Be](https://singulargrit.substack.com/p/the-toll-booth-where-the-library) — *Doctorate/education critique*
- [You Cannot Mass-Produce a Mind](https://singulargrit.substack.com/p/you-cannot-mass-produce-a-mind) — *Doctoral education*
- [The Empire That Chose to Stop Thinking](https://singulargrit.substack.com/p/the-empire-that-chose-to-stop-thinking) — *China history and epistemological closure*
- [Why Financial Crises Are Invisible Until They’re Unavoidable](https://singulargrit.substack.com/p/why-financial-crises-are-invisible) — *Bank accounting information theory; no ledger*
- [The Shape of Entanglement: Why Dimension Doesn't Matter](https://singulargrit.substack.com/p/the-shape-of-entanglement-why-dimension) — *Quantum optics theory, not Bitcoin cryptography*
- [The Best President China Ever Had](https://singulargrit.substack.com/p/the-best-president-china-ever-had) — *China/US geopolitics*
- [The Confident Liar: On Machines That Cannot Say "I Don't Know"](https://singulargrit.substack.com/p/the-confident-liar-on-machines-that) — *AI hallucination critique*

</details>

<details><summary><b>2026-04</b> — 12 posts</summary>

- [From Sail to Oil to Algorithms](https://singulargrit.substack.com/p/from-sail-to-oil-to-algorithms) — *British industrial history and AI strategy*
- [Mass Autonomy and the Next Grammar of Power](https://singulargrit.substack.com/p/mass-autonomy-and-the-next-grammar) — *Military AI and drone-swarm strategy*
- [Maximum Pressure, Maximum Blowback](https://singulargrit.substack.com/p/maximum-pressure-maximum-blowback) — *Iran geopolitics*
- [The Decline of Statesmanship: Trump’s Iran Policy and Classical Republican Wisdom](https://singulargrit.substack.com/p/the-decline-of-statesmanship-trumps) — *Trump/Iran political commentary*
- [The Phone I Did Not Pick Up](https://singulargrit.substack.com/p/the-phone-i-did-not-pick-up) — *Personal, motivational*
- [The Coconut Problem](https://singulargrit.substack.com/p/the-coconut-problem) — *Ageing, archery, personal*
- [Rent-Seeking](https://singulargrit.substack.com/p/rent-seeking) — *General economics of rent-seeking; no crypto tie in text*
- [The Marionette Fallacy](https://singulargrit.substack.com/p/the-marionette-fallacy) — *AI-will-not-replace-humanity argument*
- [The Globalisation of Labour Through Mechanised Extension: Competition, Value, and the Persistence of Work](https://singulargrit.substack.com/p/the-globalisation-of-labour-through) — *Robotics, labour markets; no ledger*
- [The Traitor’s Alibi](https://singulargrit.substack.com/p/the-traitors-alibi) — *Iran/Trump geopolitics*
- [The Art of the Crater](https://singulargrit.substack.com/p/the-art-of-the-crater) — *US economic policy critique*
- [The Theology of Abundance](https://singulargrit.substack.com/p/the-theology-of-abundance) — *Automation and scarcity economics*

</details>

<details><summary><b>2026-05</b> — 5 posts</summary>

- [Two Laws Walk Into a Dataset](https://singulargrit.substack.com/p/two-laws-walk-into-a-dataset) — *AI copyright vs privacy law collision, not digital assets*
- [Against the Empire of Intermediaries](https://singulargrit.substack.com/p/against-the-empire-of-intermediaries) — *Political philosophy of nationhood; Bitcoin only illustrative strand*
- [Measuring the Shape of the Hottest Liquid in the Universe](https://singulargrit.substack.com/p/measuring-the-shape-of-the-hottest) — *Nuclear physics*
- [The Shortcut That Holds Up Modern Physics — and Where It Snaps](https://singulargrit.substack.com/p/the-shortcut-that-holds-up-modern) — *Physics, fluid simulation*
- [The Tyranny of Gratitude](https://singulargrit.substack.com/p/the-tyranny-of-gratitude) — *Social commentary*

</details>

<details><summary><b>2026-06</b> — 20 posts</summary>

- [Negotiation Is a Continuation of the Battle](https://singulargrit.substack.com/p/negotiation-is-a-continuation-of) — *Geopolitics, Iran negotiations*
- [The Original Cold War](https://singulargrit.substack.com/p/the-original-cold-war) — *Roman history*
- [The Wages of Defeat](https://singulargrit.substack.com/p/the-wages-of-defeat) — *Roman history reparations, no digital-cash link*
- [Paying for Rivalry](https://singulargrit.substack.com/p/paying-for-rivalry) — *US-China fiscal geopolitics*
- [The Art of Reaching the Conclusion You Started With](https://singulargrit.substack.com/p/the-art-of-reaching-the-conclusion) — *Motivated reasoning epistemology*
- [The Art of Reaching the Conclusion You Started With](https://singulargrit.substack.com/p/the-art-of-reaching-the-conclusion-461) — *Motivated reasoning, epistemology*
- [The Man Who Owns the Press](https://singulargrit.substack.com/p/the-man-who-owns-the-press) — *Kinsella anti-IP critique, not digital-asset law*
- [The Price of Ideas](https://singulargrit.substack.com/p/the-price-of-ideas) — *IP economics, drugs and books*
- [The Copyist's Eden](https://singulargrit.substack.com/p/the-copyists-eden) — *Anti-IP-abolition argument, institutions*
- [Owning Values](https://singulargrit.substack.com/p/owning-values) — *Libertarian IP debate (Rand/Hoppe)*
- [The Fallacy of Non-Scarcity: Natural Law, Time-Bound Rights, and the Economic Illiteracy of Anti-Property Rhetoric](https://singulargrit.substack.com/p/the-fallacy-of-non-scarcity-natural) — *Intellectual-property natural-law theory, not digital assets*
- [Intellectual Property, Contract, and the Institutional Order: A Comparative Case](https://singulargrit.substack.com/p/intellectual-property-contract-and) — *IP and institutional order, comparative law*
- [The Machine That Read Everything](https://singulargrit.substack.com/p/the-machine-that-read-everything) — *AI training on corpus, copyright*
- [Reform, Not Abolition: Scarcity, Control, and the Institutional Case for Intellectual Property](https://singulargrit.substack.com/p/reform-not-abolition-scarcity-control) — *IP institutional economics, not digital assets*
- [Against the Copyist’s Socialism (I): The Costume](https://singulargrit.substack.com/p/against-the-copyists-socialism-i) — *IP versus Austrian economics, not digital assets*
- [Against the Copyist’s Socialism (III): Hayek’s Courthouse](https://singulargrit.substack.com/p/against-the-copyists-socialism-iii) — *IP debate, Hayek/statelessness*
- [Against the Copyist’s Socialism (II): Mises’s Problem](https://singulargrit.substack.com/p/against-the-copyists-socialism-ii) — *IP debate, Mises*
- [Human Flourishing and Why Economics Is Not Dogma](https://singulargrit.substack.com/p/human-flourishing-and-why-economics) — *General economics and human flourishing*
- [Rothbard’s Stateless Society Is Just Small States and Plutocracy in Disguise](https://singulargrit.substack.com/p/rothbards-stateless-society-is-just) — *Political theory, anarcho-capitalism critique, not Bitcoin-centred*
- [The Actuarial State](https://singulargrit.substack.com/p/the-actuarial-state) — *Private-law political theory critique*

</details>

<details><summary><b>2026-07</b> — 17 posts</summary>

- [The Tipping Point Nobody Wants to Name](https://singulargrit.substack.com/p/the-tipping-point-nobody-wants-to) — *Plutocracy and politics*
- [Not Yet](https://singulargrit.substack.com/p/not-yet) — *US/UK plutocracy politics*
- [The Weight of Years](https://singulargrit.substack.com/p/the-weight-of-years) — *Demographics and ageing societies*
- [The Arithmetic of Age](https://singulargrit.substack.com/p/the-arithmetic-of-age) — *Demographics*
- [The Information AI Cannot Learn](https://singulargrit.substack.com/p/the-information-ai-cannot-learn) — *AI training-data economics; no ledger*
- [What Is Truth? ](https://singulargrit.substack.com/p/what-is-truth) — *Philosophy of truth*
- [Ideas and Tribalism ](https://singulargrit.substack.com/p/ideas-and-tribalism) — *Philosophy of belief and tribalism*
- [Truth, Dogmatism, and Belonging](https://singulargrit.substack.com/p/truth-dogmatism-and-belonging) — *Epistemology, dogmatism*
- [Logic, Meaning, and Being Right](https://singulargrit.substack.com/p/logic-meaning-and-being-right) — *Logic and rhetoric philosophy*
- [How Socrates Won](https://singulargrit.substack.com/p/how-socrates-won) — *History of philosophy*
- [What Markets Do Right and Wrong](https://singulargrit.substack.com/p/what-markets-do-right-and-wrong) — *Price theory and market information, not digital cash*
- [What Politics Does](https://singulargrit.substack.com/p/what-politics-does) — *Political theory, voting and republics*
- [Why Markets Need Controls](https://singulargrit.substack.com/p/why-markets-need-controls) — *General market regulation; not digital assets*
- [Being Right](https://singulargrit.substack.com/p/being-right) — *Epistemology of certainty*
- [Belief](https://singulargrit.substack.com/p/belief) — *Epistemology of belief*
- [The Two Relations](https://singulargrit.substack.com/p/the-two-relations) — *Ontology of proof/truth/markets/democracy, philosophy*
- [What It Means to Be Human ](https://singulargrit.substack.com/p/what-it-means-to-be-human) — *Humanistic philosophy*

</details>

<details><summary><b>2026-08</b> — 7 posts</summary>

- [The Wrong Word Is Doing the Damage](https://singulargrit.substack.com/p/the-wrong-word-is-doing-the-damage) — *AI 'hallucination' terminology critique*
- [Confidence Is Not a Number You Print](https://singulargrit.substack.com/p/confidence-is-not-a-number-you-print) — *LLM confidence, AI*
- [The Constraint Nobody Can Check](https://singulargrit.substack.com/p/the-constraint-nobody-can-check) — *AI continual-learning evaluation problem*
- [The Price of a Causal Variable](https://singulargrit.substack.com/p/the-price-of-a-causal-variable) — *Causal inference and AI world models, no ledger tie*
- [One Wrong Premise, Faithfully Executed](https://singulargrit.substack.com/p/one-wrong-premise-faithfully-executed) — *Compounding error in long AI plans*
- [The Frontier Is Not Jagged in the Shape of Difficulty](https://singulargrit.substack.com/p/the-frontier-is-not-jagged-in-the) — *AI open problems and training signals*
- [Everything Reduces to the Verifier](https://singulargrit.substack.com/p/everything-reduces-to-the-verifier) — *AI planning and verification, no ledger*

</details>

### Medium OUT (36)

<details><summary><b>2018-09</b> — 4 posts</summary>

- [Data World](https://medium.com/@craig_10243/data-world-a06ee4eef9a) — *Essay on data ownership, privacy versus anonymity and ubiquitous recording/cloud storage; no blockchain or cryptocurrency content.*
- [How Bitcoin helps reduce Poverty](https://medium.com/@craig_10243/how-bitcoin-helps-reduce-poverty-edb052f39f53) — *Bitcoin appears only in the title; the body argues poverty is solved by cheap technology, global earning and capitalism without ever discussing Bitcoin.*
- [Economic convergence](https://medium.com/@craig_10243/economic-convergence-8450bcf1b813) — *Short essay on automation changing society and economic convergence; no mention of Bitcoin.*
- [Where have all the unskilled jobs gone?](https://medium.com/@craig_10243/where-have-all-the-unskilled-jobs-gone-82c35076c64d) — *Automation and future-of-work essay (robotics, Rome's slave economy) ending with only a rhetorical 'Why Bitcoin?' sign-off.*

</details>

<details><summary><b>2018-10</b> — 6 posts</summary>

- [The error in Coase](https://medium.com/@craig_10243/the-error-in-coase-ad0570789c98) — *Critique of Coase's transaction-cost theory of the firm; no Bitcoin or blockchain engagement.*
- [The collectivist insanity](https://medium.com/@craig_10243/the-collectivist-insanity-45279c3af65b) — *Short anti-collectivist syllogism; political philosophy with no Bitcoin or blockchain content.*
- [The Game of Chicken](https://medium.com/@craig_10243/the-game-of-chicken-e8a26b39e49e) — *All-in MAD game-theory musing with no explicit crypto content; possibly a veiled hash-war strategy statement given its October 2018 date, but the text never engages Bitcoin.*
- [Effective Enforcement in the Vastly Distributed Wild Wild Web](https://medium.com/@craig_10243/effective-enforcement-in-the-vastly-distributed-wild-wild-web-a20332fc0f1b) — *PhD-era essay on internet intermediary liability (ISPs, CDA s230, defamation, cyber negligence) with no Bitcoin or blockchain content.*
- [Non-Repudiation — Does this exist?](https://medium.com/@craig_10243/non-repudiation-does-this-exist-815215e23fd) — *General evidence/IT-law essay on repudiation of signatures, witnessing, digital signatures and audit logs with no engagement of Bitcoin or blockchain in the body.*
- [The Bitcoin Future](https://medium.com/@craig_10243/the-bitcoin-future-ef8ff63831f9) — *Bitcoin appears only in the title; the body is a futurist essay on exponential growth in storage, CPU and bandwidth and cheap global devices, with no Bitcoin discussion.*

</details>

<details><summary><b>2018-11</b> — 12 posts</summary>

- [The problem of Keynes](https://medium.com/@craig_10243/the-problem-of-keynes-82490136a1cc) — *Keynes critique built around a Bastiat link; no mention of Bitcoin or digital money.*
- [The Legacy of Keynesian Money](https://medium.com/@craig_10243/the-legacy-of-keynesian-money-7803081e61c6) — *Austrian-school critique of Keynesian aggregates and Fed low-interest policy; no mention of Bitcoin or blockchain.*
- [Exporting Wealth](https://medium.com/@craig_10243/exporting-wealth-4266c9f7b3e) — *Critique of centralised policy pushing tangible-goods export production; general economics with no crypto linkage.*
- [Markets and imperfections](https://medium.com/@craig_10243/markets-and-imperfections-e6d8c0622123) — *Critique of Akerlof's market-for-lemons and market-failure rhetoric; general microeconomics with no crypto linkage.*
- [On the Minimum Wage](https://medium.com/@craig_10243/on-the-minimum-wage-116ed03b0623) — *Argues minimum wage is a tariff and price-fixing on labour; general economics with no crypto content.*
- [Buy now, Pay later](https://medium.com/@craig_10243/buy-now-pay-later-383d33f2d9ee) — *Rothbard-inspired commentary on harmful credit/debt policy with no mention of Bitcoin or blockchain.*
- [The politics of rent seeking](https://medium.com/@craig_10243/the-politics-of-rent-seeking-8319b554fc41) — *Keynesian rent-seeking critique whose only crypto linkage is a closing one-liner that sound money was the reason Bitcoin was created.*
- [An invitation to treat](https://medium.com/@craig_10243/an-invitation-to-treat-22d688b55406) — *Pure contract-law explainer distinguishing invitation to treat from offer; no smart-contract or blockchain angle.*
- [“Laissez-nous faire”](https://medium.com/@craig_10243/laissez-nous-faire-e8c523dc5330) — *Anti-interventionist politics essay on bailouts and growing state control; no Bitcoin or blockchain content.*
- [The measure of Justice](https://medium.com/@craig_10243/the-measure-of-justice-6067b7bc996c) — *Defines justice as the absence of injustice; pure legal philosophy with no digital-asset angle.*
- [Bitcoin and the Long term](https://medium.com/@craig_10243/bitcoin-and-the-long-term-7573a278f838) — *Despite the Bitcoin title, the body is purely a critique of Keynesian short-term stimulus and pork-barrel politics and never engages Bitcoin itself.*
- [Capitalism](https://medium.com/@craig_10243/capitalism-4c2873d425d4) — *General defence of capitalism with no mention of Bitcoin, blockchain or digital cash.*

</details>

<details><summary><b>2019-03</b> — 1 posts</summary>

- [Copyright terms ©](https://medium.com/@craig_10243/copyright-terms-72a71f3c6f3f) — *Blog copyright/DMCA terms-of-use notice for nChain Ltd content; no Bitcoin or blockchain substance.*

</details>

<details><summary><b>2019-04</b> — 1 posts</summary>

- [On testing and causal statements](https://medium.com/@craig_10243/on-testing-and-causal-statements-ce991f0c03e7) — *Methodological note on unintended consequences and causal claims; no Bitcoin or blockchain content.*

</details>

<details><summary><b>2019-07</b> — 2 posts</summary>

- [Logical Fallacies and the SCADA Problem](https://medium.com/@craig_10243/logical-fallacies-and-the-scada-problem-2222d3327f38) — *Security-risk essay on SCADA systems and extreme-event fallacies; no Bitcoin or blockchain content.*
- [Contradictions](https://medium.com/@craig_10243/contradictions-bbd9582f3241) — *Philosophical musing on mathematical truth versus irrational human behaviour; no crypto linkage.*

</details>

<details><summary><b>2019-08</b> — 5 posts</summary>

- [The Imbalance of Payments](https://medium.com/@craig_10243/the-imbalance-of-payments-98fde5eee506) — *Argues the balance-of-trade concept is a fallacy; general international economics with no Bitcoin content.*
- [Quota](https://medium.com/@craig_10243/quota-89233864e698) — *Attack on quota systems as anathema to free enterprise; general economics/politics, no crypto.*
- [The Gini Inequality Flaw](https://medium.com/@craig_10243/the-gini-inequality-flaw-92db7a737507) — *Critique of the Gini index in debates over US inequality; general economics with no crypto linkage.*
- [How Keynes Failed To Comprehend Say’s Law](https://medium.com/@craig_10243/how-keynes-failed-to-comprehend-says-law-9eddc6b01329) — *Macroeconomic argument that Keynes misconstrued Say's law; no cryptocurrency content.*
- [The Myth of Anti-Competitive Pricing](https://medium.com/@craig_10243/the-myth-of-anti-competitive-pricing-3872be9ea861) — *Argues firm specialisation and product differentiation rebut anti-competitive-pricing claims; general economics, no crypto.*

</details>

<details><summary><b>2019-11</b> — 2 posts</summary>

- [The downside of litigation funding](https://medium.com/@craig_10243/the-downside-of-litigation-funding-1705345de357) — *Personal/legal essay on litigation funding and UK resident rights in international disputes; no digital-asset angle.*
- [Work Is Infinite…](https://medium.com/@craig_10243/work-is-infinite-5626b0f998c1) — *Attacks Silicon Valley AI-hype and the idea that automation ends work; no Bitcoin or blockchain content.*

</details>

<details><summary><b>2020-01</b> — 2 posts</summary>

- [Anarchy and the Foolish Belief in Assassination Markets](https://medium.com/@craig_10243/anarchy-and-the-foolish-belief-in-assassination-markets-14482705b59a) — *Jurisprudence essay (Oresteia, Plato, Occupy Wall Street) arguing anarchy and assassination markets fail; no explicit Bitcoin or blockchain engagement in the excerpt.*
- [On Civil Disobedience](https://medium.com/@craig_10243/on-civil-disobedience-35095bf07df8) — *Essay on the bounds of law and civil disobedience; general legal philosophy with no crypto linkage.*

</details>

<details><summary><b>2020-07</b> — 1 posts</summary>

- [A wise man once said: "Fractional reserve banking was started on the gold standard"](https://medium.com/@craig_10243/a-wise-man-once-said-fractional-reserve-banking-was-started-on-the-gold-standard-49a0e93f3fdb) — *Single-sentence quip that fractional-reserve banking began on the gold standard; monetary commentary with no explicit crypto linkage.*

</details>
