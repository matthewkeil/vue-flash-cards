interface VerbComponents {
  root: string;
  verbEnding: string;
  reflexive: boolean;
}

type SimplePronoun = "yo" | "tu" | "nosotros" | "vosotros";
type ThirdPersonSingular = "usted" | "el" | "ella";
type ThirdPersonPlural = "ustedes" | "ellos" | "ellas";
type Pronoun = SimplePronoun | ThirdPersonSingular | ThirdPersonPlural;

type ConjugationSet = { [key in SimplePronoun]: string } &
  Partial<
    | { usted: string; el: never; ella: never }
    | { usted: never; el: string; ella: never }
    | { usted: never; el: never; ella: string }
  > &
  Partial<
    | { ustedes: string; ellos: never; ellas: never }
    | { ustedes: never; ellos: string; ellas: never }
    | { ustedes: never; ellos: never; ellas: string }
  >;

interface SimpleTenses {
  presentIndicative: string[];
  imperfectIndicative: string[];
  preteriteIndicative: string[];
  futureIndicative: string[];
  potentialSimple: string[];
  presentSubjunctive: string[];
  imperfectSubjunctive: string[];
}

type SimpleConjugation = { [key in keyof SimpleTenses]: ConjugationSet };

const verbSuffixes: { [ending: string]: SimpleTenses } = {
  ar: {
    presentIndicative: ["o", "as", "a", "amos", "ais", "an"],
    imperfectIndicative: ["aba", "abas", "aba", "ábamos", "abais", "aban"],
    preteriteIndicative: ["é", "aste", "ó", "amos", "asteis", "aron"],
    futureIndicative: ["aré", "arás", "ará", "aremos", "aréis", "arán"],
    potentialSimple: ["aría", "arías", "aría", "aríamos", "aríais", "arían"],
    presentSubjunctive: ["e", "es", "e", "emos", "éis", "en"],
    imperfectSubjunctive: ["ara", "aras", "ara", "áramos", "arais", "aran"],
  },
  er: {
    presentIndicative: ["o", "es", "e", "emos", "eís", "en"],
    imperfectIndicative: ["ía", "ías", "ía", "íamos", "íais", "ían"],
    preteriteIndicative: ["í", "iste", "ió", "imos", "isteis", "ieron"],
    futureIndicative: ["eré", "erás", "erá", "eremos", "eréis", "erán"],
    potentialSimple: ["ería", "erías", "ería", "eríamos", "eríais", "erían"],
    presentSubjunctive: ["a", "as", "a", "amos", "áis", "an"],
    imperfectSubjunctive: [
      "iera",
      "ieras",
      "iera",
      "iéramos",
      "ierais",
      "ieran",
    ],
  },
  ir: {
    presentIndicative: ["o", "es", "e", "imos", "ís", "en"],
    imperfectIndicative: ["ía", "ías", "ía", "íamos", "íais", "ían"],
    preteriteIndicative: ["ió", "iste", "ió", "imos", "isteis", "ieron"],
    futureIndicative: ["iré", "irás", "irá", "iremos", "iréis", "irán"],
    potentialSimple: ["iría", "irías", "iría", "iríamos", "iríais", "irían"],
    presentSubjunctive: ["a", "as", "a", "amos", "áis", "an"],
    imperfectSubjunctive: [
      "iera",
      "ieras",
      "iera",
      "iéramos",
      "ierais",
      "ieran",
    ],
  },
};
function buildSimpleTense(root: string, suffixes: string[]) {
  const conjugated = {
    tu: root + suffixes[1],
    usted: root + suffixes[2],
    nosotros: root + suffixes[3],
    vosotros: root + suffixes[4],
    ustedes: root + suffixes[5],
  } as ConjugationSet;
  if (suffixes[0]) {
    conjugated.yo = root + suffixes[0];
  }
  return conjugated;
}
function conjugateSimple({ root, verbEnding }: VerbComponents) {
  const conjugation: any = {};
  for (const [tense, suffixes] of Object.entries(verbSuffixes[verbEnding])) {
    conjugation[tense] = buildSimpleTense(root, suffixes);
  }
  return conjugation as SimpleConjugation;
}

