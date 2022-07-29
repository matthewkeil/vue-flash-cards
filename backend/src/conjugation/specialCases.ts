import { Conjugation } from "./types";

function fixCirCer(verb: Conjugation): Conjugation {
  const { yo } = verb.simpleConjugation.presentIndicative;
  verb.simpleConjugation.presentIndicative.yo = yo.slice(0, -2).concat("zco");

  // move "c" from root to ending
  const [vowel] = verb.ending;
  verb.ending = `c${vowel}r`;
  verb.root = verb.root.slice(0, -1);

  return verb;
}

const irregularIarAccentuationList = [
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
  // move "u" from root to ending
  verb.ending = "uar";
  verb.root = verb.root.slice(0, -1);

  verb.simpleConjugation.presentIndicative.yo = `${verb.root}úo`;
  verb.simpleConjugation.presentIndicative.tu = `${verb.root}úas`;
  verb.simpleConjugation.presentIndicative.el = `${verb.root}úa`;
  verb.simpleConjugation.presentIndicative.ella = `${verb.root}úa`;
  verb.simpleConjugation.presentIndicative.usted = `${verb.root}úa`;
  verb.simpleConjugation.presentIndicative.ellos = `${verb.root}úan`;
  verb.simpleConjugation.presentIndicative.ellas = `${verb.root}úan`;
  verb.simpleConjugation.presentIndicative.ustedes = `${verb.root}úan`;

  verb.simpleConjugation.presentSubjunctive.yo = `${verb.root}úe`;
  verb.simpleConjugation.presentSubjunctive.tu = `${verb.root}úes`;
  verb.simpleConjugation.presentSubjunctive.el = `${verb.root}úe`;
  verb.simpleConjugation.presentSubjunctive.ella = `${verb.root}úe`;
  verb.simpleConjugation.presentSubjunctive.usted = `${verb.root}úe`;
  verb.simpleConjugation.presentSubjunctive.ellos = `${verb.root}úen`;
  verb.simpleConjugation.presentSubjunctive.ellas = `${verb.root}úen`;
  verb.simpleConjugation.presentSubjunctive.ustedes = `${verb.root}úen`;

  verb.imperative.tu = `${verb.root}úa`;
  verb.imperative.noTu = `no ${verb.root}úes`;
  verb.imperative.usted = `${verb.root}úe`;
  verb.imperative.ustedes = `${verb.root}úen`;

  return verb;
}
function fixCuarAccentuation(verb: Conjugation): Conjugation {
  // move "cu" from root to ending
  verb.ending = "cuar";
  verb.root = verb.root.slice(0, -2);
  return verb;
}
function fixGuarAccentuation(verb: Conjugation): Conjugation {
  // move "gu" from root to ending
  verb.ending = "guar";
  verb.root = verb.root.slice(0, -2);

  verb.simpleConjugation.preteriteIndicative.yo = `${verb.root}güé`;

  const singular = `${verb.root}güe`;
  const plural = `${verb.root}güen`;
  verb.simpleConjugation.presentSubjunctive = {
    yo: singular,
    tu: `${verb.root}gües`,
    el: singular,
    ella: singular,
    usted: singular,
    nosotros: `${verb.root}güemos`,
    vosotros: `${verb.root}güéis`,
    ellos: plural,
    ellas: plural,
    ustedes: plural,
  };

  verb.imperative.noTu = `${verb.root}gües`;
  verb.imperative.usted = `${verb.root}güe`;
  verb.imperative.nosotros = `${verb.root}güemos`;
  verb.imperative.noVosotros = `no ${verb.root}güéis`;
  verb.imperative.ustedes = `${verb.root}güen`;

  return verb;
}

