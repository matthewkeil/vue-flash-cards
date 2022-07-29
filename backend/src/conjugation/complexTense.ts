import type { ConjugationSet } from "./types";
import { addPronoun } from "./pronouns";

const haberConjugation = {
  perfectIndicative: ["he", "has", "ha", "hemos", "habéis", "han"],
  pluperfectIndicative: [
    "había",
    "habías",
    "había",
    "habíamos",
    "habíais",
    "habían",
  ],
  preteriteAnterior: [
    "hube",
    "hubiste",
    "hubo",
    "hubimos",
    "hubisteis",
    "hubieron",
  ],
  futurePerfect: ["habré", "habrás", "habrá", "habremos", "habréis", "habrán"],
  potentialContinuous: [
    "habría",
    "habrías",
    "habría",
    "habríamos",
    "habríais",
    "habrían",
  ],
  perfectSubjunctive: ["haya", "hayas", "haya", "hayamos", "hayáis", "hayan"],
  pluperfectSubjunctive: [
    "hubiera",
    "hubieras",
    "hubiera",
    "hubiéramos",
    "hubierais",
    "hubieran",
  ],
};

export type ComplexConjugation = {
  [key in keyof typeof haberConjugation]: ConjugationSet;
};

function buildComplexTense(pastParticiple: string, prefixes: string[]) {
  return {
    yo: `${prefixes[0]} ${pastParticiple}`,
    tu: `${prefixes[1]} ${pastParticiple}`,
    usted: `${prefixes[2]} ${pastParticiple}`,
    nosotros: `${prefixes[3]} ${pastParticiple}`,
    vosotros: `${prefixes[4]} ${pastParticiple}`,
    ustedes: `${prefixes[5]} ${pastParticiple}`,
  } as ConjugationSet;
}

export function conjugateComplex(pastParticiple: string, reflexive: boolean) {
  const conjugation: any = {};
  for (const [tense, prefixes] of Object.entries(haberConjugation)) {
    conjugation[tense] = addPronoun(
      buildComplexTense(pastParticiple, prefixes),
      reflexive
    );
  }
  return conjugation as ComplexConjugation;
}
