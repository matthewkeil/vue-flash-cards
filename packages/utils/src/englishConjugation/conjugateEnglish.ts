import { EnglishConjugation, EnglishVerbComponents } from "./types";
import { endsConsonantVowelConsonant, isVowel } from "./utils";
import { buildActivePast, buildPassivePast } from "./conjugatePast";
import {
  buildActiveConditional,
  buildPassiveConditional,
} from "./conjugateConditional";
import { buildActivePresent, buildPassivePresent } from "./conjugatePresent";
import { buildActiveFuture, buildPassiveFuture } from "./conjugateFuture";
import { firstSyllableStressVerbs } from "./verbLists/firstSyllableStressVerbs";
import { irregularVerbs } from "./verbLists/irregularVerbs";
import { singleSyllableVerbs } from "./verbLists/singleSyllableVerbs";

// https://www.grammar-monster.com/glossary/present_participle.htm
function buildPresentParticiple(root: string): string {
  // change "ie" to "y" like in "lie" -> "lying"
  if (root.endsWith("ie")) {
    return root.slice(0, -2) + "y" + "ing";
  }

  // remove "e" like in "move" -> "moving"
  if (root.endsWith("e")) {
    return root.slice(0, -1) + "ing";
  }

  // double the last consonant if appropriate like in "run" -> "running"
  if (endsConsonantVowelConsonant(root)) {
    return root + root.slice(-1) + "ing";
  }

  // default to just adding "ing"
  return root + "ing";
}

// https://www.grammar-monster.com/glossary/simple_past_tense.htm
function buildPastSimple(root: string): string {
  // ends in consonant + "y"
  if (root.endsWith("y") && !isVowel(root.slice(-2, -1))) {
    return root.slice(0, -1) + "ied";
  }

  if (root.endsWith("e")) {
    return root + "d";
  }

  if (root.endsWith("w") || root.endsWith("x") || root.endsWith("y")) {
    return root + "ed";
  }

  // TODO: these lists are incomplete
  if (
    (singleSyllableVerbs.includes(root) ||
      !firstSyllableStressVerbs.includes(root)) &&
    endsConsonantVowelConsonant(root)
  ) {
    return root + root.slice(-1) + "ed";
  }

  return root + "ed";
}

function buildVerbParts(root: string): EnglishVerbComponents {
  const infinitive = `to ${root}`;
  const presentParticiple = buildPresentParticiple(root);
  if (root in irregularVerbs) {
    return {
      root,
      infinitive,
      presentParticiple,
      ...irregularVerbs[root],
    };
  }
  const pastSimple = buildPastSimple(root);
  return {
    root,
    infinitive,
    presentParticiple,
    pastSimple,
    pastParticiple: pastSimple,
  };
}

export function conjugateEnglish(verb: string): EnglishConjugation {
  const parts = buildVerbParts(verb);
  return {
    ...parts,
    active: {
      past: buildActivePast(parts),
      present: buildActivePresent(parts),
      future: buildActiveFuture(parts),
      conditional: buildActiveConditional(parts),
    },
    passive: {
      past: buildPassivePast(parts),
      present: buildPassivePresent(parts),
      future: buildPassiveFuture(parts),
      conditional: buildPassiveConditional(parts),
    },
  };
}
