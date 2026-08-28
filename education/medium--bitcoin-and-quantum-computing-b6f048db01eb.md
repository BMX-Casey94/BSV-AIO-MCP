---
title: "Bitcoin and Quantum Computing"
era: medium
date: 2019-01-23
slug: bitcoin-and-quantum-computing-b6f048db01eb
themes: [quantum-scepticism, script-technical, security-economics, btc-critique]
source_summary: summaries-medium/bitcoin-and-quantum-computing-b6f048db01eb.md
url: https://medium.com/@craig_10243/bitcoin-and-quantum-computing-b6f048db01eb
---

# Bitcoin and Quantum Computing — core principles

- **Address non-reuse is the front-line quantum defence.** A quantum attack is only even theoretically viable against reused addresses with exposed public keys holding large value for extended periods; moving receipts to fresh addresses within minutes shrinks the attack surface to nothing. Keeping public keys unexposed until spend is simultaneously privacy hygiene and quantum hygiene.
- **Multisig multiplies attack cost.** Attacking an address means attacking every key associated with it; even granting an unproven sub-30-day key reversal, a 15-of-15 key address would take on the order of 18 months to compromise.
- **Hash-anchored scripts are quantum-immune in theory.** Adding an indexed hash puzzle to a single-use key — e.g. Hash256(<Sig> + <pubKey> + <Data_Hash(i)>) Mod (N) == <Redeem Value> — makes ECDSA plus a hash immune even in theory, using only Bitcoin's native script.
- **Additive key structures extend the defence.** <pubKey(1)> = <pubKey(0)> + Hash(Hash(S)).G + Hash(Hash(Y)).G, with a hash puzzle over Hash(S+Y), enables 1-of-2 signature scripts where one key un-signs and the other solves the puzzle — post-quantum-style constructions from existing opcodes.
- **A full script language is a security margin.** Bitcoin's quantum resistance stems from its scripting language; disabling opcodes removes the built-in design space in which future defences are constructed, so restored and unrestrictive script is forward-compatible security.
- **Evaluate attacks economically, not apocalyptically.** Ask what is worth attacking, at what cost, over what window; claims of near-term quantum capability answer a research-funding incentive rather than a measured threat, and Bitcoin's existing tooling suffices for decades.
