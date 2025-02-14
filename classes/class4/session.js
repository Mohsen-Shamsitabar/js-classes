// === === === LAST CLASS EXERSICES === === === //

// /**
//  * @param {number[]} listNumbers
//  * @returns {number[]}
//  */

// const evenNumbers = listNumbers => {
//   const evenNumbers = [];

//   for (let i = 0; i < listNumbers.length; i++) {
//     if (listNumbers[i] % 2 === 0) {
//       evenNumbers.push(listNumbers[i]);
//     }
//   }

//   return evenNumbers;
// };

// /**
//  * @param {string} str
//  * @returns {string[]}
//  */
// const upperLower = str => {
//   const letters = [];

//   for (let char of str) {
//     if (char === char.toLowerCase() && str.includes(char.toUpperCase())) {
//       letters.push(char);
//     }
//   }

//   return letters;
// };

//  === === ===

// /**
//  * @param {number[]} numbers
//  * @returns {number}
//  */
// const average = numbers => {
//   const sum = numbers.reduce((prev, curr) => {
//     return prev + curr;
//   }, 0);

//   const result = sum / numbers.length;

//   return result;
// };

// === === ===

// /**
//  *
//  * @param {string} str
//  * @param {string} subStr
//  * @returns {number}
//  */

// const findSubstr = (str, subStr) => {
//   let result = -1;

//   const strLen = str.length;
//   const subStrLen = subStr.length;

//   for (let i = 0; i < strLen - subStrLen + 1; i++) {
//     if (str[i] === subStr[0]) {
//       const slicedStr = str.substring(i, i + subStrLen);

//       if (slicedStr === subStr) {
//         result = i;
//       }
//     }
//   }
//   return result;
// };

// === === === RECURSIVE FN's === === === //

// function doSomething(n) {
//   if (n === 0) {
//     console.log("TASK COMPLETED!");
//     return;
//   }

//   console.log("I'm doing something.");
//   doSomething(n - 1);
// }

// doSomething(3);

// ===

/**
 * @param {number} n
 * @returns {number}
 */
const factorial = n => {
  if (n === 1 || n === 0) return 1;

  return factorial(n - 1) * n;
};

/**
 * @param {number} n
 * @returns {number}
 */
const fibonacci = n => {
  if (n === 0) return 0;
  if (n === 1) return 1;

  return fibonacci(n - 1) + fibonacci(n - 2);
};

const fibo = n => {
  if (n <= 1) return n;

  return fibo(n - 1) + fibo(n - 2);
};
