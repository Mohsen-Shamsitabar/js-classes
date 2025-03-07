class Stack {
  constructor(arr) {
    this.arr = arr;
  }

  display() {
    console.log(this.arr);
  }

  /**
   * @param {number} num
   */
  push(num) {
    this.arr.push(num);
  }

  /**
   * @returns {number}
   */
  pop() {
    return this.arr.pop();
  }
}

class Counter {
  count;

  constructor() {
    this.count = 0;
  }

  increase() {
    this.count++;
  }

  decrease() {
    this.count--;
  }

  getCount() {
    return this.count;
  }
}

/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function (allowed, words) {
  const set = new Set(allowed);

  let count = 0;

  FirstLoop: for (let j = 0; j < words.length; j++) {
    for (let k = 0; k < words[j].length; k++) {
      if (!set.has(words[j][k])) {
        continue FirstLoop;
      }
    }

    count++;
  }

  return count;
};

/**
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 */
class ParkingSystem {
  constructor(big, medium, small) {
    this.spots = [big, medium, small];
  }

  /**
   * @param {number} carType
   * @return {boolean}
   */
  addCar = carType => {
    if (this.spots[carType - 1] > 0) {
      this.spots[carType - 1]--;
      return true;
    }

    return false;
  };
}
