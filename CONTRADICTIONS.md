# CONTRADICTIONS.md — consistency audit of the Craig Wright corpus

**Generated:** 2026-08-13
**Machine-readable source:** [`data/contradictions.json`](data/contradictions.json) (84 findings, 25 strengths/continuities)
**Raw audit inputs:** [`data/contradictions/internal_tech.json`](data/contradictions/internal_tech.json) · [`data/contradictions/internal_econ.json`](data/contradictions/internal_econ.json) · [`data/contradictions/external_brc.json`](data/contradictions/external_brc.json) · [`data/contradictions/cross_era_tech.json`](data/contradictions/cross_era_tech.json) · [`data/contradictions/cross_era_econ.json`](data/contradictions/cross_era_econ.json)

## Scope and method

Five independent audits were run over the corpus — the **Substack era** (201 summarised essays, June 2025 – August 2026) and the **Medium era** (275 summarised essays, June 2018 – 2022):

| Audit | Lens | Findings |
|---|---|---|
| Internal — technical | protocol, governance, law (Substack) | 17 |
| Internal — economic | money, fees, security budget (Substack) | 19 |
| External | corpus vs the [BRC wallet-SDK training guide](https://fast.brc.dev/llm-training-guide.txt) | 13 (4 tensions, 9 alignments) |
| Cross-era — technical | Medium vs Substack: protocol, governance, law | 18 (incl. 7 restated-verbatim) |
| Cross-era — economic | Medium vs Substack: money, fees, security budget | 17 (incl. 2 restated-verbatim) |

Each finding carries a **nature** — `direct-contradiction` (two claims cannot both be true), `tension` (claims strain against each other; a reconciliation exists but is unstated or incomplete), `evolution` (the view visibly matured), `emphasis-shift` (same substance, opposite valence), `restated-verbatim` (cross-era: the 2025–26 position is the 2018–19 position, near-word-for-word), `alignment` (external comparison only: guide and corpus agree) — and a **severity** (high/medium/low). Where Craig's own corpus supplies the reconciling distinction, the finding says so and is marked down; several findings carry full in-corpus resolutions, and a handful have **none**.

**Attribution note:** one Medium post (`re-moxie-on-web3`) is internally Mike Hearn's essay, misfiled under Craig's account — both cross-era auditors confirmed this on independent evidence. It is summarised faithfully but excluded from all findings.

---

## Part 1 — The five high-severity findings

These are the load-bearing collisions. Each is where two essays, both argued in full seriousness, cannot simultaneously be true under one definition.

### 1. SPV vs full nodes: one essay reverses the corpus's core doctrine — `IT-01` · direct-contradiction

The corpus's most repeated technical claim is that SPV is the whitepaper's designed verification mode and non-mining full nodes are causally inert ("barnacles on the hull", *A Mechanism of Honour*, 2025-07-30; "the civilised form of verification", *The Cult of the Full Node*, 2025-12-15; SPV proven the Nash equilibrium for non-miners, *Verification Without Enforcement*, 2026-03-24). Sitting chronologically **between** those essays, *Private Keys, Proofs, and the Illusion of Ownership* (2025-10-15) states **"SPV clients believe; full nodes know"** and advises users to "run a full node" as "the architecture of sovereignty". Not an evolution — an outlier that contradicts both its predecessors and its successors. **No resolution exists in the corpus.**

### 2. Immutability as "only defence" vs court-ordered freezing (DAR) — `IT-02` · tension

*Set in Stone or Sold to the Highest Bidder* (2025-06-17): "The system either is set in stone, or it is rewritten by the hands with the fattest wallets." *The Theft That Never Was* (2026-04-17) calls freezing spendable coins by protocol change "expropriation". Yet the DAR essays (*Transparency Is Not Centralisation*, 2026-04-11; *The Miner Is Not a Monarch*, 2026-05-20) describe exactly that act on BSV: a notary broadcasts a court order via the Blacklist Manager and miners freeze the UTXO. The same technical act is expropriation when Ethereum does it and "judicially mediated enforcement of property rights" when BSV does it. Craig's own three-category distinction (consensus rules / validity conditions / enforcement within an unchanged protocol) is the offered bridge — but a frozen UTXO cannot be spent despite a mathematically valid signature, which his critics would place in category two. **The residual strain is acknowledged, not answered.**

### 3. "No spam in a priced system" vs DAR admission control — `IT-03` · direct-contradiction

*There Is No Such Thing as Spam in a Priced System* (2026-08-04): "Any system that sorts among paying users by payload, purpose, 'standardness' or escalating penalties has instituted a permission regime." By that essay's own framework (Yeung's regulatory test), BSV's Blacklist Manager — which sorts fee-paying, consensus-valid transactions by the legal status of their funds — **is** a permission regime. Under the August 2026 definition, BSV-with-DAR is a permissioned network; under the DAR essays, that filtering is the normalisation of Bitcoin. The attempted bridge ("Code is procedure. Law concerns rights.") is asserted, not derived — the spam essay explicitly denies that dispersal or motive changes the classification.

