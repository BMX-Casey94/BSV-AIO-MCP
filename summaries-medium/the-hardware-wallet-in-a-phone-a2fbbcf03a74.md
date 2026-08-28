---
title: 'The hardware wallet in a phone'
date: 2018-11-15
slug: the-hardware-wallet-in-a-phone-a2fbbcf03a74
url: https://medium.com/@craig_10243/the-hardware-wallet-in-a-phone-a2fbbcf03a74
themes: [wallets-keys, security-economics]
---

# The hardware wallet in a phone
**Date:** 2018-11-15 | **URL:** https://medium.com/@craig_10243/the-hardware-wallet-in-a-phone-a2fbbcf03a74
**Subtitle:** There is a rather simple means to have a secure hardware wallet and it works far better than Ledger or Trezor and those sort of wallets…

## Core thesis
A spare smartphone — kept powered off, SIM-less, and used for nothing else — is a superior hardware wallet to dedicated devices like Ledger or Trezor. Craig's claim is practical: modern phones already ship with encrypted, biometrically gated secure enclaves, so minimising the attack surface beats specialised hardware.

## Key arguments and claims
- "An old phone is a good wallet" — a new phone works, but an older model is sufficient, making near-zero-cost cold storage accessible.
- Samsung's "work mode" provides an encrypted section of the phone, allowing "apps with a biometric and second-layer encryption" — defence in depth using built-in platform features.
- Use a self-custody wallet app "such as Centbee, where you hold your keys," move Bitcoin onto the phone, and "leave it off when not in use" — powered-down storage removes remote attack windows entirely.
- Attack-surface reasoning: "If you do not use the phone for browsing and email etc., the attack surface is extremely small. Most attacks are going to be client-side" — the threat model prioritises eliminating user-facing vectors over hardware hardening.
- Removing the SIM and connecting by wireless only "mak[es] it even more secure" — no cellular baseband or number-hijack (SIM-swap) exposure.
- Verdict: "when compared to the existing 'hardware wallets' and the security they offer… I would recommend the SIM-less phone."

## How Craig reasons (his model/logic)
The reasoning is threat-model driven and pragmatic: identify where attacks actually occur (client-side vectors — browsing, email, SIM), then eliminate those surfaces with configuration rather than new hardware. It is a short advisory piece rather than a theoretical argument, reflecting his recurring theme that security is about operational practice and key custody, not gadgetry.

## Where this contradicts BTC-mainstream logic
- Cuts against the hardware-wallet industry's core pitch (Ledger/Trezor as the gold standard of self-custody): Craig asserts a repurposed phone "works far better," denying that dedicated signing devices are necessary.
- Implicitly rejects the "never keep keys on a general-purpose networked device" dogma by arguing a properly isolated phone's enclave plus air-gap behaviour achieves equivalent or better security.

## Notable quotes
- "There is a rather simple means to have a secure hardware wallet, and it works far better than Ledger or Trezor and those sorts of wallets."
- "An old phone is a good wallet."
- "If you do not use the phone for browsing and email etc., the attack surface is extremely small. Most attacks are going to be client-side."
- "I would recommend the SIM-less phone."

## Connections
A short practical post amid the November 2018 split-era essays; notable for endorsing Centbee, the BSV-ecosystem wallet, reflecting his alignment with the BSV application stack. Key-custody and security-practice themes connect to his broader wallets/keys writings.
