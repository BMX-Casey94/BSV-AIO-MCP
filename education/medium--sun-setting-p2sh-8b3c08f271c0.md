---
title: "Sun-setting P2SH"
era: medium
date: 2018-11-08
slug: sun-setting-p2sh-8b3c08f271c0
themes: [protocol-immutability, script-technical, lightning-l2, governance-decentralisation]
source_summary: summaries-medium/sun-setting-p2sh-8b3c08f271c0.md
url: https://medium.com/@craig_10243/sun-setting-p2sh-8b3c08f271c0
---

# Sun-setting P2SH — core principles

- **Consensus changes require proof-of-work and hard forks.** Under the original design, all consensus rules are settled by PoW voting; soft forks are rejected as a mechanism because they allow hidden rule changes without open miner signalling.
- **P2SH obscures spending conditions and enables sliding consensus rules.** Pay-to-script-hash lets receivers hide the spending script from the network; its standard defence amounts to security by obscurity, which is not a valid means to secure a system.
- **Deprecate, do not delete: staged removal of legacy constructs.** Because existing funds sit in P2SH outputs, removal proceeds in stages — accept non-standard scripts from miners, stop new P2SH outputs being created, keep old P2SH spendable, with dates announced — rather than breaking existing applications.
- **Script is Bitcoin's only true layer 2.** In network engineering a layer encapsulates data inside the layer below; constructions that settle on separate systems (side-chains, Plasma, Lightning) are not layers of Bitcoin — only constructions encapsulated in script qualify.
- **Bitcoin's stack by analogy to OSI.** Layer 0 physical; layer 1 data link (IP/Internet); layer 2 network (P2P transaction exchange); layer 3 Bitcoin transactions; layer 4 script — with everything above script wide open for development.
- **Standardness is policy, not consensus.** Once the standard/non-standard distinction is removed, P2SH's rationale collapses: a receiver dictating spending conditions is simply a non-standard script.
- **Pseudonymity, not anonymity, is the privacy model.** There is no anonymity in Bitcoin; to be private, a transaction must also be available and traceable.
- **The burden of proof lies on any proposed protocol change.** The wheel has remained a circle for millennia; a proposer must demonstrate how much better the change would be, and changes to date have taken away from Bitcoin rather than added to it.
- **Opcodes are fixed like packet formats.** Just as you cannot choose the format of an HTTP packet or a datagram, users do not get to add or change OP_CODEs in Bitcoin.
