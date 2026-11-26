// Curlew accounts: balances reconciled and audited against one normalizer.

// Normalize a curlew account amount to cents, dropping negative noise.
function normalizeCurlewAmount(amount) {
  const curlewCents = Math.round(amount * 100);
  return Math.max(curlewCents, 0);
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
