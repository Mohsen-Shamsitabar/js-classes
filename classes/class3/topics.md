# Class 3

### Destructuring assignment:

> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

The **destructuring assignment** syntax is a JavaScript expression that makes it possible to **_unpack_** values from **arrays**, or properties from **objects**, into **_distinct variables_**.

##### Example:

```javascript
const array = [1, 2, 3, 4, 5];

const [a, b] = array; // 1, 2
const [a, , b] = array; // 1, 3
const [a = aDefault, b] = array; // 1, 2
const [a, b, ...rest] = array; // 1, 2, [3, 4, 5]
const [a, , b, ...rest] = array; //1, 3, [4, 5]

const obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
};
const { a, b } = obj; // 1, 2
const { a: a1, b: b1 } = obj; // 1, 2
const { a: a1 = aDefault, b = bDefault } = obj; // 1, 2
const { a, b, ...rest } = obj; // 1, 2, {c:3, d:4, e:5}
const { a: a1, b: b1, ...rest } = obj;
```

---

### Swapping variables:

```javascript
// OldSchool:

let a = 1;
let b = 3;
const temp = a;

a = b;
b = temp;

// Using destruction:

let a = 1;
let b = 3;

[a, b] = [b, a];
console.log(a); // 3
console.log(b); // 1

const arr = [1, 2, 3];
[arr[2], arr[1]] = [arr[1], arr[2]];
console.log(arr); // [1, 3, 2]
```

---

### Exercises:

1. Count number of vowels.
   _vowels=“A,I,O,U,E”_

--

2. Word counter.

--

3. Turn string to dict:
   _str = “color:red,name:mohsen,…”_

--

4. arrange strings so that capital letters come last:
   _PyNaTive -> yaivePNT_

--

5. Use a dict to incrypt string and decrypt them.
   _lang = {
   "a": "ش",
   "b": "ز",
   "c": "ذ",
   "d": "ی",
   "e": "ث",
   "f": "ب",
   "g": "ل",
   "h": "ا",
   "i": "ه",
   "j": "ت",
   "k": "ن",
   "l": "م",
   "m": "و",
   "n": "ر",
   "o": "خ",
   "p": "ح",
   "q": "ض",
   "r": "ق",
   "s": "س",
   "t": "ف",
   "u": "غ",
   "v": "د",
   "w": "ص",
   "x": "ط",
   "y": "غ",
   "z": "ظ"
   }_
