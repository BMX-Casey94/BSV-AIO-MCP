---
title: 'The puzzle of the double hash'
date: 2019-04-30
slug: the-puzzle-of-the-double-hash-968196edb06d
url: https://medium.com/@craig_10243/the-puzzle-of-the-double-hash-968196edb06d
themes: [mining-consensus, scaling-throughput, law-regulation, script-technical]
---

# The puzzle of the double hash
**Date:** 2019-04-30 | **URL:** https://medium.com/@craig_10243/the-puzzle-of-the-double-hash-968196edb06d
**Subtitle:** There is a long-standing puzzle within Bitcoin that has not yet been solved correctly: why did I use a double hash?

## Core thesis
Speaking as Bitcoin's designer, Craig declares the standard explanation of Bitcoin's double hash (the bitcoin.it "CoreCoin wiki") "utterly false": double hashing does not add collision security — it marginally reduces it. The real design purpose is economic and industrial: the double hash lets mining (proof-of-work) be split from verification and data hosting, so ASIC facilities can hash without holding block data, and it enables jurisdictionally filtered delivery of blockchain content. Patents covering these uses are pending.

## Key arguments and claims
- Collision persistence proof-sketch: if Hash(X) == Hash(Y) == A, then Hash(A) == Hash[Hash(X)] == Hash[Hash(Y)] — "no double-hashing or squared-hashing process will help"; "we lose one bit of information for the additional hash operation" (he concedes the maths is loose but the direction is right).
- Address construction worsens it: hashing with separate functions (SHA-256 then RIPEMD-160) means intermediate collisions B1==B2 plus final collisions C == Hash-b(B1) == Hash-b(B2), so "the probability of finding a collision in two values, that is to separate public keys, is increased".
- On Ferguson & Schneier's SHA-256d (Practical Cryptography) as a length-extension defence: an HMAC would have done if it mattered, but "Bitcoin is an economic system. The security of Bitcoin is always about the cost to attack vs the cost to defend" — length-extension attempts would be "easily… detected, monitored, and blocked", and script offers better mitigations anyway.
- The true purpose: given A == Hash(X) and B == Hash(A), the value A can be sent to a miner who can hash a block "without individual transactions" — via a Merkle tree, all but one transaction can be withheld, allowing "an ASIC mining facility that does not host the data in blocks. The miner is now a distributed function."
- Industrial consequence: proof-of-work and verification "can be handed off to specialised entities"; the ASIC facility pays the verification facility on valid blocks, and "if one party cheats, both lose out". Valuable where power and network access diverge — "China and many places in Central Asia have power, but do not have network access"; for large BSV miners "block propagation… isn't a problem".
- Legal-filtering consequence: the double hash "allows us to have immutable data storage that can be filtered with the hash being validated and a subsequent prune of illicit material being allowed in certain jurisdictions" — "selectively deliver content" with requests "restricted and logged".
- Closing provocation: "What would happen if BTC, ETH, etc all started hosting child porn and other illicit material and only BSV can filter it?"

## How Craig reasons (his model/logic)
He moves from informal cryptographic algebra (collision chains, iterated-hash degradation) to a design-rationale reveal framed as insider knowledge ("why did I use a double hash?"). The evaluative standard is explicitly economic — attack cost versus defence cost — rather than cryptographic perfection, and the payoff is industrial organisation: mining as a divisible, contractible supply chain. The mode is authoritative correction plus patent tease, ending in a hostile hypothetical aimed at rival chains.

## Where this contradicts BTC-mainstream logic
- Contradicts the bitcoin.it wiki orthodoxy that double hashing exists for birthday-attack/length-extension security — he says it slightly *reduces* collision security and the length-extension threat is a "non-issue".
- Contradicts the "miners must be full validating nodes holding all data" ideal: he designs for miners that deliberately do *not* host block data, with verification outsourced.
- Contradicts the absolutist immutability-can't-be-filtered doctrine: he claims Bitcoin was built so illicit content can be jurisdictionally pruned while hashes still validate — a direct challenge to "the blockchain is uncensorable storage".
- Frames BTC and ETH as legally vulnerable to illicit-content hosting while BSV's scaling makes filtering feasible.

## Notable quotes
- "First of all, the explanation of the double-hash problem as given in the CoreCoin wiki is utterly false."
- "If you double-hash a value, birthday attacks remain."
- "The security of Bitcoin is always about the cost to attack vs the cost to defend."
- "Doing so would allow us to construct an ASIC mining facility that does not host the data in blocks. The miner is now a distributed function."
- "The blockchain is immutable, but with a double hash, the request for a record can be restricted and logged."
- "What would happen if BTC, ETH, etc all started hosting child porn and other illicit material and only BSV can filter it?"

## Connections
Explicitly tied to the nChain patent programme ("We have a number of patents coming out covering all of it… when the patents start being published, you shall get to see some more"). Cites Ferguson & Schneier's *Practical Cryptography* (SHA-256d) and the Merkle–Damgård construction. Extends his BSV scaling argument (miners as specialised data-centre industry) and his law-compliance theme (jurisdictional filtering of illicit content), both recurring across his 2018–19 essays.
