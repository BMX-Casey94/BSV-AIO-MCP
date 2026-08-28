---
title: "How to make a brain wallet"
date: 2019-03-27
era: medium
slug: how-to-make-a-brain-wallet-a8040b7c1993
themes: [wallets-keys, security-economics, btc-critique]
source: summaries-medium/how-to-make-a-brain-wallet-a8040b7c1993.md
---

# How to make a brain wallet — core principles

- **A brain wallet is not a password.** It should never be treated as one. Security should be proportional to the value stored: millions of dollars in a single key make a simple 12-word phrase a very bad idea; fifty dollars of value will not attract serious cracking effort.
- **Perfect security for everything is the wrong goal.** Entropy requirements scale with value at risk and with realistic attacker effort. Twenty-character passwords with a few special characters are still not crackable in reasonable times — meaning decades.
- **The process itself is part of the secret.** Derivation need not be a single SHA-256 of a passphrase. A worked example hashes each word of a phrase alternately with SHA-1 and SHA-256, then computes SHA-256 of SHA-512 of the concatenation. Assumption that "it must just be hashed using SHA256" is incorrect.
- **A richer pipeline can exceed a simple deterministic wallet.** One construction starts with SHA-512, splits the output, hashes the first 256 bits with SHA-1 and the second with RIPEMD-160, then concatenates and hashes into the key with SHA-256 — more entropy, the essay claims, than a standard Core-style deterministic wallet, provided the process and source texts remain secret.
- **Match entropy to the information being stored.** "The strength of a brain wallet should be related to the information and value being stored." Risk-based custody, not binary safe/unsafe absolutism.
