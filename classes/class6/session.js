// === === === LAST EXERCISES === === === //

/**
 * @param {string[]} words
 * @param {string} x
 * @returns {number[]}
 */
function findWordsContaining(words, x) {
  const result = [];

  for (let i = 0; i < words.length; i++) {
    const word = words[i];

    if (word.includes(x)) result.push(i);
  }

  return result;
}

// ===

/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function (nums) {
  let count = {};
  let result = 0;

  for (const num of nums) {
    if (count[num]) {
      result += count[num];
      count[num]++;
    } else {
      count[num] = 1;
    }
  }

  return result;
};

// ===

/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function (nums, n) {
  const firstSlice = nums.slice(0, n);
  const lastSlice = nums.slice(n, 2 * n);
  let result = [];

  for (let i = 0; i < n; i++) {
    result.push(firstSlice[i], lastSlice[i]);
  }

  return result;
};
