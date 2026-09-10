# Patent fetch recipe — validated 2026-09-10

Operational contract for Phase 2 fetching. Every claim below was verified by
live fetches against real publications, not documentation.

## Identity discipline (mandatory)

Publication numbers are untrusted until title, inventors and assignee match.
A one-digit slip (`EP3268391` vs `EP3268914`) is a different invention in a
different art unit. The pipeline must verify identity on every fetch and
record `load-source` and `lang` for every text section.

Known anchors (verified):

- `WO2017145016A1` — common-secret / HD-key family (Wright + Savanah, nChain).
  WO publication itself is **Ceased**; members **US10652014B2** and
  **EP3268914B1** are **Active**. Family-level status ≠ member-level status.
- Registry / automated-management family: **EP3257191 / US11120437B2**.

## Sources

| Role | Source | Endpoint | Auth | Quota |
|---|---|---|---|---|
| CPC + family + WO/US HTML text | Google Patents | `https://patents.google.com/patent/{PUB}{KIND}/en` | none | ~1 page / 10–15 s; 503 → cool down 30–60 min |
| EP grant full text (canonical) | EPO Publication Server | `https://data.epo.org/publication-server/rest/v1.2/patents/EP{n}NW{kind}/document.xml` | none | 5 GB / 7-day sliding window |
| Weekly legal-status refresh | EPO OPS | `/legal`, `/biblio`, `/equivalents` | OAuth2 key (free, 4 GB/week) | respect fair-use headers |
| US grant PDF (fallback) | USPTO | `https://image-ppubs.uspto.gov/dirsearch-public/print/downloadPdf/{number}` | none | 1 req / 2–5 s |

**Do not scrape:** Espacenet UI, EPO Register UI, PATENTSCOPE UI (Cloudflare
403 / ToS-forbidden). PatentsView legacy API is gone (migrated to ODP, key
required, not needed for the first snapshot).

## Extraction targets (verified)

Google Patents HTML microdata — scope inventor/assignee/date fields to the
top Info `<dl>` (family/citation tables reuse the same itemprops and pollute
global selectors):

- Title: `span[itemprop=title]`; pub/kind: `dd[itemprop=publicationNumber]`,
  `meta[itemprop=kindCode]`
- Inventors/assignee: `dd[itemprop=inventor]`, `dd[itemprop=assigneeOriginal]`,
  `dd[itemprop=assigneeCurrent]` (Info `dl` only)
- Dates: `time[itemprop=priorityDate|filingDate|publicationDate]`; grant date
  via event `type=granted`
- Legal status (IFI assumption, not a legal conclusion):
  `dd[itemprop=legalStatusIfi] span[itemprop=status]`
- Events: `dd[itemprop=events]` → `time[itemprop=date]`,
  `span[itemprop=type]` (`filed|publication|granted|reassignment|legal-status|priority`)
- Abstract/description/claims:
  `section[itemprop=abstract|description|claims] div[itemprop=content]`;
  record `@load-source` (`patent-office` vs `WIPO-OCR`)
- CPC leaves (best CPC source): `ul[itemprop=classifications] li` with
  `meta[itemprop=Leaf][content=true]` and `meta[itemprop=IsCPC]`
- Family: `section[itemprop=family]`, `tr[itemprop=countryStatus]`

EPO Publication Server XML — title `B540/B542` (lang `B541=en`); inventors
`B720/B721/snm`; applicant `B730/B731/snm`; dates `B220/B430/B450`;
IPC (best IPC source) `B510EP/classification-ipcr/text`; description
`description[@lang='en']/p`; claims `claims[@lang='en']/claim`; PCT refs
`B860`, `B870/B871/pnum`. CPC not present — take CPC from Google, IPC from
EPO.

## Fetch order per family

1. Resolve kind code (bare `US10140640` ≡ `US10140640B2`; bare EP numbers are
   ambiguous A1 vs B1 — always store kind).
2. Google Patents HTML for the representative publication → biblio, IFI
   status, events, CPC leaves, family `countryStatus`, abstract.
3. If an EP B1 member exists, pull Publication Server XML — canonical
   description/claims.
4. Else if only WO OCR text exists, keep it but flag `ocr-text`; prefer any
   US/EP `patent-office` member's text where available (WO OCR claims can be
   truncated).
5. B1 grant pages can omit the abstract — keep the A1/WO abstract.
6. Pin extracted text + fetch timestamp. Weekly job touches OPS legal /
   equivalents only — never re-pulls full text.

## Scale and pacing

~800 families ≈ 800 Google pages at 10–15 s ≈ 2.7 h minimum; budget 2–3
nights with 503 cooldowns (a burst of ~8 pages in 3 minutes drew a 503
automated-query block in testing). EPO XML: 1 req / 2–3 s, no blocks
observed. Pinned extracted text is ~100–300 KB per family (description +
claims + biblio); full HTML/PDF retention is optional and adds ~0.5–1.5 GB.

## Failure modes to handle

1. Wrong-number-real-document (identity check above).
2. WO/EP-A1 text OCR or biblio-only (4 KB A1 XMLs exist) — flag, prefer
   patent-office members.
3. B1 without abstract — fall back to A1/WO abstract.
4. Kind-code ambiguity — always store kind.
5. Ceased WO with Active US/EP members — family status is a rollup.
6. Google 503 — back off 30–60 min, persist progress, resume.
7. IFI status is an assumption — weekly OPS INPADOC is the legal pin.
8. Missing English body — record `lang`/`load-source`; store PDF-only + flag.
9. Citation pollution — Info-`dl` scoping is mandatory.
