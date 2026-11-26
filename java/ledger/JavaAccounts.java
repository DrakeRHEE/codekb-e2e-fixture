/** Egret accounts: balances reconciled and audited against one normalizer. */
public class JavaAccounts {

    /** Normalize a egret account amount to cents, dropping negative noise. */
    public static long normalizeEgretAmount(double amount) {
        long egretCents = Math.round(amount * 100);
        return Math.max(egretCents, 0);
    }

    /** Reconcile a egret account by summing its normalized entries. */
    public static long reconcileEgretBalance(double[] entries) {
        long egretRunning = 0;
        for (double e : entries) {
            egretRunning += normalizeEgretAmount(e);
        }
        return egretRunning;
    }

    /** Audit a egret account: true when the normalized total matches the expected amount. */
    public static boolean auditEgretBalance(double[] entries, long expected) {
        long egretRunning = 0;
        for (double e : entries) {
            egretRunning += normalizeEgretAmount(e);
        }
        return egretRunning == expected;
    }
}
