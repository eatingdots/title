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
  "do",
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

module.exports = new Set([...conjunctions, ...articles, ...prepositions]);
