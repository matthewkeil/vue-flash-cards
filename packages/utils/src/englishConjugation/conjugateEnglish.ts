import { firstSyllableStressVerbs } from "./firstSyllableStressVerbs";
import { irregularVerbs } from "./irregularVerbs";
import { singleSyllableVerbs } from "./singleSyllableVerbs";
import {
  pronouns,
  EnglishConjugation,
  EnglishVerbTense,
  EnglishVerbComponents,
  EnglishConditionalTense,
} from "./types";

const vowels = ["a", "e", "i", "o", "u", "y"];

function endsConsonantVowelConsonant(root: string): boolean {
  const [thirdFromEnd, secondFromEnd, end] = root.slice(-3);
  const thirdIsConsonant = !vowels.includes(thirdFromEnd);
  const secondIsVowel = vowels.includes(secondFromEnd);
  const endIsConsonant = !vowels.includes(end);
  return thirdIsConsonant && secondIsVowel && endIsConsonant;
}

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
  if (root.endsWith("y") && !vowels.includes(root.slice(-2, -1))) {
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

function buildPast(parts: EnglishVerbComponents): EnglishVerbTense {
  const verbTense = {
    continuous: {
      I: `was ${parts.presentParticiple}`,
      you: `were ${parts.presentParticiple}`,
      it: `was ${parts.presentParticiple}`,
      we: `were ${parts.presentParticiple}`,
      youAll: `were ${parts.presentParticiple}`,
      they: `were ${parts.presentParticiple}`,
    },
    perfect: {},
    perfectContinuous: {},
    simple: {},
  } as EnglishVerbTense;

  for (const pronoun of pronouns) {
    verbTense.simple[pronoun] = parts.pastSimple;
    verbTense.perfect[pronoun] = `had ${parts.pastParticiple}`;
    verbTense.perfectContinuous[
      pronoun
    ] = `had been ${parts.presentParticiple}`;
  }

  return verbTense;
}

function buildPresent(parts: EnglishVerbComponents): EnglishVerbTense {
  const verbTense = {
    simple: {},
    continuous: {},
    perfect: {},
    perfectContinuous: {},
  } as EnglishVerbTense;
  for (const pronoun of pronouns) {
    verbTense.simple[pronoun] = parts.root;
    verbTense.perfect[pronoun] = `have ${parts.pastParticiple}`;
    verbTense.continuous[pronoun] = `are ${parts.presentParticiple}`;
    verbTense.perfectContinuous[
      pronoun
    ] = `have been ${parts.presentParticiple}`;
  }

  verbTense.simple.it += "s";
  verbTense.perfect.it = `has ${parts.pastParticiple}`;
  verbTense.continuous.I = `am ${parts.presentParticiple}`;
  verbTense.continuous.it = `is ${parts.presentParticiple}`;
  verbTense.perfectContinuous.it = `has been ${parts.presentParticiple}`;

  return verbTense;
}

function buildFuture(parts: EnglishVerbComponents): EnglishVerbTense {
  const verbTense = {
    simple: {},
    continuous: {},
    perfect: {},
    perfectContinuous: {},
  } as EnglishVerbTense;
  for (const pronoun of pronouns) {
    verbTense.simple[pronoun] = `will ${parts.root}`;
    verbTense.perfect[pronoun] = `will have ${parts.pastParticiple}`;
    verbTense.continuous[pronoun] = `will be ${parts.presentParticiple}`;
    verbTense.perfectContinuous[
      pronoun
    ] = `will have been ${parts.presentParticiple}`;
  }
  return verbTense;
}

function buildConditional(
  parts: EnglishVerbComponents
): EnglishConditionalTense {
  const verbTense = {
    past: {},
    pastContinuous: {},
    present: {},
    presentContinuous: {},
  } as EnglishConditionalTense;
  for (const pronoun of pronouns) {
    verbTense.present[pronoun] = `would ${parts.root}`;
    verbTense.presentContinuous[
      pronoun
    ] = `would be ${parts.presentParticiple}`;
    verbTense.past[pronoun] = `would have ${parts.pastParticiple}`;
    verbTense.pastContinuous[
      pronoun
    ] = `would have been ${parts.presentParticiple}`;
  }
  return verbTense;
}

export function conjugateEnglish(verb: string): EnglishConjugation {
  const parts = buildVerbParts(verb);
  return {
    ...parts,
    past: buildPast(parts),
    present: buildPresent(parts),
    future: buildFuture(parts),
    conditional: buildConditional(parts),
  };
}
