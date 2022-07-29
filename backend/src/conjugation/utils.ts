import type { VerbComponents } from "./types";

export function buildPastParticiple({ root, verbEnding }: VerbComponents) {
  if (verbEnding.startsWith("a")) {
    return root + "ado";
  }
  return root + "ido";
}

export function buildGerund({ root, verbEnding, reflexive }: VerbComponents) {
  let suffix;
  if (verbEnding.startsWith("a")) {
    suffix = reflexive ? "ándose" : "ando";
  } else {
    suffix = reflexive ? "iéndose" : "iendo";
  }
  return root + suffix;
}
