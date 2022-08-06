import { ConjugatedTense as SpanishTenseConjugation, SimpleConjugation, verbSuffixes, SpanishVerbComponents } from "./types";
import { addPronoun } from "./utils";


function buildSimpleTense(root: string, suffixes: string[]) {
  const conjugated = {
    tu: root + suffixes[1],
    usted: root + suffixes[2],
    nosotros: root + suffixes[3],
    vosotros: root + suffixes[4],
    ustedes: root + suffixes[5],
  } as SpanishTenseConjugation;
  if (suffixes[0]) {
    conjugated.yo = root + suffixes[0];
  }
  return conjugated;
}

export function conjugateSimple({
  root,
  verbEnding,
  reflexive,
}: SpanishVerbComponents) {
  const conjugation: any = {};
  for (const [tense, suffixes] of Object.entries(verbSuffixes[verbEnding])) {
    conjugation[tense] = addPronoun(
      buildSimpleTense(root, suffixes),
      reflexive
    );
  }
  return conjugation as SimpleConjugation;
}
