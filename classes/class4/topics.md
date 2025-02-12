# Class 4

### Recursive Function:

A recursive function is a function that calls itself somewhere within the body of the function.

```javascript
const recursiveFunc = () => {
  // some code here...
  recursiveFunc();
};
```

So how do you tell the function when to **stop calling itself**? You do that using a **base condition**.

#### The Three Parts of a Recursive Function:

- The function definition.
- The base condition.
- The recursive call.

```javascript
function recursiveFunc() {
  if (baseCondition) {
    // stops recursion if condition is met
  }
  // else recursion continues
  recurse();
}
```

#### Example:

```javascript
function doSomething(n) {
  if (n === 0) {
    console.log("TASK COMPLETED!");
    return;
  }

  console.log("I'm doing something.");
  doSomething(n - 1);
}

doSomething(3);
```

#### Try for your self:

- Factorial.
- Fibo.

---

### Window: prompt() method

`window.prompt()` instructs the browser to display a **dialog** with an optional message prompting the user to input some text, and to **wait** until the user either submits the text or cancels the **dialog**.

> Under some conditions — for example, when the user switches tabs — the browser may not actually display a dialog, or may not wait for the user to submit text or to cancel the dialog.

#### Syntax:

```javascript
const message = "Whats your Name?";
const defaultValue = "asghar";

const value1 = prompt();
const value2 = prompt(message);
const value3 = prompt(message, defaultValue);
```

---

### Window: alert() method

`window.alert()` instructs the browser to display a dialog with an optional message, and to wait until the user dismisses the dialog.

> Under some conditions — for example, when the user switches tabs — the browser may not actually display a dialog, or may not wait for the user to dismiss the dialog.

#### Syntax:

```javascript
const message = "Its a good day!";

alert();
alert(message);
```

---

### Window: confirm() method

`window.confirm()` instructs the browser to display a dialog with an optional message, and to wait until the user either confirms or cancels the dialog.

> Under some conditions — for example, when the user switches tabs — the browser may not actually display a dialog, or may not wait for the user to confirm or cancel the dialog.

#### Syntax:

```javascript
const message = "Are you sure?";

const isSure1 = confirm();
const isSure2 = confirm(message);
```

---

### Exercises:

**1. Count down numbers. (_recursive_)**

--

**2. Get number divisors.**

--

**3. ListOverlap(findSameElements in 2 lists)**
_list elements are **unique!**_

--

**4. Guessing game**
