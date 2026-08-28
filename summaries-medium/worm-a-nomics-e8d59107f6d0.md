---
title: 'Worm-a-nomics'
date: 2018-09-07
slug: worm-a-nomics-e8d59107f6d0
url: https://medium.com/@craig_10243/worm-a-nomics-e8d59107f6d0
themes: [tokenisation, monetary-economics, security-economics, lightning-l2]
---

# Worm-a-nomics
**Date:** 2018-09-07 | **URL:** https://medium.com/@craig_10243/worm-a-nomics-e8d59107f6d0
**Subtitle:** Or the invasion of the coin snatchers….

## Core thesis
A worked economic model of Bitmain's Wormhole: burning 1 BCH mints 100 WHC from a pre-mined proof-of-stake allocation, so Wormhole is "a Blackhole. What enters is destroyed." Because money is valued through use and velocity rather than scarcity, draining BCH into WHC lowers the base layer's value, miner revenue and hence security; once WHC exceeds 1% of BCH's price, arbitrage mechanically forces BCH holders to burn, grinding BCH down until WHC "moves on to leech off BTC and other PoW coins one by one". The burn address is again attacked as a "blatant lie" — a valid vanity address whose keys someone holds.

## Key arguments and claims
- The mechanism: "For every 1 BCH deposited (these are actually destroyed), 100 WHC are created (issued from the pre-mine PoS allocation — not created at all)." Burning has no deadline because "the aim is to slowly take all value from BCH and move it into WHC"; WHC generation waits for 1,000 confirmations against BCH rollback risk.
- WHC is host-agnostic: "WHC does not need Bitcoin Cash, it needs ANY PoW system (that it can act parasitically on)" — once BCH is consumed it can move to BTC.
- Velocity theory of value: "Money is valued through use. This is, though velocity. As WHC reduces use of the base layer (just as the Lightning Network does in BTC) it lowers the value of the system as a whole. This lowers the value to miners and hence, decreases the overall security of Bitcoin."
- The un-minting asymmetry: tokens minted on WHC are backed by WHC, not BCH; if a token's value falls below the WHC used to mint it, "it is more cost efficient to un-mint the token and collect the WHC" — "This rights offer is basically an option… a form of security where the issuer can choose take the 'option' to redeem a security based on the strike price." Consequently WHC supply "does not decrease and remains in circulation no matter how many BCH are destroyed".
- No technical innovation: "WHC 'smart contracts' provide nothing that Bitcoin did not have natively in 2009. Many do not under stand the power of just a few OP_Codes" — he points to Clemens Lay's interview describing a token system in Bitcoin script needing no separate nodes, and to the plan that "BCH and ETH are merged with Solidity as the language".
- The arbitrage trap: if WHC ever exceeds 1% of BCH, burning is rational. Worked example: BCH at $600, WHC at $6.25 — 50 BCH sold is $30,000, but swapped to 5,000 WHC is $31,250, "a $1,250 gain", repeatable "until the price equalises. The issue is that BCH is being forced down in value in this exchange."
- Anti-scarcity doctrine: "Money is not made more valuable as there is less of it. So, the HODL myth will not add value… BCH has no value as a mere digital asset, it has value as cash, so, with the supply retarded, the value of BCH decreases more and more until, all we have is WHC which then moves on to leech off BTC and other PoW coins one by one."
- UTXO-set attack: against the quoted advice that "the best way to burn bch is to send them to OP_RETURN output, it can be pruned", Bitmain instead sends BCH "to a possible 'Theft address' posing as a burn address", which "increases the UTXO set… burden[ing] nodes forcing them to increase the amount of memory required and at the same time are not scaling BCH. The best way is not to burn — as you do not peg anything by destroying it."
- The burn-address lie, restated forensically: Wormhole's claim that "nobody owns the private keys" of `bitcoincash:qqqqqqqqqqqqqqqqqqqqqqqqqqqqqu08dsyxz98whc` is false because "this is a valid Bitcoin address and hence, there are keys to it. Saying (in effect), trust me, I do not have the keys is itself a reason to distrust Bitmain." A vanity address "is not all ones. There is not reason to believe this was not created with a valid key."
- The checksum is a wallet UI feature, not protocol: WHC "could use all q's for the address and ignore the checksum", which would also stop accidental sends; better still, users could send BCH to a WHC wallet address first and then be minted — the fact that accidental burns persist means "this loss is a part of the aims of the Wormhole in consuming BCH — this way, Bitmain gains as BCH are destroyed for nothing as well."

## How Craig reasons (his model/logic)
This is Wright in quantitative-economist mode: he quotes the issuer's own documentation as a bill of particulars, then runs a numerical arbitrage scenario ($600 BCH / $6.25 WHC) to show the burn mechanism is self-reinforcing. The theoretical core is a velocity-and-use theory of money deployed against scarcity/HODL reasoning, plus option-pricing vocabulary ("strike price", "rights offer") to classify the un-mint mechanism as a security. Address-structure forensics (valid keys vs nothing-up-my-sleeve numbers) supply the fraud-evidence strand, and the whole is wrapped in B-movie satire ("invasion of the coin snatchers", "doppelganger").

## Where this contradicts BTC-mainstream logic
- Contradicts the scarcity/store-of-value orthodoxy (HODL, "number go up", later stock-to-flow): "Money is not made more valuable as there is less of it" — value comes from use as cash, so supply destruction destroys value rather than creating it.
- Contradicts the neutrality claim of layer-2/token systems: like Lightning on BTC, WHC "reduces use of the base layer… lowers the value to miners and hence, decreases the overall security" — L2s are framed as security-negative, not free-riding-neutral.
- Contradicts proof-of-burn as a legitimate peg: "you do not peg anything by destroying it", and the burn address itself is alleged to be key-controlled.
- Contradicts the nothing-up-my-sleeve trust convention for burn addresses: a valid address with a vanity pattern is evidence of key possession, not its absence.
- Extends the previous day's anti-Bitmain brief inside the BCH camp, two months before the BSV split — positioning protocol lockdown and native Script tokens (à la Clemens Lay) as the only honest tokenisation path.

## Notable quotes
- "Basically, Wormhole is a Blackhole. What enters is destroyed."
- "Money is valued through use. This is, though velocity."
- "Money is not made more valuable as there is less of it. So, the HODL myth will not add value."
- "WHC is not cash, it is a doppelganger designed to take the life from BCH and then move on to the next victim."
- "The best way is not to burn — as you do not peg anything by destroying it."
- "Saying (in effect), trust me, I do not have the keys is itself a reason to distrust Bitmain."

## Connections
Direct sequel to "Vampire Securities from beyond the Wormhole" (previous day), delivering the promised economic analysis. Cites the yours.org Wormhole announcement articles, the Bitcoin Wiki Contracts page, and two YouTube interviews with Clemens Lay on native-script token systems. The security-economics argument (less base-layer use → less miner revenue → less security) is the same incentive framework as his selfish-mining essays catalogued in "More from me", and the anti-Lightning aside ties the BCH fight back to his long-running BTC-layer-2 critique.
