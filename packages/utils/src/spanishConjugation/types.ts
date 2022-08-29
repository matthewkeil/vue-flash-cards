import "reflect-metadata";
import { IsBoolean, IsString, ValidateNested } from "class-validator";
import { Type } from "class-transformer";

export interface SpanishVerbComponents {
  root: string;
  verbEnding: string;
  reflexive: boolean;
}

const simplePronouns = ["yo", "tu", "nosotros", "vosotros"] as const;
export type SpanishSimplePronoun = typeof simplePronouns[number];
export function isSpanishSimplePronoun(
  obj: unknown
): obj is SpanishSimplePronoun {
  return (
    typeof obj === "string" &&
    simplePronouns.includes(obj as SpanishSimplePronoun)
  );
}

const thirdPersonSingulars = ["usted", "el", "ella"] as const;
export type SpanishThirdPersonSingular = typeof thirdPersonSingulars[number];
export function isSpanishThirdPersonSingular(
  obj: unknown
): obj is SpanishThirdPersonSingular {
  return (
    typeof obj === "string" &&
    thirdPersonSingulars.includes(obj as SpanishThirdPersonSingular)
  );
}

const thirdPersonPlurals = ["ustedes", "ellos", "ellas"] as const;
export type SpanishThirdPersonPlural = typeof thirdPersonPlurals[number];
export function isSpanishThirdPersonPlural(
  obj: unknown
): obj is SpanishThirdPersonPlural {
  return (
    typeof obj === "string" &&
    thirdPersonPlurals.includes(obj as SpanishThirdPersonPlural)
  );
}

export type SpanishPronoun =
  | SpanishSimplePronoun
  | SpanishThirdPersonSingular
  | SpanishThirdPersonPlural;
export function isSpanishPronoun(obj: unknown): obj is SpanishPronoun {
  return (
    isSpanishSimplePronoun(obj) ||
    isSpanishThirdPersonSingular(obj) ||
    isSpanishThirdPersonPlural(obj)
  );
}

interface SimpleTenses {
  presentIndicative: string[];
  imperfectProgressive: string[];
  preteriteProgressive: string[];
  futureProgressive: string[];
  potentialSimple: string[];
  presentSubjunctive: string[];
  imperfectSubjunctive: string[];
}

export const verbSuffixes: { [ending: string]: SimpleTenses } = {
  ar: {
    presentIndicative: ["o", "as", "a", "amos", "ais", "an"],
    imperfectProgressive: ["aba", "abas", "aba", "ábamos", "abais", "aban"],
    preteriteProgressive: ["é", "aste", "ó", "amos", "asteis", "aron"],
    futureProgressive: ["aré", "arás", "ará", "aremos", "aréis", "arán"],
    potentialSimple: ["aría", "arías", "aría", "aríamos", "aríais", "arían"],
    presentSubjunctive: ["e", "es", "e", "emos", "éis", "en"],
    imperfectSubjunctive: ["ara", "aras", "ara", "áramos", "arais", "aran"],
  },
  er: {
    presentIndicative: ["o", "es", "e", "emos", "eís", "en"],
    imperfectProgressive: ["ía", "ías", "ía", "íamos", "íais", "ían"],
    preteriteProgressive: ["í", "iste", "ió", "imos", "isteis", "ieron"],
    futureProgressive: ["eré", "erás", "erá", "eremos", "eréis", "erán"],
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
    imperfectProgressive: ["ía", "ías", "ía", "íamos", "íais", "ían"],
    preteriteProgressive: ["ió", "iste", "ió", "imos", "isteis", "ieron"],
    futureProgressive: ["iré", "irás", "irá", "iremos", "iréis", "irán"],
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

export class SpanishConjugatedTense {
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

export class SpanishSimpleConjugation {
  @Type(() => SpanishConjugatedTense)
  @ValidateNested()
  presentIndicative!: SpanishConjugatedTense;

  @Type(() => SpanishConjugatedTense)
  @ValidateNested()
  imperfectProgressive!: SpanishConjugatedTense;

  @Type(() => SpanishConjugatedTense)
  @ValidateNested()
  preteriteProgressive!: SpanishConjugatedTense;

  @Type(() => SpanishConjugatedTense)
  @ValidateNested()
  futureProgressive!: SpanishConjugatedTense;

  @Type(() => SpanishConjugatedTense)
  @ValidateNested()
  potentialSimple!: SpanishConjugatedTense;

  @Type(() => SpanishConjugatedTense)
  @ValidateNested()
  presentSubjunctive!: SpanishConjugatedTense;

  @Type(() => SpanishConjugatedTense)
  @ValidateNested()
  imperfectSubjunctive!: SpanishConjugatedTense;
}

export class SpanishComplexConjugation {
  @Type(() => SpanishConjugatedTense)
  @ValidateNested()
  perfectIndicative!: SpanishConjugatedTense;

  @Type(() => SpanishConjugatedTense)
  @ValidateNested()
  pluperfectIndicative!: SpanishConjugatedTense;

  @Type(() => SpanishConjugatedTense)
  @ValidateNested()
  preteriteAnterior!: SpanishConjugatedTense;

  @Type(() => SpanishConjugatedTense)
  @ValidateNested()
  futurePerfect!: SpanishConjugatedTense;

  @Type(() => SpanishConjugatedTense)
  @ValidateNested()
  potentialContinuous!: SpanishConjugatedTense;

  @Type(() => SpanishConjugatedTense)
  @ValidateNested()
  perfectSubjunctive!: SpanishConjugatedTense;

  @Type(() => SpanishConjugatedTense)
  @ValidateNested()
  pluperfectSubjunctive!: SpanishConjugatedTense;
}

export class SpanishImperativeConjugation {
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

export class SpanishConjugation {
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

  @Type(() => SpanishSimpleConjugation)
  @ValidateNested()
  simpleConjugation!: SpanishSimpleConjugation;

  @Type(() => SpanishComplexConjugation)
  @ValidateNested()
  complexConjugation!: SpanishComplexConjugation;

  @Type(() => SpanishImperativeConjugation)
  @ValidateNested()
  imperative!: SpanishImperativeConjugation;
}
