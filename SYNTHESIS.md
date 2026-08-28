# Craig Wright's Bitcoin Worldview — Thematic Synthesis

**Corpus:** 476 Bitcoin-related essays across two eras —
- **Medium** (`@craig_10243`), 7 June 2018 → 2022: **275 essays** (of 311 posts archived) — the BCH/BSV split, the hash war, the nChain patent programme, the Satoshi-authorship campaign and the Kleiman litigation, in real time.
- **Substack** (`singulargrit.substack.com`), 8 June 2025 → 12 August 2026: **201 essays** (of 482 posts archived) — the same positions formalised into economic and legal theory.

The out-of-scope remainders (36 Medium, 281 Substack) carry classification reasons in the local corpus indexes (pipeline artefacts, not shipped in this repo).

**Purpose:** a machine- and human-readable account of how Craig thinks about Bitcoin — the models he uses, the claims he defends, and exactly where they contradict BTC-mainstream logic. Every claim below is grounded in the per-essay summaries in `summaries/` and `summaries-medium/`, each of which carries verbatim quotes and source URLs. The consistency audit (internal, external and cross-era) lives separately in `CONTRADICTIONS.md`.

---

## 0. The master argument in one paragraph

Bitcoin was designed as **peer-to-peer electronic cash**: a fixed-protocol, unbounded-throughput timestamp server whose security is *economic* (proof-of-work expenditure plus legal accountability), whose privacy is *emergent from scale*, and whose value is *utility* — direct exchange, evidence and receipts between strangers. BTC, in Craig's telling, inverted every one of those properties: it made the protocol mutable (SegWit, removed opcodes, policy-driven capacity), throttled throughput to ~5 transactions per second, pushed users into custodial intermediaries and Lightning hubs — rebuilding the banking system while preaching its abolition — and replaced the cash thesis with a "digital gold" scarcity cult whose price theology (power laws, stock-to-flow, HODL) is neither economics nor the original design. BSV, with the restored original protocol (Script, unbounded blocks, Teranode, SPV), is presented not as a fork of preference but as the continuation of the specified system. Everything else in the corpus — the law, the auditing, the micropayment engineering, the quantum scepticism, the governance measurement — is load-bearing scaffolding for that single argument.

---

## 0.5 The Medium era (2018–2022) — where the positions were forged

The Substack corpus is the theory; the Medium corpus is the forge. Read together, a clear division of labour emerges: **2018–2020 Craig argues in real time, from inside events; 2025–2026 Craig formalises the same positions into measured theory.** Nearly every Substack pillar has a Medium-era original statement:

