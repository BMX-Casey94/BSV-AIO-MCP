---
title: "The Sealed Envelope, Cryptographically Considered"
date: 2026-04-24
slug: the-sealed-envelope-cryptographically
url: https://singulargrit.substack.com/p/the-sealed-envelope-cryptographically
themes: [script-technical, tokenisation, security-economics, privacy]
---

# The Sealed Envelope, Cryptographically Considered
**Date:** 2026-04-24 | **URL:** https://singulargrit.substack.com/p/the-sealed-envelope-cryptographically
**Subtitle:** On the strange persistence of hash commitments, the things a UTXO can hold, and why your blockchain auction is a filing cabinet pretending to be a vault

## Core thesis
The industry's default sealed-bid auction — post a hash commitment, reveal later — is structurally a filing cabinet: functional, but carrying three weaknesses nobody discusses. Replacing the commitment with a threshold-encrypted bid UTXO (an "encrypted NFT") whose reveal is simply the native spend primitive delivers bearer transferability, threshold-gated reveal and protocol uniformity by construction, at roughly $0.00142 per ten-bidder auction on BSV.

## Key arguments and claims
- Hash commitments (c_i = H(b_i ‖ r_i)) are not "bad" — often they are the correct primitive — but a hash-commitment auction has three structural defects: (1) the commit-reveal path is bespoke application code re-implemented (and re-broken) per auction, with temporal coupling that auditors "charge per-hour to reason about"; (2) commitments are non-transferable — a bidder whose device dies forfeits the bid, and regulated bidders needing escrow of the reveal right are unserved; (3) the reveal phase is a liveness hazard whose patches (deposits, extended windows, trustees) accumulate into "a sealed-bid auction with a staff of people who handle the edge cases."
- The alternative: the bid is encrypted behind a combined public key Q_bid built as the sum of per-party contributions (each bidder plus the auctioneer); nobody holds the combined private key; revealing the bid means spending the UTXO under the Savanah–Wright threshold-ECDSA protocol with k-of-(N+1) cooperation. "The reveal is not application logic. The reveal is the native primitive 'spend this UTXO.'"
- Property one, bearer transferability: the bid UTXO moves by an ordinary spend, so a hospitalised bidder can transfer to a spouse; the private share must also be transmitted off-chain, which is honestly flagged as a weaker form of bearer transfer that nonetheless matches the threshold cooperation model. Hash commitments are "zero-percent transferable."
- Property two, threshold-gated reveal: no bidder can unilaterally open any bid — even colluding with a bribed or state-compromised auctioneer — because k cooperating parties are cryptographically required. This property is "cryptographically incompatible with the hash-commitment pattern," not merely absent from it.
- Property three, protocol uniformity: bid UTXOs reuse existing BSV tooling (mempool monitoring, fee estimation, transaction libraries, accounting) and existing threshold-signing infrastructure without modification. "Hash commitments are application code. Encrypted NFTs are infrastructure."
- Cost accounting: a 10-bidder auction totals 9,435 bytes (setup 2,140; ten bids at 318; ten reveals at 292; close-out 783; winner determination 412) = 4,717.5 satoshis at 0.5 sat/byte ≈ $0.00142 at $30/BSV; a 100-bidder auction is ~65,000 bytes ≈ one cent. An equivalent Ethereum L1 contract (~530,000 gas) costs ~$0.05 at 30 gwei and $0.17 at 100 gwei — BSV is 36–120× cheaper; Arbitrum/Optimism/Base close to within 2–6×.
- Why BSV specifically: Ethereum lacks UTXOs and native secp256k1 scalar multiplication (ECRECOVER only; curve emulation ~10^7 gas per multiplication); post-2017 BTC has OP_RETURN size limits and volatile fees; BSV offers unbounded transaction size, full restored Script and stable ~0.5 sat/byte pricing linear in bytes — "predictable pricing."
- Stated non-solutions: it does not eliminate trust (k-party cooperation is a liveness assumption), coercion ("a regulator with a gun"), or the TEE dependency ("the weakest link"; mixed-vendor deployments reduce correlated compromise); it is uneconomic for sub-dollar micro-auctions; and it does not replace mechanism design (first-price versus Vickrey remains the auctioneer's problem).
- Implementation footnotes: iOS Secure Enclave lacks first-class secp256k1 custody; Savanah–Wright needs three message rounds (~150 ms when all parties behave); reveal tokens must be bound to draw block height or bidders can pre-compute conditional reveals; the tokens also give regulators observability without key material; long-term bidder keys should be per-auction for forward secrecy.

## How Craig reasons (his model/logic)
Mechanism-design literacy (Vickrey 1961, revenue equivalence) joined to a primitive–substrate fit analysis: cryptographic primitives "compose differently depending on the substrate," and desirable properties should fall out of the primitives "by construction" rather than be bolted on as application code. The essay is deliberately anti-marketing, enumerating what the construction does not solve.

## Where this contradicts BTC-mainstream logic
- The Ethereum-default hash-commitment auction is a consequence of account-model convergence, not of superiority: "The hash is what you use when you do not have a better primitive available."
- BTC is dismissed as a host: OP_RETURN restrictions and fee volatility make the construction "operationally awkward."
- Against the social-layer defence of application mediation: native spend primitives can carry the entire pattern, so the bespoke contract layer is unnecessary complexity and bug surface.
- The author concedes the essay is "BSV advocacy, in the narrow sense" that BSV is the right chain for this construction, while deferring the broader UTXO-versus-account argument.

## Notable quotes
- "It is the sadness of watching someone build a filing cabinet out of granite."
- "Hash commitments are application code. Encrypted NFTs are infrastructure."
- "The bid opens when the UTXO is spent. The spend requires threshold cooperation. The bid is a bearer asset because the UTXO is a bearer asset."
- "If the tools are there, use the tools."

## Connections
This is the auction-facing companion to "Shuffling the Deck Without a Dealer" — same encrypted-NFT primitive, same Savanah–Wright threshold protocol, same TEE custody stack — and its cost table extends the batch's recurring BSV-versus-Ethereum fee-market argument.
