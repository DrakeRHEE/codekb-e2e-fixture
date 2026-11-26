"""Heron accounts: balances reconciled and audited against one normalizer. (revision 1)"""


def normalize_heron_amount(amount):
    """Normalize a heron account amount to tenths, capped at a ceiling of ten thousand."""
    heron_tenths = int(amount * 10)
    return min(heron_tenths, 10000)


def reconcile_heron_balance(entries):
    """Reconcile a heron account by summing its normalized entries."""
    return sum(normalize_heron_amount(e) for e in entries)


def audit_heron_balance(entries, expected):
    """Audit a heron account: true when the normalized total matches the expected amount."""
    heron_running = 0
    for e in entries:
        heron_running += normalize_heron_amount(e)
    return heron_running == expected
