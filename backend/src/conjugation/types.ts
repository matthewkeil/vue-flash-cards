export interface VerbComponents {
  root: string;
  verbEnding: string;
  reflexive: boolean;
}

export type ConjugationSet = { [key in Pronoun]: string };

import type { Pronoun } from "./pronouns";
import type { SimpleConjugation } from "./simpleTense";
import type { ComplexConjugation } from "./complexTense";
import type { ImperativeConjugation } from "./imperative";

export interface Conjugation {
  infinitive: string;
  root: string;
  ending: string;
  reflexive: boolean;
  gerund: string;
  pastParticiple: string;
  simpleConjugation: SimpleConjugation;
  complexConjugation: ComplexConjugation;
  imperative: ImperativeConjugation;
}