function fixUirAccentuation(verb: Conjugation): Conjugation {
  // move "u" from root to ending
  verb.ending = "uir";
  verb.root = verb.root.slice(0, -1);

  verb.gerund = `${verb.root}uyendo`;

  let singular = `${verb.root}uye`;
  let plural = `${verb.root}uyen`;
  verb.simpleConjugation.presentIndicative = {
    yo: `${verb.root}uyo`,
    tu: `${verb.root}uyes`,
    el: singular,
    ella: singular,
    usted: singular,
    nosotros: verb.simpleConjugation.presentIndicative.nosotros,
    vosotros: verb.simpleConjugation.presentIndicative.vosotros,
    ellos: plural,
    ellas: plural,
    ustedes: plural,
  };

  singular = `${verb.root}uyó`;
  plural = `${verb.root}uyeron`;
  verb.simpleConjugation.preteriteIndicative.el = singular;
  verb.simpleConjugation.preteriteIndicative.ella = singular;
  verb.simpleConjugation.preteriteIndicative.usted = singular;
  verb.simpleConjugation.preteriteIndicative.ellos = plural;
  verb.simpleConjugation.preteriteIndicative.ellas = plural;
  verb.simpleConjugation.preteriteIndicative.ustedes = plural;

  singular = `${verb.root}uya`;
  plural = `${verb.root}uyan`;
  verb.simpleConjugation.presentSubjunctive = {
    yo: `${verb.root}uya`,
    tu: `${verb.root}uyas`,
    el: singular,
    ella: singular,
    usted: singular,
    nosotros: `${verb.root}uyamos`,
    vosotros: `${verb.root}uyáis`,
    ellos: plural,
    ellas: plural,
    ustedes: plural,
  };

  singular = `${verb.root}uyera`;
  plural = `${verb.root}uyeran`;
  verb.simpleConjugation.imperfectSubjunctive = {
    yo: singular,
    tu: `${singular}s`,
    el: singular,
    ella: singular,
    usted: singular,
    nosotros: `${verb.root}uyéramos`,
    vosotros: `${verb.root}uyerais`,
    ellos: plural,
    ellas: plural,
    ustedes: plural,
  };

  verb.imperative = {
    tu: `${verb.root}uye`,
    noTu: `no ${verb.root}uyas`,
    usted: `${verb.root}uya`,
    nosotros: `${verb.root}uyamos`,
    vosotros: `${verb.root}uid`,
    noVosotros: `no ${verb.root}uyáis`,
    ustedes: `${verb.root}uyan`,
  };

  return verb;
}
function fixQuirAccentuation(verb: Conjugation): Conjugation {
  // http://harrisacademy.ea.dundeecity.sch.uk/departments/modern-languages/department-documents/s4-revision/grammar-notes/present-tense

  // move "qu" from root to ending
  verb.ending = "quir";
  verb.root = verb.root.slice(0, -2);

  verb.simpleConjugation.presentIndicative.yo = `${verb.root}co`;
  return verb;
}
function fixGuirAccentuation(verb: Conjugation): Conjugation {
  // http://harrisacademy.ea.dundeecity.sch.uk/departments/modern-languages/department-documents/s4-revision/grammar-notes/present-tense

  // move "gu" from root to ending
  verb.ending = "guir";
  verb.root = verb.root.slice(0, -2);

  verb.simpleConjugation.presentIndicative.yo = `${verb.root}go`;

  return verb;
}

function fixGerGir(verb: Conjugation): Conjugation {
  // http://harrisacademy.ea.dundeecity.sch.uk/departments/modern-languages/department-documents/s4-revision/grammar-notes/present-tense
  verb.simpleConjugation.presentIndicative.yo = `${verb.root}jo`;
  return verb;
}

const specialCaseConjugations = {
  cer: (verb: Conjugation): Conjugation => fixCirCer(verb),
  cir: (verb: Conjugation): Conjugation => fixCirCer(verb),
  iar: (verb: Conjugation): Conjugation => {
    // move "i" from root to ending
    verb.ending = "iar";
    verb.root = verb.root.slice(0, -1);

    // TODO: is this list a real thing or just on that one blog?
    //       maybe all get fixed?
    if (irregularIarAccentuationList.includes(verb.infinitive)) {
      return fixIarAccentuation(verb);
    }

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
    // move "g" from root to ending
    verb.ending = "ger";
    verb.root = verb.root.slice(0, -1);
    return fixGerGir(verb);
  },
  gir: (verb: Conjugation): Conjugation => {
    // move "g" from root to ending
    verb.ending = "gir";
    verb.root = verb.root.slice(0, -1);
    return fixGerGir(verb);
  },
};
type SpecialCaseEndings = keyof typeof specialCaseConjugations;
const IS_SPECIAL_CASE = new RegExp(
  `${Object.keys(specialCaseConjugations).join("|")}$`
);
export function isSpecialCase(verb: string) {
  return IS_SPECIAL_CASE.test(verb);
}

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
