import {
  EnglishActiveVerbTense,
  EnglishPassiveVerbTense,
  EnglishVerbComponents,
  pronouns,
} from "./types";
import { amIsAre } from "./utils";

export function buildActivePresent(
  parts: EnglishVerbComponents
): EnglishActiveVerbTense {
  const verbTense = {
    simple: {},
    continuous: amIsAre(parts.presentParticiple),
    perfect: {},
    perfectContinuous: {},
  } as EnglishActiveVerbTense;
  for (const pronoun of pronouns) {
    verbTense.simple[pronoun] = parts.root;
    verbTense.perfect[pronoun] = `have ${parts.pastParticiple}`;
    verbTense.perfectContinuous[
      pronoun
    ] = `have been ${parts.presentParticiple}`;
  }

  verbTense.simple.it += "s";
  verbTense.perfect.it = `has ${parts.pastParticiple}`;
  verbTense.perfectContinuous.it = `has been ${parts.presentParticiple}`;

  return verbTense;
}

export function buildPassivePresent(
  parts: EnglishVerbComponents
): EnglishPassiveVerbTense {
  const verbTense = {
    simple: amIsAre(parts.pastSimple),
    continuous: amIsAre(`being ${parts.pastParticiple}`),
    perfect: {},
  } as EnglishPassiveVerbTense;

  for (const pronoun of pronouns) {
    verbTense.perfect[pronoun] = `have been ${parts.pastParticiple}`;
  }
  verbTense.perfect.it = `has ${parts.pastParticiple}`;

  return verbTense;
}
