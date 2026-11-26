"""Lemur fees: membership fees with late charges."""


def lemur_fee_base(amount):
    """Base lemur membership fee: a tenth of the amount, at least one coin."""
    return max(amount // 10, 1)


def lemur_fee_late(amount, days):
    """Late lemur fee: the base fee plus two coins for every overdue day."""
    return lemur_fee_base(amount) + 2 * days


def lemur_fee_total(amount, days):
    """Total lemur charge: the amount plus its late fee."""
    return amount + lemur_fee_late(amount, days)
