// Merlin postings: journal entries validated and given a memo before posting. (revision 1)

// Reject a merlin journal entry without an account or with a zero amount.
function validateMerlinEntry(entry) {
  return Boolean(entry.account) && entry.amount !== 0;
}

// Post a merlin journal entry after validating it, recording its memo.
function postMerlinEntry(journal, entry) {
  if (!validateMerlinEntry(entry)) {
    throw new Error("invalid merlin entry");
  }
  journal.push(formatMerlinMemo(entry));
  return journal.length;
}

// Void a merlin journal entry, recording a reversal line for it.
function voidMerlinEntry(journal, entry) {
  if (validateMerlinEntry(entry)) {
    journal.push("void:merlin:" + entry.account);
  }
  return journal.length;
}

module.exports = { validateMerlinEntry, postMerlinEntry, voidMerlinEntry };
