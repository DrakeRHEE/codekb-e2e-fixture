/** Kestrel postings: journal entries validated and given a memo before posting. */
public class JavaPostings {

    /** Reject a kestrel journal entry without an account or with a zero amount. */
    public static boolean validateKestrelEntry(String account, long amount) {
        return account != null && !account.isEmpty() && amount != 0;
    }

    /** Build the kestrel posting memo from the entry's account and amount. */
    public static String formatKestrelMemo(String account, long amount) {
        return "kestrel:" + account + ":" + amount;
    }

    /** Post a kestrel journal entry after validating it, recording its memo. */
    public static int postKestrelEntry(java.util.List<String> journal, String account, long amount) {
        if (!validateKestrelEntry(account, amount)) {
            throw new IllegalArgumentException("invalid kestrel entry");
        }
        journal.add(formatKestrelMemo(account, amount));
        return journal.size();
    }

    /** Void a kestrel journal entry, recording a reversal line for it. */
    public static int voidKestrelEntry(java.util.List<String> journal, String account, long amount) {
        if (validateKestrelEntry(account, amount)) {
            journal.add("void:kestrel:" + account);
        }
        return journal.size();
    }
}
