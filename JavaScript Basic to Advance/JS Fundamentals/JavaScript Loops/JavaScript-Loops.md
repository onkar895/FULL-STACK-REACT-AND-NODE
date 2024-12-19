# JavaScript Loops

## Overview

Loops are fundamental constructs in programming that allow us to execute a block of code repeatedly. JavaScript provides several types of loops, each with unique use cases and syntax. In this guide, we will explore the most commonly used loops: the `for` loop, `while` loop, and `do while` loop. By the end of this guide, you will have a solid understanding of how to use these loops effectively in your JavaScript code.

---

## For Loop

The `for` loop is one of the most commonly used loops in JavaScript. It provides a concise way to iterate over a range of values and is often preferred over the `while` loop due to its compact syntax.

### Syntax

```javascript
for (initialization; condition; increment) {
  // Code to be executed in each iteration
}
```

- **Initialization**: Executed once before the loop starts, typically initializes a counter variable.
- **Condition**: Evaluated before each iteration. If true, the loop continues; if false, it stops.
- **Increment**: Executed after each iteration, usually updates the counter variable.

### Example: Printing "Hello World" 10 Times

```javascript
for (let i = 0; i < 10; i++) {
  console.log("Hello World!");
}
```

**Output:**

```
Hello World!
Hello World!
Hello World!
Hello World!
Hello World!
Hello World!
Hello World!
Hello World!
Hello World!
Hello World!
```

**Detailed Explanation:**

1. **Initialization**: `let i = 0` sets the starting value of `i`.
2. **Condition**: `i < 10` is checked before each iteration.
3. **Code Execution**: `console.log("Hello World!")` is executed if the condition is true.
4. **Increment**: `i++` increases `i` by 1 after each iteration.
   Steps 2-4 repeat until the condition is false.

---

## Nested For Loop

Nesting for loops is crucial in JavaScript, enabling iteration over multi-dimensional data structures or performing complex tasks.

```js
for (let i = 0; i < outerLimit; i++) {
  for (let j = 0; j < innerLimit; j++) {
    // Code to execute
  }
}
```

`Example`:

```js
for (let i = 1; i <= 10; i++) {
  let row = "";
  for (let j = 1; j <= 10; j++) {
    row += i * j + "\t";
  }
  console.log(row);
}
```

```js
const obj = { a: 1, b: 2, c: 3 };

for (let key in obj) {
  console.log(`Key: ${key}`);
  for (let i = 0; i < 3; i++) {
    console.log(`  Value multiplied by ${i}: ${obj[key] * i}`);
  }
}
```

## While Loop

A `while` loop is a control flow statement that allows code to be executed repeatedly based on a Boolean condition. It is also called an **entry control loop** because the condition is checked before the loop executes.

### Syntax

```javascript
while (condition) {
  // Code to be executed
}
```

### Example: Printing "Hello World" 10 Times

```javascript
let i = 1;
while (i <= 10) {
  console.log("Hello World!");
  i++;
}
```

**Output:**

```
Hello World!
Hello World!
Hello World!
Hello World!
Hello World!
Hello World!
Hello World!
Hello World!
Hello World!
Hello World!
```

### Flowchart

1. The **condition** is evaluated.
2. If true, the loop body executes.
3. After execution, the variable is updated.
4. Steps 1-3 repeat until the condition is false.

---

## Do While Loop

The `do while` loop is similar to the `while` loop but guarantees that the code inside the loop is executed at least once, even if the condition is false. It is an **exit control loop** because the condition is checked after the loop executes.

### Syntax

```javascript
do {
  // Code to be executed
} while (condition);
```

### Example: Printing Numbers from 0 to 9

```javascript
let i = 0;
do {
  console.log(i);
  i++;
} while (i < 10);
```

**Output:**

```
0
1
2
3
4
5
6
7
8
9
```

**Key Difference:**
Unlike the `while` loop, the `do while` loop ensures that the statements inside the loop execute at least once before the condition is evaluated.

---

## Practical Example: Printing Characters of a String

Loops are commonly used to iterate over data structures like strings or arrays. Here’s an example:

### Example: Iterating Over a String

```javascript
const name = "Prakash Sarkari";
for (let i = 0; i < name.length; i++) {
  console.log(name[i]);
}
```

**Output:**

```
P
r
a
k
a
s
h

S
a
r
k
a
r
i
```

---

## Conclusion

Understanding JavaScript loops is essential for controlling program flow and performing repetitive tasks efficiently. The `for` loop, `while` loop, and `do while` loop each have specific use cases:

- Use a `for` loop when the number of iterations is known.
- Use a `while` loop when the number of iterations depends on a condition.
- Use a `do while` loop when the code must execute at least once.

By mastering these loops, you can write more efficient and effective JavaScript code.
