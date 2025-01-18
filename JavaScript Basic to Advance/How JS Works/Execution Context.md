# Execution Context in JavaScript

## Introduction

Execution context is a fundamental concept in JavaScript that dictates how the code is executed. Unlike many other programming languages, JavaScript handles code execution in a unique way, making it essential to understand this concept thoroughly.

## Browser and JavaScript Engine

When a browser encounters JavaScript code, it activates the JavaScript engine. Each browser has its own JavaScript engine (e.g., V8 in Chrome, SpiderMonkey in Firefox).

**Browser -> JavaScript Engine**

## Execution Context

The JavaScript engine creates an environment called the execution context to execute the code. This environment manages the memory allocation and the execution of the code.

### Types of Execution Context

- **Global Execution Context (GEC):** Created when the JavaScript engine starts executing the code. There is only one GEC per JavaScript file.
- **Functional Execution Context (FEC):** Created whenever a function is invoked. There can be multiple FECs depending on the number of function calls.

### Components of Execution Context

- **Variable Object:** Contains variable and function declarations.
- **Scope Chain:** Manages the scope and scope chain.
- **`this` Keyword:** Sets the value of `this`.

### Creation of Execution Context

Execution context is created in two phases:

1. **Creation Phase:**

   - Memory allocation for variables and functions.
   - Variables declared with `var` are assigned `undefined`.
   - Function declarations are assigned the function definition.

2. **Execution Phase:**
   - Code is executed line by line.
   - JavaScript is a single-threaded synchronous language, meaning it executes one line of code at a time in order.

## Representation of Global Execution Context:

![Global Execution Context](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/9bg76llo0rizat9glec7.jpg)

## Representation of Functional Execution Context:

![Functional Execution Context](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/1gfljol6q493bth8jzi2.jpg)

### Example

```javascript
console.log("Global Context Start");

function foo() {
  console.log("Inside foo");
}

function bar() {
  console.log("Inside bar");
  foo();
}

bar();
console.log("Global Context End");
```

### Global Execution Context (GEC)

**Creation Phase:**

- `console` is identified.
- `foo` and `bar` are function declarations.

**Execution Phase:**

- `console.log("Global Context Start")` is executed.
- `bar()` is called, creating a new FEC.

### Functional Execution Context (FEC)

**When `bar()` is called:**

**Creation Phase:**

- `console` is identified.
- `foo` is identified within `bar`.

**Execution Phase:**

- `console.log("Inside bar")` is executed.
- `foo()` is called, creating a new FEC.

**When `foo()` is called:**

**Creation Phase:**

- `console` is identified.

**Execution Phase:**

- `console.log("Inside foo")` is executed.

## Call Stack

The call stack maintains the order of execution contexts:

- **Start:**  
  Call Stack: `[Global Execution Context]`

- **Executing `bar()`:**  
  Call Stack: `[Global Execution Context, bar Execution Context]`

- **Executing `foo()` inside `bar`:**  
  Call Stack: `[Global Execution Context, bar Execution Context, foo Execution Context]`

- **Completion of `foo()`:**  
  Call Stack: `[Global Execution Context, bar Execution Context]`

- **Completion of `bar()`:**  
  Call Stack: `[Global Execution Context]`

- **Completion of Global Execution:**  
  Call Stack: `[]`

## Importance of Understanding Execution Context

Understanding execution context is crucial for several reasons:

- **Code Execution:** Helps in understanding how JavaScript executes code line by line.
- **Debugging:** Aids in debugging by showing the sequence of function calls.
- **Memory Management:** Helps in understanding how memory is allocated and deallocated.
