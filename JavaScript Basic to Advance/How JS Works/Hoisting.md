# Hoisting

In this lesson, we will explore what hoisting is and how it works in JavaScript. Hoisting is a crucial concept to understand, especially when it comes to variables and functions.

## Definition of Hoisting

Hoisting is a process whereby you can access the value of a variable or a function even before it is initialized. This means that in JavaScript, declarations are moved to the top of their scope before code execution.

## Example of Variable and Function Hoisting

Let's consider the following code:

```javascript
var age = 100;
console.log(age); // Outputs: 100

function showName() {
  console.log("My name is Prakash Sakari");
}

showName(); // Outputs: My name is Prakash Sakari
```

Here, `age` is declared and initialized to 100, and `showName` is a function that logs a message to the console.

## Hoisting with Function Declarations

Even if we invoke the function before its declaration, it still works due to hoisting:

```javascript
showName(); // Outputs: My name is Prakash Sakari

function showName() {
  console.log("My name is Prakash Sakari");
}
```

## Hoisting with Variable Declarations

Now, let's see what happens with variable declarations:

```javascript
console.log(age); // Outputs: undefined
var age = 100;
console.log(age); // Outputs: 100
```

When we try to log `age` before its declaration, we get `undefined`. This is because the variable declaration is hoisted, but its initialization is not. This is different from languages that throw an error when accessing a variable before its declaration.

## Function Expression Hoisting

Function expressions behave differently compared to function declarations:

```javascript
console.log(getUserName); // Outputs: undefined
var getUserName = function () {
  console.log("My name is Prakash Sakari");
};
console.log(getUserName); // Outputs: function() { console.log("My name is Prakash Sakari"); }
```

In this example, `getUserName` is treated as a variable. During the hoisting process, it is initialized to `undefined` first, and later assigned the function.

## Explanation of Hoisting with Execution Context

To understand hoisting, we need to delve into the execution context. The execution context consists of two phases:

**Creation Phase:**

- Variables declared with `var` are assigned `undefined`.
- Functions are assigned their definition.

**Execution Phase:**

- Code is executed line by line.

## Visualizing Hoisting with Debugger

To visualize hoisting, let's use a debugger:

1. Place a breakpoint at the start of the code.
2. Observe the values of variables and functions.

Consider the following code:

```javascript
var age = 100;
function showName() {
  console.log("My name is Prakash Sakari");
}
console.log(age);
showName();
```

When we run this code with a debugger, we can see the following:

- Before execution, `age` is `undefined`, and `showName` is a function.
- After execution, `age` is `100`, and `showName` logs the message.

## Hoisting with let and const

Hoisting with `let` and `const` is different. They are hoisted but not initialized, resulting in a `ReferenceError` if accessed before initialization:

```javascript
console.log(x); // Throws ReferenceError: Cannot access 'x' before initialization
let x = 9;

console.log(y); // Throws ReferenceError: Cannot access 'y' before initialization
const y = 10;
```

## Key Takeaways

- **Hoisting:** Variables declared with `var` and function declarations are hoisted to the top of their scope.
- **Function Expressions:** Treated as variables, and thus, initialized to `undefined` during hoisting.
- **Temporal Dead Zone:** `let` and `const` variables are hoisted but not initialized, resulting in a `ReferenceError` if accessed before initialization.
