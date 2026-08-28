# Ordinality and provenance (BRC-150)

Knowledge card. Authority 1 (spec). Snapshot of product rules, not a substitute
for `brc://spec/150`. Index this file in Phase A.

## Rules the investigator must apply

1. **Spend-only is not sat continuity.** A valid spend does not prove the same sat
   (BRC-159 ordering) travelled the hop. Check sat ordering on every hop, including
   settle-style inherit.
2. **AtomicBEEF can be SPV-valid and still fail ordinality.** BRC-62/95 prove
   inclusion; they do not by themselves prove 1Sat origin. Fail closed if the
   remittance cannot prove the hop.
3. **Never truncate an oversized remittance.** Omit the optional package rather
   than silently drop path entries.
4. **Display fields (`origin`, `name`, `app`) are claims** until the remittance
   verifies. On verification failure, treat identity as unproven.
5. **Wallets that do not implement BRC-150** must still store and forward unknown
   `customInstructions` unchanged (BRC-37).
6. **Companion pair:** BRC-147 (basket `1sat`) + BRC-150 (provenance remittance).
   Built on BRC-159/160, BRC-62/95/96, BRC-37, BRC-67.

## What this is not

- Not a competing token protocol. It is a scaling layer *for* 1Sat.
- Out of scope: OrdLock marketplace contracts, BSV-20/21 mint APIs.
- `js-1sat-ord` is denied (`reference/deny-list.json`).
