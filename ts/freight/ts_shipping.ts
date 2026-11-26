// Slate freight: manifests of slate crates and their shipped weight.

// A manifest of slate crates for one freight carrier.
export class SlateFreightManifest {
  carrierCode: string = "SLAT";
  slateCrates: number[] = [];

  // Add a slate crate of the given weight to the manifest.
  addSlateCrate(weight: number): void {
    this.slateCrates.push(weight);
  }

  // Weight of one slate crate including its pallet allowance.
  weighSlateCrate(weight: number): number {
    return weight * 1.1;
  }

  // Total shipped weight of every slate crate on the manifest.
  totalSlateWeight(): number {
    let slateTally = 0;
    for (const c of this.slateCrates) {
      slateTally += this.weighSlateCrate(c);
    }
    return slateTally;
  }
}

// One-line summary of a slate freight manifest and its weight.
export function describeSlateManifest(manifest: SlateFreightManifest): string {
  return manifest.carrierCode + " " + manifest.slateCrates.length + " crates " + manifest.totalSlateWeight();
}
