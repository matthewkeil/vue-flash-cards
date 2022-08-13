import { irregularVerbs } from "./irregularVerbs";
import {
  pronouns,
  EnglishConjugation,
  EnglishVerbTense,
  EnglishVerbComponents,
  EnglishConditionalTense,
} from "./types";

function buildVerbParts(root: string): EnglishVerbComponents {
  const infinitive = `to ${root}`;
  const presentParticiple = `${root}ing`;
  if (root in irregularVerbs) {
    return {
      root,
      infinitive,
      presentParticiple,
      ...irregularVerbs[root],
    };
  }
  const pastSimple = root.endsWith("e") ? `${root}d` : `${root}ed`;
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
  const verbTense = {} as EnglishVerbTense;
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
  const verbTense = {} as EnglishVerbTense;
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
  const verbTense = {} as EnglishConditionalTense;
  for (const pronoun of pronouns) {
    verbTense.present[pronoun] = `would ${parts.root}`;
    verbTense.presentContinuous[pronoun] = `would be ${parts.presentParticiple}`;
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
