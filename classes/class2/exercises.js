/**
 * 1) Write a program to count the number of characters (character frequency) in a string.
 */

/**
 * @param {string} s
 * @returns {object}
 */
const countCharacters = s => {
  const characterMap = new Map();

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    // const oldValue = characterMap.get(char) ?? 0;
    const oldValue = characterMap.get(char) ? characterMap.get(char) : 0;

    characterMap.set(char, oldValue + 1);
  }

  return characterMap;
};

// console.log(countCharacters("meowMeow"));

/**
 * 2) Write a program to add 'ing' at the end of a given string
 * (length should be at least 3).
 * If the given string already ends with 'ing', add 'ly' instead.
 * If the string length of the given string is less than 3, leave it unchanged.
 */

/**
 *
 * @param {string} s
 * @returns {string}
 */
const editString = s => {
  const length = s.length;

  if (length <= 3) return s;

  const lastChars = s.slice(length - 3, length);

  if (lastChars === "ing") {
    return s.concat("ly");
  }

  return s.concat("ing");
};

// console.log(editString("willing"));

/**
 * 3) Write a program to return a string from a given string
 * where all occurrences of its first char have been changed to '$',
 * except the first char itself.
 */

/**
 *
 * @param {string} s
 * @returns {string}
 */
const replaceFirstChar = s => {
  const firstChar = s[0];

  let result = firstChar;

  for (let i = 1; i < s.length; i++) {
    const char = s[i];

    if (char === firstChar) {
      result += "$";
      continue;
    }

    result += char;
  }

  return result;
};

// console.log(replaceFirstChar("meowmeow"));

/**
 * 4) Write a function that takes a list of words and return the
 * longest word and the length of the longest one.
 */

/**
 * @param {string[]} words
 *  word `length` must be higher than 2.
 * @returns {{ word: string, length: number}}
 */
const longestWord = words => {
  let longWord = words[0];
  let longWordLength = longWord.length;

  for (let i = 1; i < words.length; i++) {
    const word = words[i];
    const wordLength = word.length;

    if (wordLength > longWordLength) {
      longWord = word;
      longWordLength = wordLength;
    }
  }

  return { word: longWord, length: longWordLength };
};

console.log(longestWord(["mehdi", "mahsa", "mohsen", "amir"]));

// =============
