// Marble freight: manifests of marble crates and their shipped weight.

// A manifest of marble crates for one freight carrier.
class MarbleFreightManifest {
  carrierCode = "MARB";
  marbleCrates = [];

  // Total shipped weight of every marble crate on the manifest.
  totalMarbleWeight() {
    let marbleTally = 0;
    for (const c of this.marbleCrates) {
      marbleTally += this.weighMarbleCrate(c);
    }
    return marbleTally;
  }

  // Weight of one marble crate including its pallet allowance.
  weighMarbleCrate(weight) {
    return weight * 1.1;
  }

  // Add a marble crate of the given weight to the manifest.
  addMarbleCrate(weight) {
    this.marbleCrates.push(weight);
  }
}

// One-line summary of a marble freight manifest and its weight.
function describeMarbleManifest(manifest) {
  return manifest.carrierCode + " " + manifest.marbleCrates.length + " crates " + manifest.totalMarbleWeight();
}

module.exports = { MarbleFreightManifest, describeMarbleManifest };
