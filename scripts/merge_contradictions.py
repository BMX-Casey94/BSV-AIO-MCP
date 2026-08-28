"""Merge the five contradiction-audit outputs into one unified data/contradictions.json.

Sources:
  data/contradictions/internal_tech.json  (IT-*, protocol/technical/governance/law lens)
  data/contradictions/internal_econ.json  (IE-*, money/economics/security lens)
  data/contradictions/external_brc.json   (XG-*, corpus vs BRC llm-training-guide)
  data/contradictions/cross_era_tech.json (XT-*, Medium 2018-22 vs Substack 2025-26, tech lens)
  data/contradictions/cross_era_econ.json (XE-*, Medium vs Substack, econ lens)

Unified finding schema:
  id, source, topic, nature, severity,
  position_a {label, claim, sources?|section?},
  position_b {label, claim, sources?|section?},
  analysis, resolution
"""
import json
from pathlib import Path

SRC = Path("data/contradictions")


def norm_internal(item, source):
    return {
        "id": item["id"],
        "source": source,
        "topic": item["topic"],
        "nature": item["nature"],
        "severity": item["severity"],
        "position_a": {"label": "Position A", **item["position_a"]},
        "position_b": {"label": "Position B", **item["position_b"]},
        "analysis": item["analysis"],
        "resolution": item.get("resolution"),
    }


def norm_external(item):
    g = item["guide_claim"]
    c = item["craig_position"]
    return {
        "id": item["id"],
        "source": "external-brc",
        "topic": item["topic"],
        "nature": item["nature"],
        "severity": item["severity"],
        "position_a": {"label": "BRC llm-training-guide", "claim": g["text"], "section": g["section"]},
        "position_b": {"label": "Craig Wright corpus", "claim": c["claim"], "sources": c["sources"]},
        "analysis": item["analysis"],
        "resolution": None,
    }


def norm_cross_era(item, source):
    return {
        "id": item["id"],
        "source": source,
        "topic": item["topic"],
        "nature": item["nature"],
        "severity": item["severity"],
        "position_a": {"label": "Medium era (2018-2022)", **item["position_medium"]},
        "position_b": {"label": "Substack era (2025-2026)", **item["position_substack"]},
        "analysis": item["analysis"],
        "resolution": item.get("resolution"),
    }


def main():
    tech = json.loads((SRC / "internal_tech.json").read_text(encoding="utf-8"))
    econ = json.loads((SRC / "internal_econ.json").read_text(encoding="utf-8"))
    brc = json.loads((SRC / "external_brc.json").read_text(encoding="utf-8"))
    xtech = json.loads((SRC / "cross_era_tech.json").read_text(encoding="utf-8"))
    xecon = json.loads((SRC / "cross_era_econ.json").read_text(encoding="utf-8"))

    findings = []
    findings += [norm_internal(i, "internal-tech") for i in tech["findings"]]
    findings += [norm_internal(i, "internal-econ") for i in econ["findings"]]
    findings += [norm_external(i) for i in brc["findings"]]
    findings += [norm_cross_era(i, "cross-era-tech") for i in xtech["findings"]]
    findings += [norm_cross_era(i, "cross-era-econ") for i in xecon["findings"]]

    strengths = [
        {"lens": "internal-tech", **s} for s in tech.get("strengths_observed", [])
    ] + [
        {"lens": "internal-econ", **s} for s in econ.get("strengths_observed", [])
    ] + [
        {"lens": "cross-era-tech", **s} for s in xtech.get("continuities_observed", [])
    ] + [
        {"lens": "cross-era-econ", **s} for s in xecon.get("continuities_observed", [])
    ]

    def count(pred):
        return sum(1 for f in findings if pred(f))

    stats = {
        "total_findings": len(findings),
        "by_source": {
            s: count(lambda f, s=s: f["source"] == s)
            for s in ("internal-tech", "internal-econ", "external-brc", "cross-era-tech", "cross-era-econ")
        },
        "by_nature": {
            n: count(lambda f, n=n: f["nature"] == n)
            for n in ("direct-contradiction", "tension", "evolution", "emphasis-shift", "restated-verbatim", "alignment")
        },
        "by_severity": {
            s: count(lambda f, s=s: f["severity"] == s)
            for s in ("high", "medium", "low", None)
        },
        "strengths_observed": len(strengths),
    }

    out = {
        "generated": "2026-08-13",
        "scope": {
            "internal": "Craig Wright Substack corpus — 201 summarised essays, 2025-06 to 2026-08 (two independent lenses)",
            "external": f"Substack corpus vs BRC wallet-client SDK training guide ({brc['guide_url']})",
            "cross_era": "Medium corpus (275 summarised essays, 2018-06 to 2022) vs Substack corpus — two independent lenses",
        },
        "sources": {
            "internal-tech": "data/contradictions/internal_tech.json",
            "internal-econ": "data/contradictions/internal_econ.json",
            "external-brc": "data/contradictions/external_brc.json",
            "cross-era-tech": "data/contradictions/cross_era_tech.json",
            "cross-era-econ": "data/contradictions/cross_era_econ.json",
        },
        "stats": stats,
        "findings": findings,
        "strengths_observed": strengths,
    }

    Path("data/contradictions.json").write_text(
        json.dumps(out, indent=2, ensure_ascii=False), encoding="utf-8"
    )
    print(json.dumps(stats, indent=2))


if __name__ == "__main__":
    main()
