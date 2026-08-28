---
title: 'Digital Gold'
date: 2019-11-08
slug: digital-gold-d46b9493a17b
url: https://medium.com/@craig_10243/digital-gold-d46b9493a17b
themes: [btc-critique, privacy, monetary-economics, law-regulation]
---

# Digital Gold
**Date:** 2019-11-08 | **URL:** https://medium.com/@craig_10243/digital-gold-d46b9493a17b
**Subtitle:** It is interesting that a meme of digital gold has popped up around BTC over the last few years. The complete lack of understanding of how…

## Core thesis
An excerpt (the body continues on craigwright.net) attacking the "digital gold" narrative that captured BTC. Craig argues the meme grew from Bitcoin Core's ignorance — and from Nick Szabo's "failed concept of bit gold" — and that it is self-defeating: address-reusing, hoarded BTC is trivially traceable and seizable, exactly like gold under Executive Order 6102, while the privacy technique that would fix it (coin-splitting with fresh keys) is economically impossible on BTC's constrained chain. His conclusion: Bitcoin Core "is neither peer-to-peer nor cash. So it is not Bitcoin."

## Key arguments and claims
- Szabo is quoted calling using a new key per transaction "utterly stupid"; Craig counters with the white paper: "As an additional firewall, a new key pair should be used for each transaction to keep them from being linked to a common owner" — the passage he calls "the key to making Bitcoin private".
- Privacy mechanism: split coins into many pieces with fresh keys each transaction and have counterparties do the same — "tracing becomes exponentially hard as the graph problem moves towards an NP-hard analysis" (his example: split one coin into 100 pieces, remixing on each spend).
- Conversely, single-key reuse makes Bitcoin "very simple to trace without any need for search warrants": "You would remove all the privacy features of Bitcoin" and enable "public tracing", not just law-enforcement tracing.
- Why "digital gold" is a cogent meme for BTC: "gold has been seized throughout history", and BTC with "a few easily traced keys that are reused over and over" is equally seizable — "it becomes really easy for law enforcement to capture BTC".
- Seizure mechanics: "it is possible to very quickly require miners to blacklist particular coins, preventing the targeted individuals from moving them", seize devices, and "where the individual refuses to hand over the keys, the government would be able to force miners to change the output and to seize bitcoin in any event. And so it has happened multiple times already."
- Foundational claim: "Bitcoin is not cryptographically secured; it is based on economics. Hash algorithms do not secure systems, and those who have been telling you so either do not understand what hashing is or seek to mislead you."
- Historical evidence: Executive Order 6102 (1933) forbade hoarding gold coin/bullion/certificates, repealed only in 1974 by Gerald Ford; EOs 6260 and 6261 and the Gold Reserve Act of 1934 "continued the trend". Frederick Campbell held 160 kg of gold with Chase Bank; when he tried to withdraw it, "the gold was confiscated, and he was indicted".
- The privacy fix doesn't scale on BTC: splitting coins "does create bigger transactions" — "the BTC blockchain would handle around 1/100th to 1/10th of a transaction per second or less", with fees exceeding the transaction value for all but the largest transfers — "Consequently, it removes the ability to add privacy from Bitcoin Core."
- Design repudiation: "The title of my white paper clearly defines the nature of Bitcoin. It's a peer-to-peer electronic cash system, and unfortunately, Bitcoin Core is neither peer-to-peer nor cash. So it is not Bitcoin."

## How Craig reasons (his model/logic)
He argues from textual authority (the white paper's firewall passage, which he claims as his own writing) plus complexity theory (coin-splitting pushes tracing "towards an NP-hard analysis") plus legal-economic history (EO 6102, the Campbell prosecution) as an analogy engine: gold's seizure history predicts BTC's fate under the digital-gold model. The rhetoric pairs a named adversary's own words (Szabo's "utterly stupid") against documentary evidence, then closes with a definition-trumps-usage move: failing the white paper's title means failing to be Bitcoin.

## Where this contradicts BTC-mainstream logic
- Contradicts the store-of-value/"digital gold" orthodoxy head-on: hoarding in few addresses is not sound money but a seizure surface, and the white paper defines cash, not gold.
- Contradicts "not your keys, not your coins" crypto-anarchist seizure-resistance: miners can be legally compelled to blacklist coins and even reassign outputs, so keys are no defence against courts.
- Contradicts the cryptographic-security axiom of mainstream Bitcoin discourse: security is economic (miner incentives), not hash functions — "Hash algorithms do not secure systems."
- Contradicts small-block virtue: BTC's capacity cap makes the privacy-enhancing coin-splitting technique economically unusable, so BTC locked itself out of the white paper's own privacy model.
- Contradicts Szabo's bit-gold lineage as a foundation for Bitcoin, calling it a "failed concept" that "has crept into Bitcoin Core".

## Notable quotes
- "In his comment where he says that using a new key for every transaction is utterly stupid, Mr Szabo, unfortunately for him, has demonstrated just how little he seems to understand about Bitcoin."
- "Tracing becomes exponentially hard as the graph problem moves towards an NP-hard analysis."
- "Bitcoin is not cryptographically secured; it is based on economics. Hash algorithms do not secure systems."
- "Once you have a few large addresses that act as accounts, Bitcoin becomes easily seizable."
- "Unfortunately, Bitcoin Core is neither peer-to-peer nor cash. So it is not Bitcoin."
- "Gold has been seized throughout history."

## Connections
References his earlier posts on coin-splitting and privacy ("In previous posts [1]"); companion piece to "Proof of Assignment" (five days later), which develops the miner-enforced seizure mechanism, and to "A Fundamental Misunderstanding", which quotes the same white-paper firewall passage. Cites Executive Orders 6102/6260/6261, the Gold Reserve Act 1934, and the Frederick Campbell case. Full text continues at craigwright.net/blog/bitcoin-blockchain-tech/digital-gold/.
