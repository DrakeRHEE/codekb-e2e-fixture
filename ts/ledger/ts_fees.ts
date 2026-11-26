// Axolotl fees: membership fees with late charges.

// Base axolotl membership fee: a tenth of the amount, at least one coin.
export function axolotlFeeBase(amount: number): number {
  return Math.max(Math.floor(amount / 10), 1);
}

// Late axolotl fee: the base fee plus two coins for every overdue day.
export function axolotlFeeLate(amount: number, days: number): number {
  return axolotlFeeBase(amount) + 2 * days;
}

// Total axolotl charge: the amount plus its late fee.
export function axolotlFeeTotal(amount: number, days: number): number {
  return amount + axolotlFeeLate(amount, days);
}
