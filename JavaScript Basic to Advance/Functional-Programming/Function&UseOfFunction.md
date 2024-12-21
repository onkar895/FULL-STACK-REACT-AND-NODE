# JavaScript Functions :

## Introduction

Functions are fundamental building blocks in JavaScript and any programming language. They allow you to write reusable code, which can be executed whenever needed. This reduces redundancy and improves code organization. In this guide, we will dive into the concept of functions, how they work, and how to use them effectively.

## What are Functions?

A function is a block of code designed to perform a particular task. You can think of functions as a way to encapsulate code that you might want to reuse multiple times throughout your program. Instead of writing the same code repeatedly, you can call the function whenever you need it.

## Basic Function Syntax

The basic syntax of a function includes:

1. The `function` keyword
2. A name for the function
3. Parentheses `()` which can contain parameters
4. Curly braces `{}` that enclose the function body

```javascript
function greetMessage() {
  console.log("Hello from GeeksforGeeks!");
}
```

## Calling a Function

To execute the code inside a function, you need to call the function by its name followed by parentheses.

```javascript
greetMessage(); // Output: Hello from GeeksforGeeks!
```

## Function Declaration

The above example demonstrates a function declaration. Here, we declare a function named `greetMessage` and then call it.

## Function Parameters and Arguments

Functions can accept inputs, known as parameters. When you call a function, you provide values for these parameters, known as arguments.

```javascript
function greetUser(name) {
  console.log(`Hello, ${name}! Welcome to GeeksforGeeks.`);
}

greetUser("Prakash"); // Output: Hello, Prakash! Welcome to GeeksforGeeks.
```

In this example, `name` is a parameter, and `"Prakash"` is an argument.

## Multiple Parameters

A function can accept multiple parameters separated by commas.

```javascript
function greetUser(name, city) {
  console.log(`Hello, ${name}! Welcome to GeeksforGeeks. Thank you for joining from ${city}.`);
}

greetUser("Prakash", "Mumbai");
// Output: Hello, Prakash! Welcome to GeeksforGeeks. Thank you for joining from Mumbai.
```

## Handling Missing Arguments

If you call a function without passing all the required arguments, the missing arguments will be `undefined`.

```javascript
greetUser("Prakash");
// Output: Hello, Prakash! Welcome to GeeksforGeeks. Thank you for joining from undefined.
```

## Practical Example: Sum of Numbers

Let's create a function that calculates the sum of numbers within a specified range.

### Exercise

Create a function `calculateSum` that accepts two parameters `min` and `max`, and returns the sum of all numbers from `min` to `max`.

```javascript
function calculateSum(min, max) {
  let sum = 0;
  for (let i = min; i <= max; i++) {
    sum += i;
  }
  return sum;
}

console.log(calculateSum(1, 10)); // Output: 55
```

## Advanced Function Concepts

### Higher-Order Functions

Functions that take other functions as arguments or return functions are called higher-order functions.

### Closures

A closure is a function that retains access to its outer scope even after the outer function has returned.

### First-Class Functions

In JavaScript, functions are first-class citizens. This means functions can be assigned to variables, passed as arguments, and returned from other functions.

## Summary

Functions are an essential part of JavaScript programming. They allow you to create reusable blocks of code, which makes your programs more modular and easier to maintain. By understanding and using functions effectively, you can write more efficient and readable code.
