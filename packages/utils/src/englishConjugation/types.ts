import { Type } from "class-transformer";
import { IsString, ValidateNested } from "class-validator";

const thirdPersonSingulars = ["he", "she", "it"] as const;
export type EnglishThirdPersonSingular = typeof thirdPersonSingulars[number];
export function isEnglishThirdPersonSingular(
  obj: unknown
): obj is EnglishThirdPersonSingular {
  return (
    typeof obj === "string" &&
    thirdPersonSingulars.includes(obj as EnglishThirdPersonSingular)
  );
}

export const pronouns = [
  "I",
  "you",
  thirdPersonSingulars[2],
  "we",
  "youAll",
  "they",
] as const;

export type EnglishPronoun = typeof pronouns[number];

type IEnglishConjugatedTense = Record<EnglishPronoun, string>;

export class EnglishVerbComponents {
  @IsString()
  root!: string;

  @IsString()
  infinitive!: string;

  @IsString()
  presentParticiple!: string;

  @IsString()
  pastSimple!: string;

  @IsString()
  pastParticiple!: string;
}

export class EnglishConjugatedTense implements IEnglishConjugatedTense {
  @IsString()
  I!: string;

  @IsString()
  you!: string;

  @IsString()
  it!: string;

  @IsString()
  we!: string;

  @IsString()
  youAll!: string;

  @IsString()
  they!: string;
}

export class EnglishConditionalTense {
  @ValidateNested()
  @Type(() => EnglishConjugatedTense)
  present!: EnglishConjugatedTense;

  @ValidateNested()
  @Type(() => EnglishConjugatedTense)
  presentContinuous!: EnglishConjugatedTense;

  @ValidateNested()
  @Type(() => EnglishConjugatedTense)
  past!: EnglishConjugatedTense;

  @ValidateNested()
  @Type(() => EnglishConjugatedTense)
  pastContinuous!: EnglishConjugatedTense;
}

export class EnglishVerbTense {
  @ValidateNested()
  @Type(() => EnglishConjugatedTense)
  simple!: EnglishConjugatedTense;

  @ValidateNested()
  @Type(() => EnglishConjugatedTense)
  perfect!: EnglishConjugatedTense;

  @ValidateNested()
  @Type(() => EnglishConjugatedTense)
  continuous!: EnglishConjugatedTense;

  @ValidateNested()
  @Type(() => EnglishConjugatedTense)
  perfectContinuous!: EnglishConjugatedTense;
}

export class EnglishConjugation extends EnglishVerbComponents {
  @ValidateNested()
  @Type(() => EnglishVerbTense)
  past!: EnglishVerbTense;

  @ValidateNested()
  @Type(() => EnglishVerbTense)
  present!: EnglishVerbTense;

  @ValidateNested()
  @Type(() => EnglishVerbTense)
  future!: EnglishVerbTense;

  @ValidateNested()
  @Type(() => EnglishConditionalTense)
  conditional!: EnglishConditionalTense;
}
