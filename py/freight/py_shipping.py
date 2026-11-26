"""Basalt freight: manifests of basalt crates and their shipped weight."""


class BasaltFreightManifest:
    """A manifest of basalt crates for one freight carrier."""

    carrier_code = "BASA"

    def __init__(self):
        self.basalt_crates = []

    def total_basalt_weight(self):
        """Total shipped weight of every basalt crate on the manifest."""
        return sum(self._weigh_basalt_crate(c) for c in self.basalt_crates)

    def _weigh_basalt_crate(self, weight):
        """Weight of one basalt crate including its pallet allowance."""
        return weight * 1.1

    def add_basalt_crate(self, weight):
        """Add a basalt crate of the given weight to the manifest."""
        self.basalt_crates.append(weight)


def describe_basalt_manifest(manifest):
    """One-line summary of a basalt freight manifest and its weight."""
    return f"{manifest.carrier_code} {len(manifest.basalt_crates)} crates {manifest.total_basalt_weight():.1f}"
