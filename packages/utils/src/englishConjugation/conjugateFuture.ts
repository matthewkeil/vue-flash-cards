import {
  EnglishActiveVerbTense,
  EnglishPassiveFutureVerbTense,
  EnglishVerbComponents,
  pronouns,
} from "./types";

export function buildActiveFuture(
  parts: EnglishVerbComponents
): EnglishActiveVerbTense {
  const verbTense = {
    simple: {},
    continuous: {},
    perfect: {},
    perfectContinuous: {},
  } as EnglishActiveVerbTense;
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

export function buildPassiveFuture(
  parts: EnglishVerbComponents
): EnglishPassiveFutureVerbTense {
  const verbTense = {
    simple: {},
    perfect: {},
  } as EnglishPassiveFutureVerbTense;
  for (const pronoun of pronouns) {
    verbTense.simple[pronoun] = `will be ${parts.pastParticiple}`;
    verbTense.perfect[pronoun] = `will have been ${parts.pastParticiple}`;
  }
  return verbTense;
}
