# nChain / BSV patent licensing — verified findings (2026-09-10)

Audit trail for the patent corpus's `licence_coverage` policy. Compiled by
systematic review of primary sources (licence texts, patent-office records,
contemporaneous press). Full source list at the end.

## Verdict

**No third party can currently verify, per patent family, whether an nChain
family is covered by a BSV-free licence.** No currently offered legal
instrument exists that (a) is granted by the patent owner (nChain Holdings
Limited / nChain Licensing AG), (b) is royalty-free for BSV use, and (c)
enumerates covered publication/application numbers. Corpus default:
`no-coverage-found`. Press language ("key IP assets", "many of nChain's IP
assets", "some nChain IP") is never a coverage tag.

## What exists

1. **nChain Open Bitcoin Cash License (Apr 2018)** — the only published
   nChain instrument that grants patent rights. Software-tied to the
   Nakasendo SDK; patent grant limited to contributor patents that "read
   directly on" the contribution; platform-limited to the **Bitcoin Cash
   (BCH)** chain (§3(F)); no covered-patent schedule; defensive termination
   (§3(B)). Never amended to name BSV; live URL dead since late 2018
   (archived at web.archive.org, 26 Apr 2018 capture). The 16 Apr 2018
   Nakasendo PR named two families as incorporated in the SDK:
   **WO2017145016** (determining a common secret — HD keys) and
   **WO2017145010** (secure multiparty loss-resistant key storage; the PR's
   "WO201714510" is a typo). That is a press identification, not a schedule.
2. **Open BSV License (Bitcoin/BSV Association, 2019– )** — chain-limited
   software **copyright** licence (BSV chain defined by block 556767).
   Versions 5/6 contain no grant of nChain patents. Not a patent programme.
3. **Informal "royalty-free on BSV" statements (2019)** — Jimmy Nguyen,
   7/14 Mar 2019: "free to use **many** of nChain's IP assets", "**some**
   nChain IP will be licenced for free for products supporting the SV
   blockchain". Bitcoin Association, 16 Sep 2019: wallet-workshop inventions
   held by nChain "with the commitment to license them for free use on
   Bitcoin SV only". No instrument, no list, no follow-through located.
4. **IPwe Blockchain Smart Pool (2022–2024)** — commercial pool, nChain as
   first Founder; claimed "1,250+ patents and applications"; tiered pricing
   (free < US$1m revenue … US$225k > US$10bn); not BSV-limited. IPwe, Inc.
   filed Chapter 11 on 24 Jan 2024, converted to Chapter 7 on 13 Mar 2024.
   No durable archive of the numbered pool list recovered. Treat as ended.
5. **nChain Knowledge Base / web3knowledgebase.com (2023– )** — commercial
   licensing catalogue ("over 400 inventions"); "hobbyist-level often free"
   is interview assertion, not published terms. Current public posture:
   **ask nChain; pay unless they decide otherwise.**
6. **Bilateral licences** — TAAL (24 Apr 2020): non-exclusive, 10 years,
   US$1m year-one fees; no public schedule. Ayre Group deal: private.

## Enforcement posture (public record)

No verified nChain Licensing AG / Holdings patent-infringement suit as
plaintiff was identified. The record shows portfolio-building, paid bilateral
licences, a failed commercial pool, and defensive EPO oppositions (third
parties attacking nChain grants, e.g. EP3449450/451/452). COPA v Wright
[2024] EWHC 1198 was identity/copyright litigation brought *against* Wright,
not nChain asserting patents.

## Side note

nChain's Rabin-signatures paper states nChain "does not intend to seek patent
protection" for that work — a paper-specific non-filing statement, not a
portfolio licence.

## Ownership

USPTO assignment records show nChain Holdings Ltd → nChain Licensing AG as a
change of name (e.g. US10652014 assignment trail). Ownership by either entity
is not evidence of BSV licensing.

## Key sources

- Archived Open BCH Licence PDF: web.archive.org/web/20180426093217/https://nchain.com/app/uploads/2018/04/nChain-Open-BCH-Licence.pdf
- Nakasendo PR (16 Apr 2018): newswire.ca/news-releases/nchain-releases-nakasendo-software-development-kit-679843953.html
- First EP grant PR (11 Apr 2018): newswire.ca/news-releases/nchain-receives-first-patent-grant-for-blockchain-enforced-smart-contract-invention-679370183.html
- Open BSV License: github.com/bitcoin-sv/bitcoin-sv/blob/master/LICENSE
- Nguyen statements: coingeek.com/the-devil-is-in-the-patent-details/ (7 Mar 2019); coingeek.com/jimmy-nguyen-why-nchain-has-filed-so-many-patent-applications/ (14 Mar 2019)
- BA workshop statement: coingeek.com/bitcoin-association-call-for-interest-in-new-bsv-technical-standards-committee/ (16 Sep 2019)
- IPwe pool: pressrelease.com/news/nchain-joins-the-first-blockchain-smart-pool-as-a-founder-21651878 (9 Mar 2022); bankruptcy: PacerMonitor case 1:24-bk-10078 (D. Del.)
- TAAL licence: coingeek.com/nchain-enters-into-ip-licensing-agreement-with-taal-for-blockchain-related-patents/ (24 Apr 2020)
- Knowledge Base: web3knowledgebase.com; coingeek.com/with-knowledge-base-nchain-seeks-to-make-patent-records-accessible-and-easy-to-use/
- EPO oppositions: tuftythecat.blogspot.com/2025/04/faketoshi-patent-oppositions-story-so.html
- TSC Patent License Pledge (standard-by-standard Necessary Claims, not portfolio-wide): tsc.bsvblockchain.org/faq/
