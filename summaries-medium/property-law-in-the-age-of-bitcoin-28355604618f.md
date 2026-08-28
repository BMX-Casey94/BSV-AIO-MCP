---
title: 'Property Law in the Age of Bitcoin'
date: 2018-10-31
slug: property-law-in-the-age-of-bitcoin-28355604618f
url: https://medium.com/@craig_10243/property-law-in-the-age-of-bitcoin-28355604618f
themes: [property-rights, law-regulation, mining-consensus, networking]
---

# Property Law in the Age of Bitcoin
**Date:** 2018-10-31 | **URL:** https://medium.com/@craig_10243/property-law-in-the-age-of-bitcoin-28355604618f
**Subtitle:** Property (as defined in legal terms) as is associated with servers, routers and information systems in general is known in the law as…

## Core thesis
Existing property law already governs both network access and Bitcoin: servers are chattels, data is intellectual property, and the common-law bundle of rights — control, benefit, transfer, exclusion — maps directly onto network protocols and onto coins. A port scan run against a system owner's stated policy is a property-rights violation, and in Bitcoin a miner who deliberately damages a transaction commits the tort of conversion while one who assists a double-spend engages in larceny. "Code is law" is inverted: law reaches the code, and always did.

## Key arguments and claims
- The bundle of rights: control of use, receipt of benefit, assignment/transfer/sale, and exclusion. He adopts the Anglo-Saxon common-law view (rights distributable) over the civil-law Dominus conception (rights absolute), as the more permissive and more "Western" frame.
- Right of control applied to networks: an owner may forbid ping/ICMP and filter the traffic; without notice the right exists but is unenforceable — "the act of trying to ping this server is illegal, but there is no way to enforce this right".
- Notice is technically trivial: it need not be ongoing, verbose, grammatically correct, or even in the same protocol — "Sending an email off to the attacker would satisfy the requirement."
- His preferred mechanism: return ICMP type 3/9 ("destination network administratively prohibited") via ingress/egress filters (easy on Cisco routers); on receipt of the first packet "the person scanning is effectively notified", and continued scanning becomes an actionable breach — civilly litigable "for a port scan and nothing more (i.e. no real damage)".
- Login banners escalate: scanning after seeing a banner becomes "a course of action" with criminal remedies, no damage required.
- Right of exclusion applied to infrastructure: internet access operates under easements; backbone routers are analogous to public easements, so "a DOS or DDoS attack against DNS or the backbone routers is in effect the same as blocking access to someone who has an easement" — a trespass creating a civil cause of action even where not criminally codified.
- Illegality has contractual teeth: if A contracts B to scan C, A can lawfully refuse to pay B because "an illegal contract is not enforceable" — no punitive effect, yet the act remains illegal.
- Pivot to Bitcoin: transactions are property — "courts around the world have upheld the property rights associated with Bitcoin."
- He redefines P2P against the node-mesh picture: "P2P is not the node state, it is the act of one user exchanging a transaction with another — like cash."
- Miner duties: "Miners are contracted by users to forward transactions." Declining to include a transaction is within a miner's rights (no obligation to accept the contract), but "a miner who intentionally seeks to damage a transaction would be acting in breach of the law, and would be liable for the tort of conversion", and "a miner who helps a user complete a 'double spend' is engaged in an act of larceny" — fraud-based gain, a criminal offence.

## How Craig reasons (his model/logic)
Wright runs doctrinal common-law property analysis — bundle of rights, choses in possession versus choses in action, easements, trespass, conversion — directly onto operational networking detail (ICMP 3/9–3/13 codes, ingress/egress filtering, Cisco configuration), a signature fusion of legal doctrine with practitioner security craft. The move to Bitcoin is by analogy: if the bundle of rights governs servers and packets, it governs ledger entries, and the miner–user relationship is reconstructed as an ordinary contract for forwarding services.

## Where this contradicts BTC-mainstream logic
- Contradicts the security-culture and cypherpunk norm that port scanning and network probing are harmless or speech-like: unauthorised scans breach the owner's rights of control and exclusion once notice is given.
- Contradicts the BTC "full-node mesh validates everything" ideology: P2P means user-to-user exchange of transactions, not the node topology.
- Contradicts the "miners may do anything consensus permits" view: miners owe contractual and property-law duties — damaging a transaction is conversion, and double-spend assistance is criminal larceny, whatever the protocol allows.
- Contradicts "code is law / no legal recourse" fatalism: courts already enforce property rights in Bitcoin, and tort and criminal law sit on top of the protocol.

## Notable quotes
- "Servers are chattels. The data are intellectual property."
- "P2P is not the node state, it is the act of one user exchanging a transaction with another — like cash."
- "A miner who intentionally seeks to damage a transaction would be acting in breach of the law, and would be liable for the tort of conversion or other torts against property."
- "A miner who helps a user complete a 'double spend' is engaged in an act of larceny."
- "A mere port scan, if the system owner does not welcome them, is a violation of the property rights of the system owner."

## Connections
Extends his earlier "Human rights and property" essay into network operations and Bitcoin. The miner-as-contracted-agent and conversion/larceny framing became load-bearing in his BSV-era positions on miner liability and in his later litigation strategy seeking court-ordered remedies over coins. The ICMP-as-notice argument draws on his 1990s–2000s network-security practitioner background, and the easement/DDoS analysis echoes his "Security in a world of IPv6 and Bitcoin" concerns.
