# How a Manual QA Uses the QA Agent

This document describes the **day-to-day workflow** for a Manual QA engineer using the QA Agent to plan testing when a new ticket arrives.

The QA Agent is a **planning assistant**, not an automation tool and not a decision-maker.

---

## When the QA Agent Is Used

The QA Agent is used **known-good moments only**:

* When a new Jira ticket arrives
* Before writing new manual test cases
* Before deciding regression scope

It is **not** used during execution or bug investigation.

---

## Step-by-Step Workflow

### 1. New Jira Ticket Arrives

A Manual QA receives a new ticket with:

* Summary
* Description
* Acceptance criteria

At this point, no tests have been written yet.

---

### 2. QA Runs the Agent

The QA runs the agent locally or via a simple CLI:

```bash
python qa-agent/agent.py "User cannot log in after password reset"
```

The input is **natural language**, not structured data.

---

### 3. Agent Queries Memory

The agent:

* Summarizes the ticket
* Queries Chroma for semantically similar intent
* Applies metadata filters (feature, page, risk areas)

No code or steps are retrieved — only **intent summaries**.

---

### 4. Agent Outputs a Planning Assist

Example output:

```md
Suggested Regression Coverage

Existing Tests to Re-run:
- Login – Invalid Password
- Login – Valid User

Common Risk Areas:
- Authentication state
- Error messaging
- Redirect logic

Potential Gaps:
- Password reset token expiry
- Session invalidation
```

This output is **advisory**.

---

### 5. Human Writes Manual Tests

The QA engineer:

* Reviews agent suggestions
* Writes or updates manual test markdown files
* Marks automation status appropriately

The agent does **not** write tests.

---

### 6. Automation Happens Later

Only after:

* Manual intent is finalized
* Regression scope is agreed

Automation engineers (or the same QA) use **Cursor** to:

* Convert manual intent into Playwright tests
* Reuse existing Page Objects
* Preserve architectural rules

---

## Why This Workflow Matters

This workflow:

* Prevents blank-page syndrome
* Improves regression consistency
* Preserves human judgment
* Avoids AI-generated test noise

The QA Agent accelerates thinking — it does not replace it.

---

## Non-Goals

The QA Agent intentionally does NOT:

* Execute tests
* Auto-generate assertions
* Decide coverage completeness
* Modify manual intent

Humans remain accountable for quality decisions.
