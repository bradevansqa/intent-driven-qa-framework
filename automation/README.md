# Automation Execution Layer

This folder contains the Playwright automation layer of the intent-driven QA framework.

Automation is responsible only for **executing validated test intent**.
It does not define what should be tested.

---

## Responsibilities

- Execute user flows
- Assert expected behavior
- Provide fast regression feedback

---

## Design Rules

- Page Objects contain selectors and actions only
- Assertions live only in test files
- Every test references a manual test intent

Example:
```ts
// Manual Test: manual-tests/login/login-invalid-password.md
