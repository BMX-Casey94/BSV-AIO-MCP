---
title: 'Fixing OP_Fals'
date: 2018-11-08
slug: fixing-op-fals-fd157899d2b7
url: https://medium.com/@craig_10243/fixing-op-fals-fd157899d2b7
themes: [monetary-economics, mining-consensus, protocol-immutability, script-technical]
---

# Fixing OP_Fals
**Date:** 2018-11-08 | **URL:** https://medium.com/@craig_10243/fixing-op-fals-fd157899d2b7
**Subtitle:** One of the flaws in the mangled version of Bitcoin we have today come from the ability to "burn" and destroy coins. Bitcoin was designed…

## Core thesis
Coin burning is an attack on Bitcoin's fixed-supply "stable money", and Bitcoin SV will eliminate it: coins sent to OP_FALSE proof-of-burn outputs, OP_RETURN data outputs, or invalid opcodes will become recoverable by miners as "salvage" and returned to circulation. OP_RETURN is to be repurposed as a time-limited storage service whose persistence is priced by a satoshis-per-kilobyte formula.

## Key arguments and claims
- Bitcoin "was designed as stable money. This is a fixed-token money system where the cap is maintained in time and fees are used to reward miners", supported by Satoshi's quote: "Total circulation will be 21,000,000 coins… cut in half every 4 years… the system can support transaction fees… based on open market competition."
- Stability requires resisting "intentional attacks by destruction"; lost keys are merely "out of circulation" like sunken bullion, and "all old addresses eventually become mine-able and can be recovered" — salvage as "a future means of miner revenue".
- OP_FALSE itself is legitimate: "an original OP_CODE that was designed to fail script paths in a predicate… it cannot (and should not) be disabled or removed." The attack is scripts "constructed as a means to just destroy Bitcoin… to remove value from Bitcoin, and send it into an alternate system" (he links his anti-Wormhole "Vampire Securities" article).
- Miners "are the replacement for the various member banks in the U.S. Federal Reserve", but unlike Fed banks (which "act in collusion, that is social consensus") Bitcoin miners "act in capitalist competition", so they can "neither increase the money supply nor seek to subvert it" — and they keep supply stable by recovering out-of-circulation funds.
- "Burning money by making it permanently un-spendable is an attack on Bitcoin by those with a vested interest in creating something other than Bitcoin"; miners are "aligned and incentivised to stop" proof-of-burn.
- OP_RETURN "is to make a marker, not to destroy Bitcoin"; SV will publish a strategy where OP_RETURN data persists for a paid duration and is then pruned, with funds recovered by miners. Formula: T = V / S, where V = satoshis sent, S = TX size in KB, T = time in 100-second units before recovery. Worked example: a 100-KB file stored for 1 year costs V = T*S = 31,536,000*100/100 = 0.315 BCH, with exact figures "left to market forces".
- Transactions intentionally burnt via invalid opcodes (DSV named) are "just an attack against the total number of bitcoins that can circulate, and it will be available for miners to recover… as salvage — lost treasure, you might say."
- Targets of the critique: "Tether, Omni, CounterParty, WHC, etc." — systems that extract value out of Bitcoin; "Bitcoin is capitalist… Bitcoin is resilient."

## How Craig reasons (his model/logic)
Monetary-theoretic originalism: he quotes Satoshi's 21-million-cap announcement as the design spec, then reasons from incentive alignment — miners, cast as competitive central-bank analogues, are paid to enforce supply integrity by salvaging burnt or lost coins. Analogies (bullion salvage at sea, Fed member banks) do heavy lifting, and the OP_RETURN section shows his engineering-economist mode: a pricing formula with a worked numeric example, deferred to "market forces".

## Where this contradicts BTC-mainstream logic
- Contradicts the "lost coins are a donation to all holders" orthodoxy: lost and burnt coins are not permanently gone but recoverable miner revenue — scarcity from loss is not part of the social contract.
- Contradicts proof-of-burn legitimacy (used by CounterParty, Omni/Wormhole-era projects): burn is theft from Bitcoin's monetary base, and miners may claw it back.
- Contradicts immutability/finality absolutism: "unspendable" outputs are spendable by miners in the future — a direct inversion of "not your keys, not your coins".
- Contradicts OP_RETURN-as-permanent-embedding practice: data storage is a paid, time-boxed service, not a permanent right.

## Notable quotes
- "Bitcoin was designed as stable money. This is a fixed-token money system where the cap is maintained in time and fees are used to reward miners."
- "In time, it can be found, and returned into circulation… all old addresses eventually become mine-able and can be recovered."
- "In Bitcoin, miners are the replacement for the various member banks in the U.S. Federal Reserve."
- "Burning money by making it permanently un-spendable is an attack on Bitcoin by those with a vested interest in creating something other than Bitcoin."
- "Miners recover these coins as salvage — lost treasure, you might say."
- "Bitcoin is capitalist."

## Connections
Explicitly links his prior Medium essays "Coin Burning for Dummies" and "Vampire Securities from Beyond the Wormhole" (anti-WHC/Wormhole), and continues in "Burning and why it matters that it is stopped". Part of the Bitcoin SV launch-week roadmap cluster with "Sun-setting P2SH" and the anti-DSV "Drugs, Fraud and Murder"; references svpool.net, his mining-pool vehicle in the hash war.
