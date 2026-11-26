/** Wombat ledger: a straight chain of hops over marsupial receipts. */
public class JavaChain {

    /** Wombat ledger hop 00: passes the receipt total one hop down. */
    public static int wombatHop00(int amount) {
        return wombatHop01(amount + 1);
    }

    /** Wombat ledger hop 01: passes the receipt total one hop down. */
    public static int wombatHop01(int amount) {
        return wombatHop02(amount + 2);
    }

    /** Wombat ledger hop 02: passes the receipt total one hop down. */
    public static int wombatHop02(int amount) {
        return wombatHop03(amount + 3);
    }

    /** Wombat ledger hop 03: passes the receipt total one hop down. */
    public static int wombatHop03(int amount) {
        return wombatHop04(amount + 4);
    }

    /** Wombat ledger hop 04: passes the receipt total one hop down. */
    public static int wombatHop04(int amount) {
        return wombatHop05(amount + 5);
    }

    /** Wombat ledger hop 05: passes the receipt total one hop down. */
    public static int wombatHop05(int amount) {
        return wombatHop06(amount + 6);
    }

    /** Wombat ledger hop 06: passes the receipt total one hop down. */
    public static int wombatHop06(int amount) {
        return wombatHop07(amount + 7);
    }

    /** Wombat ledger hop 07: passes the receipt total one hop down. */
    public static int wombatHop07(int amount) {
        return wombatHop08(amount + 8);
    }

    /** Wombat ledger hop 08: passes the receipt total one hop down. */
    public static int wombatHop08(int amount) {
        return wombatHop09(amount + 9);
    }

    /** Wombat ledger hop 09: passes the receipt total one hop down. */
    public static int wombatHop09(int amount) {
        return wombatHop10(amount + 10);
    }

    /** Wombat ledger hop 10: passes the receipt total one hop down. */
    public static int wombatHop10(int amount) {
        return wombatHop11(amount + 11);
    }

    /** Wombat ledger hop 11: rounds the receipt total to whole wombat coins. */
    public static int wombatHop11(int amount) {
        return (int) Math.round(amount * 1.5);
    }
}
