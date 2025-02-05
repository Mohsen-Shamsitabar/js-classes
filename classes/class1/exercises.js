/**
 * 1) Check if a number is even.
 * 2) Calculate sum of all the numbers in an array. (Imperetive/Declarative)
 * 3) Push last element and first element of array in a new array and return it.
 */

// 1) Check if a number is even.

/**
 * @param {number} num
 * @returns {boolean}
 * @description this function checks if a number is even or not.
 */
function isEven1(num) {
  return num % 2 === 0;
}

/**
 * @param {number} num
 * @returns {boolean}
 */
const isEven2 = num => num % 2 === 0;

// 2) Calculate sum of all the numbers in an array. (Imperetive/Declarative)

const numbers = [1, 2, 3, 4, 5];

let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  const number = numbers[i];
  sum += number;
}

// other approuch
sum = 0;
numbers.forEach(number => (sum += number));

// other approuch
sum = 0;
sum = numbers.reduce((prev, curr) => prev + curr, 0);

// 3) Push last element and first element of array in a new array and return it.

/**
 * @param {any[]} array
 * @returns {[any, any]}
 */
function firstAndLast1(array) {
  const result = [];

  result.push(array[array.length - 1]);
  result.push(array[0]);

  return result;
}

/**
 * @param {any[]} array
 * @returns {[any, any]}
 */
const firstAndLast2 = array => {
  const result = [];

  result.push(array[array.length - 1]);
  result.push(array[0]);

  return result;
};
