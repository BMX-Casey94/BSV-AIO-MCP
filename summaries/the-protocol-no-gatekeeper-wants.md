---
title: "The Protocol No Gatekeeper Wants"
date: 2026-08-02
slug: the-protocol-no-gatekeeper-wants
url: https://singulargrit.substack.com/p/the-protocol-no-gatekeeper-wants
themes: [intermediaries, protocol-immutability, micropayments]
---

# The Protocol No Gatekeeper Wants
**Date:** 2026-08-02T23:12:09.292Z | **URL:** https://singulargrit.substack.com/p/the-protocol-no-gatekeeper-wants
**Subtitle:** Bitcoin’s countercultural architecture moves payments, identity, property and evidence to the edges—and makes every platform replaceable

## Core thesis
Bitcoin’s genuinely countercultural feature is architectural, not aesthetic: it moves control of payments, identity, property, contracts, data and evidence to the edges of the network, so that no intermediary is compulsory. The wider cryptocurrency industry merely distributes technical components while retaining institutional control — “The names change. The dependency remains.” BSV is isolated and opposed precisely because it pursues this edge architecture, which threatens the rents of every organisation built on compulsory intermediation.

## Key arguments and claims
- The crypto industry reproduces the concentration it claims to oppose: a bank is replaced with an exchange, a board with a developer committee, a regulated administrator with a token foundation. “The rhetoric is countercultural. The architecture is familiar.”
- The early internet ran on interoperable protocols; the application layer then concentrated into platforms that control admission, portability and continuity. The EU’s Digital Markets Act now formally labels such providers “gatekeepers”. Bitcoin asks the prior question: can systems be designed so no provider acquires permanent control in the first place?
- A fixed protocol is the linchpin. If developers can alter validity rules “they are governors whether or not they hold a formal title”; if exchanges coordinate acceptance of a rule change they exercise institutional power; if a foundation can redefine an asset, ownership is conditional. “The rules are not a product feature. They are the commitment upon which products compete.”
- He invokes the classic end-to-end argument in system design: functions belong at the endpoints. The white paper’s simplified payment verification (SPV) lets users verify inclusion without operating transaction-processing nodes; miners order and timestamp, users hold their own transactions and evidence.
- The operational test is substitutability: “If a service disappears, can another service recover and continue the relationship from evidence controlled by the parties? If the answer is no, the system remains centralised at the point that matters.”
- Edge architecture solves the “empty island” problem of new platforms: users bring keys, proofs and portable state, so entry no longer requires rebuilding the whole social and commercial network. Incumbents’ principal asset “is often not the software. It is the inability of users to leave without losing one another.”
- SPV is “central rather than optional”. His MF-SPV implementation extends BSV’s SPV documentation “for industrial scale through hierarchical Merkle commitments and sender-held proofs”; “proof size grows logarithmically while the network’s transaction volume can expand by orders of magnitude.”
- Universal replication “sounds egalitarian but produces centralising economics”: if everyone must process everything, capacity is restricted, fees rise, micropayments die, and users flee to exchanges and custodians. “The ideology of universal verification thus creates the intermediaries it claims to prevent.”
- Overlays create application-specific views over a common transaction substrate, separating protocol, database, identity, interface and governance. His overlay-broadcast implementation adds key-graph structures for controlled distribution and changing access rights. “The service remains useful. It ceases to be sovereign.”
- Service provider vs gatekeeper: the former is paid for a task; the latter extracts because parties cannot otherwise reach each other. Promises that software will abolish banks or governments are “adolescent”; institutions solve real problems of trust, risk, enforcement and coordination. “Bitcoin lowers the cost of coordination… It does not eliminate law; it gives lawful relationships a better evidential substrate.”
- Opposition needs no conspiracy: exchanges, custodians, platform investors, developer groups, media and users with sunk investments each have independent incentives. “The resulting isolation looks coordinated even when it emerges from independent institutional incentives.”
- Why BSV is isolated — it rejects: artificial scarcity of block space (a “rare ceremonial resource” serving the speculative model); the universal-node ideology; perpetual protocol politics (the “recent Chronicle restoration… completes the removal of artificial limits and closes the programme of base-rule alteration”); anonymity as commerce’s organising principle (privacy via selective disclosure, but accountable parties); the “blockchain as shared database” view (UTXOs, Script, SPV and overlays form a transaction system with transferable state); and the industry’s exchange/custodian/bridge/token revenue model.
- Warning against romanticising isolation: “Being opposed does not prove that a system is correct.” BSV “is not yet at its internet moment” — TCP/IP only became transformative when stable protocols met interoperable implementations, usable software, documentation and commercial deployment.
- The work is slow because edge systems cannot rely on silent administrative discretion; they need explicit transaction formats, deterministic state transitions, recovery paths, proof structures, key-management rules and interoperability standards. He lists his released components: MF-SPV, overlay-broadcast, dealerless transaction-state systems (multiparty interaction, concealed information, deterministic fallback), plus micropayment, accounting, key-custody and digital-scarcity components.
- An edge platform must permit permissionless service creation, portable identity/history, multiple compatible providers, direct payments with openly charged services, survival of digital goods beyond their interface, lawful recovery and succession “without pretending that possession of a key answers every legal question”, privacy through controlled disclosure, and above all “exit without exile” — “The user changes tools, not worlds.”
- Economic consequence: micropayments let services charge for actual use (“One article, one calculation, one message, one second of computation or one sensor reading”); digital scarcity makes a licence, ticket, credential, invoice or publication a “unique authorised state”; and the boundary of the firm shifts as contracting, measuring and settling costs fall, so database control “ceases to be sufficient justification for scale”.

