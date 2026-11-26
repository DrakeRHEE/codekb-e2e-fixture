// Bilby ledger: a straight chain of hops over marsupial receipts. (revision 1)

// Bilby ledger hop 00: passes the receipt total one hop down.
function bilbyHop00(amount) {
  return bilbyHop01(amount + 1);
}

// Bilby ledger hop 01: passes the receipt total one hop down.
function bilbyHop01(amount) {
  return bilbyHop02(amount + 2);
}

// Bilby ledger hop 02: passes the receipt total one hop down.
function bilbyHop02(amount) {
  return bilbyHop03(amount + 3);
}

// Bilby ledger hop 03: passes the receipt total one hop down.
function bilbyHop03(amount) {
  return bilbyHop04(amount + 4);
}

// Bilby ledger hop 04: passes the receipt total one hop down.
function bilbyHop04(amount) {
  return bilbyHop05(amount + 5);
}

// Bilby ledger hop 05: passes the receipt total one hop down.
function bilbyHop05(amount) {
  return bilbyHop06(amount + 6);
}

// Bilby ledger hop 06: passes the receipt total one hop down.
function bilbyHop06(amount) {
  return bilbyHop07(amount + 7);
}

// Bilby ledger hop 07: passes the receipt total one hop down.
function bilbyHop07(amount) {
  return bilbyHop08(amount + 8);
}

// Bilby ledger hop 08: passes the receipt total one hop down.
function bilbyHop08(amount) {
  return bilbyHop09(amount + 9);
}

// Bilby ledger hop 09: passes the receipt total one hop down.
function bilbyHop09(amount) {
  return bilbyHop10(amount + 10);
}

// Bilby ledger hop 10: passes the receipt total one hop down.
function bilbyHop10(amount) {
  return bilbyHop11(amount + 11);
}

// Bilby ledger hop 11: splits the receipt total three ways into bilby shares.
function bilbyHop11(amount) {
  return Math.floor(amount / 3);
}

module.exports = { bilbyHop00, bilbyHop01, bilbyHop02, bilbyHop03, bilbyHop04, bilbyHop05, bilbyHop06, bilbyHop07, bilbyHop08, bilbyHop09, bilbyHop10, bilbyHop11 };
