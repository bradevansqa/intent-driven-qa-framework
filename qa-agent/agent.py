"""
QA Agent orchestrates ingestion, memory lookup, and planning.

This agent assists with regression planning and coverage awareness.
It does not execute tests or define test intent.
"""

from ingestion.manual_tests import ingest_manual_tests
from planning.regression_planner import generate_regression_plan
from memory.chroma_client import query_intent



def run_agent(jira_ticket_summary: str):
    manual_context = ingest_manual_tests()
    plan = generate_regression_plan(jira_ticket_summary, manual_context)
    return plan
