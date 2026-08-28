---
title: "Bitcoin as a Notary"
era: medium
date: 2018-10-01
slug: bitcoin-as-a-notary-d260589fcd06
themes: [law-regulation, identity, audit-accounting, governance-decentralisation]
source_summary: summaries-medium/bitcoin-as-a-notary-d260589fcd06.md
url: https://medium.com/@craig_10243/bitcoin-as-a-notary-d260589fcd06
---

# Bitcoin as a Notary — core principles

- **A blockchain produces evidence, not proof.** Hash-anchored timestamping offers evidence of existence — never proof of uniqueness or of non-publication; law is law and code is at best evidence.
- **Uniqueness is unprovable on-chain.** Colluding parties can sign two versions of a record (two sets of books); since H(M1) reveals nothing about H(M2), one chain can hold both, and only extrinsic evidence lets a court choose between them.
- **Non-existence is unprovable on-chain.** Publishing X = (M‖I) at t=0 with a secret I, then revealing M at t=T, cannot prove M existed at t=0 from the later message alone — you cannot prove a negative with Bitcoin or any blockchain.
- **Immutability does not prevent accounting fraud.** Enron's records were technically correct yet cooked; an immutable ledger preserves fake invoices as faithfully as real ones, so auditors (aided by computer-aided audit technologies) remain necessary.
- **Non-repudiation is legally void.** A signer can always repudiate a transaction, claiming duress or key theft; wallets accumulate many key-pairs for privacy, so ownership of all addresses a user controlled cannot be proved — only attribution plus external evidence.
- **A key is not an identity.** Binding keys to people requires PKI or a registration body — and then it is the registration body, not the blockchain, that provides the evidence, at the cost of privacy.
- **Possession is not ownership.** Holding a token is not title to the underlying chattel; courts assign rights and can override a recalcitrant token-holder (contempt, voiding the token), so "permissionless" control fails against court-ordered reassignment.
- **Estoppel is the operative mechanism.** Publishing your claimed earliest version of a record binds you, by estoppel, against later claiming an earlier one — but it binds no unrelated party.
- **Real notarisation is identity work.** A notary authenticates powers of attorney, property transactions, wills and company documents; a blockchain notary service must validate the document, check the hash, bind keys to persons, witness the broadcast, and use recognised digital-signature frameworks (ECA/UNCITRAL).
- **Key control is not the legal right to spend.** Holding the private keys does not mean you own an address — you may be an agent of a company wallet, and spending without the legal right is theft.
- **Bitcoin is property infrastructure, not anarchy.** The ledger is about property and is capitalist in design; the market does not want anonymity or the removal of government — it wants what can be delivered for a unit cost.
