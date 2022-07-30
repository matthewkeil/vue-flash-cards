export interface VerbComponents {
  root: string;
  verbEnding: string;
  reflexive: boolean;
}

const simplePronouns = ["yo", "tu", "nosotros", "vosotros"] as const;
export type SimplePronoun = typeof simplePronouns[number];
export function isSimplePronoun(obj: unknown): obj is SimplePronoun {
  return (
    typeof obj === "string" && simplePronouns.includes(obj as SimplePronoun)
  );
}

const thirdPersonSingulars = ["usted", "el", "ella"] as const;
export type ThirdPersonSingular = typeof thirdPersonSingulars[number];
export function isThirdPersonSingular(
  obj: unknown
): obj is ThirdPersonSingular {
  return (
    typeof obj === "string" &&
    thirdPersonSingulars.includes(obj as ThirdPersonSingular)
  );
}

const thirdPersonPlurals = ["ustedes", "ellos", "ellas"] as const;
export type ThirdPersonPlural = typeof thirdPersonPlurals[number];
export function isThirdPersonPlural(obj: unknown): obj is ThirdPersonPlural {
  return (
    typeof obj === "string" &&
    thirdPersonPlurals.includes(obj as ThirdPersonPlural)
  );
}

export type Pronoun = SimplePronoun | ThirdPersonSingular | ThirdPersonPlural;
export function isPronoun(obj: unknown): obj is Pronoun {
  return (
    isSimplePronoun(obj) ||
    isThirdPersonSingular(obj) ||
    isThirdPersonPlural(obj)
  );
}

export type ConjugatedTensePronoun = SimplePronoun | "usted" | "ustedes";

export type ConjugatedTense = { [key in ConjugatedTensePronoun]: string };

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

interface SimpleTenses {
  presentIndicative: string[];
  imperfectIndicative: string[];
  preteriteIndicative: string[];
  futureIndicative: string[];
  potentialSimple: string[];
  presentSubjunctive: string[];
  imperfectSubjunctive: string[];
}

export type SimpleConjugation = {
  [key in keyof SimpleTenses]: ConjugatedTense;
};

export const haberConjugation = {
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
  [key in keyof typeof haberConjugation]: ConjugatedTense;
};

export interface ImperativeConjugation {
  tu: string;
  noTu: string;
  usted: string;
  nosotros: string;
  vosotros: string;
  noVosotros: string;
  ustedes: string;
}

export interface Conjugation {
  infinitive: string;
  root: string;
  ending: string;
  reflexive: boolean;
  gerund: string;
  pastParticiple: string;
  simpleConjugation: SimpleConjugation;
  complexConjugation: ComplexConjugation;
  imperative: ImperativeConjugation;
}
