# JavaScript Ternary Operator

Ternary operators offer a compact way to write conditional expressions in JavaScript. They can be used as a shorthand for if-else statements, making your code more concise and readable. In this lesson, we'll explore how to use ternary operators and compare them to traditional if-else statements.

## Understanding Ternary Operators

A `ternary operator` is a one-liner shorthand for if-else statements. It uses the syntax:

```javascript
condition ? expressionIfTrue : expressionIfFalse;
```

Let's start by converting a simple if-else condition into a ternary operator.

## Traditional if-else Statement

Consider the following if-else statement:

```js
let totalMarks = 60;

if (totalMarks < 40) {
  console.log("You need to work hard.");
} else {
  console.log("You cleared the exam.");
}
```

Output:

```js
You cleared the exam.
```

This code checks if the totalMarks are less than 40. If true, it prints "You need to work hard." Otherwise, it prints "You cleared the exam."

## Converting to a Ternary Operator

The same logic can be written using a ternary operator:

```js
let totalMarks = 60;

console.log(totalMarks < 40 ? "You need to work hard." : "You cleared the exam.");
```

Output:

```js
You cleared the exam.
```

Here, the condition totalMarks < 40 is followed by a question mark (?). The expression after the question mark ("You need to work hard.") is executed if the condition is true. The expression after the colon (:) is executed if the condition is false.

## Assigning Result to a Variable

You can also assign the result of a ternary operator to a variable:

```js
let totalMarks = 60;

let result = totalMarks < 40 ? "You need to work hard." : "You cleared the exam.";
console.log(result);
```

Output:

```js
You cleared the exam.
```

This way, the appropriate message is assigned to the variable result, which is then printed to the console.

## Example with User Input

Let's take an example where we compare three strings and print the smallest one. Instead of taking user input, we'll use predefined strings:

```js
const firstString = "apple";
const secondString = "banana";
const thirdString = "watermelon";

// Find the length of each string
const lengthOfFirstString = firstString.length;
const lengthOfSecondString = secondString.length;
const lengthOfThirdString = thirdString.length;

// Compare the lengths to find the smallest string using ternary operator
const smallestString =
  lengthOfFirstString < lengthOfSecondString && lengthOfFirstString < lengthOfThirdString
    ? firstString
    : lengthOfSecondString < lengthOfFirstString && lengthOfSecondString < lengthOfThirdString
    ? secondString
    : lengthOfThirdString < lengthOfFirstString && lengthOfThirdString < lengthOfSecondString
    ? thirdString
    : "Two or more strings have the same length";

console.log(`The smallest string is: ${smallestString}`);
```

Output:

```js
The smallest string is: apple
```

## Nested Ternary Operators

You can also use nested ternary operators, but be cautious as it can make the code harder to read:

```js
let score = 85;

let grade = score > 90 ? "A" : score > 80 ? "B" : score > 70 ? "C" : score > 60 ? "D" : "F";

console.log(`Your grade is: ${grade}`);
```

Output:

```js
Your grade is: B
```

In this example, the ternary operators are nested to determine the grade based on the score.

## Example: Using Ternary Operators to Replace if-else Statements

Consider a scenario where we grade a student's performance based on their total marks. Here's how we typically write it using if-else statements:

```js
let totalMarks = 60;

if (totalMarks < 40) {
  console.log("You need to work hard.");
} else if (totalMarks < 60) {
  console.log("B grade");
} else if (totalMarks < 75) {
  console.log("A grade");
} else if (totalMarks < 85) {
  console.log("A+ grade");
} else {
  console.log("Genius");
}
```

Output:

```js
A grade
```

## Converting to Ternary Operators

We can achieve the same logic using a single line of code with ternary operators:

```js
let totalMarks = 60;

const result = totalMarks < 40 ? "You need to work hard." : totalMarks < 60 ? "B grade" : totalMarks < 75 ? "A grade" : totalMarks < 85 ? "A+ grade" : "Genius";

console.log(result);
```

Output:

```js
A grade
```

Here, we use nested ternary operators to handle multiple conditions. Each ternary operator checks a condition, and if the condition is true, it returns the corresponding expression. If the condition is false, it proceeds to the next ternary operator.

## Detailed Example with User Input

Let's rewrite our earlier example, where we take three strings and print the smallest one, using ternary operators. This time, let's take input from the user.

```js
const readlineSync = require("readline-sync");

// Get input from the user
const firstString = readlineSync.question("Enter the first string: ");
const secondString = readlineSync.question("Enter the second string: ");
const thirdString = readlineSync.question("Enter the third string: ");

// Find the length of each string
const lengthOfFirstString = firstString.length;
const lengthOfSecondString = secondString.length;
const lengthOfThirdString = thirdString.length;

// Use ternary operators to determine the smallest string
const smallestString =
  lengthOfFirstString < lengthOfSecondString && lengthOfFirstString < lengthOfThirdString
    ? firstString
    : lengthOfSecondString < lengthOfFirstString && lengthOfSecondString < lengthOfThirdString
    ? secondString
    : lengthOfThirdString < lengthOfFirstString && lengthOfThirdString < lengthOfSecondString
    ? thirdString
    : "Two or more strings have the same length";

console.log(`The smallest string is: ${smallestString}`);
```

## Using Ternary Operators with Multiple Conditions

Let's revisit the grading example and add more complexity using ternary operators:

```js
let totalMarks = 60;

const result = totalMarks < 40 ? "You need to work hard." :
              totalMarks < 60 ? "B grade" :
              totalMarks < 75 ? "A grade" :
```

## Advantages of Ternary Operators

- Conciseness: Ternary operators make the code shorter.
- Readability: For simple conditions, ternary operators can make the code easier to read.
- Single-line expressions: Ternary operators are useful for inline assignments.

## Drawbacks of Ternary Operators

- Complexity: For multiple or nested conditions, ternary operators can become hard to read and maintain.
- Debugging: Debugging nested ternary operators can be more challenging compared to if-else statements.
