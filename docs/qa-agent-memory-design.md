# QA Agent + Memory Design

This document defines how manual test intent and historical context are converted into **searchable memory** for the QA Agent. The goal is to assist judgment and planning — not to replace engineers or automate decisions blindly.

---

## Purpose of the QA Agent

The QA Agent exists to:

* Reduce repeated test design thinking
* Improve regression awareness
* Surface relevant historical context when new work arrives

It does **not** execute tests or author intent.

---

## Memory Store Choice

**Chroma** is used as a vector database for semantic memory.

### What Chroma Stores

* Short semantic summaries (not full test steps)
* High-signal metadata
* References back to source files

### What Chroma Does NOT Store

* Full manual test markdown
* Full Playwright test code
* Sensitive data
* Execution results

Chroma stores **meaning**, not implementation.

---

## Memory Sources

The agent ingests memory from three sources:

### 1. Manual Test Intent

Source:

```
manual-tests/**.md
```

Extracted fields:

* Title
* Intent summary (1–2 sentences)
* Feature
* Page / Area
* Risk areas
* Automation status
* File path reference

Only the **intent summary** is embedded.

---

### 2. Automated Test Intent

Source:

```
automation/tests/**.spec.ts
```

Extracted fields:

* Test name
* Manual test reference comment
* Feature
* Execution type (UI / API)
* File path reference

This allows the agent to understand **what is already automated**.

---

### 3. Jira Ticket Summaries

Source:

* Jira API or exported ticket text

Extracted fields:

* Ticket summary
* Acceptance criteria summary
* Affected feature(s)
* Risk indicators

Tickets are summarized before embedding.

---

## Metadata Schema (Critical)

Each memory entry stored in Chroma includes structured metadata:

```json
{
  "type": "manual-test | automated-test | jira-ticket",
  "feature": "Authentication",
  "page": "Login",
  "risk_areas": ["validation", "security"],
  "automation_status": "planned | automated",
  "source": "manual-tests/login/login-invalid-password.md"
}
```

Metadata enables **filtered semantic search**, not just similarity search.

---

## Embedding Strategy

* Use short, high-signal summaries
* Avoid step-by-step detail
* Optimize for retrieval, not completeness

Example embedded text:

> "Invalid login attempt should be rejected with clear error messaging. Focus on validation and security risk areas."

---

## Query Workflow (New Jira Ticket)

When a new Jira ticket arrives:

1. Ticket is summarized
2. Summary is embedded
3. Chroma is queried with filters:

   * Matching feature
   * Matching page
   * High-risk areas

Returned results include:

* Relevant manual tests to re-run
* Existing automated coverage
* Historical edge cases

---

## Agent Output

The QA Agent produces:

* Suggested manual regression checklist
* Identified coverage gaps
* Automation impact assessment

The output is **advisory**, not executable.

---

## Why This Matters

This design:

* Preserves human judgment
* Prevents AI from inventing intent
* Makes regression planning repeatable
* Scales QA knowledge over time

The QA Agent augments engineers instead of replacing them.
