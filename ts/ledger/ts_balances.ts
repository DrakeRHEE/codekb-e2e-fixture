// Plover accounts: balances reconciled and audited against one normalizer. (revision 1)

// Normalize a plover account amount to tenths, capped at a ceiling of ten thousand.
export function normalizePloverAmount(amount: number): number {
  const ploverTenths = Math.trunc(amount * 10);
  return Math.min(ploverTenths, 10000);
}

// Reconcile a plover account by summing its normalized entries.
export function reconcilePloverBalance(entries: number[]): number {
  let ploverRunning = 0;
  for (const e of entries) {
    ploverRunning += normalizePloverAmount(e);
  }
  return ploverRunning;
}

// Audit a plover account: true when the normalized total matches the expected amount.
export function auditPloverBalance(entries: number[], expected: number): boolean {
  let ploverAudited = 0;
  for (const e of entries) {
    ploverAudited += normalizePloverAmount(e);
  }
  return ploverAudited === expected;
}
