import {lowerCase, specials, fixes} from './constants'
import accents from 'remove-accents'

const word = '[^\\s\'’\\(\\)!?;:"-]'
const regex = new RegExp(
  `(?:(?:(\\s?(?:^|[.\\(\\)!?;:"-])\\s*)(${word}))|(${word}))(${word}*[’']*${word}*)`,
  'g',
)

const convertToRegExp = (specials: Array<string>) =>
  specials.map(s => [new RegExp(`\\b${s}\\b`, 'gi'), s] as const)

function parseMatch(match: string) {
  const firstCharacter = match[0]

  // test first character
  if (/\s/.test(firstCharacter)) {
    // if whitespace - trim and return
    return match.substr(1)
  }
  if (/[\(\)]/.test(firstCharacter)) {
    // if parens - this shouldn't be replaced
    return null
  }

  return match
}

export type TitleOptions = {
  special?: Array<string>
}

/**
 * Convert a string to a title format following Chicago's rules
 *
 * @param {string} str - the string to convert
 * @param {TitleOptions} options - options for the conversion
 * @returns {string} the converted string
 * @see https://www.chicagoreader.com/chicago/how-to-write-a-good-title/
 * @example
 * ```js
 * title("FaCEbook is great", {
 *   special: ["facebook"],
 * });
 *
 * // Will result in:
 * // "facebook is great"
 * ```
 */
export const title = (str: string, options: TitleOptions = {}) => {
  str = str
    .toLowerCase()
    .replace(regex, (m, lead = '', forced, lower, rest, offset, string) => {
      const isLastWord = m.length + offset >= string.length

      const parsedMatch = parseMatch(m)
      if (!parsedMatch) {
        return m
      }
      if (!forced) {
        const fullLower = accents.remove(lower + rest)

        if (lowerCase.has(fullLower) && !isLastWord) {
          return parsedMatch
        }
      }

      return lead + (lower || forced).toUpperCase() + rest
    })

  const customSpecials = options.special || []
  const replace = [...specials, ...customSpecials]
  const replaceRegExp = convertToRegExp(replace)

  // replace all special words and acronyms
  replaceRegExp.forEach(([pattern, s]) => {
    str = str.replace(pattern, s)
  })

  // Fix all common mistakes
  Object.keys(fixes).forEach(key => {
    str = str.replace(new RegExp(key, 'gi'), fixes[key])
  })

  // remove trailing whitespace
  str = str.trim()

  return str
}
