---
title: "When Every Block Counts, Except the Ones That Don’t"
date: 2026-08-01
era: substack
themes: [mining-consensus, security-economics]
source: summaries/when-every-block-counts-except-the.md
---

# When Every Block Counts, Except the Ones That Don’t — core principles

- **Nakamoto consensus makes orphan waste visible and quantifiable.** Honest work that loses a race is an orphan rate you can measure. Protocols that keep every block and then demote some relocate that waste to an invisible demotion rate that no measure of certified-set size detects.
- **A graph-only ordering rule cannot recover history.** The anticone of a block is the set of concurrently created blocks whose relative order the graph does not settle. "Faulty" is a fact about history; timestamps are strings a faulty author writes at will. Identical labelled graphs force identical outputs, so the rule cannot certify withheld blocks without also demoting honest ones.
- **Bounded-anticone (k-cluster) certification sets the attacker's ceiling for him.** If k + 1 certified blocks sit in a block's anticone, that block cannot be certified. The number k + 1 is at once the smallest force that vetoes and the largest incomparable set that certifies. Raising k weakens the detection the condition exists to perform.
- **A single faulty node can mint a fan of k + 1 pairwise-concurrent blocks in an instant.** The fan plus trunk is itself a valid k-cluster, so the extreme violation of honest naming discipline passes the density test at its maximum admissible width. Damage-to-cost grows without bound: one fan vetoes every block on every chain forking from its anchor.
- **Two maximum k-clusters of identical cardinality can leave every honest block of one of them uncertified.** The loss lives in membership, not size, so approximation-ratio analysis is the wrong instrument. Honest loss is unbounded even at ratio exactly one.
- **A blameless network partition produces the same exclusion.** If both sides produce more than k blocks, any certified k-cluster must leave at least (its size − k) blocks out on one side — deterministically, growing with the partition's length, with no faulty node anywhere.
- **Certification is not monotone, and demotion is not merely a label.** A later fan can un-certify a block that looked settled. Under natural ordering rules the fan shoves honest blocks behind the attacker's, unpaid, while the accounting shows a full ledger the whole time.
- **The defects are in the specification class, not the code.** They follow from three conditions: the certified set is a k-cluster, the order respects reachability, and the rule reads the graph alone. Removing them requires a different protocol with different assumptions — a trustworthy clock, authenticated identity, or an abandoned k-cluster condition.
