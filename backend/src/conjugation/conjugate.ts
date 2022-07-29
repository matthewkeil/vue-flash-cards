import type { Conjugation } from "./types";
import { conjugateSimple } from "./simpleTense";
import { conjugateComplex } from "./complexTense";
import { conjugateImperative } from "./imperative";
import { isSpecialCase, handleSpecialCase } from "./specialCases";
import { buildGerund, buildPastParticiple } from "./utils";

export function conjugate(verb: string): Conjugation {
  let _verb = verb;
  const reflexive = _verb.endsWith("se");
  if (reflexive) {
    _verb = _verb.slice(0, -2);
  }
  const verbEnding = _verb.slice(-2);
  const root = _verb.slice(0, -2);
  const components = { root, verbEnding, reflexive };
  const gerund = buildGerund(components);
  const pastParticiple = buildPastParticiple(components);
  const simpleConjugation = conjugateSimple(components);
  const complexConjugation = conjugateComplex(pastParticiple, reflexive);
  const imperative = conjugateImperative(components);

  const conjugation: Conjugation = {
    infinitive: verb,
    root,
    ending: verbEnding,
    reflexive,
    gerund,
    pastParticiple,
    simpleConjugation,
    complexConjugation,
    imperative,
  };

  if (isSpecialCase(verb)) {
    return handleSpecialCase(conjugation, false);
  }

  return conjugation;
}
