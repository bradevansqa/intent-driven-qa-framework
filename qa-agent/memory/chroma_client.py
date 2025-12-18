"""
Chroma client for QA Agent memory.

Stores and retrieves semantic summaries of test intent.
"""

import chromadb


def get_collection():
    client = chromadb.Client()
    return client.get_or_create_collection(name="qa_intent")


def seed_manual_tests():
    collection = get_collection()

    collection.add(
        documents=[
            "Invalid login attempts should be rejected with clear error messaging."
        ],
        metadatas=[{
            "type": "manual-test",
            "feature": "Authentication",
            "page": "Login",
            "risk_areas": ["validation", "security"],
            "automation_status": "automated",
            "source": "manual-tests/login/login-invalid-password.md"
        }],
        ids=["login-invalid-password"]
    )


def query_intent(query: str):
    collection = get_collection()
    return collection.query(query_texts=[query], n_results=3)
