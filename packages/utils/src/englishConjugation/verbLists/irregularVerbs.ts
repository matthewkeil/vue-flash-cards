interface IrregularVerbConjugation {
  pastSimple: string;
  pastParticiple: string;
}
export const irregularVerbs: Record<string, IrregularVerbConjugation> = {
  abide: { pastSimple: "abode", pastParticiple: "abode" },
  arise: { pastSimple: "arose", pastParticiple: "arisen" },
  awake: { pastSimple: "awoke", pastParticiple: "awoken" },
  be: { pastSimple: "was/were", pastParticiple: "been" },
  bear: { pastSimple: "bore/borne", pastParticiple: "born" },
  beat: { pastSimple: "beat", pastParticiple: "beaten" },
  become: { pastSimple: "became", pastParticiple: "become" },
  beget: { pastSimple: "begat/begot", pastParticiple: "begotten" },
  begin: { pastSimple: "began", pastParticiple: "begun" },
  bend: { pastSimple: "bent", pastParticiple: "bent" },
  bet: { pastSimple: "bet", pastParticiple: "bet" },
  bid: { pastSimple: "bid", pastParticiple: "bid" },
  bite: { pastSimple: "bit", pastParticiple: "bitten" },
  bleed: { pastSimple: "bled", pastParticiple: "bled" },
  blow: { pastSimple: "blew", pastParticiple: "blown" },
  break: { pastSimple: "broke", pastParticiple: "broken" },
  bring: { pastSimple: "brought", pastParticiple: "brought" },
  broadcast: { pastSimple: "broadcast", pastParticiple: "broadcast" },
  build: { pastSimple: "built", pastParticiple: "built" },
  burn: { pastSimple: "burnt/burned", pastParticiple: "burnt/burned" },
  burst: { pastSimple: "burst", pastParticiple: "burst" },
  buy: { pastSimple: "bought", pastParticiple: "bought" },
  can: { pastSimple: "could", pastParticiple: "could" },
  cast: { pastSimple: "cast", pastParticiple: "cast" },
  catch: { pastSimple: "caught", pastParticiple: "caught" },
  chide: { pastSimple: "chid/chode", pastParticiple: "chid/chidden" },
  choose: { pastSimple: "chose", pastParticiple: "chosen" },
  cling: { pastSimple: "clung", pastParticiple: "clung" },
  clothe: { pastSimple: "clad/clothed", pastParticiple: "clad/clothed" },
  come: { pastSimple: "came", pastParticiple: "come" },
  cost: { pastSimple: "cost", pastParticiple: "cost" },
  creep: { pastSimple: "crept", pastParticiple: "crept" },
  cut: { pastSimple: "cut", pastParticiple: "cut" },
  deal: { pastSimple: "dealt", pastParticiple: "dealt" },
  dig: { pastSimple: "dug", pastParticiple: "dug" },
  dive: { pastSimple: "dived", pastParticiple: "dived/dove" },
  do: { pastSimple: "did", pastParticiple: "done" },
  draw: { pastSimple: "drew", pastParticiple: "drawn" },
  dream: { pastSimple: "dreamt/dreamed", pastParticiple: "dreamt/dreamed" },
  drink: { pastSimple: "drank", pastParticiple: "drunk" },
  drive: { pastSimple: "drove", pastParticiple: "driven" },
  dwell: { pastSimple: "dwelt", pastParticiple: "dwelt/dwelled" },
  eat: { pastSimple: "ate", pastParticiple: "eaten" },
  fall: { pastSimple: "fell", pastParticiple: "fallen" },
  feed: { pastSimple: "fed", pastParticiple: "fed" },
  feel: { pastSimple: "felt", pastParticiple: "felt" },
  fight: { pastSimple: "fought", pastParticiple: "fought" },
  find: { pastSimple: "found", pastParticiple: "found" },
  flee: { pastSimple: "fled", pastParticiple: "fled" },
  fling: { pastSimple: "flung", pastParticiple: "flung" },
  fly: { pastSimple: "flew", pastParticiple: "flown" },
  forbid: { pastSimple: "forbade", pastParticiple: "forbidden" },
  forecast: { pastSimple: "forecast", pastParticiple: "forecast" },
  foresee: { pastSimple: "foresaw", pastParticiple: "foreseen" },
  forget: { pastSimple: "forgot", pastParticiple: "forgotten/forgot" },
  forgive: { pastSimple: "forgave", pastParticiple: "forgiven" },
  forsake: { pastSimple: "forsook", pastParticiple: "forsaken" },
  freeze: { pastSimple: "froze", pastParticiple: "frozen" },
  get: { pastSimple: "got", pastParticiple: "gotten/got" },
  give: { pastSimple: "gave", pastParticiple: "given" },
  go: { pastSimple: "went", pastParticiple: "gone" },
  grind: { pastSimple: "ground", pastParticiple: "ground" },
  grow: { pastSimple: "grew", pastParticiple: "grown" },
  hang: { pastSimple: "hung", pastParticiple: "hung" },
  have: { pastSimple: "had", pastParticiple: "had" },
  hear: { pastSimple: "heard", pastParticiple: "heard" },
  hide: { pastSimple: "hid", pastParticiple: "hidden" },
  hit: { pastSimple: "hit", pastParticiple: "hit" },
  hold: { pastSimple: "held", pastParticiple: "held" },
  hurt: { pastSimple: "hurt", pastParticiple: "hurt" },
  keep: { pastSimple: "kept", pastParticiple: "kept" },
  kneel: { pastSimple: "knelt/knelled", pastParticiple: "knelt/kneeled" },
  know: { pastSimple: "knew", pastParticiple: "known" },
  lay: { pastSimple: "laid", pastParticiple: "laid" },
  lead: { pastSimple: "led", pastParticiple: "led" },
  lean: { pastSimple: "leant/leaned", pastParticiple: "leant/leaned" },
  leap: { pastSimple: "leapt/leaped", pastParticiple: "leapt/leaped" },
  learn: { pastSimple: "learnt", pastParticiple: "learnt" },
  leave: { pastSimple: "left", pastParticiple: "left" },
  lend: { pastSimple: "lent", pastParticiple: "lent" },
  let: { pastSimple: "let", pastParticiple: "let" },
  lie: { pastSimple: "lay", pastParticiple: "lain" },
  light: { pastSimple: "lit/lighted", pastParticiple: "lit/lighted" },
  lose: { pastSimple: "lost", pastParticiple: "lost" },
  make: { pastSimple: "made", pastParticiple: "made" },
  mean: { pastSimple: "meant", pastParticiple: "meant" },
  meet: { pastSimple: "met", pastParticiple: "met" },
  mow: { pastSimple: "mowed", pastParticiple: "mowed/mown" },
  offset: { pastSimple: "offset", pastParticiple: "offset" },
  overcome: { pastSimple: "overcame", pastParticiple: "overcome" },
  partake: { pastSimple: "partook", pastParticiple: "partaken" },
  pay: { pastSimple: "paid", pastParticiple: "paid" },
  plead: { pastSimple: "pled/pleaded", pastParticiple: "pled/pleaded" },
  preset: { pastSimple: "preset", pastParticiple: "preset" },
  prove: { pastSimple: "proved", pastParticiple: "proven/proved" },
  put: { pastSimple: "put", pastParticiple: "put" },
  quit: { pastSimple: "quit", pastParticiple: "quit" },
  read: { pastSimple: "read", pastParticiple: "read" },
  relay: { pastSimple: "relaid", pastParticiple: "relaid" },
  rend: { pastSimple: "rent", pastParticiple: "rent" },
  rid: { pastSimple: "rid", pastParticiple: "rid" },
  ring: { pastSimple: "rang", pastParticiple: "rung" },
  rise: { pastSimple: "rose", pastParticiple: "risen" },
  run: { pastSimple: "ran", pastParticiple: "run" },
  saw: { pastSimple: "saw/sawed", pastParticiple: "sawn/sawed" },
  say: { pastSimple: "said", pastParticiple: "said" },
  see: { pastSimple: "saw", pastParticiple: "seen" },
  seek: { pastSimple: "sought", pastParticiple: "sought" },
  sell: { pastSimple: "sold", pastParticiple: "sold" },
  send: { pastSimple: "sent", pastParticiple: "sent" },
  set: { pastSimple: "set", pastParticiple: "set" },
  shake: { pastSimple: "shook", pastParticiple: "shaken" },
  shed: { pastSimple: "shed", pastParticiple: "shed" },
  shine: { pastSimple: "shone", pastParticiple: "shone" },
  shoe: { pastSimple: "shod", pastParticiple: "shod" },
  shoot: { pastSimple: "shot", pastParticiple: "shot" },
  show: { pastSimple: "showed", pastParticiple: "shown" },
  shut: { pastSimple: "shut", pastParticiple: "shut" },
  sing: { pastSimple: "sang", pastParticiple: "sung" },
  sink: { pastSimple: "sank/sunk", pastParticiple: "sunk/sunken" },
  sit: { pastSimple: "sat", pastParticiple: "sat" },
  slay: { pastSimple: "slew", pastParticiple: "slain" },
  sleep: { pastSimple: "slept", pastParticiple: "slept" },
  slide: { pastSimple: "slid", pastParticiple: "slid" },
  slit: { pastSimple: "slit", pastParticiple: "slit" },
  smell: { pastSimple: "smelt", pastParticiple: "smelt" },
  sow: { pastSimple: "sowed", pastParticiple: "sown/sowed" },
  speak: { pastSimple: "spoke", pastParticiple: "spoken" },
  speed: { pastSimple: "sped", pastParticiple: "sped" },
  spell: { pastSimple: "spelt", pastParticiple: "spelt" },
  spend: { pastSimple: "spent", pastParticiple: "spent" },
  spill: { pastSimple: "spilt/spilled", pastParticiple: "spilt/spilled" },
  spin: { pastSimple: "spun", pastParticiple: "spun" },
  spit: { pastSimple: "spat/spit", pastParticiple: "spat/spit" },
  split: { pastSimple: "split", pastParticiple: "split" },
  spoil: { pastSimple: "spoilt", pastParticiple: "spoilt" },
  spread: { pastSimple: "spread", pastParticiple: "spread" },
  spring: { pastSimple: "sprang", pastParticiple: "sprung" },
  stand: { pastSimple: "stood", pastParticiple: "stood" },
  steal: { pastSimple: "stole", pastParticiple: "stolen" },
  stick: { pastSimple: "stuck", pastParticiple: "stuck" },
  sting: { pastSimple: "stung", pastParticiple: "stung" },
  stink: { pastSimple: "stank", pastParticiple: "stunk" },
  strew: { pastSimple: "strewed", pastParticiple: "strewn/strewed" },
  strike: { pastSimple: "struck", pastParticiple: "stricken/struck" },
  strive: { pastSimple: "strove", pastParticiple: "striven" },
  swear: { pastSimple: "swore", pastParticiple: "sworn" },
  sweat: { pastSimple: "sweat/sweated", pastParticiple: "sweat/sweated" },
  sweep: { pastSimple: "swept", pastParticiple: "swept" },
  swell: { pastSimple: "swelled", pastParticiple: "swollen" },
  swim: { pastSimple: "swam", pastParticiple: "swum" },
  swing: { pastSimple: "swung", pastParticiple: "swung" },
  take: { pastSimple: "took", pastParticiple: "taken" },
  teach: { pastSimple: "taught", pastParticiple: "taught" },
  tear: { pastSimple: "tore", pastParticiple: "torn" },
  tell: { pastSimple: "told", pastParticiple: "told" },
  think: { pastSimple: "thought", pastParticiple: "thought" },
  thrive: { pastSimple: "throve/thrived", pastParticiple: "	thriven/thrived" },
  throw: { pastSimple: "threw", pastParticiple: "thrown" },
  thrust: { pastSimple: "thrust", pastParticiple: "thrust" },
  typeset: { pastSimple: "typeset", pastParticiple: "typeset" },
  undergo: { pastSimple: "underwent", pastParticiple: "undergone" },
  understand: { pastSimple: "understood", pastParticiple: "understood" },
  wake: { pastSimple: "woke", pastParticiple: "woken" },
  wear: { pastSimple: "wore", pastParticiple: "worn" },
  weep: { pastSimple: "wept", pastParticiple: "wept" },
  wet: { pastSimple: "wet/wetted", pastParticiple: "wet/wetted" },
  win: { pastSimple: "won", pastParticiple: "won" },
  wind: { pastSimple: "wound", pastParticiple: "wound" },
  withdraw: { pastSimple: "withdrew", pastParticiple: "withdrawn" },
  wring: { pastSimple: "wrung", pastParticiple: "wrung" },
  write: { pastSimple: "wrote", pastParticiple: "written" },
};