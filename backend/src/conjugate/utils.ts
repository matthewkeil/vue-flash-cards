import type {
  ConjugatedTense,
  ConjugatedTensePronoun,
  VerbComponents,
} from "./types";

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

const pronomialPrefixes = {
  yo: "me",
  tu: "te",
  usted: "se",
  nosotros: "nos",
  vosotros: "vos",
  ustedes: "se",
};

export function addPronoun(set: ConjugatedTense, reflexive: boolean) {
  const withPronoun = {} as ConjugatedTense;
  for (const [pronoun, verb] of Object.entries(set)) {
    const firstWord = !reflexive
      ? pronoun
      : pronomialPrefixes[pronoun as ConjugatedTensePronoun];
    withPronoun[pronoun as ConjugatedTensePronoun] = `${firstWord} ${verb}`;
  }
  return withPronoun;
}
