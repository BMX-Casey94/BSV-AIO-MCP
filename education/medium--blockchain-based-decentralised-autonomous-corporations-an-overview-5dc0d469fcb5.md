---
title: "Blockchain-Based Decentralised Autonomous Corporations: An Overview"
era: medium
date: 2018-10-17
slug: blockchain-based-decentralised-autonomous-corporations-an-overview-5dc0d469fcb5
themes: [tokenisation, ai-blockchain, btc-critique, governance-decentralisation]
source_summary: summaries-medium/blockchain-based-decentralised-autonomous-corporations-an-overview-5dc0d469fcb5.md
url: https://medium.com/@craig_10243/blockchain-based-decentralised-autonomous-corporations-an-overview-5dc0d469fcb5
---

# Blockchain-Based Decentralised Autonomous Corporations: An Overview — core principles

- **DAC definition.** A DAC is a corporation "without the need for any central point of control, with a certain agenda, business plan, and protocol" — it "can be a corporation, a trust, or a company"; crucially, "all entities are owned by people, and this means that the capital and decisions are associated with a human party".
- **No attackable failure point.** DACs "cannot be shut down, or even modified to make them send all of their money to an attacker's account" because there is "no failure point that can be attacked".
- **Multisig does not scale — the byte-level reductio.** "The maximum size of a standard transaction is 10,000 bytes. Each signature is about 70 bytes, so 501 of 1,000 signatures would make a 35,000 bytes transaction" — corporate-scale control therefore requires secure multiparty computation (threshold signatures), not script multisig.
- **Shamir secret sharing.** A k-out-of-n scheme where any k shares reconstruct the secret but "knowledge of any k − 1 or fewer shares of s leaves the secret completely undetermined"; shares are (i, f(i)) points on a random degree-(k−1) polynomial with f(0) = s, and zero is excluded as an index since it would reveal the secret.
- **Elliptic-curve threshold signing.** "If a (k,n) threshold scheme with polynomial interpolation is set with the public key, the private key can be recovered from k of the n pieces exactly in the same way as the public key" — enabling distributed ECDSA signing by autonomous agents.
- **Threshold honesty bound.** Holding k pieces of the DAC keypair "is equivalent to a 51% attack" — share counts below k keep the corporation secure.
- **Tokenised shares.** The DAC issues N tokens as shares (optionally via a Dominant Assurance Contract with refund if the funding goal is missed); coloured-coin transactions carry (x, f(x)) share pairs, and on transfer the old pair is invalidated.
- **On-chain governance and identity.** Votes are cast as transactions so shareholders "can count the votes themselves" with an audit trail; a blockchain identity layer ("BlockID" — driving licence, passport, credit card, keys) anchors legal personhood, since "identity theft is rampant on the Web".
- **Agent taxonomy.** Autonomous Agents are "purely software" (written in PAPAL); they cannot manufacture or code, so physical-world "contractors" are hired; classes include interface agents, voting agents (option decision trees, neural networks, SVMs) and task agents that shepherd contractor proposals to a vote.
