import { IsBoolean, IsString, ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { Field, ObjectType } from "type-graphql";

export interface SpanishVerbComponents {
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

interface SimpleTenses {
  presentIndicative: string[];
  imperfectIndicative: string[];
  preteriteIndicative: string[];
  futureIndicative: string[];
  potentialSimple: string[];
  presentSubjunctive: string[];
  imperfectSubjunctive: string[];
}

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

export class ConjugatedTense {
  @IsString()
  yo!: string;

  @IsString()
  tu!: string;

  @IsString()
  usted!: string;

  @IsString()
  nosotros!: string;

  @IsString()
  vosotros!: string;

  @IsString()
  ustedes!: string;
}

export class SimpleConjugation {
  @Type(() => ConjugatedTense)
  @ValidateNested()
  presentIndicative!: ConjugatedTense;

  @Type(() => ConjugatedTense)
  @ValidateNested()
  imperfectIndicative!: ConjugatedTense;

  @Type(() => ConjugatedTense)
  @ValidateNested()
  preteriteIndicative!: ConjugatedTense;

  @Type(() => ConjugatedTense)
  @ValidateNested()
  futureIndicative!: ConjugatedTense;

  @Type(() => ConjugatedTense)
  @ValidateNested()
  potentialSimple!: ConjugatedTense;

  @Type(() => ConjugatedTense)
  @ValidateNested()
  presentSubjunctive!: ConjugatedTense;

  @Type(() => ConjugatedTense)
  @ValidateNested()
  imperfectSubjunctive!: ConjugatedTense;
}

export class ComplexConjugation {
  @Type(() => ConjugatedTense)
  @ValidateNested()
  perfectIndicative!: ConjugatedTense;

  @Type(() => ConjugatedTense)
  @ValidateNested()
  pluperfectIndicative!: ConjugatedTense;

  @Type(() => ConjugatedTense)
  @ValidateNested()
  preteriteAnterior!: ConjugatedTense;

  @Type(() => ConjugatedTense)
  @ValidateNested()
  futurePerfect!: ConjugatedTense;

  @Type(() => ConjugatedTense)
  @ValidateNested()
  potentialContinuous!: ConjugatedTense;

  @Type(() => ConjugatedTense)
  @ValidateNested()
  perfectSubjunctive!: ConjugatedTense;

  @Type(() => ConjugatedTense)
  @ValidateNested()
  pluperfectSubjunctive!: ConjugatedTense;
}

export class ImperativeConjugation {
  @IsString()
  tu!: string;

  @IsString()
  noTu!: string;

  @IsString()
  usted!: string;

  @IsString()
  nosotros!: string;

  @IsString()
  vosotros!: string;

  @IsString()
  noVosotros!: string;

  @IsString()
  ustedes!: string;
}

export class Conjugation {
  @IsString()
  infinitive!: string;

  @IsString()
  root!: string;

  @IsString()
  ending!: string;

  @IsBoolean()
  reflexive!: boolean;

  @IsString()
  gerund!: string;

  @IsString()
  pastParticiple!: string;

  @Type(() => SimpleConjugation)
  @ValidateNested()
  simpleConjugation!: SimpleConjugation;

  @Type(() => ComplexConjugation)
  @ValidateNested()
  complexConjugation!: ComplexConjugation;

  @Type(() => ImperativeConjugation)
  @ValidateNested()
  imperative!: ImperativeConjugation;
}
