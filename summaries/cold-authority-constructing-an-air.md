---
title: "Cold Authority: Constructing an Air-Gapped Bitcoin SV Wallet Using ElectrumSV"
date: 2026-05-01
slug: cold-authority-constructing-an-air
url: https://singulargrit.substack.com/p/cold-authority-constructing-an-air
themes: [wallets-keys, security-economics, privacy]
---

# Cold Authority: Constructing an Air-Gapped Bitcoin SV Wallet Using ElectrumSV
**Date:** 2026-05-01 | **URL:** https://singulargrit.substack.com/p/cold-authority-constructing-an-air
**Subtitle:** A complete technical treatment of offline key generation, deterministic wallet construction, and secure transaction signing using physically isolated systems

## Core thesis
Security in a digital cash system derives from control over private keys, and every wallet-security failure traces to exposing key material to an untrusted environment. An air-gapped two-machine architecture — one machine permanently offline holding keys and signing, one online machine handling all network interaction, exchanging only signed data via USB — eliminates that exposure through physical separation rather than software promises, and is "the closest one can come to absolute control without building custom hardware".

## Key arguments and claims
- The architecture of Bitcoin SV "reduces to a single proposition: whoever controls the private key controls the coins". An air-gapped wallet relies on physical separation, not "software promises, firewall rules, or anti-malware heuristics".
- Two-system model: the offline (cold) machine generates and stores private keys and signs transactions, never connects to any network, and never receives untrusted executable input; the online (hot) machine observes blockchain state, constructs unsigned transactions, and broadcasts signed ones while holding no private keys. "The separation is not symbolic. It is absolute."
- Data flow is a unidirectional trust boundary: the online machine creates an unsigned transaction, it travels by USB to the offline machine, which signs and returns it; the online machine broadcasts. "At no point does the private key leave the offline environment."
- Threat model: the design defends against remote compromise (malware, exploits, keyloggers), supply-chain wallet tampering (if downloads are verified), and network-level surveillance. It does not defend against physical compromise of the offline machine, improperly used compromised USB media, or user error with seed phrases and backups. "The system is only as strong as its discipline."
- Environment preparation: ideally a freshly installed machine, never connected to Wi-Fi or Ethernet, wireless hardware disabled in BIOS; a reused machine is acceptable only after a complete storage wipe and OS reinstall from verified media. ElectrumSV is downloaded from the official source on the online machine, hash- or signature-verified, and transferred on a clean USB device.
- USB handling is "the weak point in most setups": use a new, dedicated drive, format it before use, never use it for general file transfer, and "treat it as semi-trusted, never trusted".
- Wallet creation: a standard ElectrumSV wallet with a newly generated seed phrase. The seed is written on paper in multiple copies stored in separate secure locations — never photographed, never stored digitally, never typed into any online system. "It is not recoverable if lost. It is not revocable if stolen." Metal storage is preferred for long-term durability against fire and water.
- ElectrumSV's deterministic key derivation means a single seed generates all future keys and addresses algorithmically, giving backup simplicity and infinite address generation without new secrets.
- The extended public key (xpub) is exported to the online machine to create a watch-only wallet: same addresses, same balance, no spending capability — the interface for all interaction.
- Transaction workflow: construct the unsigned transaction online (recipient, amount, fee), export to USB, load and sign offline, return via USB, broadcast. Before signing, the offline machine displays inputs, outputs and amounts for manual verification: "Never sign blindly."
- Misconceptions corrected: air-gapping is not absolute security (physical compromise and user error still dominate); hardware wallets are not equivalent — they "abstract the process" and "introduce firmware trust", whereas an air-gapped system "keeps all logic visible" and removes reliance on proprietary hardware; and whether it is overkill depends on value at risk — "For meaningful holdings, this is minimal."
- The model extends to multi-signature wallets, distributed key storage and Shamir secret sharing, but the core principle is unchanged: "Keys must not touch the network."

## How Craig reasons (his model/logic)
Operational security engineering from first principles: define the trust boundary, enumerate the threat model honestly (including what the design does not defend against), then reduce the system to disciplined procedure. The recurring claim is that "Security is procedural, not technological" — the architecture is simple; the discipline is the hard part.

## Where this contradicts BTC-mainstream logic
No direct engagement — this post is a technical operational guide to BSV key management. Its implicit divergences are practical rather than argumentative: it rejects hardware-wallet abstraction and firmware trust in favour of fully visible, user-controlled logic, and dismisses security-through-complexity ("obscurity, nor... complexity layered on top of fragility") in favour of physical separation.

## Notable quotes
- "whoever controls the private key controls the coins"
- "The separation is not symbolic. It is absolute."
- "Security is procedural, not technological."
- "Control the key. Remove it from exposure. Treat every interface as hostile."

## Connections
This is the custody half of a two-part operational treatment: "Batching, Headers, and Throughput" opens by stating that "the previous construction—an air-gapped wallet—establishes control. It solves custody. It does not yet solve scale", and extends this architecture to high-volume microtransaction workflows.
