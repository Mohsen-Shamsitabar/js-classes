// === === === PREV EXERCISES === === === //

const power2OfNums = () => {
  /**
   * @type Map<number,number>
   */
  const result = new Map();

  for (let num = 1; num <= 15; num++) {
    result.set(num, num ** 2);
  }

  return result;
};

// === ===

/**
 * @param {string} str
 * @param {string} old
 * @param {string} newCh
 */
const replaceString = (str, old, newCh) => {
  let result = "";

  for (let char of str) {
    if (char === old) {
      result += newCh;
    } else {
      result += char;
    }
  }

  return result;
};

// === ===

/**
 * @param {string} str
 */
const reverseString = str => {
  const length = str.length;

  let result = "";

  for (let i = length - 1; i >= 0; i--) {
    result += str[i];
  }

  return result;
};

// === ===

/**
 * @param {string} str
 * @returns {boolean}
 */
const isPalindrome = str => {
  let reveresedStr = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reveresedStr += str[i];
  }

  return reveresedStr === str;
};

/**
 * @param {string} str
 * @returns {boolean}
 */
const isPalindrome2 = str => reverseString(str) === str;

// === === === NEW SESSION === === === //

/**
 * @param {number | null} a
 */
const meow = (a = 2) => {
  return a;
};

// === === === SET === === === //

/**
 * JavaScript Set Documentation
 * A Set is a collection of unique values.
 */

// Creating a new Set
const mySet = new Set();

// Initializing a Set with values
const numbers = new Set([1, 2, 3, 4, 5]);
// console.log(numbers); // Output: Set { 1, 2, 3, 4, 5 }

// Adding elements
mySet.add(10);
mySet.add(20);
mySet.add(10); // Duplicate, will be ignored
// console.log(mySet); // Output: Set { 10, 20 }

// Checking for an element
// console.log(mySet.has(10)); // true
// console.log(mySet.has(30)); // false

// Removing elements
mySet.delete(10);
// console.log(mySet); // Output: Set { 20 }

// Getting the size of the Set
// console.log(mySet.size); // Output: 1

// Clearing the Set
mySet.clear();
// console.log(mySet); // Output: Set {}

// Iterating over a Set
const mySet2 = new Set([1, 2, 3]);

// Using forEach
// mySet2.forEach(value => console.log(value));

// Using for...of loop
// for (let value of mySet2) {
//   console.log(value);
// }

// Converting a Set to an Array
const myArray = [...mySet2];
// console.log(myArray); // Output: [1, 2, 3]

const setA = new Set([1, 2, 3]);
const setB = new Set([3, 4, 5]);

const unionSet = new Set([...setA, ...setB]);
// console.log(unionSet); // Output: Set { 1, 2, 3, 4, 5 }

const intersectionSet = new Set([...setA].filter(item => setB.has(item)));
// console.log(intersectionSet); // Output: Set { 3 }

const differenceSet = new Set([...setA].filter(item => !setB.has(item)));
// console.log(differenceSet); // Output: Set { 1, 2 }

// === === === MAP === === === //
// const map = new Map();

// map.set(1, 2);

// console.log(map.get(1)); // 2
// console.log(map);

// map.set(2, 3);
// map.set(3, 4);
// map.set(4, 5);

// map.forEach(item => console.log(item));

// const obj = {};
// // console.log(map);
// Object.toString()
// JSON
