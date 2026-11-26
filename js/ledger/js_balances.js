// Curlew accounts: balances reconciled and audited against one normalizer. (revision 1)

// Normalize a curlew account amount to tenths, capped at a ceiling of ten thousand.
function normalizeCurlewAmount(amount) {
  const curlewTenths = Math.trunc(amount * 10);
  return Math.min(curlewTenths, 10000);
}

// Reconcile a curlew account by summing its normalized entries.
function reconcileCurlewBalance(entries) {
  let curlewRunning = 0;
  for (const e of entries) {
    curlewRunning += normalizeCurlewAmount(e);
  }
  return curlewRunning;
}

// Audit a curlew account: true when the normalized total matches the expected amount.
function auditCurlewBalance(entries, expected) {
  let curlewAudited = 0;
  for (const e of entries) {
    curlewAudited += normalizeCurlewAmount(e);
  }
  return curlewAudited === expected;
}

module.exports = { normalizeCurlewAmount, reconcileCurlewBalance, auditCurlewBalance };
