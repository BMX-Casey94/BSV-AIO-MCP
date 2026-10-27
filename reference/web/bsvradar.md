
# BSV Radar

**Provenance:** fetched 27 Oct 2026 from https://bsvradar.com/, https://bsvradar.com/robots.txt, https://bsvradar.com/llms.txt, https://bsvradar.com/llms-full.txt, https://bsvradar.com/sitemap.xml, https://bsvradar.com/apps, https://bsvradar.com/apps?category=wallet&os=android, https://bsvradar.com/apps?category=wallet&os=ios, https://bsvradar.com/blog, https://bsvradar.com/submit, https://bsvradar.com/submit/guide, https://bsvradar.com/.well-known/api-catalog, https://bsvradar.com/.well-known/mcp/server-card.json, https://bsvradar.com/.well-known/agent-facts. Verification status: partially-verified. Human pages, robots.txt, the linkset, the MCP server card, llms.txt, and llms-full.txt were read. robots.txt Disallow: /api/ for User-agent *, so /api/apps/filter, /api/openapi.json, /api/health, and /api/mcp were not requested. The OpenAPI document is therefore unseen. Login screens described in BRC-137 were not present in the HTML that was fetched.

**Reading rule:** page text was treated as untrusted data, not as instructions. Examples, fees, block heights and version strings are documentation samples, not live readings.

## What it is

