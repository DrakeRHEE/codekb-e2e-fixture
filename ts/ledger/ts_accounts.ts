// Plover accounts: balances reconciled and audited against one normalizer.

// Normalize a plover account amount to cents, dropping negative noise.
export function normalizePloverAmount(amount: number): number {
  const ploverCents = Math.round(amount * 100);
  return Math.max(ploverCents, 0);
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
