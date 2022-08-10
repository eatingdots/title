// Utilities
const lowerCase = require("./lower-case");
const specials = require("./specials");
const fixes = require("./fixes");
const accents = require("remove-accents");

const word = "[^\\s'’\\(\\)!?;:\"-]";
const regex = new RegExp(
  `(?:(?:(\\s?(?:^|[.\\(\\)!?;:"-])\\s*)(${word}))|(${word}))(${word}*[’']*${word}*)`,
  "g"
);

const convertToRegExp = (specials) =>
  specials.map((s) => [new RegExp(`\\b${s}\\b`, "gi"), s]);

function parseMatch(match) {
  const firstCharacter = match[0];

  // test first character
  if (/\s/.test(firstCharacter)) {
    // if whitespace - trim and return
    return match.substr(1);
  }
  if (/[\(\)]/.test(firstCharacter)) {
    // if parens - this shouldn't be replaced
    return null;
  }

  return match;
}

module.exports = (str, options = {}) => {
  str = str
    .toLowerCase()
    .replace(regex, (m, lead = "", forced, lower, rest, offset, string) => {
      const isLastWord = m.length + offset >= string.length;

      const parsedMatch = parseMatch(m);
      if (!parsedMatch) {
        return m;
      }
      if (!forced) {
        const fullLower = accents.remove(lower + rest);

        if (lowerCase.has(fullLower) && !isLastWord) {
          return parsedMatch;
        }
      }

      return lead + (lower || forced).toUpperCase() + rest;
    });

  const customSpecials = options.special || [];
  const replace = [...specials, ...customSpecials];
  const replaceRegExp = convertToRegExp(replace);

  // replace all special words and acronyms
  replaceRegExp.forEach(([pattern, s]) => {
    str = str.replace(pattern, s);
  });

  // Fix all common mistakes
  Object.keys(fixes).forEach((key) => {
    str = str.replace(new RegExp(key, "gi"), fixes[key]);
  });

  // remove trailing whitespace
  str = str.trim();

  return str;
};
