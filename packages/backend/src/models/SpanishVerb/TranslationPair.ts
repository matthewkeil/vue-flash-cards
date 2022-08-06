import { IsString } from "class-validator";
import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class TranslationPair {
  @Field()
  sp!: string;

  @Field(() => [String])
  @IsString({ each: true })
  en!: string[];
}
