/**
 * @param {number} n
 */
const numberCountdown = n => {
  if (n === 0) return;

  console.log(n);
  numberCountdown(n - 1);
};

// === === ===

/**
 * @param {number} n
 */
const getDivisors = n => {
  const result = [];

  for (let i = 1; i <= n; i++) {
    if (n % i === 0) result.push(i);
  }

  return result;
};

// === === ===

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @returns {number[]}
 */
const getUnity = (arr1, arr2) => {
  /**
   * @type {Set<number>}
   */
  const set1 = new Set(arr1);

  return arr2.filter(item => set1.has(item));
};

// console.log(getUnity([1, 2, 3, 4], [3, 4, 5, 6, 7]));

// === === ===

/**
 * @param {number} min
 * @param {number} max
 * @param {number} value
 * @returns {number}
 */
const clamp = (min, max, value) => Math.min(max, Math.max(min, value));

/**
 * @param {string} message
 */
const getUserInput = message => {
  return Number(prompt(message));
};

/**
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
const getComputerInput = (min, max) => {
  return clamp(min, max, Math.round(Math.random() * max));
};

const guessingGame = () => {
  const computerMin = 0;
  const computerMax = 100;

  let lastMin = computerMin;
  let lastMax = computerMax;

  const computerInput = getComputerInput(computerMin, computerMax);

  let userInput = getUserInput(
    `Input a number between ${lastMin} and ${lastMax}`,
  );

  while (userInput !== computerInput) {
    if (userInput > computerInput) {
      lastMax = userInput;
      console.warn("computerInput is lower");
    } else if (userInput < computerInput) {
      lastMin = userInput;
      console.warn("computerInput is higher");
    }

    userInput = getUserInput(
      `Input a number between ${lastMin} and ${lastMax}`,
    );
  }

  alert("u done it");

  return;
};
