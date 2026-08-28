# education/ — Bitcoin (BSV) core principles, distilled

The educational residue of the corpus: every essay from both eras was re-read and
classified for **transferable Bitcoin logic** — protocol mechanics, Script, UTXOs, SPV,
wallets and keys, scaling engineering, security economics, monetary design, law and
property, tokenisation, mining, privacy. Essays retained were rewritten as tight
bullet-point principle files with the anti-BTC framing stripped out; what remains is
positive, reusable BSV logic with the numbers, mechanisms and legal citations intact.

## What was filtered out

- BTC/BTC-Core/Lightning/exchange polemic whose content collapses without the attack target
- Satire and fables (Ledgerford, Ledgerfall, Hashwarts, Intermedion, …)
- The Satoshi-authorship campaign, litigation commentary and memoirs
- Price-theology takedowns with no standalone monetary principle
- Event commentary and self-promotion

## At a glance

- **427 essays retained** (244 Medium-era, 183 Substack-era) of 476 Bitcoin-related essays audited
- **49 essays dropped** with per-essay reasons in `data/education_index.json`
- Each retained essay: `education/<era>--<slug>.md` — 4–12 bullets of core principles,
  YAML frontmatter (title, era, date, themes, source summary, canonical URL)

## Theme distribution of retained essays

| Theme | Essays |
|---|---|
| law-regulation | 170 |
| btc-critique | 124 |
| monetary-economics | 113 |
| mining-consensus | 103 |
| governance-decentralisation | 93 |
| security-economics | 92 |
| privacy | 83 |
| protocol-immutability | 79 |
| scaling-throughput | 77 |
| intermediaries | 75 |
| script-technical | 60 |
| property-rights | 60 |
| tokenisation | 49 |
| micropayments | 45 |
| wallets-keys | 43 |
| audit-accounting | 38 |
| networking | 37 |
| satoshi-history | 37 |
| lightning-l2 | 34 |
| spv-light-clients | 30 |
| identity | 29 |
| satire | 11 |
| ai-blockchain | 7 |
| quantum-scepticism | 7 |

(Essays carry multiple tags, so totals exceed the essay count.)

## Retained essays by theme

### law-regulation (170)

- [Lightning is malleable… Steel is not](education\medium--lightning-is-malleable-steel-is-not-4e68bfdef31.md) — medium, 2018-06-19
- [Negotiable Instruments](education\medium--negotiable-instruments-ad059d60f0e4.md) — medium, 2018-07-02
- [Banking on Bitcoin](education\medium--banking-on-bitcoin-563fbc31e44a.md) — medium, 2018-09-02
- [The crypto-ring of Gyges](education\medium--the-crypto-ring-of-gyges-f4858a037827.md) — medium, 2018-09-02
- [Death and taxes, it is time to kill off mythical beasts](education\medium--death-and-taxes-it-is-time-to-kill-off-mythical-beasts-d7dc1dbaa615.md) — medium, 2018-09-04
- [Vampire Securities from beyond the Wormhole](education\medium--vampire-securities-from-beyond-the-wormhole-8c4e691c809e.md) — medium, 2018-09-06
- [Misconceptions surrounding copyright](education\medium--misconceptions-surrounding-copyright-bbfec4c212a5.md) — medium, 2018-09-09
- [Human rights and property](education\medium--human-rights-and-property-2cde4181c012.md) — medium, 2018-09-12
- [Q&A/Written Interview — The answers — Part 4](education\medium--q-a-written-interview-the-answers-part-4-d6bfed8c4261.md) — medium, 2018-09-19
- [The postal acceptance rule in Bitcoin](education\medium--the-postal-acceptance-rule-in-bitcoin-e1c38ff9a4a9.md) — medium, 2018-09-27
- [Defining smart contracts](education\medium--defining-smart-contracts-eb31fd825de6.md) — medium, 2018-09-28
- [Bitcoin and Contracts](education\medium--bitcoin-and-contracts-3542ae5f43ff.md) — medium, 2018-09-29
- [The application, scope and limits of Letters of Indemnity in Bitcoin Contracts](education\medium--the-application-scope-and-limits-of-letters-of-indemnity-in-bitcoin-contracts-633e1491cf1.md) — medium, 2018-09-30
- [Bitcoin as a Notary](education\medium--bitcoin-as-a-notary-d260589fcd06.md) — medium, 2018-10-01
- [The Labour Fallacy of Bitcoin Value](education\medium--the-labour-fallacy-of-bitcoin-value-f375dd58e044.md) — medium, 2018-10-05
- [Scenario 3: Lease Contract](education\medium--scenario-3-lease-contract-d0ee4cd3900e.md) — medium, 2018-10-06
- [Scenario 4: Rolling Contract](education\medium--scenario-4-rolling-contract-5f73d87c7f5.md) — medium, 2018-10-06
- [Scenario 5: Contract Conditionality](education\medium--scenario-5-contract-conditionality-5155ef919f9f.md) — medium, 2018-10-06
- [Creating a Smart Contract Registry](education\medium--creating-a-smart-contract-registry-26dac7f238f5.md) — medium, 2018-10-06
- [What is Bitcoin](education\medium--what-is-bitcoin-cdb0a3133586.md) — medium, 2018-10-11
- [What is Bitcoin….](education\medium--what-is-bitcoin-8ee9d3e86674.md) — medium, 2018-10-12
- [Problems and key questions around Bitcoin](education\medium--problems-and-key-questions-around-bitcoin-76fc7282aae4.md) — medium, 2018-10-13
- [The tax implications of bitcoin as money](education\medium--the-tax-implications-of-bitcoin-as-money-2572cf2573fc.md) — medium, 2018-10-14
- [Digital signature rules and their relationship to bitcoin](education\medium--digital-signature-rules-and-their-relationship-to-bitcoin-b1faeae1f446.md) — medium, 2018-10-16
- [A codification scheme for state machines](education\medium--a-codification-scheme-for-state-machines-c5b1cb9351ec.md) — medium, 2018-10-16
- [Foreign-exchange considerations & Bitcoin](education\medium--foreign-exchange-considerations-bitcoin-c2d112386a97.md) — medium, 2018-10-17
- [Monetary transfer and transmission rules](education\medium--monetary-transfer-and-transmission-rules-89b76489807e.md) — medium, 2018-10-18
- [Rights as property](education\medium--rights-as-property-68c55b475880.md) — medium, 2018-10-19
- [DFA compilation and execution](education\medium--dfa-compilation-and-execution-38e6815897d2.md) — medium, 2018-10-19
- [Hearsay in the Blockchain world](education\medium--hearsay-in-the-blockchain-world-e75196db28fe.md) — medium, 2018-10-24
- [Burning and why it matters that it is stopped](education\medium--burning-and-why-it-matters-that-it-is-stopped-2aa0af10d4d1.md) — medium, 2018-10-27
- [Taxing Bitcoin — Introduction.](education\medium--taxing-bitcoin-introduction-2bacb31df9ca.md) — medium, 2018-10-28
- [Myths of permission-less](education\medium--myths-of-permission-less-d39b4af7ad9d.md) — medium, 2018-10-28
- [Taxing Bitcoin — Ordinary and tax concepts of “Money”](education\medium--taxing-bitcoin-ordinary-and-tax-concepts-of-money-15f935c60260.md) — medium, 2018-10-29
- [Taxing Bitcoin — GST implications of Bitcoin as money](education\medium--taxing-bitcoin-gst-implications-of-bitcoin-as-money-7d3b4bfabb50.md) — medium, 2018-10-30
- [A Bitcoin Smart Risk Contract](education\medium--a-bitcoin-smart-risk-contract-6ff2ac8dd93d.md) — medium, 2018-10-30
- [The scams in Crypto](education\medium--the-scams-in-crypto-376e327df2af.md) — medium, 2018-10-30
- [Property Law in the Age of Bitcoin](education\medium--property-law-in-the-age-of-bitcoin-28355604618f.md) — medium, 2018-10-31
- [Tax and Bitcoin — Income tax implications of Bitcoin as money](education\medium--tax-and-bitcoin-income-tax-implications-of-bitcoin-as-money-d29498766d83.md) — medium, 2018-10-31
- [True Sale and Insolvency Challenges in ICO Token Sales](education\medium--true-sale-and-insolvency-challenges-in-ico-token-sales-561a48706ece.md) — medium, 2018-10-31
- [Tax and Bitcoin — Investment in Bitcoin](education\medium--tax-and-bitcoin-investment-in-bitcoin-40a23e4cbda5.md) — medium, 2018-11-01
- [Tax and Bitcoin — Transacting and accounting for Bitcoin](education\medium--tax-and-bitcoin-transacting-and-accounting-for-bitcoin-f858631f0a89.md) — medium, 2018-11-02
- [Drugs, Fraud and Murder](education\medium--drugs-fraud-and-murder-ddf12208ae8b.md) — medium, 2018-11-06
- [Repudiation](education\medium--repudiation-3b35bd315abf.md) — medium, 2018-11-07
- [Bitcoin is not Anti State — it is Pro Honest government](education\medium--bitcoin-is-not-anti-state-it-is-pro-honest-government-1ab1ec0a9fba.md) — medium, 2018-11-09
- [Corporate Activism](education\medium--corporate-activism-1b34eece57f3.md) — medium, 2018-11-10
- [Payment intermediaries](education\medium--payment-intermediaries-db46605e79f4.md) — medium, 2018-11-11
- [Prevention is the key](education\medium--prevention-is-the-key-5c74d098c53a.md) — medium, 2018-11-12
- [Miners and Property rights](education\medium--miners-and-property-rights-a7c5a01252e2.md) — medium, 2018-11-14
- [Present Liability Schemes and Sanctions](education\medium--present-liability-schemes-and-sanctions-944888a00c6b.md) — medium, 2018-11-16
- [Commodity and security](education\medium--commodity-and-security-4fa134c99f14.md) — medium, 2018-11-19
- [A house divided](education\medium--a-house-divided-ebdea8f4d655.md) — medium, 2018-11-24
- [Instant transactions](education\medium--instant-transactions-a11f391fbd57.md) — medium, 2018-12-09
- [Why Silk Road was an abyss](education\medium--why-silk-road-was-an-abyss-67526e2902da.md) — medium, 2018-12-10
- [Bitcoin is a commodity](education\medium--bitcoin-is-a-commodity-1635dfca32fd.md) — medium, 2018-12-12
- [The lie of anarchy](education\medium--the-lie-of-anarchy-bd7c1f239289.md) — medium, 2018-12-13
- [Bitcoin in law](education\medium--bitcoin-in-law-7f2604f9fcd6.md) — medium, 2018-12-18
- [Currency](education\medium--currency-e725723340c3.md) — medium, 2018-12-19
- [Expectation of Profits](education\medium--expectation-of-profits-a56c845056a3.md) — medium, 2018-12-20
- [On Predicates](education\medium--on-predicates-b92df80f9b76.md) — medium, 2018-12-21
- [Account and Transfer Systems.](education\medium--account-and-transfer-systems-5f713649f158.md) — medium, 2018-12-22
- [Crowd Funding and ICOs](education\medium--crowd-funding-and-icos-35780d27a24d.md) — medium, 2018-12-24
- [Breach of contract — Remedies for breach](education\medium--breach-of-contract-remedies-for-breach-71fb0ff2b1fd.md) — medium, 2018-12-27
- [Contract Law and Smart Contracts](education\medium--contract-law-and-smart-contracts-1f1531f4bbd0.md) — medium, 2018-12-28
- [Ensuring honest money](education\medium--ensuring-honest-money-c49ec9110ec6.md) — medium, 2019-01-23
- [“Lightning” Network and the Financial Industry Regulatory Authority (FINRA)](education\medium--lightning-network-and-the-financial-industry-regulatory-authority-finra-bbbf28ccddac.md) — medium, 2019-02-01
- [Careful what you wish for…](education\medium--careful-what-you-wish-for-c7c2f19e6c4f.md) — medium, 2019-02-08
- [The story of Bitcoin, continued](education\medium--the-story-of-bitcoin-continued-2f1ec78ba38b.md) — medium, 2019-02-09
- [The false lure of anonymity](education\medium--the-false-lure-of-anonymity-110a35088979.md) — medium, 2019-02-12
- [Immutable evidence](education\medium--immutable-evidence-386b60a33123.md) — medium, 2019-02-16
- [Hello Dave…](education\medium--hello-dave-330c164a4aad.md) — medium, 2019-02-22
- [Forex accounting in script](education\medium--forex-accounting-in-script-51984db05c6f.md) — medium, 2019-02-24
- [Lessons in monetary terms](education\medium--lessons-in-monetary-terms-5e1493e0d197.md) — medium, 2019-02-25
- [Statist](education\medium--statist-9fba301c0a08.md) — medium, 2019-02-27
- [Schnorr](education\medium--schnorr-21be14ac05f5.md) — medium, 2019-03-03
- [Clickwrap smart contracts](education\medium--clickwrap-smart-contracts-3338507105bf.md) — medium, 2019-03-03
- [Proof of (unregistered) security](education\medium--proof-of-unregistered-security-798f4df2fbb9.md) — medium, 2019-03-04
- [Proof](education\medium--proof-22e2cd5fc385.md) — medium, 2019-03-13
- [Why Lightning will never be currency, and why BSV matters](education\medium--why-lightning-will-never-be-currency-and-why-bsv-matters-60dfa5c9ac4d.md) — medium, 2019-03-15
- [Free Speech](education\medium--free-speech-526a972d5fb5.md) — medium, 2019-03-18
- [Peer-to-peer digital electronic cash](education\medium--peer-to-peer-digital-electronic-cash-369bb306028b.md) — medium, 2019-03-22
- [Satoshi Nakamoto](education\medium--satoshi-nakamoto-a7c4cf21253e.md) — medium, 2019-04-05
- [My Mentor](education\medium--my-mentor-f6ea4b828da6.md) — medium, 2019-04-07
- [Panopticrypt](education\medium--panopticrypt-ed6154e06b34.md) — medium, 2019-04-07
- [Forget anonymity.](education\medium--forget-anonymity-8c4ea82ad46a.md) — medium, 2019-04-10
- [Evidence and law](education\medium--evidence-and-law-f8f10001efa5.md) — medium, 2019-04-12
- [Patent wars…](education\medium--patent-wars-24929b73f381.md) — medium, 2019-04-13
- [We don’t want to lead with “anonymous”](education\medium--we-dont-want-to-lead-with-anonymous-a4890db7766d.md) — medium, 2019-04-17
- [The immovable](education\medium--the-immovable-8aa39ee04515.md) — medium, 2019-04-23
- [The wheel of time is not on an axis](education\medium--the-wheel-of-time-is-not-on-an-axis-ccefa8963f6.md) — medium, 2019-04-27
- [The puzzle of the double hash](education\medium--the-puzzle-of-the-double-hash-968196edb06d.md) — medium, 2019-04-30
- [Don’t be fooled — Bitcoin is not BTC](education\medium--dont-be-fooled-bitcoin-is-not-btc-61e6aee8ac53.md) — medium, 2019-05-08
- [Custodial standards](education\medium--custodial-standards-9dbcfe1f4c4e.md) — medium, 2019-05-10
- [Crypto flim-flam](education\medium--crypto-flim-flam-6b4ff367b634.md) — medium, 2019-05-13
- [Institutional madness](education\medium--institutional-madness-6f4fade7b9fc.md) — medium, 2019-05-16
- [Why code must not be law](education\medium--why-code-must-not-be-law-438e2cafe2e4.md) — medium, 2019-05-18
- [Satoshi and the Sophists](education\medium--satoshi-and-the-sophists-9c940d4eb22e.md) — medium, 2019-05-23
- [Shades of Black…](education\medium--shades-of-black-5f269ff97cde.md) — medium, 2019-05-24
- [MSBs and Account-Based Systems](education\medium--msbs-and-account-based-systems-e64dc056f92a.md) — medium, 2019-06-04
- [The Right to Privacy](education\medium--the-right-to-privacy-c8a66eda0ae3.md) — medium, 2019-06-07
- [Monetary Law and Blockchains](education\medium--monetary-law-and-blockchains-edad5aadd009.md) — medium, 2019-06-12
- [Taxing Crypto](education\medium--taxing-crypto-548bf6da43fc.md) — medium, 2019-06-17
- [Operating an Escrow Document Storage and Secure Signing Registry](education\medium--operating-an-escrow-document-storage-and-secure-signing-registry-39789123b5a6.md) — medium, 2019-06-28
- [Reversing Illicit Transactions on Bitcoin Is Simple](education\medium--reversing-illicit-transactions-on-bitcoin-is-simple-71a99cf14ec3.md) — medium, 2019-07-24
- [PII in the Bitcoin World](education\medium--pii-in-the-bitcoin-world-4eb0416124b6.md) — medium, 2019-08-01
- [Why Law Matters](education\medium--why-law-matters-db0e32492d05.md) — medium, 2019-08-02
- [Good Title Is Not a Key](education\medium--good-title-is-not-a-key-7342b6327f.md) — medium, 2019-08-23
- [Rights and Tracing](education\medium--rights-and-tracing-603bee35c584.md) — medium, 2019-09-06
- [Simplified Payment Verification](education\medium--simplified-payment-verification-4a260d272a38.md) — medium, 2019-10-09
- [Taxing Times…](education\medium--taxing-times-3cd2067fab8d.md) — medium, 2019-10-15
- [If Gold Turned to Lead](education\medium--if-gold-turned-to-lead-54e82c27b79b.md) — medium, 2019-10-21
- [Bitcoin Fights Corruption](education\medium--bitcoin-fights-corruption-5e5fd7c79123.md) — medium, 2019-10-23
- [A Fundamental Misunderstanding](education\medium--a-fundamental-misunderstanding-60e788cfcc1.md) — medium, 2019-11-05
- [Digital Gold](education\medium--digital-gold-d46b9493a17b.md) — medium, 2019-11-08
- [Proof of Assignment](education\medium--proof-of-assignment-50a36de081c7.md) — medium, 2019-11-13
- [Mistakes Also Come when You Listen to Others…](education\medium--mistakes-also-come-when-you-listen-to-others-fd2838fab578.md) — medium, 2020-01-15
- [Looking the Other Way](education\medium--looking-the-other-way-116ace0a875e.md) — medium, 2020-01-17
- [How Digital Signatures Work](education\medium--how-digital-signatures-work-efd303fa8f11.md) — medium, 2020-01-21
- [Open Source](education\medium--open-source-ed8e1066fbbd.md) — medium, 2020-01-24
- [Myths of Decentralisation…](education\medium--myths-of-decentralisation-761c713ab2cd.md) — medium, 2020-02-06
- [Forking and Passing Off…](education\medium--forking-and-passing-off-ccbe22f2637e.md) — medium, 2020-02-13
- [Cryptography and Bitcoin](education\medium--cryptography-and-bitcoin-b64db06299e3.md) — medium, 2020-02-20
- [On Decentralisation](education\medium--on-decentralisation-e761949d7e5c.md) — medium, 2020-02-24
- [Binance: The Untrusted Intermediary](education\medium--binance-the-untrusted-intermediary-dddec51f5c47.md) — medium, 2020-03-02
- [Ledgers and Design](education\medium--ledgers-and-design-22f9f2eaacc0.md) — medium, 2020-03-18
- [The Property Flaw of Lightning](education\medium--the-property-flaw-of-lightning-d36ebf5b78a3.md) — medium, 2020-03-27
- [The History of Freezing in Bitcoin](education\medium--the-history-of-freezing-in-bitcoin-13f0cf1a89d9.md) — medium, 2020-04-23
- [Commixtio, Coin Obfuscation, and the Law: Roman Doctrine and Modern Blockchain Tracing ](education\substack--commixtio-coin-obfuscation-and-the.md) — substack, 2025-06-10
- [In Praise of Shadowled Ledgers](education\substack--in-praise-of-shadowled-ledgers.md) — substack, 2025-06-14
- [A Mechanism of Honour - Ledger of Blood and Electricity](education\substack--a-mechanism-of-honour-ledger-of-blood.md) — substack, 2025-07-30
- [Privacy and Bitcoin: Legal Boundaries, Economic Realities, and the Illusion of Technical Obfuscation](education\substack--privacy-and-bitcoin-legal-boundaries.md) — substack, 2025-08-30
- [Sunday Reflection: Privacy, Records, and the Integrity of Exchange](education\substack--sunday-reflection-privacy-records.md) — substack, 2025-08-31
- [The Necessity of the Stone: Protocol Finality, Political Intrusion, and the Integrity of Bitcoin](education\substack--the-necessity-of-the-stone-protocol.md) — substack, 2025-10-02
- [Private Keys, Proofs, and the Illusion of Ownership in Digital Cash Systems](education\substack--private-keys-proofs-and-the-illusion.md) — substack, 2025-10-15
- [Digital Identity and the Architecture of Autonomy: A Framework for Self-Sovereign Verification in a Stateless System](education\substack--digital-identity-and-the-architecture.md) — substack, 2025-10-28
- [The Quiet Violence of Sunday: Notes on Protocol Capture, Manufactured Ignorance, and the Cult of BTC-Core](education\substack--the-quiet-violence-of-sunday-notes.md) — substack, 2025-11-16
- [Accountability Follows Control: English Private Law and the Governance of Bitcoin](education\substack--accountability-follows-control-english.md) — substack, 2026-01-12
- [Bailment on a Ledger](education\substack--bailment-on-a-ledger.md) — substack, 2026-01-15
- [Cryptographic Control Is Fiduciary Power, Not Title](education\substack--cryptographic-control-is-fiduciary.md) — substack, 2026-01-19
- [The Coat Check Problem in the CLARITY Act](education\substack--the-coat-check-problem-in-the-clarity.md) — substack, 2026-01-20
- [Cryptographic Control as Fiduciary Power](education\substack--cryptographic-control-as-fiduciary.md) — substack, 2026-01-22
- [Protocol as Offer](education\substack--protocol-as-offer.md) — substack, 2026-01-24
- [You Don’t Own Your Digital Stuff. NFTs Could Actually Fix That — Without Intellectual Property.](education\substack--you-dont-own-your-digital-stuff-nfts.md) — substack, 2026-02-11
- [Your Property Rights Don’t Exist Without a State — And That’s Not a Moral Claim](education\substack--your-property-rights-dont-exist-without.md) — substack, 2026-02-13
- [The Mark That Belongs to No One](education\substack--the-mark-that-belongs-to-no-one.md) — substack, 2026-03-05
- [The Return of the Bearer Share](education\substack--the-return-of-the-bearer-share.md) — substack, 2026-03-07
- [Your Token Is Not Your JPEG — And That Distinction Is the Entire Point](education\substack--your-token-is-not-your-jpeg-and-that.md) — substack, 2026-03-12
- [Hash Power and the Limits of Law](education\substack--hash-power-and-the-limits-of-law.md) — substack, 2026-03-13
- [The Oldest New Problem in Finance: Proof of Stake and the Return of the Bearer Share](education\substack--the-oldest-new-problem-in-finance.md) — substack, 2026-03-16
- [The Law Already Inside Bitcoin](education\substack--the-law-already-inside-bitcoin.md) — substack, 2026-03-17
- [The Bearer Share Is Dead. Long Live Proof of Stake.](education\substack--the-bearer-share-is-dead-long-live.md) — substack, 2026-03-18
- [Transparency Is Not Centralisation: NAR, DAR, and the Legal Architecture of Blockchain Governance](education\substack--transparency-is-not-centralisation.md) — substack, 2026-04-11
- [Service, Stake, and the Curious Case of Misclassification](education\substack--service-stake-and-the-curious-case.md) — substack, 2026-04-13
- [The Drivechain Mechanism Was Already Patented](education\substack--the-drivechain-mechanism-was-already.md) — substack, 2026-04-25
- [The Geography of Discretion](education\substack--the-geography-of-discretion.md) — substack, 2026-04-29
- [Why Hash Power Is Not Security](education\substack--why-hash-power-is-not-security.md) — substack, 2026-05-02
- [Censorship Resistance, Atomic Settlement, and the Limits of Coalition Power](education\substack--censorship-resistance-atomic-settlement.md) — substack, 2026-05-12
- [The Two Tiers Are a Market, Not a Cage ](education\substack--the-two-tiers-are-a-market-not-a.md) — substack, 2026-05-12
- [The Frightening Commerce of Free Persons](education\substack--the-frightening-commerce-of-free.md) — substack, 2026-05-16
- [The Miner Is Not a Monarch](education\substack--the-miner-is-not-a-monarch.md) — substack, 2026-05-20
- [Triple-Entry Accounting Has Been Misunderstood](education\substack--triple-entry-accounting-has-been.md) — substack, 2026-05-26
- [Who Shall Keep the Keys?](education\substack--who-shall-keep-the-keys.md) — substack, 2026-06-03
- [The Lawless Blockchain Is a Story We Tell for Small Change](education\substack--the-lawless-blockchain-is-a-story.md) — substack, 2026-06-15
- [The Warehouse and the Mind](education\substack--the-warehouse-and-the-mind.md) — substack, 2026-06-18
- [The Law of Controlled Amnesia](education\substack--the-law-of-controlled-amnesia.md) — substack, 2026-06-29
- [The Asset the Law Gave Up On](education\substack--the-asset-the-law-gave-up-on.md) — substack, 2026-07-03
- [The Dial That Used to Be Fixed](education\substack--the-dial-that-used-to-be-fixed.md) — substack, 2026-07-04
- [The Number That Moved by Standing Still](education\substack--the-number-that-moved-by-standing.md) — substack, 2026-07-05
- [Nobody Asks Where Your Banknote Has Been ](education\substack--nobody-asks-where-your-banknote-has.md) — substack, 2026-07-06
- [What Is Proof?](education\substack--what-is-proof.md) — substack, 2026-07-11

### btc-critique (124)

