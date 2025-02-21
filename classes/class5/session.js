// === === === LAST EXERCISES === === === //
/**
 * @param {number[]} arr
 * @returns {number}
 */
const randomElement = arr => {
  const idx = Math.round(Math.random() * (arr.length - 1));

  return arr[idx];
};

// === === ===

/**
 * @param {string} str
 * @param {string} pat
 * @returns {boolean}
 */
const checkPattern = (str, pat) => {
  const splitStr = new Set(str.split(pat));

  if (splitStr.has(str)) {
    if (splitStr.size === 1) {
      return false;
    }
  } else return true;
};

// === === ===

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @returns {number[]}
 */
const combine = (arr1, arr2) => {
  for (let i = 0; i < arr2.length; i++) {
    arr1.push(arr2[i]);
  }

  return Array.from(new Set(arr1));
};

// === === ===

const reverseGuessing = () => {
  let firstGuess = Math.floor(Math.random() * 100);
  console.log(firstGuess);
  let userInput = "";

  while (userInput !== "JACKPOT") {
    let userInput = prompt(
      "What's up with the computer number?(Lower, Higher, JACKPOT",
    );

    if (userInput === "Lower") {
      firstGuess = Math.floor(Math.random() * (firstGuess - 0) + 0);
      console.log(firstGuess);
    } else if (userInput === "Higher") {
      firstGuess = Math.floor(Math.random() * (11 - firstGuess) + firstGuess);
      console.log(firstGuess);
    } else return alert("I won ~_~");
  }
};

// === === === === CLASS 5 === === === === //

// class Person {
//   name = "mamad";

//   static type = "PERSON";

//   constructor(name) {
//     if (!name) return;
//     this.name = name;
//   }
// }

// const a = new Person();
// console.log(a);
// console.log(Person.type);

// class Student extends Person {
//   static type = "STUDENT";

//   constructor(name) {
//     super(name);
//   }
// }

// const b = new Student("asghar");

// console.log(b);
// console.log(Student.type);

// === === === EXTRA === === === //
