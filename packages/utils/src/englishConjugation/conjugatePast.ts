import {
  EnglishActiveVerbTense,
  EnglishPassiveVerbTense,
  EnglishVerbComponents,
  pronouns,
} from "./types";
import { wasWere } from "./utils";

export function buildActivePast(
  parts: EnglishVerbComponents
): EnglishActiveVerbTense {
  const verbTense = {
    continuous: wasWere(parts.presentParticiple),
    perfect: {},
    perfectContinuous: {},
    simple: {},
  } as EnglishActiveVerbTense;

  for (const pronoun of pronouns) {
    verbTense.simple[pronoun] = parts.pastSimple;
    verbTense.perfect[pronoun] = `had ${parts.pastParticiple}`;
    verbTense.perfectContinuous[
      pronoun
    ] = `had been ${parts.presentParticiple}`;
  }

  return verbTense;
}

export function buildPassivePast(
  parts: EnglishVerbComponents
): EnglishPassiveVerbTense {
  const verbTense = {
    simple: wasWere(parts.pastParticiple),
    continuous: wasWere(`being ${parts.pastParticiple}`),
    perfect: {},
  } as EnglishPassiveVerbTense;

  for (const pronoun of pronouns) {
    verbTense.perfect[pronoun] = `had been ${parts.pastParticiple}`;
  }

  return verbTense;
}
