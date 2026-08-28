---
title: "The hardware wallet in a phone"
era: medium
date: 2018-11-15
slug: the-hardware-wallet-in-a-phone-a2fbbcf03a74
themes: [wallets-keys, security-economics]
source_summary: summaries-medium/the-hardware-wallet-in-a-phone-a2fbbcf03a74.md
url: https://medium.com/@craig_10243/the-hardware-wallet-in-a-phone-a2fbbcf03a74
---

# The hardware wallet in a phone — core principles

- **A spare phone is a superior hardware wallet.** Modern phones already ship with encrypted, biometrically gated secure enclaves, so a repurposed phone can outperform dedicated devices such as Ledger or Trezor; an old phone is a good wallet, making near-zero-cost cold storage accessible.
- **Minimise the attack surface.** If the phone is not used for browsing and email, the attack surface is extremely small — most attacks are client-side, so eliminating user-facing vectors beats specialised hardware hardening.
- **Powered off means no remote attack window.** Move bitcoin onto the phone and leave it off when not in use; powered-down storage removes remote attack windows entirely.
- **Remove the SIM.** SIM-less, wireless-only operation removes cellular baseband exposure and number-hijack (SIM-swap) risk, making it even more secure.
- **Layer the platform's built-in defences.** Features such as Samsung's work mode provide an encrypted section of the phone, allowing apps with a biometric and a second layer of encryption — defence in depth from platform features.
- **Hold your own keys.** Use a self-custody wallet app (such as Centbee) where you hold your keys; custody of keys, not gadgetry, is the security foundation.
