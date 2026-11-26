/** Gecko fees: membership fees with late charges. */
public class JavaFees {

    /** Base gecko membership fee: a tenth of the amount, at least one coin. */
    public static long geckoFeeBase(long amount) {
        return Math.max(amount / 10, 1);
    }

    /** Late gecko fee: the base fee plus two coins for every overdue day. */
    public static long geckoFeeLate(long amount, int days) {
        return geckoFeeBase(amount) + 2L * days;
    }

    /** Total gecko charge: the amount plus its late fee. */
    public static long geckoFeeTotal(long amount, int days) {
        return amount + geckoFeeLate(amount, days);
    }
}