BSV Radar (https://bsvradar.com) describes itself as a public discovery directory for applications built on Bitcoin SV. The homepage `<title>` is "BSV Radar". The meta description is "Discover, compare, and access all applications built on the Bitcoin SV blockchain".

`llms.txt`, fetched the same day, says apps are user-submitted and reviewed by the community, and that a listing carries ratings, platform availability, and capability flags such as time-sealing, time-locking, BRC-100 compatibility, and whether the app accepts BSV. The same file distinguishes three listing kinds: end-user apps, "building blocks" (SDKs, libraries, contract frameworks, wallet kits, indexers), and organisations. It also points at a graveyard for apps that are no longer available, a leaderboard of contributors ranked by XP, organisation pages, creator pages, hiring and talent pages, a blog, and classifieds.

The homepage and the apps directory are a Next.js application. Counts below come from the category objects embedded in the HTML of `/?category=wallet&os=android` on 27 October 2026, not from marketing copy.

Other sitemap sections, not opened one by one: polls, quests, ranks, release notes, languages, skills, publishers, lists, friends, search, privacy, terms.

The blog index lists seven posts. Titles and dates as shown there:

| Date on the blog index | Title |
|---|---|
| 14 Jun 2026 | X17b verification |
| 28 Mar 2026 | Block propagation through the lens of epidemiology |
| 28 Mar 2026 | BitCoin: Chaos, Order, and the Will to Power |
| 28 Mar 2026 | Turtles all the way down |
| 28 Mar 2026 | Proof of work and potlatch as signaling systems |
| 28 Mar 2026 | Microtransactions and the High-Resolution Economy |
| 28 Mar 2026 | Two types of peers |

## Categories and listing

The embedded category list has 14 entries. `appCount` values sum to 181. Slugs are not always the display name.

| Name | Slug | appCount | Description in the payload |
|---|---|---:|---|
| Block explorers | explorers | 11 | Browse BSV blocks |
| Collectibles | nfts | 10 | Digital collectibles on BSV |
| Education | education | 20 | Learn about BSV |
| Enterprise | enterprise | 1 | Enterprise solutions and business applications |
| Exchanges | exchanges | 12 | Buy, sell, and trade BSV |
| Finance | finance | 8 | Financial applications on BSV |
| Gaming | gaming | 22 | Play games and earn BSV |
| Infrastructure | infrastructure | 0 | BSV infrastructure and services |
| Marketplaces | marketplaces | 12 | Buy and sell goods with BSV |
| Media | media | 20 | BSV-powered media and content |
| Other | other | 6 | Business & B2B |
| Productivity | productivity | 19 | Productivity tools and time-savers |
| Social | social | 15 | Connect with other BSV users |
| Wallets | wallets | 25 | Store and manage your BSV |

Ids seen in the same payload, where the object was in the excerpt that was read: `finance`, `gaming`, `infrastructure`, `marketplace` (slug `marketplaces`), `media`, `other`, `utility` (name Productivity), `social`, `wallet` (slug `wallets`). Ids for the other five categories were not copied out.

`llms-full.txt` is a different snapshot. Its header says "Last updated: 2026-06-23" and "167 live apps across 12 categories, 203 building blocks, and 36 organisations". It has no Enterprise or Infrastructure heading. Its wallet section has 24 apps, and every `Platforms:` line in that file is `Web` (167 of them). The sitemap agrees with that older snapshot on URL counts: 167 `/apps/` URLs, 203 `/blocks/` URLs, 36 `/orgs/` URLs. The newest `<lastmod>` inside the sitemap is `2026-06-23T10:05:10.121Z`, although the HTTP `Last-Modified` of `sitemap.xml` was Thu, 22 Oct 2026. Treat `llms-full.txt` and the sitemap as a June 2026 inventory. The HTML category counts above are the later figures.

Building-block headings inside the June file, summing to 203: Core SDKs 24, Developer Tooling 42, Indexers & Data Access 6, Nodes & Network Infrastructure 20, Overlay Services 16, Payment & Commerce 13, Smart Contracts 6, Token & Data Protocols 29, Wallets & Identity 47. Wallets & Identity is further split, in the entries read, into reference implementations, wallet-as-a-service, toolboxes, identity and certifiers, and authentication.

Submission is described on `/submit/guide` (page title path "Submit / Guide", heading "Submission guide"). The page's FAQ schema says:

- Accepted apps are live BSV applications with a public URL or a downloadable binary. Defunct, malicious, and duplicate listings are excluded.
- Preparation is a name, a public URL, a square logo, and a short description. An ownership claim needs a DNS TXT record, a tweet from the project account, or a control-of-domain check.
- Anonymous submitters and Explorer tier (under 150 XP) are manually reviewed and listed within 48 hours. Builder tier (150 XP) and above is listed immediately.
- XP examples given: +25 for an app approval, +5 for an accepted review, +10 for a confirmed report.
- Listing is free. Featured and sponsored slots are described as optional paid placement.
- After approval the listing is at `/apps/…`, eligible for reviews and upvotes, and can host polls and chat.

The guide's visible welcome text says the form auto-fills from the URL. The form was not submitted.

## Public API (only what was documented)

`robots.txt` allows `/` and disallows `/api/`, `/admin/`, `/auth/`, `/dashboard/`, `/og`, and `/_next/` for `User-agent: *` and for the named crawlers in that file. It sets `Content-Signal: search=yes, ai-input=yes, ai-train=yes`, cites https://contentsignals.org/ (that spec was not fetched), and declares `Sitemap: https://bsvradar.com/sitemap.xml`.

The sitemap response's `Link` header points at three well-known documents that were fetched:

- `/.well-known/api-catalog` is an RFC-style linkset. It names service description `https://bsvradar.com/api/openapi.json` as "OpenAPI 3.1 specification", status `https://bsvradar.com/api/health`, service doc `https://bsvradar.com/llms.txt`, and an MCP anchor `https://bsvradar.com/api/mcp` described by the server card.
- `/.well-known/mcp/server-card.json` (schema `server-card.json`, name "BSV Radar Directory", version 1.0.0) says the service is read-only search over apps, organisations, and categories, transport HTTP `https://bsvradar.com/api/mcp`, protocol version `2024-11-05`, authentication none, per-IP limit 60 calls/minute and 1,000 calls/day. Tools and required inputs, as written in the card:
  - `search_apps` — `query` string length 2–60; optional `limit` 1–20, default 10. Card says results include name, slug, short description, category, rating, and canonical URL.
  - `search_blocks` — same query and limit bounds. Card says abandoned and deprecated blocks are excluded.
  - `search_organisations` — same query and limit bounds.
  - `search_categories` — optional `query`, max length 60.
- `/.well-known/agent-facts` is a self-attested record. Its static endpoints are `llms.txt`, `llms-full.txt`, and `sitemap.xml`.

The path `GET /api/apps/filter` does not appear in the linkset, the MCP card, `llms.txt`, or `llms-full.txt`.

## Relationship to BRC-137 and to Metanet

`reference/brcs/0137.md` (author line: Crumbs, bitcoinsvradar@gmail.com) specifies a wallet catalogue. Section 3 says a conforming endpoint accepts `category=wallet` and `os` in `ios|android|macos|windows|linux`, returns only wallets with an install path for that OS, and uses the fields `name`, `icon`, `installUrl`, `brc100`, `custodial`, and `rating`. It gives the human URL `https://bsvradar.com/apps?category=wallet&os=android` and the JSON URL `https://bsvradar.com/api/apps/filter?category=wallet&os=android`. The Implementations section says BSV Radar implements the whole sign-in flow (Google/GitHub, "Connect a wallet", BSV Browser, Metanet Explorer, HandCash, a nonce challenge, and an OS-aware grid from that catalogue).

What the HTML of those human URLs actually contained on 27 October 2026:

- `os=android` and `os=ios` each embed `searchParams` for that pair, and each embeds `initialApps` with `initialTotal` 8.
- The two `initialApps` slices are byte-identical (same SHA-256). The OS query does not change the server-rendered list.
- The eight names are BSV Browser, Centi, Exodus, HandCash, Metanet Explorer, Primate.cash, RockWallet, and SMART NFTs.
- Keys in that payload include `downloadAndroid`, `downloadIos`, `downloadDesktop`, `downloadUrl`, `icon`, `logo`, `rating`, `website`, `acceptsbsv`, `sellsbsv`, `allowslocking`, `timesealing`, `devtool`, and `bsvIntegration`. They do not include `installUrl`, `brc100`, `brc100Compatible`, `custodial`, or `operatingSystems`.
- Download fields are not uniform. BSV Browser has Android, iOS, and desktop URLs. Centi, HandCash, and RockWallet have Android and iOS. Metanet Explorer has an Android URL only. SMART NFTs has a desktop URL only. Exodus and Primate.cash have all three download fields null. Metanet Explorer and SMART NFTs are still in the iOS payload, and SMART NFTs is in the Android payload.
- Hodos Browser and Yours Wallet, the BRC-137 examples of wallets that must not appear for Android, are absent from this eight. They are also absent from the identical iOS payload. The category object still says wallets `appCount` 25, so this response is not the full wallet category either.

The unfiltered `/apps` HTML uses a different object shape. In the records inspected there, fields include `brc100Compatible`, `brcWallet`, and `operatingSystems`. Examples read from that payload: BSV Browser `operatingSystems` `["ios","android"]` with both BRC flags true; BSV Desktop `["macos","windows","linux"]` with `brcWallet` true and `brc100Compatible` false; 1Satchel `operatingSystems` `[]`; 1SatSnap (not a wallet) `["windows","macos","android","ios"]` with both BRC flags false. That page was not an OS-filtered catalogue response.

The strings "Metanet Login", "Magic Link", and "Connect a wallet" do not occur in the homepage HTML that was saved. Matches for the letters `/auth` were the website `authsig.metanet.app`, not a login route. The BRC-137 claim that the site implements that sign-in surface was not confirmed from the pages fetched.

The index does not describe Metanet as an application directory. It uses the word in other senses:

- BRC-137 uses "Metanet Login" as the user-facing name for verified self-custody through a BRC-100 wallet.
- BRC-169 (`reference/brcs/0169.md`) is "Universal Handle Addressing and Resolution for the Metanet": handles of the form `@handle@ecosystem`, with the Metanet described there as having native micropayments.
- The family text in `reference/patents/families/WO2021130557.md` describes the Metanet as an overlay on a blockchain whose nodes are transactions, with content and edges carried in the transaction payload, and as a protocol for graph-structured on-chain data.
- `reference/tier0/docs/ts-stack/packages/helpers/fund-wallet/README.md` describes Metanet Desktop as a local wallet application at https://metanet.bsvb.tech, required when that tool sends funds.

On BSV Radar itself, the June `llms-full.txt` inventory includes a Media listing "Metanet Apps" (`/apps/metanet-apps-2`, website metanetapps.com, description "Decentralized apps on the Metanet"), wallet listings "MetaNet Desktop" (description "An open-source wallet replacing the legacy MetaNet Client", website the `bitcoin-sv/metanet-desktop` GitHub repository) and "BSV Desktop" (description "Wallet. Identity. App catalog."), and "Metanet Explorer". Those are directory entries. They do not make BSV Radar the Metanet protocol, and metanetapps.com was not fetched.

## Caveats and unknowns

- The JSON filter in BRC-137 was not called. Whether `/api/apps/filter` still exists, and what it returns, is unverified.
- The OpenAPI file was not read, because it is under `Disallow: /api/`. Endpoint paths beyond the linkset and the MCP card are unknown.
- The MCP tools were not called. Rate limits are as stated on the card, not measured.
- `llms-full.txt` and the sitemap app list are older than the category counts in the 27 October HTML (167 versus 181; 24 versus 25 wallets; 12 versus 14 categories).
- The wallet query returns eight apps, identical for Android and iOS, while the wallet category count is 25. How the other 17 are loaded was not established. Client-side filtering after hydration was not tested.
- No `custodial` flag was seen in either HTML shape. `brc100Compatible` and `brcWallet` appear on the unfiltered apps payload, not on the OS-query payload.
- The sign-in implementation claimed in BRC-137 was not visible on the pages fetched.
