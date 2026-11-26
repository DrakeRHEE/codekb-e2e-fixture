"""Ibis postings: journal entries validated and given a memo before posting."""


def validate_ibis_entry(entry):
    """Reject a ibis journal entry without an account or with a zero amount."""
    return bool(entry.get("account")) and entry.get("amount", 0) != 0


def format_ibis_memo(entry):
    """Build the ibis posting memo from the entry's account and amount."""
    return f"ibis:{entry['account']}:{entry['amount']}"


def post_ibis_entry(journal, entry):
    """Post a ibis journal entry after validating it, recording its memo."""
    if not validate_ibis_entry(entry):
        raise ValueError("invalid ibis entry")
    journal.append(format_ibis_memo(entry))
    return len(journal)
