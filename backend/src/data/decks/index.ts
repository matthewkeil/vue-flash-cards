// export const allDecks = {
//   top50: [],
//   cooking: [
//     "saltear", "hervir", "cortar", "hornear", "mezclar"

//     picar - to chop
//     calentar - to warm
//     enfriar - to cool
//     secar - to dry
//     freir - to fry
//     calentar - to heat
//     asar - to grill
//     derretir - to melt
//     rebozar - to roll
//     recalentar - to reheat
//     precalentar - to preheat
//     pelar, mondar - to peel
//     lavar - to wash
//     batir - whip, beat
//     rebanar - to slice
//     quemar - to burn
//     rellenar - to stuff
//     dorar - to brown
//     descongelar - to defrost
//     incorporar - to fold
//     envolver - to wrap
//     moldear - to form
//     picar - to mince
//     voltear - to turn
//     quitar - to trim
//     asar - to roast
//     probar, degustar - to taste
//     cubir - to cover

//     verter, echar - to pour

//     hacer - to make
//     humedecer - to moisten

//     tostar - to toast
//     atar - to tie

// añadir - to add
// mojar - to wet
// salar - to salt
// revolver, remover - to stir
// sazonar - to season
// restregar - to scrub
// regar con su jugo - to baste
// revisar - to check
// decorar - to decorate
// ],
// };

