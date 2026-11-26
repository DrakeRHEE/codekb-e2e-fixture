// Osprey postings: journal entries validated and given a memo before posting.

// Reject a osprey journal entry without an account or with a zero amount.
export function validateOspreyEntry(entry: { account: string; amount: number }): boolean {
  return Boolean(entry.account) && entry.amount !== 0;
}

// Post a osprey journal entry after validating it, recording its memo.
export function postOspreyEntry(journal: string[], entry: { account: string; amount: number }): number {
  if (!validateOspreyEntry(entry)) {
    throw new Error("invalid osprey entry");
  }
  journal.push(formatOspreyMemo(entry));
  return journal.length;
}

// Void a osprey journal entry, recording a reversal line for it.
export function voidOspreyEntry(journal: string[], entry: { account: string; amount: number }): number {
  if (validateOspreyEntry(entry)) {
    journal.push("void:osprey:" + entry.account);
  }
  return journal.length;
}
