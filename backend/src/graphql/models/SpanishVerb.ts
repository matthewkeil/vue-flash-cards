import { IsOptional } from "class-validator";
import { Field, ObjectType } from "type-graphql";
import {
  Usage as USAGE,
  SpanishVerb as SPANISH_VERB,
} from "../../models/SpanishVerb/SpanishVerb";

@ObjectType()
export class TranslationPair extends USAGE {
  @Field()
  sp!: string;

  @Field(() => [String])
  en!: string[];
}

@ObjectType()
export class SpanishVerb extends SPANISH_VERB {
  @Field()
  spanish!: string;

  @Field(() => [String])
  english!: string[];

  @Field(() => [String], {nullable: true})
  related?: string[];
  
  @Field(() => [TranslationPair], {nullable: true})
  @IsOptional()
  usage?: TranslationPair[];
}