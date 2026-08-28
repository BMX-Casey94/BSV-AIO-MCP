---
title: 'Patent wars…'
date: 2019-04-13
slug: patent-wars-24929b73f381
url: https://medium.com/@craig_10243/patent-wars-24929b73f381
themes: [btc-critique, spv-light-clients, scaling-throughput, law-regulation]
---

# Patent wars…
**Date:** 2019-04-13 | **URL:** https://medium.com/@craig_10243/patent-wars-24929b73f381
**Subtitle:** Blockstream raised USD60 million on the promise of 2 patents. The patents are:

## Core thesis
Craig contrasts Blockstream's patent position — two pending applications (ledger amount-concealment and pegged sidechains) behind USD60–101 million of funding — with nChain's pipeline (16 granted, 700 published, 1,278 families in progress, aiming at 10,000), arguing that Blockstream's entire technical programme is directed at destroying Bitcoin's evidentiary transaction record to serve illicit markets. Sidechains and confidential amounts are, he claims, record-destruction mechanisms whose only use case is money laundering, incompatible with commercial law and MLD5. He closes with a defence of his own corporate record: nChain's spending (~AU$140 million over six years), the rejected Australian R&D claim, the iDaemon→Teranode scaling project, and injunctions against ex-employees who stole IP.

## Key arguments and claims
- "Blockstream raised USD60 million on the promise of 2 patents": WO2016200885A1 ("Cryptographically concealing amounts transacted on a ledger while preserving a network's ability to verify the transaction") and US20160330034A1 ("Transferring ledger assets between blockchains via pegged sidechains"). "Neither have been granted; both remain pending."
- Adam Back's granted patent US7523499 ("Security attack detection and defense") is a pre-Bitcoin Microsoft patent unrelated to blockchain; it shows only that "he could follow through on something of such form".
- The sidechain patent "calls for an SPV proof. SPV or simplified payment verification is defined in section 8 of the Bitcoin white paper. It involves a Bayesian query system" — users keep block headers of the longest proof-of-work chain and verify the Merkle branch. Critics who say SPV "doesn't work" are motivated by the patents.
- Sidechains' real purpose: "a completely new blockchain that runs in parallel to Bitcoin but which may be deleted periodically… The concept allows for accounts without a history. It is effectively opening up the ability to launder money and engage in illicit activity. Doing so in effect is the only use case."
- No scaling saving: "In a system with 1 million transactions occurring using a sidechain, we have just as much data being created as in a system that is a single blockchain. There is no saving in having many blockchains running as sidechains unless you incorporate record destruction."
- Legitimate commerce needs records: share transfers, tokenised securities and tax receipts "need to be maintained", so they cannot run on deletable sidechains; only illicit purchases benefit from lost history.
- "I created Bitcoin following my time in an audit firm. It helps create an honest marketplace. It reduces corporate fraud, tax fraud, and general account fraud."
- nChain numbers: "16 patents that have been granted, 700 patents that have been published, and a total at present of 1278 patent families in progress… a patent pipeline that will likely deliver over 10,000 patents."
- Blockstream funding: "multiple rounds of funding for a total of over USD101 million with a seed round alone of USD21 million… they have not managed a single useful addition to Bitcoin"; Lightning is a "boondoggle" and BTC is "an airdrop copy that I will refer to as SegWit coin".
- On the rejected Australian R&D claim (USD36 million): he is glad — had it been granted, the funds would have stayed in Australian jurisdiction and each Bitcoin-derived airdrop would be taxable there. "BTC has become a new creation… a new system with an initial value grant. As such, it is taxable."
- Team economics: 50+ engineers/researchers at ~£130,000 average cost = £6.5–7 million/year; with offices, legal and accounting, £10–12 million/year; running since 2013 (incl. predecessor DeMorgan) at ~AU$23 million/year, "an amount in excess of AU$140 million" total. Australia's R&D incentive returns 43.5% of eligible expenditure for companies under AU$20 million turnover.
- IP-theft defence: "We fired multiple staff members who were engaged in the theft of intellectual property", took out an injunction after they sought AU$10–20 million in seed capital, and "at least one of them leaked modified stolen information. Others altered records." Against every altered record "there are around 3000 business documents" reviewed by lawyers, accountants and auditors.
- Corporate-governance alibi: he ran a public company with Ernst & Young as internal auditors/risk advisers, KPMG as external auditors, three chartered accounting firms, a CFO and an audit committee — "I have no access to the financial systems of the companies I manage or have founded. I like it better that way."
- Scaling roadmap: iDaemon, "a micro-services node designed to scale", becomes Teranode, launching "next year" (2020), scaling "into terabytes and eventually petabytes per 10-minute blocks… all commerce on a single system that is immutable and resistant to fraud". Protocol tinkering by others ("a protocol that was designed to be fixed and set in stone kept being modified") delayed a scaled node "years".
- Amount-concealment cryptography "would not meet the requirements of the MLD5 updates that are due to come to force in January 2020"; anonymous digital cash is trivially stopped by law — "Strict liability offences of mere possession utterly destroy the usefulness of any such system".
- "BTC is not Bitcoin. It is a fraudulent airdrop designed to scam money out of the unwary." He quotes that Bitcoin is "'pseudo anonymous' rather than 'anonymous'", hence Silk Road's capture.