const haberConjugation = {
  perfectIndicative: ["he", "has", "ha", "hemos", "habéis", "han"],
  pluperfectIndicative: [
    "había",
    "habías",
    "había",
    "habíamos",
    "habíais",
    "habían",
  ],
  preteriteAnterior: [
    "hube",
    "hubiste",
    "hubo",
    "hubimos",
    "hubisteis",
    "hubieron",
  ],
  futurePerfect: ["habré", "habrás", "habrá", "habremos", "habréis", "habrán"],
  potentialContinuous: [
    "habría",
    "habrías",
    "habría",
    "habríamos",
    "habríais",
    "habrían",
  ],
  perfectSubjunctive: ["haya", "hayas", "haya", "hayamos", "hayáis", "hayan"],
  pluperfectSubjunctive: [
    "hubiera",
    "hubieras",
    "hubiera",
    "hubiéramos",
    "hubierais",
    "hubieran",
  ],
};
type ComplexConjugation = {
  [key in keyof typeof haberConjugation]: ConjugationSet;
};
function buildComplexTense(pastParticiple: string, prefixes: string[]) {
  return {
    yo: `${prefixes[0]} ${pastParticiple}`,
    tu: `${prefixes[1]} ${pastParticiple}`,
    usted: `${prefixes[2]} ${pastParticiple}`,
    nosotros: `${prefixes[3]} ${pastParticiple}`,
    vosotros: `${prefixes[4]} ${pastParticiple}`,
    ustedes: `${prefixes[5]} ${pastParticiple}`,
  } as ConjugationSet;
}
function conjugateComplex(pastParticiple: string) {
  const conjugation: any = {};
  for (const [tense, prefixes] of Object.entries(haberConjugation)) {
    conjugation[tense] = buildComplexTense(pastParticiple, prefixes);
  }
  return conjugation as ComplexConjugation;
}

const imperativeSuffixes = {
  ar: [""],
  er: [""],
  ir: [""],
};
function buildImperativeSuffixes() {
  for (const ending in imperativeSuffixes) {
    const firstLetter = ending[0];
    const suffixes = [...verbSuffixes[ending].presentSubjunctive];
    suffixes.shift();
    suffixes.splice(3, 0, `${firstLetter}d`);
    suffixes.unshift(firstLetter);
    (imperativeSuffixes as any)[ending] = suffixes;
  }
}
buildImperativeSuffixes();
function buildImperative({ root, verbEnding, reflexive }: VerbComponents) {
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

const pronomialPrefixes = {
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

function addPronoun(set: ConjugationSet, reflexive: boolean) {
  const newSet = {} as ConjugationSet;
  for (const [pronoun, verb] of Object.entries(set)) {
    const firstWord = reflexive
      ? pronoun
      : pronomialPrefixes[pronoun as Pronoun];
    newSet[pronoun as Pronoun] = `${firstWord} ${verb}`;
  }
  return newSet;
}

function buildGerund({ root, verbEnding, reflexive }: VerbComponents) {
  let suffix;
  if (verbEnding.startsWith("a")) {
    suffix = reflexive ? "ándose" : "ando";
  } else {
    suffix = reflexive ? "iéndose" : "iendo";
  }
  return root + suffix;
}

function buildPastParticiple({ root, verbEnding }: VerbComponents) {
  if (verbEnding.startsWith("a")) {
    return root + "ado";
  }
  return root + "ido";
}

function conjugate(verb: string) {
  let _verb = verb;
  const reflexive = _verb.endsWith("se");
  if (reflexive) {
    _verb = _verb.slice(0, -2);
  }
  //   const specialCase = checkSpecialCases(_verb);
  const verbEnding = _verb.slice(-2);
  const root = _verb.slice(0, -2);
  const components = { root, verbEnding, reflexive };
  const gerund = buildGerund(components);
  const pastParticiple = buildPastParticiple(components);
  const simpleConjugation = conjugateSimple(components);
  const complexConjugation = conjugateComplex(pastParticiple);
  const imperative = buildImperative(components);
  console.log(imperative);
}

conjugate("apoderarse");

const irregularVerbs = [
  "abastecer",
  "abolir",
  "aborrecer",
  "abrir",
  "abstenerse",
  "abstraer",
  "acaecer",
  "acertar",
  "acontecer",
  "acordar",
  "acostar",
  "",
];
