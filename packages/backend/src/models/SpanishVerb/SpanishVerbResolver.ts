import { Arg, Query, Resolver } from "type-graphql";

import { SpanishVerb } from "./SpanishVerb";
import { TranslationPair } from "./TranslationPair";

let allVerbs: undefined | SpanishVerb[];
function getAllVerbs(): SpanishVerb[] {
  if (!allVerbs) {
    ({ allVerbs } = require("../../../data/spanishVerbs"));
  }
  return allVerbs as SpanishVerb[];
}

@Resolver(() => SpanishVerb)
export class SpanishVerbResolver {
  @Query(() => SpanishVerb)
  getVerb(@Arg("infinitive") sp: string) {
    const verb = getAllVerbs().find((verb) => verb.sp === sp);
    if (!verb) {
      throw new Error(`${sp} is not a spanish infinitive`);
    }
    return new SpanishVerb(verb);
  }

  @Query(() => [TranslationPair])
  searchSpanish(@Arg("match") match: string) {
    return getAllVerbs().filter((verb) => verb.sp.includes(match));
  }

  @Query(() => [TranslationPair])
  searchEnglish(@Arg("match") match: string) {
    return getAllVerbs().filter((verb) => {
      for (const en of verb.en) {
        if (en.includes(match)) {
          return true;
        }
      }
    });
  }
}
