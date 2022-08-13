import { SpanishConjugation } from "./types";
import { buildGerund, buildPastParticiple } from "./utils";
import { conjugateSimple } from "./conjugateSimple";
import { conjugateComplex } from "./conjugateComplex";
import { conjugateImperative } from "./conjugateImperative";
import { handleSpecialCases } from "./specialCases";

export function conjugate(verb: string): SpanishConjugation {
  const conjugation = new SpanishConjugation();
  conjugation.infinitive = verb;
  conjugation.reflexive = verb.endsWith("se");

  let _verb = verb;
  if (conjugation.reflexive) {
    _verb = _verb.slice(0, -2);
  }
  conjugation.ending = _verb.slice(-2);
  conjugation.root = _verb.slice(0, -2);
  const components = {
    reflexive: conjugation.reflexive,
    verbEnding: conjugation.ending,
    root: conjugation.root,
  };

  conjugation.gerund = buildGerund(components);
  conjugation.pastParticiple = buildPastParticiple(components);
  conjugation.simpleConjugation = conjugateSimple(components);
  conjugation.complexConjugation = conjugateComplex(
    conjugation.pastParticiple,
    conjugation.reflexive
  );
  conjugation.imperative = conjugateImperative(components);
  handleSpecialCases(conjugation);

  return conjugation;
}
