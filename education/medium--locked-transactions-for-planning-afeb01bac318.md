---
title: "Locked transactions for planning"
date: 2019-03-29
era: medium
themes: [script-technical, protocol-immutability, property-rights, privacy]
source: summaries-medium/locked-transactions-for-planning-afeb01bac318.md
---

# Locked transactions for planning — core principles

- **nLockTime is an estate-planning instrument.** A time-locked transaction can assign coins to a child's address so they become spendable only at a future date, such as an 18th birthday.
- **Keep the lock off-chain until maturity.** Publishing the assignment on-chain would reveal to creditors and other parties that the funds still exist and remain under the settlor's control.
- **The off-chain lock removes the money from present control.** It takes the money out of existence and allows it to come back only when the beneficiary reaches the specified age.
- **The arrangement is a legal trust.** Control is taken away from the settlor and given to the beneficiary so that they obtain it at the maturity date — but not before.
- **Protocol stability is the enabling condition.** The locked transaction must remain valid for years; if the protocol changes, the settlor would have to retain and update keys, reintroducing a point of coercion.
- **Key destruction completes the transfer.** Once the locked payment and threshold custody are in place, throwing away the keys means nobody — including the settlor — can redirect or seize the funds before maturity.
- **Threshold custodial wallets are legitimate for minors.** A custodian wallet using a threshold key system can secure the beneficiary's keys until they come of age.
- **Permanent key control is a liability.** If the settlor still controls the keys, others can try to take those keys from him; destroying them is the security property.
- **Developer power to change the protocol is power over the whole system.** As soon as developers may alter the rules, long-dated commitments become contingent on their goodwill.
