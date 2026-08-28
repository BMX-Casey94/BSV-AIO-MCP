---
title: "Cold Authority: Constructing an Air-Gapped Bitcoin SV Wallet Using ElectrumSV"
date: 2026-05-01
era: substack
themes: [wallets-keys, security-economics, privacy]
source: summaries/cold-authority-constructing-an-air.md
---

# Cold Authority — core principles

- **Whoever controls the private key controls the coins.** Every wallet-security failure traces to exposing key material to an untrusted environment; physical separation beats software promises, firewall rules and anti-malware heuristics.
- **Two machines, one absolute boundary.** The offline machine generates keys and signs, never connects to a network, and never receives untrusted executable input. The online machine observes chain state, constructs unsigned transactions and broadcasts signed ones, holding no private keys.
- **Data flow is unidirectional.** Unsigned transaction out by USB, signed transaction back; at no point does the private key leave the offline environment.
- **The threat model is honest about what it does not cover.** Remote compromise, supply-chain tampering (if downloads are verified) and network surveillance are in scope. Physical compromise of the offline machine, compromised USB media and user error with seed phrases are not. The system is only as strong as its discipline.
- **Prepare the environment as if every interface is hostile.** Fresh install, never networked, wireless disabled in BIOS; ElectrumSV hash- or signature-verified on the online machine and transferred on a new, dedicated, formatted USB treated as semi-trusted, never trusted.
- **The seed is paper (or metal), never digital.** Multiple copies in separate secure locations; never photographed, never typed into an online system. It is not recoverable if lost and not revocable if stolen.
- **Deterministic derivation plus a watch-only xpub.** One seed generates all future keys; the extended public key on the online machine yields the same addresses and balances with no spending capability.
- **Never sign blindly.** The offline machine displays inputs, outputs and amounts for manual verification before signing.
- **Hardware wallets abstract the process and introduce firmware trust.** An air-gapped system keeps all logic visible and removes reliance on proprietary hardware. For meaningful holdings this is minimal, not overkill.
- **Keys must not touch the network.** The same principle extends to multi-signature wallets, distributed key storage and Shamir secret sharing. Security is procedural, not technological.
