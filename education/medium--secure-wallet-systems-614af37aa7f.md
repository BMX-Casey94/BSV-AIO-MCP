---
title: "Secure wallet systems"
era: medium
date: 2019-02-10
slug: secure-wallet-systems-614af37aa7f
themes: [wallets-keys, security-economics, script-technical]
source_summary: summaries-medium/secure-wallet-systems-614af37aa7f.md
url: https://medium.com/@craig_10243/secure-wallet-systems-614af37aa7f
---

# Secure wallet systems — core principles

- **Split the key so it never exists in one place.** Shamir's Secret Sharing divides a private key (or mnemonic seed) into shares of no use on their own; the reconstruction threshold varies with the situation. The complete key is assembled only when required.
- **No single party can sign unilaterally.** Not even the user can generate the private key alone. Compromise of one repository — a hacked wallet provider, a lost device — yields nothing; death or incapacity is survivable because remaining shares let an attorney or next of kin reconstruct access.
- **Encrypt the share channel with a common secret.** Two or more nodes determine a common secret and use it to encrypt shares in transit, because intercepting multiple plaintext shares would let an interceptor reconstruct the key.
- **A 2-of-3 deployment is the worked pattern.** Generate the key pair, split via Shamir, give one share to the user, retain one at the provider, lodge one in remote safe storage, then destroy every copy of the complete key. Reconstruction uses the user's share plus the provider's on demand; any single lost share is survivable.
- **Threshold signatures look like ordinary signatures.** Many participants each hold a share; combined shares produce a signature indistinguishable from a single-key signature, verified against one public key.
- **Compose thresholds in script.** Alice can run a 2-of-3 in which Bob holds one key of a 2-of-2 script, and Bob a 2-of-3 in which Alice holds one key of the second — mutual self-backup and arbitrary control hierarchies from native script.
- **Use shares once, then rotate.** Shares are sent sequentially once, used, and a new key is created. Devices, oracles or IoT controllers can hold shares and sign on a vote; a practical scheme is PIN-derived key plus on-device root plus a recovery root locked in a safe or escrow.
- **Recovery is an engineered feature.** A web wallet need not hold the user's entire key and can still recover lost bitcoin and tokens. Exchange and custodian hacks fail when no complete key exists to steal.
