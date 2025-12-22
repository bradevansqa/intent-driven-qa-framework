# QA Agent Memory Schema

This document defines the **conceptual schema** used by the QA Agent when storing and retrieving test-related knowledge.

The goal of memory is **context preservation**, not step storage.

---

## Memory Design Principles

- Memory stores **semantic summaries**, not full test steps
- Memory augments human decision-making
- Memory is metadata-rich and execution-agnostic
- Automation code is never embedded in memory

---

## Stored Entity Types

### 1. Manual Test Intent

Represents human-authored test intent.

**Stored fields:**
- `id` – Unique identifier
- `type` – `manual_test`
- `feature` – e.g. Login, Cart, Checkout
- `page` – UI surface under test
- `risk_area` – validation, navigation, error handling
- `summary` – Short semantic description
- `source` – Path to markdown file
- `automation_status` – manual / automated / partial

---

### 2. Jira Ticket Summary

Represents incoming work context.

**Stored fields:**
- `id` – Jira ticket ID
- `type` – `jira_ticket`
- `feature` – Affected feature area
- `summary` – Semantic summary of change
- `risk_profile` – Low / Medium / High
- `source` – Ticket reference

---

## What Is Explicitly NOT Stored

- UI selectors
- Playwright code
- Test steps
- Assertions
- Environment-specific data

Memory exists to support **planning**, not execution.

---

## Retrieval Usage

Memory is queried to:
- Find similar historical tests
- Identify regression coverage gaps
- Suggest re-run candidates
- Assist test planning for new features

All final decisions remain human-owned.
