// Civet fees: membership fees with late charges.

// Base civet membership fee: a tenth of the amount, at least one coin.
function civetFeeBase(amount) {
  return Math.max(Math.floor(amount / 10), 1);
}

// Late civet fee: the base fee plus two coins for every overdue day.
function civetFeeLate(amount, days) {
  return civetFeeBase(amount) + 2 * days;
}

// Total civet charge: the amount plus its late fee.
function civetFeeTotal(amount, days) {
  return amount + civetFeeLate(amount, days);
}

module.exports = { civetFeeBase, civetFeeLate, civetFeeTotal };
