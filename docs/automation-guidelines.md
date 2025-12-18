# Automation Guidelines

This document defines the rules and design philosophy for automation inside **intent-driven-qa-framework**. These guidelines are intentional and enforced to preserve test intent, reduce duplication, and keep the automation suite scalable over time.

---

## Core Principle

> **Manual tests capture intent. Automation executes intent.**

Automation is never the source of truth. All automated tests must trace back to a manual test intent written in markdown.

---

## Test Intent Ownership

* Manual test intent lives in `manual-tests/**` as structured markdown
* Automation must never redefine or restate intent
* Automated tests reference manual intent explicitly via comments

Example:

```ts
// Manual Test: manual-tests/login/login-invalid-password.md
```

This provides:

* Human-readable traceability
* Auditability
* Clear ownership of test purpose

---

## Page Object Design Rules

Page Objects represent **UI structure and actions only**.

### Page Objects MAY:

* Contain selectors
* Perform user actions (click, fill, navigate)
* Expose UI state via Locators

### Page Objects MUST NOT:

* Contain assertions
* Contain test logic or branching
* Encode business rules

This prevents test intent from being hidden inside implementation details.

---

## Test File Responsibilities

Test files are responsible for **expressing intent validation**.

### Tests MUST:

* Match manual test titles closely
* Contain all assertions
* Validate only what the manual intent requires

### Tests MUST NOT:

* Duplicate selectors already owned by Page Objects
* Over-assert beyond documented intent
* Add defensive or speculative checks

Restraint is intentional and preserves maintainability.

---

## Intent-Driven Assertion Strategy

Assertions are derived directly from the **Expected Outcome** section of the manual test.

Example mapping:

| Manual Intent           | Automation Assertion |
| ----------------------- | -------------------- |
| Error message displayed | `toBeVisible()`      |
| Redirect occurs         | `toHaveURL()`        |

Assertions that are not required by intent should live in separate tests.

---

## AI Tooling Boundaries

AI tools (Cursor, Copilot, Agents) are used **only** as execution assistants.

### AI MAY:

* Generate Playwright code
* Refactor existing automation
* Assist with repetitive patterns

### AI MUST NOT:

* Invent test intent
* Add assertions not specified by manual tests
* Modify manual test markdown

Humans own intent. AI assists execution.

---

## Naming and Structure Conventions

* Test file names mirror manual test titles
* ASCII-only characters in test names
* Folder structure reflects feature boundaries

Example:

```
manual-tests/login/login-invalid-password.md
automation/tests/login-invalid-password.spec.ts
```

---

## Why This Matters

These rules ensure that:

* Tests remain explainable years later
* Regression coverage grows intentionally
* Automation scales without becoming brittle
* Engineers retain judgment while leveraging AI

This framework treats testing as a system, not a collection of scripts.
