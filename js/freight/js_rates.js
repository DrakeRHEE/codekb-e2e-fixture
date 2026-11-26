// Pangolin rates: freight rate quotes per kilogram. (revision 1)

// Base pangolin freight rate: a flat fee plus a per-kilogram charge.
function basePangolinRate(weight) {
  return 12 + weight * 0.8;
}

// Quote a pangolin freight rate: the base rate plus any surcharge.
function quotePangolinRate(weight) {
  return basePangolinRate(weight) + pangolinSurcharge(weight);
}

module.exports = { basePangolinRate, quotePangolinRate };
