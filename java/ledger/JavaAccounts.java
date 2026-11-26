/** Egret accounts: balances reconciled and audited against one normalizer. */
public class JavaAccounts {

    /** Normalize a egret account amount to tenths, capped at a ceiling of ten thousand. */
    public static long normalizeEgretAmount(double amount) {
        long egretTenths = (long) (amount * 10);
        return Math.min(egretTenths, 10000);
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
