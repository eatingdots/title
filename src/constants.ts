const conjunctions = [
  'e',
  'como',
  'ou',
  'so',
  'tambem',
  'tanto',
  'quanto',
  'que',
  'mas',
  'tao',
  'tamanho',
  'quando',
  'ainda',
]

const articles = ['o', 'os', 'a', 'as', 'um', 'uma', 'uns', 'umas']

const prepositions = [
  'a',
  'ao',
  'aos',
  'ante',
  'apos',
  'ate',
  'com',
  'contra',
  'de',
  'da',
  'do',
  'desde',
  'em',
  'no',
  'nos',
  'na',
  'nas',
  'entre',
  'para',
  'per',
  'perante',
  'por',
  'sem',
  'sob',
  'sobre',
  'tras',
]

export const lowerCase = new Set([
  ...conjunctions,
  ...articles,
  ...prepositions,
])

// special cases
export const specials = ['BBQ', 'IPA', 'LN', 'EA', 'uni', 'gás', 'fatia']

// sometimes users just get it wrong
export const fixes = {
  '([a-z0-9])\\(': '$1 (', // add space before parenthesis
} as {[key: string]: string}
