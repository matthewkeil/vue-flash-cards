import { Type } from "class-transformer";
import { IsOptional, IsString, ValidateNested } from "class-validator";
import { Field, ObjectType } from "type-graphql";

import { TranslationPair } from "./TranslationPair";

@ObjectType()
export class SpanishVerb implements TranslationPair {
  @Field()
  @IsString()
  sp!: string;

  @Field(() => [String])
  @IsString({ each: true })
  en!: string[];

  @Field(() => [String], { nullable: true })
  @IsString({ each: true })
  @IsOptional()
  related?: string[];

  @Field(() => [TranslationPair], { nullable: true })
  @Type(() => TranslationPair)
  @ValidateNested({ each: true })
  @IsOptional()
  usage?: TranslationPair[];

  constructor({ sp, en, related }: SpanishVerb) {
    this.sp = sp;
    this.en = en;
    this.related = related;
  }
}
