---
title: 'Bitcoin as a Notary'
date: 2018-10-01
slug: bitcoin-as-a-notary-d260589fcd06
url: https://medium.com/@craig_10243/bitcoin-as-a-notary-d260589fcd06
themes: [law-regulation, identity, audit-accounting, governance-decentralisation]
---

# Bitcoin as a Notary
**Date:** 2018-10-01 | **URL:** https://medium.com/@craig_10243/bitcoin-as-a-notary-d260589fcd06
**Subtitle:** I was forwarded one of the most ignorant concepts of what Bitcoin (and for that matter Blockchain) is about earlier today. This would be a…

## Core thesis
A direct rebuttal of Vitalik Buterin's claim that blockchain notarisation provides "proof of inexistence": Craig argues a blockchain can only ever produce *evidence of existence* — never proof of uniqueness or non-publication — because keys are not identities, colluding parties can sign multiple versions, and hash commitments can be concealed. Real notarisation requires identity verification, witnessed signing and PKI registration, so Bitcoin is at best "a more resilient and cheaper escrow and notary service" whose evidential value comes from external certification bodies. The wider target is the "Code is law" ideology: "Law is law and code is at best evidence."

## Key arguments and claims
- Notarisation "does… offer evidence of existence. Not proof, evidence" — and even hash integrity can be challenged, citing the MD5 collision work and the Stripwire tool.
- He formalises Buterin's claim as a logical OR — A: prove message M is the *one and only one* signed of its type; B: prove a message type *has not* been published yet — and sets out to refute each disjunct independently.
- Against Claim A: colluding parties can sign both M~X and M~Y ("two sets of books"); since H(M~X) does not reveal H(M~Y), a single blockchain can hold both, and only "extrinsic evidence" lets a court choose between them — evidentiary weight, not proof.
- The Enron example: Enron's records "were all technically correct" and "cooked", not altered — "if Enron used a Blockchain, the accounting records would not be any different". Immutability does not stop fake invoices, embezzlement or standard accounting fraud; CaaTs (computer-aided audit technologies) make blockchain auditing easier but "does not remove the need for auditors".
- Non-repudiation is legally void: "I can always repudiate a transaction… stating I was under duress or the key was stolen." Moreover wallets accumulate many key-pairs for privacy, so "there is no way to prove ownership of all possible addresses a user has controlled" — only attribution plus external evidence.
- Proof of key control requires registration (PKI or a registration body) — and then "it is not the Blockchain that is providing the evidence, but the PKI or registration body", at the cost of privacy.
- Against Claim B: publish X=(M||I) at t=0 with secret 4096-bit I, and Y=(M) at t=T; "You cannot prove M existed at t=0 from the message provided at time t=(T) alone", nor exclude variants like Hash(M_XOR_I). "You cannot prove a message M has not been previously published."
- "Permission-less as it is touted is a fallacy": possession of a token is not ownership of the underlying chattel — a car-registration token can be overridden by a court assigning the car to another party; courts "assign rights" and can hold a recalcitrant token-holder in contempt or void the token. "The fallacy of decentralisation of everything is again a pseudo religious claim without merit."
- A key is not identity: "those in the ETH camp… confuse identity and the ability to sign a transaction"; binding keys to people requires "the long arduous process of PKI", which then destroys privacy.
- Beta vs VHS: Beta was not meaningfully superior — the market chose on price and recording time (US consumers wanted a full gridiron game on one tape). "Technology is about what can be delivered for a unit cost… That simple." Likewise "The market does not want a system that allows anonymity and the complete removal of government."
- "Blockchain is not about equality. It is about property and it is capitalist. It has been designed in a manner that precludes socialist control." Efficient voting protocols can be built on Bitcoin — "I have patented more than 10 ways to do this" — but that is not "a universal system of distribution".
- What a real notary does (per the UK Notaries Society): authenticating powers of attorney, property transactions, wills, company documents — i.e. verifying identity and authenticity at signing time. A blockchain notary would need to validate the document, check the hash, bind keys to persons, witness the broadcast, and use ECA/UNCITRAL-approved digital signatures.
- "Bitcoin does not allow people to be their own bank, banks issue loans and arrange credit… holding the private keys does not mean you own a bitcoin address" — you may be an agent of a company wallet; spending after leaving "is theft… You still require the legal right."
- Estoppel is the real mechanism: publishing your claimed earliest version of M binds *you* (under estoppel) from later claiming an earlier one, but cannot bind unrelated parties — "you do not prove a negative with Bitcoin (or any Blockchain) and you do not remove law."

## How Craig reasons (his model/logic)
Adversarial formal refutation: he quotes the opponent verbatim, recasts the claim as a logical disjunction, then constructs explicit counterexamples (collusion/two sets of books; the M||I hash-preimage concealment argument) to falsify each disjunct. He layers legal doctrine (evidence vs proof, estoppel, repudiation, duress, agency) over the cryptographic points, invokes professional authority ("having worked in a Chartered Accounting firm… in fraud detection teams"), and closes with market-based and anti-ideological rhetoric (Beta/VHS, "the market does not want… anarchy").

## Where this contradicts BTC-mainstream logic
- Directly attacks Ethereum's "code is law" and smart-contract ideology: "Code is not law. Law is law and code is at best evidence."
- Refutes the crypto-notarisation orthodoxy (proof of non-existence/uniqueness) championed by Buterin — uniqueness and non-publication are unprovable on-chain.
- Demolishes non-repudiation, a cryptographic-community shibboleth: signatures are always repudiable in law (duress, theft).
- Rejects "permissionlessness" and "be your own bank": property rights are court-assignable, keys confer possession not ownership, and banks (credit creation) are not replaceable by cash holdings.
- Rejects the crypto-anarchist market thesis: the market does not want anonymity or the removal of government; Bitcoin "is about property and it is capitalist", designed to preclude socialist control — a direct inversion of both BTC and ETH community self-images.
- Ends by planting the BCH flag weeks before the Nov 2018 split: "Lastly, Bitcoin is cash (BCH)."

## Notable quotes
- "Law is law. Code is only evidence."
- "It is not keys, it is people."
- "The fallacy of decentralisation of everything is again a pseudo religious claim without merit."
- "Bitcoin is thus only a more resilient and cheaper escrow and notary service and the existence of the blockchain is not what provides 'proof'."
- "The market does not want a system that allows anonymity and the complete removal of government."
- "Lastly, Bitcoin is cash (BCH)."

## Connections
Part of Craig's anti-"code is law" series that continues on craigwright.net; engages directly with a quoted statement by Vitalik Buterin. References his own patent portfolio ("I have patented more than 10 ways" to build voting protocols on Bitcoin — nChain-era filings), the MD5/Stripwire collision episode, Enron as audit-fraud archetype, and the UK Notaries Society and UNCITRAL/ECA digital-signature frameworks. Dated six weeks before the BCH/BSV split, it closes with an explicit BCH endorsement.
