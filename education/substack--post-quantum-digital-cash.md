---
title: "Post-Quantum Digital Cash"
date: 2026-07-12
era: substack
themes: [quantum-scepticism, monetary-economics, security-economics, wallets-keys]
source: summaries/post-quantum-digital-cash.md
---

# Post-Quantum Digital Cash — core principles

- **Post-quantum digital cash is a payment-system design problem.** Swapping RSA or ECDSA for a new primitive changes the mathematics an attacker must defeat; it does not change verification cost, finality, privacy, value-per-key, or recourse for defective transfers.
- **The quantum threat is a cost, not a threshold.** Breaking a key is a production process with capital intensity, utilisation, runtime, operating cost and reliability. Exposure is the gap between a falling cost-per-key frontier and the value each key protects: high-value consolidated keys are exposed first, everyday cash last, if ever.
- **Shor and Grover are not the same threat.** Shor breaks the public-key layer; Grover only quarters or halves symmetric and hash security, fixed cheaply with longer keys. Hash-based signatures are the most conservative replacement because their security rests only on the hash.
- **Bearer verification must stay information-light at the point of sale.** Heavy post-quantum signatures can secure the instrument against a future machine while breaking it against the present merchant. Efficient systems scale verification strength to the value and risk of the transfer.
- **Finality and recoverability cannot both be maximal.** Recoverability is the negation of pure bearer finality. The argued boundary: low-value transparent transfers final like cash; very high-value opaque transfers get provenance and controlled, costly, governed recovery as a narrow exception.
- **Layered resilience, no layer sufficient alone.** Quantum-resistant base; scalable low-cost verification; low-value finality; privacy-preserving transfer; bounded governance for high-value defects at the top. Governance without strict bounds produces a reversible ledger wearing a cash mask.
- **Distributed, low-value-per-key cash usage is the exposure model.** A CBDC that swaps signatures but leaves finality and privacy unexamined has upgraded the wrong layer. Harvest-now-decrypt-later exposure is per-asset against the cost frontier, so long-lived high-value confidential records migrate first.
- **It is about building money that survives a quantum world without forgetting what money is for.** Digital cash targets bearer properties — possession as entitlement, transfer final, no intermediary — in a world where bits can be copied.
