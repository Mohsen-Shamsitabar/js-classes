/**
 * @type {Map<string,string>}
 */
const lang = new Map([
  ["a", "ش"],
  ["b", "ز"],
  ["c", "ذ"],
  ["d", "ی"],
  ["e", "ث"],
  ["f", "ب"],
  ["g", "ل"],
  ["h", "ا"],
  ["i", "ه"],
  ["j", "ت"],
  ["k", "ن"],
  ["l", "م"],
  ["m", "و"],
  ["n", "ر"],
  ["o", "خ"],
  ["p", "ح"],
  ["q", "ض"],
  ["r", "ق"],
  ["s", "س"],
  ["t", "ف"],
  ["u", "ع"],
  ["v", "د"],
  ["w", "ص"],
  ["x", "ط"],
  ["y", "غ"],
  ["z", "ظ"],
]);

/**
 * @param {string} text
 */
const incrypt = text => {
  let result = "";

  for (const char of text) {
    if (lang.has(char)) {
      result += lang.get(char);
      continue;
    }

    result += char;
  }

  return result;
};

/**
 * @param {string} text
 */
const decrypt = text => {
  let result = "";

  const keys = Array.from(lang.keys());
  const values = Array.from(lang.values());

  for (const char of text) {
    const index = values.findIndex(value => value === char);

    if (index >= 0) {
      result += keys[index];
      continue;
    }

    result += char;
  }

  return result;
};

const text = "meow meow nigga, im here.";
const incrypted = incrypt(text);
const decrypted = decrypt(incrypted);

// console.log({ text, incrypted, decrypted });

// === === ===

/**
 * @param {string} str
 */
const countVowels = str => {
  const map = new Map([
    ["A", 0],
    ["I", 0],
    ["O", 0],
    ["U", 0],
    ["E", 0],
  ]);
  const vowels = new Set(["A", "I", "O", "U", "E"]);

  for (const char of str) {
    const upperChar = char.toUpperCase();

    if (vowels.has(upperChar)) {
      const oldValue = map.get(upperChar);
      map.set(upperChar, oldValue + 1);
    }
  }

  return map;
};

// === === ===

/**
 * @param {string} text
 */
const countWords = text => {
  /**
   * @type {Map<string,number>}
   */
  const words = new Map();

  const formattedText = text.replaceAll(".", "").replaceAll(",", "").split(" ");

  for (const word of formattedText) {
    const oldValue = words.get(word) ?? 0;

    words.set(word, oldValue + 1);
  }

  return words;
};

// console.log(countWords("hello hello, im mohsen, meow meow nigga."));

// === === ===

const arrange = str => {
  const lowerCase = str.split("").filter(char => char >= "a" && char <= "z");
  const upperCase = str.split("").filter(char => char >= "A" && char <= "Z");

  return lowerCase.join("") + upperCase.join("");
};
