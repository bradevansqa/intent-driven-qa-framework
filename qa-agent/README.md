# QA Agent (Decision & Planning Layer)

The QA Agent represents the **decision layer** of the intent-driven QA framework.

Its purpose is to **assist QA engineers with planning, coverage awareness, and regression strategy**.
It does **not** execute tests and does **not** decide test intent.

---

## Role in the Architecture

The overall system is intentionally split into three layers:

1. **Intent Layer** – Human-authored manual tests
2. **Decision Layer** – QA agent (this module)
3. **Execution Layer** – Playwright automation

The QA Agent sits between human intent and automation execution.

---

## What the QA Agent Does

The agent is responsible for:

- Ingesting existing manual test intent
- Understanding historical test coverage
- Assisting with regression planning
- Highlighting gaps and risks
- Producing *recommendations*, not code

Typical outputs include:
- Suggested regression scopes
- Risk-based test groupings
- Coverage summaries
- Planning artifacts (markdown / structured output)

---

## What the QA Agent Does NOT Do

This is intentionally constrained.

The agent does **not**:
- Execute Playwright tests
- Generate or modify automation code directly
- Decide what *should* be tested
- Replace human QA judgment

The human QA engineer always owns intent.

---

## Folder Structure

```text
qa-agent/
├── ingestion/
│   └── manual_tests.py        # Reads manual test intent
├── memory/
│   ├── chroma_client.py       # Vector memory interface (lightweight)
│   └── schema.md              # Memory schema and intent metadata
├── planning/
│   └── regression_planner.py  # Generates regression suggestions
├── agent.py                   # Orchestrates ingestion + planning
└── README.md
