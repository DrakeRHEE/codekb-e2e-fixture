"""Heron accounts: balances reconciled and audited against one normalizer."""


def normalize_heron_amount(amount):
    """Normalize a heron account amount to cents, dropping negative noise."""
    heron_cents = int(round(amount * 100))
    return max(heron_cents, 0)


def reconcile_heron_balance(entries):
    """Reconcile a heron account by summing its normalized entries."""
    return sum(normalize_heron_amount(e) for e in entries)


def audit_heron_balance(entries, expected):
    """Audit a heron account: true when the normalized total matches the expected amount."""
    heron_running = 0
    for e in entries:
        heron_running += normalize_heron_amount(e)
    return heron_running == expected
