import type { Conjugation } from "./types";
import { buildGerund, buildPastParticiple } from "./utils";
import { conjugateSimple } from "./conjugateSimple";
import { conjugateComplex } from "./conjugateComplex";
import { conjugateImperative } from "./conjugateImperative";
import { handleSpecialCases } from "./specialCases";

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

  return handleSpecialCases(conjugation);
}
