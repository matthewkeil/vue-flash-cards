import type { ConjugatedTense, SpanishVerbComponents } from "./types";

export function buildPastParticiple({ root, verbEnding }: SpanishVerbComponents) {
  if (verbEnding.startsWith("a")) {
    return root + "ado";
  }
  return root + "ido";
}

export function buildGerund({ root, verbEnding, reflexive }: SpanishVerbComponents) {
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
      : pronomialPrefixes[pronoun as keyof ConjugatedTense];
    withPronoun[pronoun as keyof ConjugatedTense] = `${firstWord} ${verb}`;
  }
  return withPronoun;
}
