---
title: "Worm-a-nomics"
era: medium
date: 2018-09-07
slug: worm-a-nomics-e8d59107f6d0
themes: [tokenisation, monetary-economics, security-economics, lightning-l2]
source_summary: summaries-medium/worm-a-nomics-e8d59107f6d0.md
url: https://medium.com/@craig_10243/worm-a-nomics-e8d59107f6d0
---

# Worm-a-nomics — core principles

- **Money is valued through use, not scarcity.** "Money is valued through use. This is, though velocity" — value tracks how much the ledger is used; "money is not made more valuable as there is less of it", so supply destruction (burning, HODL-as-theology) destroys value rather than creating it.
- **Draining base-layer use lowers security.** Any overlay that reduces use of the base layer lowers the value of the system as a whole, which lowers value to miners "and hence, decreases the overall security of Bitcoin" — base-layer usage is the security budget.
- **Proof-of-burn pegs nothing.** "You do not peg anything by destroying it" — a burn-and-mint bridge converts the base asset irreversibly into an issuer's pre-mined allocation; what enters is destroyed, and the minted supply persists regardless of how much of the base is burned.
- **Mint/un-mint asymmetry is an embedded option.** When a token's value falls below the collateral used to mint it, un-minting to reclaim the collateral is rational — a rights offer that is "basically an option… a form of security where the issuer can choose to redeem a security based on the strike price".
- **Cross-price arbitrage makes a burn bridge self-reinforcing.** Worked example: with the base coin at $600 and the bridge token at $6.25, selling 50 base coins yields $30,000 but swapping to 5,000 bridge tokens yields $31,250 — a $1,250 gain repeatable until prices equalise, with the base asset forced down throughout; once the bridge token exceeds ~1% of the base's price, burning becomes mechanically rational.
- **A vanity burn address is evidence of keys, not their absence.** Claiming "nobody owns the private keys" of a valid address is false by construction — "this is a valid Bitcoin address and hence, there are keys to it"; a vanity pattern is producible by search, so "saying (in effect), trust me, I do not have the keys is itself a reason to distrust".
- **Burn-to-address bloats the UTXO set; OP_RETURN does not.** Sending coins to an unspendable-looking address increases the UTXO set and burdens node memory, whereas an OP_RETURN output can be pruned — the technically honest way to record destruction is prunable data, not a forever-UTXO.
- **Native Script tokens need no separate network.** Token systems constructible in Bitcoin script (cf. Clemens Lay's design) require no separate nodes or side ledgers — "many do not understand the power of just a few OP_Codes"; the 2009 feature set already carries tokenisation.
