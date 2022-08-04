import { Type } from "class-transformer";
import { IsOptional, IsString, ValidateNested } from "class-validator";
import { conjugate, SpanishConjugation } from "./spanishConjugation";
import { SpanishToEnglishTranslation } from "./types";

export class Usage {
  @IsString()
  spanish!: string;

  @IsString({ each: true })
  english!: string[];
}

export class SpanishVerb {
  @IsString()
  spanish: string;

  @IsString({ each: true })
  english: string[];

  @IsString({ each: true })
  @IsOptional()
  related?: string[];

  @Type(() => Usage)
  @ValidateNested({ each: true })
  @IsOptional()
  usage?: Usage[];
  
  @Type(() => SpanishConjugation)
  @ValidateNested()
  conjugation: SpanishConjugation;

  constructor({ sp, en, related }: SpanishToEnglishTranslation) {
    this.spanish = sp;
    this.english = en;
    this.related = related;
    this.conjugation = conjugate(sp);
  }
}
