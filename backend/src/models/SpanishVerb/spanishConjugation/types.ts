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

@ObjectType()
export class SpanishConjugatedTense {
  @Field()
  @IsString()
  yo!: string;

  @Field()
  @IsString()
  tu!: string;

  @Field()
  @IsString()
  usted!: string;

  @Field()
  @IsString()
  nosotros!: string;

  @Field()
  @IsString()
  vosotros!: string;

  @Field()
  @IsString()
  ustedes!: string;
}

@ObjectType()
export class SpanishSimpleConjugation {
  @Field()
  @Type(() => SpanishConjugatedTense)
  @ValidateNested()
  presentIndicative!: SpanishConjugatedTense;

  @Field()
  @Type(() => SpanishConjugatedTense)
  @ValidateNested()
  imperfectIndicative!: SpanishConjugatedTense;

  @Field()
  @Type(() => SpanishConjugatedTense)
  @ValidateNested()
  preteriteIndicative!: SpanishConjugatedTense;

  @Field()
  @Type(() => SpanishConjugatedTense)
  @ValidateNested()
  futureIndicative!: SpanishConjugatedTense;

  @Field()
  @Type(() => SpanishConjugatedTense)
  @ValidateNested()
  potentialSimple!: SpanishConjugatedTense;

  @Field()
  @Type(() => SpanishConjugatedTense)
  @ValidateNested()
  presentSubjunctive!: SpanishConjugatedTense;

  @Field()
  @Type(() => SpanishConjugatedTense)
  @ValidateNested()
  imperfectSubjunctive!: SpanishConjugatedTense;
}

@ObjectType()
export class SpanishComplexConjugation {
  @Field()
  @Type(() => SpanishConjugatedTense)
  @ValidateNested()
  perfectIndicative!: SpanishConjugatedTense;

  @Field()
  @Type(() => SpanishConjugatedTense)
  @ValidateNested()
  pluperfectIndicative!: SpanishConjugatedTense;

  @Field()
  @Type(() => SpanishConjugatedTense)
  @ValidateNested()
  preteriteAnterior!: SpanishConjugatedTense;

  @Field()
  @Type(() => SpanishConjugatedTense)
  @ValidateNested()
  futurePerfect!: SpanishConjugatedTense;

  @Field()
  @Type(() => SpanishConjugatedTense)
  @ValidateNested()
  potentialContinuous!: SpanishConjugatedTense;

  @Field()
  @Type(() => SpanishConjugatedTense)
  @ValidateNested()
  perfectSubjunctive!: SpanishConjugatedTense;

  @Field()
  @Type(() => SpanishConjugatedTense)
  @ValidateNested()
  pluperfectSubjunctive!: SpanishConjugatedTense;
}

@ObjectType()
export class SpanishImperativeConjugation {
  @Field()
  @IsString()
  tu!: string;

  @Field()
  @IsString()
  noTu!: string;

  @Field()
  @IsString()
  usted!: string;

  @Field()
  @IsString()
  nosotros!: string;

  @Field()
  @IsString()
  vosotros!: string;

  @Field()
  @IsString()
  noVosotros!: string;

  @Field()
  @IsString()
  ustedes!: string;
}

@ObjectType()
export class SpanishConjugation {
  @Field()
  @IsString()
  infinitive!: string;

  @Field()
  @IsString()
  root!: string;

  @Field()
  @IsString()
  ending!: string;

  @IsBoolean()
  reflexive!: boolean;

  @Field()
  @IsString()
  gerund!: string;

  @Field()
  @IsString()
  pastParticiple!: string;
  
  @Field()
  @Type(() => SpanishSimpleConjugation)
  @ValidateNested()
  simpleConjugation!: SpanishSimpleConjugation;
  
  @Field()
  @Type(() => SpanishComplexConjugation)
  @ValidateNested()
  complexConjugation!: SpanishComplexConjugation;
  
  @Field()
  @Type(() => SpanishImperativeConjugation)
  @ValidateNested()
  imperative!: SpanishImperativeConjugation;
}
