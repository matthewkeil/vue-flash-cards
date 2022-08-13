import { Type } from "class-transformer";
import { IsOptional, IsString, ValidateNested } from "class-validator";
import { Field, ObjectType } from "type-graphql";

import { TranslationPair } from "./TranslationPair";

@ObjectType()
export class SpanishVerb extends TranslationPair {
  @Field(() => [String], { nullable: true })
  @IsString({ each: true })
  @IsOptional()
  related?: string[];

  @Field(() => [TranslationPair], { nullable: true })
  @Type(() => TranslationPair)
  @ValidateNested({ each: true })
  @IsOptional()
  usage?: TranslationPair[];

  constructor({ sp, en, related, usage }: SpanishVerb) {
    super({ sp, en });
    this.related = related;
    this.usage = usage;
  }
}
