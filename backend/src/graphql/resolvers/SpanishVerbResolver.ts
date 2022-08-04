import { Arg, Query, Resolver } from "type-graphql";

import { SpanishVerb } from "../models";
import { allVerbs } from "../../data";
import { TranslationPair } from "../models/SpanishVerb";

@Resolver()
export class SpanishVerbResolver {
  @Query(() => SpanishVerb)
  getVerb(@Arg("infinitive") sp: string) {
    const verb = allVerbs.find((verb) => verb.sp === sp);
    if (!verb) {
      throw new Error(`${sp} is not a spanish infinitive`);
    }
    return new SpanishVerb(verb);
  }

  @Query(() => [TranslationPair])
  searchSpanish(@Arg("match") match: string) {
    return allVerbs.filter((verb) => verb.sp.includes(match));
  }

  @Query(() => [TranslationPair])
  searchEnglish(@Arg("match") match: string) {
    return allVerbs.filter((verb) => {
      for (const en of verb.en) {
        if (en.includes(match)) {
          return true;
        }
      }
    });
  }
}