### 4. The censorship-resistance definition vs the Blacklist Manager — `IT-04` · direct-contradiction

*The Two Tiers Are a Market, Not a Cage* (2026-05-12): "Censorship resistance is the structural property that no non-miner can prevent the inclusion of a fee-paying transaction." Eight days later, *The Miner Is Not a Monarch* (2026-05-20) obliges miners to block specific UTXOs on a non-miner notary's say-so — a shared list, coordinated enforcement, liability for refusal: precisely the structure the censorship essays say cannot exist. A pincer with his own privacy work sharpens it: if fresh single-use keys defeat list-based filtering, DAR only bites against static identifiable UTXOs — so either the privacy techniques undermine lawful recovery, or lawful recovery undermines the privacy claims. **The lawfulness carve-out is implicit everywhere and stated nowhere.**

### 5. Off-chain channels: endorsed scaling mechanism vs subtraction from the security budget — `IE-01` · tension

*The Defence That Halves* (2026-07-26): "Every transaction successfully moved off-chain is a subtraction from the fee base that was supposed to replace the subsidy." The argument is mechanism-independent. Yet *The Immutable Stock and the Unbounded Flow* (2026-05-28) celebrates channels that write to the chain "twice per million payments", and *The Builder's Week* (2026-06-01) ships his own bonded-channel implementation. If channels starve security on BTC, the identical arithmetic applies to his own channel stack on BSV, which runs the same halving schedule; if channels are fine on BSV because the base scales, the BTC critique loses its generality. **The valence of an identical mechanism flips with the chain being discussed, and no essay addresses the fee-base subtraction for BSV.**

---

## Part 2 — Thematic clusters (medium and low severity)

### Immutability, governance and the law

