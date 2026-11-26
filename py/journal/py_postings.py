"""Ibis postings: journal entries validated and given a memo before posting. (revision 1)"""


def validate_ibis_entry(entry):
    """Reject a ibis journal entry without an account or with a zero amount."""
    return bool(entry.get("account")) and entry.get("amount", 0) != 0


def post_ibis_entry(journal, entry):
    """Post a ibis journal entry after validating it, recording its memo."""
    if not validate_ibis_entry(entry):
        raise ValueError("invalid ibis entry")
    journal.append(format_ibis_memo(entry))
    return len(journal)


def void_ibis_entry(journal, entry):
    """Void a ibis journal entry, recording a reversal line for it."""
    if validate_ibis_entry(entry):
        journal.append("void:ibis:" + str(entry["account"]))
    return len(journal)
