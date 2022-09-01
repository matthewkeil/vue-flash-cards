import "reflect-metadata";
import { Type } from "class-transformer";
import { IsString, ValidateNested } from "class-validator";

const thirdPersonSingulars = ["he", "she", "it"] as const;
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

/**
 *
 * Tense Sets
 *
 */
export class EnglishPassiveFutureVerbTense {
  @ValidateNested()
  @Type(() => EnglishConjugatedTense)
  simple!: EnglishConjugatedTense;

  @ValidateNested()
  @Type(() => EnglishConjugatedTense)
  perfect!: EnglishConjugatedTense;
}

export class EnglishPassiveVerbTense extends EnglishPassiveFutureVerbTense {
  @ValidateNested()
  @Type(() => EnglishConjugatedTense)
  continuous!: EnglishConjugatedTense;
}

export class EnglishActiveVerbTense extends EnglishPassiveVerbTense {
  @ValidateNested()
  @Type(() => EnglishConjugatedTense)
  perfectContinuous!: EnglishConjugatedTense;
}

/**
 *
 * Conditional Tenses
 *
 */
export class EnglishPassiveConditionalTense {
  @ValidateNested()
  @Type(() => EnglishConjugatedTense)
  present!: EnglishConjugatedTense;

  @ValidateNested()
  @Type(() => EnglishConjugatedTense)
  past!: EnglishConjugatedTense;
}

export class EnglishActiveConditionalTense extends EnglishPassiveConditionalTense {
  @ValidateNested()
  @Type(() => EnglishConjugatedTense)
  presentContinuous!: EnglishConjugatedTense;

  @ValidateNested()
  @Type(() => EnglishConjugatedTense)
  pastContinuous!: EnglishConjugatedTense;
}

/**
 *
 * Passive Voice
 *
 */
export class EnglishPassiveConjugation {
  @ValidateNested()
  @Type(() => EnglishPassiveVerbTense)
  past!: EnglishPassiveVerbTense;

  @ValidateNested()
  @Type(() => EnglishPassiveVerbTense)
  present!: EnglishPassiveVerbTense;

  @ValidateNested()
  @Type(() => EnglishPassiveFutureVerbTense)
  future!: EnglishPassiveFutureVerbTense;

  @ValidateNested()
  @Type(() => EnglishPassiveConditionalTense)
  conditional!: EnglishPassiveConditionalTense;
}

/**
 *
 * Active Voice
 *
 */
export class EnglishActiveConjugation {
  @ValidateNested()
  @Type(() => EnglishActiveVerbTense)
  past!: EnglishActiveVerbTense;

  @ValidateNested()
  @Type(() => EnglishActiveVerbTense)
  present!: EnglishActiveVerbTense;

  @ValidateNested()
  @Type(() => EnglishActiveVerbTense)
  future!: EnglishActiveVerbTense;

  @ValidateNested()
  @Type(() => EnglishActiveConditionalTense)
  conditional!: EnglishActiveConditionalTense;
}

/**
 *
 * Full Conjugation
 *
 */
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

export class EnglishConjugation extends EnglishVerbComponents {
  @ValidateNested()
  @Type(() => EnglishPassiveConjugation)
  passive!: EnglishPassiveConjugation;

  @ValidateNested()
  @Type(() => EnglishActiveConjugation)
  active!: EnglishActiveConjugation;
}
