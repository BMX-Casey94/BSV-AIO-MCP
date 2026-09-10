import { mkdtempSync, readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { describe, expect, it } from "vitest";
import {
  advisoryFor,
  composeFamilyMarkdown,
  epoDate,
  epoXmlUrl,
  fetchPatentCorpus,
  identityCheck,
  parseEpoXml,
  pickEpoMember,
  renderThinSummaryCard,
  writePatentIndex,
  writeThinSummaryCards,
  type FetchLike,
  type PatentFamilyRow,
  type PatentIndex,
} from "../src/ingest/fetchPatents.js";

const FIXTURE_XML = readFileSync(resolve(import.meta.dirname, "fixtures/EP3268914B1-sample.xml"), "utf8");

function makeRow(overrides: Partial<PatentFamilyRow> = {}): PatentFamilyRow {
  return {
    family_key: "WO2017145016",
    representative_pub: "WO2017145016A1",
    title: "Determining a common secret for the secure exchange of information and hierarchical, deterministic cryptographic keys",
    priority_date: "2016-02-23",
    filing_date: null,
    publication_date: null,
    grant_date: null,
    assignee: "nChain Holdings Limited",
    inventors: [],
    wright_role: "co-inventor",
    members: [
      { pub: "WO2017145016A1", jurisdiction: "WO", status: "Ceased" },
      { pub: "US10652014B2", jurisdiction: "US", status: "Active" },
      { pub: "EP3268914B1", jurisdiction: "EP", status: "Active" },
    ],
    legal_status: { status: "active", as_of: "2026-09-10", source: "https://patents.google.com/patent/WO2017145016A1/en" },
    licence_coverage: { programme: null, status: "no-coverage-found", verified: "2026-09-10", source: null },
    cpc: [],
    ipc: [],
    concepts: [],
    text_status: "deferred",
    text_source: null,
    path: "families/WO2017145016.md",
    summary_path: "summaries/WO2017145016.md",
    url: "https://patents.google.com/patent/WO2017145016A1/en",
    authority: 4,
    ...overrides,
  };
}

function makeIndex(families: PatentFamilyRow[]): PatentIndex {
  return {
    generated: "2026-09-10",
    source: "test",
    policy: "test",
    count: families.length,
    by_status: {},
    by_concept: {},
    families,
  };
}

describe("parseEpoXml", () => {
  it("parses biblio, IPC, body and claims from EP grant XML", () => {
    const rec = parseEpoXml(FIXTURE_XML);
    expect(rec.docNumber).toBe("3268914");
    expect(rec.kind).toBe("B1");
    expect(rec.title).toBe(
      "DETERMINING A COMMON SECRET FOR THE SECURE EXCHANGE OF INFORMATION AND HIERARCHICAL, DETERMINISTIC CRYPTOGRAPHIC KEYS",
    );
    expect(rec.inventors).toEqual(["WRIGHT, Craig Steven", "SAVANAH, Stephane"]);
    expect(rec.applicant).toBe("Nchain Holdings Limited");
    expect(rec.filingDate).toBe("2017-02-16");
    expect(rec.priorities).toEqual([
      { number: "201603117", date: "2016-02-23", country: "GB" },
      { number: "201619301", date: "2016-11-15", country: "GB" },
    ]);
    expect(rec.grantDate).toBe("2018-06-20");
    expect(rec.publicationDate).toBe("2018-01-17");
    expect(rec.ipc).toEqual(["G06Q20/38", "H04L9/30", "H04L9/32", "H04L9/08"]);
    expect(rec.pctApplication).toBe("IB2017050856");
    expect(rec.pctPublication).toBe("WO2017145016");
    expect(rec.abstractText).toContain("common secret");
    expect(rec.descriptionParagraphs).toHaveLength(4);
    expect(rec.descriptionParagraphs[0]).toBe("## Technical Field");
    expect(rec.descriptionParagraphs[3]).toContain("[figure]");
    expect(rec.claims).toHaveLength(2);
    expect(rec.claims[0]).toMatch(/^1\. A computer-implemented method/);
    expect(rec.biblioOnly).toBe(false);
  });

  it("flags biblio-only documents", () => {
    const biblioOnly = FIXTURE_XML.replace(/<abstract[\s\S]*?<\/abstract>/, "")
      .replace(/<description[\s\S]*?<\/description>/, "")
      .replace(/<claims[\s\S]*?<\/claims>/, "");
    const rec = parseEpoXml(biblioOnly);
    expect(rec.biblioOnly).toBe(true);
    expect(rec.claims).toHaveLength(0);
  });
});

describe("pickEpoMember / epoXmlUrl / epoDate", () => {
  it("prefers granted B-kind over applications and ignores non-EP members", () => {
    const row = makeRow();
    expect(pickEpoMember(row.members)).toEqual({ number: "3268914", kind: "B1", pub: "EP3268914B1" });
    expect(
      pickEpoMember([
        { pub: "EP3268914A1", jurisdiction: "EP", status: null },
        { pub: "US10652014B2", jurisdiction: "US", status: "Active" },
      ]),
    ).toEqual({ number: "3268914", kind: "A1", pub: "EP3268914A1" });
    expect(pickEpoMember([{ pub: "US10652014B2", jurisdiction: "US", status: null }])).toBeNull();
  });

  it("builds publication-server URLs and normalises dates", () => {
    expect(epoXmlUrl("3268914", "B1")).toBe(
      "https://data.epo.org/publication-server/rest/v1.2/patents/EP3268914NWB1/document.xml",
    );
    expect(epoDate("20180620")).toBe("2018-06-20");
    expect(epoDate("nope")).toBeNull();
  });
});

describe("identityCheck", () => {
  it("passes on a Wright inventor and fails on a foreign document", () => {
    const row = makeRow();
    expect(identityCheck(row, parseEpoXml(FIXTURE_XML)).ok).toBe(true);
    const foreign = { ...parseEpoXml(FIXTURE_XML), inventors: ["GREAVES, David"], title: "AFFILIATE WEBSITE CREATION" };
    const check = identityCheck(row, foreign);
    expect(check.ok).toBe(false);
    expect(check.reason).toContain("GREAVES");
  });
});

describe("fetchPatentCorpus", () => {
  const okFetch: FetchLike = async () => ({ ok: true, status: 200, text: async () => FIXTURE_XML });
  const noSleep = async () => {};

  it("fetches, writes the family file and enriches the row; second run skips", async () => {
    const root = mkdtempSync(join(tmpdir(), "patents-"));
    const index = makeIndex([makeRow()]);
    const result = await fetchPatentCorpus(root, index, okFetch, { sleep: noSleep });
    expect(result.fetched).toBe(1);
    expect(result.identityFailures).toHaveLength(0);

    const row = index.families[0]!;
    expect(row.text_status).toBe("full");
    expect(row.text_source).toBe("EP3268914B1");
    expect(row.grant_date).toBe("2018-06-20");
    expect(row.ipc).toContain("G06Q20/38");
    expect(row.inventors).toContain("WRIGHT, Craig Steven");

    const file = join(root, "reference", "patents", "families", "WO2017145016.md");
    expect(existsSync(file)).toBe(true);
    const text = readFileSync(file, "utf8");
    expect(text).toContain("## Description");
    expect(text).toContain("## Claims");
    expect(text).toContain("EP3268914B1");

    const second = await fetchPatentCorpus(root, index, okFetch, { sleep: noSleep });
    expect(second.fetched).toBe(0);
    expect(second.skippedExisting).toBe(1);
  });

  it("defers families with no EP member and records HTTP and identity failures", async () => {
    const root = mkdtempSync(join(tmpdir(), "patents-"));
    const noEp = makeRow({
      family_key: "WO2099000001",
      members: [{ pub: "WO2099000001A1", jurisdiction: "WO", status: "Ceased" }],
      path: "families/WO2099000001.md",
      summary_path: "summaries/WO2099000001.md",
    });
    const httpFail = makeRow({ family_key: "WO2099000002", path: "families/WO2099000002.md", summary_path: "s.md" });
    const identityFail = makeRow({ family_key: "WO2099000003", path: "families/WO2099000003.md", summary_path: "s.md" });
    const index = makeIndex([noEp, httpFail, identityFail]);
    const fetchImpl: FetchLike = async (url) => {
      if (url.includes("EP3268914NWB1") && identityFail.family_key === "WO2099000003") {
        // both real rows share the EP member; differentiate by call order below
      }
      return { ok: true, status: 200, text: async () => FIXTURE_XML };
    };
    let calls = 0;
    const scripted: FetchLike = async () => {
      calls += 1;
      if (calls === 1) return { ok: false, status: 500, text: async () => "" };
      const foreign = FIXTURE_XML.replace(/WRIGHT, Craig Steven/g, "GREAVES, David").replace(
        "DETERMINING A COMMON SECRET FOR THE SECURE EXCHANGE OF INFORMATION AND HIERARCHICAL, DETERMINISTIC CRYPTOGRAPHIC KEYS",
        "AFFILIATE WEBSITE CREATION USING TEXT ASSOCIATED WITH A WEBSITE",
      );
      return { ok: true, status: 200, text: async () => foreign };
    };
    const result = await fetchPatentCorpus(root, index, scripted, { sleep: noSleep });
    expect(result.noEpMember).toBe(1);
    expect(noEp.text_status).toBe("deferred");
    expect(result.httpFailures).toHaveLength(1);
    expect(result.identityFailures).toHaveLength(1);
    expect(result.identityFailures[0]).toContain("WO2099000003");
  });
});

describe("writePatentIndex", () => {
  it("recomputes by_status and enforces the 80% retention guard", () => {
    const root = mkdtempSync(join(tmpdir(), "patents-"));
    mkdirSync(join(root, "reference", "patents"), { recursive: true });
    const index = makeIndex([makeRow(), makeRow({ family_key: "X2", legal_status: { status: "ceased", as_of: "", source: "" } })]);
    writePatentIndex(root, index);
    const written = JSON.parse(readFileSync(join(root, "reference", "patents", "patent_index.json"), "utf8")) as PatentIndex;
    expect(written.by_status).toEqual({ active: 1, ceased: 1 });

    const shrunk = makeIndex([makeRow()]);
    expect(() => writePatentIndex(root, shrunk)).toThrow(/retention guard/);
  });
});

describe("composeFamilyMarkdown", () => {
  it("lays out header metadata, abstract, description and claims", () => {
    const md = composeFamilyMarkdown(makeRow(), parseEpoXml(FIXTURE_XML), "2026-09-10");
    expect(md).toContain("# DETERMINING A COMMON SECRET");
    expect(md).toContain("- Family: WO2017145016 (representative: WO2017145016A1)");
    expect(md).toContain("- IPC: G06Q20/38; H04L9/30; H04L9/32; H04L9/08");
    expect(md).toContain("## Abstract");
    expect(md).toContain("## Description");
    expect(md).toContain("## Claims");
  });
});

describe("thin summary cards", () => {
  it("renders catalogue-only cards with the correct advisory variant", () => {
    const biblio = makeRow({ text_status: "biblio-only", text_source: "EP3420507A1", ipc: ["H04L9/08"] });
    const card = renderThinSummaryCard(biblio);
    expect(card).toContain("# Determining a common secret");
    expect(card).toContain("Catalogue metadata only");
    expect(card).toContain("biblio-only");
    expect(card).toContain("No verifiable BSV licensing programme");
    expect(card).toContain("not legal advice");

    const expired = makeRow({
      text_status: "deferred",
      legal_status: { status: "expired", as_of: "2026-09-10", source: "" },
    });
    expect(renderThinSummaryCard(expired)).toContain("Legal status: expired as of 2026-09-10");
  });

  it("writes cards only for non-full families and never overwrites", () => {
    const root = mkdtempSync(join(tmpdir(), "patents-"));
    const full = makeRow({ family_key: "FULL1", text_status: "full", summary_path: "summaries/FULL1.md" });
    const thin = makeRow({ family_key: "THIN1", text_status: "deferred", summary_path: "summaries/THIN1.md" });
    const index = makeIndex([full, thin]);
    const written = writeThinSummaryCards(root, index);
    expect(written).toEqual(["THIN1"]);
    expect(existsSync(join(root, "reference", "patents", "summaries", "THIN1.md"))).toBe(true);
    expect(existsSync(join(root, "reference", "patents", "summaries", "FULL1.md"))).toBe(false);
    // A rich card (e.g. from the summarisation pass) is never clobbered.
    full.text_status = "deferred";
    mkdirSync(join(root, "reference", "patents", "summaries"), { recursive: true });
    writeFileSync(join(root, "reference", "patents", "summaries", "FULL1.md"), "# curated\n");
    expect(writeThinSummaryCards(root, index)).toEqual([]);
    expect(readFileSync(join(root, "reference", "patents", "summaries", "FULL1.md"), "utf8")).toBe("# curated\n");
  });
});

describe("get_resource patent URIs", () => {
  it("serves the index and on-disk family full text; missing text fails closed", async () => {
    const { openDatabase } = await import("../src/store/db.js");
    const { createKnowledgeStore } = await import("../src/store/knowledgeStore.js");
    const { getResource } = await import("../src/tools/knowledgeTools.js");
    const root = mkdtempSync(join(tmpdir(), "patents-"));
    mkdirSync(join(root, "reference", "patents", "families"), { recursive: true });
    writeFileSync(join(root, "reference", "patents", "patent_index.json"), '{"families":[]}\n');
    writeFileSync(join(root, "reference", "brc_index.json"), '{"generated":"2026-09-10","brcs":[]}\n');
    writeFileSync(join(root, "reference", "patents", "families", "WO2017145016.md"), "# full text\n");
    const store = createKnowledgeStore(openDatabase(":memory:"));

    const index = getResource(root, store, "patent://index");
    expect(index.text).toContain('"families"');
    expect(index.hit.kind).toBe("patent");

    const full = getResource(root, store, "patent://family/WO2017145016/full");
    expect(full.text).toBe("# full text\n");
    expect(full.hit.authority).toBe(4);

    const missing = getResource(root, store, "patent://family/WO2099000001/full");
    expect(missing.text).toContain("not present in the pinned snapshot");

    // Containment: the URI pattern only admits safe family keys, so a traversal attempt
    // never reaches readSnapshotFile and must not leak another snapshot file's content.
    const traversal = getResource(root, store, "patent://family/..%2F..%2Fbrc_index/full");
    expect(traversal.text ?? "").not.toContain('"families"');
    store.close();
  });
});
