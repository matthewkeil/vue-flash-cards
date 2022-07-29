import type { ConjugationSet, VerbComponents } from "./types";
import { addPronoun } from "./pronouns";

export interface SimpleTenses {
  presentIndicative: string[];
  imperfectIndicative: string[];
  preteriteIndicative: string[];
  futureIndicative: string[];
  potentialSimple: string[];
  presentSubjunctive: string[];
  imperfectSubjunctive: string[];
}

export type SimpleConjugation = { [key in keyof SimpleTenses]: ConjugationSet };

export const verbSuffixes: { [ending: string]: SimpleTenses } = {
  ar: {
    presentIndicative: ["o", "as", "a", "amos", "ais", "an"],
    imperfectIndicative: ["aba", "abas", "aba", "ábamos", "abais", "aban"],
    preteriteIndicative: ["é", "aste", "ó", "amos", "asteis", "aron"],
    futureIndicative: ["aré", "arás", "ará", "aremos", "aréis", "arán"],
    potentialSimple: ["aría", "arías", "aría", "aríamos", "aríais", "arían"],
    presentSubjunctive: ["e", "es", "e", "emos", "éis", "en"],
    imperfectSubjunctive: ["ara", "aras", "ara", "áramos", "arais", "aran"],
  },
  er: {
    presentIndicative: ["o", "es", "e", "emos", "eís", "en"],
    imperfectIndicative: ["ía", "ías", "ía", "íamos", "íais", "ían"],
    preteriteIndicative: ["í", "iste", "ió", "imos", "isteis", "ieron"],
    futureIndicative: ["eré", "erás", "erá", "eremos", "eréis", "erán"],
    potentialSimple: ["ería", "erías", "ería", "eríamos", "eríais", "erían"],
    presentSubjunctive: ["a", "as", "a", "amos", "áis", "an"],
    imperfectSubjunctive: [
      "iera",
      "ieras",
      "iera",
      "iéramos",
      "ierais",
      "ieran",
    ],
  },
  ir: {
    presentIndicative: ["o", "es", "e", "imos", "ís", "en"],
    imperfectIndicative: ["ía", "ías", "ía", "íamos", "íais", "ían"],
    preteriteIndicative: ["ió", "iste", "ió", "imos", "isteis", "ieron"],
    futureIndicative: ["iré", "irás", "irá", "iremos", "iréis", "irán"],
    potentialSimple: ["iría", "irías", "iría", "iríamos", "iríais", "irían"],
    presentSubjunctive: ["a", "as", "a", "amos", "áis", "an"],
    imperfectSubjunctive: [
      "iera",
      "ieras",
      "iera",
      "iéramos",
      "ierais",
      "ieran",
    ],
  },
};

function buildSimpleTense(root: string, suffixes: string[]) {
  const conjugated = {
    tu: root + suffixes[1],
    usted: root + suffixes[2],
    nosotros: root + suffixes[3],
    vosotros: root + suffixes[4],
    ustedes: root + suffixes[5],
  } as ConjugationSet;
  if (suffixes[0]) {
    conjugated.yo = root + suffixes[0];
  }
  return conjugated;
}

export function conjugateSimple({
  root,
  verbEnding,
  reflexive,
}: VerbComponents) {
  const conjugation: any = {};
  for (const [tense, suffixes] of Object.entries(verbSuffixes[verbEnding])) {
    conjugation[tense] = addPronoun(
      buildSimpleTense(root, suffixes),
      reflexive
    );
  }
  return conjugation as SimpleConjugation;
}