const cooking = [
  {
    sp: "pelar, mondar",
    en: ["peel"],
    example: {
      sp: "Pela la manzana y córtala en rodajas.",
      en: "Peel the apple and slice it in rounds.",
    },
  },
  {
    sp: "verter, echar",
    en: ["pour"],
    example: {
      sp: "Vierte la leche lentamente a la mezcla.",
      en: "Pour the milk into the mixture slowly.",
    },
  },
  {
    sp: "cortar en cuatro, descuartizar",
    en: ["quarter"],
    example: {
      sp: "Corta el pollo entero en cuatro antes de servir.",
      en: "Quarter the whole chicken before serving.",
    },
  },
  {
    sp: "descremar (leche), espumar (sopa)",
    en: ["skim"],
    example: {
      sp: "Espuma la grasa del caldo.",
      en: "Skim the fat off the broth.",
    },
  },
  {
    sp: "remojar, poner en remojo",
    en: ["soak"],
    example: {
      sp: "Remoja las habichuelas por 24 horas antes de cocinarlas.",
      en: "Soak the beans for 24 hours before cooking.",
    },
  },
  {
    sp: "probar, degustar",
    en: ["taste"],
    example: {
      sp: "Prueba la salsa de tomate para ver si necesita más sal.",
      en: "Taste the tomato sauce to see if it needs more salt.",
    },
  },
  {
    sp: "regar con su jugo",
    en: "baste",
    example: {
      sp: "Riega el pavo con su jugo cada minuto.",
      en: "Baste the turkey every minute.",
    },
  },
  {
    sp: "freír",
    en: "fry",
    example: {
      sp: "Fríe las papas en aceite vegetal.",
      en: "Fry the potatoes in vegetable oil.",
    },
  },
  {
    sp: "hacer puré",
    en: "puree",
    example: {
      sp: "Haz un puré de los vegetales en una licuadora.",
      en: "Puree the vegetables in a blender.",
    },
  },
  {
    sp: "hervir a fuego lento",
    en: "simmer",
    example: {
      sp: "Hierve los vegetales a fuego lento por 15 minutos.",
      en: "Simmer the vegetables for 15 minutes.",
    },
  },
  {
    sp: "echar con una cuchara",
    en: "spoon",
    example: {
      sp: "Echa la masa de galletas en la bandeja de horno.",
      en: "Spoon the dough onto the baking sheet.",
    },
  },
  {
    sp: "añadir",
    en: ["add"],
    example: { sp: "Añade agua a la mezcla.", en: "Add water to the mixture." },
  },
  {
    sp: "hornear",
    en: ["bake"],
    example: {
      sp: "Hornea el pastel a 350 grados.",
      en: "Bake the cake at 350 degrees.",
    },
  },
  {
    sp: "batir",
    en: ["beat"],
    example: {
      sp: "Bate las claras de huevo hasta que estén firmes.",
      en: "Beat the egg whites until stiff.",
    },
  },
  {
    sp: "mezclar",
    en: ["blend"],
    example: {
      sp: "Mezcla los huevos y el azúcar.",
      en: "Blend the eggs and the sugar.",
    },
  },
  {
    sp: "hervir",
    en: ["boil"],
    example: {
      sp: "Hierve el agua antes de añadir la pasta.",
      en: "Boil the water before adding the pasta.",
    },
  },
  {
    sp: "dorar",
    en: ["brown"],
    example: {
      sp: "Dora la carne por un minuto.",
      en: "Brown the meat for one minute.",
    },
  },
  {
    sp: "trinchar",
    en: ["carve"],
    example: {
      sp: "Trinche el pavo después de dejarlo reposar.",
      en: "Carve the turkey after letting it rest.",
    },
  },
  {
    sp: "revisar",
    en: ["check"],
    example: {
      sp: "Revisa la temperatura del horno con un termómetro.",
      en: "Check the oven temperature with a thermometer.",
    },
  },
  {
    sp: "picar",
    en: ["chop"],
    example: {
      sp: "Pica el apio, las zanahorias y las cebollas.",
      en: "Chop the celery, carrots, and onions.",
    },
  },
  {
    sp: "enfriar",
    en: ["cool"],
    example: {
      sp: "Enfría los frijoles verdes en un baño de hielo.",
      en: "Cool the green beans in an ice bath.",
    },
  },
  {
    sp: "cubrir",
    en: ["cover"],
    example: {
      sp: "Cubre la carne con papel de aluminio.",
      en: "Cover the meat with aluminum foil.",
    },
  },
  {
    sp: "cortar",
    en: ["cut"],
    example: {
      sp: "Corta el pollo en trozos.",
      en: "Cut the chicken into pieces.",
    },
  },
  {
    sp: "decorar",
    en: ["decorate"],
    example: {
      sp: "Decora el pastel con crema de mantequilla.",
      en: "Decorate the cake with buttercream.",
    },
  },
  {
    sp: "descongelar",
    en: ["defrost"],
    example: {
      sp: "Descongela el pollo antes de cocinar.",
      en: "Defrost the chicken before cooking.",
    },
  },
  {
    sp: "desechar",
    en: ["discard"],
    example: { sp: "Desecha las mondas.", en: "Discard the peelings." },
  },
  {
    sp: "echar",
    en: ["drop"],
    example: {
      sp: "Echa el huevo al agua hirviente.",
      en: "Drop the egg into the boiling water.",
    },
  },
  {
    sp: "secar",
    en: ["dry"],
    example: {
      sp: "Seca el pollo entero en el refrigerador antes de hornear.",
      en: "Dry the whole chicken in the refrigerator before baking.",
    },
  },
  {
    sp: "incorporar",
    en: ["fold"],
    example: {
      sp: "Incorpora la clara de huevo lentamente a la mezcla.",
      en: "Fold the egg whites slowly into the mixture.",
    },
  },
  {
    sp: "moldear",
    en: ["form"],
    example: {
      sp: "Moldea la masa en bolitas.",
      en: "Form the dough into balls.",
    },
  },
  {
    sp: "glasear",
    en: ["glaze"],
    example: {
      sp: "Glasea el pastel con glaseado de chocolate.",
      en: "Glaze the cake with chocolate icing.",
    },
  },
  {
    sp: "asar",
    en: ["grill"],
    example: {
      sp: "Asa las costillas a una temperatura baja.",
      en: "Grill the ribs at a low temperature.",
    },
  },
  {
    sp: "calentar",
    en: ["heat"],
    example: {
      sp: "Calienta la mezcla en un baño de maría.",
      en: "Heat the mixture using a bain-marie.",
    },
  },
  {
    sp: "hacer",
    en: ["make"],
    example: {
      sp: "Haz el adobo de antemano y ponla a un lado.",
      en: "Make the marinade beforehand and set it aside.",
    },
  },
  {
    sp: "derretir",
    en: ["melt"],
    example: {
      sp: "Derrite la mantequilla y añádela a la mezcla.",
      en: "Melt the butter and add it to mix.",
    },
  },
  {
    sp: "picar",
    en: ["mince"],
    example: {
      sp: "Pica la carne de hamburguesa y añade sal y pimienta.",
      en: "Mince the hamburger meat and add salt and pepper.",
    },
  },
  {
    sp: "mezclar",
    en: ["mix"],
    example: {
      sp: "Mezcla los huevos, el azúcar y la vainilla hasta que la mezcla esté homogénea.",
      en: "Mix the eggs, sugar, and vanilla until smooth.",
    },
  },
  {
    sp: "humedecer",
    en: ["moisten"],
    example: {
      sp: "Humedece los bordes para asegurar que el ravioli esté sellado.",
      en: "Moisten the edges to ensure the ravioli is sealed.",
    },
  },
  {
    sp: "abrir",
    en: ["open"],
    example: {
      sp: "Abre una lata de tomates en cubitos y añade a la salsa.",
      en: "Open a can of diced tomatoes and add to the sauce.",
    },
  },

  {
    sp: "perforar",
    en: ["pierce"],
    example: {
      sp: "Perfora la carne con la brocheta y colócala en la parrilla.",
      en: "Pierce the meat with a skewer and place on the grill.",
    },
  },
  {
    sp: "colocar",
    en: ["place"],
    example: {
      sp: "Coloca la carne en un plato de servir.",
      en: "Place the meat on a serving platter.",
    },
  },
  {
    sp: "preparar",
    en: ["prepare"],
    example: {
      sp: "Prepara la tapa de maza y déjala reposar en la nevera.",
      en: "Prepare the crust and let it set in the refrigerator.",
    },
  },
  {
    sp: "precalentar",
    en: ["preheat"],
    example: {
      sp: "Precalienta el horno a 350 grados.",
      en: "Preheat the oven to 350 degrees.",
    },
  },
  {
    sp: "exprimir",
    en: ["squeeze"],
    example: {
      sp: "Exprime dos naranjas y añade el jugo a la masa.",
      en: "Squeeze two oranges and add the juice to the batter.",
    },
  },
  {
    sp: "reducir",
    en: ["reduce"],
    example: {
      sp: "Reduce la salsa a fuego lento.",
      en: "Reduce the sauce at a simmer.",
    },
  },
  {
    sp: "recalentar",
    en: ["reheat"],
    example: {
      sp: "Recalienta la pizza en el horno para una corteza más crujiente.",
      en: "Reheat the pizza in the oven for a crispier crust.",
    },
  },
  {
    sp: "reemplazar",
    en: ["replace"],
    example: {
      sp: "Reemplaza el azúcar con puré de manzana para una versión más saludable.",
      en: "Replace the sugar with applesauce for a healthier version.",
    },
  },
  {
    sp: "asar",
    en: ["roast"],
    example: {
      sp: "Asa la pata de cordero a 325 grados.",
      en: "Roast the leg of lamb at 325 degrees.",
    },
  },
  {
    sp: "rebozar",
    en: ["roll"],
    example: {
      sp: "Reboza la masa de galletas en azúcar antes de hornear.",
      en: "Roll the cookie dough in sugar before baking.",
    },
  },
  {
    sp: "salar",
    en: ["salt"],
    example: {
      sp: "Sala la carne antes de dorarla.",
      en: "Salt the meat before browning.",
    },
  },
  {
    sp: "saltear",
    en: ["sauté"],
    example: {
      sp: "Saltea las papas en aceite de oliva.",
      en: "Sauté the potatoes in olive oil.",
    },
  },
  {
    sp: "sacar",
    en: ["scoop"],
    example: {
      sp: "Saca tres bolas de helado y sírvelas con sirope de chocolate.",
      en: "Scoop three balls of ice cream and serve with chocolate syrup.",
    },
  },
  {
    sp: "raspar",
    en: ["scrape"],
    example: {
      sp: "Raspa la olla para quitar la grasa del asado.",
      en: "Scrape the pan to remove the drippings.",
    },
  },
  {
    sp: "restregar",
    en: ["scrub"],
    example: {
      sp: "Restriega la papa para quitarle la tierra antes de pelarla.",
      en: "Scrub the potato to remove dirt before peeling.",
    },
  },
  {
    sp: "sazonar",
    en: ["season"],
    example: {
      sp: "Sazona la salsa con sal y pimienta.",
      en: "Season the sauce with salt and pepper.",
    },
  },
  {
    sp: "separar",
    en: ["separate"],
    example: {
      sp: "Separa la clara de huevo de la yema.",
      en: "Separate the egg white from the egg yolk.",
    },
  },
  {
    sp: "cuajar",
    en: ["set"],
    example: {
      sp: "Deja el pudín cuajar por una hora.",
      en: "Let the pudding set for one hour.",
    },
  },
  {
    sp: "desmenuzar",
    en: ["shred"],
    example: {
      sp: "Usa dos tenedores para desmenuzar la carne cocida a fuego lento.",
      en: "Use two forks to shred the slow-cooked meat.",
    },
  },
  {
    sp: "cernir",
    en: ["sift"],
    example: {
      sp: "Cierne la harina antes de añadirla a la mezcla.",
      en: "Sift the flour before adding it to the mix.",
    },
  },
  {
    sp: "rebanar",
    en: ["slice"],
    example: {
      sp: "Rebana las pechugas de pollo para hacer chuletas finas.",
      en: "Slice the chicken breasts into thin cutlets.",
    },
  },
  {
    sp: "rajar",
    en: ["slit"],
    example: {
      sp: "Raja la carne para ayudar a que se cocine uniformemente.",
      en: "Slit the meat to help it cook evenly.",
    },
  },
  {
    sp: "untar",
    en: ["smear"],
    example: {
      sp: "Unta queso crema al bagel después de tostarla.",
      en: "Smear cream cheese on the bagel after toasting.",
    },
  },

  {
    sp: "repartir",
    en: ["spread"],
    example: {
      sp: "Reparte los vegetales en la bandeja de horno para cocer uniformemente.",
      en: "Spread the vegetables onto the baking sheet to roast evenly.",
    },
  },
  {
    sp: "rociar",
    en: ["sprinkle"],
    example: {
      sp: "Rocía el azúcar glas encima del pastel antes de servir.",
      en: "Sprinkle powdered sugar onto the cake before serving.",
    },
  },
  {
    sp: "revolver, remover",
    en: ["stir"],
    example: {
      sp: "Revuelve el guisado para que no se queme.",
      en: "Stir the stew so that it doesn't burn.",
    },
  },
  {
    sp: "colar",
    en: ["strain"],
    example: {
      sp: "Cuela la pasta y colócala en una cacerola.",
      en: "Strain the pasta and place in a saucepan.",
    },
  },
  {
    sp: "rellenar",
    en: ["stuff"],
    example: {
      sp: "Rellena el pollo con albahaca y mozzarella antes de hornear.",
      en: "Stuff the chicken with basil and mozzarella before baking.",
    },
  },

  {
    sp: "atar",
    en: ["tie"],
    example: {
      sp: "Ata las alas y las patas de pollo antes de hornear.",
      en: "Tie the chicken wings and legs together before baking.",
    },
  },
  {
    sp: "tostar",
    en: ["toast"],
    example: {
      sp: "Tuesta el pan de ajo en el horno y sírvelo con pasta.",
      en: "Toast the garlic bread in the oven and serve with pasta.",
    },
  },
  {
    sp: "mezclar",
    en: ["toss"],
    example: {
      sp: "Mezcla la ensalada con aceite y vinagre.",
      en: "Toss the salad with olive oil and vinegar.",
    },
  },
  {
    sp: "quitar",
    en: ["trim"],
    example: {
      sp: "Quítale la grasa a las chuletas de cerdo.",
      en: "Trim the fat off the pork chops.",
    },
  },
  {
    sp: "voltear",
    en: ["turn"],
    example: {
      sp: "Voltea el bistec después de un minuto.",
      en: "Turn the steak after a minute.",
    },
  },
  {
    sp: "enrollar",
    en: ["twist"],
    example: {
      sp: "Enrolla el espárrago con tocino y hornéalo.",
      en: "Twist the bacon around the asparagus and bake.",
    },
  },
  {
    sp: "mojar",
    en: ["wet"],
    example: {
      sp: "Moja los bordes del hojaldre y presiona para sellarlo.",
      en: "Wet the edges of the puff pastry and press down to seal.",
    },
  },
  {
    sp: "batir",
    en: ["whip"],
    example: {
      sp: "Bate la crema hasta que se formen picos suaves.",
      en: "Whip the cream until it forms soft peaks.",
    },
  },
  {
    sp: "envolver",
    en: ["wrap"],
    example: {
      sp: "Envuelve el pollo en tocino y colócalo en la parrilla.",
      en: "Wrap the chicken in bacon and place on the grill.",
    },
  },
];
