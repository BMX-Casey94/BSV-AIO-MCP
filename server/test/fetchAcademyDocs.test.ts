import { describe, expect, it } from "vitest";
import { parseAcademyIndex, slugFor } from "../src/ingest/fetchAcademyDocs.js";

const LLMS = `
- [BSV Opcodes](https://hub.bsvblockchain.org/higher-learning/bsv-academy/bsv-opcodes.md)
- [OP_NOP](https://hub.bsvblockchain.org/higher-learning/bsv-academy/bsv-opcodes/op_nop-op_ver/op_nop.md)
- [The Reserved Opcodes](https://hub.bsvblockchain.org/higher-learning/bsv-academy/bsv-opcodes/historical-opcodes-and-chronicle-restoration/the-reserved-opcodes.md)
- [Assessment 1](https://hub.bsvblockchain.org/higher-learning/bsv-academy/bsv-opcodes/op_nop-op_ver/assessment-1.md)
- [Key Takeaways](https://hub.bsvblockchain.org/higher-learning/bsv-academy/bsv-opcodes/op_nop-op_ver/key-takeaways.md)
- [?Which opcode would you use](https://hub.bsvblockchain.org/higher-learning/bsv-academy/bsv-opcodes/constant-value-and-pushdata-opcodes/which-opcode-would-you-use-to-push-the-value-5-onto-the-stack-in-the-most-efficient-way.md)
- [Introduction](https://hub.bsvblockchain.org/higher-learning/bsv-academy/introduction-to-bitcoin-script.md)
- [Wallet course](https://hub.bsvblockchain.org/higher-learning/bsv-academy/wallet-course.md)
`;

describe("parseAcademyIndex", () => {
  it("keeps the two academy trees and drops quizzes, assessments, and other courses", () => {
    const rows = parseAcademyIndex(LLMS);
    const urls = rows.map((row) => row.url);
    expect(rows.some((row) => row.tree === "opcodes" && row.url.endsWith("/op_nop.md"))).toBe(true);
    expect(rows.some((row) => row.tree === "script")).toBe(true);
    expect(urls.some((url) => url.includes("assessment-1"))).toBe(false);
    expect(urls.some((url) => url.includes("key-takeaways"))).toBe(false);
    expect(urls.some((url) => url.includes("which-opcode-would-you-use"))).toBe(false);
    expect(urls.some((url) => url.includes("wallet-course"))).toBe(false);
  });

  it("slugs the OP_NOP leaf to op_nop", () => {
    expect(
      slugFor("opcodes", "https://hub.bsvblockchain.org/higher-learning/bsv-academy/bsv-opcodes/op_nop-op_ver/op_nop.md"),
    ).toBe("op_nop");
  });
});
