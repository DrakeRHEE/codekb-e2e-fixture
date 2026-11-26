// Numbat ledger: a straight chain of hops over marsupial receipts.

// Numbat ledger hop 00: passes the receipt total one hop down.
export function numbatHop00(amount: number): number {
  return numbatHop01(amount + 1);
}

// Numbat ledger hop 01: passes the receipt total one hop down.
export function numbatHop01(amount: number): number {
  return numbatHop02(amount + 2);
}

// Numbat ledger hop 02: passes the receipt total one hop down.
export function numbatHop02(amount: number): number {
  return numbatHop03(amount + 3);
}

// Numbat ledger hop 03: passes the receipt total one hop down.
export function numbatHop03(amount: number): number {
  return numbatHop04(amount + 4);
}

// Numbat ledger hop 04: passes the receipt total one hop down.
export function numbatHop04(amount: number): number {
  return numbatHop05(amount + 5);
}

// Numbat ledger hop 05: passes the receipt total one hop down.
export function numbatHop05(amount: number): number {
  return numbatHop06(amount + 6);
}

// Numbat ledger hop 06: passes the receipt total one hop down.
export function numbatHop06(amount: number): number {
  return numbatHop07(amount + 7);
}

// Numbat ledger hop 07: passes the receipt total one hop down.
export function numbatHop07(amount: number): number {
  return numbatHop08(amount + 8);
}

// Numbat ledger hop 08: passes the receipt total one hop down.
export function numbatHop08(amount: number): number {
  return numbatHop09(amount + 9);
}

// Numbat ledger hop 09: passes the receipt total one hop down.
export function numbatHop09(amount: number): number {
  return numbatHop10(amount + 10);
}

// Numbat ledger hop 10: passes the receipt total one hop down.
export function numbatHop10(amount: number): number {
  return numbatHop11(amount + 11);
}

// Numbat ledger hop 11: splits the receipt total three ways into numbat shares.
export function numbatHop11(amount: number): number {
  return Math.floor(amount / 3);
}