- [OP Codes and the push to confuse.](education\medium--op-codes-and-the-push-to-confuse-24d10d5e3861.md) — medium, 2018-06-07
- [Iron and Steel](education\medium--iron-and-steel-f4898687f6b0.md) — medium, 2018-06-09
- [Lightning is malleable… Steel is not](education\medium--lightning-is-malleable-steel-is-not-4e68bfdef31.md) — medium, 2018-06-19
- [The myths of Bitcoin](education\medium--the-myths-of-bitcoin-bf3664e9d767.md) — medium, 2018-08-14
- [The cult of Decentralisation](education\medium--the-cult-of-decentralisation-b62a1445dbf0.md) — medium, 2018-08-16
- [Limited change to bring stability](education\medium--limited-change-to-bring-stability-36abb2fed8e1.md) — medium, 2018-08-19
- [Banking on Bitcoin](education\medium--banking-on-bitcoin-563fbc31e44a.md) — medium, 2018-09-02
- [A diatribe on Bitcoin, Trust and the economy of security (redux)](education\medium--a-diatribe-on-bitcoin-trust-and-the-economy-of-security-redux-b83b9b7943ff.md) — medium, 2018-09-07
- [Stable by design](education\medium--stable-by-design-e967b93dc147.md) — medium, 2018-09-10
- [Trust and Risk](education\medium--trust-and-risk-45d42d853693.md) — medium, 2018-09-11
- [Keynesian flaws.](education\medium--keynesian-flaws-33ce9332d1f0.md) — medium, 2018-09-14
- [Equality](education\medium--equality-9948207d20e.md) — medium, 2018-09-15
- [Q&A/Written Interview — The answers — Part 2](education\medium--q-a-written-interview-the-answers-part-2-20c3f5f84f67.md) — medium, 2018-09-17
- [Are the Poor Exploited?](education\medium--are-the-poor-exploited-331790523319.md) — medium, 2018-09-17
- [Q&A/Written Interview — The answers — Part 3](education\medium--q-a-written-interview-the-answers-part-3-71116e036958.md) — medium, 2018-09-18
- [I shall continue answering in order.](education\medium--i-shall-continue-answering-in-order-eae445cba4bf.md) — medium, 2018-09-20
- [Hoarding and Bitcoin](education\medium--hoarding-and-bitcoin-b158d465aea6.md) — medium, 2018-09-24
- [Simplicity in Bitcoin](education\medium--simplicity-in-bitcoin-1d4bcc6ce0c2.md) — medium, 2018-09-25
- [Why is Bitcoin Open Source?](education\medium--why-is-bitcoin-open-source-196273d1712b.md) — medium, 2018-09-26
- [Defining smart contracts](education\medium--defining-smart-contracts-eb31fd825de6.md) — medium, 2018-09-28
- [The infinite money fallacy](education\medium--the-infinite-money-fallacy-3c7a541a2977.md) — medium, 2018-10-04
- [The Labour Fallacy of Bitcoin Value](education\medium--the-labour-fallacy-of-bitcoin-value-f375dd58e044.md) — medium, 2018-10-05
- [Hidden costs](education\medium--hidden-costs-8afaab3d9b1b.md) — medium, 2018-10-06
- [Security](education\medium--security-5926122babf9.md) — medium, 2018-10-08
- [Bitcoin: A Total Turing Machine](education\medium--bitcoin-a-total-turing-machine-5a6c3c68f5a7.md) — medium, 2018-10-12
- [A Proof of Turing completeness in Bitcoin Script](education\medium--a-proof-of-turing-completeness-in-bitcoin-script-3cf5aa7aeb83.md) — medium, 2018-10-12
- [Blockchain-Based Decentralised Autonomous Corporations: An Overview](education\medium--blockchain-based-decentralised-autonomous-corporations-an-overview-5dc0d469fcb5.md) — medium, 2018-10-17
- [Proof of State, or, the new Fed](education\medium--proof-of-state-or-the-new-fed-41ae1a117093.md) — medium, 2018-11-14
- [Taking care of Business.](education\medium--taking-care-of-business-63430b62be2f.md) — medium, 2018-11-18
- [Bitcoin is for Business](education\medium--bitcoin-is-for-business-168b683b51c7.md) — medium, 2018-11-20
- [BSV is the only Bitcoin.](education\medium--bsv-is-the-only-bitcoin-e1f045bc7cc8.md) — medium, 2018-12-11
- [The myth of the full validation node](education\medium--the-myth-of-the-full-validation-node-d7db52748649.md) — medium, 2018-12-21
- [Miners and rational expectations](education\medium--miners-and-rational-expectations-170d71ac23ee.md) — medium, 2018-12-29
- [Why CLTV was a bad idea](education\medium--why-cltv-was-a-bad-idea-4b5d0c043e2a.md) — medium, 2019-01-08
- [Bitcoin and Quantum Computing](education\medium--bitcoin-and-quantum-computing-b6f048db01eb.md) — medium, 2019-01-23
- [Careful what you wish for…](education\medium--careful-what-you-wish-for-c7c2f19e6c4f.md) — medium, 2019-02-08
- [Proof of Work](education\medium--proof-of-work-1a323e82fd9.md) — medium, 2019-02-16
- [The great mining swindle](education\medium--the-great-mining-swindle-2dec8ffa819d.md) — medium, 2019-02-18
- [Schnorr](education\medium--schnorr-21be14ac05f5.md) — medium, 2019-03-03
- [Proof](education\medium--proof-22e2cd5fc385.md) — medium, 2019-03-13
- [Why Lightning will never be currency, and why BSV matters](education\medium--why-lightning-will-never-be-currency-and-why-bsv-matters-60dfa5c9ac4d.md) — medium, 2019-03-15
- [Learning Script](education\medium--learning-script-20303a5f867e.md) — medium, 2019-03-18
- [Peer-to-peer digital electronic cash](education\medium--peer-to-peer-digital-electronic-cash-369bb306028b.md) — medium, 2019-03-22
- [How to make a brain wallet](education\medium--how-to-make-a-brain-wallet-a8040b7c1993.md) — medium, 2019-03-27
- [Decentralised planning](education\medium--decentralised-planning-c781f37d9342.md) — medium, 2019-04-03
- [Bit Gold Is Not BitCoin](education\medium--bit-gold-is-not-bitcoin-cea96eac20c9.md) — medium, 2019-04-08
- [From simplicity comes …](education\medium--from-simplicity-comes-1a19f9a85747.md) — medium, 2019-04-09
- [Patent wars…](education\medium--patent-wars-24929b73f381.md) — medium, 2019-04-13
- [Bitcoin is not against banks](education\medium--bitcoin-is-not-against-banks-fffb7b633fb0.md) — medium, 2019-04-14
- [BTC and Censorship](education\medium--btc-and-censorship-410265a8a4a2.md) — medium, 2019-04-15
- [The “Perfect” Firewall…](education\medium--the-perfect-firewall-3d6971213a2b.md) — medium, 2019-04-20
- [The immovable](education\medium--the-immovable-8aa39ee04515.md) — medium, 2019-04-23
- [Don’t be fooled — Bitcoin is not BTC](education\medium--dont-be-fooled-bitcoin-is-not-btc-61e6aee8ac53.md) — medium, 2019-05-08
- [Crypto flim-flam](education\medium--crypto-flim-flam-6b4ff367b634.md) — medium, 2019-05-13
- [Money is a measuring stick](education\medium--money-is-a-measuring-stick-6f5fe9cb8c9d.md) — medium, 2019-05-14
- [Institutional madness](education\medium--institutional-madness-6f4fade7b9fc.md) — medium, 2019-05-16
- [Funding and rights](education\medium--funding-and-rights-baf26b37947f.md) — medium, 2019-05-20
- [Shades of Black…](education\medium--shades-of-black-5f269ff97cde.md) — medium, 2019-05-24
- [Monetary Law and Blockchains](education\medium--monetary-law-and-blockchains-edad5aadd009.md) — medium, 2019-06-12
- [Reversing Illicit Transactions on Bitcoin Is Simple](education\medium--reversing-illicit-transactions-on-bitcoin-is-simple-71a99cf14ec3.md) — medium, 2019-07-24
- [Spam Away…](education\medium--spam-away-eb25b01a2514.md) — medium, 2019-07-25
- [Taxing Times…](education\medium--taxing-times-3cd2067fab8d.md) — medium, 2019-10-15
- [Digital Gold](education\medium--digital-gold-d46b9493a17b.md) — medium, 2019-11-08
- [Transparency and Government](education\medium--transparency-and-government-69c7e8f59180.md) — medium, 2019-11-18
- [Looking the Other Way](education\medium--looking-the-other-way-116ace0a875e.md) — medium, 2020-01-17
- [Forking and Passing Off…](education\medium--forking-and-passing-off-ccbe22f2637e.md) — medium, 2020-02-13
- [Cryptography and Bitcoin](education\medium--cryptography-and-bitcoin-b64db06299e3.md) — medium, 2020-02-20
- [The High Priests of “crypto” and the dogma wars](education\medium--the-high-priests-of-crypto-and-the-dogma-wars-100b56771c9e.md) — medium, 2020-02-22
- [On Decentralisation](education\medium--on-decentralisation-e761949d7e5c.md) — medium, 2020-02-24
- [The Property Flaw of Lightning](education\medium--the-property-flaw-of-lightning-d36ebf5b78a3.md) — medium, 2020-03-27
- [Bitcoin Script as a Macro-Expanded Turing Framework ](education\substack--bitcoin-script-as-a-macro-expanded.md) — substack, 2025-06-11
- [Set in Stone or Sold to the Highest Bidder: Why Immutability Is Bitcoin's Only Defence](education\substack--set-in-stone-or-sold-to-the-highest.md) — substack, 2025-06-17
- [Stablecoins and the Lost Spark](education\substack--stablecoins-and-the-lost-spark.md) — substack, 2025-06-19
- [“Where Your Treasure Is”: A Christian Denunciation of Hoarding, HODL Culture, and False Promises of Wealth Without Work](education\substack--where-your-treasure-is-a-christian.md) — substack, 2025-06-22
- [Ghosts of Gold: Fractional Reserve Dynamics in the Age of BTC](education\substack--ghosts-of-gold-fractional-reserve.md) — substack, 2025-07-28
- [The Audit of Fools: Statistical Illiteracy in the Cult of Full Nodes ](education\substack--the-audit-of-fools-statistical-illiteracy.md) — substack, 2025-08-22
- [Privacy and Bitcoin: Legal Boundaries, Economic Realities, and the Illusion of Technical Obfuscation](education\substack--privacy-and-bitcoin-legal-boundaries.md) — substack, 2025-08-30
- [Definitional Corruption and the Erosion of Truth: A Wittgensteinian Analysis of BTC Debates](education\substack--definitional-corruption-and-the-erosion.md) — substack, 2025-09-25
- [The Failure of BTC Core’s Changes: A Case Study in Protocol Capture and Manipulation](education\substack--the-failure-of-btc-cores-changes.md) — substack, 2025-09-26
- [The Lifeline of Wires: Why Digital Cash Dies Without the Net](education\substack--the-lifeline-of-wires-why-digital.md) — substack, 2025-10-04
- [The Lie of Progress: How Bitcoin Became Fiat in a Digital Suit](education\substack--the-lie-of-progress-how-bitcoin-became.md) — substack, 2025-10-27
- [The Myth of the Bitcoin Standard: Debt, Delusion, and the Enduring Economics of State Spending](education\substack--the-myth-of-the-bitcoin-standard.md) — substack, 2025-11-05
- [The Five-Per-Second Delusion: How “Hard Money” Becomes Soft IOUs](education\substack--the-five-per-second-delusion-how.md) — substack, 2025-11-05
- [The Throttled Machine: How Five Transactions a Second Killed Bitcoin’s Promise](education\substack--the-throttled-machine-how-five-transactions.md) — substack, 2025-11-10
- [The Geometry of Freedom: Why Bitcoin Must Scale or Die](education\substack--the-geometry-of-freedom-why-bitcoin.md) — substack, 2025-11-11
- [The Mirage of the Bitcoin Standard: Fractional Reserve Finance in Digital Form](education\substack--the-mirage-of-the-bitcoin-standard.md) — substack, 2025-11-13
- [The Quiet Violence of Sunday: Notes on Protocol Capture, Manufactured Ignorance, and the Cult of BTC-Core](education\substack--the-quiet-violence-of-sunday-notes.md) — substack, 2025-11-16
- [When Five TPS Becomes a Sacred Bull](education\substack--when-five-tps-becomes-a-sacred-bull.md) — substack, 2025-11-18
- [The Cult of Digital Metallurgy and the Poverty of Small Minds](education\substack--the-cult-of-digital-metallurgy-and.md) — substack, 2025-11-20
- [The Great Global Skim](education\substack--the-great-global-skim.md) — substack, 2025-11-21
- [The Cult of Digital Metallurgy and the Poverty of Small Minds](education\substack--the-cult-of-digital-metallurgy-and-35a.md) — substack, 2025-11-29
- [The Cult of Scarcity](education\substack--the-cult-of-scarcity.md) — substack, 2025-12-03
- [The Forked Illusion: How Both Sides Cannot Be Right About Bitcoin—and Why Both Are Exposed by Their Own Logic](education\substack--the-forked-illusion-how-both-sides.md) — substack, 2025-12-07
- [The Cult of Scarcity](education\substack--the-cult-of-scarcity-10d.md) — substack, 2025-12-08
- [The Cult of the Full Node](education\substack--the-cult-of-the-full-node.md) — substack, 2025-12-15
- [The Chessboard, the Grain, and the Fee Market That Ate Itself](education\substack--the-chessboard-the-grain-and-the.md) — substack, 2026-03-15
- [Why Transaction Throughput Determines How Long Bitcoin’s Security Model Holds](education\substack--why-transaction-throughput-determines.md) — substack, 2026-03-20
- [Verification Without Enforcement Is Observation, Not Security](education\substack--verification-without-enforcement.md) — substack, 2026-03-24
- [Bitcoin Has a Population Problem — And We Can Prove It](education\substack--bitcoin-has-a-population-problem.md) — substack, 2026-03-25
- [The Graveyard of Gateways: Why There Can Only Be One Blockchain](education\substack--the-graveyard-of-gateways-why-there.md) — substack, 2026-04-04
- [The Toll Road You Were Promised Would Be Free: How Refusing to Scale Rebuilds the Banks](education\substack--the-toll-road-you-were-promised-would.md) — substack, 2026-04-08
- [Transparency Is Not Centralisation: NAR, DAR, and the Legal Architecture of Blockchain Governance](education\substack--transparency-is-not-centralisation.md) — substack, 2026-04-11
- [The Drivechain Mechanism Was Already Patented](education\substack--the-drivechain-mechanism-was-already.md) — substack, 2026-04-25
- [The Quantum Apocalypse Is Coming Any Decade Now, So Here Is the Solution to a Problem That Will Not Exist](education\substack--the-quantum-apocalypse-is-coming.md) — substack, 2026-04-27
- [The Geography of Discretion](education\substack--the-geography-of-discretion.md) — substack, 2026-04-29
- [The Myth of the Sovereign Node](education\substack--the-myth-of-the-sovereign-node.md) — substack, 2026-05-07
- [SegWit2x as Market Coordination Around Incentives](education\substack--segwit2x-as-market-coordination-around.md) — substack, 2026-05-08
- [The Priesthood of Artificial Scarcity](education\substack--the-priesthood-of-artificial-scarcity.md) — substack, 2026-05-08
- [Small Worlds, Large Errors](education\substack--small-worlds-large-errors.md) — substack, 2026-05-11
- [The Dangerous Thing Is Not Bitcoin, but Utility](education\substack--the-dangerous-thing-is-not-bitcoin.md) — substack, 2026-05-16
- [Five Transactions a Second, and Other Discourtesies to Commerce](education\substack--five-transactions-a-second-and-other.md) — substack, 2026-05-19
- [IPv4.1 Does Not Exist](education\substack--ipv41-does-not-exist.md) — substack, 2026-05-31
- [The Integer and the Idol](education\substack--the-integer-and-the-idol.md) — substack, 2026-05-31
- [The Beast at the Door](education\substack--the-beast-at-the-door.md) — substack, 2026-06-06
- [The Scoreboard Is Not the Game: Money, Measurement, and the Collapse of Monetary Understanding](education\substack--the-scoreboard-is-not-the-game-money.md) — substack, 2026-06-07
- [A Pretty Curve Is Not an Economic Theory](education\substack--a-pretty-curve-is-not-an-economic.md) — substack, 2026-06-07
- [You Cannot Hoard Your Way to Money](education\substack--you-cannot-hoard-your-way-to-money.md) — substack, 2026-06-09
- [The Arithmetic of the Last Fool](education\substack--the-arithmetic-of-the-last-fool.md) — substack, 2026-06-12
- [What the Protocol Remembers](education\substack--what-the-protocol-remembers.md) — substack, 2026-06-16
- [BTC Is Banking with Extra Steps](education\substack--btc-is-banking-with-extra-steps.md) — substack, 2026-06-18
- [The Dial That Used to Be Fixed](education\substack--the-dial-that-used-to-be-fixed.md) — substack, 2026-07-04
- [The Asset That Pays Rent to Exist](education\substack--the-asset-that-pays-rent-to-exist.md) — substack, 2026-07-25
- [Bitcoin After the Casino](education\substack--bitcoin-after-the-casino.md) — substack, 2026-08-02
- [There Is No Such Thing as Spam in a Priced System](education\substack--there-is-no-such-thing-as-spam-in.md) — substack, 2026-08-04

### monetary-economics (113)

- [Money Must First Be Stable](education\medium--money-must-first-be-stable-a44fbe7574c7.md) — medium, 2018-08-14
- [The cult of Decentralisation](education\medium--the-cult-of-decentralisation-b62a1445dbf0.md) — medium, 2018-08-16
- [Death and taxes, it is time to kill off mythical beasts](education\medium--death-and-taxes-it-is-time-to-kill-off-mythical-beasts-d7dc1dbaa615.md) — medium, 2018-09-04
- [Worm-a-nomics](education\medium--worm-a-nomics-e8d59107f6d0.md) — medium, 2018-09-07
- [A diatribe on Bitcoin, Trust and the economy of security (redux)](education\medium--a-diatribe-on-bitcoin-trust-and-the-economy-of-security-redux-b83b9b7943ff.md) — medium, 2018-09-07
- [The 1937 Crash](education\medium--the-1937-crash-c9ab5c3f5521.md) — medium, 2018-09-13
- [Keynesian flaws.](education\medium--keynesian-flaws-33ce9332d1f0.md) — medium, 2018-09-14
- [Equality](education\medium--equality-9948207d20e.md) — medium, 2018-09-15
- [Are the Poor Exploited?](education\medium--are-the-poor-exploited-331790523319.md) — medium, 2018-09-17
- [Q&A/Written Interview — The answers — Part 3](education\medium--q-a-written-interview-the-answers-part-3-71116e036958.md) — medium, 2018-09-18
- [Dynamic disequilibria and the creation of criminal opportunity](education\medium--dynamic-disequilibria-and-the-creation-of-criminal-opportunity-255e98f59266.md) — medium, 2018-09-18
- [Hoarding and Bitcoin](education\medium--hoarding-and-bitcoin-b158d465aea6.md) — medium, 2018-09-24
- [Bitcoin and Contracts](education\medium--bitcoin-and-contracts-3542ae5f43ff.md) — medium, 2018-09-29
- [The Labour Fallacy of Bitcoin Value](education\medium--the-labour-fallacy-of-bitcoin-value-f375dd58e044.md) — medium, 2018-10-05
- [Hidden costs](education\medium--hidden-costs-8afaab3d9b1b.md) — medium, 2018-10-06
- [What is Bitcoin](education\medium--what-is-bitcoin-cdb0a3133586.md) — medium, 2018-10-11
- [What is Bitcoin….](education\medium--what-is-bitcoin-8ee9d3e86674.md) — medium, 2018-10-12
- [Problems and key questions around Bitcoin](education\medium--problems-and-key-questions-around-bitcoin-76fc7282aae4.md) — medium, 2018-10-13
- [The tax implications of bitcoin as money](education\medium--the-tax-implications-of-bitcoin-as-money-2572cf2573fc.md) — medium, 2018-10-14
- [Foreign-exchange considerations & Bitcoin](education\medium--foreign-exchange-considerations-bitcoin-c2d112386a97.md) — medium, 2018-10-17
- [Monetary transfer and transmission rules](education\medium--monetary-transfer-and-transmission-rules-89b76489807e.md) — medium, 2018-10-18
- [Burning and why it matters that it is stopped](education\medium--burning-and-why-it-matters-that-it-is-stopped-2aa0af10d4d1.md) — medium, 2018-10-27
- [Taxing Bitcoin — Introduction.](education\medium--taxing-bitcoin-introduction-2bacb31df9ca.md) — medium, 2018-10-28
- [Taxing Bitcoin — Ordinary and tax concepts of “Money”](education\medium--taxing-bitcoin-ordinary-and-tax-concepts-of-money-15f935c60260.md) — medium, 2018-10-29
- [Taxing Bitcoin — GST implications of Bitcoin as money](education\medium--taxing-bitcoin-gst-implications-of-bitcoin-as-money-7d3b4bfabb50.md) — medium, 2018-10-30
- [Tax and Bitcoin — Income tax implications of Bitcoin as money](education\medium--tax-and-bitcoin-income-tax-implications-of-bitcoin-as-money-d29498766d83.md) — medium, 2018-10-31
- [Tax and Bitcoin — Investment in Bitcoin](education\medium--tax-and-bitcoin-investment-in-bitcoin-40a23e4cbda5.md) — medium, 2018-11-01
- [Tax and Bitcoin — Transacting and accounting for Bitcoin](education\medium--tax-and-bitcoin-transacting-and-accounting-for-bitcoin-f858631f0a89.md) — medium, 2018-11-02
- [Coin burning for dummies](education\medium--coin-burning-for-dummies-baa3cd14f915.md) — medium, 2018-11-04
- [Bitcoin is all about incentives](education\medium--bitcoin-is-all-about-incentives-72894518f6b5.md) — medium, 2018-11-06
- [Rent seeking in economics and Crypto](education\medium--rent-seeking-in-economics-and-crypto-344e3d54bd81.md) — medium, 2018-11-07
- [Fixing OP_Fals](education\medium--fixing-op-fals-fd157899d2b7.md) — medium, 2018-11-08
- [Bitcoin is not Anti State — it is Pro Honest government](education\medium--bitcoin-is-not-anti-state-it-is-pro-honest-government-1ab1ec0a9fba.md) — medium, 2018-11-09
- [Payment intermediaries](education\medium--payment-intermediaries-db46605e79f4.md) — medium, 2018-11-11
- [Proof of State, or, the new Fed](education\medium--proof-of-state-or-the-new-fed-41ae1a117093.md) — medium, 2018-11-14
- [Set in Stone](education\medium--set-in-stone-7ebc9d31500e.md) — medium, 2018-11-15
- [Taking care of Business.](education\medium--taking-care-of-business-63430b62be2f.md) — medium, 2018-11-18
- [Commodity and security](education\medium--commodity-and-security-4fa134c99f14.md) — medium, 2018-11-19
- [Bitcoin is for Business](education\medium--bitcoin-is-for-business-168b683b51c7.md) — medium, 2018-11-20
- [Valuing systems — the margin of substitute goods.](education\medium--valuing-systems-the-margin-of-substitute-goods-891b47fe381e.md) — medium, 2018-11-25
- [Bitcoin is a commodity](education\medium--bitcoin-is-a-commodity-1635dfca32fd.md) — medium, 2018-12-12
- [Currency](education\medium--currency-e725723340c3.md) — medium, 2018-12-19
- [The start of Metanet](education\medium--the-start-of-metanet-ef0560e81505.md) — medium, 2019-02-14
- [Lessons in monetary terms](education\medium--lessons-in-monetary-terms-5e1493e0d197.md) — medium, 2019-02-25
- [Statist](education\medium--statist-9fba301c0a08.md) — medium, 2019-02-27
- [The labour fallacy of mining](education\medium--the-labour-fallacy-of-mining-c2c0f919784.md) — medium, 2019-03-07
- [Peer-to-peer digital electronic cash](education\medium--peer-to-peer-digital-electronic-cash-369bb306028b.md) — medium, 2019-03-22
- [Decentralised planning](education\medium--decentralised-planning-c781f37d9342.md) — medium, 2019-04-03
- [Satoshi Nakamoto](education\medium--satoshi-nakamoto-a7c4cf21253e.md) — medium, 2019-04-05
- [Bit Gold Is Not BitCoin](education\medium--bit-gold-is-not-bitcoin-cea96eac20c9.md) — medium, 2019-04-08
- [Bitcoin is not against banks](education\medium--bitcoin-is-not-against-banks-fffb7b633fb0.md) — medium, 2019-04-14
- [The wheel of time is not on an axis](education\medium--the-wheel-of-time-is-not-on-an-axis-ccefa8963f6.md) — medium, 2019-04-27
- [Crypto flim-flam](education\medium--crypto-flim-flam-6b4ff367b634.md) — medium, 2019-05-13
- [Money is a measuring stick](education\medium--money-is-a-measuring-stick-6f5fe9cb8c9d.md) — medium, 2019-05-14
- [Monetary Law and Blockchains](education\medium--monetary-law-and-blockchains-edad5aadd009.md) — medium, 2019-06-12
- [Zeno’s Paradoxes and Bitcoin](education\medium--zenos-paradoxes-and-bitcoin-d96a0286ee7.md) — medium, 2019-07-26
- [Subsidised Growth](education\medium--subsidised-growth-3363ab447c89.md) — medium, 2019-07-29
- [Bitcoin Fights Corruption](education\medium--bitcoin-fights-corruption-5e5fd7c79123.md) — medium, 2019-10-23
- [Digital Gold](education\medium--digital-gold-d46b9493a17b.md) — medium, 2019-11-08
- [Transparency and Government](education\medium--transparency-and-government-69c7e8f59180.md) — medium, 2019-11-18
- [BitCoin system has 21 million BitCoin tokens.](education\medium--bitcoin-system-has-21-million-bitcoin-tokens-a9329f5c384.md) — medium, 2020-02-14
- [Money Is Time and Energy](education\medium--money-is-time-and-energy-2e558d611c51.md) — medium, 2020-05-05
- [Stablecoins and the Lost Spark](education\substack--stablecoins-and-the-lost-spark.md) — substack, 2025-06-19
- [“Where Your Treasure Is”: A Christian Denunciation of Hoarding, HODL Culture, and False Promises of Wealth Without Work](education\substack--where-your-treasure-is-a-christian.md) — substack, 2025-06-22
- [The Imperative of Scalable Blockchain for Global Commerce](education\substack--the-imperative-of-scalable-blockchain.md) — substack, 2025-06-26
- [The Future of Digital Currency: The Need for Global Competition in CBDCs and Stablecoins](education\substack--the-future-of-digital-currency-the.md) — substack, 2025-06-29
- [Micropayments, Immutable Data, and the Economic Revolution of Near-Zero Transaction Costs](education\substack--micropayments-immutable-data-and.md) — substack, 2025-07-25
- [Ghosts of Gold: Fractional Reserve Dynamics in the Age of BTC](education\substack--ghosts-of-gold-fractional-reserve.md) — substack, 2025-07-28
- [The Dawn of the Nano-Economy: New Frontiers Unlocked by Sub-Cent Micropayments](education\substack--the-dawn-of-the-nano-economy-new.md) — substack, 2025-07-29
- [Pennies and Power: How Micropayments Could Break the Corporate Siege](education\substack--pennies-and-power-how-micropayments.md) — substack, 2025-08-09
- [Stewardship in the Smallest Coin: Wesleyan Capitalism and the Moral Economy of Micropayments](education\substack--stewardship-in-the-smallest-coin.md) — substack, 2025-08-10
- [Digital Cash That Doesn’t Bleed: A 11,000-Transaction Micropayment Audit Across PayPal, Stripe, Visa, Mastercard, and BSV](education\substack--digital-cash-that-doesnt-bleed-a.md) — substack, 2025-08-25
- [The Necessity of the Stone: Protocol Finality, Political Intrusion, and the Integrity of Bitcoin](education\substack--the-necessity-of-the-stone-protocol.md) — substack, 2025-10-02
- [The Myth of the Bitcoin Standard: Debt, Delusion, and the Enduring Economics of State Spending](education\substack--the-myth-of-the-bitcoin-standard.md) — substack, 2025-11-05
- [The Mirage of the Bitcoin Standard: Fractional Reserve Finance in Digital Form](education\substack--the-mirage-of-the-bitcoin-standard.md) — substack, 2025-11-13
- [The Cult of Digital Metallurgy and the Poverty of Small Minds](education\substack--the-cult-of-digital-metallurgy-and.md) — substack, 2025-11-20
- [The Great Global Skim](education\substack--the-great-global-skim.md) — substack, 2025-11-21
- [The Cult of Digital Metallurgy and the Poverty of Small Minds](education\substack--the-cult-of-digital-metallurgy-and-35a.md) — substack, 2025-11-29
- [The Cult of Scarcity](education\substack--the-cult-of-scarcity.md) — substack, 2025-12-03
- [The Cult of Scarcity](education\substack--the-cult-of-scarcity-10d.md) — substack, 2025-12-08
- [The Nash Equilibrium in Digital Cash Systems](education\substack--the-nash-equilibrium-in-digital-cash.md) — substack, 2026-02-01
- [When the Prize Pays for the Protection](education\substack--when-the-prize-pays-for-the-protection.md) — substack, 2026-03-19
- [When Money Moves for Free, Who Gets Paid?](education\substack--when-money-moves-for-free-who-gets.md) — substack, 2026-03-23
- [Bitcoin Has a Population Problem — And We Can Prove It](education\substack--bitcoin-has-a-population-problem.md) — substack, 2026-03-25
- [Who Controls the Rules? Governance Credibility and the $109 Billion Question](education\substack--who-controls-the-rules-governance.md) — substack, 2026-03-27
- [Service, Stake, and the Curious Case of Misclassification](education\substack--service-stake-and-the-curious-case.md) — substack, 2026-04-13
- [When the Tollkeepers Disappear: The Consequences of Real Digital Cash](education\substack--when-the-tollkeepers-disappear-the.md) — substack, 2026-04-15
- [Consensus Is Not Governance](education\substack--consensus-is-not-governance.md) — substack, 2026-04-30
- [The Hold-Up Problem in Protocol Economies](education\substack--the-hold-up-problem-in-protocol-economies.md) — substack, 2026-05-01
- [The Economy Has Always Been Data](education\substack--the-economy-has-always-been-data.md) — substack, 2026-05-06
- [The Priesthood of Artificial Scarcity](education\substack--the-priesthood-of-artificial-scarcity.md) — substack, 2026-05-08
- [The Frightening Commerce of Free Persons](education\substack--the-frightening-commerce-of-free.md) — substack, 2026-05-16
- [The Dangerous Thing Is Not Bitcoin, but Utility](education\substack--the-dangerous-thing-is-not-bitcoin.md) — substack, 2026-05-16
- [The Toll Booth Economy](education\substack--the-toll-booth-economy.md) — substack, 2026-05-17
- [Five Transactions a Second, and Other Discourtesies to Commerce](education\substack--five-transactions-a-second-and-other.md) — substack, 2026-05-19
- [The Immutable Stock and the Unbounded Flow](education\substack--the-immutable-stock-and-the-unbounded.md) — substack, 2026-05-28
- [The Integer and the Idol](education\substack--the-integer-and-the-idol.md) — substack, 2026-05-31
- [Who Shall Keep the Keys?](education\substack--who-shall-keep-the-keys.md) — substack, 2026-06-03
- [The Beast at the Door](education\substack--the-beast-at-the-door.md) — substack, 2026-06-06
- [The Scoreboard Is Not the Game: Money, Measurement, and the Collapse of Monetary Understanding](education\substack--the-scoreboard-is-not-the-game-money.md) — substack, 2026-06-07
- [A Pretty Curve Is Not an Economic Theory](education\substack--a-pretty-curve-is-not-an-economic.md) — substack, 2026-06-07
- [You Cannot Hoard Your Way to Money](education\substack--you-cannot-hoard-your-way-to-money.md) — substack, 2026-06-09
- [The Arithmetic of the Last Fool](education\substack--the-arithmetic-of-the-last-fool.md) — substack, 2026-06-12
- [Settlement Speed Is the Wrong Margin](education\substack--settlement-speed-is-the-wrong-margin.md) — substack, 2026-06-14
- [The Law of Controlled Amnesia](education\substack--the-law-of-controlled-amnesia.md) — substack, 2026-06-29
- [The Asset the Law Gave Up On](education\substack--the-asset-the-law-gave-up-on.md) — substack, 2026-07-03
- [The Dial That Used to Be Fixed](education\substack--the-dial-that-used-to-be-fixed.md) — substack, 2026-07-04
- [The Number That Moved by Standing Still](education\substack--the-number-that-moved-by-standing.md) — substack, 2026-07-05
- [Nobody Asks Where Your Banknote Has Been ](education\substack--nobody-asks-where-your-banknote-has.md) — substack, 2026-07-06
- [Post-Quantum Digital Cash](education\substack--post-quantum-digital-cash.md) — substack, 2026-07-12
- [The Asset That Pays Rent to Exist](education\substack--the-asset-that-pays-rent-to-exist.md) — substack, 2026-07-25
- [The Defence That Halves](education\substack--the-defence-that-halves.md) — substack, 2026-07-26
- [Bitcoin After the Casino](education\substack--bitcoin-after-the-casino.md) — substack, 2026-08-02

### mining-consensus (103)

- [Iron and Steel](education\medium--iron-and-steel-f4898687f6b0.md) — medium, 2018-06-09
- [Money Must First Be Stable](education\medium--money-must-first-be-stable-a44fbe7574c7.md) — medium, 2018-08-14
- [The cult of Decentralisation](education\medium--the-cult-of-decentralisation-b62a1445dbf0.md) — medium, 2018-08-16
- [Vampire Securities from beyond the Wormhole](education\medium--vampire-securities-from-beyond-the-wormhole-8c4e691c809e.md) — medium, 2018-09-06
- [The Gamma Monstrosity & the Probability Deception](education\medium--the-gamma-monstrosity-the-probability-deception-5e5003c4e657.md) — medium, 2018-09-08
- [Keynesian flaws.](education\medium--keynesian-flaws-33ce9332d1f0.md) — medium, 2018-09-14
- [Q&A/Written Interview — The answers — Part 3](education\medium--q-a-written-interview-the-answers-part-3-71116e036958.md) — medium, 2018-09-18
- [Q&A/Written Interview — The answers — Part 4](education\medium--q-a-written-interview-the-answers-part-4-d6bfed8c4261.md) — medium, 2018-09-19
- [I shall continue answering in order.](education\medium--i-shall-continue-answering-in-order-eae445cba4bf.md) — medium, 2018-09-20
- [The postal acceptance rule in Bitcoin](education\medium--the-postal-acceptance-rule-in-bitcoin-e1c38ff9a4a9.md) — medium, 2018-09-27
- [What is Bitcoin….](education\medium--what-is-bitcoin-8ee9d3e86674.md) — medium, 2018-10-12
- [Phases of the Bitcoin system](education\medium--phases-of-the-bitcoin-system-eb5531a711b4.md) — medium, 2018-10-20
- [Taxing Bitcoin — GST implications of Bitcoin as money](education\medium--taxing-bitcoin-gst-implications-of-bitcoin-as-money-7d3b4bfabb50.md) — medium, 2018-10-30
- [Property Law in the Age of Bitcoin](education\medium--property-law-in-the-age-of-bitcoin-28355604618f.md) — medium, 2018-10-31
- [Bitcoin is all about incentives](education\medium--bitcoin-is-all-about-incentives-72894518f6b5.md) — medium, 2018-11-06
- [Drugs, Fraud and Murder](education\medium--drugs-fraud-and-murder-ddf12208ae8b.md) — medium, 2018-11-06
- [Rent seeking in economics and Crypto](education\medium--rent-seeking-in-economics-and-crypto-344e3d54bd81.md) — medium, 2018-11-07
- [Fixing OP_Fals](education\medium--fixing-op-fals-fd157899d2b7.md) — medium, 2018-11-08
- [Corporate Activism](education\medium--corporate-activism-1b34eece57f3.md) — medium, 2018-11-10
- [Sustaining Hash](education\medium--sustaining-hash-50cad6c16c4b.md) — medium, 2018-11-13
- [Building Data](education\medium--building-data-84e2501cf71b.md) — medium, 2018-11-13
- [Proof of State, or, the new Fed](education\medium--proof-of-state-or-the-new-fed-41ae1a117093.md) — medium, 2018-11-14
- [Miners and Property rights](education\medium--miners-and-property-rights-a7c5a01252e2.md) — medium, 2018-11-14
- [Commodity and security](education\medium--commodity-and-security-4fa134c99f14.md) — medium, 2018-11-19
- [Subsidised ledgers](education\medium--subsidised-ledgers-193a5b490fe.md) — medium, 2018-11-23
- [Valuing systems — the margin of substitute goods.](education\medium--valuing-systems-the-margin-of-substitute-goods-891b47fe381e.md) — medium, 2018-11-25
- [Why I troll](education\medium--why-i-troll-5304f2cbbfc3.md) — medium, 2018-11-26
- [Currency](education\medium--currency-e725723340c3.md) — medium, 2018-12-19
- [The myth of the full validation node](education\medium--the-myth-of-the-full-validation-node-d7db52748649.md) — medium, 2018-12-21
- [Miners and rational expectations](education\medium--miners-and-rational-expectations-170d71ac23ee.md) — medium, 2018-12-29
- [The ASIC myth](education\medium--the-asic-myth-583aefbecce3.md) — medium, 2019-01-16
- [The false lure of anonymity](education\medium--the-false-lure-of-anonymity-110a35088979.md) — medium, 2019-02-12
- [The great mining swindle](education\medium--the-great-mining-swindle-2dec8ffa819d.md) — medium, 2019-02-18
- [Proof of (unregistered) security](education\medium--proof-of-unregistered-security-798f4df2fbb9.md) — medium, 2019-03-04
- [The myth of forks](education\medium--the-myth-of-forks-be04f8e5fe4a.md) — medium, 2019-03-06
- [The labour fallacy of mining](education\medium--the-labour-fallacy-of-mining-c2c0f919784.md) — medium, 2019-03-07
- [Forks as a demerger, or a split as a copy?](education\medium--forks-as-a-demerger-or-a-split-as-a-copy-c38bf6d8abed.md) — medium, 2019-03-20
- [Welcome to science](education\medium--welcome-to-science-c5e33a827449.md) — medium, 2019-03-30
- [Bit Gold Is Not BitCoin](education\medium--bit-gold-is-not-bitcoin-cea96eac20c9.md) — medium, 2019-04-08
- [From simplicity comes …](education\medium--from-simplicity-comes-1a19f9a85747.md) — medium, 2019-04-09
- [BTC and Censorship](education\medium--btc-and-censorship-410265a8a4a2.md) — medium, 2019-04-15
- [Decentralised or just inefficient?](education\medium--decentralised-or-just-inefficient-1eefecec03ff.md) — medium, 2019-04-26
- [The puzzle of the double hash](education\medium--the-puzzle-of-the-double-hash-968196edb06d.md) — medium, 2019-04-30
- [Economic Security](education\medium--economic-security-d43518f47fd2.md) — medium, 2019-05-22
- [Reversing Illicit Transactions on Bitcoin Is Simple](education\medium--reversing-illicit-transactions-on-bitcoin-is-simple-71a99cf14ec3.md) — medium, 2019-07-24
- [Zeno’s Paradoxes and Bitcoin](education\medium--zenos-paradoxes-and-bitcoin-d96a0286ee7.md) — medium, 2019-07-26
- [Subsidised Growth](education\medium--subsidised-growth-3363ab447c89.md) — medium, 2019-07-29
- [Why Law Matters](education\medium--why-law-matters-db0e32492d05.md) — medium, 2019-08-02
- [Good Title Is Not a Key](education\medium--good-title-is-not-a-key-7342b6327f.md) — medium, 2019-08-23
- [Rights and Tracing](education\medium--rights-and-tracing-603bee35c584.md) — medium, 2019-09-06
- [Satoshi; or, The Solution to Nakamoto’s Dilemma](education\medium--satoshi-or-the-solution-to-nakamotos-dilemma-22829108ee46.md) — medium, 2019-09-28
- [Simplified Payment Verification](education\medium--simplified-payment-verification-4a260d272a38.md) — medium, 2019-10-09
- [Proof of Assignment](education\medium--proof-of-assignment-50a36de081c7.md) — medium, 2019-11-13
- [Mistakes Also Come when You Listen to Others…](education\medium--mistakes-also-come-when-you-listen-to-others-fd2838fab578.md) — medium, 2020-01-15
- [Ledgers and Design](education\medium--ledgers-and-design-22f9f2eaacc0.md) — medium, 2020-03-18
- [Satoshi and the Byzantine Generals](education\medium--satoshi-and-the-byzantine-generals-6804bb6629b7.md) — medium, 2020-03-24
- [The History of Freezing in Bitcoin](education\medium--the-history-of-freezing-in-bitcoin-13f0cf1a89d9.md) — medium, 2020-04-23
- [Summary of “The Redundancy of Full Nodes in Bitcoin: A Network-Theoretic Demonstration of Miner-Centric Propagation Topologies” ](education\substack--summary-of-the-redundancy-of-full.md) — substack, 2025-06-18
- [Safe Low Bandwidth SPV: A Formal Treatment of Simplified Payment Verification Protocols and Security Bounds ](education\substack--safe-low-bandwidth-spv-a-formal-treatment.md) — substack, 2025-07-01
- [A formal rebuttal of "The Blockchain Trilemma: A Formal Proof of the Inherent Trade-Offs Among Decentralization, Security, and Scalability" by Souhail Mssassi and Anas Abou El Kalam.](education\substack--a-formal-rebuttal-of-the-blockchain.md) — substack, 2025-07-09
- [A Mechanism of Honour - Ledger of Blood and Electricity](education\substack--a-mechanism-of-honour-ledger-of-blood.md) — substack, 2025-07-30
- [Multicast as the Only Viable Architecture for Billion-Transaction Networks](education\substack--multicast-as-the-only-viable-architecture.md) — substack, 2025-08-18
- [Multicast Within Multicast: Anycast, Sharded Resends, and Hierarchical Distribution for Transaction and Block Propagation](education\substack--multicast-within-multicast-anycast.md) — substack, 2025-08-20
- [Double-Spend Assurance without Blocks: Designing Miner-Signed Proofs and Spentness Commitments in a Header-Only System](education\substack--double-spend-assurance-without-blocks.md) — substack, 2025-09-07
- [The Lifeline of Wires: Why Digital Cash Dies Without the Net](education\substack--the-lifeline-of-wires-why-digital.md) — substack, 2025-10-04
- [The Quiet Violence of Sunday: Notes on Protocol Capture, Manufactured Ignorance, and the Cult of BTC-Core](education\substack--the-quiet-violence-of-sunday-notes.md) — substack, 2025-11-16
- [When Five TPS Becomes a Sacred Bull](education\substack--when-five-tps-becomes-a-sacred-bull.md) — substack, 2025-11-18
- [Concentration Is Not Centralisation](education\substack--concentration-is-not-centralisation.md) — substack, 2025-12-04
- [Protocol as Offer](education\substack--protocol-as-offer.md) — substack, 2026-01-24
- [The Nash Equilibrium in Digital Cash Systems](education\substack--the-nash-equilibrium-in-digital-cash.md) — substack, 2026-02-01
- [Why Bitcoin Miners Form Companies: What Blockchain Teaches Us About the Nature of Firms](education\substack--why-bitcoin-miners-form-companies.md) — substack, 2026-02-12
- [The Return of the Bearer Share](education\substack--the-return-of-the-bearer-share.md) — substack, 2026-03-07
- [The Memory That Mining Forgot ](education\substack--the-memory-that-mining-forgot.md) — substack, 2026-03-08
- [Markov, Not Memoryless](education\substack--markov-not-memoryless.md) — substack, 2026-03-09
- [Hash Power and the Limits of Law](education\substack--hash-power-and-the-limits-of-law.md) — substack, 2026-03-13
- [The Law Already Inside Bitcoin](education\substack--the-law-already-inside-bitcoin.md) — substack, 2026-03-17
- [When the Prize Pays for the Protection](education\substack--when-the-prize-pays-for-the-protection.md) — substack, 2026-03-19
- [Why Transaction Throughput Determines How Long Bitcoin’s Security Model Holds](education\substack--why-transaction-throughput-determines.md) — substack, 2026-03-20
- [Verification Without Enforcement Is Observation, Not Security](education\substack--verification-without-enforcement.md) — substack, 2026-03-24
- [Bitcoin Has a Population Problem — And We Can Prove It](education\substack--bitcoin-has-a-population-problem.md) — substack, 2026-03-25
- [Service, Stake, and the Curious Case of Misclassification](education\substack--service-stake-and-the-curious-case.md) — substack, 2026-04-13
- [Time Is Not Consensus](education\substack--time-is-not-consensus.md) — substack, 2026-04-14
- [Authority Without Command: The Alert Key, Coordination, and the System That Might Have Been](education\substack--authority-without-command-the-alert.md) — substack, 2026-04-17
- [The Drivechain Mechanism Was Already Patented](education\substack--the-drivechain-mechanism-was-already.md) — substack, 2026-04-25
- [Why Hash Power Is Not Security](education\substack--why-hash-power-is-not-security.md) — substack, 2026-05-02
- [Effective Decentralisation Is the Minimum, Not the Average](education\substack--effective-decentralisation-is-the.md) — substack, 2026-05-03
- [Who Actually Decides](education\substack--who-actually-decides.md) — substack, 2026-05-04
- [The Myth of the Sovereign Node](education\substack--the-myth-of-the-sovereign-node.md) — substack, 2026-05-07
- [SegWit2x as Market Coordination Around Incentives](education\substack--segwit2x-as-market-coordination-around.md) — substack, 2026-05-08
- [The Home Node That Never Validates](education\substack--the-home-node-that-never-validates.md) — substack, 2026-05-10
- [Small Worlds, Large Errors](education\substack--small-worlds-large-errors.md) — substack, 2026-05-11
- [The Two Tiers Are a Market, Not a Cage ](education\substack--the-two-tiers-are-a-market-not-a.md) — substack, 2026-05-12
- [Verification Without Enforcement](education\substack--verification-without-enforcement-8b2.md) — substack, 2026-05-18
- [The Miner Is Not a Monarch](education\substack--the-miner-is-not-a-monarch.md) — substack, 2026-05-20
- [Who Actually Controls a Blockchain? An Economist’s Map of the Power Structure](education\substack--who-actually-controls-a-blockchain.md) — substack, 2026-05-21
- [Decentralization Deserves a Number](education\substack--decentralization-deserves-a-number.md) — substack, 2026-05-25
- [Digital Money Is a Network Problem Before It Is a Monetary Slogan](education\substack--digital-money-is-a-network-problem.md) — substack, 2026-05-27
- [Zero-Confirmation and the Cult of the Spectator](education\substack--zero-confirmation-and-the-cult-of.md) — substack, 2026-06-07
- [The Lawless Blockchain Is a Story We Tell for Small Change](education\substack--the-lawless-blockchain-is-a-story.md) — substack, 2026-06-15
- [What the Protocol Remembers](education\substack--what-the-protocol-remembers.md) — substack, 2026-06-16
- [The Decentralisation Threshold: When More Validators Reduce Net Security](education\substack--the-decentralisation-threshold-when.md) — substack, 2026-07-06
- [What Is Proof?](education\substack--what-is-proof.md) — substack, 2026-07-11
- [When Every Block Counts, Except the Ones That Don’t](education\substack--when-every-block-counts-except-the.md) — substack, 2026-08-01

### governance-decentralisation (93)

- [The cult of Decentralisation](education\medium--the-cult-of-decentralisation-b62a1445dbf0.md) — medium, 2018-08-16
- [Why Scaling on-Chain Works](education\medium--why-scaling-on-chain-works-5b78d6abb3c7.md) — medium, 2018-09-08
- [The 1937 Crash](education\medium--the-1937-crash-c9ab5c3f5521.md) — medium, 2018-09-13
- [Keynesian flaws.](education\medium--keynesian-flaws-33ce9332d1f0.md) — medium, 2018-09-14
- [Equality](education\medium--equality-9948207d20e.md) — medium, 2018-09-15
- [IoT and the coming Toaster-world](education\medium--iot-and-the-coming-toaster-world-654edcdb977.md) — medium, 2018-09-19
- [I shall continue answering in order.](education\medium--i-shall-continue-answering-in-order-eae445cba4bf.md) — medium, 2018-09-20
- [Bitcoin as a Notary](education\medium--bitcoin-as-a-notary-d260589fcd06.md) — medium, 2018-10-01
- [Hidden costs](education\medium--hidden-costs-8afaab3d9b1b.md) — medium, 2018-10-06
- [Blockchain-Based Decentralised Autonomous Corporations: An Overview](education\medium--blockchain-based-decentralised-autonomous-corporations-an-overview-5dc0d469fcb5.md) — medium, 2018-10-17
- [Myths of permission-less](education\medium--myths-of-permission-less-d39b4af7ad9d.md) — medium, 2018-10-28
- [The scams in Crypto](education\medium--the-scams-in-crypto-376e327df2af.md) — medium, 2018-10-30
- [Bitcoin is all about incentives](education\medium--bitcoin-is-all-about-incentives-72894518f6b5.md) — medium, 2018-11-06
- [Drugs, Fraud and Murder](education\medium--drugs-fraud-and-murder-ddf12208ae8b.md) — medium, 2018-11-06
- [Rent seeking in economics and Crypto](education\medium--rent-seeking-in-economics-and-crypto-344e3d54bd81.md) — medium, 2018-11-07
- [Sun-setting P2SH](education\medium--sun-setting-p2sh-8b3c08f271c0.md) — medium, 2018-11-08
- [Bitcoin is not Anti State — it is Pro Honest government](education\medium--bitcoin-is-not-anti-state-it-is-pro-honest-government-1ab1ec0a9fba.md) — medium, 2018-11-09
- [Corporate Activism](education\medium--corporate-activism-1b34eece57f3.md) — medium, 2018-11-10
- [Sustaining Hash](education\medium--sustaining-hash-50cad6c16c4b.md) — medium, 2018-11-13
- [Proof of State, or, the new Fed](education\medium--proof-of-state-or-the-new-fed-41ae1a117093.md) — medium, 2018-11-14
- [Miners and Property rights](education\medium--miners-and-property-rights-a7c5a01252e2.md) — medium, 2018-11-14
- [Set in Stone](education\medium--set-in-stone-7ebc9d31500e.md) — medium, 2018-11-15
- [Present Liability Schemes and Sanctions](education\medium--present-liability-schemes-and-sanctions-944888a00c6b.md) — medium, 2018-11-16
- [A house divided](education\medium--a-house-divided-ebdea8f4d655.md) — medium, 2018-11-24
- [The lie of anarchy](education\medium--the-lie-of-anarchy-bd7c1f239289.md) — medium, 2018-12-13
- [The false lure of anonymity](education\medium--the-false-lure-of-anonymity-110a35088979.md) — medium, 2019-02-12
- [Statist](education\medium--statist-9fba301c0a08.md) — medium, 2019-02-27
- [Proof of (unregistered) security](education\medium--proof-of-unregistered-security-798f4df2fbb9.md) — medium, 2019-03-04
- [Forks as a demerger, or a split as a copy?](education\medium--forks-as-a-demerger-or-a-split-as-a-copy-c38bf6d8abed.md) — medium, 2019-03-20
- [Why the protocol is set](education\medium--why-the-protocol-is-set-7db4f764c97c.md) — medium, 2019-03-28
- [Decentralised planning](education\medium--decentralised-planning-c781f37d9342.md) — medium, 2019-04-03
- [Decentralised or just inefficient?](education\medium--decentralised-or-just-inefficient-1eefecec03ff.md) — medium, 2019-04-26
- [Shades of Black…](education\medium--shades-of-black-5f269ff97cde.md) — medium, 2019-05-24
- [Reversing Illicit Transactions on Bitcoin Is Simple](education\medium--reversing-illicit-transactions-on-bitcoin-is-simple-71a99cf14ec3.md) — medium, 2019-07-24
- [Why Law Matters](education\medium--why-law-matters-db0e32492d05.md) — medium, 2019-08-02
- [Rights and Tracing](education\medium--rights-and-tracing-603bee35c584.md) — medium, 2019-09-06
- [Taxing Times…](education\medium--taxing-times-3cd2067fab8d.md) — medium, 2019-10-15
- [Transparency and Government](education\medium--transparency-and-government-69c7e8f59180.md) — medium, 2019-11-18
- [Mistakes Also Come when You Listen to Others…](education\medium--mistakes-also-come-when-you-listen-to-others-fd2838fab578.md) — medium, 2020-01-15
- [Myths of Decentralisation…](education\medium--myths-of-decentralisation-761c713ab2cd.md) — medium, 2020-02-06
- [The High Priests of “crypto” and the dogma wars](education\medium--the-high-priests-of-crypto-and-the-dogma-wars-100b56771c9e.md) — medium, 2020-02-22
- [On Decentralisation](education\medium--on-decentralisation-e761949d7e5c.md) — medium, 2020-02-24
- [Satoshi and the Byzantine Generals](education\medium--satoshi-and-the-byzantine-generals-6804bb6629b7.md) — medium, 2020-03-24
- [The History of Freezing in Bitcoin](education\medium--the-history-of-freezing-in-bitcoin-13f0cf1a89d9.md) — medium, 2020-04-23
- [Re: Moxie on Web3](education\medium--re-moxie-on-web3-b0cfccd68067.md) — medium, 2022-01-08
- [Summary of “The Redundancy of Full Nodes in Bitcoin: A Network-Theoretic Demonstration of Miner-Centric Propagation Topologies” ](education\substack--summary-of-the-redundancy-of-full.md) — substack, 2025-06-18
- [The Collapse of the Blockchain Trilemma: A Formal Analysis through Baran’s Topology and Automata Logic](education\substack--the-collapse-of-the-blockchain-trilemma.md) — substack, 2025-07-07
- [A formal rebuttal of "The Blockchain Trilemma: A Formal Proof of the Inherent Trade-Offs Among Decentralization, Security, and Scalability" by Souhail Mssassi and Anas Abou El Kalam.](education\substack--a-formal-rebuttal-of-the-blockchain.md) — substack, 2025-07-09
- [Why Secure Blockchain Voting is So Hard: A Deep Dive into True Anonymity, ECDSA Blinding, and the Myths of Digital Democracy](education\substack--why-secure-blockchain-voting-is-so.md) — substack, 2025-07-31
- [Mechanised Myths: Control, Compliance, and the Dystopian Present](education\substack--mechanised-myths-control-compliance.md) — substack, 2025-08-05
- [Definitional Corruption and the Erosion of Truth: A Wittgensteinian Analysis of BTC Debates](education\substack--definitional-corruption-and-the-erosion.md) — substack, 2025-09-25
- [The Failure of BTC Core’s Changes: A Case Study in Protocol Capture and Manipulation](education\substack--the-failure-of-btc-cores-changes.md) — substack, 2025-09-26
- [The Necessity of the Stone: Protocol Finality, Political Intrusion, and the Integrity of Bitcoin](education\substack--the-necessity-of-the-stone-protocol.md) — substack, 2025-10-02
- [Quantum Illusions: The False Promise of Quantum Threats and the Manipulation of Cryptographic Fear](education\substack--quantum-illusions-the-false-promise.md) — substack, 2025-10-16
- [The Myth of the Bitcoin Standard: Debt, Delusion, and the Enduring Economics of State Spending](education\substack--the-myth-of-the-bitcoin-standard.md) — substack, 2025-11-05
- [The Geometry of Freedom: Why Bitcoin Must Scale or Die](education\substack--the-geometry-of-freedom-why-bitcoin.md) — substack, 2025-11-11
- [The Cult of Scarcity](education\substack--the-cult-of-scarcity.md) — substack, 2025-12-03
- [Concentration Is Not Centralisation](education\substack--concentration-is-not-centralisation.md) — substack, 2025-12-04
- [Accountability Follows Control: English Private Law and the Governance of Bitcoin](education\substack--accountability-follows-control-english.md) — substack, 2026-01-12
- [Why Bitcoin Miners Form Companies: What Blockchain Teaches Us About the Nature of Firms](education\substack--why-bitcoin-miners-form-companies.md) — substack, 2026-02-12
- [Your Property Rights Don’t Exist Without a State — And That’s Not a Moral Claim](education\substack--your-property-rights-dont-exist-without.md) — substack, 2026-02-13
- [The Return of the Bearer Share](education\substack--the-return-of-the-bearer-share.md) — substack, 2026-03-07
- [Who Controls the Rules When Nobody Controls All of Them?](education\substack--who-controls-the-rules-when-nobody.md) — substack, 2026-03-14
- [The Oldest New Problem in Finance: Proof of Stake and the Return of the Bearer Share](education\substack--the-oldest-new-problem-in-finance.md) — substack, 2026-03-16
- [The Bearer Share Is Dead. Long Live Proof of Stake.](education\substack--the-bearer-share-is-dead-long-live.md) — substack, 2026-03-18
- [When Money Moves for Free, Who Gets Paid?](education\substack--when-money-moves-for-free-who-gets.md) — substack, 2026-03-23
- [Who Controls the Rules? Governance Credibility and the $109 Billion Question](education\substack--who-controls-the-rules-governance.md) — substack, 2026-03-27
- [Transparency Is Not Centralisation: NAR, DAR, and the Legal Architecture of Blockchain Governance](education\substack--transparency-is-not-centralisation.md) — substack, 2026-04-11
- [Authority Without Command: The Alert Key, Coordination, and the System That Might Have Been](education\substack--authority-without-command-the-alert.md) — substack, 2026-04-17
- [What Siggi Built](education\substack--what-siggi-built.md) — substack, 2026-04-22
- [The Drivechain Mechanism Was Already Patented](education\substack--the-drivechain-mechanism-was-already.md) — substack, 2026-04-25
- [The Geography of Discretion](education\substack--the-geography-of-discretion.md) — substack, 2026-04-29
- [Consensus Is Not Governance](education\substack--consensus-is-not-governance.md) — substack, 2026-04-30
- [The Hold-Up Problem in Protocol Economies](education\substack--the-hold-up-problem-in-protocol-economies.md) — substack, 2026-05-01
- [Why Hash Power Is Not Security](education\substack--why-hash-power-is-not-security.md) — substack, 2026-05-02
- [Effective Decentralisation Is the Minimum, Not the Average](education\substack--effective-decentralisation-is-the.md) — substack, 2026-05-03
- [Who Actually Decides](education\substack--who-actually-decides.md) — substack, 2026-05-04
- [What TCP/IP Got Right](education\substack--what-tcpip-got-right.md) — substack, 2026-05-05
- [SegWit2x as Market Coordination Around Incentives](education\substack--segwit2x-as-market-coordination-around.md) — substack, 2026-05-08
- [The Home Node That Never Validates](education\substack--the-home-node-that-never-validates.md) — substack, 2026-05-10
- [Verification Without Enforcement](education\substack--verification-without-enforcement-8b2.md) — substack, 2026-05-18
- [The Miner Is Not a Monarch](education\substack--the-miner-is-not-a-monarch.md) — substack, 2026-05-20
- [Who Actually Controls a Blockchain? An Economist’s Map of the Power Structure](education\substack--who-actually-controls-a-blockchain.md) — substack, 2026-05-21
- [Decentralization Deserves a Number](education\substack--decentralization-deserves-a-number.md) — substack, 2026-05-25
- [The Abolition of the Dealer](education\substack--the-abolition-of-the-dealer.md) — substack, 2026-06-02
- [Who Shall Keep the Keys?](education\substack--who-shall-keep-the-keys.md) — substack, 2026-06-03
- [The Scoreboard Is Not the Game: Money, Measurement, and the Collapse of Monetary Understanding](education\substack--the-scoreboard-is-not-the-game-money.md) — substack, 2026-06-07
- [Zero-Confirmation and the Cult of the Spectator](education\substack--zero-confirmation-and-the-cult-of.md) — substack, 2026-06-07
- [The Decentralisation Threshold: When More Validators Reduce Net Security](education\substack--the-decentralisation-threshold-when.md) — substack, 2026-07-06
- [The Cost of Permission](education\substack--the-cost-of-permission.md) — substack, 2026-07-27
- [Set in Stone](education\substack--set-in-stone.md) — substack, 2026-07-28
- [Five Times Versus Twenty Per Cent](education\substack--five-times-versus-twenty-per-cent.md) — substack, 2026-07-29
- [The Price of Being in the Room](education\substack--the-price-of-being-in-the-room.md) — substack, 2026-07-31

### security-economics (92)

- [Iron and Steel](education\medium--iron-and-steel-f4898687f6b0.md) — medium, 2018-06-09
- [Worm-a-nomics](education\medium--worm-a-nomics-e8d59107f6d0.md) — medium, 2018-09-07
- [The Gamma Monstrosity & the Probability Deception](education\medium--the-gamma-monstrosity-the-probability-deception-5e5003c4e657.md) — medium, 2018-09-08
- [Stable by design](education\medium--stable-by-design-e967b93dc147.md) — medium, 2018-09-10
- [Trust and Risk](education\medium--trust-and-risk-45d42d853693.md) — medium, 2018-09-11
- [Dynamic disequilibria and the creation of criminal opportunity](education\medium--dynamic-disequilibria-and-the-creation-of-criminal-opportunity-255e98f59266.md) — medium, 2018-09-18
- [Simplicity in Bitcoin](education\medium--simplicity-in-bitcoin-1d4bcc6ce0c2.md) — medium, 2018-09-25
- [Why is Bitcoin Open Source?](education\medium--why-is-bitcoin-open-source-196273d1712b.md) — medium, 2018-09-26
- [Security in a world of IPv6 and Bitcoin](education\medium--security-in-a-world-of-ipv6-and-bitcoin-a31592b4f9ac.md) — medium, 2018-10-03
- [The infinite money fallacy](education\medium--the-infinite-money-fallacy-3c7a541a2977.md) — medium, 2018-10-04
- [Trust in Smart Contracts](education\medium--trust-in-smart-contracts-28f99f23d7e8.md) — medium, 2018-10-07
- [Security](education\medium--security-5926122babf9.md) — medium, 2018-10-08
- [Bitcoin (BCH) Vending machine](education\medium--bitcoin-bch-vending-machine-600666d669d0.md) — medium, 2018-10-10
- [A distribution protocol for dealer-less secret distribution](education\medium--a-distribution-protocol-for-dealer-less-secret-distribution-60b61a97da10.md) — medium, 2018-10-17
- [Neural Network Threshold Oracles](education\medium--neural-network-threshold-oracles-92497c2f245c.md) — medium, 2018-10-26
- [A Bitcoin Smart Risk Contract](education\medium--a-bitcoin-smart-risk-contract-6ff2ac8dd93d.md) — medium, 2018-10-30
- [Bitcoin as the Base layer](education\medium--bitcoin-as-the-base-layer-cff28c5dab9c.md) — medium, 2018-11-01
- [The Secure (Bitcoin) Internet](education\medium--the-secure-bitcoin-internet-2f589d81890f.md) — medium, 2018-11-03
- [Coin burning for dummies](education\medium--coin-burning-for-dummies-baa3cd14f915.md) — medium, 2018-11-04
- [Prevention is the key](education\medium--prevention-is-the-key-5c74d098c53a.md) — medium, 2018-11-12
- [Sustaining Hash](education\medium--sustaining-hash-50cad6c16c4b.md) — medium, 2018-11-13
- [The hardware wallet in a phone](education\medium--the-hardware-wallet-in-a-phone-a2fbbcf03a74.md) — medium, 2018-11-15
- [Subsidised ledgers](education\medium--subsidised-ledgers-193a5b490fe.md) — medium, 2018-11-23
- [Why I troll](education\medium--why-i-troll-5304f2cbbfc3.md) — medium, 2018-11-26
- [Instant transactions](education\medium--instant-transactions-a11f391fbd57.md) — medium, 2018-12-09
- [Private blockchains are a matter of economic forces](education\medium--private-blockchains-are-a-matter-of-economic-forces-9b41c18e2a84.md) — medium, 2018-12-18
- [Miners and rational expectations](education\medium--miners-and-rational-expectations-170d71ac23ee.md) — medium, 2018-12-29
- [Smart-card-based mobile wallets](education\medium--smart-card-based-mobile-wallets-9cb75595b71d.md) — medium, 2019-01-13
- [The ASIC myth](education\medium--the-asic-myth-583aefbecce3.md) — medium, 2019-01-16
- [Bitcoin and Quantum Computing](education\medium--bitcoin-and-quantum-computing-b6f048db01eb.md) — medium, 2019-01-23
- [Generic Thin Operating  System for Blockchain IOT Devices](education\medium--generic-thin-operating-system-for-blockchain-iot-devices-32e7abf22c0e.md) — medium, 2019-02-03
- [Secure wallet systems](education\medium--secure-wallet-systems-614af37aa7f.md) — medium, 2019-02-10
- [The start of Metanet](education\medium--the-start-of-metanet-ef0560e81505.md) — medium, 2019-02-14
- [Proof of (unregistered) security](education\medium--proof-of-unregistered-security-798f4df2fbb9.md) — medium, 2019-03-04
- [How to make a brain wallet](education\medium--how-to-make-a-brain-wallet-a8040b7c1993.md) — medium, 2019-03-27
- [Welcome to science](education\medium--welcome-to-science-c5e33a827449.md) — medium, 2019-03-30
- [Panopticrypt](education\medium--panopticrypt-ed6154e06b34.md) — medium, 2019-04-07
- [The “Perfect” Firewall…](education\medium--the-perfect-firewall-3d6971213a2b.md) — medium, 2019-04-20
- [Decentralised or just inefficient?](education\medium--decentralised-or-just-inefficient-1eefecec03ff.md) — medium, 2019-04-26
- [Institutional madness](education\medium--institutional-madness-6f4fade7b9fc.md) — medium, 2019-05-16
- [Economic Security](education\medium--economic-security-d43518f47fd2.md) — medium, 2019-05-22
- [PII in the Bitcoin World](education\medium--pii-in-the-bitcoin-world-4eb0416124b6.md) — medium, 2019-08-01
- [Open Source](education\medium--open-source-ed8e1066fbbd.md) — medium, 2020-01-24
- [Safe Low Bandwidth SPV: A Formal Treatment of Simplified Payment Verification Protocols and Security Bounds ](education\substack--safe-low-bandwidth-spv-a-formal-treatment.md) — substack, 2025-07-01
- [The Collapse of the Blockchain Trilemma: A Formal Analysis through Baran’s Topology and Automata Logic](education\substack--the-collapse-of-the-blockchain-trilemma.md) — substack, 2025-07-07
- [A formal rebuttal of "The Blockchain Trilemma: A Formal Proof of the Inherent Trade-Offs Among Decentralization, Security, and Scalability" by Souhail Mssassi and Anas Abou El Kalam.](education\substack--a-formal-rebuttal-of-the-blockchain.md) — substack, 2025-07-09
- [Double-Spend Assurance without Blocks: Designing Miner-Signed Proofs and Spentness Commitments in a Header-Only System](education\substack--double-spend-assurance-without-blocks.md) — substack, 2025-09-07
- [Quantum-Ineffective Bitcoin: A Script-Level, Hash-Anchored Defence Against Hypothetical Quantum Key Recovery](education\substack--quantum-ineffective-bitcoin-a-script.md) — substack, 2025-09-09
- [Quantum Illusions: The False Promise of Quantum Threats and the Manipulation of Cryptographic Fear](education\substack--quantum-illusions-the-false-promise.md) — substack, 2025-10-16
- [Lightning’s Velvet Manacles: Watchtowers, Custody, and the Quiet Return of Shadow Banking](education\substack--lightnings-velvet-manacles-watchtowers.md) — substack, 2025-11-12
- [The Cult of Scarcity](education\substack--the-cult-of-scarcity-10d.md) — substack, 2025-12-08
- [The Ledger and the Load-Bearers](education\substack--the-ledger-and-the-load-bearers.md) — substack, 2025-12-12
- [The Cult of the Full Node](education\substack--the-cult-of-the-full-node.md) — substack, 2025-12-15
- [The Nash Equilibrium in Digital Cash Systems](education\substack--the-nash-equilibrium-in-digital-cash.md) — substack, 2026-02-01
- [Why Bitcoin Miners Form Companies: What Blockchain Teaches Us About the Nature of Firms](education\substack--why-bitcoin-miners-form-companies.md) — substack, 2026-02-12
- [The Memory That Mining Forgot ](education\substack--the-memory-that-mining-forgot.md) — substack, 2026-03-08
- [Markov, Not Memoryless](education\substack--markov-not-memoryless.md) — substack, 2026-03-09
- [Hash Power and the Limits of Law](education\substack--hash-power-and-the-limits-of-law.md) — substack, 2026-03-13
- [Who Controls the Rules When Nobody Controls All of Them?](education\substack--who-controls-the-rules-when-nobody.md) — substack, 2026-03-14
- [The Law Already Inside Bitcoin](education\substack--the-law-already-inside-bitcoin.md) — substack, 2026-03-17
- [When the Prize Pays for the Protection](education\substack--when-the-prize-pays-for-the-protection.md) — substack, 2026-03-19
- [Why Transaction Throughput Determines How Long Bitcoin’s Security Model Holds](education\substack--why-transaction-throughput-determines.md) — substack, 2026-03-20
- [Bitcoin Has a Population Problem — And We Can Prove It](education\substack--bitcoin-has-a-population-problem.md) — substack, 2026-03-25
- [Bitcoin Does Not Use RSA — And the Quantum Machine That Would Attack It Does Not Exist](education\substack--bitcoin-does-not-use-rsa-and-the.md) — substack, 2026-04-10
- [Service, Stake, and the Curious Case of Misclassification](education\substack--service-stake-and-the-curious-case.md) — substack, 2026-04-13
- [Time Is Not Consensus](education\substack--time-is-not-consensus.md) — substack, 2026-04-14
- [Shuffling the Deck Without a Dealer](education\substack--shuffling-the-deck-without-a-dealer.md) — substack, 2026-04-23
- [The Sealed Envelope, Cryptographically Considered](education\substack--the-sealed-envelope-cryptographically.md) — substack, 2026-04-24
- [The Quantum Apocalypse Is Coming Any Decade Now, So Here Is the Solution to a Problem That Will Not Exist](education\substack--the-quantum-apocalypse-is-coming.md) — substack, 2026-04-27
- [Consensus Is Not Governance](education\substack--consensus-is-not-governance.md) — substack, 2026-04-30
- [Cold Authority: Constructing an Air-Gapped Bitcoin SV Wallet Using ElectrumSV](education\substack--cold-authority-constructing-an-air.md) — substack, 2026-05-01
- [The Hold-Up Problem in Protocol Economies](education\substack--the-hold-up-problem-in-protocol-economies.md) — substack, 2026-05-01
- [Why Hash Power Is Not Security](education\substack--why-hash-power-is-not-security.md) — substack, 2026-05-02
- [Effective Decentralisation Is the Minimum, Not the Average](education\substack--effective-decentralisation-is-the.md) — substack, 2026-05-03
- [The Home Node That Never Validates](education\substack--the-home-node-that-never-validates.md) — substack, 2026-05-10
- [Small Worlds, Large Errors](education\substack--small-worlds-large-errors.md) — substack, 2026-05-11
- [Censorship Resistance, Atomic Settlement, and the Limits of Coalition Power](education\substack--censorship-resistance-atomic-settlement.md) — substack, 2026-05-12
- [The Two Tiers Are a Market, Not a Cage ](education\substack--the-two-tiers-are-a-market-not-a.md) — substack, 2026-05-12
- [Who Reads the Meter? The Hidden Trust Problem Underneath Every Energy Market That Runs on a Blockchain](education\substack--who-reads-the-meter-the-hidden-trust.md) — substack, 2026-05-22
- [Decentralization Deserves a Number](education\substack--decentralization-deserves-a-number.md) — substack, 2026-05-25
- [The Abolition of the Free Copy](education\substack--the-abolition-of-the-free-copy.md) — substack, 2026-06-02
- [The body of the secret ](education\substack--the-body-of-the-secret.md) — substack, 2026-06-04
- [Zero-Confirmation and the Cult of the Spectator](education\substack--zero-confirmation-and-the-cult-of.md) — substack, 2026-06-07
- [The Lawless Blockchain Is a Story We Tell for Small Change](education\substack--the-lawless-blockchain-is-a-story.md) — substack, 2026-06-15
- [What the Protocol Remembers](education\substack--what-the-protocol-remembers.md) — substack, 2026-06-16
- [The Decentralisation Threshold: When More Validators Reduce Net Security](education\substack--the-decentralisation-threshold-when.md) — substack, 2026-07-06
- [What Is Proof?](education\substack--what-is-proof.md) — substack, 2026-07-11
- [Post-Quantum Digital Cash](education\substack--post-quantum-digital-cash.md) — substack, 2026-07-12
- [The Asset That Pays Rent to Exist](education\substack--the-asset-that-pays-rent-to-exist.md) — substack, 2026-07-25
- [The Defence That Halves](education\substack--the-defence-that-halves.md) — substack, 2026-07-26
- [When Every Block Counts, Except the Ones That Don’t](education\substack--when-every-block-counts-except-the.md) — substack, 2026-08-01
- [Digital Cash Is Not a Vault](education\substack--digital-cash-is-not-a-vault.md) — substack, 2026-08-12

### privacy (83)

- [The myths of Bitcoin](education\medium--the-myths-of-bitcoin-bf3664e9d767.md) — medium, 2018-08-14
- [The crypto-ring of Gyges](education\medium--the-crypto-ring-of-gyges-f4858a037827.md) — medium, 2018-09-02
- [Death and taxes, it is time to kill off mythical beasts](education\medium--death-and-taxes-it-is-time-to-kill-off-mythical-beasts-d7dc1dbaa615.md) — medium, 2018-09-04
- [Human rights and property](education\medium--human-rights-and-property-2cde4181c012.md) — medium, 2018-09-12
- [Q&A/Written Interview — The answers — Part 4](education\medium--q-a-written-interview-the-answers-part-4-d6bfed8c4261.md) — medium, 2018-09-19
- [Scenario 2: Creation and Registry of an Asset](education\medium--scenario-2-creation-and-registry-of-an-asset-2b6379bc57ef.md) — medium, 2018-10-06
- [Hearsay in the Blockchain world](education\medium--hearsay-in-the-blockchain-world-e75196db28fe.md) — medium, 2018-10-24
- [Bitcoin as the Base layer](education\medium--bitcoin-as-the-base-layer-cff28c5dab9c.md) — medium, 2018-11-01
- [IPv6 with CGA and Bitcoin](education\medium--ipv6-with-cga-and-bitcoin-a761d0185d5d.md) — medium, 2018-11-02
- [The Secure (Bitcoin) Internet](education\medium--the-secure-bitcoin-internet-2f589d81890f.md) — medium, 2018-11-03
- [Bitcoin is not Anti State — it is Pro Honest government](education\medium--bitcoin-is-not-anti-state-it-is-pro-honest-government-1ab1ec0a9fba.md) — medium, 2018-11-09
- [Why Silk Road was an abyss](education\medium--why-silk-road-was-an-abyss-67526e2902da.md) — medium, 2018-12-10
- [Bitcoin’s privacy model](education\medium--bitcoins-privacy-model-7ef7e79caf9f.md) — medium, 2018-12-11
- [An immutable file and data store](education\medium--an-immutable-file-and-data-store-36f67fc044d7.md) — medium, 2019-01-06
- [Smart-card-based mobile wallets](education\medium--smart-card-based-mobile-wallets-9cb75595b71d.md) — medium, 2019-01-13
- [Taking money over the web using Bitcoin — the way it was designed](education\medium--taking-money-over-the-web-using-bitcoin-the-way-it-was-designed-446385c1a04b.md) — medium, 2019-01-20
- [Ensuring honest money](education\medium--ensuring-honest-money-c49ec9110ec6.md) — medium, 2019-01-23
- [“Lightning” Network and the Financial Industry Regulatory Authority (FINRA)](education\medium--lightning-network-and-the-financial-industry-regulatory-authority-finra-bbbf28ccddac.md) — medium, 2019-02-01
- [The story of Bitcoin, continued](education\medium--the-story-of-bitcoin-continued-2f1ec78ba38b.md) — medium, 2019-02-09
- [The false lure of anonymity](education\medium--the-false-lure-of-anonymity-110a35088979.md) — medium, 2019-02-12
- [Proof of Work](education\medium--proof-of-work-1a323e82fd9.md) — medium, 2019-02-16
- [Hello Dave…](education\medium--hello-dave-330c164a4aad.md) — medium, 2019-02-22
- [Schnorr](education\medium--schnorr-21be14ac05f5.md) — medium, 2019-03-03
- [Profiting from privacy](education\medium--profiting-from-privacy-78c35dcb0a35.md) — medium, 2019-03-10
- [Proof](education\medium--proof-22e2cd5fc385.md) — medium, 2019-03-13
- [Why the protocol is set](education\medium--why-the-protocol-is-set-7db4f764c97c.md) — medium, 2019-03-28
- [Locked transactions for planning](education\medium--locked-transactions-for-planning-afeb01bac318.md) — medium, 2019-03-29
- [Saving research](education\medium--saving-research-97c9e63a3756.md) — medium, 2019-04-02
- [Satoshi Nakamoto](education\medium--satoshi-nakamoto-a7c4cf21253e.md) — medium, 2019-04-05
- [Panopticrypt](education\medium--panopticrypt-ed6154e06b34.md) — medium, 2019-04-07
- [Forget anonymity.](education\medium--forget-anonymity-8c4ea82ad46a.md) — medium, 2019-04-10
- [Trolls and bullies](education\medium--trolls-and-bullies-d19287bb754d.md) — medium, 2019-04-11
- [Evidence and law](education\medium--evidence-and-law-f8f10001efa5.md) — medium, 2019-04-12
- [We don’t want to lead with “anonymous”](education\medium--we-dont-want-to-lead-with-anonymous-a4890db7766d.md) — medium, 2019-04-17
- [The “Perfect” Firewall…](education\medium--the-perfect-firewall-3d6971213a2b.md) — medium, 2019-04-20
- [Why code must not be law](education\medium--why-code-must-not-be-law-438e2cafe2e4.md) — medium, 2019-05-18
- [Satoshi and the Sophists](education\medium--satoshi-and-the-sophists-9c940d4eb22e.md) — medium, 2019-05-23
- [MSBs and Account-Based Systems](education\medium--msbs-and-account-based-systems-e64dc056f92a.md) — medium, 2019-06-04
- [The Right to Privacy](education\medium--the-right-to-privacy-c8a66eda0ae3.md) — medium, 2019-06-07
- [PII in the Bitcoin World](education\medium--pii-in-the-bitcoin-world-4eb0416124b6.md) — medium, 2019-08-01
- [Bitcoin Is Anything BUT Anonymous](education\medium--bitcoin-is-anything-but-anonymous-f1d23fdc18a1.md) — medium, 2019-09-01
- [Human Rights and Property](education\medium--human-rights-and-property-34bb3120af08.md) — medium, 2019-09-03
- [If Gold Turned to Lead](education\medium--if-gold-turned-to-lead-54e82c27b79b.md) — medium, 2019-10-21
- [Bitcoin Fights Corruption](education\medium--bitcoin-fights-corruption-5e5fd7c79123.md) — medium, 2019-10-23
- [Digital Gold](education\medium--digital-gold-d46b9493a17b.md) — medium, 2019-11-08
- [Transparency and Government](education\medium--transparency-and-government-69c7e8f59180.md) — medium, 2019-11-18
- [Cryptography and Bitcoin](education\medium--cryptography-and-bitcoin-b64db06299e3.md) — medium, 2020-02-20
- [Binance: The Untrusted Intermediary](education\medium--binance-the-untrusted-intermediary-dddec51f5c47.md) — medium, 2020-03-02
- [Re: Moxie on Web3](education\medium--re-moxie-on-web3-b0cfccd68067.md) — medium, 2022-01-08
- [Commixtio, Coin Obfuscation, and the Law: Roman Doctrine and Modern Blockchain Tracing ](education\substack--commixtio-coin-obfuscation-and-the.md) — substack, 2025-06-10
- [On Immutable Memory Systems for Artificial Agents ](education\substack--on-immutable-memory-systems-for-artificial.md) — substack, 2025-06-16
- [Set in Stone or Sold to the Highest Bidder: Why Immutability Is Bitcoin's Only Defence](education\substack--set-in-stone-or-sold-to-the-highest.md) — substack, 2025-06-17
- [Why Secure Blockchain Voting is So Hard: A Deep Dive into True Anonymity, ECDSA Blinding, and the Myths of Digital Democracy](education\substack--why-secure-blockchain-voting-is-so.md) — substack, 2025-07-31
- [Native On-Chain Identity: capability-first, passwordless, and self-recovering](education\substack--native-on-chain-identity-capability.md) — substack, 2025-08-23
- [IP-to-IP Negotiated Notes: An ECDH-Derived, Multi-Transfer Wallet Protocol for Private, Settled Digital-Cash Payments](education\substack--ip-to-ip-negotiated-notes-an-ecdh.md) — substack, 2025-08-26
- [Privacy at Scale — Paying by Many Small Notes on Bitcoin](education\substack--privacy-at-scale-paying-by-many-small.md) — substack, 2025-08-27
- [Spending in the Crowd — Hiding Received Notes by Time, Split, and Change](education\substack--spending-in-the-crowd-hiding-received.md) — substack, 2025-08-29
- [Privacy and Bitcoin: Legal Boundaries, Economic Realities, and the Illusion of Technical Obfuscation](education\substack--privacy-and-bitcoin-legal-boundaries.md) — substack, 2025-08-30
- [Sunday Reflection: Privacy, Records, and the Integrity of Exchange](education\substack--sunday-reflection-privacy-records.md) — substack, 2025-08-31
- [Digital Identity and the Architecture of Autonomy: A Framework for Self-Sovereign Verification in a Stateless System](education\substack--digital-identity-and-the-architecture.md) — substack, 2025-10-28
- [The Throttled Machine: How Five Transactions a Second Killed Bitcoin’s Promise](education\substack--the-throttled-machine-how-five-transactions.md) — substack, 2025-11-10
- [The Geometry of Freedom: Why Bitcoin Must Scale or Die](education\substack--the-geometry-of-freedom-why-bitcoin.md) — substack, 2025-11-11
- [Lightning’s Velvet Manacles: Watchtowers, Custody, and the Quiet Return of Shadow Banking](education\substack--lightnings-velvet-manacles-watchtowers.md) — substack, 2025-11-12
- [The Third Entry: How Cryptography Could Fix the Weakest Link in Accounting](education\substack--the-third-entry-how-cryptography.md) — substack, 2026-02-10
- [The Theft That Never Was](education\substack--the-theft-that-never-was.md) — substack, 2026-04-17
- [Shuffling the Deck Without a Dealer](education\substack--shuffling-the-deck-without-a-dealer.md) — substack, 2026-04-23
- [The Sealed Envelope, Cryptographically Considered](education\substack--the-sealed-envelope-cryptographically.md) — substack, 2026-04-24
- [The Book You Sold](education\substack--the-book-you-sold.md) — substack, 2026-04-26
- [Cold Authority: Constructing an Air-Gapped Bitcoin SV Wallet Using ElectrumSV](education\substack--cold-authority-constructing-an-air.md) — substack, 2026-05-01
- [The Gospel According to Grok](education\substack--the-gospel-according-to-grok.md) — substack, 2026-05-06
- [Censorship Resistance, Atomic Settlement, and the Limits of Coalition Power](education\substack--censorship-resistance-atomic-settlement.md) — substack, 2026-05-12
- [The Frightening Commerce of Free Persons](education\substack--the-frightening-commerce-of-free.md) — substack, 2026-05-16
- [The Toll Booth Economy](education\substack--the-toll-booth-economy.md) — substack, 2026-05-17
- [Triple-Entry Accounting Has Been Misunderstood](education\substack--triple-entry-accounting-has-been.md) — substack, 2026-05-26
- [The Arithmetic of Trust](education\substack--the-arithmetic-of-trust.md) — substack, 2026-05-29
- [The Builder's Week: A Working Bitcoin Stack Appears, One Repository at a Time](education\substack--the-builders-week-a-working-bitcoin.md) — substack, 2026-06-01
- [The Abolition of the Dealer](education\substack--the-abolition-of-the-dealer.md) — substack, 2026-06-02
- [The Abolition of the House](education\substack--the-abolition-of-the-house.md) — substack, 2026-06-05
- [The Law of Controlled Amnesia](education\substack--the-law-of-controlled-amnesia.md) — substack, 2026-06-29
- [The Dial That Used to Be Fixed](education\substack--the-dial-that-used-to-be-fixed.md) — substack, 2026-07-04
- [Nobody Asks Where Your Banknote Has Been ](education\substack--nobody-asks-where-your-banknote-has.md) — substack, 2026-07-06
- [The Audit Evidence Problem Public Ledgers Were Supposed to Solve](education\substack--the-audit-evidence-problem-public.md) — substack, 2026-07-09
- [The Weakest Line in Every Ledger](education\substack--the-weakest-line-in-every-ledger.md) — substack, 2026-07-10

### protocol-immutability (79)

- [OP Codes and the push to confuse.](education\medium--op-codes-and-the-push-to-confuse-24d10d5e3861.md) — medium, 2018-06-07
- [Lightning is malleable… Steel is not](education\medium--lightning-is-malleable-steel-is-not-4e68bfdef31.md) — medium, 2018-06-19
- [Money Must First Be Stable](education\medium--money-must-first-be-stable-a44fbe7574c7.md) — medium, 2018-08-14
- [The myths of Bitcoin](education\medium--the-myths-of-bitcoin-bf3664e9d767.md) — medium, 2018-08-14
- [Limited change to bring stability](education\medium--limited-change-to-bring-stability-36abb2fed8e1.md) — medium, 2018-08-19
- [Stable by design](education\medium--stable-by-design-e967b93dc147.md) — medium, 2018-09-10
- [Q&A/Written Interview — The answers — Part 2](education\medium--q-a-written-interview-the-answers-part-2-20c3f5f84f67.md) — medium, 2018-09-17
- [Why is Bitcoin Open Source?](education\medium--why-is-bitcoin-open-source-196273d1712b.md) — medium, 2018-09-26
- [Hidden costs](education\medium--hidden-costs-8afaab3d9b1b.md) — medium, 2018-10-06
- [Trust in Smart Contracts](education\medium--trust-in-smart-contracts-28f99f23d7e8.md) — medium, 2018-10-07
- [Security](education\medium--security-5926122babf9.md) — medium, 2018-10-08
- [Bitcoin: A Total Turing Machine](education\medium--bitcoin-a-total-turing-machine-5a6c3c68f5a7.md) — medium, 2018-10-12
- [Burning and why it matters that it is stopped](education\medium--burning-and-why-it-matters-that-it-is-stopped-2aa0af10d4d1.md) — medium, 2018-10-27
- [Bitcoin is all about incentives](education\medium--bitcoin-is-all-about-incentives-72894518f6b5.md) — medium, 2018-11-06
- [Fixing OP_Fals](education\medium--fixing-op-fals-fd157899d2b7.md) — medium, 2018-11-08
- [Sun-setting P2SH](education\medium--sun-setting-p2sh-8b3c08f271c0.md) — medium, 2018-11-08
- [P2P and returning IP and Domain based transfers](education\medium--p2p-and-returning-ip-and-domain-based-transfers-9943d32bd38e.md) — medium, 2018-11-09
- [Corporate Activism](education\medium--corporate-activism-1b34eece57f3.md) — medium, 2018-11-10
- [nSequence and P2P exchange](education\medium--nsequence-and-p2p-exchange-9e4cbf32124c.md) — medium, 2018-11-13
- [Building Data](education\medium--building-data-84e2501cf71b.md) — medium, 2018-11-13
- [Set in Stone](education\medium--set-in-stone-7ebc9d31500e.md) — medium, 2018-11-15
- [BSV is the only Bitcoin.](education\medium--bsv-is-the-only-bitcoin-e1f045bc7cc8.md) — medium, 2018-12-11
- [The lie of anarchy](education\medium--the-lie-of-anarchy-bd7c1f239289.md) — medium, 2018-12-13
- [Private blockchains are a matter of economic forces](education\medium--private-blockchains-are-a-matter-of-economic-forces-9b41c18e2a84.md) — medium, 2018-12-18
- [The myth of the full validation node](education\medium--the-myth-of-the-full-validation-node-d7db52748649.md) — medium, 2018-12-21
- [An immutable file and data store](education\medium--an-immutable-file-and-data-store-36f67fc044d7.md) — medium, 2019-01-06
- [Why CLTV was a bad idea](education\medium--why-cltv-was-a-bad-idea-4b5d0c043e2a.md) — medium, 2019-01-08
- [The story of Bitcoin, continued](education\medium--the-story-of-bitcoin-continued-2f1ec78ba38b.md) — medium, 2019-02-09
- [Proof of Work](education\medium--proof-of-work-1a323e82fd9.md) — medium, 2019-02-16
- [Immutable evidence](education\medium--immutable-evidence-386b60a33123.md) — medium, 2019-02-16
- [Clickwrap smart contracts](education\medium--clickwrap-smart-contracts-3338507105bf.md) — medium, 2019-03-03
- [The myth of forks](education\medium--the-myth-of-forks-be04f8e5fe4a.md) — medium, 2019-03-06
- [Forks as a demerger, or a split as a copy?](education\medium--forks-as-a-demerger-or-a-split-as-a-copy-c38bf6d8abed.md) — medium, 2019-03-20
- [Why the protocol is set](education\medium--why-the-protocol-is-set-7db4f764c97c.md) — medium, 2019-03-28
- [Locked transactions for planning](education\medium--locked-transactions-for-planning-afeb01bac318.md) — medium, 2019-03-29
- [Decentralised planning](education\medium--decentralised-planning-c781f37d9342.md) — medium, 2019-04-03
- [From simplicity comes …](education\medium--from-simplicity-comes-1a19f9a85747.md) — medium, 2019-04-09
- [BTC and Censorship](education\medium--btc-and-censorship-410265a8a4a2.md) — medium, 2019-04-15
- [Don’t be fooled — Bitcoin is not BTC](education\medium--dont-be-fooled-bitcoin-is-not-btc-61e6aee8ac53.md) — medium, 2019-05-08
- [Why code must not be law](education\medium--why-code-must-not-be-law-438e2cafe2e4.md) — medium, 2019-05-18
- [Economic Security](education\medium--economic-security-d43518f47fd2.md) — medium, 2019-05-22
- [Monetary Law and Blockchains](education\medium--monetary-law-and-blockchains-edad5aadd009.md) — medium, 2019-06-12
- [Satoshi; or, The Solution to Nakamoto’s Dilemma](education\medium--satoshi-or-the-solution-to-nakamotos-dilemma-22829108ee46.md) — medium, 2019-09-28
- [Taxing Times…](education\medium--taxing-times-3cd2067fab8d.md) — medium, 2019-10-15
- [Proof of Assignment](education\medium--proof-of-assignment-50a36de081c7.md) — medium, 2019-11-13
- [Forking and Passing Off…](education\medium--forking-and-passing-off-ccbe22f2637e.md) — medium, 2020-02-13
- [The High Priests of “crypto” and the dogma wars](education\medium--the-high-priests-of-crypto-and-the-dogma-wars-100b56771c9e.md) — medium, 2020-02-22
- [On Decentralisation](education\medium--on-decentralisation-e761949d7e5c.md) — medium, 2020-02-24
- [As an Autistic Savant…](education\medium--as-an-autistic-savant-55075026dc48.md) — medium, 2020-04-16
- [Macro Expansion in Bitcoin Script](education\substack--macro-expansion-in-bitcoin-script.md) — substack, 2025-06-11
- [Bitcoin Script as a Macro-Expanded Turing Framework ](education\substack--bitcoin-script-as-a-macro-expanded.md) — substack, 2025-06-11
- [On Immutable Memory Systems for Artificial Agents ](education\substack--on-immutable-memory-systems-for-artificial.md) — substack, 2025-06-16
- [Set in Stone or Sold to the Highest Bidder: Why Immutability Is Bitcoin's Only Defence](education\substack--set-in-stone-or-sold-to-the-highest.md) — substack, 2025-06-17
- [Sovereign Soil: Scripted Autonomy in Agricultural IoT via BSV-Based Conditional Control](education\substack--sovereign-soil-scripted-autonomy.md) — substack, 2025-07-22
- [Engraving in Stone: Encoding Images in Bitcoin (or BTC) Transactions](education\substack--engraving-in-stone-encoding-images.md) — substack, 2025-09-08
- [The Necessity of the Stone: Protocol Finality, Political Intrusion, and the Integrity of Bitcoin](education\substack--the-necessity-of-the-stone-protocol.md) — substack, 2025-10-02
- [The Quiet Violence of Sunday: Notes on Protocol Capture, Manufactured Ignorance, and the Cult of BTC-Core](education\substack--the-quiet-violence-of-sunday-notes.md) — substack, 2025-11-16
- [Concentration Is Not Centralisation](education\substack--concentration-is-not-centralisation.md) — substack, 2025-12-04
- [The Forked Illusion: How Both Sides Cannot Be Right About Bitcoin—and Why Both Are Exposed by Their Own Logic](education\substack--the-forked-illusion-how-both-sides.md) — substack, 2025-12-07
- [Protocol as Offer](education\substack--protocol-as-offer.md) — substack, 2026-01-24
- [The Nash Equilibrium in Digital Cash Systems](education\substack--the-nash-equilibrium-in-digital-cash.md) — substack, 2026-02-01
- [Linear Scaling, Not Ritual: What Teranode Actually Changes](education\substack--linear-scaling-not-ritual-what-teranode.md) — substack, 2026-03-02
- [Who Controls the Rules? Governance Credibility and the $109 Billion Question](education\substack--who-controls-the-rules-governance.md) — substack, 2026-03-27
- [The Theft That Never Was](education\substack--the-theft-that-never-was.md) — substack, 2026-04-17
- [The Geography of Discretion](education\substack--the-geography-of-discretion.md) — substack, 2026-04-29
- [Consensus Is Not Governance](education\substack--consensus-is-not-governance.md) — substack, 2026-04-30
- [The Hold-Up Problem in Protocol Economies](education\substack--the-hold-up-problem-in-protocol-economies.md) — substack, 2026-05-01
- [What TCP/IP Got Right](education\substack--what-tcpip-got-right.md) — substack, 2026-05-05
- [Verification Without Enforcement](education\substack--verification-without-enforcement-8b2.md) — substack, 2026-05-18
- [Selling the Unspent Chain](education\substack--selling-the-unspent-chain.md) — substack, 2026-05-28
- [The Immutable Stock and the Unbounded Flow](education\substack--the-immutable-stock-and-the-unbounded.md) — substack, 2026-05-28
- [IPv4.1 Does Not Exist](education\substack--ipv41-does-not-exist.md) — substack, 2026-05-31
- [The Integer and the Idol](education\substack--the-integer-and-the-idol.md) — substack, 2026-05-31
- [The Scoreboard Is Not the Game: Money, Measurement, and the Collapse of Monetary Understanding](education\substack--the-scoreboard-is-not-the-game-money.md) — substack, 2026-06-07
- [Set in Stone](education\substack--set-in-stone.md) — substack, 2026-07-28
- [Five Times Versus Twenty Per Cent](education\substack--five-times-versus-twenty-per-cent.md) — substack, 2026-07-29
- [The Price of Being in the Room](education\substack--the-price-of-being-in-the-room.md) — substack, 2026-07-31
- [The Protocol No Gatekeeper Wants](education\substack--the-protocol-no-gatekeeper-wants.md) — substack, 2026-08-02
- [Bitcoin After the Casino](education\substack--bitcoin-after-the-casino.md) — substack, 2026-08-02

### scaling-throughput (77)

- [Money Must First Be Stable](education\medium--money-must-first-be-stable-a44fbe7574c7.md) — medium, 2018-08-14
- [The myths of Bitcoin](education\medium--the-myths-of-bitcoin-bf3664e9d767.md) — medium, 2018-08-14
- [Why Scaling on-Chain Works](education\medium--why-scaling-on-chain-works-5b78d6abb3c7.md) — medium, 2018-09-08
- [Equality](education\medium--equality-9948207d20e.md) — medium, 2018-09-15
- [Q&A/Written Interview — The answers — Part 2](education\medium--q-a-written-interview-the-answers-part-2-20c3f5f84f67.md) — medium, 2018-09-17
- [Q&A/Written Interview — The answers — Part 3](education\medium--q-a-written-interview-the-answers-part-3-71116e036958.md) — medium, 2018-09-18
- [IoT and the coming Toaster-world](education\medium--iot-and-the-coming-toaster-world-654edcdb977.md) — medium, 2018-09-19
- [I shall continue answering in order.](education\medium--i-shall-continue-answering-in-order-eae445cba4bf.md) — medium, 2018-09-20
- [Simplicity in Bitcoin](education\medium--simplicity-in-bitcoin-1d4bcc6ce0c2.md) — medium, 2018-09-25
- [Building Data](education\medium--building-data-84e2501cf71b.md) — medium, 2018-11-13
- [Taking care of Business.](education\medium--taking-care-of-business-63430b62be2f.md) — medium, 2018-11-18
- [Bitcoin is for Business](education\medium--bitcoin-is-for-business-168b683b51c7.md) — medium, 2018-11-20
- [Subsidised ledgers](education\medium--subsidised-ledgers-193a5b490fe.md) — medium, 2018-11-23
- [Valuing systems — the margin of substitute goods.](education\medium--valuing-systems-the-margin-of-substitute-goods-891b47fe381e.md) — medium, 2018-11-25
- [Bitcoin’s privacy model](education\medium--bitcoins-privacy-model-7ef7e79caf9f.md) — medium, 2018-12-11
- [Bitcoin is a commodity](education\medium--bitcoin-is-a-commodity-1635dfca32fd.md) — medium, 2018-12-12
- [Private blockchains are a matter of economic forces](education\medium--private-blockchains-are-a-matter-of-economic-forces-9b41c18e2a84.md) — medium, 2018-12-18
- [The ASIC myth](education\medium--the-asic-myth-583aefbecce3.md) — medium, 2019-01-16
- [Generic Thin Operating  System for Blockchain IOT Devices](education\medium--generic-thin-operating-system-for-blockchain-iot-devices-32e7abf22c0e.md) — medium, 2019-02-03
- [The great mining swindle](education\medium--the-great-mining-swindle-2dec8ffa819d.md) — medium, 2019-02-18
- [The myth of forks](education\medium--the-myth-of-forks-be04f8e5fe4a.md) — medium, 2019-03-06
- [The labour fallacy of mining](education\medium--the-labour-fallacy-of-mining-c2c0f919784.md) — medium, 2019-03-07
- [Welcome to science](education\medium--welcome-to-science-c5e33a827449.md) — medium, 2019-03-30
- [From simplicity comes …](education\medium--from-simplicity-comes-1a19f9a85747.md) — medium, 2019-04-09
- [Patent wars…](education\medium--patent-wars-24929b73f381.md) — medium, 2019-04-13
- [The puzzle of the double hash](education\medium--the-puzzle-of-the-double-hash-968196edb06d.md) — medium, 2019-04-30
- [Money is a measuring stick](education\medium--money-is-a-measuring-stick-6f5fe9cb8c9d.md) — medium, 2019-05-14
- [Spam Away…](education\medium--spam-away-eb25b01a2514.md) — medium, 2019-07-25
- [Simplified Payment Verification](education\medium--simplified-payment-verification-4a260d272a38.md) — medium, 2019-10-09
- [Merkle Trees and SPV](education\medium--merkle-trees-and-spv-da18af9f6a26.md) — medium, 2019-11-02
- [Looking the Other Way](education\medium--looking-the-other-way-116ace0a875e.md) — medium, 2020-01-17
- [Re: Moxie on Web3](education\medium--re-moxie-on-web3-b0cfccd68067.md) — medium, 2022-01-08
- [The Imperative of Scalable Blockchain for Global Commerce](education\substack--the-imperative-of-scalable-blockchain.md) — substack, 2025-06-26
- [The Future of Digital Currency: The Need for Global Competition in CBDCs and Stablecoins](education\substack--the-future-of-digital-currency-the.md) — substack, 2025-06-29
- [The Collapse of the Blockchain Trilemma: A Formal Analysis through Baran’s Topology and Automata Logic](education\substack--the-collapse-of-the-blockchain-trilemma.md) — substack, 2025-07-07
- [A formal rebuttal of "The Blockchain Trilemma: A Formal Proof of the Inherent Trade-Offs Among Decentralization, Security, and Scalability" by Souhail Mssassi and Anas Abou El Kalam.](education\substack--a-formal-rebuttal-of-the-blockchain.md) — substack, 2025-07-09
- [The Dawn of the Nano-Economy: New Frontiers Unlocked by Sub-Cent Micropayments](education\substack--the-dawn-of-the-nano-economy-new.md) — substack, 2025-07-29
- [A Mechanism of Honour - Ledger of Blood and Electricity](education\substack--a-mechanism-of-honour-ledger-of-blood.md) — substack, 2025-07-30
- [Multicast as the Only Viable Architecture for Billion-Transaction Networks](education\substack--multicast-as-the-only-viable-architecture.md) — substack, 2025-08-18
- [Multicast Within Multicast: Anycast, Sharded Resends, and Hierarchical Distribution for Transaction and Block Propagation](education\substack--multicast-within-multicast-anycast.md) — substack, 2025-08-20
- [The Audit of Fools: Statistical Illiteracy in the Cult of Full Nodes ](education\substack--the-audit-of-fools-statistical-illiteracy.md) — substack, 2025-08-22
- [Digital Cash That Doesn’t Bleed: A 11,000-Transaction Micropayment Audit Across PayPal, Stripe, Visa, Mastercard, and BSV](education\substack--digital-cash-that-doesnt-bleed-a.md) — substack, 2025-08-25
- [Privacy at Scale — Paying by Many Small Notes on Bitcoin](education\substack--privacy-at-scale-paying-by-many-small.md) — substack, 2025-08-27
- [Privacy and Bitcoin: Legal Boundaries, Economic Realities, and the Illusion of Technical Obfuscation](education\substack--privacy-and-bitcoin-legal-boundaries.md) — substack, 2025-08-30
- [The Failure of BTC Core’s Changes: A Case Study in Protocol Capture and Manipulation](education\substack--the-failure-of-btc-cores-changes.md) — substack, 2025-09-26
- [The Lie of Progress: How Bitcoin Became Fiat in a Digital Suit](education\substack--the-lie-of-progress-how-bitcoin-became.md) — substack, 2025-10-27
- [The Five-Per-Second Delusion: How “Hard Money” Becomes Soft IOUs](education\substack--the-five-per-second-delusion-how.md) — substack, 2025-11-05
- [The Throttled Machine: How Five Transactions a Second Killed Bitcoin’s Promise](education\substack--the-throttled-machine-how-five-transactions.md) — substack, 2025-11-10
- [The Geometry of Freedom: Why Bitcoin Must Scale or Die](education\substack--the-geometry-of-freedom-why-bitcoin.md) — substack, 2025-11-11
- [The Mirage of the Bitcoin Standard: Fractional Reserve Finance in Digital Form](education\substack--the-mirage-of-the-bitcoin-standard.md) — substack, 2025-11-13
- [When Five TPS Becomes a Sacred Bull](education\substack--when-five-tps-becomes-a-sacred-bull.md) — substack, 2025-11-18
- [The Cult of Scarcity](education\substack--the-cult-of-scarcity.md) — substack, 2025-12-03
- [Concentration Is Not Centralisation](education\substack--concentration-is-not-centralisation.md) — substack, 2025-12-04
- [The Forked Illusion: How Both Sides Cannot Be Right About Bitcoin—and Why Both Are Exposed by Their Own Logic](education\substack--the-forked-illusion-how-both-sides.md) — substack, 2025-12-07
- [The Cult of Scarcity](education\substack--the-cult-of-scarcity-10d.md) — substack, 2025-12-08
- [The Ledger and the Load-Bearers](education\substack--the-ledger-and-the-load-bearers.md) — substack, 2025-12-12
- [The Cult of the Full Node](education\substack--the-cult-of-the-full-node.md) — substack, 2025-12-15
- [Linear Scaling, Not Ritual: What Teranode Actually Changes](education\substack--linear-scaling-not-ritual-what-teranode.md) — substack, 2026-03-02
- [The Chessboard, the Grain, and the Fee Market That Ate Itself](education\substack--the-chessboard-the-grain-and-the.md) — substack, 2026-03-15
- [Why Transaction Throughput Determines How Long Bitcoin’s Security Model Holds](education\substack--why-transaction-throughput-determines.md) — substack, 2026-03-20
- [The Graveyard of Gateways: Why There Can Only Be One Blockchain](education\substack--the-graveyard-of-gateways-why-there.md) — substack, 2026-04-04
- [The Toll Road You Were Promised Would Be Free: How Refusing to Scale Rebuilds the Banks](education\substack--the-toll-road-you-were-promised-would.md) — substack, 2026-04-08
- [When the Tollkeepers Disappear: The Consequences of Real Digital Cash](education\substack--when-the-tollkeepers-disappear-the.md) — substack, 2026-04-15
- [What Siggi Built](education\substack--what-siggi-built.md) — substack, 2026-04-22
- [Batching, Headers, and Throughput: Operating a Bitcoin SV Wallet with Offline Synchronisation and High-Volume Microtransactions](education\substack--batching-headers-and-throughput-operating.md) — substack, 2026-05-02
- [The Economy Has Always Been Data](education\substack--the-economy-has-always-been-data.md) — substack, 2026-05-06
- [The Priesthood of Artificial Scarcity](education\substack--the-priesthood-of-artificial-scarcity.md) — substack, 2026-05-08
- [Censorship Resistance, Atomic Settlement, and the Limits of Coalition Power](education\substack--censorship-resistance-atomic-settlement.md) — substack, 2026-05-12
- [Five Transactions a Second, and Other Discourtesies to Commerce](education\substack--five-transactions-a-second-and-other.md) — substack, 2026-05-19
- [Digital Money Is a Network Problem Before It Is a Monetary Slogan](education\substack--digital-money-is-a-network-problem.md) — substack, 2026-05-27
- [The Beast at the Door](education\substack--the-beast-at-the-door.md) — substack, 2026-06-06
- [You Cannot Hoard Your Way to Money](education\substack--you-cannot-hoard-your-way-to-money.md) — substack, 2026-06-09
- [The Arithmetic of the Last Fool](education\substack--the-arithmetic-of-the-last-fool.md) — substack, 2026-06-12
- [What the Protocol Remembers](education\substack--what-the-protocol-remembers.md) — substack, 2026-06-16
- [BTC Is Banking with Extra Steps](education\substack--btc-is-banking-with-extra-steps.md) — substack, 2026-06-18
- [The Decentralisation Threshold: When More Validators Reduce Net Security](education\substack--the-decentralisation-threshold-when.md) — substack, 2026-07-06
- [Order On-Chain, Content Off-Chain, Judgement in the Overlay](education\substack--order-on-chain-content-off-chain.md) — substack, 2026-08-11

### intermediaries (75)

- [Banking on Bitcoin](education\medium--banking-on-bitcoin-563fbc31e44a.md) — medium, 2018-09-02
- [The application, scope and limits of Letters of Indemnity in Bitcoin Contracts](education\medium--the-application-scope-and-limits-of-letters-of-indemnity-in-bitcoin-contracts-633e1491cf1.md) — medium, 2018-09-30
- [Scenario 5: Contract Conditionality](education\medium--scenario-5-contract-conditionality-5155ef919f9f.md) — medium, 2018-10-06
- [Problems and key questions around Bitcoin](education\medium--problems-and-key-questions-around-bitcoin-76fc7282aae4.md) — medium, 2018-10-13
- [Symmetric Fair Exchange Protocol](education\medium--symmetric-fair-exchange-protocol-b3153bab429b.md) — medium, 2018-10-15
- [Digital signature rules and their relationship to bitcoin](education\medium--digital-signature-rules-and-their-relationship-to-bitcoin-b1faeae1f446.md) — medium, 2018-10-16
- [A distribution protocol for dealer-less secret distribution](education\medium--a-distribution-protocol-for-dealer-less-secret-distribution-60b61a97da10.md) — medium, 2018-10-17
- [Monetary transfer and transmission rules](education\medium--monetary-transfer-and-transmission-rules-89b76489807e.md) — medium, 2018-10-18
- [DFA compilation and execution](education\medium--dfa-compilation-and-execution-38e6815897d2.md) — medium, 2018-10-19
- [Phases of the Bitcoin system](education\medium--phases-of-the-bitcoin-system-eb5531a711b4.md) — medium, 2018-10-20
- [Managing Blockchain Automata](education\medium--managing-blockchain-automata-f34fe622a6d.md) — medium, 2018-10-21
- [Payment intermediaries](education\medium--payment-intermediaries-db46605e79f4.md) — medium, 2018-11-11
- [Prevention is the key](education\medium--prevention-is-the-key-5c74d098c53a.md) — medium, 2018-11-12
- [Present Liability Schemes and Sanctions](education\medium--present-liability-schemes-and-sanctions-944888a00c6b.md) — medium, 2018-11-16
- [Account and Transfer Systems.](education\medium--account-and-transfer-systems-5f713649f158.md) — medium, 2018-12-22
- [Contract Law and Smart Contracts](education\medium--contract-law-and-smart-contracts-1f1531f4bbd0.md) — medium, 2018-12-28
- [“Lightning” Network and the Financial Industry Regulatory Authority (FINRA)](education\medium--lightning-network-and-the-financial-industry-regulatory-authority-finra-bbbf28ccddac.md) — medium, 2019-02-01
- [Why Lightning will never be currency, and why BSV matters](education\medium--why-lightning-will-never-be-currency-and-why-bsv-matters-60dfa5c9ac4d.md) — medium, 2019-03-15
- [Digital Rights Management: Serialised Media](education\medium--digital-rights-management-serialised-media-2db1293cc348.md) — medium, 2019-03-24
- [Forget anonymity.](education\medium--forget-anonymity-8c4ea82ad46a.md) — medium, 2019-04-10
- [Bitcoin is not against banks](education\medium--bitcoin-is-not-against-banks-fffb7b633fb0.md) — medium, 2019-04-14
- [Custodial standards](education\medium--custodial-standards-9dbcfe1f4c4e.md) — medium, 2019-05-10
- [Crypto flim-flam](education\medium--crypto-flim-flam-6b4ff367b634.md) — medium, 2019-05-13
- [Funding and rights](education\medium--funding-and-rights-baf26b37947f.md) — medium, 2019-05-20
- [MSBs and Account-Based Systems](education\medium--msbs-and-account-based-systems-e64dc056f92a.md) — medium, 2019-06-04
- [Binance: The Untrusted Intermediary](education\medium--binance-the-untrusted-intermediary-dddec51f5c47.md) — medium, 2020-03-02
- [Money Is Time and Energy](education\medium--money-is-time-and-energy-2e558d611c51.md) — medium, 2020-05-05
- [Scripted Supply: A Bitcoin-Based Architecture for EDI and On-Chain Commerce](education\substack--scripted-supply-a-bitcoin-based-architecture.md) — substack, 2025-06-10
- [The Little Coin That Wasn’t Afraid](education\substack--the-little-coin-that-wasnt-afraid.md) — substack, 2025-06-16
- [The Imperative of Scalable Blockchain for Global Commerce](education\substack--the-imperative-of-scalable-blockchain.md) — substack, 2025-06-26
- [The Future of Digital Currency: The Need for Global Competition in CBDCs and Stablecoins](education\substack--the-future-of-digital-currency-the.md) — substack, 2025-06-29
- [Sovereign Soil: Scripted Autonomy in Agricultural IoT via BSV-Based Conditional Control](education\substack--sovereign-soil-scripted-autonomy.md) — substack, 2025-07-22
- [Micropayments, Immutable Data, and the Economic Revolution of Near-Zero Transaction Costs](education\substack--micropayments-immutable-data-and.md) — substack, 2025-07-25
- [Ghosts of Gold: Fractional Reserve Dynamics in the Age of BTC](education\substack--ghosts-of-gold-fractional-reserve.md) — substack, 2025-07-28
- [Mechanised Myths: Control, Compliance, and the Dystopian Present](education\substack--mechanised-myths-control-compliance.md) — substack, 2025-08-05
- [Pennies and Power: How Micropayments Could Break the Corporate Siege](education\substack--pennies-and-power-how-micropayments.md) — substack, 2025-08-09
- [Stewardship in the Smallest Coin: Wesleyan Capitalism and the Moral Economy of Micropayments](education\substack--stewardship-in-the-smallest-coin.md) — substack, 2025-08-10
- [The Lie of Progress: How Bitcoin Became Fiat in a Digital Suit](education\substack--the-lie-of-progress-how-bitcoin-became.md) — substack, 2025-10-27
- [The Five-Per-Second Delusion: How “Hard Money” Becomes Soft IOUs](education\substack--the-five-per-second-delusion-how.md) — substack, 2025-11-05
- [The Throttled Machine: How Five Transactions a Second Killed Bitcoin’s Promise](education\substack--the-throttled-machine-how-five-transactions.md) — substack, 2025-11-10
- [Lightning’s Velvet Manacles: Watchtowers, Custody, and the Quiet Return of Shadow Banking](education\substack--lightnings-velvet-manacles-watchtowers.md) — substack, 2025-11-12
- [The Mirage of the Bitcoin Standard: Fractional Reserve Finance in Digital Form](education\substack--the-mirage-of-the-bitcoin-standard.md) — substack, 2025-11-13
- [The Great Global Skim](education\substack--the-great-global-skim.md) — substack, 2025-11-21
- [Accountability Follows Control: English Private Law and the Governance of Bitcoin](education\substack--accountability-follows-control-english.md) — substack, 2026-01-12
- [Bailment on a Ledger](education\substack--bailment-on-a-ledger.md) — substack, 2026-01-15
- [Cryptographic Control Is Fiduciary Power, Not Title](education\substack--cryptographic-control-is-fiduciary.md) — substack, 2026-01-19
- [The Coat Check Problem in the CLARITY Act](education\substack--the-coat-check-problem-in-the-clarity.md) — substack, 2026-01-20
- [Cryptographic Control as Fiduciary Power](education\substack--cryptographic-control-as-fiduciary.md) — substack, 2026-01-22
- [Who Controls the Rules When Nobody Controls All of Them?](education\substack--who-controls-the-rules-when-nobody.md) — substack, 2026-03-14
- [When Money Moves for Free, Who Gets Paid?](education\substack--when-money-moves-for-free-who-gets.md) — substack, 2026-03-23
- [Who Controls the Rules? Governance Credibility and the $109 Billion Question](education\substack--who-controls-the-rules-governance.md) — substack, 2026-03-27
- [The Graveyard of Gateways: Why There Can Only Be One Blockchain](education\substack--the-graveyard-of-gateways-why-there.md) — substack, 2026-04-04
- [The Toll Road You Were Promised Would Be Free: How Refusing to Scale Rebuilds the Banks](education\substack--the-toll-road-you-were-promised-would.md) — substack, 2026-04-08
- [When the Tollkeepers Disappear: The Consequences of Real Digital Cash](education\substack--when-the-tollkeepers-disappear-the.md) — substack, 2026-04-15
- [The Book You Sold](education\substack--the-book-you-sold.md) — substack, 2026-04-26
- [Who Actually Decides](education\substack--who-actually-decides.md) — substack, 2026-05-04
- [The Economy Has Always Been Data](education\substack--the-economy-has-always-been-data.md) — substack, 2026-05-06
- [SegWit2x as Market Coordination Around Incentives](education\substack--segwit2x-as-market-coordination-around.md) — substack, 2026-05-08
- [The Priesthood of Artificial Scarcity](education\substack--the-priesthood-of-artificial-scarcity.md) — substack, 2026-05-08
- [The Two Tiers Are a Market, Not a Cage ](education\substack--the-two-tiers-are-a-market-not-a.md) — substack, 2026-05-12
- [The Frightening Commerce of Free Persons](education\substack--the-frightening-commerce-of-free.md) — substack, 2026-05-16
- [The Dangerous Thing Is Not Bitcoin, but Utility](education\substack--the-dangerous-thing-is-not-bitcoin.md) — substack, 2026-05-16
- [The Toll Booth Economy](education\substack--the-toll-booth-economy.md) — substack, 2026-05-17
- [Who Actually Controls a Blockchain? An Economist’s Map of the Power Structure](education\substack--who-actually-controls-a-blockchain.md) — substack, 2026-05-21
- [The Abolition of the Free Copy](education\substack--the-abolition-of-the-free-copy.md) — substack, 2026-06-02
- [The Abolition of the Dealer](education\substack--the-abolition-of-the-dealer.md) — substack, 2026-06-02
- [Who Shall Keep the Keys?](education\substack--who-shall-keep-the-keys.md) — substack, 2026-06-03
- [An Open Market for Intelligence](education\substack--an-open-market-for-intelligence.md) — substack, 2026-06-04
- [The Abolition of the House](education\substack--the-abolition-of-the-house.md) — substack, 2026-06-05
- [The Beast at the Door](education\substack--the-beast-at-the-door.md) — substack, 2026-06-06
- [BTC Is Banking with Extra Steps](education\substack--btc-is-banking-with-extra-steps.md) — substack, 2026-06-18
- [The Asset the Law Gave Up On](education\substack--the-asset-the-law-gave-up-on.md) — substack, 2026-07-03
- [The Cost of Permission](education\substack--the-cost-of-permission.md) — substack, 2026-07-27
- [The Protocol No Gatekeeper Wants](education\substack--the-protocol-no-gatekeeper-wants.md) — substack, 2026-08-02
- [There Is No Such Thing as Spam in a Priced System](education\substack--there-is-no-such-thing-as-spam-in.md) — substack, 2026-08-04

### script-technical (60)

- [OP Codes and the push to confuse.](education\medium--op-codes-and-the-push-to-confuse-24d10d5e3861.md) — medium, 2018-06-07
- [Limited change to bring stability](education\medium--limited-change-to-bring-stability-36abb2fed8e1.md) — medium, 2018-08-19
- [Defining smart contracts](education\medium--defining-smart-contracts-eb31fd825de6.md) — medium, 2018-09-28
- [Scenario 1: Public Registry of an Asset](education\medium--scenario-1-public-registry-of-an-asset-f89787870e54.md) — medium, 2018-10-06
- [Scenario 3: Lease Contract](education\medium--scenario-3-lease-contract-d0ee4cd3900e.md) — medium, 2018-10-06
- [Scenario 4: Rolling Contract](education\medium--scenario-4-rolling-contract-5f73d87c7f5.md) — medium, 2018-10-06
- [Scenario 5: Contract Conditionality](education\medium--scenario-5-contract-conditionality-5155ef919f9f.md) — medium, 2018-10-06
- [Creating a Smart Contract Registry](education\medium--creating-a-smart-contract-registry-26dac7f238f5.md) — medium, 2018-10-06
- [Trust in Smart Contracts](education\medium--trust-in-smart-contracts-28f99f23d7e8.md) — medium, 2018-10-07
- [Bitcoin: A Total Turing Machine](education\medium--bitcoin-a-total-turing-machine-5a6c3c68f5a7.md) — medium, 2018-10-12
- [A Proof of Turing completeness in Bitcoin Script](education\medium--a-proof-of-turing-completeness-in-bitcoin-script-3cf5aa7aeb83.md) — medium, 2018-10-12
- [Symmetric Fair Exchange Protocol](education\medium--symmetric-fair-exchange-protocol-b3153bab429b.md) — medium, 2018-10-15
- [A codification scheme for state machines](education\medium--a-codification-scheme-for-state-machines-c5b1cb9351ec.md) — medium, 2018-10-16
- [DFA compilation and execution](education\medium--dfa-compilation-and-execution-38e6815897d2.md) — medium, 2018-10-19
- [Managing Blockchain Automata](education\medium--managing-blockchain-automata-f34fe622a6d.md) — medium, 2018-10-21
- [Neural Network Threshold Oracles](education\medium--neural-network-threshold-oracles-92497c2f245c.md) — medium, 2018-10-26
- [Drugs, Fraud and Murder](education\medium--drugs-fraud-and-murder-ddf12208ae8b.md) — medium, 2018-11-06
- [Fixing OP_Fals](education\medium--fixing-op-fals-fd157899d2b7.md) — medium, 2018-11-08
- [Sun-setting P2SH](education\medium--sun-setting-p2sh-8b3c08f271c0.md) — medium, 2018-11-08
- [Prevention is the key](education\medium--prevention-is-the-key-5c74d098c53a.md) — medium, 2018-11-12
- [nSequence and P2P exchange](education\medium--nsequence-and-p2p-exchange-9e4cbf32124c.md) — medium, 2018-11-13
- [Building Data](education\medium--building-data-84e2501cf71b.md) — medium, 2018-11-13
- [BLOCKCHAIN Based Accounting:
 General Ledger Posting](education\medium--blockchain-based-accounting-general-ledger-posting-f2050cd6ed1c.md) — medium, 2018-12-14
- [Private blockchains are a matter of economic forces](education\medium--private-blockchains-are-a-matter-of-economic-forces-9b41c18e2a84.md) — medium, 2018-12-18
- [On Predicates](education\medium--on-predicates-b92df80f9b76.md) — medium, 2018-12-21
- [Breach of contract — Remedies for breach](education\medium--breach-of-contract-remedies-for-breach-71fb0ff2b1fd.md) — medium, 2018-12-27
- [Contract Law and Smart Contracts](education\medium--contract-law-and-smart-contracts-1f1531f4bbd0.md) — medium, 2018-12-28
- [Why CLTV was a bad idea](education\medium--why-cltv-was-a-bad-idea-4b5d0c043e2a.md) — medium, 2019-01-08
- [Bitcoin and Quantum Computing](education\medium--bitcoin-and-quantum-computing-b6f048db01eb.md) — medium, 2019-01-23
- [Storing IP on the Blockchain](education\medium--storing-ip-on-the-blockchain-c8fbfb962a99.md) — medium, 2019-01-27
- [Secure wallet systems](education\medium--secure-wallet-systems-614af37aa7f.md) — medium, 2019-02-10
- [Forex accounting in script](education\medium--forex-accounting-in-script-51984db05c6f.md) — medium, 2019-02-24
- [Clickwrap smart contracts](education\medium--clickwrap-smart-contracts-3338507105bf.md) — medium, 2019-03-03
- [Finite State Machines in Script](education\medium--finite-state-machines-in-script-21539501ac5e.md) — medium, 2019-03-18
- [Learning Script](education\medium--learning-script-20303a5f867e.md) — medium, 2019-03-18
- [Digital Rights Management: Serialised Media](education\medium--digital-rights-management-serialised-media-2db1293cc348.md) — medium, 2019-03-24
- [Why the protocol is set](education\medium--why-the-protocol-is-set-7db4f764c97c.md) — medium, 2019-03-28
- [Locked transactions for planning](education\medium--locked-transactions-for-planning-afeb01bac318.md) — medium, 2019-03-29
- [Saving research](education\medium--saving-research-97c9e63a3756.md) — medium, 2019-04-02
- [My Mentor](education\medium--my-mentor-f6ea4b828da6.md) — medium, 2019-04-07
- [The Genesis of Genesis](education\medium--the-genesis-of-genesis-5774b2fb9bc9.md) — medium, 2019-04-12
- [BTC and Censorship](education\medium--btc-and-censorship-410265a8a4a2.md) — medium, 2019-04-15
- [The puzzle of the double hash](education\medium--the-puzzle-of-the-double-hash-968196edb06d.md) — medium, 2019-04-30
- [Taxing Crypto](education\medium--taxing-crypto-548bf6da43fc.md) — medium, 2019-06-17
- [As an Autistic Savant…](education\medium--as-an-autistic-savant-55075026dc48.md) — medium, 2020-04-16
- [Scripted Supply: A Bitcoin-Based Architecture for EDI and On-Chain Commerce](education\substack--scripted-supply-a-bitcoin-based-architecture.md) — substack, 2025-06-10
- [Macro Expansion in Bitcoin Script](education\substack--macro-expansion-in-bitcoin-script.md) — substack, 2025-06-11
- [Bitcoin Script as a Macro-Expanded Turing Framework ](education\substack--bitcoin-script-as-a-macro-expanded.md) — substack, 2025-06-11
- [Sovereign Soil: Scripted Autonomy in Agricultural IoT via BSV-Based Conditional Control](education\substack--sovereign-soil-scripted-autonomy.md) — substack, 2025-07-22
- [Resilience, Redundancy, and Real-World Data Integrity in Offline BSV Transaction Systems for Agriculture](education\substack--resilience-redundancy-and-real-world.md) — substack, 2025-08-02
- [Native On-Chain Identity: capability-first, passwordless, and self-recovering](education\substack--native-on-chain-identity-capability.md) — substack, 2025-08-23
- [IP-to-IP Negotiated Notes: An ECDH-Derived, Multi-Transfer Wallet Protocol for Private, Settled Digital-Cash Payments](education\substack--ip-to-ip-negotiated-notes-an-ecdh.md) — substack, 2025-08-26
- [Engraving in Stone: Encoding Images in Bitcoin (or BTC) Transactions](education\substack--engraving-in-stone-encoding-images.md) — substack, 2025-09-08
- [Quantum-Ineffective Bitcoin: A Script-Level, Hash-Anchored Defence Against Hypothetical Quantum Key Recovery](education\substack--quantum-ineffective-bitcoin-a-script.md) — substack, 2025-09-09
- [What Siggi Built](education\substack--what-siggi-built.md) — substack, 2026-04-22
- [Shuffling the Deck Without a Dealer](education\substack--shuffling-the-deck-without-a-dealer.md) — substack, 2026-04-23
- [The Sealed Envelope, Cryptographically Considered](education\substack--the-sealed-envelope-cryptographically.md) — substack, 2026-04-24
- [The Quantum Apocalypse Is Coming Any Decade Now, So Here Is the Solution to a Problem That Will Not Exist](education\substack--the-quantum-apocalypse-is-coming.md) — substack, 2026-04-27
- [The Immutable Stock and the Unbounded Flow](education\substack--the-immutable-stock-and-the-unbounded.md) — substack, 2026-05-28
- [The Builder's Week: A Working Bitcoin Stack Appears, One Repository at a Time](education\substack--the-builders-week-a-working-bitcoin.md) — substack, 2026-06-01

### property-rights (60)

- [Negotiable Instruments](education\medium--negotiable-instruments-ad059d60f0e4.md) — medium, 2018-07-02
- [The crypto-ring of Gyges](education\medium--the-crypto-ring-of-gyges-f4858a037827.md) — medium, 2018-09-02
- [Misconceptions surrounding copyright](education\medium--misconceptions-surrounding-copyright-bbfec4c212a5.md) — medium, 2018-09-09
- [Human rights and property](education\medium--human-rights-and-property-2cde4181c012.md) — medium, 2018-09-12
- [Q&A/Written Interview — The answers — Part 2](education\medium--q-a-written-interview-the-answers-part-2-20c3f5f84f67.md) — medium, 2018-09-17
- [The application, scope and limits of Letters of Indemnity in Bitcoin Contracts](education\medium--the-application-scope-and-limits-of-letters-of-indemnity-in-bitcoin-contracts-633e1491cf1.md) — medium, 2018-09-30
- [Scenario 1: Public Registry of an Asset](education\medium--scenario-1-public-registry-of-an-asset-f89787870e54.md) — medium, 2018-10-06
- [Scenario 2: Creation and Registry of an Asset](education\medium--scenario-2-creation-and-registry-of-an-asset-2b6379bc57ef.md) — medium, 2018-10-06
- [What is Bitcoin](education\medium--what-is-bitcoin-cdb0a3133586.md) — medium, 2018-10-11
- [Rights as property](education\medium--rights-as-property-68c55b475880.md) — medium, 2018-10-19
- [Myths of permission-less](education\medium--myths-of-permission-less-d39b4af7ad9d.md) — medium, 2018-10-28
- [Taxing Bitcoin — Ordinary and tax concepts of “Money”](education\medium--taxing-bitcoin-ordinary-and-tax-concepts-of-money-15f935c60260.md) — medium, 2018-10-29
- [Property Law in the Age of Bitcoin](education\medium--property-law-in-the-age-of-bitcoin-28355604618f.md) — medium, 2018-10-31
- [Repudiation](education\medium--repudiation-3b35bd315abf.md) — medium, 2018-11-07
- [Miners and Property rights](education\medium--miners-and-property-rights-a7c5a01252e2.md) — medium, 2018-11-14
- [A house divided](education\medium--a-house-divided-ebdea8f4d655.md) — medium, 2018-11-24
- [Bitcoin is a commodity](education\medium--bitcoin-is-a-commodity-1635dfca32fd.md) — medium, 2018-12-12
- [Bitcoin in law](education\medium--bitcoin-in-law-7f2604f9fcd6.md) — medium, 2018-12-18
- [Currency](education\medium--currency-e725723340c3.md) — medium, 2018-12-19
- [Ensuring honest money](education\medium--ensuring-honest-money-c49ec9110ec6.md) — medium, 2019-01-23
- [Storing IP on the Blockchain](education\medium--storing-ip-on-the-blockchain-c8fbfb962a99.md) — medium, 2019-01-27
- [Lessons in monetary terms](education\medium--lessons-in-monetary-terms-5e1493e0d197.md) — medium, 2019-02-25
- [Statist](education\medium--statist-9fba301c0a08.md) — medium, 2019-02-27
- [Locked transactions for planning](education\medium--locked-transactions-for-planning-afeb01bac318.md) — medium, 2019-03-29
- [The immovable](education\medium--the-immovable-8aa39ee04515.md) — medium, 2019-04-23
- [The wheel of time is not on an axis](education\medium--the-wheel-of-time-is-not-on-an-axis-ccefa8963f6.md) — medium, 2019-04-27
- [Operating an Escrow Document Storage and Secure Signing Registry](education\medium--operating-an-escrow-document-storage-and-secure-signing-registry-39789123b5a6.md) — medium, 2019-06-28
- [Good Title Is Not a Key](education\medium--good-title-is-not-a-key-7342b6327f.md) — medium, 2019-08-23
- [Human Rights and Property](education\medium--human-rights-and-property-34bb3120af08.md) — medium, 2019-09-03
- [Rights and Tracing](education\medium--rights-and-tracing-603bee35c584.md) — medium, 2019-09-06
- [If Gold Turned to Lead](education\medium--if-gold-turned-to-lead-54e82c27b79b.md) — medium, 2019-10-21
- [Proof of Assignment](education\medium--proof-of-assignment-50a36de081c7.md) — medium, 2019-11-13
- [Open Source](education\medium--open-source-ed8e1066fbbd.md) — medium, 2020-01-24
- [Myths of Decentralisation…](education\medium--myths-of-decentralisation-761c713ab2cd.md) — medium, 2020-02-06
- [Forking and Passing Off…](education\medium--forking-and-passing-off-ccbe22f2637e.md) — medium, 2020-02-13
- [Binance: The Untrusted Intermediary](education\medium--binance-the-untrusted-intermediary-dddec51f5c47.md) — medium, 2020-03-02
- [Ledgers and Design](education\medium--ledgers-and-design-22f9f2eaacc0.md) — medium, 2020-03-18
- [The Property Flaw of Lightning](education\medium--the-property-flaw-of-lightning-d36ebf5b78a3.md) — medium, 2020-03-27
- [The History of Freezing in Bitcoin](education\medium--the-history-of-freezing-in-bitcoin-13f0cf1a89d9.md) — medium, 2020-04-23
- [Commixtio, Coin Obfuscation, and the Law: Roman Doctrine and Modern Blockchain Tracing ](education\substack--commixtio-coin-obfuscation-and-the.md) — substack, 2025-06-10
- [Private Keys, Proofs, and the Illusion of Ownership in Digital Cash Systems](education\substack--private-keys-proofs-and-the-illusion.md) — substack, 2025-10-15
- [Digital Identity and the Architecture of Autonomy: A Framework for Self-Sovereign Verification in a Stateless System](education\substack--digital-identity-and-the-architecture.md) — substack, 2025-10-28
- [Bailment on a Ledger](education\substack--bailment-on-a-ledger.md) — substack, 2026-01-15
- [The Coat Check Problem in the CLARITY Act](education\substack--the-coat-check-problem-in-the-clarity.md) — substack, 2026-01-20
- [You Don’t Own Your Digital Stuff. NFTs Could Actually Fix That — Without Intellectual Property.](education\substack--you-dont-own-your-digital-stuff-nfts.md) — substack, 2026-02-11
- [Your Property Rights Don’t Exist Without a State — And That’s Not a Moral Claim](education\substack--your-property-rights-dont-exist-without.md) — substack, 2026-02-13
- [The Mark That Belongs to No One](education\substack--the-mark-that-belongs-to-no-one.md) — substack, 2026-03-05
- [Your Token Is Not Your JPEG — And That Distinction Is the Entire Point](education\substack--your-token-is-not-your-jpeg-and-that.md) — substack, 2026-03-12
- [The Oldest New Problem in Finance: Proof of Stake and the Return of the Bearer Share](education\substack--the-oldest-new-problem-in-finance.md) — substack, 2026-03-16
- [Bitcoin Does Not Use RSA — And the Quantum Machine That Would Attack It Does Not Exist](education\substack--bitcoin-does-not-use-rsa-and-the.md) — substack, 2026-04-10
- [Transparency Is Not Centralisation: NAR, DAR, and the Legal Architecture of Blockchain Governance](education\substack--transparency-is-not-centralisation.md) — substack, 2026-04-11
- [The Theft That Never Was](education\substack--the-theft-that-never-was.md) — substack, 2026-04-17
- [The Book You Sold](education\substack--the-book-you-sold.md) — substack, 2026-04-26
- [The Miner Is Not a Monarch](education\substack--the-miner-is-not-a-monarch.md) — substack, 2026-05-20
- [The Integer and the Idol](education\substack--the-integer-and-the-idol.md) — substack, 2026-05-31
- [The Abolition of the Free Copy](education\substack--the-abolition-of-the-free-copy.md) — substack, 2026-06-02
- [The Abolition of the House](education\substack--the-abolition-of-the-house.md) — substack, 2026-06-05
- [The Warehouse and the Mind](education\substack--the-warehouse-and-the-mind.md) — substack, 2026-06-18
- [The Asset the Law Gave Up On](education\substack--the-asset-the-law-gave-up-on.md) — substack, 2026-07-03
- [Nobody Asks Where Your Banknote Has Been ](education\substack--nobody-asks-where-your-banknote-has.md) — substack, 2026-07-06

### tokenisation (49)

- [Vampire Securities from beyond the Wormhole](education\medium--vampire-securities-from-beyond-the-wormhole-8c4e691c809e.md) — medium, 2018-09-06
- [Worm-a-nomics](education\medium--worm-a-nomics-e8d59107f6d0.md) — medium, 2018-09-07
- [Misconceptions surrounding copyright](education\medium--misconceptions-surrounding-copyright-bbfec4c212a5.md) — medium, 2018-09-09
- [Human rights and property](education\medium--human-rights-and-property-2cde4181c012.md) — medium, 2018-09-12
- [Scenario 1: Public Registry of an Asset](education\medium--scenario-1-public-registry-of-an-asset-f89787870e54.md) — medium, 2018-10-06
- [Scenario 2: Creation and Registry of an Asset](education\medium--scenario-2-creation-and-registry-of-an-asset-2b6379bc57ef.md) — medium, 2018-10-06
- [Scenario 3: Lease Contract](education\medium--scenario-3-lease-contract-d0ee4cd3900e.md) — medium, 2018-10-06
- [Scenario 4: Rolling Contract](education\medium--scenario-4-rolling-contract-5f73d87c7f5.md) — medium, 2018-10-06
- [Scenario 5: Contract Conditionality](education\medium--scenario-5-contract-conditionality-5155ef919f9f.md) — medium, 2018-10-06
- [Creating a Smart Contract Registry](education\medium--creating-a-smart-contract-registry-26dac7f238f5.md) — medium, 2018-10-06
- [A codification scheme for state machines](education\medium--a-codification-scheme-for-state-machines-c5b1cb9351ec.md) — medium, 2018-10-16
- [Blockchain-Based Decentralised Autonomous Corporations: An Overview](education\medium--blockchain-based-decentralised-autonomous-corporations-an-overview-5dc0d469fcb5.md) — medium, 2018-10-17
- [Rights as property](education\medium--rights-as-property-68c55b475880.md) — medium, 2018-10-19
- [Burning and why it matters that it is stopped](education\medium--burning-and-why-it-matters-that-it-is-stopped-2aa0af10d4d1.md) — medium, 2018-10-27
- [Myths of permission-less](education\medium--myths-of-permission-less-d39b4af7ad9d.md) — medium, 2018-10-28
- [The scams in Crypto](education\medium--the-scams-in-crypto-376e327df2af.md) — medium, 2018-10-30
- [True Sale and Insolvency Challenges in ICO Token Sales](education\medium--true-sale-and-insolvency-challenges-in-ico-token-sales-561a48706ece.md) — medium, 2018-10-31
- [Coin burning for dummies](education\medium--coin-burning-for-dummies-baa3cd14f915.md) — medium, 2018-11-04
- [Present Liability Schemes and Sanctions](education\medium--present-liability-schemes-and-sanctions-944888a00c6b.md) — medium, 2018-11-16
- [BLOCKCHAIN Based Accounting:
 General Ledger Posting](education\medium--blockchain-based-accounting-general-ledger-posting-f2050cd6ed1c.md) — medium, 2018-12-14
- [Bitcoin in law](education\medium--bitcoin-in-law-7f2604f9fcd6.md) — medium, 2018-12-18
- [Expectation of Profits](education\medium--expectation-of-profits-a56c845056a3.md) — medium, 2018-12-20
- [Crowd Funding and ICOs](education\medium--crowd-funding-and-icos-35780d27a24d.md) — medium, 2018-12-24
- [An immutable file and data store](education\medium--an-immutable-file-and-data-store-36f67fc044d7.md) — medium, 2019-01-06
- [Taking money over the web using Bitcoin — the way it was designed](education\medium--taking-money-over-the-web-using-bitcoin-the-way-it-was-designed-446385c1a04b.md) — medium, 2019-01-20
- [Storing IP on the Blockchain](education\medium--storing-ip-on-the-blockchain-c8fbfb962a99.md) — medium, 2019-01-27
- [Forex accounting in script](education\medium--forex-accounting-in-script-51984db05c6f.md) — medium, 2019-02-24
- [Clickwrap smart contracts](education\medium--clickwrap-smart-contracts-3338507105bf.md) — medium, 2019-03-03
- [Free Speech](education\medium--free-speech-526a972d5fb5.md) — medium, 2019-03-18
- [Peer-to-peer digital electronic cash](education\medium--peer-to-peer-digital-electronic-cash-369bb306028b.md) — medium, 2019-03-22
- [Digital Rights Management: Serialised Media](education\medium--digital-rights-management-serialised-media-2db1293cc348.md) — medium, 2019-03-24
- [The wheel of time is not on an axis](education\medium--the-wheel-of-time-is-not-on-an-axis-ccefa8963f6.md) — medium, 2019-04-27
- [Human Rights and Property](education\medium--human-rights-and-property-34bb3120af08.md) — medium, 2019-09-03
- [Money Is Time and Energy](education\medium--money-is-time-and-energy-2e558d611c51.md) — medium, 2020-05-05
- [Scripted Supply: A Bitcoin-Based Architecture for EDI and On-Chain Commerce](education\substack--scripted-supply-a-bitcoin-based-architecture.md) — substack, 2025-06-10
- [Stablecoins and the Lost Spark](education\substack--stablecoins-and-the-lost-spark.md) — substack, 2025-06-19
- [The Cult of Digital Metallurgy and the Poverty of Small Minds](education\substack--the-cult-of-digital-metallurgy-and.md) — substack, 2025-11-20
- [The Cult of Digital Metallurgy and the Poverty of Small Minds](education\substack--the-cult-of-digital-metallurgy-and-35a.md) — substack, 2025-11-29
- [The Ledger of All Things: Bitcoin as a Universal Engine of Proof](education\substack--the-ledger-of-all-things-bitcoin.md) — substack, 2025-11-30
- [You Don’t Own Your Digital Stuff. NFTs Could Actually Fix That — Without Intellectual Property.](education\substack--you-dont-own-your-digital-stuff-nfts.md) — substack, 2026-02-11
- [Your Token Is Not Your JPEG — And That Distinction Is the Entire Point](education\substack--your-token-is-not-your-jpeg-and-that.md) — substack, 2026-03-12
- [Shuffling the Deck Without a Dealer](education\substack--shuffling-the-deck-without-a-dealer.md) — substack, 2026-04-23
- [The Sealed Envelope, Cryptographically Considered](education\substack--the-sealed-envelope-cryptographically.md) — substack, 2026-04-24
- [The Book You Sold](education\substack--the-book-you-sold.md) — substack, 2026-04-26
- [Selling the Unspent Chain](education\substack--selling-the-unspent-chain.md) — substack, 2026-05-28
- [The Abolition of the Free Copy](education\substack--the-abolition-of-the-free-copy.md) — substack, 2026-06-02
- [The Abolition of the House](education\substack--the-abolition-of-the-house.md) — substack, 2026-06-05
- [The Warehouse and the Mind](education\substack--the-warehouse-and-the-mind.md) — substack, 2026-06-18
- [The Weakest Line in Every Ledger](education\substack--the-weakest-line-in-every-ledger.md) — substack, 2026-07-10

### micropayments (45)

- [A diatribe on Bitcoin, Trust and the economy of security (redux)](education\medium--a-diatribe-on-bitcoin-trust-and-the-economy-of-security-redux-b83b9b7943ff.md) — medium, 2018-09-07
- [Trust and Risk](education\medium--trust-and-risk-45d42d853693.md) — medium, 2018-09-11
- [Are the Poor Exploited?](education\medium--are-the-poor-exploited-331790523319.md) — medium, 2018-09-17
- [Security in a world of IPv6 and Bitcoin](education\medium--security-in-a-world-of-ipv6-and-bitcoin-a31592b4f9ac.md) — medium, 2018-10-03
- [Bitcoin (BCH) Vending machine](education\medium--bitcoin-bch-vending-machine-600666d669d0.md) — medium, 2018-10-10
- [Managing Blockchain Automata](education\medium--managing-blockchain-automata-f34fe622a6d.md) — medium, 2018-10-21
- [nSequence and P2P exchange](education\medium--nsequence-and-p2p-exchange-9e4cbf32124c.md) — medium, 2018-11-13
- [Taking money over the web using Bitcoin — the way it was designed](education\medium--taking-money-over-the-web-using-bitcoin-the-way-it-was-designed-446385c1a04b.md) — medium, 2019-01-20
- [Storing IP on the Blockchain](education\medium--storing-ip-on-the-blockchain-c8fbfb962a99.md) — medium, 2019-01-27
- [Generic Thin Operating  System for Blockchain IOT Devices](education\medium--generic-thin-operating-system-for-blockchain-iot-devices-32e7abf22c0e.md) — medium, 2019-02-03
- [The start of Metanet](education\medium--the-start-of-metanet-ef0560e81505.md) — medium, 2019-02-14
- [Profiting from privacy](education\medium--profiting-from-privacy-78c35dcb0a35.md) — medium, 2019-03-10
- [Finite State Machines in Script](education\medium--finite-state-machines-in-script-21539501ac5e.md) — medium, 2019-03-18
- [Free Speech](education\medium--free-speech-526a972d5fb5.md) — medium, 2019-03-18
- [Trolls and bullies](education\medium--trolls-and-bullies-d19287bb754d.md) — medium, 2019-04-11
- [Spam Away…](education\medium--spam-away-eb25b01a2514.md) — medium, 2019-07-25
- [Bitcoin Fights Corruption](education\medium--bitcoin-fights-corruption-5e5fd7c79123.md) — medium, 2019-10-23
- [A Fundamental Misunderstanding](education\medium--a-fundamental-misunderstanding-60e788cfcc1.md) — medium, 2019-11-05
- [BitCoin system has 21 million BitCoin tokens.](education\medium--bitcoin-system-has-21-million-bitcoin-tokens-a9329f5c384.md) — medium, 2020-02-14
- [The Little Coin That Wasn’t Afraid](education\substack--the-little-coin-that-wasnt-afraid.md) — substack, 2025-06-16
- [Sovereign Soil: Scripted Autonomy in Agricultural IoT via BSV-Based Conditional Control](education\substack--sovereign-soil-scripted-autonomy.md) — substack, 2025-07-22
- [Micropayments, Immutable Data, and the Economic Revolution of Near-Zero Transaction Costs](education\substack--micropayments-immutable-data-and.md) — substack, 2025-07-25
- [The Dawn of the Nano-Economy: New Frontiers Unlocked by Sub-Cent Micropayments](education\substack--the-dawn-of-the-nano-economy-new.md) — substack, 2025-07-29
- [Resilience, Redundancy, and Real-World Data Integrity in Offline BSV Transaction Systems for Agriculture](education\substack--resilience-redundancy-and-real-world.md) — substack, 2025-08-02
- [Mechanised Myths: Control, Compliance, and the Dystopian Present](education\substack--mechanised-myths-control-compliance.md) — substack, 2025-08-05
- [Pennies and Power: How Micropayments Could Break the Corporate Siege](education\substack--pennies-and-power-how-micropayments.md) — substack, 2025-08-09
- [Stewardship in the Smallest Coin: Wesleyan Capitalism and the Moral Economy of Micropayments](education\substack--stewardship-in-the-smallest-coin.md) — substack, 2025-08-10
- [Digital Cash That Doesn’t Bleed: A 11,000-Transaction Micropayment Audit Across PayPal, Stripe, Visa, Mastercard, and BSV](education\substack--digital-cash-that-doesnt-bleed-a.md) — substack, 2025-08-25
- [Spending in the Crowd — Hiding Received Notes by Time, Split, and Change](education\substack--spending-in-the-crowd-hiding-received.md) — substack, 2025-08-29
- [Double-Spend Assurance without Blocks: Designing Miner-Signed Proofs and Spentness Commitments in a Header-Only System](education\substack--double-spend-assurance-without-blocks.md) — substack, 2025-09-07
- [The Chessboard, the Grain, and the Fee Market That Ate Itself](education\substack--the-chessboard-the-grain-and-the.md) — substack, 2026-03-15
- [When Money Moves for Free, Who Gets Paid?](education\substack--when-money-moves-for-free-who-gets.md) — substack, 2026-03-23
- [When the Tollkeepers Disappear: The Consequences of Real Digital Cash](education\substack--when-the-tollkeepers-disappear-the.md) — substack, 2026-04-15
- [Batching, Headers, and Throughput: Operating a Bitcoin SV Wallet with Offline Synchronisation and High-Volume Microtransactions](education\substack--batching-headers-and-throughput-operating.md) — substack, 2026-05-02
- [The Dangerous Thing Is Not Bitcoin, but Utility](education\substack--the-dangerous-thing-is-not-bitcoin.md) — substack, 2026-05-16
- [The Toll Booth Economy](education\substack--the-toll-booth-economy.md) — substack, 2026-05-17
- [Who Reads the Meter? The Hidden Trust Problem Underneath Every Energy Market That Runs on a Blockchain](education\substack--who-reads-the-meter-the-hidden-trust.md) — substack, 2026-05-22
- [Selling the Unspent Chain](education\substack--selling-the-unspent-chain.md) — substack, 2026-05-28
- [The Immutable Stock and the Unbounded Flow](education\substack--the-immutable-stock-and-the-unbounded.md) — substack, 2026-05-28
- [The Builder's Week: A Working Bitcoin Stack Appears, One Repository at a Time](education\substack--the-builders-week-a-working-bitcoin.md) — substack, 2026-06-01
- [An Open Market for Intelligence](education\substack--an-open-market-for-intelligence.md) — substack, 2026-06-04
- [You Cannot Hoard Your Way to Money](education\substack--you-cannot-hoard-your-way-to-money.md) — substack, 2026-06-09
- [Settlement Speed Is the Wrong Margin](education\substack--settlement-speed-is-the-wrong-margin.md) — substack, 2026-06-14
- [The Protocol No Gatekeeper Wants](education\substack--the-protocol-no-gatekeeper-wants.md) — substack, 2026-08-02
- [There Is No Such Thing as Spam in a Priced System](education\substack--there-is-no-such-thing-as-spam-in.md) — substack, 2026-08-04

### wallets-keys (43)

- [Negotiable Instruments](education\medium--negotiable-instruments-ad059d60f0e4.md) — medium, 2018-07-02
- [Banking on Bitcoin](education\medium--banking-on-bitcoin-563fbc31e44a.md) — medium, 2018-09-02
- [The infinite money fallacy](education\medium--the-infinite-money-fallacy-3c7a541a2977.md) — medium, 2018-10-04
- [Scenario 2: Creation and Registry of an Asset](education\medium--scenario-2-creation-and-registry-of-an-asset-2b6379bc57ef.md) — medium, 2018-10-06
- [Personal Security Device](education\medium--personal-security-device-102c2441b5a2.md) — medium, 2018-10-09
- [A distribution protocol for dealer-less secret distribution](education\medium--a-distribution-protocol-for-dealer-less-secret-distribution-60b61a97da10.md) — medium, 2018-10-17
- [Phases of the Bitcoin system](education\medium--phases-of-the-bitcoin-system-eb5531a711b4.md) — medium, 2018-10-20
- [Repudiation](education\medium--repudiation-3b35bd315abf.md) — medium, 2018-11-07
- [The hardware wallet in a phone](education\medium--the-hardware-wallet-in-a-phone-a2fbbcf03a74.md) — medium, 2018-11-15
- [Instant transactions](education\medium--instant-transactions-a11f391fbd57.md) — medium, 2018-12-09
- [Bitcoin’s privacy model](education\medium--bitcoins-privacy-model-7ef7e79caf9f.md) — medium, 2018-12-11
- [BLOCKCHAIN Based Accounting:
 General Ledger Posting](education\medium--blockchain-based-accounting-general-ledger-posting-f2050cd6ed1c.md) — medium, 2018-12-14
- [Account and Transfer Systems.](education\medium--account-and-transfer-systems-5f713649f158.md) — medium, 2018-12-22
- [An immutable file and data store](education\medium--an-immutable-file-and-data-store-36f67fc044d7.md) — medium, 2019-01-06
- [Smart-card-based mobile wallets](education\medium--smart-card-based-mobile-wallets-9cb75595b71d.md) — medium, 2019-01-13
- [Taking money over the web using Bitcoin — the way it was designed](education\medium--taking-money-over-the-web-using-bitcoin-the-way-it-was-designed-446385c1a04b.md) — medium, 2019-01-20
- [Ensuring honest money](education\medium--ensuring-honest-money-c49ec9110ec6.md) — medium, 2019-01-23
- [Secure wallet systems](education\medium--secure-wallet-systems-614af37aa7f.md) — medium, 2019-02-10
- [Profiting from privacy](education\medium--profiting-from-privacy-78c35dcb0a35.md) — medium, 2019-03-10
- [How to make a brain wallet](education\medium--how-to-make-a-brain-wallet-a8040b7c1993.md) — medium, 2019-03-27
- [Saving research](education\medium--saving-research-97c9e63a3756.md) — medium, 2019-04-02
- [Bitcoin is not against banks](education\medium--bitcoin-is-not-against-banks-fffb7b633fb0.md) — medium, 2019-04-14
- [Custodial standards](education\medium--custodial-standards-9dbcfe1f4c4e.md) — medium, 2019-05-10
- [Funding and rights](education\medium--funding-and-rights-baf26b37947f.md) — medium, 2019-05-20
- [Operating an Escrow Document Storage and Secure Signing Registry](education\medium--operating-an-escrow-document-storage-and-secure-signing-registry-39789123b5a6.md) — medium, 2019-06-28
- [Good Title Is Not a Key](education\medium--good-title-is-not-a-key-7342b6327f.md) — medium, 2019-08-23
- [A Fundamental Misunderstanding](education\medium--a-fundamental-misunderstanding-60e788cfcc1.md) — medium, 2019-11-05
- [How Digital Signatures Work](education\medium--how-digital-signatures-work-efd303fa8f11.md) — medium, 2020-01-21
- [Macro Expansion in Bitcoin Script](education\substack--macro-expansion-in-bitcoin-script.md) — substack, 2025-06-11
- [Native On-Chain Identity: capability-first, passwordless, and self-recovering](education\substack--native-on-chain-identity-capability.md) — substack, 2025-08-23
- [IP-to-IP Negotiated Notes: An ECDH-Derived, Multi-Transfer Wallet Protocol for Private, Settled Digital-Cash Payments](education\substack--ip-to-ip-negotiated-notes-an-ecdh.md) — substack, 2025-08-26
- [Privacy at Scale — Paying by Many Small Notes on Bitcoin](education\substack--privacy-at-scale-paying-by-many-small.md) — substack, 2025-08-27
- [Spending in the Crowd — Hiding Received Notes by Time, Split, and Change](education\substack--spending-in-the-crowd-hiding-received.md) — substack, 2025-08-29
- [Quantum-Ineffective Bitcoin: A Script-Level, Hash-Anchored Defence Against Hypothetical Quantum Key Recovery](education\substack--quantum-ineffective-bitcoin-a-script.md) — substack, 2025-09-09
- [Private Keys, Proofs, and the Illusion of Ownership in Digital Cash Systems](education\substack--private-keys-proofs-and-the-illusion.md) — substack, 2025-10-15
- [Cryptographic Control Is Fiduciary Power, Not Title](education\substack--cryptographic-control-is-fiduciary.md) — substack, 2026-01-19
- [Cryptographic Control as Fiduciary Power](education\substack--cryptographic-control-as-fiduciary.md) — substack, 2026-01-22
- [Bitcoin Does Not Use RSA — And the Quantum Machine That Would Attack It Does Not Exist](education\substack--bitcoin-does-not-use-rsa-and-the.md) — substack, 2026-04-10
- [Cold Authority: Constructing an Air-Gapped Bitcoin SV Wallet Using ElectrumSV](education\substack--cold-authority-constructing-an-air.md) — substack, 2026-05-01
- [Batching, Headers, and Throughput: Operating a Bitcoin SV Wallet with Offline Synchronisation and High-Volume Microtransactions](education\substack--batching-headers-and-throughput-operating.md) — substack, 2026-05-02
- [The body of the secret ](education\substack--the-body-of-the-secret.md) — substack, 2026-06-04
- [Post-Quantum Digital Cash](education\substack--post-quantum-digital-cash.md) — substack, 2026-07-12
- [Digital Cash Is Not a Vault](education\substack--digital-cash-is-not-a-vault.md) — substack, 2026-08-12

### audit-accounting (38)

- [Death and taxes, it is time to kill off mythical beasts](education\medium--death-and-taxes-it-is-time-to-kill-off-mythical-beasts-d7dc1dbaa615.md) — medium, 2018-09-04
- [The 1937 Crash](education\medium--the-1937-crash-c9ab5c3f5521.md) — medium, 2018-09-13
- [Bitcoin as a Notary](education\medium--bitcoin-as-a-notary-d260589fcd06.md) — medium, 2018-10-01
- [The tax implications of bitcoin as money](education\medium--the-tax-implications-of-bitcoin-as-money-2572cf2573fc.md) — medium, 2018-10-14
- [Taxing Bitcoin — Introduction.](education\medium--taxing-bitcoin-introduction-2bacb31df9ca.md) — medium, 2018-10-28
- [Taxing Bitcoin — GST implications of Bitcoin as money](education\medium--taxing-bitcoin-gst-implications-of-bitcoin-as-money-7d3b4bfabb50.md) — medium, 2018-10-30
- [A Bitcoin Smart Risk Contract](education\medium--a-bitcoin-smart-risk-contract-6ff2ac8dd93d.md) — medium, 2018-10-30
- [Tax and Bitcoin — Income tax implications of Bitcoin as money](education\medium--tax-and-bitcoin-income-tax-implications-of-bitcoin-as-money-d29498766d83.md) — medium, 2018-10-31
- [Tax and Bitcoin — Investment in Bitcoin](education\medium--tax-and-bitcoin-investment-in-bitcoin-40a23e4cbda5.md) — medium, 2018-11-01
- [Tax and Bitcoin — Transacting and accounting for Bitcoin](education\medium--tax-and-bitcoin-transacting-and-accounting-for-bitcoin-f858631f0a89.md) — medium, 2018-11-02
- [The lie of anarchy](education\medium--the-lie-of-anarchy-bd7c1f239289.md) — medium, 2018-12-13
- [BLOCKCHAIN Based Accounting:
 General Ledger Posting](education\medium--blockchain-based-accounting-general-ledger-posting-f2050cd6ed1c.md) — medium, 2018-12-14
- [Immutable evidence](education\medium--immutable-evidence-386b60a33123.md) — medium, 2019-02-16
- [Forex accounting in script](education\medium--forex-accounting-in-script-51984db05c6f.md) — medium, 2019-02-24
- [The Genesis of Genesis](education\medium--the-genesis-of-genesis-5774b2fb9bc9.md) — medium, 2019-04-12
- [Custodial standards](education\medium--custodial-standards-9dbcfe1f4c4e.md) — medium, 2019-05-10
- [Taxing Crypto](education\medium--taxing-crypto-548bf6da43fc.md) — medium, 2019-06-17
- [Bitcoin Is Anything BUT Anonymous](education\medium--bitcoin-is-anything-but-anonymous-f1d23fdc18a1.md) — medium, 2019-09-01
- [Ledgers and Design](education\medium--ledgers-and-design-22f9f2eaacc0.md) — medium, 2020-03-18
- [Scripted Supply: A Bitcoin-Based Architecture for EDI and On-Chain Commerce](education\substack--scripted-supply-a-bitcoin-based-architecture.md) — substack, 2025-06-10
- [In Praise of Shadowled Ledgers](education\substack--in-praise-of-shadowled-ledgers.md) — substack, 2025-06-14
- [On Immutable Memory Systems for Artificial Agents ](education\substack--on-immutable-memory-systems-for-artificial.md) — substack, 2025-06-16
- [Micropayments, Immutable Data, and the Economic Revolution of Near-Zero Transaction Costs](education\substack--micropayments-immutable-data-and.md) — substack, 2025-07-25
- [Resilience, Redundancy, and Real-World Data Integrity in Offline BSV Transaction Systems for Agriculture](education\substack--resilience-redundancy-and-real-world.md) — substack, 2025-08-02
- [The Audit of Fools: Statistical Illiteracy in the Cult of Full Nodes ](education\substack--the-audit-of-fools-statistical-illiteracy.md) — substack, 2025-08-22
- [Digital Cash That Doesn’t Bleed: A 11,000-Transaction Micropayment Audit Across PayPal, Stripe, Visa, Mastercard, and BSV](education\substack--digital-cash-that-doesnt-bleed-a.md) — substack, 2025-08-25
- [Spending in the Crowd — Hiding Received Notes by Time, Split, and Change](education\substack--spending-in-the-crowd-hiding-received.md) — substack, 2025-08-29
- [Sunday Reflection: Privacy, Records, and the Integrity of Exchange](education\substack--sunday-reflection-privacy-records.md) — substack, 2025-08-31
- [Engraving in Stone: Encoding Images in Bitcoin (or BTC) Transactions](education\substack--engraving-in-stone-encoding-images.md) — substack, 2025-09-08
- [The Ledger of All Things: Bitcoin as a Universal Engine of Proof](education\substack--the-ledger-of-all-things-bitcoin.md) — substack, 2025-11-30
- [The Third Entry: How Cryptography Could Fix the Weakest Link in Accounting](education\substack--the-third-entry-how-cryptography.md) — substack, 2026-02-10
- [Who Reads the Meter? The Hidden Trust Problem Underneath Every Energy Market That Runs on a Blockchain](education\substack--who-reads-the-meter-the-hidden-trust.md) — substack, 2026-05-22
- [Triple-Entry Accounting Has Been Misunderstood](education\substack--triple-entry-accounting-has-been.md) — substack, 2026-05-26
- [The Arithmetic of Trust](education\substack--the-arithmetic-of-trust.md) — substack, 2026-05-29
- [The Builder's Week: A Working Bitcoin Stack Appears, One Repository at a Time](education\substack--the-builders-week-a-working-bitcoin.md) — substack, 2026-06-01
- [Settlement Speed Is the Wrong Margin](education\substack--settlement-speed-is-the-wrong-margin.md) — substack, 2026-06-14
- [The Audit Evidence Problem Public Ledgers Were Supposed to Solve](education\substack--the-audit-evidence-problem-public.md) — substack, 2026-07-09
- [The Weakest Line in Every Ledger](education\substack--the-weakest-line-in-every-ledger.md) — substack, 2026-07-10

### networking (37)

- [Iron and Steel](education\medium--iron-and-steel-f4898687f6b0.md) — medium, 2018-06-09
- [The Gamma Monstrosity & the Probability Deception](education\medium--the-gamma-monstrosity-the-probability-deception-5e5003c4e657.md) — medium, 2018-09-08
- [IoT and the coming Toaster-world](education\medium--iot-and-the-coming-toaster-world-654edcdb977.md) — medium, 2018-09-19
- [The postal acceptance rule in Bitcoin](education\medium--the-postal-acceptance-rule-in-bitcoin-e1c38ff9a4a9.md) — medium, 2018-09-27
- [Security in a world of IPv6 and Bitcoin](education\medium--security-in-a-world-of-ipv6-and-bitcoin-a31592b4f9ac.md) — medium, 2018-10-03
- [Managing Blockchain Automata](education\medium--managing-blockchain-automata-f34fe622a6d.md) — medium, 2018-10-21
- [Property Law in the Age of Bitcoin](education\medium--property-law-in-the-age-of-bitcoin-28355604618f.md) — medium, 2018-10-31
- [Bitcoin as the Base layer](education\medium--bitcoin-as-the-base-layer-cff28c5dab9c.md) — medium, 2018-11-01
- [IPv6 with CGA and Bitcoin](education\medium--ipv6-with-cga-and-bitcoin-a761d0185d5d.md) — medium, 2018-11-02
- [The Secure (Bitcoin) Internet](education\medium--the-secure-bitcoin-internet-2f589d81890f.md) — medium, 2018-11-03
- [P2P and returning IP and Domain based transfers](education\medium--p2p-and-returning-ip-and-domain-based-transfers-9943d32bd38e.md) — medium, 2018-11-09
- [Why I troll](education\medium--why-i-troll-5304f2cbbfc3.md) — medium, 2018-11-26
- [The ASIC myth](education\medium--the-asic-myth-583aefbecce3.md) — medium, 2019-01-16
- [Generic Thin Operating  System for Blockchain IOT Devices](education\medium--generic-thin-operating-system-for-blockchain-iot-devices-32e7abf22c0e.md) — medium, 2019-02-03
- [The start of Metanet](education\medium--the-start-of-metanet-ef0560e81505.md) — medium, 2019-02-14
- [The great mining swindle](education\medium--the-great-mining-swindle-2dec8ffa819d.md) — medium, 2019-02-18
- [Merkle Trees and SPV](education\medium--merkle-trees-and-spv-da18af9f6a26.md) — medium, 2019-11-02
- [Myths of Decentralisation…](education\medium--myths-of-decentralisation-761c713ab2cd.md) — medium, 2020-02-06
- [Summary of “The Redundancy of Full Nodes in Bitcoin: A Network-Theoretic Demonstration of Miner-Centric Propagation Topologies” ](education\substack--summary-of-the-redundancy-of-full.md) — substack, 2025-06-18
- [Safe Low Bandwidth SPV: A Formal Treatment of Simplified Payment Verification Protocols and Security Bounds ](education\substack--safe-low-bandwidth-spv-a-formal-treatment.md) — substack, 2025-07-01
- [The Collapse of the Blockchain Trilemma: A Formal Analysis through Baran’s Topology and Automata Logic](education\substack--the-collapse-of-the-blockchain-trilemma.md) — substack, 2025-07-07
- [Multicast as the Only Viable Architecture for Billion-Transaction Networks](education\substack--multicast-as-the-only-viable-architecture.md) — substack, 2025-08-18
- [Multicast Within Multicast: Anycast, Sharded Resends, and Hierarchical Distribution for Transaction and Block Propagation](education\substack--multicast-within-multicast-anycast.md) — substack, 2025-08-20
- [IP-to-IP Negotiated Notes: An ECDH-Derived, Multi-Transfer Wallet Protocol for Private, Settled Digital-Cash Payments](education\substack--ip-to-ip-negotiated-notes-an-ecdh.md) — substack, 2025-08-26
- [Privacy at Scale — Paying by Many Small Notes on Bitcoin](education\substack--privacy-at-scale-paying-by-many-small.md) — substack, 2025-08-27
- [The Lifeline of Wires: Why Digital Cash Dies Without the Net](education\substack--the-lifeline-of-wires-why-digital.md) — substack, 2025-10-04
- [Linear Scaling, Not Ritual: What Teranode Actually Changes](education\substack--linear-scaling-not-ritual-what-teranode.md) — substack, 2026-03-02
- [Hash Power and the Limits of Law](education\substack--hash-power-and-the-limits-of-law.md) — substack, 2026-03-13
- [Verification Without Enforcement Is Observation, Not Security](education\substack--verification-without-enforcement.md) — substack, 2026-03-24
- [The Graveyard of Gateways: Why There Can Only Be One Blockchain](education\substack--the-graveyard-of-gateways-why-there.md) — substack, 2026-04-04
- [Time Is Not Consensus](education\substack--time-is-not-consensus.md) — substack, 2026-04-14
- [Authority Without Command: The Alert Key, Coordination, and the System That Might Have Been](education\substack--authority-without-command-the-alert.md) — substack, 2026-04-17
- [What TCP/IP Got Right](education\substack--what-tcpip-got-right.md) — substack, 2026-05-05
- [The Home Node That Never Validates](education\substack--the-home-node-that-never-validates.md) — substack, 2026-05-10
- [Small Worlds, Large Errors](education\substack--small-worlds-large-errors.md) — substack, 2026-05-11
- [Digital Money Is a Network Problem Before It Is a Monetary Slogan](education\substack--digital-money-is-a-network-problem.md) — substack, 2026-05-27
- [IPv4.1 Does Not Exist](education\substack--ipv41-does-not-exist.md) — substack, 2026-05-31

### satoshi-history (37)

- [P2P and returning IP and Domain based transfers](education\medium--p2p-and-returning-ip-and-domain-based-transfers-9943d32bd38e.md) — medium, 2018-11-09
- [Set in Stone](education\medium--set-in-stone-7ebc9d31500e.md) — medium, 2018-11-15
- [Careful what you wish for…](education\medium--careful-what-you-wish-for-c7c2f19e6c4f.md) — medium, 2019-02-08
- [The story of Bitcoin, continued](education\medium--the-story-of-bitcoin-continued-2f1ec78ba38b.md) — medium, 2019-02-09
- [Proof of Work](education\medium--proof-of-work-1a323e82fd9.md) — medium, 2019-02-16
- [Hello Dave…](education\medium--hello-dave-330c164a4aad.md) — medium, 2019-02-22
- [The myth of forks](education\medium--the-myth-of-forks-be04f8e5fe4a.md) — medium, 2019-03-06
- [The labour fallacy of mining](education\medium--the-labour-fallacy-of-mining-c2c0f919784.md) — medium, 2019-03-07
- [Satoshi Nakamoto](education\medium--satoshi-nakamoto-a7c4cf21253e.md) — medium, 2019-04-05
- [My Mentor](education\medium--my-mentor-f6ea4b828da6.md) — medium, 2019-04-07
- [Panopticrypt](education\medium--panopticrypt-ed6154e06b34.md) — medium, 2019-04-07
- [Bit Gold Is Not BitCoin](education\medium--bit-gold-is-not-bitcoin-cea96eac20c9.md) — medium, 2019-04-08
- [The Genesis of Genesis](education\medium--the-genesis-of-genesis-5774b2fb9bc9.md) — medium, 2019-04-12
- [Evidence and law](education\medium--evidence-and-law-f8f10001efa5.md) — medium, 2019-04-12
- [We don’t want to lead with “anonymous”](education\medium--we-dont-want-to-lead-with-anonymous-a4890db7766d.md) — medium, 2019-04-17
- [The immovable](education\medium--the-immovable-8aa39ee04515.md) — medium, 2019-04-23
- [Don’t be fooled — Bitcoin is not BTC](education\medium--dont-be-fooled-bitcoin-is-not-btc-61e6aee8ac53.md) — medium, 2019-05-08
- [Why code must not be law](education\medium--why-code-must-not-be-law-438e2cafe2e4.md) — medium, 2019-05-18
- [Funding and rights](education\medium--funding-and-rights-baf26b37947f.md) — medium, 2019-05-20
- [Satoshi and the Sophists](education\medium--satoshi-and-the-sophists-9c940d4eb22e.md) — medium, 2019-05-23
- [Zeno’s Paradoxes and Bitcoin](education\medium--zenos-paradoxes-and-bitcoin-d96a0286ee7.md) — medium, 2019-07-26
- [Subsidised Growth](education\medium--subsidised-growth-3363ab447c89.md) — medium, 2019-07-29
- [Why Law Matters](education\medium--why-law-matters-db0e32492d05.md) — medium, 2019-08-02
- [Bitcoin Is Anything BUT Anonymous](education\medium--bitcoin-is-anything-but-anonymous-f1d23fdc18a1.md) — medium, 2019-09-01
- [Satoshi; or, The Solution to Nakamoto’s Dilemma](education\medium--satoshi-or-the-solution-to-nakamotos-dilemma-22829108ee46.md) — medium, 2019-09-28
- [If Gold Turned to Lead](education\medium--if-gold-turned-to-lead-54e82c27b79b.md) — medium, 2019-10-21
- [Merkle Trees and SPV](education\medium--merkle-trees-and-spv-da18af9f6a26.md) — medium, 2019-11-02
- [Looking the Other Way](education\medium--looking-the-other-way-116ace0a875e.md) — medium, 2020-01-17
- [Satoshi and the Byzantine Generals](education\medium--satoshi-and-the-byzantine-generals-6804bb6629b7.md) — medium, 2020-03-24
- [As an Autistic Savant…](education\medium--as-an-autistic-savant-55075026dc48.md) — medium, 2020-04-16
- [Set in Stone or Sold to the Highest Bidder: Why Immutability Is Bitcoin's Only Defence](education\substack--set-in-stone-or-sold-to-the-highest.md) — substack, 2025-06-17
- [Stablecoins and the Lost Spark](education\substack--stablecoins-and-the-lost-spark.md) — substack, 2025-06-19
- [The Cult of Digital Metallurgy and the Poverty of Small Minds](education\substack--the-cult-of-digital-metallurgy-and.md) — substack, 2025-11-20
- [The Ledger of All Things: Bitcoin as a Universal Engine of Proof](education\substack--the-ledger-of-all-things-bitcoin.md) — substack, 2025-11-30
- [The Forked Illusion: How Both Sides Cannot Be Right About Bitcoin—and Why Both Are Exposed by Their Own Logic](education\substack--the-forked-illusion-how-both-sides.md) — substack, 2025-12-07
- [Authority Without Command: The Alert Key, Coordination, and the System That Might Have Been](education\substack--authority-without-command-the-alert.md) — substack, 2026-04-17
- [The Gospel According to Grok](education\substack--the-gospel-according-to-grok.md) — substack, 2026-05-06

### lightning-l2 (34)

- [Lightning is malleable… Steel is not](education\medium--lightning-is-malleable-steel-is-not-4e68bfdef31.md) — medium, 2018-06-19
- [Negotiable Instruments](education\medium--negotiable-instruments-ad059d60f0e4.md) — medium, 2018-07-02
- [Limited change to bring stability](education\medium--limited-change-to-bring-stability-36abb2fed8e1.md) — medium, 2018-08-19
- [Vampire Securities from beyond the Wormhole](education\medium--vampire-securities-from-beyond-the-wormhole-8c4e691c809e.md) — medium, 2018-09-06
- [Worm-a-nomics](education\medium--worm-a-nomics-e8d59107f6d0.md) — medium, 2018-09-07
- [Q&A/Written Interview — The answers — Part 4](education\medium--q-a-written-interview-the-answers-part-4-d6bfed8c4261.md) — medium, 2018-09-19
- [Hoarding and Bitcoin](education\medium--hoarding-and-bitcoin-b158d465aea6.md) — medium, 2018-09-24
- [Sun-setting P2SH](education\medium--sun-setting-p2sh-8b3c08f271c0.md) — medium, 2018-11-08
- [nSequence and P2P exchange](education\medium--nsequence-and-p2p-exchange-9e4cbf32124c.md) — medium, 2018-11-13
- [Why CLTV was a bad idea](education\medium--why-cltv-was-a-bad-idea-4b5d0c043e2a.md) — medium, 2019-01-08
- [“Lightning” Network and the Financial Industry Regulatory Authority (FINRA)](education\medium--lightning-network-and-the-financial-industry-regulatory-authority-finra-bbbf28ccddac.md) — medium, 2019-02-01
- [Careful what you wish for…](education\medium--careful-what-you-wish-for-c7c2f19e6c4f.md) — medium, 2019-02-08
- [Immutable evidence](education\medium--immutable-evidence-386b60a33123.md) — medium, 2019-02-16
- [Hello Dave…](education\medium--hello-dave-330c164a4aad.md) — medium, 2019-02-22
- [Schnorr](education\medium--schnorr-21be14ac05f5.md) — medium, 2019-03-03
- [Why Lightning will never be currency, and why BSV matters](education\medium--why-lightning-will-never-be-currency-and-why-bsv-matters-60dfa5c9ac4d.md) — medium, 2019-03-15
- [Welcome to science](education\medium--welcome-to-science-c5e33a827449.md) — medium, 2019-03-30
- [Evidence and law](education\medium--evidence-and-law-f8f10001efa5.md) — medium, 2019-04-12
- [Institutional madness](education\medium--institutional-madness-6f4fade7b9fc.md) — medium, 2019-05-16
- [The Property Flaw of Lightning](education\medium--the-property-flaw-of-lightning-d36ebf5b78a3.md) — medium, 2020-03-27
- [Ghosts of Gold: Fractional Reserve Dynamics in the Age of BTC](education\substack--ghosts-of-gold-fractional-reserve.md) — substack, 2025-07-28
- [Why Secure Blockchain Voting is So Hard: A Deep Dive into True Anonymity, ECDSA Blinding, and the Myths of Digital Democracy](education\substack--why-secure-blockchain-voting-is-so.md) — substack, 2025-07-31
- [Pennies and Power: How Micropayments Could Break the Corporate Siege](education\substack--pennies-and-power-how-micropayments.md) — substack, 2025-08-09
- [Definitional Corruption and the Erosion of Truth: A Wittgensteinian Analysis of BTC Debates](education\substack--definitional-corruption-and-the-erosion.md) — substack, 2025-09-25
- [The Failure of BTC Core’s Changes: A Case Study in Protocol Capture and Manipulation](education\substack--the-failure-of-btc-cores-changes.md) — substack, 2025-09-26
- [The Lie of Progress: How Bitcoin Became Fiat in a Digital Suit](education\substack--the-lie-of-progress-how-bitcoin-became.md) — substack, 2025-10-27
- [The Five-Per-Second Delusion: How “Hard Money” Becomes Soft IOUs](education\substack--the-five-per-second-delusion-how.md) — substack, 2025-11-05
- [Lightning’s Velvet Manacles: Watchtowers, Custody, and the Quiet Return of Shadow Banking](education\substack--lightnings-velvet-manacles-watchtowers.md) — substack, 2025-11-12
- [When Five TPS Becomes a Sacred Bull](education\substack--when-five-tps-becomes-a-sacred-bull.md) — substack, 2025-11-18
- [The Toll Road You Were Promised Would Be Free: How Refusing to Scale Rebuilds the Banks](education\substack--the-toll-road-you-were-promised-would.md) — substack, 2026-04-08
- [What Siggi Built](education\substack--what-siggi-built.md) — substack, 2026-04-22
- [Five Transactions a Second, and Other Discourtesies to Commerce](education\substack--five-transactions-a-second-and-other.md) — substack, 2026-05-19
- [Selling the Unspent Chain](education\substack--selling-the-unspent-chain.md) — substack, 2026-05-28
- [BTC Is Banking with Extra Steps](education\substack--btc-is-banking-with-extra-steps.md) — substack, 2026-06-18

### spv-light-clients (30)

- [Bitcoin and Contracts](education\medium--bitcoin-and-contracts-3542ae5f43ff.md) — medium, 2018-09-29
- [Bitcoin (BCH) Vending machine](education\medium--bitcoin-bch-vending-machine-600666d669d0.md) — medium, 2018-10-10
- [P2P and returning IP and Domain based transfers](education\medium--p2p-and-returning-ip-and-domain-based-transfers-9943d32bd38e.md) — medium, 2018-11-09
- [Instant transactions](education\medium--instant-transactions-a11f391fbd57.md) — medium, 2018-12-09
- [Bitcoin in law](education\medium--bitcoin-in-law-7f2604f9fcd6.md) — medium, 2018-12-18
- [The myth of the full validation node](education\medium--the-myth-of-the-full-validation-node-d7db52748649.md) — medium, 2018-12-21
- [Forks as a demerger, or a split as a copy?](education\medium--forks-as-a-demerger-or-a-split-as-a-copy-c38bf6d8abed.md) — medium, 2019-03-20
- [Patent wars…](education\medium--patent-wars-24929b73f381.md) — medium, 2019-04-13
- [Economic Security](education\medium--economic-security-d43518f47fd2.md) — medium, 2019-05-22
- [Subsidised Growth](education\medium--subsidised-growth-3363ab447c89.md) — medium, 2019-07-29
- [Simplified Payment Verification](education\medium--simplified-payment-verification-4a260d272a38.md) — medium, 2019-10-09
- [Merkle Trees and SPV](education\medium--merkle-trees-and-spv-da18af9f6a26.md) — medium, 2019-11-02
- [Mistakes Also Come when You Listen to Others…](education\medium--mistakes-also-come-when-you-listen-to-others-fd2838fab578.md) — medium, 2020-01-15
- [Satoshi and the Byzantine Generals](education\medium--satoshi-and-the-byzantine-generals-6804bb6629b7.md) — medium, 2020-03-24
- [Re: Moxie on Web3](education\medium--re-moxie-on-web3-b0cfccd68067.md) — medium, 2022-01-08
- [Safe Low Bandwidth SPV: A Formal Treatment of Simplified Payment Verification Protocols and Security Bounds ](education\substack--safe-low-bandwidth-spv-a-formal-treatment.md) — substack, 2025-07-01
- [A Mechanism of Honour - Ledger of Blood and Electricity](education\substack--a-mechanism-of-honour-ledger-of-blood.md) — substack, 2025-07-30
- [Mechanised Myths: Control, Compliance, and the Dystopian Present](education\substack--mechanised-myths-control-compliance.md) — substack, 2025-08-05
- [Multicast as the Only Viable Architecture for Billion-Transaction Networks](education\substack--multicast-as-the-only-viable-architecture.md) — substack, 2025-08-18
- [The Audit of Fools: Statistical Illiteracy in the Cult of Full Nodes ](education\substack--the-audit-of-fools-statistical-illiteracy.md) — substack, 2025-08-22
- [Double-Spend Assurance without Blocks: Designing Miner-Signed Proofs and Spentness Commitments in a Header-Only System](education\substack--double-spend-assurance-without-blocks.md) — substack, 2025-09-07
- [Private Keys, Proofs, and the Illusion of Ownership in Digital Cash Systems](education\substack--private-keys-proofs-and-the-illusion.md) — substack, 2025-10-15
- [The Ledger and the Load-Bearers](education\substack--the-ledger-and-the-load-bearers.md) — substack, 2025-12-12
- [The Cult of the Full Node](education\substack--the-cult-of-the-full-node.md) — substack, 2025-12-15
- [Linear Scaling, Not Ritual: What Teranode Actually Changes](education\substack--linear-scaling-not-ritual-what-teranode.md) — substack, 2026-03-02
- [Verification Without Enforcement Is Observation, Not Security](education\substack--verification-without-enforcement.md) — substack, 2026-03-24
- [Batching, Headers, and Throughput: Operating a Bitcoin SV Wallet with Offline Synchronisation and High-Volume Microtransactions](education\substack--batching-headers-and-throughput-operating.md) — substack, 2026-05-02
- [Verification Without Enforcement](education\substack--verification-without-enforcement-8b2.md) — substack, 2026-05-18
- [The Arithmetic of Trust](education\substack--the-arithmetic-of-trust.md) — substack, 2026-05-29
- [Zero-Confirmation and the Cult of the Spectator](education\substack--zero-confirmation-and-the-cult-of.md) — substack, 2026-06-07

### identity (29)

- [Bitcoin as a Notary](education\medium--bitcoin-as-a-notary-d260589fcd06.md) — medium, 2018-10-01
- [Personal Security Device](education\medium--personal-security-device-102c2441b5a2.md) — medium, 2018-10-09
- [Digital signature rules and their relationship to bitcoin](education\medium--digital-signature-rules-and-their-relationship-to-bitcoin-b1faeae1f446.md) — medium, 2018-10-16
- [Hearsay in the Blockchain world](education\medium--hearsay-in-the-blockchain-world-e75196db28fe.md) — medium, 2018-10-24
- [IPv6 with CGA and Bitcoin](education\medium--ipv6-with-cga-and-bitcoin-a761d0185d5d.md) — medium, 2018-11-02
- [Why Silk Road was an abyss](education\medium--why-silk-road-was-an-abyss-67526e2902da.md) — medium, 2018-12-10
- [Bitcoin’s privacy model](education\medium--bitcoins-privacy-model-7ef7e79caf9f.md) — medium, 2018-12-11
- [Smart-card-based mobile wallets](education\medium--smart-card-based-mobile-wallets-9cb75595b71d.md) — medium, 2019-01-13
- [Profiting from privacy](education\medium--profiting-from-privacy-78c35dcb0a35.md) — medium, 2019-03-10
- [Proof](education\medium--proof-22e2cd5fc385.md) — medium, 2019-03-13
- [Free Speech](education\medium--free-speech-526a972d5fb5.md) — medium, 2019-03-18
- [Saving research](education\medium--saving-research-97c9e63a3756.md) — medium, 2019-04-02
- [Trolls and bullies](education\medium--trolls-and-bullies-d19287bb754d.md) — medium, 2019-04-11
- [PII in the Bitcoin World](education\medium--pii-in-the-bitcoin-world-4eb0416124b6.md) — medium, 2019-08-01
- [Bitcoin Is Anything BUT Anonymous](education\medium--bitcoin-is-anything-but-anonymous-f1d23fdc18a1.md) — medium, 2019-09-01
- [Human Rights and Property](education\medium--human-rights-and-property-34bb3120af08.md) — medium, 2019-09-03
- [How Digital Signatures Work](education\medium--how-digital-signatures-work-efd303fa8f11.md) — medium, 2020-01-21
- [Cryptography and Bitcoin](education\medium--cryptography-and-bitcoin-b64db06299e3.md) — medium, 2020-02-20
- [As an Autistic Savant…](education\medium--as-an-autistic-savant-55075026dc48.md) — medium, 2020-04-16
- [In Praise of Shadowled Ledgers](education\substack--in-praise-of-shadowled-ledgers.md) — substack, 2025-06-14
- [Why Secure Blockchain Voting is So Hard: A Deep Dive into True Anonymity, ECDSA Blinding, and the Myths of Digital Democracy](education\substack--why-secure-blockchain-voting-is-so.md) — substack, 2025-07-31
- [Native On-Chain Identity: capability-first, passwordless, and self-recovering](education\substack--native-on-chain-identity-capability.md) — substack, 2025-08-23
- [Digital Identity and the Architecture of Autonomy: A Framework for Self-Sovereign Verification in a Stateless System](education\substack--digital-identity-and-the-architecture.md) — substack, 2025-10-28
- [The Third Entry: How Cryptography Could Fix the Weakest Link in Accounting](education\substack--the-third-entry-how-cryptography.md) — substack, 2026-02-10
- [The Mark That Belongs to No One](education\substack--the-mark-that-belongs-to-no-one.md) — substack, 2026-03-05
- [The Return of the Bearer Share](education\substack--the-return-of-the-bearer-share.md) — substack, 2026-03-07
- [The Bearer Share Is Dead. Long Live Proof of Stake.](education\substack--the-bearer-share-is-dead-long-live.md) — substack, 2026-03-18
- [The Gospel According to Grok](education\substack--the-gospel-according-to-grok.md) — substack, 2026-05-06
- [IPv4.1 Does Not Exist](education\substack--ipv41-does-not-exist.md) — substack, 2026-05-31

### satire (11)

- [The High Priests of “crypto” and the dogma wars](education\medium--the-high-priests-of-crypto-and-the-dogma-wars-100b56771c9e.md) — medium, 2020-02-22
- [In Praise of Shadowled Ledgers](education\substack--in-praise-of-shadowled-ledgers.md) — substack, 2025-06-14
- [The Little Coin That Wasn’t Afraid](education\substack--the-little-coin-that-wasnt-afraid.md) — substack, 2025-06-16
- [Resilience, Redundancy, and Real-World Data Integrity in Offline BSV Transaction Systems for Agriculture](education\substack--resilience-redundancy-and-real-world.md) — substack, 2025-08-02
- [The Lifeline of Wires: Why Digital Cash Dies Without the Net](education\substack--the-lifeline-of-wires-why-digital.md) — substack, 2025-10-04
- [The Great Global Skim](education\substack--the-great-global-skim.md) — substack, 2025-11-21
- [The Ledger and the Load-Bearers](education\substack--the-ledger-and-the-load-bearers.md) — substack, 2025-12-12
- [The Chessboard, the Grain, and the Fee Market That Ate Itself](education\substack--the-chessboard-the-grain-and-the.md) — substack, 2026-03-15
- [The Gospel According to Grok](education\substack--the-gospel-according-to-grok.md) — substack, 2026-05-06
- [The Myth of the Sovereign Node](education\substack--the-myth-of-the-sovereign-node.md) — substack, 2026-05-07
- [The Arithmetic of the Last Fool](education\substack--the-arithmetic-of-the-last-fool.md) — substack, 2026-06-12

### ai-blockchain (7)

- [Blockchain-Based Decentralised Autonomous Corporations: An Overview](education\medium--blockchain-based-decentralised-autonomous-corporations-an-overview-5dc0d469fcb5.md) — medium, 2018-10-17
- [Neural Network Threshold Oracles](education\medium--neural-network-threshold-oracles-92497c2f245c.md) — medium, 2018-10-26
- [Finite State Machines in Script](education\medium--finite-state-machines-in-script-21539501ac5e.md) — medium, 2019-03-18
- [On Immutable Memory Systems for Artificial Agents ](education\substack--on-immutable-memory-systems-for-artificial.md) — substack, 2025-06-16
- [The Dawn of the Nano-Economy: New Frontiers Unlocked by Sub-Cent Micropayments](education\substack--the-dawn-of-the-nano-economy-new.md) — substack, 2025-07-29
- [An Open Market for Intelligence](education\substack--an-open-market-for-intelligence.md) — substack, 2026-06-04
- [Order On-Chain, Content Off-Chain, Judgement in the Overlay](education\substack--order-on-chain-content-off-chain.md) — substack, 2026-08-11

### quantum-scepticism (7)

- [Bitcoin and Quantum Computing](education\medium--bitcoin-and-quantum-computing-b6f048db01eb.md) — medium, 2019-01-23
- [Quantum-Ineffective Bitcoin: A Script-Level, Hash-Anchored Defence Against Hypothetical Quantum Key Recovery](education\substack--quantum-ineffective-bitcoin-a-script.md) — substack, 2025-09-09
- [Quantum Illusions: The False Promise of Quantum Threats and the Manipulation of Cryptographic Fear](education\substack--quantum-illusions-the-false-promise.md) — substack, 2025-10-16
- [Bitcoin Does Not Use RSA — And the Quantum Machine That Would Attack It Does Not Exist](education\substack--bitcoin-does-not-use-rsa-and-the.md) — substack, 2026-04-10
- [The Theft That Never Was](education\substack--the-theft-that-never-was.md) — substack, 2026-04-17
- [The Quantum Apocalypse Is Coming Any Decade Now, So Here Is the Solution to a Problem That Will Not Exist](education\substack--the-quantum-apocalypse-is-coming.md) — substack, 2026-04-27
- [Post-Quantum Digital Cash](education\substack--post-quantum-digital-cash.md) — substack, 2026-07-12

## Dropped essays

49 essays were dropped. Full per-essay reasons live in `data/education_index.json`;
the list below is for manual spot-checking (borderline calls are inevitable in a corpus this polemical).

| Era | Date | Title | Reason |
|---|---|---|---|
| medium | 2018-09-01 | Black Mirror | Event commentary, persona memoir and hash-war positioning; PoSM concept carries thin educational residue. |
| medium | 2018-09-02 | BCH is Bitcoin. | Single-sentence branding assertion with zero reasoning or teaching content. |
| medium | 2018-09-04 | For more | Directory post cataloguing an alias; bibliographic self-promotion, no teaching content. |
| medium | 2018-09-04 | More from me | Second directory post of alias links; teasers only, educational substance lives in linked essays. |
| medium | 2018-09-05 | The paradox of the Übermensch | Satoshi-identity campaign and memoir; translucent-money idea is thin and already covered elsewhere. |
| medium | 2018-09-16 | Q&A/Written Interview — The answers — Part 1 | Autobiography and self-promotion; only a thin restatement of on-chain scaling and anti-hobbyist-node equality. |
| medium | 2018-09-18 | I avoid bullshit and scams. | Three-line satire/purity declaration; no protocol, economic or legal teaching. |
| medium | 2018-10-23 | OpSec and the Bitcoin business | Generic organisational security primer (TCB, least privilege, media sanitation); no Bitcoin-specific educational residue. |
| medium | 2018-12-10 | The Fury | Confessional memoir: childhood, cancer, Kleiman's death, Liberty Reserve — autobiography, thin educational residue. |
| medium | 2018-12-30 | Splitting a registry | Single-sentence teaser with no mechanism, argument, or teaching residue. |
| medium | 2019-03-19 | DMCA | Twitter-suspension demand letter and Blockstream/Satoshi grievance; Bitcoin-as-evidence line is thin residue already distilled elsewhere. |
| medium | 2019-03-21 | Privacy versus hypocrisy | Satoshi-authorship/litigation memoir and deterrence; privacy-as-exclusion and fixed-protocol lines already distilled from adjacent essays. |
| medium | 2019-04-06 | Two steps forward, one step back | Satoshi-authorship memoir: early-network servers, Kleiman, ATO, criminal infrastructure — thin educational residue. |
| medium | 2019-04-08 | The Reason for Law | Kleiman Exhibit 11 forensics and libel threats; litigation, not protocol education. |
| medium | 2019-04-11 | Bitcoin and Contract Jurisdiction | Six-sentence stub asserting smart contracts fix jurisdiction; no mechanism — thin residue. |
| medium | 2019-04-16 | Wiki | Satoshi-authorship memoir on white-paper citations and Wikipedia sourcing; cash-as-commodity line is thin residue. |
| medium | 2019-04-25 | Misinformation and the myth of Satoshi | Satoshi-authorship counter to Patoshi; IP ranges and charity memoir — no lasting protocol lesson. |
| medium | 2019-05-30 | The GST Story | Autobiographical ATO/GST stunt; GST-on-money one-liner is thin residue. |
| medium | 2019-05-30 | Satoshi and Science | Satoshi-authorship/litigation; code-is-law line is thin residue already taught in the companion essay. |
| medium | 2019-06-03 | From the Bygone Days of Yore — Part 1 | Satoshi-authorship/litigation memoir reconstructing 2012 corporate history and Kleiman meetings; no protocol teaching. |
| medium | 2019-06-06 | Fully Peer-to-Peer | Satoshi-authorship campaign publishing a 2011 Gavin email; no remaining BSV protocol principle. |
| medium | 2019-06-11 | Feign Madness but Keep Your Balance | Self-promotion of Twitter persona, patents and PhDs; Visa-scale TPS line is thin residue. |
| medium | 2019-06-13 | On scammers | Kleiman/ATO litigation brief; mining-to-unowned-keys line is thin residue inside a defence narrative. |
| medium | 2019-06-18 | The Genetic Fallacy | Satoshi-authorship defence via informal-fallacy lecture; no protocol teaching after stripping persona argument. |
| medium | 2019-09-12 | Satoshi’s Vision: The Art of Bitcoin | Book-announcement self-promotion; no protocol or BSV teaching. |
| medium | 2019-11-04 | On Scammers, a redux. | Kleiman litigation and Satoshi-authorship polemic; ledger-contracts line is thin residue. |
| medium | 2020-01-03 | A story of apples | Kleiman litigation memoir and Satoshi-partnership denial; no protocol teaching. |
| medium | 2020-02-14 | Hey up Craig, | Reader question only; no Craig argument. Token-set claim already distilled from the prior essay. |
| medium | 2020-02-14 | This article outlines the difference between btc, bch, eth, lite and other forks PERFECTLY. | Thin third-person endorsement of a prior passing-off post; BTC/BCH polemic and Satoshi-authorship with no standalone BSV teaching. |
| medium | 2020-04-02 | Satoshi NEVER Posted on Bitcointalk | Satoshi-authorship and forum-record litigation; no protocol or BSV teaching. |
| medium | 2020-07-06 | The way you explain how Bitcoin can not stop debt, convinces me that you don’t understand how… | Single-sentence reply; thin residue with no standalone teaching. |
| substack | 2025-06-14 | MicroTragedy™ | Satire of MicroStrategy leverage and BTC treasury theology; no protocol or BSV teaching. |
| substack | 2025-07-08 | Digital Manipulation: An Exploration of Kripkean Dogmatism and Dark Triad Traits in Cryptocurrency Social Media Communities | Social-psychology of crypto social-media dogmatism; no extractable BSV protocol, Script, UTXO or monetary teaching. |
| substack | 2025-08-20 | The Gospel of the Sellout | Satirical BTC/ETF polemic; content collapses without the attack target, no extractable mechanism. |
| substack | 2025-08-29 | The Thousand Little Coins of Ledgerford | Ledgerford satirical fable; mechanisms fully covered by companion technical essays. |
| substack | 2025-09-11 | Harry Ledger and the Philosopher’s Coin | Hashwarts satire; truncated excerpt, no extractable educational principle. |
| substack | 2025-09-27 | The Hollow Empire: A Satire of BTC Core as a Parasitic Bureaucracy Masquerading as Innovation | Satirical BTC/Core bureaucracy polemic; non-technical performance attack whose substance is captured by adjacent essays. |
| substack | 2025-10-30 | Consortium and Crowdsourced Model for Next-Generation Research and Patent Development | Patent-programme prospectus and fundraising; self-promotion with no standalone educational principle. |
| substack | 2025-11-15 | Ventriloquising the Void: How Economies Pretend to Speak | Price-as-theology satire; behavioural-market polemic with no extractable protocol or monetary-design mechanism. |
| substack | 2025-11-23 | The Coin That Must Never Rise | Intermedion satire allegory; dramatised intermediary critique with no extractable technical principle. |
| substack | 2025-11-25 | The Ledger of Fools | Dystopian satire novella; BTC/Lightning polemic whose content collapses without the attack target. |
| substack | 2025-11-27 | The Cult of Cross-Disciplinary Prophets | Credential-drift satire and Finney price-prophecy takedown; monetary residue too thin to distil. |
| substack | 2025-12-09 | The Ministry of Unnecessary Words | Ledgerfall satire fable; governance-semantic point already captured by non-satirical essays. |
| substack | 2025-12-10 | The Bridge of Shouted Standards | Companion satire fable; consolidation-versus-control distinction covered by concentration essay. |
| substack | 2026-04-06 | Ten Thousand Qubits and a Prayer | Satirical forensic takedown of one quantum preprint; quantum-fraud polemic with no Bitcoin builder residue. |
| substack | 2026-04-06 | Quantum Computing Is a Multi-Hundred-Billion-Dollar Fraud | Quantum-industry fraud documentation; no Bitcoin mechanism, defence design or transferable builder guidance. |
| substack | 2026-04-07 | Quantum Computing Will Not Crack Encryption. It Is a Lie. Even If It Weren't, the Numbers Are Absurd. | Quantum-threat-to-encryption polemic; Bitcoin-specific exposure is covered by the kept secp256k1 essay. |
| substack | 2026-04-09 | From Microseconds to Weeks: The Timescale Problem That Makes Quantum Computing Impossible Right Now — if not forever! | Quantum-hardware timescale argument with no Bitcoin content; physics polemic, not quantum-defence design. |
| substack | 2026-06-17 | The Retrodiction Fallacy: Backfitting, Power Laws, and the Manufacture of Predictive Authority | Price theology and forecasting methodology: power-law overlays and backfitting, with no remaining BSV protocol or monetary-design principle after stripping. |
