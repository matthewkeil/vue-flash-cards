import { Conjugation } from "./types";

const specialCaseEndings = [
  "cer",
  "cir",
  "iar",
  "uar",
  "ger",
  "gir",
  //   "ear",
  //   "eer",
  //   "uir",
] as const;
type SpecialCaseEndings = typeof specialCaseEndings[number];
const IS_SPECIAL_CASE = new RegExp(`${specialCaseEndings.join("|")}$`);
export function isSpecialCase(verb: string) {
  return IS_SPECIAL_CASE.test(verb);
}

function fixCirCer(verb: Conjugation): Conjugation {
  const { yo } = verb.simpleConjugation.presentIndicative;
  verb.simpleConjugation.presentIndicative.yo = yo.slice(0, -2).concat("zco");

  // move "c" from root to ending
  const [vowel] = verb.ending;
  verb.ending = `c${vowel}r`;
  verb.root = verb.root.slice(0, -1);

  return verb;
}

export const irregularIarAccentuationList = [
  "aliar",
  "ampliar",
  "autografiar",
  "criar",
  "desafiar",
  "desliar",
  "desviar",
  "enfriar",
  "enviar",
  "espiar",
  "fiar",
  "fotografiar",
  "guiar",
  "liar",
  "malcriar",
  "resfriar",
  "rociar",
  "vaciar",
  "variar",
];

function fixIarAccentuation(verb: Conjugation): Conjugation {
  const { presentIndicative } = verb.simpleConjugation;
  const { yo, tu, usted, nosotros, vosotros } = presentIndicative;
  const singular = usted.slice(0, -2).concat("ía");
  const plural = usted.slice(0, -3).concat("ían");
  verb.simpleConjugation.presentIndicative = {
    yo: yo.slice(0, -2).concat("ío"),
    tu: tu.slice(0, -3).concat("ías"),
    el: singular,
    ella: singular,
    usted: singular,
    nosotros,
    vosotros: vosotros.slice(0, -3).concat("áis"),
    ellos: plural,
    ellas: plural,
    ustedes: plural,
  };

  return verb;
}

function fixUarAccentuation(verb: Conjugation): Conjugation {
  // TODO:

  // move "u" from root to ending
  verb.ending = "uar";
  verb.root = verb.root.slice(0, -1);
  return verb;
}
function fixCuarAccentuation(verb: Conjugation): Conjugation {
  // TODO:

  // move "cu" from root to ending
  verb.ending = "cuar";
  verb.root = verb.root.slice(0, -2);
  return verb;
}
function fixGuarAccentuation(verb: Conjugation): Conjugation {
  // TODO:

  // move "gu" from root to ending
  verb.ending = "guar";
  verb.root = verb.root.slice(0, -2);
  return verb;
}

function fixUirAccentuation(verb: Conjugation): Conjugation {
  // TODO:

  // move "u" from root to ending
  verb.ending = "uir";
  verb.root = verb.root.slice(0, -1);
  return verb;
}
function fixQuirAccentuation(verb: Conjugation): Conjugation {
  // TODO:
  // http://harrisacademy.ea.dundeecity.sch.uk/departments/modern-languages/department-documents/s4-revision/grammar-notes/present-tense

  // move "qu" from root to ending
  verb.ending = "quir";
  verb.root = verb.root.slice(0, -2);
  return verb;
}
function fixGuirAccentuation(verb: Conjugation): Conjugation {
  // http://harrisacademy.ea.dundeecity.sch.uk/departments/modern-languages/department-documents/s4-revision/grammar-notes/present-tense
  // TODO:

  // move "gu" from root to ending
  verb.ending = "guir";
  verb.root = verb.root.slice(0, -2);
  return verb;
}

const specialCaseConjugations = {
  cer: (verb: Conjugation): Conjugation => fixCirCer(verb),
  cir: (verb: Conjugation): Conjugation => fixCirCer(verb),
  iar: (verb: Conjugation): Conjugation => {
    // TODO: is this list a real thing or just on that one blog?
    if (irregularIarAccentuationList.includes(verb.infinitive)) {
      return fixIarAccentuation(verb);
    }

    // move "i" from root to ending
    verb.ending = "iar";
    verb.root = verb.root.slice(0, -1);

    return verb;
  },
  uar: (verb: Conjugation): Conjugation => {
    const fullEnding = verb.infinitive.slice(-4);
    if (fullEnding.startsWith("c")) {
      return fixCuarAccentuation(verb);
    }
    if (fullEnding.startsWith("g")) {
      return fixGuarAccentuation(verb);
    }

    // move "u" from root to ending
    verb.ending = "uar";
    verb.root = verb.root.slice(0, -1);
    return fixUarAccentuation(verb);
  },
  uir: (verb: Conjugation): Conjugation => {
    const fullEnding = verb.infinitive.slice(-4);
    if (fullEnding.startsWith("q")) {
      return fixQuirAccentuation(verb);
    }
    if (fullEnding.startsWith("g")) {
      return fixGuirAccentuation(verb);
    }
    return fixUirAccentuation(verb);
  },
  ger: (verb: Conjugation): Conjugation => {
    // http://harrisacademy.ea.dundeecity.sch.uk/departments/modern-languages/department-documents/s4-revision/grammar-notes/present-tense
    // TODO:

    // move "g" from root to ending
    verb.ending = "ger";
    verb.root = verb.root.slice(0, -1);
    return verb;
  },
  gir: (verb: Conjugation): Conjugation => {
    // http://harrisacademy.ea.dundeecity.sch.uk/departments/modern-languages/department-documents/s4-revision/grammar-notes/present-tense
    // TODO:

    // move "g" from root to ending
    verb.ending = "gir";
    verb.root = verb.root.slice(0, -1);
    return verb;
  },
};

export function handleSpecialCase(
  verb: Conjugation,
  checkValidity = true
): Conjugation {
  if (checkValidity && !isSpecialCase(verb.infinitive)) {
    throw new Error("infinitive is not a special case");
  }

  const ending = verb.infinitive.slice(-3) as SpecialCaseEndings;
  return specialCaseConjugations[ending](verb);
}
