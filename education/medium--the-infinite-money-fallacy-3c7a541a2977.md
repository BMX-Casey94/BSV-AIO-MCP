---
title: "The infinite money fallacy"
era: medium
date: 2018-10-04
slug: the-infinite-money-fallacy-3c7a541a2977
themes: [security-economics, wallets-keys, btc-critique]
source_summary: summaries-medium/the-infinite-money-fallacy-3c7a541a2977.md
url: https://medium.com/@craig_10243/the-infinite-money-fallacy-3c7a541a2977
---

# The infinite money fallacy — core principles

- **Infinite quantity does not imply infinite range.** There are infinitely many real numbers between 1 and 2, yet none can ever equal 3 — an infinite number of trials within a bounded mathematical range does not yield every conceivable outcome.
- **Hash collisions are infinite but unreachable.** Any probabilistic security system has infinitely many collisions in principle, but they are infeasible to find and most cannot satisfy the structure of a valid Bitcoin transaction — so they are not an issue.
- **Bitcoin was designed for one-time keys.** The design moves from private key to private key with little or no reuse; accumulating and reusing keys is a deviation that creates the real attack surface.
- **Key rotation defeats brute force cumulatively.** Each payment moves to a new address, forcing any brute-force search down its infinite path to start over; with no method of infinite storage, the set of keys used in Bitcoin cannot be mapped.
- **Address arithmetic quantifies the margin.** A standard Bitcoin address reduces a 256-bit key to a 160-bit hash, leaving around 2^96 valid private keys per address — finding one is like finding a single grain of sand among all the sand on all the planets we have found.
- **Brute-force anxiety is a category error.** The monkey fails not because of rare-event probability but because of the mathematical range of its actions; security analysis must address range and structure, not raw trial counts.