- **`IT-05`** — "No governance, no administrators" (*Set in Stone*, 2026-07-28) coexists with BSV's operational stewardship apparatus: the BSV Association, the published Network Access Rules, a restored alert key, a designated DAR notary. His own credibility metric rescues the substance (a controller who locks the rules scores highly) — but then the differentiator is lock-credibility, not absence of governance, and the rhetoric overshoots the measurement.
- **`IT-12`** — "Set in stone since 2009" vs BSV's own Genesis upgrade (February 2020), which re-enabled OP_CAT and removed caps. If the 2009 design was complete and untouchable, needing a 2020 "restoration" concedes the rules were changed twice — and that a coalition with rule-changing power existed as late as 2020. The restoration framing ("use, not revision") struggles with OP_CAT, which was *disabled*, not reserved.
- **`IT-14`** (evolution) — "Fixing the protocol removes politics from money" (2025) matures into "blockchains relocate governance" to courts and regulators (2026). The corpus matured under objection-handling; the stronger early slogans are never retracted.
- **`IT-07`** — Mourning the loss of a foundation-stewarded alert key three weeks after his own dataset scored foundation-led governance at Ĝ ≈ 0.10.
- **`IT-10`** — Slogan collision: "The script is the law" (*Native On-Chain Identity*, 2025-08-23) vs "'code is law' was always philosophically primitive" (*The Miner Is Not a Monarch*). Reconcilable by domain (script governs capability, law governs rights) — never stated alongside the slogan.
- **`IT-13`** — "Legal deterrence backstops every economically significant transaction" (*The Law Already Inside Bitcoin*, 2026-03-17) vs his own map, four days earlier, of a ~50% hole in that reach (US and Chinese courts cannot touch each other's pools). Individually careful essays; the strong claim does not survive contact with his own enforcement map.

### Security economics

- **`IE-02`** — The security-equals-current-miner-revenue identity is wielded against BTC's future but never applied to BSV's present, despite his own concession that small-revenue chains sit in "the margin region" (*Bitcoin Has a Population Problem*). The legal-deterrence essays are the partial bridge.
- **`IE-03`** — The prescribed end-state (fee-dominant revenue: "the subsidy was scaffolding, the fee market was the building") is the regime his own Nash simulations find **deviation-dominant in 93.75% of runs even at low fee volatility** — closing his easiest reconciliation. **No resolution in the corpus.**
- **`IE-04`** — The Huberman et al. fee theory he cites against BTC is capacity-generic: if fees price delay, an uncongested chain has no delay to price, so the cited theory denies BSV the feedback loop its "volume × low fees" security model needs.
- **`IE-06`** — By his own rent definition, the gap between the $0.00000002 cost floor and the $0.01 anchored fee is a 500,000× "structural wedge". His answer would be that the wedge *is* the security budget — but that identification is exactly the move his rent framework denies to banks.
- **`IE-13`** — PoW energy as "the cost of producing governance legitimacy" vs BTC's burn as "buying scarcity, not throughput". The utility-per-joule denominator reconciles them, but the reader must assemble it.

### Money, fees and the nano-economy

- **`IE-05`** — The corpus's fee figures span six orders of magnitude ($0.01 anchored fee; modelled $0.0001–$0.00003; cost floor $0.00000002), and the nano-economy's stated precondition ("do not tolerate batching… finality at their core") contradicts the micropayment audit's batching prescription (N > 10 to keep fees under 5%). No essay reconciles them into one fee schedule.
- **`IE-07`** — Fixed supply as "the lever that removes politics from money" (October 2025) vs "fixed supply does not imply fixed discipline; it implies the proliferation of abstractions" (November 2025). The base/superstructure distinction is available but the normative valence of inelasticity flips.
- **`IE-08` / `IT-15`** — "Twenty-one million coins… written into code" (2025-10-02) vs "There is no twenty-one million" (2026-05-31). A clean factual contradiction with tiny stakes — the corpus correcting its own shorthand.
- **`IE-09`** — Prices as Hayekian compressed knowledge (the foundation of his intermediation economics) vs "price is a barometer of collective arousal, not truth" (*Ventriloquising the Void*). The speculative/productive market distinction is never stated. **No resolution.**
- **`IE-17`** — "A caste that produces nothing" (*The Great Global Skim*, $40T/yr) vs the careful essays defending credit judgement, liquidity transformation and consumer protection as durable, value-creating functions. The maximalist rhetoric is the outlier — but it is the quoted version.
- **`IE-18`** (emphasis-shift) — Scarcity as "a fetish, a sacralised austerity" vs "digital scarcity at the level of individual transactions" as Bitcoin's deeper achievement. Craig supplies the distinction himself (supply-cap cult vs transactional scarcity).
- **`IE-19`** (emphasis-shift) — "To hoard is to rot" vs Wesley's "save all you can" as capitalism's moral spine. Reconciled in-corpus: saving-as-reinvestment vs idle appreciation-seeking.

### Identity, keys and verification

- **`IT-11`** — "A valid signature is the only identity that matters" (capability sense) vs "the blockchain records transactions, not identity" (attribution sense). The two senses of "identity" are bridged by *Digital Identity and the Architecture of Autonomy* — capability on-chain, personhood attested off-chain.
- **`IT-16`** (emphasis-shift) — The ElectrumSV wallet guide reaches for "whoever controls the private key controls the coins" — the folk slogan the property essays dismantle, and strictly false under DAR. Shows the slogan's gravitational pull even inside a corpus built to refute it.

### One chain vs many

- **`IT-17`** (evolution) / **`IE-15`** (direct-contradiction) — June 2025: "cross-chain communication" dismissed by name (26th), then made the connective tissue of the CBDC future (29th) — three days apart. The 2026 one-chain thesis (*The Graveyard of Gateways*) hardens the first position. The charitable reading — many currencies as tokens on one scalable ledger — reconciles the substance; the words stand opposed.

### Settlement and finality

- **`IE-10`** — Instant settlement as "a necessity for the future of global trade" vs *Settlement Speed Is the Wrong Margin* (2026-06-14), which refutes with firm-level data precisely the dead-time/credit-line mechanism the earlier essays assert. The later essay's own framework confines the speed thesis to machine payments.
- **`IE-11`** — "Transactions, once made, are final" vs "settlement is probabilistic; genuine finality is a legal object". The four-finalities framework reconciles the substance at the cost of the earlier slogans.

### The firm, and one strange week

- **`IE-12`** — Near-zero transaction costs make "the logic of the firm start to crumble" (July 2025) vs mining consolidation as "Coase's theory of the firm running in fast-forward" (February 2026). Orthodox Coase reconciles them (the margin moves; the firm does not vanish); the earlier essay's sweep needs that qualification.
- **`IE-14`** — Within ten days in August 2025, micropayments and SPV appear as dystopian instruments of compliance (*Mechanised Myths*, 5 August: SPV as "a delegation of trust dressed as independence") and as emancipation (*Pennies and Power*, 9 August; *A Mechanism of Honour*, 30 July). The corporate-hands qualifier does some work; the SPV allegory contradicts his technical position outright.
- **`IT-08`** — Quantum computing as "a multi-hundred-billion-dollar fraud" vs his own exact-byte post-quantum defences (10,423-byte WOTS+ verifier). Explicitly resolved by Craig: expected-value insurance plus compliance capture — "three percent of catastrophic loss is enough to motivate cheap precautions."

---

## Part 3 — Cross-era: Medium (2018–2022) vs Substack (2025–2026)

Thirty-five findings across two independent lenses. The headline result cuts both ways: **nine findings are `restated-verbatim`** — the 2025–26 corpus is, on those points, the 2018–19 corpus nearly word for word — while the cross-era view also **aggravates four internal findings, resolves two, and surfaces the single hardest collision in the whole audit.**

### The severe cross-era collisions

- **`XT-01` (high)** — The `private-keys-proofs-and-the-illusion` outlier ("SPV clients believe; full nodes know") has **no Medium precedent**: 2018–19 Craig is uniformly militant that SPV is the white-paper model and home validation is for "tinfoil hats". The outlier therefore contradicts seven years of doctrine in *both* eras, not just its Substack neighbours. (Aggravates `IT-01`.)
- **`XT-13` (high)** — **Permissionlessness inverts across eras.** 2018: "with property, there cannot be 'permission-less'" — permissionlessness is a "collectivist lie". 2026: admission "conditioned only on objective validity and payment", with any Gate-2 sorting "a permission regime". Under the 2026 framework, his own 2019–20 blacklist doctrine (and DAR) qualifies as a permission regime. (Aggravates `IT-03`/`IT-04`.)
- **`XT-04` (medium)** — **The Genesis paradox predates Substack.** The same 2018 essays preaching "set in stone" promised to "return it to the version 0.1.0 implementation and lock that protocol" via hard fork, plus a staged P2SH sunset. The lock always begins immediately after his preferred changes — in both eras. (Aggravates `IT-12`.)
- **`XE-01`/`XE-02` (high)** — 2018 celebrates nSequence payment channels as Satoshi's design, miners paid "for the settled transaction, not the exchange"; the 2018 Wormhole essay states the L2-security-drain argument chain-generically. 2026 condemns "every transaction successfully moved off-chain" as fee-base subtraction for BTC while celebrating the identical million-updates-two-writes construction for BSV. (Aggravates `IE-01`.)
- **`XE-03` (high)** — **The security = revenue arithmetic was first applied to BSV, with numbers.** 2018: $8,000/block fees, $640/coin floor, Visa on BSV by 2022, 4M TPS by 2021 — all failed on their stated timelines. 2026 applies the identity only to BTC and never re-audits BSV. The asymmetry finding (`IE-02`) hardens into "retreat after failed predictions".
- **`XE-04` (high, direct-contradiction)** — 2018: fixed supply means "these un-elected bureaucrats lose much of this ill gained power"; bet on what "cannot be devalued at a whim". 2025: "Bitcoin will fail because it assumes men can be governed by code." The same mechanism is salvation in one era and fatal flaw in the other.

### What the cross-era pass resolved

- **`IT-02` resolved** — the assignability carve-out is not a 2026 retrofit: *Proof of Assignment* (Nov 2019) already states court-ordered reassignment doctrine in full. The 2026 DAR essays are a restatement, not an invention.
- **`IT-04` resolved downward** — the 2019 validity-over-time censorship definition already exempts DAR; it is the 2026 inclusion-access redefinition that manufactures the collision. The corpus moved *towards* the contradiction, not away from it.

### The nine restated-verbatim continuities (selection)

The subsidy-as-scaffolding/fee-replacement doctrine (`XE-16`, stated identically across eight years — itself flagged as a high-severity *restated* finding because the prediction timelines attached to it kept failing); the private-not-anonymous formula; no-encryption/clear-text data; miner oligopoly as designed equilibrium; the "honest"×15/Fraud Act 2006 exegesis; changed-protocol-is-not-Bitcoin; 0-conf as commercial risk management. The full list of fifteen cross-era continuities is in `data/contradictions.json` under `strengths_observed` (lenses `cross-era-tech`, `cross-era-econ`).

---

## Part 4 — External comparison: the corpus vs the BRC wallet-SDK guide

Thirteen findings against the [BRC llm-training-guide](https://fast.brc.dev/llm-training-guide.txt): **zero contradictions, four tensions, nine alignments.** The headline: **the guide's architecture is consistently Craig's; its marketing vocabulary is consistently not.**

### The four tensions — all vocabulary-vs-doctrine gaps

- **`XG-01`** — The guide sprinkles "decentralized" and "censorship resistant" as unquantified adjectives over UHRP, overlays and identity services — exactly the rhetoric his measurement essays attack ("Decentralisation is reported as a number. It is not a number. It is a vector."). The engineering underneath (substitutable providers, failover, multiple overlays) is closer to his operational tests than the adjectives suggest.
- **`XG-02`** — Centralised message boxes and hardcoded certifier hosts (`bsvb.tech`) sit awkwardly with the anti-toll-booth critique. Permitted in principle (optional, substitutable, end-to-end encrypted services), but under his own substitutability test a single-live-provider deployment "remains centralised at the point that matters".
- **`XG-03`** — "Public key… represents user identity" collapses the control/identity distinction he polices relentlessly ("Possession of a key proves possession of a key"). The guide's own certificate layer — out-of-band verification, then signing — is exactly his demanded attestation; the phrasing, not the architecture, is the problem.
- **`XG-04`** — PushDrop embeds data in on-chain locking scripts vs "order on-chain, content off-chain". Reduces to a sizing rule: small commitments on-chain are Craig-consistent (his own shipped code does it); bulk content in scripts is his "scrapbook" critique.

### The nine alignments — the guide as the corpus in production clothing

| Finding | Guide feature | Corpus position |
|---|---|---|
| `XG-05` | BEEF self-contained SPV validation | "Proof, not redundancy, defines verification" — the strongest single alignment |
| `XG-06` | Overlay networks (tm_*/ls_*) | "Judgement in the overlay" — his ledger/overlay separation implemented |
| `XG-07` | UHRP content-addressed paid storage | His middle tier, nearly literal: hash-anchored, availability sold as a service |
| `XG-08` | BRC-29 per-payment ECDH keys | His own IP-to-IP notes protocol: same construction family |
| `XG-09` | Certifier-signed certificates, selective disclosure | His issuer-holder-verifier triad: "certifier of fact, not keeper of records" |
| `XG-10` | Tiered SecurityLevels (silent → high) | "Security that can't be used is not security" — friction proportionate to stakes |
| `XG-11` | SIGHASH_NONE/ANYONECANPAY patterns | "The compositional grammar of settlement" — original-protocol machinery |
| `XG-12` | Automatic size-based fees | "Price, not permission" — neutral plumbing matching the priced-system doctrine |
| `XG-13` | 1-satoshi utility tokens | Tokenisation as design purpose; nothing belief-dependent, so the Ponzi test passes it by |

**Net assessment:** an LLM trained on the guide will produce code Craig would recognise as his architecture — SPV-first wallets, per-payment keys, overlay judgement, content-addressed storage, attestation-based identity — while using vocabulary ("decentralized", "censorship resistant", "identity key") that his corpus explicitly attacks as unquantified marketing. The doctrinal risk is in the words, not the plumbing.

---

## Part 5 — Where the corpus is notably consistent

Twenty-five strengths/continuities observed across the four internal and cross-era lenses — worth stating, because an audit that only reports collisions misrepresents the corpus. The ten from the internal lenses:

1. **The privacy taxonomy** (privacy via lawful scale; anonymity rejected for payments; the voting exception explicitly argued as a category distinction) is applied uniformly.
2. **"A private key is control, not title"** holds across custody, property and law essays spanning ten months.
3. **Script expressiveness** is always claimed as bounded/finite-trace Turing equivalence with the limitation stated aloud — never inflated into "world computer" rhetoric.
4. **Tokenisation-as-purpose vs token-speculation-as-pathology** — the line does not move.
5. **The two-regime security model** (protocol-only for small payments, protocol-plus-law for large) recurs unchanged across the security-economics cluster.
6. **The security-budget dichotomy** (subsidy scaffolding → fee replacement; massive volume at low fees or tiny volume at high) is stated identically across five essays spanning a year.
7. **Anti-hoarding / unit-of-account-follows-medium-of-exchange** (White 1984) is applied with the same logic across theological, satirical and formal registers.
8. **The fractional-reserve arithmetic** is internally coherent — "five per cent real coins", "one coin, three claims", "twenty-to-one" are the same ratio restated.
9. **Producer-count interior-optimum logic** (five-to-twenty industrial miners healthy; more validators can subtract security) is consistent everywhere — no essay argues "more is better" in isolation.
10. **Price-scepticism is epistemically disciplined and symmetric** — fitted curves are "numerology with regression output", and the corpus never uses BTC or BSV price appreciation as evidence for its own claims.

The fifteen cross-era continuities (7 technical, 8 economic) add: the private-not-anonymous formula; no-encryption on-chain; miner oligopoly as designed equilibrium; the changed-protocol-is-not-Bitcoin doctrine; the within-law Satoshi origin story; 0-conf as commercial risk management; anti-digital-gold; money-as-measuring-stick; economic-not-cryptographic security; Lightning-as-shadow-banking; tokenised-fiat-yes/Tether-no; micropayments-as-mission; energy-buys-security-not-value; and the subsidy-to-fees doctrine itself.

---

## Reading guide and caveats

- **Severity is about what hangs on the finding, not how clever it is.** The twelve high-severity items all touch the corpus's load-bearing claims: SPV sufficiency, immutability, permissionlessness, censorship resistance, the security-budget argument, and the fixed-supply doctrine.
- **A "tension" with a populated `resolution` field means Craig supplies the bridge himself** — the finding records that the bridge is unstated at the point of collision, or that it doesn't fully carry the weight.
- **Findings with no in-corpus resolution at all:** the SPV/full-node reversal (`IT-01`, now aggravated cross-era by `XT-01`), the fee-dominant end-state vs his own Nash simulations (`IE-03`), the two theories of price (`IE-09`), and the fixed-supply inversion (`XE-04`).
- **The corpus is polemical by design.** Several collisions are register collisions — a satirical essay's maximalist slogan against an analytical essay's qualified claim. Where the summary itself flagged this, the finding says so.
- **Cross-era direction of travel matters.** Where the Medium era already contained a resolution (`IT-02`, `IT-04`), the finding is about the 2025–26 corpus drifting *into* a collision its author had already engineered around — which is a different criticism from changing one's mind.
