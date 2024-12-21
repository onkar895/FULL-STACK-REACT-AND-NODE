# JavaScript Anonymous Functions Guide

## Introduction

Anonymous functions in JavaScript are functions without a name or identity. They are often used when a function is only needed once or as an argument to other functions. This guide explores what anonymous functions are, how they work, and where they can be applied.

## What are Anonymous Functions?

An anonymous function is simply a function that does not have a name. This can be useful in various scenarios, such as callbacks, event handlers, or immediately invoked function expressions (IIFE).

## Basic Syntax

The basic syntax for creating an anonymous function looks like this:

```javascript
let anonymousFunction = function () {
  console.log("Hello from GeeksforGeeks!");
};
```

To call this function, you simply use the variable name followed by parentheses:

```javascript
anonymousFunction(); // Output: Hello from GeeksforGeeks!
```

## Function Expression

When you assign an anonymous function to a variable, it is known as a function expression. This makes the variable a function, not just a simple variable.

```javascript
let greet = function () {
  console.log("Hello from GeeksforGeeks!");
};

greet(); // Output: Hello from GeeksforGeeks!
```

## Type of Anonymous Function

To confirm that the variable holding the anonymous function is indeed a function, you can use the `typeof` operator:

```javascript
console.log(typeof greet); // Output: function
```

## Hoisting and Anonymous Functions

Unlike function declarations, anonymous functions assigned to variables do not get hoisted in the same way. This means you cannot call them before they are defined.

```javascript
greet(); // Error: Cannot access 'greet' before initialization

let greet = function () {
  console.log("Hello from GeeksforGeeks!");
};
```

## Named Function Expressions

A named function expression is an anonymous function with a name. This name is local to the function's scope and can be useful for recursion or debugging.

```javascript
let greet = function greetMessage() {
  console.log("Hello from GeeksforGeeks!");
};

greet(); // Output: Hello from GeeksforGeeks!
```

### Calling the Named Function

While you can call the named function using the variable it is assigned to, trying to call the function by its name outside of its scope will result in an error:

```javascript
greetMessage(); // Error: greetMessage is not defined
```

Inside the function, however, the name can be used for recursive calls:

```javascript
let factorial = function fact(n) {
  if (n <= 1) return 1;
  return n * fact(n - 1);
};

console.log(factorial(5)); // Output: 120
```

## Practical Use Cases

### Callback Functions

Anonymous functions are commonly used as callback functions, especially in asynchronous operations like event handling, timers, or AJAX requests.

```javascript
setTimeout(function () {
  console.log("This is a callback function!");
}, 1000);
```

### Immediately Invoked Function Expressions (IIFE)

An IIFE is a function that is executed immediately after it is defined. This is often used to create a new scope to avoid polluting the global scope.

```javascript
(function () {
  console.log("IIFE executed immediately!");
})();
```

### Event Handlers

Anonymous functions are frequently used in event handling for adding interactivity to web pages.

```javascript
document.getElementById("myButton").addEventListener("click", function () {
  alert("Button was clicked!");
});
```

## Conclusion

Anonymous functions are a powerful feature in JavaScript that allow for more flexible and concise code. By understanding and using them effectively, you can write cleaner, more maintainable code. Whether you're using them as callbacks, in IIFEs, or as event handlers, anonymous functions provide a versatile tool for JavaScript developers.
