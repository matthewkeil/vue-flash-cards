import { EnglishConjugatedTense } from "./types";

export function amIsAre(conjugated: string): EnglishConjugatedTense {
  return {
    I: `am ${conjugated}`,
    you: `are ${conjugated}`,
    it: `is ${conjugated}`,
    we: `are ${conjugated}`,
    youAll: `are ${conjugated}`,
    they: `are ${conjugated}`,
  };
}

export function wasWere(conjugated: string): EnglishConjugatedTense {
  return {
    I: `was ${conjugated}`,
    you: `were ${conjugated}`,
    it: `was ${conjugated}`,
    we: `were ${conjugated}`,
    youAll: `were ${conjugated}`,
    they: `were ${conjugated}`,
  };
}

const vowels = ["a", "e", "i", "o", "u", "y"];

export function isVowel(val: unknown): boolean {
  return typeof val === "string" && vowels.includes(val);
}

export function endsConsonantVowelConsonant(root: string): boolean {
  const [thirdFromEnd, secondFromEnd, end] = root.slice(-3);
  const thirdIsConsonant = !vowels.includes(thirdFromEnd);
  const secondIsVowel = vowels.includes(secondFromEnd);
  const endIsConsonant = !vowels.includes(end);
  return thirdIsConsonant && secondIsVowel && endIsConsonant;
}
