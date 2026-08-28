---
title: "Symmetric Fair Exchange Protocol"
era: medium
date: 2018-10-15
slug: symmetric-fair-exchange-protocol-b3153bab429b
themes: [script-technical, intermediaries]
source_summary: summaries-medium/symmetric-fair-exchange-protocol-b3153bab429b.md
url: https://medium.com/@craig_10243/symmetric-fair-exchange-protocol-b3153bab429b
---

# Symmetric Fair Exchange Protocol — core principles

- **Fair exchange defined.** "Two parties either both honour an exchange (such as a contract), or neither of them do" — atomicity is an all-or-nothing property of the swap.
- **The impossibility result is the foundation.** "Deterministic fair exchange is impossible without a trusted third party (Even and Yacobi 1980)"; the construction's move is that "under the Bitcoin protocol, a validated blockchain acts as a trusted third party" — trust is relocated from institutions to the ledger.
- **Native Script is sufficient.** The exchange runs on OP_HASH160 hashlocks plus locktime semantics: "a non-zero locktime indicates the earliest time that the transaction may be added to the block chain … expressed in Unix time", zero meaning immediate broadcast; time-locked refund paths plus hash-preimage revelation deliver atomicity.
- **Perfect symmetry.** Prior constructions (Bitcoin Wiki 'Atomic cross-chain trading' 2014; TierNolan's atomic-transfer BIP 2014; Maxwell's 2012 P2PTradeX post) left one party with a first-mover or griefing advantage; the symmetric protocol removes it — "the proposed protocol is perfectly symmetric".
- **Generality beyond coins.** The mechanism trades "entities of value, such as bitcoins, other currencies, contracts, goods or services" — atomic exchange is a general contract-settlement primitive, not merely cross-chain coin swapping.
