const radicallyChangingVerbs = {
  abrir: {
    pastParticiple: "abierto",
  },
  absolver: "13.3.28",
};

interface Verb {
  spanish: string;
  english: string[];
  related?: string[];
  phrases?: {
    sp: string;
    en: string[];
  }[];
}

const verbs: Verb[] = [
  {
    spanish: "abatir",
    english: ["to knock down", "to overthrow", "to throw down"],
    phrases: [
      {
        sp: "abatidamente",
        en: ["dejectedly"],
      },
      {
        sp: "el abatimiento",
        en: ["abasement", "depression", "discouragement"],
      },
      {
        sp: "absatir el ánimo",
        en: ["to feel discouraged", "low in spirit"],
      },
      {
        sp: "batir",
        en: ["to beat", "strike"],
      },
      {
        sp: "batir palmas",
        en: ["to applaud", "clap"],
      },
      {
        sp: "abatido(a)",
        en: ["dejected"],
      },
    ],
  },
  {
    spanish: "abrasar",
    english: ["to burn", "to set on fire"],
    phrases: [
      {
        sp: "abrasandamente",
        en: ["ardently", "fervently"],
      },
      {
        sp: "abrasado(a)",
        en: ["burning emotionally", "flushed with anger"],
      },
      {
        sp: "el abrasamiento",
        en: ["burning, excessive passion"],
      },
      {
        sp: "abrasarse vivo",
        en: ["to burn with passion"],
      },
      {
        sp: "abrasarse de amor",
        en: ["to be passionately in love"],
      },
      {
        sp: "abrasarse en deseos",
        en: ["to become full of desire"],
      },
    ],
  },
  {
    spanish: "abrazar",
    english: ["to embrace", "to hug", "to clamp"],
    phrases: [
      {
        sp: "un abrazo",
        en: ["an embrace", "a hug"],
      },
      {
        sp: "el abrazamiento",
        en: ["embracing"],
      },
      {
        sp: "una abrazada",
        en: ["embrace"],
      },
      {
        sp: "una abrazadera",
        en: ["a clamp", "a clasp"],
      },
    ],
  },
  {
    spanish: "abrir",
    english: ["to open", "to let in" /*, "to let out"*/],
    phrases: [
      {
        sp: "un abrimiento",
        en: ["opening"],
      },
      {
        sp: "abrir paso",
        en: ["to make way"],
      },
    ],
  },
  {
    spanish: "absolver",
    english: ["to absolve", "to acquit"],
    phrases: [
      {
        sp: "la absolución",
        en: ["absolution", "acquittal", "pardon"],
      },
      {
        sp: "absolutamente",
        en: ["absolutely"],
      },
      {
        sp: "absoluto(a)",
        en: ["absolute", "unconditional"],
      },
      {
        sp: "en absoluto",
        en: ["absolutely"],
      },
      {
        sp: "nada en absoluto",
        en: ["nothing at all"],
      },
      {
        sp: "el absolutismo",
        en: ["absolutism", "despotism"],
      },
      {
        sp: "la absolución libre",
        en: ["not guilty verdict"],
      },
      {
        sp: "salir absuelto",
        en: ["to come out clearly of any charges"],
      },
    ],
  },
  {
    spanish: "abstenerse",
    english: ["to abstain"],
    phrases: [
      {
        sp: "la abstención",
        en: ["abstention", "forbearance"],
      },
      {
        sp: "abstenerse de",
        en: ["to abstain from", "to refrain from"],
      },
      {
        sp: "la abstinencia",
        en: ["fasting", "abstinence from sex"],
      },
      {
        sp: "hacer abstinencia",
        en: ["to fast"],
      },
      {
        sp: "el (la) abstencionista",
        en: ["abstentionist"],
      },
      {
        sp: "el día de abstinencia",
        en: ["day of fasting"],
      },
    ],
  },
  {
    spanish: "aburrir",
    english: ["to annoy", "to bore", "to vex"],
    phrases: [
      {
        sp: "el aburrimiento",
        en: ["boredom", "weariness"],
      },
      {
        sp: "un(a) aburridor(a)",
        en: ["boring person"],
      },
      {
        sp: "una cara de aburrimiento",
        en: ["a bored look"],
      },
      {
        sp: "la aburrición",
        en: ["annoyance", "ennui"],
      },
      {
        sp: "aburridamente",
        en: ["tediously"],
      },
    ],
  },
  {
    spanish: "aburrirse",
    english: ["to grow bored", "to grow tired of", "to grow weary"],
    phrases: [
      {
        sp: "aburrirse como una ostra",
        en: ["to be bored stiff (like an oyster)"],
      },
      {
        sp: "Qué aburrimiento!",
        en: ["What a bore!"],
      },
    ],
  },
  {
    spanish: "acabar",
    english: ["to finish", "to end", "to complete"],
    phrases: [
      {
        sp: "el acabamiento",
        en: ["completion"],
      },
      {
        sp: "acabar de (+inf.)",
        en: ["to have just (en. past participle)"],
      },
      {
        sp: "acabar por",
        en: ["to end by", "to ... finally"],
      },
      {
        sp: "acabar con",
        en: ["to put an end to"],
      },
    ],
  },
  {
    spanish: "acelerar",
    english: ["to accelerate", "to speed", "to hasten", "to hurry"],
    phrases: [
      {
        sp: "aceleradamente",
        en: ["hastily", "quickly", "speedily"],
      },
      {
        sp: "la aceleraciòn",
        en: ["haste", "acceleration"],
      },
      {
        sp: "acelerante",
        en: ["accelerating"],
      },
      {
        sp: "el aceleramiento",
        en: ["acceleration"],
      },
    ],
  },
  {
    spanish: "aceptar",
    english: ["to accept"],
    phrases: [
      {
        sp: "aceptable",
        en: ["acceptable"],
      },
      {
        sp: "el(la) aceptador(a)",
        en: ["acceptor"],
      },
      {
        sp: "el(la) aceptante",
        en: ["acceptor"],
      },
      {
        sp: "la aceptactión",
        en: ["acceptance", "acceptation"],
      },
      {
        sp: "aceptar + inf.",
        en: ["to agree + inf."],
      },
      {
        sp: "aceptar empleo",
        en: ["to take a job"],
      },
      {
        sp: "acepto(a)",
        en: ["acceptable"],
      },
      {
        sp: "aceptar o rechazar una oferta",
        en: ["to accept or reject an offer"],
      },
    ],
  },
  {
    spanish: "acercar",
    related: ["cercar", "acercarse"],
    english: ["to bring near", "to place near"],
    phrases: [
      {
        sp: "cerca de",
        en: ["near"],
      },
      {
        sp: "de cerca",
        en: ["close at hand", "closely"],
      },
      {
        sp: "cercano(a)",
        en: ["near", "close"],
      },
      {
        sp: "las cercanías",
        en: ["neighborhood", "suburbs"],
      },
      {
        sp: "acerca de",
        en: ["about", "regarding", "with regard to"],
      },
      {
        sp: "el acercamiento",
        en: ["approaching", "approximation"],
      },
      {
        sp: "acerca de esto",
        en: ["hereof"],
      },
      {
        sp: "mis parientes cercanos",
        en: ["my close relatives"],
      },
    ],
  },
  {
    spanish: "acercarse",
    related: ["cercar", "acercar"],
    english: ["to approach", "to draw near", "to get close"],
  },
  {
    spanish: "acertar",
    english: [
      "to hit the mark",
      "to hit upon",
      "to do (something) right",
      "to succeed in",
      "to guess right",
    ],
    phrases: [
      {
        sp: "acertado(a)",
        en: ["proper", "fit", "sensible"],
      },
      {
        sp: "el(la) acertador(a)",
        en: ["good guesser"],
      },
      {
        sp: "acertar a",
        en: ["to happen to + inf."],
      },
      {
        sp: "acertar con",
        en: ["to come across", "to find"],
      },
      {
        sp: "es cierto",
        en: ["it's certain", "sure"],
      },
      {
        sp: "el acertamiento",
        en: ["tact", "ability"],
      },
      {
        sp: "el acertijo",
        en: ["riddle"],
      },
      {
        sp: "acertadamente",
        en: ["opportunely", "correctly"],
      },
      {
        sp: "ciertamente",
        en: ["certainly"],
      },
    ],
  },
  {
    spanish: "aclamar",
    english: ["to acclaim", "to applaud", "to shout", "to hail"],
    phrases: [
      {
        sp: "aclamado(a)",
        en: ["acclaimed"],
      },
      {
        sp: "la aclamación",
        en: ["acclaim", "acclamation"],
      },
      {
        sp: "aclamable",
        en: ["laudable"],
      },
      {
        sp: "por aclamación",
        en: ["unanimously"],
      },
    ],
  },
  {
    spanish: "aclarar",
    english: [
      "to explain",
      "to clarify",
      "to make clear",
      "to rinse",
      "to clear",
    ],
    phrases: [
      {
        sp: "una aclaración",
        en: ["explanation"],
      },
      {
        sp: "aclarado(a)",
        en: ["cleared", "made clear", "rinsed"],
      },
      {
        sp: "aclarar la voz",
        en: ["to clear one's throat"],
      },
      {
        sp: "poner en claro",
        en: ["to clarify a point", "to put something clearly"],
      },
      {
        sp: "Clara que sí!",
        en: ["Of course!"],
      },
      {
        sp: "Clara que no!",
        en: ["Of course not!"],
      },
      {
        sp: "Está claro?",
        en: ["Is that clear?"],
      },
    ],
  },
  {
    spanish: "acompañar",
    english: ["to accompany", "to escort", "to go with", "to keep company"],
    phrases: [
      {
        sp: "el(la) acompañador(a)",
        en: ["companion", "chaperon", "accompanist"],
      },
      {
        sp: "el acompañamiento",
        en: ["accompaniment"],
      },
      {
        sp: "el(la) acompañando(a)",
        en: ["assistant"],
      },
      {
        sp: "un(a) compañero(a)",
        en: ["mate", "companion"],
      },
      {
        sp: "compañero de cuarto",
        en: ["roomate"],
      },
      {
        sp: "compañero de juego",
        en: ["playmate"],
      },
    ],
  },

  {
    spanish: "",
    english: [],
    phrases: [
      {
        sp: "",
        en: [],
      },
      {
        sp: "",
        en: [],
      },
      {
        sp: "",
        en: [],
      },
      {
        sp: "",
        en: [],
      },
      {
        sp: "",
        en: [],
      },
      {
        sp: "",
        en: [],
      },
      {
        sp: "",
        en: [],
      },
      {
        sp: "",
        en: [],
      },
    ],
  },
  {
    spanish: "",
    english: [""],
  },

  /**
   *
   *
   *
   *
   *
   *
   *
   *
   *
   */
  {
    spanish: "",
    english: [""],
  },
  {
    spanish: "",
    english: [""],
  },
  {
    spanish: "",
    english: [""],
  },
  {
    spanish: "",
    english: [""],
  },
  {
    spanish: "",
    english: [""],
  },
  {
    spanish: "",
    english: [""],
  },
  {
    spanish: "",
    english: [""],
  },
  {
    spanish: "",
    english: [""],
  },

  {
    spanish: "aceptar",
    english: [],
    phrases: [
      {
        sp: "",
        en: [],
      },
      {
        sp: "",
        en: [],
      },
      {
        sp: "",
        en: [],
      },
      {
        sp: "",
        en: [],
      },
      {
        sp: "",
        en: [],
      },
      {
        sp: "",
        en: [],
      },
      {
        sp: "",
        en: [],
      },
      {
        sp: "",
        en: [],
      },
    ],
  },
  {
    spanish: "aceptar",
    english: [],
    phrases: [
      {
        sp: "",
        en: [],
      },
      {
        sp: "",
        en: [],
      },
      {
        sp: "",
        en: [],
      },
      {
        sp: "",
        en: [],
      },
      {
        sp: "",
        en: [],
      },
      {
        sp: "",
        en: [],
      },
      {
        sp: "",
        en: [],
      },
      {
        sp: "",
        en: [],
      },
    ],
  },
  {
    spanish: "aceptar",
    english: [],
    phrases: [
      {
        sp: "",
        en: [],
      },
      {
        sp: "",
        en: [],
      },
      {
        sp: "",
        en: [],
      },
      {
        sp: "",
        en: [],
      },
      {
        sp: "",
        en: [],
      },
      {
        sp: "",
        en: [],
      },
      {
        sp: "",
        en: [],
      },
      {
        sp: "",
        en: [],
      },
    ],
  },
  {
    spanish: "aceptar",
    english: [],
    phrases: [
      {
        sp: "",
        en: [],
      },
      {
        sp: "",
        en: [],
      },
      {
        sp: "",
        en: [],
      },
      {
        sp: "",
        en: [],
      },
      {
        sp: "",
        en: [],
      },
      {
        sp: "",
        en: [],
      },
      {
        sp: "",
        en: [],
      },
      {
        sp: "",
        en: [],
      },
    ],
  },
  {
    spanish: "aceptar",
    english: [],
    phrases: [
      {
        sp: "",
        en: [],
      },
      {
        sp: "",
        en: [],
      },
      {
        sp: "",
        en: [],
      },
      {
        sp: "",
        en: [],
      },
      {
        sp: "",
        en: [],
      },
      {
        sp: "",
        en: [],
      },
      {
        sp: "",
        en: [],
      },
      {
        sp: "",
        en: [],
      },
    ],
  },
  {
    spanish: "aceptar",
    english: [],
    phrases: [
      {
        sp: "",
        en: [],
      },
      {
        sp: "",
        en: [],
      },
      {
        sp: "",
        en: [],
      },
      {
        sp: "",
        en: [],
      },
      {
        sp: "",
        en: [],
      },
      {
        sp: "",
        en: [],
      },
      {
        sp: "",
        en: [],
      },
      {
        sp: "",
        en: [],
      },
    ],
  },
  {
    spanish: "aceptar",
    english: [],
    phrases: [
      {
        sp: "",
        en: [],
      },
      {
        sp: "",
        en: [],
      },
      {
        sp: "",
        en: [],
      },
      {
        sp: "",
        en: [],
      },
      {
        sp: "",
        en: [],
      },
      {
        sp: "",
        en: [],
      },
      {
        sp: "",
        en: [],
      },
      {
        sp: "",
        en: [],
      },
    ],
  },

  {
    spanish: "abajar",
    related: ["bajar"],
    english: ["to go down"],
  },
  {
    spanish: "bajar",
    related: ["abajar"],
    english: ["to go down"],
  },
  {
    spanish: "abalanzar",
    english: ["to balance"],
  },
  {
    spanish: "abalanzarse",
    english: ["to hurl oneself"],
  },
  {
    spanish: "abalar",
    english: ["to move and shake", "to flail"],
  },
  {
    spanish: "abalear",
    english: ["to shoot at", "to wound or kill by gunshot"],
  },
  {
    spanish: "abalizar",
    english: ["to mark with buoys"],
  },
  {
    spanish: "abanar",
    english: ["to cool with a fan"],
  },
  {
    spanish: "abandonar",
    english: ["to abandon"],
  },
  {
    spanish: "abanicar",
    english: ["to fan"],
  },
  {
    spanish: "abaratar",
    english: ["to make cheaper", "to reduce prices"],
  },
  {
    spanish: "abdicar",
    english: ["to abdicate"],
  },
];

const c: Verb[] = [
  {
    spanish: "cercar",
    english: ["to enclose", "fence in"],
    related: ["acercar", "acercarse"],
    phrases: [
      {
        sp: "la cerca",
        en: ["fence", "hedge"],
      },
      {
        sp: "el cercado",
        en: ["fenced in area"],
      },
    ],
  },
];

const r: Verb[] = [
  {
    spanish: "reclamar",
    english: ["to claim", "to reclaim"],
    phrases: [
      {
        sp: "la reclamación",
        en: ["claim", "demand"],
      },
      {
        sp: "reclamar en juicio",
        en: ["to sue"],
      },
      {
        sp: "reclamar por daños",
        en: ["to claim damages"],
      },
    ],
  },
];
