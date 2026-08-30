import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { getResource, listContradictions, searchKnowledge } from "../tools/knowledgeTools.js";
import { buildIndexStatus } from "../tools/statusTools.js";
import type { KnowledgeStore, StoredDocument } from "../store/knowledgeStore.js";
import {
  type ClassifiedAs,
  type ClaimStatus,
  type ContradictionKind,
  type EvidenceClaim,
  type EvidenceContradiction,
  type EvidencePackage,
  type NeedKind,
  type Network,
  type RecommendedNext,
  type TypedHit,
} from "../types.js";
import { claimStatus, pickWinner } from "./winner.js";
import { STOP_WORDS } from "./stopWords.js";

const MAX_HOPS = 4;

type ContradictionFinding = {
  id?: unknown;
  topic?: unknown;
  nature?: unknown;
  severity?: unknown;
  position_a?: { claim?: unknown };
  position_b?: { claim?: unknown };
};

const MAX_OVERLAY_FINDINGS = 3;

export function investigate(
  root: string,
  store: KnowledgeStore,
  question: string,
  context?: string,
): EvidencePackage {
  const index = buildIndexStatus(root, store);
  const classifiedAs = classifyQuestion(question);
  const network = inferNetwork(question);
  const needs = detectNeeds(question, classifiedAs);
  // Question tokens drive the ask (gaps, lead selection); context tokens only steer retrieval.
  const questionTokens = distinctiveTokens(question);
  const tokens = context
    ? [...new Set([...questionTokens, ...distinctiveTokens(context)])]
    : questionTokens;
  const ordinalityQuestion = isOrdinalityQuestion(question, tokens);

  let hopsUsed = 0;
  const hits: TypedHit[] = [];
  const gaps: string[] = [];
  const contradictions: EvidenceContradiction[] = [];
  const recommendedNext: RecommendedNext[] = [];

  if (isLiveFetchRefusal(question)) {
    gaps.push("Live fetch was refused; the server serves the pinned snapshot only.");
    const claims: EvidenceClaim[] = [
      {
        text: "This server serves the pinned snapshot and never fetches live sources; the request to bypass the pin was refused.",
        support: [],
        status: "insufficient",
        confidence: "high",
      },
    ];
    return finish({
      question,
      classifiedAs,
      network,
      hopsUsed,
      index,
      needs,
      claims,
      hits,
      gaps,
      contradictions,
      recommendedNext,
      // A sketch-first client must see the refusal, not an absent field.
      answerSketch: composeSketch(classifiedAs, claims, hits),
    });
  }

  if (classifiedAs === "actuate") {
    recommendedNext.push({
      tool: "network_guard",
      reason: "Investigate is read-only; the host must guard any actuation.",
    });
    gaps.push("Actuation was not performed.");
    const claims: EvidenceClaim[] = [
      {
        text: "Investigate does not create wallets, claim faucets, or broadcast transactions.",
        support: [],
        status: "insufficient",
        confidence: "high",
      },
    ];
    return finish({
      question,
      classifiedAs,
      network,
      hopsUsed,
      index,
      needs,
      claims,
      hits,
      gaps,
      contradictions,
      recommendedNext,
      answerSketch: composeSketch(classifiedAs, claims, hits),
    });
  }

  hopsUsed += 1;
  const retrieved = retrieveHits(store, classifiedAs, tokens, question);
  for (const hit of retrieved) {
    upsertHit(hits, hit);
  }

  // An explicitly named BRC is an address, not a search term: open it directly. If it is absent
  // from the pinned catalogue the question must fail closed — a digit-substring match in some
  // other BRC's body (BRC-159 contains "4_999 sats") is not an answer to "BRC-999".
  const explicitBrcs = explicitBrcNumbers(question);
  const missingBrcs: number[] = [];
  for (const number of explicitBrcs) {
    if (!store.getById(`brc:${number}`)) {
      missingBrcs.push(number);
      continue;
    }
    if (!hits.some((hit) => hit.id === `brc:${number}`) && hopsUsed < MAX_HOPS) {
      hopsUsed += 1;
      const opened = getResource(root, store, `brc://spec/${number}`);
      upsertHit(hits, withOpenedExcerpt(opened.hit, opened.text, tokens));
    }
  }
  if (missingBrcs.length > 0) {
    gaps.push(
      `${missingBrcs.map((n) => `BRC-${n}`).join(", ")} is not present in the pinned BRC catalogue (${index.counts.brcs} BRCs pinned); live fetch is refused.`,
    );
  }
  // "What is BRC-💯?" names the catalogue without a parseable number: fail closed like a miss
  // rather than let the "brc" token retrieve an arbitrary spec.
  if (
    explicitBrcs.length === 0 &&
    /\bbrc\b/i.test(question) &&
    tokens.length > 0 &&
    tokens.every((token) => token === "brc")
  ) {
    hits.length = 0;
    gaps.push(
      "The question references a BRC but names no parseable BRC number; the pinned catalogue cannot be looked up by name or emoji alone.",
    );
    const claims: EvidenceClaim[] = [
      {
        text: "The question references a BRC without a parseable number, and the pinned catalogue cannot be looked up by name alone.",
        support: [],
        status: "insufficient",
        confidence: "low",
      },
    ];
    return finish({
      question,
      classifiedAs,
      network,
      hopsUsed,
      index,
      needs,
      claims,
      hits,
      gaps,
      contradictions,
      recommendedNext,
      answerSketch: composeSketch(classifiedAs, claims, hits, ordinalityQuestion, tokens),
    });
  }
  // When every BRC the question names is absent, the FTS hits came from digit-substring
  // collisions (BRC-159 contains "4_999 sats"). They are not evidence; presenting them as
  // hits invites the client to hallucinate the missing spec.
  if (missingBrcs.length > 0 && explicitBrcs.every((n) => missingBrcs.includes(n))) {
    hits.length = 0;
  }

  // The deny list fires only when the question names a denied entry (quoted, versioned, or
  // cue-governed); merely mentioning "BSV" the chain must not trip it.
  const denied = deniedPackageNamed(root, question);
  if (denied && hopsUsed < MAX_HOPS) {
    hopsUsed += 1;
    const deny = getResource(root, store, "repo://deny");
    // Window from the named entry so the reason AND the successor are both quoted; a generic
    // token window opens mid-purpose and cuts the successor off. The window ends at the next
    // entry so a neighbouring denial does not bleed into this one's claim.
    const flat = deny.text.replace(/\s+/g, " ");
    const entryIdx = flat.indexOf(`"name": "${denied}"`);
    const from = entryIdx >= 0 ? entryIdx : 0;
    const nextEntry = flat.indexOf(`"name": "`, from + 8);
    const end = nextEntry > from ? Math.min(from + 400, nextEntry) : from + 400;
    const excerpt = flat
      .slice(from, end)
      .replace(/[\s,]*[{[]?\s*$/, "")
      .trim();
    upsertHit(hits, { ...deny.hit, excerpt });
  }

  // A distinctive token the corpus never contains is a typo or a foreign concept; name it in
  // the gaps so the surviving answer is not presented as complete ("configure zqxwv arcade").
  // Question tokens only: the context parameter steers retrieval but is not part of the ask, so
  // its words must never be reported as corpus gaps.
  const unknownTokens = questionTokens
    .filter((token) => token.length >= 4 && !/^\d+$/.test(token))
    .filter((token) => searchKnowledge(store, token, { limit: 1 }).totalCount === 0)
    .slice(0, 4);
  for (const token of unknownTokens) {
    gaps.push(
      `The pinned snapshot never mentions "${token}"; it may be a typo or outside the corpus.`,
    );
  }

  // A bare "what is X?" is answered by the document whose title defines X. FTS ranking can
  // bury that doc under symbol cards that merely share its tokens ("go-p2p" floods with
  // symbol:go-p2p:*), so consult the store's titles directly.
  const bareTermForScan = bareDefinitionTerm(question);
  if (bareTermForScan && hopsUsed < MAX_HOPS) {
    const definitional = [
      ...store.listByIdPrefix("doc:", 1000),
      ...store.listByIdPrefix("brc:", 400),
      ...store.listByIdPrefix("principle:", 200),
    ]
      .filter((doc) => titleDefinesTerm(doc.title, bareTermForScan))
      .slice(0, 3);
    if (definitional.length > 0) {
      hopsUsed += 1;
      for (const doc of definitional) {
        upsertHit(hits, storedHit(doc, tokens));
      }
    }
  }

  // Join questions — "Does <package> implement BRC-N?", "Which BRCs does <package> implement?" —
  // are answered from the package's own evidenced mentions (its snapshotted docs citing the
  // BRC), never from the BRC's body alone: a bare "supports" on the spec reads as an
  // unevidenced yes, and the spec's implementations list may not name the package at all.
  const yesNoForm = /^(?:does|is|are|can|has|have|do)\b/i.test(question.trim());
  const joinVerb =
    /\b(implement\w*|support\w*|use[sd]?|using|mention\w*|integrat\w*|compliant|conform\w*|handles?)\b/i.test(
      question,
    );
  const namedPackages = store
    .listByIdPrefix("package:", 100)
    .map((doc) => doc.id.slice("package:".length))
    .filter((name) => packageNamedInQuestion(name, question))
    // Longest short name first: "go-wallet-toolbox" in the question must resolve to the Go
    // toolbox, not to "@bsv/wallet-toolbox", whose short name is a suffix of it.
    .sort((a, b) => (b.split("/").pop() ?? b).length - (a.split("/").pop() ?? a).length);
  const whichBrcsOfPackage =
    /\bwhich\s+brcs?\b/i.test(question) && joinVerb && namedPackages.length > 0;
  const joinBrc =
    yesNoForm && joinVerb && explicitBrcs.length === 1 && missingBrcs.length === 0 && namedPackages.length > 0
      ? explicitBrcs[0]
      : undefined;
  // "Which packages implement BRC-N?" — the inverse join, answered from the capability graph's
  // confirmed edges, never from the spec's own prose.
  const whichPackagesOfBrc =
    /\bwhich\s+(?:packages?|sdks?|libraries|repos|implementations?|toolchains?)\b/i.test(question) &&
    joinVerb &&
    explicitBrcs.length === 1 &&
    missingBrcs.length === 0 &&
    namedPackages.length === 0
      ? explicitBrcs[0]
      : undefined;
  // "What implements the wallet interface?" — the concept form of the same join. The object
  // phrase resolves to a capability row only when its words are contained in exactly ONE row's
  // name ("wallet interface" → BRC-100; BRC-219's "Wallet Permission Prompt" lacks "interface").
  let conceptJoinBrc: number | undefined;
  const whatImplements =
    namedPackages.length === 0 && explicitBrcs.length === 0
      ? /^\s*what\s+(?:implements|supports)\s+(.+?)\??\s*$/i.exec(question)?.[1]
      : undefined;
  if (whatImplements) {
    const words = whatImplements
      .toLowerCase()
      .split(/[^a-z0-9]+/)
      .filter((word) => word.length >= 4);
    if (words.length > 0) {
      const matches = [...loadCapabilityRows(root).entries()].filter(([, row]) => {
        const nameWords = new Set(row.name.toLowerCase().split(/[^a-z0-9]+/).filter(Boolean));
        return words.every((word) => nameWords.has(word));
      });
      if (matches.length === 1) {
        conceptJoinBrc = matches[0]![0];
      }
    }
  }
  const graphJoinBrc = whichPackagesOfBrc ?? conceptJoinBrc;

  if (whichBrcsOfPackage || joinBrc !== undefined) {
    const mentions = loadBrcMentions(root);
    const pkg = namedPackages[0]!;
    const repoShort = mentions.packageRepo.get(pkg) ?? pkg.split("/").pop() ?? pkg;
    const repoDocs = [
      ...store.listByIdPrefix(`doc:${repoShort}:`, 25),
      ...store.listByIdPrefix(`example:${repoShort}:`, 25),
    ];

    if (whichBrcsOfPackage) {
      const set = [...(mentions.byPackage.get(pkg) ?? [])].sort((a, b) => a - b);
      const claims: EvidenceClaim[] =
        set.length === 0
          ? [
              {
                text: `No pinned ${pkg} documentation cites any BRC; the snapshot does not establish what it implements.`,
                support: [],
                status: "insufficient",
                confidence: "low",
              },
            ]
          : [
              {
                text: `${pkg}'s pinned documentation cites ${set.map((n) => `BRC-${n}`).join(", ")} — the only BRC-to-package edges the snapshot trusts.`,
                support: [repoDocs[0]?.id ?? `package:${pkg}`],
                status: "supports",
                confidence: "medium",
              },
            ];
      if (set.length === 0) {
        hits.length = 0;
        gaps.push(`No pinned ${pkg} documentation cites any BRC.`);
      } else if (repoDocs[0]) {
        upsertHit(hits, storedHit(repoDocs[0], tokens));
      }
      return finish({
        question,
        classifiedAs,
        network,
        hopsUsed,
        index,
        needs,
        claims,
        hits,
        gaps,
        contradictions,
        recommendedNext,
        answerSketch: composeSketch(classifiedAs, claims, hits, ordinalityQuestion, tokens),
      });
    }

    const brcNum = joinBrc!;
    if (!mentions.byPackage.get(pkg)?.has(brcNum)) {
      hits.length = 0;
      gaps.push(
        `No pinned ${pkg} documentation cites BRC-${brcNum}; the snapshot does not establish the link, so the BRC's own text is not quoted as a yes.`,
      );
      const claims: EvidenceClaim[] = [
        {
          text: `The pinned snapshot does not evidence ${pkg} implementing BRC-${brcNum}; its documentation never cites it.`,
          support: [],
          status: "insufficient",
          confidence: "low",
        },
      ];
      return finish({
        question,
        classifiedAs,
        network,
        hopsUsed,
        index,
        needs,
        claims,
        hits,
        gaps,
        contradictions,
        recommendedNext,
        answerSketch: composeSketch(classifiedAs, claims, hits, ordinalityQuestion, tokens),
      });
    }

    // Evidenced: quote the package's own doc passage that cites the BRC, with the spec secondary.
    const mentionRe = new RegExp(
      `brc[-– ]?0*${brcNum}\\b|/${String(brcNum).padStart(4, "0")}\\.md`,
      "i",
    );
    const citing = repoDocs.find((doc) => mentionRe.test(doc.body));
    const claims: EvidenceClaim[] = [];
    if (citing) {
      const citingHit = storedHit(citing, tokens);
      citingHit.excerpt = excerptWindow(
        citing.body,
        [`brc-${brcNum}`, String(brcNum), ...tokens],
        false,
        280,
      );
      upsertHit(hits, citingHit);
      claims.push({
        text: `Yes — ${pkg}'s pinned documentation cites BRC-${brcNum}. ${citing.title}: ${citingHit.excerpt}`,
        support: [citing.id],
        status: statusForClaim([citingHit], []),
        confidence: "medium",
      });
    } else {
      claims.push({
        text: `Yes — ${pkg}'s pinned documentation cites BRC-${brcNum} (evidenced mention in the snapshot's BRC-to-package edges).`,
        support: [`package:${pkg}`],
        status: "supports",
        confidence: "medium",
      });
    }
    const brcHit = hits.find((hit) => hit.id === `brc:${brcNum}`);
    const brcDoc = store.getById(`brc:${brcNum}`);
    if (brcHit && brcDoc) {
      // The definition context (Abstract) frames the spec; a token window can open mid-code.
      const brcExcerpt = excerptWindow(brcDoc.body, tokens, false, 280, true);
      claims.push({
        text: `BRC-${brcNum} (${brcHit.title}): ${brcExcerpt}`,
        support: [brcHit.id],
        status: statusForClaim([brcHit], []),
        confidence: "medium",
      });
    }
    return finish({
      question,
      classifiedAs,
      network,
      hopsUsed,
      index,
      needs,
      claims,
      hits,
      gaps,
      contradictions,
      recommendedNext,
      answerSketch: composeSketch(classifiedAs, claims, hits, ordinalityQuestion, tokens),
    });
  }

  if (graphJoinBrc !== undefined) {
    const brcNum = graphJoinBrc;
    const graphPackages = loadCapabilityRows(root).get(brcNum)?.packages ?? [];
    const brcDoc = store.getById(`brc:${brcNum}`);
    const brcTitle = brcDoc?.title ?? `BRC-${brcNum}`;
    if (graphPackages.length === 0) {
      // Fail closed: the spec being pinned says nothing about who implements it.
      hits.length = 0;
      gaps.push(
        `No confirmed snapshot package cites BRC-${brcNum}; the spec is pinned but no package edge exists.`,
      );
      const claims: EvidenceClaim[] = [
        {
          text: `No confirmed package in the pinned snapshot is evidenced implementing BRC-${brcNum} (${brcTitle}); no package's own documentation cites it, so none is named.`,
          support: [],
          status: "insufficient",
          confidence: "low",
        },
      ];
      return finish({
        question,
        classifiedAs,
        network,
        hopsUsed,
        index,
        needs,
        claims,
        hits,
        gaps,
        contradictions,
        recommendedNext,
        answerSketch: composeSketch(classifiedAs, claims, hits, ordinalityQuestion, tokens),
      });
    }
    const mentions = loadBrcMentions(root);
    const support: string[] = [];
    for (const pkg of graphPackages) {
      const card = store.getById(`package:${pkg}`);
      if (card) {
        upsertHit(hits, storedHit(card, tokens));
        support.push(card.id);
      }
    }
    const mentionBacked = graphPackages.filter((pkg) => mentions.byPackage.get(pkg)?.has(brcNum));
    const tokenBacked = graphPackages.filter((pkg) => !mentionBacked.includes(pkg));
    const parts = [
      `The pinned snapshot evidences BRC-${brcNum} (${brcTitle}) implementation by: ${graphPackages.join(", ")}.`,
    ];
    if (mentionBacked.length > 0) {
      parts.push(`${mentionBacked.join(", ")} — cited in each package's own pinned documentation.`);
    }
    if (tokenBacked.length > 0) {
      parts.push(
        `${tokenBacked.join(", ")} — exports the definitional symbols the spec names (title-token edge, not a doc citation).`,
      );
    }
    const claims: EvidenceClaim[] = [
      {
        text: parts.join(" "),
        support,
        status: "supports",
        confidence: "medium",
      },
    ];
    if (brcDoc) {
      const brcHit = storedHit(brcDoc, tokens);
      brcHit.excerpt = excerptWindow(brcDoc.body, tokens, false, 280, true);
      upsertHit(hits, brcHit);
      claims.push({
        text: `BRC-${brcNum} (${brcTitle}): ${brcHit.excerpt}`,
        support: [brcHit.id],
        status: statusForClaim([brcHit], []),
        confidence: "medium",
      });
    }
    return finish({
      question,
      classifiedAs,
      network,
      hopsUsed,
      index,
      needs,
      claims,
      hits,
      gaps,
      contradictions,
      recommendedNext,
      answerSketch: composeSketch(classifiedAs, claims, hits, ordinalityQuestion, tokens),
    });
  }

  if (classifiedAs === "live-ops" && hopsUsed < MAX_HOPS) {
    hopsUsed += 1;
    const ops = getResource(root, store, "ops://testnet");
    upsertHit(hits, withOpenedExcerpt(ops.hit, ops.text, tokens));
  }

  // Testnet operations knowledge lives on the pinned ops card, whose vocabulary need not
  // overlap the question's ("Should I broadcast via Arcade…" never says "testnet"). Surface
  // it for testnet cues and broadcast-routing asks so the per-network policy is citable.
  const testnetCue = tokens.some((token) => TESTNET_CUE_TOKENS.has(token));
  const broadcastCue =
    tokens.includes("broadcast") &&
    tokens.some(
      (token) =>
        token === "transaction" ||
        token === "transactions" ||
        token === "tx" ||
        token === "arcade" ||
        token === "mainnet" ||
        token === "testnet",
    );
  if (
    (testnetCue || broadcastCue) &&
    classifiedAs !== "live-ops" &&
    !hits.some((hit) => hit.locator === "ops://testnet") &&
    hopsUsed < MAX_HOPS
  ) {
    hopsUsed += 1;
    const ops = getResource(root, store, "ops://testnet");
    upsertHit(hits, withOpenedExcerpt(ops.hit, ops.text, tokens));
  }

  // The ordinality overlay is more specific than the catalogue guess, so it gets the hops first.
  if (isOrdinalityQuestion(question, tokens) && hopsUsed < MAX_HOPS) {
    if (!hits.some((hit) => hit.locator === "ops://ordinality")) {
      hopsUsed += 1;
      const ops = getResource(root, store, "ops://ordinality");
      upsertHit(hits, withOpenedExcerpt(ops.hit, ops.text, tokens));
    }
    if (!hits.some((hit) => hit.id === "brc:150") && hopsUsed < MAX_HOPS) {
      hopsUsed += 1;
      const spec = getResource(root, store, "brc://spec/150");
      upsertHit(hits, withOpenedExcerpt(spec.hit, spec.text, tokens));
    }
  }

  // Benchmark/capability questions ("highest throughput demonstrated", "can BSV handle a
  // million TPS") are answered by the curated benchmarks card, which carries the conditions
  // and sources with every figure — an authority-3 card, so retrieval alone never opens it
  // for spec/mixed classifications.
  if (
    isBenchmarkQuestion(question, tokens) &&
    !hits.some((hit) => hit.locator === "fact://teranode-benchmarks") &&
    hopsUsed < MAX_HOPS
  ) {
    hopsUsed += 1;
    const card = getResource(root, store, "fact://teranode-benchmarks");
    upsertHit(hits, withOpenedExcerpt(card.hit, card.text, tokens));
  }

  // Bitcoin-history questions (block size war, funding concentration, Epstein record) are
  // answered by the attributed analysis card — authority 4, so mixed-classified questions
  // ("Did Epstein fund Blockstream?") never see it without this hop.
  if (
    isBitcoinHistoryQuestion(question, tokens) &&
    !hits.some((hit) => hit.locator === "analysis://bitcoin-scaling-history") &&
    hopsUsed < MAX_HOPS
  ) {
    hopsUsed += 1;
    const card = getResource(root, store, "analysis://bitcoin-scaling-history");
    upsertHit(hits, withOpenedExcerpt(card.hit, card.text, tokens));
  }

  if (classifiedAs === "spec" && missingBrcs.length === 0 && !hasMatchingBrc(hits, tokens) && hopsUsed < MAX_HOPS) {
    hopsUsed += 1;
    const catalogue = getResource(root, store, "brc://index");
    const match = matchBrcFromCatalogue(catalogue.text, tokens);
    if (match && hopsUsed < MAX_HOPS) {
      hopsUsed += 1;
      const spec = getResource(root, store, `brc://spec/${match}`);
      upsertHit(hits, withOpenedExcerpt(spec.hit, spec.text, tokens));
    }
  }

  // A governance ask is answered from the catalogue, not from whoever's body happened to match
  // the FTS pile ("latest BRC for overlay services" AND-matches infra docs mentioning "latest",
  // never the overlay BRCs). When no retrieved BRC's title covers the topic, consult the full
  // BRC index directly; a catalogue miss fails closed in composeClaims.
  // The hop must judge the same set composeClaims will: authority-eligible, non-superseded
  // hits. A demoted spec (BRC-91, Mandala — authority 4) stays in hits but can never lead, so
  // its incidental title word must not suppress the catalogue hop.
  const governancePool = hits.filter(
    (hit) => hit.authority <= authorityForClass(classifiedAs) && !hit.successor,
  );
  if (
    isGovernanceQuestion(question) &&
    missingBrcs.length === 0 &&
    scoreGovernanceTitles(governancePool, tokens).bestScore === 0 &&
    hopsUsed < MAX_HOPS
  ) {    hopsUsed += 1;
    const catalogue = getResource(root, store, "brc://index");
    const match = matchBrcFromCatalogue(catalogue.text, governanceTopicTokens(tokens));
    if (match !== undefined && hopsUsed < MAX_HOPS) {
      hopsUsed += 1;
      const spec = getResource(root, store, `brc://spec/${match}`);
      upsertHit(hits, withOpenedExcerpt(spec.hit, spec.text, tokens));
    }
  }

  if (tokens.includes("beef") && hopsUsed < MAX_HOPS) {
    const uri = resolveBeefSymbolUri(store, hits);
    if (uri) {
      hopsUsed += 1;
      const opened = getResource(root, store, uri);
      if (opened.hit.title !== "Resource not present in snapshot") {
        upsertHit(hits, withOpenedExcerpt(opened.hit, opened.text, tokens));
      }
    }
  }

  // One shared word does not make a contradiction relevant: "disabled" alone pulled the
  // payment-channel card (XT-08) into an opcode-history question. Require a second
  // distinctive overlap before a contradiction is presented as about this question.
  const contradictionTokens = tokens.filter((token) => token.length >= 4 || DOMAIN_TOKENS.has(token));

  if (classifiedAs === "design-why" && hopsUsed < MAX_HOPS) {
    hopsUsed += 1;
    overlayContradictions(root, store, question, tokens, hits, contradictions, contradictionTokens);
  }

  const inspectQueue = [...hits];
  let sawAuthorityLe2 = hits.some((hit) => hit.authority <= 2);
  for (const hit of inspectQueue) {
    if (hopsUsed >= MAX_HOPS) {
      break;
    }
    hopsUsed += 1;
    const opened = getResource(root, store, inspectUri(hit));
    const before = hits.filter((row) => row.authority <= 2).length;
    upsertHit(hits, withOpenedExcerpt(opened.hit, opened.text, tokens));
    const after = hits.filter((row) => row.authority <= 2).length;
    if (after > before) {
      sawAuthorityLe2 = true;
    } else if (sawAuthorityLe2 && classifiedAs !== "live-ops") {
      break;
    }
  }

  if (classifiedAs === "live-ops") {
    gaps.push("Live network status was not fetched; it is declared in needs.");
    for (const need of needs) {
      recommendedNext.push({
        // Not a tool this server exposes: the host application must perform the live fetch.
        tool: "host_live_fetch",
        reason: `${need} is a live fact; this server serves the pinned snapshot only and will not call live HTTP.`,
      });
    }
  }

  // Re-window every store-backed hit against its full body now that all hops have run. Hits
  // arriving from FTS carry a head-of-body excerpt; the claim must quote the passage that best
  // covers the question (for body questions, the requirement sentences — not the byline).
  // Opcode names are added whole: distinctiveTokens splits "OP_CAT" into ["op", "cat"], and the
  // window search needs the distinctive form to find the passage the question is about.
  const preferRequirements = isBodyQuestion(question);
  // "What is X…?" seeks a definition; on spec documents the Abstract carries it.
  const preferDefinition = /^\s*what(?:'s|\s+is)\b/i.test(question) && !preferRequirements;
  const windowTokens = [...tokens];
  for (const name of opcodeNames(question)) {
    const lower = name.toLowerCase();
    if (!windowTokens.includes(lower)) {
      windowTokens.push(lower);
    }
  }
  for (let i = 0; i < hits.length; i++) {
    const hit = hits[i];
    if (!hit || hit.locator === "repo://deny") {
      continue; // deliberately windowed from the named entry so the successor is quoted.
    }
    const doc = store.getById(hit.id);
    if (!doc) {
      continue;
    }
    if (hit.id.startsWith("package:")) {
      // Package cards are one short generated paragraph; windowing can cut the operative word
      // ("Archived upstream; …" losing "Archived"). Quote the whole card.
      hits[i] = { ...hit, excerpt: cleanExcerptMarkup(doc.body) };
      continue;
    }
    if (hit.locator === "ops://ordinality") {
      // The ordinality policy card's operative content is its Rules list; quote it, not the
      // preamble. Wider window: rules 1-2 (sat ordering, fail closed) span ~500 chars.
      hits[i] = { ...hit, excerpt: sectionExcerpt(doc.body, "rules", windowTokens, 500) };
      continue;
    }
    if (hit.locator === "ops://testnet") {
      // The ops card is sectioned; quote the section the question is about. Faucet asks get
      // the faucet table (wide enough to carry the claim endpoints and the Atomic BEEF note);
      // broadcast-routing and tstn asks get the per-network service map; wallet create/switch
      // asks get the wallet section with the Setup.createWalletSQLite listing. A "wallet"
      // token alone (go-wallet-toolbox in a storage question) must not open section 1.
      const section = windowTokens.includes("faucet")
        ? { heading: "faucet", size: 1000 }
        : windowTokens.includes("broadcast") || windowTokens.includes("tstn")
          ? { heading: "per-network", size: 1400 }
          : windowTokens.includes("wallet") &&
              (windowTokens.includes("switch") || windowTokens.includes("create"))
            ? { heading: "switch", size: 1400 }
            : undefined;
      if (section) {
        hits[i] = {
          ...hit,
          excerpt: sectionExcerpt(doc.body, section.heading, windowTokens, section.size),
        };
        continue;
      }
    }
    hits[i] = {
      ...hit,
      excerpt: excerptWindow(doc.body, windowTokens, preferRequirements, 280, preferDefinition),
    };
  }

  // A page that declares its own specification "pending" is a placeholder, not a source:
  // fine as a secondary hit, never the lead while a substantive peer exists.
  const stubIds = new Set<string>();
  for (const hit of hits) {
    if (hit.kind !== "doc" && hit.kind !== "brc") {
      continue;
    }
    const doc = store.getById(hit.id);
    if (doc && isPlaceholderDoc(doc.body)) {
      stubIds.add(hit.id);
    }
  }

  // The deny document is a policy card, not knowledge content: unless the question named a
  // denied entry (the hop fired) or asked about the list itself, its FTS hit is noise.
  if (!denied && !/\bdeny|denied|denylist\b/i.test(question)) {
    for (let i = hits.length - 1; i >= 0; i--) {
      if (hits[i]?.locator === "repo://deny") {
        hits.splice(i, 1);
      }
    }
  }

  const requiredAuthority = authorityForClass(classifiedAs);
  const eligible = hits.filter((hit) => hit.authority <= requiredAuthority && !hit.successor);

  const claims = composeClaims(question, classifiedAs, hits, eligible, tokens, ordinalityQuestion, gaps, {
    explicitBrcs,
    missingBrcs,
    opcodeLeadId: pickOpcodeLead(store, hits, question),
    stubIds,
    deniedPackage: denied,
    packageIds: languagePackageHints(question),
    hopPackages: topicMatchedPackages(store, tokens),
  });

  // A recency question ("latest", "newest", "superseded") can be answered only as of the pin:
  // say so, and never let a snapshot hit pose as verified-current at high confidence.
  // (Actuate questions returned early above; only live-ops needs excluding here.)
  if (isRecencyQuestion(question) && classifiedAs !== "live-ops") {
    gaps.push(
      `The snapshot is pinned (fetched ${index.fetched_at}); it cannot verify what is latest or whether a successor has appeared since — live fetch is refused.`,
    );
    const leadClaim = claims[0];
    if (leadClaim && leadClaim.status === "supports" && leadClaim.confidence === "high") {
      leadClaim.confidence = "medium";
    }
  }

  // Contradiction cards are read off the FINAL hit set: a fail-closed path that cleared
  // coincidental hits must not leave their contradiction cards behind in the package.
  for (const hit of hits) {
    const fromHit = contradictionFromHit(hit);
    if (
      fromHit &&
      (contradictionTokens.length < 2 || hitOverlap(hit, contradictionTokens) >= 2) &&
      !contradictions.some((row) => Boolean(fromHit.id) && row.id === fromHit.id)
    ) {
      contradictions.push(fromHit);
    }
  }

  // Only report "no hits" when nothing was retrieved AND nothing else explains the miss —
  // a fail-closed path that cleared coincidental hits has already said why.
  if (
    claims.every((claim) => claim.status === "insufficient") &&
    hits.length === 0 &&
    missingBrcs.length === 0 &&
    gaps.length === 0
  ) {
    gaps.push("No snapshot hits were retrieved for this question.");
  }

  // The evidence package reads lead-first: the hit the claim leans on is hits[0].
  const leadId = claims[0]?.support[0];
  if (leadId) {
    const leadIdx = hits.findIndex((hit) => hit.id === leadId);
    const leadHit = leadIdx > 0 ? hits.splice(leadIdx, 1)[0] : undefined;
    if (leadHit) {
      hits.unshift(leadHit);
    }
  }

  return finish({
    question,
    classifiedAs,
    network,
    hopsUsed,
    index,
    needs,
    claims,
    hits,
    gaps,
    contradictions,
    recommendedNext,
    answerSketch: composeSketch(classifiedAs, claims, hits, ordinalityQuestion, tokens),
  });
}

function finish(args: {
  question: string;
  classifiedAs: ClassifiedAs;
  network: Network;
  hopsUsed: number;
  index: EvidencePackage["index"];
  needs: NeedKind[];
  claims: EvidenceClaim[];
  hits: TypedHit[];
  gaps: string[];
  contradictions: EvidenceContradiction[];
  recommendedNext: RecommendedNext[];
  answerSketch?: string;
}): EvidencePackage {
  return {
    question: args.question,
    classified_as: args.classifiedAs,
    network: args.network,
    hops_used: Math.min(MAX_HOPS, args.hopsUsed),
    index: args.index,
    needs: args.needs,
    claims: args.claims,
    hits: args.hits,
    gaps: args.gaps,
    contradictions: args.contradictions,
    recommended_next: args.recommendedNext,
    ...(args.answerSketch ? { answer_sketch: args.answerSketch } : {}),
  };
}

function classifyQuestion(question: string): ClassifiedAs {
  const q = question.toLowerCase();

  if (isLiveOps(q)) {
    return "live-ops";
  }
  if (isActuate(q)) {
    return "actuate";
  }
  if (
    /\bwhich brc\b/.test(q) ||
    /\bwhat brc\b/.test(q) ||
    /\bgoverns?\b/.test(q) ||
    /\bgoverned by\b/.test(q) ||
    /\b(specification|specified by)\b/.test(q)
  ) {
    return "spec";
  }
  // Rationale questions are answered by the writings, so they classify design-why — but a
  // troubleshooting "why does X fail" is looking for the error taxonomy, not an essay.
  const whyCue = /\b(craig|principle|corpus|consistent|essay|writings?|rationale|philosophy|why)\b/.test(q);
  const troubleshooting = /\b(err_\w*|errors?|fail(?:s|ed|ing)?|exception|stack trace|debug|troubleshoot)\b/i.test(
    question,
  );
  if (whyCue && !troubleshooting) {
    return "design-why";
  }
  // A how-to that names a BRC and a network-ops cue spans spec + operations + implementation
  // ("internalize a Teratestnet faucet payout into a BRC-100 wallet") — that is mixed, not
  // a pure implementation ask.
  if (/\bhow do i\b/.test(q) && /\bbrc-\d+\b/.test(q) && /\b(faucet|teratestnet|testnet|ttn|mainnet)\b/.test(q)) {
    return "mixed";
  }
  if (/\b(how do i|implement|typescript|package|code|broadcast)\b/.test(q)) {
    return "implementation";
  }
  if (/\b(used to|formerly|historical|original)\b/.test(q)) {
    return "historical";
  }
  if (/\bbrc-\d+\b/.test(q) && /\b(what|which|govern|specify|interface)\b/.test(q)) {
    return "spec";
  }
  return "mixed";
}

function isLiveOps(q: string): boolean {
  if (/\b(right now|at the moment|live status|currently)\b/.test(q)) {
    return true;
  }
  return (
    /\b(faucet|arcade|woc|whats on chain|what'?s on chain)\b/.test(q) &&
    /\b(status|health|up|down)\b/.test(q)
  );
}

function opcodeNames(question: string): string[] {
  const found = new Set<string>();
  // Multi-word names (OP_PUSH_TX, OP_CHECKLOCKTIMEVERIFY) keep their underscores.
  for (const match of question.matchAll(/\bOP_[A-Z0-9_]+\b/gi)) {
    if (match[0]) {
      found.add(match[0].toUpperCase());
    }
  }
  return [...found];
}

function isOpcodeQuestion(question: string, tokens: string[]): boolean {
  if (opcodeNames(question).length > 0) {
    return true;
  }
  return (
    tokens.includes("opcode") ||
    tokens.includes("opcodes") ||
    (tokens.includes("chronicle") && (tokens.includes("script") || tokens.includes("restore") || tokens.includes("restored")))
  );
}

function isCustomScriptQuestion(question: string): boolean {
  const q = question.toLowerCase();
  return (
    /\brunar\b/.test(q) ||
    /\brúnar\b/.test(q) ||
    /\bsmart\s+contracts?\b/.test(q) ||
    (/\b(compile|write|author)\b/.test(q) && /\bcontracts?\b/.test(q))
  );
}

const OPCODE_TOPIC_TOKENS = new Set([
  "opcode",
  "opcodes",
  "disabled",
  "restored",
  "restoration",
  "chronicle",
  "reserved",
  "2010",
  "pushdata",
]);

type DenyListEntry = { name?: unknown };

/** Requests to bypass the pin and pull live sources get an explicit refusal, not a silent miss. */
function isLiveFetchRefusal(question: string): boolean {
  const q = question.toLowerCase();
  return (
    /\b(ignore|bypass|forget|skip|override)\b[^.!?]*\b(snapshot|pin|pinned|corpus)\b/.test(q) ||
    /\b(fetch|pull|scrape|download)\b[^.!?]*\b(live|latest|newest|master|github|bsvblockchain|https?:\/\/|\.org|\.com|\.io)\b/.test(q) ||
    /\b(live|maintenance)\s+mode\b[^.!?]*\b(fetch|pull|scrape|download|ignore|bypass)\b/.test(q)
  );
}

/** True when the question is about choosing/installing a package, not just naming a technology. */
function isDependencyQuestion(question: string): boolean {
  return /\b(npm|node_modules|package|packages|dependency|dependencies|install|installed|add|depend|depends|import|require|library|libraries|crate|module|use|using|recommend)\b/i.test(
    question,
  );
}

/**
 * Return the deny-list entry name the question asks about, if any. The name must stand alone:
 * "bsv" matches the npm package `bsv` but not the `@bsv/sdk` scope, and "run-sdk" must not fire
 * on "runar". Reads the committed snapshot file; never fetches.
 */
function deniedPackageNamed(root: string, question: string): string | undefined {
  const abs = join(root, "reference", "deny-list.json");
  if (!existsSync(abs)) {
    return undefined;
  }
  let entries: DenyListEntry[];
  try {
    const raw = JSON.parse(readFileSync(abs, "utf8")) as { entries?: unknown };
    entries = Array.isArray(raw.entries) ? (raw.entries as DenyListEntry[]) : [];
  } catch {
    return undefined;
  }
  for (const entry of entries) {
    const name = typeof entry.name === "string" ? entry.name.trim() : "";
    if (!name) {
      continue;
    }
    const escaped = name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    // The name must be quoted, versioned, or governed by a package cue. A bare standalone
    // match is not enough: "on BSV?" names the chain, not the denied npm package. The cue
    // window tolerates install shorthand ("npm i bsv"), a short adjective ("the old bsv"),
    // and an explicit version pin ("bsv@1.9.0") — all of which are dependency references.
    const quoted = new RegExp(`['"\`\\(]${escaped}['"\`\\)]`, "i");
    const versioned = new RegExp(`(?<![\\w/@-])${escaped}@\\d`, "i");
    const manager = new RegExp(
      `(?:npm|pnpm|yarn|bun|deno|npx)\\s+(?:i|install|add|link|remove|exec|dlx|pull\\s+in)?\\s*['"\`]?${escaped}(?![\\w/-])`,
      "i",
    );
    const cueGoverned = new RegExp(
      `(?:package|library|module|dependency|crate|install|add|use|using|import|require)\\s+(?:(?:the|a|an|old|legacy|deprecated|original|classic|called)\\s+){0,2}['"\`]?${escaped}(?![\\w/-])`,
      "i",
    );
    if (quoted.test(question) || versioned.test(question) || manager.test(question) || cueGoverned.test(question)) {
      return name;
    }
  }
  return undefined;
}

/** "Which SDK for a Go wallet backend?" → the confirmed Tier 0 packages for that language. */
function languagePackageHints(question: string): string[] {
  const q = question.toLowerCase();
  const STACK = "(?:sdk|wallet|package|packages|library|libraries|backend|client|toolbox)";
  if (!new RegExp(`\\b${STACK}\\b`).test(q)) {
    return [];
  }
  // The language cue must modify a stack noun ("Go wallet backend", "SDK in TypeScript") —
  // a "Go" drifting through a 30-word UHRP/React question must not pin the Go toolchain.
  const near = (lang: string): boolean =>
    new RegExp(`\\b${lang}\\b(?:[\\s,]+\\w+){0,2}[\\s,]+${STACK}\\b`, "i").test(q) ||
    new RegExp(`\\b${STACK}\\b(?:[\\s,]+\\w+){0,2}[\\s,]+${lang}\\b`, "i").test(q);
  // Every named language contributes its stack — a comparative "TS vs Go" question must not
  // silently answer only one side. Wallet questions lead with the wallet toolbox.
  const walletFirst = /\bwallet\b/.test(q);
  const hints: string[] = [];
  if (near("(?:typescript|javascript|node\\.?js|ts)")) {
    hints.push(...(walletFirst ? ["@bsv/wallet-toolbox", "@bsv/sdk"] : ["@bsv/sdk", "@bsv/wallet-toolbox"]));
  }
  if (near("(?:go|golang)")) {
    hints.push(...(walletFirst ? ["go-wallet-toolbox", "go-sdk"] : ["go-sdk", "go-wallet-toolbox"]));
  }
  return hints;
}

function isActuate(q: string): boolean {
  if (
    /\b(faucet_claim|broadcast_tx|create_test_wallet)\b/.test(q) ||
    /\b(create a (test )?wallet|claim (from )?the faucet|broadcast (the )?tx|send (a )?transaction)\b/.test(
      q,
    )
  ) {
    return true;
  }
  // Imperative openings: "Broadcast this signed transaction…", "Relay the tx…". broadcast/relay are
  // transaction-specific enough to stand alone; send/submit/claim/create/sign need an object cue.
  if (/^\s*(?:please\s+)?(?:broadcast|relay)\b/.test(q)) {
    return true;
  }
  return (
    /^\s*(?:please\s+)?(?:send|submit|claim|create|sign)\b/.test(q) &&
    /\b(tx|transaction|signed|wallet|faucet|payout|bsv|sats?)\b/.test(q)
  );
}

function detectNeeds(question: string, classified: ClassifiedAs): NeedKind[] {
  if (classified !== "live-ops") {
    return [];
  }
  const q = question.toLowerCase();
  const needs: NeedKind[] = [];
  if (/\bfaucet\b/.test(q)) {
    needs.push("faucet_health");
  }
  if (/\barcade\b/.test(q)) {
    needs.push("arcade_status");
  }
  if (/\b(woc|whats on chain|what'?s on chain|chain info)\b/.test(q)) {
    needs.push("woc_status");
  }
  if (/\b(github|release)\b/.test(q)) {
    needs.push("github_release");
  }
  return needs;
}

function inferNetwork(question: string): Network {
  const q = question.toLowerCase();
  // Explicit network words win; a bare "faucet" implies ttn only when no network was named
  // ("How do I use the faucet on mainnet?" is a mainnet question with a wrong premise).
  if (/\b(ttn|teratestnet|teratest)\b/.test(q)) {
    return "ttn";
  }
  if (/\btstn\b/.test(q)) {
    return "tstn";
  }
  if (/\bmainnet\b/.test(q)) {
    return "main";
  }
  if (/\btestnet\b/.test(q)) {
    return "test";
  }
  if (/\bfaucet\b/.test(q)) {
    return "ttn";
  }
  return "any";
}

/**
 * True when a confirmed package's name appears as a whole word in the question. Scoped names
 * match on their final segment (`@bsv/uhrp-react` → `uhrp-react`); names shorter than four
 * characters are too generic to pin on (`bsv`, `sdk`). Repo slugs and unhyphenated mentions
 * match on collapsed forms: "storage-server" names `@bsv/uhrp-storage-server` (segment suffix),
 * "message box server" names `messagebox-server`.
 */
function packageNamedInQuestion(name: string, question: string): boolean {
  const short = name.split("/").pop() ?? name;
  if (short.length < 4) {
    return false;
  }
  const re = new RegExp(
    `(?<![\\w-])${short.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}(?![\\w-])`,
    "i",
  );
  if (re.test(question)) {
    return true;
  }
  const collapsedQuestion = question.toLowerCase().replace(/[^a-z0-9]+/g, "");
  const segments = short.toLowerCase().split(/[-_]+/);
  for (let i = 0; i < segments.length - 1; i++) {
    const candidate = segments.slice(i).join("");
    // Full collapsed name needs 5+ chars; a suffix (dropping leading segments) needs 8+ so
    // "react" alone cannot name @bsv/uhrp-react.
    const minLength = i === 0 ? 5 : 8;
    if (candidate.length >= minLength && collapsedQuestion.includes(candidate)) {
      return true;
    }
  }
  return false;
}

/** True when a doc/example id belongs to the package's repo ("doc:message-box-server:…" ↔
 * package `messagebox-server`): compare collapsed forms, full name first, suffixes guarded. */
function idMatchesPackage(hitId: string, packageName: string): boolean {
  const short = (packageName.split("/").pop() ?? packageName).toLowerCase();
  const collapsedId = hitId.toLowerCase().replace(/[^a-z0-9]+/g, "");
  const segments = short.split(/[-_]+/);
  for (let i = 0; i < segments.length; i++) {
    const candidate = segments.slice(i).join("");
    const minLength = i === 0 ? 5 : 8;
    if (candidate.length >= minLength && collapsedId.includes(candidate)) {
      return true;
    }
  }
  return false;
}

function authorityForClass(classified: ClassifiedAs): number {
  switch (classified) {
    case "spec":
      return 1;
    case "implementation":
    case "mixed":
      return 2;
    case "live-ops":
      return 3;
    case "design-why":
    case "historical":
      return 4;
    case "actuate":
      return 0;
  }
}

function distinctiveTokens(text: string): string[] {
  const tokens = text
    .toLowerCase()
    .split(/[^\p{L}\p{N}]+/u)
    .filter((token) => token.length > 1 && !STOP_WORDS.has(token));
  return [...new Set(tokens)];
}

const DOMAIN_TOKENS = new Set([
  "1sat",
  "atomicbeef",
  "beef",
  "faucet",
  "node",
  "nodes",
  "ordinal",
  "ordinality",
  "ordinals",
  "provenance",
  "sat",
  "spv",
  "testnet",
  "ttn",
  "wallet",
]);

/** Tokens that make the pinned testnet ops card relevant even when FTS cannot reach it. */
const TESTNET_CUE_TOKENS = new Set(["testnet", "ttn", "tstn", "teratestnet", "faucet"]);

/**
 * Tokens ordered rarest-first by corpus document frequency. "teratestnet" outranks "wallet";
 * the pair ladder probes distinctive concepts before generic ones.
 */
function byCorpusDistinctiveness(store: KnowledgeStore, tokens: string[]): string[] {
  const frequency = new Map<string, number>();
  for (const token of tokens) {
    frequency.set(token, searchKnowledge(store, token, { limit: 20 }).totalCount);
  }
  // A token the corpus never contains can only zero a probe; drop it from the ladder entirely
  // (the nonsense-token gap already names it for the user).
  return [...tokens]
    .filter((token) => (frequency.get(token) ?? 0) > 0)
    .sort((a, b) => (frequency.get(a) ?? 0) - (frequency.get(b) ?? 0) || b.length - a.length);
}

/**
 * Confirmed packages whose short name shares a segment with a distinctive question token.
 * Exact segment match, or a prefix match for longer tokens ("message" → "messagebox-server");
 * short tokens stay exact so "pay" cannot summon every payment package. Generic ecosystem
 * words ("services", "server") never hop — they name a class, not a package.
 */
function topicMatchedPackages(store: KnowledgeStore, tokens: string[]): string[] {
  const GENERIC = new Set([
    "service",
    "services",
    "server",
    "servers",
    "client",
    "clients",
    "package",
    "packages",
    "library",
    "libraries",
    "network",
    "networks",
  ]);
  const distinctive = new Set(tokens.filter((token) => token.length >= 4 && !GENERIC.has(token)));
  if (distinctive.size === 0) {
    return [];
  }
  const matched: string[] = [];
  for (const card of store.listByIdPrefix("package:", 100)) {
    const name = card.id.slice("package:".length);
    const short = (name.split("/").pop() ?? name).toLowerCase();
    const segments = short.split(/[-_]+/);
    const hit = [...distinctive].some((token) =>
      segments.some((segment) => segment === token || (token.length >= 5 && segment.startsWith(token))),
    );
    if (hit) {
      matched.push(name);
    }
    if (matched.length >= 4) {
      break;
    }
  }
  return matched;
}

function retrieveHits(
  store: KnowledgeStore,
  classified: ClassifiedAs,
  tokens: string[],
  question: string,
): TypedHit[] {  const query = tokens.join(" ");
  const filters = filtersForClass(classified);
  if (!query) {
    return [];
  }
  const collected: TypedHit[] = [];
  const take = (rows: TypedHit[]): void => {
    for (const hit of rows) {
      upsertHit(collected, hit);
    }
  };

  let result = searchKnowledge(store, query, { filters, limit: 20 });
  take(result.hits);
  if (collected.length < 3 && tokens.length > 2) {
    // AND over every token is precise but brittle: one absent word ("payout") zeroes the whole
    // pile. Fall back to pairs of the most corpus-distinctive tokens, accumulating — each pair
    // is a self-contained concept probe ("teratestnet faucet", "payout wallet").
    const ordered = byCorpusDistinctiveness(store, tokens);
    // A long multi-clause question is a conjunction of concepts; its concept probe is a triple
    // of the most distinctive tokens ("nash deviation dominant"), tighter than a pair and far
    // looser than the full AND. Pairs of a 15-token question mostly co-occur by accident.
    if (ordered.length >= 6) {
      const probe = ordered.slice(0, 8);
      triple: for (let i = 0; i < probe.length - 2; i++) {
        for (let j = i + 1; j < probe.length - 1; j++) {
          for (let k = j + 1; k < probe.length; k++) {
            take(
              searchKnowledge(store, `${probe[i]} ${probe[j]} ${probe[k]}`, {
                filters,
                limit: 20,
              }).hits,
            );
            if (collected.length >= 8) {
              break triple;
            }
          }
        }
      }
    }
    if (collected.length < 3) {
      const probe = ordered.slice(0, 5);
      outer: for (let i = 0; i < probe.length; i++) {
        for (let j = i + 1; j < probe.length; j++) {
          take(searchKnowledge(store, `${probe[i]} ${probe[j]}`, { filters, limit: 20 }).hits);
          if (collected.length >= 8) {
            break outer;
          }
        }
      }
    }
  }

  if (classified === "design-why") {
    const missingKinds = (): string[] => {
      const have = new Set(collected.map((hit) => hit.kind));
      return (["principle", "essay", "contradiction"] as const).filter((kind) => !have.has(kind));
    };
    if (missingKinds().length > 0) {
      const topic = distinctiveTopicTokens(tokens);
      const fillQueries = [topic.slice(0, 2).join(" "), topic[0] ?? ""].filter(
        (row, index, all) => row.length > 0 && all.indexOf(row) === index,
      );
      for (const fillQuery of fillQueries) {
        take(searchKnowledge(store, fillQuery, { filters, limit: 20 }).hits);
        if (missingKinds().length === 0) {
          break;
        }
      }
    }
  }

  if (tokens.includes("beef")) {
    take(searchKnowledge(store, "beef", { filters: { authority_max: 2 }, limit: 40 }).hits);
    take(
      searchKnowledge(store, "Beef", {
        filters: { kind: ["symbol"], authority_max: 2 },
        limit: 20,
      }).hits,
    );
    takeBeefSymbolCards(store, collected, tokens);
  }

  if (isOpcodeQuestion(question, tokens)) {
    const names = opcodeNames(question);
    for (const name of names) {
      take(
        searchKnowledge(store, name, {
          filters: { kind: ["doc"], authority_max: 1 },
          limit: 20,
        }).hits,
      );
    }
    if (names.length === 0) {
      // No explicit OP_* token (e.g. "why were opcodes disabled in 2010"): search the academy
      // opcode tree on the question's opcode-topic tokens so the authority-1 cards still surface.
      const topic = tokens.filter((token) => OPCODE_TOPIC_TOKENS.has(token));
      take(
        searchKnowledge(store, topic.length > 0 ? topic.join(" ") : "opcodes", {
          filters: { kind: ["doc"], authority_max: 1 },
          limit: 15,
        }).hits,
      );
    }
    if (tokens.includes("reserved") || tokens.includes("chronicle") || tokens.includes("nop")) {
      take(
        searchKnowledge(store, "reserved opcodes", {
          filters: { kind: ["doc"], authority_max: 1 },
          limit: 10,
        }).hits,
      );
    }
  }

  for (const name of languagePackageHints(question)) {
    const doc = store.getById(`package:${name}`);
    if (doc) {
      upsertHit(collected, storedHit(doc, tokens));
    }
  }

  // A distinctive token that names a confirmed package's name segment ("uhrp" → uhrp-services,
  // "@bsv/uhrp-react"; "arcade" → arcade) surfaces that package card and its usage examples:
  // naming the ecosystem is asking about its implementations, and FTS cannot AND its way to
  // them ("Where is UHRP specified and implemented?" shares no vocabulary with the card).
  for (const name of topicMatchedPackages(store, tokens)) {
    const doc = store.getById(`package:${name}`);
    if (doc) {
      upsertHit(collected, storedHit(doc, tokens));
      const shortRepo = name.split("/").pop() ?? name;
      for (const example of store.listByIdPrefix(`example:${shortRepo}:`, 2)) {
        upsertHit(collected, storedHit(example, tokens));
      }
    }
  }

  if (isCustomScriptQuestion(question)) {
    take(
      searchKnowledge(store, "runar", {
        filters: { authority_max: 2 },
        limit: 20,
      }).hits,
    );
    take(
      searchKnowledge(store, "runar", {
        filters: { kind: ["doc"], authority_max: 1 },
        limit: 20,
      }).hits,
    );
  }

  // Exact opcode-name containment (id/title) outranks generic hub pages for OP_* questions.
  const opcodeNeedles = opcodeNames(question).map((name) => name.toLowerCase());
  const opcodeBonus = (hit: TypedHit): number =>
    opcodeNeedles.some((needle) => `${hit.id} ${hit.title}`.toLowerCase().includes(needle)) ? 5 : 0;

  return [...collected].sort(
    (a, b) =>
      scoreHit(b, tokens) + opcodeBonus(b) - scoreHit(a, tokens) - opcodeBonus(a) ||
      a.authority - b.authority,
  );
}

function distinctiveTopicTokens(tokens: string[]): string[] {
  const domain = tokens.filter((token) => DOMAIN_TOKENS.has(token) || /^brc-?\d+$/i.test(token));
  if (domain.length > 0) {
    return domain;
  }
  return [...tokens].sort((a, b) => b.length - a.length);
}

function contradictionTopic(tokens: string[], question: string): string {
  return distinctiveTopicTokens(tokens)[0] ?? tokens.find((token) => token.length > 2) ?? question;
}

function isOrdinalityQuestion(question: string, tokens: string[]): boolean {
  const q = question.toLowerCase();
  // "Atomic BEEF" alone is a BEEF question, not an ordinality one: the playbook pin must wait
  // for a genuine provenance token, or it hijacks BRC-95 questions.
  return (
    tokens.some((token) => /^(ordinals?|ordinality|1sat|provenance|inscriptions?)$/.test(token)) ||
    /\b(ordinal|ordinality|1sat|provenance|inscription)\b/.test(q)
  );
}

// A benchmark/capability question asks what the network or node software has demonstrably
// achieved ("highest throughput", "can BSV handle a million TPS"), as opposed to tuning a
// specific service ("Kafka throughput in merkle-service") — the latter keeps its repo docs.
// Both a measurement cue AND a network-capability context are required so service-tuning
// questions never hijack the curated benchmarks card.
function isBenchmarkQuestion(question: string, tokens: string[]): boolean {
  const q = question.toLowerCase();
  const measurementCue =
    tokens.some((token) => /^(tps|throughput|benchmarks?|highest|fastest)$/.test(token)) ||
    /\b(transactions per second|how many transactions|million tps|billion tps)\b/.test(q);
  if (!measurementCue) {
    return false;
  }
  return (
    tokens.some((token) => /^(teranode|bsv|bitcoin|node|nodes|network|scale|scaling|scalability)$/.test(token)) ||
    /\b(can|could|does) (bsv|bitcoin|teranode|the network) (scale|handle|process|sustain)\b/.test(q)
  );
}

// A Bitcoin-history question asks about the 2014–2017 governance/funding record (the block
// size war, the funding concentration, the moderation era, the Epstein-documented
// connections) — answered by the attributed analysis card, not by Craig's essays. The
// Craig-guard keeps "what does Craig say about X" with the essay corpus: his writings are
// the authority on his own positions.
function isBitcoinHistoryQuestion(question: string, tokens: string[]): boolean {
  const q = question.toLowerCase();
  const craigGuard =
    tokens.includes("craig") || tokens.includes("wright")
      ? /\b(essays?|writings?|says|claims?|argues|philosophy|corpus)\b/.test(q)
      : false;
  if (craigGuard) {
    return false;
  }
  return (
    tokens.some((token) => /^(epstein|blockstream|theymos|chaincode|kyara)$/.test(token)) ||
    /\bblock[ -]size (war|debate|limit|cap)s?\b/.test(q) ||
    /\bscaling (war|debate)s?\b/.test(q) ||
    /\bhijack(ed|ing|s)?\b/.test(q) && /\bbitcoin\b/.test(q) ||
    /\bdigital gold\b/.test(q) ||
    /\bsettlement layer\b/.test(q) ||
    /\bwhy did bitcoin (become|change|move|shift|abandon)\b/.test(q) ||
    /\bpeer-to-peer (electronic )?cash\b/.test(q) && /\b(instead|became|become|shift|no longer|abandon)\b/.test(q)
  );
}

const BEEF_SYMBOL_IDS = ["symbol:ts-sdk:Beef", "symbol:go-sdk:Beef"] as const;

function takeBeefSymbolCards(
  store: KnowledgeStore,
  collected: TypedHit[],
  tokens: string[],
): void {
  for (const id of BEEF_SYMBOL_IDS) {
    const doc = store.getById(id);
    if (doc) {
      upsertHit(collected, storedHit(doc, tokens));
    }
  }
}

function resolveBeefSymbolUri(store: KnowledgeStore, hits: TypedHit[]): string | undefined {
  for (const id of BEEF_SYMBOL_IDS) {
    if (hits.some((hit) => hit.id === id) || store.getById(id)) {
      return symbolUriFromId(id);
    }
  }
  const fromHits = hits.find((hit) => hit.kind === "symbol" && /:Beef$/i.test(hit.id));
  return fromHits ? symbolUriFromId(fromHits.id) : undefined;
}

function symbolUriFromId(id: string): string | undefined {
  const match = /^symbol:([^:]+):(.+)$/.exec(id);
  return match ? `symbol://${match[1]}/${match[2]}` : undefined;
}

function storedHit(doc: StoredDocument, tokens: string[]): TypedHit {
  return {
    id: doc.id,
    kind: doc.kind,
    authority: doc.authority,
    title: doc.title,
    locator: doc.locator,
    revision: doc.revision,
    fetched_at: doc.fetched_at,
    stale: false,
    network: doc.network,
    language: doc.language,
    contradiction_ids: [],
    successor: null,
    excerpt: excerptWindow(doc.body, tokens),
  };
}

function brcNumber(hit: TypedHit): number {
  const numbered = /^brc:(\d+)$/.exec(hit.id);
  return numbered ? Number(numbered[1]) : Number.POSITIVE_INFINITY;
}

function formatHitLabel(hit: TypedHit): string {
  const numbered = /^brc:(\d+)$/.exec(hit.id);
  if (numbered) {
    return `BRC-${numbered[1]} (${hit.title})`;
  }
  return `${hit.title} (${hit.id})`;
}

function filtersForClass(classified: ClassifiedAs): { kind?: TypedHit["kind"][]; authority_max?: number } {
  switch (classified) {
    case "spec":
      return { kind: ["brc"], authority_max: 1 };
    case "implementation":
      return { authority_max: 2 };
    case "design-why":
      return { kind: ["principle", "essay", "contradiction"] };
    case "historical":
      return { kind: ["essay"] };
    default:
      return {};
  }
}

function scoreHit(hit: TypedHit, tokens: string[]): number {
  // Academy markdown escapes opcode underscores (OP\_RETURN); unescape so OP_RETURN scores.
  const hay = `${hit.id} ${hit.title} ${hit.excerpt}`.toLowerCase().replace(/\\_/g, "_");
  return tokens.reduce((score, token) => score + (hay.includes(token) ? 1 : 0), 0);
}

function hasMatchingBrc(hits: TypedHit[], tokens: string[]): boolean {
  return hits.some((hit) => hit.kind === "brc" && scoreHit(hit, tokens) >= Math.min(2, tokens.length));
}

function matchBrcFromCatalogue(text: string, tokens: string[]): number | undefined {
  let parsed: { brcs?: Array<{ number?: unknown; title?: unknown; id?: unknown }> };
  try {
    parsed = JSON.parse(text) as { brcs?: Array<{ number?: unknown; title?: unknown; id?: unknown }> };
  } catch {
    return undefined;
  }
  let best: { number: number; score: number } | undefined;
  for (const row of parsed.brcs ?? []) {
    if (typeof row.number !== "number") {
      continue;
    }
    const hay = `${row.id ?? ""} ${row.title ?? ""}`.toLowerCase();
    const score = tokens.reduce((n, token) => n + (hay.includes(token) ? 1 : 0), 0);
    if (score === 0) {
      continue;
    }
    if (!best || score > best.score || (score === best.score && row.number < best.number)) {
      best = { number: row.number, score };
    }
  }
  return best && best.score >= Math.min(2, tokens.length) ? best.number : undefined;
}

function inspectUri(hit: TypedHit): string {
  const numbered = /^brc:(\d+)$/.exec(hit.id);
  if (numbered) {
    return `brc://spec/${numbered[1]}`;
  }
  return hit.locator;
}

function withOpenedExcerpt(
  hit: TypedHit,
  text: string,
  tokens: string[] = [],
  preferRequirements = false,
  limit?: number,
): TypedHit {
  return {
    ...hit,
    excerpt: excerptWindow(text, tokens, preferRequirements, limit),
  };
}

function excerptWindow(
  text: string,
  tokens: string[] = [],
  preferRequirements = false,
  limit = 280,
  preferDefinition = false,
): string {
  return cleanExcerptMarkup(excerptWindowRaw(text, tokens, preferRequirements, limit, preferDefinition));
}

/** README bodies carry presentation HTML (<div align="center">, &nbsp;); strip real tags but
 * keep script placeholders like <signature> that are content, not markup. */
function cleanExcerptMarkup(excerpt: string): string {
  return excerpt
    .replace(
      /<\/?(?:div|span|a|br|hr|img|p|b|i|em|strong|table|thead|tbody|tr|td|th|ul|ol|li|h[1-6]|center|sub|sup)(?:\s[^>]*)?>/gi,
      " ",
    )
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">")
    .replace(/\s+/g, " ")
    .trim();
}

function excerptWindowRaw(
  text: string,
  tokens: string[] = [],
  preferRequirements = false,
  limit = 280,
  preferDefinition = false,
): string {
  // Unescape before windowing so indices into `lower` stay aligned with `normalised`.
  const normalised = text.replace(/\\_/g, "_").replace(/\s+/g, " ").trim();
  const lower = normalised.toLowerCase();
  const phrases = [...new Set(tokens.filter((token) => token.length > 2).map((t) => t.toLowerCase()))];
  if (phrases.length === 0) {
    return normalised.slice(0, limit);
  }
  // A requirements question on a spec-style document is answered by its Specification section;
  // requirement verbs ("require", "contain") rarely appear next to the field list itself, so
  // lexical coverage alone windows into the motivation prose.
  if (preferRequirements) {
    const anchor = /#+\s*(specification|requirements?)\b/i.exec(normalised);
    if (anchor) {
      return normalised.slice(anchor.index, anchor.index + limit);
    }
  }
  // A "what is X?" question is answered by the definitional section. Specs name it Abstract;
  // without the anchor, coverage scoring windows into motivation prose (BRC-62's competing-
  // blocks paragraph out-scored its own Abstract on "What is BEEF?").
  if (preferDefinition) {
    const anchor = /#+\s*abstract\b/i.exec(normalised);
    if (anchor) {
      return normalised.slice(anchor.index, anchor.index + limit);
    }
  }
  // The passage under a heading that names the question's operative term is usually the answer
  // ("How do I compile…?" belongs at "## runar compile", not at the first lexical match). Only
  // the FIRST distinctive token anchors — weaker trailing terms match generic sections (the
  // abstract mentions "wallet" but says nothing about internalizeAction). The document's own
  // title heading is skipped — anchoring there reproduces the byline dump.
  const operative = phrases.find((p) => p.length >= 5);
  if (operative) {
    const headings = [...normalised.matchAll(/#+\s*[^#.:\n]{0,80}/g)];
    for (let h = 1; h < headings.length; h++) {
      if ((headings[h]?.[0].toLowerCase() ?? "").includes(operative)) {
        return normalised.slice(headings[h]?.index ?? 0, (headings[h]?.index ?? 0) + limit);
      }
    }
  }
  // Score every candidate window by length-weighted distinct-token coverage. First-occurrence-
  // wins kept body answers pinned to the title header, and unweighted coverage lets stopword-ish
  // tokens ("can", "use") outscore the distinctive term ("op_cat") the question is about.
  const hasDistinctive = phrases.some((p) => p.length >= 5);
  // An operative token continuing into a camelCase identifier ("internalize" →
  // "internalizeAction") marks the API-definition passage; inflections ("internalized") are prose.
  const camelRe = operative
    ? new RegExp(`\\b${operative.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}[A-Z]`)
    : undefined;
  let bestFrom = -1;
  let bestScore = 0;
  for (const phrase of phrases) {
    let idx = lower.indexOf(phrase);
    while (idx >= 0) {
      const start = Math.max(0, idx - 80);
      // Align to a word boundary so excerpts never open mid-word.
      const aligned = start > 0 ? normalised.indexOf(" ", start) + 1 : 0;
      let from = aligned > 0 && aligned < idx ? aligned : start;
      // Never open inside a **bold** span either: starting at "Update:**" reads as gibberish.
      const openBold = normalised.slice(Math.max(0, from - 200), from).split("**").length - 1;
      if (openBold % 2 === 1) {
        const close = normalised.indexOf("**", from);
        if (close >= 0 && close - from < 120) {
          from = close + 2;
        }
      }
      const windowText = lower.slice(from, from + limit);
      let score = 0;
      for (const p of phrases) {
        if (windowText.includes(p)) {
          score += p.length;
        }
      }
      if (camelRe && camelRe.test(normalised.slice(from, from + limit))) {
        score += (operative?.length ?? 0) * 2;
      }
      // A window without any distinctive query term is never the answer passage.
      if (hasDistinctive && !phrases.some((p) => p.length >= 5 && windowText.includes(p))) {
        score = 0;
      }
      // A "what does it require/contain" question is answered by the requirement sentences.
      if (score > 0 && preferRequirements && /\b(must|shall|required|requires|requirement)\b/i.test(windowText)) {
        score += 2;
      }
      if (score > bestScore) {
        bestScore = score;
        bestFrom = from;
      }
      idx = lower.indexOf(phrase, idx + 1);
    }
  }
  return bestFrom < 0 ? normalised.slice(0, limit) : normalised.slice(bestFrom, bestFrom + limit);
}

/** Window from a named markdown section heading when present, else token-windowed. */
function sectionExcerpt(text: string, section: string, tokens: string[], limit = 280): string {
  // Anchor on a heading whose text contains the section key — numbering prefixes ("## 3.") and
  // leading verbs ("## 1. Can we generate and switch…") both match. Table pipes and code
  // backticks are elided so the quoted passage reads as prose ("POST /api/claim/wallet").
  const heading = new RegExp(
    `^#+\\s*(?:\\d+(?:\\.\\d+)*\\.?\\s+)?[^\\n]*\\b${section}\\b[^\\n]*$`,
    "im",
  ).exec(text);
  if (heading) {
    return text
      .slice(heading.index, heading.index + limit * 3)
      .replace(/\\_/g, "_")
      .replace(/[`|()]/g, "")
      .replace(/\s+/g, " ")
      .trim()
      .slice(0, limit);
  }
  return excerptWindow(text, tokens);
}

function upsertHit(hits: TypedHit[], hit: TypedHit): void {
  const index = hits.findIndex((row) => row.id === hit.id);
  if (index === -1) {
    hits.push(hit);
    return;
  }
  hits[index] = hit;
}

function composeClaims(
  question: string,
  classified: ClassifiedAs,
  hits: TypedHit[],
  eligible: TypedHit[],
  tokens: string[],
  ordinalityQuestion = false,
  gaps: string[] = [],
  routing: {
    explicitBrcs: number[];
    missingBrcs: number[];
    opcodeLeadId?: string | undefined;
    stubIds?: Set<string>;
    deniedPackage?: string | undefined;
    packageIds?: string[];
    hopPackages?: string[];
  } = {
    explicitBrcs: [],
    missingBrcs: [],
  },
): EvidenceClaim[] {
  if (classified === "live-ops") {
    const ops = hits.find((hit) => hit.locator === "ops://testnet");
    const claims: EvidenceClaim[] = [
      {
        text: "Current faucet or service health is a live fact and was not fetched from the network.",
        support: [],
        status: "insufficient",
        confidence: "low",
      },
    ];
    if (ops) {
      const support = eligible.filter((hit) => hit.id === ops.id);
      // Quote the ops card's own words; a composed paraphrase here would be an uncited claim.
      claims.push({
        text: ops.excerpt
          ? `The pinned testnet operations snapshot: ${ops.excerpt}`
          : "The pinned testnet operations snapshot is available as a hit.",
        support: support.map((hit) => hit.id),
        status: statusForClaim(support, []),
        confidence: "medium",
      });
    }
    return claims;
  }

  // A named deny-list entry outranks every other card: the denial is the answer, and the claim
  // quotes the opened deny-list excerpt verbatim (entry, reason, successor). Gated on the
  // question actually naming a denied package — an FTS hit on the deny document (its body
  // mentions overlay-services) is an ordinary hit, not a denial verdict.
  const denyHit = routing.deniedPackage
    ? hits.find((hit) => hit.locator === "repo://deny" && hit.excerpt)
    : undefined;
  if (denyHit) {
    return [
      {
        text: `Package deny list: ${denyHit.excerpt}`,
        support: [denyHit.id],
        status: "supports",
        confidence: "high",
      },
    ];
  }

  // A BRC number that is absent from the pinned catalogue fails closed; a digit-substring
  // match in some other BRC's body is not an answer. Only a total miss fails — when the
  // question names several BRCs and some exist, the existing ones still answer.
  const existingExplicit = routing.explicitBrcs.filter((n) =>
    eligible.some((hit) => hit.id === `brc:${n}`),
  );
  if (routing.missingBrcs.length > 0 && existingExplicit.length === 0) {
    return [
      {
        text: `${routing.missingBrcs.map((n) => `BRC-${n}`).join(", ")} is not present in the pinned BRC catalogue, so its contents cannot be quoted. The snapshot serves pinned BRCs only; live fetch is refused.`,
        support: [],
        status: "insufficient",
        confidence: "low",
      },
    ];
  }

  // Placeholder pages ("specs pending") rank below substantive peers of the same authority;
  // a title that names a distinctive query token outranks a body that merely mentions it.
  const stubs = routing.stubIds ?? new Set<string>();
  // Hyphenated compounds ("message-box-client") score as whole phrases: their per-word strict
  // boundaries never match the hyphenated form, which is exactly how real docs were wiped.
  const compounds = hyphenCompounds(question);
  const ranked = [...eligible].sort(
    (a, b) =>
      a.authority - b.authority ||
      Number(stubs.has(a.id)) - Number(stubs.has(b.id)) ||
      titleOverlap(b, tokens, compounds) - titleOverlap(a, tokens, compounds) ||
      scoreHit(b, [...tokens, ...compounds]) - scoreHit(a, [...tokens, ...compounds]) ||
      brcNumber(a) - brcNumber(b),
  );
  // The ordinality playbook is an ops card (authority 3), so it sits outside the eligible set
  // for spec/mixed questions — but for a genuine ordinality question its rules ARE the
  // operative answer. It may lead from the hit set, after any named or governing spec.
  const openedCard = ordinalityQuestion
    ? hits.find((hit) => hit.locator === "ops://ordinality")
    : undefined;
  // Same standing for the curated benchmarks card on a capability question: the figures with
  // their conditions ARE the answer, and no spec or repo README should outrank them.
  const benchmarkCard = isBenchmarkQuestion(question, tokens)
    ? hits.find((hit) => hit.locator === "fact://teranode-benchmarks")
    : undefined;
  // And for the attributed history card on a 2014–2017 governance question: the analysis
  // with its documented/disputed/unproven tiers IS the answer the corpus has.
  const historyCard = isBitcoinHistoryQuestion(question, tokens)
    ? hits.find((hit) => hit.locator === "analysis://bitcoin-scaling-history")
    : undefined;
  // The BEEF family has a definitional hierarchy: Atomic BEEF is BRC-95, the V2 txid-only
  // extension is BRC-96, and BRC-62 is the base format. Never let multicast/outpoint BEEF
  // BRCs outrank the member the question is actually about.
  const wantsAtomicBeef =
    tokens.includes("atomicbeef") || (tokens.includes("atomic") && tokens.includes("beef"));
  const wantsBeefV2 = /\bv\s*2\b|\bversion\s*2\b|\bbeef\s+v2\b/i.test(question);
  const beefId = wantsAtomicBeef ? "brc:95" : wantsBeefV2 ? "brc:96" : "brc:62";
  const beefCard =
    tokens.includes("beef") || tokens.includes("atomicbeef")
      ? eligible.find((hit) => hit.id === beefId) ?? eligible.find((hit) => hit.id === "brc:62")
      : undefined;
  // An explicitly named BRC is the subject of its question; pin it when exactly one is named.
  const explicitCard =
    existingExplicit.length === 1
      ? eligible.find((hit) => hit.id === `brc:${existingExplicit[0]}`)
      : undefined;
  // "Which BRC governs X?" is answered by the spec whose title covers the topic — a body that
  // merely mentions the same words often must not out-score it.
  const governance = isGovernanceQuestion(question)
    ? scoreGovernanceTitles(eligible, tokens)
    : undefined;
  const governanceCard =
    governance && !governance.tied && governance.bestScore >= 2 ? governance.best : undefined;
  // "What is X?" is answered by the prose document whose title defines X, if one is pinned.
  const bareTerm = bareDefinitionTerm(question);
  const definitionCard = bareTerm ? findDefinitionCard(eligible, bareTerm) : undefined;
  // A single-opcode question leads with the definitional academy page, not a BRC that applies it.
  const opcodeCard = routing.opcodeLeadId
    ? eligible.find((hit) => hit.id === routing.opcodeLeadId)
    : undefined;
  // Language-hinted Tier 0 package cards are a deliberate routing decision, not FTS noise:
  // the first hint leads when nothing more specific pinned (wallet questions are ordered
  // wallet-toolbox first by languagePackageHints).
  const packageCard = routing.packageIds
    ?.map((id) => eligible.find((hit) => hit.id === `package:${id}`))
    .find((hit) => hit !== undefined);
  // Naming a Tier 1 service/library makes it the subject of the question ("Should I broadcast via
  // Arcade…"): pin its package card. Tier 0 toolchain names (sdk, wallet-toolbox, runar) are
  // excluded — those questions are answered by their specs and academy docs, not the label card.
  const namedPackageCard = eligible.find(
    (hit) =>
      hit.id.startsWith("package:") &&
      hit.title.startsWith("Tier 1 package:") &&
      packageNamedInQuestion(hit.id.slice("package:".length), question),
  );
  // On a how-to question the repo's own README/example answers; the generated identity card
  // only confirms the name. Prefer the doc from the same repo when one was retrieved.
  const howToQuestion =
    /\b(how do i|how do we|how to|install|configure|register|deploy|integrate|use|store|display|upload)\b/i.test(
      question,
    );
  const namedRepoDoc =
    namedPackageCard && howToQuestion
      ? eligible.find(
          (hit) =>
            (hit.kind === "doc" || hit.kind === "example") &&
            idMatchesPackage(hit.id, namedPackageCard.id.slice("package:".length)),
        )
      : undefined;
  // The question's own address pins win first (named BRC, governed topic, defined term); the
  // ordinality playbook is an operator checklist, never the answer to "which BRC" or "does
  // BRC-N…". A definitional doc outranks the identity card on "what is X?".
  const pinned =
    explicitCard ??
    governanceCard ??
    definitionCard ??
    namedRepoDoc ??
    namedPackageCard ??
    openedCard ??
    benchmarkCard ??
    historyCard ??
    beefCard ??
    opcodeCard ??
    packageCard;
  let lead = pinned ?? ranked[0];

  // Kind-aware lead: a why-question is answered by the writings, not by a spec that happens to
  // share its words (BRC-114's timestamp filters must not outrank "Time Is Not Consensus" on a
  // mining-timing question). When no address pin fired, the best on-topic essay or principle
  // leads; BRCs stay in the pile as secondary citations.
  if (!pinned && classified === "design-why") {
    const essayLead = ranked.find(
      (hit) =>
        (hit.kind === "essay" || hit.kind === "principle") &&
        (titleOverlap(hit, tokens, compounds) > 0 ||
          scoreHit(hit, [...tokens, ...compounds]) >= 2),
    );
    if (essayLead) {
      lead = essayLead;
    }
  }

  // A governance ask ("which BRC governs X?", "is there a BRC for X?") is answered only by a
  // BRC whose title covers the topic. When NO BRC title covers any of it, body mentions are
  // incidental — fail closed rather than let a BRC that merely contains the words pose as the
  // governing spec. A coverage TIE abstains to the usual scoring order, as before.
  if (!pinned && governance && governance.topicCount >= 2 && governance.bestScore === 0) {
    hits.length = 0;
    gaps.push(
      "No pinned BRC's title covers this topic; body mentions are incidental, so no governing spec is named.",
    );
    return [
      {
        text: "The pinned catalogue contains no BRC whose remit names this topic; documents that merely mention the words in passing were discarded.",
        support: [],
        status: "insufficient",
        confidence: "low",
      },
    ];
  }

  // "Which package/implementation should I use?" is answered by a package or its docs, never
  // by a BRC that merely shares topic words (BRC-35's title names "Overlay Services" but
  // specifies a KV store) nor by a symbol card's JSON dump. BRCs stay in the pile as
  // secondary citations.
  const implementationPick =
    routing.explicitBrcs.length === 0 &&
    /\b(?:which|what)\b[\s\S]{0,60}\b(?:package|packages|sdk|library|implementation|service|services|tool|middleware)\b[\s\S]{0,40}\b(?:use|install|choose|pick|implement)/i.test(
      question,
    );
  if (!pinned && implementationPick) {
    lead =
      ranked.find((hit) => hit.kind === "doc" || hit.kind === "example") ??
      ranked.find((hit) => hit.kind !== "brc");
  }

  // A bare "what is X?" with no definitional card must not pose an incidental mention (e.g. the
  // 1Sat ordinals BRCs for "sat") as the definition. The coincidental hits are cleared too:
  // leaving them in the lead slot invites the client to quote them as the very definition the
  // claim just refused to give. A named package card, its repo docs, or a ranked hit that
  // genuinely names the term ARE about X — they may answer. On-topic is judged on the TERM's
  // words: "run protocol" is not defined by a doc whose title merely contains "protocol".
  const bareTermWords = bareTerm?.split(/[\s-]+/).filter(Boolean) ?? [];
  const strictShortTerm = bareTermWords.length === 1 && bareTermWords[0]!.length < 4;
  const rankedLeadOnTopic =
    bareTerm !== undefined &&
    ranked[0] !== undefined &&
    (strictShortTerm
      ? titleDefinesTerm(ranked[0]!.title, bareTerm!)
      : compounds.some(
          (compound) =>
            ranked[0]!.id.toLowerCase().includes(compound) ||
            mentionsWord(ranked[0]!.title.toLowerCase(), compound),
        ) ||
        (bareTermWords.length > 0 &&
          bareTermWords.every((word) => mentionsWord(ranked[0]!.title.toLowerCase(), word))));
  if (
    bareTerm &&
    !openedCard &&
    !beefCard &&
    !explicitCard &&
    !governanceCard &&
    !definitionCard &&
    !opcodeCard &&
    !namedPackageCard &&
    !namedRepoDoc &&
    !rankedLeadOnTopic
  ) {
    gaps.push(`No pinned document defines "${bareTerm}"; the retrieved hits mention it only in passing.`);
    hits.length = 0;
    return [
      {
        text: `No pinned document defines "${bareTerm}"; the retrieved hits mention it only in passing, so no definition is quoted.`,
        support: [],
        status: "insufficient",
        confidence: "low",
      },
    ];
  }

  // No authority-class lead: the retrieval pile is incidental mentions, not evidence. Leaving
  // it in place invites the client to quote it as the answer (the fail-closed contract).
  if (!lead) {
    hits.length = 0;
    gaps.push(
      "No pinned authority-class document answers this question; the retrieved mentions are incidental and were discarded.",
    );
    return [
      {
        text: "The pinned snapshot does not contain an authority-class hit that answers this question.",
        support: [],
        status: "insufficient",
        confidence: "low",
      },
    ];
  }

  // An unpinned lead (no explicit/governance/opcode/definition pin fired) must earn its place:
  // at least two word-level token matches, or a distinctive token in its title. Anything weaker
  // is a coincidental mention — fail closed rather than sell it as the answer. When the
  // best-ranked hit is coincidental but a LATER hit is genuinely on-topic (a hyphenated compound
  // in its id, a package the question named, a topic-hopped package's docs), demote instead of
  // wiping: the pile contains a real answer under a lexical collision.
  if (!pinned && lead && wordScore(lead, tokens, compounds) < 2 && titleOverlap(lead, tokens, compounds) === 0) {
    const hopPackages = routing.hopPackages ?? [];    const isHopCard = (hit: TypedHit): boolean =>
      hopPackages.some(
        (name) =>
          hit.id === `package:${name}` ||
          ((hit.kind === "doc" || hit.kind === "example") && idMatchesPackage(hit.id, name)),
      );
    const onTopic = (hit: TypedHit): boolean =>
      wordScore(hit, tokens, compounds) >= 2 || titleOverlap(hit, tokens, compounds) > 0;
    const passing = ranked.find(
      (hit) =>
        onTopic(hit) &&
        (compounds.some((compound) => hit.id.toLowerCase().includes(compound)) ||
          (hit.id.startsWith("package:") &&
            packageNamedInQuestion(hit.id.slice("package:".length), question)) ||
          isHopCard(hit)),
    );
    // A topic-hopped package card needs no further proof: the hop itself is the relevance
    // signal, and hyphen boundaries can zero its word score ("storage" in "uhrp-storage-server").
    // Failing those, the pile may still hold the answer under a lexical collision: a document
    // whose TITLE is about the topic ("Double-Spend Assurance…" for a double-spend question)
    // demotes the coincidental leader. Body-word co-occurrence alone never rescues — common
    // words co-occur in nonsense queries too ("drop", "table", "documents").
    const rescued =
      passing ??
      ranked.find((hit) => isHopCard(hit)) ??
      ranked.find((hit) => titleOverlap(hit, tokens, compounds) > 0);
    if (rescued) {
      lead = rescued;
    } else {
      // A cue-summoned ops card is not an incidental mention: when the question's own
      // faucet/testnet/broadcast cues injected it and nothing else passed the floor, the ops
      // card IS the honest answer ("the faucet is Teratestnet funding" on a mainnet ask).
      const opsCued = hits.find((hit) => hit.locator === "ops://testnet" && hit.excerpt);
      const cuesOps =
        tokens.some((token) => TESTNET_CUE_TOKENS.has(token)) || tokens.includes("broadcast");
      if (opsCued && cuesOps) {
        lead = opsCued;
      } else {
        hits.length = 0;
        gaps.push(
          "Retrieval found only incidental mentions of this topic; no pinned document is about it.",
        );
        return [
          {
            text: "The pinned snapshot does not contain a document that is about this question; only incidental mentions were found, so nothing is quoted.",
            support: [],
            status: "insufficient",
            confidence: "low",
          },
        ];
      }
    }
  }

  // A lead whose own excerpt declares the topic out of scope is an anti-answer: quote the
  // exclusion honestly instead of presenting the document as the answer.
  if (lead.excerpt && isAntiAnswer(lead.excerpt, tokens)) {
    gaps.push(
      `The closest pinned document (${lead.title}) states it does not cover this topic; no definitional source is pinned.`,
    );
    return [
      {
        text: `${lead.title} explicitly does not cover this topic: ${lead.excerpt}`,
        support: [lead.id],
        status: "insufficient",
        confidence: "low",
      },
    ];
  }

  // The lead never mentions a distinctive question token, yet another hit explicitly declares
  // that token out of scope: the exclusion is the honest answer, not the coincidental lead
  // ("Should I use BitCom protocols?" — BRC-44 shares "protocols" but BRC-160 names BitCom
  // only to exclude it).
  const leadHay = `${lead.id} ${lead.title} ${lead.excerpt ?? ""}`;
  for (const token of tokens) {
    if (token.length < 4 || mentionsWord(leadHay, token)) {
      continue;
    }
    const anti = eligible.find(
      (hit) =>
        hit.id !== lead.id &&
        hit.excerpt !== undefined &&
        mentionsWord(hit.excerpt, token) &&
        isAntiAnswer(hit.excerpt, [token]),
    );
    if (anti) {
      hits.length = 0;
      gaps.push(
        `The only pinned document naming "${token}" (${anti.title}) states it does not cover the topic; no definitional source is pinned.`,
      );
      return [
        {
          text: `${anti.title} explicitly does not cover this topic: ${anti.excerpt}`,
          support: [anti.id],
          status: "insufficient",
          confidence: "low",
        },
      ];
    }
  }

  // A BRC catalogue row (title/category/path) cannot answer a "what does it require/contain"
  // question. Fail closed rather than quote the stub at high confidence.
  if (/^brc:\d+$/.test(lead.id) && isCatalogueStub(lead.excerpt ?? "") && isBodyQuestion(question)) {
    gaps.push(
      `The body of ${lead.title} is not present in the pinned snapshot; only the catalogue entry is pinned.`,
    );
    return [
      {
        text: `The pinned snapshot holds only the catalogue entry for ${lead.title} (title, category, path); the BRC body is not pinned, so its requirements cannot be quoted.`,
        support: [lead.id],
        status: "insufficient",
        confidence: "low",
      },
    ];
  }

  const support = [lead];
  const claims: EvidenceClaim[] = [
    {
      text: claimText(question, lead),
      support: support.map((hit) => hit.id),
      status: statusForClaim(support, []),
      confidence: lead.authority <= 1 ? "high" : "medium",
    },
  ];
  // A two-part reserved-opcode question ("which reserved opcodes remain, and what is OP_NOP
  // for?") is not answered by the OP_NOP chapter alone — cite the reserved family too.
  if (tokens.includes("reserved")) {
    const reserved = eligible.find((hit) => hit.id === "academy:opcodes/the-reserved-opcodes");
    if (reserved && !claims[0]?.support.includes(reserved.id) && reserved.excerpt) {
      claims.push({
        text: `${reserved.title}: ${reserved.excerpt}`,
        support: [reserved.id],
        status: statusForClaim([reserved], []),
        confidence: reserved.authority <= 1 ? "high" : "medium",
      });
    }
  }
  // When the testnet ops card informed the answer (faucet funding, broadcast routing, wallet
  // switching), quote its section as a secondary claim — the operational half of a mixed
  // answer, in the card's own words (it carries the endpoint paths and BRC references).
  const opsCard = hits.find((hit) => hit.locator === "ops://testnet" && hit.excerpt);
  if (opsCard && opsCard.id !== lead.id && !claims.some((claim) => claim.support.includes(opsCard.id))) {
    claims.push({
      text: `${opsCard.title}: ${opsCard.excerpt}`,
      support: [opsCard.id],
      status: statusForClaim([opsCard], []),
      confidence: "medium",
    });
  }
  return claims;
}

/** Distinctive tokens (length ≥ 4) present in the hit's title — a topic signal, not a mention. */
function titleOverlap(hit: TypedHit, tokens: string[], compounds: string[] = []): number {
  const title = hit.title.toLowerCase();
  // Titles hyphenate compounds ("Wallet-to-Application Interface"): split on every
  // non-alphanumeric so "wallet" matches the title's "Wallet-…" word. Exact word membership,
  // never substring: "payment" still does not match an unrelated "Payments" title.
  const titleWords = new Set(title.split(/[^a-z0-9]+/g).filter(Boolean));
  let score = tokens.filter((token) => {
    if (token.length < 4) {
      return false;
    }
    return titleWords.has(token);
  }).length;
  for (const compound of compounds) {
    if (compound.length >= 4 && mentionsWord(title, compound)) {
      score += compound.split("-").length;
    }
  }
  return score;
}

/** Namespace words that name the catalogue rather than the topic; excluded from wordScore. */
const STRUCTURAL_TOKENS = new Set(["brc"]);

/** Word-level token matches across id/title/excerpt. A match inside a hyphenated compound
 * ("scrypt" inside the "scrypt-offchain" URL scheme) is a different token and does not count. */
function wordScore(hit: TypedHit, tokens: string[], compounds: string[] = []): number {
  const hay = `${hit.id} ${hit.title} ${hit.excerpt ?? ""}`.toLowerCase().replace(/\\_/g, "_");
  let score = tokens.filter((token) => {
    // Namespace words name the catalogue, not the topic: "brc" appears in every brc:* id, so
    // it must never help a hit earn the floor ("is there a BRC for X?" is about X, not "brc").
    if (token.length < 3 || STRUCTURAL_TOKENS.has(token)) {
      return false;
    }
    const re = new RegExp(`(?<![\\w-])${token.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}(?![\\w-])`);
    return re.test(hay);
  }).length;
  // Long tokens are unambiguous ("peerpayclient", "internalizeaction"): count them double so a
  // single rare match earns the floor without a second common-word match.
  score += tokens.filter((token) => {
    if (token.length < 8) {
      return false;
    }
    const re = new RegExp(`(?<![\\w-])${token.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}(?![\\w-])`);
    return re.test(hay);
  }).length;
  // A hyphenated compound names one thing ("message-box-client"); its per-word strict boundary
  // never matches the hyphenated form, so the compound counts at its word weight when whole.
  for (const compound of compounds) {
    if (mentionsWord(hay, compound)) {
      score += compound.split("-").length;
    }
  }
  return score;
}

/** Hyphenated compounds from the question text ("message-box-client", "go-p2p"). */
function hyphenCompounds(question: string): string[] {  const matches = question.toLowerCase().match(/[\p{L}\p{N}]+(?:-[\p{L}\p{N}]+)+/gu) ?? [];
  return [...new Set(matches)];
}

/** Word-boundary membership test against free text (same boundaries as wordScore). */
function mentionsWord(text: string, token: string): boolean {
  const re = new RegExp(`(?<![\\w-])${token.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}(?![\\w-])`, "i");
  return re.test(text.replace(/\\_/g, "_"));
}

/** The excerpt itself declares the topic out of scope near a distinctive query token. */
function isAntiAnswer(excerpt: string, tokens: string[]): boolean {
  const lower = excerpt.toLowerCase();
  const negation = /(?:does not cover|did not cover|not covered|outside the scope of|beyond the scope of)[^.]{0,160}/i.exec(lower);
  if (!negation) {
    return false;
  }
  return tokens.some((token) => token.length >= 4 && negation[0].includes(token));
}

function claimText(question: string, lead: TypedHit): string {
  const numbered = /^brc:(\d+)$/.exec(lead.id);
  if (lead.excerpt) {
    if (numbered) {
      return `BRC-${numbered[1]} (${lead.title}): ${lead.excerpt}`;
    }
    return `${lead.title}: ${lead.excerpt}`;
  }
  if (numbered) {
    return `BRC-${numbered[1]} governs this question: ${lead.title}.`;
  }
  return `${lead.title} is the strongest snapshot source for “${question}”.`;
}

/** Catalogue-only BRC cards carry "Category: … Path: …" and nothing else. */
function isCatalogueStub(excerpt: string): boolean {
  return /\bCategory:\s*\S+[\s\S]*\bPath:\s*\S+/.test(excerpt) && excerpt.length < 400;
}

/** A page that declares its own content incomplete is a placeholder, not a definition. */
function isPlaceholderDoc(body: string): boolean {
  const lower = body.toLowerCase();
  return (
    lower.includes("specs pending") ||
    lower.includes("will be added as information becomes available")
  );
}

/** "Which BRC governs X?" / "what governs Y?" / "is there a BRC for Z?" — a request for the
 * spec that owns the topic. */
function isGovernanceQuestion(question: string): boolean {
  return (
    /\bwhich\s+brc\b/i.test(question) ||
    /\bwhat\s+brc\b/i.test(question) ||
    /\b(?:latest|newest)\s+brc\b/i.test(question) ||
    /\b(?:is|are)\s+there\s+(?:a\s+|an\s+|any\s+)?brc\b/i.test(question) ||
    /\bgoverns?\b/i.test(question)
  );
}

/** "Latest/newest/superseded" — the snapshot can only answer as of its pin date. */
function isRecencyQuestion(question: string): boolean {
  return /\b(latest|newest|most\s+recent|superseded|up[\s-]to[\s-]date)\b/i.test(question);
}

/** Question words that carry no topic for a governance title match. */
const GOVERNANCE_STOP = new Set([
  "which",
  "what",
  "who",
  "brc",
  "brcs",
  "govern",
  "governs",
  "governance",
  "specify",
  "specifies",
  "latest",
  "newest",
  "current",
]);

/** Topic tokens for a governance question: every non-stopword token, not just domain shorthand. */
function governanceTopicTokens(tokens: string[]): string[] {
  return tokens.filter((token) => token.length > 2 && !GOVERNANCE_STOP.has(token));
}

/**
 * The best BRC title coverage for a governance topic. The composer pins the best card when it
 * covers at least two topic tokens with no tie; a zero score on a governance ask fails closed
 * (no BRC's remit names the topic); a tie abstains to the usual scoring order.
 */
function scoreGovernanceTitles(
  hits: TypedHit[],
  tokens: string[],
): { best: TypedHit | undefined; bestScore: number; tied: boolean; topicCount: number } {
  const topic = governanceTopicTokens(tokens);
  if (topic.length < 2) {
    return { best: undefined, bestScore: 0, tied: false, topicCount: topic.length };
  }
  let best: TypedHit | undefined;
  let bestScore = 0;
  let bestLongest = 0;
  let tied = false;
  for (const hit of hits) {
    if (hit.kind !== "brc") {
      continue;
    }
    const title = hit.title.toLowerCase();
    // A plural topic token must match the title's singular form ("interfaces" → "interface").
    const matched = topic.filter((token) => {
      if (title.includes(token)) {
        return true;
      }
      return token.endsWith("s") && token.length > 3 && title.includes(token.slice(0, -1));
    });
    const score = matched.length;
    // Equal coverage breaks toward the more distinctive (longer) matched token: "provenance"
    // says more about the question than "ordinal".
    const longest = Math.max(0, ...matched.map((token) => token.length));
    if (score > bestScore || (score === bestScore && longest > bestLongest)) {
      best = hit;
      bestScore = score;
      bestLongest = longest;
      tied = false;
    } else if (score === bestScore && longest === bestLongest && score > 0 && hit.id !== best?.id) {
      tied = true;
    }
  }
  return { best, bestScore, tied, topicCount: topic.length };
}

/** BRC numbers the question names explicitly: "BRC-62", "BRC 62", "brc62" all resolve. */
function explicitBrcNumbers(question: string): number[] {
  const found = new Set<number>();
  for (const match of question.matchAll(/\bbrc[\s-]?(\d{1,4})\b/gi)) {
    const n = Number.parseInt(match[1] ?? "", 10);
    if (Number.isInteger(n)) {
      found.add(n);
    }
  }
  return [...found];
}

/** The term of a bare single-term definition question: "What is a sat?" → "sat". */
function bareDefinitionTerm(question: string): string | undefined {
  // Up to four words: "What is BEEF?" → "beef"; "What is RUN protocol?" → "run protocol".
  const match =
    /^\s*what(?:'s|\s+is)\s+(?:a\s+|an\s+|the\s+)?([a-z0-9][\w-]*(?:\s+[a-z0-9][\w-]*){0,3})\s*\??\s*$/i.exec(
      question,
    );
  return match?.[1]?.toLowerCase();
}

function titleDefinesTerm(title: string, term: string): boolean {
  // Hyphens and underscores are separators on both sides: "CHAIN_SPV" defines "spv",
  // "🛰 go-p2p" defines "go-p2p".
  const words = title
    .toLowerCase()
    .replace(/\\_/g, "_")
    .split(/[^a-z0-9]+/)
    .filter(Boolean);
  const termWords = term.split(/[\s-]+/).filter(Boolean);
  // A short single word pins only a near-exact title: "pay" must not resolve to
  // "01 - Pay to Public Key", but "spv" may resolve to "CHAIN_SPV".
  if (termWords.length === 1 && termWords[0]!.length < 4) {
    return words.length <= 2 && words.includes(termWords[0]!);
  }
  // Every word of the term must appear in the title: "Run an Overlay Node" contains "run"
  // but not "protocol", so it does not define "run protocol".
  return termWords.every((word) => words.includes(word));
}

/** A definition must come from a prose document; a symbol card names a thing, it does not define it. */
function findDefinitionCard(eligible: TypedHit[], term: string): TypedHit | undefined {
  return eligible.find(
    (hit) =>
      (hit.kind === "doc" || hit.kind === "essay" || hit.kind === "principle" || hit.kind === "brc") &&
      titleDefinesTerm(hit.title, term),
  );
}

/**
 * An opcode question leads with the definitional academy page. A title match wins first;
 * otherwise the earliest first mention — the page whose topic the opcode is introduces it
 * immediately, while a page that merely uses it (a worked covenant script tables OP_CAT dozens
 * of times) mentions it late. Chapter pages are tables of contents and never lead. When several
 * opcodes are named ("difference between OP_CHECKSIG and OP_CHECKSIGVERIFY") only a title match
 * pins — position alone is too weak a signal.
 */
function pickOpcodeLead(store: KnowledgeStore, hits: TypedHit[], question: string): string | undefined {
  const needles = opcodeNames(question).map((name) => name.toLowerCase());
  if (needles.length === 0) {
    return undefined;
  }
  let best: { id: string; titleMatches: number; firstPos: number } | undefined;
  for (const hit of hits) {
    if (hit.kind !== "doc" || hit.authority !== 1 || !hit.id.startsWith("academy:")) {
      continue;
    }
    if (hit.id.includes("/chapter-")) {
      continue;
    }
    const rawBody = store.getById(hit.id)?.body ?? "";
    // A placeholder page ("specs pending") defines nothing; it must not lead an opcode question.
    if (isPlaceholderDoc(rawBody)) {
      continue;
    }
    const body = rawBody.toLowerCase();
    const title = hit.title.toLowerCase().replace(/\\_/g, "_");
    const titleMatches = needles.filter((needle) => title.includes(needle)).length;
    const positions = needles
      .map((needle) => body.indexOf(needle))
      .filter((position) => position >= 0);
    if (positions.length === 0 || (needles.length > 1 && titleMatches === 0)) {
      continue;
    }
    const firstPos = Math.min(...positions);
    if (
      !best ||
      titleMatches > best.titleMatches ||
      (titleMatches === best.titleMatches && firstPos < best.firstPos)
    ) {
      best = { id: hit.id, titleMatches, firstPos };
    }
  }
  return best?.id;
}

/** "Which BRC…" is answered by the catalogue; "what does it require/contain" needs the body. */
function isBodyQuestion(question: string): boolean {
  return /\b(require|requires|required|contain|contains|specify|specifies|detail|details|explain|describe|step-by-step)\b/i.test(
    question,
  );
}

function statusForClaim(supportHits: TypedHit[], opposingHits: TypedHit[]): ClaimStatus {
  if (supportHits.length === 0) {
    return "insufficient";
  }
  return claimStatus(supportHits, opposingHits);
}

function composeSketch(
  classified: ClassifiedAs,
  claims: EvidenceClaim[],
  hits: TypedHit[],
  ordinalityQuestion = false,
  tokens: string[] = [],
): string {
  // A denial is the answer; the sketch must not bury it under unrelated how-to cards.
  const deny = hits.find((hit) => hit.locator === "repo://deny" && hit.excerpt);
  if (deny && claims[0]?.support.includes(deny.id)) {
    return `How: ${claims[0].text}`;
  }
  // An unsupported insufficient claim means there is no "how"; enumerating the incidental
  // hits retrieval happened to find would dress a non-answer up as a plan.
  if (claims[0] && claims[0].status === "insufficient" && claims[0].support.length === 0) {
    return `How: ${claims[0].text}`;
  }
  // The ordinality playbook narrates the sketch only when it actually leads the answer; on a
  // governance question the sketch must name the governing spec, not the ops card.
  const ordinality =
    ordinalityQuestion && claims[0]?.support.includes("ops:ordinality")
      ? hits.find((hit) => hit.locator === "ops://ordinality")
      : undefined;
  if (ordinality) {
    const excerpt = ordinality.excerpt ? ` ${ordinality.excerpt}` : "";
    return `How: ${ordinality.title} (${ordinality.id}).${excerpt}`.trim();
  }
  // The lead hit is the answer; the sketch names it first, then the supporting family (the
  // BEEF BRC set is a citation vehicle — goldens require the family to be named). Supports of
  // any secondary claims (e.g. the reserved-opcodes facet of a two-part question) are named too.
  // A BRC that shares no vocabulary with the question (ladder junk like BRC-148 on a UHRP ask)
  // is never named.
  const leadId = claims[0]?.support[0];
  const secondaryIds = new Set(claims.slice(1).flatMap((claim) => claim.support));
  const citedIds = new Set(claims.flatMap((claim) => claim.support));
  const howBrcs = hits.filter(
    (hit) =>
      hit.kind === "brc" &&
      (citedIds.has(hit.id) || wordScore(hit, tokens) >= 1 || titleOverlap(hit, tokens) > 0),
  );
  const howCode = hits.filter((hit) => hit.authority <= 2 && hit.kind !== "brc").slice(0, 2);
  const how = [...howBrcs, ...howCode];
  for (const id of secondaryIds) {
    if (!how.some((hit) => hit.id === id)) {
      const hit = hits.find((row) => row.id === id);
      if (hit) {
        how.push(hit);
      }
    }
  }
  how.sort((a, b) => (a.id === leadId ? -1 : b.id === leadId ? 1 : 0));
  const why = hits.filter((hit) => hit.authority >= 4).slice(0, 2);
  const howText =
    how.length > 0
      ? `How: ${how.map((hit) => formatHitLabel(hit)).join("; ")}.`
      : claims[0]
        ? `How: ${claims[0].text}`
        : "How: no authority ≤ 2 hit was retrieved.";
  const whyText =
    why.length > 0
      ? ` When/why: ${why.map((hit) => hit.title).join("; ")}.`
      : classified === "spec"
        ? " When/why: writings were not required for this specification question."
        : "";
  return `${howText}${whyText}`.trim();
}

function overlayContradictions(
  root: string,
  store: KnowledgeStore,
  question: string,
  tokens: string[],
  hits: TypedHit[],
  contradictions: EvidenceContradiction[],
  overlapTokens: string[],
): void {
  const findings = loadContradictionFindings(root);
  const topic = contradictionTopic(tokens, question);
  // Alignments and verbatim continuities are audit context; the contradictions[] overlay
  // surfaces conflicts only.
  const listed = listContradictions(findings, topic, true);
  const relevant =
    overlapTokens.length >= 2
      ? listed.findings.filter((finding) => findingOverlap(finding, overlapTokens) >= 2)
      : listed.findings;
  const top = rankBySeverity(relevant).slice(0, MAX_OVERLAY_FINDINGS);
  for (const finding of top) {
    const id = typeof (finding as ContradictionFinding).id === "string"
      ? ((finding as ContradictionFinding).id as string)
      : undefined;
    if (id && !hits.some((hit) => hit.id === `contradiction:${id}`)) {
      const opened = getResource(root, store, `csw://contradictions/${id}`);
      if (opened.hit.title !== "Resource not present in snapshot") {
        upsertHit(hits, withOpenedExcerpt(opened.hit, opened.text, tokens));
      }
    }
    const contradiction = contradictionFromFinding(finding, hits);
    if (contradiction && !contradictions.some((row) => row.id && row.id === contradiction.id)) {
      contradictions.push(contradiction);
    }
  }
}

/** Distinct question tokens present anywhere in the finding's own text. */
function findingOverlap(finding: unknown, tokens: string[]): number {
  if (!finding || typeof finding !== "object") {
    return 0;
  }
  const row = finding as ContradictionFinding;
  const haystack = [row.id, row.topic, row.nature, row.position_a?.claim, row.position_b?.claim]
    .filter((field): field is string => typeof field === "string")
    .join(" ")
    .toLowerCase();
  return tokens.filter((token) => haystack.includes(token)).length;
}

/** Distinct question tokens present in a retrieved contradiction card. */
function hitOverlap(hit: TypedHit, tokens: string[]): number {
  const haystack = `${hit.id} ${hit.title} ${hit.excerpt ?? ""}`.toLowerCase();
  return tokens.filter((token) => haystack.includes(token)).length;
}

const SEVERITY_ORDER: Record<string, number> = { high: 0, medium: 1, low: 2 };

function rankBySeverity(findings: unknown[]): unknown[] {
  return [...findings].sort((a, b) => {
    const sa = severityRank((a as ContradictionFinding).severity);
    const sb = severityRank((b as ContradictionFinding).severity);
    return sa - sb;
  });
}

function severityRank(severity: unknown): number {
  const key = typeof severity === "string" ? severity.toLowerCase() : "";
  return SEVERITY_ORDER[key] ?? 1;
}

function loadContradictionFindings(root: string): unknown[] {
  const abs = join(root, "substack-articles", "contradictions.json");
  if (!existsSync(abs)) {
    return [];
  }
  const raw = JSON.parse(readFileSync(abs, "utf8")) as { findings?: unknown[] };
  return Array.isArray(raw.findings) ? raw.findings : [];
}

type BrcMentionIndex = {
  /** Package label → BRC numbers its own snapshotted docs cite. */
  byPackage: Map<string, Set<number>>;
  /** Package label → repo short name (docs/examples are keyed by repo, not package name). */
  packageRepo: Map<string, string>;
};

let capabilityRowsCache: { root: string; byBrc: Map<number, { name: string; packages: string[] }> } | undefined;

/**
 * capability_graph.json rows keyed by BRC number. The graph is the curated "who implements
 * BRC-N" index (mention-evidenced plus definitional-symbol rows only); investigate reads it
 * for which-packages questions instead of guessing from spec prose.
 */
function loadCapabilityRows(root: string): Map<number, { name: string; packages: string[] }> {
  if (capabilityRowsCache?.root === root) {
    return capabilityRowsCache.byBrc;
  }
  const byBrc = new Map<number, { name: string; packages: string[] }>();
  const abs = join(root, "reference", "capability_graph.json");
  if (existsSync(abs)) {
    try {
      const raw = JSON.parse(readFileSync(abs, "utf8")) as { capabilities?: unknown[] };
      for (const row of Array.isArray(raw.capabilities) ? raw.capabilities : []) {
        const rec = row as { brc?: unknown; name?: unknown; packages?: unknown };
        if (typeof rec.brc !== "string" || !Array.isArray(rec.packages)) {
          continue;
        }
        const match = /^BRC-(\d+)$/.exec(rec.brc);
        if (!match?.[1]) {
          continue;
        }
        byBrc.set(Number(match[1]), {
          name: typeof rec.name === "string" ? rec.name : rec.brc,
          packages: rec.packages.filter((pkg): pkg is string => typeof pkg === "string"),
        });
      }
    } catch {
      // A malformed graph is non-fatal: which-packages questions fail closed without it.
    }
  }
  capabilityRowsCache = { root, byBrc };
  return byBrc;
}

let brcMentionCache: { root: string; index: BrcMentionIndex } | undefined;

/** The evidenced BRC↔package edges: built at refresh from each repo's own docs, read-only here. */
function loadBrcMentions(root: string): BrcMentionIndex {
  if (brcMentionCache?.root === root) {
    return brcMentionCache.index;
  }
  const byPackage = new Map<string, Set<number>>();
  const packageRepo = new Map<string, string>();
  for (const tier of ["tier0", "tier1"] as const) {
    const tierRoot = join(root, "reference", tier);
    const mentionsAbs = join(tierRoot, "docs", "brc-mentions.json");
    if (existsSync(mentionsAbs)) {
      try {
        const raw = JSON.parse(readFileSync(mentionsAbs, "utf8")) as {
          mentions?: Record<string, unknown>;
        };
        for (const [pkg, numbers] of Object.entries(raw.mentions ?? {})) {
          const set = byPackage.get(pkg) ?? new Set<number>();
          for (const n of Array.isArray(numbers) ? numbers : []) {
            if (typeof n === "number" && Number.isInteger(n)) {
              set.add(n);
            }
          }
          byPackage.set(pkg, set);
        }
      } catch {
        // A malformed mentions file is non-fatal: join questions fail closed without it.
      }
    }
    const manifestAbs = join(tierRoot, "manifest.json");
    if (existsSync(manifestAbs)) {
      try {
        const raw = JSON.parse(readFileSync(manifestAbs, "utf8")) as {
          repos?: Array<{ repo?: unknown; package?: unknown }>;
        };
        for (const row of raw.repos ?? []) {
          const pkg = typeof row.package === "string" ? row.package : "";
          const repo = typeof row.repo === "string" ? (row.repo.split("/").pop() ?? "") : "";
          if (pkg && repo) {
            packageRepo.set(pkg, repo);
          }
        }
      } catch {
        // Non-fatal: repoShort falls back to the package's short name.
      }
    }
  }
  const index: BrcMentionIndex = { byPackage, packageRepo };
  brcMentionCache = { root, index };
  return index;
}

function contradictionFromHit(hit: TypedHit): EvidenceContradiction | undefined {
  if (hit.kind !== "contradiction") {
    return undefined;
  }
  const id = hit.id.startsWith("contradiction:") ? hit.id.slice("contradiction:".length) : undefined;
  return {
    ...(id ? { id } : {}),
    kind: "essay-essay",
    summary: hit.title,
  };
}

function contradictionFromFinding(finding: unknown, hits: TypedHit[]): EvidenceContradiction | undefined {
  if (!finding || typeof finding !== "object") {
    return undefined;
  }
  const row = finding as ContradictionFinding;
  const id = typeof row.id === "string" ? row.id : undefined;
  const topic = typeof row.topic === "string" ? row.topic : undefined;
  const nature = typeof row.nature === "string" ? row.nature : undefined;
  // An "alignment" finding records agreement between sources; surfacing it as a contradiction
  // inverts its meaning.
  if (nature?.toLowerCase() === "alignment") {
    return undefined;
  }
  const hasBothSides =
    typeof row.position_a?.claim === "string" && typeof row.position_b?.claim === "string";
  if (!hasBothSides) {
    return undefined;
  }

  const related = hits.filter((hit) => {
    if (id && hit.contradiction_ids.includes(id)) {
      return true;
    }
    if (id && hit.id.includes(id)) {
      return true;
    }
    return topic ? hit.title.toLowerCase().includes(topic.toLowerCase()) : false;
  });

  const contradiction: EvidenceContradiction = {
    ...(id ? { id } : {}),
    kind: natureToKind(nature),
    summary: topic ?? nature ?? "Corpus contradiction",
  };

  if (related.length >= 2) {
    const pick = pickWinner(related);
    contradiction.winner = pick.winner?.id ?? null;
    contradiction.reason = pick.reason;
  }

  return contradiction;
}

function natureToKind(nature: string | undefined): ContradictionKind {
  const n = (nature ?? "").toLowerCase();
  if (n.includes("spec") && n.includes("code")) {
    return "spec-code";
  }
  if (n.includes("ts") && n.includes("go")) {
    return "ts-go";
  }
  if (n.includes("rename") || n.includes("stale")) {
    return "stale-rename";
  }
  return "essay-essay";
}
