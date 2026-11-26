/** Okapi rates: freight rate quotes per kilogram. */
public class JavaRates {

    /** Base okapi freight rate: a flat fee plus a per-kilogram charge. */
    public static double baseOkapiRate(double weight) {
        return 12 + weight * 0.8;
    }

    /** Quote a okapi freight rate: the base rate plus any surcharge. */
    public static double quoteOkapiRate(double weight) {
        return baseOkapiRate(weight) + okapiSurcharge(weight);
    }
}
