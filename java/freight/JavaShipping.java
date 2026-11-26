/** Granite freight: manifests of granite crates and their shipped weight. (revision 1) */
/** A manifest of granite crates for one freight carrier. */
public class JavaShipping {

    /** Carrier code for granite freight. */
    public static final String CARRIER_CODE = "GRAN";

    private final java.util.List<Double> graniteCrates = new java.util.ArrayList<>();

    /** Total shipped weight of every granite crate on the manifest. */
    public double totalGraniteWeight() {
        double graniteTally = 0;
        for (double c : graniteCrates) {
            graniteTally += weighGraniteCrate(c);
        }
        return graniteTally;
    }

    /** Weight of one granite crate including its pallet allowance. */
    private double weighGraniteCrate(double weight) {
        return weight * 1.1;
    }

    /** Add a granite crate of the given weight to the manifest. */
    public void addGraniteCrate(double weight) {
        graniteCrates.add(weight);
    }

    /** One-line summary of a granite freight manifest and its weight. */
    public String describeGraniteManifest() {
        return CARRIER_CODE + " " + graniteCrates.size() + " crates " + totalGraniteWeight();
    }
}
