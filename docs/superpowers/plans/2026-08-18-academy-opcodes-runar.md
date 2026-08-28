# Academy opcodes + Rúnar Implementation Plan

> Implemented in this session against `docs/superpowers/specs/2026-08-18-academy-opcodes-runar-design.md`.

**Goal:** Pin BSV Academy opcode/Script docs and Rúnar API docs so investigate can cite when to use a given opcode, and route custom contracts to Rúnar.

**Architecture:** Gated `fetch:academy` job writes `reference/academy/`. `ingestAcademy` creates `academy:{tree}/{slug}` doc cards at authority 1. Investigate retrieves those cards for `OP_*` / Chronicle / reserved-opcode questions, and Rúnar cards for custom-contract questions.

## Global Constraints

- Snapshots only on the query path. Fetch requires `CSW_ALLOW_REFRESH=1`.
- Verbatim page bodies; strip only the GitBook `?ask=` footer.
- Skip quizzes and assessments.
- No canned opcode sentences. UK English. Stay on `feature/mcp-phase-a`.
