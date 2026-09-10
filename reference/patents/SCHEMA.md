# Patent corpus — layout, manifest schema, card template

Design contract for the patent prior-art domain. Mirrors the BRC pipeline
(`brc_index.json` manifest + per-item bodies) and the essay pipeline
(full text + digest cards). The unit of the corpus is the patent **family**
(one invention; WO/US/EP/etc. members listed as metadata), never the
individual publication.

## Layout

```
reference/patents/
  SCHEMA.md               # this file
  patent_index.json       # family-level manifest (curated + verified)
  families/<FAMILY>.md    # full text of the representative member, formatted
  summaries/<FAMILY>.md   # structured summary card (the retrievable layer)
  concept-map.md          # Phase 3: concept taxonomy -> families -> BRCs/packages
```

`<FAMILY>` is the family key: the WO publication number without kind code
where one exists (e.g. `WO2017145016`), else the earliest US/EP publication.

## Manifest — `patent_index.json`

Top level mirrors `brc_index.json`:

```json
{
  "generated": "YYYY-MM-DD",
  "source": "Google Patents / Espacenet family data, manually verified",
  "policy": "Wright-as-named-inventor families; one row per family",
  "count": 0,
  "by_status": { "active": 0, "pending": 0, "expired": 0, "...": 0 },
  "by_concept": { "key-management": 0, "...": 0 },
  "families": [ ... ]
}
```

Each `families[]` row:

```json
{
  "family_key": "WO2017145016",
  "representative_pub": "WO2017145016A1",
  "title": "…",
  "priority_date": "YYYY-MM-DD",
  "filing_date": "YYYY-MM-DD",
  "publication_date": "YYYY-MM-DD",
  "grant_date": "YYYY-MM-DD | null",
  "assignee": "nChain Holdings Limited",
  "inventors": ["Craig Steven Wright", "…"],
  "wright_role": "sole | co-inventor",
  "members": [{ "pub": "US…", "jurisdiction": "US", "status": "…" }],
  "legal_status": {
    "status": "active | pending | expired | lapsed | abandoned | withdrawn | ceased",
    "as_of": "YYYY-MM-DD",
    "source": "https://patents.google.com/patent/…"
  },
  "licence_coverage": {
    "programme": "<name> | null",
    "status": "covered | no-coverage-found | unknown",
    "verified": "YYYY-MM-DD",
    "source": "<programme text URL> | null"
  },
  "cpc": ["G06Q20/…", "…"],
  "concepts": ["key-management", "…"],
  "path": "families/WO2017145016.md",
  "summary_path": "summaries/WO2017145016.md",
  "url": "https://patents.google.com/patent/WO2017145016A1/en",
  "authority": 4
}
```

`legal_status` and `licence_coverage` are orthogonal and both drift; both
carry verification dates and are re-checked on the weekly refresh.
`legal_status` is a **family-level rollup** of member statuses (a Ceased WO
publication can have Active US/EP members): the family is `active` if any
member is granted and active, `pending` if any application is live and none
are granted-active, else the dominant terminal status, with the rollup rule
and per-member detail preserved in `members[]`. IFI status from Google
Patents is an assumption, not a legal conclusion; the weekly OPS INPADOC
refresh is the legal pin.

Licensing policy (verified 2026-09-10 — see `licensing-findings.md`): **no
family may be tagged `covered` unless a currently offered legal instrument
with an enumerable covered-patent schedule exists and names it.** As of the
verification date no such instrument exists: the Open BSV License is a
software copyright licence with no patent grant, and the 2018 nChain Open
Bitcoin Cash License was BCH-limited, Nakasendo-tied, unscheduled, and is no
longer offered. The corpus default is therefore `no-coverage-found` for every
family; `unknown` is reserved for families whose ownership is in transition.
WO2017145016 and WO2017145010 carry a research note (named in the 16 Apr 2018
Nakasendo PR) — a note is not a coverage tag.

## Summary card template — `summaries/<FAMILY>.md`

```markdown
# <Title> (<representative_pub>)

- Family: <key> — members: US…, EP…, WO…
- Assignee: … — Inventors: …
- Priority: <date> — Legal status: <status> (as of <date>)
- Licence: <coverage line>
- Concepts: <tags>

## Problem addressed
<what problem the specification says it solves>

## Core mechanism
<how the described embodiment works, from the specification>

## Independent claims (gist — not legal scope)
<plain-language gist of the independent claims; this label is mandatory>

## BSV relevance
<how the idea could bear on BSV development; "none evident" is a valid answer>

## Advisory
<one of the three standard licensing advisories, verbatim>
```

## Standard advisories (verbatim, pick per `licence_coverage` + `legal_status`)

- No coverage found (the default): "No verifiable BSV licensing programme
  covering this patent family was found as of <pin date>. If you intend to
  implement the claimed subject matter, check its legal status and take
  professional advice before proceeding. This is not legal advice."
- Expired/lapsed: "Legal status: <expired|lapsed> as of <date>. Lapsed
  patents generally impose no licensing constraint, but verify independently
  — this is not legal advice."
- Covered (reserved; requires an enumerable instrument, none exists as of
  2026-09-10): "The assignee offers royalty-free use of this family for
  implementations on the BSV blockchain under <programme> (verified <date>,
  schedule <URL>). Confirm current coverage before relying on it — this is
  not legal advice."

## Ingestion posture

Summary cards ingest as documents (kind `patent`, authority 4) and are the
retrievable layer; family full texts open as resources on demand, exactly as
BRC bodies do. Patent material never leads spec/how-to answers — kind-aware
routing restricts it to prior-art / ideation questions ("has anyone proposed
X", "approaches to Y").
