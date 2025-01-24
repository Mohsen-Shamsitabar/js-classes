console.log("// === === === === STRING METHODS === === === === //");

const str = "meowXmeow";

const concatted1 = str.concat("SOMETHING");
const concatted2 = str + "SOMETHING";
const isXEncluded1 = str.includes("X");
const sliced1 = str.slice(2,5);
const sliced2 = str.substring(2,5);
const splitted = str.split("X");

console.log({
  str,
  concatted1,
  concatted2,
  isXEncluded1,
  sliced1,
  sliced2,
  splitted
});

console.log("// === === === === ARRAY METHODS === === === === //");

const array = [1,2,"X",4];

const concatted3 = array.concat([5,6,7])
const areAllNumber = array.every((item) => typeof item === "number")
const isNumberAvailable = array.some((item) => typeof item === "number")
const filledArray = array.fill(null,0,2)
const numberArray = array.filter((item) => typeof item === "number")
const stringInArray = array.find((item) => typeof item === "string")
const stringLoc = array.findIndex((item) => typeof item === "string")

const arrayTemp = []
array.forEach((item) => arrayTemp.push(item))

const isXEncluded2 = array.includes("X")
const joinedArray = array.join("|")
const mappedArray = array.map((item) => item * 2)
const poppedItem = array.pop()
const reduced = array.reduce((curr,prev) => `${curr}` + `${curr}`,"")
const sliced3 = array.slice(0,2)
const spliced = array.splice(0,2)

console.log({
  array,
  concatted3,
  areAllNumber,
  isNumberAvailable,
  filledArray,
  numberArray,
  stringInArray,
  stringLoc,
  arrayTemp,
  isXEncluded2,
  joinedArray,
  mappedArray,
  poppedItem,
  reduced,
  sliced3,
  spliced
});
