# Class 2

### Objects:

In real life, **objects** are things like: houses, cars, people, animals, or any other subjects.

**objects** have ***properties***, ***methods*** and ***variables***.

#### JavaScript Object Definition:

- Using an Object Literal
```javascript
// Create an Object
const person = {
  firstName:"John",
  lastName:"Doe",
  age:50,
  eyeColor:"blue",
  childres: []
};
```

- Using the `new` Keyword & Object Constructor
```javascript
// Create an Object
const person = new Object();

// Add Properties
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue";
```

---

### In JavaScript, Objects are King

If you Understand Objects, you Understand JavaScript.

In JavaScript, almost **"everything"** is an **object**:


- Objects are objects
- Maths are objects
- Functions are objects
- Dates are objects
- Arrays are objects
- Maps are objects
- Sets are objects

All JavaScript values, **except primitives**, are **objects**.

#### JavaScript Primitives:

A **primitive value** is a value that has no **properties** or **methods**.

`3.14` is a **primitive value**

JavaScript defines 7 types of primitive data types:


- string
- number
- boolean
- null
- undefined
- symbol
- bigint

---

#### Immutable

Primitive values are **immutable** (*they are hardcoded and cannot be changed*).

if `x = 3.14`, you can change the value of `x`, but you cannot change the value of `3.14`.

#### JavaScript Objects are Mutable

Objects are mutable: They are addressed by reference, not by value.

If person is an object, the following statement will not create a copy of person:

```javascript
const x = person;
```

The object `x` is not a copy of `person`. The object `x` is `person`.

The object `x` and the object `person` share the same **memory address**.

Any changes to `x` will also change `person`:

---

### Accessing JavaScript Properties:

```javascript
// objectName.property
let age = person.age;

//objectName["property"]
let name = person["name"];
```

We can also add new properties using the same method shown above.

---

### Deleting Properties:

The `delete` keyword deletes a property from an object:

```javascript
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};

delete person.age;
delete person["eyeColor"];
```

---

### Nested Objects:

Property values in an object can be other objects:

```javascript
myObj = {
  name:"John",
  age:30,
  myCars: {
    car1:"Ford",
    car2:"BMW",
    car3:"Fiat"
  }
}
```

---

### JavaScript Object Methods:


**Object methods** are **actions** that can be performed on **objects**.

A method is a **function definition** stored as a **property value**.

```javascript
const person1 = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};

// using arrow function
/*
 * arrow functions have no access to `this` keyword.
 */

const sumIt = (x, y) => x + y

const nums = {
  n: 1,
  m: 2,
  sumIt: sumIt
}

console.log(nums.sumIt(1,2));
```

In the example above, `this` refers to the **person object**.

> More on methods on **OOP** topic.

> Take a look at [Maps](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map) and [Sets](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set) for next class! (seminar)

---

### Exercises:

1. Write a program to count the number of characters (character frequency) in a string. 
**Sample String:** `google.com`
**Expected Result:** `{'g': 2, 'o': 3, 'l': 1, 'e': 1, '.': 1, 'c': 1, 'm': 1}`

--

2. Write a program to add `'ing'` at the end of a given string 
(length should be at least 3).
If the given string **already** ends with `'ing'`, add `'ly'` **instead**.
If the string length of the given string is **less than** `3`, leave it **unchanged**. 
**Sample String:** `'abc'`
**Expected Result:** `'abcing'`
**Sample String:** `'string'`
**Expected Result:** `'stringly'`

--

3. Write a program to get a string from a given string 
where all occurrences of its first char have been changed to `'$'`, 
except the first char itself. 
**Sample String:** `'restart'`
**Expected Result:** `'resta$t'`

--

4. Write a function that takes a list of words and return the 
longest word and the length of the longest one. 
**Sample Input:** `[mohsen, amir, mahsa, mehdi]`
**Longest word:** `mohsen`
Length of the longest word: `6`