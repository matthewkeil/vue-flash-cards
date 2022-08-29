// progressive is continuous

const englishToSpanishConversion = {
  past: {
    simple: "preteriteProgressive",
    perfect: "",
    continuous: "imperfectProgressive",
    perfectContinuous: "",
  },
  present: {
    simple: "presentIndicative",
    perfect: "",
    continuous: "presentProgressive",
    perfectContinuous: "",
  },
  future: {
    simple: "futureProgressive",
    perfect: "",
    continuous: "",
    perfectContinuous: "",
  },
  conditional: {
    present: "potentialSimple",
    presentContinuous: "",
    past: "",
    pastContinuous: "",
  },
};

const spanishToEnglishConversion = {
  simple: {
    presentIndicative: "presentSimple",
    presenteProgresivo: "presentContinuous", // no building this `yo estoy moviendo`
    imperfectProgressive: "",
    preteriteProgressive: "",
    futureProgressive: "",
    potentialSimple: "",
    presentSubjunctive: "",
    imperfectSubjunctive: "",
  },
  complex: {
    perfectIndicative: "",
    pluperfectIndicative: "",
    preteriteAnterior: "",
    futurePerfect: "",
    potentialContinuous: "",
    perfectSubjunctive: "",
    pluperfectSubjunctive: "",
  },
};