## How Craig reasons (his model/logic)
The method is comparative balance-sheet rhetoric: patent counts, funding rounds, salary costs and cumulative spend are tabulated to invert the "scam" accusation onto Blockstream and Ethereum ("a dead-end project… raised in excess of USD200 million"). Technically he argues from first principles of data — sidechains create no storage saving without deletion, so their only differentiator is record destruction, which he then maps onto AML law (MLD5, strict liability) to conclude illegality. Interleaved is reputation management: hearsay rules for leaked documents, auditor/CFO governance as distance from financial records, and the framing of all opposition as a funded campaign for an "anonymous drug coin".

## Where this contradicts BTC-mainstream logic
- Contradicts the sidechains/Layer-2 scaling consensus of 2014–2019 (Blockstream's pegged sidechains paper, Lightning): Craig argues L2 adds overhead and its only real function is deleting history — scaling must happen on the base layer (Teranode, terabyte blocks).
- Contradicts the confidential-transactions/privacy-enhancement research programme (Back, Maxwell, Mimblewimble-era): concealing amounts has "no valid system" outcome and exists only for illicit use.
- Contradicts the "SPV is broken/unsafe" talking point he attributes to BTC advocates: SPV per whitepaper section 8 works, and denying it serves patent interests.
- Contradicts the anti-patent, open-source ethos of crypto: he weaponises patent counts as the metric of genuine innovation and productivity.
- Contradicts the "BTC is Bitcoin" continuity claim: BTC is a taxable "airdrop copy" / "SegWit coin", a new asset with an initial value grant — with deliberate tax-law consequences for holders.

## Notable quotes
- "Neither have been granted; both remain pending."
- "The concept allows for accounts without a history. It is effectively opening up the ability to launder money and engage in illicit activity."
- "There is no saving in having many blockchains running as sidechains unless you incorporate record destruction."
- "I created Bitcoin following my time in an audit firm. It helps create an honest marketplace."
- "Not two, 10,000."
- "BTC is not Bitcoin. It is a fraudulent airdrop designed to scam money out of the unwary."
- "Code is not law and never will be."

## Connections
Extends the MLD5 argument from "Forget anonymity." (three days earlier) and the Lightning/"drug coin" attack from "Evidence and law" (previous day); the SPV defence ties to his whitepaper-exegesis pieces, and Teranode/iDaemon resurfaces in later scaling posts. Cites the two Blockstream patent applications, Adam Back's Microsoft patents, Crunchbase funding data, Trustnodes on the Ethereum Foundation, and the Australian R&D Tax Incentive; the ex-employee injunction and altered-records claims relate to his ongoing litigation defence (Kleiman era).
