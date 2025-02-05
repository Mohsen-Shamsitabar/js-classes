# Class 1

### Writing Javascript:

1. Directly in a script tag.

```html
<script>
  // javascript can be written inside the script tag.
  const name = "mohsen";

  console.log(name);
</script>
```

2. Use script tag with external `.js` file as source.

```html
<script src="myLogicFile.js"></script>
```

---

### Comments:

1. Using `//`
2. Using `/** */`

```javascript
// This is used for 1 line.

/**
 * This
 * is
 * for
 * multiline.
 */
```

---

### Variables:

1. Using `var`
2. Using `let`
3. Using `const`

```javascript
var a = 0;
let b = 1;
const c = 2;
```

> [Click me](https://www.w3schools.com/js/js_variables.asp) for more details.

---

### Operations:

1. Addition: +
2. Subtraction: -
3. Multiplication: \*
4. Exponentiation: \*\*
5. Division: /
6. Modulus (Division Remainder): %
7. Increment: ++
8. Decrement: --

```javascript
const add = 1 + 1; // 2
const sub = 1 - 1; // 0
const mult = 2 * 3; // 6
const exp = 2 ** 3; // 8
const div = 4 / 2; // 2
const mod = 3 % 2; // 1

let number = 5;

number++;
console.log(number); // 6

number--;
console.log(number); // 5
```

> "++number" and "number++" are **different!**

> [Assignment Operators](https://www.w3schools.com/js/js_assignment.asp)

---

### Data Types:

1. String
2. Number
3. Boolean
4. Undefined
5. Null
6. Object

```javascript
const str = "meow";
const num = 2025;
const isEven = false;
const happines = undefined;
const time = null;

const person = {
  name: "mohsen",
  age: 22,
};

const colorCode = {
  1: "red",
  2: "blue",
};

const nested = {
  child: {
    a: {
      name: "meow2",
    },
    name: "meow1",
  },
  name: "parent",
};
```

> We can check the data type using `typeof` keyword before a variable.

```javascript
console.log(typeof "meow"); // "string"
```

---

### Functions:

1. Normal Functions
2. Arrow Functions

```javascript
function printMeow() {
  console.log("Meow");
  return;
}

const printHello = () => {
  console.log("HelloWorld");
  return;
};
```

> More details [Here](https://www.freecodecamp.org/news/the-difference-between-arrow-functions-and-normal-functions/)

---

### Conditional Statements:

1. Using `if/else`
2. Using `switch/case`

```javascript
let a = 10;

if (a > 20) {
  // Do something
} else if (a === 10) {
  // Do something
} else {
  // Do something
}

switch (a) {
  case 20: {
    // Do something
    break;
  }
  case 10: {
    // Do something
    break;
  }
  default: {
    // Do something
    break;
  }
}
```

---

### Loops:

We have 2 types of programming: Imperetive & Declarative

> More details [Here](https://dev.to/siddharthshyniben/explained-imperative-vs-declarative-programming-577g)

#### Imperetive Approach:

1. Using `for`
2. Using `for in`
3. Using `for of`
4. Using `while`

```javascript
const myNums = [1, 2, 3];
const myObj = {
  name: "mohsen",
  age: 22,
};

for (let i = 0; i < myNums.length; i++) {
  const num = myNums[i];
  // Do something.
}

for (const item in myObj) {
  // only for objects.
  // Do something.
}

for (const item of myNums) {
  // only for arrays (iterables).
  // Do something.
}

while (10 > 20) {
  // Do something.
}
```

#### Declarative Approach:

Using methods like `forEach()`, `map()`, `filter()` and more...
Example:

```javascript
const myArray = [1, 2, 3, 4];
const evenNums = myArray.filter(num => num % 2 === 0);
```

We can use `break` and `continue` in loops, and it functions the same.

---

### String Methods:

Here we will review most commonly used methods in string data type.

1. **concat**
2. **includes**
3. **slice/substring**
4. **split**

---

### Array Methods:

Here we will review most commonly used methods in array data type.

1. **concat**
2. **every/some**
3. **fill**
4. **filter**
5. **find/findIndex**
6. **forEach**
7. **includes**
8. **join**
9. **map**
10. **pop/push**
11. **reduce**
12. **slice**
13. **splice**

---

### Exercises:

1. Check if a number is even.
2. Calculate sum of all the numbers in an array. (Imperetive/Declarative)
3. Push last element and first element of array in a new array and return it.
