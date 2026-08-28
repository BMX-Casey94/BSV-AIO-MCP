---
title: "Vampire Securities from beyond the Wormhole"
era: medium
date: 2018-09-06
slug: vampire-securities-from-beyond-the-wormhole-8c4e691c809e
themes: [tokenisation, lightning-l2, law-regulation, mining-consensus]
source_summary: summaries-medium/vampire-securities-from-beyond-the-wormhole-8c4e691c809e.md
url: https://medium.com/@craig_10243/vampire-securities-from-beyond-the-wormhole-8c4e691c809e
---

# Vampire Securities from beyond the Wormhole — core principles

- **A genuine layer 2 lives inside Script.** By the TCP/IP encapsulation model (HTTP within TCP within IP within the datagram), a true higher layer must be completely encapsulated — "to be layered within Bitcoin means that you must be within script inside a Bitcoin transaction. Not that you use a marker attached to a transaction." Systems that ride the chain with external state are separate protocols, like IPX gateways on 1990s TCP/IP.
- **Real burns require provably unspendable scripts.** A true burn sends to a script containing OP_FALSE, which makes the coins unrecoverable; only the last characters of an address are checksum, so a vanity-looking address of all-ones or all-q's splits into address plus checksum — "finding it with a valid key is only a matter of computational power". An address is not nothing-up-my-sleeve merely because it looks systematic.
- **Proof of stake has no native double-spend solution.** "All of the so-called proof of stake solutions end up becoming hybrids" — a token platform that uses a proof-of-work chain only to periodically timestamp its own proof-of-stake ledger inherits none of the base layer's security model.
- **Competition is the security engine.** "The system only survives through economic incentives… it is this competition that drives the growth and investment into mining and hence the security" — systems that discard competition produce static, permissioned miner sets without evolution.
- **Tokens marketed as asset-backed are securities.** Advertising a token as backed by burned coins, when nothing enforces the peg, is misrepresentation to investors — an unregistered asset-backed security; "there is no room for ignorance nor would the law consider that an excuse".
- **Every token is a security.** "There are no tokens that are not a security. In fact, there cannot be a token that is not a security" — so-called utility tokens are prepaid sales, with case law going back hundreds of years, and dozens of federal bodies (in the USA, around 20) hold jurisdiction over different offerings.
- **Nothing physical can be permissionless.** Courts can reassign any underlying asset regardless of token state; refusal to comply is contempt, which "brings unlimited incarceration. A judge can incarcerate you until you comply" — tokens defying local law become instantly worthless and buyers gain grounds to sue issuers.
- **Overlay tokens inherit re-org fragility the base layer does not share.** Marker-based token schemes are destroyed by block re-orgs and have no zero-conf protection, whereas "orphans and reordering are the natural state within Bitcoin" — miners bear orphan losses as signalling costs; users should not care.
- **The permissionless path is a locked protocol with open Script.** Remove the caps, lock the protocol, and let anyone build within Script "without having to ask the permission of Core developers… or any implementation developer at all".
