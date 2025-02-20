# Class 5

### Object Oriented Programming:

### Objects:

An Object is a **unique** entity that contains **properties** and **methods**. For example _“a car”_ is a real-life Object, which has some characteristics like _color_, _type_, _model_, and _horsepower_ and performs certain **actions** like _driving_. The characteristics of an Object are called **Properties** in Object-Oriented Programming and the actions are called **methods**. An Object is an **instance** of a class. _Objects are everywhere in JavaScript, almost every element is an Object whether it is a function, array, or string._

**Note:** A Method in javascript is a property of an object whose value is a function.

#### Creating an Object:

The object can be created in two ways in JavaScript:

- **Object Literal**

```javascript
// Defining object
let person = {
  first_name: "Mukul",
  last_name: "Latiyan",

  //object within object
  phone_number: {
    mobile: "12345",
    landline: "6789",
  },

  //method
  getFunction: function () {
    return `The name of the person is 
          ${person.first_name} ${person.last_name}`;
  },
};
```

- **Object Constructor**
  This is the old way, now we use `class` keyword.

```javascript
// Using a constructor (the old way!)
function person(first_name, last_name) {
  this.first_name = first_name;
  this.last_name = last_name;
}

// Creating new instances of person object
let person1 = new person("Mukul", "Latiyan");
let person2 = new person("Rahul", "Avasthi");
```

---

### Classes:

Classes are **blueprints** of an Object. A class can have many Objects because the class is a template while Objects are **instances** of the class or the concrete implementation.
Before we move further into implementation, we should know unlike other Object Oriented languages there are **no classes in JavaScript** we have only Object. To be more precise, JavaScript is a prototype-based Object Oriented Language, which means it doesn’t have classes, rather it defines behaviors using a constructor function and then reuses it using the prototype.

```javascript
// Defining class using es6
class Vehicle {
  constructor(name, maker, engine) {
    this.name = name;
    this.maker = maker;
    this.engine = engine;
  }

  getDetails() {
    return `The name of the bike is ${this.name}.`;
  }
}

// Making object with the help of the constructor
let bike1 = new Vehicle("Hayabusa", "Suzuki", "1340cc");
let bike2 = new Vehicle("Ninja", "Kawasaki", "998cc");
```

#### Important Concepts

- **Abstraction:** Abstraction means displaying only essential information and hiding the details. Data abstraction refers to providing only essential information about the data to the outside world, hiding the background details or implementation.

```javascript
class ClassWithPrivate {
  #privateField;
  #privateFieldWithInitializer = 42;

  #privateMethod() {
    // …
  }

  static #privateStaticField;
  static #privateStaticFieldWithInitializer = 42;

  static #privateStaticMethod() {
    // …
  }
}
```

```javascript
class ClassWithStaticMethod {
  static staticProperty = "someValue";

  static staticMethod() {
    return "static method has been called.";
  }

  static {
    console.log("Class static initialization block called");
  }
}

console.log(ClassWithStaticMethod.staticProperty); // Expected output: "someValue"
console.log(ClassWithStaticMethod.staticMethod()); // Expected output: "static method has been called."
```

> **Private properties** get created by using a hash `#` prefix and cannot be legally referenced outside of the class.

> **Static properties** cannot be directly accessed on instances of the class. Instead, they're accessed on the class itself.

- **Encapsulation:** The process of wrapping properties and functions within a single unit is known as encapsulation.

> Sometimes encapsulation refers to the hiding of data or data Abstraction which means representing essential features hiding the background detail. Most of the OOP languages provide access modifiers to restrict the scope of a variable, but there are no such access modifiers in JavaScript, **but there are ways in TypeScript!**

- **Inheritance:** It is a concept in which some properties and methods of an Object are being used by another Object. Unlike most of the OOP languages where classes inherit classes, JavaScript Objects inherit Objects i.e. certain features (property and methods) of one object can be reused by other Objects.

```javascript
// Inheritance example
class person {
  constructor(name) {
    this.name = name;
  }

  // method to return the string
  toString() {
    return `Name of person: ${this.name}`;
  }
}

class student extends person {
  constructor(name, id) {
    // super keyword for calling the above
    // class constructor
    super(name);
    this.id = id;
  }

  toString() {
    return `${super.toString()},
        Student ID: ${this.id}`;
  }
}

let student1 = new student("Mukul", 22);
```

> **Note:** The Person and Student objects both have the same method (i.e toString()), this is called **Method Overriding**. Method Overriding allows a method in a child class to have the same name(polymorphism) and method signature as that of a parent class.

> In the above code, the `super` keyword is used to refer to the immediate parent class’s instance variable.

- **Polymorphism:** Polymorphism is one of the core concepts of object-oriented programming languages. Polymorphism means the same function with different signatures is called many times. In real life, for example, a boy at the same time may be a student, a class monitor, etc. So a boy can perform different operations at the same time. Polymorphism can be achieved by method overriding and method overloading

---

### Exercises:

**1. Create a `shape` class that has x, y as attributes.**

**2. Create `circle` and `rectangle` classes inhereting the `shape` class with methods of calculation its area and perimeter.**
