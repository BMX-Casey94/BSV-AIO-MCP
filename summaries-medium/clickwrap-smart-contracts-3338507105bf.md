---
title: 'Clickwrap smart contracts'
date: 2019-03-03
slug: clickwrap-smart-contracts-3338507105bf
url: https://medium.com/@craig_10243/clickwrap-smart-contracts-3338507105bf
themes: [law-regulation, script-technical, tokenisation, protocol-immutability]
---

# Clickwrap smart contracts
**Date:** 2019-03-03 | **URL:** https://medium.com/@craig_10243/clickwrap-smart-contracts-3338507105bf
**Subtitle:** Clickwrap contracts are functionally the same as the shrink wrap method in software licenses and other product offerings, but formed in...

## Core thesis
Clickwrap contracts are well-established in law, and Bitcoin — as an immutable evidence system — can solve their residual formation and notice problems. Craig proposes a concrete smart-contract mechanism: gate delivery of purchased content behind a hash puzzle of the form Hash("Terms and Conditions" || "I agree"), so the buyer provably downloaded and viewed the terms before receiving the unlock code, producing irrefutable on-chain evidence of acceptance on Bitcoin (BSV) and the Metanet.

## Key arguments and claims
- Clickwrap/"clickthrough" contracts are the digital successors of shrink-wrap licences and "the most commonly formed web-based contracts"; web responses are instantaneous communications, so contract-formation rules for instantaneous transactions apply.
- *Entores Ltd v Miles Far East Corporation* [1955] (Lord Denning at 333): "It is not until his message is received that the contract is complete" — acceptance must be received, and parties are under an equitable obligation to notify communication failures; a party that stays silent may be estopped from denying the contract.
- The UK Electronic Commerce (EC Directive) Regulations 2002 (SI 2002 No 2013), para 11: orders and acknowledgements "will be deemed to be received when the parties to whom they are addressed are able to access them" — overriding the postal rule for web transactions, though not for contracts concluded purely by e-mail.
- *Golden Ocean Group v Salgaocar Mining Industries* [2012] and *WS Tankship II BV v The Kwangju Bank Ltd* [2011]: a series of electronic communications can satisfy the Statute of Frauds (1677) as writing "signed" without pen and ink — supporting the argument that "a transaction made on a distributed ledger (such as Bitcoin) is made in writing."
- *Williams v America Online Inc* (Mass. Super. 2001): AOL's forum-selection clause failed because Williams's computer was reconfigured before he saw the terms, and he could click "I agree" without the terms ever displaying; the court rejected AOL's assertion — the distribution medium subverted the licence.
- The Bitcoin fix: before Alice receives the unlock code, the smart contract requires her to solve Hash("Terms and Conditions" || "I agree") — proving she downloaded and viewed the terms. "It is not necessary to definitively prove that a party has comprehended a set of terms but rather that parties have downloaded it and agreed to be bound."
- The scheme extends to pseudonymous-but-identifiable acceptance by binding in a key: Hash("Terms and Conditions" || "I agree" || <Bitcoin Address>), using a derived key linked to a certified key per his patent EP3268914B1 ("Determining a common secret for the secure exchange of information and hierarchical, deterministic cryptographic keys").
- Business opportunity: native bitcoin or tokenised fiat paid against tokenised goods, with encrypted terms stored directly in the OP_Return field of a BSV transaction, gives "irrefutable proof of the exchange" — a validation-level hash puzzle evidencing acceptance.

## How Craig reasons (his model/logic)
Doctrinal legal analysis first, engineering second: he surveys contract-formation case law (telex, e-commerce regulations, Statute of Frauds, clickwrap litigation), extracts the precise evidentiary failure (no proof the terms were seen before assent), and then designs a minimal Bitcoin script construct — a hash puzzle — that closes exactly that gap. The patent cross-reference and OP_Return storage turn the legal fix into a commercial product specification for BSV.

## Where this contradicts BTC-mainstream logic
- Contradicts the "smart contracts replace law" (Ethereum-style) framing: Craig grounds smart contracts inside centuries of contract doctrine — offer, acceptance, receipt, writing, signature — rather than treating code as a jurisdiction of its own.
- Contradicts the small-block orthodoxy that non-payment data doesn't belong on-chain: his design stores encrypted contractual terms in OP_Return as evidence, presuming a data-carrying chain (BSV/Metanet).
- Contradicts the "Bitcoin can't do expressive contracts" claim of the era: the mechanism uses only a standard hash puzzle, no new opcodes or protocol changes.

## Notable quotes
- "It is not until his message is received that the contract is complete…" (quoting Lord Denning)
- "As an immutable evidence system, Bitcoin solves many of such problems."
- "It is not necessary to definitively prove that a party has comprehended a set of terms but rather that parties have downloaded it and agreed to be bound."
- "In saving the encrypted terms and conditions directly within the OP_Return field attached to a Bitcoin transaction, the parties to the transaction would now have irrefutable proof of the exchange."

## Connections
Explicitly cites his own patent EP3268914B1 for certified/derived keys, and situates the design within the Metanet and BSV ecosystem. Companion to his contract-law essays ("Contract law and smart contracts", "Breach of contract — remedies for breach"). Authorities cited: *Entores* [1955], SI 2002 No 2013, *Golden Ocean* [2012], *WS Tankship II* [2011], *Williams v AOL* (2001), plus Dunn (2001), Durtschi et al (2002) and Reed (2004) on clickwrap.