| Substack pillar (2025–26 formalisation) | Medium-era original (2018–2020) |
|---|---|
| 1. Protocol as constitution | *Stable by Design* and *Set in Stone* (Sep/Nov 2018); *Forks as a Demerger*; *Why the Protocol Is Set* (Mar 2019) |
| 2. Scale or die | *Bitcoin Is for Business* (Nov 2018: 1,500 TPS live tests, 512 MB → 2 GB → uncapped roadmap); *Taking Care of Business* |
| 3. Security is economic | *The Gamma Monstrosity* (Sep 2018, the original selfish-mining refutation); *Trust and Risk*; *Economic Security* (May 2019); *Miners and Rational Expectations* |
| 4. Money is motion | *Money Is a Measuring Stick*; *Lessons in Monetary Terms*; *Digital Gold* (2019) |
| 5. Toll-booth economy | *Payment Intermediaries* (Nov 2018); *Binance the Untrusted Intermediary* (2020) |
| 6. Keys are not ownership | *Good Title Is Not a Key*; *Rights and Tracing*; *Proof* (2019); *How Digital Signatures Work* (his 2006 Northumbria law paper) |
| 7. Ledger as evidence machine | *Immutable Evidence*; *Blockchain-Based Accounting* (nChain GL white paper, 2018); *Storing IP on the Blockchain* |
| 8. Decentralisation measured | *Satoshi and the Byzantine Generals*; *The Myth of the Full Validation Node*; *On Decentralisation* (via Peirce's safe harbour) |
| 9. The original design was complete | *A Proof of Turing Completeness in Bitcoin Script* (Oct 2018); *Finite State Machines in Script*; *Learning Script*; the DFA/Botman patent pair |
| 10. Quantum scepticism | *Bitcoin and Quantum Computing* (Jan 2019): "quantum computers do not exist", address non-reuse as the defence |

**What the Medium era adds that the Substack era lacks:**

1. **The hash war as it happened** (Nov 2018): OP_CHECKDATASIG as "bucket shop" illegality, the sustaining-hash attrition doctrine ("We do not forgive. We do not forget."), miners' property rights in the chain, and the legal theory of the split — "hash, and then… law".
2. **The nChain patent programme disclosed piecemeal** — DFA compilation of contracts into UTXO-incarnated automata, the Botman autonomous-agent umbrella (WP0290–WP0312), secure split-key (Shamir) wallets, blind threshold ECDSA, common-secret key derivation, IoT thin OS, smart-card wallets, on-chain GL posting. The Substack era references patents; the Medium era *is* the patent disclosure campaign.
3. **The Satoshi-authorship campaign and Kleiman litigation** (2019–2020): the origin story (Tominaga Nakamoto + Ash Ketchum; design started 1998), the early-infrastructure claims (~67 machines, AU$1.1M, the bitcoin.org credit-card/audit-trail claim), the 2016 reveal post-mortem, the Bitcointalk-account denial, the Exhibit 11 hearsay attack, and the Hotwire/Panama/ATO memoirs. This is autobiographical evidence-building, not Bitcoin theory — but it is where the "private not anonymous", "law not code", and "immutable evidence trail" doctrines get their autobiographical grounding.
4. **The commodity-ledger theory** (Nov 2018): Bitcoin as a commodity whose commodity is ledger space; fee tariffs; the substitute-goods valuation model ($1,500–$8,000/block fee revenue, $640/coin floor) — the era's quantitative predictions, nearly all of which failed on their stated timelines (Visa-on-SV by 2022, 4M TPS by 2021), which the cross-era audit (`CONTRADICTIONS.md`) tracks against the 2026 security-economics identity.
5. **Real-time enemy definition**: Blockstream's patent/sidechain programme, Bitmain's ASIC "swindle", ICOs as securities, Binance as "giant commercial mixer" (his 100-account test), Tether as embezzlement — the named-antagonist specificity the later corpus generalises into "intermediaries" and "capture".

**Era caveats:** many 2019–2020 Medium posts are excerpts ending "Read the full story on my personal blog" (summarised as excerpts, flagged in each file); a handful are stubs or single-sentence posts (flagged honestly); and one post (`re-moxie-on-web3`) is internally Mike Hearn's essay, misfiled — excluded from evidence of Craig's positions.

---

## 1. The ten pillars

### 1. Protocol as constitution — immutability is the whole point
The most-developed theme (33 essays). A base protocol that *can* be changed invites competition to change it; a fixed protocol forces competition into engineering. The hold-up problem is the formal core: firms that sink protocol-specific investment are exposed to whoever retains rule-revision discretion, and "you can always fork" is no answer because forking costs exactly the asset specificity at risk. 3GPP release-freezing, TCP/IP's narrow waist, and IPv6's honest renaming are his three running analogies — a changed wire format is a *new protocol*, not "IPv4.1".

*Key essays:* Set in Stone (Jul 2026) · Five Times Versus Twenty Per Cent · The Price of Being in the Room · The Cost of Permission · The Hold-Up Problem in Protocol Economies · Consensus Is Not Governance · The Geography of Discretion · What TCP/IP Got Right · IPv4.1 Does Not Exist · The Necessity of the Stone · Set in Stone or Sold to the Highest Bidder (Jun 2025)

**Contradicts BTC logic:** ossification-as-goal (not "ossification risk"); forks as pathology of contestable rules; BIP/development process as governance by "those who can afford to attend".

### 2. Scale or die — throughput is freedom, privacy *and* security
The quantitative spine of the corpus. ~5 TPS is not an engineering constraint but an ideological one; the original protocol would have doubled capacity roughly every 18 months riding hardware progress. Throughput is simultaneously: (a) **freedom** — fees stay negligible, no admission control; (b) **privacy** — millions of ordinary small transactions are the crowd you hide in; (c) **security** — each new transaction refreshes the block-template domain, and fee volume is what replaces the halving subsidy. Teranode (pipelined, decomposed node services) and multicast propagation are the engineering; SPV is the user-side scaling.

*Key essays:* The Geometry of Freedom · The Throttled Machine · When Five TPS Becomes a Sacred Bull · Linear Scaling, Not Ritual (Teranode) · Multicast as the Only Viable Architecture · Why Transaction Throughput Determines How Long Bitcoin's Security Model Holds · The Immutable Stock and the Unbounded Flow · The Imperative of Scalable Blockchain for Global Commerce

**Contradicts BTC logic:** "full nodes matter" is inverted — non-mining nodes are structurally irrelevant to propagation and enforcement (his arXiv paper 2506.14197); small blocks are not decentralisation but rationing.

### 3. Security is economic and legal — not cryptographic absolutism
Security is a cost curve, not a proof. PoW converts current expenditure into defence; the defence budget equals what miners are paid *now*, so a halving subsidy against a static fee market makes the chain cheaper to rewrite every epoch ("The Defence That Halves"). The honest-majority assumption has a calculable failure point (the "population problem", closed-form n*). The decade-old "memorylessness" premise in the Budish line of literature is formally false at protocol level (Markov, not memoryless — hash trials forget, the protocol remembers). And law is *inside* the security model: legal deterrence raises the attacker's cost (αV < C + I + K + R), which is why "the lawless blockchain is a story we tell for small change".

*Key essays:* The Law Already Inside Bitcoin · The Lawless Blockchain Is a Story We Tell for Small Change · What the Protocol Remembers · Markov, Not Memoryless · Bitcoin Has a Population Problem · When the Prize Pays for the Protection · Why Hash Power Is Not Security · The Asset That Pays Rent to Exist · The Decentralisation Threshold

**Contradicts BTC logic:** "hashrate = security" is incomplete; code-is-law is false — court orders, pool accountability and capital at risk are part of the real security budget.

### 4. Money is motion — the unit of account is won at the payments layer
Lawrence White's 1984 result (the unit of account adheres to the general medium of exchange) decides the monetary contest: a capped coin engineered to be held manufactures the volatility that forecloses transactional use, so "digital gold" is a self-defeating design. Hoarding is not a monetary strategy; speculative power-law curves are "chronology pretending to be economics" (retrodiction, in-sample R², no causal content). Money is an information/calculation institution (Menger, Mises, Hayek, North), and a fixed-rule money is the only kind whose measuring stick cannot be bent by its own measurers.

*Key essays:* You Cannot Hoard Your Way to Money · The Scoreboard Is Not the Game · A Pretty Curve Is Not an Economic Theory · The Retrodiction Fallacy · The Arithmetic of the Last Fool · The Myth of the Bitcoin Standard · The Mirage of the Bitcoin Standard · The Integer and the Idol

**Contradicts BTC logic:** "store of value first, medium of exchange later" is inverted — SoV is the *residue* of MoE, never the precursor; the 21M cap is not even arithmetically what is claimed (20,999,999.9769 by floor-truncation).

### 5. The toll-booth economy — intermediaries are the enemy the industry rebuilt
~40% of global output (>$40T/yr) is friction rent extracted by intermediaries; Bitcoin's purpose was to make them optional. BTC instead rebuilt them: throttled base layer → custodial Lightning hubs, watchtowers, exchanges, ETFs — "banking with extra steps", fractional reserve in cryptographic dress ("Ghosts of Gold": perhaps 5% real coins backing synthetic claims). Institutional adoption is not validation but a new fragility (The Beast at the Door: ETF market architecture makes large-scale *shorting* intelligible).

*Key essays:* The Great Global Skim · The Toll Booth Economy · When the Tollkeepers Disappear · Lightning's Velvet Manacles · The Five-Per-Second Delusion · The Toll Road You Were Promised Would Be Free · BTC Is Banking with Extra Steps · The Priesthood of Artificial Scarcity · The Frightening Commerce of Free Persons · The Dangerous Thing Is Not Bitcoin, but Utility

**Contradicts BTC logic:** Lightning is not scaling but re-intermediation; ETFs/custody are not adoption but re-hypothecation; "not your keys" is the *default outcome* of the small-block design, not a user error.

### 6. Keys are not ownership — the legal architecture is already there
The January 2026 legal cluster plus the July cash-law cluster: a private key is an *instrument of control*, not title; custody/MPC/exchange gatekeeping is fiduciary power inside ordinary trust law; ledger recordation is delivery (bailment); PoW issuance is a unilateral offer accepted by performance (contract doctrine); informal collective rule-making attracts partnership/agency/fiduciary liability ("Accountability Follows Control"). Court-order compliance (NAR/DAR) is transparent, judicially mediated property enforcement — the opposite of discretionary control. Cash itself is "bounded bearer finality": a legal tolerance that is scalar, strongest for small payments — and digital systems inherit that structure.

*Key essays:* Cryptographic Control Is Fiduciary Power, Not Title · Bailment on a Ledger · The Coat Check Problem in the CLARITY Act · Accountability Follows Control · Protocol as Offer · The Miner Is Not a Monarch · Transparency Is Not Centralisation · Nobody Asks Where Your Banknote Has Been · The Law of Controlled Amnesia · The Asset the Law Gave Up On · The Dial That Used to Be Fixed

**Contradicts BTC logic:** "code is law" / "not your keys, not your coins" both collapse — keys are evidence of control, ownership is a legal fact, and recovery of stolen/abandoned coins through courts is a *feature* the design always contemplated.

### 7. The ledger as evidence machine — verification, not transparency
Bitcoin's founding purpose is a distributed timestamp server — "a universal engine of proof". The accounting work (triple-entry, sealed notes, selective disclosure, field-level auditor keys) hardens evidence at the seam between organisations without publishing commercial terms: "a promise you can verify without reading". This is the anti-"blockchain for everything" position: the ledger orders and timestamps; it does not make sensors truthful ("a scribe, not a lie detector") and it cannot make an AI know what it doesn't know (the August 2026 AI capstone).

*Key essays:* The Ledger of All Things · Triple-Entry Accounting Has Been Misunderstood · The Third Entry · The Weakest Line in Every Ledger · The Audit Evidence Problem Public Ledgers Were Supposed to Solve · The Arithmetic of Trust · Scripted Supply (EDI on-chain) · Order On-Chain, Content Off-Chain, Judgement in the Overlay · Who Reads the Meter?

**Contradicts BTC logic:** public-ledger maximalism (everything on-chain, fully transparent) is commercially naïve; the valuable primitive is *ordered, tamper-evident, selectively disclosable* evidence.

### 8. Decentralisation is a measurable vector — and PoS fails it
"Decentralisation" as used is unmeasurable rhetoric. His replacement: a five-layer vector (admission, consensus operation, governance, mutability, plus cross-layer separability) whose summary statistic is the *minimum*, not the average. Industrial concentration of mining (5–20 serious miners) is normal oligopolistic competition, not centralisation; *centralisation* is capture of rule-setting — which is what BTC's developer/exchange coalitions exhibit (SegWit2x analysed as focal-point coordination among economically exposed actors, not "node democracy"). Proof-of-Stake is structurally the bearer share abolished across 200+ jurisdictions: anonymous governance-weighted capital.

*Key essays:* Decentralization Deserves a Number · Effective Decentralisation Is the Minimum, Not the Average · Who Actually Controls a Blockchain? · Who Actually Decides · Who Controls the Rules? ($109B, 74 episodes, 30 protocols) · Concentration Is Not Centralisation · The Return of the Bearer Share · The Bearer Share Is Dead. Long Live Proof of Stake. · Service, Stake, and the Curious Case of Misclassification

**Contradicts BTC logic:** node counts measure nothing; "governance by the community" is coalition politics with extra steps; PoS is not a different trade-off but a different (and legally regressive) category — ownership, not service.

### 9. The original design was complete — and it is being shipped
Script is Turing-equivalent over bounded traces via compile-time macro expansion into legacy 2009 opcodes; the disabled opcodes were the design. The corpus documents working BSV infrastructure: Rúnar (compiler) and BSVM (EVM L2 settling on BSV), bonded sub-satoshi payment channels, verifiable accounting repos, dealerless mental poker (Burns–Wright patent), sealed-bid UTXO auctions, air-gapped ElectrumSV wallet construction, header-chain offline sync, ECDH negotiated notes. Satoshi-history essays defend the alert key, the gambling-strangulation origin, the stablecoin "spark" remark to Martti Malmi, and attack "Satoshi's keys" attribution as circular.

*Key essays:* Macro Expansion in Bitcoin Script · Bitcoin Script as a Macro-Expanded Turing Framework · What Siggi Built · The Builder's Week · Shuffling the Deck Without a Dealer · The Sealed Envelope, Cryptographically Considered · Selling the Unspent Chain · Authority Without Command (alert key) · Stablecoins and the Lost Spark · The Gospel According to Grok

**Contradicts BTC logic:** "Script is too limited" and "Bitcoin can't do smart contracts" are refuted in running code; the drivechain mechanism (BIP-300/301) is claimed as already patented (US 11,347,838 B2).

### 10. Quantum scepticism as applied defence
Ten essays converge: no logical qubit has ever been built; the timescale cascade (ns gates → µs coherence → week-long computations) makes cryptographically relevant machines a funding narrative, not a forecast (his odds: <1% in ten years). Even granting Shor-capable hardware, Bitcoin needs no protocol change: value fragmented across low-value UTXOs sits below the per-key recovery cost, and Script-level hash-anchored defences are cheap. The threat is a *cost frontier*, not a doomsday date — and pre-emptive freezing of dormant coins is property-rights vandalism justified by a machine that does not exist.

*Key essays:* Quantum Computing Is a Multi-Hundred-Billion-Dollar Fraud · Ten Thousand Qubits and a Prayer · Quantum Computing Will Not Crack Encryption · From Microseconds to Weeks · Bitcoin Does Not Use RSA · Quantum-Ineffective Bitcoin · Post-Quantum Digital Cash · The Quantum Apocalypse Is Coming Any Decade Now · The Theft That Never Was · Quantum Illusions

**Contradicts BTC logic:** the "quantum emergency fork" genre is both technically unneeded and a governance attack surface — the demand to freeze coins proves his hold-up point.

---

## 2. How Craig reasons — the recurring methods

1. **Category-error diagnosis.** His most frequent move: show the opponent's concept conflates two things — consensus vs governance, observation vs enforcement, money vs wealth, concentration vs centralisation, control vs ownership, messages vs state transitions.
2. **Institutional economics as engine.** Coase (firms), North (payoff structures), Olson (capture), Tullock/Krueger (rent-seeking), Williamson (hold-up) — deployed to compute *where* rational effort goes under a given rule structure.
3. **Formalisation with stated bounds.** Game-theoretic equilibria (Nash in digital cash), closed-form thresholds (n* validator optimum, population problem), automata theory (Script as 2PDA) — with explicit flags for which assumptions are load-bearing and which numbers are provisional.
4. **Arithmetic checks.** Fee geometry across 11,000 transactions; the 91.6% real erosion of the $500 Statute of Frauds threshold; $109B friction rents; 20,999,999.9769 terminal supply. Numbers first, conclusions second.
5. **Legal doctrinal mapping.** Taking a technical arrangement and finding its pre-existing legal category (unilateral offer, bailment, fiduciary duty, bearer share) — the law as already-present infrastructure, not an external threat.
6. **Historical analogy as controlled experiment.** 3GPP releases, TCP/IP, the 1978–94 protocol wars, bearer-share abolition, gold-standard suspension (1971), Apamea — each chosen because the experiment already ran.
7. **Steelman-then-fork.** State the opponent's strongest case (Kinsella on IP, the blockchain-trilemma "proof", blockDAG certification), concede what is true, then show the residue is fatal.
8. **Satire as argument.** A fifth of the corpus (22 essays) is fable/satire — Ledgerford, Ledgerfall, Hashwarts, Intermedion — used to dramatise incentive structures that formal argument leaves abstract.

---

## 3. The master contradiction map

| # | BTC-mainstream logic | Craig's counter-position | Pillar |
|---|---|---|---|
| 1 | Ossification is a risk to manage | Immutability is the entire point; mutability is capture | 1 |
| 2 | Small blocks protect decentralisation | Small blocks manufacture the custodial intermediaries Bitcoin exists to abolish | 2, 5 |
| 3 | Every user runs a full node | Non-mining nodes verify nothing that matters; SPV is the designed user mode | 2, 8 |
| 4 | Hashrate is security | Security is economic + legal: cost curve, capital at risk, coordination cost, accountability | 3 |
| 5 | Digital gold first, payments maybe later | Unit of account follows the medium of exchange — payments first or never | 4 |
| 6 | Lightning scales Bitcoin | Lightning is fractional-reserve shadow banking with watchtowers | 5 |
| 7 | Not your keys, not your coins | Keys are control, not title; law already governs custody, recovery and theft | 6 |
| 8 | Code is law | Code is evidence; courts, contracts and property law were always inside the design | 3, 6 |
| 9 | Put everything on-chain, transparently | Seal, timestamp, selectively disclose — the ledger is an evidence machine, not a confessional | 7 |
| 10 | Decentralisation = node count | A five-layer vector summarised by its minimum; PoS rebuilds the bearer share | 8 |
| 11 | Bitcoin Script is too limited | Script is Turing-equivalent over bounded traces; the disabled opcodes were the design | 9 |
| 12 | Quantum computers will break Bitcoin soon | No logical qubit exists; even granting one, fragmentation + hash-anchored Script suffice | 10 |
| 13 | Price appreciation validates the design | Power-law fits are retrodiction; appreciation on a throttled chain compounds its unusability | 4 |
| 14 | Spam must be filtered by policy | A priced system has no spam — admission control is governance, i.e. permission | 1, 2 |
| 15 | Institutional adoption (ETFs) is victory | ETF architecture makes large-scale short exposure rational; the beast is at the door | 5 |

---

## 4. The arc — how the argument developed

### The Medium era (2018–2022)

- **Jun–Oct 2018 — Pre-split positioning.** OP_RETURN/data-carrier debates, the Turing-completeness papers (dual-stack counter machine), the contract-law mini-series, the nChain patent white papers (DFA, Botman), *Stable by Design* — lock the protocol and make Bitcoin boring plumbing.
- **Nov 2018 — The hash war.** The densest month of the era: DSV-as-illegality, sustaining-hash attrition, miners' property rights, the commodity-ledger theory, fee tariffs, the first Metanet post, the P2SH sunset, IP-to-IP restoration — SV launch week and the split, argued daily.
- **Dec 2018 – Feb 2019 — Consolidation.** *Miller v Race* good-title essays, commodity-money doctrine, the anti-ASIC-resistance small-world argument, quantum dismissal, IP-on-chain, the first authorship-campaign essays (*Careful What You Wish For*, *The Story of Bitcoin Continued*).
- **Mar–Apr 2019 — The authorship offensive.** *Satoshi Nakamoto* (the origin story), *The Myth of Forks*, the nLockTime estate-planning pair, *The Immovable* (post-Binance-delisting), the genesis-block and wiki-provenance essays, *Patent Wars* — authorship, immutability and law argued as one campaign.
- **May–Sep 2019 — Law and evidence.** The FinCEN/FINRA money-transmitter analyses of Lightning and exchanges, the Kleiman-defence posts (*On Scammers*, Exhibit 11), the Hotwire/Panama/ATO memoirs, *Why Law Matters*, *Good Title Is Not a Key* — the property-and-tracing doctrine assembled.
- **Nov 2019 – Feb 2020 — The database-rights offensive.** *Proof of Assignment* (court-ordered reassignment), *Forking and Passing Off* (sui generis database rights over the ledger), *Satoshi Never Posted on Bitcointalk*, the Byzantine-generals node essay, *Myths of Decentralisation*.
- **2020–2022 — The tail.** Posting thins; the COPA-era and final essays (including the coin-freezing history and the quantity-theory essay) close the archive.

### The Substack era (2025–2026)

- **Jun–Jul 2025 — Foundations.** Formal/technical bedrock: Script macro-expansion, SPV formal treatment, blockchain-trilemma rebuttals, EDI on-chain, stablecoins as the lost spark.
- **Aug 2025 — Engineering the cash.** Micropayment economics (fee geometry, nano-economy), the privacy-through-scale week (many small notes, drizzle engine, IP-to-IP), multicast networking, on-chain identity.
- **Sep–Oct 2025 — The turn to critique.** Double-spend assurance, quantum-ineffective Bitcoin, then the BTC-Core capture case studies (Wittgenstein, protocol capture, Hollow Empire) and "Bitcoin became fiat in a digital suit".
- **Nov 2025 — The five-TPS broadside.** The densest polemic month: Throttled Machine, Geometry of Freedom, Velvet Manacles, both Bitcoin Standard essays, Great Global Skim, plus the Ledgerfall satires.
- **Dec 2025 – Jan 2026 — Law enters.** Cult of Scarcity, Concentration Is Not Centralisation; then the legal cluster: fiduciary control, bailment, CLARITY Act, Protocol as Offer, accountability of informal governance.
- **Feb–Mar 2026 — The measurement programme.** Nash equilibrium, triple-entry, Coasean miners, stateless-property impossibility proof; the memorylessness papers; PoS-as-bearer-share; security-economics thresholds; governance credibility measured ($109B, 74 episodes).
- **Apr 2026 — Defence on all fronts.** Quantum cluster, one-blockchain (Graveyard of Gateways), NAR/DAR defence, alert-key history, Siggi's Rúnar/BSVM, mental poker, drivechain patent.
- **May 2026 — Governance quantified + home-node refutations.** Five-layer control maps, effective-decentralisation minimum, TCP/IP, the two-tiers/censorship replies, Teranode, toll-booth economy.
- **Jun 2026 — Building in public.** The Builder's Week (shipping repos), the Abolition series (free copy, dealer, house), ETF beast, monetary-measurement essays, Budish extensions, "BTC is banking with extra steps".
- **Jul–Aug 2026 — Cash, evidence, proof.** The cash-institution cluster (banknote, controlled amnesia, identifiability dial), the audit-evidence cluster, What Is Proof?, Post-Quantum Digital Cash, the immutability trilogy (Set in Stone / Five Times / Price of Being in the Room), blockDAG rebuttal, and the closing pair: The Protocol No Gatekeeper Wants and Digital Cash Is Not a Vault.

---

## 5. Reading guide — entry points by question

- **"Why is BTC not Bitcoin?"** → Don't Be Fooled: Bitcoin Is Not BTC (Medium 2019) → The Failure of BTC Core's Changes → The Throttled Machine → BTC Is Banking with Extra Steps → The Forked Illusion.
- **"Why does immutability matter economically?"** → Stable by Design (Medium 2018) → The Hold-Up Problem in Protocol Economies → Set in Stone → The Price of Being in the Room → Consensus Is Not Governance.
- **"How is Bitcoin supposed to scale?"** → Bitcoin Is for Business (Medium 2018) → The Geometry of Freedom → Linear Scaling, Not Ritual → Safe Low Bandwidth SPV → Multicast as the Only Viable Architecture → Batching, Headers, and Throughput.
- **"What secures it?"** → The Gamma Monstrosity (Medium 2018) → Economic Security (Medium 2019) → What Is Proof? → The Law Already Inside Bitcoin → Bitcoin Has a Population Problem → The Defence That Halves → Why Hash Power Is Not Security.
- **"What is it *for*?"** → Bitcoin After the Casino → The Ledger of All Things → When the Tollkeepers Disappear → The Dawn of the Nano-Economy.
- **"Where does law fit?"** → Good Title Is Not a Key (Medium 2019) → Proof of Assignment (Medium 2019) → Cryptographic Control Is Fiduciary Power, Not Title → The Miner Is Not a Monarch → Protocol as Offer → The Law of Controlled Amnesia.
- **"What's wrong with PoS / Ethereum / multi-chain?"** → Proof of Unregistered Security (Medium 2019) → The Return of the Bearer Share → Service, Stake, and the Curious Case of Misclassification → The Graveyard of Gateways.
- **"What about quantum?"** → Bitcoin and Quantum Computing (Medium 2019) → Quantum Computing Will Not Crack Encryption → Quantum-Ineffective Bitcoin → Post-Quantum Digital Cash.
- **"What happened in the hash war?"** → Sustaining Hash → Miners and Property Rights → Corporate Activism → A House Divided (all Medium, Nov 2018).
- **"What's the Satoshi-authorship case he makes?"** → Satoshi Nakamoto (Medium 2019) → The Genesis of Genesis → Evidence and Law → Satoshi Never Posted on Bitcointalk (all Medium).

---

## 6. Caveats and corpus notes

- **Two Substack posts are paywalled** and summarised from their free previews only: *Commixtio, Coin Obfuscation, and the Law* (10 Jun 2025) and *Harry Ledger and the Philosopher's Coin* (11 Sep 2025). Their summaries state the limitation explicitly.
- **Many Medium posts are excerpts** ending "Read the full story on my personal blog" (craigwright.net); their summaries cover the excerpt and say so. A handful of Medium posts are stubs or single-sentence items, flagged honestly rather than padded.
- **One Medium post is an attribution anomaly**: `re-moxie-on-web3` is internally Mike Hearn's essay (his Android wallet, his coining of "SPV wallet", third-person Satoshi), misfiled under Craig's account. It is summarised faithfully but excluded from evidence of Craig's positions throughout the audits.
- **Duplicate postings exist** (Substack): *The Cult of Scarcity* appears twice (3 and 8 Dec 2025, near-identical), as do *The Cult of Digital Metallurgy…* (20 and 29 Nov 2025) and *Verification Without Enforcement* (24 Mar / 18 May 2026). All versions are summarised and cross-referenced.
- **Theme tags** (`themes:` in each summary's frontmatter) are assigned per essay from a controlled vocabulary of 24 tags; an essay typically carries 2–4.
- The machine-readable master indexes (482 Substack posts, 311 Medium posts: verdict, reason, themes, summary path, URL) and the raw post JSON/text are local pipeline artefacts, not shipped in this repo.
- The consistency audit — two internal lenses (Substack), one external comparison (the BRC wallet-SDK guide), and the cross-era pass (Medium vs Substack) — is in **`CONTRADICTIONS.md`** with the machine-readable source in [`substack-articles/contradictions.json`](substack-articles/contradictions.json).
