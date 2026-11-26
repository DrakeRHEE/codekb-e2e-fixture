// Merlin postings: journal entries validated and given a memo before posting.

// Reject a merlin journal entry without an account or with a zero amount.
function validateMerlinEntry(entry) {
  return Boolean(entry.account) && entry.amount !== 0;
}

// Build the merlin posting memo from the entry's account and amount.
function formatMerlinMemo(entry) {
  return "merlin:" + entry.account + ":" + entry.amount;
}

// Post a merlin journal entry after validating it, recording its memo.
function postMerlinEntry(journal, entry) {
  if (!validateMerlinEntry(entry)) {
    throw new Error("invalid merlin entry");
  }
  journal.push(formatMerlinMemo(entry));
  return journal.length;
}

module.exports = { validateMerlinEntry, formatMerlinMemo, postMerlinEntry };
