---
title: "The Geography of Discretion"
date: 2026-04-29
slug: the-geography-of-discretion
url: https://singulargrit.substack.com/p/the-geography-of-discretion
themes: [protocol-immutability, governance-decentralisation, btc-critique, law-regulation]
---

# The Geography of Discretion
**Date:** 2026-04-29 | **URL:** https://singulargrit.substack.com/p/the-geography-of-discretion
**Subtitle:** Three sharp objections to set-in-stone protocols deserve direct answers — emergency forks, constitutional rot, and the relocation of governance off-chain.

## Core thesis
The three strongest objections to set-in-stone base-layer protocols — adaptive governance (emergency forks), constitutional rot (dominant-client drift), and the relocation of discretion off-chain — do not refute the constitutional case for immutability. Properly examined, each objection sharpens the case by forcing its defenders to specify exactly what is fixed, under which institutional conditions fixedness is more than rhetoric, and which kinds of discretion it constrains.

## Key arguments and claims
- The constitutional analogy holds that a protocol whose base-layer rules are not subject to discretionary revision after deployment functions as a commitment device, the way a constitutional rule constrains legislative discretion — letting participants plan, invest, and contract around stable rules.
- Objection one (adaptive governance) cites the 2016 DAO hack, where Ethereum forked to reverse the loss. Craig's answer: the fork proved Ethereum was never committed to immutability; it revealed a rule-changing coalition willing to act, and that implicit knowledge "is itself a tax on the system", lowering the credibility of every Ethereum commitment.
- The honest fixedness claim covers only the base layer — the wire format, consensus rules, and canonical ledger semantics. Application-layer evolution above a fixed base "is the whole point of the condition".
- TCP/IP is the institutional comparator: the RFC 793 wire format and connection state machine (1981) have never been revised, and a 1983 TCP stack still interoperates with the modern Internet. Later RFCs (1122, 3168, 6093, 6528, 7323) merely populate reserved option fields — RFC 3168's ECN fills two reserved bits; RFC 7323's timestamps use options reserved in RFC 793. Filling a reserved field is use, not revision.
- Bitcoin's design intent included the same extension points: reserved opcodes in Bitcoin Script left undefined for later population; Lightning, sidechains, RGB, and Taproot's reserved version fields operate without revising UTXO consensus rules.
- Emergency framing embeds Schmittian sovereignty: citing Carl Schmitt (1922), "sovereign is he who decides on the exception" — once an emergency-fork precedent exists, every contested situation becomes a potential emergency.
- Objection two (constitutional rot) is the strongest: Bitcoin Core has held roughly 95% of the node-software market for Bitcoin's entire existence, so "the protocol is whatever the dominant client does". SegWit's 2017 activation modified the base layer through a maintainer-controlled process. Craig concedes this as description but denies rot is unavoidable.
- The preventative conditions are known: multiple independent implementations (a drifting stack loses interoperability) and disciplined extension through formal multi-vendor process (the IETF model). Bitcoin satisfies neither; its maintainers were funded by Blockstream, later Spiral. Ethereum, despite the DAO fork, has Geth, Nethermind, Besu, Erigon and Reth, and "Bitcoin Core's dominance is the architectural failure that makes Bitcoin's 'immutability' weaker than its rhetoric suggests".
- Objection three (relocation of discretion): immutability moves discretion to surrounding institutions — exchanges, regulators, courts, foundations. China can ban mining; the US can sanction mixers; the EU can mandate KYC. Craig's answer: constitutionalism never claimed to eliminate discretion, only to relocate it where it operates "slower, more public, more constrained by precedent". A regulator cannot change Bitcoin's monetary policy by issuing a regulation.
- The refined claim: what is fixed is the wire format, consensus rules and ledger semantics; the required conditions are multiple independent implementations, disciplined extension, and no coalition with effective rule-changing authority; what is constrained is protocol-layer discretion only. Bitcoin today is "partially fixed, partially mutable" — the 21 million cap, UTXO structure and proof-of-work are fixed; soft-fork transaction-format changes are not.

## How Craig reasons (his model/logic)
Institutional economics and constitutional theory prosecuted through analogy and comparative analysis. Protocols are treated as commitment devices; the constitutional analogy is tested against its three best failure modes from real constitutional history; TCP/IP, Bitcoin and Ethereum serve as comparative cases that convert a rhetorical debate into "a research agenda" about which architectures actually deliver credibility.

## Where this contradicts BTC-mainstream logic
- Denies that Bitcoin's protocol is uniformly immutable: SegWit changed the transaction format through maintainer coalition power, so maximalist "set in stone" rhetoric is descriptively false of BTC as it exists.
- Treats Bitcoin Core's ~95% client share and its identifiable, corporately funded maintainer set (Blockstream, Spiral) as an architectural failure, not a healthy reference implementation.
- Concedes Ethereum achieves more credible base-layer constraint than Bitcoin in one respect — deliberate execution-client diversification — inverting the usual maximalist hierarchy.
- Rejects "code is law" and "rules not rulers" as slogans that overstate the case; the defensible claim is smaller, conditional, and empirically testable.

## Notable quotes
- "The protocol is whatever the dominant client does."
- "The choice is not between fixedness and adaptability. It is between adaptability above a fixed base and discretion all the way down."
- "A fixed text without independent implementations and disciplined extension processes is just a piece of paper."
- "The geography of discretion does not have a discretion-free zone marked on it."

## Connections
The TCP/IP comparator and multiple-implementations condition recur in "Consensus Is Not Governance", which formalises the governance layer this essay circles; the hold-up essay supplies the investment-side economics of why credible fixedness matters.
