# JavaScript Variables :

## What is a Variable?

A variable is a named placeholder that holds data or information. In simpler terms, variables are used to store values that can be used and manipulated throughout your code. Think of variables as containers that hold different types of data, such as text, numbers, or even more complex structures.

## Why Use Variables?

Let's consider an e-commerce application where you need to add products to a wishlist or a cart. JavaScript needs to store the information about these products to manage them effectively. This is where variables come into play. By storing data in variables, you can easily reference and manipulate that data later in your code.

## How to Create Variables

There are three main ways to declare variables in JavaScript: `var`, `let`, and `const`. Each has its own use case and scope rules.

### Declaring Variables with `var`

The `var` keyword is used to declare a variable. Here's how you can create and use a variable with `var`:

```javascript
var message;
message = "Hello, Geeks!";
console.log(message); // Outputs: Hello, Geeks!
```

**Output**

```
Hello, Geeks!
```

In the above example, we first declare a variable named `message` using `var`. We then assign the string `"Hello, Geeks!"` to it. Finally, we use `console.log()` to display the value of the `message` variable.

### Declaring Variables with `let`

The `let` keyword is a more modern way to declare variables and is generally preferred over `var` due to its block-scoping feature.

```javascript
let text = "JavaScript is the best!";
console.log(text); // Outputs: JavaScript is the best!
```

**Output**

```
JavaScript is the best!
```

Here, we declare a variable named `text` and assign it the value `"JavaScript is the best!"`. We then log the value of `text` to the console.

### Declaring Variables with `const`

The `const` keyword is used to declare variables that are meant to be constants, meaning their values should not change once assigned.

```javascript
const number = 10;
console.log(number); // Outputs: 10
```

**Output**

```
10
```

With `const`, you must assign a value at the time of declaration, and this value cannot be changed later in your code.

## Variable Assignment and Re-assignment

Variables declared with `var` and `let` can be reassigned new values, while variables declared with `const` cannot.

```javascript
var message = "Hello, Geeks!";
message = "Hello, GeeksforGeeks!";
console.log(message); // Outputs: Hello, GeeksforGeeks!

let text = "JavaScript is the best!";
text = "JavaScript is awesome!";
console.log(text); // Outputs: JavaScript is awesome!

const number = 10;
number = 20; // Error: Assignment to constant variable.
```

**Output**

```
Hello, GeeksforGeeks!
JavaScript is awesome!
Error: Assignment to constant variable.
```

## Why Use `let` and `const` over `var`?

1. **Block Scoping**: `let` and `const` are block-scoped, meaning they are only accessible within the block they are defined. `var` is function-scoped, which can lead to unexpected behavior.
2. **Re-assignment**: `const` ensures that variables cannot be reassigned, which helps prevent accidental changes to important values.

### Example: Updating Variables

Consider a practical example where we want to log a message multiple times and update it:

```javascript
let message = "Hello, Geeks!";
console.log(message); // Outputs: Hello, Geeks!
message = "Hello, GeeksforGeeks!";
console.log(message); // Outputs: Hello, GeeksforGeeks!

const year = 2024;
console.log(year); // Outputs: 2024
// year = 2025; // Error: Assignment to constant variable.
```

**Output**

```
Hello, Geeks!
Hello, GeeksforGeeks!
```

In the example above, we first declare and log the message variable. We then update message and log the new value. We also declare a const variable year and attempt to change its value, resulting in an error.
