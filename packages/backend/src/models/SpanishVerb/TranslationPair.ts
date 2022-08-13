import { IsString } from "class-validator";
import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class TranslationPair {
  @Field()
  sp!: string;

  @Field(() => [String])
  @IsString({ each: true })
  en!: string | string[];

  constructor({ sp, en }: TranslationPair) {
    this.sp = sp;
    this.en = en;
  }
}
