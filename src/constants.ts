const conjunctions = [
  "e",
  "como",
  "ou",
  "so",
  "tambem",
  "tanto",
  "quanto",
  "que",
  "mas",
  "tao",
  "tamanho",
  "quando",
  "ainda",
];

const articles = ["o", "os", "a", "as", "um", "uma", "uns", "umas"];

const pronouns = ["seu", "sua"];

const prepositions = [
  "a",
  "ao",
  "aos",
  "ante",
  "apos",
  "ate",
  "com",
  "contra",
  "de",
  "da",
  "das",
  "do",
  "dos",
  "desde",
  "em",
  "no",
  "nos",
  "na",
  "nas",
  "entre",
  "para",
  "per",
  "perante",
  "por",
  "sem",
  "sob",
  "sobre",
  "tras",
];

export const lowerCase = new Set([
  ...conjunctions,
  ...articles,
  ...pronouns,
  ...prepositions,
]);

// special cases
export const specials = [
  "BBQ",
  "H2OH!",
  "IPA",
  "LN",
  "EA",
  "RIS",
  "GT",
  "ml",
  "uni",
  "unidade",
  "unidades",
  "lata",
  "latas",
  "fatia",
  "preferência",
  "tamanho",
  // Roman Numerals
  "I",
  "II",
  "III",
  "IV",
  "V",
  "VI",
  "VII",
  "VIII",
  "IX",
  "X",
  "XI",
  "XII",
  "XIII",
  "XIV",
  "XV",
];

// sometimes users just get it wrong
export const fixes = {
  "([a-z0-9])\\(": "$1 (", // add space before parenthesis
} as { [key: string]: string };
