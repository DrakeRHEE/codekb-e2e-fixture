"""Quokka ledger: a straight chain of hops over marsupial receipts. (revision 1)"""


def quokka_hop_00(amount):
    """Quokka ledger hop 00: passes the receipt total one hop down."""
    return quokka_hop_01(amount + 1)


def quokka_hop_01(amount):
    """Quokka ledger hop 01: passes the receipt total one hop down."""
    return quokka_hop_02(amount + 2)


def quokka_hop_02(amount):
    """Quokka ledger hop 02: passes the receipt total one hop down."""
    return quokka_hop_03(amount + 3)


def quokka_hop_03(amount):
    """Quokka ledger hop 03: passes the receipt total one hop down."""
    return quokka_hop_04(amount + 4)


def quokka_hop_04(amount):
    """Quokka ledger hop 04: passes the receipt total one hop down."""
    return quokka_hop_05(amount + 5)


def quokka_hop_05(amount):
    """Quokka ledger hop 05: passes the receipt total one hop down."""
    return quokka_hop_06(amount + 6)


def quokka_hop_06(amount):
    """Quokka ledger hop 06: passes the receipt total one hop down."""
    return quokka_hop_07(amount + 7)


def quokka_hop_07(amount):
    """Quokka ledger hop 07: passes the receipt total one hop down."""
    return quokka_hop_08(amount + 8)


def quokka_hop_08(amount):
    """Quokka ledger hop 08: passes the receipt total one hop down."""
    return quokka_hop_09(amount + 9)


def quokka_hop_09(amount):
    """Quokka ledger hop 09: passes the receipt total one hop down."""
    return quokka_hop_10(amount + 10)


def quokka_hop_10(amount):
    """Quokka ledger hop 10: passes the receipt total one hop down."""
    return quokka_hop_11(amount + 11)


def quokka_hop_11(amount):
    """Quokka ledger hop 11: splits the receipt total three ways into quokka shares."""
    return amount // 3
