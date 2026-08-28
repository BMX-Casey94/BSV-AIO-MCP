---
title: "Digital Cash Is Not a Vault"
date: 2026-08-12
slug: digital-cash-is-not-a-vault
url: https://singulargrit.substack.com/p/digital-cash-is-not-a-vault
themes: [wallets-keys, security-economics]
---

# Digital Cash Is Not a Vault
**Date:** 2026-08-12T01:37:36.807Z | **URL:** https://singulargrit.substack.com/p/digital-cash-is-not-a-vault
**Subtitle:** The Security Failure Created by Treating One Key as Enough

## Core thesis
Bitcoin security is framed around the wrong question — whether a device or seed is "safe" — when the real question is why compromise of one key should suffice to lose a substantial holding. A private key is an authorisation credential, not a security architecture. Because Bitcoin was designed as cash enabling "small casual transactions" (Nakamoto, 2008), single-key convenience suits spending money; treating it as the custody model for savings, treasuries or generational wealth is "a category error—and, when substantial value is involved, an avoidable security failure". Security depth must scale with value at risk, through independent threshold (m-of-n) authorisation that Bitcoin supported from v0.1.

## Key arguments and claims
- Nakamoto (2008) motivated "small casual transactions" by lowering mediation costs; nothing in the paper makes the most convenient signing arrangement a universal custody architecture.
- NIST SP 800-57 (Barker, 2020) treats key security as a lifecycle problem (generation, storage, use, recovery, compromise, destruction), not algorithm strength: a 256-bit key can be formidable while the surrounding system is fragile.
- The inversion: balances grow "five or six orders of magnitude" while the authorisation threshold stays at one; moving from phone to hardware wallet is "merely a stronger implementation of the same single point of failure".
- NIST SP 800-160 (Ross et al., 2021): resilience assumes components fail; the engineering goal is that one compromise does not equal system compromise.
- Hardware wallets are components, not threat models. Guri (2018, "BeatCoin") demonstrated key exfiltration from air-gapped wallets; isolation reduces classes of exposure rather than abolishing them.
- "Self-custody" means the absence of an external custodian; it "does not require a single key, a single signer, a single device, or even a single location". The objective is "resilient control".
- Coldcard case study: Block's engineering investigation (30 July 2026) found an RNG integration error — a disabled hardware RNG path could fall back to a deterministic software generator. TRM Labs reported attacks beginning 30 July 2026 that drained approximately 1,816 BTC (about US$116 million) from more than 5,200 addresses. Patching cannot strengthen an already-weak seed; funds required migration. Under a threshold policy, one weak key is "a compromised layer, not automatically a stolen holding".
- Bitcoin v0.1 (January 2009) already contained OP_CHECKSIG and OP_CHECKMULTISIG (Nakamoto, 2009): multiple-key authorisation is native, "not an alien banking practice".
- Protocol validity ≠ security suitability: "A transaction can be perfectly valid and still embody an inappropriate security policy." Standardness serves interoperability, not optimal custody; US$10, US$100,000 and US$100 million should not sit behind the same signing threshold.
- Three-of-five worked example: five independently generated keys, any three to spend. The attack condition becomes conjunctive; two keys can fail without loss of access. But independence, not key count, is the measure: five keys from one RNG, one bag, one building, one supply chain or one administrator are common-mode failures.
- The seed phrase is a dangerous abstraction: engraving twelve or twenty-four words in metal protects against fire, not against the fact that one recovered credential authorises everything.
- Formal frame: E_i = p_i·L(V) + C_i — expected cost is compromise probability times loss plus operating cost. Security is "an optimisation problem rather than a ritual", yielding tiers: spending wallet (one key), reserve (multiple independent keys), long-term savings (geographic and technological separation), corporate treasury (segregation of duties, dual control, auditability, tested recovery).
- Physical-cash analogy: pocket cash versus business safe versus institutional vaults; one wallet model for everything is like keeping "a corporate cash reserve... in someone's trousers".
- The BTC community's mistake: "Wallet usability became the model of ownership. Seed backup became the model of security. A consumer signing device became the model of cold storage." Bonneau et al. (2015) warned that observed success of practices is no evidence they remain appropriate as incentives change.
- Convenience is a trade-off, not the objective: "That friction, however, can be the security control." A treasury should require more ceremony than a coffee.
- A serious model asks first: value at risk; category of funds; adversary classes (malware, targeted attacker, insider, coercion, supply chain); and how many independent failures may precede movement. Device selection comes last.

## How Craig reasons (his model/logic)
A systems-security-engineering argument built from category distinctions. He separates (i) economic function (spending versus saving), (ii) credential from architecture, and (iii) consensus validity from security suitability, then applies NIST's lifecycle and resilience frameworks, an expected-loss equation, and fault-containment logic (independent failure domains, conjunctive attack conditions). The v0.1 source code serves as historical evidence that one-key custody is a later convention rather than a protocol constraint, and the 2026 Coldcard incident is the empirical demonstration that converts the theory into measured loss.

## Where this contradicts BTC-mainstream logic
- Against "one seed, properly backed up, is enough": metal-plate backups protect against fire but not against the authorisation structure; the question is what authority the seed confers.
- Against hardware-wallet maximalism: "A device that is very difficult to compromise remains a single point of failure if its compromise alone is sufficient."
- Against equating self-custody with single-key custody: self-custody "does not require a single key, a single signer, a single device, or even a single location".
- Against standardness as safety: a "standard" transaction pattern "is not an economic theorem establishing optimal custody".
- Against convenience-first wallet UX: convenience "should be optimised subject to the required security level, not treated as the security level itself".
- Notably, the argument appeals to original Bitcoin (v0.1 multisig) against later BTC wallet convention — the divergence is with custody orthodoxy, not with the early protocol.

## Notable quotes
- "Digital cash needs the convenience of cash. Digital savings need the security of savings."
- "Security architecture turns catastrophe into incident response."
- "One key should not control a fortune merely because one key is sufficient to buy coffee."
- "A transaction can be perfectly valid and still embody an inappropriate security policy."

## Connections
No explicit references to the other essays in the set. It shares with "Bitcoin After the Casino" the foundational reading of Nakamoto (2008) as a cash system built for small casual transactions; here that reading bounds what single-key custody is for. Its vault-versus-cash distinction is the custody-side counterpart of the carrying-cost critique of "digital gold" in "The Asset That Pays Rent to Exist".
