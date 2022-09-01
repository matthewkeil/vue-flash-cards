import {
  EnglishActiveConditionalTense,
  EnglishPassiveConditionalTense,
  EnglishVerbComponents,
  pronouns,
} from "./types";

export function buildPassiveConditional(
  parts: EnglishVerbComponents
): EnglishPassiveConditionalTense {
  const verbTense = {
    past: {},
    present: {},
  } as EnglishPassiveConditionalTense;
  for (const pronoun of pronouns) {
    verbTense.present[pronoun] = `would be ${parts.pastParticiple}`;
    verbTense.past[pronoun] = `would have been ${parts.pastParticiple}`;
  }
  return verbTense;
}

export function buildActiveConditional(
  parts: EnglishVerbComponents
): EnglishActiveConditionalTense {
  const verbTense = {
    past: {},
    pastContinuous: {},
    present: {},
    presentContinuous: {},
  } as EnglishActiveConditionalTense;
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
