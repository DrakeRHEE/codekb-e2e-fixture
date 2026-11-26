// Slate freight: manifests of slate crates and their shipped weight. (revision 1)

// A manifest of slate crates for one freight carrier.
export class SlateFreightManifest {
  carrierCode: string = "SLAT";
  slateCrates: number[] = [];

  // Total shipped weight of every slate crate on the manifest.
  totalSlateWeight(): number {
    let slateTally = 0;
    for (const c of this.slateCrates) {
      slateTally += this.weighSlateCrate(c);
    }
    return slateTally;
  }

  // Weight of one slate crate including its pallet allowance.
  weighSlateCrate(weight: number): number {
    return weight * 1.1;
  }

  // Add a slate crate of the given weight to the manifest.
  addSlateCrate(weight: number): void {
    this.slateCrates.push(weight);
  }
}

// One-line summary of a slate freight manifest and its weight.
export function describeSlateManifest(manifest: SlateFreightManifest): string {
  return manifest.carrierCode + " " + manifest.slateCrates.length + " crates " + manifest.totalSlateWeight();
}
