---
title: "Scenario 3: Lease Contract"
era: medium
date: 2018-10-06
slug: scenario-3-lease-contract-d0ee4cd3900e
themes: [tokenisation, script-technical, law-regulation]
source_summary: summaries-medium/scenario-3-lease-contract-d0ee4cd3900e.md
url: https://medium.com/@craig_10243/scenario-3-lease-contract-d0ee4cd3900e
---

# Scenario 3: Lease Contract — core principles

- **Fixed-term agreements are state machines too.** A lease with a fixed term (e.g. three years between lessor and lessee) maps onto an on-chain state machine with a defined termination state, unlike open-ended asset registration.
- **Break clauses are modelled explicitly.** A lease with no break clauses has no early-exit transitions; the absence of exit paths is itself part of the contract specification.
- **Payment schedules are a separable concern.** The lease specifies a number of payments, but payment mechanics are modelled in their own layer — contract structure and payment flow are distinct design dimensions.
- **Legal drafting is a specification problem.** Contract-law categories (term, break clause, payment schedule) map directly onto machine states and transitions, so standard contract types are expressible on Bitcoin without additional platforms.
