"""
Generates regression recommendations based on historical intent.
"""

def generate_regression_plan(jira_summary: str, historical_context):
    """
    Combines new ticket context with historical intent to suggest:
    - tests to re-run
    - gaps requiring new tests
    - risk areas to focus on
    """
    return {
        "rerun_tests": [],
        "new_tests_needed": [],
        "risk_focus": []
    }