## How Craig reasons (his model/logic)
The method is institutional economics fused with systems architecture. He treats technical architecture as an allocation of power and decision rights, then runs an incentive analysis: who holds residual discretion, who captures rent from lock-in, and why opposition emerges from aligned incentives without coordination. The reasoning draws on the end-to-end design principle from networking, a Coasean theory of the firm (scale justified only where contracting costs demand it), and an operational falsification test — substitutability — rather than ideological labels. The essay is structured as a definition of terms (service vs gatekeeper, edge vs centre), a mechanism (fixed rules plus portable evidence), and a prediction (incumbent resistance, slow adoption).

## Where this contradicts BTC-mainstream logic
- Against “every user runs a full node”: universal replication “produces centralising economics” and “creates the intermediaries it claims to prevent”.
- Against scarce block space and fee markets: high fees “eliminate micropayments” and serve only “the image of an exclusive monetary asset”; success should be measured by “the amount of useful commerce carried”, not the price of access.
- Against ongoing protocol governance: developers who can alter rules “are governors”, and the protocol should be fixed — the Chronicle restoration “closes the programme of base-rule alteration”.
- Against anonymity as the ideal: commerce involves “accountable parties”; he rejects “the libertarian fantasy that law can be deleted by code” as well as platform-custodied privacy.
- Against “blockchain as shared database” / hash-anchoring: UTXOs, Script, SPV and overlays form a transaction system in which users hold transferable state and evidence.
- Against the industry’s self-image: most “decentralisation” is rhetoric over familiar centralised architecture — “The rhetoric is countercultural. The architecture is familiar.”

## Notable quotes
- “The ideology of universal verification thus creates the intermediaries it claims to prevent.”
- “The service remains useful. It ceases to be sovereign.”
- “That is the difference between distributing a database and distributing power.”
- “The objective is to make the centre unnecessary.”

## Connections
The essay contains no explicit citations of the other two essays in this set. Within the text it references the Bitcoin white paper’s SPV model, BSV documentation, the Chronicle restoration, and his own implementations (MF-SPV, overlay-broadcast, dealerless transaction-state systems). Thematically, its fixed-protocol/anti-governance argument is the architectural counterpart of the hold-up analysis formalised in “The Cost of Permission”, and its overlay/SPV/Merkle-proof machinery is the same apparatus given a full technical treatment in “Order On-Chain, Content Off-Chain, Judgement in the Overlay” — though the essay itself does not name either.
