import type { ConjugationSet } from "./types";

export const simplePronouns = ["yo", "tu", "nosotros", "vosotros"] as const;
export type SimplePronoun = typeof simplePronouns[number];
export function isSimplePronoun(obj: unknown): obj is SimplePronoun {
  return (
    typeof obj === "string" && simplePronouns.includes(obj as SimplePronoun)
  );
}

export const thirdPersonSingulars = ["usted", "el", "ella"] as const;
export type ThirdPersonSingular = typeof thirdPersonSingulars[number];
export function isThirdPersonSingular(
  obj: unknown
): obj is ThirdPersonSingular {
  return (
    typeof obj === "string" &&
    thirdPersonSingulars.includes(obj as ThirdPersonSingular)
  );
}

export const thirdPersonPlurals = ["ustedes", "ellos", "ellas"] as const;
export type ThirdPersonPlural = typeof thirdPersonPlurals[number];
export function isThirdPersonPlural(obj: unknown): obj is ThirdPersonPlural {
  return (
    typeof obj === "string" &&
    thirdPersonPlurals.includes(obj as ThirdPersonPlural)
  );
}

export type Pronoun = SimplePronoun | ThirdPersonSingular | ThirdPersonPlural;
export function isPronoun(obj: unknown): obj is Pronoun {
  return (
    isSimplePronoun(obj) ||
    isThirdPersonSingular(obj) ||
    isThirdPersonPlural(obj)
  );
}

export const pronomialPrefixes = {
  yo: "me",
  tu: "te",
  usted: "se",
  el: "se",
  ella: "se",
  nosotros: "nos",
  vosotros: "vos",
  ustedes: "se",
  ellos: "se",
  ellas: "se",
};

export function addPronoun(set: ConjugationSet, reflexive: boolean) {
  const withPronoun = {} as ConjugationSet;
  for (const [pronoun, verb] of Object.entries(set)) {
    const firstWord = !reflexive
      ? pronoun
      : pronomialPrefixes[pronoun as Pronoun];
    withPronoun[pronoun as Pronoun] = `${firstWord} ${verb}`;
  }
  return withPronoun;
}
