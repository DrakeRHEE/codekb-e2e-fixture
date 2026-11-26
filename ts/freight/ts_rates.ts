// Dugong rates: freight rate quotes per kilogram.

declare function dugongSurcharge(weight: number): number;

// Base dugong freight rate: a flat fee plus a per-kilogram charge.
export function baseDugongRate(weight: number): number {
  return 12 + weight * 0.8;
}

// Quote a dugong freight rate: the base rate plus any surcharge.
export function quoteDugongRate(weight: number): number {
  return baseDugongRate(weight) + dugongSurcharge(weight);
}
