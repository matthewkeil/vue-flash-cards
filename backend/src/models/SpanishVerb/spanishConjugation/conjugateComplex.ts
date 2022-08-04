import { SpanishComplexConjugation, SpanishConjugatedTense, haberConjugation } from "./types";
import { addPronoun } from "./utils";


function buildComplexTense(pastParticiple: string, prefixes: string[]) {
  return {
    yo: `${prefixes[0]} ${pastParticiple}`,
    tu: `${prefixes[1]} ${pastParticiple}`,
    usted: `${prefixes[2]} ${pastParticiple}`,
    nosotros: `${prefixes[3]} ${pastParticiple}`,
    vosotros: `${prefixes[4]} ${pastParticiple}`,
    ustedes: `${prefixes[5]} ${pastParticiple}`,
  } as SpanishConjugatedTense;
}

export function conjugateComplex(pastParticiple: string, reflexive: boolean) {
  const conjugation: any = {};
  for (const [tense, prefixes] of Object.entries(haberConjugation)) {
    conjugation[tense] = addPronoun(
      buildComplexTense(pastParticiple, prefixes),
      reflexive
    );
  }
  return conjugation as SpanishComplexConjugation;
}
