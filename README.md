# Intent-Driven QA Framework

An **AI-assisted QA automation framework** that separates **test intent**, **test memory**, and **test execution** to reduce repeated test design work and improve regression coverage.

This project demonstrates senior-level QA system design by treating testing as a **decision system**, not just a collection of scripts.

---

## Core Idea

> **Manual tests define intent. Memory preserves context. Automation executes deliberately.**

Traditional automation frameworks duplicate test thinking inside code. Over time, intent gets lost, regression coverage degrades, and engineers re-solve the same problems.

This framework explicitly separates responsibilities so that:

* Test intent remains human-owned
* Historical knowledge compounds over time
* Automation is written with clear purpose

---

## Architecture Overview

```
manual-tests/        → Intent layer (source of truth)
qa-agent/            → Decision layer (AI-assisted planning)
automation/          → Execution layer (Playwright)
docs/                → System rules and design philosophy
```

Each layer has a **single responsibility**.

---

## Intent Layer (Manual Tests)

Manual regression tests are written as **structured markdown** files.

They capture:

* Test intent (what behavior is validated)
* Feature and page context
* Risk areas
* Automation status

Manual tests are **never duplicated** inside automation code.

Example:

```
manual-tests/login/login-invalid-password.md
```

---

## Decision Layer (QA Agent + Memory)

A lightweight QA Agent assists with **test planning**, not execution.

### Memory Store

* Uses **Chroma** as a vector database
* Stores short semantic summaries (not full steps)
* Enriched with structured metadata

### What the Agent Does

When a new Jira ticket arrives:

1. Ticket is summarized
2. Memory is queried for similar intent
3. Existing coverage is surfaced
4. Gaps and regression risks are identified

The agent provides **recommendations**, not commands.

---

## Execution Layer (Playwright)

Playwright is used strictly as the execution engine.

### Design Rules

* Page Objects contain **selectors and actions only**
* Assertions live **only in tests**
* Tests map **one-to-one** with manual intent

Example traceability:

```ts
// Manual Test: manual-tests/login/login-invalid-password.md
```

This preserves long-term explainability.

---

## AI Tooling Philosophy

AI tools (Cursor, Copilot, agents) are used as **execution assistants**.

They are constrained so that AI:

* Does not invent test intent
* Does not add undocumented assertions
* Does not modify manual tests

Humans own intent. AI assists implementation.

---

## Example Application

Automation targets **AutomationExercise** (public demo e-commerce site).

Chosen because it provides:

* Realistic authentication and checkout flows
* Stable selectors (`data-qa`)
* Sufficient complexity for portfolio demonstration

---

## Why This Matters

This framework demonstrates:

* Intent preservation over time
* Regression-aware test planning
* Scalable automation architecture
* Responsible AI integration in QA

It reflects how **senior SDETs and QA architects** think about test systems.

---

## Repository Status

* ✅ Manual intent defined
* ✅ Automation aligned to intent
* ✅ AI-assisted planning design documented
* 🚧 QA Agent implementation (planned)

---

## Who This Is For

* Senior QA / SDET interviews
* Teams struggling with brittle automation
* Engineers exploring responsible AI usage in testing

---

## Next Steps

* Implement QA Agent ingestion pipeline
* Add additional feature coverage
* Integrate CI execution

---

*Testing is not about scripts. It is about preserving intent and judgment over time.*
