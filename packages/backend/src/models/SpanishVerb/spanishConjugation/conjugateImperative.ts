import {
  verbSuffixes,
  ImperativeConjugation,
  SpanishVerbComponents,
} from "./types";

const imperativeSuffixes = {
  ar: [""],
  er: [""],
  ir: [""],
};
(function buildImperativeSuffixes() {
  for (const ending in imperativeSuffixes) {
    const firstLetter = ending[0];
    const suffixes = [...verbSuffixes[ending].presentSubjunctive];
    suffixes.shift();
    suffixes.splice(3, 0, `${firstLetter}d`);
    suffixes.unshift(firstLetter);
    (imperativeSuffixes as any)[ending] = suffixes;
  }
})();

export function conjugateImperative({
  root,
  verbEnding,
  reflexive,
}: SpanishVerbComponents): ImperativeConjugation {
  const suffixes =
    imperativeSuffixes[verbEnding as keyof typeof imperativeSuffixes];
  if (reflexive) {
    const firstLetter = verbEnding[0];
    const tuSuffix = firstLetter === "a" ? "a" : "e";
    const nosotorSuffix = firstLetter === "a" ? "émonos" : "ámonos";
    const vosotrosSuffix = firstLetter === "i" ? "í" : firstLetter;
    return {
      tu: root + tuSuffix + "te",
      noTu: "no te " + root + suffixes[1],
      usted: root + suffixes[2] + "se",
      nosotros: root + nosotorSuffix,
      vosotros: root + vosotrosSuffix + "os",
      noVosotros: "no os " + root + suffixes[5],
      ustedes: root + suffixes[6] + "se",
    };
  }
  return {
    tu: root + suffixes[0],
    noTu: "no " + root + suffixes[1],
    usted: root + suffixes[2],
    nosotros: root + suffixes[3],
    vosotros: root + suffixes[4],
    noVosotros: "no " + root + suffixes[5],
    ustedes: root + suffixes[6],
  };
}
