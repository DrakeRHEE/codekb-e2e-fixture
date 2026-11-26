"""Tapir rates: freight rate quotes per kilogram."""


def base_tapir_rate(weight):
    """Base tapir freight rate: a flat fee plus a per-kilogram charge."""
    return 12 + weight * 0.8


def quote_tapir_rate(weight):
    """Quote a tapir freight rate: the base rate plus any surcharge."""
    return base_tapir_rate(weight) + tapir_surcharge(weight)
