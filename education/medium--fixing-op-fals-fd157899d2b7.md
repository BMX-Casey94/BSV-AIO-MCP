---
title: "Fixing OP_Fals"
date: 2018-11-08
era: medium
slug: fixing-op-fals-fd157899d2b7
themes: [monetary-economics, mining-consensus, protocol-immutability, script-technical]
source: summaries-medium/fixing-op-fals-fd157899d2b7.md
---

# Fixing OP_Fals — core principles

- **Bitcoin is fixed-token stable money.** The cap is maintained in time and fees reward miners; intentional destruction of coins is an attack on that stability.
- **Lost keys are out of circulation, not destroyed.** Like sunken bullion they can later be salvaged; old addresses eventually become mineable and recoverable as miner revenue.
- **OP_FALSE itself is legitimate.** It is an original opcode designed to fail script paths in a predicate and must not be disabled; the attack is scripts constructed solely to destroy bitcoin or siphon value into another system.
- **Burning into another token is not loss.** Permanently unspendable outputs extract value from Bitcoin’s monetary base; miners are aligned and incentivised to stop proof-of-burn.
- **Miners compete; they do not collude like a central bank.** They can neither increase the money supply nor subvert it; they keep supply stable by recovering out-of-circulation funds.
- **OP_RETURN is a marker and a paid storage service, not a burn.** Data persists for a duration priced by satoshis per kilobyte, then is pruned and the funds recovered — exact figures left to market forces.
- **Invalid-opcode burns are salvage.** Transactions burnt via unauthorised opcodes are an attack on circulating supply and become available for miners to recover.
